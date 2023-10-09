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
<script src="https://tetunori.github.io/p5.toio/dist/0.8.0/p5.toio.min.js"></script>
```

We can also use the non-minified code. 

```html
<script src="https://tetunori.github.io/p5.toio/dist/0.8.0/p5.toio.js"></script>
```

## How to import into [OpenProcessing](https://openprocessing.org/)
1. Show code and the SKETCH pane.
2. Insert `p5.toio` library as the additional library by pressing "+" button aside "LIBRARIES".
3. Then, you can go back and start programming in `mySketch`.
   Go on to the next page [Basic Usage](https://tetunori.github.io/p5.toio/docs/basic).
