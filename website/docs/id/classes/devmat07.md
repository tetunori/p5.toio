---
id: "devmat07"
title: "DevMat07"
sidebar_label: "DevMat07"
---


## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat07**

## Index

### Properties

* [centerX](devmat07.md#static-readonly-centerx)
* [centerY](devmat07.md#static-readonly-centery)
* [maxX](devmat07.md#static-readonly-maxx)
* [maxY](devmat07.md#static-readonly-maxy)
* [minX](devmat07.md#static-readonly-minx)
* [minY](devmat07.md#static-readonly-miny)

### Methods

* [isOnMat](devmat07.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *492* = 492

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:61](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L61)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *575* = 575

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:62](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L62)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *644* = 644

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:59](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L59)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *682* = 682

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:60](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L60)*

___

### `Static` `Readonly` minX

▪ **minX**: *340* = 340

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:57](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L57)*

___

### `Static` `Readonly` minY

▪ **minY**: *467* = 467

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:58](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L58)*

## Methods

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [Mat](mat.md).[isOnMat](mat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
