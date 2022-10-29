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
* [magnetId](cubesensorchar.md#static-magnetid)
* [postureId](cubesensorchar.md#static-postureid)
* [shakeLevelId](cubesensorchar.md#static-shakelevelid)

### Methods

* [addEventListener](cubesensorchar.md#addeventlistener)
* [getMagnetSatus](cubesensorchar.md#getmagnetsatus)
* [getPosture](cubesensorchar.md#getposture)
* [getShakeLevel](cubesensorchar.md#getshakelevel)
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

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeSensorChar](cubesensorchar.md)*

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

• **uuid**: *string* = "10b20106-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/sensorChar.ts:24](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L24)*

___

### `Static` magnetId

▪ **magnetId**: *object* = {
    noMagnet: 'noMagnet',
    pattern1: 'pattern1',
    pattern2: 'pattern2',
    pattern3: 'pattern3',
    pattern4: 'pattern4',
    pattern5: 'pattern5',
    pattern6: 'pattern6',
  } as const

*Defined in [cube/char/sensorChar.ts:58](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L58)*

Magnet IDs.

#### Type declaration:

* **noMagnet**: *"noMagnet"* = "noMagnet"

* **pattern1**: *"pattern1"* = "pattern1"

* **pattern2**: *"pattern2"* = "pattern2"

* **pattern3**: *"pattern3"* = "pattern3"

* **pattern4**: *"pattern4"* = "pattern4"

* **pattern5**: *"pattern5"* = "pattern5"

* **pattern6**: *"pattern6"* = "pattern6"

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

*Defined in [cube/char/sensorChar.ts:29](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L29)*

Posture IDs.

#### Type declaration:

* **back**: *"back"* = "back"

* **bottom**: *"bottom"* = "bottom"

* **front**: *"front"* = "front"

* **left**: *"left"* = "left"

* **right**: *"right"* = "right"

* **top**: *"top"* = "top"

___

### `Static` shakeLevelId

▪ **shakeLevelId**: *object* = {
    noDetection: 0x00,
    level1: 0x01,
    level2: 0x02,
    level3: 0x03,
    level4: 0x04,
    level5: 0x05,
    level6: 0x06,
    level7: 0x07,
    level8: 0x08,
    level9: 0x09,
    level10: 0x0a,
  } as const

*Defined in [cube/char/sensorChar.ts:41](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L41)*

Shake level IDs.

#### Type declaration:

* **level1**: *1* = 1

* **level10**: *10* = 10

* **level2**: *2* = 2

* **level3**: *3* = 3

* **level4**: *4* = 4

* **level5**: *5* = 5

* **level6**: *6* = 6

* **level7**: *7* = 7

* **level8**: *8* = 8

* **level9**: *9* = 9

* **noDetection**: *0* = 0

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeSensorCharListner](../globals.md#cubesensorcharlistner)): *void*

*Defined in [cube/char/sensorChar.ts:264](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L264)*

Register callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Specify the type from 'flat', 'collision', 'doubletap', 'magnet' or 'posture'. |
`listener` | [CubeSensorCharListner](../globals.md#cubesensorcharlistner) | - |

**Returns:** *void*

___

###  getMagnetSatus

▸ **getMagnetSatus**(): *string*

*Defined in [cube/char/sensorChar.ts:149](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L149)*

Get current magnet status.

**Returns:** *string*

string id of magnet status.

___

###  getPosture

▸ **getPosture**(): *string*

*Defined in [cube/char/sensorChar.ts:131](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L131)*

Get current posture.

**Returns:** *string*

string id of posture.

___

###  getShakeLevel

▸ **getShakeLevel**(): *number*

*Defined in [cube/char/sensorChar.ts:140](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L140)*

Get current shake level.

**Returns:** *number*

id of shake level.

___

###  isFlat

▸ **isFlat**(): *boolean*

*Defined in [cube/char/sensorChar.ts:122](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L122)*

Get current flat status.

**Returns:** *boolean*

is flat or not.

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/sensorChar.ts:87](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L87)*

Prepare for using sensor characteristic function.

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
