"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1120],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return o}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=k(l),o=r,h=m["".concat(p,".").concat(o)]||m[o]||d[o]||a;return l?n.createElement(h,i(i({ref:t},c),{},{components:l})):n.createElement(h,i({ref:t},c))}));function o(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var k=2;k<a;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2478:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k},default:function(){return d}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i=["components"],u={sidebar_position:6},p={unversionedId:"dev/clean-architecture/ch6",id:"dev/clean-architecture/ch6",isDocsHomePage:!1,title:"6. \uc138\ubd80\uc0ac\ud56d",description:"30\uc7a5. \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",source:"@site/docs/dev/clean-architecture/ch6.md",sourceDirName:"dev/clean-architecture",slug:"/dev/clean-architecture/ch6",permalink:"/til/docs/dev/clean-architecture/ch6",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/clean-architecture/ch6.md",version:"current",lastUpdatedAt:1641902795,formattedLastUpdatedAt:"1/11/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \uc544\ud0a4\ud14d\ucc98",permalink:"/til/docs/dev/clean-architecture/ch5"},next:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 1",permalink:"/til/docs/dev/clean-code/ch1"}},k=[{value:"30\uc7a5. \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",id:"30\uc7a5-\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",children:[{value:"\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4",id:"\uad00\uacc4\ud615-\ub370\uc774\ud130\ubca0\uc774\uc2a4",children:[]},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2dc\uc2a4\ud15c\uc740 \uc65c \uc774\ub807\uac8c \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294\uac00?",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc2dc\uc2a4\ud15c\uc740-\uc65c-\uc774\ub807\uac8c-\ub110\ub9ac-\uc0ac\uc6a9\ub418\ub294\uac00",children:[]},{value:"\ub514\uc2a4\ud06c\uac00 \uc5c6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c",id:"\ub514\uc2a4\ud06c\uac00-\uc5c6\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub420\uae4c",children:[]},{value:"\uc138\ubd80\uc0ac\ud56d",id:"\uc138\ubd80\uc0ac\ud56d",children:[]},{value:"\ud558\uc9c0\ub9cc \uc131\ub2a5\uc740?",id:"\ud558\uc9c0\ub9cc-\uc131\ub2a5\uc740",children:[]},{value:"\uac1c\uc778\uc801\uc778 \uc77c\ud654",id:"\uac1c\uc778\uc801\uc778-\uc77c\ud654",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}]},{value:"31\uc7a5. \uc6f9\uc740 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",id:"31\uc7a5-\uc6f9\uc740-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",children:[{value:"\ub05d\uc5c6\uc774 \ubc18\ubcf5\ud558\ub294 \ucd94",id:"\ub05d\uc5c6\uc774-\ubc18\ubcf5\ud558\ub294-\ucd94",children:[]},{value:"\uc694\uc57d",id:"\uc694\uc57d",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860-1",children:[]}]},{value:"32\uc7a5. \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",id:"32\uc7a5-\ud504\ub808\uc784\uc6cc\ud06c\ub294-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4",children:[{value:"\ud504\ub808\uc784\uc6cc\ud06c \uc81c\uc791\uc790",id:"\ud504\ub808\uc784\uc6cc\ud06c-\uc81c\uc791\uc790",children:[]},{value:"\ud63c\uc778 \uad00\uacc4\uc758 \ube44\ub300\uce6d\uc131",id:"\ud63c\uc778-\uad00\uacc4\uc758-\ube44\ub300\uce6d\uc131",children:[]},{value:"\uc704\ud5d8 \uc694\uc778",id:"\uc704\ud5d8-\uc694\uc778",children:[]},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45",children:[]},{value:"\uc774\uc81c \uc120\uc5b8\ud569\ub2c8\ub2e4.",id:"\uc774\uc81c-\uc120\uc5b8\ud569\ub2c8\ub2e4",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860-2",children:[]}]},{value:"33\uc7a5. \uc0ac\ub840 \uc5f0\uad6c: \ube44\ub514\uc624 \ud310\ub9e4",id:"33\uc7a5-\uc0ac\ub840-\uc5f0\uad6c-\ube44\ub514\uc624-\ud310\ub9e4",children:[{value:"\uc81c\ud488",id:"\uc81c\ud488",children:[]},{value:"\uc720\uc2a4\ucf00\uc774\uc2a4 \ubd84\uc11d",id:"\uc720\uc2a4\ucf00\uc774\uc2a4-\ubd84\uc11d",children:[]},{value:"\ucef4\ud3ec\ub10c\ud2b8 \uc544\ud0a4\ud14d\ucc98",id:"\ucef4\ud3ec\ub10c\ud2b8-\uc544\ud0a4\ud14d\ucc98",children:[]},{value:"\uc758\uc874\uc131 \uad00\ub9ac",id:"\uc758\uc874\uc131-\uad00\ub9ac",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860-3",children:[]}]},{value:"34\uc7a5. \ube60\uc838 \uc788\ub294 \uc7a5",id:"34\uc7a5-\ube60\uc838-\uc788\ub294-\uc7a5",children:[{value:"\uacc4\uce35 \uae30\ubc18 \ud328\ud0a4\uc9c0",id:"\uacc4\uce35-\uae30\ubc18-\ud328\ud0a4\uc9c0",children:[]},{value:"\uae30\ub2a5 \uae30\ubc18 \ud328\ud0a4\uc9c0",id:"\uae30\ub2a5-\uae30\ubc18-\ud328\ud0a4\uc9c0",children:[]},{value:"\ud3ec\ud2b8\uc640 \uc5b4\ub311\ud130",id:"\ud3ec\ud2b8\uc640-\uc5b4\ub311\ud130",children:[]},{value:"\ucef4\ud3ec\ub10c\ud2b8 \uae30\ubc18 \ud328\ud0a4\uc9c0",id:"\ucef4\ud3ec\ub10c\ud2b8-\uae30\ubc18-\ud328\ud0a4\uc9c0",children:[]},{value:"\uad6c\ud604 \uc138\ubd80\uc0ac\ud56d\uc5d4 \ud56d\uc0c1 \ubb38\uc81c\uac00 \uc788\ub2e4",id:"\uad6c\ud604-\uc138\ubd80\uc0ac\ud56d\uc5d4-\ud56d\uc0c1-\ubb38\uc81c\uac00-\uc788\ub2e4",children:[]},{value:"\uc870\uc9c1\ud654 vs \ucea1\uc290\ud654",id:"\uc870\uc9c1\ud654-vs-\ucea1\uc290\ud654",children:[]},{value:"\ub2e4\ub978 \uacb0\ud569 \ubd84\ub9ac \ubaa8\ub4dc",id:"\ub2e4\ub978-\uacb0\ud569-\ubd84\ub9ac-\ubaa8\ub4dc",children:[]},{value:"\uacb0\ub860: \ube60\uc838 \uc788\ub294 \uc870\uc5b8",id:"\uacb0\ub860-\ube60\uc838-\uc788\ub294-\uc870\uc5b8",children:[]}]}],c={toc:k};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"30\uc7a5-\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"},"30\uc7a5. \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ud0a4\ud14d\ucc98 \uad00\uc810\uc5d0\uc11c \ubcfc \ub54c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc5d4\ud2f0\ud2f0\uac00 \uc544\ub2d9\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc989, \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub77c \uc544\ud0a4\ud14d\ucc98\uc758 \uad6c\uc131\uc694\uc18c \uc218\uc900\uc73c\ub85c \ub04c\uc5b4\uc62c\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \ub370\uc774\ud130 \ubaa8\ub378\uc774 \uc544\ub2cc \uc77c\uac1c \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc77c \ubfd0\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uad00\uacc4\ud615-\ub370\uc774\ud130\ubca0\uc774\uc2a4"},"\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc6d0\uce59\uc744 \uc815\uc73c\ud788\u314f\uace0, \uad00\uacc4\ud615 \ubaa8\ub378\uc740 \uacc4\uc18d \uc131\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad00\ub9ac\ud615 \ud14c\uc774\ube14\uc740 \ud2b9\uc815\ud55c \ud615\uc2dd\uc758 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud3b8\ub9ac\ud558\uc9c0\ub9cc, \ub370\uc774\ud130\ub97c \ud14c\uc774\ube14\uc5d0 \ud57b \ub2e8\uc704\ub85c \ubc30\uce58\ud55c\ub2e4\ub294 \uc790\uccb4\ub294 \uc544\ud0a4\ud14d\ucc98\uc801\uc73c\ub85c\ub294 \uc804\ud600 \uc911\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc2dc\uc2a4\ud15c\uc740-\uc65c-\uc774\ub807\uac8c-\ub110\ub9ac-\uc0ac\uc6a9\ub418\ub294\uac00"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2dc\uc2a4\ud15c\uc740 \uc65c \uc774\ub807\uac8c \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294\uac00?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \ub514\uc2a4\ud06c\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \uc800\uc7a5\uc18c\uc758 \uc911\uc2ec\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098, \ub514\uc2a4\ud06c \ub54c\ubb38\uc5d0 \ud53c\ud574\uac08 \uc218 \uc5c6\ub294 \uc2dc\uac04 \uc9c0\uc5f0\uc774 \uc0dd\uacbc\uace0 \uc774\ub97c \uc644\ud654\ud558\uae30 \uc704\ud574 \uc0c9\uc778, \uce90\uc2dc, \ucffc\ub9ac \ucd5c\uc801\ud654\uac00 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud560\ub824\uba74 \ub370\uc774\ud130\uac00 \uc5b4\ub5a4 \ub370\uc774\ud130\uc778\uc9c0\ub97c \uc54c\uc544\uc57c\ud588\uace0, \uc774\uc5d0 \ub530\ub77c \ub370\uc774\ud130 \uc811\uadfc \ubc0f \uad00\ub9ac\uc2dc\uc2a4\ud15c\uc774 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774 \uc2dc\uc2a4\ud15c\uc740 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uacfc \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad00\ub9ac \uc2dc\uc2a4\ud15c(RDBMS)\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2dc\uc2a4\ud15c\uc740 \ub0b4\uc6a9 \uae30\ubc18\uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2dc\uc2a4\ud15c\uc740 \ub0b4\uc6a9\uc744 \uae30\ubc18\uc73c\ub85c \ub808\ucf54\ub4dc\ub97c \uc790\uc5f0\uc2a4\ub7fd\uace0 \ud3b8\ub9ac\ud558\uac8c \ucc3e\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.- \uc774 \ub450 \uc2dc\uc2a4\ud15c\uc740 \ub370\uc774\ud130\ub97c \ub514\uc2a4\ud06c\uc5d0 \uccb4\uacc4\ud654\ud574\uc11c, \uac01 \uc2dc\uc2a4\ud15c\uc5d0 \ud2b9\ud654\ub41c \ubc29\uc2dd\uc744\ub85c \uc811\uadfc\ud574\uc57c \ud560 \ub54c \uac00\ub2a5\ud55c \ud6a8\uc728\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uac80\uc0c9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub514\uc2a4\ud06c\uac00-\uc5c6\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub420\uae4c"},"\ub514\uc2a4\ud06c\uac00 \uc5c6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ucd5c\uadfc \ucd94\uc138\ub294 \ub514\uc2a4\ub294 RAM\uc73c\ub85c \ub300\uccb4\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub294 \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8, \ud2b8\ub9ac, \ud574\uc2dc \ud14c\uc774\ube14, \uc2a4\ud0dd, \ud050\uc640 \uac19\uc740 \ubb34\uc218\ud788 \ub9ce\uc740 \ub370\uc774\ud130\uad6c\uc870\ub85c \uccb4\uacc4\ud654\ud558\uc5ec \uc800\uc7a5\ud558\uba70, \uc774\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ud504\ub85c\uadf8\ub798\uba38\uac00 \ud558\ub294 \uc77c"),"\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc138\ubd80\uc0ac\ud56d"},"\uc138\ubd80\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc138\ubd80\uc0ac\ud56d\uc778 \uc774\uc720\ub294 \uc774\ub7ec\ud55c \ud604\uc2e4 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uba54\ucee4\ub2c8\uc998\uc5d0 \ubd88\uacfc\ud558\uba70, \ub514\uc2a4\ud06c\uc640 RAM \uc0ac\uc774\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc62e\uae38 \ub54c \uc0ac\uc6a9\ud560 \ubfd0\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud558\uc9c0\ub9cc-\uc131\ub2a5\uc740"},"\ud558\uc9c0\ub9cc \uc131\ub2a5\uc740?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc800\uc7a5\uc18c\uc758 \uce21\uba74\uc5d0\uc11c \uc131\ub2a5\uc740 \uc644\uc804\ud788 \ucea1\uc290\ud654\ud558\uc5ec \uc5c5\ubb34 \uaddc\uce59\uacfc\ub294 \ubd84\ub9ac\ud560 \uc218 \uc788\ub294 \uad00\uc2ec\uc0ac\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc131\ub2a5\uc740 \uc2dc\uc2a4\ud15c\uc758 \ubc88\ubc18\uc801\uc778 \uc544\ud0a4\ud14d\ucc98\uc640\ub294 \uc544\ubb34\ub7f0 \uad00\ub828\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uac1c\uc778\uc801\uc778-\uc77c\ud654"},"\uac1c\uc778\uc801\uc778 \uc77c\ud654"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'\uc5d4\ud130\ud504\ub77c\uc774\uc988'\ub77c\ub294 \ub2e8\uc5b4\uc640 '\uc11c\ube44\uc2a4-\uc9c0\ud5a5 \uc544\ud0a4\ud14d\ucc98'\ub77c\ub294 \uac1c\ub150\uc740 \ud604\uc2e4\ubcf4\ub2e4\ub294 \ub9c8\ucf00\ud305\uacfc \ub354 \uad00\ub828\uc774 \uae4a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uccb4\uacc4\ud654\ub41c \ub370\uc774\ud130 \uad6c\uc870\uc640 \ub370\uc774\ud130 \ubaa8\ub378\uc740 \uc544\ud0a4\ud14d\ucc98\uc801\uc73c\ub85c \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ud14c\uc774\ube14 \uad6c\uc870\ub85c \ub9cc\ub4e4\uace0 SQL\ub85c\ub9cc \uc811\uadfc\ud558\ub3c4\ub85d \ud558\ub294 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2dc\uc2a4\ud15c\uc740 \uc804\uc790\ubcf4\ub2e4\ub294 \ud6c4\uc790\uc640 \ud6e8\uc52c \uad00\ub828\uc774 \uae4a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 \uc911\uc694\ud558\uba70, \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc138\ubd80\uc0ac\ud56d\uc785\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"31\uc7a5-\uc6f9\uc740-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"},"31\uc7a5. \uc6f9\uc740 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc2e4 \uc6f9\uc774 \ubc14\uafbc \uac83\uc740 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub05d\uc5c6\uc774-\ubc18\ubcf5\ud558\ub294-\ucd94"},"\ub05d\uc5c6\uc774 \ubc18\ubcf5\ud558\ub294 \ucd94"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc571\uc758 \uc544\ud0a4\ud14d\ud2b8\uc640 UI\uc640 \uc5c5\ubb34 \uaddc\uce59\uc744 \uc11c\ub85c \uaca9\ub9ac\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc694\uc57d\ud558\uba74 GUI\ub294 \uc138\ubd80\uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc6f9\uc744 \ub2e4\ub978 \uce21\uba74\uc73c\ub85c \ubcf4\uba74, \uc785\ucd9c\ub825 \uc7a5\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac01 \uc720\uc988\ucf00\uc774\uc2a4\uac00 \uc7a5\uce58 \ub3c5\ub9bd\uc801\uc778 \ubc29\uc2dd\uc73c\ub85c UI\ub77c\ub294 \uc785\ucd9c\ub825 \uc7a5\uce58\ub97c \ub3d9\uc791\uc2dc\ud0a8\ub2e4\uace0 \uac04\uc8fc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacb0\ub860-1"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucd94\uc0c1\ud654\ub294 \uc5b4\ub824\uc6b0\uba70 \uc81c\ub300\ub85c \ub9cc\ub4e4\ub824\uba74 \uc218\ucc28\ub840\uc758 \ubc18\ubcf5 \uacfc\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"32\uc7a5-\ud504\ub808\uc784\uc6cc\ud06c\ub294-\uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"},"32\uc7a5. \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc138\ubd80\uc0ac\ud56d\uc774\ub2e4"),(0,a.kt)("p",null,"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \uac15\ub825\ud558\uba70 \uc720\uc6a9\ud558\uc9c0\ub9cc \uc544\ud0a4\ud14d\ucc98\uac00 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud504\ub808\uc784\uc6cc\ud06c-\uc81c\uc791\uc790"},"\ud504\ub808\uc784\uc6cc\ud06c \uc81c\uc791\uc790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \ub3c4\uc6c0\uc774 \ub418\uae30\ub97c \ubc14\ub77c\ub294 \ub9c8\uc74c\uc5d0 \uc81c\uacf5\ud558\uc9c0\ub9cc, \uc774\ub294 \ub2e4\ub978 \uc0ac\ub78c\uc758 \uad00\uc2ec\uc0ac\ub97c \ubc18\uc601\ud558\uc9c0 \uc54a\uc740 \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc, \uacb9\uce58\ub294 \uc601\uc5ed\uc774 \ud06c\uba74 \ud074\uc218\ub85d \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc2e4\uc81c\ub85c \ub354 \uc720\uc6a9\ud574\uc9d1\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud63c\uc778-\uad00\uacc4\uc758-\ube44\ub300\uce6d\uc131"},"\ud63c\uc778 \uad00\uacc4\uc758 \ube44\ub300\uce6d\uc131"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uacb0\ud569\ub418\uac8c \ub9cc\ub4ed\ub2c8\ub2e4. \ub610\ud55c \uc774\ub7ec\ud55c \uacb0\ud569\uc740 \uad00\uacc4\ub97c \uae68\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uacb0\ud569 \uad00\uacc4\ub294 \uc77c\ubc29\uc801\uc774\uba70, \uc774\ub97c \uc9c4\ud589\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ucde8\ud5d8\uacfc \ubd80\ub2f4\uc744 \uac00\uc838\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc704\ud5d8-\uc694\uc778"},"\uc704\ud5d8 \uc694\uc778"),(0,a.kt)("p",null,"\uace0\ub824\ud574\uc57c\ud560 \uc704\ud5d8 \uc694\uc778\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\uc758 \uc544\ud0a4\ud14d\ucc98\ub294 \uadf8\ub2e4\uc9c0 \uae54\ub054\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ucd08\uae30 \uae30\ub2a5\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\ub294 \ub2f9\uc2e0\uc5d0\uac8c \ub3c4\uc6c0\ub418\uc9c0 \uc54a\ub294 \ubc29\ud5a5\uc73c\ub85c \uc9c4\ud654\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0c8\ub86d\uace0 \ub354 \ub098\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \ub4f1\uc7a5\ud558\uc5ec \ubc14\uafb8\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud574\uacb0\ucc45"},"\ud574\uacb0\ucc45"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud574\uacb0\ucc45\uc740 ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud504\ub808\uc784\uc6cc\ud06c\uc640 \uacb0\ud569\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},"\uc5c5\ubb34 \uac1d\uccb4\ub97c \ub9cc\ub4e4 \ub54c \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc790\uc2e0\uc758 \uae30\ubc18 \ud074\ub798\uc2a4\ub85c\ubd80\ud130 \ud30c\uc0dd\ud558\uae30\ub97c \uc694\uad6c\ud55c\ub2e4\uba74 \uac70\uc808\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\uac00 \ud575\uc2ec \ucf54\ub4dc \uc548\uc73c\ub85c \ub4e4\uc5b4\uc624\uc9c0 \ubabb\ud558\uac8c \ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc989, ",(0,a.kt)("inlineCode",{parentName:"li"},"\uc758\uc874\uc131 \uaddc\uce59\uc744 \uc900\uc218\ud574\uc57c\ud569\ub2c8\ub2e4"),"."))),(0,a.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c \uc2a4\ud504\ub9c1\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"@autowired")," \uc5b4\ub178\ud14c\uc774\uc158\uc740 \uc5c5\ubb34 \uac1d\uccb4 \ub3c4\ucc98\uc5d0 \uc0b0\uc7ac\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ubcf4\ub2e4\ub294 \uba54\uc778\uc5d0\uc11c \uc758\uc874\uc131\uc744 \uc8fc\uc785\ud558\ub294 \uac83\uc774 \ub9de\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uc774\uc81c-\uc120\uc5b8\ud569\ub2c8\ub2e4"},"\uc774\uc81c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 C++\uacfc STL \uad00\uacc4\ub294 \ub5c4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640\ub294 \ubc18\ub4dc\uc2dc \uacb0\ud569\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uad00\uacc4\ub294 \uc815\uc0c1\uc801\uc774\ub098 \ud56d\uc0c1 ",(0,a.kt)("inlineCode",{parentName:"li"},"\uc120\ud0dd\uc801"),"\uc778 \uac83\uc744 \uc54c\uace0 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4. \uac00\ubccd\uac8c \uc120\ud0dd\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacb0\ub860-2"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\uc640 \ucc98\uc74c\ubd80\ud130 \uacb0\ud569\ud558\ub824 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \uc624\ub7ab\ub3d9\uc548 \uc544\ud0a4\ud14d\ucc98 \uacbd\uacc4 \ub108\uba38\uc5d0 \ub450\ub294 \uac83\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"33\uc7a5-\uc0ac\ub840-\uc5f0\uad6c-\ube44\ub514\uc624-\ud310\ub9e4"},"33\uc7a5. \uc0ac\ub840 \uc5f0\uad6c: \ube44\ub514\uc624 \ud310\ub9e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub6f0\uc5b4\ub09c \uc544\ud0a4\ud14d\ud2b8\uac00 \uc77c\uc744 \ucc98\ub9ac\ud558\ub294 \uacfc\uc815\uacfc \uacb0\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc81c\ud488"},"\uc81c\ud488"),(0,a.kt)("p",null,"\uc6f9 \uc0ac\uc774\ud2b8\uc5d0\uc11c \ube44\ub514\uc5b4\ub97c \ud310\ub9e4\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc608\uc2dc\uc785\ub2c8\ub2e4. \uc544\ub798\ub294 \uadf8 \uc694\uad6c\uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud310\ub9e4\ud558\uae38 \uc6d0\ud558\ub294 \ube44\ub514\uc624\ub4e4\uc774 \uc788\uace0, \uc774\ub97c \uac1c\uc778\uacfc \uae30\uc5c5\uc5d0\uac8c \uc6f9\uc744 \ud1b5\ud574 \ud310\ub9e4\ud558\ub294 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac1c\uc778\uc740 \ub2e8\ud488 \uac00\uaca9\uc744 \uc9c0\ubd88\ud574 \uc2a4\ud2b8\ub9ac\ubc0d\uc73c\ub85c \ubcf4\uac70\ub098, \ub354 \ub192\uc740 \uac00\uaca9\uc73c\ub85c \ube44\ub514\uc624\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc11c \uc601\uad6c \uc18c\uc7a5\uc774 \uac00\ub2a5\ud558\ube48\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uae30\uc5c5\uc6a9 \ub77c\uc774\uc120\uc2a4\ub294 \uc2a4\ud2b8\ub9ac\ubc0d \uc804\uc6a9\uc774\uba70, \ub300\ub7c9 \uad6c\ub9e4\ub97c \ud558\uba74 \ud560\uc778\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uac1c\uc778\uc740 \uc2dc\uccad\uc790\uc778 \ub3d9\uc2dc\uc5d0 \uad6c\ub9e4\uc790\uc774\uba70, \uae30\uc5c5\uc740 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \uc2e0\uccad\ud560 \ube44\ub514\uc624\ub97c \uad6c\ub9e4\ud558\ub294 \uc0ac\ub78c\uc774 \ub530\ub85c \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ube44\ub514\uc624 \uc81c\uc791\uc790\ub294 \ube44\ub514\uc624 \ud30c\uc77c\uacfc \ubc14\ub514\uc624\uc5d0 \ub300\ud55c \uc124\uba85\uc11c, \ubd80\uc18d \ud30c\uc77c\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubd80\uc18d \ud30c\uc77c\uc5d0\ub294 \uc2dc\ud5d8, \ubb38\uc81c, \ud574\ubc95, \uc18c\uc2a4 \ucf54\ub4dc \ub4f1\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad00\ub9ac\uc790\ub294 \uc2e0\uaddc \ube44\ub514\uc624 \uc2dc\ub9ac\uc988\ubb3c\uc744 \ucd94\uac00\ud558\uac70\ub098 \uae30\uc874 \uc2dc\ub9ac\uc988\ubb3c\uc5d0 \ube44\ub514\uc624\ub97c \ucd94\uac00/\uc0ad\uc81c\ud558\uba70 \ub2e4\uc591\ud55c \ub77c\uc774\uc120\uc2a4\uc5d0 \ub9de\ucdb0 \uac00\uaca9\uc744 \uce21\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc720\uc2a4\ucf00\uc774\uc2a4-\ubd84\uc11d"},"\uc720\uc2a4\ucf00\uc774\uc2a4 \ubd84\uc11d"),(0,a.kt)("p",null,"\uccab \ub2e8\uacc4\ub294 \uc561\ud130\uc640 \uc720\uc2a4\ucf00\uc774\uc2a4\ub97c \uc2dd\ubcc4\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/148851150-52ff9abe-61c2-4fc7-91fc-40118930898e.png",alt:"\uc720\uc988\ucf00\uc774\uc2a4 \ubd84\uc11d"})),(0,a.kt)("p",null,"\uc810\uc120\uc73c\ub85c \ud45c\uc2dc\ub41c \ucd94\uc0c1 \uc720\uc2a4\ucf00\uc774\uc2a4\ub294 \uc810\uc6a9\uc801\uc778 \uc815\ucc45\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \ub2e4\ub978 \uc720\uc2a4\ucf00\uc774\uc2a4\uc5d0\uc11c \uc774\ub97c \ub354 \uad6c\uccb4\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ucef4\ud3ec\ub10c\ud2b8-\uc544\ud0a4\ud14d\ucc98"},"\ucef4\ud3ec\ub10c\ud2b8 \uc544\ud0a4\ud14d\ucc98"),(0,a.kt)("p",null,"\uc774\ub97c \ubc14\ud0d5\uc73c\ub85c \uc608\ube44 \ub2e8\uacc4\uc758 \ucef4\ud3ec\ub10c\ud2b8 \uc544\ud0a4\ud14d\ucc98\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/148852225-4926856e-f5d7-4b0e-8fc4-e5e51fef8fa2.png",alt:"\uc608\ube44 \ub2e8\uacc4 \ucef4\ud3ec\ub10c\ud2b8 \uc544\ud0a4\ud14d\ucc98"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubdf0(View), \ud504\ub808\uc820\ud130(Presenter), \uc778\ud130\ub799\ud130(Interactor), \ucee8\ud2b8\ub864\ub7ec(Controller) \ub85c \ubd84\ub9ac\ub41c \uc804\ud615\uc801\uc778 \ubd84\ud560 \ubc29\ubc95\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\uc911\uc120\uc740 \uc544\ud0a4\ud14d\ucc98 \uacbd\uacc4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc \uc774\ub97c \ubd84\ud560\ud574\uc11c \uc5ec\ub7ec\uac1c\uc758 .jar \ud30c\uc77c\uc744 \ub9cc\ub4e4 \uc9c0, \ub354 \ud06c\uac8c \ud639\uc740 \ub354 \uc791\uac8c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uc120\ud0dd\uc9c0\ub97c \uc5f4\uc5b4\ub450\uba74 \uc2dc\uc2a4\ud15c\uc774 \ubcc0\uacbd\ub418\ub294 \uc591\uc0c1\uc5d0 \ub9de\ucdb0 \uc2dc\uc2a4\ud15c \ubc30\ud3ec \ubc29\uc2dd\uc744 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc758\uc874\uc131-\uad00\ub9ac"},"\uc758\uc874\uc131 \uad00\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704\uc758 \uadf8\ub9bc\uc5d0\uc11c \uc81c\uc5b4 \ud750\ub984\uc740 \uc624\ub978\ucabd\uc5d0\uc11c \uc67c\ucabd\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ubaa8\ub4e0 \ud654\uc0b4\ud45c\uac00 \uc624\ub978\ucabd\uc5d0\uc11c \uc67c\ucabd\uc744 \uac00\ub9ac\ud0a4\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \uc758\uc874\uc131\uc740 \ub354 \ub192\uc740 \uc218\uc900\uc758 \uc815\ucc45\uc744 \ud3ec\ud568\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud5a5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uad00\uacc4(\uc5f4\ub9b0 \ud654\uc0b4\ud45c)\ub294 \uc81c\uc5b4\ud750\ub984\uacfc \uac19\uc740 \ubc29\ud5a5\uc744 \uac00\ub9ac\ud0a4\uba70, \uc0c1\uc18d \uad00\uacc4(\ub2eb\ud78c \ud654\uc0b4\ud45c)\ub294 \uc81c\uc5b4\ud750\ub984\uacfc\ub294 \ubc18\ub300 \ubc29\ud5a5\uc744 \uac00\ub9ac\ud0b5\ub2c8\ub2e4. \uc774\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\uac1c\ubc29 \ud3d0\uc1c4 \uc6d0\uce59\uc744 \uc801\uc6a9\ud55c \uac83"),"\uc785\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574 \uc800\uc218\uc900\uc758 \uc138\ubd80\uc0ac\ud56d \ubcc0\uacbd\uc774 \uc0c1\uc704\ub85c \ud30c\uae09\ub418\uc5b4\uc11c \uc0c1\uc704 \uc218\uc900\uc758 \uc815\ucc45\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc74c\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uacb0\ub860-3"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ud0a4\ud14d\ucc98 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc740 ",(0,a.kt)("strong",{parentName:"li"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59\uc5d0 \uae30\ubc18\ud55c \uc561\ud130\uc758 \ubd84\ub9ac")," \uac1c\ub150\uacfc ",(0,a.kt)("strong",{parentName:"li"},"\uc758\uc874\uc11d \uaddc\uce59"),"\uc758 \uac1c\ub150\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ub85c \ub2e4\ub978 \uc774\uc720\ub77c\ub294 \uac83\uc740 \uc561\ud130\uc640 \uad00\ub828\uc774 \uc788\uc73c\uba70, \uc11c\ub85c \ub2e4\ub978 \uc18d\ub3c4\ub77c\ub294 \uac83\uc740 \uc815\ucc45 \uc218\uc900\uacfc \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \ud55c\ubc88 \uad6c\uc870\ud654\ud558\uace0 \ub098\uba74 \uc2dc\uc2a4\ud15c\uc744 \uc2e4\uc81c\ub85c \ubc30\ud3ec\ud558\ub294 \ubc29\uc2dd\uc740 \ub2e4\uc591\ud558\uac8c \uc120\ud0dd\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"34\uc7a5-\ube60\uc838-\uc788\ub294-\uc7a5"},"34\uc7a5. \ube60\uc838 \uc788\ub294 \uc7a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc55e\uc758 \uc870\uc5b8\ub4e4\uc740 \ub354 \ub098\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc124\uacc4\ud558\ub294 \ub370 \ud655\uc2e4\ud788 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud558\uba74 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \uc62c\ubc14\ub974\uac8c \uc815\uc758\ub41c \uacbd\uacc4, \uba85\ud655\ud55c \ucc45\uc784, \uadf8\ub9ac\uace0 \ud1b5\uc81c\ub41c\u3137 \uc758\uc874\uc131\uc744 \uc790\uc9c4 \ud074\ub798\uc2a4\uc640 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacc4\uce35-\uae30\ubc18-\ud328\ud0a4\uc9c0"},"\uacc4\uce35 \uae30\ubc18 \ud328\ud0a4\uc9c0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \ub2e8\uc21c\ud55c \uccab \ubc88\uc9f8 \uc124\uacc4 \ubc29\uc2dd\uc740 \uc804\ud1b5\uc801\uc778 \uc218\ud3c9 \uacc4\uce35\ud615 \uc544\ud0a4\ud14d\ucc98\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc804\ud615\uc801\uc778 \uacc4\uce35\ud615 \uc544\ud0a4\ud14d\ucc98\uc5d0\ub294 \uc6f9, '\uc5c5\ubb34 \uaddc\uce59', \uc601\uc18d\uc131 \ucf54\ub4dc\ub97c \uc704\ud574 \uacc4\uce35\uc774 \uac01\uac01 \ud558\ub098\uc529 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucc98\uc74c \uc2dc\uc791\ud560 \ub54c\ub294 \uacc4\uce35\ud615 \uc544\ud0a4\ud14d\ucc98\uac00 \uc801\ud569\ud558\ub2e4\uace0 \uc774\uc57c\uae30\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uacc4\uce35\ud615 \uc544\ud0a4\ud14d\ucc98\ub294 \uc5c5\ubb34 \ub3c4\uba54\uc778\uc5d0 \ub300\ud574 \uc544\ubb34\uac83\ub3c4 \ub9d0\ud574\uc8fc\uc9c0 \uc54a\ub294\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/148938682-15722d07-b035-4946-b867-d21fb3b7e448.png",alt:"\uacc4\uce35 \uae30\ubc18 \ud328\ud0a4\uc9c0"})),(0,a.kt)("h3",{id:"\uae30\ub2a5-\uae30\ubc18-\ud328\ud0a4\uc9c0"},"\uae30\ub2a5 \uae30\ubc18 \ud328\ud0a4\uc9c0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc870\uc9c1\ud654\ud558\ub294 \ub610 \ub2e4\ub978 \uc120\ud0dd\uc9c0\ub85c '\uae30\ub2a5 \uae30\ubc18 \ud328\ud0a4\uc9c0' \uad6c\uc870\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ub85c \uc5f0\uad00\ub41c \uae30\ub2a5, \ub3c4\uba54\uc778 \uac1c\ub150\uc5d0 \uae30\ubc18\ud558\uc5ec \uc218\uc9c1\uc758 \uc587\uc740 \uc870\uac01\uc73c\ub85c \ucf54\ub4dc\ub97c \ub098\ub204\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\uc640 \ud074\ub798\uc2a4\ub294 \uc774\uc804\uacfc \uac19\uc9c0\ub9cc, \ubaa8\ub450\uac00 \ub2e8 \ud558\ub098\uc758 \ud328\ud0a4\uc9c0\uc5d0 \uc18d\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/148939336-844d43d5-c35f-46ad-bb09-80658871e948.png",alt:"\uae30\ub2a5 \uae30\ubc18 \ud328\ud0a4\uc9c0"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uc758 \uc0c1\uc704 \uc218\uc900 \uad6c\uc870\uac00 \uc5c5\ubb34 \ub3c4\uba54\uc778\uc5d0 \ub300\ud574 \uc54c\ub824\uc8fc\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub610\ud55c \uc720\uc2a4\ucf00\uc774\uc2a4\uac00 \ubcc0\uacbd\ub420 \uacbd\uc6b0, \ubcc0\uacbd\ud574\uc57c \ud560 \ucf54\ub4dc\ub97c \ubaa8\ub450 \ucc3e\ub294 \uc791\uc5c5\uc774 \ub354 \uc26c\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uc218\ud3c9\uc801 \uacc4\uce35\ud654(\uacc4\uce35 \uae30\ubc18 \ud328\ud0a4\uc9c0)\uc640 \uc218\uc9c1\uc801 \uacc4\uce35\ud654(\uae30\ub2a5 \uae30\ubc18 \ud328\ud0a4\uc9c0) \ubaa8\ub450 \ucc28\uc120\ucc45\uc73c\ub85c \ubcf4\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud3ec\ud2b8\uc640-\uc5b4\ub311\ud130"},"\ud3ec\ud2b8\uc640 \uc5b4\ub311\ud130"),(0,a.kt)("h3",{id:"\ucef4\ud3ec\ub10c\ud2b8-\uae30\ubc18-\ud328\ud0a4\uc9c0"},"\ucef4\ud3ec\ub10c\ud2b8 \uae30\ubc18 \ud328\ud0a4\uc9c0"),(0,a.kt)("h3",{id:"\uad6c\ud604-\uc138\ubd80\uc0ac\ud56d\uc5d4-\ud56d\uc0c1-\ubb38\uc81c\uac00-\uc788\ub2e4"},"\uad6c\ud604 \uc138\ubd80\uc0ac\ud56d\uc5d4 \ud56d\uc0c1 \ubb38\uc81c\uac00 \uc788\ub2e4"),(0,a.kt)("h3",{id:"\uc870\uc9c1\ud654-vs-\ucea1\uc290\ud654"},"\uc870\uc9c1\ud654 vs \ucea1\uc290\ud654"),(0,a.kt)("h3",{id:"\ub2e4\ub978-\uacb0\ud569-\ubd84\ub9ac-\ubaa8\ub4dc"},"\ub2e4\ub978 \uacb0\ud569 \ubd84\ub9ac \ubaa8\ub4dc"),(0,a.kt)("h3",{id:"\uacb0\ub860-\ube60\uc838-\uc788\ub294-\uc870\uc5b8"},"\uacb0\ub860: \ube60\uc838 \uc788\ub294 \uc870\uc5b8"))}d.isMDXComponent=!0}}]);