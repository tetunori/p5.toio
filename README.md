<h1 align="center">
  <a href="https://tetunori.github.io/p5.toio"><img src="https://tetunori.github.io/p5.toio/images/logo.png" alt="p5.toio" width="600px"></a>
</h1>

<p align="center">
  <a href="https://github.com/tetunori/p5.toio/actions?query=workflow%3Abuild"><img alt="build" src="https://github.com/tetunori/p5.toio/workflows/build/badge.svg"></a>
  <a href="https://github.com/tetunori/p5.toio/actions?query=workflow%3Alint"><img alt="lint" src="https://github.com/tetunori/p5.toio/workflows/lint/badge.svg"></a>
  <a href="https://github.com/tetunori/p5.toio/actions?query=workflow%3Atest"><img alt="test" src="https://github.com/tetunori/p5.toio/workflows/test/badge.svg"></a>
  <a href="https://github.com/tetunori/p5.toio/actions?query=workflow%3Adocs"><img alt="docs" src="https://github.com/tetunori/p5.toio/workflows/docs/badge.svg"></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
</p>

# Description
**p5.toio** is a library for controlling toio™ in p5.js environment.  
A lot of APIs on [toio™](https://toio.io/) can be used with just a simple step as below.  
beta-release(0.8.0)

**p5.toio** consists of 2 classes `P5tCube` and `P5tId`.  
`P5tCube` class supplies a lot of APIs and utilities enable us to control Cube easily.  
Please refer to the `P5tCube` class interfaces from [here](https://tetunori.github.io/p5.toio/docs/cube/classes/p5tcube).  
`P5tId` class includes APIs and properties on toioIDs printed on toio™'s mats, cards, stickers.  
See interfaces from [here](https://tetunori.github.io/p5.toio/docs/id/classes/p5tid) for `P5tId`.  

# Usage
## Environment 
Due to the dependency to `WebBluetooth`, this library works with the following environment.  
- OS: Windows, macOS, Android. **iOS/iPadOS does not support**(Please use [Bluefy](https://apps.apple.com/jp/app/bluefy-web-ble-browser/id1492822055) app instead). 
- Browser: Latest version of Google Chrome is highly recommended.  

Currently(2022/10/29), [OpenProcessing](https://www.openprocessing.org/) supports `Web Bluetooth` but [p5.js Web Editor](https://editor.p5js.org/) unfortunately does not support it so that this library also does not work😭.  
Please see [the issue](https://github.com/processing/p5.js-web-editor/issues/1900) on p5.js Web Editor.  
**[OpenProcessing: p5.toio Basic Sample](https://openprocessing.org/sketch/1716366)**  

## Import library
Just insert a sigle script after 2 dependent scripts `p5.js` and `p5.sound.min.js` in your `<head>`.  
```html 
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>

<!-- INSERT HERE -->
<script src="https://tetunori.github.io/p5.toio/dist/0.8.0/p5.toio.min.js"></script>
```
We can also use the non-minified code.  
```html
<script src="https://tetunori.github.io/p5.toio/dist/0.8.0/p5.toio.js"></script>
```

## Use in your Sketch
### Search and Connect to toio™Core Cube
Call `P5tCube.connectNewP5tCube()` and receive `P5tCube` instance in Promise as below.  
This library depends on `WebBluetooth` so that this API must be called in a user-action function like `mouseClicked()` or `keyPressed()` etc.  

```javascript
const gCubes = [];

function mouseClicked() {
  P5tCube.connectNewP5tCube().then( cube => {
    // 'cube' is an instance of connected toio™Core Cube.
    // Now you can call any API!
    gCubes.push( cube );
  } );
}
```
**[OpenProcessing Sample: Turn Light On](https://openprocessing.org/sketch/1716380)**

### Issue some APIs
Basically, please refer to the TypeDoc API references [P5tCube](https://tetunori.github.io/p5.toio/docs/cube/classes/p5tcube) and [P5tId](https://tetunori.github.io/p5.toio/docs/id/classes/p5tid).  
Some actual examples are listed below.

#### Example 1: Turn the light on
```javascript
// Turn the light on with white
cube?.turnLightOn( 'white' );
```
**[OpenProcessing Sample: Turn Light On](https://openprocessing.org/sketch/1716380)**

#### Example 2: Play MIDI melody
```javascript
// Play sequence C-D-E
cube?.playMelody( [ 
  { note: 0x3C, duration: 0x1E }, 
  { note: 0x3E, duration: 0x1E }, 
  { note: 0x40, duration: 0x1E } 
] );
```
**[OpenProcessing Sample: Play MIDI melody](https://openprocessing.org/sketch/1716390)**

#### Example 3: Interaction with mouse X.
```javascript
// Keep on gazing at mouse point
for( const cube of connectedCubeArray ){
  const x = Math.floor(mouseX * 300 / windowWidth + 200);
  const y = 144;
  const speed = 115; 
  cube?.turnToXY( x, y, speed );
}
```
**[OpenProcessing Sample: Keep on gazing at mouse point](https://openprocessing.org/sketch/1716392)**

#### Example 4: Interaction with 2 Cubes.
##### 4-1: Keep on gazing at the othre Cube
```javascript
// Keep on gazing at the othre Cube
const speed = 115;
cubeP?.turnToCube( cubeQ, speed );
```
**[OpenProcessing Sample: Keep on gazing at the other Cube](https://openprocessing.org/sketch/1716393)**

##### 4-2: Keep on chasing the othre Cube
```javascript
// Keep on chasing the othre Cube
const moveType = P5tCube.moveTypeId.withoutBack;
const speed = 80;
cubeP?.moveToCube( cubeQ, speed, moveType );
```
**[OpenProcessing Sample: Keep on chasing the other Cube](https://openprocessing.org/sketch/1716396)**

#### Example 5: Get color from ColorTileMat.
```javascript
// Set background color with touched colored tile on mat
const color = P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y);
background( color );
```
**[OpenProcessing Sample: Change background color with touched mat color](https://openprocessing.org/sketch/1716673)**

#### Example 6: Random tile move on SimpleMat.
```javascript
const targetMat = P5tId.SimpleTileMat;
// const targetMat = P5tId.ColorTileMat; // can apply for ColorTileMat

const columnRand = Math.floor( Math.random() * targetMat.matrixColumns);
const rowRand = Math.floor( Math.random() * targetMat.matrixRows);

// Move to random tile.
cube?.moveTo(targetMat.getTileCenter(rowRand, columnRand), 80);
```
**[OpenProcessing Sample: Move random tiles on TileMat](https://openprocessing.org/sketch/1716674)**  
Press `Space Key` to move after connection.

#### Example 7: Move to start position on RingMat.
```javascript
cubeP?.moveTo({
  x: P5tId.RingMat.startPointGreenSideX,
  y: P5tId.RingMat.startPointGreenSideY,
  angle: -Math.PI / 2,
  angleType: 0
}, 80);

cubeQ?.moveTo({
  x: P5tId.RingMat.startPointBlueSideX,
  y: P5tId.RingMat.startPointBlueSideY,
  angle: Math.PI / 2,
  angleType: 0
}, 80);
```
**[OpenProcessing Sample: Move to start position on RingMat.](https://openprocessing.org/sketch/1716678)**  
Press `Space Key` to move after connection.

### Event listning
This library supplies 2 methods `addEventListener` and definition of callback to recieve notification.
#### Example: addEventListner
```js
// Button press event
const type = 'buttonpress';
cube?.addEventListener(type, ()=>{
  console.log(type);
});
```
```js
// Posture change event
const type = 'sensorposturechange';
cube?.addEventListener(type, (posture)=>{
  console.log(type, posture);
});
```
**[p5.js Web Editor Sample: addEventListner](https://openprocessing.org/sketch/1716681)**

#### Example: Definition of callback
If you define callback functions as below, it will call when notified.
```js
const cubePositionIdChanged = (info) => {
  console.log('cubePositionIdChanged!', info);
}

const cubeStandardIdChanged = (info) => {
  console.log('cubeStandardIdChanged!', info);
}
```
**[p5.js Web Editor Sample: Callback definition](https://openprocessing.org/sketch/1716683)**

Here are the all callback function name.
```js
const onButtonPressed();
const onButtonReleased();
const onBatteryLevelChanged(batteryLevel: number);
const onFlatChanged(flat: boolean);
const onCollisionOccurred();
const onDoubleTapped();
const onPostureChanged(posture: string);
const onPositionIdChanged(info: positionIdInfo);
const onStandardIdChanged(info: standardIdInfo);
```

## Tips
### Improve Performance
#### Use async function for calling cube API
Depending on your PC environment, performance of the API call or processing sketch visual might be poor.  
In those cases, using async function might resolve the issue.
```javascript
function draw() {
  // Cube control command with async
  asyncCubeControl();

  // Then code your sketch...
  ellipse( mouseX, mouseY, 20, 20 );
}

async function asyncCubeControl() {
  // Cube control.
}
```

#### Increase framerate
This library set default frame rate of `WebBluetooth` communication to 15fps for poor environment as mine🙃.  
For your high performance PCs, please increase frame rate (up to 30) by calling `setFrameRate`.
```javascript
cube?.setFrameRate(30);
```

### Issue
Only in Windows environment, `moveToMulti` API does not work correctly with specified more than 3 positions. Please refer to the other issues in [Issue on GitHub](https://github.com/tetunori/p5.toio/issues).

# Licence
This software is released under MIT License, see LICENSE.

# Author
Tetsunori NAKAYAMA.

# References
## TypeScript
[p5-typescript-starter](https://github.com/Gaweph/p5-typescript-starter) [Gaweph](https://github.com/Gaweph)  
MIT License, Copyright (c) 2019 Gareth Williams
 
[O'Reilly "Programming TypeScript"](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)  
[O'Reilly Japan - プログラミングTypeScript](https://www.oreilly.co.jp/books/9784873119045/)

## toio
[toio Core Cube Specification](https://toio.github.io/toio-spec/)
