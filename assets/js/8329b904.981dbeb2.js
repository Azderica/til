(self.webpackChunktil=self.webpackChunktil||[]).push([[2207],{3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return m},kt:function(){return c}});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var p=n.createContext({}),k=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),d=k(l),c=r,N=d["".concat(p,".").concat(c)]||d[c]||o[c]||a;return l?n.createElement(N,i(i({ref:e},m),{},{components:l})):n.createElement(N,i({ref:e},m))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var k=2;k<a;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2546:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=l(2122),r=l(9756),a=(l(7294),l(3905)),i={},u={unversionedId:"dev/refactoring/ch2",id:"dev/refactoring/ch2",isDocsHomePage:!1,title:"\ub9ac\ud329\ud1a0\ub9c1 \uc6d0\uce59",description:"\ub9ac\ud329\ud1a0\ub9c1 \uc815\uc758",source:"@site/docs/dev/refactoring/ch2.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch2",permalink:"/til/docs/dev/refactoring/ch2",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch2.md",version:"current",lastUpdatedAt:1624113310,formattedLastUpdatedAt:"6/19/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ub9ac\ud329\ud130\ub9c1: \uccab \ubc88\uc9f8 \uc608\uc2dc",permalink:"/til/docs/dev/refactoring/ch1"},next:{title:"\ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8",permalink:"/til/docs/dev/refactoring/ch3"}},p=[{value:"\ub9ac\ud329\ud1a0\ub9c1 \uc815\uc758",id:"\ub9ac\ud329\ud1a0\ub9c1-\uc815\uc758",children:[]},{value:"\ub450 \uac1c\uc758 \ubaa8\uc790",id:"\ub450-\uac1c\uc758-\ubaa8\uc790",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\uc758 \uc774\uc720",id:"\ub9ac\ud329\ud130\ub9c1\uc758-\uc774\uc720",children:[{value:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc124\uacc4\uac00 \uc88b\uc544\uc9d1\ub2c8\ub2e4.",id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\uc18c\ud504\ud2b8\uc6e8\uc5b4-\uc124\uacc4\uac00-\uc88b\uc544\uc9d1\ub2c8\ub2e4",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc774\ud574\ud558\uae30 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4.",id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c-\uc774\ud574\ud558\uae30-\uc26c\uc6cc\uc9d1\ub2c8\ub2e4",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \ubc84\uadf8\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\ubc84\uadf8\ub97c-\uc27d\uac8c-\ucc3e\uc744-\uc218-\uc788\uc2b5\ub2c8\ub2e4",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \ud504\ub85c\uadf8\ub798\ubc0d \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\ud504\ub85c\uadf8\ub798\ubc0d-\uc18d\ub3c4\ub97c-\ub192\uc77c-\uc218-\uc788\uc2b5\ub2c8\ub2e4",children:[]}]},{value:"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810",id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc2dc\uc810",children:[{value:"3\uc758 \ubc95\uce59",id:"3\uc758-\ubc95\uce59",children:[]},{value:"\uc900\ube44\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1 : \uae30\ub2a5\uc744 \uc27d\uac8c \ucd94\uac00\ud558\uac8c \ub9cc\ub4e4\uae30",id:"\uc900\ube44\ub97c-\uc704\ud55c-\ub9ac\ud329\ud130\ub9c1--\uae30\ub2a5\uc744-\uc27d\uac8c-\ucd94\uac00\ud558\uac8c-\ub9cc\ub4e4\uae30",children:[]},{value:"\uc774\ud574\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1 : \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4\uae30",id:"\uc774\ud574\ub97c-\uc704\ud55c-\ub9ac\ud329\ud130\ub9c1--\ucf54\ub4dc\ub97c-\uc774\ud574\ud558\uae30-\uc27d\uac8c-\ub9cc\ub4e4\uae30",children:[]},{value:"\uc4f0\ub808\uae30 \uc90d\uae30 \ub9ac\ud329\ud130\ub9c1",id:"\uc4f0\ub808\uae30-\uc90d\uae30-\ub9ac\ud329\ud130\ub9c1",children:[]},{value:"\uacc4\ud68d\ub41c \ub9ac\ud329\ud130\ub9c1\uacfc \uc218\uc2dc\ub85c \ud558\ub294 \ub9ac\ud329\ud130\ub9c1",id:"\uacc4\ud68d\ub41c-\ub9ac\ud329\ud130\ub9c1\uacfc-\uc218\uc2dc\ub85c-\ud558\ub294-\ub9ac\ud329\ud130\ub9c1",children:[]},{value:"\uc624\ub798 \uac78\ub9ac\ub294 \ub9ac\ud329\ud130\ub9c1",id:"\uc624\ub798-\uac78\ub9ac\ub294-\ub9ac\ud329\ud130\ub9c1",children:[]},{value:"\ucf54\ub4dc \ub9ac\ubdf0\uc5d0 \ub9ac\ud329\ud130\ub9c1 \ud65c\uc6a9\ud558\uae30",id:"\ucf54\ub4dc-\ub9ac\ubdf0\uc5d0-\ub9ac\ud329\ud130\ub9c1-\ud65c\uc6a9\ud558\uae30",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uba74 \uc548\ub418\ub294 \uacbd\uc6b0.",id:"\ub9ac\ud329\ud130\ub9c1\uc744-\ud558\uba74-\uc548\ub418\ub294-\uacbd\uc6b0",children:[]}]},{value:"\ub9ac\ud329\ud130\ub9c1 \uc2dc \uace0\ub824\ud560 \ubb38\uc81c",id:"\ub9ac\ud329\ud130\ub9c1-\uc2dc-\uace0\ub824\ud560-\ubb38\uc81c",children:[{value:"\uc0c8 \uae30\ub2a5 \uac1c\ubc1c \uc18d\ub3c4 \uc800\ud558",id:"\uc0c8-\uae30\ub2a5-\uac1c\ubc1c-\uc18d\ub3c4-\uc800\ud558",children:[]},{value:"\ucf54\ub4dc \uc18c\uc720\uad8c",id:"\ucf54\ub4dc-\uc18c\uc720\uad8c",children:[]},{value:"\ube0c\ub79c\uce58",id:"\ube0c\ub79c\uce58",children:[]},{value:"\ud14c\uc2a4\ud305",id:"\ud14c\uc2a4\ud305",children:[]},{value:"\ub808\uac70\uc2dc \ucf54\ub4dc",id:"\ub808\uac70\uc2dc-\ucf54\ub4dc",children:[]},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[]}]},{value:"\ub9ac\ud329\ud1a0\ub9c1, \uc544\ud0a4\ud14d\ucc98, \uc560\uadf8\ub2c8(YAGNI)",id:"\ub9ac\ud329\ud1a0\ub9c1-\uc544\ud0a4\ud14d\ucc98-\uc560\uadf8\ub2c8yagni",children:[]},{value:"\ub9ac\ud329\ud1a0\ub9c1\uacfc \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4",id:"\ub9ac\ud329\ud1a0\ub9c1\uacfc-\uc18c\ud504\ud2b8\uc6e8\uc5b4-\uac1c\ubc1c-\ud504\ub85c\uc138\uc2a4",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1\uacfc \uc131\ub2a5",id:"\ub9ac\ud329\ud130\ub9c1\uacfc-\uc131\ub2a5",children:[]},{value:"\ub9ac\ud329\ud130\ub9c1 \uc790\ub3d9\ud654",id:"\ub9ac\ud329\ud130\ub9c1-\uc790\ub3d9\ud654",children:[]},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",children:[{value:"\ucd94\ucc9c \ucc45 \uc790\ub8cc",id:"\ucd94\ucc9c-\ucc45-\uc790\ub8cc",children:[]}]}],k={toc:p};function m(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-\uc815\uc758"},"\ub9ac\ud329\ud1a0\ub9c1 \uc815\uc758"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uac89\ubcf4\uae30 \ub3d9\uc791\uc740 \uadf8\ub300\ub85c \uc720\uc9c0\ud55c \ucc44, \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uace0 \uc218\uc815\ud558\uae30 \uc27d\ub3c4\ub85d \ub0b4\ubd80 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\ub294 \uae30\ubc95"),(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uac89\ubcf4\uae30 \ub3d9\uc791\uc740 \uadf8\ub300\ub85c \uc720\uc9c0\ud55c \ucc44, \uc5ec\ub7ec\uac00\uc9c0 \ub9ac\ud329\ud130\ub9c1 \uae30\ubc95\uc744 \uc801\uc6a9\ud574\uc11c \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc7ac\uad6c\uc131\ud558\ub294 \ubc29\ubc95")),(0,a.kt)("p",null,"\uc989, \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\ub2e4\uac00 \ucf54\ub4dc\uac00 \uae68\uc838\uc11c \uace0\uc0dd\uc744 \ud588\ub2e4\uba74 \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ucf54\ub4dc \ubca0\uc774\uc2a4\ub97c \uc815\ub9ac\ud558\uac70\ub098 \uad6c\uc870\ub97c \ubc14\uafb8\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\uc7ac\uad6c\uc131"),"\uc774\ub77c\ub294 \ud3ec\uad04\uc801\uc778 \uc6a9\uc5b4\ub85c \ud45c\ud604\ud558\uace0, ",(0,a.kt)("strong",{parentName:"p"},"\ub9ac\ud329\ud130\ub9c1"),"\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc7ac\uad6c\uc131 \uc911 \ud2b9\uc218\ud55c \ud615\ud0dc"),"\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc740 \uc131\ub2a5 \ucd5c\uc801\ud654\uc640 \ube44\uc2b7\ud55c \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub458 \ub2e4 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud558\uace0 \uc804\ubc18\uc801\uc778 \uae30\ub2a5\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ubaa9\uc801\uc774 \ub2e4\ub985\ub2c8\ub2e4. \ub9ac\ud329\ud130\ub9c1\uc740 \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uace0 \uc218\uc815\ud558\uae30 \uc27d\uac8c \ub9cc\ub4dc\ub294 \uac83\uc774\uace0, \uc131\ub2a5 \ucd5c\uc801\ud654\ub294 \uc624\ub85c\uc9c0 \uc18d\ub3c4 \uac1c\uc120\uc5d0\ub9cc \uc2e0\uacbd\uc744 \uc501\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub450-\uac1c\uc758-\ubaa8\uc790"},"\ub450 \uac1c\uc758 \ubaa8\uc790"),(0,a.kt)("p",null,"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c\ud560 \ub54c \ubaa9\uc801\uc774 ",(0,a.kt)("strong",{parentName:"p"},"\uae30\ub2a5 \ucd94\uac00"),"\uc778\uc9c0 ",(0,a.kt)("strong",{parentName:"p"},"\ub9ac\ud329\ud130\ub9c1"),"\uc778\uc9c0\ub97c \uba85\ud655\ud558\uac8c \uad6c\ubd84\ud574\uc11c \uc791\uc5c5\ud574\uc57c\ud569\ub2c8\ub2e4. \uae30\ub2a5 \ucd94\uac00\ub97c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uae30\uc874 \ucf54\ub4dc\ub97c \uc808\ub300 \uac74\ub4dc\ub9ac\uc9c0 \uc54a\uace0 \uc0c8 \uae30\ub2a5\uc744 \ucd94\uac00\ud574\uc57c\ud558\uace0, \ub9ac\ud329\ud130\ub9c1\uc740 \uae30\ub2a5 \ucd94\uac00\ub97c \uc808\ub300\ud558\uc9c0 \uc54a\uace0 \uc624\ub85c\uc9c0 \ucf54\ub4dc \uc7ac\uad6c\uc131\uc5d0\ub9cc \uc804\ub150\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud130\ub9c1\uc758-\uc774\uc720"},"\ub9ac\ud329\ud130\ub9c1\uc758 \uc774\uc720"),(0,a.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc740 \ubaa8\ub4e0 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc, \ucf54\ub4dc\ub97c \uac74\uac15\ud558\uac8c \uc720\uc9c0\ud558\uac8c \ub3c4\uc640\uc8fc\ub294 \uc57d\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\uc18c\ud504\ud2b8\uc6e8\uc5b4-\uc124\uacc4\uac00-\uc88b\uc544\uc9d1\ub2c8\ub2e4"},"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc124\uacc4\uac00 \uc88b\uc544\uc9d1\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uc9c0 \uc54a\uc73c\uba74 \ucf54\ub4dc\uac00 \uc369\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uaddc\uce59\uc801\uc778 \ub9ac\ud329\ud130\ub9c1\uc740 \ucf54\ub4dc\uc758 \uad6c\uc870\ub97c \uc9c0\ud0f1\ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c \uc911\ubcf5 \ucf54\ub4dc\ub97c \uc81c\uac70\ud558\uba74 \ubaa8\ub4e0 \ucf54\ub4dc\uac00 \uc5b8\uc81c\ub098 \uace0\uc720\ud55c \uc77c\uc744 \uc218\ud589\ud568\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c-\uc774\ud574\ud558\uae30-\uc26c\uc6cc\uc9d1\ub2c8\ub2e4"},"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc774\ud574\ud558\uae30 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud4e8\ud130\uc5d0\uac8c \uc2dc\ud0a4\ub824\ub294 \uc77c\uacfc \uc774\ub97c \ud45c\ud604\ud558\ub294 \ucf54\ub4dc\uc758 \ucc28\uc774\ub97c \uc904\uc774\ub294 \uac83\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc744 \ud1b5\ud574 \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc27d\uac8c \ubc14\uafb8\uba74 \ub098\uc640 \ub2e4\ub978 \uc0ac\ub78c \ubaa8\ub450\uc5d0\uac8c \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\ubc84\uadf8\ub97c-\uc27d\uac8c-\ucc3e\uc744-\uc218-\uc788\uc2b5\ub2c8\ub2e4"},"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \ubc84\uadf8\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc27d\ub2e4\ub294 \ub9d0\uc740 \ubc84\uadf8\ub97c \ucc3e\uae30\ub3c4 \uc27d\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub7a8 \uad6c\uc870\ub97c \uba85\ud655\ud558\uac8c \ub2e4\ub4ec\uc73c\uba74 \uadf8\ub0e5 \uc774\ub7f4 \uac83\uc774\ub77c\uace0 \uac00\uc815\ud55c \uc810\uc774 \ub4dc\ub7ec\ub098\uac8c \ub418\uace0, \uc774\ub97c \uc9c0\ub098\uce60 \uc218 \uc5c6\uc744 \uc815\ub3c4\ub85c \uba85\ud655\ud574\uc9d1\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1\ud558\uba74-\ud504\ub85c\uadf8\ub798\ubc0d-\uc18d\ub3c4\ub97c-\ub192\uc77c-\uc218-\uc788\uc2b5\ub2c8\ub2e4"},"\ub9ac\ud329\ud130\ub9c1\ud558\uba74 \ud504\ub85c\uadf8\ub798\ubc0d \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc744 \ud1b5\ud574 \ucf54\ub4dc \uac1c\ubc1c \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc124\uacc4\uc640 \uac00\ub3c5\uc131\uc774 \uac1c\uc120\ub418\uace0 \ubc84\uadf8\uac00 \uc904\uc5b4\ub4e4\uba74\uc11c \ubaa8\ub4e0 \ud488\uc9c8 \ud5a5\uc0c1\uc5d0 \uc9c1\uacb0\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc88b\uc740 \uc124\uacc4\ub294 \ub098\uc05c \uc124\uacc4\uc640 \ub2ec\ub9ac \uc2dc\uac04\uc774 \uac08\uc218\ub85d \uae30\ub2a5 \uad6c\ud604\uc5d0\uc11c \uc7a5\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\uc758-\uc2dc\uc810"},"\ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810"),(0,a.kt)("p",null,"\uc791\uc131\uc790\uc758 \uc77c\ubc18\uc801\uc73c\ub85c \ub9ac\ud329\ud1a0\ub9c1\uc758 \uc2dc\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"3\uc758-\ubc95\uce59"},"3\uc758 \ubc95\uce59"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucc98\uc74c\uc5d0\ub294 \uadf8\ub0e5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\uc2b7\ud55c \uc77c\uc744 \ub450\ubc88\uc9f8\ub85c \ud558\uac8c \ub418\uba74, \uc77c\ub2e8 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\uc2b7\ud55c \uc77c\uc744 \uc138\ubc88\uc9f8 \ud558\uac8c \ub418\uba74 \ub9ac\ud329\ud130\ub9c1\uc744 \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc900\ube44\ub97c-\uc704\ud55c-\ub9ac\ud329\ud130\ub9c1--\uae30\ub2a5\uc744-\uc27d\uac8c-\ucd94\uac00\ud558\uac8c-\ub9cc\ub4e4\uae30"},"\uc900\ube44\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1 : \uae30\ub2a5\uc744 \uc27d\uac8c \ucd94\uac00\ud558\uac8c \ub9cc\ub4e4\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\ud558\uae30 \uac00\uc7a5 \uc88b\uc740 \uc2dc\uc810\uc740 \ucf54\ub4dc\ubca0\uc774\uc2a4\uc5d0 \uae30\ub2a5\uc744 \uc0c8\ub85c \ucd94\uac00\ud558\uae30 \uc9c1\uc804\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud604\uc7ac \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uba70, \uad6c\uc870\ub97c \uc0b4\uc9dd \ubc14\uafb8\uba74 \ub2e4\ub978 \uc791\uc5c5\uc744 \ud558\uae30\uac00 \ud6e8\uc52c \uc26c\uc5b4\uc9c8 \ub9cc\ud55c \ubd80\ubd84\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\uc801\uc778 \ucf54\ub4dc\uac00 \ubc1c\uc0dd\ud558\uba74 \uc774\ub97c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 ",(0,a.kt)("strong",{parentName:"li"},"\ud568\uc218 \ub9e4\uac1c\ubcc0\uc218\ud654")," \ub4f1\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574 \ubc84\uadf8 \ubc1c\uc0dd \uac00\ub2a5\uc131\uc774 \uc904\uc5b4\ub4ed\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc774\ud574\ub97c-\uc704\ud55c-\ub9ac\ud329\ud130\ub9c1--\ucf54\ub4dc\ub97c-\uc774\ud574\ud558\uae30-\uc27d\uac8c-\ub9cc\ub4e4\uae30"},"\uc774\ud574\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1 : \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc218\uc815\ud558\ub824\uba74 \uba3c\uc800 \uadf8 \ucf54\ub4dc\uac00 \ud558\ub294 \uc77c\uc744 \ud30c\uc545\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc790\uc798\ud55c \uc138\ubd80 \ucf54\ub4dc\uc5d0 \uc774\ud574\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \ubd84\uc11d\ud560 \ub54c \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uba74 \uae4a\uc740 \uc774\ud574\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc4f0\ub808\uae30-\uc90d\uae30-\ub9ac\ud329\ud130\ub9c1"},"\uc4f0\ub808\uae30 \uc90d\uae30 \ub9ac\ud329\ud130\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \ud30c\uc545\ud558\ub294 \uc911\uc5d0 \uc77c\uc744 \ube44\ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\ub294 \ubaa8\uc2b5\uc744 \ubc1c\uacac\ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac04\ub2e8\ud788 \uc218\uc815\ud560 \uc218 \uc788\ub294 \uac83\uc740 \uc989\uc2dc \uace0\uce58\uace0, \uc2dc\uac04\uc774 \uc880 \uac78\ub9ac\ub294 \uc77c\uc740 \uc9e7\uc740 \uba54\ubaa8\ub9cc \ub0a8\uae34 \ub2e4\uc74c \ud558\ub358 \uc77c\uc744 \ub05d\ub0b4\uace0 \ub098\uc11c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc758 \uba4b\uc9c4 \uc810\uc740 \uac01\uac01\uc758 \uc791\uc740 \ub2e8\uacc4\uac00 \ucf54\ub4dc\ub97c \uae68\ub728\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacc4\ud68d\ub41c-\ub9ac\ud329\ud130\ub9c1\uacfc-\uc218\uc2dc\ub85c-\ud558\ub294-\ub9ac\ud329\ud130\ub9c1"},"\uacc4\ud68d\ub41c \ub9ac\ud329\ud130\ub9c1\uacfc \uc218\uc2dc\ub85c \ud558\ub294 \ub9ac\ud329\ud130\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc55e\uc11c \ub098\uc628 \uc900\ube44\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1, \uc774\ud574\ub97c \uc704\ud55c \ub9ac\ud329\ud130\ub9c1, \uc4f0\ub808\uae30 \uc90d\uae30 \ub9ac\ud329\ud130\ub9c1 \ubaa8\ub450 \uae30\ud654\uac00 \ub420 \ub54c\ub9cc \uc9c0\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\uc678\uc758 \uae30\ub2a5 \ucd94\uac00\ub97c \ud558\uac70\ub098 \ubc84\uadf8\ub97c \uc7a1\ub294 \ub3d9\uc548 \uc218\uc2dc\ub85c \ub9ac\ud329\ud130\ub9c1\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubcf4\uae30 \uc2eb\uc740 \ucf54\ub4dc\ub97c \ubc1c\uacac\ud558\uba74 \ub9ac\ud329\ud130\ub9c1\ud558\uace0, \uc798 \uc791\uc131\ub41c \ucf54\ub4dc \uc5ed\uc2dc \uc218\ub9ce\uc740 \ub9ac\ud329\ud130\ub9c1\uc744 \uac70\uccd0\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubb34\uc5b8\uac00 \uc218\uc815\ud558\ub824 \ud560 \ub54c\ub294 \uba3c\uc800 \uc218\uc815\ud558\uae30 \uc27d\uac8c \uc815\ub3c8\ud558\uace0 \uadf8\ub7f0 \ub2e4\uc74c\uc5d0 \uc218\uc815\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc624\ub798-\uac78\ub9ac\ub294-\ub9ac\ud329\ud130\ub9c1"},"\uc624\ub798 \uac78\ub9ac\ub294 \ub9ac\ud329\ud130\ub9c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \ub9ac\ud329\ud130\ub9c1\uc740 \uba87 \ubd84 \uc548\uc5d0 \ub05d\ub0a9\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ud300 \uc804\uccb4\uac00 \ub2ec\ub824\ub4e4\uc5b4\ub3c4 \uba87 \uc8fc\ub294 \uac78\ub9ac\ub294 \ub300\uaddc\ubaa8 \ub9ac\ud329\ud130\ub9c1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc, \ud300 \uc804\uccb4\uac00 \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\ub294 \uac83\uc740 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77c\ubd80\uc758 \uc0ac\ub78c\uc774 \uc870\uae08\uc529 \ud574\uacb0\ud574\uac00\ub294 \ud3b8\uc774 \ud6a8\uacfc\uc801\uc77c \ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc740 \ucf54\ub4dc\ub97c \uae68\ub728\ub9ac\uc9c0 \uc54a\ub294 \uc7a5\uc810\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud56d\uc0c1 \uc62c\ubc14\ub974\uac8c \ub3d9\uc791\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ucf54\ub4dc-\ub9ac\ubdf0\uc5d0-\ub9ac\ud329\ud130\ub9c1-\ud65c\uc6a9\ud558\uae30"},"\ucf54\ub4dc \ub9ac\ubdf0\uc5d0 \ub9ac\ud329\ud130\ub9c1 \ud65c\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ub9ac\ubdf0\ub97c \uc815\uae30\uc801\uc73c\ub85c \uc218\ud589\ud558\ub294 \uc870\uc9c1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ub9ac\ubdf0\ub294 \uac1c\ubc1c\ud300 \uc804\uccb4\uc5d0 \uc9c0\uc2dd\uc744 \uc804\ud30c\ud558\ub294 \ub370 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc740 \ub2e4\ub978 \uc774\uc758 \ucf54\ub4dc\ub97c \ub9ac\ubdf0\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc740 \ucf54\ub4dc \ub9ac\ubdf0\uc758 \uacb0\uacfc\ub97c \ub354 \uad6c\uccb4\uc801\uc73c\ub85c \ub3c4\ucd9c\ud558\ub294 \ub370\uc5d0 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ubc29\ubc95 \uc8fd \ub300\ud45c\uc801\uc778 \uc608\uc2dc\uac00 ",(0,a.kt)("strong",{parentName:"li"},"\uc9dd \ud504\ub85c\uadf8\ub798\ubc0d(pair programming)"),"\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub9ac\ud329\ud130\ub9c1\uc744-\ud558\uba74-\uc548\ub418\ub294-\uacbd\uc6b0"},"\ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uba74 \uc548\ub418\ub294 \uacbd\uc6b0."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uc800\ubd84\ud55c \ucf54\ub4dc\ub97c \ubc1c\uacac\ud574\ub3c4 \uc218\uc815\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\uba74 \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\ud558\ub294 \uac83\ubcf4\ub2e4 \ucc98\uc74c\ubd80\ud130 \uc0c8\ub85c \uc791\uc131\ud558\uae30 \uc26c\uc6b8 \ub54c\ub294 \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. (\ub2e4\ub9cc, \uc774\ub97c \ud310\ub2e8\ud558\uae30\ub294 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.)")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud130\ub9c1-\uc2dc-\uace0\ub824\ud560-\ubb38\uc81c"},"\ub9ac\ud329\ud130\ub9c1 \uc2dc \uace0\ub824\ud560 \ubb38\uc81c"),(0,a.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc740 \uc5ec\ub7ec \ubb38\uc81c\uac00 \uc0dd\uae30\uace0 \uc5b4\ub5bb\uac8c \ub300\ucc98\ud560 \uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc0c8-\uae30\ub2a5-\uac1c\ubc1c-\uc18d\ub3c4-\uc800\ud558"},"\uc0c8 \uae30\ub2a5 \uac1c\ubc1c \uc18d\ub3c4 \uc800\ud558"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ub9ac\ud329\ud130\ub9c1\uc758 \ubaa9\ud45c\ub294 \uad81\uadf9\uc801\uc778 \ubaa9\uc801\uc740 \uac1c\ubc1c \uc18d\ub3c4\ub97c \ub192\uc774\ub294 \ub370 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub354 \uc801\uc740 \ub178\ub825\uc73c\ub85c \ub354 \ub9ce\uc740 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\ub294 \uac83\ub3c4 \uc0c1\ud669\uc5d0 \ub9de\uac8c \uc870\uc728\ud574\uc57c\ud569\ub2c8\ub2e4. \uae30\ub2a5 \ucd94\uac00\uc640 \ub9ac\ud329\ud130\ub9c1 \uc911 \ubb34\uc5c7\uc744 \uba3c\uc800\ud560\uc9c0 \uace0\ubbfc\uc774 \ub420 \uc218 \uc788\ub294\ub370 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ub9ac\ud329\ud130\ub9c1\uc744 \uba3c\uc800 \ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc740 \ud074\ub9b0\ucf54\ub4dc\ub098 \ubc14\ub78c\uc9c1\ud55c \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \uc2b5\uad00\uacfc \ub2e4\ub985\ub2c8\ub2e4. \uc989, \ucf54\ub4dc \ubca0\uc774\uc2a4\ub97c \uc774\uc058\uac8c \ud558\ub294 \uac83\uc774 \ubaa9\ud45c\uac00 \uc544\ub2c8\ub77c \uacbd\uc81c\uc801 \uc774\uc720\ub85c \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uac1c\ubc1c \uae30\uac04\uc744 \uc904\uc774\uace0, \uae30\ub2a5 \ucd94\uac00 \uc2dc\uac04\uacfc \ubc84\uadf8 \uc218\uc815 \uc2dc\uac04\uc744 \uc904\uc774\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ucf54\ub4dc-\uc18c\uc720\uad8c"},"\ucf54\ub4dc \uc18c\uc720\uad8c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uc18c\uc720\uad8c\uc744 \uc791\uc740 \ub2e8\uc704\ub85c \ub098\ub220 \uad00\ub9ac\ud558\uba74 \ub9ac\ud329\ud130\ub9c1\uc5d0 \uc77c\ubd80 \ubc29\ud574\uac00 \ub429\ub2c8\ub2e4. (\ub2e4\ub9cc \ud560\uc218\ub294 \uc788\uc2b5\ub2c8\ub2e4.)")),(0,a.kt)("h3",{id:"\ube0c\ub79c\uce58"},"\ube0c\ub79c\uce58"),(0,a.kt)("p",null,"\ud754\ud788 \uc0ac\uc6a9\ub418\ub294 \ud300 \ub2e8\uc704 \uc791\uc5c5 \ubc29\uc2dd\uc740 \ud300\uc6d0 \ub9c8\ub2e4 \ucf54\ub4dc \ubca0\uc774\uc2a4\uc758 \ube0c\ub79c\uce58\ub97c \ud558\ub098\uc529 \ub9e1\uc544\uc11c \uc791\uc5c5\ud558\ub2e4\uac00 \uacb0\uacfc\ubb3c\uc774 \uc5b4\ub290 \uc815\ub3c4 \uc313\uc774\uba74 \ub9c8\uc2a4\ud130 \ube0c\ub79c\uce58\uc5d0 \ud1b5\ud569\ud574\uc11c \ub2e4\ub978 \ud300\uc6d0\uacfc \uacf5\uc720\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub294 \ub2e8\uc810\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd \ube0c\ub79c\uce58 \uc791\uc5c5 \uae30\uac04\uc774 \uae38\uc5b4\uc9c8\uc218\ub85d \uc791\uc5c5 \uacb0\uacfc\ub97c \ub9c8\uc2a4\ud130\ub85c \ud1b5\ud569\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud638\ucd9c\uacfc \ud568\uc218\uba85 \ubcc0\uacbd\uc774 \ub2e4\ub978 \ube0c\ub79c\uce58\uc5d0\uc11c \ud569\uce58\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc9c0\uc18d\uc801 \ud1b5\ud569(CI, Continuous Integration) \ub610\ub294 \ud2b8\ub801\ud06c \uae30\ubc18 \uac1c\ubc1c(TBD, Trunk-Based Development)"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud300\uc6d0\uc774 \ud558\ub8e8\uc5d0 \ucd5c\uc18c \ud55c \ubc88\uc740 \ub9c8\uc2a4\ud130\uc640 \ud1b5\ud569\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc2a4\ud130\ub97c \ud56d\uc0c1 \uac74\uac15\ud558\uac8c \uc720\uc9c0\ud574\uc57c\ud558\uace0, \uae30\ub2a5\uc744 \uc798\uac1c \ucabc\uac1c\ub294 \ubc29\ubc95, \uac01 \uae30\ub2a5\uc744 \ub04c \uc218 \uc788\ub294 \uae30\ub2a5 \ud50c\ub798\uadf8\ub97c \uc801\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uacfc \uad81\ud569\uc774 \uc544\uc8fc \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud569\uce5c \uac83\uc740 ",(0,a.kt)("strong",{parentName:"li"},"\uc775\uc2a4\ud2b8\ub9bc \ud504\ub85c\uadf8\ub798\ubc0d(XP, eXtreme Programming)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud305"},"\ud14c\uc2a4\ud305"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc758 \ub450\ub4dc\ub7ec\uc9c4 \ud2b9\uc9d5\uc740 \ud504\ub85c\uadf8\ub7a8\uc758 \uac89\ubcf4\uae30 \ub3d9\uc791\uc740 \ub611\uac19\uc774 \uc720\uc9c0\ub418\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c \ud575\uc2ec\uc740 \uc624\ub958\ub97c \ube60\ub974\uac8c \uc7a1\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc790\ub3d9 \ub9ac\ud329\ud130\ub9c1 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud55c\ub2e4\uba74 \ud14c\uc2a4\ud2b8\ub97c \uc548\ud574\ub3c4 \uc548\uc804\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub808\uac70\uc2dc-\ucf54\ub4dc"},"\ub808\uac70\uc2dc \ucf54\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub808\uac70\uc2dc \ucf54\ub4dc\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ub9e4\uc6b0 \ubcf5\uc7a1\ud558\uace0 \ud14c\uc2a4\ud2b8\ub3c4 \uc81c\ub300\ub85c \uac16\ucdb0\uc9c0\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub808\uac70\uc2dc \uc2dc\uc2a4\ud15c\uc744 \ud30c\uc545\ud560 \ub54c \ub9ac\ud329\ud130\ub9c1\uc740 \uad49\uc7a5\ud788 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c \uc88b\uc740 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 \ud14c\uc2a4\ud2b8 \ubcf4\uac15\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc \ud14c\uc2a4\ud2b8\ub9cc\uc73c\ub85c \ub808\uac70\uc2dc \ucf54\ub4dc\ub97c \uc544\ub984\ub2e4\uc6b4 \ucf54\ub4dc\ub85c \ubc14\uafc0 \uc218 \uc5c6\uc73c\ubbc0\ub85c, \uc870\uae08\uc529 \uc790\uc8fc \uac1c\uc120\ud558\ub294 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucee4\ub2e4\ub780 \ubcc0\uacbd\ub4e4\uc744 \uc27d\uac8c \uc870\ud569\ud558\uace0 \ub2e4\ub8f0 \uc218 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ub370\uc774\ud130 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud558\uace0, \uc811\uadfc \ucf54\ub4dc\uc640 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8\uc5d0 \ub300\ud55c \uad6c\uc870\uc801 \ubcc0\uacbd\uc744 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \ucc98\ub9ac\ud558\uac8c\ub054 \ud1b5\ud569\ud558\ub294 \ub370 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub2e4\ub978 \ubc84\uc804\uc73c\ub85c \uc774\uc804\ud560 \ub54c\ub9c8\ub2e4, \ud604\uc7ac \ubc84\uc804\uc5d0\uc11c \uc6d0\ud558\ub294 \ubc84\uc804 \uc0ac\uc774\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc804\uccb4 \ubcc0\uacbd \uacfc\uc815\uc744 \uc791\uace0 \ub3c5\ub9bd\ub41c \ub2e8\uacc4\ub85c \ucabc\uac1c\ub294 \uac83\uc774 \ud575\uc2ec\uc774\uba70, \ud2b9\ud788 \uc774\ub97c \ub2e8\uacc4\ubcc4\ub85c \ub9b4\ub9ac\uc2a4 \ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. (\ub418\ub3cc\ub9ac\uae30 \ub9e4\uc6b0 \uc27d\uc2b5\ub2c8\ub2e4.)")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-\uc544\ud0a4\ud14d\ucc98-\uc560\uadf8\ub2c8yagni"},"\ub9ac\ud329\ud1a0\ub9c1, \uc544\ud0a4\ud14d\ucc98, \uc560\uadf8\ub2c8(YAGNI)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\ub97c \ubc14\ub77c\ubcf4\ub294 \uad00\uc810\uc744 \ubc14\uafb8\uc5b4 \ub193\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc544\ud0a4\ud14d\ucc98 \uba74\uc73c\ub85c \ubcf4\uac8c \ub418\uba74, \uc2e4\uc9c8\uc801\uc778 \ud6a8\uacfc\ub294 \uc694\uad6c\uc0ac\ud56d \ubcc0\ud654\uc5d0 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ub300\uc751\ud558\ub3c4\ub85d \ucf54\ub4dc \ubca0\uc774\uc2a4\ub97c \uc798 \uc124\uacc4 \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud5a5\ud6c4 \ubcc0\uacbd\uc5d0 \uc720\uc5f0\ud558\uac8c \ub300\ucc98\ud560 \uc218 \uc788\ub294 \uc720\uc5f0\uc131 \uba54\ucee4\ub2c8\uc998\uc744 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc5d0 \uc2ec\uc5b4\ub450\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \uc774 \uacbd\uc6b0\ub294 \ub9ac\ud329\ud130\ub9c1\uc744 \ubbf8\ub904\uc11c \ub098\uc911\uc5d0 \ud6e8\uc52c \ud798\ub4e4\uc5b4\uc9c4\ub2e4\ub294 \ud655\uc2e0\uc774 \ub4e4\ub54c\ub9cc \uc801\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uac1c \ubcc0\uc218\ub97c \ucd94\uac00\ud574\uc57c\ud560 \uc2dc\uc810\uc774 \uc624\uba74 ",(0,a.kt)("strong",{parentName:"li"},"\ud568\uc218 \ub9e4\uac1c\ubcc0\uc218\ud654"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub7f0 \uc124\uacc4\ub97c \uac04\uacb0\ud55c \uc124\uacc4(simple design), \uc810\uc9c4\uc801 \uc124\uacc4(incremental design), ",(0,a.kt)("strong",{parentName:"p"},"YAGNI(\uc5d0\uadf8\ub2c8, you aren't going to need it)")," \ub4f1\uc73c\ub85c \ubd80\ub985\ub2c8\ub2e4. \uc774\ub294 \uc544\ud0a4\ud14d\ucc98\uc640 \uc124\uacc4\ub97c \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\uc5d0 \ub179\uc774\ub294 \ubc29\uc2dd\uc774\uba70, \ub9ac\ud329\ud130\ub9c1\uc744 \ud1b5\ud574\uc11c\uc57c\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uc124\uacc4\ub294 \ub354 \ubc1c\uc804\ud574 \uc9c4\ud654\ud615 \uc544\ud0a4\ud14d\ucc98\ub85c \ubcc0\uacbd\ub418\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc9c4\ud654\ud615 \uc544\ud0a4\ud14d\ucc98\ub294 \uc2dc\uac04\uc744 \ub450\uace0 \ubc18\ubcf5\ud574 \ub0b4\ub9b4 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc744 \ud65c\uc6a9\ud558\ub294 \ud328\ud134\uacfc \uc2e4\ucc9c\ubc95\uc744 \ucd94\uad6c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1\uacfc-\uc18c\ud504\ud2b8\uc6e8\uc5b4-\uac1c\ubc1c-\ud504\ub85c\uc138\uc2a4"},"\ub9ac\ud329\ud1a0\ub9c1\uacfc \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4"),(0,a.kt)("p",null,"XP\uc758 \ub450\ub4dc\ub7ec\uc9c4 \ud2b9\uc9d5\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc9c0\uc18d\uc801 \ud1b5\ud569, \uc790\uac00 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc, \ub9ac\ud329\ud130\ub9c1")," \ub4f1\uc758 \uac1c\uc131\uc774 \uac15\ud558\uba70 \uc0c1\ud638 \uc758\uc874\ud558\ub294 \uae30\ubc95\ub4e4\uc744 \ud558\ub098\ub85c \ubb36\uc740 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4. \uc774\ub54c ",(0,a.kt)("strong",{parentName:"p"},"\uc790\uac00 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc640 \ub9ac\ud329\ud130\ub9c1\uc744 \ubb36\uc5b4 \ud14c\uc2a4\ud2b8 \uc8fc\ub3c4 \uac1c\ubc1c(TDD, Test-Driven Development)")," \ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc758 \ud1a0\ub300\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc790\uac00 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,a.kt)("li",{parentName:"ol"},"\uc9c0\uc18d\uc801 \ud1b5\ud569"),(0,a.kt)("li",{parentName:"ol"},"\ub9ac\ud329\ud130\ub9c1")),(0,a.kt)("p",null,"\uc704 \uc138\uac00\uc9c0 \ubc29\ubc95\uc744 \ud1b5\ud574 YAGNI \uc124\uacc4 \ubc29\uc2dd\uc73c\ub85c \uac1c\ubc1c\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ac\ud329\ud130\ub9c1\uacfc YAGNI\ub294 \uc11c\ub85c\uc5d0\uac8c \uae0d\uc815\uc801\uc778 \uc601\ud5a5\uc744 \uc90d\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc694\uad6c\uc0ac\ud56d \ubcc0\ud654\uc5d0 \uc7ac\ube60\ub974\uac8c \ub300\uc751\ud558\uace0 \uc548\uc815\uc801\uc778 \uc120\uc21c\ud658 \uad6c\uc870\ub97c \ucf54\ub4dc\ubca0\uc774\uc2a4\uc5d0 \uc2ec\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud130\ub9c1\uacfc-\uc131\ub2a5"},"\ub9ac\ud329\ud130\ub9c1\uacfc \uc131\ub2a5"),(0,a.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uba74 \ud504\ub85c\uadf8\ub7a8 \uc131\ub2a5\uc774 \ub290\ub824\uc9c8\uae4c\ubd10 \uac71\uc815\ud558\ub294 \uc0ac\ub78c\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. \uc9c1\uad00\uc801\uc778 \uc124\uacc4\uc640 \uc131\ub2a5\uc740 \uc911\uc694\ud55c \uc8fc\uc81c\uc774\ub098, \ub300\ubd80\ubd84\uc758 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc9c1\uad00\uc801\uc778 \uc124\uacc4"),"\uac00 \uc911\uc694\ud569\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 \uc9c1\uad00\uc801\uc778 \uc124\uacc4\uac00 \uc774\ud6c4 \uc131\ub2a5 \ud29c\ub2dd\uc5d0 \ub354 \uc26c\uc6b4 \uc7a5\uc810\uc744 \ub4e4\uace0 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ube60\ub978 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc740 \ud06c\uac8c ",(0,a.kt)("strong",{parentName:"p"},"\uc138\uac00\uc9c0"),"\ub97c \uc608\uc2dc\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uac04 \uc608\uc0b0 \ubd84\ubc30(time budgeting)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc124\uacc4\ub97c \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub098\ub220 \ucef4\ud3ec\ub10c\ud2b8\ub9c8\ub2e4 \uc790\uc6d0\uacfc \uc608\uc0b0\uc744 \ud560\ub2f9\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ub04a\uc784 \uc5c6\uc774 \uad00\uc2ec\uc744 \uae30\uc6b8\uc774\ub294 \uac83",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc131\ub2a5\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud55c \ucd5c\uc801\ud654\uac00 \ud504\ub85c\uadf8\ub7a8 \uc804\ubc18\uc5d0 \ud37c\uc9c0\ub098 \ub2e4\ub9cc, \ucef4\ud30c\uc77c\ub7ec\ub098 \ud558\ub4dc\uc6e8\uc5b4 \ub3d9\uc791\uc744 \uc774\ud574\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0\ub3c4 \ub9ce\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc131\ub2a5 \ucd5c\uc801\ud654\uc5d0 \ub3cc\uc785\uc804\uae4c\uc9c0\ub294 \uc131\ub2a5\uc5d0 \uc2e0\uacbd\uc744 \uc4f0\uc9c0 \uc54a\uace0, \uc131\ub2a5 \ucd5c\uc801\ud654 \ub2e8\uacc4\uac00 \ub418\uba74 \ud504\ub85c\uadf8\ub7a8\uc744 \ud29c\ub2dd\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uc2dc\uac04\uacfc \uacf5\uac04\uc744 \ub9ce\uc774 \uc7a1\uc544\uba39\ub294 \uc9c0\uc810\uc740 \ud55c \uacf3\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ud29c\ub2dd\uc5d0 \ud22c\uc785\ud560 \uc2dc\uac04\uc744 \ubc8c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc774 \uc798 \ub418\uc5b4 \uc788\ub294 \ud504\ub85c\uadf8\ub7a8\uc740 \uc131\ub2a5\uc744 \ub354 \uc138\ubc00\ud558\uac8c \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9ac\ud329\ud130\ub9c1-\uc790\ub3d9\ud654"},"\ub9ac\ud329\ud130\ub9c1 \uc790\ub3d9\ud654"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc88b\uc740 IDE\ub294 \uc790\ub3d9 \ub9ac\ud329\ud130\ub9c1\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. (Intellij\ub098 \uc774\ud074\ub9bd\uc2a4)")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.com/"},"Refactoring Site"))),(0,a.kt)("h3",{id:"\ucd94\ucc9c-\ucc45-\uc790\ub8cc"},"\ucd94\ucc9c \ucc45 \uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub514\uc790\uc778 \ud328\ud134, GoF"),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \uc6cc\ud06c\ubd81"),(0,a.kt)("li",{parentName:"ul"},"\ud328\ud134\uc744 \ud65c\uc6a9\ud55c \ub9ac\ud329\ud130\ub9c1"),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\ub808\uac70\uc2dc \ucf54\ub4dc \ud65c\uc6a9 \uc804\ub7b5"),(0,a.kt)("li",{parentName:"ul"},"Refactoring: Ruby Edition")))}m.isMDXComponent=!0}}]);