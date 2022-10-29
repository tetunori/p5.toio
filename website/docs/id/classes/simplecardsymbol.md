---
id: "simplecardsymbol"
title: "SimpleCardSymbol"
sidebar_label: "SimpleCardSymbol"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [SimpleCardSymbol](simplecardsymbol.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **SimpleCardSymbol**

## Index

### Properties

* [idTable](simplecardsymbol.md#static-readonly-idtable)

### Methods

* [getIdName](simplecardsymbol.md#static-getidname)
* [includes](simplecardsymbol.md#static-includes)

### Object literals

* [names](simplecardsymbol.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: SimpleCardSymbol.names.markExclamation, id: 3670305 },
    { name: SimpleCardSymbol.names.markUp, id: 3670366 },
    { name: SimpleCardSymbol.names.markQuestion, id: 3670335 },
    { name: SimpleCardSymbol.names.markPlus, id: 3670315 },
    { name: SimpleCardSymbol.names.markMinus, id: 3670317 },
    { name: SimpleCardSymbol.names.markEqual, id: 3670333 },
    { name: SimpleCardSymbol.names.markLeft, id: 3670332 },
    { name: SimpleCardSymbol.names.markDown, id: 3670367 },
    { name: SimpleCardSymbol.names.markRight, id: 3670334 },
    { name: SimpleCardSymbol.names.markMultiple, id: 3670314 },
    { name: SimpleCardSymbol.names.markDivision, id: 3670319 },
    { name: SimpleCardSymbol.names.markPercent, id: 3670309 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/symbol.ts:20](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L20)*

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

*Defined in [id/standard/symbol.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L4)*

###  markDivision

• **markDivision**: *string* = "markDivision"

*Defined in [id/standard/symbol.ts:15](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L15)*

###  markDown

• **markDown**: *string* = "markDown"

*Defined in [id/standard/symbol.ts:12](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L12)*

###  markEqual

• **markEqual**: *string* = "markEqual"

*Defined in [id/standard/symbol.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L10)*

###  markExclamation

• **markExclamation**: *string* = "markExclamation"

*Defined in [id/standard/symbol.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L5)*

###  markLeft

• **markLeft**: *string* = "markLeft"

*Defined in [id/standard/symbol.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L11)*

###  markMinus

• **markMinus**: *string* = "markMinus"

*Defined in [id/standard/symbol.ts:9](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L9)*

###  markMultiple

• **markMultiple**: *string* = "markMultiple"

*Defined in [id/standard/symbol.ts:14](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L14)*

###  markPercent

• **markPercent**: *string* = "markPercent"

*Defined in [id/standard/symbol.ts:16](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L16)*

###  markPlus

• **markPlus**: *string* = "markPlus"

*Defined in [id/standard/symbol.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L8)*

###  markQuestion

• **markQuestion**: *string* = "markQuestion"

*Defined in [id/standard/symbol.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L7)*

###  markRight

• **markRight**: *string* = "markRight"

*Defined in [id/standard/symbol.ts:13](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L13)*

###  markUp

• **markUp**: *string* = "markUp"

*Defined in [id/standard/symbol.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/symbol.ts#L6)*
