<h1 align="center">
  <a href="https://tetunori.github.io/p5.toio"><img src="https://tetunori.github.io/p5.toio/images/logo-a.png" alt="p5.toio" width="600px"></a>
</h1>

<p align="center">
  <a href="https://tetunori.github.io/p5.toio"><img alt="docs" src="https://github.com/tetunori/p5.toio/workflows/docs/badge.svg" alt="docs"></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
  <!-- <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a> -->
</p>

# Description
**p5.toio** is a library for controlling toio™ in p5.js environment.  
A lot of APIs on [toio™](https://toio.io/) can be used with just a simple step as below.  
Now I released an alpha-release(0.5.0) so that there is no test code, detailed API document or samples yet.  
Please wait for the next beta-release(0.8.0).

**p5.toio** consists of 2 classes `P5tCube` and `P5tId`.  
`P5tCube` class supplies a lot of APIs and utilities enable us to control Cube easily.  
Please refer to the `P5tCube` class interfaces from [here](https://tetunori.github.io/p5.toio/docs/cube/classes/p5tcube).  
`P5tId` class includes APIs and properties on toioIDs printed on toio™'s mats, cards, stickers.  
See interfaces from [here](https://tetunori.github.io/p5.toio/docs/id/classes/p5tid) for `P5tId`.  

# Usage
## Environment 
Due to the dependency to `WebBluetooth`, this library works with the following environment.  
OS: Windows, MacOS, Android. Not support iOS/iPadOS.  
Browser: Google Chrome is highly recommended.  
[P5 Editor](https://editor.p5js.org/) support `WebBluetooth` but [OpenProcessing](https://www.openprocessing.org/) unfortunately does not support it so that this library also does not work.  
**[P5 Editor: p5.toio basic sample](https://editor.p5js.org/tetunori/sketches/x-m5aIlWp)**

## Import library
Just insert a sigle script after 2 dependent scripts `p5.js` and `p5.sound.min.js` in your `<head>`.  
```html 
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>

<!-- INSERT HERE -->
<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.min.js"></script>
```
We can also use the non-uglified code.  
```html
<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.js"></script>
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
**[P5 Editor Sample 1: Turn Light On](https://editor.p5js.org/tetunori/sketches/gkMCIKNk-)**

### Issue some APIs
Basically, please refer to the TypeDoc API references [P5tCube](https://tetunori.github.io/p5.toio/docs/cube/classes/p5tcube) and [P5tId](https://tetunori.github.io/p5.toio/docs/id/classes/p5tid).  
Some actual examples are listed below.

#### Example 1: Turn the light on
```javascript
// Turn the light on with white
cube?.turnLightOn( 'white' );
```
**[P5 Editor Sample 1: Turn Light On](https://editor.p5js.org/tetunori/sketches/gkMCIKNk-)**

#### Example 2: Play MIDI melody
```javascript
// Play sequence C-D-E
cube?.playMelody( [ 
  { note: 0x3C, duration: 0x1E }, 
  { note: 0x3E, duration: 0x1E }, 
  { note: 0x40, duration: 0x1E } 
] );
```
**[P5 Editor Sample 2: Play MIDI melody](https://editor.p5js.org/tetunori/sketches/yfFYiyMRx)**

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
**[P5 Editor Sample 3: Keep on gazing at mouse point](https://editor.p5js.org/tetunori/sketches/HNZniaSdx)**

#### Example 4: Interaction with 2 Cubes.
```javascript
// Keep on gazing at the othre Cube
const speed = 115;
cubeP?.turnToCube( cubeQ, speed );
```
**[P5 Editor Sample 4-1: Keep on gazing at the other Cube](https://editor.p5js.org/tetunori/sketches/wsYXbuRL5)**

```javascript
// Keep on chasing the othre Cube
const moveType = P5tCube.moveTypeId.withoutBack;
const speed = 80;
cubeP?.moveToCube( cubeQ, speed, moveType );
```
**[P5 Editor Sample 4-2: Keep on chasing the other Cube](https://editor.p5js.org/tetunori/sketches/gSg6D4zGC)**

#### Example 5: Interaction with a mat.
```javascript
  // Set background color with touched colored tile on mat
  const color = P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y);
  background( color );
```
**[P5 Editor Sample 5: Change background color with touched mat color](https://editor.p5js.org/tetunori/sketches/cHerL4iap)**

### Event listning
This library supplies 2 methods `addEventListener` and definition of callback to recieve notification.
#### Example 6: addEventListner
```javascript
// Button press event
const type = 'buttonpress';
cube?.addEventListener(type, ()=>{
  console.log(type);
});
```
```javascript
// Posture change event
const type = 'sensorposturechange';
cube?.addEventListener(type, (posture)=>{
  console.log(type, posture);
});
```
**[P5 Editor Sample 6: addEventListner](https://editor.p5js.org/tetunori/sketches/xTCH-scLp)**

#### Example 7: Definition of callback
If you define callback functions as below, it will call when notified.
```javascript
const cubePositionIdChanged = (info) => {
  console.log('cubePositionIdChanged!', info);
}

const cubeStandardIdChanged = (info) => {
  console.log('cubeStandardIdChanged!', info);
}
```
**[P5 Editor Sample 7: Callback definition](https://editor.p5js.org/tetunori/sketches/tlc8-qE9d)**

Here are the all callback function name.
```javascript
const onButtonPressed()
const onButtonReleased()
const onBatteryLevelChanged(batteryLevel: number)
const onFlatChanged(flat: boolean)
const onCollisionOccurred()
const onDoubleTapped()
const onPostureChanged(posture: string)
const onPositionIdChanged(info: positionIdInfo)
const onStandardIdChanged(info: standardIdInfo)
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
Only in Windows environment, `moveToMulti` API does not work correctly with specified more than 3 positions.

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
