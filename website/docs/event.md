---
id: event
title: Event listning
sidebar_label: Event listning
---

## To get notification from toio™Core Cube
This library supplies 2 methods, `addEventListener` and definition of callback, to recieve notification from connected Cube.

## Example: addEventListner
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
**[p5.js Web Editor Sample: addEventListner](https://editor.p5js.org/tetunori/sketches/xTCH-scLp)**

## Example: Definition of callback
If you define callback functions as below, it will call when notified.
```js
const cubePositionIdChanged = (info) => {
  console.log('cubePositionIdChanged!', info);
}

const cubeStandardIdChanged = (info) => {
  console.log('cubeStandardIdChanged!', info);
}
```
**[p5.js Web Editor Sample: Callback definition](https://editor.p5js.org/tetunori/sketches/tlc8-qE9d)**

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
