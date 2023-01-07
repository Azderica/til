"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8345],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.createContext({}),o=function(e){var t=l.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=o(n),s=a,d=k["".concat(m,".").concat(s)]||k[s]||p[s]||i;return n?l.createElement(d,r(r({ref:t},c),{},{components:n})):l.createElement(d,r({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var o=2;o<i;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4797:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return m}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r={sidebar_position:1},u={unversionedId:"kotlin/effective-kotlin/ch1",id:"kotlin/effective-kotlin/ch1",isDocsHomePage:!1,title:"1. \uc548\uc815\uc131",description:"- \ucf54\ud2c0\ub9b0\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uc548\uc815\uc131(safety)\uc785\ub2c8\ub2e4.",source:"@site/docs/kotlin/effective-kotlin/ch1.md",sourceDirName:"kotlin/effective-kotlin",slug:"/kotlin/effective-kotlin/ch1",permalink:"/til/docs/kotlin/effective-kotlin/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/kotlin/effective-kotlin/ch1.md",version:"current",lastUpdatedAt:1655178321,formattedLastUpdatedAt:"6/14/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"15. \uc790\ubc14 9\uc640\uc758 \ubbf8\ub798",permalink:"/til/docs/java/optimizing-java/ch15"},next:{title:"1. \ucf54\ud2c0\ub9b0\uc774\ub780 \ubb34\uc5c7\uc774\uba70, \uc65c \ud544\uc694\ud55c\uac00?",permalink:"/til/docs/kotlin/kotlin-in-action/ch1"}},m=[{value:"Item 1. \uac00\ubcc0\uc131\uc744 \uc81c\ud55c\ud558\ub77c",id:"item-1-\uac00\ubcc0\uc131\uc744-\uc81c\ud55c\ud558\ub77c",children:[{value:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \uac00\ubcc0\uc131 \uc81c\ud55c\ud558\uae30",id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-\uac00\ubcc0\uc131-\uc81c\ud55c\ud558\uae30",children:[]},{value:"\ub2e4\ub978 \uc9c0\uc810\uc758 \ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810",id:"\ub2e4\ub978-\uc9c0\uc810\uc758-\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810",children:[]},{value:"\ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810 \ub178\ucd9c\ud558\uc9c0 \ub9d0\uae30",id:"\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810-\ub178\ucd9c\ud558\uc9c0-\ub9d0\uae30",children:[]},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",children:[]}]},{value:"Item 2. \ubcc0\uc218\uc758 \uc2a4\ucf54\ud504\ub97c \ucd5c\uc18c\ud654\ud558\ub77c",id:"item-2-\ubcc0\uc218\uc758-\uc2a4\ucf54\ud504\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c",children:[]},{value:"Item 3. \ucd5c\ub300\ud55c \ud50c\ub7ab\ud3fc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c",id:"item-3-\ucd5c\ub300\ud55c-\ud50c\ub7ab\ud3fc-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\ub77c",children:[]},{value:"Item 4. inferred \ud0c0\uc785\uc73c\ub85c \ub9ac\ud134\ud558\uc9c0 \ub9d0\ub77c",id:"item-4-inferred-\ud0c0\uc785\uc73c\ub85c-\ub9ac\ud134\ud558\uc9c0-\ub9d0\ub77c",children:[]},{value:"Item 5. \uc608\uc678\ub97c \ud65c\uc6a9\ud574 \ucf54\ub4dc\uc5d0 \uc81c\ud55c\uc744 \uac78\uc5b4\ub77c",id:"item-5-\uc608\uc678\ub97c-\ud65c\uc6a9\ud574-\ucf54\ub4dc\uc5d0-\uc81c\ud55c\uc744-\uac78\uc5b4\ub77c",children:[]},{value:"Item 6. \uc0ac\uc6a9\uc790 \uc815\uc758 \uc624\ub958\ubcf4\ub2e4\ub294 \ud45c\uc900 \uc624\ub958\ub97c \uc0ac\uc6a9\ud558\ub77c",id:"item-6-\uc0ac\uc6a9\uc790-\uc815\uc758-\uc624\ub958\ubcf4\ub2e4\ub294-\ud45c\uc900-\uc624\ub958\ub97c-\uc0ac\uc6a9\ud558\ub77c",children:[]},{value:"Item 7. \uacb0\uacfc \ubd80\uc871\uc774 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 null\uacfc Failure\uc744 \uc0ac\uc6a9\ud558\ub77c",id:"item-7-\uacb0\uacfc-\ubd80\uc871\uc774-\ubc1c\uc0dd\ud560-\uacbd\uc6b0-null\uacfc-failure\uc744-\uc0ac\uc6a9\ud558\ub77c",children:[]},{value:"Item 8. \uc801\uc808\ud558\uac8c null\uc744 \ucc98\ub9ac\ud558\ub77c",id:"item-8-\uc801\uc808\ud558\uac8c-null\uc744-\ucc98\ub9ac\ud558\ub77c",children:[]},{value:"Item 9. use\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c",id:"item-9-use\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c",children:[]},{value:"Item 10. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub77c",id:"item-10-\ub2e8\uc704-\ud14c\uc2a4\ud2b8\ub97c-\ub9cc\ub4e4\uc5b4\ub77c",children:[]}],o={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uc548\uc815\uc131(safety)\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub97c \uc798 \ud558\uae30\uc704\ud574\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \ub4b7\ubc1b\uce68\uc744 \ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"'\uc989. \uc624\ub958\uac00 \ub35c \ubc1c\uc0dd\ud558\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4dc\ub294 \uac83'\uc5d0 \ub300\ud574 \uc911\uc810\uc801\uc73c\ub85c \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-1-\uac00\ubcc0\uc131\uc744-\uc81c\ud55c\ud558\ub77c"},"Item 1. \uac00\ubcc0\uc131\uc744 \uc81c\ud55c\ud558\ub77c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \ubaa8\ub4c8\ub85c \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uacc4\ud558\uba70 \ubaa8\ub4c8\uc740 \ud074\ub798\uc2a4, \uac1d\uccb4, \ud568\uc218, \ud0c0\uc785 \ubcc4\uce6d, \ud1b1\ub808\ubca8 \ud3ec\ub85c\ud37c\ud2f0 \ub4f1 \ub2e4\uc591\ud55c \uc694\uc18c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc694\uc18c \uc911 \uc77c\ubd80\ub294 \uc0c1\ud0dc(state)\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \uc0c1\ud0dc\ub294 \uc591\ub0a0\uc758 \uac80\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc758 \ubcc0\ud654\uc5d0 \ub530\ub77c\uc11c \ubcc0\ud654\ub294 \uc694\uc18c\ub97c \ud45c\ud604\ud558\uae30\ub294 \uc88b\uc73c\ub098, \uc0c1\ud0dc\ub97c \uc801\uc808\ud558\uac8c \uad00\ub9ac\ud558\ub294 \uac83\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\ub300\uaddc\ubaa8 \ud300\uc77c\uc218\ub85d \ubcc0\uacbd \uac00\ub2a5\ud55c \ubd80\ubd84\uc5d0 \uc758\ud55c \uc77c\uad00\uc131(consistency) \ubb38\uc81c, \ubcf5\uc7a1\uc131(complexity) \uc99d\uac00\uc640 \uad00\ub828\ub41c \ubb38\uc81c\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\ub294 \ub3d9\uae30\ud654\ub97c \uc798 \uad6c\ud604\ud574\uc57c\ud558\uba70 \uc774\ub294 \uad49\uc7a5\ud788 \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ubcc0\ud560 \uc218 \uc788\ub294 \uc9c0\uc810\uc744 \uc904\uc774\ub294 \uac83\uc774 \ud575\uc2ec\uc785\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\uac00\ubcc0\uc131\uc740 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\uae30 \uc704\ud55c \uc911\uc694\ud55c \ubc29\ubc95 \uc911 \ud558\ub098\uc774\ub098, \ubcc0\uacbd\uc774 \uc77c\uc5b4\ub098\uc57c \ud558\ub294 \ubd80\ubd84\uc740 \uc2e0\uc911\ud558\uace0 \ud655\uc2e4\ud558\uac8c \uacb0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-\uac00\ubcc0\uc131-\uc81c\ud55c\ud558\uae30"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \uac00\ubcc0\uc131 \uc81c\ud55c\ud558\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \uac00\ubcc0\uc131\uc744 \uc81c\ud55c\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc804\uc6a9 \ud504\ub85c\ud37c\ud2f0 (val)"),(0,i.kt)("li",{parentName:"ul"},"\uac00\ubcc0 \uceec\ub809\uc158\uacfc \uc77d\uae30 \uc804\uc6a9 \uceec\ub809\uc158 \uad6c\ubd84"),(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ud074\ub798\uc2a4\uc758 copy")))),(0,i.kt)("h4",{id:"\uc77d\uae30-\uc804\uc6a9-\ud504\ub85c\ud37c\ud2f0-val"},"\uc77d\uae30 \uc804\uc6a9 \ud504\ub85c\ud37c\ud2f0 (val)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"val\uc5d0 \ub300\ud55c \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'val name: String? = "Marton"\nval surname: String = "Braun"\n\nval fullName: String?\n    get() = name?.let { "$it $surname" }\n\nval fullName2: String? = name?.let { "$it $surname" }\n\nfun main() {\n  if(fullName != null) {\n    println(fullName.length)  // error\n  }\n  if(fullName2 != null) {\n    println(fullName2.length) // Marton Braun\n  }\n}\n')),(0,i.kt)("h4",{id:"\uac00\ubcc0-\uceec\ub809\uc158\uacfc-\uc77d\uae30-\uc804\uc6a9-\uceec\ub809\uc158-\uad6c\ubd84"},"\uac00\ubcc0 \uceec\ub809\uc158\uacfc \uc77d\uae30 \uc804\uc6a9 \uceec\ub809\uc158 \uad6c\ubd84"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \uc77d\uace0 \uc4f8 \uc218 \uc788\ub294 \uceec\ub809\uc158\uacfc \uc77d\uae30 \uc804\uc6a9 \uceec\ub809\uc158\uc73c\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc804\uc6a9 : ",(0,i.kt)("inlineCode",{parentName:"li"},"Iterable"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Set"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"List")),(0,i.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc4f0\uae30 \uc804\uc6a9 : ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableIterable"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableCollection"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableSet"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableList"))))),(0,i.kt)("h4",{id:"\ub370\uc774\ud130-\ud074\ub798\uc2a4\uc758-copy"},"\ub370\uc774\ud130 \ud074\ub798\uc2a4\uc758 copy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \ub0b4\ubd80\uc801\uc73c\ub85c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\ub294 \uc774\uc720\ub294 \ub2e4\uc74c\uc758 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud55c \ubc88 \uc815\uc758\ub41c \uc0c1\ud0dc\uac00 \uc720\uc9c0\ub418\ubbc0\ub85c \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30 \uc26c\uc6c0"),(0,i.kt)("li",{parentName:"ul"},"immutable \uac1d\uccb4\ub294 \uacf5\uc720\ud588\uc744 \ub54c\ub3c4 \ucda9\ub3cc\uc774 \uc5c6\uc73c\ubbc0\ub85c \uc548\uc804\ud558\uace0, \ubcd1\ub82c \ucc98\ub9ac\ub97c \uc548\uc804\ud558\uac8c \ud560 \uc218 \uc788\uc74c"),(0,i.kt)("li",{parentName:"ul"},"immutable \uac1d\uccb4\uc5d0 \ub300\ud55c \ucc38\uc870\ub294 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \uc27d\uac8c \uce90\uc2dc\ud560 \uc218 \uc788\uc74c"),(0,i.kt)("li",{parentName:"ul"},"immutable \uac1d\uccb4\ub294 \ubc29\uc5b4\uc801 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4e4 \ud544\uc694\uac00 \uc5c6\uc74c, \uae4a\uc740 \ubcf5\uc0ac\uc758 \ud544\uc694\uac00 \uc5c6\uc74c"),(0,i.kt)("li",{parentName:"ul"},"immutable \uac1d\uccb4\ub294 \ub2e4\ub978 \uac1d\uccb4\ub97c \ub9cc\ub4e4 \ub54c \ud65c\uc6a9\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"immutable \uac1d\uccb4\ub294 set\ub098 map\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'data class User(\n  val name: String,\n  val surname: String\n)\n\nvar user = User("Maja", "Markiewicz")\nuser = user.copy(surname = "Moskala")\nprint(user) // User(name=Maja, surname=Moskala)\n')),(0,i.kt)("h3",{id:"\ub2e4\ub978-\uc9c0\uc810\uc758-\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810"},"\ub2e4\ub978 \uc9c0\uc810\uc758 \ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \ub9ac\uc2a4\ud2b8\ub294 \ub450 \uac00\uc9c0 \uc120\ud0dd\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"val list1: MutableList<Int> = mutableListOf()\nval list2: List<Int> = listOf()\n\n// \ub3d9\uc791\uc740 \uac19\uc73c\ub098 \ubc29\ubc95\uc774 \ub2e4\ub985\ub2c8\ub2e4.\nlist1.add(1)\nlist2 = list2 + 1\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc704 \ub450\uac1c\ub294 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uc9c0\ub9cc \uc7a5\ub2e8\uc810\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uccab\ubc88\uc9f8\ub294 \uad6c\uccb4\uc801\uc778 \ub9ac\uc2a4\ud2b8 \uad6c\ud604 \ub0b4\ubd80\uc5d0 \ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \uba40\ud2f0\uc2a4\ub808\ub4dc \ucc98\ub9ac\uac00 \uc774\ub8e8\uc5b4\uc9c8 \uacbd\uc6b0, \ub3d9\uae30\ud654\ub97c \uc54c \uc218 \uc5c6\uc73c\ubbc0\ub85c \uc704\ud5d8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub450\ubc88\uc9f8\ub294 \ud504\ub85c\ud37c\ud2f0 \uc790\uccb4\uac00 \ubcc0\uacbd \uac00\ub2a5\ud55c \uc9c0\uc810\uc785\ub2c8\ub2e4. \uc989, \uba40\ud2f0\uc2a4\ub808\ub4dc\uc758 \uc548\uc815\uc131\uc774 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"mutable \uceec\ub809\uc158\uc744 \uad00\ucc30\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\ub824\uba74, \ucd94\uac00\uc801\uc778 \uad6c\ud604\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc989, \uc77d\uae30 \uc804\uc6a9 \uceec\ub809\uc158\uc744 \ub123\uc5b4 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc27d\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'// \ubcc0\uacbd\uc2dc \ub85c\uadf8 \ucd9c\ub825\nvar names by Delegates.observable(listOf<String>()) {_, old, new ->\n  println("Names changed from $old to $new")\n}\nnames += "Fabio"  // names [] -> [Fabio]\nnames += "Bill"   // names [Fabio] -> [Fabio, Bill]\n')),(0,i.kt)("h3",{id:"\ubcc0\uacbd-\uac00\ub2a5-\uc9c0\uc810-\ub178\ucd9c\ud558\uc9c0-\ub9d0\uae30"},"\ubcc0\uacbd \uac00\ub2a5 \uc9c0\uc810 \ub178\ucd9c\ud558\uc9c0 \ub9d0\uae30"),(0,i.kt)("h3",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-2-\ubcc0\uc218\uc758-\uc2a4\ucf54\ud504\ub97c-\ucd5c\uc18c\ud654\ud558\ub77c"},"Item 2. \ubcc0\uc218\uc758 \uc2a4\ucf54\ud504\ub97c \ucd5c\uc18c\ud654\ud558\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-3-\ucd5c\ub300\ud55c-\ud50c\ub7ab\ud3fc-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\ub77c"},"Item 3. \ucd5c\ub300\ud55c \ud50c\ub7ab\ud3fc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-4-inferred-\ud0c0\uc785\uc73c\ub85c-\ub9ac\ud134\ud558\uc9c0-\ub9d0\ub77c"},"Item 4. inferred \ud0c0\uc785\uc73c\ub85c \ub9ac\ud134\ud558\uc9c0 \ub9d0\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-5-\uc608\uc678\ub97c-\ud65c\uc6a9\ud574-\ucf54\ub4dc\uc5d0-\uc81c\ud55c\uc744-\uac78\uc5b4\ub77c"},"Item 5. \uc608\uc678\ub97c \ud65c\uc6a9\ud574 \ucf54\ub4dc\uc5d0 \uc81c\ud55c\uc744 \uac78\uc5b4\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-6-\uc0ac\uc6a9\uc790-\uc815\uc758-\uc624\ub958\ubcf4\ub2e4\ub294-\ud45c\uc900-\uc624\ub958\ub97c-\uc0ac\uc6a9\ud558\ub77c"},"Item 6. \uc0ac\uc6a9\uc790 \uc815\uc758 \uc624\ub958\ubcf4\ub2e4\ub294 \ud45c\uc900 \uc624\ub958\ub97c \uc0ac\uc6a9\ud558\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-7-\uacb0\uacfc-\ubd80\uc871\uc774-\ubc1c\uc0dd\ud560-\uacbd\uc6b0-null\uacfc-failure\uc744-\uc0ac\uc6a9\ud558\ub77c"},"Item 7. \uacb0\uacfc \ubd80\uc871\uc774 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 null\uacfc Failure\uc744 \uc0ac\uc6a9\ud558\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-8-\uc801\uc808\ud558\uac8c-null\uc744-\ucc98\ub9ac\ud558\ub77c"},"Item 8. \uc801\uc808\ud558\uac8c null\uc744 \ucc98\ub9ac\ud558\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-9-use\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c"},"Item 9. use\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c\ub2eb\uc544\ub77c"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"item-10-\ub2e8\uc704-\ud14c\uc2a4\ud2b8\ub97c-\ub9cc\ub4e4\uc5b4\ub77c"},"Item 10. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub77c"))}c.isMDXComponent=!0}}]);