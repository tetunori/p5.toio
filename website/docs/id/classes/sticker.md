---
id: "sticker"
title: "Sticker"
sidebar_label: "Sticker"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [Sticker](sticker.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **Sticker**

## Index

### Properties

* [idTable](sticker.md#static-readonly-idtable)

### Methods

* [getIdName](sticker.md#static-getidname)
* [includes](sticker.md#static-includes)

### Object literals

* [names](sticker.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: Sticker.names.speedUpSticker, id: 3670066 },
    { name: Sticker.names.speedDownSticker, id: 3670030 },
    { name: Sticker.names.wobbleSticker, id: 3670068 },
    { name: Sticker.names.panicSticker, id: 3670032 },
    { name: Sticker.names.spinSticker, id: 3670070 },
    { name: Sticker.names.shockSticker, id: 3670034 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/sticker.ts:14](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L14)*

## Methods

### `Static` getIdName

▸ **getIdName**(`value`: number): *string | undefined*

*Inherited from [StandardId](standardid.md).[getIdName](standardid.md#static-getidname)*

*Defined in [id/standard/standardId.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/standardId.ts#L11)*

Get standard ID string name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | Standard ID number value  |

**Returns:** *string | undefined*

ID name string. If specified standardID is not supported, this function returns undefined.

___

### `Static` includes

▸ **includes**(`idName`: string): *boolean*

*Inherited from [StandardId](standardid.md).[includes](standardid.md#static-includes)*

*Defined in [id/standard/standardId.ts:30](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/standardId.ts#L30)*

Specified standard ID is included or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idName` | string | Standard ID name. Set the element of this.names.  |

**Returns:** *boolean*

true iff specified standard ID is toio Collection card.

## Object literals

### `Static` `Readonly` names

### ▪ **names**: *object*

*Defined in [id/standard/sticker.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L4)*

###  panicSticker

• **panicSticker**: *string* = "panicSticker"

*Defined in [id/standard/sticker.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L8)*

###  shockSticker

• **shockSticker**: *string* = "shockSticker"

*Defined in [id/standard/sticker.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L10)*

###  speedDownSticker

• **speedDownSticker**: *string* = "speedDownSticker"

*Defined in [id/standard/sticker.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L6)*

###  speedUpSticker

• **speedUpSticker**: *string* = "speedUpSticker"

*Defined in [id/standard/sticker.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L5)*

###  spinSticker

• **spinSticker**: *string* = "spinSticker"

*Defined in [id/standard/sticker.ts:9](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L9)*

###  wobbleSticker

• **wobbleSticker**: *string* = "wobbleSticker"

*Defined in [id/standard/sticker.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/sticker.ts#L7)*
