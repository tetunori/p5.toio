"use strict";(self.webpackChunkp5_toio=self.webpackChunkp5_toio||[]).push([[8242],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=i(n),d=a,m=b["".concat(u,".").concat(d)]||b[d]||p[d]||c;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],s={id:"cubescanner",title:"CubeScanner",sidebar_label:"CubeScanner"},u=void 0,i={unversionedId:"cube/classes/cubescanner",id:"cube/classes/cubescanner",title:"CubeScanner",description:"Hierarchy",source:"@site/docs/cube/classes/cubescanner.md",sourceDirName:"cube/classes",slug:"/cube/classes/cubescanner",permalink:"/p5.toio/docs/cube/classes/cubescanner",draft:!1,editUrl:"https://github.com/tetunori/p5.toio/docs/cube/classes/cubescanner.md",tags:[],version:"current",frontMatter:{id:"cubescanner",title:"CubeScanner",sidebar_label:"CubeScanner"},sidebar:"someSidebar",previous:{title:"CubeMotorChar",permalink:"/p5.toio/docs/cube/classes/cubemotorchar"},next:{title:"CubeSensorChar",permalink:"/p5.toio/docs/cube/classes/cubesensorchar"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Index",id:"index",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"<code>Static</code> scanNewCube",id:"static-scannewcube",level:3}],b={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"CubeScanner"))),(0,c.kt)("h2",{id:"index"},"Index"),(0,c.kt)("h3",{id:"methods"},"Methods"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/p5.toio/docs/cube/classes/cubescanner#static-scannewcube"},"scanNewCube"))),(0,c.kt)("h2",{id:"methods-1"},"Methods"),(0,c.kt)("h3",{id:"static-scannewcube"},(0,c.kt)("inlineCode",{parentName:"h3"},"Static")," scanNewCube"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"scanNewCube"),"(): ",(0,c.kt)("em",{parentName:"p"},"Promise\u2039",(0,c.kt)("a",{parentName:"em",href:"/p5.toio/docs/cube/classes/cubebase"},"CubeBase"),"\u203a")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Defined in ",(0,c.kt)("a",{parentName:"em",href:"https://github.com/tetunori/p5.toio/blob/49ecddb/src/cube/scanner.ts#L9"},"cube/scanner.ts:9"))),(0,c.kt)("p",null,"Scan a new cube."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," ",(0,c.kt)("em",{parentName:"p"},"Promise\u2039",(0,c.kt)("a",{parentName:"em",href:"/p5.toio/docs/cube/classes/cubebase"},"CubeBase"),"\u203a")),(0,c.kt)("p",null,"promise. ",(0,c.kt)("inlineCode",{parentName:"p"},"resolve")," handler supplies a ",(0,c.kt)("inlineCode",{parentName:"p"},"CubeChar")," class instance corresponding to scanned and selected cube."))}d.isMDXComponent=!0}}]);