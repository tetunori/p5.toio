---
id: "globals"
title: "p5.toio"
sidebar_label: "Globals"
---

[p5.toio](index.md) › [Globals](globals.md)

## Index

### Classes

* [Cube](classes/cube.md)
* [CubeBase](classes/cubebase.md)
* [CubeBatteryChar](classes/cubebatterychar.md)
* [CubeButtonChar](classes/cubebuttonchar.md)
* [CubeChar](classes/cubechar.md)
* [CubeConfigChar](classes/cubeconfigchar.md)
* [CubeConnector](classes/cubeconnector.md)
* [CubeIDChar](classes/cubeidchar.md)
* [CubeLightChar](classes/cubelightchar.md)
* [CubeMotorChar](classes/cubemotorchar.md)
* [CubeScanner](classes/cubescanner.md)
* [CubeSensorChar](classes/cubesensorchar.md)
* [CubeSoundChar](classes/cubesoundchar.md)
* [P5tCube](classes/p5tcube.md)

### Interfaces

* [CubeBaseIF](interfaces/cubebaseif.md)
* [CubeCharIF](interfaces/cubecharif.md)

### Type aliases

* [CubeBatteryCharListner](globals.md#cubebatterycharlistner)
* [CubeBatteryLevelListner](globals.md#cubebatterylevellistner)
* [CubeButtonCharListner](globals.md#cubebuttoncharlistner)
* [CubeButtonPressedStatusListner](globals.md#cubebuttonpressedstatuslistner)
* [CubeCharInstance](globals.md#cubecharinstance)
* [CubeCollisionListner](globals.md#cubecollisionlistner)
* [CubeConfigCharListner](globals.md#cubeconfigcharlistner)
* [CubeDoubleTapListner](globals.md#cubedoubletaplistner)
* [CubeFlatListner](globals.md#cubeflatlistner)
* [CubeIdCharListner](globals.md#cubeidcharlistner)
* [CubeListner](globals.md#cubelistner)
* [CubeMagnetListner](globals.md#cubemagnetlistner)
* [CubePositionIdListner](globals.md#cubepositionidlistner)
* [CubePostureListner](globals.md#cubeposturelistner)
* [CubeProtocolVersionListner](globals.md#cubeprotocolversionlistner)
* [CubeSensorCharListner](globals.md#cubesensorcharlistner)
* [CubeShakeLevelListner](globals.md#cubeshakelevellistner)
* [CubeStandardIdListner](globals.md#cubestandardidlistner)
* [configInfo](globals.md#configinfo)
* [idInfo](globals.md#idinfo)
* [positionIdInfo](globals.md#positionidinfo)
* [sensorInfo](globals.md#sensorinfo)
* [standardIdInfo](globals.md#standardidinfo)

## Type aliases

###  CubeBatteryCharListner

Ƭ **CubeBatteryCharListner**: *[CubeBatteryLevelListner](globals.md#cubebatterylevellistner)*

*Defined in [cube/char/batteryChar.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/batteryChar.ts#L3)*

___

###  CubeBatteryLevelListner

Ƭ **CubeBatteryLevelListner**: *function*

*Defined in [cube/char/batteryChar.ts:2](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/batteryChar.ts#L2)*

#### Type declaration:

▸ (`batteryLevel`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`batteryLevel` | number |

___

###  CubeButtonCharListner

Ƭ **CubeButtonCharListner**: *[CubeButtonPressedStatusListner](globals.md#cubebuttonpressedstatuslistner)*

*Defined in [cube/char/buttonChar.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/buttonChar.ts#L3)*

___

###  CubeButtonPressedStatusListner

Ƭ **CubeButtonPressedStatusListner**: *function*

*Defined in [cube/char/buttonChar.ts:2](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/buttonChar.ts#L2)*

#### Type declaration:

▸ (`isPressed?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isPressed?` | undefined &#124; false &#124; true |

___

###  CubeCharInstance

Ƭ **CubeCharInstance**: *[CubeIDChar](classes/cubeidchar.md) | [CubeMotorChar](classes/cubemotorchar.md) | [CubeLightChar](classes/cubelightchar.md) | [CubeSensorChar](classes/cubesensorchar.md) | [CubeBatteryChar](classes/cubebatterychar.md) | [CubeSoundChar](classes/cubesoundchar.md) | [CubeButtonChar](classes/cubebuttonchar.md) | [CubeConfigChar](classes/cubeconfigchar.md) | undefined*

*Defined in [cube/cubeBase.ts:17](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L17)*

___

###  CubeCollisionListner

Ƭ **CubeCollisionListner**: *function*

*Defined in [cube/char/sensorChar.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L10)*

#### Type declaration:

▸ (): *void*

___

###  CubeConfigCharListner

Ƭ **CubeConfigCharListner**: *[CubeProtocolVersionListner](globals.md#cubeprotocolversionlistner)*

*Defined in [cube/char/configChar.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L8)*

___

###  CubeDoubleTapListner

Ƭ **CubeDoubleTapListner**: *function*

*Defined in [cube/char/sensorChar.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L11)*

#### Type declaration:

▸ (): *void*

___

###  CubeFlatListner

Ƭ **CubeFlatListner**: *function*

*Defined in [cube/char/sensorChar.ts:9](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L9)*

#### Type declaration:

▸ (`isFlat`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isFlat` | boolean |

___

###  CubeIdCharListner

Ƭ **CubeIdCharListner**: *[CubePositionIdListner](globals.md#cubepositionidlistner) | [CubeStandardIdListner](globals.md#cubestandardidlistner)*

*Defined in [cube/char/idChar.ts:28](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L28)*

___

###  CubeListner

Ƭ **CubeListner**: *[CubeSensorCharListner](globals.md#cubesensorcharlistner) | [CubeBatteryCharListner](globals.md#cubebatterycharlistner) | [CubeButtonCharListner](globals.md#cubebuttoncharlistner) | [CubeConfigCharListner](globals.md#cubeconfigcharlistner) | [CubeIdCharListner](globals.md#cubeidcharlistner)*

*Defined in [cube/cubeBase.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L10)*

___

###  CubeMagnetListner

Ƭ **CubeMagnetListner**: *function*

*Defined in [cube/char/sensorChar.ts:14](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L14)*

#### Type declaration:

▸ (`magnet`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`magnet` | string |

___

###  CubePositionIdListner

Ƭ **CubePositionIdListner**: *function*

*Defined in [cube/char/idChar.ts:26](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L26)*

#### Type declaration:

▸ (`info`: [positionIdInfo](globals.md#positionidinfo)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [positionIdInfo](globals.md#positionidinfo) |

___

###  CubePostureListner

Ƭ **CubePostureListner**: *function*

*Defined in [cube/char/sensorChar.ts:12](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L12)*

#### Type declaration:

▸ (`posture`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`posture` | string |

___

###  CubeProtocolVersionListner

Ƭ **CubeProtocolVersionListner**: *function*

*Defined in [cube/char/configChar.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L7)*

#### Type declaration:

▸ (`version`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`version` | string |

___

###  CubeSensorCharListner

Ƭ **CubeSensorCharListner**: *[CubeFlatListner](globals.md#cubeflatlistner) | [CubeCollisionListner](globals.md#cubecollisionlistner) | [CubeDoubleTapListner](globals.md#cubedoubletaplistner) | [CubePostureListner](globals.md#cubeposturelistner) | [CubeShakeLevelListner](globals.md#cubeshakelevellistner) | [CubeMagnetListner](globals.md#cubemagnetlistner)*

*Defined in [cube/char/sensorChar.ts:15](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L15)*

___

###  CubeShakeLevelListner

Ƭ **CubeShakeLevelListner**: *function*

*Defined in [cube/char/sensorChar.ts:13](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L13)*

#### Type declaration:

▸ (`shakeLevel`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shakeLevel` | number |

___

###  CubeStandardIdListner

Ƭ **CubeStandardIdListner**: *function*

*Defined in [cube/char/idChar.ts:27](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L27)*

#### Type declaration:

▸ (`info`: [standardIdInfo](globals.md#standardidinfo)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [standardIdInfo](globals.md#standardidinfo) |

___

###  configInfo

Ƭ **configInfo**: *object*

*Defined in [cube/char/configChar.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/configChar.ts#L3)*

#### Type declaration:

* **bleProtcolVersion**: *string*

___

###  idInfo

Ƭ **idInfo**: *object*

*Defined in [cube/char/idChar.ts:21](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L21)*

#### Type declaration:

* **positionId**: *[positionIdInfo](globals.md#positionidinfo)*

* **standardId**: *[standardIdInfo](globals.md#standardidinfo)*

___

###  positionIdInfo

Ƭ **positionIdInfo**: *object | undefined*

*Defined in [cube/char/idChar.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L3)*

___

###  sensorInfo

Ƭ **sensorInfo**: *object*

*Defined in [cube/char/sensorChar.ts:2](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/sensorChar.ts#L2)*

#### Type declaration:

* **flat**: *boolean*

* **magnet**: *string*

* **posture**: *string*

* **shakeLevel**: *number*

___

###  standardIdInfo

Ƭ **standardIdInfo**: *object | undefined*

*Defined in [cube/char/idChar.ts:13](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/char/idChar.ts#L13)*
