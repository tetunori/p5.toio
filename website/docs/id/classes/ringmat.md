---
id: "ringmat"
title: "RingMat"
sidebar_label: "RingMat"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [RingMat](ringmat.md)

## Hierarchy

* [Mat](mat.md)

  ↳ **RingMat**

## Index

### Properties

* [blueLineY](ringmat.md#static-readonly-blueliney)
* [centerX](ringmat.md#static-readonly-centerx)
* [centerY](ringmat.md#static-readonly-centery)
* [greenLineY](ringmat.md#static-readonly-greenliney)
* [maxX](ringmat.md#static-readonly-maxx)
* [maxY](ringmat.md#static-readonly-maxy)
* [minX](ringmat.md#static-readonly-minx)
* [minY](ringmat.md#static-readonly-miny)
* [radius](ringmat.md#static-readonly-radius)
* [startPointBlueSideX](ringmat.md#static-readonly-startpointbluesidex)
* [startPointBlueSideY](ringmat.md#static-readonly-startpointbluesidey)
* [startPointGreenSideX](ringmat.md#static-readonly-startpointgreensidex)
* [startPointGreenSideY](ringmat.md#static-readonly-startpointgreensidey)

### Methods

* [isInFrontOfBlueLine](ringmat.md#static-isinfrontofblueline)
* [isInFrontOfGreenLine](ringmat.md#static-isinfrontofgreenline)
* [isInsideCircle](ringmat.md#static-isinsidecircle)
* [isOnMat](ringmat.md#static-isonmat)

## Properties

### `Static` `Readonly` blueLineY

▪ **blueLineY**: *88* = 88

*Defined in [id/position/ringMat.ts:13](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L13)*

___

### `Static` `Readonly` centerX

▪ **centerX**: *250* = 250

*Overrides [Mat](mat.md).[centerX](mat.md#static-protected-centerx)*

*Defined in [id/position/ringMat.ts:8](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L8)*

___

### `Static` `Readonly` centerY

▪ **centerY**: *250* = 250

*Overrides [Mat](mat.md).[centerY](mat.md#static-protected-centery)*

*Defined in [id/position/ringMat.ts:9](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L9)*

___

### `Static` `Readonly` greenLineY

▪ **greenLineY**: *410* = 410

*Defined in [id/position/ringMat.ts:14](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L14)*

___

### `Static` `Readonly` maxX

▪ **maxX**: *455* = 455

*Overrides [Mat](mat.md).[maxX](mat.md#static-protected-maxx)*

*Defined in [id/position/ringMat.ts:6](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L6)*

___

### `Static` `Readonly` maxY

▪ **maxY**: *455* = 455

*Overrides [Mat](mat.md).[maxY](mat.md#static-protected-maxy)*

*Defined in [id/position/ringMat.ts:7](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L7)*

___

### `Static` `Readonly` minX

▪ **minX**: *45* = 45

*Overrides [Mat](mat.md).[minX](mat.md#static-protected-minx)*

*Defined in [id/position/ringMat.ts:4](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L4)*

___

### `Static` `Readonly` minY

▪ **minY**: *45* = 45

*Overrides [Mat](mat.md).[minY](mat.md#static-protected-miny)*

*Defined in [id/position/ringMat.ts:5](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L5)*

___

### `Static` `Readonly` radius

▪ **radius**: *190* = 190

*Defined in [id/position/ringMat.ts:12](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L12)*

___

### `Static` `Readonly` startPointBlueSideX

▪ **startPointBlueSideX**: *250* = 250

*Defined in [id/position/ringMat.ts:15](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L15)*

___

### `Static` `Readonly` startPointBlueSideY

▪ **startPointBlueSideY**: *198* = 198

*Defined in [id/position/ringMat.ts:16](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L16)*

___

### `Static` `Readonly` startPointGreenSideX

▪ **startPointGreenSideX**: *250* = 250

*Defined in [id/position/ringMat.ts:17](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L17)*

___

### `Static` `Readonly` startPointGreenSideY

▪ **startPointGreenSideY**: *300* = 300

*Defined in [id/position/ringMat.ts:18](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L18)*

## Methods

### `Static` isInFrontOfBlueLine

▸ **isInFrontOfBlueLine**(`y`: number): *boolean*

*Defined in [id/position/ringMat.ts:47](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L47)*

Specified coordinate is in front of the blue line of toio Collection ring mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is in front of the blue line.

___

### `Static` isInFrontOfGreenLine

▸ **isInFrontOfGreenLine**(`y`: number): *boolean*

*Defined in [id/position/ringMat.ts:63](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L63)*

Specified coordinate is in front of the green line of toio Collection ring mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is in front of the green line.

___

### `Static` isInsideCircle

▸ **isInsideCircle**(`x`: number, `y`: number): *boolean*

*Defined in [id/position/ringMat.ts:28](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/ringMat.ts#L28)*

Specified coordinate is inside of the circle of toio Collection ring mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X coordinate of checking target point. |
`y` | number | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is inside of the circle.

___

### `Static` isOnMat

▸ **isOnMat**(`x`: number | undefined, `y`: number | undefined): *boolean*

*Inherited from [Mat](mat.md).[isOnMat](mat.md#static-isonmat)*

*Defined in [id/position/mat.ts:17](https://github.com/tetunori/p5.toio/blob/f95e57b/src/id/position/mat.ts#L17)*

Specified coordinate is on the mat or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number &#124; undefined | X coordinate of checking target point. |
`y` | number &#124; undefined | Y coordinate of checking target point.  |

**Returns:** *boolean*

true iff specified (x, y) is on this mat.
