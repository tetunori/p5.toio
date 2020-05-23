---
id: "mat"
title: "Mat"
sidebar_label: "Mat"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [Mat](mat.md)

## Hierarchy

* **Mat**

  ↳ [DevMat01](devmat01.md)

  ↳ [DevMat02](devmat02.md)

  ↳ [DevMat03](devmat03.md)

  ↳ [DevMat04](devmat04.md)

  ↳ [DevMat05](devmat05.md)

  ↳ [DevMat06](devmat06.md)

  ↳ [DevMat07](devmat07.md)

  ↳ [DevMat08](devmat08.md)

  ↳ [DevMat09](devmat09.md)

  ↳ [DevMat10](devmat10.md)

  ↳ [DevMat11](devmat11.md)

  ↳ [DevMat12](devmat12.md)

  ↳ [RingMat](ringmat.md)

  ↳ [TileMat](tilemat.md)

## Index

### Properties

* [centerX](mat.md#static-protected-centerx)
* [centerY](mat.md#static-protected-centery)
* [maxX](mat.md#static-protected-maxx)
* [maxY](mat.md#static-protected-maxy)
* [minX](mat.md#static-protected-minx)
* [minY](mat.md#static-protected-miny)

### Methods

* [isOnMat](mat.md#static-isonmat)

## Properties

### `Static` `Protected` centerX

▪ **centerX**: *number*

*Defined in [id/position/mat.ts:6](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L6)*

___

### `Static` `Protected` centerY

▪ **centerY**: *number*

*Defined in [id/position/mat.ts:7](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L7)*

___

### `Static` `Protected` maxX

▪ **maxX**: *number*

*Defined in [id/position/mat.ts:4](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L4)*

___

### `Static` `Protected` maxY

▪ **maxY**: *number*

*Defined in [id/position/mat.ts:5](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L5)*

___

### `Static` `Protected` minX

▪ **minX**: *number*

*Defined in [id/position/mat.ts:2](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L2)*

___

### `Static` `Protected` minY

▪ **minY**: *number*

*Defined in [id/position/mat.ts:3](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L3)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
