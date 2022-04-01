(self.webpackChunktil=self.webpackChunktil||[]).push([[7978],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6501:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i={sidebar_position:11},o={unversionedId:"dev/ddd-start/ch11",id:"dev/ddd-start/ch11",isDocsHomePage:!1,title:"11. CQRS",description:"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810",source:"@site/docs/dev/ddd-start/ch11.md",sourceDirName:"dev/ddd-start",slug:"/dev/ddd-start/ch11",permalink:"/til/docs/dev/ddd-start/ch11",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/ddd-start/ch11.md",version:"current",lastUpdatedAt:1648825185,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"10. \uc774\ubca4\ud2b8",permalink:"/til/docs/dev/ddd-start/ch10"},next:{title:"\uac1d\uccb4 \uc9c0\ud5a5",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch1"}},u=[{value:"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810",id:"\ub2e8\uc77c-\ubaa8\ub378\uc758-\ub2e8\uc810",children:[]},{value:"CQRS",id:"cqrs",children:[{value:"\uc6f9\uacfc CQRS",id:"\uc6f9\uacfc-cqrs",children:[]},{value:"CQRS \uc7a5\ub2e8\uc810",id:"cqrs-\uc7a5\ub2e8\uc810",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ub2e8\uc77c-\ubaa8\ub378\uc758-\ub2e8\uc810"},"\ub2e8\uc77c \ubaa8\ub378\uc758 \ub2e8\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc8fc\ubb38 \ub0b4\uc5ed \uc870\ud68c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub824\uba74 \uc5ec\ub7ec \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ex. Order, Product, Member"))),(0,l.kt)("li",{parentName:"ul"},"\uc870\ud68c \ud654\uba74\uc758 \ud2b9\uc131\uc0c1 \uc870\ud68c \uc18d\ub3c4\uac00 \ube60\ub97c\uc218\ub85d \uc88b\uc740\ub370 \uc5ec\ub7ec \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c\ud560 \uacbd\uc6b0 \uad6c\ud604 \ubc29\ubc95\uc744 \uace0\ubbfc\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc774\uc720\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720\ub294 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \ub54c\uc640 \uc870\ud68c\ud560\ub54c \ub2e8\uc77c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uad6c\ud604 \ubcf5\uc7a1\ub3c4\ub97c \ub0ae\ucd94\ub294 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc704\ud55c \ubaa8\ub378\uacfc \uc870\ud68c\ub97c \uc704\ud55c \ubaa8\ub378\uc744 \ubd84\ub9ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"cqrs"},"CQRS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc740 \ud06c\uac8c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uae30\ub2a5\uacfc \uc0c1\ud0dc \uc815\ubcf4\ub97c \uc870\ud68c\ud558\ub294 \uae30\ub2a5\uc73c\ub85c \ub098\ub204\uc5b4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \ubaa8\ub378 \uad00\uc810\uc5d0\uc11c \uc0c1\ud0dc \ubcc0\uacbd \uae30\ub2a5\uc740 \uc8fc\ub85c \ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"CQRS\ub294 Command Query Responsibility Segregation\uc758 \uc57d\uc790\ub85c, \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uba85\ub839(Command)\uc744 \uc704\ud55c \ubaa8\ub378\uacfc \uc0c1\ud0dc\ub97c \uc81c\uacf5\ud558\ub294 \uc870\ud68c(Query)\uc744 \uc704\ud55c \ubaa8\ub378\uc744 \ubd84\ub9ac\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/160509070-112b6fdd-2f0e-4290-b1d8-447b04b80746.png",alt:"cqrs"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CQRS\ub294 \ubcf5\uc7a1\ud55c \ub3c4\uba54\uc778\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud560 \uc218\ub85d \uba85\ub839 \uae30\ub2a5\uacfc \uc870\ud68c \uae30\ub2a5\uc774 \ub2e4\ub8e8\ub294 \ub370\uc774\ud130 \ubc94\uc704\uc5d0 \ucc28\uc774\uac00 \ubc1c\uc0dd\ud558\ub294\ub370 \uc774\ub97c \ub2e8\uc77c\ub85c \ucc98\ub9ac\ud558\uba74 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"CQRS\ub97c \uc0ac\uc6a9\ud558\uba74 \uac01 \ubaa8\ub378\uc5d0 \ub9de\ub294 \uad6c\ud604 \uae30\uc220\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uba85\ub839 \ubaa8\ub378\uacfc \uc870\ud68c \ubaa8\ub378\uc774 \uc11c\ub85c \ub2e4\ub978 \ub370\uc774\ud130 \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ub370\uc774\ud130 \ub3d9\uae30\ud654 \uc2dc\uc810\uc5d0 \ub530\ub77c \uad6c\ud604 \ubc29\uc2dd\uc774 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \uc800\uc7a5\uc18c\uc758 \ub370\uc774\ud130\ub97c \ud2b9\uc815 \uc2dc\uac04 \uc548\uc5d0\ub9cc \ub3d9\uae30\ud654\ud558\uba74 \ub41c\ub2e4\uba74 \ube44\ub3d9\uae30\ub85c \ub370\uc78d\ub7ec\ub974 \uc804\uc1a1\ud574\ub3c4 \ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc6f9\uacfc-cqrs"},"\uc6f9\uacfc CQRS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \uc6f9 \uc11c\ube44\uc2a4\ub294 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uc694\uccad\ubcf4\ub2e4 \uc0c1\ud0dc\ub97c \uc870\ud68c\ud558\ub294 \uc694\uccad\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc870\ud68c \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 \ub2e4\uc591\ud55c \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uacb0\uacfc\uc801\uc73c\ub85c CQRS\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uacfc \uac19\uc740 \ud6a8\uacfc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\uaddc\ubaa8 \ud2b8\ub798\ud53d\uc774 \ubc1c\uc0dd\ud558\ub294 \uc6f9 \uc11c\ube44\uc2a4\ub294 \uc54c\uac8c \ubaa8\ub974\uac8c CQRS\ub97c \uc801\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"cqrs-\uc7a5\ub2e8\uc810"},"CQRS \uc7a5\ub2e8\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CQRS\uc758 \uc7a5\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba85\ub839 \ubaa8\ub378\uc744 \uad6c\ud604\ud560 \ub54c \ub3c4\uba54\uc778 \uc790\uccb4\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc870\ud68c \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \ub370 \uc720\ub9ac\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"CQRS\uc758 \ub2e8\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uad6c\ud604\ud574\uc57c \ud560 \ucf54\ub4dc\uac00 \ub354 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub354 \ub9ce\uc740 \uad6c\ud604 \uae30\uc220\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc758 \uc7a5\ub2e8\uc810\uc744 \uace0\ub824\ud558\uc5ec CQRS \ud328\ud134\uc744 \ub3c4\uc785\ud560\uc9c0 \uc5ec\ubd80\ub97c \uacb0\uc815\ud574\uc57c\ud569\ub2c8\ub2e4. (\ubcf5\uc7a1\uc131\uc5d0 \ub530\ub77c)")))}p.isMDXComponent=!0}}]);