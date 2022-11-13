"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3996],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),d=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return l.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},o=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),o=d(n),c=a,N=o["".concat(p,".").concat(c)]||o[c]||k[c]||r;return n?l.createElement(N,i(i({ref:e},m),{},{components:n})):l.createElement(N,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=o;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}o.displayName="MDXCreateElement"},604:function(t,e,n){n.r(e),n.d(e,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i={sidebar_position:1},u={unversionedId:"dev/domain-driven-design/ch1",id:"dev/domain-driven-design/ch1",isDocsHomePage:!1,title:"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778 \ubd84\uc11d\ud558\uae30",description:"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc774\ub780?",source:"@site/docs/dev/domain-driven-design/ch1.md",sourceDirName:"dev/domain-driven-design",slug:"/dev/domain-driven-design/ch1",permalink:"/til/docs/dev/domain-driven-design/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/domain-driven-design/ch1.md",version:"current",lastUpdatedAt:1668304586,formattedLastUpdatedAt:"11/13/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"11. CQRS",permalink:"/til/docs/dev/ddd-start/ch11"},next:{title:"2. \ub3c4\uba54\uc778 \uc9c0\uc2dd \ucc3e\uc544\ub0b4\uae30",permalink:"/til/docs/dev/domain-driven-design/ch2"}},p=[{value:"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc774\ub780?",id:"\ube44\uc988\ub2c8\uc2a4-\ub3c4\uba54\uc778\uc774\ub780",children:[]},{value:"\ud558\uc704 \ub3c4\uba54\uc778\uc774\ub780?",id:"\ud558\uc704-\ub3c4\uba54\uc778\uc774\ub780",children:[{value:"\ud558\uc704 \ub3c4\uba54\uc778\uc758 \uc720\ud615",id:"\ud558\uc704-\ub3c4\uba54\uc778\uc758-\uc720\ud615",children:[]},{value:"\ud558\uc704 \ub3c4\uba54\uc778 \ube44\uad50",id:"\ud558\uc704-\ub3c4\uba54\uc778-\ube44\uad50",children:[]},{value:"\ud558\uc704 \ub3c4\uba54\uc778 \uacbd\uacc4 \uc2dd\ubcc4",id:"\ud558\uc704-\ub3c4\uba54\uc778-\uacbd\uacc4-\uc2dd\ubcc4",children:[]}]},{value:"\ub3c4\uba54\uc778 \ubd84\uc11d \uc608\uc81c",id:"\ub3c4\uba54\uc778-\ubd84\uc11d-\uc608\uc81c",children:[{value:"Gigmaster",id:"gigmaster",children:[]},{value:"BusVNext",id:"busvnext",children:[]}]},{value:"\ub3c4\uba54\uc778 \uc804\ubb38\uac00\ub294 \uc5b4\ub5a4 \uc0ac\ub78c\uc778\uac00?",id:"\ub3c4\uba54\uc778-\uc804\ubb38\uac00\ub294-\uc5b4\ub5a4-\uc0ac\ub78c\uc778\uac00",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ube44\uc988\ub2c8\uc2a4-\ub3c4\uba54\uc778\uc774\ub780"},"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc774\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc740 \uae30\uc5c5\uc758 \uc8fc\uc694 \ud65c\ub3d9 \uc601\uc5ed\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uae30\uc5c5\uc740 \uc5ec\ub7ec \ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc744 \uc6b4\uc601\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc544\ub9c8\uc874\uc740 \uc18c\ub9e4\uc640 \ud074\ub77c\uc6b0\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"\ud558\uc704-\ub3c4\uba54\uc778\uc774\ub780"},"\ud558\uc704 \ub3c4\uba54\uc778\uc774\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778\uc758 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uae30\uc5c5\uc740 \uc5ec\ub7ec\uac00\uc9c0 ",(0,r.kt)("strong",{parentName:"li"},"\ud558\uc704 \ub3c4\uba54\uc778"),"\uc744 \uc6b4\uc601\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\uc740 \ube44\uc988\ub2c8\uc2a4 \ud65c\ub3d9\uc758 \uc138\ubd84\ud654\ub41c \uc601\uc5ed\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ud558\uc704-\ub3c4\uba54\uc778\uc758-\uc720\ud615"},"\ud558\uc704 \ub3c4\uba54\uc778\uc758 \uc720\ud615"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec, \uc77c\ubc18, \uc9c0\uc6d0\uc758 \uc138 \uac00\uc9c0 \uc720\ud615\uc73c\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ud575\uc2ec-\ud558\uc704-\ub3c4\uba54\uc778"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778(core subdomain)\uc740 \ud68c\uc0ac\uac00 \uacbd\uc7c1\uc5c5\uccb4\uc640 \ub2e4\ub974\uac8c \uc218\ud589\ud558\uace0 \uc788\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\uc131 : \ud68c\uc0ac\uc758 \ud575\uc2ec \ube44\uc988\ub2c8\uc2a4\ub294 \ub192\uc740 \uc9c4\uc785\uc7a5\ubcbd\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc7c1 \uc6b0\uc704\uc758 \uc6d0\ucc9c : \ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778\uc5d4 \ubc18\ub4dc\uc2dc \uae30\uc220\uc774 \ub4e4\uc5b4\uac00\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc77c\ubc18-\ud558\uc704-\ub3c4\uba54\uc778"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778\uc740 \ubaa8\ub4e0 \ud68c\uc0ac\uac00 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc218\ud589\ud558\ub294 \ube44\uc988\ub2c8\uc2a4 \ud65c\ub3d9\uc758")),(0,r.kt)("h4",{id:"\uc9c0\uc6d0-\ud558\uc704-\ub3c4\uba54\uc778"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud68c\uc0ac\uc758 \ube44\uc988\ub2c8\uc2a4\ub97c \uc9c0\uc6d0\ud558\ub294 \ud65c\ub3d9")),(0,r.kt)("h3",{id:"\ud558\uc704-\ub3c4\uba54\uc778-\ube44\uad50"},"\ud558\uc704 \ub3c4\uba54\uc778 \ube44\uad50"),(0,r.kt)("h4",{id:"\uacbd\uc7c1-\uc6b0\uc704"},"\uacbd\uc7c1 \uc6b0\uc704"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778\ub9cc\uc774 \ud68c\uc0ac\uc5d0 \uacbd\uc7c1 \uc6b0\uc704\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uacbd\uc7c1 \uc6b0\uc704\uc758 \uc6d0\ucc9c\uc774 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc9c4\uc785\uc7a5\ubcbd\uc774 \ub0ae\uace0 \uacbd\uc7c1 \uc6b0\uc704\ub3c4 \uc81c\uacf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ubcf5\uc7a1\uc131"},"\ubcf5\uc7a1\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\uc758 \uc720\ud615\uc5d0 \ub530\ub77c \ubcf5\uc7a1\uc131\uc758 \uc218\uc900\uc774 \ub2e4\ub985\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ubcc0\ub3d9\uc131"},"\ubcc0\ub3d9\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc790\uc8fc \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub04a\uc784\uc5c6\uc774 \uac1c\uc120\ud558\uace0 \ucd5c\uc801\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc790\uc8fc \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ")),(0,r.kt)("h4",{id:"\uc194\ub8e8\uc158-\uc804\ub7b5"},"\uc194\ub8e8\uc158 \uc804\ub7b5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc0ac\ub0b4\uc5d0\uc11c \uad6c\ud604\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778\uc758 \uc694\uad6c\uc0ac\ud56d\uc740 \uc790\uc8fc \uadf8\ub9ac\uace0 \uc9c0\uc18d\uc801\uc73c\ub85c \ubcc0\uacbd\ub420 \uac83\uc73c\ub85c \uc608\uc0c1\ub429\ub2c8\ub2e4.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud558\uc704 \ub3c4\uba54\uc778 \uc720\ud615"),(0,r.kt)("th",{parentName:"tr",align:null},"\uacbd\uc7c1 \uc6b0\uc704"),(0,r.kt)("th",{parentName:"tr",align:null},"\ubcf5\uc7a1\uc131"),(0,r.kt)("th",{parentName:"tr",align:null},"\ubcc0\ub3d9\uc131"),(0,r.kt)("th",{parentName:"tr",align:null},"\uad6c\ud604 \ubc29\uc2dd"),(0,r.kt)("th",{parentName:"tr",align:null},"\ubb38\uc81c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud575\uc2ec"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc608"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub192\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub192\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\ub0b4 \uac1c\ubc1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud765\ubbf8\ub85c\uc6c0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc77c\ubc18"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc544\ub2c8\uc624"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub192\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub0ae\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\uad6c\ub9e4/\ub3c4\uc785"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud574\uacb0\ub428")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc6d0"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc544\ub2c8\uc624"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub0ae\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub0ae\uc74c"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\ub0b4 \uac1c\ubc1c/\ud558\uccad"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubed4\ud568")))),(0,r.kt)("h3",{id:"\ud558\uc704-\ub3c4\uba54\uc778-\uacbd\uacc4-\uc2dd\ubcc4"},"\ud558\uc704 \ub3c4\uba54\uc778 \uacbd\uacc4 \uc2dd\ubcc4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\uacfc \uadf8 \uc720\ud615\uc740 \uae30\uc5c5\uc758 \ube44\uc988\ub2c8\uc2a4 \uc804\ub7b5\uc5d0 \ub530\ub77c \uc815\uc758\ub429\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ud558\uc704-\ub3c4\uba54\uc778-\uc815\uccb4"},"\ud558\uc704 \ub3c4\uba54\uc778 \uc815\uccb4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc88b\uc740 \ucd9c\ubc1c\uc810\uc774\ub098 \ubb38\uc81c\ub294 \uc138\ubd80\uc0ac\ud56d\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc751\uc9d1\ub41c-\uc720\uc2a4\ucf00\uc774\uc2a4\ub97c-\ud558\uc704-\ub3c4\uba54\uc778\uc73c\ub85c"},"\uc751\uc9d1\ub41c \uc720\uc2a4\ucf00\uc774\uc2a4\ub97c \ud558\uc704 \ub3c4\uba54\uc778\uc73c\ub85c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\uc220\uc801\uc778 \uad00\uc810\uc5d0\uc11c \ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc0c1\ud638 \uc5f0\uad00\ub418\uace0 \uc751\uc9d1\ub41c \uc720\uc2a4\ucf00\uc774\uc2a4\uc758 \uc9d1\ud569\uacfc \uc720\uc0ac\ud568"),(0,r.kt)("li",{parentName:"ul"},"\uc138\ubd84\ud654\ub41c \ud558\uc704 \ub3c4\uba54\uc778\uc744 \ucc3e\ub294 \uac83\uc744 \uc911\ub2e8\ud558\ub294 \uc2dc\uc810\uc740 '\uc751\uc9d1\ub41c \uc720\uc2a4\ucf00\uc774\uc2a4 \uc758 \uc9d1\ud569\uc778 \ud558\uc704 \ub3c4\uba54\uc778'\uc774\ub77c\ub294 \uc815\uc758\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ud575\uc2ec\uc5d0-\uc9d1\uc911"},"\ud575\uc2ec\uc5d0 \uc9d1\uc911"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ub3c4\uba54\uc778\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc124\uacc4 \uc758\uc0ac\uacb0\uc815\uc744 \ub0b4\ub9ac\ub294 \ud504\ub85c\uc138\uc2a4\uc758 \uc5b4\ub824\uc6c0\uc744 \uc27d\uac8c \ud574\uacb0\ud558\ub3c4\ub85d \ub3d5\ub294 \ub3c4\uad6c")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3c4\uba54\uc778-\ubd84\uc11d-\uc608\uc81c"},"\ub3c4\uba54\uc778 \ubd84\uc11d \uc608\uc81c"),(0,r.kt)("h3",{id:"gigmaster"},"Gigmaster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2f0\ucf13 \ud310\ub9f4 \ubc0f \uc720\ud1b5\ud68c\uc0ac"),(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucd94\ucc9c \uc5d4\uc9c4"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc775\uba85\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc571"))),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc554\ud638\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ud68c\uacc4"),(0,r.kt)("li",{parentName:"ul"},"\uc815\uc0b0"),(0,r.kt)("li",{parentName:"ul"},"\uc778\uc99d \ubc0f \uad8c\ud55c \ubd80\uc5ec"))),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc74c\uc545 \uc2a4\ud2b8\ub9ac\ubc0d \uc11c\ube44\uc2a4\uc640\uc758 \uc5f0\ub3d9"),(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc15c \ub124\ud2b8\uc6cc\ud06c\uc640 \uc5f0\ub3d9"),(0,r.kt)("li",{parentName:"ul"},"\ucc38\uc11d \uacf5\uc5f0 \ubaa8\ub4c8")))),(0,r.kt)("h3",{id:"busvnext"},"BusVNext"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub300\uc911 \uad50\ud1b5 \ud68c\uc0ac"),(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub77c\uc6b0\ud305"),(0,r.kt)("li",{parentName:"ul"},"\ubd84\uc11d"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc571 \uc0ac\uc6a9\uc790 \uacbd\ud5d8"),(0,r.kt)("li",{parentName:"ul"},"\ucc28\ub7c9 \uad00\ub9ac"))),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uad50\ud1b5 \uc0c1\ud669"),(0,r.kt)("li",{parentName:"ul"},"\ud68c\uacc4"),(0,r.kt)("li",{parentName:"ul"},"\uccad\uad6c"),(0,r.kt)("li",{parentName:"ul"},"\uad8c\ud55c \ubd80\uc5ec"))),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3c4\uba54\uc778-\uc804\ubb38\uac00\ub294-\uc5b4\ub5a4-\uc0ac\ub78c\uc778\uac00"},"\ub3c4\uba54\uc778 \uc804\ubb38\uac00\ub294 \uc5b4\ub5a4 \uc0ac\ub78c\uc778\uac00?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc804\ubb38\uac00\ub294 \uc6b0\ub9ac\uac00 \ubaa8\ub378\ub9c1\ud558\uace0 \ucf54\ub4dc\ub85c \uad6c\ud604\ud560 \ube44\uc988\ub2c8\uc2a4\uc758 \ubaa8\ub4e0 \ubcf5\uc7a1\uc131\uc744 \uc54c\uace0 \uc788\ub294 \uc8fc\uc81c \uc804\ubb38\uac00 \uc785\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ud558\uc704 \ub3c4\uba54\uc778 : \ud765\ubbf8\ub85c\uc6b4 \ubb38\uc81c. \uacbd\uc7c1 \ucc28\ubcc4 \uc6b0\uc704"),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud558\uc704 \ub3c4\uba54\uc778 : \ud574\uacb0\ub41c \ubb38\uc81c, \ubaa8\ub4e0 \ud68c\uc0ac\uac00 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc77c\ud568"),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0 \ud558\uc704 \ub3c4\uba54\uc778 : \ubd84\uba85\ud55c \ud574\uacb0\ucc45\uc774 \uc788\ub294 \ubb38\uc81c")))}m.isMDXComponent=!0}}]);