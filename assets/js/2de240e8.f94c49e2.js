(self.webpackChunktil=self.webpackChunktil||[]).push([[358],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),s=i,m=f["".concat(l,".").concat(s)]||f[s]||d[s]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},702:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={sidebar_position:5},c={unversionedId:"dev/refactoring/ch5",id:"dev/refactoring/ch5",isDocsHomePage:!1,title:"5. \ub9ac\ud329\ud1a0\ub9c1 \uce74\ud0c8\ub85c\uadf8 \ubcf4\ub294 \ubc95",description:"\ub9ac\ud329\ud130\ub9c1 \uc124\uba85 \ud615\uc2dd",source:"@site/docs/dev/refactoring/ch5.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch5",permalink:"/til/docs/dev/refactoring/ch5",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch5.md",version:"current",lastUpdatedAt:1627799049,formattedLastUpdatedAt:"8/1/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. \ud14c\uc2a4\ud2b8 \uad6c\ucd95\ud558\uae30",permalink:"/til/docs/dev/refactoring/ch4"},next:{title:"6. \uae30\ubcf8\uc801\uc778 \ub9ac\ud329\ud130\ub9c1",permalink:"/til/docs/dev/refactoring/ch6"}},l=[{value:"\ub9ac\ud329\ud130\ub9c1 \uc124\uba85 \ud615\uc2dd",id:"\ub9ac\ud329\ud130\ub9c1-\uc124\uba85-\ud615\uc2dd",children:[{value:"\uc774\ub984",id:"\uc774\ub984",children:[]},{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\ubc30\uacbd",id:"\ubc30\uacbd",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ub9ac\ud329\ud130\ub9c1-\uc124\uba85-\ud615\uc2dd"},"\ub9ac\ud329\ud130\ub9c1 \uc124\uba85 \ud615\uc2dd"),(0,o.kt)("p",null,"\uc774\ud6c4\uc758 \ucc55\ud130\ub294 \ub2e4\uc74c\uc758 \ud56d\ubaa9\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\uc774\ub984"},"\uc774\ub984"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \uc6a9\uc5b4\ub97c \uad6c\ucd95\ud560 \ub54c \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ucc28\uc9c0\ud569\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\uc758 \ud575\uc2ec"),(0,o.kt)("li",{parentName:"ul"},"\uac1c\ub150\ub3c4 + \ucf54\ub4dc \uc608\uc2dc")),(0,o.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ub9ac\ud329\ud130\ub9c1 \uae30\ubc95\uc774 \uc65c \ud544\uc694\ud55c\uc9c0"),(0,o.kt)("li",{parentName:"ul"},"\uadf8 \uae30\ubc95\uc744 \uc801\uc6a9\ud558\uba74 \uc548\ub418\ub294 \uc0c1\ud669")),(0,o.kt)("h3",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1\ud558\ub294 \uacfc\uc815\uc744 \ub2e8\uacc4\ubcc4\ub85c \uc81c\uc2dc")),(0,o.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ub9ac\ud329\ud130\ub9c1 \uae30\ubc95\uc744 \uc2e4\uc81c\ub85c \uc801\uc6a9\ud558\ub294 \uac04\ub2e8\ud55c \uc608\uc640 \uadf8 \ud6a8\uacfc")))}p.isMDXComponent=!0}}]);