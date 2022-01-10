"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[7592],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return c}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(n),c=l,N=d["".concat(u,".").concat(c)]||d[c]||o[c]||r;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4321:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return o}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},u={unversionedId:"java/optimizing-java/ch2",id:"java/optimizing-java/ch2",isDocsHomePage:!1,title:"2. JVM \uc774\uc57c\uae30",description:"\uc778\ud130\ud504\ub9ac\ud305\uacfc \ud074\ub798\uc2a4\ub85c\ub529",source:"@site/docs/java/optimizing-java/ch2.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch2",permalink:"/til/docs/java/optimizing-java/ch2",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch2.md",version:"current",lastUpdatedAt:1641816078,formattedLastUpdatedAt:"1/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \uc131\ub2a5\uacfc \ucd5c\uc801\ud654",permalink:"/til/docs/java/optimizing-java/ch1"},next:{title:"3. \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc6b4\uc601\uccb4\uc81c",permalink:"/til/docs/java/optimizing-java/ch3"}},m=[{value:"\uc778\ud130\ud504\ub9ac\ud305\uacfc \ud074\ub798\uc2a4\ub85c\ub529",id:"\uc778\ud130\ud504\ub9ac\ud305\uacfc-\ud074\ub798\uc2a4\ub85c\ub529",children:[]},{value:"\ubc14\uc774\ud2b8\ucf54\ub4dc \uc2e4\ud589",id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\uc2e4\ud589",children:[]},{value:"\ud56b\uc2a4\ud31f \uc785\ubb38",id:"\ud56b\uc2a4\ud31f-\uc785\ubb38",children:[{value:"JIT \ucef4\ud30c\uc77c\uc774\ub780",id:"jit-\ucef4\ud30c\uc77c\uc774\ub780",children:[]}]},{value:"JVM \uba54\ubaa8\ub9ac \uad00\ub9ac",id:"jvm-\uba54\ubaa8\ub9ac-\uad00\ub9ac",children:[]},{value:"\uc2a4\ub808\ub529\uacfc \uc790\ubc14 \uba54\ubaa8\ub9ac \ubaa8\ub378(JMM)",id:"\uc2a4\ub808\ub529\uacfc-\uc790\ubc14-\uba54\ubaa8\ub9ac-\ubaa8\ub378jmm",children:[]},{value:"JVM \uad6c\ud604\uccb4 \uc885\ub958",id:"jvm-\uad6c\ud604\uccb4-\uc885\ub958",children:[{value:"JVM \ub77c\uc774\uc120\uc2a4",id:"jvm-\ub77c\uc774\uc120\uc2a4",children:[]}]},{value:"JVM \ubaa8\ub2c8\ud130\ub9c1\uacfc \ud234\ub9c1",id:"jvm-\ubaa8\ub2c8\ud130\ub9c1\uacfc-\ud234\ub9c1",children:[{value:"VisualVM",id:"visualvm",children:[]}]}],k={toc:m};function o(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uc778\ud130\ud504\ub9ac\ud305\uacfc-\ud074\ub798\uc2a4\ub85c\ub529"},"\uc778\ud130\ud504\ub9ac\ud305\uacfc \ud074\ub798\uc2a4\ub85c\ub529"),(0,r.kt)("p",null,"\uc790\ubc14 \uac00\uc0c1 \uba38\uc2e0\uc744 \uaddc\uc815\ud55c \uba85\uc138\uc11c\uc5d0 \ub530\ub974\uba74 JVM\uc740 \uc2a4\ud0dd \uae30\ubc18\uc758 \ud574\uc11d \uba38\uc2e0\uc785\ub2c8\ub2e4. \ub808\uc9c0\uc2a4\ud130\ub294 \uc5c6\uc9c0\ub9cc \uc77c\ubd80 \uacb0\uacfc\ub97c \uc2e4\ud589 \uc2a4\ud0dd\uc5d0 \ubcf4\uad00\ud558\uba70 \uc774 \uc2a4\ud0dd\uc758 \ub9e8 \uc704\uc5d0 \uc313\uc778 \uac12\uc744 \uac00\uc838\uc640 \uacc4\uc0b0\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM \uc778\ud130\ud504\ub9ac\ud130\uc758 \uae30\ubcf8 \ub85c\uc9c1\uc740 \ud3c9\uac00 \uc2a4\ud0dd\uc744 \uc774\uc6a9\ud574\uc11c \uc911\uac04 \uac12\ub4e4\uc744 \ub2f4\uc544\ub450\uace0 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \uc2e4\ud589\ub41c \uba85\ub839\uc5b4\uc640 \ub3c5\ub9bd\uc801\uc73c\ub85c \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\uc131\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc635\ucf54\ub4dc(opcode, \uba85\ub839 \ucf54\ub4dc)"),"\ub97c \ud558\ub098\uc529 \uc21c\uc11c\ub300\ub85c \ucc98\ub9ac\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"while \ub8e8\ud504\uc548\uc758 switch\ubb38")," \uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\ubc14\uc5d0 \ud2b9\uc815 \uba85\ub839\uc744 \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\ub294 \uc790\ubc14 ",(0,r.kt)("inlineCode",{parentName:"p"},"classloading")," \uba54\ucee4\ub2c8\uc998\uc774 \uad00\uc5ec\ud569\ub2c8\ub2e4. \uc790\ubc14 \ud504\ub85c\uc138\uc2a4\uac00 \uc0c8\ub85c \ucd08\uae30\ud654\ub418\uba74 \uc0ac\uc2ac\ucc98\ub7fc \uc904\uc9c0\uc5b4\uc11c \uc5f0\uacb0\ub41c \ud074\ub798\uc2a4\ub85c\ub354\uac00 \ucc28\ub840\ucc28\ub840 \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc790\ubc14 8 \uc774\uc804\uc5d0\ub294 jar \ud30c\uc77c\uc5d0\uc11c \uac00\uc838\uc624\uc9c0\ub9cc, \uc790\ubc14 9 \uc774\ud6c4\uc5d0\ub294 \ub7f0\ud0c0\uc784\uc774 \ubaa8\ub4c8\ud654\ub418\uace0 \ud074\ub798\uc2a4\ub85c\ub529 \uac1c\ub150 \uc790\uccb4\uac00 \ub9ce\uc774 \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubd80\ud2b8 \uc2a4\ud2b8\ub7a9 \ud074\ub798\uc2a4\ub85c\ub354\uc758 \uc8fc \uc784\ubb34\ub294 \ub2e4\ub978 \ud074\ub798\uc2a4\ub85c\ub354\uac00 \ub098\uba38\uc9c0 \uc2dc\uc2a4\ud15c\uc5d0 \ud544\uc694\ud55c \ud074\ub798\uc2a4\ub97c \ub85c\ub4dc\ud560 \uc218 \uc788\uac8c \ucd5c\uc18c\ud55c\uc758 \ud544\uc218 \ud074\ub798\uc2a4\ub9cc \ub85c\ub4dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub2e4\uc74c \ud655\uc7a5 \ud074\ub798\uc2a4\ub85c\ub354\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ubd80\ud2b8\uc2a4\ud2b8\ub7a9 \ud074\ub798\uc2a4\ub85c\ub354\ub97c \uc790\uae30 \ubd80\ubaa8\ub85c \uc124\uc815\ud558\uace0 \ud544\uc694\ud560 \ub54c \ud074\ub798\uc2a4\ub85c\ub529 \uc791\uc5c5\uc744 \ubd80\ubaa8\uc5d0\uac8c \ub118\uae41\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud074\ub798\uc2a4\ub85c\ub354\uac00 \uc0dd\uc131\ub418\uace0 \uc9c0\uc815\ub41c \ud074\ub798\uc2a4\ud328\uc2a4\uc5d0 \uc704\uce58\ud55c \uc720\uc800 \ud074\ub798\uc2a4\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc790\ubc14\ub294 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc911 \ucc98\uc74c \ubcf4\ub294 \uc0c8 \ud074\ub798\uc2a4\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub514\ud39c\ub358\uc2dc(\uc758\uc874\uccb4, dependency)"),"\uc5d0 \ub85c\ub4dc\ud569\ub2c8\ub2e4. \ud074\ub798\uc2a4\ub97c \ucc3e\uc9c0 \ubabb\ud55c \ud074\ub798\uc2a4\ub85c\ub354\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc790\uc2e0\uc758 \ubd80\ubaa8 \ud074\ub798\uc2a4\ub85c\ub354\uc5d0\uac8c \ub300\uc2e0 \ucc3e\uc544\ubcf4\ub294 \uc5ed\ud560\uc744 \ub118\uae41\ub2c8\ub2e4. \uc774\ub807\uac8c \uc62c\ub77c\uac00\uba74\uc11c \ubd80\ud2b8\uc2a4\ud2b8\ub7a9\ub3c4 \ub8e9\uc5c5\uc5d0 \uc2e4\ud328\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassNotFoundException")," \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4 \uc218\ub9bd \uc2dc \uc6b4\uc601 \ud658\uacbd\uacfc \ub3d9\uc77c\ud55c \ud074\ub798\uc2a4\ud328\uc2a4\ub85c \ucef4\ud30c\uc77c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcf4\ud1b5 \ud658\uacbd\uc5d0\uc11c \uc790\ubc14\ub294 \ud074\ub798\uc2a4\ub97c \ub85c\ub4dc\ud560 \ub54c \ub7f0\ud0c0\uc784 \ud658\uacbd\uc5d0\uc11c \ud574\ub2f9 \ud074\ub798\uc2a4\ub97c \ub098\ud0c0\ub0b4\ub294 Class \uac1d\uccb4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub611\uac19\uc740 \ud074\ub798\uc2a4\ub97c \uc0c1\uc774\ud55c \ud074\ub798\uc2a4\ub85c\ub354\uac00 \ub450 \ubc88 \ub85c\ub4dc\ud560 \uac00\ub2a5\uc131\ub3c4 \uc788\uc73c\ubbc0\ub85c \uc8fc\uc758\ud574\uc57c\ud569\ub2c8\ub2e4. \ud55c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ud074\ub798\uc2a4\ub294 \ud328\ud0a4\uc9c0\uba85\uc744 \ud3ec\ud568\ud55c \ud480 \ud074\ub798\uc2a4\uba85\uacfc \uc790\uc2e0\uc744 \ub85c\ub4dc\ud55c \ud074\ub798\uc2a4\ub85c\ub354, \ub450 \uac00\uc9c0 \uc815\ubcf4\ub85c \uc2dd\ubcc4\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubc14\uc774\ud2b8\ucf54\ub4dc-\uc2e4\ud589"},"\ubc14\uc774\ud2b8\ucf54\ub4dc \uc2e4\ud589"),(0,r.kt)("p",null,"\uc790\ubc14 \uc18c\uc2a4 \ucf54\ub4dc\ub294 \uc2e4\ud589\ub418\uae30\uae4c\uc9c0 \ub9ce\uc740 \ubcc0\ud658 \uacfc\uc815\uc744 \uac70\uce69\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ucef4\ud30c\uc77c\ub7ec ",(0,r.kt)("inlineCode",{parentName:"li"},"javac"),"\ub97c \uc774\uc6a9\ud574 \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ubc14\uc774\ud2b8\ucf54\ub4dc\ub85c \uac00\ub4dd\ucc2c .class \ud30c\uc77c\ub85c \ubc14\uafc9\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0\uc5d0 \ucd5c\uc801\ud654\ub97c \uac70\uc758 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8 \ucf54\ub4dc\ub294 \ud2b9\uc815 \ucef4\ud4e8\ud130 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ud2b9\uc815\ud558\uc9c0 \uc54a\uc740 \uc911\uac04\ud45c\ud604\ud615(Intermediate Representation)\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud4e8\ud130 \uc544\ud0a4\ud14d\ucc98\uc758 \uc9c0\ubc30\ub97c \ubc1b\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc774\uc2dd\uc131\uc774 \uc88b\uc73c\uba70, \uc790\ubc14 \uc5b8\uc5b4\uc5d0 \ub300\ud574 \ucd94\uc0c1\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"JVM\uc740 \ud074\ub798\uc2a4\ub97c \ub85c\ub4dc\ud560 \ub54c \uc62c\ubc14\ub978 \ud615\uc2dd\uc744 \uc900\uc218\ud558\uace0 \uc788\ub294\uc9c0 \ube60\uc9d0\uc5c6\uc774 \uac80\uc0ac\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8 \uc911, \ud638\ud658\ub418\uc9c0 \uc54a\ub294 \ubc84\uc804\uc758 \ud074\ub798\uc2a4 \ud30c\uc77c\uc744 \ub9cc\ub098\uba74 \ub7f0\ud0c0\uc784\uc2dc ",(0,r.kt)("inlineCode",{parentName:"li"},"UnsupportedClassVersionError")," \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\ud074\ub798\uc2a4 \ud30c\uc77c \ud574\ubd80\ub3c4\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ucef4\ud3ec\ub10c\ud2b8"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub9e4\uc9c1 \ub118\ubc84"),(0,r.kt)("td",{parentName:"tr",align:null},"0xCAFEBABE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4 \ud30c\uc77c \ud3ec\ub9f7 \ubc84\uc804"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4 \ud30c\uc77c\uc758 \uba54\uc774\uc800/\ub9c8\uc774\ub108 \ubc84\uc804")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc0c1\uc218 \ud480"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4 \uc0c1\uc218\ub4e4\uc774 \ubaa8\uc5ec \uc788\ub294 \uc704\uce58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc561\uc138\uc2a4 \ud50c\ub798\uadf8"),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd94\uc0c1 \ud074\ub798\uc2a4, \uc815\uc801 \ud074\ub798\uc2a4 \ub4f1 \ud074\ub798\uc2a4 \uc885\ub958\ub97c \ud45c\uc2dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"this \ud074\ub798\uc2a4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud604\uc7ac \ud074\ub798\uc2a4\uba85")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc288\ud37c\ud074\ub798\uc2a4"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc288\ud37c\ud074\ub798\uc2a4\uba85")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4\uac00 \uad6c\ud604\ud55c \ubaa8\ub4e0 \uc778\ud130\ud398\uc774\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4\uc5d0 \ub4e4\uc5b4 \uc788\ub294 \ubaa8\ub4e0 \ud544\ub4dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4\uc5d0 \ub4e4\uc5b4 \uc788\ub294 \ubaa8\ub4e0 \uba54\uc11c\ub4dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc18d\uc131"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub798\uc2a4\uac00 \uc9c0\ub2cc \ubaa8\ub4e0 \uc18d\uc131")))),(0,r.kt)("p",null,"\ubaa8\ub4e0 \ud074\ub798\uc2a4 \ud30c\uc77c\uc740 \ub9e4\uc9c1 \ub118\ubc84\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. (4\ubc14\uc774\ud2b8 16\uc9c4\uc218) \uadf8\ub2e4\uc74c 4\ubc14\uc774\ud2b8\ub294 \ud074\ub798\uc2a4 \ud30c\uc77c\uc744 \ucef4\ud30c\uc77c\ud560 \ub54c \uaf2d \ud544\uc694\ud55c \uba54\uc774\uc800/\ub9c8\uc774\ub108 \ubc84\uc804 \uc22b\uc790."),(0,r.kt)("p",null,"\uc561\uc138\uc2a4 \ud50c\ub798\uadf8\ub294 \ud074\ub798\uc2a4\uc5d0 \uc801\uc6a9\ud55c \uc218\uc815\uc790\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4. \ud50c\ub798\uadf8\uc758 \uccab\ubd80\ubd84\uc740 \uc77c\ubc18 \ud504\ub85c\ud37c\ud2f0\ub85c public \ud074\ub798\uc2a4\uc778\uc9c0, \uadf8 \ub2e4\uc74c\uc740 \uc0c1\uc18d\uc774 \uae08\uc9c0\ub41c final \ud074\ub798\uc2a4\uc778\uc9c0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ub610 \uc774 \ud074\ub798\uc2a4\ud30c\uc77c\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc778\uc9c0 \ucd94\uc0c1 \ud074\ub798\uc2a4\uc778\uc9c0, \ud50c\ub798\uadf8 \ub05d\ubd80\ubd84\uc740 \ud074\ub798\uc2a4 \ud30c\uc77c\uc774 \uc18c\uc2a4 \ucf54\ub4dc\uc5d0 \uc5c6\ub294 \ud569\uc131 \ud074\ub798\uc2a4\uc778\uc9c0, annotation\uc778\uc9c0, enum\uc778\uc9c0 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("p",null,"this \ud074\ub798\uc2a4, \uc288\ud37c\ud074\ub798\uc2a4, \uc778\ud130\ud398\uc774\uc2a4 \uc5d4\ud2b8\ub9ac\ub294 \ud074\ub798\uc2ba\uc5d0 \ud3ec\ud568\ub41c \ud0c0\uc785 \uacc4\uce35\uc744 \ub098\ud0c0\ub0b4\uba70 \uac01\uac01 \uc0c1\uc218 \ud480\uc744 \uac00\ub9ac\ud0a4\ub294 \uc778\ub371\uc2a4\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4. \ud544\ub4dc\uc640 \uba54\uc11c\ub4dc\ub294 \uc2dc\uadf8\ub2c8\ucc98 \ube44\uc2b7\ud55c \uad6c\uc870\ub97c \uc815\uc758\ud558\uace0 \uc5ec\uae30\uc5d0 \uc218\uc815\uc790\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4. \uc18d\uc131 \uc138\ud2b8\ub294 \ub354 \ubcf5\uc7a1\ud558\uace0 \ud06c\uae30\uac00 \uace0\uc815\ub418\uc9c0 \uc54a\uc740 \uad6c\uc870\ub97c \ub098\ud0c0\ub0b4\ub294\ub370 \uc4f0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"My Very Cute Animal Turns Savage In Full Moon Areas")," \ub85c \uc678\uc6b0\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Magic, Version, Constant, Access, This, Super, Interfaces, Fields, Methods, Attributes")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud56b\uc2a4\ud31f-\uc785\ubb38"},"\ud56b\uc2a4\ud31f \uc785\ubb38"),(0,r.kt)("p",null,"\uc790\ubc14\uc758 \uc694\uccb4\uc778 \ud56b\uc2a4\ud31f \uac00\uc0c1 \uba38\uc2e0\uc740 \uc131\ub2a5 \uad00\uc810\uc5d0\uc11c \uc790\ubc14\uc5d0 \ud070 \ubcc0\ud654\ub97c \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/118801397-edafc480-b8db-11eb-8d6a-b826aac04bda.png",alt:"image"})),(0,r.kt)("p",null,"\uc790\ubc14\ub294 \ud56b\uc2a4\ud31f\uc744 \ud1b5\ud574\uc11c \ud504\ub85c\uadf8\ub7a8\uc758 \ub7f0\ud0c0\uc784 \ub3d9\uc791\uc744 \ubd84\uc11d\ud558\uace0 \uc131\ub2a5\uc5d0 \uac00\uc7a5 \uc720\ub9ac\ud55c \ubc29\ud5a5\uc73c\ub85c \uc601\ub9ac\ud55c \ucd5c\uc801\ud654\ub97c \uc801\uc6a9\ud558\ub294 \uac00\uc0c1 \uba38\uc2e0\uc785\ub2c8\ub2e4. \ud56b\uc2a4\ud31f VM\uc758 \ubaa9\ud45c\ub294 \uac1c\ubc1c\uc790\uac00 \uc5b5\uc9c0\ub85c VM \ud2c0\uc5d0 \ub9de\uac8c \ud504\ub85c\uadf8\ub7a8\uc744 \uc6b1\uc5ec\ub123\ub294 \ub300\uc2e0, \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc790\ubc14 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uace0 \ubc14\ub78c\uc9c1\ud55c \uc124\uacc4 \uc6d0\ub9ac\ub97c \ub530\ub974\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"jit-\ucef4\ud30c\uc77c\uc774\ub780"},"JIT \ucef4\ud30c\uc77c\uc774\ub780"),(0,r.kt)("p",null,"\uc790\ubc14 \ud504\ub85c\uadf8\ub7a8\uc740 \ubc14\uc774\ud2b8\ucf54\ub4dc \uc778\ud130\ud504\ub9ac\ud131\uac00 \uac00\uc0c1\ud654\ud55c \uc2a4\ud0dd \uba38\uc2e0\uc5d0\uc11c \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc704\ud574\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\ud56b\uc2a4\ud31f\uc740 \ud504\ub85c\uadf8\ub7a8 \ub2e8\uc704(\uba54\uc11c\ub4dc\uc640 \ub8e8\ud504)\ub97c \uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ubc14\uc774\ud2b8\ucf54\ub4dc\uc5d0\uc11c \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c")," \ud569\ub2c8\ub2e4. \uc774\uac00 \ubc14\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"JIT(Just In Time) \ucef4\ud30c\uc77c"),"\uc774\ub77c\uace0 \ud558\ub294 \uae30\uc220\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ubaa8\ub4dc\ub85c \uc2e4\ud589\ud558\ub294 \ub3d9\uc548 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud558\uba74\uc11c \uac00\uc7a5 \uc790\uc8fc \uc2e4\ud589\ub418\ub294 \ucf54\ub4dc \ud30c\ud2b8\ub97c \ubc1c\uacac\ud574\uc11c JIT \ucef4\ud30c\uc77c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ubd84\uc11d\uc744 \ud1b5\ud574 \ubbf8\ub9ac \ud504\ub85c\uadf8\ub798\ubc0d\ud55c \ucd94\uc801 \uc815\ubcf4\ub97c \ucde8\ud569\ud574\uc11c \ub354 \uc815\uad50\ud558\uac8c \ucd5c\uc801\ud654\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"JIT \ubc29\uc2dd\uc73c\ub85c \ucef4\ud30c\uc77c\ud558\uba74 \uc5ec\ub7ec\ubaa8\ub85c \uc774\uc810\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \ud574\uc11d \ub2e8\uacc4\uc5d0\uc11c \uc218\uc9d1\ud55c \ucd94\uc801 \uc815\ubcf4\ub97c \uadfc\uac70\ub85c \ucd5c\uc801\ud654\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud669\ubcc4\ub85c \uc218\uc9d1\ud55c \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \ud1a0\ub300\ub85c \ud56b\uc2a4\ud31f\uc774 \uc62c\ubc14\ub978 \ubc29\ud669\uc73c\ub85c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc790\ubc14\ucc98\ub7fc \ud504\ub85c\ud544 \uae30\ubc18 \ucd5c\uc801\ud654(PGO, Profile-guided optimization)\uc744 \uc751\uc6a9\ud558\ub294 \ud658\uacbd\uc5d0\uc11c \ub300\ubd80\ubd84\uc758 AOT \ucef4\ud30c\uc77c\ub7ec(Ahead-Of Time Compile) \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ubd88\uac00\ub2a5\ud55c \ubc29\uc2dd\uc73c\ub85c \ub7f0\ud0c0\uc784 \uc815\ubcf4\ub97c \ud65c\uc6a9\ud560 \uc5ec\uc9c0\uac00 \uc788\uc73c\uba70, \ub3d9\uc801 \uc778\ub77c\uc774\ub2dd(dynamic inlining) \ub610\ub294 \uac00\uc0c1 \ud638\ucd9c(virtual call) \ub4f1\uc73c\ub85c \uc131\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud56b\uc2a4\ud31f VM\uc740 \uc2dc\ub3d9\uc2dc CPU \ud0c0\uc785\uc744 \uc815\ud655\ud558\uac8c \uac10\uc9c0\ud574 \uac00\ub2a5\ud558\uba74 \ud2b9\uc815 \ud504\ub85c\uc138\uc11c\uc758 \uae30\ub2a5\uc5d0 \ub9de\uac8c \ucd5c\uc801\ud654\ub97c \uc801\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM \uc778\ud2b8\ub9b0\uc9c1(intrinsics, \ub0b4\uc7a5 \ud568\uc218)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc11c \uae30\ub2a5\uc744 \uc815\ubc00\ud558\uac8c \uac10\uc9c0\ud558\ub294 \uae30\ubc95")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jvm-\uba54\ubaa8\ub9ac-\uad00\ub9ac"},"JVM \uba54\ubaa8\ub9ac \uad00\ub9ac"),(0,r.kt)("p",null,"C, C++ \ub294 \uac1c\ubc1c\uc790\uac00 \uba54\ubaa8\ub9ac \ud560\ub2f9/\ud574\uc81c \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c \ud655\uc815\uc801\uc778 \uc131\ub2a5\uacfc \ub9ac\uc18c\uc2a4 \uad00\ub828 \uc791\uc5c5\uc744 \uacb0\ubd80\uc2dc\ud0ac \uc218 \uc788\ub294 \uc7a5\uc810\uc774 \uc788\uc73c\ub098 \ub9c9\ub300\ud55c \ucc45\uc784\uc774 \uc218\ubc18\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\ubc14\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uac00\ube44\uc9c0 \uc218\uc9d1(Garbage Collection)")," \uc774\ub77c\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uc774\uc6a9\ud574 \ud799 \uba54\ubaa8\ub9ac\ub97c \uc790\ub3d9 \uad00\ub9ac\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud574\uacb0\ud569\ub2c8\ub2e4. \uc989, \uac00\ube44\uc9c0 \uc218\uc9d1\uc740 JVM\uc774 \ub354 \ub9ce\uc740 \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud574\uc57c\ud560 \ub54c \ubd88\ud544\uc694\ud55c \uba54\ubaa8\ub9ac\ub97c \ud68c\uc218\ud558\uac70\ub098 \uc7ac\uc0ac\uc6a9\ud558\ub294 \ubd88\ud655\uc815\uc801\uc778 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc2a4\ub808\ub529\uacfc-\uc790\ubc14-\uba54\ubaa8\ub9ac-\ubaa8\ub378jmm"},"\uc2a4\ub808\ub529\uacfc \uc790\ubc14 \uba54\ubaa8\ub9ac \ubaa8\ub378(JMM)"),(0,r.kt)("p",null,"\uc790\ubc14\ub294 \uba40\ud2f0\uc2a4\ub808\ub4dc \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uae30\ubcf8 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \uc790\ubc14 \ud504\ub85c\uadf8\ub7a8\uc774 \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc774 \ubcf5\uc7a1\ud558\uace0 \uc131\ub2a5 \ubd84\uc11d\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uc8fc\ub85c JVM \uad6c\ud604\uccb4\uc5d0\uc11c \uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \uac01\uac01 \uc815\ud655\ud788 \ud558\ub098\uc758 \uc804\uc6a9 OS \uc2a4\ub808\ub4dc\uc5d0 \ub300\uc751\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\ubc14 \uba40\ud2f0\uc2a4\ub808\ub4dc \ubc29\uc2dd\uc740 \uc138 \uac00\uc9c0 \uc124\uacc4 \uc6d0\uce59\uc5d0 \uae30\ubc18\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ud504\ub85c\uc138\uc2a4\uc758 \ubaa8\ub4e0 \uc2a4\ub808\ub4dc\ub294 \uac00\ube44\uc9c0\uac00 \uc218\uc9d1\ub418\ub294 \ud558\ub098\uc758 \uacf5\uc6a9 \ud799\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud55c \uc2a4\ub808\ub4dc\uac00 \uc0dd\uc131\ud55c \uac1d\uccb4\ub294 \uadf8 \uac1d\uccb4\ub97c \ucc38\uc870\ud558\ub294 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \uac1d\uccb4\ub294 \ubcc0\uacbd\uac00\ub2a5\ud569\ub2c8\ub2e4. \uc989, \uac1d\uccb4 \ud544\ub4dc\uc5d0 \ud560\ub2f9\ub41c \uac12\uc740 \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc560\uc368 final \ud0a4\uc6cc\ub4dc\ub85c \ubd88\ubcc0\uc744 \ud45c\uc2dc\ud558\uc9c0 \uc54a\ub294 \ud55c \ubc14\ub014 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jvm-\uad6c\ud604\uccb4-\uc885\ub958"},"JVM \uad6c\ud604\uccb4 \uc885\ub958"),(0,r.kt)("p",null,"\uc624\ub77c\ud074\uc774 \uc81c\uc791\ud55c \ud56b\uc2a4\ud31f \uc774\uc678\uc5d0\ub3c4 \uc81c\uac01\uae30 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uad6c\ud604\ud55c \uc790\ubc14 \uad6c\ud604\uccb4\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenJDK"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uae30\uc900 \uad6c\ud604\uccb4(reference implementation)\ub97c \uc81c\uacf5\ud558\ub294 \ud2b9\ubcc4\ud55c \uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Oracle"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uc798\uc54c\ub824\uc9c4 \uad6c\ud604\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\uc624\ub77c\ud074 \uc0c1\uc6a9 \ub77c\uc774\uc120\uc2a4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zulu"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Azul \uc2dc\uc2a4\ud15c\uc774 \uc81c\uc791\ud55c \ubb34\ub8cc OpenJDK"))),(0,r.kt)("li",{parentName:"ul"},"IcedTea"),(0,r.kt)("li",{parentName:"ul"},"Zing"),(0,r.kt)("li",{parentName:"ul"},"J9"),(0,r.kt)("li",{parentName:"ul"},"Avian"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Android"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucd5c\ucd08\uc758 \uc548\ub4dc\ub85c\uc774\ub4dc\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc790\ubc14 \ud074\ub798\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\ud604\uccb4\uc640 \uad50\ucc28 \ucef4\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud588\uc74c.")))),(0,r.kt)("h3",{id:"jvm-\ub77c\uc774\uc120\uc2a4"},"JVM \ub77c\uc774\uc120\uc2a4"),(0,r.kt)("p",null,"JVM \uad6c\ud604\uccb4\ub294 \uac70\uc758 \ub2e4 \uc624\ud508 \uc18c\uc2a4\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc624\ub77c\ud074 \uc790\ubc14(\uc790\ubc14 9 \uc774\ud6c4) \ub77c\uc774\uc120\uc2a4 \uccb4\uacc4\ub294 \uc880 \ubcf5\uc7a1\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \uc774\ub97c \uc77c\uc885\uc758 \ucc98\ub9ac\ub97c \ud588\uae30 \ub54c\ubb38\uc5d0 \uac70\uc758 \ud070 \ucc28\uc774\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989, \uc624\ub77c\ud074 JDK\uc640 OpenJDK\ub294 \ub77c\uc774\uc5b8\uc2a4 \uc678\uc5d0\ub294 \uc544\ubb34\ub7f0 \ucc28\uc774\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \uc624\ub77c\ud074 \ub77c\uc774\uc120\uc2a4\ub294 \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \uc870\uac74\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud68c\uc0ac \ubc16\uc73c\ub85c \uc624\ub77c\ud074 \ubc14\uc774\ub108\ub9ac\ub97c(ex. \ub3c4\ucee4 \uc774\ubbf8\uc9c0) \uc7ac\ubc30\ud3ec \ud589\uc704\ub294 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc804 \ub3d9\uc758(\uc11c\ube44\uc2a4 \uc9c0\uc6d0 \uacc4\uc57d) \uc5c6\uc774 \uc624\ub77c\ud074 \ubc14\uc774\ub108\ub9ac\ub97c \ud568\ubd80\ub85c \ud328\uce58\ud558\uba74 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc989, JVM\uc744 \uc2e0\uc911\ud558\uac8c \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jvm-\ubaa8\ub2c8\ud130\ub9c1\uacfc-\ud234\ub9c1"},"JVM \ubaa8\ub2c8\ud130\ub9c1\uacfc \ud234\ub9c1"),(0,r.kt)("p",null,"JVM\uc740 \uc131\uc219\ud55c \uc2e4\ud589 \ud50c\ub7ab\ud3fc\uc774\uba70, \uc2e4\ud589 \uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 instrumentation, \ubaa8\ub2c8\ud130\ub9c1, \uad00\uce21\ud558\ub294 \ub2e4\uc591\ud55c \uae30\uc220\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uad00\ub9ac \ud655\uc7a5(JMX, Java Management Extensions)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JVM\uacfc \uadf8\uc704\uc758 \ub3d9\uc791\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc81c\uc5b4\ud558\uace0 \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \ud234"),(0,r.kt)("li",{parentName:"ul"},"JVM\uc744 \uad00\ub9ac\ud558\ub294 \uae30\ubcf8 \uc218\ub2e8"))),(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uc5d0\uc774\uc804\ud2b8(Java Agent)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uc5b8\uc5b4\ub85c \uc791\uc131\ub41c \ud234 \ucef4\ud3ec\ub10c\ud2b8"))),(0,r.kt)("li",{parentName:"ul"},"JVM \ud234 \uc778\ud130\ud398\uc774\uc2a4(JVMTI, JVM Tool Interface)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JVM\uc758 \ub124\uc774\ud2f0\ube0c \uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"JVM \uc774\ubca4\ud2b8\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uba70 \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e0 \ud1b5\uc2e0 \uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uc0ac\uc6a9\uc744 \uc548\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. (\uc704\ud5d8\ud569\ub2c8\ub2e4.)"))),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc11c\ube4c\ub9ac\ud2f0 \uc5d0\uc774\uc804\ud2b8(SA, Serviceability Agent)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uac1d\uccb4, \ud56b\uc2a4\ud31f \uc790\ub8cc \uad6c\uc870 \ubaa8\ub450 \ud45c\ucd9c \uac00\ub2a5\ud55c APi\uc640 \ud234\uc744 \ubaa8\uc544\ub193\uc740 \uac83"),(0,r.kt)("li",{parentName:"ul"},"JVM\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \ud544\uc694\uc5c6\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"visualvm"},"VisualVM"),(0,r.kt)("p",null,"VisualVM\uc740 \uc77c\uc885\uc758 \uc2dc\uac01\ud654 \ud234\uc785\ub2c8\ub2e4. JVM \uc5b4\ud0dc\uce58 \uba54\ucee4\ub2c8\uc998(attach mechanism, \uc790\ubc14 Attach API\ub97c \uc774\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.)\uc744 \uc774\uc6a9\ud574 \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\ub97c \uc2e4\uc2dc\uac04 \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \ub2e4\uc12f \uac00\uc9c0\uc758 \ud0ed\uc744 \uae30\ubcf8 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1c\uc694(Overview)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ud504\ub85c\uc138\uc2a4\uc5d0 \uad00\ud55c \uc694\uc57d \uc815\ubcf4"))),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130(Monitor)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CPU, \ud799 \uc0ac\uc6a9\ub7c9 \ub4f1 JVM\uc744 \uace0\uc218\uc804\uc5d0\uc11c \uc6d0\uaca9 \uce21\uc815\ud55c \uac12\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub85c\ub4dc/\uc5b8\ub85c\ub4dc\ub41c \ud074\ub798\uc2a4 \uac1c\uc218 \ubc0f \uc2e4\ud589 \uc911\uc778 \uc2a4\ub808\ub4dc \uac1c\uc218 \ud604\ud669 \ub4f1"))),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc(Thread)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac01 \uc2a4\ub808\ub4dc\uac00 \uc2dc\uac04\ub300 \ubcc4\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc0d8\ud50c\ub7ec \ubc0f \ud504\ub85c\ud30c\uc77c\ub7ec(Sample and Profile)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CPU \ubc0f \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub960\uc5d0 \uad00\ud55c \ub2e8\uc21c \uc0d8\ud50c\ub9c1 \uacb0\uacfc\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ryudung.tistory.com/26"},"\uc124\uce58\uc2dc \ucc38\uace0, Intellij\uc5d0 \uc124\uce58")))}o.isMDXComponent=!0}}]);