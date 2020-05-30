---
id: "devmat01"
title: "DevMat01"
sidebar_label: "DevMat01"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat01](devmat01.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat01**

## Index

### Properties

* [centerX](devmat01.md#static-readonly-centerx)
* [centerY](devmat01.md#static-readonly-centery)
* [maxX](devmat01.md#static-readonly-maxx)
* [maxY](devmat01.md#static-readonly-maxy)
* [minX](devmat01.md#static-readonly-minx)
* [minY](devmat01.md#static-readonly-miny)

### Methods

* [isOnMat](devmat01.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *187* = 187

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:7](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L7)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *143* = 143

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:8](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L8)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *339* = 339

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:5](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L5)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *250* = 250

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:6](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L6)*

___

### `Static` `Readonly` minX

▪ **minX**: *34* = 34

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:3](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L3)*

___

### `Static` `Readonly` minY

▪ **minY**: *35* = 35

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:4](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L4)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [Mat](mat.md).[isOnMat](mat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
