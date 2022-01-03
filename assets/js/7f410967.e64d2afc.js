"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1234],{3905:function(t,e,l){l.d(e,{Zo:function(){return o},kt:function(){return d}});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},o=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),m=c(l),d=a,s=m["".concat(p,".").concat(d)]||m[d]||k[d]||r;return l?n.createElement(s,i(i({ref:e},o),{},{components:l})):n.createElement(s,i({ref:e},o))}));function d(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<r;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8869:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i=["components"],u={sidebar_position:8},p={unversionedId:"java/optimizing-java/ch8",id:"java/optimizing-java/ch8",isDocsHomePage:!1,title:"8. GC \ub85c\uae45, \ubaa8\ub2c8\ud130\ub9c1, \ud29c\ub2dd, \ud234",description:"GC \ub85c\uae45 \ubc0f \ubaa8\ub2c8\ud130\ub9c1\uc5d0 \ub300\ud574\uc11c \ub2e4\ub8f9\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch8.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch8",permalink:"/til/docs/java/optimizing-java/ch8",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch8.md",version:"current",lastUpdatedAt:1641210374,formattedLastUpdatedAt:"1/3/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. \uac00\ube44\uc9c0 \uc218\uc9d1 \uace0\uae09",permalink:"/til/docs/java/optimizing-java/ch7"},next:{title:"9. JVM\uc758 \ucf54\ub4dc \uc2e4\ud589",permalink:"/til/docs/java/optimizing-java/ch9"}},c=[{value:"GC \ub85c\uae45 \uac1c\uc694",id:"gc-\ub85c\uae45-\uac1c\uc694",children:[{value:"GC \ub85c\uae45 \ucf1c\uae30",id:"gc-\ub85c\uae45-\ucf1c\uae30",children:[]},{value:"GC \ub85c\uadf8 vs JMX",id:"gc-\ub85c\uadf8-vs-jmx",children:[]},{value:"JMX\uc758 \ub2e8\uc810",id:"jmx\uc758-\ub2e8\uc810",children:[]},{value:"GC \ub85c\uadf8 \ub370\uc774\ud130\uc758 \uc7a5\uc810",id:"gc-\ub85c\uadf8-\ub370\uc774\ud130\uc758-\uc7a5\uc810",children:[]}]},{value:"\ub85c\uadf8 \ud30c\uc2f1 \ud234",id:"\ub85c\uadf8-\ud30c\uc2f1-\ud234",children:[{value:"\uc13c\uc12c",id:"\uc13c\uc12c",children:[]},{value:"GC Viewer",id:"gc-viewer",children:[]}]},{value:"GC \uae30\ubcf8 \ud29c\ub2dd",id:"gc-\uae30\ubcf8-\ud29c\ub2dd",children:[{value:"\ud560\ub2f9",id:"\ud560\ub2f9",children:[]},{value:"\uc911\ub2e8 \uc2dc\uac04",id:"\uc911\ub2e8-\uc2dc\uac04",children:[]},{value:"\uc218\uc9d1\uae30 \uc2a4\ub808\ub4dc\uc640 GC \ub8e8\ud2b8",id:"\uc218\uc9d1\uae30-\uc2a4\ub808\ub4dc\uc640-gc-\ub8e8\ud2b8",children:[]}]},{value:"Parallel GC \ud29c\ub2dd",id:"parallel-gc-\ud29c\ub2dd",children:[]},{value:"CMS \ud29c\ub2dd",id:"cms-\ud29c\ub2dd",children:[]},{value:"G1 \ud29c\ub2dd",id:"g1-\ud29c\ub2dd",children:[]},{value:"jHiccup",id:"jhiccup",children:[]}],o={toc:c};function k(t){var e=t.components,l=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GC \ub85c\uae45 \ubc0f \ubaa8\ub2c8\ud130\ub9c1\uc5d0 \ub300\ud574\uc11c \ub2e4\ub8f9\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"gc-\ub85c\uae45-\uac1c\uc694"},"GC \ub85c\uae45 \uac1c\uc694"),(0,r.kt)("p",null,"GC \ub85c\uadf8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud6cc\ub96d\ud55c \uc815\ubcf4"),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 \ub0b4\ub824\uac04 \uc6d0\uc778\uc758 \ub2e8\uc11c\ub97c \ucc3e\ub294 \ucf5c\ub4dc \ucf00\uc774\uc2a4 \ubd84\uc11d\uc744 \ud560 \ub54c \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ubaa8\ub4e0 \uc911\uc694\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ub2e4\uc74c \ub450 \uac00\uc9c0\ub97c \uc120\uc815\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GC \ub85c\uadf8\ub97c \uc0dd\uc131\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucd9c\ub825\uacfc\ub294 \ubcc4\ub3c4\ub85c \ud2b9\uc815 \ud30c\uc77c\uc5d0 GC \ub85c\uadf8\ub97c \ubcf4\uad00\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"GC \ub85c\uae45\uc740 \uac70\uc758 \uc624\ubc84\ud5e4\ub4dc\uac00 \uc5c6\uc73c\ubbc0\ub85c, \uc8fc\uc694 JVM \ud504\ub85c\uc138\uc2a4\ub294 \ud56d\uc0c1 \ub85c\uae45\uc744 \ucf1c\ub193\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"gc-\ub85c\uae45-\ucf1c\uae30"},"GC \ub85c\uae45 \ucf1c\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Xloggc:gc.log -XX:+PrintGCDetails -XX:+PrintTenuringDistribution-XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps\n")),(0,r.kt)("p",null,"\uc54c\uba74 \uc88b\uc740 \ud50c\ub798\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-Xloggc:gc.logGC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uc5d0 \ub85c\uae45\ud560 \ud30c\uc77c\uc744 \uc9c0\uc815\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+PrintGCDetailsGC "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc138\ubd80 \uc815\ubcf4\ub97c \ub85c\uae45\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+PrintTenuringDistribution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud234\ub9c1\uc5d0 \uaf2d \ud544\uc694\ud55c, \ubd80\uac00\uc801\uc778 GC \uc774\ubca4\ud2b8 \uc138\ubd80 \uc815\ubcf4\ub97c \ucd94\uac00\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+PrintGCTimeStampsGC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc\uac04\uc744 (VM \uc2dc\uc791 \uc774\ud6c4 \uacbd\uacfc\ud55c \uc2dc\uac04\uc744 \ucd08 \ub2e8\uc704\ub85c) \ucd9c\ub825\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+PrintGCDateStampsGC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc\uac04\uc744 (\ubcbd\uc2dc\uacc4 \uc2dc\uac04 \uae30\uc900\uc73c\ub85c) \ucd9c\ub825\ud55c\ub2e4")))),(0,r.kt)("h3",{id:"gc-\ub85c\uadf8-vs-jmx"},"GC \ub85c\uadf8 vs JMX"),(0,r.kt)("p",null,"VisualGC\ub294 JVM \ud799 \uc0c1\ud0dc\ub97c \uc2e4\uc2dc\uac04 \ud45c\uc2dc\ud558\ub294 \ud234\uc774\uba70 JMX(\uc790\ubc14 \uad00\ub9ac \ud655\uc7a5, Java Management eXtensions) \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574\uc11c JVM \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JMX\ub294 \uc131\ub2a5 \ub370\uc774\ud130\uc758 \uc6d0\ucc9c\uc73c\ub85c\uc11c \uc2a4\ud2b8\ub9ac\ubc0d \ub370\uc774\ud130\ub97c \uc989\uc2dc \uc81c\uacf5\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c\ub294 GC \ub85c\uadf8\ubcf4\ub2e4 \ub0ab\uc9c0\ub9cc, \uc694\uc998 \ud234\uc740 \uc77c\ubc18\uc801\uc73c\ub85c GC \ub85c\uadf8 \ub370\uc774\ud130\ub97c \uc2a4\ud2b8\ub9ac\ubc0d\ud558\ub294 API\ub97c \uc81c\uacf5\ud558\ubbc0\ub85c \ud070 \ucc28\uc774\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"jmx\uc758-\ub2e8\uc810"},"JMX\uc758 \ub2e8\uc810"),(0,r.kt)("p",null,"JMX\ub97c \uc774\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ub300\ubd80\ubd84 \ub7f0\ud0c0\uc784\uc744 \uc0d8\ud50c\ub9c1\ud574 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\ub9cc \ubb38\uc81c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\ube44\uc9c0 \uc218\uc9d1"),"\uc785\ub2c8\ub2e4. \uc989, \uac01 \uc218\uc9d1 \uc0ac\uc774\ud074 \uc804\ud6c4\uc758 \uba54\ubaa8\ub9ac \uc0c1\ud0dc\ub97c \uc54c \uc218\uac00 \uc5c6\uc73c\ubbc0\ub85c GC \ub370\uc774\ud130\ub97c \uae4a\uc774 \uc788\uac8c, \uc815\ud655\ud558\uac8c \ubd84\uc11d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"gc-\ub85c\uadf8-\ub370\uc774\ud130\uc758-\uc7a5\uc810"},"GC \ub85c\uadf8 \ub370\uc774\ud130\uc758 \uc7a5\uc810"),(0,r.kt)("p",null,"GC \ub85c\uadf8\uc5d0 \uc313\uc778 \uae30\ucd08 \ub370\uc774\ud130\ub294 \ud2b9\uc815 GC \uc774\ubca4\ud2b8\uc640 \uc5f0\uad00 \uc9c0\uc744 \uc218 \uc788\uc5b4\uc11c \ubaa8\ub4e0 \uc758\ubbf8 \uc788\ub294 \ubd84\uc11d \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\uc5b4\ub290 \uc9c0\uc810\uc5d0\uc11c \uc218\uc9d1 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uc9c0, \uc5b4\ub5bb\uac8c \ud29c\ub2dd\ud574\uc57c \uae0d\uc815\uc801\uc778 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc744\uc9c0\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub85c\uadf8-\ud30c\uc2f1-\ud234"},"\ub85c\uadf8 \ud30c\uc2f1 \ud234"),(0,r.kt)("p",null,"\uc720\uc9c0\ubcf4\uc218\uac00 \uc798\ub418\ub294 \uc0c1\uc6a9 \ud234\uacfc \uc624\ud508 \uc18c\uc2a4 \ud234\uc774 \uc608\uc2dc\ub85c \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc13c\uc12c"},"\uc13c\uc12c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jClarity\uc0ac\uac00 \uc81c\uc791\ud55c \uc0ac\uc6a9 \uba54\ubaa8\ub9ac \ubd84\uc11d\uae30"),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \ubaa8\ub2c8\ud130\ub9c1 \uc6a9\ub3c4"),(0,r.kt)("li",{parentName:"ul"},"GC \ub85c\uadf8 \ud30c\uc2f1, \uc815\ubcf4 \ucd94\ucd9c, \uc790\ub3d9 \ubd84\uc11d \uae30\ub2a5\uc744 \uc81c\uacf5")),(0,r.kt)("h3",{id:"gc-viewer"},"GC Viewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GC \ub85c\uadf8 \ud30c\uc2f1 \ubc0f \uadf8\ub798\ud504 \ucd9c\ub825 \ub4f1 \uae30\ubcf8 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac00\uc9c0\ub85c \ud615\ud0dc\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"gc-\uae30\ubcf8-\ud29c\ub2dd"},"GC \uae30\ubcf8 \ud29c\ub2dd"),(0,r.kt)("p",null,"\ud29c\ub2dd\uc744 \uc218\ud589\ud560 \ub54c\ub294 \ub2e4\uc74c 4\uac00\uc9c0 \uc8fc\uc694 \uc778\uc790\ub97c \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9"),(0,r.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \ubbfc\uac10\ub3c4"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \ucd94\uc774"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc218\uba85")),(0,r.kt)("p",null,"\ud29c\ub2dd \uc2dc GC \ud50c\ub798\uadf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud55c\ubc88\uc5d0 \ud55c \ud50c\ub798\uadf8\uc529 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud50c\ub798\uadf8\uac00 \ubb34\uc2a8 \uc791\uc6a9\uc744 \ud558\ub294\uc9c0 \uc219\uc9c0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubd80\uc218 \ud6a8\uacfc\ub97c \uc77c\uc73c\ud0a4\ub294 \ud50c\ub798\uadf8 \uc870\ud569\ub3c4 \uc788\uc74c\uc744 \uba85\uc2dc\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub2e4\uc74c\uc744 \ud655\uc778\ud568\uc744 \ud1b5\ud574\uc11c GC\uc778\uc9c0 \uc544\ub2cc\uc9c0\ub97c \ud310\ub2e8\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU \uc0ac\uc6a9\ub960\uc774 100%\uc5d0 \uac00\uae4c\uc6b4\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uc2dc\uac04(90% \uc774\uc0c1)\uc774 \uc720\uc800 \uacf5\uac04\uc5d0\uc11c \uc18c\ube44\ub418\ub294\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"GC \ub85c\uadf8\uac00 \uc313\uc774\uace0 \uc788\ub2e4\uba74 \ud604\uc7ac GC\uac00 \uc2e4\ud589 \uc911\uc774\ub77c\ub294 \uc99d\uac70\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ud560\ub2f9"},"\ud560\ub2f9"),(0,r.kt)("p",null,"\ud560\ub2f9\ub960 \ubd84\uc11d\uc740 \ud29c\ub2dd \ubc29\ubc95\ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc2e4\uc81c\ub85c \uac00\ube44\uc9c0 \uc218\uc9d1\uae30\ub97c \ud29c\ub2dd\ud558\uba74 \uc131\ub2a5\uc774 \uac1c\uc120\ub420\uc9c0 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud558\ub294\ub370 \uaf2d \ud544\uc694\ud55c \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud55c\uacc4\uce58\uac00 \ub192\uc744\uc218\ub85d \uc9c4\uc9dc \uc7a5\uc218\ud55c \uac1d\uccb4\ub97c \ub354 \ub9ce\uc774 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud55c\uacc4\uce58\uac00 \ub118 \ub0ae\uc73c\uba74 \ub2e8\uba85 \uac1d\uccb4\uac00 \uc2b9\uaca9\ub418\uc5b4 \ud14c\ub274\uc5b4\ub4dc\uc5d0 \uba54\ubaa8\ub9ac\uc555\uc774 \uac00\uc911\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc911\ub2e8-\uc2dc\uac04"},"\uc911\ub2e8 \uc2dc\uac04"),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \uc911\ub2e8 \uc2dc\uac04\uc5d0 \ub300\ud55c \uc778\uc9c0 \ud3b8\ud5a5\uc73c\ub85c \uc885\uc885 \uc2dc\ub2ec\ub9bd\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc740 100\ubc00\ub9ac\ucd08 \uc815\ub3c4\uc758 \uc911\ub2e8 \uc2dc\uac04\uc740 \ubb34\uc2dc\ud560 \ub9cc\ud569\ub2c8\ub2e4. \uadf8\ubcf4\ub2e4 \ud070 \uc2dc\uac04\uc758 \uacbd\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 3\uac1c\uc758 \ub300\uc5ed\uc73c\ub85c \ub098\ub204\uc5b4 \ud45c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\ucd08 \uc774\uc0c1 \uac78\ub824\ub3c4 \uad1c\ucc2e\uc740 \uacbd\uc6b0"),(0,r.kt)("li",{parentName:"ul"},"1\ucd08 ~ 100 \ubc00\ub9ac\ucd08 \uc815\ub3c4\ub294 \uad1c\ucc2e\uc740 \uacbd\uc6b0"),(0,r.kt)("li",{parentName:"ul"},"100\ubc00\ub9ac\ucd08\uae4c\uc9c0\ub294 \uad1c\ucc2e\uc740 \uacbd\uc6b0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/123543172-49495980-d788-11eb-8c66-b9b11db00b70.png",alt:"image"})),(0,r.kt)("h3",{id:"\uc218\uc9d1\uae30-\uc2a4\ub808\ub4dc\uc640-gc-\ub8e8\ud2b8"},"\uc218\uc9d1\uae30 \uc2a4\ub808\ub4dc\uc640 GC \ub8e8\ud2b8"),(0,r.kt)("p",null,"GC \ub8e8\ud2b8 \ud0d0\uc0c9 \uc2dc\uac04\uc740 \ub2e4\uc74c\uc758 \uc694\uc778 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc \uac1c\uc218"),(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uce90\uc2dc\uc5d0 \uc313\uc778 \ucef4\ud30c\uc77c\ub4dc \ucf54\ub4dc\ub7c9"),(0,r.kt)("li",{parentName:"ul"},"\ud799 \ud06c\uae30")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"parallel-gc-\ud29c\ub2dd"},"Parallel GC \ud29c\ub2dd"),(0,r.kt)("p",null,"\ubaa9\ud45c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud480 STW"),(0,r.kt)("li",{parentName:"ul"},"GC \ucc98\ub9ac\uc728\uc774 \ub192\uace0 \uacc4\uc0b0 \ube44\uc6a9\uc774 \uc309\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubd80\ubd84 \uc218\uc9d1\uc774 \uc77c\uc5b4\ub0a0 \uac00\ub2a5\uc131\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc911\ub2e8 \uc2dc\uac04\uc740 \ud799 \ud06c\uae30\uc5d0 \ube44\ub840\ud558\uc5ec \ub298\uc5b4\ub0a9\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"cms-\ud29c\ub2dd"},"CMS \ud29c\ub2dd"),(0,r.kt)("p",null,"CMS\ub294 \uae4c\ub2e4\ub86d\uae30\ub85c \uc18c\ubb38\ub09c \uc218\uc9d1\uae30 \uc785\ub2c8\ub2e4. \uc989, \ucd5c\uc0c1\uc758 \uc131\ub2a5\uc744 \uc5bb\uae30 \uc704\ud574\uc11c\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ubcf5\uc7a1\uc131\uacfc \ud2b8\ub808\uc774\ub4dc \uc624\ud504\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \ubb38\uc81c\uc810\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2a4\uc704\uce58 \ub9cc\uc9c0\uc791\uac70\ub9ac\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ubbfc\uac04 \ud29c\ub2dd"),(0,r.kt)("li",{parentName:"ul"},"\uc232\uc744 \ubabb \ubcf4\uace0 \ub098\ubb34\ub9cc \ubcf4\ub294 \uacbd\uc6b0")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"g1-\ud29c\ub2dd"},"G1 \ud29c\ub2dd"),(0,r.kt)("p",null,"\uc5d4\ub4dc \uc720\uc800\uac00 \ucd5c\ub300 \ud799 \ud06c\uae30\uc640 \ucd5c\ub300 GC \uc911\ub2e8 \uc2dc\uac04\uc744 \uac04\ub2e8\ud788 \uc124\uc815\ud558\uba74 \ub098\uba38\uc9c0\ub294 \uc218\uc9d1\uae30\uac00 \uc54c\uc544\uc11c \ucc98\ub9ac\ud558\uac8c \ud558\ub294 \uac83\uc774 G1 \ud29c\ub2dd\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jhiccup"},"jHiccup"),(0,r.kt)("p",null,"JVM\uc774 \uc5f0\uc18d\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \ubabb\ud55c \uc9c0\uc810\uc744 \ubc1c\uacac\ud574\uc90d\ub2c8\ub2e4. \uae43\ud5c8\ube0c\uc5d0\uc11c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);