(self.webpackChunktil=self.webpackChunktil||[]).push([[1550],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return d}});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=l.createContext({}),c=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=c(t.components);return l.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),k=c(n),d=r,s=k["".concat(p,".").concat(d)]||k[d]||m[d]||a;return n?l.createElement(s,i(i({ref:e},o),{},{components:n})):l.createElement(s,i({ref:e},o))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8126:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return o}});var l=n(2122),r=n(9756),a=(n(7294),n(3905)),i={},u={unversionedId:"java/optimizing-java/ch7",id:"java/optimizing-java/ch7",isDocsHomePage:!1,title:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uace0\uae09",description:"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch7.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch7",permalink:"/til/docs/java/optimizing-java/ch7",editUrl:"https://github.com/Azderica/til/edit/main/docs/java/optimizing-java/ch7.md",version:"current",lastUpdatedAt:1624283195,formattedLastUpdatedAt:"6/21/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uae30\ucd08",permalink:"/til/docs/java/optimizing-java/ch6"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/toby-spring/ch1"}},p=[{value:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30",id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30",children:[]},{value:"\ub3d9\uc2dc GC \uc774\ub860",id:"\ub3d9\uc2dc-gc-\uc774\ub860",children:[{value:"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8",id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8",children:[]},{value:"\uc0bc\uc0c9 \ub9c8\ud0b9",id:"\uc0bc\uc0c9-\ub9c8\ud0b9",children:[]}]},{value:"CMS",id:"cms",children:[{value:"CMS \uc791\ub3d9 \uc6d0\ub9ac",id:"cms-\uc791\ub3d9-\uc6d0\ub9ac",children:[]},{value:"CMS \uae30\ubcf8 JVM \ud50c\ub798\uadf8",id:"cms-\uae30\ubcf8-jvm-\ud50c\ub798\uadf8",children:[]}]},{value:"G1",id:"g1",children:[]},{value:"\uc170\ub09c\ub3c4\uc544",id:"\uc170\ub09c\ub3c4\uc544",children:[]},{value:"C4(\uc544\uc904 \uc9d5)",id:"c4\uc544\uc904-\uc9d5",children:[]},{value:"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)",id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9",children:[]},{value:"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30",id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30",children:[]}],c={toc:p};function o(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30"},"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30"),(0,a.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc74c \ud56d\ubaa9\uc744 \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc911\ub2e8 \uc2dc\uac04(\uc911\ub2e8 \uae38\uc774 \ub610\ub294 \uae30\uac04\uc774\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4.)")),(0,a.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728(\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub7f0\ud0c0\uc784 \ub300\ube44 GC \uc2dc\uac04)"),(0,a.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \ube48\ub3c4(\uc218\uc9d1\uae30 \ub54c\ubb38\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5bc\ub9c8\ub098 \uc790\uc8fc \uba48\ucd94\ub294\uc9c0)"),(0,a.kt)("li",{parentName:"ul"},"\ud68c\uc218 \ud6a8\uc728(GC \uc0ac\uc774\ud074 \ub2f9 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uac00\ube44\uc9c0\uac00 \uc218\uc9d1\ub418\ub294\uc9c0)"),(0,a.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \uc77c\uad00\uc131(\uc911\ub2e8 \uc2dc\uac04\uc774 \uace0\ub978\ud3b8\uc785\ub2c8\ub2e4.)")),(0,a.kt)("p",null,"\uc131\ub2a5 \uc5d4\uc9c0\ub2c8\uc5b4\ub294 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc591\ud55c \ud2b8\ub808\uc774\ub4dc \uc624\ud504\uc640 \uad00\uc2ec\uc0ac\ub97c \uba74\ubc00\ud788 \uac80\ud1a0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub3d9\uc2dc-gc-\uc774\ub860"},"\ub3d9\uc2dc GC \uc774\ub860"),(0,a.kt)("p",null,"\uadf8\ub798\ud53d/\uc560\ub2c8\uba54\uc774\uc158 \ub514\uc2a4\ud50c\ub808\uc774 \uc2dc\uc2a4\ud15c\uc640 \uac19\uc740 \ud2b9\ud654\ub41c \uc2dc\uc2a4\ud15c\uc740 \ud504\ub808\uc784\ub960\uc774 \uac70\uc758 \uace0\uc815\ub418\uc5b4 \uc788\uc5b4\uc11c GC\ub97c \uaddc\uce59\uc801\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc801\uc808\ud55c \uacc4\uc0b0\uc774 \uc9c0\uc5f0\ub418\ub294 \uac83\uc740 \uc0ac\uc2e4 \uc0ac\uc18c\ud55c \ub2e8\uc810\uc5d0 \ubd88\uacfc\ud569\ub2c8\ub2e4. \uc815\uc791 \ud070 \ubb38\uc81c\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uc774 \uc5b8\uc81c \ubc1c\uc0dd\ud560\uc9c0 \uc608\uc0c1\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ucd5c\uc2e0 GC\uc774\ub860\uc740 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud560\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8"},"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8"),(0,a.kt)("p",null,"\ud56b\uc2a4\ud31f \ubcd1\ub82c \uc218\uc9d1\uae30\uc5d0\uc11c STW \uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \uc2e4\ud589\ud558\ub824\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub97c \ubaa8\ub450 \uc911\ub2e8\uc2dc\ucf1c\uc57c\ud569\ub2c8\ub2e4. JVM\uc740 \uc0ac\uc2e4 \uc644\uc804\ud788 \uc120\uc81c\uc801\uc778 \uba40\ud2f0\uc2a4\ub808\ub4dc \ud658\uacbd\uc774 \uc544\ub2d9\ub2c8\ub2e4. OS \ucf54\uc5b4 \uae30\ub2a5\ucc98\ub7fc JVM\ub3c4 \uc870\uc815 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 ",(0,a.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8(\uc548\uc804\uc810, safe point)"),"\ub77c\ub294 \ud2b9\ubcc4\ud55c \uc9c0\uc810\uc744 \ub461\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub294 \uc2a4\ub808\ub4dc\uc758 \ub0b4\ubd80 \uc790\ub8cc \uad6c\uc870\uac00 \ubcf4\uc774\ub294 \uc9c0\uc810\uc774\uba70, \uc774\ub54c \uc5b4\ub5a4 \uc791\uc5c5\uc744 \ud558\uae30 \uc704\ud574 \uc2a4\ub808\ub4dc\ub294 \uc7a0\uc2dc \uc911\ub2e8\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"JVM\uc740 \ub2e4\uc74c \ub450\uac00\uc9c0 \uaddc\uce59\uc5d0 \ub530\ub77c \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JVM\uc740 \uac15\uc81c\ub85c \uc2a4\ub808\ub4dc\ub97c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"JVM\uc740 \uc2a4\ub808\ub4dc\uac00 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uc5d0\uc11c \ubc97\uc5b4\ub098\uc9c0 \ubabb\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc694\uccad\uc744 \ubc1b\uc558\uc744 \ub54c \uadf8 \uc9c0\uc810\uc5d0\uc11c \uc2a4\ub808\ub4dc\uac00 \uc81c\uc5b4\uad8c\uc744 \ubc18\ub0a9\ud558\uac8c \ub9cc\ub4dc\ub294 \ucf54\ub4dc\uac00 VM \uc778\ud130\ud504\ub9ac\ud130 \uad6c\ud604\uccb4 \uc5b4\ub514\uc5d0 \uc787\uc5b4\uc57c\ud569\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\ub00c\ub294 \uacbd\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JVM\uc774 \uc804\uc5ed\uc744 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8\ub97c \uc138\ud305\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ud3f4\ub9c1\uc744 \ud558\uba74\uc11c \uc774 \ud50c\ub798\uadf8\uac00 \uc138\ud305\ub410\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \uc77c\ub2e8 \uba48\ucdc4\ub2e4\uac00 \ub2e4\uc2dc \uae68\uc5b4\ub0a0 \ub54c\uae4c\uc9c0 \ub300\uae30\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8"),"\ub97c \uc138\ud305\ud558\uba74 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ubc18\ub4dc\uc2dc \uba48\ucdb0\uc57c\ud569\ub2c8\ub2e4. \uc77c\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2c0\ub808\ub4dc\ub294 \uc774\ub7f0 \uc2dd\uc73c\ub85c \ud480\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\uc5d0\uc11c \ucc28\ub2e8\ub418\ub294 \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ul"},"JNI \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\uac00 \uaf2d \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ub3c4\uc911(\uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ubaa8\ub4dc)"),(0,a.kt)("li",{parentName:"ul"},"OS\uac00 \uc778\ud130\ub7fd\ud2b8\ub97c \uac70\ub294 \uacbd\uc6b0")),(0,a.kt)("h3",{id:"\uc0bc\uc0c9-\ub9c8\ud0b9"},"\uc0bc\uc0c9 \ub9c8\ud0b9"),(0,a.kt)("p",null,"\uc0bc\uc0c9 \ub9c8\ud0b9 \uc54c\uace0\ub9ac\uc998\uc740 \ub2e4\uc74c \uc21c\uc73c\ub85c \uc9c4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GC \ub8e8\ud2b8\ub97c \ud770\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uac1d\uccb4\ub294 \ubaa8\ub450 \ud770\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\ud0b9 \uc2a4\ub808\ub4dc\uac00 \ud68c\uc0c9 \ub178\ub4dc\ub85c \ub79c\ub364\ud558\uac8c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub3d9\ud55c \ub178\ub4dc\ub97c \uac80\uc740\uc0c9 \ud45c\uc2dc\ud558\uace0 \uc774 \ub178\ub4dc\uac00 \uac00\ub9ac\ud0a4\ub294 \ubaa8\ub4e0 \ud770\uc0c9 \ub178\ub4dc\ub97c \ud68c\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud68c\uc0c9 \ub178\ub4dc\uac00 \ud558\ub098\ub3c4 \ub0a8\uc9c0 \uc54a\uc744 \ub54c\uae4c\uc9c0 \uc704 \uacfc\uc815\uc744 \ub418\ud480\uc774\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac80\uc740\uc0c9 \uac1d\uccb4\ub294 \ubaa8\ub450 \uc811\uadfc \uac00\ub2a5\ud55c \uac83\uc774\ubbc0\ub85c \uc0b4\uc544\ub0a8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud770\uc0c9 \ub178\ub4dc\ub294 \ub354 \uc774\uc0c1 \uc811\uadfc \ubd88\uac00\ud55c \uac1d\uccb4\uc774\ubbc0\ub85c \uc218\uc9d1 \ub300\uc0c1\uc774 \ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/122766159-2c221000-d2dc-11eb-8957-90d6f3860937.png",alt:"image"})),(0,a.kt)("p",null,"\ub3d9\uc2dc \uc218\uc9d1\uc740 SATB\ub77c\ub294 \uae30\ubc95\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. \uc989, \uc218\uc9d1 \uc0ac\uc774\ud074\uc744 \uc2dc\uc791\ud560 \ub54c \uc811\uadfc \uac00\ub2a5\ud558\ub098 \uadf8 \uc774\ud6c4\uc5d0 \ud560\ub2f9\ub41c \uac1d\uccb4\ub97c \ub77c\uc774\ube0c \uac1d\uccb4\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ubcc0\uacbd\uc790 \uc2a4\ub808\ub4dc\uac00 \uc218\uc9d1\ud558\ub294 \ub3c4\uc911\uc5d0\ub294 \uac80\uc740\uc0c9 \uc0c1\ud0dc, \uc548\ud558\ub294 \ub3d9\uc548\uc5d0\ub294 \ud770\uc0c9 \uc0c1\ud0dc\uc640 \uac19\uc740 \ub2e9\u3141\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c \uc5c5\ub370\uc774\ud2b8 \uc2dc \uc4f0\uae30 \uae08\uc9c0 \ub4f1\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"cms"},"CMS"),(0,a.kt)("p",null,"CMS \uc218\uc9d1\uae30\ub294 \uc911\ub2e8 \uc2dc\uac04\uc744 \uc544\uc8fc \uc9e7\uac8c \ud558\ub824\uace0 \uc124\uacc4\ub41c \ud14c\ub274\uc5b4\ub4dc(\uc62c\ub4dc) \uacf5\uac04 \uc804\uc6a9 \uc218\uc9d1\uae30 \uc785\ub2c8\ub2e4. \ubcf4\ud1b5 Parallel GC\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"CMS\ub294 \uc911\ub2e8 \uc2dc\uac04\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc \uc2e4\ud589 \uc911\uc5d0 \uac00\uae09\uc801 \ub9ce\uc740 \uc77c\uc744 \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc77c\ubd80 \uc218\ud589 \ub2e8\uacc4\ub294 \uc880 \ub354 \ubcf5\uc7a1\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucd08\uae30 \ub9c8\ud0b9(STW)"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9c8\ud0b9"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uc0ac\uc804 \uc815\ub9ac"),(0,a.kt)("li",{parentName:"ul"},"\uc7ac\ub9c8\ud0b9(STW)"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uc2a4\uc704\ud504"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9ac\uc14b")),(0,a.kt)("p",null,"\ucd08\uae30 \ub9c8\ud0b9\uc744 \ud1b5\ud574\uc11c \ud655\uc2e4\ud55c GC \ucd9c\ubc1c\uc810\uc744 \ucc3e\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud55c STW \uc2dc\uac04\uc744 \uc904\uc785\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \ub2e4\uc74c\uc758 \uc7a5\ub2e8\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uac00 \uc624\ub7ab\ub3d9\uc548 \uba48\ucd94\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ud480 GC \uc0ac\uc774\ud074 \uc2dc\uac04\uc774 \ub354 \uae41\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CMS GC \uc0ac\uc774\ud074\uc774 \uc0b4\ud589\ub418\ub294 \ub3d9\uc548, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucc98\ub9ac\uc728\uc740 \uac10\uc18c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"GC\uac00 \uac1d\uccb4\ub97c \ucd94\uc801\ud574\uc57c \ud558\ubbc0\ub85c \uba54\ubaa8\ub9ac\ub97c \ub354 \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"GC \uc218\ud589\uc5d0 \ud6e8\uc52c \ub354 \ub9ce\uc740 CPU \uc2dc\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CMS\ub294 \ud799\uc744 \uc555\ucc29\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ud14c\ub274\uc5b4\ub4dc \uc601\uc5ed\uc740 \ub2e8\ud3b8\ud654 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ucc98\ub7fc \uc5ec\ub7ec \uc7a5\ub2e8\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"cms-\uc791\ub3d9-\uc6d0\ub9ac"},"CMS \uc791\ub3d9 \uc6d0\ub9ac"),(0,a.kt)("p",null,"CMS\ub294 \ub300\ubd80\ubd84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uc640 \ub3d9\uc2dc\uc5d0 \uc791\ub3d9\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uac1d\uccb4\uc5d0 \ud560\ub2f9\ud574\uc11c \uc0ac\uc6a9\ud558\ub294\ub370, \uc774\ub7ec\ub358 \uc640\uc911\uc5d0 \uc5d0\ub374 \uacf5\uac04\uc774 \uaf49 \ucc28\ubc84\ub9ac\uba74 \uc5b4\uca54 \uc218 \uc5c6\uc774 \uc911\ub2e8\uc774 \ub418\uace0, \uc774 \uacbd\uc6b0\ub294 \ubcd1\ub82c \uc218\uc9d1\uae30\uc758 \uc601 GC\ubcf4\ub2e4 \ub290\ub824\uc9d1\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 CMS\ub294 \uc870\uae08 \ub2e4\ub978 \uc601 \uc218\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/122772106-013aba80-d2e2-11eb-8ec8-871056e3488d.png",alt:"image"})),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 \ud560\ub2f9\uc555\uc774 \ub108\ubb34 \ub192\uc544 CMF(\ub3d9\uc2dc \ubaa8\ub4dc \uc2e4\ud328, concurrent mode failure)\uc774\ub77c\uace0 \ud558\uba70, JVM\uc740 \uc5b4\uca54 \uc218 \uc5c6\uc774 \ud480 STW\ub97c \uc720\ubc1c\ud558\ub294 ParallelOld GC \uc218\uc9d1 \ubc29\uc2dd\uc73c\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4(\uc720\uc77c\ud55c \ubc29\ubc95). \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 CMF\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c CMS\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud29c\uc9d5 \uc790\uccb4\ub97c \ub9ce\uc774\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"cms-\uae30\ubcf8-jvm-\ud50c\ub798\uadf8"},"CMS \uae30\ubcf8 JVM \ud50c\ub798\uadf8"),(0,a.kt)("p",null,"CMS\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud50c\ub798\uadf8 \uac00\uc9d3\uc218\uac00 \uc5c4\uccad \ub9ce\uc73c\uba70, \uc774\ub97c \uc2e4\ud589\ud558\ub294 \uc77c\uc885\uc758 \ud50c\ub798\uadf8\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-XX:+UseConcMarkSweepGC")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"g1"},"G1"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc170\ub09c\ub3c4\uc544"},"\uc170\ub09c\ub3c4\uc544"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"c4\uc544\uc904-\uc9d5"},"C4(\uc544\uc904 \uc9d5)"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9"},"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30"},"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30"))}o.isMDXComponent=!0}}]);