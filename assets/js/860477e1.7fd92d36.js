"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6708],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=o(n),d=l,s=k["".concat(p,".").concat(d)]||k[d]||c[d]||i;return n?r.createElement(s,a(a({ref:t},m),{},{components:n})):r.createElement(s,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1623:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a={sidebar_position:7},u={unversionedId:"dev/system-design-interview/ch7",id:"dev/system-design-interview/ch7",isDocsHomePage:!1,title:"7. \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc720\uc77c ID \uc0dd\uc131\uae30 \uc124\uacc4",description:"1\ub2e8\uacc4. \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",source:"@site/docs/dev/system-design-interview/ch7.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch7",permalink:"/til/docs/dev/system-design-interview/ch7",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch7.md",version:"current",lastUpdatedAt:1663539008,formattedLastUpdatedAt:"9/18/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. \ud0a4-\uac12 \uc800\uc7a5\uc18c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch6"},next:{title:"8. URL \ub2e8\ucd95\uae30 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch8"}},p=[{value:"1\ub2e8\uacc4. \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[]},{value:"2\ub2e8\uacc4. \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"\ub2e4\uc911 \ub9c8\uc2a4\ud130 \ubcf5\uc81c",id:"\ub2e4\uc911-\ub9c8\uc2a4\ud130-\ubcf5\uc81c",children:[]},{value:"UUID",id:"uuid",children:[]},{value:"\ud2f0\ucf13 \uc11c\ubc84",id:"\ud2f0\ucf13-\uc11c\ubc84",children:[]},{value:"\ud2b8\uc704\ud130 \uc2a4\ub178\ud50c\ub808\uc774\ud06c \uc811\uadfc\ubc95",id:"\ud2b8\uc704\ud130-\uc2a4\ub178\ud50c\ub808\uc774\ud06c-\uc811\uadfc\ubc95",children:[]}]},{value:"3\ub2e8\uacc4. \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\ud0c0\uc784\uc2a4\ud0ec\ud504",id:"\ud0c0\uc784\uc2a4\ud0ec\ud504",children:[]},{value:"\uc77c\ub828\ubc88\ud638",id:"\uc77c\ub828\ubc88\ud638",children:[]}]},{value:"4\ub2e8\uacc4. \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],o={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4. \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc124\uacc4 \uc6d0\uce59\uc744 \uc608\uc2dc\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ID\ub294 \uc720\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\ub294 \uc22b\uc790\ub85c\ub9cc \uad6c\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\ub294 64\ube44\ud2b8\ub85c \ud45c\ud604\ub420 \uc218 \uc788\ub294 \uac12\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\ub294 \ubc1c\uae09 \ub0a0\uc9dc\uc5d0 \ub530\ub77c \uc815\ub82c \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ucd08\ub2f9 10,000\uac1c\uc758 ID\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4. \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798\uc640 \uac19\uc740 \uc120\ud0dd\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc911 \ub9c8\uc2a4\ud130 \ubcf5\uc81c(multi-master replication)"),(0,i.kt)("li",{parentName:"ul"},"UUID(Universally Unique Identifier)"),(0,i.kt)("li",{parentName:"ul"},"\ud2f0\ucf13 \uc11c\ubc84(ticket server)"),(0,i.kt)("li",{parentName:"ul"},"\ud2b8\uc704\ud130 \uc2a4\ub178\ud50c\ub808\uc774\ud06c(twitter snowflake) \uc811\uadfc\ubc95")))),(0,i.kt)("h3",{id:"\ub2e4\uc911-\ub9c8\uc2a4\ud130-\ubcf5\uc81c"},"\ub2e4\uc911 \ub9c8\uc2a4\ud130 \ubcf5\uc81c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 auto_increment \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\ub294 \uac83\uc774\ub098, 1\ub9cc\ud07c \uc99d\uac00\uac00 \uc544\ub2cc k\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub370\uc774\ud130 \uc13c\ud130\uc5d0 \uac78\uccd0 \uaddc\ubaa8\ub97c \ub298\ub9ac\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\uc758 \uc720\uc77c\uc131\uc740 \ubcf4\uc7a5\ub418\ub098, \uac12\uc774 \uc2dc\uac04 \ud750\ub984\uc5d0 \ub9de\ucd94\uc5b4 \ucee4\uc9c0\ub3c4\ub85d \ubcf4\uc7a5\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc11c\ubc84\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \ub54c\ub3c4 \uc798 \ub3d9\uc791\ud558\ub3c4\ub85d \ub9cc\ub4e4\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("h3",{id:"uuid"},"UUID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UUID\ub294 \ucef4\ud4e8\ud130 \uc2dc\uc2a4\ud15c\uc5d0 \uc800\uc7a5\ub418\ub294 \uc815\ubcf4\ub97c \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c 128\ube44\ud2b8\uc9dc\ub9ac \uc218\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UUID\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \ub2e8\uc21c\ud569\ub2c8\ub2e4. \uc11c\ubc84 \uc0ac\uc774\uc758 \uc870\uc728\uc774 \ud544\uc694 \uc5c6\uc73c\ubbc0\ub85c \ub3d9\uae30\ud654 \uc774\uc288\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac01 \uc11c\ubc84\uac00 \uc790\uae30\uac00 \uc4f8 ID\ub97c \uc54c\uc544\uc11c \ub9cc\ub4dc\ub294 \uad6c\uc870\uc774\ubbc0\ub85c \uaddc\ubaa8 \ud655\uc7a5\ub3c4 \uc27d\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ID\uac00 128\ube44\ud2b8\ub85c \uae41\ub2c8\ub2e4. \uc694\uad6c\uc0ac\ud56d\uacfc \ub9de\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\ub97c \uc2dc\uac04\uc21c\uc73c\ub85c \uc815\ub82c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ID\uc5d0 \uc22b\uc790(numeric) \uc544\ub2cc \uac12\uc774 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("h3",{id:"\ud2f0\ucf13-\uc11c\ubc84"},"\ud2f0\ucf13 \uc11c\ubc84"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"auto_increment \uae30\ub2a5\uc73c \uac16\ucd98 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84(\ud2f0\ucf13 \uc11c\ubc84)\ub97c \uc911\uc559 \uc9d1\uc911\ud615\uc73c\ub85c \ud558\ub098\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc7a5\uc810\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc720\uc77c\uc131\uc774 \ubcf4\uc7a5\ub418\ub294 \uc624\uc9c1 \uc22b\uc790\ub85c\ub9cc \uad6c\uc131\ub41c ID\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uad6c\ud604\ud558\uae30 \uc27d\uace0, \uc911\uc18c \uaddc\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud2f0\ucf13 \uc11c\ubc84\uac00 SPOF(Single-Point-of-Failure)\uac00 \ub429\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774 \uc11c\ubc84\uac00 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uba74, \ubaa8\ub4e0 \uc2dc\uc2a4\ud15c\uc774 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("h3",{id:"\ud2b8\uc704\ud130-\uc2a4\ub178\ud50c\ub808\uc774\ud06c-\uc811\uadfc\ubc95"},"\ud2b8\uc704\ud130 \uc2a4\ub178\ud50c\ub808\uc774\ud06c \uc811\uadfc\ubc95"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc774 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc0dd\uc131\ud574\uc57c \ud558\ub294 ID\uc758 \uad6c\uc870\ub97c \uc5ec\ub7ec \uc808(section)\ub85c \ubd84\ud560\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1\ube44\ud2b8: o",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1\ube44\ud2b8\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"41\ube44\ud2b8: \ud0c0\uc784 \uc2a4\ud0ec\ud504",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uac01 \uc774\ud6c4 \uba87 \ubc00\ub9ac\ucd08\uac00 \uacbd\uacfc\ud588\ub294\uc9c0 \ub098\ud0c0\ub0b4\ub294 \uac12\uc785\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"5\ube44\ud2b8: \ub370\uc774\ud130\uc13c\ud130 ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5\ube44\ud2b8\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4.(2^5=32\uac1c \ub370\uc774\ud130\uc13c\ud130\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.)"))),(0,i.kt)("li",{parentName:"ul"},"5\ube44\ud2b8: \uc11c\ubc84 ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5\ube44\ud2b8 \ud560\ub2f9(\uc704\uc640 \uac19\uc774, \ub370\uc774\ud130\uc13c\ud130\ub2f9 32\uac1c \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"))),(0,i.kt)("li",{parentName:"ul"},"12\ube44\ud2b8: \uc77c\ub828 \ubc88\ud638",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uac01 \uc11c\ubc84\uc5d0\uc11c ID\ub97c \uc0dd\uc131\ud560 \ub54c\ub9c8\ub2e4 \uc77c\ub828 \ubc88\ud638\ub97c 1\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"1\ubc00\ub9ac\ucd08\uac00 \uacbd\uacfc\ud560 \ub54c\ub9c8\ub2e4 0\uc73c\ub85c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4.")))))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4. \uc0c1\uc138 \uc124\uacc4"),(0,i.kt)("h3",{id:"\ud0c0\uc784\uc2a4\ud0ec\ud504"},"\ud0c0\uc784\uc2a4\ud0ec\ud504"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc774 \uc9c0\ub0a0\uc218\ub85d \uc810\uc810 \ub354 \ud070 \uac12\uc744 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ucd5c\ub300 \uae30\uac04\uc740 69\ub144\uc785\ub2c8\ub2e4. \uc774 \uae30\uac04\uc774 \uc9c0\ub098\uba74 \uc624\ubc84\ud50c\ub85c\uac00 \ubc1c\uc0dd\ud558\ubbc0\ub85c \uc2dc\uac01\uc744 \ubc14\uafb8\uac70\ub098 ID\uccb4\uacc4\ub97c \ub2e4\ub978 \uac83\uc73c\ub85c \uc774\uc804\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc77c\ub828\ubc88\ud638"},"\uc77c\ub828\ubc88\ud638"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc77c\ub828 \ubc88\ud638\ub294 12\ube44\ud2b8\uc774\ubbc0\ub85c, 2^12=4096\uac1c\uc758 \uac12\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \uc11c\ubc84\uac00 \uac19\uc740 \ubc00\ub9ac\ucd08 \ub3d9\uc548 \ud558\ub098 \uc774\uc0c1\uc758 ID\ub97c \ub9cc\ub4e4\uc5b4 \ub0b8 \uacbd\uc6b0\uc5d0\ub9cc 0\ubcf4\ub2e4 \ud070 \uac12\uc744 \uac19\uac8c \ub429\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4. \ub9c8\ubb34\ub9ac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uc0ac\ud56d\uc744 \ucd94\uac00\ub85c \ub17c\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uacc4 \ub3d9\uae30\ud654(clock synchronization) : NTP(Network Time Protocol)\uacfc \uac19\uc740 \ubb38\uc81c\ub85c \ud574\uacb0\ud568"),(0,i.kt)("li",{parentName:"ul"},"\uac01 \uc808(section)\uc758 \uae38\uc774 \ucd5c\uc801\ud654: \ub3d9\uc2dc\uc131(concurrency)\uc774 \ub0ae\uace0 \uc218\uba85\uc774 \uae34 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub77c\uba74 \uc77c\ub828\ubc88\ud638 \uc808\uc758 \uae38\uc774\ub97c \uc904\uc774\uace0 \ud0c0\uc785\uc2a4\ud0ec\ud504 \uc808\uc758 \uae38\uc774\ub97c \ub298\ub9ac\ub294 \uac83\uc774 \ud6a8\uacfc\uc801\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uace0\uac00\uc6a9\uc131(high availability): ID \uc0dd\uc131\uae30\ub294 \ud544\uc218 \ubd88\uac00\uacb0(mission critical) \ucef4\ud3ec\ub10c\ud2b8\uc774\ubbc0\ub85c \uc544\uc8fc \ub192\uc740 \uac00\uc6a9\uc131\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4.")))))}m.isMDXComponent=!0}}]);