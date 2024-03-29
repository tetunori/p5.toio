---
id: "colortilemat"
title: "ColorTileMat"
sidebar_label: "ColorTileMat"
---


## Hierarchy

  ↳ [TileMat](tilemat.md)

  ↳ **ColorTileMat**

## Index

### Properties

* [blueTiles](colortilemat.md#static-bluetiles)
* [centerX](colortilemat.md#static-readonly-centerx)
* [centerY](colortilemat.md#static-readonly-centery)
* [greenTiles](colortilemat.md#static-greentiles)
* [matrixColumns](colortilemat.md#static-readonly-matrixcolumns)
* [matrixMaxX](colortilemat.md#static-readonly-matrixmaxx)
* [matrixMaxY](colortilemat.md#static-readonly-matrixmaxy)
* [matrixMinX](colortilemat.md#static-readonly-matrixminx)
* [matrixMinY](colortilemat.md#static-readonly-matrixminy)
* [matrixRows](colortilemat.md#static-readonly-matrixrows)
* [maxX](colortilemat.md#static-readonly-maxx)
* [maxY](colortilemat.md#static-readonly-maxy)
* [minX](colortilemat.md#static-readonly-minx)
* [minY](colortilemat.md#static-readonly-miny)
* [redTiles](colortilemat.md#static-redtiles)
* [tileColor](colortilemat.md#static-readonly-tilecolor)
* [tileColorMatrix](colortilemat.md#static-tilecolormatrix)
* [whiteTiles](colortilemat.md#static-whitetiles)
* [yellowTiles](colortilemat.md#static-yellowtiles)

### Methods

* [getTileCenter](colortilemat.md#static-gettilecenter)
* [getTileColor](colortilemat.md#static-gettilecolor)
* [getTileColumn](colortilemat.md#static-gettilecolumn)
* [getTileMatrixIndex](colortilemat.md#static-gettilematrixindex)
* [getTileRow](colortilemat.md#static-gettilerow)
* [isOnMat](colortilemat.md#static-isonmat)

## Properties

### `Static` blueTiles

▪ **blueTiles**: *object[]* = [
    { row: 0, column: 1 },
    { row: 1, column: 4 },
    { row: 1, column: 6 },
    { row: 3, column: 0 },
    { row: 3, column: 6 },
    { row: 5, column: 2 },
    { row: 5, column: 4 },
    { row: 6, column: 7 },
    { row: 7, column: 0 },
    { row: 7, column: 4 },
  ]

*Defined in [id/position/colorTileMat.ts:153](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L153)*

___

### `Static` `Readonly` centerX

▪ **centerX**: *750* = 750

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/colorTileMat.ts:8](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L8)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *250* = 250

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/colorTileMat.ts:9](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L9)*

___

### `Static` greenTiles

▪ **greenTiles**: *object[]* = [
    { row: 1, column: 0 },
    { row: 2, column: 5 },
    { row: 2, column: 7 },
    { row: 3, column: 2 },
    { row: 4, column: 5 },
    { row: 4, column: 7 },
    { row: 6, column: 1 },
    { row: 6, column: 5 },
    { row: 8, column: 3 },
    { row: 8, column: 7 },
  ]

*Defined in [id/position/colorTileMat.ts:166](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L166)*

___

### `Static` `Readonly` matrixColumns

▪ **matrixColumns**: *9* = 9

*Overrides [TileMat](tilemat.md).[matrixColumns](tilemat.md#static-readonly-matrixcolumns)*

*Defined in [id/position/colorTileMat.ts:16](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L16)*

___

### `Static` `Readonly` matrixMaxX

▪ **matrixMaxX**: *947* = 947

*Overrides [TileMat](tilemat.md).[matrixMaxX](tilemat.md#static-readonly-matrixmaxx)*

*Defined in [id/position/colorTileMat.ts:13](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L13)*

___

### `Static` `Readonly` matrixMaxY

▪ **matrixMaxY**: *446* = 446

*Overrides [TileMat](tilemat.md).[matrixMaxY](tilemat.md#static-readonly-matrixmaxy)*

*Defined in [id/position/colorTileMat.ts:14](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L14)*

___

### `Static` `Readonly` matrixMinX

▪ **matrixMinX**: *555* = 555

*Overrides [TileMat](tilemat.md).[matrixMinX](tilemat.md#static-readonly-matrixminx)*

*Defined in [id/position/colorTileMat.ts:11](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L11)*

___

### `Static` `Readonly` matrixMinY

▪ **matrixMinY**: *53* = 53

*Overrides [TileMat](tilemat.md).[matrixMinY](tilemat.md#static-readonly-matrixminy)*

*Defined in [id/position/colorTileMat.ts:12](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L12)*

___

### `Static` `Readonly` matrixRows

▪ **matrixRows**: *9* = 9

*Overrides [TileMat](tilemat.md).[matrixRows](tilemat.md#static-readonly-matrixrows)*

*Defined in [id/position/colorTileMat.ts:15](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L15)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *955* = 955

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/colorTileMat.ts:6](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L6)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *455* = 455

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/colorTileMat.ts:7](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L7)*

___

### `Static` `Readonly` minX

▪ **minX**: *545* = 545

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/colorTileMat.ts:4](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L4)*

___

### `Static` `Readonly` minY

▪ **minY**: *45* = 45

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/colorTileMat.ts:5](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L5)*

___

### `Static` redTiles

▪ **redTiles**: *object[]* = [
    { row: 0, column: 5 },
    { row: 0, column: 7 },
    { row: 1, column: 2 },
    { row: 3, column: 4 },
    { row: 3, column: 8 },
    { row: 4, column: 1 },
    { row: 5, column: 8 },
    { row: 6, column: 3 },
    { row: 7, column: 6 },
    { row: 8, column: 1 },
  ]

*Defined in [id/position/colorTileMat.ts:140](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L140)*

___

### `Static` `Readonly` tileColor

▪ **tileColor**: *object* = {
    white: '#FFFFFF',
    red: '#e85654',
    blue: '#00aeca',
    green: '#95ba25',
    yellow: '#f0ac00',
  } as const

*Defined in [id/position/colorTileMat.ts:21](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L21)*

toio Collection tile color names.

#### Type declaration:

* **blue**: *"#00aeca"* = "#00aeca"

* **green**: *"#95ba25"* = "#95ba25"

* **red**: *"#e85654"* = "#e85654"

* **white**: *"#FFFFFF"* = "#FFFFFF"

* **yellow**: *"#f0ac00"* = "#f0ac00"

___

### `Static` tileColorMatrix

▪ **tileColorMatrix**: *"#FFFFFF" | "#e85654" | "#00aeca" | "#95ba25" | "#f0ac00"[][]* = [
    [
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cR,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cR,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cY,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
  ]

*Defined in [id/position/colorTileMat.ts:38](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L38)*

toio Collection tile color matrix.

___

### `Static` whiteTiles

▪ **whiteTiles**: *object[]* = [
    { row: 0, column: 0 },
    { row: 0, column: 2 },
    { row: 0, column: 4 },
    { row: 0, column: 6 },
    { row: 0, column: 8 },
    { row: 1, column: 1 },
    { row: 1, column: 3 },
    { row: 1, column: 5 },
    { row: 1, column: 7 },
    { row: 2, column: 0 },
    { row: 2, column: 2 },
    { row: 2, column: 4 },
    { row: 2, column: 6 },
    { row: 2, column: 8 },
    { row: 3, column: 1 },
    { row: 3, column: 3 },
    { row: 3, column: 5 },
    { row: 3, column: 7 },
    { row: 4, column: 0 },
    { row: 4, column: 2 },
    { row: 4, column: 4 },
    { row: 4, column: 6 },
    { row: 4, column: 8 },
    { row: 5, column: 1 },
    { row: 5, column: 3 },
    { row: 5, column: 5 },
    { row: 5, column: 7 },
    { row: 6, column: 0 },
    { row: 6, column: 2 },
    { row: 6, column: 4 },
    { row: 6, column: 6 },
    { row: 6, column: 8 },
    { row: 7, column: 1 },
    { row: 7, column: 3 },
    { row: 7, column: 5 },
    { row: 7, column: 7 },
    { row: 8, column: 0 },
    { row: 8, column: 2 },
    { row: 8, column: 4 },
    { row: 8, column: 6 },
    { row: 8, column: 8 },
  ]

*Defined in [id/position/colorTileMat.ts:192](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L192)*

___

### `Static` yellowTiles

▪ **yellowTiles**: *object[]* = [
    { row: 0, column: 3 },
    { row: 1, column: 8 },
    { row: 2, column: 1 },
    { row: 2, column: 3 },
    { row: 4, column: 3 },
    { row: 5, column: 0 },
    { row: 5, column: 6 },
    { row: 7, column: 2 },
    { row: 7, column: 8 },
    { row: 8, column: 5 },
  ]

*Defined in [id/position/colorTileMat.ts:179](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L179)*

## Methods

### `Static` getTileCenter

▸ **getTileCenter**(`row`: number | undefined, `column`: number | undefined): *object | undefined*

*Inherited from [TileMat](tilemat.md).[getTileCenter](tilemat.md#static-gettilecenter)*

*Defined in [id/position/tileMat.ts:18](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/tileMat.ts#L18)*

Get center of the tile position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`row` | number &#124; undefined | Target row number. |
`column` | number &#124; undefined | Target column number.  |

**Returns:** *object | undefined*

Center position x, y of the specified row/column as `{x: number, y: number}`. If specified row/column is invalid, this function returns undefined.

___

### `Static` getTileColor

▸ **getTileColor**(`x`: number | undefined, `y`: number | undefined): *string | undefined*

*Defined in [id/position/colorTileMat.ts:244](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/colorTileMat.ts#L244)*

Get tile color of toio Collection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *string | undefined*

tile color name string. If specified (x, y) is not on toio Collection tile mat, this function returns undefined.

___

### `Static` getTileColumn

▸ **getTileColumn**(`x`: number | undefined): *number | undefined*

*Inherited from [TileMat](tilemat.md).[getTileColumn](tilemat.md#static-gettilecolumn)*

*Defined in [id/position/tileMat.ts:101](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/tileMat.ts#L101)*

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

*Defined in [id/position/tileMat.ts:49](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/tileMat.ts#L49)*

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

*Inherited from [TileMat](tilemat.md).[getTileRow](tilemat.md#static-gettilerow)*

*Defined in [id/position/tileMat.ts:74](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/tileMat.ts#L74)*

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

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/49ecddb/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
