"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[9176],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return o}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=m(n),o=r,g=N["".concat(u,".").concat(o)]||N[o]||d[o]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function o(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3737:function(t,e,n){n.r(e),n.d(e,{default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i={sidebar_position:2},p={unversionedId:"dev/system-design-interview/ch2",id:"dev/system-design-interview/ch2",isDocsHomePage:!1,title:"2. \uac1c\ub7b5\uc801\uc778 \uaddc\ubaa8 \ucd94\uc815",description:"2\uc758 \uc81c\uacf1\uc218",source:"@site/docs/dev/system-design-interview/ch2.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch2",permalink:"/til/docs/dev/system-design-interview/ch2",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch2.md",version:"current",lastUpdatedAt:1667401087,formattedLastUpdatedAt:"11/2/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \uc0ac\uc6a9\uc790 \uc218\uc5d0 \ub530\ub978 \uaddc\ubaa8 \ud655\uc7a5\uc131",permalink:"/til/docs/dev/system-design-interview/ch1"},next:{title:"3. \uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811 \uacf5\ub7b5\ubc95",permalink:"/til/docs/dev/system-design-interview/ch3"}},u=[{value:"2\uc758 \uc81c\uacf1\uc218",id:"2\uc758-\uc81c\uacf1\uc218",children:[]},{value:"\ubaa8\ub4e0 \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc54c\uc544\uc57c \ud558\ub294 \uc751\ub2f5\uc9c0\uc5f0 \uac12",id:"\ubaa8\ub4e0-\ud504\ub85c\uadf8\ub798\uba38\uac00-\uc54c\uc544\uc57c-\ud558\ub294-\uc751\ub2f5\uc9c0\uc5f0-\uac12",children:[]},{value:"\uac00\uc6a9\uc131\uc5d0 \uad00\uacc4\ub41c \uc218\uce58\ub4e4",id:"\uac00\uc6a9\uc131\uc5d0-\uad00\uacc4\ub41c-\uc218\uce58\ub4e4",children:[]},{value:"\uc608\uc81c: \ud2b8\uc704\ud130 QPS\uc640 \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9 \ucd94\uc815",id:"\uc608\uc81c-\ud2b8\uc704\ud130-qps\uc640-\uc800\uc7a5\uc18c-\uc694\uad6c\ub7c9-\ucd94\uc815",children:[]},{value:"\ud301",id:"\ud301",children:[]}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"2\uc758-\uc81c\uacf1\uc218"},"2\uc758 \uc81c\uacf1\uc218"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"2\uc758 x\uc81c\uacf1"),(0,l.kt)("th",{parentName:"tr",align:null},"\uadfc\uc0ac\uce58"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,l.kt)("th",{parentName:"tr",align:null},"\ucd95\uc57d\uc5b4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"1\ucc9c(thousand)"),(0,l.kt)("td",{parentName:"tr",align:null},"1\ud0ac\ub85c\ubc14\uc774\ud2b8(Kilobyte)"),(0,l.kt)("td",{parentName:"tr",align:null},"1KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"1\ubc31\ub9cc(million)"),(0,l.kt)("td",{parentName:"tr",align:null},"1\uba54\uce74\ubc14\uc774\ud2b8(Megabyte)"),(0,l.kt)("td",{parentName:"tr",align:null},"1MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"10\uc5b5(billion)"),(0,l.kt)("td",{parentName:"tr",align:null},"1\uae30\uac00\ubc14\uc774\ud2b8(Gigabyte)"),(0,l.kt)("td",{parentName:"tr",align:null},"1GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"1\uc870(trillion)"),(0,l.kt)("td",{parentName:"tr",align:null},"1\ud14c\ub77c\ubc14\uc774\ud2b8(Terabyte)"),(0,l.kt)("td",{parentName:"tr",align:null},"1TB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"1000\uc870(quadrillion)"),(0,l.kt)("td",{parentName:"tr",align:null},"1\ud398\ud0c0\ubc14\uc774\ud2b8(Petabyte)"),(0,l.kt)("td",{parentName:"tr",align:null},"1PB")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\ubaa8\ub4e0-\ud504\ub85c\uadf8\ub798\uba38\uac00-\uc54c\uc544\uc57c-\ud558\ub294-\uc751\ub2f5\uc9c0\uc5f0-\uac12"},"\ubaa8\ub4e0 \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc54c\uc544\uc57c \ud558\ub294 \uc751\ub2f5\uc9c0\uc5f0 \uac12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2020\ub144 \uae30\uc900\uc73c\ub85c \uc751\ub2f5 \uc9c0\uc5f0 \uac12\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uc5f0\uc0b0\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc2dc\uac04"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L1 \uce90\uc2dc \ucc38\uc870"),(0,l.kt)("td",{parentName:"tr",align:null},"1ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ubd84\uae30 \uc608\uce21 \uc624\ub958"),(0,l.kt)("td",{parentName:"tr",align:null},"3ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L2 \uce90\uc2dc \ucc38\uc870"),(0,l.kt)("td",{parentName:"tr",align:null},"4ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ubba4\ud14d\uc2a4 \ub77d/\uc5b8\ub77d"),(0,l.kt)("td",{parentName:"tr",align:null},"17ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc \uba54\ubaa8\ub9ac \ucc38\uc870"),(0,l.kt)("td",{parentName:"tr",align:null},"100ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zippy\ub85c 1kb \uc555\ucd95"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uc77c\ubc18 \uc0c1\uc6a9 \ub124\ud2b8\uc6cc\ud06c\uc0c1\uc5d0\uc11c 2Kb\ubc14\uc774\ud2b8 \uc804\uc1a1"),(0,l.kt)("td",{parentName:"tr",align:null},"44ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\uba54\ubaa8\ub9ac\uc5d0\uc11c 1M\ubc14\uc774\ud2b8 \uc21c\ucc28\uc801\uc73c\ub85c \uc77d\uae30"),(0,l.kt)("td",{parentName:"tr",align:null},"3,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSD \uc0c1\uc5d0\uc11c \uc784\uc758 \uc704\uce58\uc758 \ub370\uc774\ud130 \uc77d\uae30"),(0,l.kt)("td",{parentName:"tr",align:null},"16,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSD \uc0c1\uc5d0\uc11c 1M \ubc14\uc774\ud2b8 \uc21c\ucc28\uc801 \uc77d\uae30"),(0,l.kt)("td",{parentName:"tr",align:null},"49,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub514\uc2a4\ud06c \ud0d0\uc0c9"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000,000ns = 2ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub514\uc2a4\ud06c\uc5d0\uc11c 1M\ubc14\uc774\ud2b8 \uc21c\ucc28\uc801 \uc77d\uae30"),(0,l.kt)("td",{parentName:"tr",align:null},"825,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ub3d9\uc77c \ub370\uc774\ud130 \uc13c\ud130 \ub0b4\uc5d0\uc11c\uc758 \ud328\ud0b7\uc655\ubcf5 \uc9c0\uc5f0\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"500,000ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CA\uc5d0\uc11c \ub124\ub35c\ub780\ub4dc\uae4c\uc9c0\uc758 \ud328\ud0b7 \uc655\ubcf5 \uc9c0\uc5f0\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"150,000,000ns = 150ms")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\ub860\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac\ub294 \ube60\ub974\uc9c0\ub9cc \ub514\uc2a4\ud06c\ub294 \uc544\uc9c1\ub3c4 \ub290\ub9ac\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud06c \ud0d0\uc0c9(seek)\uc740 \uac00\ub2a5\ud55c \ud55c \ud53c\ud558\ub77c"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud55c \uc555\ucd95 \uc54c\uace0\ub9ac\uc998\uc740 \ube60\ub974\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc778\ud130\ub137\uc73c\ub85c \uc804\uc1a1\ud558\uae30 \uc804\uc5d0 \uac00\ub2a5\ud558\uba74 \uc555\ucd95\ud558\ub77c"),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc13c\ud130\ub294 \ubcf4\ud1b5 \uc5ec\ub7ec \uc9c0\uc5ed(region)\uc5d0 \ubd84\uc0b0\ub418\uc5b4 \uc788\uace0, \uc13c\ud130\ub4e4 \uac04\uc5d0 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\ub294 \ub370\ub294 \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uac00\uc6a9\uc131\uc5d0-\uad00\uacc4\ub41c-\uc218\uce58\ub4e4"},"\uac00\uc6a9\uc131\uc5d0 \uad00\uacc4\ub41c \uc218\uce58\ub4e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uace0\uac00\uc6a9\uc131(high availability)\uc740 \uc2dc\uc2a4\ud15c\uc774 \uc624\ub79c \uc2dc\uac04 \ub3d9\uc548 \uc9c0\uc18d\uc801\uc73c\ub85c \uc911\ub2e8 \uc5c6\uc774 \uc6b4\uc601\ub420 \uc218 \uc788\ub294 \ub2a5\ub825\uc744 \uc9c0\uce6d\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc758 \uc11c\ube44\uc2a4\ub294 99%\uc5d0\uc11c 100% \uc0ac\uc774\uc758 \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uac00\uc6a9\ub960"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud558\ub8e8\ub2f9 \uc7a5\uc560\uc2dc\uac04"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc8fc\ub2f9 \uc7a5\uc560\uc2dc\uac04"),(0,l.kt)("th",{parentName:"tr",align:null},"\uac1c\uc6d4\ub2f9 \uc7a5\uc560\uc2dc\uac04"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc5f0\uac04 \uc7a5\uc560\uc2dc\uac04"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"99%"),(0,l.kt)("td",{parentName:"tr",align:null},"14.40\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"1.68\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"7.31\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"3.65\uc77c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"99.9%"),(0,l.kt)("td",{parentName:"tr",align:null},"1.44\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"10.08\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"43.83\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"8.77\uc2dc\uac04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"99.99%"),(0,l.kt)("td",{parentName:"tr",align:null},"8.64\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"1.01\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"4.38\ubd84"),(0,l.kt)("td",{parentName:"tr",align:null},"52.60\ubd84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"99.999%"),(0,l.kt)("td",{parentName:"tr",align:null},"864.00\ubc00\ub9ac\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"6.05\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"26.30\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"5.26\ubd84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"99.9999%"),(0,l.kt)("td",{parentName:"tr",align:null},"86.40\ubc00\ub9ac\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"604.80\ubc00\ub9ac\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"2.63\ucd08"),(0,l.kt)("td",{parentName:"tr",align:null},"31.56\ucd08")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc608\uc81c-\ud2b8\uc704\ud130-qps\uc640-\uc800\uc7a5\uc18c-\uc694\uad6c\ub7c9-\ucd94\uc815"},"\uc608\uc81c: \ud2b8\uc704\ud130 QPS\uc640 \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9 \ucd94\uc815"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac00\uc815",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc6d4\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790(motnly active user)\uc740 3\uc5b5(300million) \uba85\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"50%\uc758 \uc0ac\uc6a9\uc790\uac00 \ud2b8\uc704\ud130\ub97c \ub9e4\uc77c \uc0ac\uc6a9\ud55c\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\ud3c9\uade0\uc801\uc73c\ub85c \uac01 \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc77c 2\uac74\uc758 \ud2b8\uc717\uc744 \uc62c\ub9b0\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\ub514\uc5b4\ub97c \ud3ec\ud568\ud558\ub294 \ud2b8\uc717\uc740 10%\uc815\ub3c4\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 5\ub144\uac04 \ubcf4\uad00\ub41c\ub2e4"))),(0,l.kt)("li",{parentName:"ul"},"\ucd94\uc815",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"QPS(Query Per Second) \ucd94\uc815\uce58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc77c\uac04 \ub2a5\ub3d9 \uc0ac\uc6a9\uc790(Daily Active User, DAU) = 3\uc5b5 * 50% = 1.5\uc5b5(150million)"),(0,l.kt)("li",{parentName:"ul"},"QPS = 1.5\uc5b5 * 2 \ud2b8\uc717/24\uc2dc\uac04/3600\ucd08 = \uc57d 3500"),(0,l.kt)("li",{parentName:"ul"},"\ucd5c\ub300 QPS(Peek QPS) = 2 * QPS = \uc57d 7000"))),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\ub514\uc5b4 \uc800\uc7a5\uc744 \uc704\ud55c \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud3c9\uade0 \ud2b8\uc717 \ud06c\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tweet_id\uc5d0 64\ubc14\uc774\ud2b8"),(0,l.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ud2b8\uc5d0 140\ubc14\uc774\ud2b8"),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\ub514\uc5b4\uc5d0 1MB"))),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\ub514\uc5b4 \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9 : 1.5\uc5b5 ",(0,l.kt)("em",{parentName:"li"}," 2 ")," 10% * 1MB = 30TB/\uc77c"),(0,l.kt)("li",{parentName:"ul"},"5\ub144\uac04 \ubbf8\ub514\uc5b4\ub97c \ubcf4\uad00\ud558\uae30 \uc704\ud55c \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9: 30TB ",(0,l.kt)("em",{parentName:"li"}," 365 ")," 5 = \uc57d 55PB")))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\ud301"},"\ud301"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uba74\uc811\uc5d0\uc11c \uc911\uc694\ud55c \uac83\uc740 \ubb38\uc81c\ub97c \ud480\uc5b4\uac00\ub294 \uc808\ucc28\uac00 \uc911\uc694\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uadfc\uc0ac\uce58\ub97c \ud65c\uc6a9\ud55c \uacc4\uc0b0, \uc815\ud655\ud55c \uacc4\uc0b0\uc740 \ubb34\uc758\ubbf8\ud558\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\uac00\uc815(assumption)\uc744 \uc801\uc5b4\ub450\uae30"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc704(unit)\uc744 \ubd99\uc774\uae30"),(0,l.kt)("li",{parentName:"ul"},"\ub9ce\uc774 \ucd9c\uc81c\ub418\ub294 \uac1c\ub7b5\uc801 \uaddc\ubaa8 \ucd94\uc815 \ubb38\uc81c\ub294 ",(0,l.kt)("strong",{parentName:"li"},"QPS, \ucd5c\ub300 QPS, \uc800\uc7a5\uc18c \uc694\uad6c\ub7c9, \uce90\uc2dc \uc694\uad6c\ub7c9, \uc11c\ubc84 \uc218 \ub4f1"),"\uc744 \ucd94\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")))))}k.isMDXComponent=!0}}]);