---
id: "cubebatterychar"
title: "CubeBatteryChar"
sidebar_label: "CubeBatteryChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeBatteryChar](cubebatterychar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeBatteryChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubebatterychar.md#constructor)

### Properties

* [characteristic](cubebatterychar.md#protected-characteristic)
* [errStrInProgress](cubebatterychar.md#protected-errstrinprogress)
* [uuid](cubebatterychar.md#readonly-uuid)

### Methods

* [addEventListener](cubebatterychar.md#addeventlistener)
* [getBatteryLevel](cubebatterychar.md#getbatterylevel)
* [prepare](cubebatterychar.md#prepare)
* [readValue](cubebatterychar.md#readvalue)
* [setFrameRate](cubebatterychar.md#setframerate)
* [writeValue](cubebatterychar.md#writevalue)
* [writeValueCore](cubebatterychar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeBatteryChar**(`service`: BluetoothRemoteGATTService): *[CubeBatteryChar](cubebatterychar.md)*

*Inherited from [CubeBatteryChar](cubebatterychar.md).[constructor](cubebatterychar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeBatteryChar](cubebatterychar.md)*

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

• **uuid**: *string* = "10b20108-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/batteryChar.ts:5](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/batteryChar.ts#L5)*

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeBatteryLevelListner](../globals.md#cubebatterylevellistner)): *void*

*Defined in [cube/char/batteryChar.ts:100](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/batteryChar.ts#L100)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Fix to 'change'. |
`listener` | [CubeBatteryLevelListner](../globals.md#cubebatterylevellistner) | - |

**Returns:** *void*

___

###  getBatteryLevel

▸ **getBatteryLevel**(): *number*

*Defined in [cube/char/batteryChar.ts:55](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/batteryChar.ts#L55)*

Get current battery level.

**Returns:** *number*

Battery level in 10%.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/batteryChar.ts:16](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/batteryChar.ts#L16)*

Prepare for using battery characteristic function.

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
