---
id: "p5tcube"
title: "P5tCube"
sidebar_label: "P5tCube"
---


## Hierarchy

* [Cube](cube.md)

  ↳ **P5tCube**

## Index

### Constructors

* [constructor](p5tcube.md#constructor)

### Properties

* [angle](p5tcube.md#angle)
* [batteryLevel](p5tcube.md#batterylevel)
* [bleProtocolVersion](p5tcube.md#bleprotocolversion)
* [buttonPressed](p5tcube.md#buttonpressed)
* [cube](p5tcube.md#protected-cube)
* [flat](p5tcube.md#flat)
* [magnet](p5tcube.md#magnet)
* [name](p5tcube.md#name)
* [posture](p5tcube.md#posture)
* [sensorX](p5tcube.md#sensorx)
* [sensorY](p5tcube.md#sensory)
* [shakeLevel](p5tcube.md#shakelevel)
* [standardId](p5tcube.md#standardid)
* [x](p5tcube.md#x)
* [y](p5tcube.md#y)
* [angleTypeId](p5tcube.md#static-angletypeid)
* [easeTypeId](p5tcube.md#static-easetypeid)
* [magnetId](p5tcube.md#static-magnetid)
* [moveTypeId](p5tcube.md#static-movetypeid)
* [postureId](p5tcube.md#static-postureid)
* [rotateTypeId](p5tcube.md#static-readonly-rotatetypeid)
* [seId](p5tcube.md#static-seid)
* [shakeLevelId](p5tcube.md#static-shakelevelid)

### Methods

* [addEventListener](p5tcube.md#addeventlistener)
* [configMagnet](p5tcube.md#configmagnet)
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

*Inherited from [Cube](cube.md).[constructor](cube.md#constructor)*

*Defined in [cube/cube.ts:48](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`cube` | [CubeBase](cubebase.md) |

**Returns:** *[P5tCube](p5tcube.md)*

## Properties

###  angle

• **angle**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[angle](cube.md#angle)*

*Defined in [cube/cube.ts:37](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L37)*

___

###  batteryLevel

• **batteryLevel**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[batteryLevel](cube.md#batterylevel)*

*Defined in [cube/cube.ts:44](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L44)*

___

###  bleProtocolVersion

• **bleProtocolVersion**: *string | undefined* = undefined

*Inherited from [Cube](cube.md).[bleProtocolVersion](cube.md#bleprotocolversion)*

*Defined in [cube/cube.ts:45](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L45)*

___

###  buttonPressed

• **buttonPressed**: *boolean | undefined* = undefined

*Inherited from [Cube](cube.md).[buttonPressed](cube.md#buttonpressed)*

*Defined in [cube/cube.ts:43](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L43)*

___

### `Protected` cube

• **cube**: *[CubeBase](cubebase.md) | undefined* = undefined

*Inherited from [Cube](cube.md).[cube](cube.md#protected-cube)*

*Defined in [cube/cube.ts:48](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L48)*

___

###  flat

• **flat**: *boolean | undefined* = undefined

*Inherited from [Cube](cube.md).[flat](cube.md#flat)*

*Defined in [cube/cube.ts:39](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L39)*

___

###  magnet

• **magnet**: *string | undefined* = undefined

*Inherited from [Cube](cube.md).[magnet](cube.md#magnet)*

*Defined in [cube/cube.ts:42](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L42)*

___

###  name

• **name**: *string | undefined* = undefined

*Inherited from [Cube](cube.md).[name](cube.md#name)*

*Defined in [cube/cube.ts:46](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L46)*

___

###  posture

• **posture**: *string | undefined* = undefined

*Inherited from [Cube](cube.md).[posture](cube.md#posture)*

*Defined in [cube/cube.ts:40](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L40)*

___

###  sensorX

• **sensorX**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[sensorX](cube.md#sensorx)*

*Defined in [cube/cube.ts:35](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L35)*

___

###  sensorY

• **sensorY**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[sensorY](cube.md#sensory)*

*Defined in [cube/cube.ts:36](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L36)*

___

###  shakeLevel

• **shakeLevel**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[shakeLevel](cube.md#shakelevel)*

*Defined in [cube/cube.ts:41](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L41)*

___

###  standardId

• **standardId**: *string | undefined* = undefined

*Inherited from [Cube](cube.md).[standardId](cube.md#standardid)*

*Defined in [cube/cube.ts:38](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L38)*

___

###  x

• **x**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[x](cube.md#x)*

*Defined in [cube/cube.ts:33](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L33)*

___

###  y

• **y**: *number | undefined* = undefined

*Inherited from [Cube](cube.md).[y](cube.md#y)*

*Defined in [cube/cube.ts:34](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L34)*

___

### `Static` angleTypeId

▪ **angleTypeId**: *object* = CubeMotorChar.angleTypeId

*Inherited from [Cube](cube.md).[angleTypeId](cube.md#static-angletypeid)*

*Defined in [cube/cube.ts:25](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L25)*

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

*Inherited from [Cube](cube.md).[easeTypeId](cube.md#static-easetypeid)*

*Defined in [cube/cube.ts:24](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L24)*

#### Type declaration:

* **accel**: *1* = 1

* **accelDecel**: *3* = 3

* **constant**: *0* = 0

* **decel**: *2* = 2

___

### `Static` magnetId

▪ **magnetId**: *object* = CubeSensorChar.magnetId

*Inherited from [Cube](cube.md).[magnetId](cube.md#static-magnetid)*

*Defined in [cube/cube.ts:22](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L22)*

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

*Inherited from [Cube](cube.md).[moveTypeId](cube.md#static-movetypeid)*

*Defined in [cube/cube.ts:23](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L23)*

#### Type declaration:

* **efficient**: *0* = 0

* **rotate1st**: *2* = 2

* **withoutBack**: *1* = 1

___

### `Static` postureId

▪ **postureId**: *object* = CubeSensorChar.postureId

*Inherited from [Cube](cube.md).[postureId](cube.md#static-postureid)*

*Defined in [cube/cube.ts:20](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L20)*

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

*Inherited from [Cube](cube.md).[rotateTypeId](cube.md#static-readonly-rotatetypeid)*

*Defined in [cube/cube.ts:27](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L27)*

#### Type declaration:

* **clockwise**: *"clockwise"* = "clockwise"

* **counterClockwise**: *"counterClockwise"* = "counterClockwise"

* **efficient**: *"efficient"* = "efficient"

___

### `Static` seId

▪ **seId**: *object* = CubeSoundChar.seId

*Inherited from [Cube](cube.md).[seId](cube.md#static-seid)*

*Defined in [cube/cube.ts:19](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L19)*

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

*Inherited from [Cube](cube.md).[shakeLevelId](cube.md#static-shakelevelid)*

*Defined in [cube/cube.ts:21](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L21)*

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

*Inherited from [Cube](cube.md).[addEventListener](cube.md#addeventlistener)*

*Defined in [cube/cube.ts:106](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L106)*

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

*Inherited from [Cube](cube.md).[configMagnet](cube.md#configmagnet)*

*Defined in [cube/cube.ts:779](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L779)*

Enable/Disable magnet function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enable` | boolean | boolean value. set `true` to enable and `false` to disable.   |

**Returns:** *void*

___

###  connect

▸ **connect**(): *Promise‹[Cube](cube.md)›*

*Inherited from [Cube](cube.md).[connect](cube.md#connect)*

*Defined in [cube/cube.ts:61](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L61)*

Connect to the toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` includes a Cube instance.

___

###  connectP5tCube

▸ **connectP5tCube**(): *Promise‹[P5tCube](p5tcube.md)›*

*Defined in [p5tCube.ts:12](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L12)*

Connect to the toio™Core Cube.

**Returns:** *Promise‹[P5tCube](p5tcube.md)›*

Promise. `resolve` includes a P5tCube instance.

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [Cube](cube.md).[disconnect](cube.md#disconnect)*

*Defined in [cube/cube.ts:83](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L83)*

Disconnet from the toio™Core Cube.

**Returns:** *void*

___

###  distanceToCube

▸ **distanceToCube**(`cube`: [Cube](cube.md)): *number*

*Inherited from [Cube](cube.md).[distanceToCube](cube.md#distancetocube)*

*Defined in [cube/cube.ts:683](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L683)*

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

*Inherited from [Cube](cube.md).[distanceToXY](cube.md#distancetoxy)*

*Defined in [cube/cube.ts:665](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L665)*

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

*Inherited from [Cube](cube.md).[move](cube.md#move)*

*Defined in [cube/cube.ts:455](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L455)*

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

*Defined in [p5tCube.ts:74](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L74)*

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

*Inherited from [Cube](cube.md).[moveToCube](cube.md#movetocube)*

*Defined in [cube/cube.ts:533](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L533)*

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

*Defined in [p5tCube.ts:99](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L99)*

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

*Inherited from [Cube](cube.md).[normalizeAngleDegrees](cube.md#protected-normalizeangledegrees)*

*Defined in [cube/cube.ts:741](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L741)*

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

*Inherited from [Cube](cube.md).[normalizeAngleRadian](cube.md#protected-normalizeangleradian)*

*Defined in [cube/cube.ts:759](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L759)*

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

*Defined in [p5tCube.ts:29](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L29)*

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

*Defined in [p5tCube.ts:39](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L39)*

For prepared callback function `cubeStandardIdChanged`.

**Parameters:**

Name | Type |
------ | ------ |
`info` | [standardIdInfo](../globals.md#standardidinfo) |

**Returns:** *void*

___

###  playMelody

▸ **playMelody**(`melody`: object[]): *void*

*Inherited from [Cube](cube.md).[playMelody](cube.md#playmelody)*

*Defined in [cube/cube.ts:436](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L436)*

Play melody specified wiht MIDI note sequence.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`melody` | object[] | An array composed of some combinations of `note` and `duration` values. Use like below. ``` playMelody( [   { note: 0x50, duration: 0x1E },   { note: 0x52, duration: 0x1E },   { note: 0x54, duration: 0x1E } ] ); ``` Refer to the instruction of `playSingleNote()` for note/duration.  |

**Returns:** *void*

___

###  playSE

▸ **playSE**(`idSE`: number): *void*

*Inherited from [Cube](cube.md).[playSE](cube.md#playse)*

*Defined in [cube/cube.ts:408](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L408)*

Play pre-installed sound effect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idSE` | number | Sounde effect index value. Please make use of static `seId.xxx` properties in this class.  |

**Returns:** *void*

___

###  playSingleNote

▸ **playSingleNote**(`note`: number, `duration`: number): *void*

*Inherited from [Cube](cube.md).[playSingleNote](cube.md#playsinglenote)*

*Defined in [cube/cube.ts:419](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L419)*

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

*Inherited from [Cube](cube.md).[relativeAngleToXY](cube.md#relativeangletoxy)*

*Defined in [cube/cube.ts:700](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L700)*

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

*Inherited from [Cube](cube.md).[rotate](cube.md#rotate)*

*Defined in [cube/cube.ts:557](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L557)*

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

*Inherited from [Cube](cube.md).[setFrameRate](cube.md#setframerate)*

*Defined in [cube/cube.ts:367](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L367)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Inherited from [Cube](cube.md).[stop](cube.md#stop)*

*Defined in [cube/cube.ts:444](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L444)*

Stop moving.

**Returns:** *void*

___

###  turnLightOff

▸ **turnLightOff**(): *void*

*Inherited from [Cube](cube.md).[turnLightOff](cube.md#turnlightoff)*

*Defined in [cube/cube.ts:374](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L374)*

Turn the light off.

**Returns:** *void*

___

###  turnLightOn

▸ **turnLightOn**(`color`: p5.Color, `duration`: number): *void*

*Defined in [p5tCube.ts:52](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L52)*

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

*Inherited from [Cube](cube.md).[turnLightOnRGB](cube.md#turnlightonrgb)*

*Defined in [cube/cube.ts:386](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L386)*

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

*Inherited from [Cube](cube.md).[turnLightOnRGBA](cube.md#turnlightonrgba)*

*Defined in [cube/cube.ts:399](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L399)*

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

*Defined in [p5tCube.ts:123](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L123)*

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

*Inherited from [Cube](cube.md).[turnToCube](cube.md#turntocube)*

*Defined in [cube/cube.ts:646](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L646)*

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

*Defined in [p5tCube.ts:142](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L142)*

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

*Inherited from [Cube](cube.md).[connectNewCube](cube.md#static-connectnewcube)*

*Defined in [cube/cube.ts:793](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/cube.ts#L793)*

Connect to new toio™Core Cube.

**Returns:** *Promise‹[Cube](cube.md)›*

Promise. `resolve` handler includes a instance of connected `Cube`.

___

### `Static` connectNewP5tCube

▸ **connectNewP5tCube**(): *Promise‹[P5tCube](p5tcube.md)›*

*Defined in [p5tCube.ts:218](https://github.com/tetunori/p5.toio/blob/49ecddb/src/p5tCube.ts#L218)*

Connect to new toio™Core Cube.

**Returns:** *Promise‹[P5tCube](p5tcube.md)›*

Promise. `resolve` handler includes a instance of connected `P5tCube`.
