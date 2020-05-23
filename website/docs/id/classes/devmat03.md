---
id: "devmat03"
title: "DevMat03"
sidebar_label: "DevMat03"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat03](devmat03.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat03**

## Index

### Properties

* [centerX](devmat03.md#static-readonly-centerx)
* [centerY](devmat03.md#static-readonly-centery)
* [maxX](devmat03.md#static-readonly-maxx)
* [maxY](devmat03.md#static-readonly-maxy)
* [minX](devmat03.md#static-readonly-minx)
* [minY](devmat03.md#static-readonly-miny)

### Methods

* [isOnMat](devmat03.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *187* = 187

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:24](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L24)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *575* = 575

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:25](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L25)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *339* = 339

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:22](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L22)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *682* = 682

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:23](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L23)*

___

### `Static` `Readonly` minX

▪ **minX**: *34* = 34

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:20](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L20)*

___

### `Static` `Readonly` minY

▪ **minY**: *467* = 467

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:21](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/position/devMat.ts#L21)*

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
