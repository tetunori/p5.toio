---
id: "gamemark"
title: "GameMark"
sidebar_label: "GameMark"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [GameMark](gamemark.md)

## Hierarchy

* [StandardId](standardid.md)

  ↳ **GameMark**

## Index

### Properties

* [idTable](gamemark.md#static-readonly-idtable)

### Methods

* [getIdName](gamemark.md#static-getidname)
* [includes](gamemark.md#static-includes)

### Object literals

* [names](gamemark.md#static-readonly-names)

## Properties

### `Static` `Readonly` idTable

▪ **idTable**: *object[]* = [
    { name: GameMark.names.craftFighter, id: 3670048 },
    { name: GameMark.names.rythmAndGo, id: 3670052 },
    { name: GameMark.names.skunkChaser, id: 3670086 },
    { name: GameMark.names.fingerStrike2P, id: 3670050 },
    { name: GameMark.names.fingerStrike1P, id: 3670088 },
    { name: GameMark.names.freeMove, id: 3670084 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/gameMark.ts:14](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L14)*

## Methods

### `Static` getIdName

▸ **getIdName**(`value`: number): *string | undefined*

*Inherited from [StandardId](standardid.md).[getIdName](standardid.md#static-getidname)*

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

*Inherited from [StandardId](standardid.md).[includes](standardid.md#static-includes)*

*Defined in [id/standard/standardId.ts:30](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/standardId.ts#L30)*

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

*Defined in [id/standard/gameMark.ts:4](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L4)*

###  craftFighter

• **craftFighter**: *string* = "craftFighter"

*Defined in [id/standard/gameMark.ts:5](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L5)*

###  fingerStrike1P

• **fingerStrike1P**: *string* = "fingerStrike1P"

*Defined in [id/standard/gameMark.ts:9](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L9)*

###  fingerStrike2P

• **fingerStrike2P**: *string* = "fingerStrike2P"

*Defined in [id/standard/gameMark.ts:8](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L8)*

###  freeMove

• **freeMove**: *string* = "freeMove"

*Defined in [id/standard/gameMark.ts:10](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L10)*

###  rythmAndGo

• **rythmAndGo**: *string* = "rythmAndGo"

*Defined in [id/standard/gameMark.ts:6](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L6)*

###  skunkChaser

• **skunkChaser**: *string* = "skunkChaser"

*Defined in [id/standard/gameMark.ts:7](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/id/standard/gameMark.ts#L7)*
