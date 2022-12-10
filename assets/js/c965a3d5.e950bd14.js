"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[9127],{3905:function(t,e,n){n.d(e,{Zo:function(){return N},kt:function(){return O}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},N=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,N=i(t,["components","mdxType","originalType","parentName"]),d=p(n),O=l,m=d["".concat(o,".").concat(O)]||d[O]||c[O]||a;return n?r.createElement(m,u(u({ref:e},N),{},{components:n})):r.createElement(m,u({ref:e},N))}));function O(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,u[1]=i;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6539:function(t,e,n){n.r(e),n.d(e,{default:function(){return N},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return o}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u={sidebar_position:9},i={unversionedId:"dev/ddd-start/ch9",id:"dev/ddd-start/ch9",isDocsHomePage:!1,title:"9. \ub3c4\uba54\uc778 \ubaa8\ub378\uacfc BOUNDED CONTEXT",description:"\ub3c4\uba54\uc778 \ubaa8\ub378\uacfc \uacbd\uacc4",source:"@site/docs/dev/ddd-start/ch9.md",sourceDirName:"dev/ddd-start",slug:"/dev/ddd-start/ch9",permalink:"/til/docs/dev/ddd-start/ch9",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/ddd-start/ch9.md",version:"current",lastUpdatedAt:1670657990,formattedLastUpdatedAt:"12/10/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. \uc560\uadf8\ub9ac\uac70\ud2b8 \ud2b8\ub79c\uc7ad\uc158 \uad00\ub9ac",permalink:"/til/docs/dev/ddd-start/ch8"},next:{title:"10. \uc774\ubca4\ud2b8",permalink:"/til/docs/dev/ddd-start/ch10"}},o=[{value:"\ub3c4\uba54\uc778 \ubaa8\ub378\uacfc \uacbd\uacc4",id:"\ub3c4\uba54\uc778-\ubaa8\ub378\uacfc-\uacbd\uacc4",children:[]},{value:"BOUNDED CONTEXT",id:"bounded-context",children:[]},{value:"BOUNDED CONTEXT\uc758 \uad6c\ud604",id:"bounded-context\uc758-\uad6c\ud604",children:[]},{value:"BOUNDED CONTEXT\uac04 \ud1b5\ud569",id:"bounded-context\uac04-\ud1b5\ud569",children:[]},{value:"BOUNDED CONTEXT\uac04 \uad00\uacc4",id:"bounded-context\uac04-\uad00\uacc4",children:[]},{value:"\ucee8\ud14d\uc2a4\ud2b8 \ub9f5",id:"\ucee8\ud14d\uc2a4\ud2b8-\ub9f5",children:[]}],p={toc:o};function N(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub3c4\uba54\uc778-\ubaa8\ub378\uacfc-\uacbd\uacc4"},"\ub3c4\uba54\uc778 \ubaa8\ub378\uacfc \uacbd\uacc4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucc98\uc74c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \ub9cc\ub4e4 \ub54c \ube60\uc9c0\uae30 \uc26c\uc6b4 \ud568\uc815\uc774 \ub3c4\uba54\uc778\uc744 \uc644\ubcbd\ud558\uac8c \ud45c\ud604\ud558\ub294 \ub2e8\uc77c \ubaa8\ub378\uc744 \ub9cc\ub4dc\ub294 \uc2dc\ub3c4\ub97c \ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud55c \uac1c\uc758 \ubaa8\ub378\ub85c \uc5ec\ub7ec \ud558\uc704 \ub3c4\uba54\uc778\uc744 \ubaa8\ub450 \ud45c\ud604\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uac8c \ub418\uba74 \ubaa8\ub4e0 \ud558\uc704 \ub3c4\uba54\uc778\uc5d0 \ub9de\uc9c0 \uc54a\ub294 \ubaa8\ub378\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ub17c\ub9ac\uc801\uc73c\ub85c \uac19\uc740 \uc874\uc7ac\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \ud558\uc704 \ub3c4\uba54\uc778\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\ub9c8\ub2e4 \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uc62c\ubc14\ub978 \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uac1c\ubc1c\ud558\ub824\uba74 \ud558\uc704 \ub3c4\uba54\uc778\ub9c8\ub2e4 \ubaa8\ub378\uc744 \ub9cc\ub4e4\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc740 \ud2b9\uc815\ud55c \ucee8\ud14d\uc2a4\ud2b8(\ubb38\ub9e5)\ud558\uc5d0\uc11c \uc644\uc804\ud55c \uc758\ubbf8\ub97c \uac16\uc2b5\ub2c8\ub2e4. \uc774\ub54c\uc758 \uacbd\uacc4\ub97c \uac16\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c DDD\uc5d0\uc11c\ub294 BOUNDED CONTEXT \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"bounded-context"},"BOUNDED CONTEXT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \ubaa8\ub378\uc758 \uacbd\uacc4\ub97c \uacb0\uc815\ud558\uba70 \ud55c \uac1c\uc758 BOUNDED CONTEXT\ub294 \ub17c\ub9ac\uc801\uc73c\ub85c \ud55c \uac1c\uc758 \ubaa8\ub378\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \uc6a9\uc5b4\ub97c \uae30\uc900\uc73c\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ubb3c\ub9ac\uc801 \uc2dc\uc2a4\ud15c\uc73c\ub85c \ub3c4\uba54\uc778 \ubaa8\ub378\uc740 \uc774 BOUNDED CONTEXT \uc548\uc5d0\uc11c \ub3c4\uba54\uc778\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\uc0c1\uc801\uc73c\ub85c \ud558\uc704 \ub3c4\uba54\uc778\uacfc BOUNDED CONTEXT\uac00 \uc77c\ub300\uc77c \uad00\uacc4\ub97c \uac00\uc9c0\uba74 \uc88b\uaca0\uc9c0\ub9cc \ud604\uc2e4\uc740 \uadf8\ub807\uc9c0 \uc54a\uc744 \ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud558\uc704 \ub3c4\uba54\uc778\uc744 \ud558\ub098\uc758 BOUNDED CONTEXT\uc5d0\uc11c \uac1c\ubc1c\ud560 \ub300 \uc8fc\uc758\ud560 \uc810\uc740 \ud558\uc704 \ub3c4\uba54\uc778 \uc758 \ubaa8\ub378\uc774 \ub4a4\uc11e\uc774\uc9c0 \ud558\ub3c4\ub85d \ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uad6c\ubd84\ud558\ub294 \uacbd\uacc4\uac00 \ub418\uae30 \ub54c\ubb38\uc5d0 BOUNDED CONTEXT\ub294 \uad6c\ud604\ud558\ub294 \ud558\uc704 \ub3c4\uba54\uc778\uc5d0 \uc54c\ub9de\uc740 \ubaa8\ub378\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"bounded-context\uc758-\uad6c\ud604"},"BOUNDED CONTEXT\uc758 \uad6c\ud604"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \ub3c4\uba54\uc778 \ubaa8\ub378\ubfd0\ub9cc \uc544\ub2c8\ub77c, \ub3c4\uba54\uc778 \uae30\ub2a5\uc744 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud558\ub294 \ud544\uc694\ud55c \ud45c\ud604 \uc601\uc5ed, \uc751\uc6a9 \uc11c\ube44\uc2a4, \uc778\ud504\ub77c \uc601\uc5ed \ub4f1\uc744 \ubaa8\ub450 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/159478300-47648192-ea1c-46d2-9635-a954e8b1fa9b.png",alt:"BOUNDED CONTEXT"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \ubc18\ub4dc\uc2dc \ub3c4\uba54\uc778 \uc8fc\ub3c4\ub85c \uac1c\ubc1c\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/159478979-68ad9157-0a92-4f51-b218-1d615c471009.png",alt:"BOUNDED CONTEXT\ub294 \ub3c4\uba54\uc778\uc5d0 \uc54c\ub9de\ub294 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4-DAO \uc0ac\uc6a9\ud558\uba74 \ub3c4\uba54\uc778 \uae30\ub2a5\uc774 \uc11c\ube44\uc2a4\uc5d0 \ud769\uc5b4\uc9c0\uac8c \ub418\uc9c0\ub9cc \ub3c4\uba54\uc778 \uae30\ub2a5 \uc790\uccb4\uac00 \ub2e8\uc21c\ud558\uba74 \uc11c\ube44\uc2a4-DAO\ub85c \uad6c\uc131\ub41c CRUD \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\ub3c4 \ucf54\ub4dc\ub97c \uc720\uc9c0\ubcf4\uc218\ud558\ub294\ub370 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/159479376-500e3456-298e-4b53-82d4-af3e9b8c48cb.png",alt:"BOUNDED CONTEXT\uc5d0 CQRS\ub97c \uc801\uc6a9\ud55c \uc608"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac01 BOUNDED CONTEXT\ub294 \uc11c\ub85c \ub2e4\ub978 \uad6c\ud604 \uae30\uc220\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\uac00 \ubc18\ub4dc\uc2dc \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc9c0\ub294 UI\ub97c \uac00\uc838\uc57c\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"bounded-context\uac04-\ud1b5\ud569"},"BOUNDED CONTEXT\uac04 \ud1b5\ud569"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub54c\ub85c\ub294 BOUNDED CONTEXT\uac04 \ud1b5\ud569\uc774 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/159481370-4d50619f-0609-45f0-9846-9a4508659a2f.png",alt:"BOUNDED CONTEXT\uac04 \ud1b5\ud569 \ud544\uc694\uc131"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ex. \uc0ac\uc6a9\uc790\uac00 \uc81c\ud488 \uc0c1\uc138 \ud398\uc774\uc9c0\ub97c \ubcfc \ub54c, \ubcf4\uace0 \uc788\ub294 \uc0c1\ud488\uacfc \uc720\uc0ac\ud55c \uc0c1\ud488 \ubaa9\ub85d\uc744 \ud558\ub2e8\uc5d0 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub294 \uc778\ud504\ub77c\uc2a4\ud2b8\ub7ed\ucc98 \uc601\uc5ed\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"REST API\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \ub450 BOUNDED CONTEXT\ub97c \uc9c1\uc811 \ud1b5\ud569\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ub3c4\uba54\uc778 \uad00\uc810\uc5d0\uc11c \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\ub290\ub0d0\uc5d0 \ub530\ub77c \ub450 BOUNDED CONTEXT\ub97c \uc9c1\uc811 \ud1b5\ud569\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc640 BOUNDED CONTEXT")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc758 \ud2b9\uc9d5\uc740 BOUNDED CONTEXT\uc640 \uc798 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac01 BOUNDED CONTEXT\ub294 \ubaa8\ub378\uc758 \uacbd\uacc4\ub97c \ud615\uc131\ud558\ub294\ub370, BOUNDED CONTEXT\ub97c \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub85c \uad6c\ud604\ud558\uba74 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ucee8\ud14d\uc2a4\ud2b8\ubcc4\ub85c \ubaa8\ub378\uc774 \ubd84\ub9ac\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubcc4\ub3c4 \ud504\ub85c\uc138\uc2a4\ub85c \uac1c\ubc1c\ud55c BOUNDED CONTEXT\ub294 \ub3c5\ub9bd\uc801\uc73c\ub85c \ubc30\ud3ec\ud558\uace0 \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \ud655\uc7a5\ud558\uac8c \ub418\ub294\ub370 \uc774 \ub610\ud55c \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc758 \ud2b9\uc9d5\uc785\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"bounded-context\uac04-\uad00\uacc4"},"BOUNDED CONTEXT\uac04 \uad00\uacc4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BOUNDED CONTEXT\ub294 \uc5b4\ub5a4 \uc2dd\uc73c\ub85c \uc5f0\uacb0\ub418\uae30 \ub54c\ubb38\uc5d0 \ub450 BOUNDED CONTEXT\ub294 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \uad00\uacc4\ub97c \ub9fa\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub294 \ud55c\ucabd\uc5d0\uc11c API\ub97c \uc81c\uacf5\ud558\uace0 \ub2e4\ub978 \ud55c\ucabd\uc5d0\uc11c \uadf8 API\ub97c \ud638\ucd9c\ud558\ub294 \uad00\uacc4\uc785\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ud558\ub958(downstream) \ucef4\ud3ec\ub10c\ud2b8\uc778 \uce74\ud0c8\ub85c\uadf8 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc0c1\ub958(upstream) \ucef4\ud3ec\ub10c\ud2b8\uc778 \ucd94\ucc9c \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc81c\uacf5\ud558\ub294 \ub370\uc774\ud130\uc640 \uae30\ub2a5\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0c1\ub958 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc77c\uc885\uc758 \uc11c\ube44\uc2a4 \uacf5\uae09\uc790 \uc5ed\ud560\uc744 \ud558\uba70, \ud558\ub958 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uadf8 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uace0\uac1d \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0c1\ub958 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ubcf4\ud1b5 \ud558\ub958 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc815\uc758\ud558\uace0 \uc774\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc0c1\ub958 \ud300\uc740 \uc5ec\ub7ec \ud558\ub958 \ud300\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \uc218\uc6a9\ud560 \uc218 \uc788\ub294 API\ub97c \ub9cc\ub4e4\uace0 \uc774\ub97c \uc11c\ube44\uc2a4 \ud615\ud0dc\ub85c \uacf5\uac1c\ud574\uc11c \uc11c\ube44\uc2a4\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c\uc758 \uc11c\ube44\uc2a4\ub97c \uacf5\uac1c \ud638\uc2a4\ud2b8 \uc11c\ube44\uc2a4(OPEN HOST SERVICE)\ub77c\uace0 \ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uacf5\uac1c \ud638\uc2a4\ud2b8 \uc11c\ube44\uc2a4\uc758 \ub300\ud45c\uc801\uc778 \uc608\uac00 \uac80\uc0c9\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0c1\ub958 \ucee4\ud3ec\ub10c\ud2b8\uc758 \uc11c\ube44\uc2a4\ub294 \uc0c1\ub958 BOUNDED CONTEXT\uc758 \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \ub530\ub985\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub54c\ub85c\ub294 \ub450 BOUNDED CONTEXT\uac00 \uac19\uc740 \ubaa8\ub378\uc744 \uacf5\uc720\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uacf5\uc720 \ucee4\ub110\uc758 \uc7a5\uc810\uc740 \uc911\ubcf5\uc744 \uc904\uc5ec\uc90d\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9 \uad00\uacc4\ub294 \ub3c5\ub9bd \ubc29\uc2dd(SEPARATE WAY) \uad00\uacc4\uc785\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc11c\ub85c \ud1b5\ud569\ud558\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd \ubc29\uc2dd\uc5d0\uc11c\ub294 \ub450 BOUNDED CONTEXT \uac04\uc758 \ud1b5\ud569\uc740 \uc218\ub3d9\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc218\ub3d9\uc73c\ub85c \ud1b5\ud569\ud558\ub294 \ubc29\uc2dd\uc774 \ub098\uc05c \uac83\uc740 \uc544\ub2c8\ub098, \uaddc\ubaa8\uac00 \ucee4\uc9c8\uc218\ub85d \uc218\ub3d9 \ud1b5\ud569\uc5d0\ub294 \ud55c\uacc4\uac00 \uc788\uc73c\ubbc0\ub85c \uc774\ub97c \ud1b5\ud569\ud574\uc57c\ud569\ub2c8\ub2e4.")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ucee8\ud14d\uc2a4\ud2b8-\ub9f5"},"\ucee8\ud14d\uc2a4\ud2b8 \ub9f5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubcc4 BOUNDED CONTEXT\uc5d0 \ub9e4\ubab0\ub418\uba74 \uc804\uccb4\ub97c \ubcf4\uc9c0 \ubabb\ud560 \ub54c\ub3c4 \uc788\ub294\ub370 \uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \uac83\uc740 \ucee8\ud14d\uc2a4\ud2b8 \ub9f5\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud14d\uc2a4\ud2b8 \ub9f5\uc740 \uc2dc\uc2a4\ud15c\uc758 \uc804\uccb4 \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/159495223-144345d7-8653-4bc4-8baf-7bd9681c6c45.png",alt:"\ucee8\ud14d\uc2a4\ud2b8 \ub9f5"})))}N.isMDXComponent=!0}}]);