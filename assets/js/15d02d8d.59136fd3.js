"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1550],{3905:function(t,e,l){l.d(e,{Zo:function(){return m},kt:function(){return d}});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var p=n.createContext({}),k=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),c=k(l),d=a,s=c["".concat(p,".").concat(d)]||c[d]||o[d]||r;return l?n.createElement(s,i(i({ref:e},m),{},{components:l})):n.createElement(s,i({ref:e},m))}));function d(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},8126:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k},default:function(){return o}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i=["components"],u={sidebar_position:7},p={unversionedId:"java/optimizing-java/ch7",id:"java/optimizing-java/ch7",isDocsHomePage:!1,title:"7. \uac00\ube44\uc9c0 \uc218\uc9d1 \uace0\uae09",description:"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch7.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch7",permalink:"/til/docs/java/optimizing-java/ch7",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch7.md",version:"current",lastUpdatedAt:1641816078,formattedLastUpdatedAt:"1/10/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. \uac00\ube44\uc9c0 \uc218\uc9d1 \uae30\ucd08",permalink:"/til/docs/java/optimizing-java/ch6"},next:{title:"8. GC \ub85c\uae45, \ubaa8\ub2c8\ud130\ub9c1, \ud29c\ub2dd, \ud234",permalink:"/til/docs/java/optimizing-java/ch8"}},k=[{value:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30",id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30",children:[]},{value:"\ub3d9\uc2dc GC \uc774\ub860",id:"\ub3d9\uc2dc-gc-\uc774\ub860",children:[{value:"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8",id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8",children:[]},{value:"\uc0bc\uc0c9 \ub9c8\ud0b9",id:"\uc0bc\uc0c9-\ub9c8\ud0b9",children:[]}]},{value:"CMS",id:"cms",children:[{value:"CMS \uc791\ub3d9 \uc6d0\ub9ac",id:"cms-\uc791\ub3d9-\uc6d0\ub9ac",children:[]},{value:"CMS \uae30\ubcf8 JVM \ud50c\ub798\uadf8",id:"cms-\uae30\ubcf8-jvm-\ud50c\ub798\uadf8",children:[]}]},{value:"G1",id:"g1",children:[{value:"G1 \ud799 \ub808\uc774\uc544\uc6c3 \ubc0f \uc601\uc5ed",id:"g1-\ud799-\ub808\uc774\uc544\uc6c3-\ubc0f-\uc601\uc5ed",children:[]},{value:"G1 \uc54c\uace0\ub9ac\uc998 \uc124\uacc4",id:"g1-\uc54c\uace0\ub9ac\uc998-\uc124\uacc4",children:[]},{value:"G1 \ub2e8\uacc4",id:"g1-\ub2e8\uacc4",children:[]},{value:"\uae30\ubcf8 JVM \ud50c\ub798\uadf8",id:"\uae30\ubcf8-jvm-\ud50c\ub798\uadf8",children:[]}]},{value:"\uc170\ub09c\ub3c4\uc544",id:"\uc170\ub09c\ub3c4\uc544",children:[{value:"\ub3d9\uc2dc \uc555\ucc29",id:"\ub3d9\uc2dc-\uc555\ucc29",children:[]},{value:"\uc170\ub09c\ub3c4\uc544 \uc5bb\uae30",id:"\uc170\ub09c\ub3c4\uc544-\uc5bb\uae30",children:[]}]},{value:"C4(\uc544\uc904 \uc9d5)",id:"c4\uc544\uc904-\uc9d5",children:[]},{value:"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)",id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9",children:[]},{value:"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30",id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}],m={toc:k};function o(t){var e=t.components,l=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30"},"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30"),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc74c \ud56d\ubaa9\uc744 \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc911\ub2e8 \uc2dc\uac04(\uc911\ub2e8 \uae38\uc774 \ub610\ub294 \uae30\uac04\uc774\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4.)")),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728(\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub7f0\ud0c0\uc784 \ub300\ube44 GC \uc2dc\uac04)"),(0,r.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \ube48\ub3c4(\uc218\uc9d1\uae30 \ub54c\ubb38\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5bc\ub9c8\ub098 \uc790\uc8fc \uba48\ucd94\ub294\uc9c0)"),(0,r.kt)("li",{parentName:"ul"},"\ud68c\uc218 \ud6a8\uc728(GC \uc0ac\uc774\ud074 \ub2f9 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uac00\ube44\uc9c0\uac00 \uc218\uc9d1\ub418\ub294\uc9c0)"),(0,r.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \uc77c\uad00\uc131(\uc911\ub2e8 \uc2dc\uac04\uc774 \uace0\ub978\ud3b8\uc785\ub2c8\ub2e4.)")),(0,r.kt)("p",null,"\uc131\ub2a5 \uc5d4\uc9c0\ub2c8\uc5b4\ub294 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc591\ud55c \ud2b8\ub808\uc774\ub4dc \uc624\ud504\uc640 \uad00\uc2ec\uc0ac\ub97c \uba74\ubc00\ud788 \uac80\ud1a0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3d9\uc2dc-gc-\uc774\ub860"},"\ub3d9\uc2dc GC \uc774\ub860"),(0,r.kt)("p",null,"\uadf8\ub798\ud53d/\uc560\ub2c8\uba54\uc774\uc158 \ub514\uc2a4\ud50c\ub808\uc774 \uc2dc\uc2a4\ud15c\uc640 \uac19\uc740 \ud2b9\ud654\ub41c \uc2dc\uc2a4\ud15c\uc740 \ud504\ub808\uc784\ub960\uc774 \uac70\uc758 \uace0\uc815\ub418\uc5b4 \uc788\uc5b4\uc11c GC\ub97c \uaddc\uce59\uc801\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc801\uc808\ud55c \uacc4\uc0b0\uc774 \uc9c0\uc5f0\ub418\ub294 \uac83\uc740 \uc0ac\uc2e4 \uc0ac\uc18c\ud55c \ub2e8\uc810\uc5d0 \ubd88\uacfc\ud569\ub2c8\ub2e4. \uc815\uc791 \ud070 \ubb38\uc81c\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uc774 \uc5b8\uc81c \ubc1c\uc0dd\ud560\uc9c0 \uc608\uc0c1\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ucd5c\uc2e0 GC\uc774\ub860\uc740 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud560\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8"},"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f \ubcd1\ub82c \uc218\uc9d1\uae30\uc5d0\uc11c STW \uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \uc2e4\ud589\ud558\ub824\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub97c \ubaa8\ub450 \uc911\ub2e8\uc2dc\ucf1c\uc57c\ud569\ub2c8\ub2e4. JVM\uc740 \uc0ac\uc2e4 \uc644\uc804\ud788 \uc120\uc81c\uc801\uc778 \uba40\ud2f0\uc2a4\ub808\ub4dc \ud658\uacbd\uc774 \uc544\ub2d9\ub2c8\ub2e4. OS \ucf54\uc5b4 \uae30\ub2a5\ucc98\ub7fc JVM\ub3c4 \uc870\uc815 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 ",(0,r.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8(\uc548\uc804\uc810, safe point)"),"\ub77c\ub294 \ud2b9\ubcc4\ud55c \uc9c0\uc810\uc744 \ub461\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub294 \uc2a4\ub808\ub4dc\uc758 \ub0b4\ubd80 \uc790\ub8cc \uad6c\uc870\uac00 \ubcf4\uc774\ub294 \uc9c0\uc810\uc774\uba70, \uc774\ub54c \uc5b4\ub5a4 \uc791\uc5c5\uc744 \ud558\uae30 \uc704\ud574 \uc2a4\ub808\ub4dc\ub294 \uc7a0\uc2dc \uc911\ub2e8\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM\uc740 \ub2e4\uc74c \ub450\uac00\uc9c0 \uaddc\uce59\uc5d0 \ub530\ub77c \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JVM\uc740 \uac15\uc81c\ub85c \uc2a4\ub808\ub4dc\ub97c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"JVM\uc740 \uc2a4\ub808\ub4dc\uac00 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uc5d0\uc11c \ubc97\uc5b4\ub098\uc9c0 \ubabb\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc694\uccad\uc744 \ubc1b\uc558\uc744 \ub54c \uadf8 \uc9c0\uc810\uc5d0\uc11c \uc2a4\ub808\ub4dc\uac00 \uc81c\uc5b4\uad8c\uc744 \ubc18\ub0a9\ud558\uac8c \ub9cc\ub4dc\ub294 \ucf54\ub4dc\uac00 VM \uc778\ud130\ud504\ub9ac\ud130 \uad6c\ud604\uccb4 \uc5b4\ub514\uc5d0 \uc787\uc5b4\uc57c\ud569\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\ub00c\ub294 \uacbd\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JVM\uc774 \uc804\uc5ed\uc744 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8\ub97c \uc138\ud305\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ud3f4\ub9c1\uc744 \ud558\uba74\uc11c \uc774 \ud50c\ub798\uadf8\uac00 \uc138\ud305\ub410\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \uc77c\ub2e8 \uba48\ucdc4\ub2e4\uac00 \ub2e4\uc2dc \uae68\uc5b4\ub0a0 \ub54c\uae4c\uc9c0 \ub300\uae30\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8"),"\ub97c \uc138\ud305\ud558\uba74 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ubc18\ub4dc\uc2dc \uba48\ucdb0\uc57c\ud569\ub2c8\ub2e4. \uc77c\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2c0\ub808\ub4dc\ub294 \uc774\ub7f0 \uc2dd\uc73c\ub85c \ud480\ub9c1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\uc5d0\uc11c \ucc28\ub2e8\ub418\ub294 \uacbd\uc6b0"),(0,r.kt)("li",{parentName:"ul"},"JNI \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\uac00 \uaf2d \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ub3c4\uc911(\uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ubaa8\ub4dc)"),(0,r.kt)("li",{parentName:"ul"},"OS\uac00 \uc778\ud130\ub7fd\ud2b8\ub97c \uac70\ub294 \uacbd\uc6b0")),(0,r.kt)("h3",{id:"\uc0bc\uc0c9-\ub9c8\ud0b9"},"\uc0bc\uc0c9 \ub9c8\ud0b9"),(0,r.kt)("p",null,"\uc0bc\uc0c9 \ub9c8\ud0b9 \uc54c\uace0\ub9ac\uc998\uc740 \ub2e4\uc74c \uc21c\uc73c\ub85c \uc9c4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GC \ub8e8\ud2b8\ub97c \ud770\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uac1d\uccb4\ub294 \ubaa8\ub450 \ud770\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9c8\ud0b9 \uc2a4\ub808\ub4dc\uac00 \ud68c\uc0c9 \ub178\ub4dc\ub85c \ub79c\ub364\ud558\uac8c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub3d9\ud55c \ub178\ub4dc\ub97c \uac80\uc740\uc0c9 \ud45c\uc2dc\ud558\uace0 \uc774 \ub178\ub4dc\uac00 \uac00\ub9ac\ud0a4\ub294 \ubaa8\ub4e0 \ud770\uc0c9 \ub178\ub4dc\ub97c \ud68c\uc0c9 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud68c\uc0c9 \ub178\ub4dc\uac00 \ud558\ub098\ub3c4 \ub0a8\uc9c0 \uc54a\uc744 \ub54c\uae4c\uc9c0 \uc704 \uacfc\uc815\uc744 \ub418\ud480\uc774\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac80\uc740\uc0c9 \uac1d\uccb4\ub294 \ubaa8\ub450 \uc811\uadfc \uac00\ub2a5\ud55c \uac83\uc774\ubbc0\ub85c \uc0b4\uc544\ub0a8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud770\uc0c9 \ub178\ub4dc\ub294 \ub354 \uc774\uc0c1 \uc811\uadfc \ubd88\uac00\ud55c \uac1d\uccb4\uc774\ubbc0\ub85c \uc218\uc9d1 \ub300\uc0c1\uc774 \ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/122766159-2c221000-d2dc-11eb-8957-90d6f3860937.png",alt:"image"})),(0,r.kt)("p",null,"\ub3d9\uc2dc \uc218\uc9d1\uc740 SATB\ub77c\ub294 \uae30\ubc95\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. \uc989, \uc218\uc9d1 \uc0ac\uc774\ud074\uc744 \uc2dc\uc791\ud560 \ub54c \uc811\uadfc \uac00\ub2a5\ud558\ub098 \uadf8 \uc774\ud6c4\uc5d0 \ud560\ub2f9\ub41c \uac1d\uccb4\ub97c \ub77c\uc774\ube0c \uac1d\uccb4\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ubcc0\uacbd\uc790 \uc2a4\ub808\ub4dc\uac00 \uc218\uc9d1\ud558\ub294 \ub3c4\uc911\uc5d0\ub294 \uac80\uc740\uc0c9 \uc0c1\ud0dc, \uc548\ud558\ub294 \ub3d9\uc548\uc5d0\ub294 \ud770\uc0c9 \uc0c1\ud0dc\uc640 \uac19\uc740 \ub2e9\u3141\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c \uc5c5\ub370\uc774\ud2b8 \uc2dc \uc4f0\uae30 \uae08\uc9c0 \ub4f1\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"cms"},"CMS"),(0,r.kt)("p",null,"CMS \uc218\uc9d1\uae30\ub294 \uc911\ub2e8 \uc2dc\uac04\uc744 \uc544\uc8fc \uc9e7\uac8c \ud558\ub824\uace0 \uc124\uacc4\ub41c \ud14c\ub274\uc5b4\ub4dc(\uc62c\ub4dc) \uacf5\uac04 \uc804\uc6a9 \uc218\uc9d1\uae30 \uc785\ub2c8\ub2e4. \ubcf4\ud1b5 Parallel GC\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"CMS\ub294 \uc911\ub2e8 \uc2dc\uac04\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc \uc2e4\ud589 \uc911\uc5d0 \uac00\uae09\uc801 \ub9ce\uc740 \uc77c\uc744 \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc77c\ubd80 \uc218\ud589 \ub2e8\uacc4\ub294 \uc880 \ub354 \ubcf5\uc7a1\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd08\uae30 \ub9c8\ud0b9(STW)"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uc0ac\uc804 \uc815\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\uc7ac\ub9c8\ud0b9(STW)"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uc2a4\uc704\ud504"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9ac\uc14b")),(0,r.kt)("p",null,"\ucd08\uae30 \ub9c8\ud0b9\uc744 \ud1b5\ud574\uc11c \ud655\uc2e4\ud55c GC \ucd9c\ubc1c\uc810\uc744 \ucc3e\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud55c STW \uc2dc\uac04\uc744 \uc904\uc785\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \ub2e4\uc74c\uc758 \uc7a5\ub2e8\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uac00 \uc624\ub7ab\ub3d9\uc548 \uba48\ucd94\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ud480 GC \uc0ac\uc774\ud074 \uc2dc\uac04\uc774 \ub354 \uae41\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CMS GC \uc0ac\uc774\ud074\uc774 \uc0b4\ud589\ub418\ub294 \ub3d9\uc548, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucc98\ub9ac\uc728\uc740 \uac10\uc18c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GC\uac00 \uac1d\uccb4\ub97c \ucd94\uc801\ud574\uc57c \ud558\ubbc0\ub85c \uba54\ubaa8\ub9ac\ub97c \ub354 \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GC \uc218\ud589\uc5d0 \ud6e8\uc52c \ub354 \ub9ce\uc740 CPU \uc2dc\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CMS\ub294 \ud799\uc744 \uc555\ucc29\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ud14c\ub274\uc5b4\ub4dc \uc601\uc5ed\uc740 \ub2e8\ud3b8\ud654 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ucc98\ub7fc \uc5ec\ub7ec \uc7a5\ub2e8\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"cms-\uc791\ub3d9-\uc6d0\ub9ac"},"CMS \uc791\ub3d9 \uc6d0\ub9ac"),(0,r.kt)("p",null,"CMS\ub294 \ub300\ubd80\ubd84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uc640 \ub3d9\uc2dc\uc5d0 \uc791\ub3d9\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uac1d\uccb4\uc5d0 \ud560\ub2f9\ud574\uc11c \uc0ac\uc6a9\ud558\ub294\ub370, \uc774\ub7ec\ub358 \uc640\uc911\uc5d0 \uc5d0\ub374 \uacf5\uac04\uc774 \uaf49 \ucc28\ubc84\ub9ac\uba74 \uc5b4\uca54 \uc218 \uc5c6\uc774 \uc911\ub2e8\uc774 \ub418\uace0, \uc774 \uacbd\uc6b0\ub294 \ubcd1\ub82c \uc218\uc9d1\uae30\uc758 \uc601 GC\ubcf4\ub2e4 \ub290\ub824\uc9d1\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 CMS\ub294 \uc870\uae08 \ub2e4\ub978 \uc601 \uc218\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/122772106-013aba80-d2e2-11eb-8ec8-871056e3488d.png",alt:"image"})),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \ud560\ub2f9\uc555\uc774 \ub108\ubb34 \ub192\uc544 CMF(\ub3d9\uc2dc \ubaa8\ub4dc \uc2e4\ud328, concurrent mode failure)\uc774\ub77c\uace0 \ud558\uba70, JVM\uc740 \uc5b4\uca54 \uc218 \uc5c6\uc774 \ud480 STW\ub97c \uc720\ubc1c\ud558\ub294 ParallelOld GC \uc218\uc9d1 \ubc29\uc2dd\uc73c\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4(\uc720\uc77c\ud55c \ubc29\ubc95). \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 CMF\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c CMS\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud29c\uc9d5 \uc790\uccb4\ub97c \ub9ce\uc774\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"cms-\uae30\ubcf8-jvm-\ud50c\ub798\uadf8"},"CMS \uae30\ubcf8 JVM \ud50c\ub798\uadf8"),(0,r.kt)("p",null,"CMS\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud50c\ub798\uadf8 \uac00\uc9d3\uc218\uac00 \uc5c4\uccad \ub9ce\uc73c\uba70, \uc774\ub97c \uc2e4\ud589\ud558\ub294 \uc77c\uc885\uc758 \ud50c\ub798\uadf8\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseConcMarkSweepGC")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"g1"},"G1"),(0,r.kt)("p",null,"\uac00\ube44\uc9c0 \uc6b0\uc120\uc740 \ubcd1\ub82c \uc218\uc9d1\uae30\ub098 CMS\uc640\ub294 \uc804\ud600 \ub2e4\ub978 \uc2a4\ud0c0\uc77c\uc758 \uc218\uc9d1\uae30\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc758 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CMS\ubcf4\ub2e4 \ud29c\ub2dd\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc870\uae30 \uc2b9\uaca9\uc5d0 \ub35c \ucde8\uc57d\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub300\uc6a9\ub7c9 \ud799\uc5d0\uc11c \ud655\uc7a5\uc131(\ud2b9\ud788, \uc911\ub2e8 \uc2dc\uac04)\uc774 \uc6b0\uc218\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud480 STW \uc218\uc9d1\uc744 \uc5c6\uc568 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"g1-\ud799-\ub808\uc774\uc544\uc6c3-\ubc0f-\uc601\uc5ed"},"G1 \ud799 \ub808\uc774\uc544\uc6c3 \ubc0f \uc601\uc5ed"),(0,r.kt)("p",null,"G1 \ud799\uc740 \uc601\uc5ed(\ub9ac\uc804)\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/122908648-57b20280-d38f-11eb-82e7-789f038e090a.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc601\uc5ed \ud06c\uae30 : <\ud799 \ud06c\uae30> / 2048"),(0,r.kt)("li",{parentName:"ul"},"\uc601\uc5ed \uac1c\uc218 : <\ud799 \ud06c\uae30> / <\uc601\uc5ed \ud06c\uae30>")),(0,r.kt)("h3",{id:"g1-\uc54c\uace0\ub9ac\uc998-\uc124\uacc4"},"G1 \uc54c\uace0\ub9ac\uc998 \uc124\uacc4"),(0,r.kt)("p",null,"G1\uc218\uc9d1\uae30\ub294 \ub2e4\uc74c\uc758 \uc5ed\ud560\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9c8\ud0b9 \ub2e8\uacc4\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc29\ucd9c \uc218\uc9d1\uae30\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud1b5\uacc4\uc801\uc73c\ub85c \uc555\ucc29\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"G1 \uc218\uc9d1\uae30\ub294 \uc6cc\ubc0d\uc5c5\uc744 \ud558\ub294 \ub3d9\uc548, GC \uc0ac\uc774\ud074\uc774 \ud55c\ubc88 \ub3cc\ub54c\ub9c8\ub2e4 \ub9ce\uc740 '\uc77c\ubc18' \uc601\uc5ed\uc5d0\uc11c \uac00\ube44\uc9c0\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\ub294\uc9c0 \uadf8 \uc218\uce58\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"G1 \uc218\uc9d1\uae30\ub294 TLAB \ud560\ub2f9\uc774\ub098 \uc11c\ubc14\uc774\ubc84 \uacf5\uac04\uc73c\ub85c \ubc29\ucd9c, \ud14c\ub274\uc5b4\ub4dc \uc601\uc5ed\uc73c\ub85c\uc758 \uc2b9\uaca9 \ub4f1\uc740 \uc55e\uc11c \ub098\uc628 \ub2e4\ub978 \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc640 \ub300\ub3d9\uc18c\uc774\ud558\uc9c0\ub9cc, ",(0,r.kt)("strong",{parentName:"p"},"\uc138\ub300\ub97c \uad6c\uc131\ud558\ub294 \uc601\uc5ed\uc774 \uc5f0\uc18d\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"G1 \uc218\uc9d1\uae30\uc5d0\ub3c4 \uae30\uc5b5 \uc138\ud2b8(RSet, remembered set)\ub77c\ub294 \ube44\uc2b7\ud55c \uc7a5\uce58\ub85c \uc601\uc5ed\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4. RSet\uc740 \uc601\uc5ed\ubcc4\ub85c \ud558\ub098\uc529, \uc678\ubd80\uc5d0\uc11c \ud799 \uc601\uc5ed \ub0b4\ubd80\ub97c \ucc38\uc870\ud558\ub294 \ub808\ud37c\ub7f0\uc2a4\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \uc7a5\uce58\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"g1-\ub2e8\uacc4"},"G1 \ub2e8\uacc4"),(0,r.kt)("p",null,"G1\uc758 \uc218\uc9d1\ub2e8\uacc4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd08\uae30 \ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub8e8\ud2b8 \ud0d0\uc0c9"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\uc7ac\ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\uc815\ub9ac")),(0,r.kt)("h3",{id:"\uae30\ubcf8-jvm-\ud50c\ub798\uadf8"},"\uae30\ubcf8 JVM \ud50c\ub798\uadf8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+XX:UseG1GC"))),(0,r.kt)("p",null,"G1\uc758 \uc8fc\ubaa9\ud45c\ub294 \uc911\ub2e8 \uc2dc\uac04 \ub2e8\ucd95\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd5c\ub300 \uc911\ub2e8 \uc2dc\uac04\uc744 \uac1c\ubc1c\uc790\uac00 \uc120\uc815\ud560 \uc218 \uc788\ub294\ub370, \uac12\uc744 \ub108\ubb34 \uc7a1\uac8c \uc7a1\uc73c\uba74 GC \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc774 \ubaa9\ud45c\uc5d0 \ub9de\ucd94\uc9c0 \ubabb\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c\ub294 8u40\ubd80\ud130 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc9c0\ud5a5\ub418\uba70, \uc800\uc9c0\uc5f0 \uc6cc\ud06c\ub85c\ub4dc\uc5d0\uc11c\ub294 \uc544\uc9c1 G1\uc740 CMS \uc911\ub2e8 \uc2dc\uac04\ubcf4\ub2e4 \uae34 \ud3b8\uc774\ub77c \uc544\uc9c1\uae4c\uc9c0\ub294 \uae34\ud3b8\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \uc5ec\uc804\ud788 \uac1c\uc120\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc170\ub09c\ub3c4\uc544"},"\uc170\ub09c\ub3c4\uc544"),(0,r.kt)("p",null,"\ub808\ub4dc\ud587\uc5d0\uc11c\ub294 OpenJDK \ud504\ub85c\uc81d\ud2b8 \uc77c\ud658\uc73c\ub85c \uc170\ub09c\ub3c4\uc544\ub77c\ub294 \uc790\uccb4 \uc218\uc9d1\uae30\ub97c \uc81c\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc8fc \ubaa9\ud45c\ub294 (\ub300\uc6a9\ub7c9 \ud799) \uc911\ub2e8 \uc2dc\uac04 \ub2e8\ucd95\uc785\ub2c8\ub2e4. \ub2e8\uacc4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd08\uae30 \ub9c8\ud0b9(STW)"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc885 \ub9c8\ud0b9(STW)"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uc555\ucc29")),(0,r.kt)("p",null,"\uc77c\ubd80 CMS, G1 \ub2e8\uacc4\uc640 \ube44\uc2b7\ud574\ubcf4\uc774\uc9c0\ub9cc \ud070 \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube0c\ub85d\uc2a4 \ud3ec\uc778\ud130",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub2f9 \uba54\ubaa8\ub9ac \uc6cc\ub4dc\ub97c \ud558\ub098 \ub354 \uc368\uc11c \uc774\uc804 \uac00\ube44\uc9c0 \uc218\uc9d1 \ub2e8\uacc4\uc5d0\uc11c \uac1d\uccb4\uac00 \uc7ac\ubc30\uce58\ub410\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud45c\uc2dc\ud558\uace0 \uc0c8\ubc84\uc804 \ucf58\ud150\uce20\uc758 \uc704\uce58\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/123225372-a08fc580-d50d-11eb-99d2-51fdfaf2a2ff.png",alt:"image"})),(0,r.kt)("h3",{id:"\ub3d9\uc2dc-\uc555\ucc29"},"\ub3d9\uc2dc \uc555\ucc29"),(0,r.kt)("p",null,"GC \uc2a4\ub808\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ubc29\ucd9c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c TLAB\ub85c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CAS\ub85c \ube0c\ub8e9\uc2a4 \ud3ec\uc778\ud130\uac00 \ucd94\uce21\uc131 \uc0ac\ubcf8\uc744 \uac00\ub9ac\ud0a4\ub3c4\ub85d \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uc791\uc5c5\uc774 \uc131\uacf5\ud558\uba74 \uc555\ucc29 \uc2a4\ub808\ub4dc\uac00 \uc2b9\ub9ac\ud55c \uac83\uc73c\ub85c, \uc774\ud6c4 \uc774 \ubc84\uc804\uc758 \uac1d\uccb4\ub294 \ubaa8\ub450 \ube0c\ub8e9\uc2a4 \ud3ec\uc778\ud130\ub97c \uacbd\uc720\ud574\uc11c \uc561\uc138\uc2a4\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uc791\uc5c5\uc774 \uc2e4\ud328\ud558\uba74 \uc555\ucc29 \uc2a4\ub808\ub4dc\uac00 \uc2e4\ud328\ud55c \uac83\uc73c\ub85c, \ucd94\uce21\uc131 \uc0ac\ubcf8\uc744 \uc6d0\uc0c1\ubcf4\uad6c\ud558\uace0 \uc2b9\ub9ac\ud55c \uc2a4\ub808\ub4dc\uac00 \ub0a8\uae34 \ube0c\ub8e9\uc2a4 \ud3ec\uc778\ud130\ub97c \ub530\ub77c\uac11\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc170\ub09c\ub3c4\uc544-\uc5bb\uae30"},"\uc170\ub09c\ub3c4\uc544 \uc5bb\uae30"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uad6c\ud558\uae30 \ud798\ub4e4\uace0, \uc2e0\uacbd\uc744 \uc368\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+UseShenandoahGC"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"c4\uc544\uc904-\uc9d5"},"C4(\uc544\uc904 \uc9d5)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Zulu\ub294 \ub2e4\uc911 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c OpenJDK \uae30\ubc18\uc758 FOSS \uc194\ub8e8\uc158\uc785\ub2c8\ub2e4"),". \uc9d5(Jing)\uc740 \ub9ac\ub205\uc2a4\uc5d0\uc11c\ub9cc \uc4f8 \uc218 \uc788\ub294 \uc0c1\uc6a9 \ud50c\ub7ab\ud3fc\uc774\uba70 OpenJDK\uc5d0 \uc788\ub294 \uc790\ubc14 \ud074\ub798\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba70\uc644\uc804\ud788 \ub2e4\ub978 \uac00\uc0c1 \uba38\uc2e0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uc5d0 \uc758\ud574 \uc7ac\ubc30\uce58\ub410\uc744\uc9c0 \ubaa8\ub97c \uac1d\uccb4\uc758 \ub808\ud37c\ub7f0\uc2a4\ub97c \ub85c\ub4dc\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc73c\ubbc0\ub85c \ube0c\ub8e9\uc2a4 \ud3ec\uc778\ud130\ub97c \ud1b5\ud574 \uc0c8 \uc704\uce58\ub97c \ucd94\uc801\ud569\ub2c8\ub2e4. \ub85c\ub4dc\uac12 \ubc30\ub9ac\uc5b4\ub294 \uc774\ub7f0 \ud328\ud134\uc744 \uc9c0\uc591\ud558\uace0 \ub85c\ub4dc\ud55c \ub808\ud37c\ub7f0\uc2a4 \uac01\uc790\uc758 \ub85c\ub529\uc774 \ub05d\ub098\uba74 \ud604\uc7ac \uac1d\uccb4 \uc704\uce58\ub97c \uc9c1\uc811\uac00\ub9ac\ud0a4\uac8c \ud558\ub294\ub370 \uc774\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc790\uac00 \uce58\uc720 \ubc30\ub9ac\uc5b4"),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc804\uccb4 GC \ub2e8\uacc4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9c8\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\uc7ac\ubc30\uce58"),(0,r.kt)("li",{parentName:"ul"},"\uc7ac\ub9e4\ud0b9")),(0,r.kt)("p",null,"C4\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uad50\ub300 \uc555\ucc29"),"\uc774\ub77c\ub294 \uae30\uc220\ub85c \uc5f0\uc18d\uc801\uc73c\ub85c \uc555\ucc29\ud569\ub2c8\ub2e4. \ud3c9\uc0c1\uc2dc \uac00\uc0c1 \uba54\ubaa8\ub9ac \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc740 \ud504\ub85c\uc138\uc2a4 \uc8fc\uc18c \uacf5\uac04\uc5d0 \uac00\uc0c1 \ud398\uc774\uc9c0\uc640 \ud558\ubd80 \ubb3c\ub9ac \ud398\uc774\uc9c0 \uc0ac\uc774\uc758 \ub9e4\ud551 \uc815\ubcf4\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9"},"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)"),(0,r.kt)("p",null,"IBM\uc774 \uc81c\uc791\ud55c JVM. \ub2e4\uc74c\uc758 \ubaa9\ud45c\ub97c \uac00\uc9d1\ub2c8\ub2e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub300\uc6a9\ub7c9 \uc790\ubc14 \ud799\uc5d0\uc11c \uc911\ub2e8 \uc2dc\uac04\uc774 \uae38\uc5b4\uc9c0\ub294 \ud604\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \uc2dc\uac04\uc774 \ucd5c\uc545\uc778 \uacbd\uc6b0\ub97c \ucd5c\uc18c\ud654\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubd88\uade0\uc77c \uae30\uc5b5 \uc7a5\uce58 \uc561\uc138\uc2a4(NUMA< Non-Uniform Memory Access>) \uc131\ub2a5\uc744 \uc778\uc9c0\ud558\uc5ec \ud65c\uc6a9\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc5d0\ub374\uc774 \uaf49 \ucc28\uba74 \uc218\uc9d1\uc774 \uc77c\uc5b4\ub098\uba70 \uc774\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubd80\ubd84 \uac00\ube44\uc9c0 \uc218\uc9d1(Partial Garbage Collection)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"(\ub108\ubb34 deep\ud574\uc11c \uc0dd\ub7b5...)"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30"},"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30"),(0,r.kt)("p",null,"\uc5ec\ub7ec\uac00\uc9c0 \uc218\uc9d1\uae30\uac00 \uc788\uc73c\ub098 \uac00\uae09\uc801 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serial \ubc0f Serial Old"),(0,r.kt)("li",{parentName:"ul"},"\uc99d\ubd84 CMS"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ud504\ub9ac\ucf00\uc774\ud2b8\ub418\uc5b4 \uc0ac\ub77c\uc9c4 GC \uc870\ud569"),(0,r.kt)("li",{parentName:"ul"},"\uc5e1\uc2e4\ub860")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\uac00\ubc14\uc9c0 \uc218\uc9d1\uae30\ub294 \ud50c\ub7ab\ud3fc\uc758 \uac15\ub825\ud55c \uc7a5\uc810\uc774\uc9c0\ub9cc, \uc774\ub97c \uc798\uc54c\uace0 \uc218\uc9d1\uae30 \ubcc4\ub85c \uace0\ub824\ud574\uc57c\ud558\ub294 \ud2b8\ub808\uc774\ub4dc \uc624\ud504\ub97c \uc544\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."))}o.isMDXComponent=!0}}]);