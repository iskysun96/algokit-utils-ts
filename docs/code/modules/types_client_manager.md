[@algorandfoundation/algokit-utils](../README.md) / types/client-manager

# Module: types/client-manager

## Table of contents

### Classes

- [ClientManager](../classes/types_client_manager.ClientManager.md)

### Interfaces

- [AlgoSdkClients](../interfaces/types_client_manager.AlgoSdkClients.md)
- [NetworkDetails](../interfaces/types_client_manager.NetworkDetails.md)
- [TypedAppClient](../interfaces/types_client_manager.TypedAppClient.md)

### Type Aliases

- [AppClientByCreatorAndNameDetails](types_client_manager.md#appclientbycreatorandnamedetails)
- [AppClientByIdDetails](types_client_manager.md#appclientbyiddetails)
- [TypedAppClientByCreatorAndNameDetails](types_client_manager.md#typedappclientbycreatorandnamedetails)
- [TypedAppClientByIdDetails](types_client_manager.md#typedappclientbyiddetails)

## Type Aliases

### AppClientByCreatorAndNameDetails

Ƭ **AppClientByCreatorAndNameDetails**: [`AppSpecAppDetailsBase`](types_app_client.md#appspecappdetailsbase) & [`AppDetailsBase`](types_app_client.md#appdetailsbase) & `Omit`\<[`ResolveAppByCreatorAndNameBase`](types_app_client.md#resolveappbycreatorandnamebase), ``"findExistingUsing"``\>

Details to resolve an app client by creator address and name.

#### Defined in

[src/types/client-manager.ts:478](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L478)

___

### AppClientByIdDetails

Ƭ **AppClientByIdDetails**: [`AppSpecAppDetailsBase`](types_app_client.md#appspecappdetailsbase) & [`AppDetailsBase`](types_app_client.md#appdetailsbase) & [`ResolveAppByIdBase`](../interfaces/types_app_client.ResolveAppByIdBase.md)

Details to resolve an app client by app ID.

#### Defined in

[src/types/client-manager.ts:490](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L490)

___

### TypedAppClientByCreatorAndNameDetails

Ƭ **TypedAppClientByCreatorAndNameDetails**: [`AppDetailsBase`](types_app_client.md#appdetailsbase) & `Omit`\<[`ResolveAppByCreatorAndNameBase`](types_app_client.md#resolveappbycreatorandnamebase), ``"findExistingUsing"``\>

Details to resolve a typed app creator address and name.

#### Defined in

[src/types/client-manager.ts:485](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L485)

___

### TypedAppClientByIdDetails

Ƭ **TypedAppClientByIdDetails**: [`AppDetailsBase`](types_app_client.md#appdetailsbase) & [`ResolveAppByIdBase`](../interfaces/types_app_client.ResolveAppByIdBase.md)

Details to resolve a typed app by app ID.

#### Defined in

[src/types/client-manager.ts:495](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L495)
