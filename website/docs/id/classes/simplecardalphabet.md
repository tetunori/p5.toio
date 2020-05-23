---
id: "simplecardalphabet"
title: "SimpleCardAlphabet"
sidebar_label: "SimpleCardAlphabet"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [SimpleCardAlphabet](simplecardalphabet.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **SimpleCardAlphabet**

## Index

### Properties

* [idTable](simplecardalphabet.md#static-readonly-idtable)

### Methods

* [getIdName](simplecardalphabet.md#static-getidname)
* [includes](simplecardalphabet.md#static-includes)

### Object literals

* [names](simplecardalphabet.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: SimpleCardAlphabet.names.markA, id: 3670337 },
    { name: SimpleCardAlphabet.names.markB, id: 3670338 },
    { name: SimpleCardAlphabet.names.markC, id: 3670339 },
    { name: SimpleCardAlphabet.names.markD, id: 3670340 },
    { name: SimpleCardAlphabet.names.markE, id: 3670341 },
    { name: SimpleCardAlphabet.names.markF, id: 3670342 },
    { name: SimpleCardAlphabet.names.markG, id: 3670343 },
    { name: SimpleCardAlphabet.names.markH, id: 3670344 },
    { name: SimpleCardAlphabet.names.markI, id: 3670345 },
    { name: SimpleCardAlphabet.names.markJ, id: 3670346 },
    { name: SimpleCardAlphabet.names.markK, id: 3670347 },
    { name: SimpleCardAlphabet.names.markL, id: 3670348 },
    { name: SimpleCardAlphabet.names.markM, id: 3670349 },
    { name: SimpleCardAlphabet.names.markN, id: 3670350 },
    { name: SimpleCardAlphabet.names.markO, id: 3670351 },
    { name: SimpleCardAlphabet.names.markP, id: 3670352 },
    { name: SimpleCardAlphabet.names.markQ, id: 3670353 },
    { name: SimpleCardAlphabet.names.markR, id: 3670354 },
    { name: SimpleCardAlphabet.names.markS, id: 3670355 },
    { name: SimpleCardAlphabet.names.markT, id: 3670356 },
    { name: SimpleCardAlphabet.names.markU, id: 3670357 },
    { name: SimpleCardAlphabet.names.markV, id: 3670358 },
    { name: SimpleCardAlphabet.names.markW, id: 3670359 },
    { name: SimpleCardAlphabet.names.markX, id: 3670360 },
    { name: SimpleCardAlphabet.names.markY, id: 3670361 },
    { name: SimpleCardAlphabet.names.markZ, id: 3670362 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/alphabet.ts:32](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L32)*

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

*Defined in [id/standard/alphabet.ts:2](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L2)*

###  markA

• **markA**: *string* = "markA"

*Defined in [id/standard/alphabet.ts:3](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L3)*

###  markB

• **markB**: *string* = "markB"

*Defined in [id/standard/alphabet.ts:4](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L4)*

###  markC

• **markC**: *string* = "markC"

*Defined in [id/standard/alphabet.ts:5](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L5)*

###  markD

• **markD**: *string* = "markD"

*Defined in [id/standard/alphabet.ts:6](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L6)*

###  markE

• **markE**: *string* = "markE"

*Defined in [id/standard/alphabet.ts:7](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L7)*

###  markF

• **markF**: *string* = "markF"

*Defined in [id/standard/alphabet.ts:8](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L8)*

###  markG

• **markG**: *string* = "markG"

*Defined in [id/standard/alphabet.ts:9](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L9)*

###  markH

• **markH**: *string* = "markH"

*Defined in [id/standard/alphabet.ts:10](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L10)*

###  markI

• **markI**: *string* = "markI"

*Defined in [id/standard/alphabet.ts:11](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L11)*

###  markJ

• **markJ**: *string* = "markJ"

*Defined in [id/standard/alphabet.ts:12](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L12)*

###  markK

• **markK**: *string* = "markK"

*Defined in [id/standard/alphabet.ts:13](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L13)*

###  markL

• **markL**: *string* = "markL"

*Defined in [id/standard/alphabet.ts:14](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L14)*

###  markM

• **markM**: *string* = "markM"

*Defined in [id/standard/alphabet.ts:15](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L15)*

###  markN

• **markN**: *string* = "markN"

*Defined in [id/standard/alphabet.ts:16](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L16)*

###  markO

• **markO**: *string* = "markO"

*Defined in [id/standard/alphabet.ts:17](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L17)*

###  markP

• **markP**: *string* = "markP"

*Defined in [id/standard/alphabet.ts:18](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L18)*

###  markQ

• **markQ**: *string* = "markQ"

*Defined in [id/standard/alphabet.ts:19](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L19)*

###  markR

• **markR**: *string* = "markR"

*Defined in [id/standard/alphabet.ts:20](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L20)*

###  markS

• **markS**: *string* = "markS"

*Defined in [id/standard/alphabet.ts:21](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L21)*

###  markT

• **markT**: *string* = "markT"

*Defined in [id/standard/alphabet.ts:22](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L22)*

###  markU

• **markU**: *string* = "markU"

*Defined in [id/standard/alphabet.ts:23](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L23)*

###  markV

• **markV**: *string* = "markV"

*Defined in [id/standard/alphabet.ts:24](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L24)*

###  markW

• **markW**: *string* = "markW"

*Defined in [id/standard/alphabet.ts:25](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L25)*

###  markX

• **markX**: *string* = "markX"

*Defined in [id/standard/alphabet.ts:26](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L26)*

###  markY

• **markY**: *string* = "markY"

*Defined in [id/standard/alphabet.ts:27](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L27)*

###  markZ

• **markZ**: *string* = "markZ"

*Defined in [id/standard/alphabet.ts:28](https://github.com/tetunori/p5.toio/blob/1b39efe/src/id/standard/alphabet.ts#L28)*
