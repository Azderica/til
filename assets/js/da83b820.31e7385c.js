"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4338],{3905:function(e,t,l){l.d(t,{Zo:function(){return k},kt:function(){return d}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),o=m(l),d=r,s=o["".concat(p,".").concat(d)]||o[d]||c[d]||a;return l?n.createElement(s,i(i({ref:t},k),{},{components:l})):n.createElement(s,i({ref:t},k))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=o;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}o.displayName="MDXCreateElement"},5805:function(e,t,l){l.r(t),l.d(t,{default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i={sidebar_position:13},u={unversionedId:"dev/system-design-interview/ch13",id:"dev/system-design-interview/ch13",isDocsHomePage:!1,title:"13\uc7a5. \uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131 \uc2dc\uc2a4\ud15c",description:"- \uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch13.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch13",permalink:"/til/docs/dev/system-design-interview/ch13",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch13.md",version:"current",lastUpdatedAt:1670657990,formattedLastUpdatedAt:"12/10/2022",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"12\uc7a5. \ucc44\ud305 \uc2dc\uc2a4\ud15c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch12"},next:{title:"14\uc7a5. \uc720\ud29c\ube0c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch14"}},p=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",children:[]},{value:"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815",id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815",children:[]}]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4",id:"\ub370\uc774\ud130-\uc218\uc9d1-\uc11c\ube44\uc2a4",children:[]},{value:"\uc9c8\uc758 \uc11c\ube44\uc2a4",id:"\uc9c8\uc758-\uc11c\ube44\uc2a4",children:[]}]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\ud2b8\ub77c\uc774 \uc790\ub8cc\uad6c\uc870",id:"\ud2b8\ub77c\uc774-\uc790\ub8cc\uad6c\uc870",children:[]},{value:"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4",id:"\ub370\uc774\ud130-\uc218\uc9d1-\uc11c\ube44\uc2a4-1",children:[]},{value:"\uc9c8\uc758 \uc11c\ube44\uc2a4",id:"\uc9c8\uc758-\uc11c\ube44\uc2a4-1",children:[]},{value:"\ud2b8\ub77c\uc774 \uc5f0\uc0b0",id:"\ud2b8\ub77c\uc774-\uc5f0\uc0b0",children:[]},{value:"\uc800\uc7a5\uc18c \uaddc\ubaa8 \ud655\uc7a5",id:"\uc800\uc7a5\uc18c-\uaddc\ubaa8-\ud655\uc7a5",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],m={toc:p};function k(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"5\uac1c\uc758 \uc790\ub3d9 \uc644\uc131 \uac80\uc0c9\uc5b4\uac00 \ud45c\uc2dc\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"5\uac1c\ub97c \uace0\ub974\ub294 \uae30\uc900\uc740 \uc9c8\uc758 \ube48\ub3c4\uc5d0 \ub530\ub77c \uc815\ud574\uc9c0\ub294 \uac80\uc0c9\uc5b4 \uc778\uae30 \uc21c\uc704\ub85c \uc0bd\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9de\ucda4\ubc95 \uac80\uc0ac\ub098 \uc790\ub3d9\uc218\uc815\uc740 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc9c8\uc758\ub294 \uc601\uc5b4\ub098, \ub2e4\uad6d\uc5b4 \uc9c0\uc6d0\uc744 \uc0dd\uac01\ud574\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc9c8\uc758\ub294 \uc601\uc5b4 \uc18c\ubb38\uc790\ub85c \uc774\ub8e8\uc5b4\uc9c4\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc77c\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790(DAU) \uae30\uc900\uc73c\ub85c \ucc9c\ub9cc(10million) \uba85\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ube60\ub978 \uc751\ub2f5 \uc18d\ub3c4: \uc0ac\uc6a9\uc790\uac00 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud568\uc5d0 \ub530\ub77c \uc790\ub3d9\uc644\uc131 \uac80\uc0c9\uc5b4\ub3c4 \ucda9\ubd84\ud788 \ube68\ub9ac \ud45c\uc2dc\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc5f0\uad00\uc131: \uc790\ub3d9\uc644\uc131\ub418\uc5b4 \ucd94\ub825\ub418\ub294 \uac80\uc0c9\uc5b4\ub294 \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \ub2e8\uc5b4\uc640 \uc5f0\uad00\ub41c \uac83\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc815\ub82c: \uc2dc\uc2a4\ud15c\uc758 \uacc4\uc0b0 \uacb0\uacfc\ub294 \uc778\uae30\ub3c4 \ub4f1\uc758 \uc21c\uc704 \ubaa8\ub378\uc5d0 \uc758\ud574 \uc815\ub82c\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc131: \uc2dc\uc2a4\ud15c\uc740 \ub9ce\uc740 \ud2b8\ub798\ud53d\uc744 \uac10\ub2f9\ud560 \uc218 \uc788\ub3c4\ub85d \ud655\uc7a5 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uace0\uac00\uc6a9\uc131: \uc2dc\uc2a4\ud15c\uc758 \uc77c\ubd80\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uac70\ub098, \ub290\ub824\uc9c0\uac70\ub098, \uc608\uc0c1\uce58 \ubabb\ud55c \ub124\ud2b8\uc6cc\ud06c \ubb38\uc81c\uac00 \uc0dd\uaca8\ub3c4 \uc2dc\uc2a4\ud15c\uc740 \uacc4\uc18d \uc0ac\uc6a9 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uac1c\ub7b5\uc801-\uaddc\ubaa8-\ucd94\uc815"},"\uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc77c\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790\ub294 \ucc9c\ub9cc \uba85 \uac00\uc815"),(0,a.kt)("li",{parentName:"ul"},"\ud3c9\uade0\uc801\uc73c\ub85c \ud55c \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc77c 10\uac74\uc758 \uac80\uc0c9\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc9c8\uc758\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c 20\ubc14\uc774\ud2b8\uc758 \ub370\uc774\ud130\ub97c \uc785\ub825\ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\ucc3d\uc5d0 \uae00\uc790\ub97c \uc785\ub825\ud560 \ub54c\ub9c8\ub2e4 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131 \ubc31\uc5d4\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0c5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub300\ub7b5 \ucd08\ub2f9 24,000\uac74\uc758 \uc9c8\uc758(QPS)\uac00 \ubc1c\uc0dd\ud560 \uac83\uc785\ub2c8\ub2e4. (10,000,000 * 10\uc9c8\uc758 / \uc77c x 20\uc790 / 24\uc2dc\uac04 / 3600\ucd08)"),(0,a.kt)("li",{parentName:"ul"},"\ucd5c\ub300 QPS = QPS * 2 = \ub300\ub7b5 48,000")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ub7b5\uc801 \uc2dc\uc2a4\ud15c\uc740 \ub450 \ubd80\ubd84\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4(data gathering service): \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \uc9c8\uc758\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc218\uc9d1\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc9c8\uc758 \uc11c\ube44\uc2a4(query service): \uc8fc\uc5b4\uc9c4 \uc9c8\uc758\uc5d0 \ub2e4\uc12f \uac1c\uc758 \uc778\uae30 \uac80\uc0c9\uc5b4\ub97c \uc815\ub82c\ud574 \ub0b4\ub193\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ub370\uc774\ud130-\uc218\uc9d1-\uc11c\ube44\uc2a4"},"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc9c8\uc758\ubb38\uacfc \uc0ac\uc6a9\ube48\ub3c4\ub97c \uc800\uc7a5\ud558\ub294 \ube48\ub3c4 \ud14c\uc774\ube14\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc9c8\uc758-\uc11c\ube44\uc2a4"},"\uc9c8\uc758 \uc11c\ube44\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub450 \uac1c\uc758 \ud544\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"query: \uc9c8\uc758\ubb38\uc744 \uc800\uc7a5\ud558\ub294 \ud544\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"frequency: \uc9c8\uc758\ubb38\uc774 \uc0ac\uc6a9\ub41c \ube48\ub3c4\ub97c \uc800\uc7a5\ud558\ub294 \ud544\ub4dc")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \uc21c\uc11c\ub85c \ucd5c\uc801\ud654\ub97c \ub17c\uc758\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774(trie) \uc790\ub8cc\uad6c\uc870"),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\uc9c8\uc758 \uc11c\ube44\uc2a4"),(0,a.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc774 \uac00\ub2a5\ud55c \uc800\uc7a5\uc18c"),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774 \uc5f0\uc0b0")))),(0,a.kt)("h3",{id:"\ud2b8\ub77c\uc774-\uc790\ub8cc\uad6c\uc870"},"\ud2b8\ub77c\uc774 \uc790\ub8cc\uad6c\uc870"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774\ub294 \ubb38\uc790\uc5f4\ub4e4\uc744 \uac04\ub7b5\ud558\uac8c \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uc790\ub8cc\uad6c\uc870\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ud615\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"p: \uc811\ub450\uc5b4(prefix)\uc758 \uae38\uc774"),(0,a.kt)("li",{parentName:"ul"},"n: \ud2b8\ub77c\uc774 \uc548\uc5d0 \uc788\ub294 \ub178\ub4dc \uac1c\uc218"),(0,a.kt)("li",{parentName:"ul"},"c: \uc8fc\uc5b4\uc9c4 \ub178\ub4dc\uc758 \uc790\uc2dd \ub178\ub4dc \uac1c\uc218"))),(0,a.kt)("li",{parentName:"ul"},"\uc774 \uc54c\uace0\ub9ac\uc998\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"O(p) + O(c) + O(clogc)")," \uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucd5c\uc545\uc758 \uacbd\uc6b0, \uc804\uccb4 \ud2b8\ub77c\uc774\ub97c \ubd10\uc57c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud560 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc811\ub450\uc5b4\uc758 \ucd5c\ub300 \uae38\uc774\ub97c \uc81c\ud55c"),(0,a.kt)("li",{parentName:"ul"},"\uac01 \ub178\ub4dc\uc5d0 \uc778\uae30 \uac80\uc0c9\uc5b4\ub97c \uce90\uc2dc\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h4",{id:"\uc811\ub450\uc5b4-\ucd5c\ub300-\uae38\uc774-\uc81c\ud55c"},"\uc811\ub450\uc5b4 \ucd5c\ub300 \uae38\uc774 \uc81c\ud55c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\ucc3d\uc5d0 \uae34 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\ub294 \uc77c\uc740 \uac70\uc758 \uc5c6\uc73c\uba70 p \uac12\uc740 \uc791\ub2e4\uace0 \uac00\uc815\ud574\ub3c4 \uc548\uc804\ud569\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"\ub178\ub4dc\uc5d0-\uc778\uae30-\uac80\uc0c9\uc5b4-\uce90\uc2dc"},"\ub178\ub4dc\uc5d0 \uc778\uae30 \uac80\uc0c9\uc5b4 \uce90\uc2dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac01 \ub178\ub4dc\uc5d0 k\uac1c\uc758 \uc778\uae30 \uac80\uc0c9\uc5b4\ub97c \uc800\uc7a5\ud574\ub450\uba74 \uc804\uccb4 \ud2b8\ub77c\uc774\ub97c \uac80\uc0c9\ud558\ub294 \uc77c\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc704\uc758 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud558\uba74 \uac01 \ub2e8\uacc4\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 O(1) \uc774\ubbc0\ub85c, \uc54c\uace0\ub9ac\uc998\uc758 \ubcf5\uc7a1\ub3c4\ub3c4 O(1)\ub85c \ubc14\ub00c\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub370\uc774\ud130-\uc218\uc9d1-\uc11c\ube44\uc2a4-1"},"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uc77c \uc218\ucc9c\ub9cc \uac74\uc758 \uc9c8\uc758\uac00 \uc785\ub825\ub420 \uac83\uc774\ub098, \uadf8\ub54c\ub9c8\ub2e4 \ud2b8\ub77c\uc774\ub97c \uac31\uc2e0\ud558\uba74 \uc9c8\uc758 \uc11c\ube44\uc2a4\uac00 \ub290\ub824\uc9d1\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774\uac00 \uc0dd\uc131\ub41c \ud6c4\uc5d0\ub294 \uc778\uae30 \uac80\uc0c9\uc5b4\ub294 \uc790\uc8fc \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/190929574-6364d78c-64dc-41a1-bc95-e72f859e9d6a.png",alt:"\ub370\uc774\ud130 \uc218\uc9d1 \uc11c\ube44\uc2a4"})),(0,a.kt)("h3",{id:"\uc9c8\uc758-\uc11c\ube44\uc2a4-1"},"\uc9c8\uc758 \uc11c\ube44\uc2a4"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/190929714-62582dec-5dda-4329-8b85-3bd8ea2cf39c.png",alt:"\uc9c8\uc758 \uc11c\ube44\uc2a4"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ucd5c\uc801\ud654 \ubc29\ubc95\uc744 \uace0\ub824\ud574\ubd05\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AJAX \uc694\uccad(request)"),(0,a.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \uce90\uc2f1(browser caching)"),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc0d8\ud50c\ub9c1(data sampling)")))),(0,a.kt)("h3",{id:"\ud2b8\ub77c\uc774-\uc5f0\uc0b0"},"\ud2b8\ub77c\uc774 \uc5f0\uc0b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774 \uc0dd\uc131",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774 \uc0dd\uc131\uc740 \uc791\uc5c5 \uc11c\ubc84\uac00 \ub2f4\ub2f9\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774 \uac31\uc2e0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uc8fc \ud55c\ubc88 \uac31\uc2e0"),(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774\uc758 \uac01 \ub178\ub4dc\ub97c \uac1c\ubcc4\ud558\ub294 \uac31\uc2e0(\ud2b8\ub77c\uc774\uac00 \uc791\uc740 \uacbd\uc6b0 \uace0\ub824\ud574\ubd04\uc9c1\ud569\ub2c8\ub2e4.)"))),(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\uc5b4 \uc0ad\uc81c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc704\ud5d8\ud55c \uc9c8\uc758\uc5b4\ub294 \uc790\ub3d9 \uc644\uc131 \uacb0\uacfc\uc5d0\uc11c \uc81c\uac70\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 \ud544\ud130 \uacc4\uce35\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uc800\uc7a5\uc18c-\uaddc\ubaa8-\ud655\uc7a5"},"\uc800\uc7a5\uc18c \uaddc\ubaa8 \ud655\uc7a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub77c\uc774\uac00 \ub108\ubb34 \ud070 \uacbd\uc6b0, \uaddc\ubaa8 \ud655\uc7a5\uc131\ub3c4 \uace0\ub824\ud574\ubd05\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uac80\uc0c9\uc5b4\uc5d0 \ub530\ub77c \uc11c\ubc84\ub97c \ub098\ub215\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc601\uc5b4\uc758 \uacbd\uc6b0, 26\uac1c\uc774\ub098 \ub354 \ub298\ub9b4\ub824\uba74 \uc0e4\ub529\uc744 \ud574\uc57c\ud569\ub2c8\ub2e4.")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc744 \ucd94\uac00\uc801\uc73c\ub85c \uc9c8\ubb38\uc774 \uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0\uc774 \uac00\ub2a5\ud558\ub824\uba74? \ud2b8\ub77c\uc774\uc5d0 \uc720\ub2c8\ucf54\ub4dc \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad6d\uac00\ubcc4\ub85c \uc778\uae30 \uac80\uc0c9\uc5b4 \uc21c\uc704\uac00 \ub2e4\ub974\ub2e4\uba74? \uad6d\uac00\ubcc4 \ub2e4\ub978 \ud2b8\ub77c\uc774 \uc0ac\uc6a9, CDN\ub4f1\uc744 \ud1b5\ud55c \uc751\ub2f5\uc18d\ub3c4 \ud5a5\uc0c1\ub3c4 \uace0\ub824\ud574\ubd05\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uc2e4\uc2dc\uac04 \ubcc0\ud558\ub294 \ucd94\uc774\ub97c \uad6c\ud604\ud558\ub824\uba74?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc0e4\ub529\uc744 \ud1b5\ud558\uc5ec \uc791\uc5c5 \ub300\uc0c1 \ub370\uc774\ud130\uc758 \uc591\uc744 \uc904\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc21c\uc704 \ubaa8\ub378\uc744 \ubc14\uafb8\uc5b4 \ucd5c\uadfc \uac80\uc0c9\uc5b4\uc5d0 \ubcf4\ub2e4 \ub192\uc740 \uac00\uc911\uce58\ub97c \uc8fc\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uac00 \uc2a4\ud2b8\ub9bc \ud615\ud0dc\ub85c \uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))))}k.isMDXComponent=!0}}]);