---
id: "cubeidchar"
title: "CubeIDChar"
sidebar_label: "CubeIDChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeIDChar](cubeidchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeIDChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubeidchar.md#constructor)

### Properties

* [characteristic](cubeidchar.md#protected-characteristic)
* [errStrInProgress](cubeidchar.md#protected-errstrinprogress)
* [uuid](cubeidchar.md#readonly-uuid)

### Methods

* [addEventListener](cubeidchar.md#addeventlistener)
* [getPositionId](cubeidchar.md#getpositionid)
* [getStandardId](cubeidchar.md#getstandardid)
* [prepare](cubeidchar.md#prepare)
* [readValue](cubeidchar.md#readvalue)
* [setFrameRate](cubeidchar.md#setframerate)
* [writeValue](cubeidchar.md#writevalue)
* [writeValueCore](cubeidchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeIDChar**(`service`: BluetoothRemoteGATTService): *[CubeIDChar](cubeidchar.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[constructor](cubebatterychar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeIDChar](cubeidchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeBatteryChar](cubebatterychar.md).[characteristic](cubebatterychar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeBatteryChar](cubebatterychar.md).[errStrInProgress](cubebatterychar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20101-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/idChar.ts:29](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/idChar.ts#L29)*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeIdCharListner](../globals.md#cubeidcharlistner)): *void*

*Defined in [cube/char/idChar.ts:247](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/idChar.ts#L247)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Specify the type from 'positionid' or 'standardid'. |
`listener` | [CubeIdCharListner](../globals.md#cubeidcharlistner) | - |

**Returns:** *void*

___

###  getPositionId

▸ **getPositionId**(): *[positionIdInfo](../globals.md#positionidinfo)*

*Defined in [cube/char/idChar.ts:83](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/idChar.ts#L83)*

Get current Position Id.

**Returns:** *[positionIdInfo](../globals.md#positionidinfo)*

Position Id info.

___

###  getStandardId

▸ **getStandardId**(): *[standardIdInfo](../globals.md#standardidinfo)*

*Defined in [cube/char/idChar.ts:92](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/idChar.ts#L92)*

Get current Standard Id.

**Returns:** *[standardIdInfo](../globals.md#standardidinfo)*

Standard Id info.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/idChar.ts:44](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/idChar.ts#L44)*

Prepare for using id characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[readValue](cubebatterychar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[setFrameRate](cubebatterychar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L142)*

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

*Inherited from [CubeBatteryChar](cubebatterychar.md).[writeValue](cubebatterychar.md#writevalue)*

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L55)*

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

*Inherited from [CubeBatteryChar](cubebatterychar.md).[writeValueCore](cubebatterychar.md#writevaluecore)*

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
