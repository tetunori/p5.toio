(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),i=(r(0),r(161)),a={id:"import",title:"Import",sidebar_label:"Import"},c={id:"import",title:"Import",description:"Import library",source:"@site/docs\\import.md",permalink:"/p5.toio/docs/import",editUrl:"https://github.com/tetunori/p5.toio/docs/import.md",sidebar_label:"Import",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/p5.toio/docs/intro"},next:{title:"Basic Usage",permalink:"/p5.toio/docs/basic"}},p=[{value:"Import library",id:"import-library",children:[]},{value:"How to import into p5.js Web Editor",id:"how-to-import-into-p5js-web-editor",children:[]}],s={rightToc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"import-library"},"Import library"),Object(i.b)("p",null,"Just insert a sigle script after 2 dependent scripts ",Object(i.b)("inlineCode",{parentName:"p"},"p5.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"p5.sound.min.js")," in your ",Object(i.b)("inlineCode",{parentName:"p"},"<head>"),".  "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:"{5}","{5}":!0}),'<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"><\/script>\n\n\x3c!-- INSERT HERE --\x3e\n<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.min.js"><\/script>\n')),Object(i.b)("p",null,"We can also use the non-uglified code. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.js"><\/script>\n')),Object(i.b)("h2",{id:"how-to-import-into-p5js-web-editor"},"How to import into ",Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://editor.p5js.org/"}),"p5.js Web Editor")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},">")," button icon to open Sketch files."),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"index.html")," to insert ",Object(i.b)("inlineCode",{parentName:"li"},"p5.toio")," library as the method above."),Object(i.b)("li",{parentName:"ol"},"Then, you can go back and start programming by selecting ",Object(i.b)("inlineCode",{parentName:"li"},"index.js"),".\nGo on to the next page ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tetunori.github.io/p5.toio/docs/basic"}),"Basic Usage"),".")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://editor.p5js.org/"}),"p5.js Web Editor")," support ",Object(i.b)("inlineCode",{parentName:"p"},"Web Bluetooth")," but ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openprocessing.org/"}),"OpenProcessing")," unfortunately does not support it so that this library also does not work\ud83d\ude2d.  "))))}b.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,u=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return r?o.a.createElement(u,c({ref:t},s,{components:r})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);