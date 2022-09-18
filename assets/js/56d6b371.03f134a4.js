"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[7350],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=o(n),s=l,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||i;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8733:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a={sidebar_position:3},u={unversionedId:"dev/system-design-interview/ch3",id:"dev/system-design-interview/ch3",isDocsHomePage:!1,title:"3. \uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811 \uacf5\ub7b5\ubc95",description:"- \uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811\uc740 \uae30\uc220\uc801 \uce21\uba74 \uc774\uc0c1\uc758 \ud3c9\uac00 \uc790\ub9ac\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch3.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch3",permalink:"/til/docs/dev/system-design-interview/ch3",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch3.md",version:"current",lastUpdatedAt:1663539008,formattedLastUpdatedAt:"9/18/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \uac1c\ub7b5\uc801\uc778 \uaddc\ubaa8 \ucd94\uc815",permalink:"/til/docs/dev/system-design-interview/ch2"},next:{title:"4. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch4"}},p=[{value:"\ud6a8\uacfc\uc801 \uba74\uc811\uc744 \uc704\ud55c 4\ub2e8\uacc4 \uc811\uadfc\ubc95",id:"\ud6a8\uacfc\uc801-\uba74\uc811\uc744-\uc704\ud55c-4\ub2e8\uacc4-\uc811\uadfc\ubc95",children:[{value:"1\ub2e8\uacc4, \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[]},{value:"2\ub2e8\uacc4, \uac1c\ub7b5\uc801\uc778 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801\uc778-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[]},{value:"3\ub2e8\uacc4, \uc0c1\uc138 \uc124\uacc4\ub97c",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4\ub97c",children:[]},{value:"4\ub2e8\uacc4, \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]},{value:"\ud574\uc57c\ud560 \uac83",id:"\ud574\uc57c\ud560-\uac83",children:[]},{value:"\ud558\uc9c0\ub9d0 \uac83",id:"\ud558\uc9c0\ub9d0-\uac83",children:[]},{value:"\uc2dc\uac04 \ubc30\ubd84",id:"\uc2dc\uac04-\ubc30\ubd84",children:[]}]}],o={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811\uc740 \uae30\uc220\uc801 \uce21\uba74 \uc774\uc0c1\uc758 \ud3c9\uac00 \uc790\ub9ac\uc785\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"\ud6a8\uacfc\uc801-\uba74\uc811\uc744-\uc704\ud55c-4\ub2e8\uacc4-\uc811\uadfc\ubc95"},"\ud6a8\uacfc\uc801 \uba74\uc811\uc744 \uc704\ud55c 4\ub2e8\uacc4 \uc811\uadfc\ubc95"),(0,i.kt)("h3",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4, \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uc911\uc694\ud55c \uae30\uc220 \uc911 \ud558\ub098\ub294 \uc62c\ubc14\ub978 \uc9c8\ubb38\uc744 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc801\uc808\ud55c \uac00\uc815\uc744 \ud558\ub294 \uac83, \uadf8\ub9ac\uace0 \uc2dc\uc2a4\ud15c \uad6c\ucd95\uc5d0 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ubaa8\uc73c\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uc9c8\ubb38\ub4e4\uc744 \uc0dd\uac01\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uad6c\uccb4\uc801\uc73c\ub85c \uc5b4\ub5a4 \uae30\ub2a5\ub4e4\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294\uac00?"),(0,i.kt)("li",{parentName:"ul"},"\uc81c\ud488 \uc0ac\uc6a9\uc790 \uc218\ub294 \uc5bc\ub9c8\ub098 \ub418\ub294\uac00?"),(0,i.kt)("li",{parentName:"ul"},"\ud68c\uc0ac\uc758 \uaddc\ubaa8\ub294 \uc5bc\ub9c8\ub098 \ube68\ub9ac \ucee4\uc9c0\ub9ac\ub77c \uc608\uc0c1\ud558\ub098?"),(0,i.kt)("li",{parentName:"ul"},"\ud68c\uc0ac\uac00 \uc8fc\uc694 \uc0ac\uc6a9\ud558\ub294 \uae30\uc220 \uc2a4\ud0dd\uc740 \ubb34\uc5c7\uc778\uac00? \uc124\uacc4\ub97c \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud574 \ud65c\uc6a9\ud560 \uc218 \u3163\u3147\u3146\ub294 \uae30\uc874 \uc11c\ube44\uc2a4\ub85c\ub294 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\ub294\uac00?")))),(0,i.kt)("h3",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801\uc778-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4, \uac1c\ub7b5\uc801\uc778 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucd08\uc810\uc744 \ub9de\ucd9c \uac83\uc740 \uac1c\ub7b5\uc801\uc778 \uc124\uacc4\uc548\uc744 \uc81c\uc2dc\ud558\uace0 \uba74\uc811\uad00\uc758 \ub3d9\uc758\ub97c \uc5bb\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc124\uacc4\uc548\uc5d0 \ub300\ud55c \ucd5c\ucd08 \uccad\uc0ac\uc9c4\uc744 \uc81c\uc2dc\ud558\uace0 \uc758\uacac\uc744 \uad6c\ud558\uae30, \uba74\uc811\uad00\uc744 \ub9c8\uce58 \ud300\uc6d0\ucc98\ub7fc \ub300\ud558\uae30"),(0,i.kt)("li",{parentName:"ul"},"\ud654\uc774\ud2b8\ubcf4\ub4dc\ub098 \uc885\uc774\uc5d0 \ud575\uc2ec \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud3ec\ud568\ud558\ub294 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc744 \uadf8\ub9bc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8(\ubaa8\ubc14\uc77c/\uc6f9), API, \uc6f9 \uc11c\ubc84, \ub370\uc774\ud130 \uc800\uc7a5\uc18c, \uce90\uc2dc, CDN \ub4f1"))),(0,i.kt)("li",{parentName:"ul"},"\uc774 \ucd5c\ucd08 \uc124\uacc4\uc548\uc774 \uc2dc\uc2a4\ud15c \uaddc\ubaa8\uc5d0 \uad00\uacc4\ub41c \uc81c\uc57d\uc0ac\ud56d\ub4e4\uc744 \ub9cc\uc871\ud558\ub294\uc9c0\ub97c \uac1c\ub7b5\uc801\uc73c\ub85c \uacc4\uc0b0\ud574\uc57c \ud569\ub2c8\ub2e4.")))),(0,i.kt)("h3",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4\ub97c"},"3\ub2e8\uacc4, \uc0c1\uc138 \uc124\uacc4\ub97c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc774 \ub2e8\uacc4\uc5d0 \uc654\ub2e4\uba74 \ub2e4\uc74c \ubaa9\ud45c\ub97c \ub2ec\uc131\ud55c \uc0c1\ud0dc\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc804\ubc18\uc801\uc73c\ub85c \ub2ec\uc131\ud574\uc57c \ud560 \ubaa9\ud45c\uc640 \uae30\ub2a5 \ubc94\uc704 \ud655\uc778"),(0,i.kt)("li",{parentName:"ul"},"\uc804\uccb4 \uc124\uacc4\uc758 \uac1c\ub7b5\uc801 \uccad\uc0ac\uc9c4 \ub9c8\ub828"),(0,i.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uccad\uc0ac\uc9c4\uc5d0 \ub300\ud55c \uba74\uc811\uad00\uc758 \uc758\uacac \uccad\ucde8"),(0,i.kt)("li",{parentName:"ul"},"\uc0c1\uc138 \uc124\uacc4\uc5d0\uc11c \uc9d1\uc911\ud574\uc57c \ud560 \uc601\uc5ed\ub4e4 \ud655\uc778"))),(0,i.kt)("li",{parentName:"ul"},"\uc124\uacc4 \ub300\uc0c1 \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc774\uc758 \uc6b0\uc120\uc21c\uc704\ub97c \uc815\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uba74\uc811 \uc2dc\uc5d0\ub294 \uc2dc\uac04 \uad00\ub9ac\uc5d0\ub3c4 \ud2b9\ubcc4\ud788 \uc8fc\uc758\ub97c \uae30\uc6b8\uc5ec\uc57c \ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4, \ub9c8\ubb34\ub9ac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \uc9c0\uce68\uc744 \uace0\ub824\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uba74\uc811\uad00\uc774 \uc2dc\uc2a4\ud15c \ubcd1\ubaa9\uad6c\uac04, \ud639\uc740 \uc880 \ub354 \uac1c\uc120 \uac00\ub2a5\ud55c \uc9c0\uc810\uc744 \ucc3e\uc544\ub0b4\ub77c \uc8fc\ubb38\ud560 \uc218 \uc787\uc2b5\ub2c8\ub2e4. (\ub2e4\ub9cc, \uc644\ubcbd\ud558\uac70\ub098 \uac1c\uc120\ud560 \ubd80\ubd84\uc774 \uc5c6\ub2e4\uace0 \ub9d0\ud558\ub294 \uac83\uc740 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.)"),(0,i.kt)("li",{parentName:"ul"},"\ub9cc\ub4e0 \uc124\uacc4\ub97c \ud55c\ubc88 \ub2e4\uc2dc \uc694\uc57d\ud574\uc8fc\ub294 \uac83\ub3c4 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uba74 \ubb34\uc2a8 \uc77c\uc774 \uc0dd\uae30\ub294\uc9c0 \ub530\uc838\ubcf4\uba74 \ud765\ubbf8\ub86d\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc6b4\uc601 \uc774\uc288\ub3c4 \ub17c\uc758\ud560 \uac00\uce58\uac00 \ucda9\ubd84\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ubbf8\ub798\uc5d0 \ub2e5\uce60 \uaddc\ubaa8 \ud655\uc7a5 \uc694\uad6c\uc5d0 \uc5b4\ub5bb\uac8c \ub300\ucc98\ud560 \uac83\uc778\uc9c0\ub3c4 \ud765\ubbf8\ub85c\uc6b4 \uc8fc\uc81c\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc774 \uc880 \ub0a8\uc558\ub2e4\uba74, \ud544\uc694\ud558\uc9c0\ub9cc \ub2e4\ub8e8\uc9c0 \ubabb\ud588\ub358 \uc138\ubd80\uc801 \uac1c\uc120\uc0ac\ud56d\ub4e4\uc744 \uc81c\uc548\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("h3",{id:"\ud574\uc57c\ud560-\uac83"},"\ud574\uc57c\ud560 \uac83"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc9c8\ubb38\uc744 \ud1b5\ud574 \ud655\uc778\ud558\ub77c. \uc2a4\uc2a4\ub85c \ub0b4\ub9b0 \uac00\uc815\uc774 \uc633\ub2e4 \ubbff\uace0 \uc9c4\ud589\ud558\uc9c0 \ub9d0\ub77c"),(0,i.kt)("li",{parentName:"ul"},"\ubb38\uc81c\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \uc774\ud574\ud558\ub77c"),(0,i.kt)("li",{parentName:"ul"},"\uc815\ub2f5\uc774 \ucd5c\uc120\uc758 \ub2f5\uc548 \uac19\uc740 \uac83\uc740 \uc5c6\ub2e4\ub294 \uc810\uc744 \uba85\uc2ec\ud558\ub77c."),(0,i.kt)("li",{parentName:"ul"},"\uba74\uc811\uad00\uc774 \uc5ec\ub7ec\ubd84\uc758 \uc0ac\uace0 \ud750\ub984\uc744 \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uba74\uc811\uad00\uac00 \uc18c\ud1b5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud558\ub2e4\uba74 \uc5ec\ub7ec \ud574\ubc95\uc744 \ud568\uaed8 \uc81c\uc0ac\ud558\ub77c"),(0,i.kt)("li",{parentName:"ul"},"\uac1c\ub7b5\uc801 \uc124\uacc4\uc5d0 \uba74\uc811\uad00\uc774 \ub3d9\uc758\ud558\uba74, \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc138\ubd80\uc0ac\ud56d\uc744 \uc124\uba85\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uba74\uc804\uad00\uc758 \uc544\uc774\ub514\uc5b4\ub97c \uc774\ub04c\uc5b4 \ub0b4\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud3ec\uae30\ud558\uc9c0 \ub9d0\uae30")),(0,i.kt)("h3",{id:"\ud558\uc9c0\ub9d0-\uac83"},"\ud558\uc9c0\ub9d0 \uac83"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc804\ud615\uc801\uc778 \uba74\uc811 \ubb38\uc81c\ub4e4\uc740 \uc900\ube44\ud558\uace0 \uac00\ub77c"),(0,i.kt)("li",{parentName:"ul"},"\uc694\uad6c\uc0ac\ud56d\uc774\ub098 \uac00\uc815\ub4e4\uc744 \ubd84\uba85\ud788 \ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc124\uacc4\ub97c \uc81c\uc2dc\ud558\uc9c0 \ub9d0\ub77c"),(0,i.kt)("li",{parentName:"ul"},"\ucc98\uc74c\ubd80\ud130 \ud2b9\uc815 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc138\ubd80\uc0ac\ud56d\uc744 \ub108\ubb34 \uae4a\uc774 \uc124\uba85\ud558\uc9c0 \ub9d0\ub77c. \uac1c\ub7b5\uc801 \uc124\uacc4\ub97c \ub9c8\uce5c \ub4a4\uc5d0 \uc138\ubd80\uc0ac\ud56d\uc73c\ub85c \ub098\uc544\uac00\ub77c."),(0,i.kt)("li",{parentName:"ul"},"\uc9c4\ud589 \uc911\uc5d0 \ub9c9\ud614\ub2e4\uba74, \ud78c\ud2b8\ub97c \uc694\uccad\ud558\ub77c."),(0,i.kt)("li",{parentName:"ul"},"\uc18c\ud1b5\uc744 \uc8fc\uc800\ud558\uc9c0 \ub9d0\uae30."),(0,i.kt)("li",{parentName:"ul"},"\uc124\uacc4\uc548\uc744 \ub0b4\ub193\ub294 \uc21c\uac04 \uba74\uc811\uc774 \ub05d\ub09c\ub2e4\uace0 \uc0dd\uac01\ud558\uc9c0 \ub9d0\uae30")),(0,i.kt)("h3",{id:"\uc2dc\uac04-\ubc30\ubd84"},"\uc2dc\uac04 \ubc30\ubd84"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"45\ubd84\uc774 \uae30\uc900\uc774\ub77c\uba74.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1\ub2e8\uacc4 - \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815 : 3\ubd84\uc5d0\uc11c 10\ubd84"),(0,i.kt)("li",{parentName:"ul"},"2\ub2e8\uacc4 - \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30 : 10\ubd84\uc5d0\uc11c 15\ubd84"),(0,i.kt)("li",{parentName:"ul"},"3\ub2e8\uacc4 - \uc0c1\uc138 \uc124\uacc4 : 10\ubd84\uc5d0\uc11c 25\ubd84"),(0,i.kt)("li",{parentName:"ul"},"4\ub2e8\uacc4 - \ub9c8\ubb34\ub9ac : 3\ubd84\uc5d0\uc11c 5\ubd84")))))}m.isMDXComponent=!0}}]);