(self.webpackChunktil=self.webpackChunktil||[]).push([[2256],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return c}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),o=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=o(e.components);return l.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=o(a),c=n,d=N["".concat(m,".").concat(c)]||N[c]||u[c]||r;return a?l.createElement(d,i(i({ref:t},k),{},{components:a})):l.createElement(d,i({ref:t},k))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7970:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var l=a(2122),n=a(9756),r=(a(7294),a(3905)),i={sidebar_position:1},p={unversionedId:"dev/clean-code/ch1",id:"dev/clean-code/ch1",isDocsHomePage:!1,title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 1",description:"\ub300\ud559\uc2dc\uc808 \ud504\ub7f0\ud2b8 \uac1c\ubc1c\uc744 \ud558\ub2e4\uac00, ebay\uc5d0\uc11c \uc6f9 \uac1c\ubc1c\uc744 \ud558\uba74\uc11c \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc8fc\ub85c \ud558\ub2e4 \ubcf4\ub2c8, Java\ub098 C#\uc73c\ub85c \uac1c\ubc1c\uc744 \uc8fc\ub85c \ud558\uac8c \ub418\uc5c8\ub294\ub370, \ubaa8\ub974\ub294 \ubd80\ubd84\ub3c4 \ub9ce\uace0 \ud568\uaed8 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uae30 \ub54c\ubb38\uc5d0 \uc880 \ub354 \uc88b\uc740 \uac1c\ubc1c\uc744 \ud558\uace0 \uc2f6\uc5b4\uc11c, 1\ub144 \uc804\uc5d0 \uc0c0\ub358 \ucc45\uc744 \ub2e4\uc2dc \ud3b4\uc11c \uc815\ub9ac\ud55c\ub2e4.",source:"@site/docs/dev/clean-code/ch1.md",sourceDirName:"dev/clean-code",slug:"/dev/clean-code/ch1",permalink:"/til/docs/dev/clean-code/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/clean-code/ch1.md",version:"current",lastUpdatedAt:1651371930,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6. \uc138\ubd80\uc0ac\ud56d",permalink:"/til/docs/dev/clean-architecture/ch6"},next:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 2",permalink:"/til/docs/dev/clean-code/ch2"}},m=[{value:"1\uc7a5. Clean Code",id:"1\uc7a5-clean-code",children:[{value:"\uae68\ub057\ud55c \ucf54\ub4dc\ub780?",id:"\uae68\ub057\ud55c-\ucf54\ub4dc\ub780",children:[]}]},{value:"2\uc7a5. \uc758\ubbf8 \uc788\ub294 \uc774\ub984",id:"2\uc7a5-\uc758\ubbf8-\uc788\ub294-\uc774\ub984",children:[]},{value:"3\uc7a5. \ud568\uc218",id:"3\uc7a5-\ud568\uc218",children:[{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}]}],o={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ub300\ud559\uc2dc\uc808 \ud504\ub7f0\ud2b8 \uac1c\ubc1c\uc744 \ud558\ub2e4\uac00, ebay\uc5d0\uc11c \uc6f9 \uac1c\ubc1c\uc744 \ud558\uba74\uc11c \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc8fc\ub85c \ud558\ub2e4 \ubcf4\ub2c8, Java\ub098 C#\uc73c\ub85c \uac1c\ubc1c\uc744 \uc8fc\ub85c \ud558\uac8c \ub418\uc5c8\ub294\ub370, \ubaa8\ub974\ub294 \ubd80\ubd84\ub3c4 \ub9ce\uace0 \ud568\uaed8 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uae30 \ub54c\ubb38\uc5d0 \uc880 \ub354 \uc88b\uc740 \uac1c\ubc1c\uc744 \ud558\uace0 \uc2f6\uc5b4\uc11c, 1\ub144 \uc804\uc5d0 \uc0c0\ub358 \ucc45\uc744 \ub2e4\uc2dc \ud3b4\uc11c \uc815\ub9ac\ud55c\ub2e4."),(0,r.kt)("h2",{id:"1\uc7a5-clean-code"},"1\uc7a5. Clean Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub098\uc05c \ucf54\ub4dc\uac00 \ub9cc\ub4dc\ub294 \uacb0\uacfc")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc1c \uc18d\ub3c4\uc758 \uac10\uc18c"),(0,r.kt)("li",{parentName:"ul"},"\ud300 \uc0dd\uc0b0\uc131\uc758 \ud558\ub77d, \uc774\ud6c4 \uc7ac\uac1c\ubc1c \ud544\uc694"),(0,r.kt)("li",{parentName:"ul"},"\uc720\uc9c0 \ubcf4\uc218\uc758 \uc5b4\ub824\uc6c0")),(0,r.kt)("h3",{id:"\uae68\ub057\ud55c-\ucf54\ub4dc\ub780"},"\uae68\ub057\ud55c \ucf54\ub4dc\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc"),(0,r.kt)("li",{parentName:"ul"},"\uc911\ubcf5\uc774 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \ub0b4 \ubaa8\ub4e0 \uc124\uacc4 \uc544\uc774\ub514\uc5b4\ub97c \ud45c\ud604\ud568"),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4, \uba54\uc11c\ub4dc, \ud568\uc218 \ub4f1\uc744 \ucd5c\ub300\ud55c \uc904\uc784")),(0,r.kt)("h2",{id:"2\uc7a5-\uc758\ubbf8-\uc788\ub294-\uc774\ub984"},"2\uc7a5. \uc758\ubbf8 \uc788\ub294 \uc774\ub984"),(0,r.kt)("p",null,"\ud575\uc2ec\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc758\ub3c4\ub97c \ubd84\uba85\ud788 \ubc1d\ud788\uae30."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"int elapsedTimeInDays"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"daysSinceCreation")," \ub4f1\ub4f1"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub987\ub41c \uc815\ubcf4\ub97c \ud53c\ud558\uae30."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131\uc744 \uc9c0\ucf1c\uc57c\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc758\ubbf8 \uc788\uac8c \uad6c\ubd84\ud558\uae30.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubc1c\uc74c\ud558\uae30 \uc26c\uc6b4 \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\uae30.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uac80\uc0c9\ud558\uae30 \uc26c\uc6b4 \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\uae30.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc778\ucf54\ub529\uc744 \ud53c\ud558\uae30."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud5dd\uac00\ub9ac\uc2dd \ud45c\uae30\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\uba64\ubc84 \ubcc0\uc218 \uc811\ub450\uc5b4"),(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \ud074\ub798\uc2a4\uc640 \uad6c\ud604 \ud074\ub798\uc2a4"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc790\uc2e0\uc758 \uae30\uc5b5\ub825\uc744 \uc790\ub791\ud558\uc9c0 \ub9d0\uae30.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4 \uc774\ub984\uc740 \uba85\uc0ac\ub098 \uba85\uc0ac\uad6c.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uba54\uc11c\ub4dc \uc774\ub984\uc740 \ub3d9\uc0ac\ub098 \ub3d9\uc0ac\uad6c.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uae30\ubc1c\ud55c \uc774\ub984\uc744 \ud53c\ud558\uae30")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud55c \uac1c\ub150\uc5d0 \ud55c \ub2e8\uc5b4 \uc0ac\uc6a9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub9d0\uc7a5\ub09c\ud558\uc9c0 \ub9d0\uae30")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud574\ubc95 \uc601\uc5ed\uc5d0\uc11c \uac00\uc838\uc628 \uc774\ub984 \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc804\uc0b0, \uc54c\uace0\ub9ac\uc998, \ud328\ud134, \uc218\ud559 \uc6a9\uc5b4\ub4e4\uc740 \uc0ac\uc6a9\ud574\ub3c4 \uad1c\ucc2e\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubb38\uc81c \uc601\uc5ed\uc5d0\uc11c \uac00\uc838\uc628 \uc774\ub984 \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc801\uc808\ud55c \ud504\ub85c\uadf8\ub798\uba38 \uc6a9\uc5b4\uac00 \uc5c6\ub2e4\uba74, \ubb38\uc81c \uc601\uc5ed\uc5d0\uc11c \uac00\uc838\uc628\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc758\ubbf8 \uc788\ub294 \ub9e5\ub77d\uc744 \ucd94\uac00"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2a4\uc2a4\ub85c \uc758\ubbf8\uac00 \ubd84\uba85\ud558\uac8c \ud574 \uc8fc\uae30. -> \ud074\ub798\uc2a4, \ud568\uc218, \uc774\ub984 \uacf5\uac04\uc5d0 \ub123\uc5b4 \ub9e5\ub77d \uc8fc\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ubc29\ubc95\uc774 \uc5b4\ub835\ub2e4\uba74 \uc811\ub450\uc5b4 \uc0ac\uc6a9\ud558\uae30"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubd88\ud544\uc694\ud55c \ub9e5\ub77d \uc5c6\uc560\uae30."))),(0,r.kt)("p",null,"\ud575\uc2ec \uc911 \ud558\ub098\ub294, \uc88b\uc740 \uc774\ub984\uc744 \uc120\ud0dd\ud558\ub824\uba74 \uc124\uba85 \ub2a5\ub825\uc774 \ub6f0\uc5b4\ub098\uc57c \ud558\uace0, \ubb38\ud654\uc801\uc778 \ubc30\uacbd\uc774 \uac19\uc544\uc57c \ud55c\ub2e4."),(0,r.kt)("h2",{id:"3\uc7a5-\ud568\uc218"},"3\uc7a5. \ud568\uc218"),(0,r.kt)("p",null,"\ud568\uc218\uc758 \uaddc\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc791\uac8c \ub9cc\ub4e4\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c 2\uc904, 3\uc904, 4\uc904\uc774 \uc774\uc0c1\uc801\uc73c\ub85c \uc88b\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube14\ub85d\uacfc \ub4e4\uc5ec \uc4f0\uae30.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if/else/while \ubb38 \ub4f1\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ube14\ub85d\uc740 \ud55c \uc904\uc774\uc5ec\uc57c \ud568."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud55c \uac00\uc9c0\ub9cc \ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud568\uc218\ub294 \ud55c \uac00\uc9c0\ub97c \ud574\uc57c \ud558\uace0 \ud55c \uac00\uc9c0\ub97c \uc798\ud574\uc57c \ud55c\ub2e4.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud568\uc218 \ub2f9 \ucd94\uc0c1\ud654 \uc218\uc900\uc740 \ud558\ub098\ub85c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud55c \ud568\uc218\uc5d0 \ucd94\uc0c1\ud654 \uc218\uc900\uc744 \uc11e\uc73c\uba74 \ucf54\ub4dc\ub97c \uc77d\ub294 \uc0ac\ub78c\uc774 \ud5f7\uac08\ub9bc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ub0b4\ub824\uac00\uae30 \uaddc\uce59")," : \uc704\uc5d0\uc11c \uc544\ub798\ub85c \ucf54\ub4dc \uc77d\uae30",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9c8\uce58 \uc774\uc57c\uae30\ucc98\ub7fc"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch \ubb38"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ud615\uc131 \uc0ac\uc6a9\ud574\uc11c \ucd5c\ub300\ud55c \uc228\uae30\uace0 \ubc18\ubcf5\ud558\uc9c0 \uc54a\uac8c \ud558\uae30.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc548\uc5d0\uc11c \uc228\uae30\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\ub300\ud55c \ud55c \ubc88\ub9cc \uc0ac\uc6a9\ud558\uae30"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc11c\uc220\uc801\uc778 \uc774\ub984 \uc0ac\uc6a9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc11c\uc220\uc801\uc778 \uc774\ub984\uc774 \uc124\uacc4\uc5d0\uc11c \ub354 \ub69c\ub837\ud55c \uc758\ubbf8\ub97c \uac00\uc9c0\uace0 \uac1c\uc120\ud558\uae30 \uc26c\uc6cc\uc9d0"),(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131 \uc720\uc9c0\ud558\uae30"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud568\uc218 \uc778\uc218"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\uc5d0\uc11c \uc774\uc0c1\uc801\uc778 \uc778\uc218\ub294 0\uac1c\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"1\uac1c(\ub2e8\ud56d), 2\uac1c(\uc774\ud56d)\uae4c\uc9c0\uace0 \uc88b\uace0, 3\uac1c(\uc0bc\ud56d)\ub294 \uac00\ub2a5\ud55c \ud53c\ud558\uace0, 4\uac1c(\ub2e4\ud56d)\ub294 \uc774\uc720\uac00 \ud544\uc694\ud558\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc810\uc810 \ub354 \uc77d\uae30 \uc5b4\ub824\uc6cc\uc9d0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeSetupPageInfo(new PageContent)")," \ubcf4\ub2e4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"includeSetupPage()"),"\uac00 \ub354 \uc77d\uae30 \uc88b\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\ud56d \ud615\uc2dd\uc758 \uc88b\uc740 \uc608",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'boolean fileExists("MyFile")')))),(0,r.kt)("li",{parentName:"ul"},"\uc774\ud56d \ud568\uc218\uc758 \uc88b\uc740 \uc608",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Point p = new Point(0, 0)")))))),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc0ac\uc640 \ud0a4\uc6cc\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uc758\ub3c4\ub098 \uc778\uc218\uc758 \uc21c\uc11c\uc640 \uc758\ub3c4\ub97c \uc81c\ub300\ub85c \ud45c\ud604\ud558\ub824\uba74 \uc88b\uc740 \ud568\uc218\uac00 \ud544\uc218"),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\ud56d \ud568\uc218\ub294 \ud568\uc218\uc640 \uc778\uc218\uac00 \ub3d9\uc0ac/\uba85\uc0ac \uc30d\uc744 \uc774\ub904\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"writeField(name)")," \ub4f1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assertEquals"),"\ubcf4\ub2e4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"assertExpectedEqualsActual(expected, actual)")," \uc774 \ub354 \uc88b\ub2e4."))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubd80\uc218 \ud6a8\uacfc\ub97c \uc77c\uc73c\ud0a4\uc9c0 \ub9c8\ub77c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc989, \ud568\uc218\uc5d0\uc11c \ud55c \uac00\uc9c0\ub97c \ud558\uaca0\ub2e4\uace0 \ud558\uace0, \ub2e4\ub978 \uae30\ub2a5\uc744 \ub123\uc9c0 \ub9c8\ub77c"),(0,r.kt)("li",{parentName:"ul"},"\ucd9c\ub825 \uc778\uc218",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ucd9c\ub825 \uc778\uc218\ub97c \ud53c\ud574\ub77c."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendFooter(s)")," \ubcf4\ub2e4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"report.appendFooter()\ucc98\ub7fc")," \uc791\uc131\ud558\uae30."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uba85\ub839\uacfc \uc870\ud68c\ub97c \ubd84\ub9ac\ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\ub294 \ubb54\uac00\ub97c \uc218\ud589\ud558\uac70\ub098 \ubb54\uac00\uc5d0 \ub2f5\ud558\uac70\ub098 \ub458 \uc911 \ud558\ub098\ub9cc \ud574\uc57c \ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc624\ub958 \ucf54\ub4dc\ubcf4\ub2e4 \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\ub77c")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uba85\ub839 \ud568\uc218\uc5d0\uc11c \uc624\ub958 \ucf54\ub4dc\ub97c \ubc18\ud658\ud558\ub294 \ubc29\uc2dd\uc740 \uba85\ub839/\uc870\ud68c \ubd84\ub9ac \uaddc\uce59\uc744 \ubbf8\ubb18\ud558\uac8c \uc704\ubc18\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Try/Catch \ube14\ub85d \ubf51\uc544\ub0b4\uae30.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud749\uce21\ud568, \ubcc4\ub3c4 \ud568\uc218\ub85c \ubf51\uc544\ub0b4\ub294 \ud3b8\uc774 \uc88b\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc624\ub958 \ucc98\ub9ac\ub3c4 \ud55c \uac00\uc9c0 \uc791\uc5c5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc624\ub958 \ucc98\ub9ac\ub3c4 \uc624\ub958\ub9cc \ucc98\ub9ac\ud574\uc57c \ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc624\ub958 \ud074\ub798\uc2a4\ub97c \ub530\ub85c \uc120\uc5b8\ud558\uba74, \ud574\ub2f9 \ud074\ub798\uc2a4\ub294 \uc758\uc874\uc131 \uc790\uc11d\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ucf54\ub4dc\uc5d0\uc11c import \ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc989, \uc624\ub958 \ud074\ub798\uc2a4\uac00 \ubcc0\ud55c\ub2e4\uba74 \ud074\ub798\uc2a4 \uc804\ubd80\ub97c \ub2e4\uc2dc \ucef4\ud30c\uc77c\ud558\uace0 \ub2e4\uc2dc \ubc30\uce58\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\uae30"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubc18\ubcf5\ud558\uc9c0 \ub9d0\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AOP(Aspect Oriented Programming), COP(Component Oriented Programming) \ub4f1 \ubaa8\ub450\uac00 \uc5b4\ub5a4 \uba74\uc5d0\uc11c\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\uc911\ubcf5 \uc81c\uac70 \uc804\ub7b5"),"\uc774 \ub4e4\uc5b4\uac04\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uad6c\uc870\uc801 \ud504\ub85c\uadf8\ub798\ubc0d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud568\uc218\uc640 \ud568\uc218 \ub0b4 \ubaa8\ub4e0 \ube14\ub85d\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"\uc785\uad6c\uc640 \ucd9c\uad6c\uac00 \ud558\ub098\ub9cc \uc874\uc7ac\ud574\uc57c \ud55c\ub2e4")),(0,r.kt)("li",{parentName:"ul"},"\ub8e8\ud504 \uc548\uc5d0\uc11c break\ub098 continue\ub97c \uc0ac\uc6a9\ud574\uc11c\ub294 \uc548\ub41c\ub2e4. goto\ub294 \uc544\uc2dc\ub2e4\uc2dc\ud53c \uc808\ub300\ub85c \uc548\ub428"),(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ubb38\uc81c\ub294 \ud568\uc218\uac00 \uc544\uc8fc \ud074 \ub54c \uc0c1\ub2f9\ud55c \uc774\uc775\uc744 \uc81c\uacf5."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud568\uc218\ub294 \uc9dc\ub294 \ubc29\ubc95"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\uc885\uc758 \uae00\uc9d3\uae30\uc640 \ube44\uc2b7"),(0,r.kt)("li",{parentName:"ul"},"\ucd08\uc548\uc740 \uae38\uace0 \ubcf5\uc7a1\ud560 \uc218 \uc788\uc9c0\ub9cc,\n\uc218\uc815\ud558\uba74\uc11c \ucf54\ub4dc\ub97c \ub2e4\ub4ec\uace0 \ud568\uc218\ub97c \ub9cc\ub4e4\uace0, \uc774\ub984\uc744 \ubc14\uafb8\uace0 \uc911\ubcf5\uc744 \uc81c\uac70\ud558\uace0 \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uae30")))),(0,r.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\ubaa8\ub4e0 \uc2dc\uc2a4\ud15c\uc740 \ud2b9\uc815 \uc751\uc6a9 \ubd84\uc57c \uc2dc\uc2a4\ud15c\uc744 \uae30\uc220\ud560 \ubaa9\uc801\uc73c\ub85c \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc124\uacc4\ud55c DSL(Domain Specific Language, \ub3c4\uba54\uc778 \ud2b9\ud654 \uc5b8\uc5b4)\ub85c \ub9cc\ub4e0\ub2e4. \uc774\ub7ec\ud55c \uae30\uc220 \ub4e4\uc740 \ud568\uc218\ub97c \uc798 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc774\ub2e4. \uadf8\ub7ec\ub098 \uc815\ub9d0\ub85c \uc911\uc694\ud55c \uac83\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc2dc\uc2a4\ud15c\uc774\ub2e4.")))}k.isMDXComponent=!0}}]);