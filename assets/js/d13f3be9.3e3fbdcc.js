(self.webpackChunktil=self.webpackChunktil||[]).push([[2825],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return o},kt:function(){return d}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),k=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=k(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=k(l),d=a,s=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return l?n.createElement(s,i(i({ref:t},o),{},{components:l})):n.createElement(s,i({ref:t},o))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},8401:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return o}});var n=l(2122),a=l(9756),r=(l(7294),l(3905)),i={},p={unversionedId:"Java/optimizing-java/ch6",id:"Java/optimizing-java/ch6",isDocsHomePage:!1,title:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uae30\ucd08",description:"\uac00\ube44\uc9c0 \uc218\uc9d1\uc758 \uc694\uccb4\ub294 \uc2dc\uc2a4\ud15c\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uc218\uba85\uc744 \uc815\ud655\ud788 \ubab0\ub77c\ub3c4 \ub7f0\ud0c0\uc784\uc774 \ub300\uc2e0 \uac1d\uccb4\ub97c \ucd94\uc801\ud558\uace0 \uc4f8\ubaa8\uc5c6\ub294 \uac1d\uccb4\ub97c \uc54c\uc544\uc11c \uc81c\uac70\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \uc790\ub3d9 \ud68c\uc218\ud55c \uba54\ubaa8\ub9ac\ub294 \uaed8\ub057\uc774 \ube44\uc6b0\uace0 \uc7ac\ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/Java/optimizing-java/ch6.md",sourceDirName:"Java/optimizing-java",slug:"/Java/optimizing-java/ch6",permalink:"/til/docs/Java/optimizing-java/ch6",editUrl:"https://github.com/Azderica/til/edit/main/docs/Java/optimizing-java/ch6.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ub9c8\uc774\ud06c\ub85c\ubca4\uce58\ub9c8\ud0b9\uacfc \ud1b5\uacc4",permalink:"/til/docs/Java/optimizing-java/ch5"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/Spring/toby-spring/ch1"}},u=[{value:"\ub9c8\ud06c \uc564 \uc2a4\uc704\ud504",id:"\ub9c8\ud06c-\uc564-\uc2a4\uc704\ud504",children:[{value:"\uac00\ube44\uc9c0 \uc218\uc9d1 \uc6a9\uc5b4",id:"\uac00\ube44\uc9c0-\uc218\uc9d1-\uc6a9\uc5b4",children:[]}]},{value:"\ud56b\uc2a4\ud31f \ub7f0\ud0c0\uc784 \uac1c\uc694",id:"\ud56b\uc2a4\ud31f-\ub7f0\ud0c0\uc784-\uac1c\uc694",children:[{value:"\uac1d\uccb4\ub97c \ub7f0\ud0c0\uc784\uc5d0 \ud45c\ud604\ud558\ub294 \ubc29\ubc95",id:"\uac1d\uccb4\ub97c-\ub7f0\ud0c0\uc784\uc5d0-\ud45c\ud604\ud558\ub294-\ubc29\ubc95",children:[]},{value:"GC \ub8e8\ud2b8 \ubc0f \uc544\ub808\ub098",id:"gc-\ub8e8\ud2b8-\ubc0f-\uc544\ub808\ub098",children:[]}]},{value:"\ud560\ub2f9\uacfc \uc218\uba85",id:"\ud560\ub2f9\uacfc-\uc218\uba85",children:[{value:"\uc57d\ud55c \uc138\ub300\ubcc4 \uac00\uc124",id:"\uc57d\ud55c-\uc138\ub300\ubcc4-\uac00\uc124",children:[]}]},{value:"\ud56b\uc2a4\ud31f\uc758 \uac00\ube44\uc9c0 \uc218\uc9d1",id:"\ud56b\uc2a4\ud31f\uc758-\uac00\ube44\uc9c0-\uc218\uc9d1",children:[{value:"\uc2a4\ub808\ub4dc \ub85c\uceec \ud560\ub2f9",id:"\uc2a4\ub808\ub4dc-\ub85c\uceec-\ud560\ub2f9",children:[]},{value:"\ubc18\uad6c\ud615 \uc218\uc9d1",id:"\ubc18\uad6c\ud615-\uc218\uc9d1",children:[]}]},{value:"\ubcd1\ub82c \uc218\uc9d1\uae30",id:"\ubcd1\ub82c-\uc218\uc9d1\uae30",children:[{value:"\uc601 \uc138\ub300 \ubcd1\ub82c \uc218\uc9d1",id:"\uc601-\uc138\ub300-\ubcd1\ub82c-\uc218\uc9d1",children:[]},{value:"\uc62c\ub4dc \uc138\ub300 \ubcd1\ub82c \uc218\uc9d1",id:"\uc62c\ub4dc-\uc138\ub300-\ubcd1\ub82c-\uc218\uc9d1",children:[]},{value:"\ubcd1\ub82c \uc218\uc9d1\uae30\uc758 \ud55c\uacc4",id:"\ubcd1\ub82c-\uc218\uc9d1\uae30\uc758-\ud55c\uacc4",children:[]}]},{value:"\ud560\ub2f9\uc758 \uc5ed\ud560",id:"\ud560\ub2f9\uc758-\uc5ed\ud560",children:[]}],k={toc:u};function o(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uac00\ube44\uc9c0 \uc218\uc9d1\uc758 \uc694\uccb4\ub294 \uc2dc\uc2a4\ud15c\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uc218\uba85\uc744 \uc815\ud655\ud788 \ubab0\ub77c\ub3c4 \ub7f0\ud0c0\uc784\uc774 \ub300\uc2e0 \uac1d\uccb4\ub97c \ucd94\uc801\ud558\uace0 \uc4f8\ubaa8\uc5c6\ub294 \uac1d\uccb4\ub97c \uc54c\uc544\uc11c \uc81c\uac70\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \uc790\ub3d9 \ud68c\uc218\ud55c \uba54\ubaa8\ub9ac\ub294 \uaed8\ub057\uc774 \ube44\uc6b0\uace0 \uc7ac\ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\ube44\uc9c0 \uc218\uc9d1 \uad6c\ud604\uccb4\ub294 \ub2e4\uc74c \ub450 \uac00\uc9c0 \uae30\ubcf8 \uc6d0\uce59\uc744 \uc900\uc218\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998\uc740 \ubc18\ub4dc\uc2dc \ubaa8\ub4e0 \uac00\ube44\uc9c0\ub97c \uc218\uc9d1\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0b4\uc544\uc788\ub294 \uac1d\uccb4\ub294 \uc808\ub300\ub85c \uc218\uc9d1\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."))),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc911\uc778 \uac1d\uccb4\ub97c \uc218\uc9d1\ud558\uba74 \uc138\uadf8\uba3c\ud14c\uc774\uc158 \uacb0\ud568\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub9c8\ud06c-\uc564-\uc2a4\uc704\ud504"},"\ub9c8\ud06c \uc564 \uc2a4\uc704\ud504"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ub9c8\ud06c \uc564 \uc2a4\uc704\ud504, \ud45c\uc9c0\ud558\uace0 \uc4f8\uc5b4\ub2f4\uae30")),(0,r.kt)("p",null,"\uc804\uccb4\uc801\uc778 GC \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9 \ub9ac\uc2a4\ud2b8\ub97c \uc21c\ud68c\ud558\uba74\uc11c \ub9c8\ud06c \ube44\ud2b8\ub97c \uc9c0\uc6c1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GC \ub8e8\ud2b8\ubd80\ud130 \uc0b4\uc544 \uc788\ub294 \uac1d\uccb4\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \ucc3e\uc740 \uac1d\uccb4\ub9c8\ub2e4 \ub9c8\ud06c \ube44\ud2b8\ub97c \uc138\ud305\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9 \ub9ac\uc2a4\ud2b8\ub97c \uc21c\ud68c\ud558\uba74\uc11c \ub9c8\ud06c \ube44\ud2b8\uac00 \uc138\ud305\ub418\uc9c0 \uc54a\uc740 \uac1d\uccb4\ub97c \ucc3e\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud799\uc5d0\uc11c \uba54\ubaa8\ub9ac\ub97c \ud68c\uc218\ud574 \ud504\ub9ac \ub9ac\uc2a4\ud2b8\uc5d0 \ub418\ub3cc\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9 \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \uac1d\uccb4\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\ubcf4\ud1b5 \uc0b4\uc544 \uc788\ub294 \uac1d\uccb4\ub294 \ub300\ubd80\ubd84 DFS\ub85c \ucc3e\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud574\uc11c \uc0dd\uc131\ub41c ",(0,r.kt)("strong",{parentName:"p"},"\uac1d\uccb4 \uadf8\ub798\ud504\ub97c \ub77c\uc774\ube0c \uac1d\uccb4 \uadf8\ub798\ud504"),"\ub77c\uace0\ud558\uba70 \uc811\uadfc \uac00\ub2a5\ud55c \uac1d\uccb4\uc758 \uc804\uc774 \ud3d0\uc1c4\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uac00\ube44\uc9c0-\uc218\uc9d1-\uc6a9\uc5b4"},"\uac00\ube44\uc9c0 \uc218\uc9d1 \uc6a9\uc5b4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STW",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GC \uc0ac\uc774\ud074\uc774 \ubc1c\uc0dd\ud574\uc11c \uac00\ube44\uc9c0\ub97c \uc218\uc9d1\ud558\ub294 \ub3d9\uc548\uc5d0 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uac00 \uc911\ub2e8\ub418\ub294 \uc0c1\ud669"))),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GC \uc2a4\ub808\ub4dc\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uc640 \ub3d9\uc2dc \uc2e4\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubcd1\ub82c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\ub97c \ub3d9\uc6d0\ud574\uc11c \uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc815\ud655",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc815\ud655\ud55c GC \uc2a4\ud0b5\uc740 \uc804\uccb4 \uac00\ube44\uc9c0\ub97c \ud55c\ubc29\uc5d0 \uc218\uc9d1\ud560 \uc218 \uc788\uac8c \ud799 \uc0c1\ud0dc\uc5d0 \uad00\ud55c \ucda9\ubd84\ud55c \ud0c0\uc785 \uc815\ubcf4\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc218",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\ub97c \ub0ad\ube44\ud558\ub294 \uc77c\uc774 \ub9ce\uace0 \uadfc\ubcf8\uc801\uc73c\ub85c \ud0c0\uc785 \uccb4\uacc4\ub97c \ubb34\uc2dc\ud558\ubbc0\ub85c \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub3d9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub3d9 \uc218\uc9d1\uae30\uc5d0\uc11c \uac1d\uccb4\ub294 \uba54\ubaa8\ub9ac\ub97c \uc624\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc8fc\uc18c\uac00 \uace0\uc815\ub41c \uac8c \uc544\ub2d9\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc555\ucc29",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9\ub41c \uba54\ubaa8\ub9ac\ub294 GC \uc0ac\uc774\ud074 \ub9c8\uc9c0\ub9c9\uc5d0 \uc5f0\uc18d\ub41c \ub2e8\uc77c \uc601\uc5ed\uc73c\ub85c \ubc30\uc5f4\ub418\uba70 \ubc30\uc5f4\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"memory fragmentation"),"\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubc29\ucd9c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc218\uc9d1 \uc0ac\uc774\ud074 \ub9c8\uc9c0\ub9c9\uc5d0 \ud560\ub2f9\ub41c \uc601\uc5ed\uc744 \uc644\uc804\ud788 \ube44\uc6b0\uace0 \uc0b4\uc544\ub0a8\uc740 \uac1d\uccb4\ub294 \ubaa8\ub450 \ub2e4\ub978 \uba54\ubaa8\ub9ac \uc601\uc5ed\uc73c\ub85c \ubc29\ucd9c\ud569\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud56b\uc2a4\ud31f-\ub7f0\ud0c0\uc784-\uac1c\uc694"},"\ud56b\uc2a4\ud31f \ub7f0\ud0c0\uc784 \uac1c\uc694"),(0,r.kt)("p",null,"\uc790\ubc14\uc5d0\uc11c\ub294 \ub450\uac00\uc9c0 \uac12\ub9cc \uc0ac\uc6a9\ud568"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\ud615(byte, int \ub4f1)"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ub808\ud37c\ub7f0\uc2a4")),(0,r.kt)("p",null,"\uc790\ubc14\ub294 C++\uc640 \ub2ec\ub9ac ",(0,r.kt)("strong",{parentName:"p"},"\uc8fc\uc18c\ub97c \uc5ed\ucc38\uc870(dereference)\ud558\ub294 \uc77c\ubc18\uc801\uc778 \uba54\ucee4\ub2c8\uc998\uc774 \uc5c6\uace0 \uc624\uc9c1 \uc624\ud504\uc14b \uc5f0\uc0b0\uc790\ub098 \uac1d\uccb4 \ub808\ud37c\ub7f0\uc2a4\uc758 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc790\ubc14\ub294 \uac12\uc73c\ub85c \ud638\ucd9c(",(0,r.kt)("inlineCode",{parentName:"p"},"callByValue"),")\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c\ub9cc ",(0,r.kt)("strong",{parentName:"p"},"\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c"),"\ud569\ub2c8\ub2e4. \uac1d\uccb4 \ub808\ud37c\ub7f0\uc2a4\uc758 \uacbd\uc6b0, \ubcf5\uc0ac\ub41c \uac12\uc740 \ud799\uc5d0 \uc788\ub294 \uac1d\uccb4\uc758 \uc8fc\uc18c\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uac1d\uccb4\ub97c-\ub7f0\ud0c0\uc784\uc5d0-\ud45c\ud604\ud558\ub294-\ubc29\ubc95"},"\uac1d\uccb4\ub97c \ub7f0\ud0c0\uc784\uc5d0 \ud45c\ud604\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \ub7f0\ud0c0\uc784\uc5d0 oop(ordinary object pointer, \ud3c9\ubc94\ud55c \uac1d\uccb4 \ud3ec\uc778\ud130)\ub77c\ub294 \uad6c\uc870\uccb4\ub85c \uc790\ubc14 \uac1d\uccb4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. (C\uc758 \ud3ec\uc778\ud130\uc640 \ube44\uc2b7\ud569\ub2c8\ub2e4.) oop\ub294 \ucc38\uc870\ud615 \uc9c0\uc5ed \ubcc0\uc218 \uc548\uc5d0 \uc704\uce58\ud558\uba70 \uba54\uc11c\ub4dc\uc758 \uc2a4\ud0dd \ud504\ub808\uc784\uc73c\ub85c\ubd80\ud130 \uc790\ubc14 \ud799\uc744 \uad6c\uc131\ud558\ub294 \uba54\ubaa8\ub9ac \uc601\uc5ed \ub0b4\ubd80\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"oop\ub97c \uad6c\uc131\ud558\ub294 \uc790\ub8cc \uad6c\uc870\ub294 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceOop"),"\ub294 \uc790\ubc14 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub294 \ud06c\uac8c \ub450\uac1c\uc758 \uae30\uacc4\uc5b4 \uc6cc\ub4dc 2\uac1c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mark")," \uc6cc\ub4dc(\uc778\uc2a4\ud134\uc2a4 \uad00\ub828 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Klass")," \uc6cc\ub4dc(\ud074\ub798\uc2a4 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130)")),(0,r.kt)("p",null,"\uc790\ubc14 8\uc774\ud6c4\ub85c\ub294 \uae30\uc874\uacfc \ub2ec\ub9ac Klass \uc6cc\ub4dc\uac00 \uc790\ubc14 \ud799 \ubc16\uc744 \uac00\ub9ac\ud0a4\ubbc0\ub85c \uac1d\uccb4 \ud5e4\ub354\uac00 \ud544\uc694\uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/120794204-e1319a00-c572-11eb-99ad-01812d930ac8.png",alt:"image"})),(0,r.kt)("p",null,"\ubc30\uc5f4\ub610\ud55c \uc774\ub7ec\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 Klass \uc6cc\ub4dc \ub2e4\uc74c\uc5d0 \ubc30\uc5f4 \uae38\uc774\ub97c \ub098\ud0c0\ub0b4\ub294 Length\uc6cc\ub4dc\uac00 \ubd99\uc5b4\uc788\uc5b4\uc11c C++\ucc98\ub7fc \uae38\uc774\ub97c \uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM \ud658\uacbd\uc5d0\uc11c \uc790\ubc14 \ub808\ud37c\ub7f0\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceOop"),"\ub97c \uc81c\uc678\ud55c \uc5b4\ub5a4 \uac83\ub3c4 \uac00\ub9ac\ud0ac \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uac12\uc740 \uae30\ubcf8\ud615 \uac12 \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"instanceOop")," \uc8fc\uc18c(\ub808\ud37c\ub7f0\uc2a4)\uc5d0 \ub300\uc751\ub418\ub294 \ube44\ud2b8 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc790\ubc14 \ub808\ud37c\ub7f0\uc2a4\ub294 \uc790\ubc14 \ud799\uc758 \uc8fc \uc601\uc5ed\uc5d0 \uc788\ub294 \uc8fc\uc18c\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ub808\ud37c\ub7f0\uc2a4\uac00 \uac00\ub9ac\ud0a4\ub294 \uc8fc\uc18c\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"Mark")," \uc6cc\ub4dc\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"Klass")," \uc6cc\ub4dc\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"klassOop"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"Class<?>")," \uc758 \uc778\uc2a4\ud134\uc2a4\ub294 \ub2e4\ub974\uba70 ",(0,r.kt)("inlineCode",{parentName:"li"},"klassOop"),"(\ud799\uc758 \uba54\ud0c0\ub370\uc774\ud130 \uc601\uc5ed\uc5d0 \uc788\uc74c)\uc744 \uc790\ubc14 \ubcc0\uc218\uc5d0 \ub123\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc758 oop \uccb4\uacc4\ub97c \uae4c\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. (hotspot/src/share/vm/oops\n)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oop (\ucd94\uc0c1 \ubca0\uc774\uc2a4)\n instanceOop (\uc778\uc2a4\ud134\uc2a4 \uac1d\uccb4)\n methodOop (\uba54\uc11c\ub4dc \ud45c\ud604\ud615)\n arrayOop (\ubc30\uc5f4 \ucd94\uc0c1 \ubca0\uc774\uc2a4)\n symbolOop (\ub0b4\ubd80 \uc2ec\ubcfc / \uc2a4\ud2b8\ub9c1 \ud074\ub798\uc2a4)\n klassOop (Klass \ud5e4\ub354) (\uc790\ubc14 7 \uc774\uc804\ub9cc \ud574\ub2f9)\n markOop\n")),(0,r.kt)("h3",{id:"gc-\ub8e8\ud2b8-\ubc0f-\uc544\ub808\ub098"},"GC \ub8e8\ud2b8 \ubc0f \uc544\ub808\ub098"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GC \ub8e8\ud2b8"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uba54\ubaa8\ub9ac\uc758 \uace0\uc815\uc810(\uc575\ucee4 \ud3ec\uc778\ud2b8, anchor point)\uc73c\ub85c \uba54\ubaa8\ub9ac \ud480 \uc678\ubd80\uc5d0\uc11c \ub0b4\ubd80\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130"),"\uc785\ub2c8\ub2e4. \uc989, \uba54\ubaa8\ub9ac \ud480 \ub0b4\ubd80\uc5d0\uc11c \uac19\uc740 \uba54\ubaa8\ub9ac \ud480 \ub0b4\ubd80\uc758 \ub2e4\ub978 \uba54\ubaa8\ub9ac \uc704\uce58\ub97c \uac00\ub9ac\ud0a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub0b4\ubd80 \ud3ec\uc778\ud130(internal pointer)"),"\uc640 \uc815\ubc18\ub300\uc778 \uc678\ubd80 \ud3ec\uc778\ud130\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc885\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud0dd \ud504\ub808\uc784(stack frame)"),(0,r.kt)("li",{parentName:"ul"},"JNI"),(0,r.kt)("li",{parentName:"ul"},"\ub808\uc9c0\uc2a4\ud130(\ud638\uc774\uc2a4\ud2b8\ub41c \ubcc0\uc218)"),(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ub8e8\ud2b8"),(0,r.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uac1d\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\ub85c\ub4dc\ub41c \ud074\ub798\uc2a4\uc758 \uba54\ud0c0\ub370\uc774\ud130")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f GC\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc544\ub808\ub098"),"\ub77c\ub294 \uba54\ubaa8\ub9ac \uc601\uc5ed\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4. \ud56b\uc2a4\ud31f\uc740 \uc790\ubc14 \ud799\uc744 \uad00\ub9ac\ud560 \ub54c \uc2dc\uc2a4\ud15c \ucf5c\uc744 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\ubc14/JVM \uc6cc\ud06c\ub85c\ub4dc\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\ube44\uc9c0 \uc218\uc9d1\uc744 \uc77c\uc73c\ud0a4\ub294 \ub450 \uac00\uc9c0 \uc8fc\uc694 \ud2b9\uc131"),"\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud560\ub2f9\uacfc-\uc218\uba85"},"\ud560\ub2f9\uacfc \uc218\uba85"),(0,r.kt)("p",null,"\uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uac00\ube44\uc9c0 \uc218\uc9d1\uc774 \uc77c\uc5b4\ub098\ub294 \uc8fc\ub41c \uc6d0\uc778\uc740 \ub2e4\uc74c \ub450\uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud560\ub2f9\ub960",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\uc885 \uae30\uac04 \ub3d9\uc548 \uc0c8\ub85c \uc0dd\uc131\ub41c \uac1d\uccb4\uac00 \uc0ac\uc6a9\ud55c \uba54\ubaa8\ub9ac\ub7c9"),(0,r.kt)("li",{parentName:"ul"},"\ube44\uad50\uc801 \uc27d\uac8c \uce21\uc815\uc774 \uac00\ub2a5\ud558\uace0 \uc13c\uc12c \uac19\uc740 \ud234\uc744 \ud1b5\ud574\uc11c \uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc218\uba85",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce21\uc815\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uc57d\ud55c-\uc138\ub300\ubcc4-\uac00\uc124"},"\uc57d\ud55c \uc138\ub300\ubcc4 \uac00\uc124"),(0,r.kt)("p",null,"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc758 \ub7f0\ud0c0\uc784 \uc791\uc6a9\uc744 \uad00\ucc30\ud55c \uacb0\uacfc \uc54c\uac8c \ub41c \uacbd\ud5d8 \uc9c0\uc2dd\uc774\uba70, JVM \uba54\ubaa8\ub9ac \uad00\ub9ac\uc758 \uc774\ub860\uc801 \uadfc\uac04\uc744 \ud615\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JVM \ubc0f \uc720\uc0ac \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uac1d\uccb4 \uc218\uba85\uc740 \uc774\uc6d0\uc801 \ubd84\ud3ec \uc591\uc0c1\uc744 \ubcf4\uc785\ub2c8\ub2e4. \uac70\uc758 \ub300\ubd80\ubd84\uc758 \uac1d\uccb4\ub294 \uc544\uc8fc \uc9e7\uc740 \uc2dc\uc7a5\ub9cc \uc0b4\uc544 \uc788\uc9c0\ub9cc, \ub098\uba38\uc9c0 \uac1d\uccb4\ub294 \uae30\ub300 \uc218\uba85\uc774 \ud07d\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/120880087-15ed3200-c603-11eb-8d82-eb76e7c1c465.png",alt:"image"})),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uce74\ub4dc \ud14c\uc774\ube14"),"\uc774\ub77c\ub294 \uc790\ub8cc \uad6c\uc870\uc5d0 \ub299\uc740 \uac1d\uccb4\uac00 \uc80a\uc740 \uac1d\uccb4\ub97c \ucc38\uc870\ud558\ub294 \uc815\ubcf4\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\ubc14 \uc218\uc9d1\uae30\ub294 \ud799\uc744 \uc601/\uc62c\ub4dc \uc601\uc5ed\uc73c\ub85c \ub098\ub204\uc5b4\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4. (\ud604\uc7ac\ub294 \uc870\uae08 \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4.)"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud56b\uc2a4\ud31f\uc758-\uac00\ube44\uc9c0-\uc218\uc9d1"},"\ud56b\uc2a4\ud31f\uc758 \uac00\ube44\uc9c0 \uc218\uc9d1"),(0,r.kt)("p",null,"\uc790\ubc14\ub294 C/C++\uc640 \ub2ec\ub9ac OS\ub97c \uc774\uc6a9\ud574 \ub3d9\uc801\uc73c\ub85c \uba54\ubaa8\ub9ac\ub97c \uad00\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, \uc77c\ub2e8 \ud504\ub85c\uc138\uc2a4\uac00 \uc2dc\uc791\ud558\uba74 JVM\uc740 \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud558\uace0 \uc720\uc800 \uacf5\uac04\uc5d0\uc11c \uc5f0\uc18d\ub41c \ub2e8\uc77c \uba54\ubaa8\ub9ac \ud480\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uba54\ubaa8\ub9ac \ud480\uc740 \uac01\uc790\uc758 \ubaa9\uc801\uc5d0 \ub530\ub77c \uc11c\ub85c \ub2e4\ub978 \uc601\uc5ed\uc73c\ub85c \uad6c\uc131\ub418\uba70 \uac1d\uccb4\ub294 \ubcf4\ud1b5 \uc5d0\ub374 \uc601\uc5ed\uc5d0 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc218\uc9d1\uae30\ub294 \uac1d\uccb4\ub97c \uc774\ub3d9\uc2dc\ud0a4\ub294\ub370 \uac1d\uccb4\uac00 \ucc28\uc9c0\ud55c \uc8fc\uc18c\ub294 \ub300\ubd80\ubd84 \uc2dc\uac04\uc774 \ud750\ub974\uba74\uc11c \uc544\uc8fc \ube48\ubc88\ud558\uac8c \ubc14\ub01d\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uac1d\uccb4\ub97c \uc774\ub3d9\uc2dc\ud0a4\ub294 \uac83\uc740 '\ubc29\ucd9c'\uc774\ub77c\uace0 \ud558\uba70, \ud56b\uc2a4\ud31f \uc218\uc9d1\uae30\ub294 \ub300\ubd80\ubd84 \ubc29\ucd9c \uc218\uc9d1\uae30\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc2a4\ub808\ub4dc-\ub85c\uceec-\ud560\ub2f9"},"\uc2a4\ub808\ub4dc \ub85c\uceec \ud560\ub2f9"),(0,r.kt)("p",null,"JVM\uc740 \uc131\ub2a5\uc744 \uac15\ud654\ud574\uc11c \uc5d0\ub374\uc744 \uad00\ub9ac\ud558\uba70, \uc5d0\ub374\uc740 \ub300\ubd80\ubd84\uc758 \uac1d\uccb4\uac00 \ud0c4\uc0dd\ud558\ub294 \uc7a5\uc18c\uc785\ub2c8\ub2e4. \ud2b9\ud788 \uc218\uba85\uc774 \uc9e7\uc740 \uac1d\uccb4\ub294 \ub2e4\ub978 \uacf3\uc5d0\ub294 \uc704\uce58\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c \ud2b9\ubcc4\ud788 \uad00\ub9ac\ub97c \uc798\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"JVM\uc740 \uc5d0\ub374\uc744 \uc5ec\ub7ec \ubc84\ud37c\ub85c \ub098\ub204\uc5b4 \uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\uac00 \uc0c8 \uac1d\uccb4\ub97c \ud560\ub2f9\ud558\ub294 \uad6c\uc5ed\uc73c\ub85c \ud65c\uc6a9\ud558\ub3c4\ub85d \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc774 \uad6c\uc5ed\uc744 \uc2a4\ub808\ub4dc \ub85c\uceec \ud560\ub2f9 \ubc84\ud37c(TLAB, Thread-Local Allocation Buffer)\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/120988103-33fc9300-c7b9-11eb-9a98-0998e843aee1.png",alt:"image"})),(0,r.kt)("h3",{id:"\ubc18\uad6c\ud615-\uc218\uc9d1"},"\ubc18\uad6c\ud615 \uc218\uc9d1"),(0,r.kt)("p",null,"\ubc18\uad6c\ud615 \uc218\uc9d1\uae30\ub294 \ub450 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\ub294 \ub3c5\ud2b9\ud55c \ubc29\ucd9c \uc218\uc9d1\uae30\uc785\ub2c8\ub2e4. \uc989, \uc624\ub798 \uc0b4\uc9c0 \ubabb\ud55c \uac1d\uccb4\ub97c \uc784\uc2dc \uc218\uc6a9\uc18c\uc5d0 \ub2f4\uc544 \ub450\ub294 \uc544\uc774\ub514\uc5b4\uc785\ub2c8\ub2e4. \uc774 \uacf5\uac04\uc740 \ub450\uac00\uc9c0\uc758 \uae30\ubcf8 \ud2b9\uc9d5\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc218\uc9d1\uae30\uac00 \ub77c\uc774\ube0c \ubc18\uad6c\ub97c \uc218\uc9d1\ud560 \ub54c \uac1d\uccb4\ub4e4\uc740 \ub2e4\ub978 \ubc18\uad6c\ub85c \uc555\ucc29\uc2dc\ucf1c \uc62e\uae30\uace0 \uc218\uc9d1\ub41c \ubc18\uad6c\ub294 \ube44\uc6cc\uc11c \uc7ac\uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc808\ubc18\uc758 \uacf5\uac04\uc740 \ud56d\uc0c1 \uc644\uc804\ud788 \ube44\uc6c1\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ud56b\uc2a4\ud31f\uc740 \uc774 \ubc18\uad6c\ud615 \uae30\ubc95\uacfc \uc5d0\ub374 \uacf5\uac04\uc744 \uc811\ubaa9\uc2dc\ucf1c\uc11c \uc601 \uc138\ub300 \uc218\uc9d1\uc744 \ud569\ub2c8\ub2e4. \ud56b\uc2a4\ud31f\uc5d0\uc11c\ub294 \uc601 \ud799\uc758 \ubc18\uad6c\ubd80\ub97c \uc11c\ubc14\uc774\ubc84(survivor) \uacf5\uac04\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubcd1\ub82c-\uc218\uc9d1\uae30"},"\ubcd1\ub82c \uc218\uc9d1\uae30"),(0,r.kt)("p",null,"\uc790\ubc14 \ubcd1\ub82c \uc218\uc9d1\uae30\ub3c4 \uc5ec\ub7ec\uac1c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parallel GC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \ub2e8\uc21c\ud55c \uc601 \uc138\ub300\uc6a9 \ubcd1\ub82c \uc218\uc9d1\uae30"))),(0,r.kt)("li",{parentName:"ul"},"ParNew GC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CMS \uc218\uc9d1\uae30\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c Parallel GC\ub97c \uc870\uae08 \ubcc0\ud615\ud55c \uac83\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"ParallelOld GC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc62c\ub4dc \uc138\ub300\uc6a9 \ubcd1\ub82c \uc218\uc9d1\uae30\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uc601-\uc138\ub300-\ubcd1\ub82c-\uc218\uc9d1"},"\uc601 \uc138\ub300 \ubcd1\ub82c \uc218\uc9d1"),(0,r.kt)("p",null,"\uc601\uc138\ub300 \uc218\uc9d1\uc740 \uac00\uc7a5 \ud754\ud55c \uac00\ube44\uc9c0 \uc218\uc9d1 \ud615\ud0dc\uc785\ub2c8\ub2e4. \uc2a4\ub808\ub4dc\uac00 \uc5d0\ub374\uc5d0 \uac1d\uccb4\ub97c \ud560\ub2f9\ud558\ub824\ub294\ub370 \uc790\uc2e0\uc774 \ud560\ub2f9\ubc1b\uc740 TLAB \uacf5\uac04\uc740 \ubd80\uc871\ud558\uace0 JVM\uc740 \uc0c8 TLAB\uc744 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc744 \ub54c \uc601 \uc138\ub300 \uc218\uc9d1\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc62c\ub4dc-\uc138\ub300-\ubcd1\ub82c-\uc218\uc9d1"},"\uc62c\ub4dc \uc138\ub300 \ubcd1\ub82c \uc218\uc9d1"),(0,r.kt)("p",null,"\uc62c\ub4dc \uc138\ub300\uc5d0 \ub354 \uc774\uc0c1 \ubc29\ucd9c\ud560 \uacf5\uac04\uc774 \uc5c6\uc73c\uba74 \ubcd1\ub82c \uc218\uc9d1\uae30\ub294 \uc62c\ub4dc \uc138\ub300 \ub0b4\ubd80\uc5d0\uc11c \uac1d\uccb4\ub4e4\uc744 \uc7ac\ubc30\uce58\ud574\uc11c \ub299\uc740 \uac1d\uccb4\uac00 \uc8fd\uace0 \ube60\uc838 \ubc84\ub824\uc9c4 \uacf5\uac04\uc744 \ud68c\uc218\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc62c\ub4dc \uacf5\uac04\uc740 \ud06c\uac8c \ub208\uc5d0 \ub744\ub294 \ubcc0\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub54c\ub54c\ub85c \ud070 \uac1d\uccb4\uac00 \ud14c\ub274\uc5b4\ub4dc \uc138\ub300\uc5d0 \uc9c1\uc811 \uc0dd\uc131\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc9c0\ub9cc, \uadf8 \uc678\uc5d0\ub294 \uc601 \uc138\ub300 \uac1d\uccb4\uac00 \uc2b9\uaca9\ub418\uac70\ub098 \uc62c\ub4dc/\ud480 \uc218\uc9d1\uc774 \uc77c\uc5b4\ub098 \uac1d\uccb4\ub97c \uc7ac\ud0d0\uc0c9 \ud6c4 \ub2e4\uc2dc \ud328\uce58\ud558\ub294 \ub4f1\uc758 \uc218\uc9d1\uc774 \uc77c\uc5b4\ub0a0 \ub54c\ub9cc \ubcc0\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ubcd1\ub82c-\uc218\uc9d1\uae30\uc758-\ud55c\uacc4"},"\ubcd1\ub82c \uc218\uc9d1\uae30\uc758 \ud55c\uacc4"),(0,r.kt)("p",null,"\ubc61\ub7bc \uc218\uc9d1\uae30\ub294 \uc138\ub300 \uc804\uccb4 \ucf58\ud150\uce20\ub97c \ub300\uc0c1\uc73c\ub85c \ud55c\ubc88\uc5d0 \uac00\ub2a5\ud55c \ud55c \ud6a8\uc728\uc801\uc73c\ub85c \uac00\ube44\uc9c0\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \uc774\ub7ec\ud55c \uc124\uacc4\uc5d0\ub3c4 \ub2e8\uc810\uc740 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud480 STW",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud799 \ud06c\uae30\uac00 \ucee4\uc9c8\uc218\ub85d \ub290\ub824\uc9d1\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc601\uc5ed \ub0b4 \uc0b4\uc544 \uc788\ub294 \uac1d\uccb4 \uc218\ub9cc\ud07c \ub9c8\ud0b9 \uc2dc\uac04\uc774 \ub298\uc5b4\ub0a9\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud560\ub2f9\uc758-\uc5ed\ud560"},"\ud560\ub2f9\uc758 \uc5ed\ud560"))}o.isMDXComponent=!0}}]);