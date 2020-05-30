---
id: "cubelightchar"
title: "CubeLightChar"
sidebar_label: "CubeLightChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeLightChar](cubelightchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeLightChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubelightchar.md#constructor)

### Properties

* [characteristic](cubelightchar.md#protected-characteristic)
* [errStrInProgress](cubelightchar.md#protected-errstrinprogress)
* [uuid](cubelightchar.md#readonly-uuid)

### Methods

* [prepare](cubelightchar.md#prepare)
* [readValue](cubelightchar.md#readvalue)
* [setFrameRate](cubelightchar.md#setframerate)
* [turnLightOff](cubelightchar.md#turnlightoff)
* [turnLightOnRGB](cubelightchar.md#turnlightonrgb)
* [turnLightOnRGBA](cubelightchar.md#turnlightonrgba)
* [writeValue](cubelightchar.md#writevalue)
* [writeValueCore](cubelightchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeLightChar**(`service`: BluetoothRemoteGATTService): *[CubeLightChar](cubelightchar.md)*

*Inherited from [CubeChar](cubechar.md).[constructor](cubechar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeLightChar](cubelightchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeChar](cubechar.md).[characteristic](cubechar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeChar](cubechar.md).[errStrInProgress](cubechar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20103-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/lightChar.ts:4](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/lightChar.ts#L4)*

## Methods

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/char.ts:30](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L30)*

Prepare for using characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[readValue](cubechar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[setFrameRate](cubechar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L142)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  turnLightOff

▸ **turnLightOff**(): *void*

*Defined in [cube/char/lightChar.ts:17](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/lightChar.ts#L17)*

Turn the light off.

**Returns:** *void*

___

###  turnLightOnRGB

▸ **turnLightOnRGB**(`r`: number, `g`: number, `b`: number, `duration`: number): *void*

*Defined in [cube/char/lightChar.ts:30](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/lightChar.ts#L30)*

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

*Defined in [cube/char/lightChar.ts:43](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/lightChar.ts#L43)*

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

###  writeValue

▸ **writeValue**(`buf`: ArrayBuffer): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[writeValue](cubechar.md#writevalue)*

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L55)*

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

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/f95e57b/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
