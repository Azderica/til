"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2070],{3905:function(e,t,l){l.d(t,{Zo:function(){return k},kt:function(){return d}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),o=m(l),d=r,s=o["".concat(p,".").concat(d)]||o[d]||c[d]||a;return l?n.createElement(s,i(i({ref:t},k),{},{components:l})):n.createElement(s,i({ref:t},k))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=o;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}o.displayName="MDXCreateElement"},9737:function(e,t,l){l.r(t),l.d(t,{default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i={sidebar_position:14},u={unversionedId:"dev/system-design-interview/ch14",id:"dev/system-design-interview/ch14",isDocsHomePage:!1,title:"14\uc7a5. \uc720\ud29c\ube0c \uc124\uacc4",description:"- \uc544\ub798\ub294 \uc720\ud29c\ube0c \uc124\uacc4\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch14.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch14",permalink:"/til/docs/dev/system-design-interview/ch14",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch14.md",version:"current",lastUpdatedAt:1665575495,formattedLastUpdatedAt:"10/12/2022",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"13\uc7a5. \uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131 \uc2dc\uc2a4\ud15c",permalink:"/til/docs/dev/system-design-interview/ch13"},next:{title:"15\uc7a5. \uad6c\uae00 \ub4dc\ub77c\uc774\ube0c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch15"}},p=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815",id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"\ube44\ub514\uc624 \uc5c5\ub85c\ub4dc \uc808\ucc28",id:"\ube44\ub514\uc624-\uc5c5\ub85c\ub4dc-\uc808\ucc28",children:[]},{value:"\ube44\ub514\uc624 \uc2a4\ud2b8\ub9ac\ubc0d \uc808\ucc28",id:"\ube44\ub514\uc624-\uc2a4\ud2b8\ub9ac\ubc0d-\uc808\ucc28",children:[]}]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529",id:"\ube44\ub514\uc624-\ud2b8\ub79c\uc2a4\ucf54\ub529",children:[]},{value:"\uc720\ud5a5 \ube44\uc21c\ud658 \uadf8\ub798\ud504 \ubaa8\ub378",id:"\uc720\ud5a5-\ube44\uc21c\ud658-\uadf8\ub798\ud504-\ubaa8\ub378",children:[]},{value:"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529 \uc544\ud0a4\ud14d\ucc98",id:"\ube44\ub514\uc624-\ud2b8\ub79c\uc2a4\ucf54\ub529-\uc544\ud0a4\ud14d\ucc98",children:[]},{value:"\uc2dc\uc2a4\ud15c \ucd5c\uc801\ud654",id:"\uc2dc\uc2a4\ud15c-\ucd5c\uc801\ud654",children:[]},{value:"\uc624\ub958 \ucc98\ub9ac",id:"\uc624\ub958-\ucc98\ub9ac",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],m={toc:p};function k(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\ub294 \uc720\ud29c\ube0c \uc124\uacc4\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc720\ud29c\ube0c\uc758 2020\ub144 \ud1b5\uacc4\uc790\ub8cc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6d4\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790 \uc218: 2\uc2ed \uc5b5"),(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uc77c \uc7ac\uc0dd\ub418\ub294 \ube44\ub514\uc624 \uc218: 5\uc2ed \uc5b5"),(0,a.kt)("li",{parentName:"ul"},"\ubbf8\uad6d \uc131\uc778 \uac00\uc6b4\ub370 73%\uac00 \uc720\ud29c\ube0c \uc774\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"5\ucc9c\ub9cc \uba85\uc758 \ucc3d\uc791\uc790"),(0,a.kt)("li",{parentName:"ul"},"\uc720\ud29c\ube0c\uc758 \uad11\uace0 \uc218\uc785\uc740 \uc99d\uac00 \uc911"),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc778\ud130\ub137 \ud2b8\ub798\ud53d \uac00\uc6b4\ub370 37%\ub97c \uc720\ud29c\ube0c\uac00 \uc810\uc720"),(0,a.kt)("li",{parentName:"ul"},"80\uac1c\uc758 \uc5b8\uc5b4\ub85c \uc774\uc6a9 \uac00\ub2a5")),(0,a.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc124\uacc4\uc5d0 \ucd08\uc810\uc744 \ub9de\ucda5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ube60\ub978 \ube44\ub514\uc624 \uc5c5\ub85c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"\uc6d0\ud65c\ud55c \ube44\ub514\uc624 \uc7ac\uc0dd"),(0,a.kt)("li",{parentName:"ul"},"\uc7ac\uc0dd \ud488\uc9c8 \uc120\ud0dd \uae30\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"\ub0ae\uc740 \uc778\ud504\ub77c \ube44\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"\ub192\uc740 \uac00\uc6a9\uc131\uacfc \uaddc\ubaa8 \ud655\uc7a5\uc131, \uadf8\ub9ac\uace0 \uc548\uc815\uc131"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud074\ub77c\uc774\uc5b8\ud2b8: \ubaa8\ubc14\uc77c \uc571, \uc6f9\ube0c\ub77c\uc6b0\uc800, \uadf8\ub9ac\uace0 \uc2a4\ub9c8\ud2b8 TV")))),(0,a.kt)("h3",{id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815"},"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc77c\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790(DAU, Daily Activie User) \uc218\ub294 5\ubc31\ub9cc"),(0,a.kt)("li",{parentName:"ul"},"\ud55c \uc0ac\uc6a9\uc790\ub294 \ud558\ub8e8\uc5d0 \ud3c9\uade0 5\uac1c\uc758 \ube44\ub514\uc624\ub97c \uc2dc\uccad"),(0,a.kt)("li",{parentName:"ul"},"10% \uc0ac\uc6a9\uc790\uac00 \ud558\ub8e8\uc5d0 1\ube44\ub514\uc624 \uc5c5\ub85c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \ud3c9\uade0 \ud06c\uae30\ub294 300MB"),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \uc800\uc7a5\uc744 \uc704\ud574 \ub9e4\uc77c \uc0c8\ub85c \uc694\uad6c\ub418\ub294 \uc800\uc7a5\uc6a9\ub7c9 : 5\ubc31\ub9cc ",(0,a.kt)("em",{parentName:"li"}," 10% ")," 300MB = 150TB"),(0,a.kt)("li",{parentName:"ul"},"CDN \ube44\uc6a9(\uc544\ub9c8\uc874 \uc0ac\uc6a9\uc2dc) : 5\ubc31\ub9cc X 5\ube44\ub514\uc624 ",(0,a.kt)("em",{parentName:"li"}," 0.3GB ")," 0.2 = $150,000")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811\uc740 \ubaa8\ub4e0 \uac83\uc744 \ubc11\ubc14\ub2e5\ubd80\ud130 \ub9cc\ub4dc\ub294 \uac83\uacfc\ub294 \uad00\uacc4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc2dc\uac04 \uc548\uc5d0 \uc801\uc808\ud55c \uae30\uc220\uc744 \uace8\ub77c \uc124\uacc4\ub97c \ub9c8\uce58\ub294 \uac83\uc774 \uadf8 \uae30\uad74 \uac01\uac01\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc0c1\uc138\ud788 \uc124\uba85\ud558\ub294 \uac83\ubcf4\ub2e4 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc740 \uc138 \uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e8\ub9d0(client) : \ucef4\ud4e8\ud130, \ubaa8\ubc14\uc77c \ud3f0, \uc2a4\ub9c8\ud2b8 TV\ub97c \ud1b5\ud574 \uc720\ud29c\ube0c \uc2dc\uccad \uac00\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"CDN: \ube44\ub514\uc624\ub294 CDN\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"API \uc11c\ubc84: \ube44\ub514\uc624 \uc2a4\ud2b8\ub9ac\ubc0d\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc694\uccad\uc740 API \uc11c\ubc84\uac00 \ucc98\ub9ac\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ube44\ub514\uc624-\uc5c5\ub85c\ub4dc-\uc808\ucc28"},"\ube44\ub514\uc624 \uc5c5\ub85c\ub4dc \uc808\ucc28"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/191521670-b9b2caad-3d71-46d6-b99a-eb823241df06.png",alt:"\ube44\ub514\uc624 \uc5c5\ub85c\ub4dc \uc808\ucc28"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc2a4\ucf54\ub529 \uc11c\ubc84: \ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529\uc740 \ube44\ub514\uc624 \uc778\ucf54\ub529\uc774\ub77c \ubd80\ub974\ub294 \uc808\ucc28\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc2a4\ucf54\ub529 \ube44\ub514\uc624 \uc800\uc7a5\uc18c: \ud2b8\ub79c\uc2a4\ucf54\ub529\uc774 \uc644\ub8cc\ub41c \ube44\ub514\uc624\ub97c \uc800\uc7a5\ud558\ub294 BLOB \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CDN: \ube44\ub514\uc624\ub97c \uce90\uc2f1\ud558\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc2a4\ucf54\ub529 \uc644\ub8cc \ud050: \ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529 \uc644\ub8cc \uc774\ubca4\ud2b8\ub97c \ubcf4\uad00\ud560 \uba54\uc2dc\uc9c0 \ud050"),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc2a4\ucf54\ub529 \uc644\ub8cc \ud578\ub4e4\ub7ec: \ud2b8\ub79c\uc2a4\ucf54\ub529 \uc644\ub8cc \ud050\uc5d0\uc11c \uc774\ubca4\ud2b8 \ub370\uc774\ud130\ub97c \uaebc\ub0b4\uc5b4 \uba54\ud0c0\ub370\uc774\ud130 \uce90\uc2dc\uc640 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uac31\uc2e0\ud560 \uc791\uc5c5 \uc11c\ubc84\ub4e4\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ube44\ub514\uc624-\uc2a4\ud2b8\ub9ac\ubc0d-\uc808\ucc28"},"\ube44\ub514\uc624 \uc2a4\ud2b8\ub9ac\ubc0d \uc808\ucc28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624\ub294 CDN\uc5d0\uc11c \ubc14\ub85c \uc2a4\ud2b8\ub9ac\ubc0d\ub429\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,a.kt)("h3",{id:"\ube44\ub514\uc624-\ud2b8\ub79c\uc2a4\ucf54\ub529"},"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624\ub97c \ub179\ud654\ud558\uba74 \ub2e8\ub9d0\uc740 \ud574\ub2f9 \ube44\ub514\uc624\ub97c \ud2b9\uc815 \ud3ec\ub9f7\uc73c\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624\uac00 \ub2e4\ub978 \ub2e8\ub9d0\uc5d0\uc11c\ub3c4 \uc21c\uc870\ub86d\uac8c \uc7ac\uc0dd\ub418\ub824\uba74 \ub2e4\ub978 \ub2e8\ub9d0\uacfc \ud638\ud658\ub418\ub294 \ube44\ud2b8\ub808\uc774\ud2b8\uc640 \ud3ec\ub9f7\uc73c\ub85c \uc800\uc7a5\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc720\ub85c \uc911\uc694\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uac00\uacf5\ub418\uc9c0 \uc54a\uc740 \uc6d0\ubcf8 \ube44\ub514\uc624\ub294 \uc800\uc7a5 \uacf5\uac04\uc744 \ub9ce\uc774 \ucc28\uc9c0\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0c1\ub2f9\uc218\uc758 \ub2e8\ub9d0\uacfc \ube0c\ub77c\uc6b0\uc800\ub294 \ud2b9\uc815 \uc885\ub958\uc758 \ube44\ub514\uc624 \ud3ec\ub9f7\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uc5d0\uac8c \ub04a\uae40 \uc5c6\ub294 \uace0\ud654\uc9c8 \ube44\ub514\uc624 \uc7ac\uc0dd\uc744 \ubcf4\uc7a5\ud558\ub824\uba74, \ub124\ud2b8\uc6cc\ud06c \ub300\uc5ed\ud3ed\uc5d0 \ub530\ub77c \uc601\uc0c1\uc758 \ud004\ub9ac\ud2f0\ub97c \ubcf4\ub0b4\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \ub2e8\ub9d0\uc758 \uacbd\uc6b0 \ub124\ud2b8\uc6cc\ud06c\uac00 \uc218\uc2dc\ub85c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uc778\ucf54\ub529 \ud3ec\ub9f7\uc740 \ub300\ubd80\ubd84 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 : \uba54\ud0c0 \ub370\uc774\ud130\ub97c \ub2f4\ub294 \ubc14\uad6c\ub2c8, \ud655\uc7a5\uc790\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub371: \ube44\ub514\uc624 \ud654\uc9c8\uc740 \ubcf4\uc874\ud558\uba70 \ud30c\uc77c \ud06c\uae30\ub97c \uc8fd\uc77c \ubaa9\uc801\uc73c\ub85c \uace0\uc548\ub41c \uc555\ucd95 \ubc0f \uc555\ucd95 \ud574\uc81c \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uc720\ud5a5-\ube44\uc21c\ud658-\uadf8\ub798\ud504-\ubaa8\ub378"},"\uc720\ud5a5 \ube44\uc21c\ud658 \uadf8\ub798\ud504 \ubaa8\ub378"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac01\uae30 \ub2e4\ub978 \uc720\ud615\uc758 \ube44\ub514\uc624 \ud504\ub85c\uc138\uc2f1 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc9c0\uc6d0\ud558\ub294 \ud55c\ud3b8\uc758 \ucc98\ub9ac \uacfc\uc815\uc758 \ubcd1\ub82c\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574\uc11c\ub294 \uc801\uc808\ud55c \uc218\uc900\uc758 \ucd94\uc0c1\ud654\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192068154-26c07638-a446-4c43-9483-98db8e4a8285.png",alt:"\uc791\uc5c5 \ubd84\ub9ac"})),(0,a.kt)("h3",{id:"\ube44\ub514\uc624-\ud2b8\ub79c\uc2a4\ucf54\ub529-\uc544\ud0a4\ud14d\ucc98"},"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529 \uc544\ud0a4\ud14d\ucc98"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/192068595-ff866602-becc-4a7e-98a8-239d1fa9b3e0.png",alt:"\ube44\ub514\uc624 \ud2b8\ub79c\uc2a4\ucf54\ub529 \uc544\ud0a4\ud14d\ucc98"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc804\ucc98\ub9ac\uae30",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \ubd84\ud560"),(0,a.kt)("li",{parentName:"ul"},"DAG \uc0dd\uc131"),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uce90\uc2dc"))),(0,a.kt)("li",{parentName:"ul"},"DAG \uc2a4\ucf00\uc904\ub7ec"),(0,a.kt)("li",{parentName:"ul"},"\uc790\uc6d0 \uad00\ub9ac\uc790",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc138 \uac1c\uc758 \ud050(\uc791\uc5c5 \ud050, \uc791\uc5c5 \uc11c\ubc84 \ud050, \uc2e4\ud589 \ud050)\uc640 \uc791\uc5c5 \uc2a4\ucf00\uc904\ub7ec\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uad00\ub9ac\uc790\ub294 \uc791\uc5c5 \ud050\uc5d0\uc11c \uac00\uc7a5 \ub192\uc740 \uc6b0\uc120\uc21c\uc704\uc758 \uc791\uc5c5\uc744 \uaebc\ub0b4\uace0 \uc791\uc5c5 \uc2e4\ud589\uc744 \uc9c0\uc2dc\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},"\uc784\uc2dc \uc800\uc7a5\uc18c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc2dc\uc2a4\ud15c\uc744 \uc120\ud0dd\ud560 \uac83\uc774\ub0d0\ub294 \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc758 \uc720\ud615, \ud06c\uae30, \uc774\uc6a9 \ube48\ub3c4, \ub370\uc774\ud130 \uc720\ud6a8\uae30\uac04 \ub4f1\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uc778\ucf54\ub529\ub41c \ube44\ub514\uc624")),(0,a.kt)("h3",{id:"\uc2dc\uc2a4\ud15c-\ucd5c\uc801\ud654"},"\uc2dc\uc2a4\ud15c \ucd5c\uc801\ud654"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc18d\ub3c4 \ucd5c\uc801\ud654: \ube44\ub514\uc624 \ubcd1\ub82c \uc5c5\ub85c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"\uc18d\ub3c4 \ucd5c\uc801\ud654: \uc5c5\ub85c\ub4dc \uc13c\ud130\ub97c \uc0ac\uc6a9\uc790 \uadfc\uac70\ub9ac\uc5d0 \uc9c0\uc815"),(0,a.kt)("li",{parentName:"ul"},"\uc18d\ub3c4 \ucd5c\uc801\ud654: \ubaa8\ub4e0 \uc808\ucc28\ub97c \ubcd1\ub82c\ud654"),(0,a.kt)("li",{parentName:"ul"},"\uc548\uc804\uc131 \ucd5c\uc801\ud654: \ubbf8\ub9ac \uc0ac\uc778\ub41c \uc5c5\ub85c\ub4dc URL"),(0,a.kt)("li",{parentName:"ul"},"\uc548\uc804\uc131 \ucd5c\uc801\ud654: \ube44\ub514\uc624 \ubcf4\ud638"),(0,a.kt)("li",{parentName:"ul"},"\ube44\uc6a9 \ucd5c\uc801\ud654")),(0,a.kt)("h3",{id:"\uc624\ub958-\ucc98\ub9ac"},"\uc624\ub958 \ucc98\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uc624\ub958\ub294 \ub450 \uac00\uc9c0 \uc885\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud68c\ubcf5 \uac00\ub2a5 \uc624\ub958"),(0,a.kt)("li",{parentName:"ul"},"\ud68c\ubcf5 \ubd88\uac00\ub2a5 \uc624\ub958")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,a.kt)("p",null,"\uc544\ub798\uc758 \ub0b4\uc6a9\uc744 \ub17c\uc758\ud558\ub294 \uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \uacc4\uce35\uc758 \uaddc\ubaa8 \ud655\uc7a5\uc131 \ud655\ubcf4 \ubc29\uc548 : API \uc11c\ubc84\ub294 \ubb34\uc0c1\ud0dc \uc11c\ubc84\uc774\ubbc0\ub85c \uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uacc4\uce35\uc758 \uaddc\ubaa8 \ud655\uc7a5\uc131 \ud655\ubcf4 \ubc29\uc548 : \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \ub2e4\uc911\ud654\uc640 \uc0e4\ub529 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub77c\uc774\ube0c \uc2a4\ud2b8\ub9ac\ubc0d : \ub77c\uc774\ube0c \uc2a4\ud2b8\ub9ac\ubc0d\uc740 \ube44\ub514\uc624\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ub179\ud654\ud558\uace0 \ubc29\uc1a1\ud558\ub294 \uc808\ucc28\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \uc0ad\uc81c: \uc800\uc791\uad8c\uc744 \uc704\ubc18\ud55c \ube44\ub514\uc624, \uc120\uc815\uc801 \ube44\ub514\uc624, \ubd88\ubc95\uc801 \ud589\uc704\uc5d0 \uad00\uacc4\ub41c \ube44\ub514\uc624\ub294 \ub0b4\ub824\uc57c \ud569\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);