(self.webpackChunktil=self.webpackChunktil||[]).push([[3544],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return d},kt:function(){return m}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=k(l),m=a,h=c["".concat(p,".").concat(m)]||c[m]||o[m]||i;return l?n.createElement(h,r(r({ref:t},d),{},{components:l})):n.createElement(h,r({ref:t},d))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var k=2;k<i;k++)r[k]=l[k];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},1112:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=l(2122),a=l(9756),i=(l(7294),l(3905)),r={sidebar_position:4},u={unversionedId:"java/optimizing-java/ch4",id:"java/optimizing-java/ch4",isDocsHomePage:!1,title:"4. \uc131\ub2a5 \ud14c\uc2a4\ud2b8 \ud328\ud134 \ubc0f \uc548\ud2f0\ud328\ud134",description:"\ud574\ub2f9 \ucc55\ud130\uc5d0\uc11c\ub294 \uc131\ub2a5 \ud14c\uc2a4\ud2b8\uc5d0 \uc88b\uc9c0 \uc54a\uc740 \uc601\ud5a5\uc744 \ub07c\uce58\ub294 \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc548\ud2f0\ud328\ud134\uc744 \uc124\uba85\ud558\uace0, \uc774\uac00 \ubb38\uc81c\uac00 \ub418\uc9c0\uc54a\ub3c4\ub85d \ub9ac\ud329\ud130\ub9c1\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch4.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch4",permalink:"/til/docs/java/optimizing-java/ch4",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch4.md",version:"current",lastUpdatedAt:1651371930,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc6b4\uc601\uccb4\uc81c",permalink:"/til/docs/java/optimizing-java/ch3"},next:{title:"5. \ub9c8\uc774\ud06c\ub85c\ubca4\uce58\ub9c8\ud0b9\uacfc \ud1b5\uacc4",permalink:"/til/docs/java/optimizing-java/ch5"}},p=[{value:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8 \uc720\ud615",id:"\uc131\ub2a5-\ud14c\uc2a4\ud2b8-\uc720\ud615",children:[{value:"\uc9c0\uc5f0 \ud14c\uc2a4\ud2b8",id:"\uc9c0\uc5f0-\ud14c\uc2a4\ud2b8",children:[]},{value:"\ucc98\ub9ac\uc728 \ud14c\uc2a4\ud2b8",id:"\ucc98\ub9ac\uc728-\ud14c\uc2a4\ud2b8",children:[]},{value:"\ubd80\ud558 \ud14c\uc2a4\ud2b8",id:"\ubd80\ud558-\ud14c\uc2a4\ud2b8",children:[]},{value:"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8",id:"\uc2a4\ud2b8\ub808\uc2a4-\ud14c\uc2a4\ud2b8",children:[]},{value:"\ub0b4\uad6c\uc131 \ud14c\uc2a4\ud2b8",id:"\ub0b4\uad6c\uc131-\ud14c\uc2a4\ud2b8",children:[]},{value:"\uc6a9\ub7c9 \uacc4\ud68d \ud14c\uc2a4\ud2b8",id:"\uc6a9\ub7c9-\uacc4\ud68d-\ud14c\uc2a4\ud2b8",children:[]},{value:"\uc800\ud558 \ud14c\uc2a4\ud2b8",id:"\uc800\ud558-\ud14c\uc2a4\ud2b8",children:[]}]},{value:"\uae30\ubcf8 \ubca0\uc2a4\ud2b8 \uc5f0\uc2b5 \uc608\uc81c",id:"\uae30\ubcf8-\ubca0\uc2a4\ud2b8-\uc5f0\uc2b5-\uc608\uc81c",children:[{value:"\ud558\ud5a5\uc2dd \uc131\ub2a5",id:"\ud558\ud5a5\uc2dd-\uc131\ub2a5",children:[]},{value:"\ud14c\uc2a4\ud2b8 \ud658\uacbd \uad6c\ucd95",id:"\ud14c\uc2a4\ud2b8-\ud658\uacbd-\uad6c\ucd95",children:[]},{value:"\uc131\ub2a5 \uc694\uac74 \uc2dd\ubcc4",id:"\uc131\ub2a5-\uc694\uac74-\uc2dd\ubcc4",children:[]},{value:"\uc790\ubc14\uc5d0 \ud2b9\uc815\ud55c \uc774\uc288",id:"\uc790\ubc14\uc5d0-\ud2b9\uc815\ud55c-\uc774\uc288",children:[]},{value:"SDLC \uc77c\ubd80\ub85c \uc131\ub2a5 \ud14c\uc2a4\ud2b8 \uc218\ud589\ud558\uae30",id:"sdlc-\uc77c\ubd80\ub85c-\uc131\ub2a5-\ud14c\uc2a4\ud2b8-\uc218\ud589\ud558\uae30",children:[]}]},{value:"\uc131\ub2a5 \uc548\ud2f0\ud328\ud134 \uac1c\uc694",id:"\uc131\ub2a5-\uc548\ud2f0\ud328\ud134-\uac1c\uc694",children:[{value:"\uc9c0\ub8e8\ud568",id:"\uc9c0\ub8e8\ud568",children:[]},{value:"\uc774\ub825\uc11c \ubd80\ud480\ub9ac\uae30",id:"\uc774\ub825\uc11c-\ubd80\ud480\ub9ac\uae30",children:[]},{value:"\ub610\ub798 \uc555\ubc15",id:"\ub610\ub798-\uc555\ubc15",children:[]},{value:"\uc774\ud574 \ubd80\uc871",id:"\uc774\ud574-\ubd80\uc871",children:[]},{value:"\uc624\ud574\uc640 \uc788\uc9c0\ub3c4 \uc54a\uc740 \ubb38\uc81c",id:"\uc624\ud574\uc640-\uc788\uc9c0\ub3c4-\uc54a\uc740-\ubb38\uc81c",children:[]}]},{value:"\uc131\ub2a5 \uc548\ud2f0\ud328\ud134 \uce74\ud0c8\ub85c\uadf8",id:"\uc131\ub2a5-\uc548\ud2f0\ud328\ud134-\uce74\ud0c8\ub85c\uadf8",children:[]},{value:"\uc778\uc9c0 \ud3b8\ud5a5\uacfc \uc131\ub2a5 \ud14c\uc2a4\ud2b8",id:"\uc778\uc9c0-\ud3b8\ud5a5\uacfc-\uc131\ub2a5-\ud14c\uc2a4\ud2b8",children:[{value:"\ud658\uc6d0\uc8fc\uc758",id:"\ud658\uc6d0\uc8fc\uc758",children:[]},{value:"\ud655\uc99d \ud3b8\ud5a5",id:"\ud655\uc99d-\ud3b8\ud5a5",children:[]},{value:"\ud589\ub3d9 \ud3b8\ud5a5",id:"\ud589\ub3d9-\ud3b8\ud5a5",children:[]},{value:"\uc704\ud5d8 \ud3b8\ud5a5",id:"\uc704\ud5d8-\ud3b8\ud5a5",children:[]},{value:"\uc5d8\uc2a4\ubc84\uc2a4 \uc5ed\uc124",id:"\uc5d8\uc2a4\ubc84\uc2a4-\uc5ed\uc124",children:[]}]},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",children:[]}],k={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud574\ub2f9 \ucc55\ud130\uc5d0\uc11c\ub294 \uc131\ub2a5 \ud14c\uc2a4\ud2b8\uc5d0 \uc88b\uc9c0 \uc54a\uc740 \uc601\ud5a5\uc744 \ub07c\uce58\ub294 \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc548\ud2f0\ud328\ud134\uc744 \uc124\uba85\ud558\uace0, \uc774\uac00 \ubb38\uc81c\uac00 \ub418\uc9c0\uc54a\ub3c4\ub85d \ub9ac\ud329\ud130\ub9c1\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc131\ub2a5-\ud14c\uc2a4\ud2b8-\uc720\ud615"},"\uc131\ub2a5 \ud14c\uc2a4\ud2b8 \uc720\ud615"),(0,i.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uc544\ub798\uc758 \uc131\ub2a5 \ud14c\uc2a4\ud2b8\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc9c0\uc5f0 \ud14c\uc2a4\ud2b8(Latency test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc885\ub2e8 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uac78\ub9ac\ub294 \uc2dc\uac04\uc740"))),(0,i.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \ud14c\uc2a4\ud2b8(Throughput test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud604\uc7ac \uc2dc\uc2a4\ud15c\uc774 \ucc98\ub9ac \uac00\ub2a5\ud55c \ub3d9\uc2dc \ud2b8\ub79c\uc7ad\uc158 \uac1c\uc218\ub294"))),(0,i.kt)("li",{parentName:"ul"},"\ubd80\ud558 \ud14c\uc2a4\ud2b8(Load test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ubd80\ud558\ub97c \uc2dc\uc2a4\ud15c\uc774 \uac10\ub2f9\ud560 \uc218 \uc788\ub294\uac00"))),(0,i.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8(Stress test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774 \uc2dc\uc2a4\ud15c\uc758 \ud55c\uacc4\uc810\uc740 \uc5b4\ub514\uae4c\uc9c0\uc778\uac00"))),(0,i.kt)("li",{parentName:"ul"},"\ub0b4\uad6c\uc131 \ud14c\uc2a4\ud2b8(Endurance test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \uc7a5\uc2dc\uac04 \uc2e4\ud589\ud560 \uacbd\uc6b0, \uc131\ub2a5 \uc774\uc0c1 \uc99d\uc0c1\uc774 \ub098\ud0c0\ub098\ub294\uac00"))),(0,i.kt)("li",{parentName:"ul"},"\uc6a9\ub7c9 \uacc4\ud68d \ud14c\uc2a4\ud2b8(Capacity planning test)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\ub97c \ucd94\uac00\ud55c\ub9cc\ud07c \uc2dc\uc2a4\ud15c\uc774 \ud655\uc7a5\ub418\ub294\uac00"))),(0,i.kt)("li",{parentName:"ul"},"\uc800\ud558 \ud14c\uc2a4\ud2b8(Degradation)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 \ubd80\ubd84\uc801\uc73c\ub85c \uc2e4\ud328\ud560 \uacbd\uc6b0 \uc5b4\ub5a4\uc77c\uc774 \ubc8c\uc5b4\uc9c0\ub294\uac00")))),(0,i.kt)("h3",{id:"\uc9c0\uc5f0-\ud14c\uc2a4\ud2b8"},"\uc9c0\uc5f0 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \uc131\ub2a5 \ud14c\uc2a4\ud2b8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\uace0\uac1d\uc774 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc5bc\ub9c8\ub098 \uae30\ub2e4\ub824\uc57c\ud558\ub294\uc9c0 \uce21\uc815")),(0,i.kt)("li",{parentName:"ul"},"\uc81c\ub300\ub85c \uc815\uc758\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74, \ubaa9\uc801\uc744 \uc783\uc5b4\ubc84\ub9bd\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ucc98\ub9ac\uc728-\ud14c\uc2a4\ud2b8"},"\ucc98\ub9ac\uc728 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc9c0\uc5f0 \ud14c\uc2a4\ud2b8 \ub2e4\uc74c\uc758 \uc77c\ubc18\uc801\uc778 \uc131\ub2a5 \ud14c\uc2a4\ud2b8"),(0,i.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uce21\uba74\uc5d0\uc11c \ucc98\ub9ac\uc728\uc740 \uc9c0\uc5f0\uacfc \ub3d9\ub4f1\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"\uc9c0\uc5f0 \ubd84\ud3ec\uac00 \uac11\uc790\uae30 \ubcc0\ud558\ub294 \uc810\uc744 \ud55c\uacc4\uc810\uc774\ub77c\uace0 \ud558\uba70, \uc774\ub97c \ucd5c\ub300 \ucc98\ub9ac\uc728\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\uc2dc\uc2a4\ud15c \uc131\ub2a5\uc774 \uae09\ub77d\ud558\uae30\uc804 \ucd5c\ub300 \ucc98\ub9ac\uc728 \uc218\uce58\ub97c \uce21\uc815\ud558\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4."))),(0,i.kt)("h3",{id:"\ubd80\ud558-\ud14c\uc2a4\ud2b8"},"\ubd80\ud558 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 \uc774\uc815\ub3c4 \ubd80\ud558\ub294 \uacac\ub51c \uc218 \uc788\uc744\uae4c\uc5d0 y/n\uc744 \uacbd\uc815\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc2dc\uc7a5\uc774\ub098 \uc2e0\uaddc \uace0\uac1d \uc720\uce58 \ub54c, \ud2b8\ub798\ud53d\uc774 \uc0c1\ub2f9\ud560 \ub54c\ub97c \uc608\uce21\ud574\uc11c \uc9c4\ud589\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc2a4\ud2b8\ub808\uc2a4-\ud14c\uc2a4\ud2b8"},"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uc5ec\ub825\uc774 \uc5b4\ub290 \uc815\ub3c4\uc778\uc9c0 \uc54c\uc544\ubcf4\ub294 \uc218\ub2e8\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc77c\uc815\ud55c \uc218\uc900\uc758 \ud2b8\ub79c\uc7ad\uc158(\ud2b9\uc815 \ucc98\ub9ac\uc728)\uc744 \uc2dc\uc2a4\ud15c\uc5d0 \uacc4\uc18d \uac78\uc5b4\ub194\uc11c, \uc810\uc810 \ub354 \ub3d9\uc2dc \ud2b8\ub79c\uc7ad\uc158\uc774 \uc99d\uac00\ud558\uace0 \uc2dc\uc2a4\ud15c \uc131\ub2a5\uc774 \uc800\ud558\ub429\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\uce21\uc815\uac12\uc774 \ub098\ube60\uc9c0\ub294 \uc2dc\uc791\ud558\uae30 \uc9c1\uc804\uc758 \uac12\uc774 \ubc14\ub85c \ucd5c\ub300 \ucc98\ub9ac\uc728\uc785\ub2c8\ub2e4."))),(0,i.kt)("h3",{id:"\ub0b4\uad6c\uc131-\ud14c\uc2a4\ud2b8"},"\ub0b4\uad6c\uc131 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ub204\uc218, \uce90\uc2dc \uc624\uc5fc, \uba54\ubaa8\ub9ac \ub2e8\ud3b8\ud654 \ub4f1\uc740 \uacb0\uad6d CMF\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc740 \ub0b4\uad6c \ud14c\uc2a4\ud2b8\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud3c9\uade0 \uc0ac\uc6a9\ub960\ub85c \uc2dc\uc2a4\ud15c\uc5d0 \uc77c\uc815 \ubd80\ud558\ub97c \uacc4\uc18d \uc918\uc11c \ubaa8\ub2c8\ud130\ub9c1\ud558\ub2e4\uac00 \uac11\uc790\uae30 \ub9ac\uc18c\uc2a4\uac00 \uace0\uac08\ub418\uac70\ub098 \uc2dc\uc2a4\ud15c\uc774 \uae68\uc9c0\ub294 \uc9c0\uc810\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ube60\ub978 \uc751\ub2e4\uc744 \uc694\uad6c\ud558\ub294 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc6a9\ub7c9-\uacc4\ud68d-\ud14c\uc2a4\ud2b8"},"\uc6a9\ub7c9 \uacc4\ud68d \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub808\uc2a4 \ud14c\uc2a4\ud2b8\uc640 \uc5ec\ub7ec\ubaa8\ub85c \ube44\uc2b7\ud569\ub2c8\ub2e4. (\ud604\uc7ac\uc640 \ubbf8\ub798\uc758 \ucc28\uc774)"),(0,i.kt)("li",{parentName:"ul"},"\uc5c5\uadf8\ub808\uc774\ub4dc\ud55c \uc2dc\uc2a4\ud15c\uc774 \uc5b4\ub290 \uc815\ub3c4 \ubd80\ud558\ub97c \uac10\ub2f9\ud560 \uc218 \uc788\uc744\uc9c0 \uc54c\uc544\ubcf4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc608\uc815\ub41c \uacc4\ud68d\uc758 \uc77c\ubd80\ubd84\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc800\ud558-\ud14c\uc2a4\ud2b8"},"\uc800\ud558 \ud14c\uc2a4\ud2b8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ubd80\ubd84 \uc2e4\ud328 \ud14c\uc2a4\ud2b8\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc800\ud558\ud14c\uc2a4\ud2b8 \ub3c4\uc911\uc5d0 \ubd10\uc57c\ud558\ub294 \uce21\uc815\uac12\uc740 \ud2b8\ub79c\uc7ad\uc158 \uc9c0\uc5f0 \ubd84\ud3ec\uc640 \ucc98\ub9ac\uc728\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \ud558\uc704 \uc720\ud615\uc73c\ub85c \uce74\uc624\uc2a4 \uba4d\ud0a4\ub77c\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc9c4\uc9dc \ubcf5\uc6d0\uc131\uc774 \uc788\ub294 \uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c\ub294 \uc5b4\ub290 \ud55c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc798\ubabb\ub3fc\ub3c4 \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\uae4c\uc9c0 \uc5f0\uc1c4\uc801\uc73c\ub85c \ubb34\ub108\ub728\ub9ac\ub294 \uc77c\uc740 \uc5c6\uc5b4\uc57c\ud569\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c \ub77c\uc774\ube0c \ud504\ub798\uc138\uc2a4\ub97c \ub79c\ub364\uc73c\ub85c \uc8fd\uc5ec\ubcf4\uba74\uc11c \ud14c\uc2a4\ud2b8\ud558\uba70 \uac80\uc99d\ud569\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uae30\ubcf8-\ubca0\uc2a4\ud2b8-\uc5f0\uc2b5-\uc608\uc81c"},"\uae30\ubcf8 \ubca0\uc2a4\ud2b8 \uc5f0\uc2b5 \uc608\uc81c"),(0,i.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \uc138\uac00\uc9c0 \uae30\ubcf8 \uc6d0\uce59\uc5d0 \ub530\ub77c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub098\uc758 \uad00\uc2ec\uc0ac\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc2dd\ubcc4\ud558\uace0 \uadf8 \ucc99\uc815 \ubc29\ubc95\uc744 \uace0\ubbfc\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ucd5c\uc801\ud654\ud558\uae30 \uc6a9\uc774\ud55c \ubd80\ubd84\uc774 \uc544\ub2c8\ub77c, \uc911\uc694\ud55c \ubd80\ubd84\uc744 \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4. (\uc27d\uac8c \uce21\uc815 \uac00\ub2a5\ud55c \uc591\uc5d0 \ud070 \uc758\ubbf8\ub97c \ubd80\uc5ec\ud558\ub294 \uc2e4\uc218\ub97c \uc800\uc9c0\ub974\uba74 \uc548\ub429\ub2c8\ub2e4.)"),(0,i.kt)("li",{parentName:"ul"},"\uc911\uc694\ud55c \uad00\uc2ec\uc0ac\ub97c \uba3c\uc800 \ub2e4\ub8f9\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ud558\ud5a5\uc2dd-\uc131\ub2a5"},"\ud558\ud5a5\uc2dd \uc131\ub2a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc804\uccb4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5 \uc591\uc0c1\ubd80\ud130 \uba3c\uc800 \uc54c\uc544\ubcf4\ub294 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\ub2e4\ub9cc, \uc774\ub97c \uadf9\ub300\ud654\ud558\ub824\uba74 \ud14c\uc2a4\ud2b8\ud300\uc774 \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc744 \uad6c\ucd95\ud55c \ub2e4\uc74c \ubb34\uc5c7\uc744 \uce21\uc815\ud558\uace0 \ubb34\uc5c7\uc744 \ucd5c\uc801\ud654\ud574\uc57c\ud558\ub294\uc9c0, \uc5b4\ub5bb\uac8c \uac1c\ubc1c \uc8fc\uae30\uc5d0 \uc801\uc6a9\ud560\uc9c0\ub97c \uc774\ud574\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\ud658\uacbd-\uad6c\ucd95"},"\ud14c\uc2a4\ud2b8 \ud658\uacbd \uad6c\ucd95"),(0,i.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ud658\uacbd \uad6c\ucd95\uc740 \ud14c\uc2a4\ud2b8 \ud300\uc774 \uac00\uc7a5 \uba3c\uc800\ud574\uc57c\ud558\ub294 \uc77c\uc774\uba70, \uac00\uae09\uc801 \ubaa8\ub4e0 \uba74\uc5d0\uc11c \uc6b4\uc601\ud658\uacbd\uacfc \ub611\uac19\uc774 \ubcf5\uc81c\ud574\uc57c\ud569\ub2c8\ub2e4. (\uc6b4\uc601 \ud658\uacbd\uacfc \ub9ce\uc774 \ucc28\uc774\uac00 \ub098\ub294 \uc131\ub2a5 \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc5d0\uc11c\ub294 \uc4f8\ubaa8\uc788\ub294 \uacb0\uacfc\ub97c \ubabb \uc5bb\uc744 \ud655\ub960\uc774 \ub192\uc2b5\ub2c8\ub2e4... \ud604\uc2e4\uc740 \uc5b4\ub835\uc9c0\ub9cc)"),(0,i.kt)("h3",{id:"\uc131\ub2a5-\uc694\uac74-\uc2dd\ubcc4"},"\uc131\ub2a5 \uc694\uac74 \uc2dd\ubcc4"),(0,i.kt)("p",null,"\uc131\ub2a5\uc744 \ud3c9\uac00\ud558\ub294 \uc9c0\ud45c\ub294 \ucf54\ub4dc \uad00\uc810\uc5d0\uc11c \uc0dd\uac01\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \uc2dc\uc2a4\ud15c\uc744 \uc804\uccb4\uc801\uc73c\ub85c \ubc14\ub77c\ubcf4\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ucd5c\uc801\ud654\ud558\ub824\ub294 \ud575\uc2ec \uc9c0\ud45c\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc131\ub2a5 \ube44\uae30\ub2a5 \uc694\uac74(NonFunctional Requirement, NFR)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc790\ubc14\uc5d0-\ud2b9\uc815\ud55c-\uc774\uc288"},"\uc790\ubc14\uc5d0 \ud2b9\uc815\ud55c \uc774\uc288"),(0,i.kt)("p",null,"JVM\uc758 \uacbd\uc6b0\uc5d0\ub3c4 \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \uc694\uc18c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 JIT \ucef4\ud30c\uc77c\uc740 \uc911\uc694\ud55c \ubfd0\uc774\uba70, \ucd5c\uc2e0 JVM\uc740 \uc5b4\ub5a4 \uba54\uc11c\ub4dc\ub97c JIT \ucef4\ud30c\uc77c\ud574\uc11c \ucd5c\uc801\ud654\ud55c \uae30\uacc4\uc5b4\ub85c \ubcc0\ud658\ud560\uc9c0 \ubd84\uc11d\ud574\uc57c\ud569\ub2c8\ub2e4. JIT \ucef4\ud30c\uc77c \uc548\ud558\uae30\ub85c \uacb0\uc815\ub41c \uba54\uc11c\ub4dc\ub294 \ub2e4\uc74c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JIT \ucef4\ud30c\uc77c\ud560 \uc815\ub3c4\ub85c \uc790\uc8fc \uc2e4\ud589\ub418\ub294 \uba54\uc11c\ub4dc\uac00 \uc544\ub2d9\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uac00 \ub108\ubb34 \ud06c\uace0 \ubcf5\uc7a1\ud574\uc11c \ub3c4\uc800\ud788 \ucef4\ud30c\uc77c \ubd84\uc11d\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"sdlc-\uc77c\ubd80\ub85c-\uc131\ub2a5-\ud14c\uc2a4\ud2b8-\uc218\ud589\ud558\uae30"},"SDLC \uc77c\ubd80\ub85c \uc131\ub2a5 \ud14c\uc2a4\ud2b8 \uc218\ud589\ud558\uae30"),(0,i.kt)("p",null,"\uc218\uc900\uc774 \ub192\uc740 \ud300\uc77c\uc218\ub85d \uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub97c \uc804\uccb4 SDLC(Software Development LifeCycle, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc8fc\uae30)\uc758 \uc77c\ubd80\ub85c\uc11c \uc218\ud589\ud558\uba70 \ud2b9\ud788 \uc131\ub2a5 \ud68c\uadc0 \ud14c\uc2a4\ud2b8(Performance regression testing)\uc744 \uc0c1\uc2dc \uc218\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uc131\ub2a5-\uc548\ud2f0\ud328\ud134-\uac1c\uc694"},"\uc131\ub2a5 \uc548\ud2f0\ud328\ud134 \uac1c\uc694"),(0,i.kt)("p",null,"\uc548\ud2f0\ud328\ud134\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uc88b\uc9c0 \uc54a\ub294 \ud328\ud134\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc798\ubabb\ub41c \ud328\ud134\uc744 \ubd84\ub958\ud558\uace0 \uc720\ud615\ud654\ud568\uc744 \ud1b5\ud574\uc11c \ud300\uc6d0\ub4e4\uc774 \uc11c\ub85c \uc18c\ud1b5\ud558\uace0, \uc548\ud2f0\ud328\ud134\uc744 \uc81c\uac70\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud328\ud134 \uc5b8\uc5b4(pattern language)"),"\ub97c \uac1c\ubc1c\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \uc798\ubabb\ub41c \ud328\ud134\ub4e4\uc774 \uc0dd\uae30\ub294 \uc774\uc720\ub294 5\uac1c\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc9c0\ub8e8\ud568"},"\uc9c0\ub8e8\ud568"),(0,i.kt)("p",null,"\uc9c0\ub8e8\ud558\ub2e4\uace0 \ub9de\uc9c0 \uc54a\ub294 \uae30\uc220\uc744 \uc5b5\uc9c0\ub85c \ub07c\uc6cc\ub123\ub294 \uacbd\uc6b0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc774\ub825\uc11c-\ubd80\ud480\ub9ac\uae30"},"\uc774\ub825\uc11c \ubd80\ud480\ub9ac\uae30"),(0,i.kt)("p",null,"\uc774\ub825\uc11c\ub97c \ubd80\ud480\ub9ac\uae30 \uc704\ud574\uc11c, \ud504\ub85c\uc81d\ud2b8\ub97c \ubd88\ud544\uc694\ud55c \ubc29\ud5a5\uc73c\ub85c \uac08 \ub54c\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4.,"),(0,i.kt)("h3",{id:"\ub610\ub798-\uc555\ubc15"},"\ub610\ub798 \uc555\ubc15"),(0,i.kt)("p",null,"\ud300\uc6d0\ub4e4\uc774 \uae30\uc220\uc744 \uacb0\uc815\ud560 \ub54c \uad00\uc2ec\uc0ac\ub97c \ubd84\uba85\ud788 \ubc1d\ud788\uc9c0 \uc54a\uace0 \ucda9\ubd84\ud76c \ub17c\uc758 \uc5c6\uc774 \uc9c4\ud589\ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc774\ud574-\ubd80\uc871"},"\uc774\ud574 \ubd80\uc871"),(0,i.kt)("p",null,"\uc9c0\uae08 \uc0ac\uc6a9\ud558\ub294 \ud234\uc758 \uae30\ub2a5\ub3c4 \uc628\uc804\ud788 \ubaa8\ub974\ub294\ub370, \uc0c8\ub85c\uc6b4 \ud234\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7f0 \uac83\uc740 \uae30\uc220\ubcf5\uc7a1\ub3c4\ub97c \ub192\uc774\uae30 \ub54c\ubb38\uc5d0 \ubcf5\uc7a1\ub3c4\ub97c \ub192\uc775\ub294 \uac83\uacfc \ud604\uc7ac \ud234 \uc0ac\uc774\uc758 \uade0\ud615\uc744 \ub9de\ucd94\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc624\ud574\uc640-\uc788\uc9c0\ub3c4-\uc54a\uc740-\ubb38\uc81c"},"\uc624\ud574\uc640 \uc788\uc9c0\ub3c4 \uc54a\uc740 \ubb38\uc81c"),(0,i.kt)("p",null,"\ubb38\uc81c \uc790\uccb4\ub97c \uc81c\ub300\ub85c \uc774\ud574\ud558\uc9c0 \ubabb\ud55c\ucc44 \uc624\ub85c\uc9c0 \uae30\uc220\uc744 \uc774\uc6a9\ud574\uc11c \ubb38\uc81c\ub97c \ud574\uacb0\ud560\ub824\ub294 \uc0ac\ub78c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc131\uacf5\ud655\ub960\ub3c4 \uc88b\uc9c0 \uc54a\uc73c\uba70, \uc131\ub2a5 \uc218\uce58\ub97c \uce21\uc815\ub3c4 \uc548\ud588\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uc758 \ubcf8\uc9c8\uc744 \uc815\ud655\ud558\uac8c \uc774\ud574\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uc131\ub2a5-\uc548\ud2f0\ud328\ud134-\uce74\ud0c8\ub85c\uadf8"},"\uc131\ub2a5 \uc548\ud2f0\ud328\ud134 \uce74\ud0c8\ub85c\uadf8"),(0,i.kt)("p",null,"\uac16\uac00\uc9c0 \uc131\ub2a5 \uc548\ud2f0\ud328\ud134\uc744 \uc720\ud615\ubcc4\ub85c \uac04\ub7b5\ud788 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud654\ub824\ud568\uc5d0 \uc0ac\ub85c\uc7a1\ud788\ub294 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud568\uc5d0 \uc0ac\ub85c\uc7a1\ud788\ub294 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ud29c\ub2dd\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\ubbfc\uac04 \ud29c\ub2dd\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\uc548\ub418\uba74 \uc870\uc0c1 \ud0d3"),(0,i.kt)("li",{parentName:"ul"},"\uc232\uc744 \ubabb \ubcf4\uace0 \ub098\ubb34\ub9cc \ubcf4\ub294 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\ub0b4 \ub370\uc2a4\ud06c\ud1b1\uc774 UAT\uc778 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\uc6b4\uc601 \ub370\uc774\ud130\ucc98\ub7fc \ub9cc\ub4e4\uae30\ub294 \uc5b4\ub824\uc6cc\ub77c\uace0 \ub9d0\ud558\ub294 \uacbd\uc6b0")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uc778\uc9c0-\ud3b8\ud5a5\uacfc-\uc131\ub2a5-\ud14c\uc2a4\ud2b8"},"\uc778\uc9c0 \ud3b8\ud5a5\uacfc \uc131\ub2a5 \ud14c\uc2a4\ud2b8"),(0,i.kt)("h3",{id:"\ud658\uc6d0\uc8fc\uc758"},"\ud658\uc6d0\uc8fc\uc758"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \uc544\uc8fc \uc791\uc740 \uc870\uac01\uc73c\ub85c \ub098\ub204\uc5b4\uc11c \uadf8 \uad6c\uc131 \ud30c\ud2b8\ub97c \uc774\ud574\ud558\uba74 \uc804\uccb4 \uc2dc\uc2a4\ud15c\ub3c4 \ub2e4 \uc774\ud574\ud560 \uc218 \uc788\ub2e4\ub294 \ubd84\uc11d\uc8fc\uc758\uc801 \uc0ac\uace0\ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098, \ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ud655\uc99d-\ud3b8\ud5a5"},"\ud655\uc99d \ud3b8\ud5a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud655\uc99d \ud3b8\ud5a5\uc740 \uc131\ub2a5 \uba74\uc5d0\uc11c \uc911\ub300\ud55c \ubb38\uc81c\ub97c \ucd08\ub798\ud558\uac70\ub098 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc8fc\uad00\uc801\uc73c\ub85c \ubc14\ub77c\ubcf4\uac8c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \uac15\ub825\ud55c \ub3d9\uae30\ub85c \uc778\ud574\uc11c \uc9c4\ud589\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \uac70\uc2a4\ub974\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ud589\ub3d9-\ud3b8\ud5a5"},"\ud589\ub3d9 \ud3b8\ud5a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294 \uc0c1\ud669, \ub610\ub294 \uc544\uc608 \uc911\ub2e8\ub41c \uc2dc\uac04 \uc911\uc5d0 \ubc1c\ud604\ub418\ub294 \ud3b8\ud5a5\uc785\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc704\ud5d8-\ud3b8\ud5a5"},"\uc704\ud5d8 \ud3b8\ud5a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc704\ud5d8\uc744 \ud53c\ud558\uace0 \ubcc0\ud654\ub97c \uac70\ubd80\ud558\ub294 \ubcf8\uc131\uc5d0 \ub530\ub77c \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc5d8\uc2a4\ubc84\uc2a4-\uc5ed\uc124"},"\uc5d8\uc2a4\ubc84\uc2a4 \uc5ed\uc124"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc778\uac04\uc774 \ud655\ub960\uc744 \uc774\ud574\ud558\ub294 \ub370 \uc11c\ud22c\ub978\uc9c0\ub97c \uc798 \ubcf4\uc5ec\uc8fc\ub294 \uc0ac\ub840\uc785\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,i.kt)("p",null,"\uc131\ub2a5 \uacb0\uacfc\ub97c \ud3c9\uac00\ud560 \ub54c\ub294 \ub370\uc774\ud130\ub97c \uc801\uc808\ud55c \ubc29\ubc95\uc73c\ub85c \ucc98\ub9ac\ud558\uace0 \ube44\uacfc\ud559\uc801\uc774\uac70\ub098 \uc8fc\uad00\uc801\uc778 \uc0ac\uace0\uc5d0 \ube60\uc9c0\uc9c0 \uc54a\ub3c4\ub85d \uc870\uc2ec\ud574\uc57c\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);