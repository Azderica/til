(self.webpackChunktil=self.webpackChunktil||[]).push([[7924],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return T},kt:function(){return d}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},T=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,T=u(e,["components","mdxType","originalType","parentName"]),k=c(l),d=r,m=k["".concat(p,".").concat(d)]||k[d]||o[d]||a;return l?n.createElement(m,i(i({ref:t},T),{},{components:l})):n.createElement(m,i({ref:t},T))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},3008:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return T}});var n=l(2122),r=l(9756),a=(l(7294),l(3905)),i={sidebar_position:8},u={unversionedId:"web/http-perfect-guide/ch8",id:"web/http-perfect-guide/ch8",isDocsHomePage:!1,title:"8. \ud1b5\ud569\uc810: \uac8c\uc774\ud2b8\uc6e8\uc774, \ud130\ub110, \ub9b4\ub808\uc774",description:"\uc544\ub798\uc5d0\uc11c\ub294 \ub2e4\uc74c\uc758 \ub0b4\uc6a9\uc744 \ub2e4\ub8f9\ub2c8\ub2e4.",source:"@site/docs/web/http-perfect-guide/ch8.md",sourceDirName:"web/http-perfect-guide",slug:"/web/http-perfect-guide/ch8",permalink:"/til/docs/web/http-perfect-guide/ch8",editUrl:"https://github.com/Azderica/til/edit/master/docs/web/http-perfect-guide/ch8.md",version:"current",lastUpdatedAt:1630651558,formattedLastUpdatedAt:"9/3/2021",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. \uce90\uc2dc",permalink:"/til/docs/web/http-perfect-guide/ch7"},next:{title:"9. \uc6f9 \ub85c\ubd07",permalink:"/til/docs/web/http-perfect-guide/ch9"}},p=[{value:"8.1 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"81-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[{value:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uac8c\uc774\ud2b8\uc6e8\uc774\uc640 \uc11c\ubc84 \uce21 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\uac8c\uc774\ud2b8\uc6e8\uc774\uc640-\uc11c\ubc84-\uce21-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[]}]},{value:"8.2 \ud504\ub85c\ud1a0\ucf5c \uac8c\uc774\ud2b8\uc6e8\uc774",id:"82-\ud504\ub85c\ud1a0\ucf5c-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[{value:"HTTP/*: \uc11c\ubc84\uce21 \uc6f9 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"http-\uc11c\ubc84\uce21-\uc6f9-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[]},{value:"HTTP/HTTPS: \uc11c\ubc84 \uce21 \ubcf4\uc548 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"httphttps-\uc11c\ubc84-\uce21-\ubcf4\uc548-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[]},{value:"HTTPS/HTTP: \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubcf4\uc548 \uac00\uc18d \uac8c\uc774\ud2b8\uc6e8\uc774",id:"httpshttp-\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\ubcf4\uc548-\uac00\uc18d-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[]}]},{value:"8.3 \ub9ac\uc18c\uc2a4 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"83-\ub9ac\uc18c\uc2a4-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[{value:"\uacf5\uc6a9 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc778\ud130\ud398\uc774\uc2a4",id:"\uacf5\uc6a9-\uac8c\uc774\ud2b8\uc6e8\uc774-\uc778\ud130\ud398\uc774\uc2a4",children:[]},{value:"\uc11c\ubc84 \ud655\uc7a5 API",id:"\uc11c\ubc84-\ud655\uc7a5-api",children:[]}]},{value:"8.4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc6f9 \uc11c\ube44\uc2a4",id:"84-\uc560\ud50c\ub9ac\ucf00\uc774\uc158-\uc778\ud130\ud398\uc774\uc2a4\uc640-\uc6f9-\uc11c\ube44\uc2a4",children:[]},{value:"8.5 \ud130\ub110",id:"85-\ud130\ub110",children:[{value:"CONNECT\ub85c HTTP \ud130\ub110 \ucee4\ub125\uc158 \ub9fa\uae30",id:"connect\ub85c-http-\ud130\ub110-\ucee4\ub125\uc158-\ub9fa\uae30",children:[]},{value:"\ub370\uc774\ud130 \ud130\ub110\ub9c1, \uc2dc\uac04, \ucee4\ub125\uc158 \uad00\ub9ac",id:"\ub370\uc774\ud130-\ud130\ub110\ub9c1-\uc2dc\uac04-\ucee4\ub125\uc158-\uad00\ub9ac",children:[]},{value:"SSL \ud130\ub110\ub9c1",id:"ssl-\ud130\ub110\ub9c1",children:[]},{value:"SSL \ud130\ub110\ub9c1 vs HTTP/HTTPS \uac8c\uc774\ud2b8\uc6e8\uc774",id:"ssl-\ud130\ub110\ub9c1-vs-httphttps-\uac8c\uc774\ud2b8\uc6e8\uc774",children:[]},{value:"\ud130\ub110 \uc778\uc99d",id:"\ud130\ub110-\uc778\uc99d",children:[]},{value:"\ud130\ub110 \ubcf4\uc548\uc5d0 \ub300\ud55c \uace0\ub824\uc0ac\ud56d\ub4e4",id:"\ud130\ub110-\ubcf4\uc548\uc5d0-\ub300\ud55c-\uace0\ub824\uc0ac\ud56d\ub4e4",children:[]}]},{value:"8.6 \ub9b4\ub808\uc774",id:"86-\ub9b4\ub808\uc774",children:[]}],c={toc:p};function T(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 \ub2e4\uc74c\uc758 \ub0b4\uc6a9\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac8c\uc774\ud2b8\uc6e8\uc774 : \uc11c\ub85c \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac04\uc758 HTTP \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc778\ud130\ud398\uc774\uc2a4 : \uc11c\ub85c \ub2e4\ub978 \ud615\uc2dd\uc758 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud1b5\uc2e0\ud558\ub294 \ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud130\ub110 : HTTP \ucee4\ub125\uc158\uc744 \ud1b5\ud574\uc11c HTTP\uac00 \uc544\ub2cc \ud2b8\ub798\ud53d\uc744 \uc804\uc1a1\ud558\ub294\ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9b4\ub808\uc774 : \uc77c\uc885\uc758 \ub2e8\uc21c\ud55c HTTP \ud504\ub77d\uc2dc\ub85c, \ud55c \ubc88\uc5d0 \ud55c \uac1c\uc758 \ud649\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294\ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"81-\uac8c\uc774\ud2b8\uc6e8\uc774"},"8.1 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ub9ac\uc18c\uc2a4\uc640 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc5f0\uacb0\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 HTTP \ud2b8\ub798\ud53d\uc744 \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\ub85c \uc790\ub3d9\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec, HTTP \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc54c \ud544\uc694 \uc5c6\uc774 \uc11c\ubc84\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uac8c\ub3c4 \ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc608\uc2dc 1. HTTP/FTP \uc11c\ubc84 \uce21 FTP \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("li",{parentName:"ul"},"\uc608\uc2dc 2. HTTP/FTP \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubcf4\uc548 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("li",{parentName:"ul"},"\uc608\uc2dc 3. HTTP/CGI \uc11c\ubc84 \uce21 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac8c\uc774\ud2b8\uc6e8\uc774")))),(0,a.kt)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\uac8c\uc774\ud2b8\uc6e8\uc774\uc640-\uc11c\ubc84-\uce21-\uac8c\uc774\ud2b8\uc6e8\uc774"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uac8c\uc774\ud2b8\uc6e8\uc774\uc640 \uc11c\ubc84 \uce21 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud55c\ucabd\uc740 HTTP, \ub2e4\ub978 \ud55c\ucabd\uc740 HTTP\uac00 \uc544\ub2cc \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\ub85c \ud1b5\uc2e0\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ex) ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP/NNTP")))),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uce21 \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 HTTP\ub85c \ud1b5\uc2e0\ud558\uace0, \uc11c\ubc84\uc640\ub294 \uc678\ub798 \ud504\ub85c\ud1a0\ucf5c\ub85c \ud1b5\uc2e0\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc678\ub798 \ud504\ub85c\ud1a0\ucf55\u3139\ub85c \ud1b5\uc2e0\ud558\uace0, \uc11c\ubc84\uc640\ub294 HTTP\ub85c \ud1b5\uc2e0\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"82-\ud504\ub85c\ud1a0\ucf5c-\uac8c\uc774\ud2b8\uc6e8\uc774"},"8.2 \ud504\ub85c\ud1a0\ucf5c \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("h3",{id:"http-\uc11c\ubc84\uce21-\uc6f9-\uac8c\uc774\ud2b8\uc6e8\uc774"},"HTTP/","*",": \uc11c\ubc84\uce21 \uc6f9 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USER\uc640 PASS \uba85\ub839\uc744 \ubcf4\ub0b4\uc11c \uc11c\ubc84\uc5d0 \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uc5d0\uc11c \uc801\uc808\ud55c \ub514\ub809\ud130\ub9ac\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud574 CWD \uba85\ub839\uc744 \ub0b4\ub9bd\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc6b4\ub85c\ub4dc \ud615\uc2dd\uc744 ASCII\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"MDTM\uc73c\ub85c \ubb38\uc11c\uc758 \ucd5c\uadfc \uc218\uc815 \uc2dc\uac04\uc744 \uac00\uc838\uc635\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"PASV\ub85c \uc11c\ubc84\uc5d0\uac8c \uc218\ub3d9\ud615 \ub370\uc774\ud130 \uac80\uc0c9\uc744 \ud558\uaca0\ub2e4\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"RETR\ub85c \uac1d\uccb4\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc81c\uc5b4 \ucc44\ub110\uc5d0\uc11c \ubc18\ud658\ub41c \ud3ec\ud2b8\ub85c FTP \uc11c\ubc84\uc5d0 \ub370\uc774\ud130 \ucee4\ub125\uc158\uc744 \ub9fa\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130 \ucc44\ub110\uc774 \uc5f4\ub9ac\ub294 \ub300\ub85c, \uac1d\uccb4\uac00 \uac8c\uc774\ud2b8\uc6e8\uc774\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"httphttps-\uc11c\ubc84-\uce21-\ubcf4\uc548-\uac8c\uc774\ud2b8\uc6e8\uc774"},"HTTP/HTTPS: \uc11c\ubc84 \uce21 \ubcf4\uc548 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae30\uc5c5 \ub0b4\ubd80\uc758 \ubaa8\ub4e0 \uc6f9 \uc694\uccad\uc744 \uc554\ud638\ud654\ud568\uc73c\ub85c\uc368 \uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638\uc640 \ubcf4\uc548\uc744 \uc81c\uacf5\ud558\ub294\ub370 \uac8c\uc774\ud2b8\uc6e8\uc774\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"httpshttp-\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\ubcf4\uc548-\uac00\uc18d-\uac8c\uc774\ud2b8\uc6e8\uc774"},"HTTPS/HTTP: \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubcf4\uc548 \uac00\uc18d \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ubcf4\uc548 \uac00\uc18d\uae30\ub85c \uc720\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP/HTTPS \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \uc6f9 \uc11c\ubc84\uc758 \uc55e\ub2e8\uc5d0 \uc704\uce58\ud558\uace0, \ubcf4\uc774\uc9c0 \uc54a\ub294 \uc778\ud130\uc149\ud2b8 \uac8c\uc774\ud2b8\uc6e8\uc774\ub098 \ub9ac\ubc84\uc2a4 \ud504\ub77d\uc2dc \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \uc6d0 \uc11c\ubc84\ubcf4\ub2e4 \ub354\uc6b1 \ud6a8\uc728\uc801\uc73c\ub85c \ubcf4\uc548 \ud2b8\ub798\ud53d\uc744 \ubcf5\ud638\ud654\ud558\ub294 \uc554\ud638\ud654 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ub0b4\uc7a5\ud574\uc11c \uc6d0 \uc11c\ubc84\uc758 \ubd80\ud558\ub97c \uc904\uc5ec\uc8fc\uae30\ub3c4 \ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"83-\ub9ac\uc18c\uc2a4-\uac8c\uc774\ud2b8\uc6e8\uc774"},"8.3 \ub9ac\uc18c\uc2a4 \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("h3",{id:"\uacf5\uc6a9-\uac8c\uc774\ud2b8\uc6e8\uc774-\uc778\ud130\ud398\uc774\uc2a4"},"\uacf5\uc6a9 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc778\ud130\ud398\uc774\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CGI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc11c\ubc84\uc640 \ubd84\ub9ac\ub418\uba74\uc11c \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub85c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CGI\uac00 \ub0b4\ubd80\uc5d0\uc11c \uc5b4\ub5a4 \ucc98\ub9ac\ub97c \ud558\ub294\uc9c0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc11c\ubc84-\ud655\uc7a5-api"},"\uc11c\ubc84 \ud655\uc7a5 API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uac1c\ubc1c\uc790\ub294 \uc6f9 \uac1c\ubc1c\uc790\uac00 \uc790\uc2e0\uc758 \ubaa8\ub4c8\uc744 HTTP\uc640 \uc9c1\uc811 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc778 \uc11c\ubc84 \ud655\uc7a5 API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"84-\uc560\ud50c\ub9ac\ucf00\uc774\uc158-\uc778\ud130\ud398\uc774\uc2a4\uc640-\uc6f9-\uc11c\ube44\uc2a4"},"8.4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc6f9 \uc11c\ube44\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc5f0\uacb0\ud558\uba74\uc11c \uc0dd\uae30\ub294 \uae4c\ub2e4\ub85c\uc6b4 \uc774\uc288 \uc911 \ud558\ub098\ub294 \ub370\uc774\ud130\ub97c \uad50\ud658\ud558\ub824\ub294 \ub450 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0ac\uc774\uc5d0\uc11c \ud504\ub85c\ud1a0\ucf5c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9de\ucd94\ub294 \uc77c\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc778\ud130\ub137 \ucee4\ubba4\ub2c8\ud2f0\ub294 \uac01 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc11c\ub85c \ud1b5\uc2e0\ud558\ub294\ub370 \uc0ac\uc6a9\ud560 \ud45c\uc900\uacfc \ud504\ub85c\ud1a0\ucf5c \uc9d1\ud569\uc744 \uac1c\ubc1c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SOAP(Simple Object Access Protocol)\uc740 HTTP \uba54\uc2dc\uc9c0\uc5d0 XML \ub370\uc774\ud130\ub97c \ub2f4\ub294 \ubc29\uc2dd\uc5d0 \uad00\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4."))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"85-\ud130\ub110"},"8.5 \ud130\ub110"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \ud130\ub110\uc740 HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 HTTP \uc560\ud50c\ub9ac\ucf15\uc2dc\ub155\ub974 \uc0ac\uc6a9\ud574 \uc811\uadfc\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \ud130\ub110\uc744 \uc0ac\uc6a9\ud558\uba74 HTTP \ucee4\ub125\uc158\uc744 \ud1b5\ud574\uc11c HTTP\uac00 \uc544\ub2cc \ud2b8\ub798\ud53d\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub2e4\uace0, \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\uc744 HTTP \uc704\uc5d0 \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"connect\ub85c-http-\ud130\ub110-\ucee4\ub125\uc158-\ub9fa\uae30"},"CONNECT\ub85c HTTP \ud130\ub110 \ucee4\ub125\uc158 \ub9fa\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \ud130\ub110\uc740 HTTP\uc758 CONNECT \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee4\ub125\uc158\uc744 \ub9fa\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CONNECT \uba54\uc11c\ub4dc\ub294 \ubaa8\ub4e0 \uc11c\ubc84\ub098 \ud504\ub85c\ud1a0\ucf5c\uc5d0 TCP \ucee4\ub125\uc158\uc744 \ub9fa\ub294\ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"connect-\uc694\uccad"},"CONNECT \uc694\uccad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"CONNECT home.netscape.com:443 HTTP/1.0\nUser-agent: Mozilla/4.0\n")),(0,a.kt)("p",null,"\ucd94\uac00\uc801\uc778 HTTP \uc694\uccad \ud5e4\ub354 \ud544\ub4dc\uac00 \uc788\uac70\ub098 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"connect-\uc751\ub2f5"},"CONNECT \uc751\ub2f5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.0 200 Connection Established\nProxy-agent: Netscape-Proxy/1.1\n")),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc778 HTTP \uc751\ub2f5\uacfc \ub2ec\ub9ac Content-Type\uc774 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. (\ubc14\uc774\ud2b8\ub97c \uc804\ub2ec\ud558\ubbc0\ub85c)"),(0,a.kt)("h3",{id:"\ub370\uc774\ud130-\ud130\ub110\ub9c1-\uc2dc\uac04-\ucee4\ub125\uc158-\uad00\ub9ac"},"\ub370\uc774\ud130 \ud130\ub110\ub9c1, \uc2dc\uac04, \ucee4\ub125\uc158 \uad00\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud130\ub110\uc744 \ud1b5\ud574 \uc804\ub2ec\ub418\ub294 \ub370\uc774\ud130\ub294 \uac8c\uc774\ud2b8\uc6e8\uc774\uc5d0\uc11c \ubcfc \uc218 \uc5c6\uc5b4\uc11c, \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud328\ud0b7\uc758 \uc21c\uc11c\ub098 \ud750\ub984\uc5d0 \ub300\ud55c \uc5b4\ub5a4 \uac00\uc815\ub3c4 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 CONNECT \uc694\uccad\uc744 \ubcf4\ub0b8 \ub2e4\uc74c, \uc751\ub2f5\uc744 \ubc1b\uae30 \uc804\uc5d0 \ud130\ub110 \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucee4\ub125\uc158\uc774 \ub04a\uae34 \ud55c\ucabd\uc5d0 \uc804\uc1a1\ud558\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\ub294 \ubc84\ub824\uc9d1\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"ssl-\ud130\ub110\ub9c1"},"SSL \ud130\ub110\ub9c1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/131961105-959f4015-69b7-419e-9025-97ec8995fa75.png",alt:"image"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6f9 \ud130\ub110\uc740 \uc6d0\ub798 \ubc29\ud654\ubcbd\uc744 \ud1b5\ud574\uc11c \uc554\ud638\ud654\ub41c SSL \ud2b8\ub798\ud53d\uc744 \uc804\ub2ec\ud558\ub824\uace0 \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"SSL \ud2b8\ub798\ud53d\uc774 \uae30\uc874 \ud504\ub77d\uc2dc \ubc29\ud654\ubcbd\uc744 \ud1b5\uacfc\ud560 \uc218 \uc788\ub3c4\ub85d HTTP\uc5d0 \ud130\ub110\ub9c1 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud130\ub110\uc740 HTTP\uac00 \uc544\ub2cc \ud2b8\ub798\ud53d\uc774 \ud3ec\ud2b8\ub97c \uc81c\ud55c\ud558\ub294 \ubc29\ud654\ubcbd\uc744 \ud1b5\u314e\uacfc\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"ssl-\ud130\ub110\ub9c1-vs-httphttps-\uac8c\uc774\ud2b8\uc6e8\uc774"},"SSL \ud130\ub110\ub9c1 vs HTTP/HTTPS \uac8c\uc774\ud2b8\uc6e8\uc774"),(0,a.kt)("p",null,"HTTPS \ud504\ub85c\ud1a0\ucf5c\uc740 \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uac8c\uc774\ud2b8\uc6e8\uc774\ub97c \ud1b5\uacfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uba87\uac00\uc9c0 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8-\uac8c\uc774\ud2b8\uc6e8\uc774 \uc0ac\uc774\uc5d0\ub294 \ubcf4\uc548\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc77c\ubc18 HTTP \ucee4\ub125\uc158\uc774 \ub9fa\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub77d\uc2dc\uac00 \uc778\uc99d\uc744 \ub2f4\ub2f9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc6d0\uaca9 \uc11c\ubc84\uc5d0 SSL \ud074\ub77c\uc774\uc5b8\ud2b8 \uc778\uc99d\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 SSL\uc744 \uc644\ubcbd\ud788 \uc9c0\uc6d0\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774 \uc0c1\ud669\uc5d0\uc11c SSL \ud130\ub110\ub9c1\uc744 \uc0ac\uc6a9\ud558\uba74 \ud504\ub77d\uc2dc\uc5d0 SSL\uc744 \uad6c\ud604\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \ud504\ub77d\uc2dc \uc11c\ubc84\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \ubcf4\uc548\uc5d0\ub294 \uad00\uc5ec\ud558\uc9c0 \uc54a\uace0 \uc554\ud638\ud654\ub41c \ub370\uc774\ud130\ub97c \uadf8\ub300\ub85c \ud130\ub110\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud130\ub110-\uc778\uc99d"},"\ud130\ub110 \uc778\uc99d"),(0,a.kt)("p",null,"HTTP\uc758 \ub2e4\ub978 \uae30\ub2a5\ub4e4\uc740 \ud130\ub110\uacfc \ud568\uaed8 \uc801\uc808\ud788 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \ud504\ub77d\uc2dc \uc778\uc99d \uae30\ub2a5\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud130\ub110\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \uac80\uc0ac\ud558\ub294 \uc6a9\ub3c4\ub85c \ud130\ub110\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud130\ub110-\ubcf4\uc548\uc5d0-\ub300\ud55c-\uace0\ub824\uc0ac\ud56d\ub4e4"},"\ud130\ub110 \ubcf4\uc548\uc5d0 \ub300\ud55c \uace0\ub824\uc0ac\ud56d\ub4e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud130\ub110 \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud1b5\uc2e0\ud558\uace0 \uc788\ub294 \ud504\ub85c\ud1a0\ucf5c\uc774 \ud130\ub110\uc744 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud130\ub110\uc758 \uc624\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574\uc11c \uac8c\uc774\ud2b8\uc6e8\uc774\ub294 HTTPS \uc804\uc6a9 \ud3ec\ud2b8\uc778 443 \uac19\uc774 \uc798 \uc54c\ub824\uc9c4 \ud2b9\uc815 \ud3ec\ud2b8\ub9cc\uc744 \ud130\ub110\ub9c1\ud560 \uc218 \uc788\uac8c \ud5c8\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"86-\ub9b4\ub808\uc774"},"8.6 \ub9b4\ub808\uc774"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP \ub9b4\ub808\uc774\ub294 HTTP \uba85\uc138\ub97c \uc644\uc804\ud788 \uc900\uc218\ud558\uc9c0\ub294 \uc54a\ub294 \uac04\ub2e8\ud55c HTTP \ud504\ub77d\uc2dc\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP\uac00 \ubcf5\uc7a1\ud560 \ub54c, \ubaa8\ub4e0 \ud5e4\ub354\uc640 \uba54\uc11c\ub4dc \ub85c\uc9c1\uc744 \uc218\ud589\ud558\uc9c0 \uc54a\uace0 \ub9f9\ubaa9\uc801\uc73c\ub85c \ud2b8\ub798\ud53d\uc744 \uc804\ub2ec\ud558\ub294 \uac04\ub2e8\ud55c \ud504\ub77d\uc2dc\ub97c \uad6c\ud604\ud560 \ub54c\uac00 \uc720\ub9ac\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c, \ub9f9\ubaa9\uc801 \ub9b4\ub808\uc774\uac00 \ubc1c\uc0dd\ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"li"},"keep-alive")," \ucee4\ub125\uc158\uc774 \ud589\uc5d0 \uac78\ub9ac\ub294 \ubb38\uc81c\uac00 \uc0dd\uae41\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \uc608\ubc29\ud558\uae30 \uc704\ud574 HTTP\ub97c \uc81c\ub300\ub85c \uc900\uc218\ud558\ub294 \ud504\ub77d\uc2dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")))}T.isMDXComponent=!0}}]);