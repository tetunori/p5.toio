---
id: "devmat10"
title: "DevMat10"
sidebar_label: "DevMat10"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [DevMat10](devmat10.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat10**

## Index

### Properties

* [centerX](devmat10.md#static-readonly-centerx)
* [centerY](devmat10.md#static-readonly-centery)
* [maxX](devmat10.md#static-readonly-maxx)
* [maxY](devmat10.md#static-readonly-maxy)
* [minX](devmat10.md#static-readonly-minx)
* [minY](devmat10.md#static-readonly-miny)

### Methods

* [isOnMat](devmat10.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *797* = 797

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:88](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L88)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *359* = 359

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:89](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L89)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *949* = 949

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:86](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L86)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *466* = 466

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:87](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L87)*

___

### `Static` `Readonly` minX

▪ **minX**: *645* = 645

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:84](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L84)*

___

### `Static` `Readonly` minY

▪ **minY**: *251* = 251

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:85](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/devMat.ts#L85)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [Mat](mat.md).[isOnMat](mat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
