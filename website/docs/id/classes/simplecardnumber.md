---
id: "simplecardnumber"
title: "SimpleCardNumber"
sidebar_label: "SimpleCardNumber"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [SimpleCardNumber](simplecardnumber.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **SimpleCardNumber**

## Index

### Properties

* [idTable](simplecardnumber.md#static-readonly-idtable)

### Methods

* [getIdName](simplecardnumber.md#static-getidname)
* [includes](simplecardnumber.md#static-includes)

### Object literals

* [names](simplecardnumber.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: SimpleCardNumber.names.mark0, id: 3670320 },
    { name: SimpleCardNumber.names.mark1, id: 3670321 },
    { name: SimpleCardNumber.names.mark2, id: 3670322 },
    { name: SimpleCardNumber.names.mark3, id: 3670323 },
    { name: SimpleCardNumber.names.mark4, id: 3670324 },
    { name: SimpleCardNumber.names.mark5, id: 3670325 },
    { name: SimpleCardNumber.names.mark6, id: 3670326 },
    { name: SimpleCardNumber.names.mark7, id: 3670327 },
    { name: SimpleCardNumber.names.mark8, id: 3670328 },
    { name: SimpleCardNumber.names.mark9, id: 3670329 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/number.ts:16](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L16)*

## Methods

### `Static` getIdName

▸ **getIdName**(`value`: number): *string | undefined*

*Inherited from [SimpleCardAlphabet](simplecardalphabet.md).[getIdName](simplecardalphabet.md#static-getidname)*

*Defined in [id/standard/standardId.ts:11](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/standardId.ts#L11)*

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

*Inherited from [SimpleCardAlphabet](simplecardalphabet.md).[includes](simplecardalphabet.md#static-includes)*

*Defined in [id/standard/standardId.ts:30](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/standardId.ts#L30)*

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

*Defined in [id/standard/number.ts:2](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L2)*

###  mark0

• **mark0**: *string* = "mark0"

*Defined in [id/standard/number.ts:3](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L3)*

###  mark1

• **mark1**: *string* = "mark1"

*Defined in [id/standard/number.ts:4](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L4)*

###  mark2

• **mark2**: *string* = "mark2"

*Defined in [id/standard/number.ts:5](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L5)*

###  mark3

• **mark3**: *string* = "mark3"

*Defined in [id/standard/number.ts:6](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L6)*

###  mark4

• **mark4**: *string* = "mark4"

*Defined in [id/standard/number.ts:7](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L7)*

###  mark5

• **mark5**: *string* = "mark5"

*Defined in [id/standard/number.ts:8](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L8)*

###  mark6

• **mark6**: *string* = "mark6"

*Defined in [id/standard/number.ts:9](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L9)*

###  mark7

• **mark7**: *string* = "mark7"

*Defined in [id/standard/number.ts:10](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L10)*

###  mark8

• **mark8**: *string* = "mark8"

*Defined in [id/standard/number.ts:11](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L11)*

###  mark9

• **mark9**: *string* = "mark9"

*Defined in [id/standard/number.ts:12](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/number.ts#L12)*
