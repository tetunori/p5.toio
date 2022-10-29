---
id: example
title: Examples
sidebar_label: Examples
---

## Example 1: Turn the light on
```javascript
// Turn the light on with white
cube?.turnLightOn( 'white' );
```
**[OpenProcessing Sample: Turn Light On](https://openprocessing.org/sketch/1716380)**

## Example 2: Play MIDI melody
```javascript
// Play sequence C-D-E
cube?.playMelody( [ 
  { note: 0x3C, duration: 0x1E }, 
  { note: 0x3E, duration: 0x1E }, 
  { note: 0x40, duration: 0x1E } 
] );
```
**[OpenProcessing Sample: Play MIDI melody](https://openprocessing.org/sketch/1716390)**

## Example 3: Interaction with mouse X.
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

## Example 4: Interaction with 2 Cubes.
### 4-1: Keep on gazing at the othre Cube
```javascript
// Keep on gazing at the othre Cube
const speed = 115;
cubeP?.turnToCube( cubeQ, speed );
```
**[OpenProcessing Sample: Keep on gazing at the other Cube](https://openprocessing.org/sketch/1716393)**

### 4-2: Keep on chasing the othre Cube
```javascript
// Keep on chasing the othre Cube
const moveType = P5tCube.moveTypeId.withoutBack;
const speed = 80;
cubeP?.moveToCube( cubeQ, speed, moveType );
```
**[OpenProcessing Sample: Keep on chasing the other Cube](https://openprocessing.org/sketch/1716396)**

## Example 5: Get color from ColorTileMat.
```javascript
// Set background color with touched colored tile on mat
const color = P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y);
background( color );
```
**[OpenProcessing Sample: Change background color with touched mat color](https://editor.p5js.org/tetunori/sketches/cHerL4iap)**

## Example 6: Random tile move on SimpleMat.
```javascript
const targetMat = P5tId.SimpleTileMat;
// const targetMat = P5tId.ColorTileMat; // can apply for ColorTileMat

const columnRand = Math.floor( Math.random() * targetMat.matrixColumns);
const rowRand = Math.floor( Math.random() * targetMat.matrixRows);

// Move to random tile.
cube?.moveTo(targetMat.getTileCenter(rowRand, columnRand), 80);
```
**[OpenProcessing Sample: Random tile move on TileMat](https://editor.p5js.org/tetunori/sketches/pEwYvCLW_)**  
Press `Space Key` to move after connection.
:::warning
I'm afraid but this sample does not work with alpha-version(0.5.0). Please use beta-versino(0.8.0).
:::

## Example 7: Move to start position on RingMat.
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
**[OpenProcessing Sample: Move to start position on RingMat.](https://editor.p5js.org/tetunori/sketches/STNvAnVLB)**  
Press `Space Key` to move after connection.

