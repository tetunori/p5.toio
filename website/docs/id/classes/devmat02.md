---
id: "devmat02"
title: "DevMat02"
sidebar_label: "DevMat02"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat02](devmat02.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat02**

## Index

### Properties

* [centerX](devmat02.md#static-readonly-centerx)
* [centerY](devmat02.md#static-readonly-centery)
* [maxX](devmat02.md#static-readonly-maxx)
* [maxY](devmat02.md#static-readonly-maxy)
* [minX](devmat02.md#static-readonly-minx)
* [minY](devmat02.md#static-readonly-miny)

### Methods

* [isOnMat](devmat02.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *187* = 187

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:16](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L16)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *359* = 359

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:17](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L17)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *339* = 339

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:14](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L14)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *466* = 466

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:15](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L15)*

___

### `Static` `Readonly` minX

▪ **minX**: *34* = 34

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:12](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L12)*

___

### `Static` `Readonly` minY

▪ **minY**: *251* = 251

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:13](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L13)*

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
