"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2070],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9737:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var n=r(7462),i=r(3366),l=(r(7294),r(3905)),a={sidebar_position:14},o={unversionedId:"dev/system-design-interview/ch14",id:"dev/system-design-interview/ch14",isDocsHomePage:!1,title:"14\uc7a5. \uc720\ud29c\ube0c \uc124\uacc4",description:"- \uc544\ub798\ub294 \uc720\ud29c\ube0c \uc124\uacc4\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch14.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch14",permalink:"/til/docs/dev/system-design-interview/ch14",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch14.md",version:"current",lastUpdatedAt:1663627040,formattedLastUpdatedAt:"9/19/2022",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"13\uc7a5. \uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131 \uc2dc\uc2a4\ud15c",permalink:"/til/docs/dev/system-design-interview/ch13"},next:{title:"15\uc7a5. \uad6c\uae00 \ub4dc\ub77c\uc774\ube0c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch15"}},u=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815",id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\ub798\ub294 \uc720\ud29c\ube0c \uc124\uacc4\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc720\ud29c\ube0c\uc758 2020\ub144 \ud1b5\uacc4\uc790\ub8cc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc6d4\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790 \uc218: 2\uc2ed \uc5b5"),(0,l.kt)("li",{parentName:"ul"},"\ub9e4\uc77c \uc7ac\uc0dd\ub418\ub294 \ube44\ub514\uc624 \uc218: 5\uc2ed \uc5b5"),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\uad6d \uc131\uc778 \uac00\uc6b4\ub370 73%\uac00 \uc720\ud29c\ube0c \uc774\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"5\ucc9c\ub9cc \uba85\uc758 \ucc3d\uc791\uc790"),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud29c\ube0c\uc758 \uad11\uace0 \uc218\uc785\uc740 \uc99d\uac00 \uc911"),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc778\ud130\ub137 \ud2b8\ub798\ud53d \uac00\uc6b4\ub370 37%\ub97c \uc720\ud29c\ube0c\uac00 \uc810\uc720"),(0,l.kt)("li",{parentName:"ul"},"80\uac1c\uc758 \uc5b8\uc5b4\ub85c \uc774\uc6a9 \uac00\ub2a5")),(0,l.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc124\uacc4\uc5d0 \ucd08\uc810\uc744 \ub9de\ucda5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ube60\ub978 \ube44\ub514\uc624 \uc5c5\ub85c\ub4dc"),(0,l.kt)("li",{parentName:"ul"},"\uc6d0\ud65c\ud55c \ube44\ub514\uc624 \uc7ac\uc0dd"),(0,l.kt)("li",{parentName:"ul"},"\uc7ac\uc0dd \ud488\uc9c8 \uc120\ud0dd \uae30\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ub0ae\uc740 \uc778\ud504\ub77c \ube44\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\ub192\uc740 \uac00\uc6a9\uc131\uacfc \uaddc\ubaa8 \ud655\uc7a5\uc131, \uadf8\ub9ac\uace0 \uc548\uc815\uc131"),(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud074\ub77c\uc774\uc5b8\ud2b8: \ubaa8\ubc14\uc77c \uc571, \uc6f9\ube0c\ub77c\uc6b0\uc800, \uadf8\ub9ac\uace0 \uc2a4\ub9c8\ud2b8 TV")))),(0,l.kt)("h3",{id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815"},"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790(DAU, Daily Activie User) \uc218\ub294 5\ubc31\ub9cc"),(0,l.kt)("li",{parentName:"ul"},"\ud55c \uc0ac\uc6a9\uc790\ub294 \ud558\ub8e8\uc5d0 \ud3c9\uade0 5\uac1c\uc758 \ube44\ub514\uc624\ub97c \uc2dc\uccad"),(0,l.kt)("li",{parentName:"ul"},"10% \uc0ac\uc6a9\uc790\uac00 \ud558\ub8e8\uc5d0 1\ube44\ub514\uc624 \uc5c5\ub85c\ub4dc"),(0,l.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \ud3c9\uade0 \ud06c\uae30\ub294 300MB"),(0,l.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \uc800\uc7a5\uc744 \uc704\ud574 \ub9e4\uc77c \uc0c8\ub85c \uc694\uad6c\ub418\ub294 \uc800\uc7a5\uc6a9\ub7c9 : 5\ubc31\ub9cc ",(0,l.kt)("em",{parentName:"li"}," 10% ")," 300MB = 150TB"),(0,l.kt)("li",{parentName:"ul"},"CDN \ube44\uc6a9(dkakwhs tkdydtl) : 5\ubc31\ub9cc X 5\ube44\ub514\uc624 ",(0,l.kt)("em",{parentName:"li"}," 0.3GB ")," 0.2 = $150,000")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"))}p.isMDXComponent=!0}}]);