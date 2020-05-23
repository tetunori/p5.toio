---
id: "devmat08"
title: "DevMat08"
sidebar_label: "DevMat08"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat08](devmat08.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat08**

## Index

### Properties

* [centerX](devmat08.md#static-readonly-centerx)
* [centerY](devmat08.md#static-readonly-centery)
* [maxX](devmat08.md#static-readonly-maxx)
* [maxY](devmat08.md#static-readonly-maxy)
* [minX](devmat08.md#static-readonly-minx)
* [minY](devmat08.md#static-readonly-miny)

### Methods

* [isOnMat](devmat08.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *492* = 492

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:69](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L69)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *791* = 791

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:70](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L70)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *644* = 644

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:67](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L67)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *898* = 898

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:68](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L68)*

___

### `Static` `Readonly` minX

▪ **minX**: *340* = 340

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:65](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L65)*

___

### `Static` `Readonly` minY

▪ **minY**: *683* = 683

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:66](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L66)*

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
