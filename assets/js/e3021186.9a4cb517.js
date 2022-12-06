"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[823],{3905:function(e,t,l){l.d(t,{Zo:function(){return m},kt:function(){return s}});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),k=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=k(l),s=n,o=d["".concat(p,".").concat(s)]||d[s]||c[s]||r;return l?a.createElement(o,i(i({ref:t},m),{},{components:l})):a.createElement(o,i({ref:t},m))}));function s(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var k=2;k<r;k++)i[k]=l[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},379:function(e,t,l){l.r(t),l.d(t,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=l(7462),n=l(3366),r=(l(7294),l(3905)),i={sidebar_position:1},u={unversionedId:"dev/system-design-interview/ch1",id:"dev/system-design-interview/ch1",isDocsHomePage:!1,title:"1. \uc0ac\uc6a9\uc790 \uc218\uc5d0 \ub530\ub978 \uaddc\ubaa8 \ud655\uc7a5\uc131",description:"\ub2e8\uc77c \uc11c\ubc84",source:"@site/docs/dev/system-design-interview/ch1.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch1",permalink:"/til/docs/dev/system-design-interview/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch1.md",version:"current",lastUpdatedAt:1670327914,formattedLastUpdatedAt:"12/6/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"12. \uc0c1\uc18d \ub2e4\ub8e8\uae30",permalink:"/til/docs/dev/refactoring/ch12"},next:{title:"2. \uac1c\ub7b5\uc801\uc778 \uaddc\ubaa8 \ucd94\uc815",permalink:"/til/docs/dev/system-design-interview/ch2"}},p=[{value:"\ub2e8\uc77c \uc11c\ubc84",id:"\ub2e8\uc77c-\uc11c\ubc84",children:[]},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[{value:"\uc5b4\ub5a4 \ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\uc5b4\ub5a4-\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[]}]},{value:"\uc218\uc9c1\uc801 \uaddc\ubaa8 \ud655\uc7a5 vs \uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5",id:"\uc218\uc9c1\uc801-\uaddc\ubaa8-\ud655\uc7a5-vs-\uc218\ud3c9\uc801-\uaddc\ubaa8-\ud655\uc7a5",children:[{value:"\ub85c\ub4dc\ubc38\ub7f0\uc11c",id:"\ub85c\ub4dc\ubc38\ub7f0\uc11c",children:[]}]},{value:"\uce90\uc2dc",id:"\uce90\uc2dc",children:[{value:"\uce90\uc2dc \uacc4\uce35",id:"\uce90\uc2dc-\uacc4\uce35",children:[]},{value:"\uce90\uc2dc \uc0ac\uc6a9\uc2dc \uc720\uc758\uc810",id:"\uce90\uc2dc-\uc0ac\uc6a9\uc2dc-\uc720\uc758\uc810",children:[]}]},{value:"\ucf58\ud150\uce20 \uc804\uc1a1 \ub124\ud2b8\uc6cc\ud06c(CDN)",id:"\ucf58\ud150\uce20-\uc804\uc1a1-\ub124\ud2b8\uc6cc\ud06ccdn",children:[{value:"CDN \uc0ac\uc6a9 \uc2dc \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d",id:"cdn-\uc0ac\uc6a9-\uc2dc-\uace0\ub824\ud574\uc57c-\ud560-\uc0ac\ud56d",children:[]}]},{value:"\ubb34\uc0c1\ud0dc(stateless) \uc6f9 \uacc4\uce35",id:"\ubb34\uc0c1\ud0dcstateless-\uc6f9-\uacc4\uce35",children:[{value:"\uc0c1\ud0dc \uc815\ubcf4 \uc758\uc874\uc801\uc778 \uc544\ud0a4\ud14d\ucc98",id:"\uc0c1\ud0dc-\uc815\ubcf4-\uc758\uc874\uc801\uc778-\uc544\ud0a4\ud14d\ucc98",children:[]},{value:"\ubb34\uc0c1\ud0dc \uc544\ud0a4\ud14d\ucc98",id:"\ubb34\uc0c1\ud0dc-\uc544\ud0a4\ud14d\ucc98",children:[]}]},{value:"\ub370\uc774\ud130 \uc13c\ud130",id:"\ub370\uc774\ud130-\uc13c\ud130",children:[]},{value:"\uba54\uc2dc\uc9c0 \ud050",id:"\uba54\uc2dc\uc9c0-\ud050",children:[]},{value:"\ub85c\uadf8, \uba54\ud2b8\ub9ad \uadf8\ub9ac\uace0 \uc790\ub3d9\ud654",id:"\ub85c\uadf8-\uba54\ud2b8\ub9ad-\uadf8\ub9ac\uace0-\uc790\ub3d9\ud654",children:[{value:"\uba54\uc2dc\uc9c0 \ud050, \ub85c\uadf8, \uba54\ud2b8\ub9ad, \uc790\ub3d9\ud654 \ub4f1\uc744 \ubc18\uc601\ud558\uc5ec \uc218\uc815\ud55c \uc124\uacc4\uc548",id:"\uba54\uc2dc\uc9c0-\ud050-\ub85c\uadf8-\uba54\ud2b8\ub9ad-\uc790\ub3d9\ud654-\ub4f1\uc744-\ubc18\uc601\ud558\uc5ec-\uc218\uc815\ud55c-\uc124\uacc4\uc548",children:[]}]},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uaddc\ubaa8 \ud655\uc7a5",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758-\uaddc\ubaa8-\ud655\uc7a5",children:[{value:"\uc218\uc9c1\uc801 \ud655\uc7a5",id:"\uc218\uc9c1\uc801-\ud655\uc7a5",children:[]},{value:"\uc218\ud3c9\uc801 \ud655\uc7a5",id:"\uc218\ud3c9\uc801-\ud655\uc7a5",children:[]}]},{value:"\ubc31\ub9cc \uc0ac\uc6a9\uc790, \uadf8\ub9ac\uace0 \uadf8 \uc774\uc0c1",id:"\ubc31\ub9cc-\uc0ac\uc6a9\uc790-\uadf8\ub9ac\uace0-\uadf8-\uc774\uc0c1",children:[]}],k={toc:p};function m(e){var t=e.components,l=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ub2e8\uc77c-\uc11c\ubc84"},"\ub2e8\uc77c \uc11c\ubc84"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uc571, \ub370\uc774\ud130\ubca0\uc774\uc2a4, \uce90\uc2dc \ub4f1\uc774 \uc804\ubd80 \uc11c\ubc84 \ud55c \ub300\uc5d0\uc11c \uc2e4\ud589")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/183911066-fd3cb5e7-c255-438b-a6de-50352e9f8639.png",alt:"\uc0ac\uc6a9\uc790 \ud750\ub984"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\ub9d0\uc740 2\uac1c \uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc571")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ub298\uba74 \uc11c\ubc84 \ud558\ub098\ub85c\ub294 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc544, \ud2b8\ub798\ud53d \uc6a9\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc6a9\uc73c\ub85c \ubd84\ub9ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/183911434-97c5c976-2aec-4aee-a49f-4172a9f9b7ea.png",alt:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucd94\uac00"})),(0,r.kt)("h3",{id:"\uc5b4\ub5a4-\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\uc5b4\ub5a4 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc88b\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\ube44 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc88b\uc740 \uacbd\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc544\uc8fc \ub0ae\uc740 \uc751\ub2f5 \uc9c0\uc5f0\uc2dc\uac04(latency)\uc774 \uc694\uad6c\ub428"),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub8e8\ub294 \ub370\uc774\ud130\uac00 \ube44\uc815\ud615(unstructured)\uc774\ub77c \uad00\uacc4\ud615 \ub370\uc774\ud130\uac00 \uc544\ub2d8"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130(JSON, YAML, XML \ub4f1)\ub97c \uc9c1\ub82c\ud654\ud558\uac70\ub098(serialize) \uc5ed\uc9c1\ub82c\ud654(deserialize) \ud560 \uc218 \uc788\uae30\ub9cc \ud558\uba74 \ub428"),(0,r.kt)("li",{parentName:"ul"},"\uc544\uc8fc \ub9ce\uc740 \uc591\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ud544\uc694\uac00 \uc788\uc74c.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc218\uc9c1\uc801-\uaddc\ubaa8-\ud655\uc7a5-vs-\uc218\ud3c9\uc801-\uaddc\ubaa8-\ud655\uc7a5"},"\uc218\uc9c1\uc801 \uaddc\ubaa8 \ud655\uc7a5 vs \uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84\ub85c \uc720\uc785\ub418\ub294 \ud2b8\ub798\ud53d\uc758 \uc591\uc774 \uc801\uc744 \ub54c\ub294 \uc218\uc9c1\uc801 \ud655\uc7a5\uc774 \uc88b\uc740 \uc120\ud0dd\uc774\uba70, \uc774 \ubc29\ubc95\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \ub2e8\uc21c\ud568\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uc544\ub798\uc758 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc218\uc9c1\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc5d0\ub294 \ud55c\uacc4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud55c \ub300\uc758 \uc11c\ubc84\uc5d0 CPU\ub098 \uba54\ubaa8\ub9ac\ub97c \ubb34\ud55c\ub300\ub85c \uc99d\uc124\ud560 \ubc29\ubc95\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc218\uc9c1\uc801 \uaddc\ubaa8 \ud655\uc7a5\ubc95\uc740 \uc7a5\uc560\uc5d0 \ub300\ud55c \uc790\ub3d9\ubcf5\uad6c(failover) \ubc29\uc548\uc774\ub098 \ub2e4\uc911\ud654(redundancy) \ubc29\uc548\uc744 \uc81c\uc2dc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\uc2dc \uc6f9\uc0ac\uc774\ud2b8/\uc571\uc740 \uc644\uc804\ud788 \uc911\ub2e8\ub429\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\ub85c\ub4dc\ubc38\ub7f0\uc11c"},"\ub85c\ub4dc\ubc38\ub7f0\uc11c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubd80\ud558 \ubd84\uc0b0 \uc9d1\ud569(load balancing set)\uc5d0 \uc18d\ud55c \uc6f9 \uc11c\ubc84\ub4e4\uc5d0\uac8c \ud2b8\ub798\ud53d \ubd80\ud558\ub97c \uace0\ub974\uac8c \ubd84\uc0b0\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uacc4\uc815\uc5d0\uc11c\ub294 \uc774\uc640 \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ub2e4\uc911\ud654"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub2e4\uc911\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc774 \ub2e4\uc911\ud654\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc8fc(master)\uacfc \ubd80(slave) \uad00\uacc4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc77d\uae30 \uc5f0\uc0b0\uc758 \ube44\uc911\uc774 \uc4f0\uae30 \uc5f0\uc0b0\ubcf4\ub2e4 \ud6e8\uc52c \ub192\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub2e4\uc911\ud654\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\ub4dd\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub354 \ub098\uc740 \uc131\ub2a5 : \uc77d\uae30 \uc5f0\uc0b0\uc740 \ubd84\uc0b0\ub418\ubbc0\ub85c, \ucc98\ub9ac\ub420 \uc218 \uc788\ub294 \uc9c8\uc758(query) \uc218\uac00 \ub298\uc5b4\ub098\uc11c \uc131\ub2a5\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc548\uc815\uc131 : \uc77c\ubd80\uac00 \ud30c\uad34\ub418\uc5b4\ub3c4 \ub370\uc774\ud130\ub294 \ubcf4\uc874 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc6a9\uc131 : \uc7a5\uc560 \ubc1c\uc0dd \uc2dc, \ub2e4\ub978 \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub85c \uc11c\ube44\uc2a4 \uac00\ub2a5")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/183915101-7e07ddc8-5210-4304-a23d-f492af1aeaea.png",alt:"\ub85c\ub4dc\ubc38\ub7f0\uc11c\uc640 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub2e4\uc911\ud654"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uce90\uc2dc"},"\uce90\uc2dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\ub294 \uac12\ube44\uc2fc \uc5f0\uc0b0 \uacb0\uacfc \ub610\ub294 \uc790\uc8fc \ucc38\uc870\ub418\ub294 \ub370\uc774\ud130\ub97c \uba54\ubaa8\ub9ac \uc548\uc5d0 \ub450\uace0, \ub4a4\uc774\uc740 \uc694\uccad\uc774 \ubcf4\ub2e4 \ube68\ub9ac \ucc98\ub9ac\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uce90\uc2dc-\uacc4\uce35"},"\uce90\uc2dc \uacc4\uce35"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc \uacc4\uce35\uc740 \ub370\uc774\ud130\uac00 \uc7a0\uc2dc \ubcf4\uad00\ub418\ub294 \uacf3\uc73c\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ubcf4\ub2e4 \ud6e8\uc2e0 \ube60\ub985\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uce90\uc2dc-\uc0ac\uc6a9\uc2dc-\uc720\uc758\uc810"},"\uce90\uc2dc \uc0ac\uc6a9\uc2dc \uc720\uc758\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\ub294 \uc5b4\ub5a4 \uc0c1\ud669\uc5d0 \ubc14\ub78c\uc9c1\ud55c\uc9c0? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uac31\uc2e0\uc740 \uc790\uc8fc \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc9c0\ub9cc \ucc38\uc870\ub294 \ube48\ubc88\ud558\uac8c \uc77c\uc5b4\ub098\ub294 \uacbd\uc6b0 \uace0\ub824"))),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ub370\uc774\ud130\ub97c \uce90\uc2dc\uc5d0 \ub450\uc5b4\uc57c \ud558\ub294\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uc5d0 \uc601\uc18d\uc801 \ubcf4\uad00\ud560 \ub370\uc774\ud130\ub97c \uce90\uc2dc\uc5d0 \ub450\ub294 \uac83\uc740 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uac00 \uc7ac\uc2dc\uc791\ub418\uba74 \uce90\uc2dc \ub0b4\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uc5d0 \ubcf4\uad00\ub41c \ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \ub9cc\ub8cc(expire)\ub418\ub294\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc815\ucc45\uc744 \ub9c8\ub828\ud574 \ub450\ub294 \uac83\uc740 \uc88b\uc740 \uc2b5\uad00\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub108\ubb34 \uc9e7\uc544\ub3c4 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc790\uc8fc \uc77d\uac8c \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \ub418\uace0, \ub108\ubb34 \uae38\uc5b4\ub3c4 \uace4\ub780\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131(consistency)\uc740 \uc5b4\ub5bb\uac8c \uc720\uc9c0\ub418\ub294\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131\uc740 \ub370\uc774\ud130 \uc800\uc7a5\uc18c\uc758 \uc6d0\ubcf8\uacfc \uce90\uc2dc \ub0b4\uc758 \uc0ac\ubcf8\uc774 \uac19\uc740\uc9c0 \uc5ec\ubd80\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc560\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ub300\ucc98\ud560 \uac83\uc778\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SPOF(\ub2e8\uc77c \uc7a5\uc560 \uc9c0\uc810)\uc744 \ud53c\ud558\ub824\uba74 \uc5ec\ub7ec \uc9c0\uc5ed\uc5d0 \uac78\uccd0 \uce90\uc2dc \uc11c\ubc84\ub97c \ubd84\uc0b0\uc2dc\ucf1c\uc57c \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc \uba54\ubaa8\ub9ac\ub294 \uc5bc\ub9c8\ub098 \ud06c\uac8c \uc7a1\uc744 \uac83\uc778\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc \uba54\ubaa8\ub9ac\uac00 \ub108\ubb34 \uc791\uc73c\uba74 \uc561\uc138\uc2a4 \ud328\ud134\uc5d0 \ub530\ub77c\uc11c\ub294 \ub370\uc774\ud130\uac00 \ub108\ubb34 \uc790\uc8fc \uce90\uc2dc\uc5d0\uc11c \ubc00\ub824\ub098\uc11c \uce90\uc2dc \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9d1\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubc29\ucd9c(eviction) \uc815\ucc45\uc740 \ubb34\uc5c7\uc778\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uac00 \uaf49 \ucc28\ubc84\ub9ac\uba74 \ucd94\uac00\ub85c \uce90\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \ub123\uc5b4\uc57c \ud560 \uacbd\uc6b0 \uae30\uc874 \ub370\uc774\ud130\ub97c \ub0b4\ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ucf58\ud150\uce20-\uc804\uc1a1-\ub124\ud2b8\uc6cc\ud06ccdn"},"\ucf58\ud150\uce20 \uc804\uc1a1 \ub124\ud2b8\uc6cc\ud06c(CDN)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc815\uc801 \ucf58\ud150\uce20\ub97c \uc804\uc1a1\ud558\ub294 \ub370 \uc4f0\uc774\ub294, \uc9c0\ub9ac\uc801\uc73c\ub85c \ubd84\uc0b0\ub41c \uc11c\ubc84\uc758 \ub124\ud2b8\uc6cc\ud06c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ucf58\ud150\uce20 \uce90\uc2f1\uc740 \uc0c1\ub300\uc801\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uac1c\ub150\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac04\ub2e8\ud558\uac8c \uc774\uc57c\uae30\ud558\uba74, \uacbd\ub85c, \uc9c8\uc758 \ubb38\uc790\uc5f4, \ucfe0\ud0a4, \uc694\uccad \ud5e4\ub354 \ub4f1\uc758 \uc815\ubcf4\uc5d0 \uae30\ubc18\ud558\uc5ec HTML \ud398\uc774\uc9c0\ub97c \uce90\uc2dc\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc544\ub798\uc5d0\uc11c\ub294 \uc815\uc801 CDN\uc5d0 \ub300\ud574\uc11c\ub9cc \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"cdn-\uc0ac\uc6a9-\uc2dc-\uace0\ub824\ud574\uc57c-\ud560-\uc0ac\ud56d"},"CDN \uc0ac\uc6a9 \uc2dc \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube44\uc6a9 : \uc790\uc8fc \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ucf58\ud150\uce20\ub97c \uce90\uc2f1\ud558\ub294 \uac83\uc740 \uc774\ub4dd\uc774 \ud06c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc801\uc808\ud55c \ub9cc\ub8cc \uc2dc\ud55c \uc124\uc815 : \uc2dc\uc758\uc131\uc774 \uc911\uc694\ud55c(Time-sensitive) \ucf58\ud150\uce20\uc758 \uacbd\uc6b0 \ub9cc\ub8cc \uc2dc\uc810\uc744 \uc798 \uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CDN \uc7a5\uc560\uc5d0 \ub300\ud55c \ub300\ucc98 \ubc29\uc548 : CDN \uc790\uccb4\uac00 \uc8fd\uc5c8\uc744 \ub54c \uc6f9\uc0ac\uc774\ud2b8/\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud574\uc57c \ud558\ub294\uc9c0 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucf58\ud150\uce20 \ubb34\ud6a8\ud654(invalidation) \ubc29\ubc95",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CDN \uc11c\ube44\uc2a4 \uc0ac\uc5c5\uc790\uac00 \uc81c\uacf5\ud558\ub294 API\ub97c \uc774\uc6a9\ud558\uc5ec \ucf58\ud150\uce20 \ubb34\ud6a8\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ucf58\ud150\uce20\uc758 \ub2e4\ub978 \ubc84\uc804\uc744 \uc11c\ube44\uc2a4\ud558\ub3c4\ub85d \uc624\ube0c\uc81d\ud2b8 \ubc84\uc800\ub2dd(object versioning) \uc774\uc6a9")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubb34\uc0c1\ud0dcstateless-\uc6f9-\uacc4\uce35"},"\ubb34\uc0c1\ud0dc(stateless) \uc6f9 \uacc4\uce35"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uacc4\uce35\uc744 \uc218\ud3c9\uc801\uc73c\ub85c \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc0c1\ud0dc-\uc815\ubcf4-\uc758\uc874\uc801\uc778-\uc544\ud0a4\ud14d\ucc98"},"\uc0c1\ud0dc \uc815\ubcf4 \uc758\uc874\uc801\uc778 \uc544\ud0a4\ud14d\ucc98"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc \uc815\ubcf4\ub97c \ubcf4\uad00\ud558\ub294 \uc11c\ubc84\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc815\ubcf4, \uc989 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uc5ec \uc694\uccad\ub4e4 \uc0ac\uc774\uc5d0 \uacf5\uc720\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb34\uc0c1\ud0dc \uc11c\ubc84\uc5d0\ub294 \uc774\ub7ec\ud55c \uc7a5\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc81c \uc911 \ud558\ub098\ub294 \uac19\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130\uc758 \uc694\uccad\uc740 \ud56d\uc0c1 \uac19\uc740 \uc11c\ubc84\ub85c \uc804\uc1a1\ud574\uc57c \ud55c\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc5d0 \ubd80\ub2f4\uc744 \uc90d\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ubb34\uc0c1\ud0dc-\uc544\ud0a4\ud14d\ucc98"},"\ubb34\uc0c1\ud0dc \uc544\ud0a4\ud14d\ucc98"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/184120747-8cf54988-63fb-438f-8b37-f7b782a66a2e.png",alt:"\ubb34\uc0c1\ud0dc \uc544\ud0a4\ud14d\ucc98"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud558\uace0, \uc548\uc815\uc801\uc774\uba70, \uaddc\ubaa8 \ud655\uc7a5\uc774 \uc27d\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub370\uc774\ud130-\uc13c\ud130"},"\ub370\uc774\ud130 \uc13c\ud130"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc13c\ud130\ub97c \uc774\uc6a9\ud558\ub294 \uc0ac\ub840\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/184121838-e9a0efe5-6d3a-439b-a05e-7a798974726c.png",alt:"\ub2e4\uc911 \ub370\uc774\ud130\uc13c\ud130"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \ub09c\uc81c\ub97c \ud574\uacb0\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud2b8\ub798\ud53d \uc6b0\ud68c: \uc62c\ubc14\ub978 \ub370\uc774\ud130 \uc13c\ud130\ub85c \ud2b8\ub798\ud53d\uc744 \ubcf4\ub0b4\ub294 \ud6a8\uacfc\uc801\uc778 \ubc29\ubc95\uc744 \ucc3e\uc544\uc57c\ud569\ub2c8\ub2e4. (ex. GeoDNS)"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ub3d9\uae30\ud654(synchronization): \ub370\uc774\ud130 \uc13c\ud130\ub9c8\ub2e4 \ubcc4\ub3c4\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uc774\ub97c \ub2e4\uc911\ud654 \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\uc640 \ubc30\ud3ec(deployment): \uc5ec\ub7ec \ud14c\uc2a4\ud2b8 \ubc0f \uc790\ub3d9\ud654 \ubc30\ud3ec \ub3c4\uad6c \ub4f1\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \ub354 \ud070 \uaddc\ubaa8\ub85c \ud655\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc2dc\uc2a4\ud15c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubd84\ub9ac\ud558\uc5ec \uac01\uae30 \ub3c5\ub9bd\uc801\uc73c\ub85c \ud655\uc7a5\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uba54\uc2dc\uc9c0-\ud050"},"\uba54\uc2dc\uc9c0 \ud050"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \ud050\ub294 \uba54\uc2dc\uc9c0\uc758 \ubb34\uc190\uc2e4(durability))\uc744 \ubcf4\uc7a5\ud558\ub294 \ube44\ub3d9\uae30 \ud1b5\uc2e0\uc744 \uc9c0\uc6d0\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \ud050\ub97c \uc774\uc6a9\ud558\uba74 \uc11c\ube44\uc2a4 \ub610\ub294 \uc11c\ube44\uc2a4 \ub610\ub294 \uc11c\ubc84 \uac04 \uacb0\ud569\uc774 \ub290\uc2a8\ud574\uc838\uc11c, \uaddc\ubaa8 \ud655\uc7a5\uc131\uc774 \ubcf4\uc7a5\ub418\uc5b4\uc57c \ud558\ub294 \uc548\uc815\uc801 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub85c\uadf8-\uba54\ud2b8\ub9ad-\uadf8\ub9ac\uace0-\uc790\ub3d9\ud654"},"\ub85c\uadf8, \uba54\ud2b8\ub9ad \uadf8\ub9ac\uace0 \uc790\ub3d9\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4\uac00 \ucee4\uc9c8 \uc218\ub85d, \uc5ec\ub7ec \ub3c4\uad6c\ub4e4\uc774 \ubc18\ub4dc\uc2dc \ud544\uc694\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub85c\uadf8: \uc5d0\ub7ec \ub85c\uadf8\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uac83\uc740 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba54\ud2b8\ub9ad: \uba54\ud2b8\ub9ad\uc744 \uc798 \uc218\uc9d1\ud558\uba74 \uc0ac\uc5c5 \ud604\ud669\uc5d0 \uad00\ud55c \uc720\uc6a9\ud55c \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud638\uc2a4\ud2b8 \ub2e8\uc704 \ub9e4\u3154\ud2b8\ub9ad: CPU, \uba54\ubaa8\ub9ac, \ub514\uc2a4\ud06c I/O \ub4f1"),(0,r.kt)("li",{parentName:"ul"},"\uc885\ud569(aggregated) \uba54\ud2b8\ub9ad: \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uacc4\uce35\uc758 \uc131\ub2a5, \uce90\uc2dc \uacc4\uce35\uc758 \uc131\ub2a5 \ub4f1"),(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ube44\uc988\ub2c8\uc2a4 \uba54\ud2b8\ub9ad: \uc77c\ubcc4 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790, \uc218\uc775, \uc7ac\ubc29\ubb38 \ub4f1"))),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654: \uc2dc\uc2a4\ud15c\uc774 \ud06c\uace0 \ubcf5\uc7a1\ud574\uc9c0\uba74 \uc0dd\uc0b0\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc790\ub3d9\ud654 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uba54\uc2dc\uc9c0-\ud050-\ub85c\uadf8-\uba54\ud2b8\ub9ad-\uc790\ub3d9\ud654-\ub4f1\uc744-\ubc18\uc601\ud558\uc5ec-\uc218\uc815\ud55c-\uc124\uacc4\uc548"},"\uba54\uc2dc\uc9c0 \ud050, \ub85c\uadf8, \uba54\ud2b8\ub9ad, \uc790\ub3d9\ud654 \ub4f1\uc744 \ubc18\uc601\ud558\uc5ec \uc218\uc815\ud55c \uc124\uacc4\uc548"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/184123939-e9f587da-b946-4ecb-8a67-a79374623afd.png",alt:"\uba54\uc2dc\uc9c0 \ud050, \ub85c\uadf8 \ub4f1 \ucd94\uac00"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758-\uaddc\ubaa8-\ud655\uc7a5"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uaddc\ubaa8 \ud655\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ud560 \ub370\uc774\ud130\uac00 \ub9ce\uc544\uc9c0\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub300\ud55c \ubd80\ud558\ub3c4 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub450\uac00\uc9c0 \uc811\uadfc\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc218\uc9c1\uc801-\ud655\uc7a5"},"\uc218\uc9c1\uc801 \ud655\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc11c\ubc84\uc5d0 \ub354 \uc88b\uc740 \uace0\uc131\ub2a5\uc758 \uc790\uc6d0\uc744 \uc99d\uc124\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc57d\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud55c\uacc4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"SPOF(Single Point of Failure)\ub85c \uc778\ud55c \uc704\ud5d8\uc131\uc774 \ud07d\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube44\uc6a9\uc774 \ub9ce\uc774 \ub4ed\ub2c8\ub2e4. \uace0\uc131\ub2a5 \uc11c\ubc84\ub85c \uac08\uc218\ub85d \uac00\uaca9\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uc218\ud3c9\uc801-\ud655\uc7a5"},"\uc218\ud3c9\uc801 \ud655\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc218\ud3c9\uc801 \ud655\uc7a5\uc740 \uc0e4\ub529\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0e4\ub529\uc740 \ub300\uaddc\ubaa8 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0e4\ub4dc\ub77c\uace0 \ubd80\ub974\ub294 \uc791\uc740 \ub2e8\uc704\ub85c \ubd84\ud560\ud558\ub294 \uae30\uc220\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0e4\ub529 \uc804\ub7b5\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uac83\uc740 \uc0e4\ub529 \ud0a4\ub97c \uc5b4\ub5bb\uac8c \uc815\ud558\ub290\ub0d0\uc758 \ubb38\uc81c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \ubb38\uc81c\ub97c \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 \uc7ac\uc0e4\ub529 : \ub370\uc774\ud130\uac00 \ub108\ubb34 \ub9ce\uc544\uc838\uc11c \ud558\ub098\uc758 \uc0e4\ub4dc\ub85c \uac10\ub2f9\uc774 \ud798\ub4e4\ub54c \ubd84\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc720\uba85\uc778\uc0ac \ubb38\uc81c: \ud56b\uc2a4\ud31f \ud0a4, \ud2b9\uc815 \uc0e4\ub4dc\uc5d0 \uc9c8\uc758\uac00 \uc9d1\uc911\ub418\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc870\uc778\uacfc \ube44\uc815\uaddc\ud654: \uc5ec\ub7ec \uc0e4\ub4dc\uc5d0 \uac78\uce58 \ub370\uc774\ud130\ub97c \uc870\uc778\ud558\uae30\uac00 \ud798\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubc31\ub9cc-\uc0ac\uc6a9\uc790-\uadf8\ub9ac\uace0-\uadf8-\uc774\uc0c1"},"\ubc31\ub9cc \uc0ac\uc6a9\uc790, \uadf8\ub9ac\uace0 \uadf8 \uc774\uc0c1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \uaddc\ubaa8\ub97c \ud655\uc815\ud558\ub294 \uac83\uc740 \uc9c0\uc18d\uc801\uc774\uace0 \ubc18\ubcf5\uc801(iterative)\uc778 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \ucd5c\uc801\ud654\ud558\uace0 \ub354 \uc791\uc740 \ub2e8\uc704\uc758 \uc11c\ube44\uc2a4\ub85c \ubd84\ud560\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uae30\ubc95\uc744 \uc815\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uacc4\uce35\uc740 \ubb34\uc0c1\ud0dc \uacc4\uce35\uc73c\ub85c"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uacc4\uce35\uc5d0 \ub2e4\uc911\ud654 \ub3c4\uc785"),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \ud55c \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uce90\uc2dc\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub370\uc774\ud130 \uc13c\ud130\ub97c \uc9c0\uc6d0\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uc815\uc801 \ucf58\ud150\uce20\ub294 CDN\uc744 \ud1b5\ud574 \uc11c\ube44\uc2a4\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uacc4\uce35\uc740 \uc0e4\ub529\uc744 \ud1b5\ud574 \uadf8 \uaddc\ubaa8\ub97c \ud655\uc7a5\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uac01 \uacc4\uce35\uc740 \ub3c5\ub9bd\uc801 \uc11c\ube44\uc2a4\ub85c \ubd84\ud560\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0, \uc790\ub3d9\ud654 \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud560 \uac83")))))}m.isMDXComponent=!0}}]);