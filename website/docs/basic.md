---
id: basic
title: Basic Usage
sidebar_label: Basic Usage
---

## Search and Connect to toio™Core Cube
First, call `P5tCube.connectNewP5tCube()` and receive `P5tCube` instance in Promise shown as below. 
:::caution
This library depends on `Web Bluetooth` so that this API must be called in a **user-action function** like `mouseClicked()` or `keyPressed()` etc.  
:::

```js {4}
const gCubes = [];

function mouseClicked() {
  P5tCube.connectNewP5tCube().then( cube => {
    // 'cube' is an instance of connected toio™Core Cube.
    // Now you can call any API!
    gCubes.push( cube );
  } );
}
```
Then, we can fully access to any API of `p5.toio`.

## Use a P5tCube API
Basically, please refer to the [`P5tCube` API reference Page](https://tetunori.github.io/p5.toio/docs/cube/classes/p5tcube/). Here is a simple example.

### Example: Turn the light on
```js {2}
// Turn the light on with white
cube?.turnLightOn( 'white' );
```
OK. Super simple. You can confirm the result by OpenProcessing.  
**[OpenProcessing Sample: Turn Light On](https://openprocessing.org/sketch/1716380)**

## Use a P5tId API
For `P5tId` class, refer to the [`P5tId` API reference Page](https://tetunori.github.io/p5.toio/docs/id/classes/p5tid/). And here is another sample.

### Example: Is on the tile mat
```js {1,3}
if (P5tId.ColorTileMat.isOnMat(cube?.x, cube?.y)) {
  background('red');
} else if (P5tId.SimpleTileMat.isOnMat(cube?.x, cube?.y)) {
  // Partially, this mat overlaps with Ring Mat.
  background('blue');
} else{
  background('white'); 
}
```
Also, you can play immediately from the following link.  
**[OpenProcessing Sample: Is on Tile Mat](https://openprocessing.org/sketch/1716385)**
