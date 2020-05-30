---
id: "cubesensorchar"
title: "CubeSensorChar"
sidebar_label: "CubeSensorChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeSensorChar](cubesensorchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeSensorChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubesensorchar.md#constructor)

### Properties

* [characteristic](cubesensorchar.md#protected-characteristic)
* [errStrInProgress](cubesensorchar.md#protected-errstrinprogress)
* [uuid](cubesensorchar.md#readonly-uuid)
* [postureId](cubesensorchar.md#static-postureid)

### Methods

* [addEventListener](cubesensorchar.md#addeventlistener)
* [getPosture](cubesensorchar.md#getposture)
* [isFlat](cubesensorchar.md#isflat)
* [prepare](cubesensorchar.md#prepare)
* [readValue](cubesensorchar.md#readvalue)
* [setFrameRate](cubesensorchar.md#setframerate)
* [writeValue](cubesensorchar.md#writevalue)
* [writeValueCore](cubesensorchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeSensorChar**(`service`: BluetoothRemoteGATTService): *[CubeSensorChar](cubesensorchar.md)*

*Inherited from [CubeChar](cubechar.md).[constructor](cubechar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeSensorChar](cubesensorchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeChar](cubechar.md).[characteristic](cubechar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeChar](cubechar.md).[errStrInProgress](cubechar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20106-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/sensorChar.ts:18](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L18)*

___

### `Static` postureId

▪ **postureId**: *object* = {
    top: 'top',
    bottom: 'bottom',
    back: 'back',
    front: 'front',
    right: 'right',
    left: 'left',
  } as const

*Defined in [cube/char/sensorChar.ts:23](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L23)*

Posture IDs.

#### Type declaration:

* **back**: *"back"* = "back"

* **bottom**: *"bottom"* = "bottom"

* **front**: *"front"* = "front"

* **left**: *"left"* = "left"

* **right**: *"right"* = "right"

* **top**: *"top"* = "top"

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeSensorCharListner](../globals.md#cubesensorcharlistner)): *void*

*Defined in [cube/char/sensorChar.ts:182](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L182)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Specify the type from 'flat', 'collision', 'doubletap' or 'posture'. |
`listener` | [CubeSensorCharListner](../globals.md#cubesensorcharlistner) | - |

**Returns:** *void*

___

###  getPosture

▸ **getPosture**(): *string*

*Defined in [cube/char/sensorChar.ts:95](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L95)*

Get current posture.

**Returns:** *string*

string id of posture.

___

###  isFlat

▸ **isFlat**(): *boolean*

*Defined in [cube/char/sensorChar.ts:86](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L86)*

Get current flat status.

**Returns:** *boolean*

is flat or not.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/sensorChar.ts:47](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/sensorChar.ts#L47)*

Prepare for using sensor characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[readValue](cubechar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[setFrameRate](cubechar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L142)*

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

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L55)*

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

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
