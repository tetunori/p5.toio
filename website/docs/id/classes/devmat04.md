---
id: "devmat04"
title: "DevMat04"
sidebar_label: "DevMat04"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat04](devmat04.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat04**

## Index

### Properties

* [centerX](devmat04.md#static-readonly-centerx)
* [centerY](devmat04.md#static-readonly-centery)
* [maxX](devmat04.md#static-readonly-maxx)
* [maxY](devmat04.md#static-readonly-maxy)
* [minX](devmat04.md#static-readonly-minx)
* [minY](devmat04.md#static-readonly-miny)

### Methods

* [isOnMat](devmat04.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *187* = 187

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:34](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L34)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *791* = 791

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:35](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L35)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *339* = 339

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:32](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L32)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *898* = 898

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:33](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L33)*

___

### `Static` `Readonly` minX

▪ **minX**: *34* = 34

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:30](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L30)*

___

### `Static` `Readonly` minY

▪ **minY**: *683* = 683

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:31](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/devMat.ts#L31)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [Mat](mat.md).[isOnMat](mat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
