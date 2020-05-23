---
id: import
title: Import
sidebar_label: Import
---

## Import library
Just insert a sigle script after 2 dependent scripts `p5.js` and `p5.sound.min.js` in your `<head>`.  
```html {5}
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>

<!-- INSERT HERE -->
<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.min.js"></script>
```

We can also use the non-uglified code. 

```html
<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.js"></script>
```

## How to import into [p5.js Web Editor](https://editor.p5js.org/)
1. Click `>` button icon to open Sketch files.
2. Select `index.html` to insert `p5.toio` library as the method above.
3. Then, you can go back and start programming by selecting `index.js`.
   Go on to the next page [Basic Usage](https://toio.io/).

:::note
[p5.js Web Editor](https://editor.p5js.org/) support `Web Bluetooth` but [OpenProcessing](https://www.openprocessing.org/) unfortunately does not support it so that this library also does not work😭.  
:::
