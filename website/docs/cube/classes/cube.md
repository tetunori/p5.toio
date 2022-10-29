---
id: "cube"
title: "Cube"
sidebar_label: "Cube"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [Cube](cube.md)

## Hierarchy

* **Cube**

  ↳ [P5tCube](p5tcube.md)

## Index

### Constructors

* [constructor](cube.md#constructor)

### Properties

* [angle](cube.md#angle)
* [batteryLevel](cube.md#batterylevel)
* [bleProtocolVersion](cube.md#bleprotocolversion)
* [buttonPressed](cube.md#buttonpressed)
* [cube](cube.md#protected-cube)
* [flat](cube.md#flat)
* [magnet](cube.md#magnet)
* [name](cube.md#name)
* [posture](cube.md#posture)
* [sensorX](cube.md#sensorx)
* [sensorY](cube.md#sensory)
* [shakeLevel](cube.md#shakelevel)
* [standardId](cube.md#standardid)
* [x](cube.md#x)
* [y](cube.md#y)
* [angleTypeId](cube.md#static-angletypeid)
* [easeTypeId](cube.md#static-easetypeid)
* [magnetId](cube.md#static-magnetid)
* [moveTypeId](cube.md#static-movetypeid)
* [postureId](cube.md#static-postureid)
* [rotateTypeId](cube.md#static-readonly-rotatetypeid)
* [seId](cube.md#static-seid)
* [shakeLevelId](cube.md#static-shakelevelid)

### Methods

* [addEventListener](cube.md#addeventlistener)
* [configMagnet](cube.md#configmagnet)
* [connect](cube.md#connect)
* [disconnect](cube.md#disconnect)
* [distanceToCube](cube.md#distancetocube)
* [distanceToXY](cube.md#distancetoxy)
* [move](cube.md#move)
* [moveTo](cube.md#moveto)
* [moveToCube](cube.md#movetocube)
* [moveToMulti](cube.md#movetomulti)
* [normalizeAngleDegrees](cube.md#protected-normalizeangledegrees)
* [normalizeAngleRadian](cube.md#protected-normalizeangleradian)
* [onPositionIdChanged](cube.md#protected-onpositionidchanged)
* [onStandardIdChanged](cube.md#protected-onstandardidchanged)
* [playMelody](cube.md#playmelody)
* [playSE](cube.md#playse)
* [playSingleNote](cube.md#playsinglenote)
* [relativeAngleToXY](cube.md#relativeangletoxy)
* [rotate](cube.md#rotate)
* [setFrameRate](cube.md#setframerate)
* [stop](cube.md#stop)
* [turnLightOff](cube.md#turnlightoff)
* [turnLightOnRGB](cube.md#turnlightonrgb)
* [turnLightOnRGBA](cube.md#turnlightonrgba)
* [turnTo](cube.md#turnto)
* [turnToCube](cube.md#turntocube)
* [turnToXY](cube.md#turntoxy)
* [connectNewCube](cube.md#static-connectnewcube)

## Constructors

###  constructor

\+ **new Cube**(`cube`: [CubeBase](cubebase.md)): *[Cube](cube.md)*

*Defined in [cube/cube.ts:48](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`cube` | [CubeBase](cubebase.md) |

**Returns:** *[Cube](cube.md)*

## Properties

###  angle

• **angle**: *number | undefined* = undefined

*Defined in [cube/cube.ts:37](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L37)*

___

###  batteryLevel

• **batteryLevel**: *number | undefined* = undefined

*Defined in [cube/cube.ts:44](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L44)*

___

###  bleProtocolVersion

• **bleProtocolVersion**: *string | undefined* = undefined

*Defined in [cube/cube.ts:45](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L45)*

___

###  buttonPressed

• **buttonPressed**: *boolean | undefined* = undefined

*Defined in [cube/cube.ts:43](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L43)*

___

### `Protected` cube

• **cube**: *[CubeBase](cubebase.md) | undefined* = undefined

*Defined in [cube/cube.ts:48](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L48)*

___

###  flat

• **flat**: *boolean | undefined* = undefined

*Defined in [cube/cube.ts:39](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L39)*

___

###  magnet

• **magnet**: *string | undefined* = undefined

*Defined in [cube/cube.ts:42](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L42)*

___

###  name

• **name**: *string | undefined* = undefined

*Defined in [cube/cube.ts:46](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L46)*

___

###  posture

• **posture**: *string | undefined* = undefined

*Defined in [cube/cube.ts:40](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L40)*

___

###  sensorX

• **sensorX**: *number | undefined* = undefined

*Defined in [cube/cube.ts:35](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L35)*

___

###  sensorY

• **sensorY**: *number | undefined* = undefined

*Defined in [cube/cube.ts:36](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L36)*

___

###  shakeLevel

• **shakeLevel**: *number | undefined* = undefined

*Defined in [cube/cube.ts:41](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L41)*

___

###  standardId

• **standardId**: *string | undefined* = undefined

*Defined in [cube/cube.ts:38](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L38)*

___

###  x

• **x**: *number | undefined* = undefined

*Defined in [cube/cube.ts:33](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L33)*

___

###  y

• **y**: *number | undefined* = undefined

*Defined in [cube/cube.ts:34](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L34)*

___

### `Static` angleTypeId

▪ **angleTypeId**: *object* = CubeMotorChar.angleTypeId

*Defined in [cube/cube.ts:25](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L25)*

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

*Defined in [cube/cube.ts:24](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L24)*

#### Type declaration:

* **accel**: *1* = 1

* **accelDecel**: *3* = 3

* **constant**: *0* = 0

* **decel**: *2* = 2

___

### `Static` magnetId

▪ **magnetId**: *object* = CubeSensorChar.magnetId

*Defined in [cube/cube.ts:22](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L22)*

#### Type declaration:

* **noMagnet**: *"noMagnet"* = "noMagnet"

* **pattern1**: *"pattern1"* = "pattern1"

* **pattern2**: *"pattern2"* = "pattern2"

* **pattern3**: *"pattern3"* = "pattern3"

* **pattern4**: *"pattern4"* = "pattern4"

* **pattern5**: *"pattern5"* = "pattern5"

* **pattern6**: *"pattern6"* = "pattern6"

___

### `Static` moveTypeId

▪ **moveTypeId**: *object* = CubeMotorChar.moveTypeId

*Defined in [cube/cube.ts:23](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L23)*

#### Type declaration:

* **efficient**: *0* = 0

* **rotate1st**: *2* = 2

* **withoutBack**: *1* = 1

___

### `Static` postureId

▪ **postureId**: *object* = CubeSensorChar.postureId

*Defined in [cube/cube.ts:20](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L20)*

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

*Defined in [cube/cube.ts:27](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L27)*

#### Type declaration:

* **clockwise**: *"clockwise"* = "clockwise"

* **counterClockwise**: *"counterClockwise"* = "counterClockwise"

* **efficient**: *"efficient"* = "efficient"

___

### `Static` seId

▪ **seId**: *object* = CubeSoundChar.seId

*Defined in [cube/cube.ts:19](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L19)*

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

___

### `Static` shakeLevelId

▪ **shakeLevelId**: *object* = CubeSensorChar.shakeLevelId

*Defined in [cube/cube.ts:21](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L21)*

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

▸ **addEventListener**(`type`: string, `listener`: [CubeListner](../globals.md#cubelistner)): *void*

*Defined in [cube/cube.ts:106](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L106)*

Register callback from upper layer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Support following types.  - 'buttonpress'  - 'buttonrelease'  - 'batterylevelchange'  - 'sensorflat'  - 'sensorcollision'  - 'sensordoubletap'  - 'sensorposturechange'  - 'sensorshakelevelchange'  - 'sensormagnetchange'  - 'positionid'  - 'standardid' |
`listener` | [CubeListner](../globals.md#cubelistner) | - |

**Returns:** *void*

___

###  configMagnet

▸ **configMagnet**(`enable`: boolean): *void*

*Defined in [cube/cube.ts:779](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L779)*

Enable/Disable magnet function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enable` | boolean | boolean value. set `true` to enable and `false` to disable.   |

**Returns:** *void*

___

###  connect

▸ **connect**(): *Promise‹[Cube](cube.md)›*

*Defined in [cube/cube.ts:61](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L61)*

Connect to the toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` includes a Cube instance.

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [cube/cube.ts:83](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L83)*

Disconnet from the toio™Core Cube.

**Returns:** *void*

___

###  distanceToCube

▸ **distanceToCube**(`cube`: [Cube](cube.md)): *number*

*Defined in [cube/cube.ts:683](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L683)*

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

*Defined in [cube/cube.ts:665](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L665)*

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

*Defined in [cube/cube.ts:455](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L455)*

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

*Defined in [cube/cube.ts:470](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L470)*

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

*Defined in [cube/cube.ts:533](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L533)*

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

*Defined in [cube/cube.ts:501](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L501)*

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

*Defined in [cube/cube.ts:741](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L741)*

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

*Defined in [cube/cube.ts:759](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L759)*

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

*Defined in [cube/cube.ts:317](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L317)*

For prepared callback function `cubePositionIdChanged`.

**Parameters:**

Name | Type |
------ | ------ |
`info` | [positionIdInfo](../globals.md#positionidinfo) |

**Returns:** *void*

___

### `Protected` onStandardIdChanged

▸ **onStandardIdChanged**(`info`: [standardIdInfo](../globals.md#standardidinfo)): *void*

*Defined in [cube/cube.ts:339](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L339)*

For prepared callback function `cubeStandardIdChanged`.

**Parameters:**

Name | Type |
------ | ------ |
`info` | [standardIdInfo](../globals.md#standardidinfo) |

**Returns:** *void*

___

###  playMelody

▸ **playMelody**(`melody`: object[]): *void*

*Defined in [cube/cube.ts:436](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L436)*

Play melody specified wiht MIDI note sequence.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`melody` | object[] | An array composed of some combinations of `note` and `duration` values. Use like below. ``` playMelody( [   { note: 0x50, duration: 0x1E },   { note: 0x52, duration: 0x1E },   { note: 0x54, duration: 0x1E } ] ); ``` Refer to the instruction of `playSingleNote()` for note/duration.  |

**Returns:** *void*

___

###  playSE

▸ **playSE**(`idSE`: number): *void*

*Defined in [cube/cube.ts:408](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L408)*

Play pre-installed sound effect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idSE` | number | Sounde effect index value. Please make use of static `seId.xxx` properties in this class.  |

**Returns:** *void*

___

###  playSingleNote

▸ **playSingleNote**(`note`: number, `duration`: number): *void*

*Defined in [cube/cube.ts:419](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L419)*

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

*Defined in [cube/cube.ts:700](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L700)*

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

*Defined in [cube/cube.ts:557](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L557)*

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

*Defined in [cube/cube.ts:367](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L367)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [cube/cube.ts:444](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L444)*

Stop moving.

**Returns:** *void*

___

###  turnLightOff

▸ **turnLightOff**(): *void*

*Defined in [cube/cube.ts:374](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L374)*

Turn the light off.

**Returns:** *void*

___

###  turnLightOnRGB

▸ **turnLightOnRGB**(`r`: number, `g`: number, `b`: number, `duration`: number): *void*

*Defined in [cube/cube.ts:386](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L386)*

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

*Defined in [cube/cube.ts:399](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L399)*

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

*Defined in [cube/cube.ts:571](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L571)*

Turn to specified angle.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`angle` | number | - | Aim angle. Unit depends on the setting angleMode(Default: RADIANS) |
`speed` | number | - | 8 to 115, and 0 integer value. |
`rotateType` | string | Cube.rotateTypeId.efficient | (Optional)rotation direction value. default is rotateType.efficient |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

###  turnToCube

▸ **turnToCube**(`cube`: [Cube](cube.md), `speed`: number, `rotateType`: string, `timeout`: number): *void*

*Defined in [cube/cube.ts:646](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L646)*

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

*Defined in [cube/cube.ts:618](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L618)*

Turn to the specified coordinate.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | - | X value of the target coordinate. |
`y` | number | - | Y value of the target coordinate. |
`speed` | number | - | 8 to 115, and 0 integer value. |
`rotateType` | string | Cube.rotateTypeId.efficient | (Optional)rotation direction value. default is rotateType.efficient |
`timeout` | number | 5 | (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.  |

**Returns:** *void*

___

### `Static` connectNewCube

▸ **connectNewCube**(): *Promise‹[Cube](cube.md)›*

*Defined in [cube/cube.ts:793](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cube.ts#L793)*

Connect to new toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` handler includes a instance of connected `Cube`.
