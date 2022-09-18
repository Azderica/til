"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[494],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),o=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=o(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=o(n),d=r,s=m["".concat(u,".").concat(d)]||m[d]||k[d]||a;return n?l.createElement(s,i(i({ref:e},c),{},{components:n})):l.createElement(s,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5291:function(t,e,n){n.r(e),n.d(e,{default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i={sidebar_position:1},p={unversionedId:"java/optimizing-java/ch1",id:"java/optimizing-java/ch1",isDocsHomePage:!1,title:"1. \uc131\ub2a5\uacfc \ucd5c\uc801\ud654",description:"\uc131\ub2a5 \ubd84\uc11d\uc740 \uacbd\ud5d8\uc8fc\uc758\uc640 \uc778\uac04 \uc2ec\ub9ac\ud559\uc774 \uc5b4\uc6b8\ub7ec\uc9c4 \ubd80\ubd84\uc785\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch1.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch1",permalink:"/til/docs/java/optimizing-java/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch1.md",version:"current",lastUpdatedAt:1663539008,formattedLastUpdatedAt:"9/18/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"12. \uc9c1\ub82c\ud654, Serialization",permalink:"/til/docs/java/effective-java/ch12"},next:{title:"2. JVM \uc774\uc57c\uae30",permalink:"/til/docs/java/optimizing-java/ch2"}},u=[{value:"\uc790\ubc14 \uc131\ub2a5 : \uc798\ubabb\ub41c \ubc29\ubc95",id:"\uc790\ubc14-\uc131\ub2a5--\uc798\ubabb\ub41c-\ubc29\ubc95",children:[]},{value:"\uc790\ubc14 \uc131\ub2a5 \uac1c\uc694",id:"\uc790\ubc14-\uc131\ub2a5-\uac1c\uc694",children:[]},{value:"\uc131\ub2a5\uc740 \uc2e4\ud5d8\uacfc\ud559\uc774\ub2e4",id:"\uc131\ub2a5\uc740-\uc2e4\ud5d8\uacfc\ud559\uc774\ub2e4",children:[]},{value:"\uc131\ub2a5 \ubd84\ub958",id:"\uc131\ub2a5-\ubd84\ub958",children:[{value:"\ucc98\ub9ac\uc728",id:"\ucc98\ub9ac\uc728",children:[]},{value:"\uc9c0\uc5f0",id:"\uc9c0\uc5f0",children:[]},{value:"\uc6a9\ub7c9",id:"\uc6a9\ub7c9",children:[]},{value:"\uc0ac\uc6a9\ub960",id:"\uc0ac\uc6a9\ub960",children:[]},{value:"\ud6a8\uc728",id:"\ud6a8\uc728",children:[]},{value:"\ud655\uc7a5\uc131",id:"\ud655\uc7a5\uc131",children:[]},{value:"\uc800\ud558",id:"\uc800\ud558",children:[]},{value:"\uce21\uc815\uac12 \uc0ac\uc774\uc758 \uc5f0\uad00 \uad00\uacc4",id:"\uce21\uc815\uac12-\uc0ac\uc774\uc758-\uc5f0\uad00-\uad00\uacc4",children:[]}]},{value:"\uc131\ub2a5 \uadf8\ub798\ud504 \uc77d\uae30",id:"\uc131\ub2a5-\uadf8\ub798\ud504-\uc77d\uae30",children:[]}],o={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc131\ub2a5 \ubd84\uc11d\uc740 \uacbd\ud5d8\uc8fc\uc758\uc640 \uc778\uac04 \uc2ec\ub9ac\ud559\uc774 \uc5b4\uc6b8\ub7ec\uc9c4 \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc790\ubc14-\uc131\ub2a5--\uc798\ubabb\ub41c-\ubc29\ubc95"},"\uc790\ubc14 \uc131\ub2a5 : \uc798\ubabb\ub41c \ubc29\ubc95"),(0,a.kt)("p",null,"\uacfc\uac70 \uc790\ubc14 \ucd08\ucc3d\uae30\uc5d0\ub294 \uba54\uc11c\ub4dc \ub514\uc2a4\ud328\uce58 \uc131\ub2a5\uc740 \ucd5c\uc545\uc774\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uba54\uc11c\ub4dc\ub97c \uc798\uac8c \ub098\ub204\uc9c0 \ub9d0\uace0, \ud558\ub098\uc758 \ub369\uce58 \ud070 \uba54\uc11c\ub4dc\ub85c \uc791\uc131\ud558\ub294\uac8c \uc88b\ub2e4\ub77c\ub294 \uc758\uacac\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uac00\uc0c1 \ub514\uc2a4\ud328\uce6d \uc131\ub2a5\uc774 \uc5c4\uccad \uc88b\uc544\uc84c\uace0, JVM\uc5d0\uc11c\ub294 \uc790\ubc14 \uc778\ub77c\uc774\ub2dd \ub355\ubd84\uc5d0 \uac00\uc0c1 \ub514\uc2a4\ud328\uce58 \uc870\ucc28 \ub300\ubd80\ubd84\uc758 \ud638\ucd9c\uc5d0\uc11c \uc0ac\ub77c\uc9c0\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \ud55c \uba54\uc11c\ub4dc\uc5d0 \ub123\uc5b4\uc11c \uc791\uc131\ud558\ub294 \ucf54\ub4dc\ub294 \ud1f4\ubb3c\uc774 \ub418\uc5b4\uc11c \uc0ac\ub77c\uc84c\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc2dc\ub300\uc5d0 \ub530\ub77c \uc774\ub807\uac8c \uc131\ub2a5 \ud301\uc744 \ub098\uc5f4\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc5ec\ub7ec \uac00\uc9c0 \ub2e8\uba74\uc744 \ud655\uc778\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc804\uccb4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc218\uba85\uc8fc\uae30\uc758 \uc131\ub2a5 \ubc29\ubc95\ub860"),(0,a.kt)("li",{parentName:"ul"},"\uc131\ub2a5\uacfc \uc5f0\uad00\ub41c \ud14c\uc2a4\ud2b8 \uc774\ub860"),(0,a.kt)("li",{parentName:"ul"},"\uce21\uc815, \ud1b5\uacc4, \ud234\ub9c1(tooling) : \ub3c4\uad6c \uc120\uc815"),(0,a.kt)("li",{parentName:"ul"},"(\uc2dc\uc2a4\ud15c + \ub370\uc774\ud130) \ubd84\uc11d \uc2a4\ud0ac"),(0,a.kt)("li",{parentName:"ul"},"\ud558\ubd80 \uae30\uc220\uacfc \ub9e4\ucee4\ub2c8\uc998 : \uc7a5\uce58, \uc218\ub2e8")),(0,a.kt)("p",null,"\ucd5c\uc801\ud654\ud558\ub294 \ud734\ub9ac\uc2a4\ud2f1\uacfc \uac01\uc885 \ucf54\ub4dc \uc218\uc900\uc758 \ud14c\ud06c\ub2c9\uc740 \ub05d\ubd80\ubd84\uc5d0\uc11c \uc791\uc131\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \ubaa8\ub4e0 \ucd5c\uc801\ud654 \uae30\ubc95\uc5d0\ub294 \uac1c\ubc1c\uc790\uac00 \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uc54c\uc544\ub46c\uc57c\ud558\ub294 \ud568\uc815\uacfc \ud2b8\ub808\uc774\ub4dc \uc624\ud504\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc2e0\uacbd\uc368\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \uc6d0\uce59\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JVM\uc744 \ub354 \ube68\ub9ac \uc791\ub3d9\uc2dc\ud0a4\ub294 \ub9c8\ubc95 \uc2a4\uc704\uce58 \uac19\uc740 \uac83\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\ub97c \ub354 \ube68\ub9ac \uc2e4\ud589\ud558\uac8c \ub9cc\ub4dc\ub294 \ud301, \ud2b8\ub9ad\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\ub78c\ub4e4\uc774 \ubaa8\ub974\ub294 \ube44\ubc00 \uc54c\uace0\ub9ac\uc998\uc740 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc790\ubc14-\uc131\ub2a5-\uac1c\uc694"},"\uc790\ubc14 \uc131\ub2a5 \uac1c\uc694"),(0,a.kt)("p",null,"\uc790\ubc14\ub294 \uc2e4\uc6a9\uc801\uc778 \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ud55c \ub300\ud45c\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \uc11c\ube0c \uc2dc\uc2a4\ud15c\uc744 \uc608\uc2dc\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\uac00 \uc77c\uc77c\uc774 \uc6a9\ub7c9\uc744 \uc138\uc138\ud558\uac8c \uad00\ub9ac\ud558\ub294 \ubd80\ub2f4\uc744 \ub35c\uc5ec\uc8fc\uace0, \uc8fc\uc218\uc900\uc73c\ub85c \uc81c\uc5b4 \uac00\ub2a5\ud55c \uc77c\ubd80 \uae30\ub2a5\uc744 \ud3ec\uae30\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"JVM\uc774 \uac00\ube44\uc9c0 \uc218\uc9d1 \uc11c\ube0c\uc2dc\uc2a4\ud15c \ud615\ud0dc\ub85c \uba54\ubaa8\ub9ac\ub97c \uc790\ub3d9 \uad00\ub9ac\ud558\uae30 \ub355\ubd84\uc5d0 \ud504\ub85c\uadf8\ub798\uba38\ub294 \uc218\ub3d9\uc73c\ub85c \uba54\ubaa8\ub9ac\ub97c \uc758\uc2dd\ud574\uc11c \uac1c\ubc1c\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784 \ub3d9\uc791\uc5d0 \ubcf5\uc7a1\ub3c4\ub97c \uc720\ubc1c\ud569\ub2c8\ub2e4. (JVM\uc5d0 \uc758\ud574)")),(0,a.kt)("p",null,"\ub2e4\ub9cc, \uc790\ubc14 \uc131\ub2a5 \uce21\uc815\uc744 \uc704\ud574\uc11c \uc798\ubabb\ub41c \ud310\ub2e8\uc744 \ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc870\uc2ec\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc131\ub2a5\uc740-\uc2e4\ud5d8\uacfc\ud559\uc774\ub2e4"},"\uc131\ub2a5\uc740 \uc2e4\ud5d8\uacfc\ud559\uc774\ub2e4"),(0,a.kt)("p",null,"JVM \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2a4\ud0dd\uc740 \uc544\uc8fc \ubcf5\uc7a1\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \uc5ec\ub7ec \uc131\ub2a5 \uc774\uc288\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ub098 \ucd5c\uc0c1\uc758 \uc131\ub2a5\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub290 \uc218\uc900 \uc774\uc0c1\uc758 \uc2a4\ud0ac\uacfc \uacbd\ud5d8\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"JVM \uc131\ub2a5 \ud29c\ub2dd\uc740 \uae30\uc220, \ubc29\ubc95\ub860, \uc815\ub7c9\uc801 \uce21\uc815\uac12, \ud234\uc744 \ub9dd\ub77c\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \uc21c\uc11c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uacb0\uacfc\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc2dc\uc2a4\ud15c\uc744 \uce21\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc694\uac74\uc744 \ucda9\uc871\uc2dc\ud0a4\ub824\uba74 \ubb34\uc2a8 \uc77c\uc744 \ud574\uc57c \ud560\uc9c0 \uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac1c\uc120 \ud65c\ub3d9\uc744 \ucd94\uc9c4\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc2dc \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa9\ud45c\uac00 \ub2ec\uc131\ub410\ub294\uc9c0 \ud310\ub2e8\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc131\ub2a5 \ubd84\uc11d\uc740 \ud1b5\uacc4\uce58\uc5d0 \ud070\uac70\ud574 \uc801\uc808\ud788 \uacb0\uacfc\ub97c \ucc98\ub9ac\ud558\ub294 \ud65c\ub3d9\uc785\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 5\uc7a5\uc5d0\uc11c \uc774\uc57c\uae30\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc131\ub2a5-\ubd84\ub958"},"\uc131\ub2a5 \ubd84\ub958"),(0,a.kt)("p",null,"\uc131\ub2a5 \uc9c0\ud45c\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uc5f0"),(0,a.kt)("li",{parentName:"ul"},"\uc6a9\ub7c9"),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ub960"),(0,a.kt)("li",{parentName:"ul"},"\ud655\uc7a5\uc131"),(0,a.kt)("li",{parentName:"ul"},"\uc800\ud558")),(0,a.kt)("p",null,"\ub2e4\ub9cc \uc774\ub97c \uc218\ud589\ud560 \ub54c\ub9c8\ub2e4, \uc88b\uc544\uc57c 2~3\uac1c \uc9c0\ud45c\uac00 \uac1c\uc120\uc774 \ub418\uace0, \ud55c \uc9c0\ud45c\ub97c \uac1c\uc120\ud588\ub2e4\uac00 \ub2e4\ub978 \uc9c0\ud45c\ub4e4\uc774 \uc545\ud654\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ucc98\ub9ac\uc728"},"\ucc98\ub9ac\uc728"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\ucc98\ub9ac\uc728(throughput)"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc11c\ube0c \uc2dc\uc2a4\ud15c\uc774 \uc218\ud589 \uac00\ub2a5\ud55c \uc791\uc5c5 \ube44\uc728\uc744 \ub098\ud0c0\ub0b8 \uc9c0\ud45c"),"\uc785\ub2c8\ub2e4. (\uc77c\uc815 \uc2dc\uac04\ub3d9\uc548 \uc644\ub8cc\ud55c \uc791\uc5c5 \ub2e8\uc704 \uc218)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud50c\ub7ab\ud3fc\uc5d0 \ub300\ud55c \ub0b4\uc6a9\ub3c4 \uae30\uc220\ud574\uc57c\ud569\ub2c8\ub2e4. (HW, OS, SW \uc2a4\ud0dd, \ub2e8\uc77c \uc11c\ubc84\uc778\uc9c0 \ud639\uc740 \ud074\ub7ec\uc2a4\ud130 \ud658\uacbd\uc778\uc9c0)")),(0,a.kt)("h3",{id:"\uc9c0\uc5f0"},"\uc9c0\uc5f0"),(0,a.kt)("p",null,"\uc131\ub2a5 \uc9c0\ud45c\ub97c \uc77c\uc885\uc758 \uc218\ub3c4 \ud328\uad00\uc5d0 \ube57\ub300\uc5b4 \uc124\uba85\uac00\ub2a5\ud55c\ub370, ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc9c0\uc5f0(latency)"),"\uc740 \uc218\ub3c4\uad00 \uc790\uccb4\uc758 \uae38\uc774\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\ub9ac\ud558\uace0 \uadf8 \uacb0\uacfc\ub97c \ubc18\ub300\ud3b8 \uc218\ub3c4\uad00 \ub05d\uc5d0\uc11c \ubc14\ub77c\ubcfc \ub54c\uae4c\uc9c0 \uc18c\uc694\ub41c \uc2dc\uac04"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc6a9\ub7c9"},"\uc6a9\ub7c9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uc6a9\ub7c9(capacity)"),"\ub294 \uc2dc\uc2a4\ud15c\uc774 \ubcf4\uc720\ud55c \uc791\uc5c5 \ubcd1\ub82c\uc131\uc758 \ucd1d\ub7c9, \uc989 \uc2dc\uc2a4\ud15c\uc774 \ub3d9\uc2dc \ucc98\ub9ac \uac00\ub2a5\ud55c \uc791\uc5c5 \ub2e8\uc704(\ud2b8\ub79c\uc7ad\uc158) \uac1c\uc218\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0 \ub3d9\uc2dc \ubd80\ud558\uac00 \uc99d\uac00\ud560\uc218\ub85d \ucc98\ub9ac\uc728\ub3c4 \ub2f9\uc5f0\ud788 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c \ubcf4\ud1b5 \uc6a9\ub7c9\uc740 \uc5b4\ub5a4 \ucc98\ub9ac\uc728 \ub610\ub294 \uc9c0\uc5f0 \uac12\uc744 \uc804\uc81c\ub85c \uac00\ub2a5\ud55c \ucc98\ub9ac\ub7c9\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc0ac\uc6a9\ub960"},"\uc0ac\uc6a9\ub960"),(0,a.kt)("p",null,"\uc131\ub2a5 \ubd84\uc11d \uc5c5\ubb34 \uc911 \uac00\uc7a5 \ud754\ud55c \ud0dc\uc2a4\ud06c\ub294 \uc2dc\uc2a4\ud15c \ub9ac\uc18c\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"CPU \ub9ac\uc18c\uc2a4\uac00 \uc2e4\uc81c \uc791\uc5c5 \ub2e8\uc704\ub97c \ucc98\ub9ac\ud558\ub294\ub370 \uc4f0\uc5ec\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uc0ac\uc6a9\ub960(utilization)"),"\uc740 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 \ub530\ub77c\uc11c \ub9ac\uc18c\uc2a4\ubcc4\ub85c \ub4e4\uc465\ub0a0\uc465\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud6a8\uc728"},"\ud6a8\uc728"),(0,a.kt)("p",null,"\uc804\uccb4 \uc2dc\uc2a4\ud15c\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud6a8\uc728(efficiency)"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ucc98\ub9ac\uc728\uc744 \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\ub960\ub85c \ub098\ub208 \uac12"),"\uc73c\ub85c \uce21\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud655\uc7a5\uc131"},"\ud655\uc7a5\uc131"),(0,a.kt)("p",null,"\ucc98\ub9ac\uc728\uc774\ub098 \uc2dc\uc2a4\ud15c \uc6a9\ub7c9\uc740 \ucc98\ub9ac\ud558\ub294\ub370 \ub04c\uc5b4 \uc4f8 \uc218 \uc788\ub294 \ub9ac\uc18c\uc2a4\uc5d0 \ub2ec\ub824\uc788\uc2b5\ub2c8\ub2e4. \ub9ac\uc18c\uc2a4 \ucd94\uac00\uc5d0 \ub530\ub978 \ucc98\ub9ac\uc728 \ubcc0\ud654\ub294 \uc2dc\uc2a4\ud15c/\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud655\uc7a5\uc131(scalability)"),"\uc744 \uac00\ub2a0\ud558\ub294 \ucc99\ub3c4\uc785\ub2c8\ub2e4. \uc2dc\uc2a4\ud15c \ud655\uc7a5\uc131\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ub9ac\uc18c\uc2a4\ub97c \ud22c\uc785\ud55c \ub9cc\ud07c \ucc98\ub9ac\uc728\uc774 \ubcc0\uacbd\ub418\ub294 \ud615\ud0dc\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uc77c\ubc18\uc801\uc73c\ub85c \ud655\uc7a5\uc131\uc740 \uc5ec\ub7ec \uac00\uc9c0 \uc778\uc790\ub4e4\uc758 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \ub9ac\uc18c\uc2a4\ub97c \uc5b4\ub290 \uc815\ub3c4\uae4c\uc9c0 \ub298\ub9ac\uba74 \uc120\ud615\uc801\uc73c\ub85c \ud655\uc7a5\ub418\uc9c0\ub9cc, \ub300\ubd80\ubd84 \ubd80\ud558\uac00 \ub192\uc544\uc9c0\uba74 \ud55c\uacc4\uc810\uc5d0 \ubd09\ucc29\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc800\ud558"},"\uc800\ud558"),(0,a.kt)("p",null,"\uc694\uccad \uac1c\uc218\uac00 \uc99d\uac00\ud558\uac70\ub098 \uc811\uc218 \uc18d\ub3c4\uac00 \uc99d\uac00\ud558\uba74, \uc2dc\uc2a4\ud15c\uc774 \ub354 \ub9ce\uc740 \ubd80\ud558\ub97c \ubc1b\uc544 \uc9c0\uc5f0\uacfc \ucc98\ub9ac\uc728 \uce21\uc815\uac12\uc5d0 \ubcc0\ud654\uac00 \uc0dd\uae41\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubcc0\ud654\ub294 \uc0ac\uc6a9\ub960\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uc2dc\uc2a4\ud15c\uc744 \ub35c \uc0ac\uc6a9\ud558\uace0 \uc788\uc73c\uba74 \uce21\uc815\uac12\uc774 \ub290\uc2a8\ud558\uac8c \ubcc0\ud558\uc9c0\ub9cc, ",(0,a.kt)("strong",{parentName:"p"},"\uc2dc\uc2a4\ud15c\uc774 \ud480 \uac00\ub3d9\ub41c \uc0c1\ud0dc\uba74 \ucc98\ub9ac\uc728\uc774 \ub354 \ub298\uc5b4\ub098\uc9c0 \uc54a\ub294 \uc591\uc0c1"),"\uc744 \uac00\uc9d1\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud604\uc0c1\uc744 \ubd80\ud558 \uc99d\uac00\uc5d0 \ub530\ub978 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc800\ud558(degradation)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uce21\uc815\uac12-\uc0ac\uc774\uc758-\uc5f0\uad00-\uad00\uacc4"},"\uce21\uc815\uac12 \uc0ac\uc774\uc758 \uc5f0\uad00 \uad00\uacc4"),(0,a.kt)("p",null,"\ub2e4\uc591\ud55c \uc131\ub2a5 \uce21\uc815\uac12\uc740 \uc5b4\ub5a4 \uc2dd\uc73c\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubd80\ud558\uc5d0 \ub530\ub77c \uc5ec\ub7ec \uce21\uc815\uac12\uc774 \uc694\ub3d9\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud655\uc7a5\uc131\uacfc \uc800\ud558\ub294 \ubd80\ud558\uac00 \uc99d\uac00\ud568\uc5d0 \ubcc0\ud654\ub429\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\uc131\ub2a5-\uadf8\ub798\ud504-\uc77d\uae30"},"\uc131\ub2a5 \uadf8\ub798\ud504 \uc77d\uae30"),(0,a.kt)("p",null,"\ubd80\ud558\uac00 \uc99d\uac00\ud558\uba74\uc11c \uc608\uae30\uce58 \uc54a\uc740 \uc800\ud558(\uc9c0\uc5f0)\uc774 \ubc1c\uc0dd\ud558\ub294 \uadf8\ub798\ud504\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70 \uc774\ub7ec\ud55c \ud615\ud0dc\ub97c \ubcf4\ud1b5 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc131\ub2a5 \uc5d8\ub85c(performance elbow)")," \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/118398713-d6cb6100-b694-11eb-8884-3512945f684b.png",alt:"performance elbow"})),(0,a.kt)("p",null,"\uc774\uc640\ub294 \ubc18\ub300\ub85c \uc7a5\ube44 \ucd94\uac00\uc5d0 \ub530\ub77c \uac70\uc758 \uc120\ud615\uc73c\ub85c \ucc98\ub9ac\uc728\uc774 \ud655\uc7a5\ub418\ub294 \uc6b4\uc88b\uc740 \ucf00\uc774\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ub300\ubd80\ubd84 \uc554\ub2ec\uc758 \ubc95\uce59\uacfc \ube44\uc2b7\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/118398808-3295ea00-b695-11eb-9332-cad9e11df682.png",alt:"\uc554\ub2ec\uc758 \ubc95\uce59"})),(0,a.kt)("p",null,"GC \uc774\ud6c4 \ud799 \uc0ac\uc6a9\ub7c9\uc740 \uc544\ub798\uc640 \uac19\uc740 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/118398878-640eb580-b695-11eb-90f1-2ad39e7c4eef.png",alt:"image"})),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \ubb38\uc81c\uac00 \uc788\ub294 \uadf8\ub798\ud504\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. (\ud53c\ubcf4\ub098\uce58\ub97c \uc2e4\ud589\ud55c \uadf8\ub798\ud504)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/118398897-87396500-b695-11eb-8631-47ac07135397.png",alt:"image"})))}c.isMDXComponent=!0}}]);