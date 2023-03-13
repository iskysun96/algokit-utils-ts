import { describe, test } from '@jest/globals'
import algosdk from 'algosdk'
import invariant from 'tiny-invariant'
import { localNetFixture } from '../tests/fixtures/localnet-fixture'
import { getTestAccount } from './account'
import { AlgoAmount } from './algo-amount'
import { Arc2TransactionNote, encodeTransactionNote, MultisigAccount, sendGroupOfTransactions, sendTransaction } from './transaction'
import { transferAlgos } from './transfer'

describe('transaction', () => {
  const localnet = localNetFixture()

  const getTestTransaction = async (amount?: number) => {
    return algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: localnet.context.testAccount.addr,
      to: localnet.context.testAccount.addr,
      amount: amount ?? 1,
      suggestedParams: await localnet.context.algod.getTransactionParams().do(),
    })
  }

  test('Transaction is sent and waited for', async () => {
    const { algod, testAccount } = localnet.context
    const txn = await getTestTransaction()
    const { transaction, confirmation } = await sendTransaction(algod, txn, testAccount)

    expect(transaction.txID()).toBe(txn.txID())
    expect(confirmation?.['confirmed-round']).toBeGreaterThanOrEqual(txn.firstRound)
  })

  test('Transaction is capped by low min txn fee', async () => {
    const { algod, testAccount } = localnet.context
    const txn = await getTestTransaction()
    await expect(async () => {
      await sendTransaction(algod, txn, testAccount, {
        maxFee: AlgoAmount.MicroAlgos(1),
      })
    }).rejects.toThrowError(
      'Cancelled transaction due to high network congestion fees. ' +
        'Algorand suggested fees would cause this transaction to cost 1000 µALGOs. ' +
        'Cap for this transaction is 1 µALGOs.',
    )
  })

  test('Transaction cap is ignored if flat fee set', async () => {
    const { algod, testAccount } = localnet.context
    const txn = await getTestTransaction()
    txn.flatFee = true
    await sendTransaction(algod, txn, testAccount, {
      maxFee: AlgoAmount.MicroAlgos(1),
    })
  })

  test('Transaction cap is ignored if higher than fee', async () => {
    const { algod, testAccount } = localnet.context
    const txn = await getTestTransaction()
    const { confirmation } = await sendTransaction(algod, txn, testAccount, {
      maxFee: AlgoAmount.MicroAlgos(1000_000),
    })

    expect(confirmation?.txn.txn.fee).toBe(1000)
  })

  test('Transaction group is sent', async () => {
    const { algod, testAccount } = localnet.context
    const txn1 = await getTestTransaction(1)
    const txn2 = await getTestTransaction(2)

    const { confirmations } = await sendGroupOfTransactions(
      {
        transactions: [
          {
            transaction: txn1,
            signer: testAccount,
          },
          {
            transaction: txn2,
            signer: testAccount,
          },
        ],
      },
      algod,
    )

    invariant(confirmations)
    invariant(confirmations[0].txn.txn.grp)
    invariant(confirmations[1].txn.txn.grp)
    invariant(txn1.group)
    invariant(txn2.group)
    expect(confirmations.length).toBe(2)
    expect(confirmations[0]['confirmed-round']).toBeGreaterThanOrEqual(txn1.firstRound)
    expect(confirmations[1]['confirmed-round']).toBeGreaterThanOrEqual(txn2.firstRound)
    expect(Buffer.from(confirmations[0].txn.txn.grp).toString('hex')).toBe(Buffer.from(txn1.group).toString('hex'))
    expect(Buffer.from(confirmations[1].txn.txn.grp).toString('hex')).toBe(Buffer.from(txn2.group).toString('hex'))
  })

  test('Multisig single account', async () => {
    const { algod, testAccount } = localnet.context

    // Setup multisig
    const multisig = new MultisigAccount(
      {
        addrs: [testAccount.addr],
        threshold: 1,
        version: 1,
      },
      [testAccount],
    )

    // Fund multisig
    await transferAlgos(
      {
        from: testAccount,
        to: multisig.addr,
        amount: AlgoAmount.Algos(1),
      },
      algod,
    )

    // Use multisig
    await transferAlgos(
      {
        from: multisig,
        to: testAccount.addr,
        amount: AlgoAmount.MicroAlgos(500),
      },
      algod,
    )
  })

  test('Multisig double account', async () => {
    const { algod, testAccount } = localnet.context
    const account2 = await getTestAccount(
      {
        initialFunds: AlgoAmount.Algos(10),
        suppressLog: true,
      },
      algod,
    )

    // Setup multisig
    const multisig = new MultisigAccount(
      {
        addrs: [testAccount.addr, account2.addr],
        threshold: 2,
        version: 1,
      },
      [testAccount, account2],
    )

    // Fund multisig
    await transferAlgos(
      {
        from: testAccount,
        to: multisig.addr,
        amount: AlgoAmount.Algos(1),
      },
      algod,
    )

    // Use multisig
    await transferAlgos(
      {
        from: multisig,
        to: testAccount.addr,
        amount: AlgoAmount.MicroAlgos(500),
      },
      algod,
    )
  })
})

describe('transaction node encoder', () => {
  test('null', () => {
    expect(encodeTransactionNote(null)).toBeUndefined()
  })
  test('undefined', () => {
    expect(encodeTransactionNote(undefined)).toBeUndefined()
  })
  test('string', () => {
    expect(encodeTransactionNote('abc')).toMatchInlineSnapshot(`
      Uint8Array [
        97,
        98,
        99,
      ]
    `)
  })
  test('object', () => {
    expect(encodeTransactionNote({ a: 'b' })).toMatchInlineSnapshot(`
      Uint8Array [
        123,
        34,
        97,
        34,
        58,
        34,
        98,
        34,
        125,
      ]
    `)
  })
  test('arc-0002', () => {
    expect(
      encodeTransactionNote({
        dAppName: 'a',
        format: 'u',
        data: 'abc',
      } as Arc2TransactionNote),
    ).toMatchInlineSnapshot(`
      Uint8Array [
        97,
        58,
        117,
        97,
        98,
        99,
      ]
    `)
  })
})
