[@algorandfoundation/algokit-utils](../README.md) / [types/composer](../modules/types_composer.md) / default

# Class: default

[types/composer](../modules/types_composer.md).default

AlgoKit Composer helps you compose and execute transactions as a transaction group.

## Table of contents

### Constructors

- [constructor](types_composer.default.md#constructor)

### Properties

- [algod](types_composer.default.md#algod)
- [atc](types_composer.default.md#atc)
- [defaultValidityWindow](types_composer.default.md#defaultvaliditywindow)
- [defaultValidityWindowIsExplicit](types_composer.default.md#defaultvaliditywindowisexplicit)
- [getSigner](types_composer.default.md#getsigner)
- [getSuggestedParams](types_composer.default.md#getsuggestedparams)
- [txnMethodMap](types_composer.default.md#txnmethodmap)
- [txns](types_composer.default.md#txns)

### Methods

- [addAppCall](types_composer.default.md#addappcall)
- [addAssetConfig](types_composer.default.md#addassetconfig)
- [addAssetCreate](types_composer.default.md#addassetcreate)
- [addAssetDestroy](types_composer.default.md#addassetdestroy)
- [addAssetFreeze](types_composer.default.md#addassetfreeze)
- [addAssetOptIn](types_composer.default.md#addassetoptin)
- [addAssetOptOut](types_composer.default.md#addassetoptout)
- [addAssetTransfer](types_composer.default.md#addassettransfer)
- [addAtc](types_composer.default.md#addatc)
- [addMethodCall](types_composer.default.md#addmethodcall)
- [addOnlineKeyRegistration](types_composer.default.md#addonlinekeyregistration)
- [addPayment](types_composer.default.md#addpayment)
- [build](types_composer.default.md#build)
- [buildAppCall](types_composer.default.md#buildappcall)
- [buildAssetConfig](types_composer.default.md#buildassetconfig)
- [buildAssetCreate](types_composer.default.md#buildassetcreate)
- [buildAssetDestroy](types_composer.default.md#buildassetdestroy)
- [buildAssetFreeze](types_composer.default.md#buildassetfreeze)
- [buildAssetTransfer](types_composer.default.md#buildassettransfer)
- [buildAtc](types_composer.default.md#buildatc)
- [buildKeyReg](types_composer.default.md#buildkeyreg)
- [buildMethodCall](types_composer.default.md#buildmethodcall)
- [buildPayment](types_composer.default.md#buildpayment)
- [buildTransactions](types_composer.default.md#buildtransactions)
- [buildTxn](types_composer.default.md#buildtxn)
- [buildTxnWithSigner](types_composer.default.md#buildtxnwithsigner)
- [commonTxnBuildStep](types_composer.default.md#commontxnbuildstep)
- [execute](types_composer.default.md#execute)
- [rebuild](types_composer.default.md#rebuild)

## Constructors

### constructor

• **new default**(`params`): [`default`](types_composer.default.md)

Create an `AlgoKitComposer`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AlgoKitComposerParams`](../modules/types_composer.md#algokitcomposerparams) | The configuration for this composer |

#### Returns

[`default`](types_composer.default.md)

#### Defined in

[src/types/composer.ts:431](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L431)

## Properties

### algod

• `Private` **algod**: `default`

The algod client used by the composer.

#### Defined in

[src/types/composer.ts:413](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L413)

___

### atc

• `Private` **atc**: `AtomicTransactionComposer`

The ATC used to compose the group

#### Defined in

[src/types/composer.ts:404](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L404)

___

### defaultValidityWindow

• `Private` **defaultValidityWindow**: `number` = `10`

The default transaction validity window

#### Defined in

[src/types/composer.ts:422](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L422)

___

### defaultValidityWindowIsExplicit

• `Private` **defaultValidityWindowIsExplicit**: `boolean` = `false`

Whether the validity window was explicitly set on construction

#### Defined in

[src/types/composer.ts:425](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L425)

___

### getSigner

• `Private` **getSigner**: (`address`: `string`) => `TransactionSigner`

A function that takes in an address and return a signer function for that address.

#### Type declaration

▸ (`address`): `TransactionSigner`

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

##### Returns

`TransactionSigner`

#### Defined in

[src/types/composer.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L419)

___

### getSuggestedParams

• `Private` **getSuggestedParams**: () => `Promise`\<`SuggestedParams`\>

An async function that will return suggested params for the transaction.

#### Type declaration

▸ (): `Promise`\<`SuggestedParams`\>

##### Returns

`Promise`\<`SuggestedParams`\>

#### Defined in

[src/types/composer.ts:416](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L416)

___

### txnMethodMap

• `Private` **txnMethodMap**: `Map`\<`string`, `ABIMethod`\>

Map of txid to ABI method

#### Defined in

[src/types/composer.ts:407](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L407)

___

### txns

• `Private` **txns**: `Txn`[] = `[]`

Transactions that have not yet been composed

#### Defined in

[src/types/composer.ts:410](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L410)

## Methods

### addAppCall

▸ **addAppCall**(`params`): [`default`](types_composer.default.md)

Add an application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppCallParams`](../modules/types_composer.md#appcallparams) | The application call transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:535](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L535)

___

### addAssetConfig

▸ **addAssetConfig**(`params`): [`default`](types_composer.default.md)

Add an asset config transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetConfigParams`](../modules/types_composer.md#assetconfigparams) | The asset config transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:467](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L467)

___

### addAssetCreate

▸ **addAssetCreate**(`params`): [`default`](types_composer.default.md)

Add an asset create transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetCreateParams`](../modules/types_composer.md#assetcreateparams) | The asset create transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:456](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L456)

___

### addAssetDestroy

▸ **addAssetDestroy**(`params`): [`default`](types_composer.default.md)

Add an asset destroy transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetDestroyParams`](../modules/types_composer.md#assetdestroyparams) | The asset destroy transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:489](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L489)

___

### addAssetFreeze

▸ **addAssetFreeze**(`params`): [`default`](types_composer.default.md)

Add an asset freeze transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetFreezeParams`](../modules/types_composer.md#assetfreezeparams) | The asset freeze transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:478](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L478)

___

### addAssetOptIn

▸ **addAssetOptIn**(`params`): [`default`](types_composer.default.md)

Add an asset opt-in transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetOptInParams`](../modules/types_composer.md#assetoptinparams) | The asset opt-in transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:511](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L511)

___

### addAssetOptOut

▸ **addAssetOptOut**(`params`): [`default`](types_composer.default.md)

Add an asset opt-out transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetOptOutParams`](../modules/types_composer.md#assetoptoutparams) | The asset opt-out transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:522](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L522)

___

### addAssetTransfer

▸ **addAssetTransfer**(`params`): [`default`](types_composer.default.md)

Add an asset transfer transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetTransferParams`](../modules/types_composer.md#assettransferparams) | The asset transfer transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:500](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L500)

___

### addAtc

▸ **addAtc**(`atc`): [`default`](types_composer.default.md)

Add the transactions within an `AtomicTransactionComposer` to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `atc` | `AtomicTransactionComposer` | The `AtomicTransactionComposer` to build transactions from and add to the group |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:569](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L569)

___

### addMethodCall

▸ **addMethodCall**(`params`): [`default`](types_composer.default.md)

Add an ABI method application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MethodCallParams`](../modules/types_composer.md#methodcallparams) | The ABI method application call transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:548](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L548)

___

### addOnlineKeyRegistration

▸ **addOnlineKeyRegistration**(`params`): [`default`](types_composer.default.md)

Add an online key registration transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`OnlineKeyRegistrationParams`](../modules/types_composer.md#onlinekeyregistrationparams) | The online key registration transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:558](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L558)

___

### addPayment

▸ **addPayment**(`params`): [`default`](types_composer.default.md)

Add a payment transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PaymentParams`](../modules/types_composer.md#paymentparams) | The payment transaction parameters |

#### Returns

[`default`](types_composer.default.md)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:445](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L445)

___

### build

▸ **build**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `transactions`: `TransactionWithSigner`[]  }\>

Compose all of the transactions in a single atomic transaction group and an atomic transaction composer.

You can then use the transactions standalone, or use the composer to execute or simulate the transactions.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `transactions`: `TransactionWithSigner`[]  }\>

The built atomic transaction composer and the transactions

#### Defined in

[src/types/composer.ts:919](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L919)

___

### buildAppCall

▸ **buildAppCall**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AppCallParams`](../modules/types_composer.md#appcallparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:787](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L787)

___

### buildAssetConfig

▸ **buildAssetConfig**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetConfigParams`](../modules/types_composer.md#assetconfigparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:736](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L736)

___

### buildAssetCreate

▸ **buildAssetCreate**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetCreateParams`](../modules/types_composer.md#assetcreateparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:716](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L716)

___

### buildAssetDestroy

▸ **buildAssetDestroy**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetDestroyParams`](../modules/types_composer.md#assetdestroyparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:751](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L751)

___

### buildAssetFreeze

▸ **buildAssetFreeze**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetFreezeParams`](../modules/types_composer.md#assetfreezeparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:761](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L761)

___

### buildAssetTransfer

▸ **buildAssetTransfer**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetTransferParams`](../modules/types_composer.md#assettransferparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:773](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L773)

___

### buildAtc

▸ **buildAtc**(`atc`): `TransactionWithSigner`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `atc` | `AtomicTransactionComposer` |

#### Returns

`TransactionWithSigner`[]

#### Defined in

[src/types/composer.ts:574](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L574)

___

### buildKeyReg

▸ **buildKeyReg**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OnlineKeyRegistrationParams`](../modules/types_composer.md#onlinekeyregistrationparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:827](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L827)

___

### buildMethodCall

▸ **buildMethodCall**(`params`, `suggestedParams`, `includeSigner`): `Promise`\<`TransactionWithSigner`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MethodCallParams`](../modules/types_composer.md#methodcallparams) |
| `suggestedParams` | `SuggestedParams` |
| `includeSigner` | `boolean` |

#### Returns

`Promise`\<`TransactionWithSigner`[]\>

#### Defined in

[src/types/composer.ts:627](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L627)

___

### buildPayment

▸ **buildPayment**(`params`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PaymentParams`](../modules/types_composer.md#paymentparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:704](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L704)

___

### buildTransactions

▸ **buildTransactions**(): `Promise`\<`Transaction`[]\>

Compose all of the transactions without signers and return the transaction objects directly.

#### Returns

`Promise`\<`Transaction`[]\>

The array of built transactions

#### Defined in

[src/types/composer.ts:901](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L901)

___

### buildTxn

▸ **buildTxn**(`txn`, `suggestedParams`): `Promise`\<`Transaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `Txn` |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Promise`\<`Transaction`[]\>

#### Defined in

[src/types/composer.ts:845](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L845)

___

### buildTxnWithSigner

▸ **buildTxnWithSigner**(`txn`, `suggestedParams`): `Promise`\<`TransactionWithSigner`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `Txn` |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Promise`\<`TransactionWithSigner`[]\>

#### Defined in

[src/types/composer.ts:878](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L878)

___

### commonTxnBuildStep

▸ **commonTxnBuildStep**(`params`, `txn`, `suggestedParams`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CommonTransactionParams`](../modules/types_composer.md#commontransactionparams) |
| `txn` | `Transaction` |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Transaction`

#### Defined in

[src/types/composer.ts:588](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L588)

___

### execute

▸ **execute**(`params?`): `Promise`\<[`SendAtomicTransactionComposerResults`](../interfaces/types_transaction.SendAtomicTransactionComposerResults.md)\>

Compose the atomic transaction group and send it to the network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`ExecuteParams`](../interfaces/types_composer.ExecuteParams.md) | The parameters to control execution with |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](../interfaces/types_transaction.SendAtomicTransactionComposerResults.md)\>

The execution result

#### Defined in

[src/types/composer.ts:961](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L961)

___

### rebuild

▸ **rebuild**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `transactions`: `TransactionWithSigner`[]  }\>

Rebuild the group, discarding any previously built transactions.
This will potentially cause new signers and suggested params to be used if the callbacks return a new value compared to the first build.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `transactions`: `TransactionWithSigner`[]  }\>

The newly built atomic transaction composer and the transactions

#### Defined in

[src/types/composer.ts:951](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L951)
