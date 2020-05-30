---
id: "cubesoundchar"
title: "CubeSoundChar"
sidebar_label: "CubeSoundChar"
---

[p5.toio](../index.md) › [Globals](../globals.md) › [CubeSoundChar](cubesoundchar.md)

## Hierarchy

* [CubeChar](cubechar.md)

  ↳ **CubeSoundChar**

## Implements

* [CubeCharIF](../interfaces/cubecharif.md)

## Index

### Constructors

* [constructor](cubesoundchar.md#constructor)

### Properties

* [characteristic](cubesoundchar.md#protected-characteristic)
* [errStrInProgress](cubesoundchar.md#protected-errstrinprogress)
* [uuid](cubesoundchar.md#readonly-uuid)
* [seId](cubesoundchar.md#static-seid)

### Methods

* [playMelody](cubesoundchar.md#playmelody)
* [playSE](cubesoundchar.md#playse)
* [playSingleNote](cubesoundchar.md#playsinglenote)
* [prepare](cubesoundchar.md#prepare)
* [readValue](cubesoundchar.md#readvalue)
* [setFrameRate](cubesoundchar.md#setframerate)
* [writeValue](cubesoundchar.md#writevalue)
* [writeValueCore](cubesoundchar.md#writevaluecore)

## Constructors

###  constructor

\+ **new CubeSoundChar**(`service`: BluetoothRemoteGATTService): *[CubeSoundChar](cubesoundchar.md)*

*Inherited from [CubeChar](cubechar.md).[constructor](cubechar.md#constructor)*

*Defined in [cube/char/char.ts:19](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`service` | BluetoothRemoteGATTService |

**Returns:** *[CubeSoundChar](cubesoundchar.md)*

## Properties

### `Protected` characteristic

• **characteristic**: *BluetoothRemoteGATTCharacteristic | undefined* = undefined

*Inherited from [CubeChar](cubechar.md).[characteristic](cubechar.md#protected-characteristic)*

*Defined in [cube/char/char.ts:10](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L10)*

___

### `Protected` errStrInProgress

• **errStrInProgress**: *string* = "GATT operation already in progress."

*Inherited from [CubeChar](cubechar.md).[errStrInProgress](cubechar.md#protected-errstrinprogress)*

*Defined in [cube/char/char.ts:12](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L12)*

___

### `Readonly` uuid

• **uuid**: *string* = "10b20104-5b3b-4571-9508-cf3efcd7bbae"

*Overrides [CubeChar](cubechar.md).[uuid](cubechar.md#protected-uuid)*

*Defined in [cube/char/soundChar.ts:4](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/soundChar.ts#L4)*

___

### `Static` seId

▪ **seId**: *object* = {
    enter: 0,
    selected: 1,
    cancel: 2,
    cursor: 3,
    matIn: 4,
    matOut: 5,
    get1: 6,
    get2: 7,
    get3: 8,
    effect1: 9,
    effect2: 10,
  } as const

*Defined in [cube/char/soundChar.ts:17](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/soundChar.ts#L17)*

Sound Effect IDs.

#### Type declaration:

* **cancel**: *2* = 2

* **cursor**: *3* = 3

* **effect1**: *9* = 9

* **effect2**: *10* = 10

* **enter**: *0* = 0

* **get1**: *6* = 6

* **get2**: *7* = 7

* **get3**: *8* = 8

* **matIn**: *4* = 4

* **matOut**: *5* = 5

* **selected**: *1* = 1

## Methods

###  playMelody

▸ **playMelody**(`melody`: object[]): *void*

*Defined in [cube/char/soundChar.ts:88](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/soundChar.ts#L88)*

Play melody specified wiht MIDI note sequence.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`melody` | object[] | An array composed of some combinations of `note` and `duration` values. Use like below. ``` playMelody( [   { note: 0x50, duration: 0x1E },   { note: 0x52, duration: 0x1E },   { note: 0x54, duration: 0x1E } ] ); ``` Refer to the instruction of `playSingleNote()` for note/duration.  |

**Returns:** *void*

___

###  playSE

▸ **playSE**(`idSE`: number): *void*

*Defined in [cube/char/soundChar.ts:36](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/soundChar.ts#L36)*

Play pre-installed sound effect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idSE` | number | Sounde effect index value. Please make use of static `seId.xxx` properties in this class.  |

**Returns:** *void*

___

###  playSingleNote

▸ **playSingleNote**(`note`: number, `duration`: number): *void*

*Defined in [cube/char/soundChar.ts:53](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/soundChar.ts#L53)*

Play single MIDI note.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`note` | number | - | MIDI note number 0-128. 128 is a special value for no-sound.        Refer [toio™Core Cube Spec: Note number and note name](https://toio.github.io/toio-spec/docs/ble_sound). |
`duration` | number | 30 | Sound duration in msec. 0-2550( 0: Eternally ).  |

**Returns:** *void*

___

###  prepare

▸ **prepare**(): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[prepare](cubechar.md#prepare)*

*Defined in [cube/char/char.ts:30](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L30)*

Prepare for using characteristic function.

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that methods are available in this class.

___

###  readValue

▸ **readValue**(): *Promise‹DataView›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[readValue](cubechar.md#readvalue)*

*Defined in [cube/char/char.ts:114](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L114)*

Read value from remote GATT Characteristics.

**Returns:** *Promise‹DataView›*

Promise. `resolve` handler include data.

___

###  setFrameRate

▸ **setFrameRate**(`fps`: number): *void*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[setFrameRate](cubechar.md#setframerate)*

*Defined in [cube/char/char.ts:142](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L142)*

Set framerate.

**Parameters:**

Name | Type |
------ | ------ |
`fps` | number |

**Returns:** *void*

___

###  writeValue

▸ **writeValue**(`buf`: ArrayBuffer): *Promise‹string | Error›*

*Implementation of [CubeCharIF](../interfaces/cubecharif.md)*

*Inherited from [CubeChar](cubechar.md).[writeValue](cubechar.md#writevalue)*

*Defined in [cube/char/char.ts:55](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L55)*

Write value to remote GATT Characteristics.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.

___

###  writeValueCore

▸ **writeValueCore**(`buf`: ArrayBuffer, `countRetry`: number): *Promise‹string | Error›*

*Inherited from [CubeChar](cubechar.md).[writeValueCore](cubechar.md#writevaluecore)*

*Defined in [cube/char/char.ts:78](https://github.com/tetunori/p5.toio/blob/7e9fa1c/src/cube/char/char.ts#L78)*

Write value to remote GATT Characteristics. Core function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buf` | ArrayBuffer | data buffer including command for Cube. |
`countRetry` | number | Counter for retry.  |

**Returns:** *Promise‹string | Error›*

Promise. `resolve` handler says that write command executed correctly.
