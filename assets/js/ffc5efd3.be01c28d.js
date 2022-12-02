"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8096],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1246:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i={sidebar_position:4},o={unversionedId:"dev/refactoring/ch4",id:"dev/refactoring/ch4",isDocsHomePage:!1,title:"4. \ud14c\uc2a4\ud2b8 \uad6c\ucd95\ud558\uae30",description:"\ub9ac\ud329\ud130\ub9c1\uc740 \ubd84\uba85 \uac00\uce58\uac00 \uc788\uc9c0\ub9cc, \uc774\ub97c \ubd88\uac00\ud53c\ud558\uac8c \uc800\uc9c0\ub974\ub294 \uc2e4\uc218\ub97c \uc7a1\uc544\uc8fc\ub294 \ud14c\uc2a4\ud2b8 \uc2a4\uc704\ud2b8(test suite)\uac00 \ub4b7\ubc1b\uce68\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4.",source:"@site/docs/dev/refactoring/ch4.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch4",permalink:"/til/docs/dev/refactoring/ch4",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch4.md",version:"current",lastUpdatedAt:1669969740,formattedLastUpdatedAt:"12/2/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8",permalink:"/til/docs/dev/refactoring/ch3"},next:{title:"5. \ub9ac\ud329\ud1a0\ub9c1 \uce74\ud0c8\ub85c\uadf8 \ubcf4\ub294 \ubc95",permalink:"/til/docs/dev/refactoring/ch5"}},c=[{value:"4.1 \uc790\uac00 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc758 \uac00\uce58",id:"41-\uc790\uac00-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc\uc758-\uac00\uce58",children:[]},{value:"4.2 \ud14c\uc2a4\ud2b8\ud560 \uc0d8\ud50c \ucf54\ub4dc",id:"42-\ud14c\uc2a4\ud2b8\ud560-\uc0d8\ud50c-\ucf54\ub4dc",children:[]},{value:"4.3 \uccab\ubc88\uc9f8 \ud14c\uc2a4\ud2b8",id:"43-\uccab\ubc88\uc9f8-\ud14c\uc2a4\ud2b8",children:[]},{value:"4.4 \ud14c\uc2a4\ud2b8 \ucd94\uac00\ud558\uae30, 4.5 \ud53d\uc2a4\ucc98 \uc218\uc815\ud558\uae30",id:"44-\ud14c\uc2a4\ud2b8-\ucd94\uac00\ud558\uae30-45-\ud53d\uc2a4\ucc98-\uc218\uc815\ud558\uae30",children:[]},{value:"4.6 \uacbd\uacc4 \uc870\uac74 \uac80\uc0ac\ud558\uae30",id:"46-\uacbd\uacc4-\uc870\uac74-\uac80\uc0ac\ud558\uae30",children:[]},{value:"4.7 \ub05d\ub098\uc9c0 \uc54a\uc740 \uc5ec\uc815",id:"47-\ub05d\ub098\uc9c0-\uc54a\uc740-\uc5ec\uc815",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1\uc740 \ubd84\uba85 \uac00\uce58\uac00 \uc788\uc9c0\ub9cc, \uc774\ub97c \ubd88\uac00\ud53c\ud558\uac8c \uc800\uc9c0\ub974\ub294 \uc2e4\uc218\ub97c \uc7a1\uc544\uc8fc\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8 \uc2a4\uc704\ud2b8(test suite)"),"\uac00 \ub4b7\ubc1b\uce68\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"41-\uc790\uac00-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc\uc758-\uac00\uce58"},"4.1 \uc790\uac00 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc758 \uac00\uce58"),(0,l.kt)("p",null,"\uac1c\ubc1c\uc758 \ub300\ubd80\ubd84 \uc2dc\uac04\uc740 \ub514\ubc84\uae45\uc5d0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\ub97c \uc644\uc804\ud788 \uc790\ub3d9\ud654\ud558\uace0 \uadf8 \uacb0\uacfc\uae4c\uc9c0 \uc2a4\uc2a4\ub85c \uac80\uc0ac\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ud14c\uc2a4\ud2b8 \uc2a4\uc704\ud2b8\ub294 \uac15\ub825\ud55c \ubc84\uadf8 \uac80\ucd9c \ub3c4\uad6c\ub85c, \ubc84\uadf8\ub97c \ucc3e\ub294 \ub370 \uac78\ub9ac\ub294 \uc2dc\uac04\uc744 \ub300\ud3ed \uc904\uc5ec\uc90d\ub2c8\ub2e4."))),(0,l.kt)("p",null,"\ud14c\uc2a4\ud2b8\uc5d0 \ub300\ud55c \ud301\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uae30 \uac00\uc7a5 \uc88b\uc740 \uc2dc\uc810\uc740 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ub2a5\uc744 \ucd94\uac00\ud560 \ub54c\ub294 \ud14c\uc2a4\ud2b8\ubd80\ud130 \uc791\uc131\ud569\ub2c8\ub2e4. (TDD)")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"42-\ud14c\uc2a4\ud2b8\ud560-\uc0d8\ud50c-\ucf54\ub4dc"},"4.2 \ud14c\uc2a4\ud2b8\ud560 \uc0d8\ud50c \ucf54\ub4dc"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Azderica/js-test/tree/526397301b27c776f4de1a12123b2d203dc11896/refactoring/ch4"},"\ucf54\ub4dc"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mocha"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"chai"),"\ub97c \uc0ac\uc6a9\ud55c \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"43-\uccab\ubc88\uc9f8-\ud14c\uc2a4\ud2b8"},"4.3 \uccab\ubc88\uc9f8 \ud14c\uc2a4\ud2b8"),(0,l.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \ubd80\ubd84\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2e4\ud328\ud574\uc57c \ud560 \uc0c1\ud669\uc5d0\uc11c\ub294 \ubc18\ub4dc\uc2dc \uc2e4\ud328\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc790\uc8fc \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4. \uc791\uc131 \uc911\uc778 \ucf54\ub4dc\ub294 \ucd5c\uc18c\ud55c \uba87 \ubd84 \uac04\uaca9\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud558\uace0, \uc801\uc5b4\ub3c4 \ud558\ub8e8\uc5d0 \ud55c \ubc88\uc740 \uc804\uccb4 \ud14c\uc2a4\ud2b8\ub97c \ub3cc\ub9ac\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucd5c\uc801\ud654\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"44-\ud14c\uc2a4\ud2b8-\ucd94\uac00\ud558\uae30-45-\ud53d\uc2a4\ucc98-\uc218\uc815\ud558\uae30"},"4.4 \ud14c\uc2a4\ud2b8 \ucd94\uac00\ud558\uae30, 4.5 \ud53d\uc2a4\ucc98 \uc218\uc815\ud558\uae30"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Azderica/js-test/tree/b7b0fab9b72cdae6d0afc412ff68bd9fcadf2c27/refactoring/ch4"},"\ucf54\ub4dc"))),(0,l.kt)("p",null,"\ub2e4\uc74c\uc744 \uc2e0\uacbd\uc368\uc11c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud14c\uc2a4\ud2b8\ub294 \uc704\ud5d8 \uc694\uc778\uc744 \uc911\uc2ec\uc73c\ub85c \uc791\uc131\ud574\uc57c\ud569\ub2c8\ub2e4"),". \uc989, \ub2e8\uc21c\ud55c \ud14c\uc2a4\ud2b8\ub294 \uac70\uc758 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc644\ubcbd\ud558\uac8c \ub9cc\ub4dc\ub290\ub77c \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0, \ubd88\uc644\uc804\ud55c \ud14c\uc2a4\ud2b8\ub77c\ub3c4 \uc791\uc131\ud574\uc11c \uc2e4\ud589\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"beforeEach"),"\ub97c \ud1b5\ud574\uc11c \uc124\uc815\ud55c \ud45c\uc900 \ud53d\uc2a4\ucc98\ub97c \uc801\uc6a9\ud574\uc11c \uac80\uc99d\ud558\ub294 \uac83\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc740 \ud328\ud134\uc744 ",(0,l.kt)("strong",{parentName:"li"},"\uc124\uc815-\uc2e4\ud589-\uac80\uc99d(setup-exercise-verify)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub124\ubc88\uc9f8 \ub2e8\uacc4\ub294 \ud574\uccb4(teardown) \ud639\uc740 \uccad\uc18c(cleanup)\uc774\ub77c\uace0 \ud558\ub294\ub370 \uc774\ub294 \uba85\uc2dc\uc801\uc73c\ub85c \uc5b8\uae09\uc774 \uc548\ub420\ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"46-\uacbd\uacc4-\uc870\uac74-\uac80\uc0ac\ud558\uae30"},"4.6 \uacbd\uacc4 \uc870\uac74 \uac80\uc0ac\ud558\uae30"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Azderica/js-test/tree/master/refactoring/ch4"},"\ucf54\ub4dc"))),(0,l.kt)("p",null,"\ub2e4\uc74c\uc744 \uc2e0\uacbd\uc4f0\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc81c\uac00 \uc0dd\uc2e4 \uac00\ub2a5\uc131\uc774 \uc788\ub294 \uacbd\uacc4 \uc870\uac74\uc744 \uc0dd\uac01\ud574\ubcf4\uace0 \uadf8 \ubd80\ubd84\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc798\ubabb\ub41c \ub370\uc774\ud130\uac00 \ud758\ub7ec\uc11c \ub514\ubc84\uae45\ud558\uae30 \uc5b4\ub824\uc6b4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 ",(0,l.kt)("strong",{parentName:"li"},"\uc5b4\uc11c\uc158 \ucd94\uac00\ud558\uae30"),"\ub97c \ud1b5\ud574\uc11c \uc624\ub958\ub97c \ucd5c\ub300\ud55c \ube60\ub974\uac8c \ucc3e\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ucc28\ud53c \ubaa8\ub4e0 \ubc84\uadf8\ub97c \uc7a1\uc544\ub0bc \uc218\ub294 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud574\uc11c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ub300\ub2e4\uc218\uc758 \ubc84\uadf8\ub97c \uc7a1\uc744 \uc218 \uc788\ub294 \uae30\ud68c\ub97c \ub0a0\ub9ac\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"47-\ub05d\ub098\uc9c0-\uc54a\uc740-\uc5ec\uc815"},"4.7 \ub05d\ub098\uc9c0 \uc54a\uc740 \uc5ec\uc815"),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \ub098\uc628 \ucf54\ub4dc\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8(unit test)\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubc84\uadf8 \ub9ac\ud3ec\ud2b8\ub97c \ubc1b\uc73c\uba74 \uac00\uc7a5 \uba3c\uc800 \uadf8 \ubc84\uadf8\ub97c \ub4dc\ub7ec\ub0b4\ub294 \ub2e8\uc704 \ud14c\uc2a4\ubd80\ud130 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ub54c\ubb38\uc5d0 \uac1c\ubc1c \uc18d\ub3c4\uac00 \ub290\ub824\uc9c4\ub2e4\uba74 \ud14c\uc2a4\ud2b8\ub97c \uacfc\ud558\uac8c \uc0ac\uc6a9\ud588\uc744 \uc218\ub3c4 \uc788\uc73c\ub098 \uc801\uc740 \uac83\ubcf4\ub2e4\ub294 \ubb34\uc870\uac74 \ub0ab\uc2b5\ub2c8\ub2e4.")))}p.isMDXComponent=!0}}]);