---
id: "cubebase"
title: "CubeBase"
sidebar_label: "CubeBase"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeBase](cubebase.md)

## Hierarchy

* **CubeBase**

## Implements

* [CubeBaseIF](../interfaces/cubebaseif.md)

## Index

### Constructors

* [constructor](cubebase.md#constructor)

### Properties

* [batteryChar](cubebase.md#batterychar)
* [buttonChar](cubebase.md#buttonchar)
* [idChar](cubebase.md#idchar)
* [lightChar](cubebase.md#lightchar)
* [motorChar](cubebase.md#motorchar)
* [sensorChar](cubebase.md#sensorchar)
* [soundChar](cubebase.md#soundchar)

### Methods

* [connect](cubebase.md#connect)
* [disconnect](cubebase.md#disconnect)
* [setFrameRate](cubebase.md#setframerate)

## Constructors

###  constructor

\+ **new CubeBase**(`device`: BluetoothDevice): *[CubeBase](cubebase.md)*

*Defined in [cube/cubeBase.ts:51](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`device` | BluetoothDevice |

**Returns:** *[CubeBase](cubebase.md)*

## Properties

###  batteryChar

• **batteryChar**: *[CubeBatteryChar](cubebatterychar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[batteryChar](../interfaces/cubebaseif.md#batterychar)*

*Defined in [cube/cubeBase.ts:36](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L36)*

___

###  buttonChar

• **buttonChar**: *[CubeButtonChar](cubebuttonchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[buttonChar](../interfaces/cubebaseif.md#buttonchar)*

*Defined in [cube/cubeBase.ts:38](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L38)*

___

###  idChar

• **idChar**: *[CubeIDChar](cubeidchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[idChar](../interfaces/cubebaseif.md#idchar)*

*Defined in [cube/cubeBase.ts:32](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L32)*

___

###  lightChar

• **lightChar**: *[CubeLightChar](cubelightchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[lightChar](../interfaces/cubebaseif.md#lightchar)*

*Defined in [cube/cubeBase.ts:34](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L34)*

___

###  motorChar

• **motorChar**: *[CubeMotorChar](cubemotorchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[motorChar](../interfaces/cubebaseif.md#motorchar)*

*Defined in [cube/cubeBase.ts:33](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L33)*

___

###  sensorChar

• **sensorChar**: *[CubeSensorChar](cubesensorchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[sensorChar](../interfaces/cubebaseif.md#sensorchar)*

*Defined in [cube/cubeBase.ts:35](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L35)*

___

###  soundChar

• **soundChar**: *[CubeSoundChar](cubesoundchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[soundChar](../interfaces/cubebaseif.md#soundchar)*

*Defined in [cube/cubeBase.ts:37](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L37)*

## Methods

###  connect

▸ **connect**(): *Promise‹[CubeBase](cubebase.md)›*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:62](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L62)*

Connect to the toio™Core Cube. Internally, this function includes GATT connect and prepare for all of the Characteristics.

**Returns:** *Promise‹[CubeBase](cubebase.md)›*

Promise. `resolve` handler says that API access to cube are available.

___

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:123](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L123)*

Disconnet from the toio™Core Cube.

**Returns:** *void*

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:177](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/cubeBase.ts#L177)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*
