(self.webpackChunktil=self.webpackChunktil||[]).push([[8345],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,s=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(s,a(a({ref:t},m),{},{components:n})):r.createElement(s,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4797:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a={sidebar_position:1},o={unversionedId:"kotlin/effective-kotlin/ch1",id:"kotlin/effective-kotlin/ch1",isDocsHomePage:!1,title:"1. \uc548\uc815\uc131",description:"- \ucf54\ud2c0\ub9b0\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uc548\uc815\uc131(safety)\uc785\ub2c8\ub2e4.",source:"@site/docs/kotlin/effective-kotlin/ch1.md",sourceDirName:"kotlin/effective-kotlin",slug:"/kotlin/effective-kotlin/ch1",permalink:"/til/docs/kotlin/effective-kotlin/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/kotlin/effective-kotlin/ch1.md",version:"current",lastUpdatedAt:1652277557,formattedLastUpdatedAt:"5/11/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"15. \uc790\ubc14 9\uc640\uc758 \ubbf8\ub798",permalink:"/til/docs/java/optimizing-java/ch15"},next:{title:"1. \ucf54\ud2c0\ub9b0\uc774\ub780 \ubb34\uc5c7\uc774\uba70, \uc65c \ud544\uc694\ud55c\uac00?",permalink:"/til/docs/kotlin/kotlin-in-action/ch1"}},u=[{value:"Item 1. \uac00\ubcc0\uc131\uc744 \uc81c\ud55c\ud558\ub77c",id:"item-1-\uac00\ubcc0\uc131\uc744-\uc81c\ud55c\ud558\ub77c",children:[{value:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \uac00\ubcc0\uc131 \uc81c\ud55c\ud558\uae30",id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-\uac00\ubcc0\uc131-\uc81c\ud55c\ud558\uae30",children:[]},{value:"\ub2e4\ub978 \uc9c0\uc810\uc758 \ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810",id:"\ub2e4\ub978-\uc9c0\uc810\uc758-\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810",children:[]},{value:"\ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810 \ub178\ucd9c\ud558\uc9c0 \ub9d0\uae30",id:"\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810-\ub178\ucd9c\ud558\uc9c0-\ub9d0\uae30",children:[]},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",children:[]}]},{value:"Item 2. \ubcc0\uc218\uc758 \uc2a4\ucf54\ud504\ub97c \ucd5c\uc18c\ud654\ud558\ub77c",id:"item-2-\ubcc0\uc218\uc758-\uc2a4\ucf54\ud504\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c",children:[]},{value:"Item 3. \ucd5c\ub300\ud55c \ud50c\ub7ab\ud3fc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c",id:"item-3-\ucd5c\ub300\ud55c-\ud50c\ub7ab\ud3fc-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\ub77c",children:[]},{value:"Item 4. inferred \ud0c0\uc785\uc73c\ub85c \ub9ac\ud134\ud558\uc9c0 \ub9d0\ub77c",id:"item-4-inferred-\ud0c0\uc785\uc73c\ub85c-\ub9ac\ud134\ud558\uc9c0-\ub9d0\ub77c",children:[]},{value:"Item 5. \uc608\uc678\ub97c \ud65c\uc6a9\ud574 \ucf54\ub4dc\uc5d0 \uc81c\ud55c\uc744 \uac78\uc5b4\ub77c",id:"item-5-\uc608\uc678\ub97c-\ud65c\uc6a9\ud574-\ucf54\ub4dc\uc5d0-\uc81c\ud55c\uc744-\uac78\uc5b4\ub77c",children:[]},{value:"Item 6. \uc0ac\uc6a9\uc790 \uc815\uc758 \uc624\ub958\ubcf4\ub2e4\ub294 \ud45c\uc900 \uc624\ub958\ub97c \uc0ac\uc6a9\ud558\ub77c",id:"item-6-\uc0ac\uc6a9\uc790-\uc815\uc758-\uc624\ub958\ubcf4\ub2e4\ub294-\ud45c\uc900-\uc624\ub958\ub97c-\uc0ac\uc6a9\ud558\ub77c",children:[]},{value:"Item 7. \uacb0\uacfc \ubd80\uc871\uc774 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 null\uacfc Failure\uc744 \uc0ac\uc6a9\ud558\ub77c",id:"item-7-\uacb0\uacfc-\ubd80\uc871\uc774-\ubc1c\uc0dd\ud560-\uacbd\uc6b0-null\uacfc-failure\uc744-\uc0ac\uc6a9\ud558\ub77c",children:[]},{value:"Item 8. \uc801\uc808\ud558\uac8c null\uc744 \ucc98\ub9ac\ud558\ub77c",id:"item-8-\uc801\uc808\ud558\uac8c-null\uc744-\ucc98\ub9ac\ud558\ub77c",children:[]},{value:"Item 9. use\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c",id:"item-9-use\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c",children:[]},{value:"Item 10. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub77c",id:"item-10-\ub2e8\uc704-\ud14c\uc2a4\ud2b8\ub97c-\ub9cc\ub4e4\uc5b4\ub77c",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uc548\uc815\uc131(safety)\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub97c \uc798 \ud558\uae30\uc704\ud574\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \ub4b7\ubc1b\uce68\uc744 \ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"'\uc989. \uc624\ub958\uac00 \ub35c \ubc1c\uc0dd\ud558\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4dc\ub294 \uac83'\uc5d0 \ub300\ud574 \uc911\uc810\uc801\uc73c\ub85c \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-1-\uac00\ubcc0\uc131\uc744-\uc81c\ud55c\ud558\ub77c"},"Item 1. \uac00\ubcc0\uc131\uc744 \uc81c\ud55c\ud558\ub77c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \ubaa8\ub4c8\ub85c \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uacc4\ud558\uba70 \ubaa8\ub4c8\uc740 \ud074\ub798\uc2a4, \uac1d\uccb4, \ud568\uc218, \ud0c0\uc785 \ubcc4\uce6d, \ud1b1\ub808\ubca8 \ud3ec\ub85c\ud37c\ud2f0 \ub4f1 \ub2e4\uc591\ud55c \uc694\uc18c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc694\uc18c \uc911 \uc77c\ubd80\ub294 \uc0c1\ud0dc(state)\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \uc0c1\ud0dc\ub294 \uc591\ub0a0\uc758 \uac80\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc758 \ubcc0\ud654\uc5d0 \ub530\ub77c\uc11c \ubcc0\ud654\ub294 \uc694\uc18c\ub97c \ud45c\ud604\ud558\uae30\ub294 \uc88b\uc73c\ub098, \uc0c1\ud0dc\ub97c \uc801\uc808\ud558\uac8c \uad00\ub9ac\ud558\ub294 \uac83\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub300\uaddc\ubaa8 \ud300\uc77c\uc218\ub85d \ubcc0\uacbd \uac00\ub2a5\ud55c \ubd80\ubd84\uc5d0 \uc758\ud55c \uc77c\uad00\uc131(consistency) \ubb38\uc81c, \ubcf5\uc7a1\uc131(complexity) \uc99d\uac00\uc640 \uad00\ub828\ub41c \ubb38\uc81c\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\ub294 \ub3d9\uae30\ud654\ub97c \uc798 \uad6c\ud604\ud574\uc57c\ud558\uba70 \uc774\ub294 \uad49\uc7a5\ud788 \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ubcc0\ud560 \uc218 \uc788\ub294 \uc9c0\uc810\uc744 \uc904\uc774\ub294 \uac83\uc774 \ud575\uc2ec\uc785\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-\uac00\ubcc0\uc131-\uc81c\ud55c\ud558\uae30"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \uac00\ubcc0\uc131 \uc81c\ud55c\ud558\uae30"),(0,l.kt)("h3",{id:"\ub2e4\ub978-\uc9c0\uc810\uc758-\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810"},"\ub2e4\ub978 \uc9c0\uc810\uc758 \ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810"),(0,l.kt)("h3",{id:"\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810-\ub178\ucd9c\ud558\uc9c0-\ub9d0\uae30"},"\ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810 \ub178\ucd9c\ud558\uc9c0 \ub9d0\uae30"),(0,l.kt)("h3",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-2-\ubcc0\uc218\uc758-\uc2a4\ucf54\ud504\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c"},"Item 2. \ubcc0\uc218\uc758 \uc2a4\ucf54\ud504\ub97c \ucd5c\uc18c\ud654\ud558\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-3-\ucd5c\ub300\ud55c-\ud50c\ub7ab\ud3fc-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\ub77c"},"Item 3. \ucd5c\ub300\ud55c \ud50c\ub7ab\ud3fc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-4-inferred-\ud0c0\uc785\uc73c\ub85c-\ub9ac\ud134\ud558\uc9c0-\ub9d0\ub77c"},"Item 4. inferred \ud0c0\uc785\uc73c\ub85c \ub9ac\ud134\ud558\uc9c0 \ub9d0\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-5-\uc608\uc678\ub97c-\ud65c\uc6a9\ud574-\ucf54\ub4dc\uc5d0-\uc81c\ud55c\uc744-\uac78\uc5b4\ub77c"},"Item 5. \uc608\uc678\ub97c \ud65c\uc6a9\ud574 \ucf54\ub4dc\uc5d0 \uc81c\ud55c\uc744 \uac78\uc5b4\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-6-\uc0ac\uc6a9\uc790-\uc815\uc758-\uc624\ub958\ubcf4\ub2e4\ub294-\ud45c\uc900-\uc624\ub958\ub97c-\uc0ac\uc6a9\ud558\ub77c"},"Item 6. \uc0ac\uc6a9\uc790 \uc815\uc758 \uc624\ub958\ubcf4\ub2e4\ub294 \ud45c\uc900 \uc624\ub958\ub97c \uc0ac\uc6a9\ud558\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-7-\uacb0\uacfc-\ubd80\uc871\uc774-\ubc1c\uc0dd\ud560-\uacbd\uc6b0-null\uacfc-failure\uc744-\uc0ac\uc6a9\ud558\ub77c"},"Item 7. \uacb0\uacfc \ubd80\uc871\uc774 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 null\uacfc Failure\uc744 \uc0ac\uc6a9\ud558\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-8-\uc801\uc808\ud558\uac8c-null\uc744-\ucc98\ub9ac\ud558\ub77c"},"Item 8. \uc801\uc808\ud558\uac8c null\uc744 \ucc98\ub9ac\ud558\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-9-use\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c"},"Item 9. use\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-10-\ub2e8\uc704-\ud14c\uc2a4\ud2b8\ub97c-\ub9cc\ub4e4\uc5b4\ub77c"},"Item 10. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub77c"))}m.isMDXComponent=!0}}]);