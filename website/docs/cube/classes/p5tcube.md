---
id: "p5tcube"
title: "P5tCube"
sidebar_label: "P5tCube"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [P5tCube](p5tcube.md)

## Hierarchy

* [Cube](cube.md)

  ↳ **P5tCube**

## Index

### Constructors

* [constructor](p5tcube.md#constructor)

### Properties

* [angle](p5tcube.md#angle)
* [batteryLevel](p5tcube.md#batterylevel)
* [buttonPressed](p5tcube.md#buttonpressed)
* [cube](p5tcube.md#protected-cube)
* [flat](p5tcube.md#flat)
* [posture](p5tcube.md#posture)
* [sensorX](p5tcube.md#sensorx)
* [sensorY](p5tcube.md#sensory)
* [standardId](p5tcube.md#standardid)
* [x](p5tcube.md#x)
* [y](p5tcube.md#y)
* [angleTypeId](p5tcube.md#static-angletypeid)
* [easeTypeId](p5tcube.md#static-easetypeid)
* [moveTypeId](p5tcube.md#static-movetypeid)
* [postureId](p5tcube.md#static-postureid)
* [rotateTypeId](p5tcube.md#static-readonly-rotatetypeid)
* [seId](p5tcube.md#static-seid)

### Methods

* [addEventListener](p5tcube.md#addeventlistener)
* [connect](p5tcube.md#connect)
* [connectP5tCube](p5tcube.md#connectp5tcube)
* [disconnect](p5tcube.md#disconnect)
* [distanceToCube](p5tcube.md#distancetocube)
* [distanceToXY](p5tcube.md#distancetoxy)
* [move](p5tcube.md#move)
* [moveTo](p5tcube.md#moveto)
* [moveToCube](p5tcube.md#movetocube)
* [moveToMulti](p5tcube.md#movetomulti)
* [normalizeAngleDegrees](p5tcube.md#protected-normalizeangledegrees)
* [normalizeAngleRadian](p5tcube.md#protected-normalizeangleradian)
* [onPositionIdChanged](p5tcube.md#protected-onpositionidchanged)
* [onStandardIdChanged](p5tcube.md#protected-onstandardidchanged)
* [playMelody](p5tcube.md#playmelody)
* [playSE](p5tcube.md#playse)
* [playSingleNote](p5tcube.md#playsinglenote)
* [relativeAngleToXY](p5tcube.md#relativeangletoxy)
* [rotate](p5tcube.md#rotate)
* [setFrameRate](p5tcube.md#setframerate)
* [stop](p5tcube.md#stop)
* [turnLightOff](p5tcube.md#turnlightoff)
* [turnLightOn](p5tcube.md#turnlighton)
* [turnLightOnRGB](p5tcube.md#turnlightonrgb)
* [turnLightOnRGBA](p5tcube.md#turnlightonrgba)
* [turnTo](p5tcube.md#turnto)
* [turnToCube](p5tcube.md#turntocube)
* [turnToXY](p5tcube.md#turntoxy)
* [connectNewCube](p5tcube.md#static-connectnewcube)
* [connectNewP5tCube](p5tcube.md#static-connectnewp5tcube)

## Constructors

###  constructor

\+ **new P5tCube**(`cube`: [CubeBase](cubebase.md)): *[P5tCube](p5tcube.md)*

*Inherited from [P5tCube](p5tcube.md).[constructor](p5tcube.md#constructor)*

*Defined in [cube/cube.ts:25](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`cube` | [CubeBase](cubebase.md) |

**Returns:** *[P5tCube](p5tcube.md)*

## Properties

###  angle

• **angle**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[angle](p5tcube.md#angle)*

*Defined in [cube/cube.ts:18](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L18)*

___

###  batteryLevel

• **batteryLevel**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[batteryLevel](p5tcube.md#batterylevel)*

*Defined in [cube/cube.ts:23](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L23)*

___

###  buttonPressed

• **buttonPressed**: *boolean | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[buttonPressed](p5tcube.md#buttonpressed)*

*Defined in [cube/cube.ts:22](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L22)*

___

### `Protected` cube

• **cube**: *[CubeBase](cubebase.md) | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[cube](p5tcube.md#protected-cube)*

*Defined in [cube/cube.ts:25](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L25)*

___

###  flat

• **flat**: *boolean | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[flat](p5tcube.md#flat)*

*Defined in [cube/cube.ts:20](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L20)*

___

###  posture

• **posture**: *string | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[posture](p5tcube.md#posture)*

*Defined in [cube/cube.ts:21](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L21)*

___

###  sensorX

• **sensorX**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[sensorX](p5tcube.md#sensorx)*

*Defined in [cube/cube.ts:16](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L16)*

___

###  sensorY

• **sensorY**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[sensorY](p5tcube.md#sensory)*

*Defined in [cube/cube.ts:17](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L17)*

___

###  standardId

• **standardId**: *string | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[standardId](p5tcube.md#standardid)*

*Defined in [cube/cube.ts:19](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L19)*

___

###  x

• **x**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[x](p5tcube.md#x)*

*Defined in [cube/cube.ts:14](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L14)*

___

###  y

• **y**: *number | undefined* = undefined

*Inherited from [P5tCube](p5tcube.md).[y](p5tcube.md#y)*

*Defined in [cube/cube.ts:15](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L15)*

___

### `Static` angleTypeId

▪ **angleTypeId**: *object* = CubeMotorChar.angleTypeId

*Inherited from [P5tCube](p5tcube.md).[angleTypeId](p5tcube.md#static-angletypeid)*

*Defined in [cube/cube.ts:6](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L6)*

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

▪ **easeTypeId**: *object* = CubeMotorChar.easeTypeId

*Inherited from [P5tCube](p5tcube.md).[easeTypeId](p5tcube.md#static-easetypeid)*

*Defined in [cube/cube.ts:5](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L5)*

#### Type declaration:

* **accel**: *1* = 1

* **accelDecel**: *3* = 3

* **constant**: *0* = 0

* **decel**: *2* = 2

___

### `Static` moveTypeId

▪ **moveTypeId**: *object* = CubeMotorChar.moveTypeId

*Inherited from [P5tCube](p5tcube.md).[moveTypeId](p5tcube.md#static-movetypeid)*

*Defined in [cube/cube.ts:4](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L4)*

#### Type declaration:

* **efficient**: *0* = 0

* **rotate1st**: *2* = 2

* **withoutBack**: *1* = 1

___

### `Static` postureId

▪ **postureId**: *object* = CubeSensorChar.postureId

*Inherited from [P5tCube](p5tcube.md).[postureId](p5tcube.md#static-postureid)*

*Defined in [cube/cube.ts:3](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L3)*

#### Type declaration:

* **back**: *"back"* = "back"

* **bottom**: *"bottom"* = "bottom"

* **front**: *"front"* = "front"

* **left**: *"left"* = "left"

* **right**: *"right"* = "right"

* **top**: *"top"* = "top"

___

### `Static` `Readonly` rotateTypeId

▪ **rotateTypeId**: *object* = {
    efficient: 'efficient',
    clockwise: 'clockwise',
    counterClockwise: 'counterClockwise',
  } as const

*Inherited from [P5tCube](p5tcube.md).[rotateTypeId](p5tcube.md#static-readonly-rotatetypeid)*

*Defined in [cube/cube.ts:8](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L8)*

#### Type declaration:

* **clockwise**: *"clockwise"* = "clockwise"

* **counterClockwise**: *"counterClockwise"* = "counterClockwise"

* **efficient**: *"efficient"* = "efficient"

___

### `Static` seId

▪ **seId**: *object* = CubeSoundChar.seId

*Inherited from [P5tCube](p5tcube.md).[seId](p5tcube.md#static-seid)*

*Defined in [cube/cube.ts:2](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L2)*

#### Type declaration:

* **cancel**: *2* = 2

* **cursor**: *3* = 3

* **effect1**: *9* = 9

* **effect2**: *10* = 10

* **enter**: *0* = 0

* **get1**: *6* = 6

* **get2**: *7* = 7

* **get3**: *8* = 8

* **matIn**: *4* = 4

* **matOut**: *5* = 5

* **selected**: *1* = 1

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: [CubeListner](../globals.md#cubelistner)): *void*

*Inherited from [P5tCube](p5tcube.md).[addEventListener](p5tcube.md#addeventlistener)*

*Defined in [cube/cube.ts:80](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L80)*

Register callback from upper layer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Support following types.  - 'buttonpress'  - 'buttonrelease'  - 'batterylevelchange'  - 'sensorflat'  - 'sensorcollision'  - 'sensordoubletap'  - 'sensorposturechange'  - 'positionid'  - 'standardid' |
`listener` | [CubeListner](../globals.md#cubelistner) | - |

**Returns:** *void*

___

###  connect

▸ **connect**(): *Promise‹[Cube](cube.md)›*

*Inherited from [P5tCube](p5tcube.md).[connect](p5tcube.md#connect)*

*Defined in [cube/cube.ts:37](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L37)*

Connect to the toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` includes a Cube instance.

___

###  connectP5tCube

▸ **connectP5tCube**(): *Promise‹[P5tCube](p5tcube.md)›*

*Defined in [p5tCube.ts:7](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L7)*

Connect to the toio™Core Cube.

**Returns:** *Promise‹[P5tCube](p5tcube.md)›*

Promise. `resolve` includes a P5tCube instance.

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [P5tCube](p5tcube.md).[disconnect](p5tcube.md#disconnect)*

*Defined in [cube/cube.ts:59](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L59)*

Disconnet from the toio™Core Cube.

**Returns:** *void*

___

###  distanceToCube

▸ **distanceToCube**(`cube`: [Cube](cube.md)): *number*

*Inherited from [P5tCube](p5tcube.md).[distanceToCube](p5tcube.md#distancetocube)*

*Defined in [cube/cube.ts:611](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L611)*

Calculate distance from this Cube to the specified Cube.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cube` | [Cube](cube.md) | aim cube instance.  |

**Returns:** *number*

Distance from this Cube to the specified Cube.

___

###  distanceToXY

▸ **distanceToXY**(`x`: number, `y`: number): *number*

*Inherited from [P5tCube](p5tcube.md).[distanceToXY](p5tcube.md#distancetoxy)*

*Defined in [cube/cube.ts:593](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L593)*

Calculate distance from this Cube to the specified coordinate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X value of the target coordinate. |
`y` | number | Y value of the target coordinate.  |

**Returns:** *number*

Distance from this Cube to the specified coordinate.

___

###  move

▸ **move**(`left`: number, `right`: number, `duration`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[move](p5tcube.md#move)*

*Defined in [cube/cube.ts:378](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L378)*

Move with specified speed/time.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`left` | number | - | Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value. |
`right` | number | - | Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value. |
`duration` | number | 0 | Motor control duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`aim`: object, `maxSpeed`: number, `moveType`: 0, `easeType`: 0, `timeout`: number): *void*

*Overrides [Cube](cube.md).[moveTo](cube.md#moveto)*

*Defined in [p5tCube.ts:69](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L69)*

Move to specified coordinate/angle.

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

###  moveToCube

▸ **moveToCube**(`cube`: [Cube](cube.md), `maxSpeed`: number, `moveType`: 0, `easeType`: 0, `timeout`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[moveToCube](p5tcube.md#movetocube)*

*Defined in [cube/cube.ts:456](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L456)*

Move to specified cube's position.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`cube` | [Cube](cube.md) | - | aim cube instance. |
`maxSpeed` | number | - | 8 to 115, and 0 integer value. |
`moveType` | 0 | CubeMotorChar.moveTypeId.efficient | (Optional)moveTypeId value. default is moveTypeId.efficient |
`easeType` | 0 | CubeMotorChar.easeTypeId.constant | (Optional)easeTypeId value. default is easeTypeId.constant |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

###  moveToMulti

▸ **moveToMulti**(`aims`: object[], `maxSpeed`: number, `moveType`: 0, `easeType`: 0, `isAppend`: boolean, `timeout`: number): *void*

*Overrides [Cube](cube.md).[moveToMulti](cube.md#movetomulti)*

*Defined in [p5tCube.ts:94](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L94)*

Move to specified several coordinate/angle.

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

### `Protected` normalizeAngleDegrees

▸ **normalizeAngleDegrees**(`angle`: number): *number*

*Inherited from [P5tCube](p5tcube.md).[normalizeAngleDegrees](p5tcube.md#protected-normalizeangledegrees)*

*Defined in [cube/cube.ts:669](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L669)*

Normalize the specified angle in Degrees within [0-360]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Normalization target angle.  |

**Returns:** *number*

Normalized angle in Degrees.

___

### `Protected` normalizeAngleRadian

▸ **normalizeAngleRadian**(`angle`: number): *number*

*Inherited from [P5tCube](p5tcube.md).[normalizeAngleRadian](p5tcube.md#protected-normalizeangleradian)*

*Defined in [cube/cube.ts:687](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L687)*

Normalize the specified angle in Radian within [(-Math.PI)-Math.PI]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | Normalization target angle.  |

**Returns:** *number*

Normalized angle in Radian.

___

### `Protected` onPositionIdChanged

▸ **onPositionIdChanged**(`info`: [positionIdInfo](../globals.md#positionidinfo)): *void*

*Overrides [Cube](cube.md).[onPositionIdChanged](cube.md#protected-onpositionidchanged)*

*Defined in [p5tCube.ts:24](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L24)*

For prepared callback function `cubePositionIdChanged`.

**Parameters:**

Name | Type |
------ | ------ |
`info` | [positionIdInfo](../globals.md#positionidinfo) |

**Returns:** *void*

___

### `Protected` onStandardIdChanged

▸ **onStandardIdChanged**(`info`: [standardIdInfo](../globals.md#standardidinfo)): *void*

*Overrides [Cube](cube.md).[onStandardIdChanged](cube.md#protected-onstandardidchanged)*

*Defined in [p5tCube.ts:34](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L34)*

For prepared callback function `cubeStandardIdChanged`.

**Parameters:**

Name | Type |
------ | ------ |
`info` | [standardIdInfo](../globals.md#standardidinfo) |

**Returns:** *void*

___

###  playMelody

▸ **playMelody**(`melody`: object[]): *void*

*Inherited from [P5tCube](p5tcube.md).[playMelody](p5tcube.md#playmelody)*

*Defined in [cube/cube.ts:359](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L359)*

Play melody specified wiht MIDI note sequence.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`melody` | object[] | An array composed of some combinations of `note` and `duration` values. Use like below. ``` playMelody( [   { note: 0x50, duration: 0x1E },   { note: 0x52, duration: 0x1E },   { note: 0x54, duration: 0x1E } ] ); ``` Refer to the instruction of `playSingleNote()` for note/duration.  |

**Returns:** *void*

___

###  playSE

▸ **playSE**(`idSE`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[playSE](p5tcube.md#playse)*

*Defined in [cube/cube.ts:331](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L331)*

Play pre-installed sound effect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idSE` | number | Sounde effect index value. Please make use of static `seId.xxx` properties in this class.  |

**Returns:** *void*

___

###  playSingleNote

▸ **playSingleNote**(`note`: number, `duration`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[playSingleNote](p5tcube.md#playsinglenote)*

*Defined in [cube/cube.ts:342](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L342)*

Play single MIDI note.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`note` | number | - | MIDI note number 0-128. 128 is a special value for no-sound.        Refer [toio™Core Cube Spec: Note number and note name](https://toio.github.io/toio-spec/docs/ble_sound). |
`duration` | number | 30 | Sound duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  relativeAngleToXY

▸ **relativeAngleToXY**(`x`: number, `y`: number): *number*

*Inherited from [P5tCube](p5tcube.md).[relativeAngleToXY](p5tcube.md#relativeangletoxy)*

*Defined in [cube/cube.ts:628](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L628)*

Calculate relative angle from this Cube to the specified coordinate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X value of the target coordinate. |
`y` | number | Y value of the target coordinate.  |

**Returns:** *number*

Relative angle from this Cube to the specified coordinate.

___

###  rotate

▸ **rotate**(`speed`: number, `duration`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[rotate](p5tcube.md#rotate)*

*Defined in [cube/cube.ts:480](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L480)*

Rotate with specified speed/time.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`speed` | number | - | Motor speed. Plus value means clockwise direction and the other is counter-clockwise. -115 to -8, 8 to 115, and 0 integer value. |
`duration` | number | 0 | Motor control duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[setFrameRate](p5tcube.md#setframerate)*

*Defined in [cube/cube.ts:290](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L290)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Inherited from [P5tCube](p5tcube.md).[stop](p5tcube.md#stop)*

*Defined in [cube/cube.ts:367](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L367)*

Stop moving.

**Returns:** *void*

___

###  turnLightOff

▸ **turnLightOff**(): *void*

*Inherited from [P5tCube](p5tcube.md).[turnLightOff](p5tcube.md#turnlightoff)*

*Defined in [cube/cube.ts:297](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L297)*

Turn the light off.

**Returns:** *void*

___

###  turnLightOn

▸ **turnLightOn**(`color`: p5.Color, `duration`: number): *void*

*Defined in [p5tCube.ts:47](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L47)*

Turn the light on with specified `p5.Color` and duration(optional) values.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`color` | p5.Color | - | p5.Color value. RGBA values are reflected. |
`duration` | number | 0 | Light up duration in msec. 0-2550 ( 0: Eternally ).  |

**Returns:** *void*

___

###  turnLightOnRGB

▸ **turnLightOnRGB**(`r`: number, `g`: number, `b`: number, `duration`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[turnLightOnRGB](p5tcube.md#turnlightonrgb)*

*Defined in [cube/cube.ts:309](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L309)*

Turn the light on with specified RGB and duration(optional) values.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`r` | number | - | Red value. 0-255. |
`g` | number | - | Green value. 0-255. |
`b` | number | - | Blue value. 0-255. |
`duration` | number | 0 | Light up duration in msec. 0-2550 ( 0: Eternally ).  |

**Returns:** *void*

___

###  turnLightOnRGBA

▸ **turnLightOnRGBA**(`r`: number, `g`: number, `b`: number, `a`: number, `duration`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[turnLightOnRGBA](p5tcube.md#turnlightonrgba)*

*Defined in [cube/cube.ts:322](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L322)*

Turn the light on with specified RGB, Alpha and duration(optional) values.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`r` | number | - | Red value. 0-255. |
`g` | number | - | Green value. 0-255. |
`b` | number | - | Blue value. 0-255. |
`a` | number | - | Alpha( = Brightness ) value. 0-255. |
`duration` | number | 0 | Light up duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  turnTo

▸ **turnTo**(`angle`: number, `speed`: number, `rotateType`: string, `timeout`: number): *void*

*Overrides [Cube](cube.md).[turnTo](cube.md#turnto)*

*Defined in [p5tCube.ts:118](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L118)*

Turn to specified angle.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`angle` | number | - | Aim angle. Unit depends on the setting angleMode(Default: RADIANS) |
`speed` | number | - | 8 to 115, and 0 integer value. |
`rotateType` | string | P5tCube.rotateTypeId.efficient | (Optional)rotation direction value. default is rotateType.efficient |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

###  turnToCube

▸ **turnToCube**(`cube`: [Cube](cube.md), `speed`: number, `rotateType`: string, `timeout`: number): *void*

*Inherited from [P5tCube](p5tcube.md).[turnToCube](p5tcube.md#turntocube)*

*Defined in [cube/cube.ts:574](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L574)*

Turn to specified cube's position.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`cube` | [Cube](cube.md) | - | aim cube instance. |
`speed` | number | - | 8 to 115, and 0 integer value. |
`rotateType` | string | Cube.rotateTypeId.efficient | (Optional)rotation direction value. default is rotateType.efficient |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

###  turnToXY

▸ **turnToXY**(`x`: number, `y`: number, `speed`: number, `rotateType`: string, `timeout`: number): *void*

*Overrides [Cube](cube.md).[turnToXY](cube.md#turntoxy)*

*Defined in [p5tCube.ts:137](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L137)*

Turn to the specified coordinate.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | - | X value of the target coordinate. |
`y` | number | - | Y value of the target coordinate. |
`speed` | number | - | 8 to 115, and 0 integer value. |
`rotateType` | string | P5tCube.rotateTypeId.efficient | (Optional)rotation direction value. default is rotateType.efficient |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

### `Static` connectNewCube

▸ **connectNewCube**(): *Promise‹[Cube](cube.md)›*

*Inherited from [P5tCube](p5tcube.md).[connectNewCube](p5tcube.md#static-connectnewcube)*

*Defined in [cube/cube.ts:706](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cube.ts#L706)*

Connect to new toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` handler includes a instance of connected `Cube`.

___

### `Static` connectNewP5tCube

▸ **connectNewP5tCube**(): *Promise‹[P5tCube](p5tcube.md)›*

*Defined in [p5tCube.ts:213](https://github.com/tetunori/p5.toio/blob/1b39efe/src/p5tCube.ts#L213)*

Connect to new toio™Core Cube.

**Returns:** *Promise‹[P5tCube](p5tcube.md)›*

Promise. `resolve` handler includes a instance of connected `P5tCube`.
