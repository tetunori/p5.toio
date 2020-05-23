---
id: tips
title: Tips
sidebar_label: Tips
---

## Improve Performance🚀
### Use async function for calling cube API
Depending on your PC environment, performance of the API call and/or visualize logic might get to be poor. In those cases, using async function might resolve the issue.
```js {3,9}
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

### Increase framerate
This library set default frame rate of `Web Bluetooth` communications to `15`fps for poor environment as mine🙃.  
For your high performance PCs, please increase frame rate (up to `30`) by calling `setFrameRate`.
```javascript
cube?.setFrameRate(30);
```

## Issue
Only in Windows environment, `moveToMulti` API does not work correctly with specified more than 3 positions. Please refer to the other issues in [Issue on GitHub](https://github.com/tetunori/p5.toio/issues).