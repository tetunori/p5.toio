---
id: "cubemotorchar"
title: "CubeMotorChar"
sidebar_label: "CubeMotorChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeMotorChar](cubemotorchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeMotorChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubemotorchar.md#constructor)

### Properties

* [characteristic](cubemotorchar.md#protected-characteristic)
* [errStrInProgress](cubemotorchar.md#protected-errstrinprogress)
* [uuid](cubemotorchar.md#readonly-uuid)
* [angleTypeId](cubemotorchar.md#static-angletypeid)
* [easeTypeId](cubemotorchar.md#static-easetypeid)
* [moveTypeId](cubemotorchar.md#static-movetypeid)

### Methods

* [motorControl](cubemotorchar.md#motorcontrol)
* [motorControlAccelerationSpecified](cubemotorchar.md#motorcontrolaccelerationspecified)
* [motorControlAimSpecified](cubemotorchar.md#motorcontrolaimspecified)
* [motorControlMultipleAimSpecified](cubemotorchar.md#motorcontrolmultipleaimspecified)
* [motorControlTimeSpecified](cubemotorchar.md#motorcontroltimespecified)
* [prepare](cubemotorchar.md#prepare)
* [readValue](cubemotorchar.md#readvalue)
* [setFrameRate](cubemotorchar.md#setframerate)
* [writeValue](cubemotorchar.md#writevalue)
* [writeValueCore](cubemotorchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeMotorChar**(`service`: BluetoothRemoteGATTService): *[CubeMotorChar](cubemotorchar.md)*

*Inherited from [CubeChar](cubechar.md).[constructor](cubechar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeMotorChar](cubemotorchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeChar](cubechar.md).[characteristic](cubechar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeChar](cubechar.md).[errStrInProgress](cubechar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20102-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/motorChar.ts:4](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L4)*

___

### `Static` angleTypeId

▪ **angleTypeId**: *object* = {
    absEfficient: 0,
    absPositiveDir: 1,
    absNegativeDir: 2,
    relPositiveDir: 3,
    relNegativeDir: 4,
    noRotate: 5,
    sameAsCurrent: 6,
  } as const

*Defined in [cube/char/motorChar.ts:55](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L55)*

Angle type IDs.

#### Type declaration:

* **absEfficient**: *0* = 0

* **absNegativeDir**: *2* = 2

* **absPositiveDir**: *1* = 1

* **noRotate**: *5* = 5

* **relNegativeDir**: *4* = 4

* **relPositiveDir**: *3* = 3

* **sameAsCurrent**: *6* = 6

___

### `Static` easeTypeId

▪ **easeTypeId**: *object* = {
    constant: 0,
    accel: 1,
    decel: 2,
    accelDecel: 3,
  } as const

*Defined in [cube/char/motorChar.ts:45](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L45)*

Ease type IDs.

#### Type declaration:

* **accel**: *1* = 1

* **accelDecel**: *3* = 3

* **constant**: *0* = 0

* **decel**: *2* = 2

___

### `Static` moveTypeId

▪ **moveTypeId**: *object* = {
    efficient: 0,
    withoutBack: 1,
    rotate1st: 2,
  } as const

*Defined in [cube/char/motorChar.ts:36](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L36)*

Movement type IDs.

#### Type declaration:

* **efficient**: *0* = 0

* **rotate1st**: *2* = 2

* **withoutBack**: *1* = 1

## Methods

###  motorControl

▸ **motorControl**(`left`: number, `right`: number): *void*

*Defined in [cube/char/motorChar.ts:123](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L123)*

Primitive motor control.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`left` | number | Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value. |
`right` | number | Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.   |

**Returns:** *void*

___

###  motorControlAccelerationSpecified

▸ **motorControlAccelerationSpecified**(): *void*

*Defined in [cube/char/motorChar.ts:284](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L284)*

Acceleration specified motor control.
NOT IMPLEMENTED YET.

**Returns:** *void*

___

###  motorControlAimSpecified

▸ **motorControlAimSpecified**(`aim`: object, `maxSpeed`: number, `moveType`: 0, `easeType`: 0, `timeout`: number): *void*

*Defined in [cube/char/motorChar.ts:161](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L161)*

Aim specified motor control.

**Parameters:**

▪ **aim**: *object*

object including following properties.
x, y: coordinate of aimed point. angle(Optional): Cube's angle at the goal point. angleType(Optional): angleTypeId value.
See the [spec](https://toio.github.io/toio-spec/docs/ble_motor#%E7%9B%AE%E6%A8%99%E5%9C%B0%E7%82%B9%E3%81%A7%E3%81%AE%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%81%AE%E8%A7%92%E5%BA%A6-%CE%B8)

Name | Type |
------ | ------ |
`angle?` | undefined &#124; number |
`angleType?` | undefined &#124; number |
`x` | number |
`y` | number |

▪ **maxSpeed**: *number*

8 to 115, and 0 integer value.

▪`Default value`  **moveType**: *0*= CubeMotorChar.moveTypeId.efficient

(Optional)moveTypeId value. default is moveTypeId.efficient

▪`Default value`  **easeType**: *0*= CubeMotorChar.easeTypeId.constant

(Optional)easeTypeId value. default is easeTypeId.constant

▪`Default value`  **timeout**: *number*= 5

(Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.

**Returns:** *void*

___

###  motorControlMultipleAimSpecified

▸ **motorControlMultipleAimSpecified**(`aims`: object[], `maxSpeed`: number, `moveType`: 0, `easeType`: 0, `isAppend`: boolean, `timeout`: number): *void*

*Defined in [cube/char/motorChar.ts:225](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L225)*

Multiple aim specified motor control.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`aims` | object[] | - | object array each aim includes following properties. x, y: coordinate of aimed point. angle(Optional): Cube's angle at the goal point. angleType(Optional): angleTypeId value. See the [spec](https://toio.github.io/toio-spec/docs/ble_motor#%E7%9B%AE%E6%A8%99%E5%9C%B0%E7%82%B9%E3%81%A7%E3%81%AE%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%81%AE%E8%A7%92%E5%BA%A6-%CE%B8) |
`maxSpeed` | number | - | 8 to 115, and 0 integer value. |
`moveType` | 0 | CubeMotorChar.moveTypeId.efficient | (Optional)moveTypeId value. default is moveTypeId.efficient |
`easeType` | 0 | CubeMotorChar.easeTypeId.constant | (Optional)easeTypeId value. default is easeTypeId.constant |
`isAppend` | boolean | false | (Optional)true: append to existing mutiple aim command. false: overwrite existing command. |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

###  motorControlTimeSpecified

▸ **motorControlTimeSpecified**(`left`: number, `right`: number, `duration`: number): *void*

*Defined in [cube/char/motorChar.ts:134](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L134)*

Time specified motor control.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`left` | number | - | Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value. |
`right` | number | - | Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value. |
`duration` | number | 0 | Motor control duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Overrides [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/motorChar.ts:70](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/motorChar.ts#L70)*

Prepare for using motor characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[readValue](cubechar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[setFrameRate](cubechar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L142)*

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

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L55)*

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

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
