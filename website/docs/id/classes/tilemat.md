---
id: "tilemat"
title: "TileMat"
sidebar_label: "TileMat"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [TileMat](tilemat.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **TileMat**

  ↳ [ColorTileMat](colortilemat.md)

  ↳ [SimpleTileMat](simpletilemat.md)

## Index

### Properties

* [centerX](tilemat.md#static-protected-centerx)
* [centerY](tilemat.md#static-protected-centery)
* [matrixColumns](tilemat.md#static-readonly-matrixcolumns)
* [matrixMaxX](tilemat.md#static-readonly-matrixmaxx)
* [matrixMaxY](tilemat.md#static-readonly-matrixmaxy)
* [matrixMinX](tilemat.md#static-readonly-matrixminx)
* [matrixMinY](tilemat.md#static-readonly-matrixminy)
* [matrixRows](tilemat.md#static-readonly-matrixrows)
* [maxX](tilemat.md#static-protected-maxx)
* [maxY](tilemat.md#static-protected-maxy)
* [minX](tilemat.md#static-protected-minx)
* [minY](tilemat.md#static-protected-miny)

### Methods

* [getTileCenter](tilemat.md#static-gettilecenter)
* [getTileColumn](tilemat.md#static-gettilecolumn)
* [getTileMatrixIndex](tilemat.md#static-gettilematrixindex)
* [getTileRow](tilemat.md#static-gettilerow)
* [isOnMat](tilemat.md#static-isonmat)

## Properties

### `Static` `Protected` centerX

▪ **centerX**: *number*

*Inherited from [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/mat.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L6)*

___

### `Static` `Protected` centerY

▪ **centerY**: *number*

*Inherited from [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/mat.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L7)*

___

### `Static` `Readonly` matrixColumns

▪ **matrixColumns**: *number*

*Defined in [id/position/tileMat.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L8)*

___

### `Static` `Readonly` matrixMaxX

▪ **matrixMaxX**: *number*

*Defined in [id/position/tileMat.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L5)*

___

### `Static` `Readonly` matrixMaxY

▪ **matrixMaxY**: *number*

*Defined in [id/position/tileMat.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L6)*

___

### `Static` `Readonly` matrixMinX

▪ **matrixMinX**: *number*

*Defined in [id/position/tileMat.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L3)*

___

### `Static` `Readonly` matrixMinY

▪ **matrixMinY**: *number*

*Defined in [id/position/tileMat.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L4)*

___

### `Static` `Readonly` matrixRows

▪ **matrixRows**: *number*

*Defined in [id/position/tileMat.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L7)*

___

### `Static` `Protected` maxX

▪ **maxX**: *number*

*Inherited from [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/mat.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L4)*

___

### `Static` `Protected` maxY

▪ **maxY**: *number*

*Inherited from [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/mat.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L5)*

___

### `Static` `Protected` minX

▪ **minX**: *number*

*Inherited from [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/mat.ts:2](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L2)*

___

### `Static` `Protected` minY

▪ **minY**: *number*

*Inherited from [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/mat.ts:3](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/mat.ts#L3)*

## Methods

### `Static` getTileCenter

▸ **getTileCenter**(`row`: number | undefined, `column`: number | undefined): *object | undefined*

*Defined in [id/position/tileMat.ts:18](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L18)*

Get center of the tile position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`row` | number &#124; undefined | Target row number. |
`column` | number &#124; undefined | Target column number.  |

**Returns:** *object | undefined*

Center position x, y of the specified row/column as `{x: number, y: number}`. If specified row/column is invalid, this function returns undefined.

___

### `Static` getTileColumn

▸ **getTileColumn**(`x`: number | undefined): *number | undefined*

*Defined in [id/position/tileMat.ts:101](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L101)*

Get column index number of the tile matrix.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point.  |

**Returns:** *number | undefined*

Column index number.

___

### `Static` getTileMatrixIndex

▸ **getTileMatrixIndex**(`x`: number | undefined, `y`: number | undefined): *object | undefined*

*Defined in [id/position/tileMat.ts:49](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L49)*

Get matrix index of simple play(tile) mat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *object | undefined*

row/column numbers as `{row: number, column: number}`. If specified (x, y) is not on toio Collection tile mat, this function returns undefined.

___

### `Static` getTileRow

▸ **getTileRow**(`y`: number | undefined): *number | undefined*

*Defined in [id/position/tileMat.ts:74](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/position/tileMat.ts#L74)*

Get row index number of the tile matrix.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *number | undefined*

Row index number.

___

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
