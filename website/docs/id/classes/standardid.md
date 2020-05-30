---
id: "standardid"
title: "StandardId"
sidebar_label: "StandardId"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [StandardId](standardid.md)

## Hierarchy

* **StandardId**

  ↳ [Card](card.md)

  ↳ [GameMark](gamemark.md)

  ↳ [Skunk](skunk.md)

  ↳ [Sticker](sticker.md)

  ↳ [SimpleCardNumber](simplecardnumber.md)

  ↳ [SimpleCardAlphabet](simplecardalphabet.md)

  ↳ [SimpleCardSymbol](simplecardsymbol.md)

## Index

### Properties

* [idTable](standardid.md#static-protected-readonly-idtable)

### Methods

* [getIdName](standardid.md#static-getidname)
* [includes](standardid.md#static-includes)

## Properties

### `Static` `Protected` `Readonly` idTable

▪ **idTable**: *object[]*

*Defined in [id/standard/standardId.ts:2](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/standardId.ts#L2)*

## Methods

### `Static` getIdName

▸ **getIdName**(`value`: number): *string | undefined*

*Defined in [id/standard/standardId.ts:11](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/standardId.ts#L11)*

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

*Defined in [id/standard/standardId.ts:30](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/standardId.ts#L30)*

Specified standard ID is included or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idName` | string | Standard ID name. Set the element of this.names.  |

**Returns:** *boolean*

true iff specified standard ID is toio Collection card.
