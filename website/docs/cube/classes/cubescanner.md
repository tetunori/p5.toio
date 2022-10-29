---
id: "cubescanner"
title: "CubeScanner"
sidebar_label: "CubeScanner"
---


## Hierarchy

* **CubeScanner**

## Index

### Methods

* [scanNewCube](cubescanner.md#static-scannewcube)

## Methods

### `Static` scanNewCube

▸ **scanNewCube**(): *Promise‹[CubeBase](cubebase.md)›*

*Defined in [cube/scanner.ts:9](https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/scanner.ts#L9)*

Scan a new cube.

**Returns:** *Promise‹[CubeBase](cubebase.md)›*

promise. `resolve` handler supplies a `CubeChar` class instance corresponding to scanned and selected cube.
