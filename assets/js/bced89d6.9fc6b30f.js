"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[9172],{3905:function(e,t,l){l.d(t,{Zo:function(){return k},kt:function(){return N}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),d=m(l),N=a,s=d["".concat(p,".").concat(N)]||d[N]||o[N]||r;return l?n.createElement(s,i(i({ref:t},k),{},{components:l})):n.createElement(s,i({ref:t},k))}));function N(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var m=2;m<r;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5103:function(e,t,l){l.r(t),l.d(t,{default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i={sidebar_position:9},u={unversionedId:"dev/system-design-interview/ch9",id:"dev/system-design-interview/ch9",isDocsHomePage:!1,title:"9. \uc6f9 \ud06c\ub864\ub7ec \uc124\uacc4",description:"- \ud06c\ub864\ub7ec\ub294 \ub2e4\uc591\ud558\uac8c \uc774\uc6a9\ub429\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch9.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch9",permalink:"/til/docs/dev/system-design-interview/ch9",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch9.md",version:"current",lastUpdatedAt:1668304586,formattedLastUpdatedAt:"11/13/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. URL \ub2e8\ucd95\uae30 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch8"},next:{title:"10\uc7a5. \uc54c\ub9bc \uc2dc\uc2a4\ud15c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch10"}},p=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815",id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"DFS\ub97c \uc4f8 \uac83\uc778\uac00, BFS\ub97c \uc4f8 \uac83\uc778\uac00",id:"dfs\ub97c-\uc4f8-\uac83\uc778\uac00-bfs\ub97c-\uc4f8-\uac83\uc778\uac00",children:[]},{value:"\ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c",id:"\ubbf8\uc218\uc9d1-url-\uc800\uc7a5\uc18c",children:[]},{value:"HTML \ub2e4\uc6b4\ub85c\ub354",id:"html-\ub2e4\uc6b4\ub85c\ub354",children:[]},{value:"\uc548\uc815\uc131",id:"\uc548\uc815\uc131",children:[]},{value:"\ud655\uc7a5\uc131",id:"\ud655\uc7a5\uc131",children:[]},{value:"\ubb38\uc81c \uc788\ub294 \ucf58\ud150\uce20 \uac10\uc9c0 \ubc0f \ud68c\ud53c \uc804\ub7b5",id:"\ubb38\uc81c-\uc788\ub294-\ucf58\ud150\uce20-\uac10\uc9c0-\ubc0f-\ud68c\ud53c-\uc804\ub7b5",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],m={toc:p};function k(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub7ec\ub294 \ub2e4\uc591\ud558\uac8c \uc774\uc6a9\ub429\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac80\uc0c9 \uc5d4\uc804 \uc778\ub371\uc2f1(search engine indexing): \ud06c\ub864\ub7ec\uc758 \uac00\uc7a5 \ubcf4\ud3b8\uc801\uc778 \uc6a9\ub840"),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \uc544\uce74\uc774\ube59(web archiving): \ub098\uc911\uc5d0 \uc0ac\uc6a9\ud560 \ubaa9\uc801\uc73c\ub85c \uc7a5\uae30\ubcf4\uad00\ud558\uae30 \uc704\ud574 \uc6f9\uc5d0\uc11c \uc815\ubcf4\ub97c \ubaa8\uc73c\ub294 \uc808\ucc28"),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ub9c8\uc774\ub2dd(web mining): \uc6f9 \ub9c8\uc774\ub2dd\uc744 \ud1b5\ud574 \uc778\ud130\ub137\uc5d0\uc11c \uc720\uc6a9\ud55c \uc9c0\uc2dd\uc744 \ub3c4\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ubaa8\ub2c8\ud130\ub9c1(web monitoring): \ud06c\ub864\ub7ec\ub97c \ud1b5\ud574 \uc800\uc791\uad8c\uc774\ub098 \uc0c1\ud45c\uad8c\uc774 \uce68\ud574\ub418\ub294 \uc0ac\ub840\ub97c \ubaa8\ub2c8\ud130\ub9c1")))),(0,r.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud06c\ub864\ub7ec\uc758 \uae30\ubcf8 \uc54c\uace0\ub9ac\uc998\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(1) URL \uc9d1\ud569\uc774 \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc9c0\uba74, \ud574\ub2f9 URL\ub4e4\uc774 \uac00\ub9ac\ud0a4\ub294 \ubaa8\ub4e0 \uc6f9 \ud398\uc774\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"(2) \ub2e4\uc6b4\ubc1b\uc740 \uc6f9 \ud398\uc774\uc9c0\uc5d0 URL\ub4e4\uc744 \ucd94\ucd9c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"(3) \ucd94\ucd9c\ub41c URL\ub4e4\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud560 URL \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud558\uace0 \uc704\uc758 \uacfc\uc815\uc744 \ucc98\uc74c\ubd80\ud130 \ubc18\ubcf5\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc131: \uc6f9\uc740 \uac70\ub300\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc548\uc815\uc131(robustness): \ube44\uc815\uc0c1\uc801\uc778 \uc785\ub825\uc774\ub098 \ud658\uacbd\uc5d0 \uc798 \ub300\uc751\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc808(politeness): \ud06c\ub864\ub7ec\ub294 \uc218\uc9d1 \ub300\uc0c1 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \uc9e7\uc740 \uc2dc\uac04 \ub3d9\uc548 \ub108\ubb34 \ub9ce\uc740 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud655\uc7a5\uc131(extensibility): \uc0c8\ub85c\uc6b4 \ud615\ud0dc\uc758 \ucf58\ud150\uce20\ub97c \uc9c0\uc6d0\ud558\uae30\uac00 \uc26c\uc6cc\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815"},"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9e4\ub2ec 10\uc5b5 \uac1c\uc758 \uc6f9 \ud398\uc774\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"QPS = 10\uc5b5/30\uc77c/24\uc2dc\uac04/3600\ucd08 = \ub300\ub7b5 400\ud398\uc774\uc9c0/\ucd08"),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\ub300(Peak) QPS = 2 * QPS = 800"),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0\uc758 \ud06c\uae30 \ud3c9\uade0\uc740 500k\ub77c\uace0 \uac00\uc815"),(0,r.kt)("li",{parentName:"ul"},"10\uc5b5 \ud398\uc774\uc9c0 * 500k = 500TB/\uc6d4"),(0,r.kt)("li",{parentName:"ul"},"1\uac1c\uc6d4\uce58 \ub370\uc774\ud130\ub97c \ubcf4\uad00\ud558\ub294\ub370 500TB, 5\ub144\uac04 \ubcf4\uad00\ud55c\ub2e4\uace0 \uac00\uc815\uc2dc 500TB ",(0,r.kt)("em",{parentName:"li"}," 12\uac1c\uc6d4 ")," 5sus = 30PB\uc758 \uc800\uc7a5\uc6a9\ub7c9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/186928449-612b2dfe-dc8b-4fbe-9dda-11d94d38509b.png",alt:"\uac1c\ub7b5\uc801 \uc124\uacc4"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc791 URL \uc9d1\ud569",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc791 URL \uc9d1\ud569\uc740 \uc6f9 \ud06c\ub864\ub7ec\uac00 \ud06c\ub864\ub9c1\uc744 \uc2dc\uc791\ud558\ub294 \ucd9c\ubc1c\uc810\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FIFO \ud050 \ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"HTML \ub2e4\uc6b4\ub85c\ub354",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTML \ub2e4\uc6b4\ub85c\ub354\ub294 \uc778\ud130\ub137\uc5d0\uc11c \uc6f9 \ud398\uc774\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc774\ub984 \ubcc0\ud658\uae30",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0\ub97c \ub2e4\uc6b4\ubc1b\uc73c\ub824\uba74 URL\uc744 IP \uc8fc\uc18c\ub85c \ubcc0\ud658\ud558\ub294 \uc808\ucc28\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ucf58\ud150\uce20 \ud30c\uc11c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uba74 \ud30c\uc2f1(parsing)\uacfc \uac80\uc99d(validation) \uc808\ucc28\ub97c \uac70\uccd0\uc57c \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc911\ubcf5 \ucf58\ud150\uce20\uc778\uac00?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0 \ud574\uc2dc \uac12\uc744 \ube44\uad50\ud558\uc5ec \uc911\ubcf5 \ucee8\ud150\uce20\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ucf58\ud150\uce20 \uc800\uc7a5\uc18c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc591\uc774 \ub108\ubb34 \ub9ce\uc73c\ubbc0\ub85c \ub300\ubd80\ubd84\uc758 \ucf58\ud150\uce20\ub294 \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc778\uae30 \uc788\ub294 \ucf58\ud150\uce20\ub294 \uba54\ubaa8\ub9ac\uc5d0 \ub450\uc5b4 \uc811\uadfc \uc9c0\uc5f0\uc2dc\uac04\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"URL \ucd94\ucd9c\uae30",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL \ucd94\ucd9c\uae30\ub294 HTML \ud398\uc774\uc9c0\ub97c \ud30c\uc2f1\ud558\uc5ec \ub9c1\ud06c\ub4e4\uc744 \uace8\ub77c\ub0b4\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"URL \ud544\ud130",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL \ud544\ud130\ub294 \ud2b9\uc815\ud55c \ucf58\ud150\uce20 \ud0c0\uc785\uc774\ub098 \ud30c\uc77c \ud655\uc7a5\uc790\ub97c \uac16\ub294 URL, \uc811\uc18d \uc2dc \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\ub294 URL, \uc811\uadfc \uc81c\uc678 \ubaa9\ub85d\uc5d0 \ud3ec\ud568\ub41c URL \ub4f1\uc744 \ud06c\ub864\ub9c1 \ub300\uc0c1\uc5d0\uc11c \ubc30\uc81c\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ubc29\ubb38\ud55c URL?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ubc29\ubb38\ud55c URL\uc774\ub098 \ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c\uc5d0 \ubcf4\uad00\ub41c URL\uc744 \ucd94\uc801\ud560 \uc218 \uc788\ub294 \uc790\ub8cc \uad6c\uc870\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube14\ub8f8 \ud544\ud130(bloom filter)\ub098 \ud574\uc2dc \ud14c\uc774\ube14\uc774 \ub110\ub9ac \uc4f0\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"URL \uc800\uc7a5\uc18c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ubc29\ubb38\ud55c URL\uc744 \ubcf4\uad00\ud558\ub294 \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud06c\ub864\ub7ec \uc791\uc5c5 \ud750\ub984",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc704\uc758 \ud654\uc0b4\ud45c \uc21c\uc73c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,r.kt)("h3",{id:"dfs\ub97c-\uc4f8-\uac83\uc778\uac00-bfs\ub97c-\uc4f8-\uac83\uc778\uac00"},"DFS\ub97c \uc4f8 \uac83\uc778\uac00, BFS\ub97c \uc4f8 \uac83\uc778\uac00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9\uc740 directed graph\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub294 \ub178\ub4dc, URL\uc740 \uc5e3\uc9c0\ub77c\uace0 \ubcf4\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub9c1\uc5d0\uc11c DFS\ub97c \uc4f8 \uacbd\uc6b0, \uadf8\ub798\ud504 \ud06c\uae30\uac00 \ud074 \uacbd\uc6b0, \uc5b4\ub290 \uc815\ub3c4\ub85c \uae4a\uc219\uc774 \uac00\uac8c \ub420\uc9c0 \uac00\ub2a0\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \uc6f9 \ud06c\ub864\ub7ec\ub294 \ubcf4\ud1b5 BFS\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uad6c\ud604\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud55c \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uc624\ub294 \ub9c1\ud06c\uc758 \uc0c1\ub2f9\uc218\ub294 \uac19\uc740 \uc11c\ubc84\ub85c \ub418\ub3cc\uc544 \uac11\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud45c\uc900\uc801 BFS \uc54c\uace0\ub9ac\uc998\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \ub450\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\ubbf8\uc218\uc9d1-url-\uc800\uc7a5\uc18c"},"\ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubbf8\uc218\uc9d1 URL\uc744 \ud1b5\ud574 \uc704\uc758 \ub450\uac00\uc9c0 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc608\uc758"},"\uc608\uc758"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud06c\ub864\ub7ec\ub294 \uc218\uc9d1 \ub300\uc0c1 \uc11c\ubc84\ub85c \uc9e7\uc740 \uc2dc\uac04 \uc548\uc5d0 \ub9ce\uc740 \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uac83\uc744 \uc0bc\uac00\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc6b0\uc120\uc21c\uc704"},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL \ub9c8\ub2e4 \ud398\uc774\uc9c0 \ub7ad\ud0b9\uc744 \ub9e4\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\ud2b8\ub798\ud53d \uc591\uc774\ub098 \uac31\uc2e0 \ube48\ub3c4 \ub4f1)")),(0,r.kt)("p",null,"\uc704\uc758 \uc608\uc758\uc640 \uc6b0\uc120\uc21c\uc704\ub97c \uace0\ub824\ud55c \uc124\uacc4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/187006350-d13d7b67-0ec6-4299-af51-b2209f2dd24f.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc804\uba74 \ud050(front queue): \uc6b0\uc120\uc21c\uc704 \uacb0\uc815 \uacfc\uc815\uc744 \ucc98\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\ud6c4\uba74 \ud050(back queue): \ud06c\ub864\ub7ec\uac00 \uc608\uc758 \ubc14\ub974\uac8c \ubcf4\uc99d\ud558\ub3c4\ub85d \ubcf4\uc99d\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc2e0\uc120\ub3c4"},"\uc2e0\uc120\ub3c4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0\ub294 \uc218\uc2dc\ub85c \ucd94\uac00\ub418\uace0, \uc0ad\uc81c\ub418\uace0, \ubcc0\uacbd\ub418\ubbc0\ub85c \ub370\uc774\ud130\uc758 \uc2e0\uc120\ud568\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc8fc\uae30\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ucd5c\uc801\ud654\ud558\ub294 \uc804\ub7b5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0\uc758 \ubcc0\uacbd \uc774\ub825(update history) \ud65c\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"\uc6b0\uc120\uc21c\uc704\ub97c \ud65c\uc6a9\ud558\uc5ec, \uc911\uc694\ud55c \ud398\uc774\uc9c0\ub294 \uc880 \ub354 \uc790\uc8fc \uc7ac\uc218\uc9d1")))),(0,r.kt)("h4",{id:"\ubbf8\uc218\uc9d1-url-\uc800\uc7a5\uc18c\ub97c-\uc704\ud55c-\uc9c0\uc18d\uc131-\uc800\uc7a5\uc7a5\uce58"},"\ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c\ub97c \uc704\ud55c \uc9c0\uc18d\uc131 \uc800\uc7a5\uc7a5\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL\uc758 \uc218\ub294 \uc218\uc5b5 \uac1c\uc5d0 \ub2e4\ub77c\ubbc0\ub85c \ubaa8\ub450 \uba54\ubaa8\ub9ac\uc5d0 \ubcf4\uad00\uc740 \uc801\ud569\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"html-\ub2e4\uc6b4\ub85c\ub354"},"HTML \ub2e4\uc6b4\ub85c\ub354"),(0,r.kt)("h4",{id:"robotstxt"},"Robots.txt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9\uc0ac\uc774\ud2b8\uac00 \ud06c\ub864\ub7ec\uc640 \uc18c\ud1b5\ud558\ub294 \ud45c\uc900\uc801\uc778 \ubc29\ubc95")),(0,r.kt)("h4",{id:"\uc131\ub2a5-\ucd5c\uc801\ud654"},"\uc131\ub2a5 \ucd5c\uc801\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubd84\uc0b0 \ud06c\ub864\ub9c1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 \ud06c\ub864\ub9c1 \uc791\uc5c5\uc744 \uc5ec\ub7ec \uc11c\ubc84\uc5d0 \ubd84\uc0b0\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc774\ub984 \ubcc0\ud658 \uacb0\uacfc \uce90\uc2dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DNS Resolver\ub294 \ud06c\ub864\ub7ec \uc131\ub2a5\uc758 \ubcd1\ubaa9 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"DNS \uc870\ud68c \uacb0\uacfc\ub85c \uc5bb\uc5b4\uc9c4 \ub3c4\uba54\uc778 \uc774\ub984\uacfc IP \uc8fc\uc18c \uc0ac\uc774\uc758 \uad00\uacc4\ub97c \uce90\uc2dc\uc5d0 \ubcf4\uad00\ud574 \ub193\uace0 \ud06c\ub860 \uc7a1 \ub4f1\uc744 \ub3cc\ub824 \uc8fc\uae30\uc801\uc73c\ub85c \uac31\uc2e0\ud558\ub3c4\ub85d \ud558\uba74 \uc131\ub2a5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h4",{id:"\uc9c0\uc5ed\uc131"},"\uc9c0\uc5ed\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub9c1 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uc11c\ubc84\ub97c \uc9c0\uc5ed\ubcc4\ub85c \ubd84\uc0b0\ud558\ub294 \ubc29\ubc95")),(0,r.kt)("h4",{id:"\uc9e7\uc740-\ud0c0\uc784\uc544\uc6c3"},"\uc9e7\uc740 \ud0c0\uc784\uc544\uc6c3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc6f9 \uc11c\ubc84\ub294 \uc751\ub2f5\uc774 \ub290\ub9ac\uac70\ub098 \uc544\uc608 \uc751\ub2f5\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \ucd5c\ub300 \uae30\ub2e4\ub9b4 \uc2dc\uac04\uc744 \uc815\ud574\ub193\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc548\uc815\uc131"},"\uc548\uc815\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc(consistent hashing) : \ub2e4\uc6b4\ub85c\ub4dc \uc11c\ubc84\ub4e4\uc5d0 \ubd80\ud558\ub97c \ubd84\uc0b0\ud560 \ub54c \uc801\uc6a9 \uac00\ub2a5\ud55c \uae30\uc220\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub9c1 \uc0c1\ud0dc \ubc0f \uc218\uc9d1 \ub370\uc774\ud130 \uc800\uc7a5 : \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0\uc5d0\ub3c4 \uc27d\uac8c \ubcf5\uad6c\ud560 \uc218 \uc788\ub3c4\ub85d \ud06c\ub864\ub9c1 \uc0c1\ud0dc\uc640 \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub97c \uc9c0\uc18d\uc801 \uc800\uc7a5\uc7a5\uce58\uc5d0 \uae30\ub85d\ud574 \ub450\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc678 \ucc98\ub9ac(exception handling) : \ub300\uaddc\ubaa8 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc5d0\ub7ec(error)\ub294 \ubd88\uac00\ud53c\ud560 \ubfd0 \uc544\ub2c8\ub77c \ud754\ud558\uac8c \ubc8c\uc5b4\uc9c0\ub294 \uc77c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uac80\uc99d(data validation) : \uc2dc\uc2a4\ud15c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud55c \uc911\uc694 \uc218\ub2e8 \uac00\uc6b4\ub370 \ud558\ub098\uc785\ub2c8\ub2e4. ")),(0,r.kt)("h3",{id:"\ud655\uc7a5\uc131"},"\ud655\uc7a5\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704 \uccab\ubc88\uc9f8 \uadf8\ub9bc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"li"},"URL \ucd94\ucd9c\uae30")," \uc790\ub9ac\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"PNG \ub2e4\uc6b4\ub85c\ub354"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc6f9 \ubaa8\ub2c8\ud130")," \ub4f1\uc758 \ubaa8\ub4c8\uacfc \ud568\uaed8 \ud655\uc7a5 \ubaa8\ub4c8\ub85c \uc124\uacc4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ubb38\uc81c-\uc788\ub294-\ucf58\ud150\uce20-\uac10\uc9c0-\ubc0f-\ud68c\ud53c-\uc804\ub7b5"},"\ubb38\uc81c \uc788\ub294 \ucf58\ud150\uce20 \uac10\uc9c0 \ubc0f \ud68c\ud53c \uc804\ub7b5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc911\ubcf5 \ucf58\ud150\uce20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6f9 \ucee8\ud150\uce20\uc758 30% \uac00\ub7c9\uc740 \uc911\ubcf5\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uac70\ubbf8 \ub36b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub7ec\ub97c \ubb34\ud55c \ub8e8\ud504\uc5d0 \ube60\ub728\ub9ac\ub3c4\ub85d \uc124\uacc4\ud55c \uc6f9 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\ub300 \uae38\uc774\ub97c \uc81c\ud55c\ud568\uc73c\ub85c \ud68c\ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \ub36b\uc758 \uacbd\uc6b0, \uae30\uc775\ud560 \uc815\ub3c4\ub85c \uc6f9 \ud398\uc774\uc9c0\uac00 \ub9ce\uc740 \uac8c \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ub178\uc774\uc988",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ucf58\ud150\uce20\ub294 \uac00\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc544\ub798\uc758 \uc0ac\ud56d\uc744 \ucd94\uac00\uc801\uc778 \uc774\uc57c\uae30\ub97c \ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uce21 \ub79c\ub354\ub9c1(SSR): \ub9ce\uc740 \uc0ac\uc774\ud2b8\uac00 \uc790\ubc14 \uc2a4\ud06c\ub9bd\ud2b8, AJAX \ub4f1\uc758 \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc11c \ub9c1\ud06c\ub97c\uc989\uc11d\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ub0c5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6d0\uce58 \uc54a\ub294 \ud398\uc774\uc9c0 \ud544\ud130\ub9c1: \uc800\uc7a5 \uacf5\uac04 \ub4f1 \ud06c\ub864\ub9c1\uc5d0 \uc18c\uc694\ub418\ub294 \uc790\uc6d0\uc740 \uc720\ud55c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ud338\ubc29\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\ub974 \ub450\uc5b4 \ud488\uc9c8\uc774 \uc870\uc545\ud558\uac70\ub098 \uc2a4\ud338 \uc131\uc778 \ud398\uc774\uc9c0\ub97c \uac78\ub7ec\ub0b4\ub3c4\ub85d \ud574 \ub461\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub2e4\uc911\ud654 \ubc0f \uc0e4\ub529: \ub2e4\uc911\ud654\ub098 \uc0e4\ub529 \uac19\uc740 \uae30\ubc95 \uc801\uc6a9\uc2dc, \ub370\uc774\ud130 \uacc4\uce35\uc758 \uac00\uc6a9\uc131,\uaddc\ubaa8 \ud655\uc7a5\uc131, \uc548\uc815\uc131\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc131: \uc11c\ubc84\uac00 \uc0c1\ud0dc\uc815\ubcf4\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uac83, \uc989 \ubb34\uc0c1\ud0dc(stateless)\uc11c\ubc84\ub85c \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc6a9\uc131, \uc77c\uad00\uc131, \uc548\uc815\uc131: \ud544\uc218\uc801\uc73c\ub85c \uace0\ub824\ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubd84\uc11d \uc194\ub8e8\uc158(analytics): \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \ubd84\uc11d\ud558\ub294 \uac83\uc740 \uc5b4\ub290 \uc2dc\uc2a4\ud15c\uc5d0\uac8c\ub098 \uc911\uc694\ud569\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);