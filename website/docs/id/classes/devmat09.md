---
id: "devmat09"
title: "DevMat09"
sidebar_label: "DevMat09"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat09](devmat09.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat09**

## Index

### Properties

* [centerX](devmat09.md#static-readonly-centerx)
* [centerY](devmat09.md#static-readonly-centery)
* [maxX](devmat09.md#static-readonly-maxx)
* [maxY](devmat09.md#static-readonly-maxy)
* [minX](devmat09.md#static-readonly-minx)
* [minY](devmat09.md#static-readonly-miny)

### Methods

* [isOnMat](devmat09.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *797* = 797

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:78](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L78)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *143* = 143

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:79](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L79)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *949* = 949

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:76](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L76)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *250* = 250

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:77](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L77)*

___

### `Static` `Readonly` minX

▪ **minX**: *645* = 645

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:74](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L74)*

___

### `Static` `Readonly` minY

▪ **minY**: *35* = 35

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:75](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L75)*

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
