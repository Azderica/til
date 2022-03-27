(self.webpackChunktil=self.webpackChunktil||[]).push([[7978],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(d,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6501:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={sidebar_position:11},c={unversionedId:"dev/ddd-start/ch11",id:"dev/ddd-start/ch11",isDocsHomePage:!1,title:"11. CQRS",description:"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810",source:"@site/docs/dev/ddd-start/ch11.md",sourceDirName:"dev/ddd-start",slug:"/dev/ddd-start/ch11",permalink:"/til/docs/dev/ddd-start/ch11",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/ddd-start/ch11.md",version:"current",lastUpdatedAt:1648425293,formattedLastUpdatedAt:"3/27/2022",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"10. \uc774\ubca4\ud2b8",permalink:"/til/docs/dev/ddd-start/ch10"},next:{title:"\uac1d\uccb4 \uc9c0\ud5a5",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch1"}},d=[{value:"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810",id:"\ub2e8\uc77c-\ubaa8\ub378\uc758-\ub2e8\uc810",children:[]},{value:"CQRS",id:"cqrs",children:[{value:"\uc6f9\uacfc CQRS",id:"\uc6f9\uacfc-cqrs",children:[]},{value:"CQRS \uc7a5\ub2e8\uc810",id:"cqrs-\uc7a5\ub2e8\uc810",children:[]}]}],l={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ub2e8\uc77c-\ubaa8\ub378\uc758-\ub2e8\uc810"},"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc8fc\ubb38 \ub0b4\uc5ed \uc870\ud68c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub824\uba74 \uc5ec\ub7ec \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c\ud569\ub2c8\ub2e4.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ex. Order, Product, Member"))),(0,o.kt)("li",{parentName:"ul"},"\uc870\ud68c \ud654\uba74\uc758 \ud2b9\uc131\uc0c1 \uc870\ud68c \uc18d\ub3c4\uac00 \ube60\ub97c\uc218\ub85d \uc88b\uc740\ub370 \uc5ec\ub7ec \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c\ud560 \uacbd\uc6b0 \uad6c\ud604 \ubc29\ubc95\uc744 \uace0\ubbfc\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc774\uc720\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720\ub294 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \ub54c\uc640 \uc870\ud68c\ud560\ub54c \ub2e8\uc77c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uad6c\ud604 \ubcf5\uc7a1\ub3c4\ub97c \ub0ae\ucd94\ub294 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc704\ud55c \ubaa8\ub378\uacfc \uc870\ud68c\ub97c \uc704\ud55c \ubaa8\ub378\uc744 \ubd84\ub9ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"cqrs"},"CQRS"),(0,o.kt)("h3",{id:"\uc6f9\uacfc-cqrs"},"\uc6f9\uacfc CQRS"),(0,o.kt)("h3",{id:"cqrs-\uc7a5\ub2e8\uc810"},"CQRS \uc7a5\ub2e8\uc810"))}u.isMDXComponent=!0}}]);