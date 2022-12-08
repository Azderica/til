"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[5605],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),a=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(r),s=i,f=p["".concat(d,".").concat(s)]||p[s]||h[s]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var a=2;a<o;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9420:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c={sidebar_position:10},l={unversionedId:"dev/object/ch10",id:"dev/object/ch10",isDocsHomePage:!1,title:"10. \uc0c1\uc18d\uacfc \ucf54\ub4dc \uc7ac\uc0ac\uc6a9",description:"01. \uc0c1\uc18d\uacfc \uc911\ubcf5 \ucf54\ub4dc",source:"@site/docs/dev/object/ch10.md",sourceDirName:"dev/object",slug:"/dev/object/ch10",permalink:"/til/docs/dev/object/ch10",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/object/ch10.md",version:"current",lastUpdatedAt:1670500805,formattedLastUpdatedAt:"12/8/2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. \uc720\uc5f0\ud55c \uc124\uacc4",permalink:"/til/docs/dev/object/ch9"},next:{title:"1. \ub9ac\ud329\ud130\ub9c1: \uccab \ubc88\uc9f8 \uc608\uc2dc",permalink:"/til/docs/dev/refactoring/ch1"}},d=[{value:"01. \uc0c1\uc18d\uacfc \uc911\ubcf5 \ucf54\ub4dc",id:"01-\uc0c1\uc18d\uacfc-\uc911\ubcf5-\ucf54\ub4dc",children:[{value:"DRY \uc6d0\uce59",id:"dry-\uc6d0\uce59",children:[]},{value:"\uc911\ubcf5\uacfc \ubcc0\uacbd",id:"\uc911\ubcf5\uacfc-\ubcc0\uacbd",children:[]},{value:"\uc0c1\uc18d\uc744 \uc774\uc6a9\ud574\uc11c \uc911\ubcf5 \ucf54\ub4dc \uc81c\uac70\ud558\uae30",id:"\uc0c1\uc18d\uc744-\uc774\uc6a9\ud574\uc11c-\uc911\ubcf5-\ucf54\ub4dc-\uc81c\uac70\ud558\uae30",children:[]},{value:"\uac15\ud558\uac8c \uacb0\ud569\ub41c Phone\uacfc NightlyDiscountPhone",id:"\uac15\ud558\uac8c-\uacb0\ud569\ub41c-phone\uacfc-nightlydiscountphone",children:[]}]},{value:"02. \ucde8\uc57d\ud55c \uae30\ubc18 \ud074\ub798\uc2a4 \ubb38\uc81c",id:"02-\ucde8\uc57d\ud55c-\uae30\ubc18-\ud074\ub798\uc2a4-\ubb38\uc81c",children:[{value:"\ubd88\ud544\uc694\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc0c1\uc18d \ubb38\uc81c",id:"\ubd88\ud544\uc694\ud55c-\uc778\ud130\ud398\uc774\uc2a4-\uc0c1\uc18d-\ubb38\uc81c",children:[]},{value:"\uba54\uc11c\ub4dc \uc624\ubc84\ub77c\uc774\ub529\uc758 \uc624\uc791\uc6a9 \ubb38\uc81c",id:"\uba54\uc11c\ub4dc-\uc624\ubc84\ub77c\uc774\ub529\uc758-\uc624\uc791\uc6a9-\ubb38\uc81c",children:[]},{value:"\ubd80\ubaa8 \ud074\ub798\uc2a4\uc640 \uc790\uc2dd \ud074\ub798\uc2a4\uc758 \ub3d9\uc2dc \uc218\uc815 \ubb38\uc81c",id:"\ubd80\ubaa8-\ud074\ub798\uc2a4\uc640-\uc790\uc2dd-\ud074\ub798\uc2a4\uc758-\ub3d9\uc2dc-\uc218\uc815-\ubb38\uc81c",children:[]}]},{value:"03. Phone \ub2e4\uc2dc \uc0b4\ud3b4\ubcf4\uae30",id:"03-phone-\ub2e4\uc2dc-\uc0b4\ud3b4\ubcf4\uae30",children:[{value:"\ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud558\uc790",id:"\ucd94\uc0c1\ud654\uc5d0-\uc758\uc874\ud558\uc790",children:[]},{value:"\ucc28\uc774\ub97c \uba54\uc11c\ub4dc\ub85c \ucd94\ucd9c\ud558\ub77c",id:"\ucc28\uc774\ub97c-\uba54\uc11c\ub4dc\ub85c-\ucd94\ucd9c\ud558\ub77c",children:[]},{value:"\uc911\ubcf5 \ucf54\ub4dc\ub97c \ubd80\ubaa8 \ud074\ub798\uc2a4\ub85c \uc62c\ub824\ub77c",id:"\uc911\ubcf5-\ucf54\ub4dc\ub97c-\ubd80\ubaa8-\ud074\ub798\uc2a4\ub85c-\uc62c\ub824\ub77c",children:[]},{value:"\ucd94\uc0c1\ud654\uac00 \ud575\uc2ec\uc774\ub2e4",id:"\ucd94\uc0c1\ud654\uac00-\ud575\uc2ec\uc774\ub2e4",children:[]},{value:"\uc758\ub3c4\ub97c \ub4dc\ub7ec\ub0b4\ub294 \uc774\ub984 \uc120\ud0dd\ud558\uae30",id:"\uc758\ub3c4\ub97c-\ub4dc\ub7ec\ub0b4\ub294-\uc774\ub984-\uc120\ud0dd\ud558\uae30",children:[]},{value:"\uc138\uae08 \ucd94\uac00\ud558\uae30",id:"\uc138\uae08-\ucd94\uac00\ud558\uae30",children:[]}]},{value:"04. \ucc28\uc774\uc5d0 \uc758\ud55c \ud504\ub85c\uadf8\ub798\ubc0d",id:"04-\ucc28\uc774\uc5d0-\uc758\ud55c-\ud504\ub85c\uadf8\ub798\ubc0d",children:[]}],a={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"01-\uc0c1\uc18d\uacfc-\uc911\ubcf5-\ucf54\ub4dc"},"01. \uc0c1\uc18d\uacfc \uc911\ubcf5 \ucf54\ub4dc"),(0,o.kt)("h3",{id:"dry-\uc6d0\uce59"},"DRY \uc6d0\uce59"),(0,o.kt)("h3",{id:"\uc911\ubcf5\uacfc-\ubcc0\uacbd"},"\uc911\ubcf5\uacfc \ubcc0\uacbd"),(0,o.kt)("h3",{id:"\uc0c1\uc18d\uc744-\uc774\uc6a9\ud574\uc11c-\uc911\ubcf5-\ucf54\ub4dc-\uc81c\uac70\ud558\uae30"},"\uc0c1\uc18d\uc744 \uc774\uc6a9\ud574\uc11c \uc911\ubcf5 \ucf54\ub4dc \uc81c\uac70\ud558\uae30"),(0,o.kt)("h3",{id:"\uac15\ud558\uac8c-\uacb0\ud569\ub41c-phone\uacfc-nightlydiscountphone"},"\uac15\ud558\uac8c \uacb0\ud569\ub41c Phone\uacfc NightlyDiscountPhone"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"02-\ucde8\uc57d\ud55c-\uae30\ubc18-\ud074\ub798\uc2a4-\ubb38\uc81c"},"02. \ucde8\uc57d\ud55c \uae30\ubc18 \ud074\ub798\uc2a4 \ubb38\uc81c"),(0,o.kt)("h3",{id:"\ubd88\ud544\uc694\ud55c-\uc778\ud130\ud398\uc774\uc2a4-\uc0c1\uc18d-\ubb38\uc81c"},"\ubd88\ud544\uc694\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc0c1\uc18d \ubb38\uc81c"),(0,o.kt)("h3",{id:"\uba54\uc11c\ub4dc-\uc624\ubc84\ub77c\uc774\ub529\uc758-\uc624\uc791\uc6a9-\ubb38\uc81c"},"\uba54\uc11c\ub4dc \uc624\ubc84\ub77c\uc774\ub529\uc758 \uc624\uc791\uc6a9 \ubb38\uc81c"),(0,o.kt)("h3",{id:"\ubd80\ubaa8-\ud074\ub798\uc2a4\uc640-\uc790\uc2dd-\ud074\ub798\uc2a4\uc758-\ub3d9\uc2dc-\uc218\uc815-\ubb38\uc81c"},"\ubd80\ubaa8 \ud074\ub798\uc2a4\uc640 \uc790\uc2dd \ud074\ub798\uc2a4\uc758 \ub3d9\uc2dc \uc218\uc815 \ubb38\uc81c"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"03-phone-\ub2e4\uc2dc-\uc0b4\ud3b4\ubcf4\uae30"},"03. Phone \ub2e4\uc2dc \uc0b4\ud3b4\ubcf4\uae30"),(0,o.kt)("h3",{id:"\ucd94\uc0c1\ud654\uc5d0-\uc758\uc874\ud558\uc790"},"\ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud558\uc790"),(0,o.kt)("h3",{id:"\ucc28\uc774\ub97c-\uba54\uc11c\ub4dc\ub85c-\ucd94\ucd9c\ud558\ub77c"},"\ucc28\uc774\ub97c \uba54\uc11c\ub4dc\ub85c \ucd94\ucd9c\ud558\ub77c"),(0,o.kt)("h3",{id:"\uc911\ubcf5-\ucf54\ub4dc\ub97c-\ubd80\ubaa8-\ud074\ub798\uc2a4\ub85c-\uc62c\ub824\ub77c"},"\uc911\ubcf5 \ucf54\ub4dc\ub97c \ubd80\ubaa8 \ud074\ub798\uc2a4\ub85c \uc62c\ub824\ub77c"),(0,o.kt)("h3",{id:"\ucd94\uc0c1\ud654\uac00-\ud575\uc2ec\uc774\ub2e4"},"\ucd94\uc0c1\ud654\uac00 \ud575\uc2ec\uc774\ub2e4"),(0,o.kt)("h3",{id:"\uc758\ub3c4\ub97c-\ub4dc\ub7ec\ub0b4\ub294-\uc774\ub984-\uc120\ud0dd\ud558\uae30"},"\uc758\ub3c4\ub97c \ub4dc\ub7ec\ub0b4\ub294 \uc774\ub984 \uc120\ud0dd\ud558\uae30"),(0,o.kt)("h3",{id:"\uc138\uae08-\ucd94\uac00\ud558\uae30"},"\uc138\uae08 \ucd94\uac00\ud558\uae30"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"04-\ucc28\uc774\uc5d0-\uc758\ud55c-\ud504\ub85c\uadf8\ub798\ubc0d"},"04. \ucc28\uc774\uc5d0 \uc758\ud55c \ud504\ub85c\uadf8\ub798\ubc0d"))}u.isMDXComponent=!0}}]);