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
    { name: GameMark.names.quickSkunk2P, id: 3670092 },
    { name: GameMark.names.quickSkunkCPU, id: 3670094 },
    { name: GameMark.names.KaijuBusters, id: 3670096 },
    { name: GameMark.names.watchOutFree, id: 3670098 },
    { name: GameMark.names.watchOut2P, id: 3670100 },
    { name: GameMark.names.watchOutCPU, id: 3670102 },
    { name: GameMark.names.colorMemory, id: 3670104 },
    { name: GameMark.names.lazerBeamChallenge, id: 3670106 },
    { name: GameMark.names.lazerBeamCreate, id: 3670108 },
    { name: GameMark.names.Baton, id: 3670110 },
    { name: GameMark.names.pullBack, id: 3670112 },
    { name: GameMark.names.dash, id: 3670114 },
    { name: GameMark.names.dontDisturbNormal, id: 3670116 },
    { name: GameMark.names.dontDisturbRodeo, id: 3670118 },
    { name: GameMark.names.answer, id: 3670120 },
    { name: GameMark.names.music1, id: 3670122 },
    { name: GameMark.names.music2, id: 3670124 },
    { name: GameMark.names.music3, id: 3670126 },
    { name: GameMark.names.music4, id: 3670128 },
  ]

*Overrides [StandardId](standardid.md).[idTable](standardid.md#static-protected-readonly-idtable)*

*Defined in [id/standard/gameMark.ts:33](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L33)*

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

*Defined in [id/standard/gameMark.ts:4](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L4)*

###  Baton

• **Baton**: *string* = "Baton"

*Defined in [id/standard/gameMark.ts:20](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L20)*

###  KaijuBusters

• **KaijuBusters**: *string* = "KaijuBusters"

*Defined in [id/standard/gameMark.ts:13](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L13)*

###  answer

• **answer**: *string* = "answer"

*Defined in [id/standard/gameMark.ts:25](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L25)*

###  colorMemory

• **colorMemory**: *string* = "colorMemory"

*Defined in [id/standard/gameMark.ts:17](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L17)*

###  craftFighter

• **craftFighter**: *string* = "craftFighter"

*Defined in [id/standard/gameMark.ts:5](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L5)*

###  dash

• **dash**: *string* = "dash"

*Defined in [id/standard/gameMark.ts:22](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L22)*

###  dontDisturbNormal

• **dontDisturbNormal**: *string* = "dontDisturbNormal"

*Defined in [id/standard/gameMark.ts:23](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L23)*

###  dontDisturbRodeo

• **dontDisturbRodeo**: *string* = "dontDisturbRodeo"

*Defined in [id/standard/gameMark.ts:24](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L24)*

###  fingerStrike1P

• **fingerStrike1P**: *string* = "fingerStrike1P"

*Defined in [id/standard/gameMark.ts:9](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L9)*

###  fingerStrike2P

• **fingerStrike2P**: *string* = "fingerStrike2P"

*Defined in [id/standard/gameMark.ts:8](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L8)*

###  freeMove

• **freeMove**: *string* = "freeMove"

*Defined in [id/standard/gameMark.ts:10](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L10)*

###  lazerBeamChallenge

• **lazerBeamChallenge**: *string* = "lazerBeamChallenge"

*Defined in [id/standard/gameMark.ts:18](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L18)*

###  lazerBeamCreate

• **lazerBeamCreate**: *string* = "lazerBeamCreate"

*Defined in [id/standard/gameMark.ts:19](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L19)*

###  music1

• **music1**: *string* = "music1"

*Defined in [id/standard/gameMark.ts:26](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L26)*

###  music2

• **music2**: *string* = "music2"

*Defined in [id/standard/gameMark.ts:27](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L27)*

###  music3

• **music3**: *string* = "music3"

*Defined in [id/standard/gameMark.ts:28](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L28)*

###  music4

• **music4**: *string* = "music4"

*Defined in [id/standard/gameMark.ts:29](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L29)*

###  pullBack

• **pullBack**: *string* = "pullBack"

*Defined in [id/standard/gameMark.ts:21](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L21)*

###  quickSkunk2P

• **quickSkunk2P**: *string* = "quickSkunk2P"

*Defined in [id/standard/gameMark.ts:11](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L11)*

###  quickSkunkCPU

• **quickSkunkCPU**: *string* = "quickSkunkCPU"

*Defined in [id/standard/gameMark.ts:12](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L12)*

###  rythmAndGo

• **rythmAndGo**: *string* = "rythmAndGo"

*Defined in [id/standard/gameMark.ts:6](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L6)*

###  skunkChaser

• **skunkChaser**: *string* = "skunkChaser"

*Defined in [id/standard/gameMark.ts:7](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L7)*

###  watchOut2P

• **watchOut2P**: *string* = "watchOut2P"

*Defined in [id/standard/gameMark.ts:15](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L15)*

###  watchOutCPU

• **watchOutCPU**: *string* = "watchOutCPU"

*Defined in [id/standard/gameMark.ts:16](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L16)*

###  watchOutFree

• **watchOutFree**: *string* = "watchOutFree"

*Defined in [id/standard/gameMark.ts:14](https://github.com/tetunori/p5.toio/blob/49eab6e/src/id/standard/gameMark.ts#L14)*
