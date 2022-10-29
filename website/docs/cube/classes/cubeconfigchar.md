---
id: "cubeconfigchar"
title: "CubeConfigChar"
sidebar_label: "CubeConfigChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeConfigChar](cubeconfigchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeConfigChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubeconfigchar.md#constructor)

### Properties

* [characteristic](cubeconfigchar.md#protected-characteristic)
* [errStrInProgress](cubeconfigchar.md#protected-errstrinprogress)
* [uuid](cubeconfigchar.md#readonly-uuid)

### Methods

* [addEventListener](cubeconfigchar.md#addeventlistener)
* [disableMagnet](cubeconfigchar.md#disablemagnet)
* [enableMagnet](cubeconfigchar.md#enablemagnet)
* [getProtocolVersion](cubeconfigchar.md#getprotocolversion)
* [prepare](cubeconfigchar.md#prepare)
* [readValue](cubeconfigchar.md#readvalue)
* [setFrameRate](cubeconfigchar.md#setframerate)
* [writeValue](cubeconfigchar.md#writevalue)
* [writeValueCore](cubeconfigchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeConfigChar**(`service`: BluetoothRemoteGATTService): *[CubeConfigChar](cubeconfigchar.md)*

*Inherited from [CubeChar](cubechar.md).[constructor](cubechar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeConfigChar](cubeconfigchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic*

*Inherited from [CubeChar](cubechar.md).[characteristic](cubechar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeChar](cubechar.md).[errStrInProgress](cubechar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b201ff-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/configChar.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L11)*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeConfigCharListner](../globals.md#cubeconfigcharlistner)): *void*

*Defined in [cube/char/configChar.ts:123](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L123)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Specify the type from 'protocolversion'. |
`listener` | [CubeConfigCharListner](../globals.md#cubeconfigcharlistner) | - |

**Returns:** *void*

___

###  disableMagnet

▸ **disableMagnet**(): *void*

*Defined in [cube/char/configChar.ts:144](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L144)*

Disable magnet function.

**Returns:** *void*

___

###  enableMagnet

▸ **enableMagnet**(): *void*

*Defined in [cube/char/configChar.ts:135](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L135)*

Enable magnet function.

**Returns:** *void*

___

###  getProtocolVersion

▸ **getProtocolVersion**(): *string*

*Defined in [cube/char/configChar.ts:75](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L75)*

Get BLE protocol version.

**Returns:** *string*

string id of BLE protocol version.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/configChar.ts:40](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L40)*

Prepare for using configuration characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[readValue](cubechar.md#readvalue)*

*Defined in [cube/char/char.ts:110](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L110)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[setFrameRate](cubechar.md#setframerate)*

*Defined in [cube/char/char.ts:134](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L134)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  writeValue

▸ **writeValue**(`buf`: ArrayBuffer): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[writeValue](cubechar.md#writevalue)*

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L55)*

Write value to remote GATT Characteristics.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.

___

###  writeValueCore

▸ **writeValueCore**(`buf`: ArrayBuffer, `countRetry`: number): *Promise‹string | Error›*

*Inherited from [CubeChar](cubechar.md).[writeValueCore](cubechar.md#writevaluecore)*

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
