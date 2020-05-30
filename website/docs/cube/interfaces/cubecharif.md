---
id: "cubecharif"
title: "CubeCharIF"
sidebar_label: "CubeCharIF"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeCharIF](cubecharif.md)

## Hierarchy

* **CubeCharIF**

## Implemented by

* [CubeBatteryChar](../classes/cubebatterychar.md)
* [CubeButtonChar](../classes/cubebuttonchar.md)
* [CubeChar](../classes/cubechar.md)
* [CubeIDChar](../classes/cubeidchar.md)
* [CubeLightChar](../classes/cubelightchar.md)
* [CubeMotorChar](../classes/cubemotorchar.md)
* [CubeSensorChar](../classes/cubesensorchar.md)
* [CubeSoundChar](../classes/cubesoundchar.md)

## Index

### Methods

* [prepare](cubecharif.md#prepare)
* [readValue](cubecharif.md#readvalue)
* [setFrameRate](cubecharif.md#setframerate)
* [writeValue](cubecharif.md#writevalue)

## Methods

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Defined in [cube/char/char.ts:2](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L2)*

**Returns:** *Promise‹string | Error›*

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Defined in [cube/char/char.ts:4](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L4)*

**Returns:** *Promise‹DataView›*

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Defined in [cube/char/char.ts:5](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  writeValue

▸ **writeValue**(`buf`: ArrayBuffer): *Promise‹string | Error›*

*Defined in [cube/char/char.ts:3](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/cube/char/char.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`buf` | ArrayBuffer |

**Returns:** *Promise‹string | Error›*
