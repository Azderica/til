(self.webpackChunktil=self.webpackChunktil||[]).push([[2366],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=o(n),c=r,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},950:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:12},u={unversionedId:"web/http-perfect-guide/ch12",id:"web/http-perfect-guide/ch12",isDocsHomePage:!1,title:"12. \uae30\ubcf8 \uc778\uc99d",description:"- \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc788\ub294 \uac1c\uc778\uc758 \ud504\ub85c\ud544\uc774\ub098 \uac1c\uc778 \ubb38\uc11c\ub294 \ud574\ub2f9 \uc18c\uc720\uc790\uc758 \ub3d9\uc758\uc5c6\uc774\ub294 \uad8c\ud55c\uc774 \uc5c6\ub294 \uc0ac\uc6a9\uc790\uac00 \ubcfc \uc218 \uc5c6\uc5b4\uc57c\ud569\ub2c8\ub2e4.",source:"@site/docs/web/http-perfect-guide/ch12.md",sourceDirName:"web/http-perfect-guide",slug:"/web/http-perfect-guide/ch12",permalink:"/til/docs/web/http-perfect-guide/ch12",editUrl:"https://github.com/Azderica/til/edit/master/docs/web/http-perfect-guide/ch12.md",version:"current",lastUpdatedAt:1644934059,formattedLastUpdatedAt:"2/15/2022",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"11. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc2dd\ubcc4\uacfc \ucfe0\ud0a4",permalink:"/til/docs/web/http-perfect-guide/ch11"},next:{title:"13. \ub2e4\uc774\uc81c\uc2a4\ud2b8 \uc778\uc99d",permalink:"/til/docs/web/http-perfect-guide/ch13"}},p=[{value:"12.1 \uc778\uc99d",id:"121-\uc778\uc99d",children:[{value:"HTTP\uc758 \uc778\uc99d\uc694\uad6c/\uc751\ub2f5 \ud504\ub808\uc784\uc6cc\ud06c",id:"http\uc758-\uc778\uc99d\uc694\uad6c\uc751\ub2f5-\ud504\ub808\uc784\uc6cc\ud06c",children:[]},{value:"\uc778\uc99d \ud504\ub85c\ud1a0\ucf5c\uacfc \ud5e4\ub354",id:"\uc778\uc99d-\ud504\ub85c\ud1a0\ucf5c\uacfc-\ud5e4\ub354",children:[]},{value:"\ubcf4\uc548 \uc601\uc5ed",id:"\ubcf4\uc548-\uc601\uc5ed",children:[]}]},{value:"12.2 \uae30\ubcf8 \uc778\uc99d",id:"122-\uae30\ubcf8-\uc778\uc99d",children:[{value:"\uae30\ubcf8 \uc778\uc99d\uc758 \uc608",id:"\uae30\ubcf8-\uc778\uc99d\uc758-\uc608",children:[]},{value:"Base-64 \uc0ac\uc6a9\uc790 \uc774\ub984/\ube44\ubc00\ubc88\ud638 \uc778\ucf54\ub529",id:"base-64-\uc0ac\uc6a9\uc790-\uc774\ub984\ube44\ubc00\ubc88\ud638-\uc778\ucf54\ub529",children:[]},{value:"\ud504\ub77d\uc2dc \uc778\uc99d",id:"\ud504\ub77d\uc2dc-\uc778\uc99d",children:[]}]},{value:"12.3 \uae30\ubcf8 \uc778\uc99d\uc758 \ubcf4\uc548 \uacb0\ud568",id:"123-\uae30\ubcf8-\uc778\uc99d\uc758-\ubcf4\uc548-\uacb0\ud568",children:[]},{value:"12.4 \ucd94\uac00 \uc815\ubcf4",id:"124-\ucd94\uac00-\uc815\ubcf4",children:[]}],o={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc788\ub294 \uac1c\uc778\uc758 \ud504\ub85c\ud544\uc774\ub098 \uac1c\uc778 \ubb38\uc11c\ub294 \ud574\ub2f9 \uc18c\uc720\uc790\uc758 \ub3d9\uc758\uc5c6\uc774\ub294 \uad8c\ud55c\uc774 \uc5c6\ub294 \uc0ac\uc6a9\uc790\uac00 \ubcfc \uc218 \uc5c6\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\uae30 \uc704\ud574 \uc11c\ubc84\ub294 \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0\ub97c \uc2dd\ubcc4\ud560 \uc218 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc544\ub798\uc5d0\uc11c\ub294 HTTP \uc778\uc99d, \uae30\ubcf8 \uc778\uc99d, \uadf8\ub9ac\uace0 \ub2e4\uc774\uc81c\uc2a4\ud2b8 \uc778\uc99d\uc5d0 \ub300\ud574 \uc11c\uc220\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"121-\uc778\uc99d"},"12.1 \uc778\uc99d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc778\uc99d\uc740 \ub2f9\uc2e0\uc774 \ub204\uad6c\uc778\uc9c0 \uc99d\uba85\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub370\uc774\ud130\ub294 \ub2f9\uc2e0\uc774 \ub204\uad70\uc9c0 \ud310\ub2e8\ud558\ub294\ub370 \ub3c4\uc6c0\ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"http\uc758-\uc778\uc99d\uc694\uad6c\uc751\ub2f5-\ud504\ub808\uc784\uc6cc\ud06c"},"HTTP\uc758 \uc778\uc99d\uc694\uad6c/\uc751\ub2f5 \ud504\ub808\uc784\uc6cc\ud06c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP\ub294 \uc0ac\uc6a9\uc790 \uc778\uc99d\uc744 \ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uc790\uccb4 \uc778\uc99d\uc694\uad6c/\uc751\ub2f5 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 HTTP \uc694\uccad \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc73c\uba74, \uc11c\ubc84\ub294 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ub300\uc2e0\uc5d0 \ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0\ub97c \uc54c \uc218 \uc788\uac8c \ube44\ubc00\ubc88\ud638 \uac19\uc774 \uac1c\uc778 \uc815\ubcf4\ub97c \uc694\uad6c\ud558\ub294 '\uc778\uc99d \uc694\uad6c'\ub85c \uc751\ub2f5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/139518921-248b9f58-9f4e-4ae2-879d-d55d79bed0dc.png",alt:"HTTP \uc778\uc99d\uc694\uad6c/\uc751\ub2f5"})),(0,l.kt)("h3",{id:"\uc778\uc99d-\ud504\ub85c\ud1a0\ucf5c\uacfc-\ud5e4\ub354"},"\uc778\uc99d \ud504\ub85c\ud1a0\ucf5c\uacfc \ud5e4\ub354"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP\ub294 \ud544\uc694\uc5d0 \ub530\ub77c \uace0\uccd0 \uc4f8 \uc218 \uc788\ub294 \uc81c\uc5b4 \ud5e4\ub354\ub97c \ud1b5\ud574, \ub2e4\ub978 \uc778\uc99d \ud504\ub85c\ud1a0\ucf5c\uc5d0 \ub9de\ucd94\uc5b4 \ud655\uc7a5\ud560 \uc218 \uc788\ub294 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"HTTP\uc5d0\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\uae30\ubcf8 \uc778\uc99d"),"\uacfc ",(0,l.kt)("strong",{parentName:"li"},"\ub2e4\uc774\uc81c\uc2a4\ud2b8 \uc778\uc99d"),"\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uacf5\uc2dd\uc801\uc778 \uc778\uc99d \ud504\ub85c\ud1a0\ucf5c\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ub2e8\uacc4"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud5e4\ub354"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc/\uc0c1\ud0dc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc694\uccad"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\uccab\ubc88\uc9f8\uc694\uccad\uc5d0\ub294 \uc778\uc99d \uc815\ubcf4\uac00 \uc5c6\uc74c"),(0,l.kt)("td",{parentName:"tr",align:null},"GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc778\uc99d \uc694\uad6c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WWW-Authenticate")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc11c\ubc84\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \uc81c\uacf5\ud558\ub77c\ub294 \uc758\ubbf8\ub85c 401"),(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc778\uc99d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Authorization")),(0,l.kt)("td",{parentName:"tr",align:null},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc694\uccad\uc744 \ub2e4\uc2dc\ubcf4\ub0b4\ub294\ub370 \uc778\uc99d \uc815\ubcf4\ud5e4\ub354\ub97c \ubcf4\ub0c5\ub2c8\ub2e4"),(0,l.kt)("td",{parentName:"tr",align:null},"GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc131\uacf5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Authentication-Info")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc778\uc99d \uc815\ubcf4\uac00 \uc815\ud655\ud558\uba74 \uc11c\ubc84\ub294 \ubb38\uc11c\uc640 \ud568\uaed8 \uc751\ub2f5\ud569\ub2c8\ub2e4"),(0,l.kt)("td",{parentName:"tr",align:null},"200 OK")))),(0,l.kt)("h3",{id:"\ubcf4\uc548-\uc601\uc5ed"},"\ubcf4\uc548 \uc601\uc5ed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uc601\uc5ed\uc740 \uc800\ub9c8\ub2e4 \ub2e4\ub978 \uc0ac\uc6a9\uc790 \uad8c\ud55c\uc744 \uc694\uad6c\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"realm \ud30c\ub77c\ubbf8\ud130\uac00 \ud568\uaed8 \uae30\uc220\ub41c \uae30\ubcf8 \uc778\uc99d\uc758 \uc608\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'HTTP/1.0 401 Unauthorized\nWWW-Authenticate: Basic realm="Corporate Financials"\n')),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"122-\uae30\ubcf8-\uc778\uc99d"},"12.2 \uae30\ubcf8 \uc778\uc99d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc740 \uac00\uc7a5 \uc798 \uc54c\ub824\uc9c4 HTTP \uc778\uc99d \uaddc\uc57d\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc5d0\uc11c, \uc6f9 \uc11c\ubc84\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \uac70\ubd80\ud558\uace0 \uc720\ud6a8\ud55c \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \uc774\ub984\uc744 \uc694\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\ub294 \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c Authorization \uc694\uccad \ud5e4\ub354 \uc548\uc5d0 \uc554\ud638\ud654\ud574\uc11c \uc11c\ubc84\ub85c \ub2e4\uc2dc \ubcf4\ub0c5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uae30\ubcf8-\uc778\uc99d\uc758-\uc608"},"\uae30\ubcf8 \uc778\uc99d\uc758 \uc608"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc778\uc99d\uc694\uad6c/\uc751\ub2f5"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud5e4\ub354 \ubb38\ubc95\uacfc \uc124\uba85"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc778\uc99d\uc694\uad6c(\uc11c\ubc84\uc5d0\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c)"),(0,l.kt)("td",{parentName:"tr",align:null},"\uac01 \uc0ac\uc774\ud2b8\ub294 \ubcf4\uc548 \uc601\uc5ed\ub9c8\ub2e4 \ub2e4\ub978 \ube44\ubc00\ubc88\ud638\uac00 \uc788\uc74c, realm\uc740 \uc694\uccad \ubc1b\uc740 \ubb38\uc11c \uc9d1\ud569\uc758 \uc774\ub984, ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"WWW-Authenticate: Basic realm=\ub530\uc634\ud45c\ub85c \uac10\uc2fc \ubb38\uc11c \uc9d1\ud569 \uc815\ubcf4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5(\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc11c\ubc84\ub85c)"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub294 \ucf5c\ub860\uc73c\ub85c \uc788\uace0, base-64\ub85c \uc778\ucf54\ub529\ud558\uace0 \ub178\ucd9c\uc774 \uc548\ub418\uac8c \ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"Authorization: Basic base-64\ub85c \uc778\ucf54\ub529\ud55c \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638"))))),(0,l.kt)("h3",{id:"base-64-\uc0ac\uc6a9\uc790-\uc774\ub984\ube44\ubc00\ubc88\ud638-\uc778\ucf54\ub529"},"Base-64 \uc0ac\uc6a9\uc790 \uc774\ub984/\ube44\ubc00\ubc88\ud638 \uc778\ucf54\ub529"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP \uae30\ubcf8 \uc778\uc99d\uc740 \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ucf5c\ub860\uc73c\ub85c \uc774\uc5b4 \ud569\uce58\uace0, base-64 \uc778\ucf54\ub529 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc778\ucf54\ub529\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ud504\ub77d\uc2dc-\uc778\uc99d"},"\ud504\ub77d\uc2dc \uc778\uc99d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc911\uac1c \ud504\ub77d\uc2dc \uc11c\ubc84\ub97c \ud1b5\ud574 \uc778\uc99d\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud68c\uc0ac\ub294 \uc0ac\uc6a9\uc790\ub4e4\uc774 \ud68c\uc11c\u314f\uc758 \uc11c\ubc84\ub098 LAN\uc774\ub098 \ubb34\uc120 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc811\uadfc\ud558\uae30 \uc804\uc5d0 \ud504\ub77d\uc2dc \uc11c\ubc84\ub97c \uac70\uce58\uac8c \ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub77d\uc2dc \uc11c\ubc84\uc5d0\uc11c \uc811\uadfc \uc815\ucc45\uc744 \uc911\uc559 \uad00\ub9ac\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud1b5\ud569\uc801\uc778 \uc811\uadfc \uc81c\uc5b4\uc5d0 \uc7a5\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc6f9 \uc11c\ubc84"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud504\ub77d\uc2dc \uc11c\ubc84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ube44\uc778\uc99d \uc0c1\ud0dc \ucf54\ub4dc:401"),(0,l.kt)("td",{parentName:"tr",align:null},"\ube44\uc778\uc99d \uc0c1\ud0dc \ucf54\ub4dc:407")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WWW-Authenticate"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy-Authenticate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy-Authorization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authentication-Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy-Authentication-Info")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"123-\uae30\ubcf8-\uc778\uc99d\uc758-\ubcf4\uc548-\uacb0\ud568"},"12.3 \uae30\ubcf8 \uc778\uc99d\uc758 \ubcf4\uc548 \uacb0\ud568"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc740 \ub2e8\uc21c\ud558\uace0 \ud3b8\ub9ac\ud558\uc9c0\ub9cc \uc548\uc2ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc544\ub798\uc758 \ubcf4\uc548 \uacb0\ud568\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc740 \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \uc27d\uac8c \ub514\ucf54\ub529\ud560 \uc218 \uc788\ub294 \ud615\uc2dd\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc804\uc1a1\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SSL\uc744 \uc554\ud638\ud654 \ucc44\ub110\uc744 \ud1b5\ud574 \ubcf4\ub0b4\uac70\ub098 \ub2e4\uc774\uc81c\uc2a4\ud2b8 \uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \ube44\ubc00\ubc88\ud638\uac00 \ub514\ucf54\ub529\ud558\uae30 \ubcf5\uc7a1\ud558\ub354\ub77c\ub3c4 \uc774\ub97c \ucea1\uccd0\ud574\uc11c \uc778\uc99d\uc5d0 \uc131\uacf5\ud558\uace0 \uc11c\ubc84\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc774 \uc911\uc694\ud558\uc9c0 \uc54a\ub294 \uacf3\uc5d0 \uc0ac\uc6a9\ub418\ub354\ub77c\ub3c4, \ub2e4\ub978 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uae30\uc5d0 \ub9e4\uc6b0 \uc704\ud5d8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0\uc758 \uc778\uc99d \ud5e4\ub354\ub97c \uac74\ub4dc\ub9ac\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uadf8 \uc678 \ub2e4\ub978 \ubd80\ubd84\uc744 \uc218\uc815\ud574\uc11c \ud2b8\ub79c\uc7ad\uc158\uc758 \ubcf8\ub798 \uc758\ub3c4\ub97c \ubc14\uafd4\ubc84\ub9ac\ub294 \ud504\ub77d\uc2dc\ub098 \uc911\uac1c\uc790\uac00 \uac1c\uc785\ud558\ub294 \uacbd\uc6b0, \uc815\uc0c1 \ub3d9\uc791\uc744 \ubcf4\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc778\uc99d\uc740 \uac00\uc9dc \uc11c\ubc84\uc758 \uc704\uc7a5\uc5d0 \ucde8\uc57d\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uae30\ubcf8 \uc778\uc99d\uc740 \uc77c\ubc18\uc801\uc778 \ud658\uacbd\uc5d0\uc11c \uac1c\uc778\ud654\ub098 \uc811\uadfc \uc81c\uc5b4\ud558\ub294\ub370 \ud3b8\ub9ac\ud558\uba70 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ubcf4\uc9c0 \uc54a\uae30\ub97c \uc6d0\ud558\uc9c0\ub9cc \ubd10\ub3c4 \uce58\uba85\uc801\uc774\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"124-\ucd94\uac00-\uc815\ubcf4"},"12.4 \ucd94\uac00 \uc815\ubcf4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.blocko.io/developer/ldap-%EC%9D%B8%EC%A6%9D/"},"LDAP"))))}d.isMDXComponent=!0}}]);