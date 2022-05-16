"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6373],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(n),c=i,d=m["".concat(p,".").concat(c)]||m[c]||k[c]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7940:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l={sidebar_position:11},u={unversionedId:"java/optimizing-java/ch11",id:"java/optimizing-java/ch11",isDocsHomePage:!1,title:"11. \uc790\ubc14 \uc5b8\uc5b4\uc758 \uc131\ub2a5 \ud5a5\uc0c1 \uae30\ubc95",description:"- \uc131\ub2a5 \uac1c\ubc1c\uc790\ub294 \ucf54\ub4dc \uc124\uacc4 \ub610\ud55c \uad6c\uc0c1\uc744 \uc798 \ud574\uc57c\ud569\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch11.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch11",permalink:"/til/docs/java/optimizing-java/ch11",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch11.md",version:"current",lastUpdatedAt:1652710324,formattedLastUpdatedAt:"5/16/2022",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"10. JIT \ucef4\ud30c\uc77c\uc758 \uc138\uacc4\ub85c",permalink:"/til/docs/java/optimizing-java/ch10"},next:{title:"12. \ub3d9\uc2dc \uc131\ub2a5 \uae30\ubc95",permalink:"/til/docs/java/optimizing-java/ch12"}},p=[{value:"\uceec\ub809\uc158 \ucd5c\uc801\ud654",id:"\uceec\ub809\uc158-\ucd5c\uc801\ud654",children:[]},{value:"List \ucd5c\uc801\ud654",id:"list-\ucd5c\uc801\ud654",children:[{value:"ArrayList",id:"arraylist",children:[]},{value:"LinkedList",id:"linkedlist",children:[]},{value:"ArrayList vs LinkedList",id:"arraylist-vs-linkedlist",children:[]}]},{value:"Map \ucd5c\uc801\ud654",id:"map-\ucd5c\uc801\ud654",children:[{value:"HashMap",id:"hashmap",children:[]},{value:"TreeMap",id:"treemap",children:[]},{value:"MultiMap",id:"multimap",children:[]}]},{value:"Set \ucd5c\uc801\ud654",id:"set-\ucd5c\uc801\ud654",children:[]},{value:"\ub3c4\uba54\uc778 \uac1d\uccb4",id:"\ub3c4\uba54\uc778-\uac1d\uccb4",children:[]},{value:"\uc885\ub8cc\ud654 \uc548 \ud558\uae30",id:"\uc885\ub8cc\ud654-\uc548-\ud558\uae30",children:[]},{value:"\uba54\uc11c\ub4dc \ud578\ub4e4",id:"\uba54\uc11c\ub4dc-\ud578\ub4e4",children:[]}],o={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \uac1c\ubc1c\uc790\ub294 \ucf54\ub4dc \uc124\uacc4 \ub610\ud55c \uad6c\uc0c1\uc744 \uc798 \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub8cc \uad6c\uc870\uc5d0 \ub300\ud574 \uc544\ub294 \uac83\uc740 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uac1d\uccb4\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc2dc\uc2a4\ud15c \ub0b4\ubd80\uc5d0\uc11c \ub3c4\uba54\uc778 \uac1d\uccb4\uc758 \uc218\uba85\uc774 \uc5b4\ub5a0\ud55c\uc9c0 \uc544\ub294 \uac83\uc740 \uc131\ub2a5\uc5d0 \ub9e4\uc6b0 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uceec\ub809\uc158-\ucd5c\uc801\ud654"},"\uceec\ub809\uc158 \ucd5c\uc801\ud654"),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ucd5c\uc18c\ud55c \ub450 \uac00\uc9c0 \ucee8\ud14c\uc774\ub108\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc21c\ucc28 \ucee8\ud14c\uc774\ub108(sequential container) : \uc218\uce58 \uc778\ub371\uc2a4\ub85c \ud45c\uae30\ud55c \ud2b9\uc815 \uc704\uce58\uc5d0 \uac1d\uccb4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uad00 \ucee8\ud14c\uc774\ub108(associative container) : \uac1d\uccb4 \uc790\uccb4\ub97c \uc774\uc6a9\ud574 \uceec\ub799\uc158 \ub0b4\ubd80\uc5d0 \uc800\uc7a5\ud560 \uc704\uce58\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc790\ubc14 \uceec\ub809\uc158 API\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/126891599-07dad924-0821-46f2-a6c6-16256ca8e10e.png",alt:"image"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"list-\ucd5c\uc801\ud654"},"List \ucd5c\uc801\ud654"),(0,r.kt)("p",null,"\uc790\ubc14\uc5d0\uc11c\ub294 \ub9ac\uc2a4\ud2b8\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedList"),", \ub450\uac00\uc9c0 \uae30\ubcf8 \ud615\ud0dc\ub85c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ucc38\uace0\ub85c Stack\uc774\ub098 Vector\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"arraylist"},"ArrayList"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815 \ud06c\uae30 \ubc30\uc5f4\uc5d0 \uae30\ubc18\ud55c \ub9ac\uc2a4\ud2b8"),(0,r.kt)("li",{parentName:"ul"},"\uc6a9\ub7c9\uc740 \uac00\uae09\uc801 \ubbf8\ub9ac \uc124\uc815\ud558\ub294 \uac8c \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c ArrayList \ud06c\uae30\ub97c \uc815\ud655\ud788 \uacb0\uc815\ud558\uace0 \uc2dc\uc791\ud558\ub294 \uac8c \uc131\ub2a5\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Benchmark\npublic List<String> properlySizedArrayList() {\n  List<String> list = new ArrayList<>(1_000_000);\n  for(int i=0; i < 1_000_000; i++) {\n    list.add(item);\n  }\n  return list;\n}\n\n@Benchmark\npublic List<String> resizingArrayList() {\n  List<String> list = new ArrayList<>();\n  for(int i=0; i < 1_000_000; i++) {\n    list.add(item);\n  }\n  return list;\n}\n")),(0,r.kt)("h3",{id:"linkedlist"},"LinkedList"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinkedList\ub294 \ub3d9\uc801\uc73c\ub85c \uc99d\uac00\ud558\ub294 \ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\uc911 \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\ub85c \uad6c\ud604\ub418\uc5b4\uc11c \ub9ac\uc2a4\ud2b8\uc5d0 \ub367\ubd99\uc785\ub2c8\ub2e4. (",(0,r.kt)("inlineCode",{parentName:"li"},"O(1)"),")")),(0,r.kt)("h3",{id:"arraylist-vs-linkedlist"},"ArrayList vs LinkedList"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub458 \uc911 \uc120\ud0dd\ud558\ub294 \uac83\uc740 \ub370\uc774\ud130 \uc811\uadfc/\uc218\uc815 \ud328\ud134\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0bd\uc785\uc774\ub098 \uc0ad\uc81c\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 LinkedList\uac00 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc \ub9ac\uc2a4\ud2b8\ub97c \uc8fc\ub85c \ub79c\ub364 \uc561\uc138\uc2a4\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 ArrayList\uac00 \uc815\ub2f5\ub2d9\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LinkedList\uc758 \uace0\uc720 \uae30\ub2a5\uc774 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74, ArrayList\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"map-\ucd5c\uc801\ud654"},"Map \ucd5c\uc801\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9e4\ud551\uc774\ub780 \ud0a4\uc640 \uc5f0\uad00\ub41c \uac12 \uc0ac\uc774\uc758 \uad00\uacc4\ub97c \ub73b\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"hashmap"},"HashMap"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/126892060-eb558344-abe5-4750-9b02-1355c123a92d.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \uc5d4\ud2b8\ub9ac\ub97c \ub9ac\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac12\uc744 \ucc3e\uc73c\ub824\uba74 \ud0a4 \ud574\uc2dc\uac12\uc744 \uacc4\uc0b0\ud558\uace0, equals() \uba54\uc11c\ub4dc\ub85c \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \ud574\ub2f9 \ud0a4\ub97c \ucc3e\uc2b5\ub2c8\ub2e4. (\uc774\ub54c \ud0a4 \uc911\ubcf5\uc740 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.)"),(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc758 \ucd5c\uadfc \ubc84\uc804\uc740 \uc0c1\uc704 \ube44\ud2b8\ub97c \uc544\ub798\ucabd \ud574\uc2dc \ubd80\ubd84\uc5d0 \ubd84\uc0b0\uc2dc\ucf1c \uc7ac\ud574\uc2dc\ub97c \uc904\uc774\uace0, \ud2b8\ub9ac\ud654 \uae30\uc220\ub3c4 \ub098\uc654\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"linkedhashmap"},"LinkedHashMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinkedHashMap \uc740 HashMap\uc758 \uc11c\ube0c \ud074\ub798\uc2a4, \uc774\uc911 \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud574 \uc6d0\uc18c\uc758 \uc0bd\uc785 \uc21c\uc11c\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c LinkedHashMap\uc744 \uc368\uc57c\ud560 \uc77c\uc740 \ube44\uad50\uc801 \ub4dc\ubb38 \ud3b8\uc785\ub2c8\ub2e4. (\uc21c\uc11c\ub97c \uc4f8\uc77c\uc774 \uc5c6\uc73c\ubbc0\ub85c)")),(0,r.kt)("h3",{id:"treemap"},"TreeMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub808\ub4dc-\ube14\ub799 \ud2b8\ub9ac\ub97c \uad6c\ud604\ud55c Map\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ud0a4\uac00 \ud544\uc694\ud560 \ub54c \uc544\uc8fc \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubd84\ud560\uc5d0\uc11c \uc7a5\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"multimap"},"MultiMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc5d0\uc11c\ub294 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Map<K, List<V>>")," \ud615\ud0dc\ub85c \ucda9\ubd84\ud788 \uad6c\ud604 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"set-\ucd5c\uc801\ud654"},"Set \ucd5c\uc801\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HashSet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HashMap\uc73c\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0bd\uc785, \uc0ad\uc81c, contains \uc791\uc5c5 \ubcf5\uc7a1\ub3c4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"O(1)"),"\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"LinkedHashSet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LinkedHashMap\uc73c\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0bd\uc785, \uc0ad\uc81c, contains \uc791\uc5c5 \ubcf5\uc7a1\ub3c4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"O(1)"),"\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"TreeSet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TreeMap\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc21c\uc11c\ub300\ub85c \uc815\ub82c\ub41c \ud0a4 \uc21c\uc11c\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0bd\uc785/\uc0ad\uc81c \ubcf5\uc7a1\ub3c4\ub294 log(n)\uc774\uba70 \uc6d0\uc18c \uc21c\uc11c\ub294 \uc720\uc9c0\ub429\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub3c4\uba54\uc778-\uac1d\uccb4"},"\ub3c4\uba54\uc778 \uac1d\uccb4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uac1d\uccb4\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc720\uc758\ubbf8\ud55c \ube44\uc9c0\ub2c8\uc2a4 \ucee8\uc149\ud2b8\ub97c \ub098\ud0c0\ub0b8 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uba54\ubaa8\ub9ac \uc811\uc720\ub7c9\uacfc \uc778\uc2a4\ud134\uc2a4 \uac1c\uc218\uac00 \ubaa8\ub450 \ubcf4\ud1b5 \ucf54\uc5b4 JDK\uc5d0 \uc788\ub294 \uc790\ub8cc \uad6c\uc870\uac00 \uc0c1\uc704\uad8c\uc744 \ud615\uc131\ud558\ub294 \uac83\uc774 \ubcf4\ud1b5\uc774\uba70, \ub3c4\uba54\uc778 \uac1d\uccb4\uac00 30\uc704 \uc815\ub3c4\uc5d0 \uc788\ub2e4\uba74 \uba54\ubaa8\ub9ac \ub204\uc218\uac00 \ubc1c\uc0dd\ud55c \uc2e0\ud638\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc885\ub8cc\ud654-\uc548-\ud558\uae30"},"\uc885\ub8cc\ud654 \uc548 \ud558\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"close()")," \ud568\uc218\ub97c \uc78a\uace0 \ub193\uce58\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uac1d\uccb4\uac00 \uc9c0\ub2cc \ub9ac\uc18c\uc2a4\ub97c \uc790\ub3d9\uc73c\ub85c \uc5c6\uc560\ub294 \uc77c\uc740 \ud50c\ub7ab\ud3fc\uc774 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uac1d\uccb4\uac00 \ub354 \uc774\uc0c1 \uc790\uc2e0\uc744 \ucc38\uc870\ud558\uc9c0 \uc54a\ub294\ub2e4\uace0 \uac00\ube44\uc9c0 \uc218\uc9d1\uae30\uac00 \ud310\ub2e8\ud558\uba74 \uadf8 \uac1d\uccb4\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"finalize()")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c\ub2e4. \uc11c\ube0c\ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"finalize()")," \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub4dc\ud574\uc11c \uc2dc\uc2a4\ud15c \ub9ac\uc18c\uc2a4\ub97c \ucc98\ubd84\ud558\ub294 \ub4f1 \uae30\ud0c0 \uc815\ub9ac \uc791\uc5c5\uc744 \uc218\ud589\ud55c")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uba54\uc11c\ub4dc-\ud578\ub4e4"},"\uba54\uc11c\ub4dc \ud578\ub4e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \ud578\ub4e4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"invokedynamic \ud638\ucd9c\ubd80\uc5d0\ubd80\uc5d0 \uc758\ud574 \ud638\ucd9c\ub418\ub294 \uba54\uc11c\ub4dc\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\ud5c8\uc6a9\ud558\ub294 \ud638\ucd9c \uc720\ud615 \ubc0f \uc801\uc6a9\ub418\ub294 \ubcc0\ud658 \uc720\ud615\uc744 \uc81c\uc5b4\ud569\ub2c8\ub2e4.")))))}s.isMDXComponent=!0}}]);