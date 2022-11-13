"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2881],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return d}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=m(l),d=r,s=k["".concat(p,".").concat(d)]||k[d]||o[d]||a;return l?n.createElement(s,i(i({ref:t},c),{},{components:l})):n.createElement(s,i({ref:t},c))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},8134:function(e,t,l){l.r(t),l.d(t,{default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i={sidebar_position:15},u={unversionedId:"dev/system-design-interview/ch15",id:"dev/system-design-interview/ch15",isDocsHomePage:!1,title:"15\uc7a5. \uad6c\uae00 \ub4dc\ub77c\uc774\ube0c \uc124\uacc4",description:"- \uc544\ub798\uc758 \ub4dc\ub77c\uc774\ube0c \uc124\uacc4\uc5d0 \ub300\ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \ub0b4\uc6a9\uc744 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch15.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch15",permalink:"/til/docs/dev/system-design-interview/ch15",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch15.md",version:"current",lastUpdatedAt:1668304586,formattedLastUpdatedAt:"11/13/2022",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"14\uc7a5. \uc720\ud29c\ube0c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch14"},next:{title:"1. \ud611\ub825\ud558\ub294 \uac1d\uccb4\ub4e4\uc758 \uacf5\ub3d9\uccb4",permalink:"/til/docs/dev/the-essence-of-object-orientation/ch1"}},p=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uac1c\ub7b5\uc801 \ucd94\uc815\uce58",id:"\uac1c\ub7b5\uc801-\ucd94\uc815\uce58",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"API",id:"api",children:[]},{value:"\ud55c \ub300 \uc11c\ubc84\uc758 \uc81c\uc57d \uadf9\ubcf5",id:"\ud55c-\ub300-\uc11c\ubc84\uc758-\uc81c\uc57d-\uadf9\ubcf5",children:[]},{value:"\ub3d9\uae30\ud654 \ucda9\ub3cc",id:"\ub3d9\uae30\ud654-\ucda9\ub3cc",children:[]},{value:"\uac1c\ub7b5\uc801 \uc124\uacc4\uc548",id:"\uac1c\ub7b5\uc801-\uc124\uacc4\uc548",children:[]}]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\ube14\ub85d \uc800\uc7a5\uc18c \uc11c\ubc84\uc5d0",id:"\ube14\ub85d-\uc800\uc7a5\uc18c-\uc11c\ubc84\uc5d0",children:[]},{value:"\ub192\uc740 \uc77c\uad00\uc131 \uc694\uad6c\uc0ac\ud56d",id:"\ub192\uc740-\uc77c\uad00\uc131-\uc694\uad6c\uc0ac\ud56d",children:[]},{value:"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\uba54\ud0c0\ub370\uc774\ud130-\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[]},{value:"\uc5c5\ub85c\ub4dc \uc808\ucc28",id:"\uc5c5\ub85c\ub4dc-\uc808\ucc28",children:[]},{value:"\ub2e4\uc6b4\ub85c\ub4dc \uc808\ucc28",id:"\ub2e4\uc6b4\ub85c\ub4dc-\uc808\ucc28",children:[]},{value:"\uc54c\ub9bc \uc11c\ube44\uc2a4",id:"\uc54c\ub9bc-\uc11c\ube44\uc2a4",children:[]},{value:"\uc800\uc7a5\uc18c \uacf5\uac04 \uc808\uc57d",id:"\uc800\uc7a5\uc18c-\uacf5\uac04-\uc808\uc57d",children:[]},{value:"\uc7a5\uc560 \ucc98\ub9ac",id:"\uc7a5\uc560-\ucc98\ub9ac",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],m={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ub4dc\ub77c\uc774\ube0c \uc124\uacc4\uc5d0 \ub300\ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \ub0b4\uc6a9\uc744 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uae30\ub2a5 \uc124\uacc4\uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \ucd94\uc0c1\ud654\uac00\ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub2e8\ub9c8\ub81d \ud30c\uc77c \ub3d9\uae30\ud654"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uac31\uc2e0 \uc774\ub825 \uc870\ud68c"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uacf5\uc720"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc774 \ud3b8\uc9d1\ub418\uac70\ub098 \uc0c8\ub86d\uac8c \uacf5\uc720\ub420 \ub54c \uc54c\ub9bc\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \uc0ac\ud56d\uc5d0 \ub300\ud574\uc11c\ub294 \ub17c\uc758\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uad6c\uae00 \ubb38\uc11c \ud3b8\uc9d1 \ubc0f \ud611\uc5c5 \uae30\ub2a5"))),(0,a.kt)("li",{parentName:"ul"},"\uae30\ub2a5\uc801 \uc694\uad6c\uc0ac\ud56d \uc774\uc678, \ube44-\uae30\ub2a5\uc801 \uc694\uad6c\uc0ac\ud56d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc548\uc815\uc131 : \uc800\uc7a5\uc18c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc548\uc815\uc131\uc740 \uc544\uc8fc \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube60\ub978 \ub3d9\uae30\ud654 \uc18d\ub3c4 : \ud30c\uc77c \ub3d9\uae30\ud654\uc5d0 \uc2dc\uac04\uc774 \ub108\ubb34 \ub9ce\uc774 \uac78\ub9ac\uba74 \uc0ac\uc6a9\uc790\ub294 \uc778\ub0b4\uc2ec\uc744 \uc783\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c \ub300\uc5ed\ud3ed : \uc774 \uc81c\ud488\uc774 \ub124\ud2b8\uc6cc\ud06c \ub300\uc5ed\ud3ed\uc744 \ud06c\uac8c \uc4f0\uba74 \uc548\uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc131 : \uc544\ubb34 \ub9ce\uc740 \uc591\uc758 \ud2b8\ub798\ud53d\ub3c4 \ucc98\ub9ac \uac00\ub2a5\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub192\uc740 \uac00\uc6a9\uc131 : \uc77c\ubd80 \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uac70\ub098, \ub290\ub824\uc9c0\uac70\ub098, \ub124\ud2b8\uc6cc\ud06c \uc77c\ubd80\uac00 \ub04a\uaca8\ub3c4 \uc2dc\uc2a4\ud15c\uc740 \uacc4\uc18d \uc0ac\uc6a9 \uac00\ub2a5\ud574\uc57c\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uac1c\ub7b5\uc801-\ucd94\uc815\uce58"},"\uac1c\ub7b5\uc801 \ucd94\uc815\uce58"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac00\uc785 \uc0ac\uc6a9\uc790\ub294 \uc624\ucc9c\ub9cc \uba85\uc774\uace0 \ucc9c\ub9cc \uba85\uc758 DAU \uc0ac\uc6a9\uc790\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc5d0\uac8c 10GB\uc758 \ubb34\ub8cc \uc800\uc7a5\uacf5\uac04 \ud560\ub2f9"),(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uc77c \uac01 \uc0ac\uc6a9\uc790\uac00 \ud3c9\uade0 2\uac1c\uc758 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc77d\uae30:\uc4f0\uae30 \ube44\uc728\uc740 1:1"),(0,a.kt)("li",{parentName:"ul"},"\ud544\uc694\ud55c \uc800\uc7a5\uacf5\uac04 \ucd1d\ub7c9 = 5\ucc9c\ub9cc * 10 GB = 500 \ud398\ud0c0\ubc14\uc774\ud2b8(Petabyte)"),(0,a.kt)("li",{parentName:"ul"},"\uc5c5\ub85c\ub4dc API QPS = 1\ucc9c\ub9cc \uc0ac\uc6a9\uc790 * 2\ud68c \uc5c5\ub85c\ub4dc/24\uc2dc\uac04/3600\ucd08 = \uc57d 240"),(0,a.kt)("li",{parentName:"ul"},"\ucd5c\ub300 QPS = QPS * 2 = 480")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uc5c5\ub85c\ub4dc API ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e8\uc21c \uc5c5\ub85c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"\uc774\uc5b4 \uc62c\ub9ac\uae30"))),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc API"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uac31\uc2e0 \ud788\uc2a4\ud1a0\ub9ac API")),(0,a.kt)("h3",{id:"\ud55c-\ub300-\uc11c\ubc84\uc758-\uc81c\uc57d-\uadf9\ubcf5"},"\ud55c \ub300 \uc11c\ubc84\uc758 \uc81c\uc57d \uadf9\ubcf5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub85c\ub4dc\ubc38\ub7f0\uc11c"),(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uc800\uc7a5\uc18c")),(0,a.kt)("h3",{id:"\ub3d9\uae30\ud654-\ucda9\ub3cc"},"\ub3d9\uae30\ud654 \ucda9\ub3cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc\uc5d0 \uac19\uc740 \ud30c\uc77c\uc774\ub098 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uacbd\uc6b0, \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub97c \ud574\uc18c\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uac1c\ub7b5\uc801-\uc124\uacc4\uc548"},"\uac1c\ub7b5\uc801 \uc124\uacc4\uc548"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192144766-d5ab653d-dc0b-4f24-8be2-892aa55a7cba.png",alt:"\uac1c\ub7b5\uc801 \uc124\uacc4\uc548"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \ub2e8\ub9d0: \uc0ac\uc6a9\uc790\uac00 \uc774\uc6a9\ud558\ub294 \uc6f9\ube0c\ub77c\uc6b0\uc800\ub098 \ubaa8\ubc14\uc77c \uc571 \ub4f1\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8"),(0,a.kt)("li",{parentName:"ul"},"\ube14\ub85d \uc800\uc7a5\uc18c \uc11c\ubc84(block server): \ud30c\uc77c \ube14\ub85d\uc744 \ud074\ub77c\uc6b0\ub4dc \uc800\uc7a5\uc18c\uc5d0 \uc5c5\ub85c\ub4dc\ud558\ub294 \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc \uc800\uc7a5\uc18c"),(0,a.kt)("li",{parentName:"ul"},"\uc544\uce74\uc774\ube59 \uc800\uc7a5\uc18c: \ube44\ud65c\uc131 \ub370\uc774\ud130"),(0,a.kt)("li",{parentName:"ul"},"\ub85c\ub4dc\ubc38\ub7f0\uc11c"),(0,a.kt)("li",{parentName:"ul"},"API \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc11c\ube44\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\uc624\ud504\ub77c\uc778 \uc0ac\uc6a9\uc790 \ubc31\uc5c5 \ud050")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,a.kt)("h3",{id:"\ube14\ub85d-\uc800\uc7a5\uc18c-\uc11c\ubc84\uc5d0"},"\ube14\ub85d \uc800\uc7a5\uc18c \uc11c\ubc84\uc5d0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub378\ud0c0 \ub3d9\uae30\ud654 : \ud30c\uc77c\uc774 \uc218\uc815\ub418\uba74 \uc804\uccb4 \ud30c\uc77c \ub300\uc2e0 \uc218\uc815\uc774 \uc77c\uc5b4\ub09c \ube14\ub85d\ub9cc \ub3d9\uae30\ud654"),(0,a.kt)("li",{parentName:"ul"},"\uc555\ucd95 : \ube14\ub85d \ub2e8\uc704\ub85c \uc555\ucd95\ud574 \ub450\uba74 \ub370\uc774\ud130 \ud06c\ub514\ub97c \ub9ce\uc774 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub192\uc740-\uc77c\uad00\uc131-\uc694\uad6c\uc0ac\ud56d"},"\ub192\uc740 \uc77c\uad00\uc131 \uc694\uad6c\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac15\ud55c \uc77c\uad00\uc131\uc744 \uc9c0\uc6d0\ud574\uc918\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uba54\ud0c0\ub370\uc774\ud130-\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192145004-4e7d2b84-9aa2-4a69-87b8-99502cf00ce6.png",alt:"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4"})),(0,a.kt)("h3",{id:"\uc5c5\ub85c\ub4dc-\uc808\ucc28"},"\uc5c5\ub85c\ub4dc \uc808\ucc28"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192145018-69314438-dc5e-4dee-a253-088a061b8fb9.png",alt:"\uc5c5\ub85c\ub4dc \uc808\ucc28"})),(0,a.kt)("h3",{id:"\ub2e4\uc6b4\ub85c\ub4dc-\uc808\ucc28"},"\ub2e4\uc6b4\ub85c\ub4dc \uc808\ucc28"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192145027-79c9ed66-693b-4ead-ae8c-464978f0c86e.png",alt:"\ub2e4\uc6b4\ub85c\ub4dc \uc808\ucc28"})),(0,a.kt)("h3",{id:"\uc54c\ub9bc-\uc11c\ube44\uc2a4"},"\uc54c\ub9bc \uc11c\ube44\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub450 \uac00\uc9c0 \uc815\ub3c4\uc758 \uc11c\ube44\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub871 \ud3f4\ub9c1(long polling): \ub4dc\ub86d\ubc15\uc2a4\uac00 \uc774 \ubc29\uc2dd\uc744 \ucc44\ud0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \uc18c\ucf13(WebSocket): \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84 \uc0ac\uc774\uc5d0 \uc9c0\uc18d\uc801\uc778 \ud1b5\uc2e0 \ucc44\ub110\uc744 \uc81c\uacf5, \uc591\ubc29\ud5a5 \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uc800\uc7a5\uc18c-\uacf5\uac04-\uc808\uc57d"},"\uc800\uc7a5\uc18c \uacf5\uac04 \uc808\uc57d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc911\ubcf5 \uc81c\uac70"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\ub2a5\uc801 \ubc31\uc5c5 \uc804\ub7b5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud55c\ub3c4 \uc124\uc815"),(0,a.kt)("li",{parentName:"ul"},"\uc911\uc694\ud55c \ubc84\uc804\ub9cc \ubcf4\uad00"))),(0,a.kt)("li",{parentName:"ul"},"\uc790\uc8fc \uc4f0\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub294 \uc544\uce74\uc774\ube59 \uc800\uc7a5\uc18c")),(0,a.kt)("h3",{id:"\uc7a5\uc560-\ucc98\ub9ac"},"\uc7a5\uc560 \ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub85c\ub4dc\ubc38\ub7f0\uc11c \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"\ube14\ub85d \uc800\uc7a5\uc18c \uc11c\ubc84 \uc7a5\uc561"),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc800\uc7a5\uc18c \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"API \uc11c\ubc84 \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"\uba54\ud0c0\ub370\uc774\ud130 \uce90\uc2dc \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"\uba54\ud0c0\ub370\uc774\ud130 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc11c\ube44\uc2a4 \uc7a5\uc560"),(0,a.kt)("li",{parentName:"ul"},"\uc624\ud504\ub77c\uc778 \uc0ac\uc6a9\uc790 \ubc31\uc5c5 \ud050 \uc7a5\uc560")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc124\uacc4\uc5d0\ub294 \ub2f5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \ub354 \uc774\uc57c\uae30\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ube14\ub85d \uc800\uc7a5\uc18c \uc11c\ubc84\uac00 \uc5c6\ub294 \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ul"},"\uc811\uc18d\uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \ub85c\uc9c1\uc744 \uc0c8\ub85c \ubd84\ub9ac")))))}c.isMDXComponent=!0}}]);