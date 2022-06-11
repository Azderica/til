"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8895],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=o(n),d=i,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||r;return n?l.createElement(m,a(a({ref:t},c),{},{components:n})):l.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var o=2;o<r;o++)a[o]=n[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8485:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var l=n(7462),i=n(3366),r=(n(7294),n(3905)),a={},u={unversionedId:"dev/object-orientation-and-design-patterns/ch2",id:"dev/object-orientation-and-design-patterns/ch2",isDocsHomePage:!1,title:"\uc124\uacc4 \uc6d0\uce59/ DI\uc640 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130",description:"\uc124\uacc4 \uc6d0\uce59 : SOLID",source:"@site/docs/dev/object-orientation-and-design-patterns/ch2.md",sourceDirName:"dev/object-orientation-and-design-patterns",slug:"/dev/object-orientation-and-design-patterns/ch2",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch2",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/object-orientation-and-design-patterns/ch2.md",version:"current",lastUpdatedAt:1654920048,formattedLastUpdatedAt:"6/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uac1d\uccb4 \uc9c0\ud5a5",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch1"},next:{title:"\uc8fc\uc694 \ub514\uc790\uc778 \ud328\ud134",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch3"}},p=[{value:"\uc124\uacc4 \uc6d0\uce59 : SOLID",id:"\uc124\uacc4-\uc6d0\uce59--solid",children:[{value:"SOLID\ub780?",id:"solid\ub780",children:[]},{value:"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP, Single Responsibility principle)",id:"\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59srp-single-responsibility-principle",children:[]},{value:"\uac1c\ubc29-\ud328\uc1c4 \uc6d0\uce59(OCP, Open-closed principle)",id:"\uac1c\ubc29-\ud328\uc1c4-\uc6d0\uce59ocp-open-closed-principle",children:[]},{value:"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59(LSP, Liskov substituion principle)",id:"\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59lsp-liskov-substituion-principle",children:[]},{value:"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP, Interface segregation principle)",id:"\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59isp-interface-segregation-principle",children:[]},{value:"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59(DIP, Dependency inversion principle)",id:"\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59dip-dependency-inversion-principle",children:[]},{value:"SOLID \uc815\ub9ac",id:"solid-\uc815\ub9ac",children:[]}]},{value:"DI\uc640 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130",id:"di\uc640-\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130",children:[{value:"DI\uc744 \uc774\uc6a9\ud55c \uc758\uc874 \uac1d\uccb4 \uc0ac\uc6a9",id:"di\uc744-\uc774\uc6a9\ud55c-\uc758\uc874-\uac1d\uccb4-\uc0ac\uc6a9",children:[]},{value:"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uc774\uc6a9\ud55c \uc758\uc874 \uac1d\uccb4 \uc0ac\uc6a9",id:"\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130\ub97c-\uc774\uc6a9\ud55c-\uc758\uc874-\uac1d\uccb4-\uc0ac\uc6a9",children:[]}]}],o={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uc124\uacc4-\uc6d0\uce59--solid"},"\uc124\uacc4 \uc6d0\uce59 : SOLID"),(0,r.kt)("h3",{id:"solid\ub780"},"SOLID\ub780?"),(0,r.kt)("p",null,"\ub2e4\uc12f\uac00\uc9c0\uc758 \uc6d0\uce59\uc73c\ub85c \uad6c\uc131\ub428"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP, Single Responsibility principle)"),(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc29-\ud328\uc1c4 \uc6d0\uce59(OCP, Open-closed principle)"),(0,r.kt)("li",{parentName:"ul"},"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59(LSP, Liskov substituion principle)"),(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP, Interface segregation principle)"),(0,r.kt)("li",{parentName:"ul"},"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59(DIP, Dependency inversion principle)")),(0,r.kt)("h3",{id:"\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59srp-single-responsibility-principle"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP, Single Responsibility principle)"),(0,r.kt)("p",null,"\uc815\uc758 : \ud074\ub798\uc2a4\ub294 \ub2e8 \ud55c\uac1c\uc758 \ucc45\uc784\uc744 \uac00\uc838\uc57c \ud55c\ub2e4."),(0,r.kt)("h4",{id:"\uc704\ubc18\ud558\ub294-\uacbd\uc6b0"},"\uc704\ubc18\ud558\ub294 \uacbd\uc6b0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc808\ucc28\uc9c0\ud5a5\uc801\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \ubcc0\uacbd\uc774 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294\ucc45\uc784\uc758 \ub2e8\uc704\ub294 \ubcc0\ud654\ub418\ub294 \ubd80\ubd84\uacfc \uad00\ub828\ub41c\ub2e4.")),(0,r.kt)("h4",{id:"\uc9c0\ud0a4\ub294-\ubc29\ubc95"},"\uc9c0\ud0a4\ub294 \ubc29\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uc8fc\uccb4\ub97c \uc544\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\ub4e4\uc774 \ub2e4\ub978 \uacbd\uc6b0\ub294 \ub2e4\ub978 \ucc45\uc784\uc5d0 \uc18d\ud560 \ud655\ub960\uc774 \ub192\uae30 \ub54c\ubb38\uc5d0 \ucc45\uc784 \ubd84\ub9ac \ud6c4\ubcf4\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uac1c\ubc29-\ud328\uc1c4-\uc6d0\uce59ocp-open-closed-principle"},"\uac1c\ubc29-\ud328\uc1c4 \uc6d0\uce59(OCP, Open-closed principle)"),(0,r.kt)("p",null,"\uc815\uc758 : \ud655\uc7a5\uc5d0\ub294 \uc5f4\ub824\uc788\uc5b4\uc57c\ud558\uace0, \ubcc0\uacbd\uc5d0\ub294 \ub2eb\ud600 \uc788\uc5b4\uc57c\ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ub2a5\uc744 \ubcc0\uacbd\ud558\uac70\ub098 \ud655\uc7a5\ud560 \uc218 \uc788\uc73c\uba70"),(0,r.kt)("li",{parentName:"ul"},"\uadf8 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub294 \uc218\uc815\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,r.kt)("p",null,"\uc989, \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\uba74\uc11c\ub3c4 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \uae30\uc874 \ucf54\ub4dc\ub294 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \uad6c\ud604\ud560 \uc218 \uc788\ub294 \uc774\uc720\ub294 \ubcc0\ud654\ub418\ub294 \ubd80\ubd84\uc744 \ucd94\uc0c1\ud654 \ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc678\uc5d0\ub3c4 \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc740 \uc0c1\uc18d\uc785\ub2c8\ub2e4. \uc624\ubc84\ub77c\uc774\ub529\uc744 \ud1b5\ud574\uc11c \uc774 \uc6d0\uce59\uc744 \uc9c0\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc704\ubc18-\ud558\ub294-\uacbd\uc6b0"},"\uc704\ubc18 \ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("p",null,"\ucd94\uc0c1\ud654\uc640 \ub2e4\ud615\uc131\uc744 \uc774\uc6a9\ud574\uc11c \uc77c\ubc18\uc801\uc73c\ub85c \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uad6c\ud604\ud558\ub294\ub370, \ucd94\uc0c1\ud654\ub098 \ub2e4\ud615\uc131\uc744 \uc81c\ub300\ub85c \uc9c0\ud0a4\uc9c0 \uc54a\uc740 \ucf54\ub4dc\ub294 \uac1c\ubc29\ud3d0\uc1c4 \uc6d0\uce59\uc744 \uc5b4\uae30\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ud45c\uc801\uc778 \uc608\uc2dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc6b4 \uce90\uc2a4\ud305\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube44\uc2b7\ud55c if-else \ube14\ub85d\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uac1c\ubc29-\ud3d0\uc1c4-\uc6d0\uce59\uc740-\uc720\uc5f0\ud568\uc5d0-\ub300\ud55c-\uac83\uc785\ub2c8\ub2e4"},"\uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc740 \uc720\uc5f0\ud568\uc5d0 \ub300\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc740 \ubcc0\uacbd\uc758 \uc720\uc5f0\ud568\uacfc \uad00\ub828\ub41c \uc6d0\uce59\uc785\ub2c8\ub2e4. \uc989, \ubcc0\ud654\uac00 \uc608\uc0c1\ub418\ub294 \uacf3\uc744 \ucd94\uc0c1\ud654\ud574\uc11c \ubcc0\uacbd\uc758 \uc720\uc5f0\ud568\uc744 \uc5bb\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucf54\ub4dc\uc5d0 \ub300\ud55c \ubcc0\ud654 \uc694\uad6c\uac00 \ubc1c\uc0dd\ud558\uba74, \ubcc0\ud654\uc640 \uad00\ub828\ub41c \uad6c\ud604\uc744 \ucd94\uc0c1\ud654\ud574\uc11c \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc5d0 \ub9de\uac8c \uc218\uc815\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc2b5\uad00\uc744 \uac16\ub3c4\ub85d \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59lsp-liskov-substituion-principle"},"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59(LSP, Liskov substituion principle)"),(0,r.kt)("p",null,"\uc815\uc758 : \uc0c1\uc704 \ud0c0\uc785\uc758 \uac1d\uccb4\ub97c \ud558\uc704 \ud0c0\uc785\uc758 \uac1d\uccb4\ub85c \uce58\ud658\ud574\ub3c4 \uc0c1\uc704 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc740 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud574\uc57c\ud569\ub2c8\ub2e4. \uc77c\ubc19\uc801\uc73c\ub85c \uac1c\ubc29 \ud398\uc1c4 \uc6d0\uce59\uc744 \ubc1b\ud600 \uc8fc\ub294 \ub2e4\ud615\uc131\uc5d0 \uad00\ud55c \uc6d0\uce59\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc704\ubc18-\ud558\ub294-\uacbd\uc6b0-1"},"\uc704\ubc18 \ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("p",null,"\uc608\uc2dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instanceof")," \uc5f0\uc0b0\uc790 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\uc704 \ud0c0\uc785\uc5d0\uc11c \uc9c0\uc815\ud55c \ub9ac\ud134 \uac12\uc758 \ubc94\uc704\uc5d0 \ud574\ub2f9\ub418\uc9c0 \uc54a\ub294 \uac12\uc744 \ub9ac\ud134")),(0,r.kt)("p",null,"\uc704\ubc18 \uc0ac\ub840"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba85\uc2dc\uc801 \uba85\uc138\uc5d0\uc11c \ubc97\uc5b4\ub09c \uac12\uc744 \ub9ac\ud134\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba85\uc2dc\ub41c \uba85\uc138\uc5d0\uc11c \ubc97\uc5b4\ub09c \uc775\uc149\uc158\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba85\uc2dc\ub41c \uba85\uc138\uc5d0\uc11c \ubc97\uc5b4\ub09c \uae30\ub2a5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59\uc740-\uacc4\uc57d\uacfc-\ud655\uc7a5\uc5d0-\ub300\ud55c-\uac83"},"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59\uc740 \uacc4\uc57d\uacfc \ud655\uc7a5\uc5d0 \ub300\ud55c \uac83"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59\uc744 \uc5b4\uae30\uba74 \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uc5b4\uae38 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59isp-interface-segregation-principle"},"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59(ISP, Interface segregation principle)"),(0,r.kt)("p",null,"\uc815\uc758 : \uc778\ud130\ud398\uc774\uc2a4\ub294 \uadf8 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ubd84\ub9ac\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59"},"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\uc2e0\uc774 \uc0ac\uc6a9\ud558\ub294 \uba54\uc11c\ub4dc\uc5d0\ub9cc \uc758\uc874\ud574\uc57c \ud55c\ub2e4\ub294 \uc6d0\uce59"),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59\uc774 \uc798\uc9c0\ucf1c\uc9c8 \ub54c, \uc778\ud130\ud398\uc774\uc2a4\uc640 \ucf58\ud06c\ub9ac\ud2b8 \ud074\ub798\uc2a4\uc758 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\uc131\uc744 \ub192\uc77c \uc218 \uc788\uc73c\ubbc0\ub85c \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59\uc740 \uacb0\uad6d \uc778\ud130\ud398\uc774\uc2a4\uc640 \ucf58\ud06c\ub9ac\ud2b8 \ud074\ub798\uc2a4\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc5ec\uc90d\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59dip-dependency-inversion-principle"},"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59(DIP, Dependency inversion principle)"),(0,r.kt)("p",null,"\uc815\uc758 : \uace0\uc218\uc900 \ubaa8\ub4c8\uc740 \uc800\uc218\uc900 \ubaa8\ub4c8\uc758 \uad6c\ud604\uc5d0 \uc758\uc874\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4. \uc800\uc218\uc900 \ubaa8\ub4c8\uc774 \uace0\uc218\uc900 \ubaa8\ub4c8\uc5d0\uc11c \uc815\uc758\ud55c \ucd94\uc0c1 \ud0c0\uc785\uc5d0 \uc758\uc874\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uace0\uc218\uc900 \ubaa8\ub4c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc758\ubbf8\uac00 \uc788\ub294 \ub2e8\uc77c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ubaa8\ub4c8"),(0,r.kt)("li",{parentName:"ul"},"ex) \ubc14\uc774\ud2b8 \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc640 \uc554\ud638\ud654 \ud558\uace0, \uacb0\uacfc \ubc14\uc774\ud2b8 \ub370\uc774\ud2b8\ub97c \uc4f4\ub2e4")),(0,r.kt)("p",null,"\uc800\uc218\uc900 \ubaa8\ub4c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uace0\uc218\uc900 \ubaa8\ub4c8 \ub4e4\uc758 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \ud558\uc704 \uae30\ub2a5\uc758 \uc2e4\uc81c\uad6c\ud604"),(0,r.kt)("li",{parentName:"ul"},"ex) \ud30c\uc77c\uc5d0\uc11c \ubc14\uc774\ud2b8 \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc634, AES \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \uc554\ud638\ud654, \ud30c\uc77c\uc5d0 \ubc14\uc774\ud2b8 \ub370\uc774\ud130\ub97c \uc500")),(0,r.kt)("h4",{id:"\uc704\ubc18-\ud558\ub294-\uacbd\uc6b0-\uace0\uc218\uc900-\ubaa8\ub4c8\uc774-\uc800\uc218\uc900-\ubaa8\ub4c8\uc5d0-\uc758\uc874\ud560-\ub54c"},"\uc704\ubc18 \ud558\ub294 \uacbd\uc6b0, \uace0\uc218\uc900 \ubaa8\ub4c8\uc774 \uc800\uc218\uc900 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud560 \ub54c"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\uc5d0 \uc694\uad6c\uc0ac\ud56d\uc774 \uc5b4\ub290 \uc815\ub3c4 \uc548\uc815\ud654\ub418\uba74 \uc774\ud6c4\ubd80\ud130\ub294 \ud070\ud2c0\uc5d0\uc11c \ud504\ub85c\uadf8\ub7a8\uc774 \ubcc0\uacbd\ub418\uae30 \ubcf4\ub2e4\ub294 \uc0c1\uc138 \uc218\uc900\uc5d0\uc11c\uc758 \ubcc0\uacbd\uc774 \ubc1c\ud589\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \ubcc0\uacbd\uc774 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59\uc744-\ud1b5\ud574-\ubcc0\uacbd\uc758-\uc720\uc5f0\ud568-\ud655\ubcf4"},"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59\uc744 \ud1b5\ud574 \ubcc0\uacbd\uc758 \uc720\uc5f0\ud568 \ud655\ubcf4"),(0,r.kt)("p",null,"\ucd94\uc0c1\ud654\ub97c \ud1b5\ud574\uc11c \uc720\uc5f0\ud568\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uace0\uc218\uc900 \ubaa8\ub4c8\uc758 \ubcc0\uacbd\uc5c6\uc774 \uc800\uc218\uc900 \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \uc720\uc5f0\ud568\uc744 \uc5bb\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989, \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59\uacfc \ud568\uaed8 \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \ub530\ub974\ub294 \uc124\uacc4\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \uae30\ubc18\uc774\ub429\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59\uacfc-\ud328\ud0a4\uc9c0"},"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59\uacfc \ud328\ud0a4\uc9c0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc758\uc874 \uc5ed\uc804 \uc6d0\uce59\uc740 \ud0c0\uc785\uc758 \uc18c\uc720\ub3c4 \uc5ed\uc804\uc2dc\ud0b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574, \uac01 \ud328\ud0a4\uc9c0\ub97c \ub3c5\ub9bd\uc801\uc73c\ub85c \ubc30\ud3ec\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"solid-\uc815\ub9ac"},"SOLID \uc815\ub9ac"),(0,r.kt)("p",null,"\ubcc0\ud654\uc5d0 \uc720\uc5f0\ud558\uac8c \ub300\ucc98\ud560 \uc218 \uc788\ub294 \uc124\uacc4 \uc6d0\uce59"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59\uacfc \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59\uc744 \ud1b5\ud574 \uac1d\uccb4\uac00 \ucee4\uc9c0\ub294 \uac83\uc744 \ub9c9\uc544\uc90d\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uac1d\uccb4\uac00 \ub2e8\uc77c \ucc45\uc784\uc744 \uac00\uc9c0\uace0 \ubcc0\uacbd\uc774 \ub2e4\ub978 \uacf3\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \ucd5c\uc18c\ud654\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59\uacfc \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59\uc740 \uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc740 \ubcc0\ud654\ub418\ub294 \ubd80\ubd84\uc744 \ucd94\uc0c1\ud654\ud558\uace0 \ub2e4\ud615\uc131\uc744 \uc774\uc6a9\ud568\uc73c\ub85c\uc368 \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\uba74\uc11c \uae30\uc874 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uc9c0 \uc54a\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c\uc758 \uae30\ub2a5 \uc0ac\uc6a9\uc744 \uc911\uc2dc\ud569\ub2c8\ub2e4. \uc989, SOLID \uc6d0\uce59\uc740 \uc0ac\uc6a9\uc790 \uad00\uc810\uc5d0\uc11c\uc758 \uc124\uacc4\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"di\uc640-\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130"},"DI\uc640 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130"),(0,r.kt)("p",null,"\ub85c\ubc84\ud2b8 C \ub9c8\ud2f4\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c 2\uac1c\uc758 \uc601\uc5ed\uc73c\ub85c \uad6c\ubd84\ud574\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uace0\uc218\uc900 \uc815\ucc45 \ubc0f \uc800\uc218\uc900 \uad6c\ud604\uc744 \ud3ec\ud568\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc601\uc5ed"),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub3d9\uc791\ud558\ub3c4\ub85d \uac01 \uac1d\uccb4\ub4e4\uc744 \uc5f0\uacb0\ud574 \uc8fc\ub294 \uba54\uc778 \uc601\uc5ed")),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c \uba54\uc778 \uc601\uc5ed\uc5d0\uc11c \uac1d\uccb4\ub97c \uc5f0\uacb0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \ubc29\ubc95\uc73c\ub85c DI\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba54\uc778 \uc601\uc5ed\uc740 \ub2e4\uc74c\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. (\uc989, \ud574\ub2f9 \ucc45\uc784\uc744 \uac00\uc9d1\ub2c8\ub2e4)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc601\uc5ed\uc5d0\uc11c \uc0ac\uc6a9\ub420 \uac1d\uccb4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 \uac1d\uccb4 \uac04\uc758 \uc758\uc874 \uad00\uacc4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \ubc29\uc2dd\uc740 \ub85c\ucf00\uc774\ud130\ub97c \ud1b5\ud574 \ud544\uc694\ub85c \ud558\ub294 \uac1d\uccb4\ub97c \uc9c1\uc811 \ucc3e\ub294 \ubc29\uc2dd\uc774\uc9c0\ub9cc, \ub2e8\uc810\uc774 \ub9ce\uc544 \uc678\ubd80\uc5d0\uc11c \uac1d\uccb4\ub97c \uc8fc\uc785\ud574\uc8fc\ub294 DI(Dependency Injection) \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"di\uc744-\uc774\uc6a9\ud55c-\uc758\uc874-\uac1d\uccb4-\uc0ac\uc6a9"},"DI\uc744 \uc774\uc6a9\ud55c \uc758\uc874 \uac1d\uccb4 \uc0ac\uc6a9"),(0,r.kt)("p",null,"\uc0ac\uc6a9\ud560 \uac1d\uccb4\ub97c \uc9c1\uc811 \uc0dd\uc131\ud560 \uacbd\uc6b0, \uc544\ub798 \ucf54\ub4dc\ucc98\ub7fc \ucf58\ud06c\ub9ac\ud2b8 \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c \uc758\uc874\uc774 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub294 \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59\uc744 \uc704\ubc18\ud558\uac8c \ub418\uace0, \uacb0\uacfc\uc801\uc73c\ub85c \ud655\uc7a5 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uc704\ubc18\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc740 DI(Dependency Injection, \uc758\uc874\uc131 \uc8fc\uc785)\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"DI\ub294 \ud544\uc694\ud55c \uac1d\uccb4\ub97c \uc9c1\uc811 \uc0dd\uc131\ud558\uac70\ub098 \ucc3e\uc9c0 \uc54a\uace0 \uc678\ubd80\uc5d0\uc11c \ub123\uc5b4\uc8fc\ub294 \ubc29\uc2dd"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"DI\ub97c \uc801\uc6a9\ud558\ub824\uba74 \uac1d\uccb4\ub97c \uc804\ub2ec\ubc1b\uc744 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud574\uc57c\ud558\ub294\ub370, \uc774 \ubc29\ubc95\uc73c\ub85c\ub294 2\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790 \ubc29\uc2dd"),(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd")),(0,r.kt)("h4",{id:"\uc0dd\uc131\uc790-\ubc29\uc2dd"},"\uc0dd\uc131\uc790 \ubc29\uc2dd"),(0,r.kt)("p",null,"\uc0dd\uc131\uc790 \ubc29\uc2dd\uc740 \uc0dd\uc131\uc790\ub97c \ud1b5\ud574\uc11c \uc758\uc874 \uac1d\uccb4\ub97c \uc804\ub2ec\ubc1b\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class JobCLI {\n  private JobQueue jobQueue;\n\n  public JobCLI(JobQueue jobQueue) {\n    this.jobQueue = jobQueue;\n  }\n\n  ...\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uc880 \ub354 \uc120\ud638\ub418\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc2dc\uc810\uc5d0\uc11c \ud544\uc694\ud55c \ubaa8\ub4e0 \uc758\uc874 \uac1d\uccb4\ub97c \uc900\ube44\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc2dc\uc810\uc5d0\uc11c \uc758\uc874 \uac1d\uccb4\uac00 \uc815\uc0c1\uc801\uc778\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc124\uc815-\uba54\uc11c\ub4dc-\ubc29\uc2dd"},"\uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd"),(0,r.kt)("p",null,"\uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd\uc740 \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud574\uc11c \uc758\uc874 \uac1d\uccb4\ub97c \uc804\ub2ec\ubc1b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Worker {\n  private JobQueue jobQueue;\n\n  public void setJobQueue(JobQueue jobQueue) {\n    this.jobQueue = jobQueue;\n  }\n\n  ...\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131\ud55c \uc774\ud6c4\uc5d0 \uc758\uc874 \uac1d\uccb4\ub97c \uc124\uc815\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \uc5b4\ub358 \uc774\uc720\ub85c \uc778\ud574 \uc758\uc874\ud560 \uac1d\uccb4\uac00 \ub098\uc911\uc5d0 \uc0dd\uc131\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc758\uc874 \uac1d\uccb4\uac00 \ub9ce\uc740 \uacbd\uc6b0, \uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd\uc740 \uba54\uc11c\ub4dc \uc774\ub984\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uc758\uc874 \uac1d\uccb4\uac00 \uc124\uc815\ub418\ub294\uc9c0 \uc27d\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc2a4\ud504\ub9c1-\ud504\ub808\uc784\uc6cc\ud06c"},"\uc2a4\ud504\ub9c1 \ud504\ub808\uc784\uc6cc\ud06c"),(0,r.kt)("p",null,"\uc2a4\ud504\ub9c1 \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc0dd\uc131\uc790 \ubc29\uc2dd\uacfc \uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd\uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790 \ubc29\uc2dd, ",(0,r.kt)("inlineCode",{parentName:"li"},"<constructor-arg>")),(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815 \uba54\uc11c\ub4dc \ubc29\uc2dd, ",(0,r.kt)("inlineCode",{parentName:"li"},"<property>"))),(0,r.kt)("h3",{id:"\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130\ub97c-\uc774\uc6a9\ud55c-\uc758\uc874-\uac1d\uccb4-\uc0ac\uc6a9"},"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uc774\uc6a9\ud55c \uc758\uc874 \uac1d\uccb4 \uc0ac\uc6a9"),(0,r.kt)("p",null,"\ud504\ub85c\uadf8\ub7a8 \uac1c\ubc1c \ud658\uacbd\uc774\ub098 \uc0ac\uc6a9\ud558\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uc81c\uc57d\uc73c\ub85c \uc778\ud574 DI \ud328\ud134\uc744 \uc801\uc6a9\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. (ex. \uc548\ub4dc\ub85c\uc774\ub4dc)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MainActivity extends Activity {\n  private SomeService someService;\n\n  // \uc548\ub4dc\ub85c\uc774\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc2e4\ud589\ud574\uc8fc\uc9c0 \uc54a\uc74c, DI\ud560 \uc218 \uc5c6\uc74c\n  public void setSomeService(SomeService someService) {\n    this.someService = someService;\n  }\n\n  // \uc548\ub4dc\ub85c\uc774\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \uc758\ud574 \uc2e4\ud589\ub428.\n  @Override\n  public void onCreate(...) {...}\n}\n")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uacbd\uc6b0, \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud544\uc694\ub85c \ud558\ub294 \uac1d\uccb4\ub97c \uc81c\uacf5\ud558\ub294 \ucc45\uc784"),"\uc744 \uac16\uc2b5\ub2c8\ub2e4. \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc601\uc5ed\uc758 \uac1d\uccb4\uc5d0\uc11c \uc9c1\uc811 \uc811\uadfc\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uac1d\uccb4-\ub4f1\ub85d-\ubc29\uc2dd\uc758-\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130-\uad6c\ud604"},"\uac1d\uccb4 \ub4f1\ub85d \ubc29\uc2dd\uc758 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uad6c\ud604"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uad6c\ud604\ud558\ub294 \uc26c\uc6b4 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud560 \uac1d\uccb4\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uc778\uc2a4\ud134\uc2a4\ub97c \uc9c0\uc815\ud558\uace0 \ucc38\uc870\ud558\uae30 \uc704\ud55c static \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \uc0dd\uc131\uc790\ub97c \uc774\uc6a9\ud574\uc11c \uac1d\uccb4\ub97c \ub4f1\ub85d \ubc1b\ub294 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \ubc29\uc2dd\npublic class ServiceLocator {\n  private JobQueue jobQueue;\n  private Transcoder transcoder;\n\n  public ServiceLocater(JobQueue jobQueue, Transcoder transcoder) {\n    this.jobQueue = jobQueue;\n    this.transcoder = transcoder;\n  }\n\n  // get \uba54\uc11c\ub4dc \uc0dd\ub7b5.\n  ...\n\n  // \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uc811\uadfc\uc744 \uc704\ud55c static \uba54\uc11c\ub4dc\n  public static ServiceLocater instance;\n  public static void load(ServiceLocater locater) {\n    ServiceLocater.instance = instance;\n  }\n  public static ServiceLocater getInstance() {\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"\ub2e4\ub9cc, \ubaa8\ub4e0 \uac1d\uccb4\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc740 \ucf54\ub4dc \uac00\ub3c5\uc131\uc744 \ub5a8\uc5b4\ud2b8\ub9ac\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc640\ub294 \ubc18\ub300\ub85c \uac1d\uccb4\ub97c \ub4f1\ub85d\ud558\ub294 \ubc29\uc2dd\uc740 \uc788\ub294\ub370 \uc774 \ubc29\uc2dd\uc740 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uad6c\ud604\uc774 \uc27d\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub294 \uac1d\uccb4\ub97c \ub4f1\ub85d\ud560 \ub54c \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub178\ucd9c\ub418\uc5b4 \uc788\uae30 \ub54c\ubb34\ub139 \uc758\uc874 \uac1d\uccb4\ub97c \uc5b8\uc81c\ub4e0\uc9c0 \ubc14\uafc0\uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc0c1\uc18d\uc744-\ud1b5\ud55c-\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130-\uad6c\ud604"},"\uc0c1\uc18d\uc744 \ud1b5\ud55c \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uad6c\ud604"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uad6c\ud558\ub294 \ucd94\uc0c1 \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud558\ub294 \uc0c1\uc704 \ud0c0\uc785 \uad6c\ud604"),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\uc704 \ud0c0\uc785\uc744 \uc0c1\uc18d\ubc1b\uc740 \ud558\uc704 \ud0c0\uc785\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uac1d\uccb4 \uc124\uc815")),(0,r.kt)("h4",{id:"\uc81c\ub124\ub9ad\ud15c\ud50c\ub9bf\uc744-\uc774\uc6a9\ud55c-\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130-\uad6c\ud604"},"\uc81c\ub124\ub9ad/\ud15c\ud50c\ub9bf\uc744 \uc774\uc6a9\ud55c \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130 \uad6c\ud604"),(0,r.kt)("p",null,"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\uc758 \ub2e8\uc810\uc740 \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59\uc744 \uc704\ud569\ub0b3\u3142\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc758\uc874 \uac1d\uccb4\ub9c8\ub2e4 \uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\ub97c \uc791\uc131\ud574\uc918\uc57c\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \ud074\ub798\uc2a4\ub974\ub97c \uc911\ubcf5\ud574\uc11c \ub9cc\ub4dc\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc11c\ube44\uc2a4-\ub85c\ucf00\uc774\ud130\uc758-\ub2e8\uc810"},"\uc11c\ube44\uc2a4 \ub85c\ucf00\uc774\ud130\uc758 \ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uac00 \ub2e4\uc218 \ud544\uc694\ud55c \uacb0\uc6b0, \uac1d\uccb4 \ubcc4\ub85c \uc81c\uacf5 \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\uc918\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59\uc744 \uc704\ubc30\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub530\ub77c\uc11c, DI\ub97c \uc4f8 \uc218 \uc788\ub294 \ud658\uacbd\uc774\ub77c\uba74 ",(0,r.kt)("strong",{parentName:"p"},"DI\ub97c \uc4f0\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.")))}c.isMDXComponent=!0}}]);