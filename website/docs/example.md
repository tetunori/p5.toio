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
**[p5.js Web Editor Sample: Turn Light On](https://editor.p5js.org/tetunori/sketches/2J4HYQA35)**

## Example 2: Play MIDI melody
```javascript
// Play sequence C-D-E
cube?.playMelody( [ 
  { note: 0x3C, duration: 0x1E }, 
  { note: 0x3E, duration: 0x1E }, 
  { note: 0x40, duration: 0x1E } 
] );
```
**[p5.js Web Editor Sample: Play MIDI melody](https://editor.p5js.org/tetunori/sketches/yfFYiyMRx)**

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
**[p5.js Web Editor Sample: Keep on gazing at mouse point](https://editor.p5js.org/tetunori/sketches/HNZniaSdx)**

## Example 4: Interaction with 2 Cubes.
### 4-1: Keep on gazing at the othre Cube
```javascript
// Keep on gazing at the othre Cube
const speed = 115;
cubeP?.turnToCube( cubeQ, speed );
```
**[p5.js Web Editor Sample: Keep on gazing at the other Cube](https://editor.p5js.org/tetunori/sketches/wsYXbuRL5)**

### 4-2: Keep on chasing the othre Cube
```javascript
// Keep on chasing the othre Cube
const moveType = P5tCube.moveTypeId.withoutBack;
const speed = 80;
cubeP?.moveToCube( cubeQ, speed, moveType );
```
**[p5.js Web Editor Sample: Keep on chasing the other Cube](https://editor.p5js.org/tetunori/sketches/gSg6D4zGC)**

## Example 5: Get color from ColorTileMat.
```javascript
// Set background color with touched colored tile on mat
const color = P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y);
background( color );
```
**[p5.js Web Editor Sample: Change background color with touched mat color](https://editor.p5js.org/tetunori/sketches/cHerL4iap)**

## Example 6: Random tile move on SimpleMat.
```javascript
const targetMat = P5tId.SimpleTileMat;
// const targetMat = P5tId.ColorTileMat; // can apply for ColorTileMat

const columnRand = Math.floor( Math.random() * targetMat.matrixColumns);
const rowRand = Math.floor( Math.random() * targetMat.matrixRows);

// Move to random tile.
cube?.moveTo(targetMat.getTileCenter(rowRand, columnRand), 80);
```
**[p5.js Web Editor Sample: Random tile move on TileMat](https://editor.p5js.org/tetunori/sketches/pEwYvCLW_)**  
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
**[p5.js Web Editor Sample: Move to start position on RingMat.](https://editor.p5js.org/tetunori/sketches/STNvAnVLB)**  
Press `Space Key` to move after connection.

