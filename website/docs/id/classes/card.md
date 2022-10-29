---
id: "card"
title: "Card"
sidebar_label: "Card"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [Card](card.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **Card**

## Index

### Properties

* [idTable](card.md#static-readonly-idtable)

### Methods

* [getIdName](card.md#static-getidname)
* [includes](card.md#static-includes)

### Object literals

* [names](card.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: Card.names.typhoonCard, id: 3670016 },
    { name: Card.names.rushCard, id: 3670054 },
    { name: Card.names.autoTackleCard, id: 3670018 },
    { name: Card.names.randomCard, id: 3670056 },
    { name: Card.names.pushPowerUpCard, id: 3670020 },
    { name: Card.names.haritePowerUpCard, id: 3670058 },
    { name: Card.names.sideAttackCard, id: 3670022 },
    { name: Card.names.easyModeCard, id: 3670060 },
    { name: Card.names.leftCard, id: 3670024 },
    { name: Card.names.rightCard, id: 3670062 },
    { name: Card.names.frontCard, id: 3670026 },
    { name: Card.names.backCard, id: 3670064 },
    { name: Card.names.goCard, id: 3670028 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/card.ts:21](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L21)*

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

*Defined in [id/standard/card.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L4)*

###  autoTackleCard

• **autoTackleCard**: *string* = "autoTackleCard"

*Defined in [id/standard/card.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L7)*

###  backCard

• **backCard**: *string* = "backCard"

*Defined in [id/standard/card.ts:16](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L16)*

###  easyModeCard

• **easyModeCard**: *string* = "easyModeCard"

*Defined in [id/standard/card.ts:12](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L12)*

###  frontCard

• **frontCard**: *string* = "frontCard"

*Defined in [id/standard/card.ts:15](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L15)*

###  goCard

• **goCard**: *string* = "goCard"

*Defined in [id/standard/card.ts:17](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L17)*

###  haritePowerUpCard

• **haritePowerUpCard**: *string* = "haritePowerUpCard"

*Defined in [id/standard/card.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L10)*

###  leftCard

• **leftCard**: *string* = "leftCard"

*Defined in [id/standard/card.ts:13](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L13)*

###  pushPowerUpCard

• **pushPowerUpCard**: *string* = "pushPowerUpCard"

*Defined in [id/standard/card.ts:9](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L9)*

###  randomCard

• **randomCard**: *string* = "randomCard"

*Defined in [id/standard/card.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L8)*

###  rightCard

• **rightCard**: *string* = "rightCard"

*Defined in [id/standard/card.ts:14](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L14)*

###  rushCard

• **rushCard**: *string* = "rushCard"

*Defined in [id/standard/card.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L6)*

###  sideAttackCard

• **sideAttackCard**: *string* = "sideAttackCard"

*Defined in [id/standard/card.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L11)*

###  typhoonCard

• **typhoonCard**: *string* = "typhoonCard"

*Defined in [id/standard/card.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/card.ts#L5)*
