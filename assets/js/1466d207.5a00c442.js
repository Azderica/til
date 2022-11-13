"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3878],{3905:function(t,e,l){l.d(e,{Zo:function(){return m},kt:function(){return c}});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var k=n.createContext({}),p=function(t){var e=n.useContext(k),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},m=function(t){var e=p(t.components);return n.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),d=p(l),c=a,N=d["".concat(k,".").concat(c)]||d[c]||o[c]||r;return l?n.createElement(N,i(i({ref:e},m),{},{components:l})):n.createElement(N,i({ref:e},m))}));function c(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var k in e)hasOwnProperty.call(e,k)&&(u[k]=e[k]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},6674:function(t,e,l){l.r(e),l.d(e,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i={sidebar_position:4},u={unversionedId:"dev/system-design-interview/ch4",id:"dev/system-design-interview/ch4",isDocsHomePage:!1,title:"4. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",description:"- \ub124\ud2b8\uc6cc\ud06c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5(rate limiter)\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4\uac00 \ubcf4\ub0b4\ub294 \ud2b8\ub798\ud53d\uc758 \ucc98\ub9ac\uc728(rate)\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud55c \uc7a5\uce58\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch4.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch4",permalink:"/til/docs/dev/system-design-interview/ch4",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch4.md",version:"current",lastUpdatedAt:1668304586,formattedLastUpdatedAt:"11/13/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. \uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811 \uacf5\ub7b5\ubc95",permalink:"/til/docs/dev/system-design-interview/ch3"},next:{title:"5. \uc548\uc815 \ud574\uc2dc \uc124\uacc4\uc548",permalink:"/til/docs/dev/system-design-interview/ch5"}},k=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uc608\uc0c1 \uc694\uad6c\uc0ac\ud56d\uc744",id:"\uc608\uc0c1-\uc694\uad6c\uc0ac\ud56d\uc744",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub294 \uc5b4\ub514\uc5d0 \ub458\uac83\uc778\uac00?",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\ub294-\uc5b4\ub514\uc5d0-\ub458\uac83\uc778\uac00",children:[]},{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \ub54c, \uace0\ub824\ud560 \uc0ac\ud56d",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uae30\ub2a5\uc744-\uad6c\ud604\ud560-\ub54c-\uace0\ub824\ud560-\uc0ac\ud56d",children:[]},{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc54c\uace0\ub9ac\uc998",children:[]},{value:"\uac1c\ub7b5\uc801\uc778 \uc54c\uace0\ub9ac\uc998",id:"\uac1c\ub7b5\uc801\uc778-\uc54c\uace0\ub9ac\uc998",children:[]}]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uaddc\uce59",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uaddc\uce59",children:[]},{value:"\ucc98\ub9ac\uc728 \ud55c\ub3c4 \ucd08\uacfc \ud2b8\ub798\ud53d\uc758 \ucc98\ub9ac",id:"\ucc98\ub9ac\uc728-\ud55c\ub3c4-\ucd08\uacfc-\ud2b8\ub798\ud53d\uc758-\ucc98\ub9ac",children:[]},{value:"\uc0c1\uc138 \uc124\uacc4",id:"\uc0c1\uc138-\uc124\uacc4",children:[]},{value:"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uad6c\ud604",id:"\ubd84\uc0b0-\ud658\uacbd\uc5d0\uc11c\uc758-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uad6c\ud604",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],p={toc:k};function m(t){var e=t.components,l=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5(rate limiter)\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4\uac00 \ubcf4\ub0b4\ub294 \ud2b8\ub798\ud53d\uc758 \ucc98\ub9ac\uc728(rate)\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud55c \uc7a5\uce58\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"API \uc694\uccad \ud69f\uc218\uac00 \uc81c\ud55c \uc7a5\uce58\uc5d0 \uc815\uc758\ub41c \uc784\uacc4\uce58(threshold)\ub97c \ub118\uc5b4\uc154\uba74 \ucd94\uac00\ub85c \ub3c4\ub2ec\ud55c \ubaa8\ub4e0 \ud638\ucd9c\uc740 \ucc98\ub9ac\uac00 \uc911\ub2e8(block)\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"API\uc5d0 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \ub450\uba74 \uc88b\uc740 \uc810\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DoS(Denial of Service) \uacf5\uaca9\uc5d0 \uc758\ud55c \uc790\uc6d0 \uace0\uac08(resource startvation)\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube44\uc6a9\uc744 \uc808\uac10\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uacfc\ubd80\ud558\ub97c \ub9c9\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac00\uc9c0 \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\ub098 \uac01\uac01\uc758 \uc7a5\ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc608\uc0c1-\uc694\uad6c\uc0ac\ud56d\uc744"},"\uc608\uc0c1 \uc694\uad6c\uc0ac\ud56d\uc744"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815\ub41c \ucc98\ub9ac\uc728\uc744 \ucd08\uacfc\ud558\ub294 \uc694\uccad\uc740 \uc815\ud655\ud558\uac8c \uc81c\ud55c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub0ae\uc740 \uc751\ub2f5\uc2dc\uac04: \uc774 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub294 HTTP \uc751\ub2f5\uc2dc\uac04\uc5d0 \ub098\uc05c \uc601\ud5a5\uc744 \uc8fc\uc5b4\uc11c\ub294 \uace4\ub780\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \ud55c \uc801\uc740 \uba54\ubaa8\ub9ac\ub97c \uc368\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubd84\uc0b0\ud615 \ucc98\ub9ac\uc728 \uc81c\ud55c(distributed rate limiting): \ud558\ub098\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \uc5ec\ub7ec \uc11c\ubc84\ub098 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uacf5\uc720\ud560 \uc218 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc678 \ucc98\ub9ac: \uc694\uccad\uc774 \uc81c\ud55c\ub418\uc5c8\uc744 \ub54c\ub294 \uadf8 \uc0ac\uc2e4\uc744 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubd84\uba85\ud558\uac8c \ubcf4\uc5ec\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub192\uc740 \uacb0\ud568 \uac10\ub0b4\uc131(fault tolerance): \uc81c\ud55c \uc7a5\uce58\uc5d0 \uc7a5\uc560\uac00 \uc0dd\uae30\ub354\ub77c\ub3c4 \uc804\uccb4 \uc2dc\uc2a4\ud15c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc5b4\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\ub294-\uc5b4\ub514\uc5d0-\ub458\uac83\uc778\uac00"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub294 \uc5b4\ub514\uc5d0 \ub458\uac83\uc778\uac00?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \ub454\ub2e4\uba74? \uc77c\ubc18\uc801\uc73c\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ucc98\ub9ac\uc728 \uc81c\ud55c\uc744 \uc548\uc815\uc801\uc73c\ub85c \uac78 \uc218 \uc788\ub294 \uc7a5\uc18c\uac00 \uc548\ub428."),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uce21\uc5d0 \ub454\ub2e4\uba74?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uc5d0 \ub450\uac70\ub098."),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \ubbf8\ub4e4\uc6e8\uc5b4(middleware)\ub97c \ub9cc\ub4e4\uc5b4 API \uc11c\ubc84 \uc694\uccad\uc744 \ud1b5\uc81c\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uae30\ub2a5\uc744-\uad6c\ud604\ud560-\ub54c-\uace0\ub824\ud560-\uc0ac\ud56d"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \ub54c, \uace0\ub824\ud560 \uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4, \uce90\uc2dc \uc11c\ube44\uc2a4 \ub4f1 \ud604\uc7ac \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uae30\uc220 \uc2a4\ud0dd\uc744 \uc810\uac80\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc5c5 \ud544\uc694\uc5d0 \ub9de\ub294 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"MSA\uc5d0 \uae30\ubc18\ud558\uace0 API \uac8c\uc774\ud2b8\uc6e8\uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \uac8c \uc788\uc73c\uba74, \uac8c\uc774\ud2b8 \uc6e8\uc5b4\uc5d0 \ud3ec\ud568\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc11c\ube44\uc2a4\ub97c \uc9c1\uc811 \ub9cc\ub4dc\ub294 \uac83\uc740 \uc2dc\uac04\uc774 \ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc54c\uace0\ub9ac\uc998"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("p",null,"\ub110\ub9ac \uc54c\ub824\uc9c4 \uac83\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \ubc84\ud0b7(token bucket)"),(0,r.kt)("li",{parentName:"ul"},"\ub204\ucd9c \ubc84\ud0b7(leaky bucket)"),(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130(fixed window counter)"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub3d9 \uc708\ub3c4 \ub85c\uadf8(sliding window log)"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub3d9 \uc708\ub3c4 \uce74\uc6b4\ud130(sliding window counter)")),(0,r.kt)("h4",{id:"\ud1a0\ud070-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998"},"\ud1a0\ud070 \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf4\ud3b8\uc801\uc73c\ub85c \uc0ac\uc6a9\uc911")),(0,r.kt)("p",null,"\ub3d9\uc791 \uc6d0\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \ubc84\ud0b7\uc740 \uc9c0\uc815\ub41c \uc6a9\ub7c9\uc744 \uac16\ub294 \ucee8\ud14c\uc774\ub108"),(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7\uc774 \uac00\ub4dd\ucc28\uba74 \ucd94\uac00\ub85c \ub4e4\uc5b4\uc624\ub294 \ud1a0\ud070\uc744 \ubc84\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \ud06c\uae30: \ubc84\ud0b7\uc5d0 \ub2f4\uc744 \uc218 \uc788\ub294 \ud1a0\ud070\uc758 \ucd5c\ub300 \uac1c\uc218"),(0,r.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \uacf5\uae09\ub960: \ucd08\ub2f9 \uba87 \uac1c\uc758 \ud1a0\ud070\uc774 \ubc84\ud0b7\uc5d0 \uacf5\uae09\ub418\ub294\uac00")))),(0,r.kt)("p",null,"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uad6c\ud604\uc774 \uc26c\uc6c0"),(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uc0ac\uc6a9 \uce21\uba74\uc5d0\uc11c\ub3c4 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9e7\uc740 \uc2dc\uac04\uc5d0 \uc9d1\uc911\ub418\ub294 \ud2b8\ub798\ud53d\ub3c4 \ucc98\ub9ac \uac00\ub2a5\ud55c")),(0,r.kt)("p",null,"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998\uc740 \ubc84\ud0b7 \ud06c\uae30\uc640 \ud1a0\ud070 \uacf5\uae09\ub960\uc774\ub77c\ub294 \ub450 \uc778\uc790\uac00 \uc788\ub294\ub370 \uc774\ub97c \uc798 \ud29c\ub2dd\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ub204\ucd9c-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998"},"\ub204\ucd9c \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \ubc84\ud0b7\uacfc \ube44\uc2b7\ud558\ub098 \uc694\uccad \ucc98\ub9ac\uc728\uc774 \uace0\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"FIFO \ud050\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub3d9\uc791 \uc6d0\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \ub3c4\ucc29\ud558\uba74 \ud050\uac00 \uac00\ub4dd\ucc28 \uc788\ub294\uc9c0 \ubd05\ub2c8\ub2e4. \ube48\uc790\ub9ac\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud050\uc5d0 \uc694\uccad\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud050\uac00 \uac00\ub4dd \ucc28 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc0c8 \uc694\uccad\uc744 \ubc84\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ub41c \uc2dc\uac04\ub9c8\ub2e4 \ud050\uc5d0\uc11c \uc694\uccad\uc744 \uaebc\ub0b4\uc5b4 \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc778\uc790",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \ud06c\uae30: \ud050 \uc0ac\uc774\uc988\uc640 \uac19\uc740 \uac12"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728: \uc9c0\uc815\ub41c \uc2dc\uac04 \ub2f9 \uba87 \uac1c\uc758 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\ub294\uc9c0 \uc9c0\uc815\ud558\ub294 \uac12")))),(0,r.kt)("p",null,"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud050\uc758 \ud06c\uae30\uac00 \uc81c\ud55c\ub418\uc5b4 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uce21\uba74\uc5d0\uc11c \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815\ub41c \ucc98\ub9ac\uc728\uc744 \uac16\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc548\uc815\uc801 \ucd9c\ub825\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc2dc\uac04\uc5d0 \ub9ce\uc740 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9ac\ub294 \uacbd\uc6b0 \ud050\uc5d0  \uc624\ub798\ub41c \uc694\uccad\ub4e4\uc774 \uc313\uc774\uac8c \ub418\uace0, \uc81c\ub54c \ucc98\ub9ac \ubabb\ud558\uba74 \ucd5c\uc2e0 \uc694\uccad\ub4e4\uc774 \ubc84\ub824\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1c \uc778\uc790\ub97c \uc62c\ubc14\ub974\uac8c \ud29c\ub2dd\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uace0\uc815-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998"},"\uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("p",null,"\ub3d9\uc791 \uc6d0\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0c0\uc784\ub77c\uc778\uc744 \uace0\uc815\ub41c \uac04\uaca9\uc758 \uc708\ub3c4(window)\ub85c \ub098\ub204\uace0, \uac01 \uc708\ub3c4\ub9c8\ub2e4 \uce74\uc6b4\ud130\ub97c \ubd99\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uc811\uc218\ub420 \ub54c\ub9c8\ub2e4 \uc774 \uce74\uc6b4\ud130\uc758 \uac12\uc740 1\uc529 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uce74\uc6b4\ud130\uc758 \uac12\uc774 \uc0ac\uc804\uc5d0 \uc124\uc815\ub41c \uc784\uacc4\uce58(threshold)\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc0c8\ub85c\uc6b4 \uc694\uccad\uc740 \uc0c8 \uc708\ub3c4\uac00 \uc5f4\ub9b4 \ub54c\uae4c\uc9c0 \ubc84\ub824\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ud6a8\uc728\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ud574\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc708\ub3c4\uac00 \ub2eb\ud788\ub294 \uc2dc\uc810\uc5d0 \uce74\uc6b4\ud130\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\uc2dd\uc740 \ud2b9\uc815\ud55c \ud2b8\ub798\ud53d \ud328\ud134\uc744 \ucc98\ub9ac\ud558\uae30\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc708\ub3c4\uc758 \uacbd\uacc4 \ubd80\uadfc\uc5d0 \uc21c\uac04\uc801\uc73c\ub85c \ub9ce\uc740 \ud2b8\ub798\ud53d\uc774 \uc9d1\uc911\ub41c \uacbd\uc6b0, \ud560\ub2f9\ub41c \uc591\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uc694\uccad\uc774 \ucc98\ub9ac\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc774\ub3d9-\uc708\ub3c4-\ub85c\uae45-\uc54c\uace0\ub9ac\uc998"},"\uc774\ub3d9 \uc708\ub3c4 \ub85c\uae45 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("p",null,"\ub3d9\uc791 \uc6d0\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504(tiemstamp)\ub97c \ucd94\uc801\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c8 \uc694\uccad\uc774 \uc624\uba74 \ub9cc\ub8cc\ub41c \ud0c0\uc784\uc2a4\ud0ec\ud504\ub294 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c8 \uc694\uccad\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504\ub97c \ub85c\uadf8(log)\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774 \uc54c\uace0\ub9ac\uc998\uc744 \uad6c\ud604\ud558\ub294 \ucc98\ub9ac\uc728 \uc81c\ud55c \uba54\ucee4\ub2c8\uc998\uc774 \uc815\uad50\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub7c9\uc758 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. (\uac70\ubd80\ub41c \uc694\uccad\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504\ub3c4 \ubcf4\uad00\ud558\ubbc0\ub85c)")),(0,r.kt)("h4",{id:"\uc774\ub3d9-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998"},"\uc774\ub3d9 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998\uacfc \uc774\ub3d9 \uc708\ub3c4 \ub85c\uae45 \uc54c\uace0\ub9ac\uc998\uc774 \uacb0\ud569\ud55c \uac83\uc740")),(0,r.kt)("p",null,"\uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\uc804 \uc2dc\uac04\ub300\uc758 \ud3c9\uade0 \ucc98\ub9ac\uc728\uc5d0 \ub530\ub77c \ud604\uc7ac \uc708\ub3c4\uc758 \uc0c1\ud0dc\ub97c \uacc4\uc0b0\ud558\ubbc0\ub85c \uc9e7\uc740 \uc2dc\uac04\uc5d0 \ubab0\ub9ac\ub294 \ud2b8\ub798\ud53d\uc5d0\ub3c4 \uc798 \ub300\uc751\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ud6a8\uc728\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uade0\ub4f1\ud558\uac8c \ubd84\ud3ec\ub418\uc5b4 \uc788\ub2e4\uace0 \uac00\uc815\ud55c \uc0c1\ud0dc\uc5d0\uc11c \ucd94\uc815\uce58\ub97c \uacc4\uc0b0\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc18c \ub290\uc2a8\ud569\ub2c8\ub2e4.(\ub2e4\ub9cc \ud070 \ubb38\uc81c\ub294 \uc544\ub2d9\ub2c8\ub2e4.)")),(0,r.kt)("h3",{id:"\uac1c\ub7b5\uc801\uc778-\uc54c\uace0\ub9ac\uc998"},"\uac1c\ub7b5\uc801\uc778 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ub370\uc774\ud130\ub97c \uae30\uc900\uc73c\ub85c? \uc0ac\uc6a9\uc790\ubcc4, IP \uc8fc\uc18c\ubcc4, API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub098 \uc11c\ube44\uc2a4 \ub2e8\uc704?"),(0,r.kt)("li",{parentName:"ul"},"\uce74\uc6b4\ud130\ub97c \uc5b4\ub5bb\uac8c \ubcf4\uad00\ud560\uc9c0? \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \ub290\ub9bc, \uce90\uc2dc\uac00 \uc77c\ubc18\uc801\uc73c\ub85c \ub2f5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Redis\ub294 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \uad6c\ud604\ud560 \ub54c \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac \uae30\ubc18 \uc800\uc7a5\uc7a5\uce58\ub85c\uc11c, INCR\uacfc EXPIRE\uc758 \ub450\uac00\uc9c0 \uba85\ub839\uc5b4\ub97c \uc9c0\uc6d0"),(0,r.kt)("li",{parentName:"ul"},"INCR: \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ub41c \uce74\uc6b4\ud130\uc758 \uac12\uc744 1\ub9cc\ud07c \uc99d\uac00"),(0,r.kt)("li",{parentName:"ul"},"EXPIRE: \uce74\uc6b4\ud130\uc5d0 \ud0c0\uc784\uc544\uc6c3 \uac12\uc744 \uc124\uc815, \uc124\uc815\ub41c \uc2dc\uac04\uc774 \uc9c0\ub098\uba74 \uce74\uc6b4\ud130\ub294 \uc790\ub3d9\uc73c\ub85c \uc0ad\uc81c")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1c\ub7b5\uc801 \uc124\uacc4\uc5d0\uc11c \uc544\ub798 \uc0ac\ud56d\uc740 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uaddc\uce59\uc740 \uc5b4\ub5bb\uac8c \ub9cc\ub4e4\uc5b4\uc9c0\uace0 \uc5b4\ub514\uc5d0 \uc800\uc7a5\ub418\ub294\uac00?"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uac00 \uc81c\ud55c\ub41c \uc694\uccad\ub4e4\uc740 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ub418\ub294\uac00?")))),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uaddc\uce59"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uaddc\uce59"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lytf\ub780 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc624\ud508 \uc18c\uc2a4 \uc0ac\uc6a9")),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\ud55c\ub3c4-\ucd08\uacfc-\ud2b8\ub798\ud53d\uc758-\ucc98\ub9ac"},"\ucc98\ub9ac\uc728 \ud55c\ub3c4 \ucd08\uacfc \ud2b8\ub798\ud53d\uc758 \ucc98\ub9ac"),(0,r.kt)("h4",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uac00-\uc0ac\uc6a9\ud558\ub294-http-\ud5e4\ub354"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uac00 \uc0ac\uc6a9\ud558\ub294 HTTP \ud5e4\ub354"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 HTTP \ud5e4\ub354\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ubcf4\ub0c5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"X-Rating-Remainig: \uc708\ub3c4 \ub0b4\uc5d0 \ub0a8\uc740 \ucc98\ub9ac \uac00\ub2a5 \uc694\uccad\uc758 \uc218"),(0,r.kt)("li",{parentName:"ul"},"X-Ratelimit-Limit: \ub9e4 \uc708\ub3c4\ub9c8\ub2e4 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc694\uccad\uc758 \uc218"),(0,r.kt)("li",{parentName:"ul"},"X-Ratelimit-Retry-After: \ud55c\ub3c4 \uc81c\ud55c\uc5d0 \uac78\ub9ac\uc9c0 \uc54a\uc73c\ub824\uba74 \uba87 \ucd08 \ub4a4\uc5d0 \uc694\uccad\uc744 \ub2e4\uc2dc \ubcf4\ub0b4\uc57c \ud558\ub294\uc9c0 \uc54c\ub9bc")))),(0,r.kt)("h3",{id:"\uc0c1\uc138-\uc124\uacc4"},"\uc0c1\uc138 \uc124\uacc4"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/184998281-d2fce394-19ed-4748-b442-177279dfc829.png",alt:"\uc0c1\uc138 \uc124\uacc4"})),(0,r.kt)("h3",{id:"\ubd84\uc0b0-\ud658\uacbd\uc5d0\uc11c\uc758-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uad6c\ud604"},"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uad6c\ud604"),(0,r.kt)("p",null,"\ub450 \uac00\uc9c0\uc758 \uc5b4\ub824\uc6b4 \ubb38\uc81c\ub97c \ud480\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc7c1 \uc870\uac74"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uae30\ud654")),(0,r.kt)("h4",{id:"\uacbd\uc7c1-\uc870\uac74"},"\uacbd\uc7c1 \uc870\uac74"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \ud574\uacb0\ucc45\uc740 \ub77d\uc785\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ub3d9\uae30\ud654-\uc774\uc288"},"\ub3d9\uae30\ud654 \uc774\uc288"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \ub450\uac8c \ub418\uba74, \ub3d9\uae30\ud654 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub294 \uc911\uc559 \uc9d1\uc911\ud615 \ub370\uc774\ud130 \uc800\uc7a5\uc18c(ex. redis)\ub97c \uc4f0\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc131\ub2a5-\ucd5c\uc801\ud654"},"\uc131\ub2a5 \ucd5c\uc801\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub370\uc774\ud130\uc13c\ud130\ub97c \uc9c0\uc6d0\ud558\ub294 \ubb38\uc81c."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\ud560 \ub54c\ub294 \ucd5c\uc815 \uc77c\uad00\uc131 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83")),(0,r.kt)("h4",{id:"\ubaa8\ub2c8\ud130\ub9c1"},"\ubaa8\ub2c8\ud130\ub9c1"),(0,r.kt)("p",null,"\ubaa8\ub2c8\ud130\ub9c1\uc744 \ud1b5\ud574 \ud655\uc778\ud558\ub824\ub294 \uac83\uc740 \ub2e4\uc74c \ub450\uac00\uc9c0 \uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc44\ud0dd\ub41c \ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998\uc774 \ud6a8\uacfc\uc801\uc774\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\uc815\uc758\ud55c \ucc98\ub9ac\uc728 \uc81c\ud55c \uaddc\uce59\uc774 \ud6a8\uacfc\uc801\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uc640 \uac19\uc740 \ud2b8\ub798\ud53d\uc740 \ud1a0\ud070 \ubc84\ud0b7\uc774 \uc801\ud569\ud569\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc704\uc758 \uc54c\uace0\ub9ac\uc998 \uc678\uc5d0\ub3c4, \uc544\ub798\uc5d0 \ub300\ud55c \ub0b4\uc6a9\ub3c4 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc131(hard) \ub610\ub294 \uc5f0\uc131(soft) \ucc98\ub9ac\uc728 \uc81c\ud55c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc131 \ucc98\ub9ac\uc728 \uc81c\ud55c: \uc694\uccad\uc758 \uac1c\uc218\ub294 \uc784\uacc4\uce58\ub97c \uc808\ub300 \ub118\uc5b4\uc124 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uc131 \ucc98\ub9ac\uc728 \uc81c\ud55c: \uc694\uccad \uac1c\uc218\ub294 \uc7a0\uc2dc \ub3d9\uc548\uc740 \uc784\uacc4\uce58\ub97c \ub118\uc5b4\uc124 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \uacc4\uce35\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uacc4\uce35 \ub9d0\uace0, \ub2e4\ub978 \uacc4\uce35\uc5d0\uc11c\ub3c4 \ucc98\ub9ac\uc728 \uc81c\ud55c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"OSI \ub124\ud2b8\uc6cc\ud06c \uacc4\uce35\ub3c4 \ucc38\uace0"))),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c\uc744 \ud68c\ud53c\ud558\ub294 \ubc29\ubc95. \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uc124\uacc4\ud560 \uac83\uc778\uac00.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uce90\uc2dc\ub97c \ud1b5\ud574 API \ud638\ucd9c \ud69f\uc218\ub97c \uc904\uc778\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c\uc758 \uc784\uacc4\uce58\ub97c \uc774\ud574\ud558\uace0, \uc9e7\uc740 \uc2dc\uac04 \ub3d9\uc548 \ub108\ubb34 \ub9ce\uc740 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4.")))))}m.isMDXComponent=!0}}]);