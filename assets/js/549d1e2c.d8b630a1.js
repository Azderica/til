(self.webpackChunktil=self.webpackChunktil||[]).push([[8314],{3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return k},kt:function(){return d}});var a=l(7294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},k=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),c=o(l),d=n,s=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return l?a.createElement(s,i(i({ref:e},k),{},{components:l})):a.createElement(s,i({ref:e},k))}));function d(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=l.length,i=new Array(r);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},6837:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var a=l(2122),n=l(9756),r=(l(7294),l(3905)),i={sidebar_position:9},u={unversionedId:"java/optimizing-java/ch9",id:"java/optimizing-java/ch9",isDocsHomePage:!1,title:"9. JVM\uc758 \ucf54\ub4dc \uc2e4\ud589",description:"JVM\uc774 \uc81c\uacf5\ud558\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \uc11c\ube44\uc2a4\ub294 \uba54\ubaa8\ub9ac \uad00\ub9ac\uc640 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc2e4\ud589 \ucee8\ud14c\uc774\ub108\uc785\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch9.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch9",permalink:"/til/docs/java/optimizing-java/ch9",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch9.md",version:"current",lastUpdatedAt:1651371930,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. GC \ub85c\uae45, \ubaa8\ub2c8\ud130\ub9c1, \ud29c\ub2dd, \ud234",permalink:"/til/docs/java/optimizing-java/ch8"},next:{title:"10. JIT \ucef4\ud30c\uc77c\uc758 \uc138\uacc4\ub85c",permalink:"/til/docs/java/optimizing-java/ch10"}},p=[{value:"\ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d",id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\ud574\uc11d",children:[{value:"JVM \ubc14\uc774\ud2b8\ucf54\ub4dc \uac1c\uc694",id:"jvm-\ubc14\uc774\ud2b8\ucf54\ub4dc-\uac1c\uc694",children:[]},{value:"\ub2e8\uc21c \uc778\ud130\ud504\ub9ac\ud130",id:"\ub2e8\uc21c-\uc778\ud130\ud504\ub9ac\ud130",children:[]},{value:"\ud56b\uc2a4\ud31f\uc5d0 \ud2b9\uc815\ud55c \ub0b4\uc6a9",id:"\ud56b\uc2a4\ud31f\uc5d0-\ud2b9\uc815\ud55c-\ub0b4\uc6a9",children:[]}]},{value:"AOT\uc640 JIT \ucef4\ud30c\uc77c",id:"aot\uc640-jit-\ucef4\ud30c\uc77c",children:[{value:"AOT \ucef4\ud30c\uc77c",id:"aot-\ucef4\ud30c\uc77c",children:[]},{value:"JIT \ucef4\ud30c\uc77c",id:"jit-\ucef4\ud30c\uc77c",children:[]},{value:"AOT \ucef4\ud30c\uc77c vs JIT \ucef4\ud30c\uc77c",id:"aot-\ucef4\ud30c\uc77c-vs-jit-\ucef4\ud30c\uc77c",children:[]}]},{value:"\ud56b\uc2a4\ud31f JIT \uae30\ucd08",id:"\ud56b\uc2a4\ud31f-jit-\uae30\ucd08",children:[{value:"klass \uc6cc\ub4dc, vtable, \ud3ec\uc778\ud2b8 \uc2a4\uc704\uc990\ub9c1",id:"klass-\uc6cc\ub4dc-vtable-\ud3ec\uc778\ud2b8-\uc2a4\uc704\uc990\ub9c1",children:[]},{value:"JIT \ucef4\ud30c\uc77c \ub85c\uae45",id:"jit-\ucef4\ud30c\uc77c-\ub85c\uae45",children:[]},{value:"\ud56b\uc2a4\ud31f \ub0b4\ubd80\uc758 \ucef4\ud30c\uc77c\ub7ec",id:"\ud56b\uc2a4\ud31f-\ub0b4\ubd80\uc758-\ucef4\ud30c\uc77c\ub7ec",children:[]},{value:"\ud56b\uc2a4\ud31f\uc758 \ub2e8\uacc4\ubcc4 \ucef4\ud30c\uc77c",id:"\ud56b\uc2a4\ud31f\uc758-\ub2e8\uacc4\ubcc4-\ucef4\ud30c\uc77c",children:[]}]},{value:"\ucf54\ub4dc \uce90\uc2dc",id:"\ucf54\ub4dc-\uce90\uc2dc",children:[{value:"\ub2e8\ud3b8\ud654",id:"\ub2e8\ud3b8\ud654",children:[]}]},{value:"\uac04\ub2e8\ud55c JIT \ud29c\ub2dd\ubc95",id:"\uac04\ub2e8\ud55c-jit-\ud29c\ub2dd\ubc95",children:[]}],o={toc:p};function k(t){var e=t.components,l=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JVM\uc774 \uc81c\uacf5\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uc7a5 \uc911\uc694\ud55c \uc11c\ube44\uc2a4\ub294 \uba54\ubaa8\ub9ac \uad00\ub9ac\uc640 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc2e4\ud589 \ucee8\ud14c\uc774\ub108"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc7a5\uc5d0\uc11c\ub294 \ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d\uc744 \uc54c\uc544\ubcf4\uace0 \uc778\ud130\ud504\ub9ac\ud130\uc640 \ud56b\uc2a4\ud31f\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud504\ub85c\ud30c\uc77c \uae30\ubc18 \ucd5c\uc801\ud654\uc758 \uae30\ucd08 \uac1c\ub150\uc744 \ub2e4\ub8e8\uace0 \ucf54\ub4dc \uce90\uc2dc \ubc0f \ud56b\uc2a4\ud31f \ucef4\ud30c\uc77c \uc11c\ube44\uc2dc\uc2a4\ud15c\uc758 \uae30\ubcf8\uc801\uc778 \ub0b4\uc6a9\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\ud574\uc11d"},"\ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d"),(0,r.kt)("p",null,"JVM \uc778\ud130\ud504\ub9ac\ud130\ub294 \uc77c\uc885\uc758 \uc2a4\ud0dd \uba38\uc2e0\ucc98\ub7fc \uc791\ub3d9\ud558\ubbc0\ub85c \ubb3c\ub9ac\uc801 CPU\uc640\ub294 \ub2ec\ub9ac \uacc4\uc0b0 \uacb0\uacfc\ub97c \ubcf4\uad00\ud558\ub294 \ub808\uc9c0\uc2a4\ud130\ub9ac\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \uc791\uc5c5\ud560 \uac12\uc740 \ubaa8\ub450 \ud3c9\uac00 \uc2a4\ud0dd\uc5d0 \ub193\uace0 \uc2a4\ud0dd \uba38\uc2e0 \uba85\ub839\uc5b4\ub85c \uc2a4\ud0dd \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud55c \uac12\uc744 \ubaa8\ub450 \ud3c9\uac00 \uc2a4\ud0dd\uc5d0 \ub193\uace0 \uc2a4\ud0dd \uba38\uc2e0 \uba85\ub839\uc5b4\ub85c \uc2a4\ud0dd \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud55c \uac12\uc744 \ubcc0\ud658\ud558\ub294 \uc2dd\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM\uc740 \ub2e4\uc74c \uc138 \uacf5\uac04\uc5d0 \uc8fc\ub85c \ub370\uc774\ud130\ub97c \ub2f4\uc544 \ub192\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud3c9\uac00 \uc2a4\ud0dd : \uba54\uc11c\ub4dc\ubcc4\ub85c \ud558\ub098\uc529 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub85c\uceec \ubcc0\uc218 : \uacb0\uacfc\ub97c \uc784\uc2dc \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ud799 : \uba54\uc11c\ub4dc\ub07c\ub9ac, \uc2a4\ub808\ub4dc\ub07c\ub9ac \uacf5\uc720\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"jvm-\ubc14\uc774\ud2b8\ucf54\ub4dc-\uac1c\uc694"},"JVM \ubc14\uc774\ud2b8\ucf54\ub4dc \uac1c\uc694"),(0,r.kt)("p",null,"\uc790\ubc14\ub294 \ucc98\uc74c\ubd80\ud130 \uc774\uc2dd\uc131\uc744 \uc5fc\ub450\uc5d0 \ub450\uace0 \uc124\uacc4\ub41c \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c big endian, little endian \ud558\ub4dc\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98 \ubaa8\ub450 \ubc14\uc774\ud2b8 \ucf54\ub4dc \ubcc0\uacbd\uc5c6\uc774 \uc2e4\ud589 \uac00\ub2a5\ud558\ub3c4\ub85d \uba85\uc138\uc5d0 \uaddc\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc5b4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub85c\ub4dc/\uc2a4\ud1a0\uc5b4 \uce74\ud14c\uace0\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"load, store, ldc, const, pop, dup, getField, putField"))),(0,r.kt)("li",{parentName:"ul"},"\uc0b0\uc220 \uce74\ud14c\uace0\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add, sub, div, mul"))),(0,r.kt)("li",{parentName:"ul"},"\ud750\ub984 \uc81c\uc5b4 \uce74\ud14c\uace0\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if, goto"))),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \ud638\ucd9c \uce74\ud14c\uace0\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"invokevirtual, invokespecial, ..."))),(0,r.kt)("li",{parentName:"ul"},"\ud50c\ub7ab\ud3fc \uce74\ud14c\uace0\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"new, newarray, anewarray, ...")))),(0,r.kt)("h3",{id:"\ub2e8\uc21c-\uc778\ud130\ud504\ub9ac\ud130"},"\ub2e8\uc21c \uc778\ud130\ud504\ub9ac\ud130"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kittylyst/ocelotvm"},"\ub2e8\uc21c\ud55c \uc778\ud130\ud504\ub9ac\ud130 \uc608\uc2dc, \uc624\uc2ac\ub86f")),(0,r.kt)("h3",{id:"\ud56b\uc2a4\ud31f\uc5d0-\ud2b9\uc815\ud55c-\ub0b4\uc6a9"},"\ud56b\uc2a4\ud31f\uc5d0 \ud2b9\uc815\ud55c \ub0b4\uc6a9"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c1\uc6a9 \uc81c\ud488\uae09 JVM\uc774\uba70 \uc644\uc804\ud55c \uad6c\ud604\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud504\ub9ac\ud306\ub4dc \ubaa8\ub4dc\uc5d0\uc11c \ube60\ub974\uac8c \uc2e4\ud589\ub420 \uc218 \uc788\ub294 \uc5ec\ub7ec \uace0\uae09 \ud655\uc7a5 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc74c")),(0,r.kt)("p",null,"\ucc38\uace0 \ucf54\ub4dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kittylyst/ocelotvm"},"https://github.com/kittylyst/ocelotvm"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"aot\uc640-jit-\ucef4\ud30c\uc77c"},"AOT\uc640 JIT \ucef4\ud30c\uc77c"),(0,r.kt)("h3",{id:"aot-\ucef4\ud30c\uc77c"},"AOT \ucef4\ud30c\uc77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C/C++\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub7a8 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc678\ubd80 \ud504\ub85c\uadf8\ub7a8\uc5d0 \ub123\uace0 \ubc14\ub85c \uc2e4\ud589 \uac00\ub2a5\ud55c \uae30\uacc4\uc5b4\ub97c \ubf51\uc544\ub0b4\ub294 \uacfc\uc815"),(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc2a4\ucf54\ub4dc\ub97c AOT \ucef4\ud30c\uc77c\ud558\uba74 \uc5b4\ub5a4 \uc2dd\uc73c\ub85c \ucd5c\uc801\ud654\ud560 \uae30\ud68c\ub294 \ub2e8 \ud55c\ubc88\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CPU \uae30\ub2a5\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uace0 \uc131\ub2a5\ud5a5\uc0c1\uc758 \uc219\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"jit-\ucef4\ud30c\uc77c"},"JIT \ucef4\ud30c\uc77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784\uc5d0 \ud504\ub85c\uadf8\ub7a8\uc744 \uace0\ub3c4\ub85c \ucd5c\uc801\ud654\ud55c \uae30\uacc4\uc5b4\ub85c \ubcc0\ud658\ud558\ub294 \uae30\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uc0c1\uc6a9 JVM\uc774 \uc774\ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ub429\ub2c8\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784 \uc2e4\ud589 \uc815\ubcf4\ub97c \uc218\uc9d1\ud574\uc11c \uc5b4\ub290 \ubd80\ubd84\uc774 \uc790\uc8fc \uc4f0\uc774\uace0, \uc5b4\ub290 \ubd80\ubd84\uc744 \ucd5c\uc801\ud654\ud574\uc57c \uac00\uc7a5 \ud6a8\uacfc\uac00 \uc88b\uc740\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud504\ub85c\ud30c\uc77c \uae30\ubc18 \ucd5c\uc801\ud654(PGO, Profile-guided optimization)"))),(0,r.kt)("li",{parentName:"ul"},"JIT \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc740 \uc2e4\ud589 \ud504\ub85c\uadf8\ub7a8\uacfc VM\ub9ac\uc18c\uc2a4\ub97c \uacf5\uc720\ud558\ubbc0\ub85c \ud504\ub85c\ud30c\uc77c\ub9c1 \ubc0f \ucd5c\uc801\ud654 \ube44\uc6a9 \ubc0f \uc131\ub2a5 \ud5a5\uc0c1 \uae30\ub300\uce58 \uc0ac\uc774\uc758 \uade0\ud615\uc744 \ub9de\ucdb0\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8\ucf54\ub4dc\ub97c \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c\ud558\ub294 \ube44\uc6a9\uc740 \ub7f0\ud0c0\uc784\uc5d0 \uc9c0\ubd88\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc740 \ud504\ub85c\ud30c\uc77c\ub9c1 \uc815\ubcf4\ub97c \ubcf4\uad00\ud558\uc9c0 \uc54a\uace0 VM\uc774 \uaebc\uc9c0\uba74 \uc77c\uccb4 \ud3d0\uae30\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"aot-\ucef4\ud30c\uc77c-vs-jit-\ucef4\ud30c\uc77c"},"AOT \ucef4\ud30c\uc77c vs JIT \ucef4\ud30c\uc77c"),(0,r.kt)("p",null,"AOT \ucef4\ud30c\uc77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ud574\ud558\uae30 \uc26c\uc6c0"),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc801\ud654 \uacb0\uc815\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc11c \ub7f0\ud0c0\uc784 \uc815\ubcf4\ub97c \ud3ec\uae30\ud558\ub294 \ub9cc\ud07c \uc7a5\uc810\uc774 \uc0c1\uc1c4\ub428"),(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud504\ub85c\uc138\uc11c\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2e4\ud589 \ucf54\ub4dc\uac00 \ub9cc\ub4e4\uc5b4\uc9d0"),(0,r.kt)("li",{parentName:"ul"},"\ud655\uc7a5\uc131\uc5d0\uc11c \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"JIT \ucef4\ud30c\uc77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c \ub9b4\ub9ac\uc988\ub9c8\ub2e4 \ud504\ub85c\uc138\uc2a4 \uae30\ub2a5\uc5d0 \ucd5c\uc801\ud654 \ucf54\ub4dc\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2e0\uae30\ub2a5\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc790\ubc14 9\ubd80\ud130 \ud56b\uc2a4\ud31f VM\uc740 JDK \ucf54\uc5b4 \ud074\ub798\uc2a4\ub97c \ub300\uc0c1\uc73c\ub85c AOT \ucef4\ud30c\uc77c \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud56b\uc2a4\ud31f-jit-\uae30\ucd08"},"\ud56b\uc2a4\ud31f JIT \uae30\ucd08"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc758 \uae30\ubcf8 ",(0,r.kt)("strong",{parentName:"li"},"\ucef4\ud30c\uc77c \ub2e8\uc704"),"\ub294 \uc804\uccb4 \uba54\uc11c\ub4dc\uc785\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud55c \uba54\uc11c\ub4dc\uc5d0 \ud574\ub2f9\ud558\ub294 \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub294 \ud55c\uaebc\ubc88\uc5d0 \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc740 \ud56b \ub8e8\ud504\ub97c \uc628-\uc2a4\ud0dd \uce58\ud658(OSR, on-stack replacement)\ub77c\ub294 \uae30\ubc95\uc744 \uc774\uc6a9\ud574 \ucef4\ud30c\uc77c \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"klass-\uc6cc\ub4dc-vtable-\ud3ec\uc778\ud2b8-\uc2a4\uc704\uc990\ub9c1"},"klass \uc6cc\ub4dc, vtable, \ud3ec\uc778\ud2b8 \uc2a4\uc704\uc990\ub9c1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc740 \uba40\ud2f0\uc2a4\ub808\ub4dc C++ \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),(0,r.kt)("li",{parentName:"ul"},"JIT \ucef4\ud30c\uc77c \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc744 \uad6c\uc131\ud558\ub294 \uc2a4\ub808\ub4dc\ub294 \ud56b\uc2a4\ud31f \ub0b4\ubd80\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uc2a4\ub808\ub4dc")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud558\ub098\uc758 \uba54\uc11c\ub4dc\ub97c \ub2e8\uc21c \ucef4\ud30c\uc77c\ud558\ub294 \uacfc\uc815")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/124359196-e3187700-dc5e-11eb-9d9c-ba1f4a3c1c5b.png",alt:"image"})),(0,r.kt)("h3",{id:"jit-\ucef4\ud30c\uc77c-\ub85c\uae45"},"JIT \ucef4\ud30c\uc77c \ub85c\uae45"),(0,r.kt)("p",null,"\uc131\ub2a5 \uc5d4\uc9c0\ub2c8\uc5b4\ub77c\uba74 \ub2e4\uc74c JVM \uc2a4\uc704\uce58\ub97c \ubc18\ub4dc\uc2dc \uae30\uc5b5\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+PrintCompilation")),(0,r.kt)("h3",{id:"\ud56b\uc2a4\ud31f-\ub0b4\ubd80\uc758-\ucef4\ud30c\uc77c\ub7ec"},"\ud56b\uc2a4\ud31f \ub0b4\ubd80\uc758 \ucef4\ud30c\uc77c\ub7ec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f JVM\uc5d0\ub294 C1, C2\ub77c\ub294 \ub450 JIT \ucef4\ud30c\uc77c\ub7ec\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"C1, C2 \ucef4\ud30c\uc77c\ub7ec \ubaa8\ub450 \ud575\uc2ec \uce21\uc815\uac12, \uc989 \uba54\uc11c\ub4dc \ud638\ucd9c \ud69f\uc218\uc5d0 \ub530\ub77c \ucef4\ud30c\uc77c\uc774 \ud2b8\ub9ac\uac70\ub9c1\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \ud504\ub85c\uc138\uc2a4\ub294 \uac00\uc7a5 \uba3c\uc800 \uba54\uc11c\ub4dc\uc758 \ub0b4\ubd80 \ud45c\ud604\ud615\uc744 \uc0dd\uc131\ud55c \ub2e4\uc74c \uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ub2e8\uacc4\uc5d0\uc11c \uc218\uc9d1\ud55c \ud504\ub85c\ud30c\uc77c\ub9c1 \uc815\ubcf4\ub97c \ubc14\ud0d5\uc73c\ub85c \ucd5c\uc801\ud654 \ub85c\uc9c1\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac19\uc740 \ucf54\ub4dc\ub77c\ub3c4 C1\uacfc C2\uac00 \uc0dd\uc131\ud55c \ub0b4\ubd80 \ud45c\ud604\ud615\uc740 \uc804\ud600 \ub2e4\ub985\ub2c8\ub2e4. (\uc77c\ubc18\uc801\uc73c\ub85c C1\uc774 C2\ubcf4\ub2e4 \ucef4\ud30c\uc77c \uc2dc\uac04\ub3c4 \ub354 \uc9e7\uace0 \ub2e8\uc21c\ud569\ub2c8\ub2e4.)")),(0,r.kt)("h3",{id:"\ud56b\uc2a4\ud31f\uc758-\ub2e8\uacc4\ubcc4-\ucef4\ud30c\uc77c"},"\ud56b\uc2a4\ud31f\uc758 \ub2e8\uacc4\ubcc4 \ucef4\ud30c\uc77c"),(0,r.kt)("p",null,"\uc790\ubc14 6\ubd80\ud130 JVM\uc740 \ub2e8\uacc4\ubcc4 \ucef4\ud30c\uc77c \ubaa8\ub4dc\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub808\ubca8 0 : \uc778\ud130\ud504\ub9ac\ud130"),(0,r.kt)("li",{parentName:"ul"},"\ub808\ubca8 1 : C1 - \ud480 \ucd5c\uc801\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ub808\ubca8 2 : C1 - \ud638\ucd9c \uce74\uc6b4\ud130 + \ubc31\uc5e3\uc9c0 \uce74\uc6b4\ud130"),(0,r.kt)("li",{parentName:"ul"},"\ub808\ubca8 3 : C1 - \ud480 \ud504\ub85c\ud30c\uc77c\ub9c1"),(0,r.kt)("li",{parentName:"ul"},"\ub808\ubca8 4 : C2")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ucf54\ub4dc-\uce90\uc2dc"},"\ucf54\ub4dc \uce90\uc2dc"),(0,r.kt)("p",null,"JIT \ucef4\ud30c\uc77c\ub4dc \ucf54\ub4dc\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ucf54\ub4dc \uce90\uc2dc"),"\ub77c\ub294 \uba54\ubaa8\ub9ac \uc601\uc5ed\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc774\uacf3\uc5d0\ub294 \uc778\ud130\ud504\ub9ac\ud130 \ubd80\uc18d \ub4f1 VM \uc790\uccb4 \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucf54\ub4dc \uce90\uc2dc\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ubbf8\ud560\ub2f9 \uc601\uc5ed"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"\ud504\ub9ac \ube14\ub85d \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8"),"\ub97c \ub2f4\uc740 \ud799\uc73c\ub85c \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \ub124\uc78d\ud2f0\ube0c \ucf54\ub4dc\uac00 \ucf54\ub4dc \uce90\uc2dc\uc5d0\uc11c \uc81c\uac70\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ed\ucd5c\uc801\ud654\ub420 \ub54c"),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ucef4\ud30c\uc77c \ubc84\uc804\uc73c\ub85c \uad50\uccb4\ub410\uc744 \ub54c"),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uc9c0\ub2cc \ud074\ub798\uc2a4\uac00 \uc5b8\ub85c\ub529\ub420 \ub54c")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud480\uc5b4\uc124\uba85\ud558\uba74, \ucd94\uce21\ud574\uc11c \ucf54\ub4dc\ub97c \ucd5c\uc801\ud654\ud588\ub294\ub370 \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0 \ucd5c\uc801\ud654 \uc774\uc804\uc758 \ud615\ud0dc\ub85c \ub418\ub3cc\ub824\ub193\ub294 \ud589\uc704\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ub2e8\ud3b8\ud654"},"\ub2e8\ud3b8\ud654"),(0,r.kt)("p",null,"C1 \ucef4\ud30c\uc77c\ub7ec\ub97c \uac70\uce5c \uc911\uac04 \ub2e8\uacc4\uc758 \ucef4\ud30c\uc77c\ub4dc \ucf54\ub4dc\uac00 C2 \ucef4\ud30c\uc77c\ub85c \uce58\ud658\ub41c \ud6c4 \uc0ad\uc81c\ub418\ub294 \uc77c\uc774 \uc7a6\uc544\uc9c0\uba74 \ucf54\ub4dc \uce90\uc2dc\ub294 \ub2e8\ud3b8\ud654\ub418\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uac04\ub2e8\ud55c-jit-\ud29c\ub2dd\ubc95"},"\uac04\ub2e8\ud55c JIT \ud29c\ub2dd\ubc95"),(0,r.kt)("p",null,"\ucf54\ub4dc \ud29c\ub2dd \uc2dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 JIT \ucef4\ud30c\uc77c\uc744 \uc2ed\ubd84 \ud654\ub8e1\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \uac83\uc740 \uadf8\ub9ac \uc5b4\ub835\uc9c0 \u3147\ub0b3\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e8\uc21c JIT \ud29c\ub2dd\uc758 \ub300\uc6d0\uce59\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ucef4\ud30c\uc77c\uc744 \uc6d0\ud558\ub294 \uba54\uc11c\ub4dc\uc5d0\uac8c \uc544\ub08c\uc5c6\uc774 \ub9ac\uc18c\uc2a4\ub97c \ubca0\ud489\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \ud56d\ubaa9\uc744 \uc810\uac80\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba3c\uc800 PrintCompilation \uc2a4\uc704\uce58\ub97c \ucf1c\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub290 \uba54\uc11c\ub4dc\uac00 \ucef4\ud30c\uc77c\ub410\ub294\uc9c0 \uae30\ub85d\ub41c \ub85c\uadf8\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"ReservedCodeCacheSize\ub97c \ud1b5\ud574 \ucf54\ub4dc \uce90\uc2dc\ub97c \ub298\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc7ac\uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud655\uc7a5\ub41c \uce90\uc2dc\uc5d0\uc11c \ucef4\ud30c\uc77c\ub4dc \uba54\uc11c\ub4dc\ub97c \uc0b4\ud3b4\ubd05\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ub97c \uba85\uc2ec\ud558\uba74 \ub450\uac00\uc9c0 \uc0ac\uc2e4\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc \ud06c\uae30\ub97c \ub298\ub9ac\uba74 \ucef4\ud30c\uc77c\ub4dc \uba54\uc11c\ub4dc \uaddc\ubaa8\uac00 \uc720\uc758\ubbf8\ud55c \ubc29\ud5a5\uc73c\ub85c \ucee4\uc9c0\ub294\uac00."),(0,r.kt)("li",{parentName:"ul"},"\uc8fc\uc694 \ud2b8\ub79c\uc7ad\uc158 \uacbd\ub85c\uc0c1\uc5d0 \uc704\uce58\ud55c \uc8fc\uc694 \uba54\uc11c\ub4dc\uac00 \ubaa8\ub450 \ucef4\ud30c\uc77c\ub418\uace0 \uc788\ub294\uac00.")),(0,r.kt)("p",null,"\uc704 \ub450\uac1c\ub97c \uace0\ub824\ud558\uba74\uc11c JIT\ub97c \ud29c\ub2dd\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);