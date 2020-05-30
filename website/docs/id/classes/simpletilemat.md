---
id: "simpletilemat"
title: "SimpleTileMat"
sidebar_label: "SimpleTileMat"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [SimpleTileMat](simpletilemat.md)

## Hierarchy

  ↳ [TileMat](tilemat.md)

  ↳ **SimpleTileMat**

## Index

### Properties

* [centerX](simpletilemat.md#static-readonly-centerx)
* [centerY](simpletilemat.md#static-readonly-centery)
* [matrixColumns](simpletilemat.md#static-readonly-matrixcolumns)
* [matrixMaxX](simpletilemat.md#static-readonly-matrixmaxx)
* [matrixMaxY](simpletilemat.md#static-readonly-matrixmaxy)
* [matrixMinX](simpletilemat.md#static-readonly-matrixminx)
* [matrixMinY](simpletilemat.md#static-readonly-matrixminy)
* [matrixRows](simpletilemat.md#static-readonly-matrixrows)
* [maxX](simpletilemat.md#static-readonly-maxx)
* [maxY](simpletilemat.md#static-readonly-maxy)
* [minX](simpletilemat.md#static-readonly-minx)
* [minY](simpletilemat.md#static-readonly-miny)

### Methods

* [getTileCenter](simpletilemat.md#static-gettilecenter)
* [getTileColumn](simpletilemat.md#static-gettilecolumn)
* [getTileMatrixIndex](simpletilemat.md#static-gettilematrixindex)
* [getTileRow](simpletilemat.md#static-gettilerow)
* [isOnMat](simpletilemat.md#static-isonmat)

## Properties

### `Static` `Readonly` centerX

▪ **centerX**: *250* = 250

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/simpleTileMat.ts:8](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L8)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *250* = 250

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/simpleTileMat.ts:9](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L9)*

___

### `Static` `Readonly` matrixColumns

▪ **matrixColumns**: *7* = 7

*Overrides [TileMat](tilemat.md).[matrixColumns](tilemat.md#static-readonly-matrixcolumns)*

*Defined in [id/position/simpleTileMat.ts:16](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L16)*

___

### `Static` `Readonly` matrixMaxX

▪ **matrixMaxX**: *402* = 402

*Overrides [TileMat](tilemat.md).[matrixMaxX](tilemat.md#static-readonly-matrixmaxx)*

*Defined in [id/position/simpleTileMat.ts:13](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L13)*

___

### `Static` `Readonly` matrixMaxY

▪ **matrixMaxY**: *358* = 358

*Overrides [TileMat](tilemat.md).[matrixMaxY](tilemat.md#static-readonly-matrixmaxy)*

*Defined in [id/position/simpleTileMat.ts:14](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L14)*

___

### `Static` `Readonly` matrixMinX

▪ **matrixMinX**: *98* = 98

*Overrides [TileMat](tilemat.md).[matrixMinX](tilemat.md#static-readonly-matrixminx)*

*Defined in [id/position/simpleTileMat.ts:11](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L11)*

___

### `Static` `Readonly` matrixMinY

▪ **matrixMinY**: *142* = 142

*Overrides [TileMat](tilemat.md).[matrixMinY](tilemat.md#static-readonly-matrixminy)*

*Defined in [id/position/simpleTileMat.ts:12](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L12)*

___

### `Static` `Readonly` matrixRows

▪ **matrixRows**: *5* = 5

*Overrides [TileMat](tilemat.md).[matrixRows](tilemat.md#static-readonly-matrixrows)*

*Defined in [id/position/simpleTileMat.ts:15](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L15)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *402* = 402

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/simpleTileMat.ts:6](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L6)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *358* = 358

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/simpleTileMat.ts:7](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L7)*

___

### `Static` `Readonly` minX

▪ **minX**: *98* = 98

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/simpleTileMat.ts:4](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L4)*

___

### `Static` `Readonly` minY

▪ **minY**: *142* = 142

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/simpleTileMat.ts:5](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/simpleTileMat.ts#L5)*

## Methods

### `Static` getTileCenter

▸ **getTileCenter**(`row`: number | undefined, `column`: number | undefined): *object | undefined*

*Inherited from [TileMat](tilemat.md).[getTileCenter](tilemat.md#static-gettilecenter)*

*Defined in [id/position/tileMat.ts:18](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/tileMat.ts#L18)*

Get center of the tile position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`row` | number &#124; undefined | Target row number. |
`column` | number &#124; undefined | Target column number.  |

**Returns:** *object | undefined*

Center position x, y of the specified row/column. If specified row/column is invalid, this function returns undefined.

___

### `Static` getTileColumn

▸ **getTileColumn**(`x`: number | undefined): *number | undefined*

*Inherited from [TileMat](tilemat.md).[getTileColumn](tilemat.md#static-gettilecolumn)*

*Defined in [id/position/tileMat.ts:102](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/tileMat.ts#L102)*

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

*Inherited from [TileMat](tilemat.md).[getTileMatrixIndex](tilemat.md#static-gettilematrixindex)*

*Defined in [id/position/tileMat.ts:49](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/tileMat.ts#L49)*

Get matrix index of simple play(tile) mat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *object | undefined*

row/column numbers. If specified (x, y) is not on toio Collection tile mat, this function returns undefined.

___

### `Static` getTileRow

▸ **getTileRow**(`y`: number | undefined): *number | undefined*

*Inherited from [TileMat](tilemat.md).[getTileRow](tilemat.md#static-gettilerow)*

*Defined in [id/position/tileMat.ts:79](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/tileMat.ts#L79)*

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

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
