(self.webpackChunktil=self.webpackChunktil||[]).push([[1112],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7147:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i={sidebar_position:7},u={unversionedId:"dev/refactoring/ch7",id:"dev/refactoring/ch7",isDocsHomePage:!1,title:"7. \ucea1\uc290\ud654",description:"\ubaa8\ub4c8\uc744 \ubd84\ub9ac\ud558\ub294 \uc911\uc694\ud55c \uae30\uc900 \uc911 \ud558\ub098\ub294 \ubaa8\ub4c8\uc744 \uc5bc\ub9c8\ub098 \uc798 \uc228\uae30\ub294 \uc9c0\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/refactoring/ch7.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch7",permalink:"/til/docs/dev/refactoring/ch7",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch7.md",version:"current",lastUpdatedAt:1644934059,formattedLastUpdatedAt:"2/15/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. \uae30\ubcf8\uc801\uc778 \ub9ac\ud329\ud130\ub9c1",permalink:"/til/docs/dev/refactoring/ch6"},next:{title:"8. \uae30\ub2a5 \uc774\ub3d9",permalink:"/til/docs/dev/refactoring/ch8"}},p=[{value:"7.1 \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30",id:"71-\ub808\ucf54\ub4dc-\ucea1\uc290\ud654\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}]},{value:"7.2 \uceec\ub809\uc158 \ucea1\uc290\ud654\ud558\uae30",id:"72-\uceec\ub809\uc158-\ucea1\uc290\ud654\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-1",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-1",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",children:[]}]},{value:"7.3 \uae30\ubcf8\ud615\uc744 \uac1d\uccb4\ub85c \ubc14\uafb8\uae30",id:"73-\uae30\ubcf8\ud615\uc744-\uac1d\uccb4\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-2",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-2",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",children:[]}]},{value:"7.4 \uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30",id:"74-\uc784\uc2dc-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-3",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-3",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",children:[]}]},{value:"7.5 \ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30",id:"75-\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-4",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-4",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-4",children:[]}]},{value:"7.6 \ud074\ub798\uc2a4 \uc778\ub77c\uc778\ud558\uae30",id:"76-\ud074\ub798\uc2a4-\uc778\ub77c\uc778\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-5",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-5",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-5",children:[]}]},{value:"7.7 \uc704\uc784 \uc228\uae30\uae30",id:"77-\uc704\uc784-\uc228\uae30\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-6",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-6",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-6",children:[]}]},{value:"7.8 \uc911\uac1c\uc790 \uc81c\uac70\ud558\uae30",id:"78-\uc911\uac1c\uc790-\uc81c\uac70\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-7",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-7",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-7",children:[]}]},{value:"7.9 \uc54c\uace0\ub9ac\uc998 \uad50\uccb4\ud558\uae30",id:"79-\uc54c\uace0\ub9ac\uc998-\uad50\uccb4\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-8",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-8",children:[]}]}],o={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ubaa8\ub4c8\uc744 \ubd84\ub9ac\ud558\ub294 \uc911\uc694\ud55c \uae30\uc900 \uc911 \ud558\ub098\ub294 \ubaa8\ub4c8\uc744 \uc5bc\ub9c8\ub098 \uc798 \uc228\uae30\ub294 \uc9c0\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc74c\uc758 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30, \uceec\ub809\uc158 \ucea1\uc290\ud654\ud558\uae30, \uae30\ubcf8\ud615\uc744 \uac1d\uccb4\ub85c \ubc14\uafb8\uae30, \uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30, \ud074\ub9ac\uc2a4 \ucd94\ucd9c\ud558\uae30, \ud074\ub798\uc2a4 \uc778\ub77c\uc778\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc784 \uc228\uae30\uae30, \uc911\uac1c\uc790 \uc81c\uac70\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30, \uc54c\uace0\ub9ac\uc998 \uad50\uccb4\ud558\uae30")),(0,l.kt)("h2",{id:"71-\ub808\ucf54\ub4dc-\ucea1\uc290\ud654\ud558\uae30"},"7.1 \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30"),(0,l.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ub808\ucf54\ub4dc\ubcf4\ub2e4\ub294 \uac1d\uccb4\ub97c \uc120\ud638\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ub294 \ub808\ucf54\ub4dc\ub294 \uacb0\uad6d \ud5f7\uac08\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc \uad6c\uc870\ub294 \ub450 \uac00\uc9c0\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\ub294\ub370 \ud558\ub098\ub294 \ud544\ub4dc \uc774\ub984\uc744 \ub178\ucd9c\ud558\ub294 \ud615\ud0dc\uc640 \ub2e4\ub978 \ud558\ub098\ub294 \ub0b4\uac00 \uc6d0\ud558\ub294 \uc774\ub984\uc744 \uc4f8 \uc218 \uc788\ub294 \ud615\ud0dc\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud6c4\uc790\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud574\uc2dc, \ub9f5, \ud574\uc2dc\ub9f5, \ub515\uc154\ub108\ub9ac, \uc5f0\uad00 \ubc30\uc5f4 \ub4f1\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc \uc77c\uc885\uc758 \ub2e8\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ud6c4\uc5d0 JSON\uc774\ub098, XML \uac19\uc740 \ud3ec\ub9f7\uc73c\ub85c \uc9c1\ub82c\ud654\ud560 \ub54c\ub098 \uc218\uc815\ud560 \ub54c \ud3b8\ud574\uc9d1\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\ub97c \ub2f4\uc740 \ubcc0\uc218\ub97c \ucea1\uc290\ud654\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\ub97c \ucea1\uc290\ud654\ud558\ub294 \ud568\uc218\uc758 \uc774\ub984\uc740 \uac80\uc0c9\ud558\uae30 \uc27d\uac8c \uc9c0\uc5b4\uc90d\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\ub97c \uac10\uc2fc \ub2e8\uc21c\ud55c \ud074\ub798\uc2a4\ub85c \ud574\ub2f9 \ubcc0\uc218\uc758 \ub0b4\uc6a9\uc744 \uad50\uccb4\ud569\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\uc5d0 \uc6d0\ubcf8 \ub808\ucf54\ub97c \ubc18\ud658\ud558\ub294 \uc811\uadfc\uc790\ub3c4 \uc815\uc758\ud558\uace0, \ubcc0\uc218\ub97c \ucea1\uc290\ud654\ud558\ub294 \ud568\uc218\ub4e4\uc774 \uc774 \uc811\uadfc\uc790\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc218\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6d0\ubcf8 \ub808\ucf54\ub4dc \ub300\uc2e0 \uc0c8\ub85c \uc815\uc758\ud55c \ud074\ub798\uc2a4 \ud0c0\uc785\uc758 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub4e4\uc744 \uc0c8\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\ub97c \ubc18\ud658\ud558\ub294 \uc608\uc804 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub97c \uc704\uc5d0\uc11c \ub9cc\ub4e0 \uc0c8 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ubc14\uafc9\ub2c8\ub2e4. \ud544\ub4dc\uc5d0 \uc811\uadfc\ud560 \ub54c\ub294 \uac1d\uccb4\uc758 \uc811\uadfc\uc790\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc801\uc808\ud55c \uc811\uadfc\uc790\uac00 \uc5c6\ub2e4\uba74 \ucd94\uac00\ud558\uace0, \ud55c \ubd80\ubd84\uc744 \ubc14\uafc0 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc5d0\uc11c \uc6d0\ubcf8 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud558\ub294 \uc811\uadfc\uc790\uc640 \uc6d0\ubcf8 \ub808\ucf54\ub4dc\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub4e4\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\uc758 \ud544\ub4dc\ub3c4 \ub370\uc774\ud130 \uad6c\uc870\uc778 \uc911\ucca9 \uad6c\uc870\ub77c\uba74 \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30\uc640 \uceec\ub809\uc158 \ucea1\uc290\ud654\ud558\uae30\ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \uc801\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,l.kt)("h4",{id:"\uac04\ub2e8\ud55c-\ub808\ucf54\ub4dc-\ucea1\uc290\ud654\ud558\uae30"},"\uac04\ub2e8\ud55c \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30"),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ub9ac\ud329\ud1a0\ub9c1\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-0.js"},"\ub9ac\ud329\ud1a0\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-1.js"},"\uc911\uac04 \ub9ac\ud329\ud1a0\ub9c1 \ucf54\ub4dc, 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-2.js"},"\uc911\uac04 \ub9ac\ud329\ud1a0\ub9c1 \ucf54\ub4dc, 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-3.js"},"\ucd5c\uc885 \ub9ac\ud329\ud1a0\ub9c1 \ucf54\ub4dc"))),(0,l.kt)("h4",{id:"\uc911\ucca9\ub41c-\ub808\ucf54\ub4dc-\ucea1\uc290\ud654\ud558\uae30"},"\uc911\ucca9\ub41c \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ud558\uae30"),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ub9ac\ud329\ud1a0\ub9c1\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"1920":{\n  name: "\ub9c8\ud2f4 \ud30c\uc6b8\ub7ec",\n  id: "1920",\n  usages: {\n    "2016": {\n      "1": 50,\n      "2": 55,\n      // \uc0dd\ub7b5\n    },\n    "2015": {\n      "1": 70,\n      "2": 63,\n      // \uc0dd\ub7b5\n    }\n  }\n},\n"38673": {\n  name: "\ub2d0 \ud3ec\ub4dc",\n  id: "38763"\n  // \uc0dd\ub7b5\n}\n')),(0,l.kt)("p",null,"\uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-4.js"},"\ub9ac\ud329\ud1a0\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-5.js"},"\ucd5c\uc885 \ub9ac\ud329\ud1a0\ub9c1 \ucf54\ub4dc"))),(0,l.kt)("p",null,"\uc911\ucca9\ub41c \ub808\ucf54\ub4dc\ub97c \ucc98\ub9ac\ud560 \ub54c\ub294 \ub450\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uba85\uc2dc\uc801\uc778 API\ub85c \uc81c\uacf5\ud558\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc7a5\uc810 : \ud074\ub798\uc2a4\ub97c \ud1b5\ud574\uc11c \ub370\uc774\ud130 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \ubaa8\ub450 \ud30c\uc545 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810 : \uc77d\ub294 \ud328\ud134\uc774 \ub2e4\uc591\ud558\uba74 \uc791\uc131\ud560 \ucf54\ub4dc\uac00 \ub298\uc5b4\ub0a9\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \ub370\uc774\ud130\ub97c \uc81c\uacf5, \ub808\ucf54\ub4dc \ucea1\uc290\ud654\ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \ud558\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc7a5\uc810 : \ud655\uc2e4\ud55c \uc81c\uc5b4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810 : \ubaa8\ub4e0 \uc4f0\uae30\ub97c \ud568\uc218\uc548\uc5d0\uc11c \ucc98\ub9ac\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. (\uc774\ub97c clone\uc73c\ub85c \ucc98\ub9ac), \ubcf5\uc81c \ube44\uc6a9\uc774 \ucee4\uc9d1\ub2c8\ub2e4.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"72-\uceec\ub809\uc158-\ucea1\uc290\ud654\ud558\uae30"},"7.2 \uceec\ub809\uc158 \ucea1\uc290\ud654\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Person {\n  get courses() {\n    return this._courses\n  }\n  set courses(aList) {\n    this._courses = aList\n  }\n}\n\n// after\nclass Person {\n  get courses() {\n    return this._courses.slice()\n  }\n  addCourse(aCourse) {}\n  removeCourse(aCourse) {}\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-1"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac00\ubcc0\ub370\uc774\ud130\ub97c \ucea1\uc290\ud654\ud558\ub294 \uac83\uc740 \ub370\uc774\ud130 \uad6c\uc870\uac00 \uc5b8\uc81c \uc5b4\ub5bb\uac8c \uc218\uc815\ub418\ub294\uc9c0 \ud30c\uc545\ud558\uae30 \uc26c\uc6cc\uc11c, \ud544\uc694\ud55c \uc2dc\uc810\uc5d0 \ub370\uc774\ud130 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\uae30 \uc27d\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc73c\ub85c \ub0b4\ubd80 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uac8c\ub418\uba74, \uc2e4\uc218\ub85c \uceec\ub809\uc158\uc774 \ubc14\uafc0 \uc218 \uc788\ub294\ub370 \uc774\ub97c \ucc28\ub2e8\ud558\ub294 \ubc29\ubc95\uc740 2\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc808\ub300\ub85c \uceec\ub809\uc158 \uac12\uc744 \ubc18\ud658\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc744 \uc77d\uae30\uc804\uc6a9\uc73c\ub85c \uc81c\uacf5"),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158 \ucf00\ud130\ub97c \uc81c\uacf5\ud558\ub098 \ubcf5\uc81c\ubcf8\uc744 \ubc18\ud658\ud574\uc11c \uc6d0\ubcf8\uc774 \uc218\uc815\uc774 \ub418\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc911\uc694\ud55c \uc810\uc740 ",(0,l.kt)("strong",{parentName:"li"},"\ucf54\ub4dc \ubca0\uc774\uc2a4\uc5d0\uc11c \uc77c\uad00\uc131\uc744 \uc8fc\ub294 \uac83"),"\uc785\ub2c8\ub2e4. \uc704\uc758 \ubc29\ubc95 \uc911 \ud558\ub098\ub9cc \uc368\uc57c\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-1"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc9c1 \uceec\ub809\uc158\uc744 \ucea1\uc290\ud654\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \ubcc0\uc218 \ucea1\uc290\ud654\ud558\uae30\ubd80\ud130 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc5d0 \uc6d0\uc18c\ub97c \ucd94\uac00/\uc81c\uac70\ud558\ub294 \ud568\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158 \uc790\uccb4\ub97c \ud1b5\uc9f8\ub85c \ubc14\uafb8\ub294 \uc138\ud130\ub294 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc138\ud130\ub97c \uc81c\uac70\ud560 \uc218 \uc5c6\ub2e4\uba74 \uc778\uc218\ub85c \ubc1b\uc740 \uceec\ub809\uc158\uc744 \ubcf5\uc81c\ud574 \uc800\uc7a5\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc801 \uac80\uc0ac\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc744 \ucc38\uc870\ud558\ub294 \ubd80\ubd84\uc744 \ubaa8\ub450 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158 \ucf00\ud130\ub97c \uc218\uc815\ud574\uc11c \uc6d0\ubcf8 \ub0b4\uc6a9\uc744 \uc218\uc815\ud560 \uc218 \uc5c6\ub294 \uc77d\uae30\uc804\uc6a9 \ud504\ub77d\uc2dc\ub098 \ubcf5\uc81c\ubcf8\uc744 \ubc18\ud658\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex2/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex2/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"73-\uae30\ubcf8\ud615\uc744-\uac1d\uccb4\ub85c-\ubc14\uafb8\uae30"},"7.3 \uae30\ubcf8\ud615\uc744 \uac1d\uccb4\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\norders.filter((o) => 'high' === o.priority || 'rush' === o.priority)\n\n// after\norders.filter((o) => o.priority.higherThan(new Priority('normal')))\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-2"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud55c \ucd9c\ub825 \uc774\uc0c1\uc758 \uae30\ub2a5\uc774 \ud544\uc694\uc2dc, \ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\ub294 \uc804\uc6a9 \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-2"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc9c1 \ubcc0\uc218\ub97c \ucea1\uc290\ud654\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \ucea1\uc290\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud55c \uac12 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc0dd\uc131\uc790\ub294 \uae30\uc874 \uac12\uc744 \uc778\uc218\ub85c \ubc1b\uc544\uc11c \uc800\uc7a5\ud558\uace0, \uc774 \uac12\uc744 \ubc18\ud658\ud558\ub294 \uac8c\ud130\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc801 \uac80\uc0ac\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac12 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc11c \ud0ac\ub4dc\uc5d0 \uc800\uc7a5\ud558\ub3c4\ub85d \uc138\ud130\ub97c \uc218\uc815\ud569\ub2c8\ub2e4. \uc774\ubbf8 \uc788\ub2e4\uba74 \ud544\ub4dc\uc758 \ud0c0\uc785\uc744 \uc801\uc808\ud788 \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0c8\ub85c \ub9cc\ub4e0 \ud074\ub798\uc2a4\uc758 \uac8c\ud130\ub97c \ud638\ucd9c\ud55c \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \uac8c\ud130\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc774\ub984\uc744 \ubc14\uafb8\uba74 \uc6d0\ubcf8 \uc811\uadfc\uc790\uc758 \ub3d9\uc791\uc744 \ub354 \uc798 \ub4dc\ub7ec\ub0bc \uc218 \uc788\ub294\uc9c0 \uac80\ud1a0\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex3/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex3/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"74-\uc784\uc2dc-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30"},"7.4 \uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nconst basePrice = this._quantity * this._itemPrice\nif (basePrice > 1000) return basePrice * 0.95\nelse return basePrice * 0.98\n\n// after\nclass Order {\n  get basePrice() {\n    this._quantity * this._itemPrice\n  }\n  // ...\n}\nif (basePrice > 1000) return this.basePrice * 0.95\nelse return this.basePrice * 0.98\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-3"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucc38\uc870\uc758 \ubaa9\uc801\uc73c\ub85c \uc784\uc2dc \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub54c\ub85c\ub294 \ub354 \ub098\uc544\uac00 \ud568\uc218\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \uc88b\uc744 \ub54c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574\uc11c \uacbd\uacc4\uac00 \ub354 \ubd84\uba85\ud574\uc9c0\uace0, \ubd80\uc801\uc808\ud55c \uc758\uc874 \uad00\uacc4\ub098 \ubd80\uc218\ud6a8\uacfc\ub97c \uc81c\uac70\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ud074\ub798\uc2a4\uc548\uc5d0 \uc801\uc6a9\ud560 \ub54c \ud6a8\uacfc\uac00 \ud07d\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-3"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uc218\uac00 \uc0ac\uc6a9\ub418\uae30 \uc804\uc5d0 \uac12\uc774 \ud655\uc2e4\ud788 \uacb0\uc815\ub418\ub294\uc9c0, \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub9c8\ub2e4 \uacc4\uc0b0 \ub85c\uc9c1\uc774 \ub9e4\ubc88 \ub2e4\ub978 \uacb0\uacfc\ub97c \ub0b4\uc9c0\ub294 \uc54a\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77d\uae30\uc804\uc6a9\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 \ubcc0\uc218\ub97c \uc77d\uae30\uc804\uc6a9\uc73c\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \ub300\uc785\ubb38\uc744 \ud568\uc218\ub85c \ucd94\ucd9c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \uc778\ub77c\uc778\ud558\uae30\ub85c \uc784\uc2dc \ubcc0\uc218\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\uac04\ub2e8\ud55c \uc8fc\ubb38"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex4/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex4/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"75-\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30"},"7.5 \ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Person {\n  get officeAreaCode() {\n    return this._officeAreaCode\n  }\n  get officeNumber() {\n    return this._officeNumber\n  }\n}\n\n// after\nclass Person {\n  get officeAreaCode() {\n    return this._telephoneNumber.areaCode\n  }\n  get officeNumber() {\n    return this._telephoneNumber.number\n  }\n}\nclass TelephoneNumber {\n  get areaCode() {\n    return this._areaCode\n  }\n  get number() {\n    return this._number\n  }\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-4"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub294 \ubc18\ub4dc\uc2dc \uba85\ud655\ud558\uac8c \ucd94\uc0c1\ud654\ud558\uace0 \uc18c\uc218\uc758 \uc8fc\uc5b4\uc9c4 \uc5ed\ud65c\uc744 \ucc98\ub9ac\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc640 \ub370\uc774\ud130\uac00 \ub108\ubb34 \ub9ce\uc740 \ud074\ub798\uc2a4\ub294 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6b0\ubbc0\ub85c \uc801\uc808\ud788 \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-4"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc758 \uc5ed\ud560\uc744 \ubd84\ub9ac\ud560 \ubc29\ubc95\uc744 \uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubd84\ub9ac\ub420 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud560 \ud074\ub798\uc2a4\ub97c \uc0c8\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6d0\ub798 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uc5ec \ud544\ub4dc\uc5d0 \uc800\uc7a5\ud574\ub461\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubd84\ub9ac\ub420 \uc5ed\ud560\uc5d0 \ud544\uc694\ud55c \ud544\ub4dc\ub4e4\uc740 \uc0c8 \ud074\ub798\uc2a4\ub85c \uc62e\uae41\ub2c8\ub2e4. \ud558\ub098\uc529 \uc62e\uae38 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub4e4\ub3c4 \uc0c8 \ud074\ub798\uc2a4\ub85c \uc62e\uae41\ub2c8\ub2e4. \uc774\ub54c \uc800\uc218\uc900 \uba54\uc11c\ub4dc, \uc989 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uae30\ubcf4\ub2e4\ub294 \ud638\ucd9c\uc744 \ub2f9\ud558\ub294 \uc77c\uc774 \ub9ce\uc740 \uba54\uc11c\ub4dc\ubd80\ud130 \uc62e\uae41\ub2c8\ub2e4. \ud558\ub098\uc529 \uc62e\uae38 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc591\ucabd \ud074\ub798\uc2a4\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0b4\ud3b4\ubcf4\uba74\uc11c \ubd88\ud544\uc694\ud55c \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uace0, \uc774\ub984\ub3c4 \uc0c8\ub85c\uc6b4 \ud658\uacbd\uc5d0 \ub9de\uac8c \ubc14\uafc9\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0c8 \ud074\ub798\uc2a4\ub97c \uc678\ubd80\ub85c \ub178\ucd9c\ud560\uc9c0 \uc815\ud569\ub2c8\ub2e4. \ub178\ucd9c\ud558\ub824\uac70\ub4e0 \uc0c8 \ud074\ub798\uc2a4\uc5d0 \ucc38\uc870\ub97c \uac12\uc73c\ub85c \ubc14\uafb8\uae30\ub97c \uc801\uc6a9\ud560 \uc9c0 \uace0\ubbfc\ud574\ubd05\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-4"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex5/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex5/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"76-\ud074\ub798\uc2a4-\uc778\ub77c\uc778\ud558\uae30"},"7.6 \ud074\ub798\uc2a4 \uc778\ub77c\uc778\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Person {\n  get officeAreaCode() {\n    return this._telephoneNumber.areaCode\n  }\n  get officeNumber() {\n    return this._telephoneNumber.number\n  }\n}\nclass TelephoneNumber {\n  get areaCode() {\n    return this._areaCode\n  }\n  get number() {\n    return this._number\n  }\n}\n\n// after\nclass Person {\n  get officeAreaCode() {\n    return this._officeAreaCode\n  }\n  get officeNumber() {\n    return this._officeNumber\n  }\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-5"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4 \ucd94\ucd9c\uc744 \uac70\uafb8\ub85c \ub3cc\ub9ac\ub294 \ub9ac\ud329\ud130\ub9c1\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc81c \uc5ed\ud560\uc744 \ubabb\ud558\ub294 \ud074\ub798\uc2a4\ub97c \uc778\ub77c\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub450 \ud074\ub798\uc2a4\uc758 \uae30\ub2a5\uc744 \uc9c0\uae08\uacfc \ub2e4\ub974\uac8c \ubc30\ubd84\ud558\uace0 \uc2f6\uc744 \ub54c\ub3c4, \ud074\ub798\uc2a4\ub97c \uc778\ub77c\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-5"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ud074\ub798\uc2a4\uc758 \uac01 public \uba54\uc11c\ub4dc\uc5d0 \ub300\uc751\ud558\ub294 \uba54\uc11c\ub4dc\ub4e4\uc740 \ud0c0\uae43 \ud074\ub798\uc2a4\uc5d0 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub4e4\uc740 \ub2e8\uc21c\ud788 \uc791\uc5c5\uc744 \uc18c\uc2a4 \ud074\ub798\uc2a4\ub85c \uc704\uc784\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ud074\ub798\uc2a4\uc758 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub97c \ubaa8\ub450 \ud0c0\uae43 \ud074\ub798\uc2a4\uc758 \uc704\uc784 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ubc14\uafc9\ub2c8\ub2e4. \ud558\ub098\uc529 \ubc14\uafc0 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ud074\ub798\uc2a4\uc758 \uba54\uc11c\ub4dc\uc640 \ud544\ub4dc\ub97c \ubaa8\ub450 \ud0c0\uae43 \ud074\ub798\uc2a4\ub85c \uc62e\uae41\ub2c8\ub2e4. \ud558\ub098\uc529 \uc62e\uae38 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ud074\ub798\uc2a4\ub97c \uc0ad\uc81c\ud558\uace0 \uc870\uc758\ub97c \ud45c\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-5"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex6/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex6/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"77-\uc704\uc784-\uc228\uae30\uae30"},"7.7 \uc704\uc784 \uc228\uae30\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nmanager = aPerson.department.manager\n\n// after\nclass Person {\n  get manager() {\n    return this.department.manager\n  }\n}\nmanager = aPerson.manager\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-6"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8\ud654 \uc124\uacc4\uc5d0\uc11c\uc758 \ud575\uc2ec\uc740 \ucea1\uc290\ud654\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc784 \uac1d\uccb4\uc758 \uc874\uc7ac\ub97c \uc228\uae30\uba74, \ud5a5\ud6c4 \uc704\uae40 \uac1d\uccb4\uac00 \uc218\uc815\ub418\ub354\ub77c\ub3c4 \uc11c\ubc84 \ucf54\ub4dc\ub9cc \uace0\uce58\uba74 \ub418\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc601\ud5a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-6"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704\uc784 \uac1d\uccb4\uc758 \uac01 \uba54\uc11c\ub4dc\uc5d0 \ud574\ub2f9\ud558\ub294 \uc704\uc784 \uba54\uc11c\ub4dc\ub97c \uc11c\ubc84\uc5d0 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc704\uc784 \uac1d\uccb4 \ub300\uc2e0 \uc11c\ubc84\ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \uc218\uc815\ud569\ub2c8\ub2e4. \ud558\ub098\uc529 \ubc14\uafc0 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub450 \uc218\uc815\ud588\ub2e4\uba74, \uc11c\ubc84\ub85c\ubd80\ud130 \uc704\uc784 \uac1d\uccb4\ub97c \uc5bb\ub294 \uc811\uadfc\uc790\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-6"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\uc0ac\ub78c\uacfc \uc0ac\ub78c\uc774 \uc18d\ud55c \ubd80\uc11c\uc5d0 \ub300\ud55c \ud074\ub798\uc2a4, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub294 \uc5b4\ub5a4 \uc0ac\ub78c\uc774 \uc18d\ud55c \ubd80\uc11c\uc758 \uad00\ub9ac\uc790\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex7/refactoring-step-0.js"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex7/refactoring-step-1.js"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"78-\uc911\uac1c\uc790-\uc81c\uac70\ud558\uae30"},"7.8 \uc911\uac1c\uc790 \uc81c\uac70\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Person {\n  get manager() {\n    return this.department.manager\n  }\n}\nmanager = aPerson.manager\n\n// after\nmanager = aPerson.department.manager\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-7"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc55e\uc11c \uc774\uc57c\uae30\ud55c\uac83 \ucc98\ub7fc \uc704\uc784 \uac1d\uccb4\ub294 \ucea1\uc290\ud654\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\ub9c8\ub2e4 \uc704\uc784\uc744 \ud558\uba74 \uc704\uc784 \uba54\uc11c\ub4dc\uac00 \ub108\ubb34 \ucee4\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc11c\ubc84 \ud074\ub798\uc2a4\ub294 \uc911\uac1c\uc790 \uc5ed\ud560\uc744 \uc218\ud589\ud558\uace0, \ucc28\ub77c\ub77c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc704\uc784 \uac1d\uccb4\ub97c \uc9c1\uc811 \ud638\ucd9c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-7"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704\uc784 \uac1d\uccb4\ub97c \uc5bb\ub294 \uac8c\ud130\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc784 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubaa8\ub450 \uc774 \uac8c\ud130\ub97c \uac70\uce58\ub3c4\ub85d \uc218\uc815\ud569\ub2c8\ub2e4. \ud558\ub098\uc529 \ubc14\uafc0 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub450 \uc218\uc815\ud588\ub2e4\uba74 \uc704\uc784 \uba54\uc11c\ub4dc\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4/")),(0,l.kt)("h3",{id:"\uc608\uc2dc-7"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"7\ubc88 \ucf54\ub4dc\uc640 \ubc18\ub300\ub77c \uc0dd\ub7b5\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"79-\uc54c\uace0\ub9ac\uc998-\uad50\uccb4\ud558\uae30"},"7.9 \uc54c\uace0\ub9ac\uc998 \uad50\uccb4\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nfunction foundPerson(people) {\n  for (let i = 0; i < people.length; i++) {\n    if (people[i] === 'Don') {\n      return 'Don'\n    }\n    if (people[i] === 'John') {\n      return 'John'\n    }\n    if (people[i] === 'Kent') {\n      return 'Kent'\n    }\n  }\n  return ''\n}\n\n// after\nfunction foundPerson(people) {\n  const candidates = ['Don', 'John', 'Kent']\n  return people.find((p) => candidates.includes(p)) || ''\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-8"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\uc874\uc758 \uc54c\uace0\ub9ac\uc998\ubcf4\ub2e4 \ub354 \uc26c\uc6b4 \ubc29\uc2dd\uc758 \uc54c\uace0\ub9ac\uc998\uc774 \uc788\ub2e4\uba74 \uc774\ub97c \uace0\uce69\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-8"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uad50\uccb4\ud560 \ucf54\ub4dc\ub97c \ud568\uc218 \ud558\ub098\uc5d0 \ubaa8\uc74d\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774 \ud568\uc218\ub9cc\uc744 \uc774\uc6a9\ud574 \ub3d9\uc791\uc744 \uac80\uc99d\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \ub9c8\ub828\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\uccb4\ud560 \uc54c\uace0\ub9ac\uc998\uc744 \uc900\ube44\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc801 \uac80\uc0ac\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc54c\uace0\ub9ac\uc998\uacfc \uc0c8 \uc54c\uace0\ub9ac\uc998\uc758 \uacb0\uacfc\ub97c \ube44\uad50\ud558\ub2a9 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub450 \uacb0\uacfc\uac00 \uac19\ub2e4\uba74 \ub9ac\ud329\ud130\ub9c1\uc774 \ub05d\ub0a9\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 \uae30\uc874 \uc54c\uace0\ub9ac\uc998\uc744 \ucc38\uace0\ud574\uc11c \uc0c8 \uc54c\uace0\ub9ac\uc998\uc744 \ud14c\uc2a4\ud2b8\ud558\uace0 \ub514\ubc84\uae45\ud569\ub2c8\ub2e4.")))))}c.isMDXComponent=!0}}]);