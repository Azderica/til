"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[5273],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=o(n),k=l,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4911:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a={sidebar_position:10},u={unversionedId:"dev/system-design-interview/ch10",id:"dev/system-design-interview/ch10",isDocsHomePage:!1,title:"10\uc7a5. \uc54c\ub9bc \uc2dc\uc2a4\ud15c \uc124\uacc4",description:"- \uc54c\ub9bc \uc2dc\uc2a4\ud15c\uc740 \ubaa8\ubc14\uc77c \ud478\uc2dc \uc54c\ub9bc, SMS \uba54\uc2dc\uc9c0, \uc774\uba54\uc77c\uc758 \uc138 \uac00\uc9c0\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch10.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch10",permalink:"/til/docs/dev/system-design-interview/ch10",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch10.md",version:"current",lastUpdatedAt:1668304586,formattedLastUpdatedAt:"11/13/2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. \uc6f9 \ud06c\ub864\ub7ec \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch9"},next:{title:"11\uc7a5. \ub274\uc2a4 \ud53c\ub4dc \uc2dc\uc2a4\ud15c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch11"}},p=[{value:"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[]},{value:"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",children:[{value:"\uc54c\ub9bc \uc720\ud615\ubcc4 \uc9c0\uc6d0 \ubc29\uc548",id:"\uc54c\ub9bc-\uc720\ud615\ubcc4-\uc9c0\uc6d0-\ubc29\uc548",children:[]},{value:"\uc5f0\ub77d\ucc98 \uc815\ubcf4 \uc218\uc9d1 \uc808\ucc28",id:"\uc5f0\ub77d\ucc98-\uc815\ubcf4-\uc218\uc9d1-\uc808\ucc28",children:[]},{value:"\uc54c\ub9bc \uc804\uc1a1 \ubc0f \uc218\uc2e0 \uc808\ucc28",id:"\uc54c\ub9bc-\uc804\uc1a1-\ubc0f-\uc218\uc2e0-\uc808\ucc28",children:[]}]},{value:"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",children:[{value:"\uc548\uc815\uc131",id:"\uc548\uc815\uc131",children:[]},{value:"\ucd94\uac00\ub85c \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8 \ubc0f \uace0\ub824\uc0ac\ud56d",id:"\ucd94\uac00\ub85c-\ud544\uc694\ud55c-\ucef4\ud3ec\ub10c\ud2b8-\ubc0f-\uace0\ub824\uc0ac\ud56d",children:[]},{value:"\uc218\uc815\ub41c \uc124\uacc4\uc548",id:"\uc218\uc815\ub41c-\uc124\uacc4\uc548",children:[]}]},{value:"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac",children:[]}],o={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc2dc\uc2a4\ud15c\uc740 \ubaa8\ubc14\uc77c \ud478\uc2dc \uc54c\ub9bc, SMS \uba54\uc2dc\uc9c0, \uc774\uba54\uc77c\uc758 \uc138 \uac00\uc9c0\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4 \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc694\uad6c\uc0ac\ud56d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud478\uc26c \uc54c\ub9bc, SMS \uba54\uc2dc\uc9c0, \uc774\uba54\uc77c \ubaa8\ub450 \uc9c0\uc6d0 \ud544\uc694"),(0,i.kt)("li",{parentName:"ul"},"\uc5f0\uc131 \uc2e4\uc2dc\uac04 \uc2dc\uc2a4\ud15c (\uac00\ub2a5\ud55c \ube68\ub9ac \ud544\uc694\ud558\ub098, \uc57d\uac04\uc758 \uc9c0\uc5f0\uc740 \uad1c\ucc2e\uc74c)"),(0,i.kt)("li",{parentName:"ul"},"ios, android, \ub370\uc2a4\ud06c\ud1b1\uc744 \uc9c0\uc6d0\ud574\uc57c\ud568"),(0,i.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uadf8\ub7a8 \ud639\uc740 \uc11c\ubc84 \uce21\uc758 \uc2a4\ucf00\uc904\ub9c1"),(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \uc54c\ub9bc\uc744 \ubc1b\uc9c0 \uc54a\ub3c4\ub85d(opt-out) \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud558\ub8e8\uc5d0 \uccab\ub9cc \uac74\uc758 \ubaa8\ubc14\uc77c \ud478\uc2dc \uc54c\ub9bc, \ubc31\ub9cc \uac74\uc758 SMS \uba54\uc2dc\uc9c0, 500\ubc31\ub9cc \uac74\uc758 \uc774\uba54\uc77c\uc744 \ubcf4\ub0bc \uc218 \uc788\uc5b4\uc57c \ud568.")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4 \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798\uc640 \uac19\uc740 \uc774\uc57c\uae30\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc720\ud615\ubcc4 \uc9c0\uc6d0 \ubc29\uc548"),(0,i.kt)("li",{parentName:"ul"},"\uc5f0\ub77d\ucc98 \uc815\ubcf4 \uc218\uc9d1 \uc808\ucc28"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc804\uc1a1 \ubc0f \uc218\uc2e0 \uc808\ucc28")))),(0,i.kt)("h3",{id:"\uc54c\ub9bc-\uc720\ud615\ubcc4-\uc9c0\uc6d0-\ubc29\uc548"},"\uc54c\ub9bc \uc720\ud615\ubcc4 \uc9c0\uc6d0 \ubc29\uc548"),(0,i.kt)("h4",{id:"ios-\ud478\uc2dc-\uc54c\ub9bc"},"iOS \ud478\uc2dc \uc54c\ub9bc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ios\uc5d0\uc11c \ud478\uc2dc \uc54c\ub9bc\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc11c\ub294 \uc138 \uac00\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc81c\uacf5\uc790(provider)"),(0,i.kt)("li",{parentName:"ul"},"APNS: \uc560\ud50c\uc774 \uc81c\uacf5\ud558\ub294 \uc6d0\uaca9 \uc11c\ube44\uc2a4"),(0,i.kt)("li",{parentName:"ul"},"iOS \ub2e8\ub9d0: \ud478\uc2dc \uc54c\ub9bc\uc744 \uc218\uc2e0\ud558\ub294 \uc0ac\uc6a9\uc790 \ub2e8\ub9d0\uc785\ub2c8\ub2e4.")))),(0,i.kt)("h4",{id:"\uc548\ub4dc\ub85c\uc774\ub4dc-\ud478\uc2dc-\uc54c\ub9bc"},"\uc548\ub4dc\ub85c\uc774\ub4dc \ud478\uc2dc \uc54c\ub9bc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS\uc640 \ube44\uc2b7\ud558\ub098 APNS \ub300\uc2e0 FCM(Firebase Cloud Messaging)\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"sms-\uba54\uc2dc\uc9c0"},"SMS \uba54\uc2dc\uc9c0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \uc81c 3\uc0ac\uc5c5\uc790\uc758 \uc11c\ube44\uc2a4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\uc774\uba54\uc77c"},"\uc774\uba54\uc77c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc774 \ud68c\uc0ac\ub294 \uace0\uc720 \uc774\uba54\uc77c \uc11c\ubc84\ub97c \uad6c\ucd95\ud560 \uc5ed\ub7c9\uc774 \uc788\uc73c\ub098 \uc0c1\uc6a9 \uc774\uba54\uc77c \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc5f0\ub77d\ucc98-\uc815\ubcf4-\uc218\uc9d1-\uc808\ucc28"},"\uc5f0\ub77d\ucc98 \uc815\ubcf4 \uc218\uc9d1 \uc808\ucc28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc\uc744 \ubcf4\ub0b4\ub824\uba74 \ubaa8\ubc14\uc77c \ub2e8\ub9d0 \ud1a0\ud070, \uc804\ud654\ubc88\ud638, \uc774\uba54\uc77c \uc8fc\uc18c \ub4f1\uc758 \uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc54c\ub9bc-\uc804\uc1a1-\ubc0f-\uc218\uc2e0-\uc808\ucc28"},"\uc54c\ub9bc \uc804\uc1a1 \ubc0f \uc218\uc2e0 \uc808\ucc28"),(0,i.kt)("h4",{id:"\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\ucd08\uc548"},"\uac1c\ub7b5\uc801 \uc124\uacc4\uc548 (\ucd08\uc548)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/187309950-c1fe0b13-5501-45d1-83bb-9678e224f750.png",alt:"\uae30\ucd08\uc801 \uc124\uacc4"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPOF(Single-Point-Of-Failure): \uc54c\ub9bc \uc11c\ube44\uc2a4\uc5d0 \uc11c\ubc84\uac00 \ud558\ub098\ubc16\uc5d0 \uc5c6\ub2e4\ub294 \uac83\uc740, \uadf8 \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \uc0dd\uae30\uba74 \uc804\uccb4 \uc11c\ube44\uc2a4\uc758 \uc7a5\uc560\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc131: \ud55c \ub300 \uc11c\ube44\uc2a4\ub85c \ud478\uc2dc \uc54c\ub9bc\uc5d0 \uad00\uacc4\ub41c \ubaa8\ub4e0 \uac83\uc744 \ucc98\ub9ac\ud558\ubbc0\ub85c, \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \uce90\uc2dc \ub4f1 \uc911\uc694 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uaddc\ubaa8\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \ub298\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ubcd1\ubaa9: \uc54c\ub9bc\uc744 \ucc98\ub9ac\ud558\uace0 \ubcf4\ub0b4\ub294 \uac83\uc740 \uc790\uc6d0\uc744 \ub9ce\uc774 \ud544\uc694\ub85c \ud558\ub294 \uc791\uc5c5\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ud2b8\ub798\ud53d\uc774 \ubab0\ub9ac\uba74 \uacfc\ubd80\ud558 \uc0c1\ud0dc\uc5d0 \ube60\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\uac1c\uc120\ub41c-\ubc84\uc804-\ucd08\uae30\ubc84\uc804"},"\uac1c\uc120\ub41c \ubc84\uc804 (\ucd08\uae30\ubc84\uc804)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uce90\uc2dc\ub97c \uc54c\ub9bc \uc2dc\uc2a4\ud15c\uc758 \uc8fc \uc11c\ubc84\uc5d0\uc11c \ubd84\ub9ac"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc11c\ubc84\ub97c \uc99d\uc124\ud558\uace0 \uc790\ub3d9\uc73c\ub85c \uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc774 \uc774\ub8e8\uc5b4\uc9c8 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \ud050\ub97c \uc774\uc6a9\ud574 \uc2dc\uc2a4\ud15c \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc774\uc758 \uac15\ud55c \uacb0\ud569\uc744 \ub04a\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/187311229-31aac627-e44a-4cb6-b466-fe67f31e4507.png",alt:"\uac1c\uc120\ub41c \uc124\uacc4"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc11c\ubc84",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc804\uc1a1 API"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uac80\uc99d"),(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub610\ub294 \uce90\uc2dc \uc9c8\uc758"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc804\uc1a1"))),(0,i.kt)("li",{parentName:"ul"},"\uce90\uc2dc: \uc0ac\uc6a9\uc790 \uc815\ubcf4, \ub2e8\ub9d0 \uc815\ubcf4, \uc54c\ub9bc \ud15c\ud50c\ub9bf \ub4f1\uc744 \uce90\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4(DB): \uc0ac\uc6a9\uc790, \uc54c\ub9bc, \uc124\uc815 \ub4f1 \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \uc800\uc7a5"),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \ud050(message queue): \uc2dc\uc2a4\ud15c \ucef4\ud3ec\ub10c\ud2b8 \uac04 \uc758\uc874\uc131\uc744 \uc81c\uac70\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"),(0,i.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uc11c\ubc84(workers): \uba54\uc2dc\uc9c0 \ud050\uc5d0\uc11c \uc804\uc1a1\ud560 \uc54c\ub9bc\uc744 \uaebc\ub0b4\uc11c \uc81c3\uc790 \uc11c\ube44\uc2a4\ub85c \uc804\ub2ec")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4 \uc0c1\uc138 \uc124\uacc4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc544\ub798\uc758 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud558\uac8c \ubd05\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc548\uc815\uc131(reliability)"),(0,i.kt)("li",{parentName:"ul"},"\ucd94\uac00\ub85c \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8 \ubc0f \uace0\ub824\uc0ac\ud56d"),(0,i.kt)("li",{parentName:"ul"},"\uac1c\uc120\ub41c \uc124\uacc4\uc548")))),(0,i.kt)("h3",{id:"\uc548\uc815\uc131"},"\uc548\uc815\uc131"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc190\uc2e4 \ubc29\uc9c0"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc911\ubcf5 \uc804\uc1a1 \ubc29\uc9c0")),(0,i.kt)("h3",{id:"\ucd94\uac00\ub85c-\ud544\uc694\ud55c-\ucef4\ud3ec\ub10c\ud2b8-\ubc0f-\uace0\ub824\uc0ac\ud56d"},"\ucd94\uac00\ub85c \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8 \ubc0f \uace0\ub824\uc0ac\ud56d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \ud15c\ud50c\ub9bf"),(0,i.kt)("li",{parentName:"ul"},"\uc54c\ub9bc \uc124\uc815"),(0,i.kt)("li",{parentName:"ul"},"\uc804\uc1a1\ub960 \uc81c\ud55c"),(0,i.kt)("li",{parentName:"ul"},"\uc7ac\uc2dc\ub3c4 \ubc29\ubc95"),(0,i.kt)("li",{parentName:"ul"},"\ud478\uc26c \uc54c\ub9bc\uacfc \ubcf4\uc548"),(0,i.kt)("li",{parentName:"ul"},"\ud050 \ubaa8\ub2c8\ud130\ub9c1"),(0,i.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ucd94\uc801")),(0,i.kt)("h3",{id:"\uc218\uc815\ub41c-\uc124\uacc4\uc548"},"\uc218\uc815\ub41c \uc124\uacc4\uc548"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/187312387-4041f53c-ffcb-41bf-8da1-a7bb89342298.png",alt:"\uc218\uc815\ub41c \uc124\uacc4\uc548"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac"},"4\ub2e8\uacc4 \ub9c8\ubb34\ub9ac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac1c\ub7b5\uc801 \uc124\uacc4\uc548\uacfc \ub354\ubd88\uc5b4 \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uad6c\ud604 \ubc29\ubc95\uacfc \ucd5c\uc801\ud654 \uae30\ubc95\uc5d0 \uc9d1\uc911\ud588\uc73c\uba70, \uc544\ub798\uc758 \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud588\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc548\uc815\uc131"),(0,i.kt)("li",{parentName:"ul"},"\ubcf4\uc548"),(0,i.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ucd94\uc801 \ubc0f \ubaa8\ub2c8\ud130\ub9c1\uc0ac\uc6a9\uc790 \uc124\uc815")))))}m.isMDXComponent=!0}}]);