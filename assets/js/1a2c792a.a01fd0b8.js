(self.webpackChunktil=self.webpackChunktil||[]).push([[9396],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return o},kt:function(){return c}});var a=e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var u=a.createContext({}),k=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},o=function(t){var n=k(t.components);return a.createElement(u.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=k(e),c=l,N=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return e?a.createElement(N,i(i({ref:n},o),{},{components:e})):a.createElement(N,i({ref:n},o))}));function c(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=e[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},2363:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return o}});var a=e(2122),l=e(9756),r=(e(7294),e(3905)),i={sidebar_position:10},p={unversionedId:"java/optimizing-java/ch10",id:"java/optimizing-java/ch10",isDocsHomePage:!1,title:"10. JIT \ucef4\ud30c\uc77c\uc758 \uc138\uacc4\ub85c",description:"JVM JIT\uc5d0 \ub300\ud574\uc11c \uc880 \ub354 \uc790\uc138\ud558\uac8c \ub4e4\uc5b4\uac11\u3134\ub514\u314f.",source:"@site/docs/java/optimizing-java/ch10.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch10",permalink:"/til/docs/java/optimizing-java/ch10",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch10.md",version:"current",lastUpdatedAt:1646173733,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. JVM\uc758 \ucf54\ub4dc \uc2e4\ud589",permalink:"/til/docs/java/optimizing-java/ch9"},next:{title:"11. \uc790\ubc14 \uc5b8\uc5b4\uc758 \uc131\ub2a5 \ud5a5\uc0c1 \uae30\ubc95",permalink:"/til/docs/java/optimizing-java/ch11"}},u=[{value:"JITWatch",id:"jitwatch",children:[{value:"\ub514\ubc84\uadf8 JVM\uacfc hsdis",id:"\ub514\ubc84\uadf8-jvm\uacfc-hsdis",children:[]}]},{value:"JIT \ucef4\ud30c\uc77c \uac1c\uc694",id:"jit-\ucef4\ud30c\uc77c-\uac1c\uc694",children:[]},{value:"\uc778\ub77c\uc774\ub2dd",id:"\uc778\ub77c\uc774\ub2dd",children:[{value:"\uc778\ub77c\uc774\ub2dd \uc81c\uc5b4",id:"\uc778\ub77c\uc774\ub2dd-\uc81c\uc5b4",children:[]},{value:"\uc778\ub77c\uc774\ub2dd \uc11c\ube0c\uc2dc\uc2a4\ud15c \ud29c\ub2dd",id:"\uc778\ub77c\uc774\ub2dd-\uc11c\ube0c\uc2dc\uc2a4\ud15c-\ud29c\ub2dd",children:[]}]},{value:"\ub8e8\ud504 \ud3bc\uce58\uae30",id:"\ub8e8\ud504-\ud3bc\uce58\uae30",children:[{value:"\ub8e8\ud504 \ud3bc\uce58\uae30 \uc815\ub9ac",id:"\ub8e8\ud504-\ud3bc\uce58\uae30-\uc815\ub9ac",children:[]}]},{value:"\ud0c8\ucd9c \ubd84\uc11d",id:"\ud0c8\ucd9c-\ubd84\uc11d",children:[{value:"\ud799 \ud560\ub2f9 \uc81c\uac70",id:"\ud799-\ud560\ub2f9-\uc81c\uac70",children:[]},{value:"\ub77d\uacfc \ud0c8\ucd9c \ubd84\uc11d",id:"\ub77d\uacfc-\ud0c8\ucd9c-\ubd84\uc11d",children:[]},{value:"\ud0c8\ucd9c \ubd84\uc11d\uc758 \ud55c\uacc4",id:"\ud0c8\ucd9c-\ubd84\uc11d\uc758-\ud55c\uacc4",children:[]}]},{value:"\ub2e8\ud615\uc131 \ub514\uc2a4\ud328\uce58",id:"\ub2e8\ud615\uc131-\ub514\uc2a4\ud328\uce58",children:[]},{value:"\uc778\ud2b8\ub9b0\uc9c1",id:"\uc778\ud2b8\ub9b0\uc9c1",children:[]},{value:"\uc628-\uc2a4\ud0dd \uce58\ud658",id:"\uc628-\uc2a4\ud0dd-\uce58\ud658",children:[]},{value:"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \ubcf5\uc2b5",id:"\uc138\uc774\ud504\ud3ec\uc778\ud2b8-\ubcf5\uc2b5",children:[]},{value:"\ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac \uba54\uc11c\ub4dc",id:"\ucf54\uc5b4-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uba54\uc11c\ub4dc",children:[{value:"\uc778\ub77c\uc774\ub2dd\ud558\uae30 \uc801\ud569\ud55c \uba54\uc11c\ub4dc \ud06c\uae30 \uc0c1\ud55c",id:"\uc778\ub77c\uc774\ub2dd\ud558\uae30-\uc801\ud569\ud55c-\uba54\uc11c\ub4dc-\ud06c\uae30-\uc0c1\ud55c",children:[]},{value:"\ucef4\ud30c\uc77c\ud558\uae30 \uc801\ud569\ud55c \uba54\uc11c\ub4dc \ud06c\uae30 \uc0c1\ud55c",id:"\ucef4\ud30c\uc77c\ud558\uae30-\uc801\ud569\ud55c-\uba54\uc11c\ub4dc-\ud06c\uae30-\uc0c1\ud55c",children:[]}]},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",children:[]}],k={toc:u};function o(t){var n=t.components,e=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JVM JIT\uc5d0 \ub300\ud574\uc11c \uc880 \ub354 \uc790\uc138\ud558\uac8c \ub4e4\uc5b4\uac11\u3134\ub514\u314f."),(0,r.kt)("h2",{id:"jitwatch"},"JITWatch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdoptOpenJDK/jitwatch/"},"JITWatch"))),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589 \uc911\uc5d0 \ud56b\uc2a4\ud31f\uc774 \uc2e4\uc81c\ub85c \ubc14\uc774\ud2b8\ucf54\ub4dc\uc5d0 \ubb34\uc2a8 \uc77c\uc744 \ud588\ub294\uc9c0 \uc774\ud574\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uad00\uc801\uc778 \ube44\uad50\uc5d0 \ud544\uc694\ud55c \uce21\uc815\uac12\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2e4\ud589 \uc911\uc778 \uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ud55c \ud56b\uc2a4\ud31f \ucef4\ud30c\uc77c \uc0c1\uc138 \ub85c\uadf8\ub97c \ud30c\uc2f1/\ubd84\uc11d\ud574\uc11c \uadf8 \uacb0\uacfc\ub97c \uc790\ubc14 FX GUI \ud615\ud0dc\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud50c\ub798\uadf8\ub97c \ucd94\uac00\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+UnlockDiagnosticVMOptions -XX:+TraceClassLoading -XX:+LogCompilation"))))),(0,r.kt)("h3",{id:"\ub514\ubc84\uadf8-jvm\uacfc-hsdis"},"\ub514\ubc84\uadf8 JVM\uacfc hsdis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub514\ubc84\uadf8 JVM\uc744 \ud1b5\ud574\uc11c JIT \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \ud1b5\uacc4\uce6d \ub4f1\uc758 \uc0c1\uc138 \ub514\ubc84\uae45 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jit-\ucef4\ud30c\uc77c-\uac1c\uc694"},"JIT \ucef4\ud30c\uc77c \uac1c\uc694"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VM\uc774 \ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uc218\uc9d1\ud558\ub294\uc9c0, \uc2e4\ud589 \ud504\ub85c\uadf8\ub7a8\uc5d0 \uc5b4\ub5a4 \ucd5c\uc801\ud654\ub97c \uc218\ud589\ud558\ub294\uc9c0 \uc798 \uc54c\uace0 \uc788\uc5b4\uc57c \ud234\uc5d0\uc11c \ucef4\ud30c\uc77c\ub4dc \ucf54\ub4dc\ub97c \ubcf4\uba74\uc11c \uc62c\ubc14\ub974\uac8c \ud574\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc740 PGO\ub97c \uc774\uc6a9\ud574 JIT \ucef4\ud30c\uc77c \uc5ec\ubd80\ub97c \ud310\ub2e8\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f JIT \ucef4\ud30c\uc77c\ub7ec\ub294 \ub2e4\uc591\ud55c \ucd5c\uc2e0 \ucef4\ud30c\uc77c\ub7ec \ucd5c\uc801\ud654 \uae30\ubc95\uc744 \ub3d9\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\ub77c\uc774\ub2dd"),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \ud3bc\uce58\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ud0c8\ucd9c \ubd84\uc11d"),(0,r.kt)("li",{parentName:"ul"},"\ub77d \uc0dd\ub7b5/\ud655\uc7a5"),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c\ud615 \ub514\uc2a4\ud328\uce58"),(0,r.kt)("li",{parentName:"ul"},"\uc778\ud2b8\ub9b0\uc9c1"),(0,r.kt)("li",{parentName:"ul"},"\uc628-\uc2a4\ud0dd \uce58\ud658")),(0,r.kt)("p",null,"\uc544\ub798\ub294 \uc774\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \ucd5c\uc801\ud654 \uae30\ubc95\uc740 \ub7f0\ud0c0\uc784 \uc815\ubcf4\uc640 \uc9c0\uc6d0 \uc5ec\ubd80\uc5d0 \ub530\ub77c \ub2e4\uc18c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc778\ub77c\uc774\ub2dd"},"\uc778\ub77c\uc774\ub2dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud638\ucd9c\ub41c \uba54\uc11c\ub4dc\uc758 \ud638\ucd9c\ud55c \uc9c0\uc810\uc5d0 \ubcf5\uc0ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uba54\uc11c\ub4dc \ud638\ucd9c \uc2dc \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ubc84\ud5e4\ub4dc\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc804\ub2ec\ud560 \ub9e4\uac1c\ubcc0\uc218 \uc138\ud305"),(0,r.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ud560 \uba54\uc11c\ub4dc\ub97c \uc815\ud655\ud558\uac8c \ub8e9\uc5c5"),(0,r.kt)("li",{parentName:"ul"},"\uc0c8 \ud638\ucd9c \ud504\ub808\uc784\uc5d0 \ub9de\ub294 \ub7f0\ud0c0\uc784 \uc790\ub8cc \uad6c\uc870(\uc9c0\uc5ed \ubcc0\uc218 \ubc0f \ud3c9\uac00 \uc2a4\ud0dd \ub4f1) \uc0dd\uc131"),(0,r.kt)("li",{parentName:"ul"},"\uc0c8 \uba54\uc11c\ub4dc\ub85c \uc81c\uc5b4\uad8c \uc774\uc1a1"),(0,r.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ubd80\uc5d0 \uacb0\uacfc \ubc18\ud658 (\uacb0\uacfc\uac12\uc774 \uc788\ub294 \uacbd\uc6b0)")),(0,r.kt)("p",null,"\uc778\ub77c\uc778\uc740 JIT \ucef4\ud30c\uc77c\ub7ec\uac00 \uc81c\uc77c \uba3c\uc800 \uc801\uc6a9\ud558\ub294 \ucd5c\uc801\ud654\ub77c\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uad00\ubb38 \ucd5c\uc801\ud654"),"\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4. \ub610\ud55c \ub2e4\ub978 \ucd5c\uc801\ud654 \ubc94\uc704\ub97c \ud655\uc7a5\uc2dc\ud0a4\ub294 \uc5ed\ud560\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0c8\ucd9c \ubd84\uc11d, \uc8fd\uc740 \ucf54\ub4dc \uc81c\uac70, \ub8e8\ud504 \ud3bc\uce58\uae30, \ub77d \uc0dd\ub7b5")),(0,r.kt)("h3",{id:"\uc778\ub77c\uc774\ub2dd-\uc81c\uc5b4"},"\uc778\ub77c\uc774\ub2dd \uc81c\uc5b4"),(0,r.kt)("p",null,"\ub54c\ub85c\ub294 VM \ucc28\uc6d0\uc5d0\uc11c \uc778\ub77c\uc774\ub2dd \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc5d0 \uc81c\ud55c\uc744 \uac78\uc5b4\uc57c\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JIT \ucef4\ud30c\uc77c\ub7ec\uac00 \uba54\uc11c\ub4dc\ub97c \ucd5c\uc801\ud654\ud558\ub294\ub370 \uc18c\ube44\ud558\ub294 \uc2dc\uac04"),(0,r.kt)("li",{parentName:"ul"},"\uc0dd\uc131\ub41c \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ud06c\uae30")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \ub2e4\uc74c \ud56d\ubaa9\uc744 \ub530\uc9c0\uba74\uc11c \uc5b4\ub5a4 \uba54\uc11c\ub4dc\ub97c \uc778\ub77c\uc774\ub2dd\ud560 \uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\ub77c\uc774\ub2dd\ud560 \uba54\uc11c\ub4dc\uc758 \ubc14\uc774\ud2b8\ucf54\ub4dc \ud06c\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac \ud638\ucd9c \uccb4\uc778\uc5d0\uc11c \uc778\ub77c\uc774\ub2dd\ud560 \uba54\uc11c\ub4dc\uc758 \uae4a\uc774"),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \ucef4\ud30c\uc77c\ud55c \ubc84\uc804\uc774 \ucf54\ub4dc \uce90\uc2dc\uc5d0\uc11c \ucc28\uc9c0\ud558\ub294 \uacf5\uac04")),(0,r.kt)("h3",{id:"\uc778\ub77c\uc774\ub2dd-\uc11c\ube0c\uc2dc\uc2a4\ud15c-\ud29c\ub2dd"},"\uc778\ub77c\uc774\ub2dd \uc11c\ube0c\uc2dc\uc2a4\ud15c \ud29c\ub2dd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uc2a4\uc704\uce58"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-XX:MaxInlineSize=<n>")),(0,r.kt)("td",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc\ub97c \uc774 \ud06c\uae30 \uc774\ud558\ub85c \uc778\ub77c\uc774\ub2dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-XX:FreqInlineSize=<n>")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud56b \uba54\uc11c\ub4dc\ub97c \uc774 \ud06c\uae30 \uc774\ud558\ub85c \uc778\ub77c\uc774\ub2dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-XX:InlineSmallCode=<n>")),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd5c\uc885 \ub2e8\uacc4 \ucef4\ud30c\uc77c\uc774 \uc774\ubbf8 \uc874\uc7ac\ud560 \uacbd\uc6b0 \uba54\uc11c\ub4dc\ub97c \uc778\ub77c\uc774\ub2dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-XX:MaxInlineLevel=<n>")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc774 \uc218\uc900\ubcf4\ub2e4 \ub354 \uae4a\uc774 \ud638\ucd9c \ud504\ub808\uc784\uc744 \uc778\ub77c\uc774\ub2dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub8e8\ud504-\ud3bc\uce58\uae30"},"\ub8e8\ud504 \ud3bc\uce58\uae30"),(0,r.kt)("p",null,"\ub8e8\ud504 \ub0b4\ubd80\uc758 \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \uc804\ubd80 \uc778\ub77c\uc774\ub2dd\ud558\uba74, \ucef4\ud30c\uc77c\ub7ec\ub294 \ub8e8\ud504\ub97c \ud55c\ubc88 \uc21c\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ube44\uc6a9\uacfc \ud06c\uae30\ub97c \ub354 \ubd84\uba85\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc31\ube0c\ub79c\uce58(back branch)\uac00 \uc77c\uc5b4\ub098\uba74 \uadf8\ub54c\ub9c8\ub2e4 CPU\ub294 \uc720\uc785\ub41c \uba85\ub839\uc5b4 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub364\ud504\ud558\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc0c1 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \ub8e8\ud504 \ubc14\ub514\uac00 \uc9e7\uc744\uc218\ub85d \ubc31 \ube0c\ub79c\uce58 \ube44\uc6a9\uc740 \uc0c1\ub300\uc801\uc73c\ub85c \ub192\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uc758 \uae30\uc900\uc73c\ub85c \ub8e8\ud504 \ud3bc\uce58\uae30 \uc5ec\ubd80\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \uce74\uc6b4\ud130 \ubcc0\uc218 \uc720\ud615(\ub300\ubd80\ubd84 \uac1d\uccb4 \uc544\ub2cc int\ub098 long\ud615 \uc0ac\uc6a9)"),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \ubcf4\ud3ed(loop stride, \ud55c\ubc88 \uc21c\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ub8e8\ud504 \uce74\uc6b4\ud130 \uac12\uc774 \uc5bc\ub9c8\ub098 \ubc14\ub00c\ub294 \uc9c0)"),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \ub0b4\ubd80\uc758 \ud0c8\ucd9c \uc9c0\uc810 \uac1c\uc218(return \ub610\ub294 break)")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ubca4\uce58\ub9c8\ud0b9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package optjava.jmh;\n\nimport org.openjdk.jmh.annotations.*;\nimport java.util.concurrent.TimeUnit;\n\n@BenchmarkMode(Mode.Throughput)\n@OutputTimeUnit(TimeUnit.SECONDS)\n@State(Scope.Thread)\npublic class LoopUnrollingCounter {\n  private static Final int MAX = 1_000_000;\n  private long[] data = new long[MAX];\n\n  @Setup\n  public void createData() {\n    java.util.Random random = new java.util.Random();\n    for (int i = 0; i < MAX; i++) {\n      data[i] = random.nextLong();\n    }\n  }\n\n  @Benchmark\n  public long intStride1() {\n    long sum = 0;\n    for (int i = 0; i < MAX; i++) {\n      sum += data[i];\n    }\n    return sum;\n  }\n\n  @Benchmark\n  public long longStride1() {\n    long sum = 0;\n    for (long l = 0; l < MAX; l++) {\n      sum += data[(int) l];\n    }\n    return sum;\n  }\n}\n")),(0,r.kt)("p",null,"\ubca4\uce58\ub9c8\ud06c \uacb0\uacfc"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Benchmark"),(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Cnt"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Unites"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnitsLoopUnrollingCounter.intStride1"),(0,r.kt)("td",{parentName:"tr",align:null},"thrpt"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"2423.818 \xb1"),(0,r.kt)("td",{parentName:"tr",align:null},"2.547"),(0,r.kt)("td",{parentName:"tr",align:null},"ops/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoopUnrollingCounter.longStride1"),(0,r.kt)("td",{parentName:"tr",align:null},"thrpt"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"1469.833 \xb1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.721"),(0,r.kt)("td",{parentName:"tr",align:null},"ops/s")))),(0,r.kt)("h3",{id:"\ub8e8\ud504-\ud3bc\uce58\uae30-\uc815\ub9ac"},"\ub8e8\ud504 \ud3bc\uce58\uae30 \uc815\ub9ac"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \ub2e4\uc591\ud55c \ucd5c\uc801\ud654 \uae30\ubc95\uc73c\ub85c \ub8e8\ud504 \ud3bc\uce58\uae30\ub97c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uce74\uc6b4\ud130\uac00 int, short, char \ud615\uc77c \uacbd\uc6b0 \ub8e8\ud504\ub97c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \ubc14\ub514\ub97c \ud3bc\uce58\uace0 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \ud3f4\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504\ub97c \ud3bc\uce58\uba74 \ubc31 \ube0c\ub79c\uce58 \ud69f\uc218\uac00 \uc904\uace0, \uadf8\ub9cc\ud07c \ubd84\uae30 \uc608\uce21 \ube44\uc6a9\uc774 \uc801\uac8c \ub4ed\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \ud3f4\uc744 \uc81c\uac70\ud558\uba74 \ub8e8\ud504\ub97c \uc21c\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ud558\ub294 \uc77c\uc774 \uc904\uc5b4\ub4ed\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud0c8\ucd9c-\ubd84\uc11d"},"\ud0c8\ucd9c \ubd84\uc11d"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \uc5b4\ub5a4 \uba54\uc11c\ub4dc\uac00 \ub0b4\ubd80\uc5d0\uc11c \uc218\ud589\ud55c \uc791\uc5c5\uc744 \uadf8 \uba54\uc11c\ub4dc \uacbd\uacc4 \ubc16\uc5d0\uc11c\ub3c4 \ubcfc \uc218 \uc788\ub294\uc9c0, \ub610\ub294 \ubd80\uc218 \ud6a8\uacfc\ub97c \uc720\ubc1c\ud558\uc9c0 \uc54a\ub294\uc9c0 \ubc94\uc704 \uae30\ubc18 \ubd84\uc11d\uc744 \ud1b5\ud574\uc11c \ud310\ubcc4\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uae30\ubc95\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\ud0c8\ucd9c \ubd84\uc11d"),"\uc774\ub77c\uace0 \ud558\uba70 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \ud560\ub2f9\ub41c \uac1d\uccb4\ub97c \uba54\uc11c\ub4dc \ubc94\uc704 \ubc16\uc5d0\uc11c \ubc14\ub77c\ubcfc \uc218 \uc788\ub294\uc9c0\ub97c \uc54c\uc544\ubcf4\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc138\uac00\uc9c0 \uc720\ud615\uc73c\ub85c \ubd84\ub958\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"typedef enum {\n  // \uac1d\uccb4\uac00 \uba54\uc11c\ub4dc/\uc2a4\ub808\ub4dc\ub97c \ud0c8\ucd9c\ud558\uc9c0 \uc54a\uace0\n  // \ud638\ucd9c \uc778\uc218\ub85c \uc804\ub2ec\ub418\uc9c0 \uc54a\uc73c\uba70,\n  // \uc2a4\uce7c\ub77c\ub85c \ub300\uccb4 \uac00\ub2a5\ud558\ub2e4.\n  NoEscape = 1,\n\n  // \uac1d\uccb4\uac00 \uba54\uc11c\ub4dc/\uc2a4\ub808\ub4dc\ub97c \ud0c8\ucd9c\ud558\uc9c0 \uc54a\uc9c0\ub9cc\n  // \ud638\ucd9c \uc778\uc218\ub85c \uc804\ub2ec\ub418\uac70\ub098 \ub808\ud37c\ub7f0\uc2a4\ub85c \ucc38\uc870\ub418\uba70,\n  // \ud638\ucd9c \ub3c4\uc911\uc5d0\ub294 \ud0c8\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4.\n  ArgEscape = 2,\n\n  // \uac1d\uccb4\uac00 \uba54\uc11c\ub4dc/\uc2a4\ub808\ub4dc\ub97c \ud0c8\ucd9c\ud55c\ub2e4.\n  GlobalEscape = 3\n}\n")),(0,r.kt)("h3",{id:"\ud799-\ud560\ub2f9-\uc81c\uac70"},"\ud799 \ud560\ub2f9 \uc81c\uac70"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc758 \ud0c8\ucd9c \ubd84\uc11d \ucd5c\uc801\ud654\ub294 \uac1c\ubc1c\uc790\uac00 \uac1d\uccb4 \ud560\ub2f9\ub960\uc744 \uc2e0\uacbd \uc4f0\uc9c0 \uc54a\uace0\ub3c4 \uc790\ubc14 \ucf54\ub4dc\ub97c \uc790\uc5f0\uc2a4\ub808 \uc791\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2a4\uce7c\ub77c \uce58\ud658(scalar replacement)\uc774\ub77c\ub294 \ucd5c\uc801\ud654\ub97c \uc801\uc6a9\ud574 \uac1d\uccb4 \ud544\ub4dc\ub97c \ub9c8\uce58 \ucc98\uc74c\ubd80\ud130 \uac1d\uccb4 \ud544\ub4dc\uac00 \uc544\ub2cc \uc9c0\uc5ed \ubcc0\uc218\uc600\ub358 \uac83\ucc98\ub7fc \uc2a4\uce7c\ub77c \uac12\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4. \uadf8 \ud6c4 \ub808\uc9c0\uc2a4\ud130 \ud560\ub2f9\uae30(register allocator)\ub77c\ub294 \ud56b\uc2a4\ud31f \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc758\ud574 CPU \ub808\uc9c0\uc2a4\ud130 \uc18d\uc73c\ub85c \ubc30\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ub77d\uacfc-\ud0c8\ucd9c-\ubd84\uc11d"},"\ub77d\uacfc \ud0c8\ucd9c \ubd84\uc11d"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \ud0c8\ucd9c \ubd84\uc11d \ubc0f \uad00\ub828 \uae30\ubc95\uc744 \ud1b5\ud574\uc11c \ub77d \uc131\ub2a5\ub3c4 \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube44\ud0c8\ucd9c \uac1d\uccb4\uc5d0 \uc788\ub294 \ub77d\uc740 \uc81c\uac70\ud569\ub2c8\ub2e4. (\ub77d \uc0dd\ub7b5)"),(0,r.kt)("li",{parentName:"ul"},"\uac19\uc740 \ub77d\uc744 \uacf5\uc720\ud55c, \ub77d\uc774 \uac78\ub9b0 \uc5f0\uc18d\ub41c \uc601\uc5ed\uc740 \ubcd1\ud569\ud569\ub2c8\ub2e4. (\ub77d \ud655\uc7a5)"),(0,r.kt)("li",{parentName:"ul"},"\ub77d\uc744 \ud574\uc81c\ud558\uc9c0 \uc54a\uace0 \uac19\uc740 \ub77d\uc744 \ubc18\ubcf5 \ud68d\ub4dd\ud55c \ube14\ub85d\uc744 \ucc3e\uc544\ub0c5\ub2c8\ub2e4. (\uc911\ucca9 \ub77d)")),(0,r.kt)("p",null,"\uc0c1\uc138 \ub0b4\uc6a9 : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-3.html#jvms-3.14"},"JVM \uba85\uc138\uc11c")),(0,r.kt)("h3",{id:"\ud0c8\ucd9c-\ubd84\uc11d\uc758-\ud55c\uacc4"},"\ud0c8\ucd9c \ubd84\uc11d\uc758 \ud55c\uacc4"),(0,r.kt)("p",null,"\ud0c8\ucd9c \ubd84\uc11d \uc5ed\uc2dc \ub2e4\ub978 \ucd5c\uc801\ud654 \uae30\ubc95\ub4e4\ucc98\ub7fc \ud2b8\ub808\uc774\ub4dc\uc624\ud504\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud799\uc774 \uc544\ub2c8\ub77c\ub3c4 \ub2e4\ub978 \uc5b4\ub518\uac00\uc5d0\ub294 \ud560\ub2f9\uc744 \ud574\uc57c \ud558\ub294\ub370, CPU \ub808\uc9c0\uc2a4\ud130\ub098 \uc2a4\ud0dd \uacf5\uac04\uc740 \uc0c1\ub300\uc801\uc73c\ub85c \ud76c\uc18c\ud55c \ub9ac\uc18c\uc2a4\uc785\ub2c8\ub2e4. \ub610 \uae30\ubcf8\uc801\uc73c\ub85c \uc6d0\uc18c\uac00 64\uac1c \uc774\uc0c1\uc778 \ubc30\uc5f4\uc740 \ud56b\uc2a4\ud31f\uc5d0\uc11c \ud0c8\ucd9c \ubd84\uc11d\uc758 \ud61c\ud0dd\uc744 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uac1c\uc218 \uc81c\ud55c\uc740 \ub2e4\uc74c VM \uc2a4\uc704\uce58\ub85c \uc870\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub2e8\ud615\uc131-\ub514\uc2a4\ud328\uce58"},"\ub2e8\ud615\uc131 \ub514\uc2a4\ud328\uce58"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f C2 \ucef4\ud30c\uc77c\ub7ec\uac00 \uc218\ud589\ud558\ub294 \ucd94\uce21\uc131 \ucd5c\uc801\ud654\ub294 \ub300\ubd80\ubd84 \uacbd\ud5d8\uc801 \uc5f0\uad6c \uacb0\uacfc\ub97c \ud1a0\ub300\ub85c \ud569\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8\ud615\uc131 \ub514\uc2a4\ud328\uce58 \uae30\ubc95"),"\ub3c4 \uadf8\ub7f0 \ubd80\ub958 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989, \uc5b4\ub5a4 \uac1d\uccb4\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c, \uadf8 \uba54\uc11c\ub4dc\ub97c \ucd5c\ucd08\ub85c \ud638\ucd9c\ud55c \uac1d\uccb4\uc758 \ub7f0\ud0c0\uc784 \ud0c0\uc785\uc744 \uc54c\uc544\ub0b4\uba74 \uadf8 \uc774\ud6c4\uc758 \ubaa8\ub4e0 \ud638\ucd9c\ub3c4 \ub3d9\uc77c\ud55c \ud0c0\uc785\uc77c \uac00\ub2a5\uc131\uc774 \ud07d\ub2c8\ub2e4. \uc774 \ucd94\uce21\uc744 \ud1b5\ud574\uc11c \ud638\ucd9c\ubd80\uc758 \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \ucd5c\uc801\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ub300\ubd80\ubd84\uc774 \ub2e8\ud615\uc801 \ud638\ucd9c\uc785\ub2c8\ub2e4. \ub2e4\ub9cc. ",(0,r.kt)("strong",{parentName:"p"},"\uc774\ud615\uc131 \ub514\uc2a4\ud328\uce58"),"\ub098 ",(0,r.kt)("strong",{parentName:"p"},"\ub2e4\ud615\uc131"),"\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc778\ud2b8\ub9b0\uc9c1"},"\uc778\ud2b8\ub9b0\uc9c1"),(0,r.kt)("p",null,"\uc778\ud2b8\ub9b0\uc9c1(intrinsics)\uc740 JIT \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc774 \ub3d9\uc801 \uc0dd\uc131\ud558\uae30 \uc774\uc804\uc5d0 JVM\uc774 \uc774\ubbf8 \uc54c\uace0 \uc788\ub294 \uace0\ub3c4\ub85c \ud29c\ub2dd\ub41c \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc \uad6c\ud604\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 \uc6a9\uc5b4\uc785\ub2c8\ub2e4. \uc8fc\ub85c OS\ub098 CPU \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc815 \uae30\ub2a5\uc744 \uc751\uc6a9\ud558\ub294, \uc131\ub2a5\uc774 \ud544\uc218\uc801\uc778 \ucf54\uc5b4 \uba54\uc11c\ub4dc\uc5d0\uc11c \uc4f0\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c, \ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \uc9c0\uc6d0\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uace0 \uc548\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\ub294 \ub9ce\uc774 \uc4f0\uc774\ub294 \uc778\ud2b8\ub9b0\uc9c1\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uba54\uc11c\ub4dc"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.lang.System.arraycopy()")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU\uc758 \ubca1\ud130 \uc9c0\uc6d0\uc73c\ub85c \ubc30\uc5f4\uc744 \ube60\ub974\uac8c \ubcf5\uc0ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.lang.System.currentTimeMillis()")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub300\ubd80\ubd84 OS\uac00 \uc81c\uacf5\ud558\ub294 \uad6c\ud604\uccb4\uac00 \ube60\ub985\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.lang.Math.min")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc77c\ubd80 CPU\uc5d0\uc11c \ubd84\uae30 \uc5c6\uc774 \uc5f0\uc0b0 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\uae30\ud0c0 java.lang.Math \uba54\uc11c\ub4dc")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc77c\ubd80 CPU\uc5d0\uc11c \uc9c1\uc811 \uba85\ub839\uc5b4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\uc554\ud638\ud654 \ud568\uc218(Ex. AES)")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud558\ub4dc\uc6e8\uc5b4\ub85c \uac00\uc18d\ud558\uba74 \uc131\ub2a5\uc774 \ub9e4\uc6b0 \uc88b\uc544\uc9d1\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"OpenJDK \ud56b\uc2a4\ud31f \uc18c\uc2a4 \ucf54\ub4dc\uc5d0\uc11c \ud655\uc7a5\uc790\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},".ad"),"(architecture dependent)\uc778 \ud30c\uc77c\uc774 \ubc14\ub85c \uc778\ud2b8\ub9b0\uc9c1 \ud15c\ud50c\ub9bf\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc778\ud2b8\ub9b0\uc9c1\uc758 \ud575\uc2ec \uc911 \ud558\ub098\ub294 \uc815\ub9d0 ",(0,r.kt)("strong",{parentName:"p"},"\uc790\uc8fc \uc4f0\uc774\ub294 \uc791\uc5c5\uc5d0 \ud55c\ud574\uc11c\ub9cc \uc131\ub2a5\uc5d0 \ud070 \uc601\ud5a5"),"\uc744 \ubbf8\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc628-\uc2a4\ud0dd-\uce58\ud658"},"\uc628-\uc2a4\ud0dd \uce58\ud658"),(0,r.kt)("p",null,"\ucef4\ud30c\uc77c\uc744 \uc77c\uc73c\ud0ac \uc815\ub3c4\ub85c \ud638\ucd9c \ube48\ub3c4\uac00 \ub192\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0 \ud56b \ub8e8\ud504\uac00 \ud3ec\ud568\ub41c \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \uc774\ub7f0 \ucf54\ub4dc\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc628-\uc2a4\ud0dd \uce58\ud658(OSR)"),"\uc744 \uc774\uc6a9\ud574\uc11c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4. \uc778\ud130\ud504\ub9ac\ud130\uac00 \ub8e8\ud504 \ubc31 \ube0c\ub79c\uce58 \ud69f\uc218\ub97c \uc138\uc5b4\ubcf4\uace0 \ud2b9\uc815 \ud55c\uacc4\uce58\ub97c \ucd08\uacfc\ud558\uba74 \ub8e8\ud504\ub97c \ucef4\ud30c\uc77c\ud55c \ud6c4 \uce58\ucd28\ud574\uc11c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc138\uc774\ud504\ud3ec\uc778\ud2b8-\ubcf5\uc2b5"},"\uc138\uc774\ud504\ud3ec\uc778\ud2b8 \ubcf5\uc2b5"),(0,r.kt)("p",null,"JVM\uc5d0 \uc138\uc774\ud504\ud3ec\uc778\ud2b8\uac00 \uac78\ub9ac\ub294 \uc870\uac74\uc744 \uc885\ud569 \uc815\ub9ac\ud574\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uc5ed\ucd5c\uc801\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ud799 \ub364\ud504\ub97c \uc0dd\uc131"),(0,r.kt)("li",{parentName:"ul"},"\ubc14\uc774\uc5b4\uc2a4 \ub77d\uc744 \ucde8\uc18c"),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub97c \uc7ac\uc815\uc758")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc5d0\uc11c\ub294 \ub2e4\uc74c \uc9c0\uc810\uc5d0 \uc138\uc774\ud504\ud3ec\uc778\ud2b8 \uccb4\ud06c \ucf54\ub4dc\ub97c \ub123\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \ubc31 \ube0c\ub79c\uce58 \uc9c0\uc810"),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \ubc18\ud658 \uc9c0\uc810")),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc2a4\ub808\ub4dc\uac00 \uc138\uc774\ud504\ud3ec\uc778\ud130\uc5d0 \ub3c4\ub2ec\ud558\ub824\uba74 \uc5b4\ub290 \uc815\ub3c4 \uc2dc\uac04\uc774 \uc18c\uc694\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucef4\ud30c\uc77c\ub7ec\ub294 \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub97c \ud3f4\ub9c1\ud558\uba74\uc11c \uccb4\ud06c\ud558\ub294 \ube44\uc6a9\uc744 \uac10\uc218\ud560\uc9c0, \ub2e4\ub978 \uc2a4\ub808\ub4dc\ub3c4 \ubaa8\ub450 \uc138\uc774\ud504\ud3ec\uc778\ud14c \ub2ff\uc744 \ub54c\uae4c\uc9c0 \ub300\uae30\ud558\ub294 \uae34 \uc138\uc774\ud504\ud3ec\uc778\ud2b8\ub97c \ud68c\ud53c\ud560 \uc9c0\uc5d0 \ub300\ud574 \uace0\ubbfc\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ucf54\uc5b4-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uba54\uc11c\ub4dc"},"\ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac \uba54\uc11c\ub4dc"),(0,r.kt)("p",null,"JDK \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud06c\uae30\uac00 JIT \ucef4\ud30c\uc77c\uc5d0 \uc5b4\ub5a4 \uc601\ud5a5\uc744 \uc8fc\ub294\uc9c0 \uc0b4\ud3b4\ubd10\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc778\ub77c\uc774\ub2dd\ud558\uae30-\uc801\ud569\ud55c-\uba54\uc11c\ub4dc-\ud06c\uae30-\uc0c1\ud55c"},"\uc778\ub77c\uc774\ub2dd\ud558\uae30 \uc801\ud569\ud55c \uba54\uc11c\ub4dc \ud06c\uae30 \uc0c1\ud55c"),(0,r.kt)("p",null,"\uc778\ub77c\uc774\ub2dd \uc5ec\ubd80\ub294 \uba54\uc11c\ub4dc\uc758 \ubc14\uc774\ud2b8 \ucf54\ub4dc \ud06c\uae30\ub85c \uacb0\uc815\ub418\ubbc0\ub85c, \ud074\ub798\uc2a4 \ud30c\uc77c\uc744 \uc815\uc801 \ubd84\uc11d\ud558\uba74 \uc778\ub77c\uc774\ub2dd\uc744 \ud558\uae30\uc5d0 \uc9c0\ub098\uce58\uac8c \ud070 \uba54\uc11c\ub4dc\ub97c \uc18e\uc544\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778\uc5d0 \ud2b9\uc815\ud55c \uba54\uc11c\ub4dc\ub85c \uc131\ub2a5 \uac1c\uc120\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uc791\uac8c\ud558\ub294 \uac83\ub3c4 \uc778\ub77c\uc774\ub2dd \uac00\uc9d3\uc218\ub97c \ub298\uc5ec\uc11c \uc7a5\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ucef4\ud30c\uc77c\ud558\uae30-\uc801\ud569\ud55c-\uba54\uc11c\ub4dc-\ud06c\uae30-\uc0c1\ud55c"},"\ucef4\ud30c\uc77c\ud558\uae30 \uc801\ud569\ud55c \uba54\uc11c\ub4dc \ud06c\uae30 \uc0c1\ud55c"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \uba54\uc11c\ub4dc \ud06c\uae30\uac00 \uc5b4\ub290 \uc774\uc0c1 \ucd08\uacfc\ud558\uba74 \ucef4\ud30c\uc77c\ub418\uc9c0 \uc54a\ub294 \ud55c\uacc4\uce58(8000\ubc14\uc774\ud2b8)\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+PrintCompilation")," \ud50c\ub798\uadf8\uc640 9\uc7a5\uc5d0\uc11c \uc18c\uac1c\ud55c \uae30\ubc95\ub4e4\uc744 \uc798 \ud65c\uc6a9\ud558\uba74 \uac1c\ubcc4 \uba54\uc11c\ub4dc\ub9c8\ub2e4 \uc815\ub9d0 \ucd5c\uc801\ud654\ub410\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}o.isMDXComponent=!0}}]);