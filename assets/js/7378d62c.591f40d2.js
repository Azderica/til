"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),o=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),s=l,k=d["".concat(u,".").concat(s)]||d[s]||m[s]||r;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var o=2;o<r;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2843:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var i=n(7462),l=n(3366),r=(n(7294),n(3905)),a={sidebar_position:3},p={unversionedId:"java/optimizing-java/ch3",id:"java/optimizing-java/ch3",isDocsHomePage:!1,title:"3. \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc6b4\uc601\uccb4\uc81c",description:"\uc790\ubc14 \uc131\ub2a5\uc744 \uc9c4\uc9c0\ud558\uac8c \ub192\uc77c\ub824\uba74, \uc790\ubc14 \ud50c\ub7ab\ud3fc\uc758 \uadfc\uac04 \uc6d0\ub9ac\uc640 \uae30\uc220\uc5d0 \ub300\ud574 \uc54c\uc544\uc57c\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch3.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch3",permalink:"/til/docs/java/optimizing-java/ch3",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch3.md",version:"current",lastUpdatedAt:1663539008,formattedLastUpdatedAt:"9/18/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. JVM \uc774\uc57c\uae30",permalink:"/til/docs/java/optimizing-java/ch2"},next:{title:"4. \uc131\ub2a5 \ud14c\uc2a4\ud2b8 \ud328\ud134 \ubc0f \uc548\ud2f0\ud328\ud134",permalink:"/til/docs/java/optimizing-java/ch4"}},u=[{value:"\uba54\ubaa8\ub9ac",id:"\uba54\ubaa8\ub9ac",children:[{value:"\uba54\ubaa8\ub9ac \uce90\uc2dc",id:"\uba54\ubaa8\ub9ac-\uce90\uc2dc",children:[]}]},{value:"\ucd5c\uc2e0 \ud504\ub85c\uc138\uc11c\uc758 \ud2b9\uc131",id:"\ucd5c\uc2e0-\ud504\ub85c\uc138\uc11c\uc758-\ud2b9\uc131",children:[{value:"\ubcc0\ud658 \uc0c9\uc778 \ubc84\ud37c(TLB)",id:"\ubcc0\ud658-\uc0c9\uc778-\ubc84\ud37ctlb",children:[]},{value:"\ubd84\uae30 \uc608\uc73d\uacfc \ucd94\uce21 \uc2e4\ud589",id:"\ubd84\uae30-\uc608\uc73d\uacfc-\ucd94\uce21-\uc2e4\ud589",children:[]},{value:"\ud558\ub4dc\uc6e8\uc5b4 \uba54\ubaa8\ub9ac \ubaa8\ub378",id:"\ud558\ub4dc\uc6e8\uc5b4-\uba54\ubaa8\ub9ac-\ubaa8\ub378",children:[]}]},{value:"\uc6b4\uc601\uccb4\uc81c",id:"\uc6b4\uc601\uccb4\uc81c",children:[{value:"\uc2a4\ucf00\uc904\ub7ec",id:"\uc2a4\ucf00\uc904\ub7ec",children:[]},{value:"\uc2dc\uac04 \ubb38\uc81c",id:"\uc2dc\uac04-\ubb38\uc81c",children:[]},{value:"\ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658",id:"\ucee8\ud14d\uc2a4\ud2b8-\uad50\ud658",children:[]}]},{value:"\ub2e8\uc21c \uc2dc\uc2a4\ud15c \ubaa8\ub378",id:"\ub2e8\uc21c-\uc2dc\uc2a4\ud15c-\ubaa8\ub378",children:[]},{value:"\uae30\ubcf8 \uac10\uc9c0 \uc804\ub7b5",id:"\uae30\ubcf8-\uac10\uc9c0-\uc804\ub7b5",children:[{value:"CPU \uc0ac\uc6a9\ub960",id:"cpu-\uc0ac\uc6a9\ub960",children:[]},{value:"\uac00\ube44\uc9c0 \uc218\uc9d1",id:"\uac00\ube44\uc9c0-\uc218\uc9d1",children:[]},{value:"\uc785\ucd9c\ub825",id:"\uc785\ucd9c\ub825",children:[]},{value:"\uae30\uacc4 \uacf5\uac10",id:"\uae30\uacc4-\uacf5\uac10",children:[]}]},{value:"\uac00\uc0c1\ud654",id:"\uac00\uc0c1\ud654",children:[]},{value:"JVM\uacfc \uc6b4\uc601\uccb4\uc81c",id:"jvm\uacfc-\uc6b4\uc601\uccb4\uc81c",children:[]}],o={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc790\ubc14 \uc131\ub2a5\uc744 \uc9c4\uc9c0\ud558\uac8c \ub192\uc77c\ub824\uba74, \uc790\ubc14 \ud50c\ub7ab\ud3fc\uc758 \uadfc\uac04 \uc6d0\ub9ac\uc640 \uae30\uc220\uc5d0 \ub300\ud574 \uc54c\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uba54\ubaa8\ub9ac"},"\uba54\ubaa8\ub9ac"),(0,r.kt)("p",null,"\ubb34\uc5b4\uc758 \ubc95\uce59\uc5d0 \ub530\ub77c \uac1c\uc218\uac00 \uae09\uc99d\ud55c \ud2b8\ub79c\uc9c0\uc2a4\ud130\ub294 \ucc98\uc74c\uc5d0\ub294 \ud074\ub860 \uc18d\ub3c4\ub97c \ub192\uc774\ub294\ub370 \uc4f0\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud074\ub860 \uc18d\ub3c4\uac00 \uc99d\uac00\ud558\ub2e4 \ubcf4\ub2c8 \ud504\ub85c\uc138\uc2a4 \ucf54\uc5b4\uc758 \ub370\uc774\ud130 \uc218\uc694\ub97c \uba54\uc778 \uba54\ubaa8\ub9ac\uac00 \ub9de\ucd94\uae30 \ud798\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \uc989, \ud074\ub860 \uc18d\ub3c4\uac00 \uc62c\ub77c\uac00\ub3c4 \ub370\uc774\ud130\uac00 \ub3c4\ucc29\ud560 \ub54c\uae4c\uc9c0 CPU\uac00 \uae30\ub2e4\ub9ac\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uba54\ubaa8\ub9ac-\uce90\uc2dc"},"\uba54\ubaa8\ub9ac \uce90\uc2dc"),(0,r.kt)("p",null,"\uc774\ub97c \uc704\ud574\uc11c CPU \uce90\uc2dc\uac00 \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \ub808\uc9c0\uc2a4\ud130\ubcf4\ub2e4 \ube60\ub974\uace0 \uba54\uc778 \uba54\ubaa8\ub9ac\ubcf4\ub2e4 \ube60\ub974\uba70, \uc790\uc8fc \uc561\uc138\uc2a4\ud558\ub294 \uba54\ubaa8\ub9ac \uc704\uce58\ub294 CPU \uce90\uc2dc\uc5d0 \ubcf4\uad00\ud558\uc790\ub294 \uc544\uc774\ub514\uc5b4\ub85c \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c CPU\uc640 \uac00\uae4c\uc6b4 \uce90\uc2dc \uc21c\uc73c\ub85c L1, L2, L3 \ub4f1\uc774 \uc788\uc73c\uba70 L1\uacfc L2\ub294 \uc804\uc6a9 \ud504\ub77c\uc774\ube57 \uce90\uc2dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/119114712-5a080080-ba61-11eb-8582-56e9cccdf254.png",alt:"image"})),(0,r.kt)("p",null,"\uc774\ub97c \ud1b5\ud574\uc11c \ud504\ub85c\uc138\uc11c \ucc98\ub9ac\uc728\uc774 \ub192\uc544\uc84c\uc73c\ub098, \uce90\uc2dc\ud55c \ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uba54\ubaa8\ub9ac\uc5d0 \ub2e4\uc2dc \uc368\uc57c \ud560\uc9c0 \uacb0\uc815\ud574\uc57c\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uce90\uc2dc \uc77c\uad00\uc131 \ud504\ub85c\ud1a0\ucf5c(cache consistency protocol)")," \ub77c\ub294 \ubc29\ubc95\uc73c\ub85c \ud574\uacb0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc138\uc11c\uc758 \uac00\uc7a5 \uc800\uc218\uc900\uc5d0\uc11c MESI \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\ub294\ub370 \uc774 MESI \ud504\ub85c\ud1a0\ucf5c\uc740 \uce90\uc2dc \ub77c\uc778 \uc0c1\ud0dc\ub97c \ub124\uac00\uc9c0\ub85c \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modified(\uc218\uc815): \ub370\uc774\ud130\uac00 \uc218\uc815\ub41c \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"Exclusive(\ubc30\ud0c0): \uc774 \uce90\uc2dc\uc5d0\ub9cc \uc874\uc7ac\ud558\uace0 \uba54\uc778 \uba54\ubaa8\ub9ac \ub0b4\uc6a9\uacfc \ub3d9\uc77c\ud55c \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"Shared(\uacf5\uc720): \ub458 \uc774\uc0c1\uc758 \uce90\uc2dc\uc5d0 \ub370\uc774\ud130\uac00 \ub4e4\uc5b4 \uc788\uace0 \uba54\ubaa8\ub9ac \ub0b4\uc6a9\uacfc \ub3d9\uc77c\ud55c \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"Invalid(\ubb34\ud6a8): \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uac00 \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\uc5ec \ubb34\ud6a8\ud55c \uc0c1\ud0dc")),(0,r.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74, \uba40\ub9ac \ud504\ub85c\uc138\uc11c\ub294 \ub3d9\uc2dc\uc5d0 \uacf5\uc720 \uc0c1\ud0dc\ub85c \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5b4\ub290 \ud55c \ud504\ub85c\uc138\uc11c\uac00 \ubc30\ud0c0\ub098 \uc218\uc815 \uc0c1\ud0dc\ub85c \ubc14\ub00c\uba74 \ub2e4\ub978 \ud504\ub85c\uc138\uc11c\ub294 \uac15\uc81c\ub85c \ubb34\ud6a8\uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uce90\uc2dc \uc2a4\ud0ac\uc744 \ud1b5\ud574\uc11c, \ub370\uc774\ud130\ub97c \uc2e0\uc18d\ud558\uac8c \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc4f0\uace0 \uc77d\uc744 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uce90\uc2dc \ud558\ub4dc\uc6e8\uc5b4\uc758 \uc791\ub3d9 \uc6d0\ub9ac \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Caching {\n  private Final int ARR_SIZE = 2 * 1024 * 1024;\n  private Final int[] testData = new int[ARR_SIZE];\n\n  private void run() {\n    System.err.println("Start: "+ System.currentTimeMillis());\n    for (int i = 0; i < 15_000; i++) {\n      touchEveryLine();\n      touchEveryItem();\n    }\n    System.err.println("Warmup Finished: "+ System.currentTimeMillis());\n    System.err.println("Item Line");\n\n    for (int i = 0; i < 100; i++) {\n      long t0 = System.nanoTime();\n      touchEveryLine();\n      long t1 = System.nanoTime();\n      touchEveryItem();\n      long t2 = System.nanoTime();\n      long elItem = t2 - t1;\n      long elLine = t1 - t0;\n      double diff = elItem - elLine;\n      System.err.println(elItem + " " + elLine +" "+ (100 \\* diff / elLine));\n    }\n  }\n\n  private void touchEveryItem() {\n    for (int i = 0; i < testData.length; i++)\n      testData[i]++;\n  }\n\n  private void touchEveryLine() {\n    for (int i = 0; i < testData.length; i += 16)\n      testData[i]++;\n  }\n\n  public static void main(String[] args) {\n    Caching c = new Caching();\n    c.run();\n  }\n}\n')),(0,r.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"touchEveryItem()")," \uba54\uc11c\ub4dc\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchEveryLine()")," \uba54\uc11c\ub4dc\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uc77c\uc744 \ud560 \uac83 \uac19\uc9c0\ub9cc, \uc18c\uc694\uc2dc\uac04\uc740 \ube44\uc2b7\ud569\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 \uba54\ubaa8\ub9ac \ubc84\uc2a4\ub97c \uc608\uc5f4\uc2dc\ud0a4\ub294 \ubd80\ubd84\uc774 \uac00\uc7a5 \ud070 \uc601\ud5a5\uc774 \ubbf8\uccd0\uc11c \uadf8\ub807\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989, \uc790\ubc14 \uc131\ub2a5\uc744 \ub17c\ud560 \ub54c\ub294 \uac1d\uccb4 \ud560\ub2f9\ub960\uc5d0 \ub530\ub978 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubbfc\uac10\ub3c4\uac00 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ucd5c\uc2e0-\ud504\ub85c\uc138\uc11c\uc758-\ud2b9\uc131"},"\ucd5c\uc2e0 \ud504\ub85c\uc138\uc11c\uc758 \ud2b9\uc131"),(0,r.kt)("p",null,"\uba54\ubaa8\ub9ac \uce90\uc2dc\uac00 \ud2b8\ub79c\uc9c0\uc2a4\ud130\ub97c \ud65c\uc6a9\ud558\ub294 \uac00\uc7a5 \ud070 \ubd84\uc57c\uc774\uc9c0\ub9cc \uc774\uc678\uc5d0\ub3c4 \uc5ec\ub7ec \uae30\uc220\ub4e4\uc774 \ub098\uc654\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ubcc0\ud658-\uc0c9\uc778-\ubc84\ud37ctlb"},"\ubcc0\ud658 \uc0c9\uc778 \ubc84\ud37c(TLB)"),(0,r.kt)("p",null,"\uc5ec\ub7ec \uce90\uc2dc\uc5d0\uc11c \uc911\uc694\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uc7a5\uce58\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uc0c1 \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \ubb3c\ub9ac \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub85c \ub9e4\ud551\ud558\ub294 \ud398\uc774\uc9c0 \ud14c\uc774\ube14\uc758 \uce90\uc2dc \uc5ed\ud560\uc744 \uc218\ud589"),"\ud569\ub2c8\ub2e4. \uc774 \ub355\ubd84\uc5d0 \uac00\uc0c1 \uc8fc\uc18c\ub97c \ucc38\uc870\ud574 \ubb3c\ub9ac \uc8fc\uc18c\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \ube48\ubc88\ud55c \uc791\uc5c5 \uc18d\ub3c4\uac00 \ub9e4\uc6b0 \ube68\ub77c\uc9d1\ub2c8\ub2e4. \ud604\uc7ac\uc758 \uce69\uc5d0\uc11c\ub294 TLB\ub294 \uac70\uc758 \ud544\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ubd84\uae30-\uc608\uc73d\uacfc-\ucd94\uce21-\uc2e4\ud589"},"\ubd84\uae30 \uc608\uc73d\uacfc \ucd94\uce21 \uc2e4\ud589"),(0,r.kt)("p",null,"\ubd84\uae30 \uc608\uce21\uc740 \ucd5c\uc2e0 \ud504\ub85c\uc138\uc11c\uc758 \uace0\uae09 \uae30\ubc95 \uc911 \ud558\ub098\uc774\uba70 ",(0,r.kt)("strong",{parentName:"p"},"\ud504\ub85c\uc138\uc11c\uac00 \uc870\uac74 \ubd84\uae30\ud558\ub294 \uae30\uc900 \uac12\uc744 \ud3c9\uac00\ud558\ub290\ub77c \ub300\uae30\ud558\ub294 \ud604\uc0c1\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4.")," \uc694\uc998\uc758 \ud504\ub85c\uc138\uc11c\ub294 \ub2e4\ub2e8\uacc4 \uba85\ub839 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud1b5\ud574\uc11c 1\uc0ac\uc774\ud074\uc744 \uc5ec\ub7ec \uac1c\ubc1c \ub2e8\uacc4\ub85c \ub098\ub204\uc5b4 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc870\uac74\ubb38\uc744 \ub2e4 \ud3c9\uac00\ud558\uae30 \uc804\uae4c\uc9c0 \ubd84\uae30 \uc774\ud6c4 \uba85\ub839\uc744 \uc54c\uc218 \uc5c6\ub294 \uac83\uc774 \ubb38\uc81c\uac00 \ub418\ub294\ub370, \ud504\ub85c\uac8c\uc138\uc11c\ub294 \uc789\uc5ec \ud2b8\ub79c\uc9c0\uc2a4\ud130\ub97c \uc0ac\uc6a9\ud574 \ubc1c\uc0dd \uac00\ub2a5\uc131\uc774 \ud070 \ube0c\ub79c\uce58\ub97c \ubbf8\ub9ac \uacb0\uc815\ud558\ub294 \ud734\ub9ac\uc2a4\ud2f1\uc744 \ud615\uc131\ud569\ub2c8\ub2e4. \ucd94\uce21\uc774 \ub9de\uc744 \ub54c\ub294 CPU\ub294 \ub2e4\uc74c \uc791\uc5c5\uc744 \uc9c4\ud589\ud558\uace0, \ud2c0\ub9ac\uba74 \ubd80\ubd84\uc801\uc73c\ub85c \uc2e4\ud589\ud55c \uba85\ub839\uc744 \ubaa8\ub450 \ud3d0\uae30\ud558\ub290 \ubc29\uc2dd\uc73c\ub85c \uac11\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud558\ub4dc\uc6e8\uc5b4-\uba54\ubaa8\ub9ac-\ubaa8\ub378"},"\ud558\ub4dc\uc6e8\uc5b4 \uba54\ubaa8\ub9ac \ubaa8\ub378"),(0,r.kt)("p",null,"\uc11c\ub85c \ub2e4\ub978 CPU\uac00 \uc77c\uad00\ub418\uac8c \ub3d9\uc77c\ud55c \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \uc561\uc138\uc2a4 \ud560 \uc218 \uc788\uc744\uae4c\ub77c\ub294 \uc9c8\ubb38\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \ub098\uc654\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e8\uacc4\ub97c \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574 \ucf54\ub4dc \uc870\uac74\uc5d0 \ub530\ub77c \uc21c\uc11c\ub97c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JVM\uc740 \ud504\ub85c\uc138\uc11c \ud0c0\uc785\ubcc4\ub85c \uc0c1\uc774\ud55c \uba54\ubaa8\ub9ac \uc561\uc138\uc2a4 \uc77c\uad00\uc131\uc744 \uace0\ub824\ud574\uc11c \uba85\uc2dc\uc801\uc778 \uc57d\ud55c \ubaa8\ub378\ub85c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucf54\ub4dc\uac00 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub77d\uacfc volatile\uc744 \uc815\ud655\ud558\uac8c \uc54c\uace0 \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc6b4\uc601\uccb4\uc81c"},"\uc6b4\uc601\uccb4\uc81c"),(0,r.kt)("p",null,"OS\uc758 \uc8fc \uc784\ubb34\ub294 \uc5ec\ub7ec \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\uac00 \uacf5\uc720\ud558\ub294 \ub9ac\uc18c\uc2a4 \uc561\uc138\uc2a4\ub97c \uad00\uc7a5\ud558\ub294 \uc77c\uc785\ub2c8\ub2e4. \ud55c\uc815\ub41c \ub9ac\uc18c\uc2a4\ub97c \uace8\uace0\ub8e8 \ub098\ub220\uc904 \uae30\ub2a5\uc774 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba54\ubaa8\ub9ac \uad00\ub9ac \uc720\ub2db(MMU, Memory Management Unit)\uc744 \ud1b5\ud574 \uac00\uc0c1 \uc8fc\uc18c \ubc29\uc2dd\uacfc \ud398\uc774\uc9c0 \ud14c\uc774\ube14\uc740 \uba54\ubaa8\ub9ac \uc561\uc138\uc2a4 \uc81c\uc5b4\uc758 \ud575\uc2ec\uc73c\ub85c \ud55c \ud504\ub85c\uc138\uc2a4\uac00 \uc18c\uc720\ud55c \uba54\ubaa8\ub9ac \uc601\uc5ed\uc744 \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uac00 \ud568\ubd80\ub85c \ud6fc\uc190\ud558\uc9c0 \ubabb\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc2a4\ucf00\uc904\ub7ec"},"\uc2a4\ucf00\uc904\ub7ec"),(0,r.kt)("p",null,"\ud504\ub85c\uc138\uc2a4 \uc2a4\ucf00\uc904\ub7ec\ub294 \uc2e4\ud589 \ud050\ub97c \ud1b5\ud574\uc11c CPU \uc561\uc138\uc2a4\ub97c \ud1b5\uc81c\ud569\ub2c8\ub2e4. \uc2a4\ucf00\uc904\ub7ec\ub294 \uc778\ud130\ub7fd\ud2b8\uc5d0 \uc751\ub2f5\ud558\uace0 CPU \ucf54\uc5b4 \uc561\uc138\uc2a4\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/119247274-0f9e9500-bbc3-11eb-98c6-f305b369d35f.png",alt:"\uc2a4\ub808\ub4dc \uc0dd\uba85\uc8fc\uae30"})),(0,r.kt)("p",null,"\uc2a4\ucf00\uc904\ub7ec\uc758 \uc6c0\uc9c1\uc784\uc744 \ud655\uc778\ud558\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 OS\uac00 \uc2a4\ucf00\uc904\ub9c1 \uacfc\uc815\uc5d0\uc11c \ubc1c\uc0dd\uc2dc\ud0a8 \uc624\ubc84\ud5e4\ub4dc\ub97c \uad00\uce21\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'long start = System.currentTimeMillis();\nfor (int i = 0; i < 1_000; i++) {\n  Thread.sleep(1);\n}\nlong end = System.currentTimeMillis();\nSystem.out.println("Millis elapsed: " + (end - start) / 4000.0);\n')),(0,r.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 OS\ub9c8\ub2e4 \uacb0\uacfc\uac00 \ub2e4\ub985\ub2c8\ub2e4. Mac OS \uc81c pc \uae30\uc900\uc73c\ub85c\ub294 0.3075 \ubc00\ub9ac\ucd08\uac00 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud0c0\uc774\ubc0d\uc740 \uc131\ub2a5 \uce21\uc815, \ud504\ub85c\uc138\uc2a4 \uc2a4\ucf00\uc904\ub9c1, \uae30\ud0c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ud0dd\uc758 \ub2e4\uc591\ud55c \ud30c\ud2b8\uc5d0\uc11c \uc544\uc8fc \uc911\uc694\u3155\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc2dc\uac04-\ubb38\uc81c"},"\uc2dc\uac04 \ubb38\uc81c"),(0,r.kt)("p",null,"OS\ub294 \uc800\ub9c8\ub2e4 \ub2e4\ub974\uac8c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"System.currentTimeMillis()")," \uc640 \uac19\uc740 \uba54\uc11c\ub4dc\ub3c4 OS\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc5d0 \uc758\uc874\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ucee8\ud14d\uc2a4\ud2b8-\uad50\ud658"},"\ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658"),(0,r.kt)("p",null,"\ucee8\uccb5\uc2a4\ud2b8 \uad50\ud658\uc740 OS \uc2a4\ucf00\uc904\ub7ec\uac00 \ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \uc2a4\ub808\ub4dc/\ud14c\uc2a4\ud06c\ub97c \uc5c6\uc560\uace0 \ub300\uae30 \uc911\uc778 \ub2e4\ub978 \uc2a4\ub808\ub4dc/\ud14c\uc2a4\ud06c\ub85c \ub300\uccb4\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \uc774 \uacbd\uc6b0\uc5d0 \uc720\uc800 \ubaa8\ub4dc\uc5d0\uc11c \ucee4\ub110 \ubaa8\ub4dc\ub85c \ubc14\ub00c\uae30 \ub54c\ubb38(",(0,r.kt)("inlineCode",{parentName:"p"},"mode switch"),")\uc5d0 \ube44\uc2fc\uc791\uc5c5\uc785\ub2c8\ub2e4. \ud2b9\ud788 \ucee4\ub110\uacf5\uac04\uc640 \uc720\uc800\uacf5\uac04\uc774 \ubc14\ub00c\uac8c \ub41c\ub2e4\uba74, \ub2e4\ub978 \uce90\uc2dc\ub97c \uc5b4\uca54 \uc218 \uc5c6\uc774 \uac15\uc81c\ub85c \ube44\uc6cc\uc57c\ud569\ub2c8\ub2e4.\ucee4\ub110 \ubaa8\ub4dc\ub85c \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad50\ud658\ub418\uba74 TLB\ub97c \ube44\ub86f\ud55c \ub2e4\ub978 \uce90\uc2dc\uae4c\uc9c0\ub3c4 \ubb34\ud6a8\ud654\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \ub9ac\ub205\uc2a4\ub294 \uac00\uc0c1 \ub3d9\uc801 \uacf5\uc720 \uac1d\uccb4(vDSO, virtual Dynamically Shared Object)\ub77c\ub294 \uc7a5\uce58\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 \ucee4\ub110\uc758 \uad8c\ud55c\uc774 \ud544\uc694 \uc5c6\ub294 \uc2dc\uc2a4\ud15c \ucf5c\uc758 \uc18d\ub3c4\ub97c \ub192\uc774\ub824\uace0 \uc4f0\ub294 \uc720\uc800 \uacf5\uac04\uc758 \uba54\ubaa8\ub9ac \uc601\uc5ed\uc785\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\uc5d0\ub294 \ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658\uc774 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ube60\ub985\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub2e8\uc21c-\uc2dc\uc2a4\ud15c-\ubaa8\ub378"},"\ub2e8\uc21c \uc2dc\uc2a4\ud15c \ubaa8\ub378"),(0,r.kt)("p",null,"\uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub2e8\uc21c \uac1c\ub150\uc73c\ub85c \uae30\ubcf8 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc640 OS"),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 JVM/\ucee8\ud14c\uc774\ub108"),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc790\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud638\ucd9c\ub418\ub294 \uc678\ubd80 \uc2dc\uc2a4\ud15c"),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc720\uc785\ub418\ub294 \ud2b8\ub798\ud53d")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/119248554-e420a800-bbcc-11eb-8428-75cf269b5ee7.png",alt:"image"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uae30\ubcf8-\uac10\uc9c0-\uc804\ub7b5"},"\uae30\ubcf8 \uac10\uc9c0 \uc804\ub7b5"),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc798\ub3cc\uc544\uac00\ub294 \uac83\uc740 CPU \uc0ac\uc6a9\ub7c9, \uba54\ubaa8\ub9ac, \ub124\ud2b8\uc6cc\ud06c, I/O \ub300\uc5ed\ud3ed \ub4f1 \uc2dc\uc2a4\ud15c \ub9ac\uc18c\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc798 \uc774\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc131\ub2a5 \uc9c4\ub2e8\uc758 \uccab \ub2e8\uacc4\ub294 \uc5b4\ub290 \ub9ac\uc18c\uc2a4\uac00 \ud55c\uacc4\uc5d0 \ub2ec\ud588\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc77c\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"cpu-\uc0ac\uc6a9\ub960"},"CPU \uc0ac\uc6a9\ub960"),(0,r.kt)("p",null,"CPU \uc0ac\uc6a9\ub960\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc131\ub2a5\uc744 \ub098\ud0c0\ub0b4\ub294 \ud575\uc2ec \uc9c0\ud45c\uc785\ub2c8\ub2e4. \ubd80\ud558\uac00 \uc9d1\uc911\ub420\ub54c\ub294 \uc0ac\uc6a9\ub960\uc774 \uac00\ub2a5\ud55c 100%\uc5d0 \uac00\uae4c\uc6cc\uc9c0\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uae30\ubcf8 \ud234 2\uac00\uc9c0 ",(0,r.kt)("inlineCode",{parentName:"p"},"vmstat"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"iostat")," \uc815\ub3c4\ub294 \uc4f8 \uc904 \uc54c\uc544\uc57c\ud569\ub2c8\ub2e4. \ud2b9\ud788 \ub300\ub2e4\uc218 ",(0,r.kt)("inlineCode",{parentName:"p"},"vmstat"),"\uc740 \ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658 \ubc1c\uc0dd \ud69f\uc218\ub97c \ub098\ud0c0\ub0b4\ub294\ub370, CPU \uc0ac\uc6a9\ub960\uc774 100% \uadfc\ucc98\ub3c4 \ubabb\uac14\ub294\ub370 \ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658 \ube44\uc728\uc774 \ub192\uc73c\uba74 I/O\uc5d0\uc11c \ube14\ub85c\ud0b9\uc774 \uc77c\uc5b4\ub0ac\uac70\ub098 \uc2a4\ub808\ub4dc \ub77d \uacbd\ud569\uc774 \ubc1c\uc0dd\ud588\uc744 \ud655\ub960 \uc774 \ub192\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"vmstat")," \ucd9c\ub825 \uacb0\uacfc\ub97c \ubd10\uc11c\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uacbd\uc6b0\uc758 \uc218\ub97c \ud655\uc778\ud558\uae30 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"VisualVM"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uac00\ube44\uc9c0-\uc218\uc9d1"},"\uac00\ube44\uc9c0 \uc218\uc9d1"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f JVM\uc740 \uc2dc\uc791 \uc2dc\uba54\ubaa8\ub9ac\ub97c \uc720\uc800 \uacf5\uac04\uc5d0 \ud560\ub2f9/\uad00\ub9ac\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud558\ub290\ub77c \uc2dc\uc2a4\ud15c \ucf5c\uc744 \ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \ud558\ub824\uace0 \ucee4\ub110 \uad50\ud658\uc744 \ud560 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c CPU \uc0ac\uc6a9\ub960\uc774 \uc544\uc8fc \ub192\ub2e4\uba74 GC \ubb38\uc81c\ub294 \uc544\ub2c8\uc9c0\ub9cc, JVM \ud504\ub85c\uc138\uc2a4\uac00 \uc720\uc800 \uacf5\uac04\uc5d0 CPU\ub97c 100% \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 GC\ub97c \uc758\uc2ec\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc785\ucd9c\ub825"},"\uc785\ucd9c\ub825"),(0,r.kt)("p",null,"\ud30c\uc77c I/O\ub294 \uc608\ubd80\ud130 \uc804\uccb4 \uc2dc\uc2a4\ud15c \uc131\ub2a5\uc5d0 \uc554\uc801\uc778 \uc874\uc7ac\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \ub300\ubd80\ubd84\uc758 \uc790\ubc14 \ud504\ub85c\uadf8\ub7a8\uc740 \ub2e8\uc21c\ud55c I/O\ub9cc \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c I/O\uac00 \uc9d1\uc911\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud558\ub098\ub9cc \uc788\ub294 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"iostat")," \uac19\uc740 \ud234\uc740 \uae30\ucd08 \uc9c4\ub2e8\uc5d0 \uc88b\uc544\uc9d1\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\ucee4\ub110-\ubc14\uc774\ud328\uc2a4-io"},"\ucee4\ub110 \ubc14\uc774\ud328\uc2a4 I/O"),(0,r.kt)("p",null,"\ucee4\ub110\uc744 \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud574 \uc720\uc800 \uacf5\uac04\uc5d0 \ub123\ub294 \uc791\uc5c5\uc740 \ube44\uc2fc \uc791\uc5c5\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc774\ub97c \ub300\uc2e0 \ub9e4\ud551\ud574\uc8fc\ub294 \uc804\uc6a9 HW/SW\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574\uc11c \ucee8\ud14d\uc2a4\ud2b8 \uad50\ud658\uc774\ub098 \uc774\uc911 \ubcf5\uc0ac\ub97c \ub9c9\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/119249009-4d55ea80-bbd0-11eb-9932-f40c3ddb66e1.png",alt:"image"})),(0,r.kt)("h3",{id:"\uae30\uacc4-\uacf5\uac10"},"\uae30\uacc4 \uacf5\uac10"),(0,r.kt)("p",null,"\uae30\uacc4 \uacf5\uac10\uc740 \uc131\ub2a5\uc744 \uc870\uae08\uc774\ub77c\ub3c4 \ub354 \ub192\uc5ec\uc57c\ud558\ub294 \uc0c1\ud669\uc774\ub77c\uba74, \uacf5\uac10\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ud1a1\ud788 \uace0\uc131\ub2a5, \uc800\uc9c0\uc5f0\uc774 \ud544\uc218\uc778 \ubd84\uc57c\uc5d0\uc11c \uac1c\ubc1c\uc790\uac00 \uc790\ubc14/VJM\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ub824\uba74 JVM\uc774 \ubb34\uc5c7\uc774\uace0 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc5b4\ub5bb\uac8c \uc0c1\ud654\uc791\uc6a9\ud558\ub294 \uc9c0 \uc774\ud574\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uac00\uc0c1\ud654"},"\uac00\uc0c1\ud654"),(0,r.kt)("p",null,"\uac00\uc0c1\ud654\uc758 \ud2b9\uc9d5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac00\uc0c1\ud654 OS\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc740 \ube44\uac00\uc0c1\ud654 OS\uc5d0\uc11c \uc2e4\ud589\ud560 \ub54c\uc640 \ub3d9\uc77c\ud558\uac8c \uc791\ub3d9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud558\uc774\ud37c\ubc14\uc774\uc800\ub294 \ubaa8\ub4e0 \ud558\ub4dc\uc6e8\uc5b4 \ub9ac\uc18c\uc2a4 \uc561\uc138\uc2a4\ub97c \uc870\uc815\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc0c1\ud654 \uc624\ubc84\ud5e4\ub4dc\ub294 \uac00\uae09\uc801 \uc791\uc544\uc57c \ud558\uba70 \uc2e4\ud589 \uc2dc\uac04\uc758 \uc0c1\ub2f9 \ubd80\ubd84\uc744 \ucc28\uc9c0\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uac00\uc0c1\ud654 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ube44\uac00\uc0c1\ud654 \uc2dc\uc2a4\ud15c\ucc98\ub7fc \uac8c\uc2a4\ud2b8 OS\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \uc9c1\uc811 \uc561\uc138\uc2a4 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ucee4\ub110 \uba85\ub839\uc5b4\ub97c unpriviledged \uba85\ub839\uc5b4\ub85c \uace0\uccd0\uc11c \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4. \ub610 \uacfc\ud55c TLB\uac00 \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub3c4\ub85d \uc77c\ubd80 OS \ucee4\ub110\uc758 \uc790\ub8cc \uad6c\uc870\ub294 \uc100\ub3c4 \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"jvm\uacfc-\uc6b4\uc601\uccb4\uc81c"},"JVM\uacfc \uc6b4\uc601\uccb4\uc81c"),(0,r.kt)("p",null,"JVM\uc740 \uc790\ubc14 \ucf54\ub4dc\uc5d0 \uacf5\uc6a9 \uc778\ud130\ud398\uc774\uc2a4\ub974\ub97c \uc81c\uacf5\ud574\uc11c OS\uc5d0 \ub3c5\ub9bd\uc801\uc778 \uc2e4\ud589 \ud658\uacbd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc2a4\ub808\ub4dc \uc2a4\ucf00\uc904\ub9c1\uacfc \uac19\uc740 \uae30\ubcf8\uc801\uc778 \uc11c\ube44\uc2a4\uc870\ucc28 \ud558\ubd80 OS\uc5d0 \ubc18\ub4dc\uc2dc \uc561\uc138\uc2a4\ud574\uc57c\ud558\uba70 \uc774\ub7f0 \uae30\ub2a5\uc740 natvie \ud0a4\uc6cc\ub4dc\ub97c \ubd99\uc778 \ub124\u314c\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774\uc791\uc5c5\uc744 \ub300\ud589\ud558\ub294 \uacf5\ud1b5 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc790\ubc14 \ub124\uc774\ud2f0\ube0c \uc778\ud130\ud398\uc774\uc2a4(JNI, Java Native Interface)\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ud56b\uc2a4\ud31f \ud638\ucd9c\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\ucc98\ub7fc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/119251437-76cb4200-bbe1-11eb-8182-a3f1dec40500.png",alt:"image"})))}c.isMDXComponent=!0}}]);