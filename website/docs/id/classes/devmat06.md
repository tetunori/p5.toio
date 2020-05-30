---
id: "devmat06"
title: "DevMat06"
sidebar_label: "DevMat06"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat06](devmat06.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat06**

## Index

### Properties

* [centerX](devmat06.md#static-readonly-centerx)
* [centerY](devmat06.md#static-readonly-centery)
* [maxX](devmat06.md#static-readonly-maxx)
* [maxY](devmat06.md#static-readonly-maxy)
* [minX](devmat06.md#static-readonly-minx)
* [minY](devmat06.md#static-readonly-miny)

### Methods

* [isOnMat](devmat06.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *492* = 492

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:52](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L52)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *359* = 359

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:53](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L53)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *644* = 644

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:50](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L50)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *466* = 466

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:51](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L51)*

___

### `Static` `Readonly` minX

▪ **minX**: *340* = 340

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:48](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L48)*

___

### `Static` `Readonly` minY

▪ **minY**: *251* = 251

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:49](https://github.com/tetunori/p5.toio/blob/ef4c5ff/src/id/position/devMat.ts#L49)*

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
