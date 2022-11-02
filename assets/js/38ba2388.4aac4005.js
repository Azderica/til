"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2115],{3905:function(e,t,l){l.d(t,{Zo:function(){return o},kt:function(){return d}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=k(l),d=a,N=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return l?n.createElement(N,i(i({ref:t},o),{},{components:l})):n.createElement(N,i({ref:t},o))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8586:function(e,t,l){l.r(t),l.d(t,{default:function(){return o},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i={sidebar_position:12},u={unversionedId:"java/optimizing-java/ch12",id:"java/optimizing-java/ch12",isDocsHomePage:!1,title:"12. \ub3d9\uc2dc \uc131\ub2a5 \uae30\ubc95",description:"\ubcd1\ub82c\uc131\uc774\ub780?",source:"@site/docs/java/optimizing-java/ch12.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch12",permalink:"/til/docs/java/optimizing-java/ch12",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch12.md",version:"current",lastUpdatedAt:1667401087,formattedLastUpdatedAt:"11/2/2022",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"11. \uc790\ubc14 \uc5b8\uc5b4\uc758 \uc131\ub2a5 \ud5a5\uc0c1 \uae30\ubc95",permalink:"/til/docs/java/optimizing-java/ch11"},next:{title:"13. \ud504\ub85c\ud30c\uc77c\ub9c1",permalink:"/til/docs/java/optimizing-java/ch13"}},p=[{value:"\ubcd1\ub82c\uc131\uc774\ub780?",id:"\ubcd1\ub82c\uc131\uc774\ub780",children:[{value:"\uc790\ubc14 \ub3d9\uc2dc\uc131 \uae30\ucd08",id:"\uc790\ubc14-\ub3d9\uc2dc\uc131-\uae30\ucd08",children:[]}]},{value:"JMM\uc758 \uc774\ud574",id:"jmm\uc758-\uc774\ud574",children:[]},{value:"\ub3d9\uc2dc\uc131 \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ucd95",id:"\ub3d9\uc2dc\uc131-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uad6c\ucd95",children:[{value:"Unsafe",id:"unsafe",children:[]},{value:"\uc544\ud1a0\ubbf9\uc2a4\uc640 CAS",id:"\uc544\ud1a0\ubbf9\uc2a4\uc640-cas",children:[]},{value:"\ub77d\uacfc \uc2a4\ud540\ub77d",id:"\ub77d\uacfc-\uc2a4\ud540\ub77d",children:[]}]},{value:"\ub3d9\uc2dc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc815\ub9ac",id:"\ub3d9\uc2dc-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uc815\ub9ac",children:[{value:"<code>java.util.concurrent</code> \ub77d",id:"javautilconcurrent-\ub77d",children:[]},{value:"\uc77d\uae30/\uc4f0\uae30 \ub77d",id:"\uc77d\uae30\uc4f0\uae30-\ub77d",children:[]},{value:"\uc138\ub9c8 \ud3ec\uc5b4",id:"\uc138\ub9c8-\ud3ec\uc5b4",children:[]},{value:"\ub3d9\uc2dc \uceec\ub809\uc158",id:"\ub3d9\uc2dc-\uceec\ub809\uc158",children:[]},{value:"\ub798\uce58\uc640 \ubc30\ub9ac\uc5b4",id:"\ub798\uce58\uc640-\ubc30\ub9ac\uc5b4",children:[]}]},{value:"\uc2e4\ud589\uc790\uc640 \ud0dc\uc2a4\ud06c \ucd94\uc0c1\ud654",id:"\uc2e4\ud589\uc790\uc640-\ud0dc\uc2a4\ud06c-\ucd94\uc0c1\ud654",children:[{value:"\ube44\ub3d9\uae30 \uc2e4\ud589",id:"\ube44\ub3d9\uae30-\uc2e4\ud589",children:[]},{value:"ExecutorService \uc120\ud0dd\ud558\uae30",id:"executorservice-\uc120\ud0dd\ud558\uae30",children:[]},{value:"\ud3ec\ud06c/\uc870\uc778",id:"\ud3ec\ud06c\uc870\uc778",children:[]}]},{value:"\ucd5c\uc2e0 \uc790\ubc14 \ub3d9\uc2dc\uc131",id:"\ucd5c\uc2e0-\uc790\ubc14-\ub3d9\uc2dc\uc131",children:[{value:"\uc2a4\ud2b8\ub9bc\uacfc \ubcd1\ub82c \uc2a4\ud2b8\ub9bc",id:"\uc2a4\ud2b8\ub9bc\uacfc-\ubcd1\ub82c-\uc2a4\ud2b8\ub9bc",children:[]},{value:"\ub77d-\ud504\ub9ac \uae30\ubc95",id:"\ub77d-\ud504\ub9ac-\uae30\ubc95",children:[]},{value:"\uc561\ud130 \uae30\ubc18 \uae30\ubc95",id:"\uc561\ud130-\uae30\ubc18-\uae30\ubc95",children:[]}]},{value:"\ub9c8\uce58\uba70.",id:"\ub9c8\uce58\uba70",children:[]}],k={toc:p};function o(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ubcd1\ub82c\uc131\uc774\ub780"},"\ubcd1\ub82c\uc131\uc774\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba40\ud2f0\ucf54\uc5b4\uc5d0\uc11c\ub294 \uc554\ub2ec\uc758 \ubc95\uce59\uc774 \uc5f0\uc0b0 \ud0dc\uc2a4\ud06c\uc758 \uc2e4\ud589 \uc18d\ub3c4\ub97c \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \ud575\uc2ec \uc694\uc18c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T(n) = S + (1/N) * (T - S)"))),(0,r.kt)("h3",{id:"\uc790\ubc14-\ub3d9\uc2dc\uc131-\uae30\ucd08"},"\uc790\ubc14 \ub3d9\uc2dc\uc131 \uae30\ucd08"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uae30\ubcf8\uc740 \ub3d9\uc2dc\uc131 \ud2b9\uc720\uc758 \ubc18\uc9c1\uad00\uc801\uc778 \ubaa8\uc2b5\uc744 \uc774\ud574\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uae30\ud654\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc544\uc8fc \uc2e0\uc911\ud558\uac8c \uc124\uacc4\ud558\uace0 \ubbf8\ub9ac \uc798 \ub530\uc838\ubd10\uc57c\ud569\ub2c8\ub2e4. \uc798\ubabb \uc0ac\uc6a9\ub418\uba74 \ub290\ub824\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jmm\uc758-\uc774\ud574"},"JMM\uc758 \uc774\ud574"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JMM : \uc790\ubc14 \uba54\ubaa8\ub9ac \ubaa8\ub378"),(0,r.kt)("li",{parentName:"ul"},"JMM\uc740 \ub2e4\uc74c \uc9c8\ubb38\uc5d0 \ub2f5\uc744 \ucc3e\ub294 \ubaa8\ub378\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub450 \ucf54\uc5b4\uac00 \uac19\uc740 \ub370\uc774\ud130\ub97c \uc561\uc138\uc2a4\ud558\uba74 \uc5b4\ub5bb\uac8c \ub418\ub294\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"\uc5b8\uc81c \ub450 \ucf54\uc5b4\uac00\uac19\uc740 \ub370\uc774\ud130\ub97c \ubc14\ub77c\ubcf8\ub2e4\uace0 \uc7a5\ub2f4\ud560 \uc218 \uc788\ub294\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uce90\uc2dc\ub294 \ub450 \uc9c8\ubb38\uc758 \ub2f5\uc5d0 \uc5b4\ub5a4 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294\uc9c0")))),(0,r.kt)("p",null,"JMM \uac19\uc740 \uba54\ubaa8\ub9ac \ubaa8\ub378\uc740 \ub450 \uac00\uc9c0 \ubc29\uc2dd\uc73c\ub85c \uc811\uadfc\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac15\ud55c \uba54\ubaa8\ub9ac \ubaa8\ub378",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc804\uccb4 \ucf54\uc5b4\uac00 \ud56d\uc0c1 \uac19\uc740 \uac12\uc744 \ubc14\ub77c\ubd05\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc57d\ud55c \uba54\ubaa8\ub9ac \ubaa8\ub378",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucf54\uc5b4\ub9c8\ub2e4 \ub2e4\ub978 \uac12\uc744 \ubc14\ub77c\ubcfc \uc218 \uc788\uace0 \uadf8 \uc2dc\uc810\uc744 \uc81c\uc5b4\ud558\ub294 \ud2b9\ubcc4\ud55c \uce90\uc2dc \uaddc\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc790\ubc14 \uba85\uc138\uc11c\ub294 JVM \uad6c\ud604\uccb4\uac00 \ubc18\ub4dc\uc2dc \uc9c0\ucf1c\uc57c\ud560 \uaddc\uce59\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3d9\uc2dc\uc131-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uad6c\ucd95"},"\ub3d9\uc2dc\uc131 \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ucd95"),(0,r.kt)("p",null,"\ub3d9\uc2dc \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uad6c\uc131\ud558\ub294 \ud575\uc2ec \uc694\uc18c\ub294 \ub2e4\uc74c\uc758 \uc77c\ubc18 \uce74\ud14c\uace0\ub9ac\ub85c \ubd84\ub958\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub77d, \uc138\ub9c8\ud3ec\uc5b4"),(0,r.kt)("li",{parentName:"ul"},"\uc544\ud1a0\ubbf9\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9 \ud050"),(0,r.kt)("li",{parentName:"ul"},"\ub798\uce58"),(0,r.kt)("li",{parentName:"ul"},"\uc2e4\ud589\uc790")),(0,r.kt)("h3",{id:"unsafe"},"Unsafe"),(0,r.kt)("p",null,"Unsafe\ub85c \ud560 \uc218 \uc788\ub294 \uc77c\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub294 \ud560\ub2f9\ud558\uc9c0\ub9cc \uc0dd\uc131\uc790\ub294 \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6d0\uba54\ubaa8\ub9ac\uc5d0 \uc561\uc138\uc2a4\ud558\uace0 \ud3ec\uc778\ud130 \uc218\uc900\uc758 \uc5f0\uc0b0\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc11c\ubcc4 \ud558\ub4dc\uc6e8\uc5b4 \ud2b9\uc131(CAS)\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ub97c \ud1b5\ud574\uc11c \uace0\uc218\uc900\uc758 \ud504\ub808\uc784\uc6cc\ud06c \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2e0\uc18d\ud55c \uc5ed\uc9c1\ub82c\ud654"),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc\uc5d0 \uc548\uc804\ud55c \ub124\uc774\ud2f0\ube0c \uba54\ubaa8\ub9ac \uc561\uc138\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\uc544\ud1a0\ubbf9 \uba54\ubaa8\ub9ac \uc5f0\uc0b0"),(0,r.kt)("li",{parentName:"ul"},"\ud6a8\uc728\uc801\uc778 \uac1d\uccb4/\uba54\ubaa8\ub9ac \ub808\uc774\uc544\uc6c3"),(0,r.kt)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \uba54\ubaa8\ub9ac \ud39c\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\uc640\uc758 \uc2e0\uc18d\ud55c \uc0c1\ud638\uc791\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"JNI\uc5d0 \uad00\ud55c \ub2e4\uc911 \uc6b4\uc601\uccb4\uc81c \ub300\uccb4\ubb3c"),(0,r.kt)("li",{parentName:"ul"},"\ubc30\uc5f4 \uc6d0\uc18c\uc5d0 volatile \ud558\uac8c \uc561\uc138\uc2a4")),(0,r.kt)("h3",{id:"\uc544\ud1a0\ubbf9\uc2a4\uc640-cas"},"\uc544\ud1a0\ubbf9\uc2a4\uc640 CAS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \uc5ec\ub7ec \ucc28\ub840 \uc7ac\uc2dc\ub3c4\ud558\ub294 \uacbd\uc6b0, \ud69f\uc218\ub9cc\ud07c \uc131\ub2a5\uc774 \uc548\uc88b\uc544\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ub77d\uacfc-\uc2a4\ud540\ub77d"},"\ub77d\uacfc \uc2a4\ud540\ub77d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9\ub41c \uc2a4\ub808\ub4dc\ub97c CPU\uc5d0 \ud65c\uc131 \uc0c1\ud0dc\ub85c \ub194\ub450\uace0 \uc544\ubb34 \uc77c\ub3c4 \uc2dc\ud0a4\uc9c0 \uc54a\uc740 \ucc44 \ub77d\uc744 \uc5bb\uc744\ub54c\uae4c\uc9c0 \uc7ac\uc2dc\ub3c4\ud558\ub294 \uac83\uc744 \uc2a4\ud540\ub77d\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc2a4\ud540\ub77d\uc5d0 \ub300\ud55c \ud575\uc2ec \uac1c\ub150\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ud558\uace0 \uc138\ud305\ud558\ub294 \uc791\uc5c5\uc740 \ubc18\ub4dc\uc2dc \uc544\ud1a0\ubbf9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud540\ub77d\uc5d0 \uacbd\ud569\uc774 \ubc1c\uc0dd\ud558\uba74 \ub300\uae30\uc911\uc778 \ud504\ub85c\uc138\uc11c\ub294 \ube7d\ube7d\ud55c \ub8e8\ud504\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3d9\uc2dc-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uc815\ub9ac"},"\ub3d9\uc2dc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc815\ub9ac"),(0,r.kt)("h3",{id:"javautilconcurrent-\ub77d"},(0,r.kt)("inlineCode",{parentName:"h3"},"java.util.concurrent")," \ub77d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," : \uae30\uc874 \ubc29\uc2dd\ub300\ub85c \ub77d\uc744 \ud68d\ub4dd\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744\ub54c\uae4c\uc9c0 \ube14\ub85c\ud0b9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newCondition()")," : \ub77d \uc8fc\uc704 \uc870\uac74\uc744 \uc124\uc815\ud574 \uc880 \ub354 \uc720\uc5f0\ud558\uac8c \ub77d\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tryLock()")," : \ub77d \ud68d\ub4dd\uc744 \uc704\ud574 \uc2dc\ub3c4\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unlock()")," : \ub77d\uc744 \ud574\uc81c\ud569\ub2c8\ub2e4")),(0,r.kt)("h3",{id:"\uc77d\uae30\uc4f0\uae30-\ub77d"},"\uc77d\uae30/\uc4f0\uae30 \ub77d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77d\uae30, \uc4f0\uae30 \uc791\uc5c5 \ud69f\uc218\uac00 \ub9ce\uc774 \ucc28\uc774\ub098\ubbc0\ub85c")),(0,r.kt)("h3",{id:"\uc138\ub9c8-\ud3ec\uc5b4"},"\uc138\ub9c8 \ud3ec\uc5b4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9c8\ud3ec\uc5b4\ub294 \ud480 \uc2a4\ub808\ub4dc\ub098 DB \uc811\uc18d \uac1d\uccb4 \ub4f1 \uc5ec\ub7ec \ub9ac\uc18c\uc2a4\uc758 \uc561\uc138\uc2a4\ub97c \ud5c8\uc6a9\ud558\ub294 \ub3c5\ud2b9\ud55c \uae30\uc220\uc744 \uc81c\uacf5")),(0,r.kt)("h3",{id:"\ub3d9\uc2dc-\uceec\ub809\uc158"},"\ub3d9\uc2dc \uceec\ub809\uc158"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConcurrentHashMap")," \ub4f1\uc758 \ub3d9\uc2dc \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ub798\uce58\uc640-\ubc30\ub9ac\uc5b4"},"\ub798\uce58\uc640 \ubc30\ub9ac\uc5b4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc4f0\ub808\ub4dc \uc138\ud2b8\uc758 \uc2e4\ud589\uc744 \uc81c\uc5b4\ud558\ub294 \uc720\uc6a9\ud55c \uae30\ubc95\uc785\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc2e4\ud589\uc790\uc640-\ud0dc\uc2a4\ud06c-\ucd94\uc0c1\ud654"},"\uc2e4\ud589\uc790\uc640 \ud0dc\uc2a4\ud06c \ucd94\uc0c1\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uc800\uc218\uc900\uc758 \uc2a4\ub808\ub4dc \ubb38\uc81c\ub97c \uc9c1\uc811 \ucc98\ub9ac\ud558\ub294 \uac83 \ubcf4\ub2e4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"java.util.concurrent")," \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc801\uc808\ud55c \ucd94\uc0c1\ud654 \ub3d9\uc2dc \ud504\ub85c\uadf8\ub798\ubc0d \uc9c0\uc6d0 \uae30\ub2a5\uc744 \uc4f0\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ube44\ub3d9\uae30-\uc2e4\ud589"},"\ube44\ub3d9\uae30 \uc2e4\ud589"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Executors\ub294 \ud5ec\ud37c \ud074\ub798\uc2a4\ub85c, \uc120\ud0dd\ud55c \ub85c\uc9c1\uc5d0 \ub530\ub77c\uc11c \uc11c\ube44\uc2a4 \ubc0f \uae30\ubc18 \uc2a4\ub808\ub4dc \ud480\uc744 \uc0dd\uc131\ud558\ub294 new","*"," \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \uc2dc\ub9ac\uc988\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubcf4\ud1b5 \uc774 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub85c \uc2e4\ud589\uc790 \uba54\uc11c\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"executorservice-\uc120\ud0dd\ud558\uae30"},"ExecutorService \uc120\ud0dd\ud558\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc62c\ubc14\ub978 ExecutorService\ub97c \uc120\ud0dd\ud558\uba74 \ube44\ub3d9\uae30 \ud504\ub85c\uc138\uc2a4\ub97c \uc801\uc808\ud788 \uc798 \uc81c\uc5b4\ud560 \uc218 \uc788\uace0, \ud480 \uc2a4\ub808\ub4dc \uac1c\uc218\ub97c \uc815\ud655\ud788 \uc798 \uc815\ud558\uba74 \uc131\ub2a5\uc774 \ub69c\ub837\uc774 \ud5a5\uc0c1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,r.kt)("h3",{id:"\ud3ec\ud06c\uc870\uc778"},"\ud3ec\ud06c/\uc870\uc778"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc704 \ubd84\ud560 \ud14c\uc2a4\ud06c\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \ube7c\uc557\uae30 \uc54c\uace0\ub9ac\uc998\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ucd5c\uc2e0-\uc790\ubc14-\ub3d9\uc2dc\uc131"},"\ucd5c\uc2e0 \uc790\ubc14 \ub3d9\uc2dc\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ub3d9\uc2dc\uc131\uc740 \uc2e4\ud589 \uc2dc\uac04\uc774 \uae34 \ube14\ub85c\ud0b9 \uce90\uc2a4\ud06c\ub97c \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc640 \ud568\uaed8 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ud658\uacbd\uc744 \uc5fc\ub450\ud558\uace0 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CPU \ub9ac\uc18c\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ubb38\uc81c\uac00 \ub354\uc6b1 \uc911\uc694\ud558\uac8c \ubd80\uac01\ub40d\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud604\ub300 \uc790\ubc14\ub294 \uc5b8\uc5b4 \ubc0f \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ub0b4\uc7a5\ub41c \ucd94\uc0c1\ud654\ub97c \uc774\uc6a9\ud574 \uc131\ub2a5\uc744 \ud06c\uac8c \ub192\uc77c \uc218 \uc788\ub294 \ud658\uacbd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc2a4\ud2b8\ub9bc\uacfc-\ubcd1\ub82c-\uc2a4\ud2b8\ub9bc"},"\uc2a4\ud2b8\ub9bc\uacfc \ubcd1\ub82c \uc2a4\ud2b8\ub9bc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 8\uc758 \uac00\uc7a5 \ud070 \ubcc0\uacbd \uc0ac\ud56d")),(0,r.kt)("h3",{id:"\ub77d-\ud504\ub9ac-\uae30\ubc95"},"\ub77d-\ud504\ub9ac \uae30\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9\uc774 \ucc98\ub9ac\uc728\uc5d0 \uc545\uc601\ud5a5\uc744 \ubbf8\uce58\uace0\uc131\ub2a5\uc744 \uc800\ud558\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uc804\uc81c\ud558\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CPU \ucf54\uc5b4\ub97c \ucc28\uc9c0\ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\ub960, \uc804\ub825 \uc18c\ube44 \uce21\uba74\uc5d0\uc11c \ube44\uc6a9\uc774 \ub4ed\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc561\ud130-\uae30\ubc18-\uae30\ubc95"},"\uc561\ud130 \uae30\ubc18 \uae30\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0dc\uc2a4\ud06c\ub97c \uc2a4\ub808\ub4dc \ud558\ub098\ubcf4\ub2e4 \ub354 \uc791\uac8c \ub098\ud0c0\ub0b4\ub824\ub294 \ub2e4\uc591\ud55c \uc811\uadfc \ubc29\uc2dd\uc774 \uace0\uc548\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc561\ud130\ub294 \uadf8 \uc790\uccb4\ub85c \uace0\uc720\ud55c \uc0c1\ud0dc\uc640 \ub85c\uc9c1\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub3d9\uc2dc\uc5d0 \ub2e4\ub978 \uc561\ud130\uc640 \uc18c\ud1b5\ud558\ub294 \uba54\uc77c\ubc15\uc2a4 \uccb4\uacc4\ub97c \uac16\ucd98, \uc791\uace0 \ub3c5\ub9bd\uc801\uc778 \ucc98\ub9ac \ub2e8\uc704\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc561\ud130\ub294 \ubcd1\ub82c \uc2dc\uc2a4\ud15c \ub0b4\ubd80\uc5d0\uc11c \ud558\ub098\uc758 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud615\uc131\ud558\uace0 \uadf8 \uc18d\uc5d0\uc11c \uac01\uc790 \ub098\ub984\ub300\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud568\uc73c\ub85c\uc368 \ud558\ubd80 \ub3d9\uc2dc \ubaa8\ub378\uc744 \uc644\uc804\ud788 \ucd94\uc0c1\ud654\ud55c \ubaa8\uc2b5\uc744 \ubc14\ub77c\ubd05\ub2c8\ub2e4")),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ub77d\ud0b9 \uccb4\uc81c\ubcf4\ub2e4 \uc544\uce74\ub97c \uc4f0\ub294 \uac83\uc774 \ub2e4\uc74c\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \ubaa8\ub378 \ub0b4\uc5d0\uc11c \uac00\ubcc0 \uc0c1\ud0dc\ub97c \ucea1\uc290\ud654\ud558\ub294 \uac74 \uc758\uc678\ub85c \uae4c\ub2e4\ub85c\uc6b4 \uc77c\uc785\ub2c8\ub2e4. \ud2b9\ud788, \uac1d\uccb4 \ub0b4\ubd80 \uc694\uc18c\ub97c \uac00\ub9ac\ud0a4\ub294 \ub808\ud37c\ub7f0\uc2a4\uac00 \uc5b8\uc81c\ub77c\ub3c4 \uc81c\uc5b4\uad8c \ubc16\uc73c\ub85c \ubc97\uc5b4\ub0a0 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub354\uc6b1\ub354 \uadf8\ub807\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c \ub77d\uc73c\ub85c \ubcf4\ud638\ud558\uba74 \ucc98\ub9ac\uc728\uc774 \ud06c\uac8c \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub77d\uc744 \uc4f0\uba74 \ub370\ub4dc\ub77d\uc744 \ube44\ub86f\ud55c \ubcc4\ubcc4 \ubb38\uc81c\uac00 \uc720\ubc1c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub9c8\uce58\uba70"},"\ub9c8\uce58\uba70."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2f1\uae00 \uc2a4\ub808\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub3d9\uc2dc\uc131 \uae30\ubc18\uc758 \uc124\uacc4 \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud560 \ub54c\ub294 \ub2e4\uc74c\uc744 \uace0\ub824\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc21c\uc11c\ub300\ub85c \uc8fd \ucc98\ub9ac\ud558\ub294 \uc131\ub2a5\uc744 \uc815\ud655\ud788 \uce21\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uacbd\uc744 \uc801\uc6a9\ud55c \ub2e4\uc74c \uc9c4\uc9dc \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub410\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud574\uc57c\ud569 \ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub294 \uc7ac\uc2e4\ud589\ud558\uae30 \uc26c\uc6cc\uc57c \ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc2dc\uc2a4\ud15c\uc774 \ucc98\ub9ac\ud558\ub294 \ub370\uc774\ud130 \ud06c\uae30\uac00 \ub2ec\ub77c\uc9c8 \uac00\ub2a5\uc131\uc774 \ud070 \uacbd\uc6b0 \uadf8\ub807\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uc720\ud639\uc740 \ud53c\ud574\uc57c\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcd1\ub82c \uc2a4\ud2b8\ub9bc\uc744 \uacf3\uacf3\uc5d0 \uac16\ub2e4\uc4f4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc218\ub3d9\uc73c\ub85c \ub77d\ud0b9\ud558\ub294 \ubcf5\uc7a1\ud55c \uc790\ub8cc \uad6c\uc870\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"java.util.concurrent\uc5d0 \uc774\ubbf8 \uc788\ub294 \uad6c\uc870\ub97c \ub2e4\uc2dc \ub9cc\ub4e0\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc774 \ubaa9\ud45c\ub97c \uc815\ud574\uc57c\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc \uceec\ub809\uc158\uc744 \uc774\uc6a9\ud574 \uc2a4\ub808\ub4dc \ud56b \uc131\ub2a5\uc744 \ub192\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud558\ubd80 \uc790\ub8cc \uad6c\uc870\ub97c \ucd5c\ub300\ud55c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ud615\ud0dc\ub85c \uc561\uc138\uc2a4\ub97c \uc124\uacc4\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\ubc18\uc5d0 \uac78\uccd0 \ub77d\ud0b9\uc744 \uc904\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\uae09\uc801 \uc2a4\ub808\ub4dc\ub97c \uc9c1\uc811 \ucc98\ub9ac\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud0dc\uc2a4\ud06c/\ube44\ub3d9\uae30\ub97c \uc801\uc808\ud788 \ucd94\uc0c1\ud654\ud569\ub2c8\ub2e4.")))))}o.isMDXComponent=!0}}]);