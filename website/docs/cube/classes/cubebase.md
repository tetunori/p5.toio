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
* [configChar](cubebase.md#configchar)
* [idChar](cubebase.md#idchar)
* [lightChar](cubebase.md#lightchar)
* [motorChar](cubebase.md#motorchar)
* [name](cubebase.md#name)
* [sensorChar](cubebase.md#sensorchar)
* [soundChar](cubebase.md#soundchar)

### Methods

* [connect](cubebase.md#connect)
* [disconnect](cubebase.md#disconnect)
* [setFrameRate](cubebase.md#setframerate)

## Constructors

###  constructor

\+ **new CubeBase**(`device`: BluetoothDevice): *[CubeBase](cubebase.md)*

*Defined in [cube/cubeBase.ts:65](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`device` | BluetoothDevice |

**Returns:** *[CubeBase](cubebase.md)*

## Properties

###  batteryChar

• **batteryChar**: *[CubeBatteryChar](cubebatterychar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[batteryChar](../interfaces/cubebaseif.md#batterychar)*

*Defined in [cube/cubeBase.ts:48](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L48)*

___

###  buttonChar

• **buttonChar**: *[CubeButtonChar](cubebuttonchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[buttonChar](../interfaces/cubebaseif.md#buttonchar)*

*Defined in [cube/cubeBase.ts:50](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L50)*

___

###  configChar

• **configChar**: *[CubeConfigChar](cubeconfigchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[configChar](../interfaces/cubebaseif.md#configchar)*

*Defined in [cube/cubeBase.ts:51](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L51)*

___

###  idChar

• **idChar**: *[CubeIDChar](cubeidchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[idChar](../interfaces/cubebaseif.md#idchar)*

*Defined in [cube/cubeBase.ts:44](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L44)*

___

###  lightChar

• **lightChar**: *[CubeLightChar](cubelightchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[lightChar](../interfaces/cubebaseif.md#lightchar)*

*Defined in [cube/cubeBase.ts:46](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L46)*

___

###  motorChar

• **motorChar**: *[CubeMotorChar](cubemotorchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[motorChar](../interfaces/cubebaseif.md#motorchar)*

*Defined in [cube/cubeBase.ts:45](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L45)*

___

###  name

• **name**: *string | undefined* = undefined

*Defined in [cube/cubeBase.ts:52](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L52)*

___

###  sensorChar

• **sensorChar**: *[CubeSensorChar](cubesensorchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[sensorChar](../interfaces/cubebaseif.md#sensorchar)*

*Defined in [cube/cubeBase.ts:47](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L47)*

___

###  soundChar

• **soundChar**: *[CubeSoundChar](cubesoundchar.md) | undefined* = undefined

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md).[soundChar](../interfaces/cubebaseif.md#soundchar)*

*Defined in [cube/cubeBase.ts:49](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L49)*

## Methods

###  connect

▸ **connect**(): *Promise‹[CubeBase](cubebase.md)›*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:77](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L77)*

Connect to the toio™Core Cube. Internally, this function includes GATT connect and prepare for all of the Characteristics.

**Returns:** *Promise‹[CubeBase](cubebase.md)›*

Promise. `resolve` handler says that API access to cube are available.

___

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:140](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L140)*

Disconnet from the toio™Core Cube.

**Returns:** *void*

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeBaseIF](../interfaces/cubebaseif.md)*

*Defined in [cube/cubeBase.ts:195](https://github.com/tetunori/p5.toio/blob/49eab6e/src/cube/cubeBase.ts#L195)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*
