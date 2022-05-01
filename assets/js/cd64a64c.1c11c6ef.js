(self.webpackChunktil=self.webpackChunktil||[]).push([[2531],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var p=n.createContext({}),o=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=o(r),k=l,s=d["".concat(p,".").concat(k)]||d[k]||m[k]||a;return r?n.createElement(s,i(i({ref:e},c),{},{components:r})):n.createElement(s,i({ref:e},c))}));function k(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var o=2;o<a;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8285:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(2122),l=r(9756),a=(r(7294),r(3905)),i={sidebar_position:10},u={unversionedId:"web/http-perfect-guide/ch10",id:"web/http-perfect-guide/ch10",isDocsHomePage:!1,title:"10. HTTP/2.0",description:"- HTTP/2.0 \uc758 \uc0c1\uc138 \ub0b4\uc6a9\uc740 \uacf5\uc2dd document\ub97c \ubcf4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.",source:"@site/docs/web/http-perfect-guide/ch10.md",sourceDirName:"web/http-perfect-guide",slug:"/web/http-perfect-guide/ch10",permalink:"/til/docs/web/http-perfect-guide/ch10",editUrl:"https://github.com/Azderica/til/edit/master/docs/web/http-perfect-guide/ch10.md",version:"current",lastUpdatedAt:1651371930,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. \uc6f9 \ub85c\ubd07",permalink:"/til/docs/web/http-perfect-guide/ch9"},next:{title:"11. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc2dd\ubcc4\uacfc \ucfe0\ud0a4",permalink:"/til/docs/web/http-perfect-guide/ch11"}},p=[{value:"10.1 HTTP/2.0\uc758 \ub4f1\uc7a5\ubc30\uacbd",id:"101-http20\uc758-\ub4f1\uc7a5\ubc30\uacbd",children:[]},{value:"10.2 \uac1c\uc694",id:"102-\uac1c\uc694",children:[]},{value:"10.3 HTTP/1.1\uacfc\uc758 \ucc28\uc774\uc810",id:"103-http11\uacfc\uc758-\ucc28\uc774\uc810",children:[{value:"\ud504\ub808\uc784",id:"\ud504\ub808\uc784",children:[]},{value:"\uc2a4\ud2b8\ub9bc\uacfc \uba40\ud2f0\ud50c\ub809\uc2f1",id:"\uc2a4\ud2b8\ub9bc\uacfc-\uba40\ud2f0\ud50c\ub809\uc2f1",children:[]},{value:"\ud5e4\ub354 \uc555\ucd95",id:"\ud5e4\ub354-\uc555\ucd95",children:[]},{value:"\uc11c\ubc84 \ud478\uc2dc",id:"\uc11c\ubc84-\ud478\uc2dc",children:[]}]},{value:"10.4 \uc54c\ub824\uc9c4 \ubcf4\uc548 \uc774\uc288",id:"104-\uc54c\ub824\uc9c4-\ubcf4\uc548-\uc774\uc288",children:[{value:"\uc911\uac1c\uc790 \ucea1\uc290\ud654 \uacf5\uaca9(Intermediary Encapsulation Attacks)",id:"\uc911\uac1c\uc790-\ucea1\uc290\ud654-\uacf5\uaca9intermediary-encapsulation-attacks",children:[]},{value:"\uae34 \ucee4\ub125\uc158 \uc720\uc9c0\ub85c \uc778\ud55c \uac1c\uc778\uc815\ubcf4 \ub204\ucd9c \uc6b0\ub824",id:"\uae34-\ucee4\ub125\uc158-\uc720\uc9c0\ub85c-\uc778\ud55c-\uac1c\uc778\uc815\ubcf4-\ub204\ucd9c-\uc6b0\ub824",children:[]}]}],o={toc:p};function c(t){var e=t.components,r=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0 \uc758 \uc0c1\uc138 \ub0b4\uc6a9\uc740 \uacf5\uc2dd document\ub97c \ubcf4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"101-http20\uc758-\ub4f1\uc7a5\ubc30\uacbd"},"10.1 HTTP/2.0\uc758 \ub4f1\uc7a5\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/1.1\uc758 \uba54\uc2dc\uc9c0 \ud3ec\ub9f7\uc740 \uad6c\ud604\uc758 \ub2e8\uc21c\uc131\uacfc \uc811\uadfc\uc131\uc5d0 \ucd08\uc810\uc774 \uc788\uc73c\ubbc0\ub85c \uc131\ub2a5\uc801\uc73c\ub85c\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"SPDY\ub294 \ud68c\uc804 \uc9c0\uc5f0\uc744 \uc904\uc774\uae30 \uc704\ud574 \ub4f1\uc7a5\ud588\uc73c\uba70 HTTP\uc5d0 \uc18d\ub3c4\ub97c \uac1c\uc120\ud588\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"102-\uac1c\uc694"},"10.2 \uac1c\uc694"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\uc758 TCP \ucee4\ub125\uc158 \uc704\uc5d0 \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\ub4e4\uc5d0 \ub2f4\uae34 \uc694\uccad\uacfc \uc751\ub2f5\uc740 \uc2a4\ud2b8\ub9bc\uc744 \ud1b5\ud574 \ubcf4\ub0b4\uc9d1\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0 \ub610\ud55c HTTP/1.1 \uc640\uc758 \ud638\ud658\uc131\uc744 \ucd5c\ub300\ud55c \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uc694\uccad\uacfc \uc751\ub2f5 \uba54\uc2dc\uc9c0\uc758 \uc758\ubbf8\ub97c \ub3d9\uc774\ub797\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"103-http11\uacfc\uc758-\ucc28\uc774\uc810"},"10.3 HTTP/1.1\uacfc\uc758 \ucc28\uc774\uc810"),(0,a.kt)("h3",{id:"\ud504\ub808\uc784"},"\ud504\ub808\uc784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/137141506-20a5eadd-3de8-4a19-adeb-2a85fce5979a.png",alt:"\ud504\ub808\uc784 \uad6c\uc870"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"R : \uc608\uc57d\ub41c 2\ube44\ud2b8 \ud544\ub4dc, \ubc18\ub4dc\uc2dc 0\uc774\uc5b4\uc57c\ud568."),(0,a.kt)("li",{parentName:"ul"},"\uae38\uc774 : \ud398\uc774\ub85c\ub4dc\uc758 \uae38\uc774"),(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958 : \ud504\ub808\uc784\uc758 \uc885\ub958"),(0,a.kt)("li",{parentName:"ul"},"\ud50c\ub798\uadf8 : \ud504\ub808\uc784\uc758 \uc885\ub958\uc5d0 \ub530\ub77c \uc758\ubbf8\uac00 \ub2e4\ub984"),(0,a.kt)("li",{parentName:"ul"},"R : \uc608\uc57d\ub41c 1\ube44\ud2b8 \ud544\ub4dc, \ubc18\ub4dc\uc2dc 0\uc774\uc5b4\uc57c\ud568."),(0,a.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub9bc \uc2dd\ubcc4\uc790 : 31\ube44\ud2b8 \uc2a4\ud2b8\ub9bc \uc2dd\ubcc4\uc790.")),(0,a.kt)("p",null,"HTTP/2.0\uc740 DATA, HEADERS, PRIORITY, RST_STREAM, SETTINGS, PUSH_PROMISE, PING, GOAWAY, WINDOW_UPDATE, CONTINUATION \uc774\ub77c\ub294 \ucd1d 10\uac00\uc9c0\uc758 \ud504\ub808\uc784\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://swiftymind.tistory.com/114"},"http2.0 protocol \ubd84\uc11d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7540"},"rfc7540"))),(0,a.kt)("h3",{id:"\uc2a4\ud2b8\ub9bc\uacfc-\uba40\ud2f0\ud50c\ub809\uc2f1"},"\uc2a4\ud2b8\ub9bc\uacfc \uba40\ud2f0\ud50c\ub809\uc2f1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc2a4\ud2b8\ub9bc"),"\uc740 HTTP/2.0 \ucee4\ub125\uc158\uc744 \ud1b5\ud574 ",(0,a.kt)("strong",{parentName:"li"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84 \uc0ac\uc774\uc5d0\uc11c \uad50\ud658\ub418\ub294 \ud504\ub808\uc784\ub4e4\uc758 \ub3c5\ub9bd\ub41c \uc591\ubc29\ud5a5 \uc2dc\ud000\uc2a4"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0\uc5d0\uc11c\ub294 \ud558\ub098\uc758 TCP \ucee4\ub125\uc158\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uc2a4\ud2b8\ub9bc\uc774 \ub3d9\uc2dc\uc5d0 \uc5f4\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc5ec\ub7ec TCP \ucee4\ub125\uc158\uc744 \uc5f4\uc5b4\uc11c TCP \ucee4\ub125\uc158\uc744 \ubb34\ud55c\uc815\uc73c\ub85c \ub9cc\ub4dc\ub294 \uac83\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub9bc\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \uac00\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. (\ubc18\ub4dc\uc2dc \ubcf4\uc7a5\uc740 \uc544\ub2d9\ub2c8\ub2e4.)"),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc2a4\ud2b8\ub9bc\uc744 \uc0c1\ub300\ubc29\uacfc \ud611\uc0c1 \uc5c6\uc774 \uc77c\ubc29\uc801\uc73c\ub85c \ub9cc\ub4e4\uae30 \ub300\ubb38\uc5d0 \uc2dc\uac04 \ub0ad\ube44\ub97c \uc904\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0 \ucee4\ub125\uc158\uc5d0\uc11c \ud55c\ubc88 \uc0ac\uc6a9\ud55c \uc2a4\ud2b8\ub9bc \uc2dd\ubcc4\uc790\ub294 \ub2e4\uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc624\ub798 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc2dd\ubcc4\uc790\uac00 \uace0\uac08\ub420 \uc218 \uc788\uc73c\ub098 \uc774 \uacbd\uc6b0\uc5d0\ub294 \ucee4\ub125\uc158\uc744 \uc0c8\ub85c \ub9fa\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec\uac1c\uc758 \uc2a4\ud2b8\ub9bc\uc744 \uc0ac\uc6a9\ud558\uba74 \uc2a4\ud2b8\ub9bc\uc774 \ube14\ub85d\ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc744 \uc218 \uc788\uc73c\ub098, WINDOW_UPDATE \ud504\ub808\uc784\uc744 \ud1b5\ud574\uc11c \ud750\ub984 \uc81c\uc5b4\ub97c \ud558\uc5ec \uc2a4\ud2b8\ub9bc\ub4e4\uc774 \uc11c\ub85c \uac04\uc12d\ud574\uc11c \ub9dd\uac00\uc9c0\ub294 \uac83\uc744 \ub9c9\uc544\uc90d\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud5e4\ub354-\uc555\ucd95"},"\ud5e4\ub354 \uc555\ucd95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP1.1\uc5d0\uc11c \ud5e4\ub354\ub294 \uc555\ucd95\uc5c6\uc774 \uc804\uc1a1\uc774 \ub418\uc5c8\uc73c\ub098 \uc774\ub294 \ud604\ub300\uc758 \uc6f9\uc5d0 \uc640\uc11c\ub294 \uc131\ub2a5\uc801 \ubb38\uc81c\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \uac1c\uc120\ud558\uae30 \uc704\ud574\uc11c HTTP/2.0\uc5d0\uc11c\ub294 HTTP \uba54\uc2dc\uc9c0\uc758 \ud5e4\ub354\ub97c \uc555\ucd95\ud558\uc5ec \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HPACK"),"\uc740 \ud5e4\ub354\ub97c \uc555\ucd95\ud558\uace0 \ud574\uc81c\ud560 \ub54c, compression context\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc989, \ud56d\uc0c1 \uc62c\ubc14\ub978 \uc555\ucd95 \ucf58\ud14d\uc2a4\ud2b8\ub97c \uc218\ud589\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud5e4\ub354\ub97c \ubc1b\uc740 \uc218\uc2e0 \uce21\uc740 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub3c4 \ubc18\ub4dc\uc2dc \uc555\ucd95 \ud574\uc81c\ub97c \uc218\ud589\ud574\uc57c\ud558\uba70, \uc548\ub41c\ub2e4\uba74 \ubc18\ub4dc\uc2dc COMPRESSION_ERROR\uc640 \ud568\uaed8 \ucee4\ub125\uc158\uc744 \ub04a\uc5b4\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc11c\ubc84-\ud478\uc2dc"},"\uc11c\ubc84 \ud478\uc2dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0\uc740 \uc11c\ubc84\uac00 \ud558\ub098\uc758 \uc694\uccad\uc5d0 \ub300\ud574 \uc751\ub2f5\uc73c\ub85c \uc5ec\ub7ec\uac1c\uc758 \ub9ac\uc18c\uc2a4\ub97c \ubcf4\ub0bc \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\ub97c \ud478\uc2dc\ud558\ub824\ub294 \uc11c\ubc84\ub294 \uba3c\uc800 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uc790\uc6d0\uc744 \ud478\uc2dc\ud560 \uac83\uc784\uc744 PUSH_PROMISE \ud504\ub808\uc784\uc744 \ubcf4\ub0b4\uc5b4 \ubbf8\ub9ac \uc54c\ub824\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c PUSH_PROMISE\ub97c \uba3c\uc800 \ubcf4\ub0b4\ub294 \uc774\uc720\ub294 \uc11c\ubc84\uac00 \ud478\uc2dc\ud558\ub824\uace0 \ud558\ub294 \uc790\uc6d0\uc744 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubcc4\ub3c4\ub85c \ub610 \uc694\uccad\ud558\ub294 \uc0c1\ud669\uc744 \ud53c\ud558\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc744 \uc8fc\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \ud478\uc2dc\ub97c \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\ub354\ub77c\ub3c4 \uc911\uac04 \ud504\ub77d\uc2dc\uac00 \uc804\ub2ec\uc744 \uc548\ud560 \uc218\ub3c4 \uc788\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ucd94\uac00 \ub9ac\uc18c\uc2a4\ub97c \uc904 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\ub294 \uc624\uc9c1 \uc548\uc804\ud558\uace0, \uce90\uc2dc\uac00 \uac00\ub2a5\ud558\uace0, \ubcf8\ubb38\uc744 \ud3ec\ud568\ud558\uc9c0 \uc54a\uc740 \uc694\uccad\uc5d0 \ub300\ud574\uc11c\ub9cc \ud478\uc2dc\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud478\uc2dc\ud560 \ub9ac\uc18c\uc2a4\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uba85\uc2dc\uc801\uc73c\ub85c \ubcf4\ub0b8 \uc694\uccad\uacfc \uc5f0\uad00\ub41c \uac83\uc774\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ubc18\ub4dc\uc2dc \uc11c\ubc84\uac00 \ud478\uc2dc\ud55c \ub9ac\uc18c\uc2a4\ub97c ",(0,a.kt)("strong",{parentName:"li"},"\ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45(Same-origin policy, RFC 6454 \ucc38\uace0)")," \uc5d0 \ub530\ub77c \uac80\uc0ac\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc11c\ubc84 \ud478\uc2dc\ub97c \ub044\uace0 \uc2f6\uc73c\uba74 SETTINGS_ENABLE_PUSH\uc744 0\uc73c\ub85c \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"HTTP 3.0")),(0,a.kt)("p",null,"\uc774 \ucc45\uc740 \uacfc\uac70\uc758 \ucc45\uc774\uae30\uc5d0 \ub54c\ubb38\uc5d0 \ud604\uc7ac\ub294 HTTP 3.0\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\uac00 \ub098\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\uc9d5\uc740 ",(0,a.kt)("strong",{parentName:"p"},"UDP"),"\ub97c \uc0ac\uc6a9\ud558\uba70 ",(0,a.kt)("strong",{parentName:"p"},"QUIC"),"\ub77c\ub294 \uc804\uc1a1 \uacc4\uce35 \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. (QUIC\uc758 \uc804\ud658\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud5e4\ub4dc \uc624\ube0c \ub77c\uc778 \ube14\ub85c\ud0b9"),"\uc774\ub77c\ub294 HTTP/2\uc758 \uc8fc\ub41c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uac83\uc774 \ubaa9\uc801\uc785\ub2c8\ub2e4.)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"HOL(Head-Of-Line Blocking)")),(0,a.kt)("p",null,"HOL(Head-Of-Line) \ube14\ub85c\ud0b9 \uc774\ub780 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uac19\uc740 \ud050\uc5d0 \uc788\ub294 \ud328\ud0b7\uc774 \uccab\ubc88\uc9f8 \ud328\ud0b7\uc5d0 \uc758\ud574 \uc9c0\uc5f0\ub420 \ub54c \ubc1c\uc0dd\ud558\ub294 \uc131\ub2a5 \uc800\ud558 \ud604\uc0c1\uc785\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"104-\uc54c\ub824\uc9c4-\ubcf4\uc548-\uc774\uc288"},"10.4 \uc54c\ub824\uc9c4 \ubcf4\uc548 \uc774\uc288"),(0,a.kt)("h3",{id:"\uc911\uac1c\uc790-\ucea1\uc290\ud654-\uacf5\uaca9intermediary-encapsulation-attacks"},"\uc911\uac1c\uc790 \ucea1\uc290\ud654 \uacf5\uaca9(Intermediary Encapsulation Attacks)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0 \uba54\uc2dc\uc9c0\ub97c \uc911\uac04 \ud504\ub77d\uc2dc\uac00 HTTP/1.1 \uba54\uc2dc\uc9c0\ub85c \ubcc0\ud658\ud560 \ub54c \uba54\uc2dc\uc9c0\uc758 \uc758\ubbf8\uac00 \ubcc0\uc9c8\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2a4\ube44\ub09f."),(0,a.kt)("li",{parentName:"ul"},"HTTP/1.1 \uc744 HTTP/2.0\uc73c\ub85c \ubcc0\uacbd\ud560 \ub54c\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\ub294 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uae34-\ucee4\ub125\uc158-\uc720\uc9c0\ub85c-\uc778\ud55c-\uac1c\uc778\uc815\ubcf4-\ub204\ucd9c-\uc6b0\ub824"},"\uae34 \ucee4\ub125\uc158 \uc720\uc9c0\ub85c \uc778\ud55c \uac1c\uc778\uc815\ubcf4 \ub204\ucd9c \uc6b0\ub824"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/2.0\uc740 \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c\uc758 \ud68c\uc804 \uc9c0\uc5f0\uc744 \uc904\uc774\uae30 \uc704\ud574\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84 \uc0ac\uc774\uc758 \ucee4\ub125\uc158\uc744 \uc624\ub798 \uc720\uc9c0\ud558\ub294 \uac83\uc744 \uc5fc\ub450\uc5d0 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uac1c\uc778 \uc815\ubcf4\uc758 \uc720\ucd9c\uc5d0 \uc545\uc6a9\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.")))}c.isMDXComponent=!0}}]);