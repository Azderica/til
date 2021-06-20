(self.webpackChunktil=self.webpackChunktil||[]).push([[1550],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(n),k=l,s=d["".concat(o,".").concat(k)]||d[k]||m[k]||a;return n?r.createElement(s,i(i({ref:e},p),{},{components:n})):r.createElement(s,i({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8126:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),i={},u={unversionedId:"java/optimizing-java/ch7",id:"java/optimizing-java/ch7",isDocsHomePage:!1,title:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uace0\uae09",description:"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch7.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch7",permalink:"/til/docs/java/optimizing-java/ch7",editUrl:"https://github.com/Azderica/til/edit/main/docs/java/optimizing-java/ch7.md",version:"current",lastUpdatedAt:1624198321,formattedLastUpdatedAt:"6/20/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uae30\ucd08",permalink:"/til/docs/java/optimizing-java/ch6"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/toby-spring/ch1"}},o=[{value:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30",id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30",children:[]},{value:"\ub3d9\uc2dc GC \uc774\ub860",id:"\ub3d9\uc2dc-gc-\uc774\ub860",children:[{value:"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8",id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8",children:[]}]},{value:"CMS",id:"cms",children:[]},{value:"G1",id:"g1",children:[]},{value:"\uc170\ub09c\ub3c4\uc544",id:"\uc170\ub09c\ub3c4\uc544",children:[]},{value:"C4(\uc544\uc904 \uc9d5)",id:"c4\uc544\uc904-\uc9d5",children:[]},{value:"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)",id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9",children:[]},{value:"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30",id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30",children:[]}],c={toc:o};function p(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640-\ud0c8\ucc29\ud615-\uc218\uc9d1\uae30"},"\ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc640 \ud0c8\ucc29\ud615 \uc218\uc9d1\uae30"),(0,a.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc74c \ud56d\ubaa9\uc744 \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc911\ub2e8 \uc2dc\uac04(\uc911\ub2e8 \uae38\uc774 \ub610\ub294 \uae30\uac04\uc774\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4.)")),(0,a.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728(\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub7f0\ud0c0\uc784 \ub300\ube44 GC \uc2dc\uac04)"),(0,a.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \ube48\ub3c4(\uc218\uc9d1\uae30 \ub54c\ubb38\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5bc\ub9c8\ub098 \uc790\uc8fc \uba48\ucd94\ub294\uc9c0)"),(0,a.kt)("li",{parentName:"ul"},"\ud68c\uc218 \ud6a8\uc728(GC \uc0ac\uc774\ud074 \ub2f9 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uac00\ube44\uc9c0\uac00 \uc218\uc9d1\ub418\ub294\uc9c0)"),(0,a.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \uc77c\uad00\uc131(\uc911\ub2e8 \uc2dc\uac04\uc774 \uace0\ub978\ud3b8\uc785\ub2c8\ub2e4.)")),(0,a.kt)("p",null,"\uc131\ub2a5 \uc5d4\uc9c0\ub2c8\uc5b4\ub294 \uc218\uc9d1\uae30 \uc120\uc815 \uc2dc \ub2e4\uc591\ud55c \ud2b8\ub808\uc774\ub4dc \uc624\ud504\uc640 \uad00\uc2ec\uc0ac\ub97c \uba74\ubc00\ud788 \uac80\ud1a0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub3d9\uc2dc-gc-\uc774\ub860"},"\ub3d9\uc2dc GC \uc774\ub860"),(0,a.kt)("p",null,"\uadf8\ub798\ud53d/\uc560\ub2c8\uba54\uc774\uc158 \ub514\uc2a4\ud50c\ub808\uc774 \uc2dc\uc2a4\ud15c\uc640 \uac19\uc740 \ud2b9\ud654\ub41c \uc2dc\uc2a4\ud15c\uc740 \ud504\ub808\uc784\ub960\uc774 \uac70\uc758 \uace0\uc815\ub418\uc5b4 \uc788\uc5b4\uc11c GC\ub97c \uaddc\uce59\uc801\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc801\uc808\ud55c \uacc4\uc0b0\uc774 \uc9c0\uc5f0\ub418\ub294 \uac83\uc740 \uc0ac\uc2e4 \uc0ac\uc18c\ud55c \ub2e8\uc810\uc5d0 \ubd88\uacfc\ud569\ub2c8\ub2e4. \uc815\uc791 \ud070 \ubb38\uc81c\ub294 \uac00\ube44\uc9c0 \uc218\uc9d1\uc774 \uc5b8\uc81c \ubc1c\uc0dd\ud560\uc9c0 \uc608\uc0c1\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ucd5c\uc2e0 GC\uc774\ub860\uc740 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud560\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"jvm-\uc138\uc774\ud504\ud3ec\uc778\ud2b8"},"JVM \uc138\uc774\ud504\ud3ec\uc778\ud2b8"),(0,a.kt)("p",null,"\ud56b\uc2a4\ud31f \ubcd1\ub82c \uc218\uc9d1\uae30\uc5d0\uc11c STW \uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \uc2e4\ud589\ud558\ub824\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub97c \ubaa8\ub450 \uc911\ub2e8\uc2dc\ucf1c\uc57c\ud569\ub2c8\ub2e4. JVM\uc740 \uc0ac\uc2e4 \uc644\uc804\ud788 \uc120\uc81c\uc801\uc778 \uba40\ud2f0\uc2a4\ub808\ub4dc \ud658\uacbd\uc774 \uc544\ub2d9\ub2c8\ub2e4. OS \ucf54\uc5b4 \uae30\ub2a5\ucc98\ub7fc JVM\ub3c4 \uc870\uc815 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 ",(0,a.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8(\uc548\uc804\uc810, safe point)"),"\ub77c\ub294 \ud2b9\ubcc4\ud55c \uc9c0\uc810\uc744 \ub461\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub294 \uc2a4\ub808\ub4dc\uc758 \ub0b4\ubd80 \uc790\ub8cc \uad6c\uc870\uac00 \ubcf4\uc774\ub294 \uc9c0\uc810\uc774\uba70, \uc774\ub54c \uc5b4\ub5a4 \uc791\uc5c5\uc744 \ud558\uae30 \uc704\ud574 \uc2a4\ub808\ub4dc\ub294 \uc7a0\uc2dc \uc911\ub2e8\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"JVM\uc740 \ub2e4\uc74c \ub450\uac00\uc9c0 \uaddc\uce59\uc5d0 \ub530\ub77c \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JVM\uc740 \uac15\uc81c\ub85c \uc2a4\ub808\ub4dc\ub97c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"JVM\uc740 \uc2a4\ub808\ub4dc\uac00 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uc5d0\uc11c \ubc97\uc5b4\ub098\uc9c0 \ubabb\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc694\uccad\uc744 \ubc1b\uc558\uc744 \ub54c \uadf8 \uc9c0\uc810\uc5d0\uc11c \uc2a4\ub808\ub4dc\uac00 \uc81c\uc5b4\uad8c\uc744 \ubc18\ub0a9\ud558\uac8c \ub9cc\ub4dc\ub294 \ucf54\ub4dc\uac00 VM \uc778\ud130\ud504\ub9ac\ud130 \uad6c\ud604\uccb4 \uc5b4\ub514\uc5d0 \uc787\uc5b4\uc57c\ud569\ub2c8\ub2e4. \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\ub85c \ubc14\ub00c\ub294 \uacbd\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JVM\uc774 \uc804\uc5ed\uc744 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8\ub97c \uc138\ud305\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ud3f4\ub9c1\uc744 \ud558\uba74\uc11c \uc774 \ud50c\ub798\uadf8\uac00 \uc138\ud305\ub410\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \uc77c\ub2e8 \uba48\ucdc4\ub2e4\uac00 \ub2e4\uc2dc \uae68\uc5b4\ub0a0 \ub54c\uae4c\uc9c0 \ub300\uae30\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc2dc\uac04 \ud50c\ub798\uadf8"),"\ub97c \uc138\ud305\ud558\uba74 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ub294 \ubc18\ub4dc\uc2dc \uba48\ucdb0\uc57c\ud569\ub2c8\ub2e4. \uc77c\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2c0\ub808\ub4dc\ub294 \uc774\ub7f0 \uc2dd\uc73c\ub85c \ud480\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\uc5d0\uc11c \ucc28\ub2e8\ub418\ub294 \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ul"},"JNI \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0, \uc2a4\ub808\ub4dc\uac00 \uaf2d \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uc0c1\ud0dc\uac00 \ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ub3c4\uc911(\uc778\ud130\ud504\ub9ac\ud2f0\ub4dc \ubaa8\ub4dc)"),(0,a.kt)("li",{parentName:"ul"},"OS\uac00 \uc778\ud130\ub7fd\ud2b8\ub97c \uac70\ub294 \uacbd\uc6b0")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"cms"},"CMS"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"g1"},"G1"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc170\ub09c\ub3c4\uc544"},"\uc170\ub09c\ub3c4\uc544"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"c4\uc544\uc904-\uc9d5"},"C4(\uc544\uc904 \uc9d5)"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ubc38\ub7f0\uc2a4\ud2b8ibm-j9"},"\ubc38\ub7f0\uc2a4\ud2b8(IBM J9)"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub808\uac70\uc2dc-\ud56b\uc2a4\ud31f-\uc218\uc9d1\uae30"},"\ub808\uac70\uc2dc \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30"))}p.isMDXComponent=!0}}]);