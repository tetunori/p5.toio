---
id: "devmat05"
title: "DevMat05"
sidebar_label: "DevMat05"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat05](devmat05.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat05**

## Index

### Properties

* [centerX](devmat05.md#static-readonly-centerx)
* [centerY](devmat05.md#static-readonly-centery)
* [maxX](devmat05.md#static-readonly-maxx)
* [maxY](devmat05.md#static-readonly-maxy)
* [minX](devmat05.md#static-readonly-minx)
* [minY](devmat05.md#static-readonly-miny)

### Methods

* [isOnMat](devmat05.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *492* = 492

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:42](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L42)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *143* = 143

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:43](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L43)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *644* = 644

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:40](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L40)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *250* = 250

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:41](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L41)*

___

### `Static` `Readonly` minX

▪ **minX**: *340* = 340

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:38](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L38)*

___

### `Static` `Readonly` minY

▪ **minY**: *35* = 35

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:39](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L39)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [ColorTileMat](colortilemat.md).[isOnMat](colortilemat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
