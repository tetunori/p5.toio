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
**[p5.js Web Editor Sample: addEventListner](https://openprocessing.org/sketch/1716681)**

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
const onShakeLevelChanged(shakelevel: number);
const onPositionIdChanged(info: positionIdInfo);
const onStandardIdChanged(info: standardIdInfo);
```
