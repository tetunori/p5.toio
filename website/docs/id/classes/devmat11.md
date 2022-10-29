---
id: "devmat11"
title: "DevMat11"
sidebar_label: "DevMat11"
---


## Hierarchy

* [Mat](mat.md)

  ↳ **DevMat11**

## Index

### Properties

* [centerX](devmat11.md#static-readonly-centerx)
* [centerY](devmat11.md#static-readonly-centery)
* [maxX](devmat11.md#static-readonly-maxx)
* [maxY](devmat11.md#static-readonly-maxy)
* [minX](devmat11.md#static-readonly-minx)
* [minY](devmat11.md#static-readonly-miny)

### Methods

* [isOnMat](devmat11.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *797* = 797

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/devMat.ts:97](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L97)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *575* = 575

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/devMat.ts:98](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L98)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *949* = 949

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/devMat.ts:95](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L95)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *682* = 682

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/devMat.ts:96](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L96)*

___

### `Static` `Readonly` minX

▪ **minX**: *645* = 645

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/devMat.ts:93](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L93)*

___

### `Static` `Readonly` minY

▪ **minY**: *467* = 467

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/devMat.ts:94](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/devMat.ts#L94)*

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
