(self.webpackChunktil=self.webpackChunktil||[]).push([[8314],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={},o={unversionedId:"java/optimizing-java/ch9",id:"java/optimizing-java/ch9",isDocsHomePage:!1,title:"JVM\uc758 \ucf54\ub4dc \uc2e4\ud589",description:"JVM\uc774 \uc81c\uacf5\ud558\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \uc11c\ube44\uc2a4\ub294 \uba54\ubaa8\ub9ac \uad00\ub9ac\uc640 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc2e4\ud589 \ucee8\ud14c\uc774\ub108\uc785\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch9.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch9",permalink:"/til/docs/java/optimizing-java/ch9",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch9.md",version:"current",lastUpdatedAt:1624975240,formattedLastUpdatedAt:"6/29/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GC \ub85c\uae45, \ubaa8\ub2c8\ud130\ub9c1, \ud29c\ub2dd, \ud234",permalink:"/til/docs/java/optimizing-java/ch8"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/toby-spring/ch1"}},u=[{value:"\ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d",id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\ud574\uc11d",children:[{value:"JVM \ubc14\uc774\ud2b8\ucf54\ub4dc \uac1c\uc694",id:"jvm-\ubc14\uc774\ud2b8\ucf54\ub4dc-\uac1c\uc694",children:[]},{value:"\ub2e8\uc21c \uc778\ud130\ud504\ub9ac\ud130",id:"\ub2e8\uc21c-\uc778\ud130\ud504\ub9ac\ud130",children:[]},{value:"\ud56b\uc2a4\ud31f\uc5d0 \ud2b9\uc815\ud55c \ub0b4\uc6a9",id:"\ud56b\uc2a4\ud31f\uc5d0-\ud2b9\uc815\ud55c-\ub0b4\uc6a9",children:[]}]},{value:"AOT\uc640 JIT \ucef4\ud30c\uc77c",id:"aot\uc640-jit-\ucef4\ud30c\uc77c",children:[]},{value:"\ud56b\uc2a4\ud31f JIT \uae30\ucd08",id:"\ud56b\uc2a4\ud31f-jit-\uae30\ucd08",children:[]},{value:"\ucf54\ub4dc \uce90\uc2dc",id:"\ucf54\ub4dc-\uce90\uc2dc",children:[]},{value:"\uac04\ub2e8\ud55c JIT \ud29c\ub2dd\ubc95",id:"\uac04\ub2e8\ud55c-jit-\ud29c\ub2dd\ubc95",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"JVM\uc774 \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uac00\uc7a5 \uc911\uc694\ud55c \uc11c\ube44\uc2a4\ub294 \uba54\ubaa8\ub9ac \uad00\ub9ac\uc640 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc2e4\ud589 \ucee8\ud14c\uc774\ub108"),"\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc7a5\uc5d0\uc11c\ub294 \ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d\uc744 \uc54c\uc544\ubcf4\uace0 \uc778\ud130\ud504\ub9ac\ud130\uc640 \ud56b\uc2a4\ud31f\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud504\ub85c\ud30c\uc77c \uae30\ubc18 \ucd5c\uc801\ud654\uc758 \uae30\ucd08 \uac1c\ub150\uc744 \ub2e4\ub8e8\uace0 \ucf54\ub4dc \uce90\uc2dc \ubc0f \ud56b\uc2a4\ud31f \ucef4\ud30c\uc77c \uc11c\ube44\uc2dc\uc2a4\ud15c\uc758 \uae30\ubcf8\uc801\uc778 \ub0b4\uc6a9\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\ud574\uc11d"},"\ubc14\uc774\ud2b8\ucf54\ub4dc \ud574\uc11d"),(0,i.kt)("p",null,"JVM \uc778\ud130\ud504\ub9ac\ud130\ub294 \uc77c\uc885\uc758 \uc2a4\ud0dd \uba38\uc2e0\ucc98\ub7fc \uc791\ub3d9\ud558\ubbc0\ub85c \ubb3c\ub9ac\uc801 CPU\uc640\ub294 \ub2ec\ub9ac \uacc4\uc0b0 \uacb0\uacfc\ub97c \ubcf4\uad00\ud558\ub294 \ub808\uc9c0\uc2a4\ud130\ub9ac\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \uc791\uc5c5\ud560 \uac12\uc740 \ubaa8\ub450 \ud3c9\uac00 \uc2a4\ud0dd\uc5d0 \ub193\uace0 \uc2a4\ud0dd \uba38\uc2e0 \uba85\ub839\uc5b4\ub85c \uc2a4\ud0dd \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud55c \uac12\uc744 \ubaa8\ub450 \ud3c9\uac00 \uc2a4\ud0dd\uc5d0 \ub193\uace0 \uc2a4\ud0dd \uba38\uc2e0 \uba85\ub839\uc5b4\ub85c \uc2a4\ud0dd \ucd5c\uc0c1\ub2e8\uc5d0 \uc704\uce58\ud55c \uac12\uc744 \ubcc0\ud658\ud558\ub294 \uc2dd\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"JVM\uc740 \ub2e4\uc74c \uc138 \uacf5\uac04\uc5d0 \uc8fc\ub85c \ub370\uc774\ud130\ub97c \ub2f4\uc544 \ub192\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud3c9\uac00 \uc2a4\ud0dd : \uba54\uc11c\ub4dc\ubcc4\ub85c \ud558\ub098\uc529 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub85c\uceec \ubcc0\uc218 : \uacb0\uacfc\ub97c \uc784\uc2dc \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ud799 : \uba54\uc11c\ub4dc\ub07c\ub9ac, \uc2a4\ub808\ub4dc\ub07c\ub9ac \uacf5\uc720\ub429\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"jvm-\ubc14\uc774\ud2b8\ucf54\ub4dc-\uac1c\uc694"},"JVM \ubc14\uc774\ud2b8\ucf54\ub4dc \uac1c\uc694"),(0,i.kt)("p",null,"\uc790\ubc14\ub294 \ucc98\uc74c\ubd80\ud130 \uc774\uc2dd\uc131\uc744 \uc5fc\ub450\uc5d0 \ub450\uace0 \uc124\uacc4\ub41c \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c big endian, little endian \ud558\ub4dc\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98 \ubaa8\ub450 \ubc14\uc774\ud2b8 \ucf54\ub4dc \ubcc0\uacbd\uc5c6\uc774 \uc2e4\ud589 \uac00\ub2a5\ud558\ub3c4\ub85d \uba85\uc138\uc5d0 \uaddc\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc5b4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub85c\ub4dc/\uc2a4\ud1a0\uc5b4 \uce74\ud14c\uace0\ub9ac",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"load, store, ldc, const, pop, dup, getField, putField"))),(0,i.kt)("li",{parentName:"ul"},"\uc0b0\uc220 \uce74\ud14c\uace0\ub9ac",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"add, sub, div, mul"))),(0,i.kt)("li",{parentName:"ul"},"\ud750\ub984 \uc81c\uc5b4 \uce74\ud14c\uace0\ub9ac",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if, goto"))),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \ud638\ucd9c \uce74\ud14c\uace0\ub9ac",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"invokevirtual, invokespecial, ..."))),(0,i.kt)("li",{parentName:"ul"},"\ud50c\ub7ab\ud3fc \uce74\ud14c\uace0\ub9ac",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"new, newarray, anewarray, ...")))),(0,i.kt)("h3",{id:"\ub2e8\uc21c-\uc778\ud130\ud504\ub9ac\ud130"},"\ub2e8\uc21c \uc778\ud130\ud504\ub9ac\ud130"),(0,i.kt)("h3",{id:"\ud56b\uc2a4\ud31f\uc5d0-\ud2b9\uc815\ud55c-\ub0b4\uc6a9"},"\ud56b\uc2a4\ud31f\uc5d0 \ud2b9\uc815\ud55c \ub0b4\uc6a9"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"aot\uc640-jit-\ucef4\ud30c\uc77c"},"AOT\uc640 JIT \ucef4\ud30c\uc77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\ud56b\uc2a4\ud31f-jit-\uae30\ucd08"},"\ud56b\uc2a4\ud31f JIT \uae30\ucd08"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\ucf54\ub4dc-\uce90\uc2dc"},"\ucf54\ub4dc \uce90\uc2dc"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uac04\ub2e8\ud55c-jit-\ud29c\ub2dd\ubc95"},"\uac04\ub2e8\ud55c JIT \ud29c\ub2dd\ubc95"))}p.isMDXComponent=!0}}]);