"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6078],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=o(n),d=r,s=k["".concat(p,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4586:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i={sidebar_position:14},u={unversionedId:"java/optimizing-java/ch14",id:"java/optimizing-java/ch14",isDocsHomePage:!1,title:"14. \uace0\uc131\ub2a5 \ub85c\uae45 \ubc0f \uba54\uc2dc\uc9d5",description:"\uc790\ubc14\ub294 C++ \uc5d0 \ube44\ud574 \uc5ec\ub7ec \uc7a5\ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch14.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch14",permalink:"/til/docs/java/optimizing-java/ch14",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch14.md",version:"current",lastUpdatedAt:1669969740,formattedLastUpdatedAt:"12/2/2022",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"13. \ud504\ub85c\ud30c\uc77c\ub9c1",permalink:"/til/docs/java/optimizing-java/ch13"},next:{title:"15. \uc790\ubc14 9\uc640\uc758 \ubbf8\ub798",permalink:"/til/docs/java/optimizing-java/ch15"}},p=[{value:"\ub85c\uae45",id:"\ub85c\uae45",children:[{value:"\ub85c\uae45 \ubca4\uce58\ub9c8\ud06c",id:"\ub85c\uae45-\ubca4\uce58\ub9c8\ud06c",children:[]}]},{value:"\uc131\ub2a5\uc5d0 \uc601\ud5a5\uc774 \uc801\uc740 \ub85c\uac70 \uc124\uacc4\ud558\uae30",id:"\uc131\ub2a5\uc5d0-\uc601\ud5a5\uc774-\uc801\uc740-\ub85c\uac70-\uc124\uacc4\ud558\uae30",children:[]},{value:"\ub9ac\uc5bc \ub85c\uc9c1 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud574\uc11c \uc9c0\uc5f0 \uc904\uc774\uae30",id:"\ub9ac\uc5bc-\ub85c\uc9c1-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\ud1b5\ud574\uc11c-\uc9c0\uc5f0-\uc904\uc774\uae30",children:[{value:"\uc544\uadf8\ub85c\ub098",id:"\uc544\uadf8\ub85c\ub098",children:[]},{value:"\ub2e8\uc21c \ubc14\uc774\ub108\ub9ac \uc778\ucf54\ub529",id:"\ub2e8\uc21c-\ubc14\uc774\ub108\ub9ac-\uc778\ucf54\ub529",children:[]},{value:"\uc5d0\uc5b4\ub860",id:"\uc5d0\uc5b4\ub860",children:[]},{value:"\uc5d0\uc5b4\ub860\uc758 \uc124\uacc4 \uac1c\ub150",id:"\uc5d0\uc5b4\ub860\uc758-\uc124\uacc4-\uac1c\ub150",children:[]}]}],o={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc790\ubc14\ub294 C++ \uc5d0 \ube44\ud574 \uc5ec\ub7ec \uc7a5\ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc7a5\uc810 : \uac1c\ubc1c\uc790\uac00 \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \uc800\uc218\uc900 \uad00\uc2ec\uc0ac\ub97c \uc904\uc784\uc73c\ub85c\uc11c \uc0dd\uc0b0\uc131\uc744 \ub192\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810 : \uc800\uc218\uc900 \uc81c\uc5b4\ub97c \ud3ec\uae30\ud558\uace0 \uc131\ub2a5 \uc790\uccb4\ub97c \uc9c1\uc811 \ub2e4\ub8f0 \uc218 \uc5c6\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc790\ubc14 \ud50c\ub7ab\ud3fc\uc758 \ucca0\ud559\uc740 \uc800\uc218\uc900\uc758 \uc138\ubd80 \uad00\uc2ec\uc0ac\uc5d0\uc11c \ubc97\uc5b4\ub098\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc9c0\uc5f0\uc5d0 \ubbfc\uac10\ud55c \uace0\uc131\ub2a5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub2e4\ub8f0 \ub54c \uac1c\ubc1c\uc790\uac00 \uace0\ub824\ud574\uc57c\ud558\ub294 \uc774\uc288\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub85c\uae45"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9d5")),(0,l.kt)("h2",{id:"\ub85c\uae45"},"\ub85c\uae45"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ub85c\uae45\uc740 \ud06c\uac8c \uc2e0\uacbd\uc4f0\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ub85c\uac70\ub294 \uc2e4\uc81c \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc911\uc694\ud55c \ubd80\ubd84 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uace0\uc131\ub2a5 \ud658\uacbd\uc5d0\uc11c\ub294 \ucc98\ub9ac \uc815\ud655\ub3c4\uc640 \ub9ac\ud3ec\ud305\uc774 \uc18d\ub3c4 \ub9cc\ud07c \uc911\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ub85c\uae45-\ubca4\uce58\ub9c8\ud06c"},"\ub85c\uae45 \ubca4\uce58\ub9c8\ud06c"),(0,l.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ub9ce\uc774 \uc4f0\ub294 \ub85c\uac70\ub294 \ub2e4\uc74c\uacfc \uae49\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Logback"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Log4j"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.logging")),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c Logback\uc774 \uc131\ub2a5\uc774 \uc88b\uace0, \uc790\ubc14 \uc720\ud2f8 \ub85c\uac70\ub294 \uadf8\ub807\uac8c \uc88b\uc9c0\uc54a\uc2b5\ub2c8\ub2e4. Log4j \ud3ec\ub9f7\uc740 \uc804\ubc18\uc801\uc73c\ub85c \uac00\uc7a5 \uc77c\uad00\ub41c \uacb0\uacfc\ub97c \ubcf4\uc785\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc131\ub2a5\uc5d0-\uc601\ud5a5\uc774-\uc801\uc740-\ub85c\uac70-\uc124\uacc4\ud558\uae30"},"\uc131\ub2a5\uc5d0 \uc601\ud5a5\uc774 \uc801\uc740 \ub85c\uac70 \uc124\uacc4\ud558\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub85c\uae45\uc740 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud544\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc774\uc9c0\ub9cc, \uc800\uc9c0\uc5f0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub85c\uac70\ub294 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \uc131\ub2a5\uc5d0 \ubcd1\ubaa9 \ud604\uc0c1\uc744 \ucd08\ub798\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Log4j\ub97c SLF4J\ub85c \uac10\uc9dc\uba74 \ud37c\uc0ac\ub4dc\uac00 \ub9e4\uac1c\ubcc0\uc218\ub97c 2\uac1c\ub9cc \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb34\uc5d0, \ucf54\ub4dc \ubca0\uc774\uc2a4\ub97c \ub9ac\ud329\ud130\ub9c1\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\ub9ac\uc5bc-\ub85c\uc9c1-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\ud1b5\ud574\uc11c-\uc9c0\uc5f0-\uc904\uc774\uae30"},"\ub9ac\uc5bc \ub85c\uc9c1 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud574\uc11c \uc9c0\uc5f0 \uc904\uc774\uae30"),(0,l.kt)("p",null,"\ub9ac\uc5bc \ub85c\uc9c1\uc740 \uc800\uc218\uc900 \uc138\ubd80\uc758 \uc774\ud574\uac00 \uace1\uc131\ub2a5 \uc124\uacc4\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uadf8\ub85c\ub098 : \uc790\ubc14\uc6a9 \uace0\uc131\ub2a5 \uc790\ub8cc \uad6c\uc870 \ubc0f \uc720\ud2f8\ub9ac\ud2f0 \uba54\uc11c\ub4dc"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc21c \ubc14\uc774\ub108\ub9ac \uc778\ucf54\ub529 : \uace0\uc131\ub2a5 \uba54\uc2dc\uc9c0 \ucf54\ub371"),(0,l.kt)("li",{parentName:"ul"},"\uc5d0\uc5b4\ub860 : \ud6a8\uc728\uc801/\uc548\uc815\uc801\uc778 UDP \uc720\ub2c8\uce90\uc2a4\ud2b8, UDP \uba40\ud2f0\uce90\uc2a4\ud2b8, IPC \uba54\uc2dc\uc9c0 \uc804\uc1a1"),(0,l.kt)("li",{parentName:"ul"},"\uc544\ud2f0\uc624 : \ud0c4\ub825\uc801\uc778 \uace0\uc131\ub2a5 FIX \uac8c\uc774\ud2b8\uc6e8\uc774")),(0,l.kt)("h3",{id:"\uc544\uadf8\ub85c\ub098"},"\uc544\uadf8\ub85c\ub098"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc9c4\uc815\ud55c \uc800\uc9c0\uc5f0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\uc6a9 \uad6c\uc131 \uc694\uc18c\ub97c \ub2f4\uc544\ub193\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,l.kt)("li",{parentName:"ul"},"\uc544\uadf8\ub85c\ub098 \ubc84\ud37c")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/127325975-c120615f-f728-4cb6-8a5c-be4bc166b453.png",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uadf8\ub85c\ub098 \ub9ac\uc2a4\ud2b8, \ub9f5, \uc138\ud2b8"),(0,l.kt)("li",{parentName:"ul"},"\uc544\uadf8\ub85c\ub098 \ud050",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OneToOneConcurrentArrayQueue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ManyToManyConcurrentArrayQueue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ManyToOneConcurrentArrayQueue")))),(0,l.kt)("li",{parentName:"ul"},"\ub9c1 \ubc84\ud37c")),(0,l.kt)("h3",{id:"\ub2e8\uc21c-\ubc14\uc774\ub108\ub9ac-\uc778\ucf54\ub529"},"\ub2e8\uc21c \ubc14\uc774\ub108\ub9ac \uc778\ucf54\ub529"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uceac\ud53c-\ud504\ub9ac, \ub124\uc774\ud2f0\ube0c \ud0c0\uc785 \ub9e4\ud551"),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc0c1 \uc0c1\ud0dc \ud560\ub2f9"),(0,l.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub9ac\ubc0d/\ub2e8\uc5b4 \uc815\ub82c \uc561\uc138\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"SBE, \uba54\uc2dc \ub808\uc774\uc544\uc6c3\uc744 \uc989\uc815\ud55c XML \uc2a4\ud0a4\ub9c8 \ud30c\uc77c")),(0,l.kt)("h3",{id:"\uc5d0\uc5b4\ub860"},"\uc5d0\uc5b4\ub860"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\ud0a4\ud14d\ucc98 \uad6c\uc870")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/127326843-8d0f5c47-ba66-4c74-b257-59fe575ea30b.png",alt:"image"})),(0,l.kt)("h3",{id:"\uc5d0\uc5b4\ub860\uc758-\uc124\uacc4-\uac1c\ub150"},"\uc5d0\uc5b4\ub860\uc758 \uc124\uacc4 \uac1c\ub150"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uad6c\ub3c5\uc790"),(0,l.kt)("li",{parentName:"ul"},"\uc804\uc1a1 \uc694\uac74",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc815\ub82c : \uc11e\uc778 \uba54\uc2dc\uc9c0\ub97c \ub2e4\uc2dc \uc815\ub82c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2e0\ub8b0\uc131 : \uc720\uc2e4\ub41c \ub370\uc774\ud130\ub294 \uc7ac\uc694\uccad\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubc30\uc555 : \ud750\ub984 \uc81c\uc5b4 \ubc0f \ubc30\uc555 \uce21\uc815 \uc11c\ube44\uc2a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud63c\uc7a1 : \ub124\ud504\uc6cc\ud06c\uac00 \ud3ec\ud654\uc2dc \ud63c\uc7a1\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc911\ud654 : \uc804\uccb4 \uc131\ub2a5\uc744 \ub5a8\uc5b4\ud2b8\ub9ac\uc9c0 \uc54a\uace0 \ub2e8\uc77c \ucc44\ub110\uc5d0\uc11c \ub2e4\uc911 \uc815\ubcf4 \uc2a4\ud2b8\ub9bc\uc744 \ucc98\ub9ac\ud574\uc57c\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uc5f0 \ubc0f \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc6d0\uce59",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc815\uc0c1 \uc0c1\ud0dc\uc5d0\uc11c \uac00\ube44\uc9c0-\ud504\ub9ac \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \uacbd\ub85c\uc5d0 \uc2a4\ub9c8\ud2b8 \ubc30\uce6d \uc801\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc \uacbd\ub85c\uc758 \ub77d-\ud504\ub9ac \uc54c\uace0\ub9ac\uc99d"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \uacbd\ub85c\uc758 \ub17c\ube14\ub85c\ud0b9 I/O"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0 \uacbd\ub85c\uc758 \ube44\uc608\uc678 \ucf00\uc774\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ucd9c\ub825\uae30 \uc6d0\uce59\uc744 \uc801\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uacf5\uc720 \uc548\ud558\ub294 \uc0c1\ud0dc\uac00 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc791\ub3d9 \uc6d0\ub9ac",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud6a8\uc728\uc801\uc778 \uba54\uc2dc\uc9c0 \ucc98\ub9ac \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574 \uc2a4\ud0b5\ub9ac\uc2a4\ud2b8 \ub4f1\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/42582516/127328034-a58b7ac2-e28c-4f67-b848-081195cb0ab3.png",alt:"image"}))))))}c.isMDXComponent=!0}}]);