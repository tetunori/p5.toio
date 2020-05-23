---
id: "cubechar"
title: "CubeChar"
sidebar_label: "CubeChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeChar](cubechar.md)

## Hierarchy

* **CubeChar**

  ↳ [CubeBatteryChar](cubebatterychar.md)

  ↳ [CubeButtonChar](cubebuttonchar.md)

  ↳ [CubeIDChar](cubeidchar.md)

  ↳ [CubeLightChar](cubelightchar.md)

  ↳ [CubeMotorChar](cubemotorchar.md)

  ↳ [CubeSensorChar](cubesensorchar.md)

  ↳ [CubeSoundChar](cubesoundchar.md)

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubechar.md#constructor)

### Properties

* [characteristic](cubechar.md#protected-characteristic)
* [errStrInProgress](cubechar.md#protected-errstrinprogress)
* [uuid](cubechar.md#protected-uuid)

### Methods

* [prepare](cubechar.md#prepare)
* [readValue](cubechar.md#readvalue)
* [setFrameRate](cubechar.md#setframerate)
* [writeValue](cubechar.md#writevalue)
* [writeValueCore](cubechar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeChar**(`service`: BluetoothRemoteGATTService): *[CubeChar](cubechar.md)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeChar](cubechar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L12)*

___

### `Protected` uuid

• **uuid**: *string* = ""

*Defined in [cube/char/char.ts:9](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L9)*

## Methods

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Defined in [cube/char/char.ts:30](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L30)*

Prepare for using characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L142)*

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

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L55)*

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

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/1b39efe/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
