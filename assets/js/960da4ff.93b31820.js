(self.webpackChunktil=self.webpackChunktil||[]).push([[776],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(r),m=l,s=d["".concat(c,".").concat(m)]||d[m]||k[m]||a;return r?n.createElement(s,i(i({ref:t},p),{},{components:r})):n.createElement(s,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<a;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5369:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(2122),l=r(9756),a=(r(7294),r(3905)),i={sidebar_position:1},u={unversionedId:"dev/clean-architecture/ch1",id:"dev/clean-architecture/ch1",isDocsHomePage:!1,title:"1\ubd80. \uc18c\uac1c",description:"1\uc7a5. \uc124\uacc4\uc640 \uc544\ud0a4\ud14d\ucc98\ub780?",source:"@site/docs/dev/clean-architecture/ch1.md",sourceDirName:"dev/clean-architecture",slug:"/dev/clean-architecture/ch1",permalink:"/til/docs/dev/clean-architecture/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/clean-architecture/ch1.md",version:"current",lastUpdatedAt:1646173733,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"12. \ub370\uc774\ud130 \uc2dc\uc2a4\ud15c\uc758 \ubbf8\ub798",permalink:"/til/docs/data/designing-data-intensive-applications/ch12"},next:{title:"2\ubd80. \ubcbd\ub3cc\ubd80\ud130 \uc2dc\uc791\ud558\uae30: \ud504\ub85c\uadf8\ub798\ubc0d \ud328\ub7ec\ub2e4\uc784",permalink:"/til/docs/dev/clean-architecture/ch2"}},c=[{value:"1\uc7a5. \uc124\uacc4\uc640 \uc544\ud0a4\ud14d\ucc98\ub780?",id:"1\uc7a5-\uc124\uacc4\uc640-\uc544\ud0a4\ud14d\ucc98\ub780",children:[{value:"\ubaa9\ud45c\ub294?",id:"\ubaa9\ud45c\ub294",children:[]},{value:"\uc0ac\ub840 \uc5f0\uad6c",id:"\uc0ac\ub840-\uc5f0\uad6c",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}]},{value:"2\uc7a5. \ub450 \uac00\uc9c0 \uac00\uce58\uc5d0 \ub300\ud55c \uc774\uc57c\uae30",id:"2\uc7a5-\ub450-\uac00\uc9c0-\uac00\uce58\uc5d0-\ub300\ud55c-\uc774\uc57c\uae30",children:[{value:"\ud589\uc704",id:"\ud589\uc704",children:[]},{value:"\uc544\ud0a4\ud14d\ucc98",id:"\uc544\ud0a4\ud14d\ucc98",children:[]},{value:"\ub354 \ub192\uc740 \uac00\uce58",id:"\ub354-\ub192\uc740-\uac00\uce58",children:[]},{value:"\uc544\uc774\uc820\ud558\uc6cc \ub9e4\ud2b8\ub9ad\uc2a4",id:"\uc544\uc774\uc820\ud558\uc6cc-\ub9e4\ud2b8\ub9ad\uc2a4",children:[]},{value:"\uc544\ud0a4\ud14d\ucc98\ub97c \uc704\ud574 \ud22c\uc7c1\ud558\ub77c",id:"\uc544\ud0a4\ud14d\ucc98\ub97c-\uc704\ud574-\ud22c\uc7c1\ud558\ub77c",children:[]}]}],o={toc:c};function p(e){var t=e.components,r=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\uc7a5-\uc124\uacc4\uc640-\uc544\ud0a4\ud14d\ucc98\ub780"},"1\uc7a5. \uc124\uacc4\uc640 \uc544\ud0a4\ud14d\ucc98\ub780?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'\uc544\ud0a4\ud14d\ucc98'\ub294 \uc800\uc218\uc900\uc758 \uc138\ubd80\uc0ac\ud56d\uacfc\ub294 \ubd84\ub9ac\ub41c \uace0\uc218\uc900\uc758 \ubb34\uc5b8\uac00\ub97c \uac00\ub9ac\ud0ac \ub54c \uc0ac\uc6a9\ub418\uace0, '\uc124\uacc4'\ub294 \uc800\uc218\uc900\uc758 \uad6c\uc870 \ub610\ub294 \uacb0\uc815\uc0ac\ud56d\uc744 \uc758\ubbf8\ud560 \ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \uad6c\ubd84\uc740 \ubb34\uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc800\uc218\uc900\uc758 \uc138\ubd80\uc0ac\ud56d\uacfc \uace0\uc218\uc900\uc758 \uad6c\uc870\ub294 \ubaa8\ub450 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\uccb4 \uc124\uacc4\uc758 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubcc4\ub85c\ub294 \uc874\uc7ac\ud560 \uc218 \uc5c6\uace0, \uc774 \ub458\uc744 \uad6c\ubd84 \uc9d3\ub294 \uacbd\uacc4\ub294 \ub69c\ub837\ud558\uc9c0 \uc54a\uc73c\uba70 \uace0\uc218\uc900\uc5d0\uc11c \uc800\uc218\uc900\uc73c\ub85c \ud5a5\ud558\ub294 \uc758\uc0ac\uacb0\uc815\uc758 \uc5f0\uc18d\uc131\ub9cc \uc788\uc744 \ubfd0\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ubaa9\ud45c\ub294"},"\ubaa9\ud45c\ub294?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\uc758 \ubaa9\ud45c\ub294 \ud544\uc694\ud55c \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4e4\uace0 \uc720\uc9c0\ubcf4\uc218\ud558\ub294 \ub370 \ud22c\uc785\ub418\ub294 \uc778\ub825\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \ub370 \uc788\uc501\ub2c8\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc124\uacc4 \ud488\uc9c8\uc744 \uc7ac\ub294 \ucc99\ub3c4\ub294 \uace0\uac1d\uc758 \uc694\uad6c\ub97c \ub9cc\uc871\uc2dc\ud0a4\ub294 \ub370 \ub4dc\ub294 \ube44\uc6a9\uc744 \uc7ac\ub294 \ucc99\ub3c4\uc640 \ub2e4\ub984 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ube44\uc6a9\uc774 \ub0ae\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc2dc\uc2a4\ud15c\uc758 \uc218\uba85\uc774 \ub2e4\ud560 \ub54c\uae4c\uc9c0 \ub0ae\uac8c \uc720\uc9c0\ud560 \uc218 \uc788\ub2e4\uba74 \uc88b\uc740 \uc124\uacc4"),", \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ucd9c\uc2dc\ud560 \ub54c\ub9c8\ub2e4 \ube44\uc6a9\uc774 \uc99d\uac00\ud55c\ub2e4\uba74 \ub098\uc05c \uc124\uacc4\uc785\ub2c8\ub2e4. \uc989 \uc88b\uc740 \uc124\uacc4\ub294 \ub2e8\uc21c\uba85\ub8cc\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc0ac\ub840-\uc5f0\uad6c"},"\uc0ac\ub840 \uc5f0\uad6c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ub77c\uc778\ub2f9 \ube44\uc6a9\uc774 \ud06c\uba74 \ud074 \uc218\ub85d \ub2f9\uc7a5\uc758 \uc218\uc775\uc131\uc740 \uc911\uc694\ud558\uc9c0 \uc54a\uc73c\uba70, \uc0ac\uc5c5 \ubaa8\ub378\uc758 \uc218\uc775\uc744 \uc5c4\uccad\ub098\uac8c \uace0\uac08\uc2dc\ud0a4\uba70 \ud68c\uc0ac\uc758 \uc131\uc7a5\uc744 \uba48\ucd94\uac8c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"\uc5c9\ub9c8\uc9c4\ucc3d\uc774-\ub418\uc5b4-\uac00\ub294-\uc2e0\ud638"},"\uc5c9\ub9c8\uc9c4\ucc3d\uc774 \ub418\uc5b4 \uac00\ub294 \uc2e0\ud638"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc744 \uae09\ud558\uac8c \ub9cc\ub4e4\uac70\ub098, \uacb0\uacfc\ubb3c\uc758 \ucd1d\ub7c9\uc744 \uc21c\uc804\ud788 \ud504\ub85c\uadf8\ub798\uba38 \uc218\ub85c \uacb0\uc815\ud558\uac70\ub098, \ucf54\ub4dc\uc640 \uc124\uacc4\uc758 \uad6c\uc870\ub97c \uae54\ub054\ud558\uac8c \ub9cc\ub4e4\ub824\ub294 \uc0dd\uac01\uc744 \uc804\ud600 \ud558\uc9c0 \uc54a\uc73c\uba74 \ud30c\uad6d\uc73c\ub85c \uce58\ub2eb\ub294 \ube44\uc6a9 \uacf3\uc120\uc5d0 \uc62c\ub77c\ud0c0\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ube44\uc6a9 \uace1\uc120\uc740 \uac1c\ubc1c\uc790 \uad00\uc810\uc5d0\uc11c 100%\ub85c \uc2dc\uc791\ud558\uc9c0\ub9cc \ucd9c\uc2dc\ub9c8\ub2e4 \ub5a8\uc5b4\uc838 \uacb0\uad6d 0\uc73c\ub85c \uc218\ub834\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc5c9\ub9dd\uc774 \ub418\uba74 \uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0 \ub300\ucc98\ud558\ub294 \ub370 \uc5d0\ub108\uc9c0\ub97c \uc18c\ubaa8\ub418\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"\uacbd\uc601\uc790\uc758-\uc2dc\uac01"},"\uacbd\uc601\uc790\uc758 \uc2dc\uac01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucd9c\uc2dc\uc5d0 \ube44\ub840\ud574\uc11c \uc778\uac74\ube44\uac00 \uc5c4\uccad\ub098\uac8c \ub298\uc5b4\ub0a9\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"\ubb34\uc5c7\uc774-\uc798\ubabb\ub418\uc5c8\ub098"},"\ubb34\uc5c7\uc774 \uc798\ubabb\ub418\uc5c8\ub098?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc \uc815\ub9ac\ub97c \ub098\uc911\uc5d0 \ud558\uace0 \uc2dc\uc7a5\uc5d0 \ucd9c\uc2dc\ud558\ub294 \uac83\uc744 \uc6b0\uc120\uc73c\ub85c \uc7a1\uc73c\uba74, \uc774\ub294 \uacb0\uad6d \uc0dd\uc0b0\uc131\uc774 0\uc73c\ub85c \uc218\ub834\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\uac00 \uc18d\ub294 \ub354 \uc798\ubabb\ub41c \uac70\uc9d3\ub9d0\uc740 \uc9c0\uc800\ubd84\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 \ub2e8\uae30\uac04\uc5d0 \ube60\ub974\uac8c \uac08 \uc218 \uc788\uace0, \uc7a5\uae30\uc801\uc73c\ub85c \ubcfc \ub54c\ub9cc \uc0dd\uc0b0\uc131\uc774 \ub0ae\uc544\uc9c4\ub2e4\uace0 \uc0dd\uac01\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ube68\ub9ac \uac00\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc81c\ub300\ub85c \uac00\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\ub294 \ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc2dc\uc791\ud558\uc5ec \uc804\uccb4 \uc2dc\uc2a4\ud15c\uc744 \uc7ac\uc124\uacc4\ud558\ub294 \uac83\uc774 \ud574\ub2f5\uc774\ub77c\uace0 \uc0dd\uac01\ud560\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc790\uc2e0\uc744 \uacfc\uc2e0\ud55c\ub2e4\uba74 \uc7ac\uc124\uacc4\ud558\ub354\ub77c\ub3c4 \uc6d0\ub798\uc758 \ud504\ub85c\uc81d\ud2b8\uc640 \ub611\uac19\uc774 \uc5c9\ub9dd\uc73c\ub85c \ub0b4\ubab0\ub9bd\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uacbd\uc6b0\ub77c\ub3c4 \uac1c\ubc1c \uc870\uc9c1\uc774 \ud560 \uc218 \uc788\ub294 \ucd5c\uace0\uc758 \uc120\ud0dd\uc9c0\ub294 \uc870\uc9c1\uc5d0 \uc2a4\uba70\ub4e0 \uacfc\uc2e0\uc744 \uc778\uc9c0\ud558\uc5ec \ubc29\uc9c0\ud558\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\uc758 \ud488\uc9c8\uc744 \uc2ec\uac01\ud558\uac8c \uace0\ubbfc\ud558\uae30 \uc2dc\uc791\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\ub97c \uc2ec\uac01\ud558\uac8c \uace0\ub824\ud560 \uc218 \uc788\uc73c\ub824\uba74 \uc88b\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc774\ud574\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\uc7a5-\ub450-\uac00\uc9c0-\uac00\uce58\uc5d0-\ub300\ud55c-\uc774\uc57c\uae30"},"2\uc7a5. \ub450 \uac00\uc9c0 \uac00\uce58\uc5d0 \ub300\ud55c \uc774\uc57c\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc740 \uc774\ud574\uad00\uacc4\uc790\uc5d0\uac8c ",(0,a.kt)("strong",{parentName:"li"},"\ud589\uc704(beharvior)")," \uacfc ",(0,a.kt)("strong",{parentName:"li"},"\uad6c\uc870(structure)")," \uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ud589\uc704"},"\ud589\uc704"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uccab \ubc88\uc9f8 \uac00\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\uba38\ub294 \uc774\ud574\uad00\uacc4\uc790\uac00 \uae30\ub2a5 \uba85\uc138\uc11c\ub098 \uc694\uad6c\uc0ac\ud56d \ubb38\uc11c\ub97c \uad6c\uccb4\ud654\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098, \uc774\uc678\uc5d0\ub3c4 \ud560 \uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc544\ud0a4\ud14d\ucc98"},"\uc544\ud0a4\ud14d\ucc98"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub450 \ubc88\uc9f8 \uac00\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 '\ubd80\ub4dc\ub7ec\uc6c0\uc744 \uc9c0\ub2c8\ub3c4\ub85d' \ub9cc\ub4e4\uc5b4\uc84c\uc73c\uba70 \uae30\uacc4\uc758 \ud589\uc704\ub97c \uc27d\uac8c \ubcc0\uacbd\ud558\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ube44\uc6a9\uc758 \uc99d\uac00\ub97c \uacb0\uc815\uc9d3\ub294 \uc8fc\ub41c \uc694\uc778\uc740 \ubcc0\uacbd\uc0ac\ud56d\uc758 \ubc94\uc704\uc640 \ud615\ud0dc\uc758 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc544\ud0a4\ud14d\ucc98\ub294 \ud615\ud0dc\uc5d0 \ub3c5\ub9bd\uc801\uc774\uc5b4\uc57c \ud558\uace0, \uadf8\ub7f4\uc218\ub85d \ub354 \uc2e4\uc6a9\uc801\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\ub354-\ub192\uc740-\uac00\uce58"},"\ub354 \ub192\uc740 \uac00\uce58"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc644\ubcbd\ud558\uac8c \ub3d9\uc791\ud558\uc9c0\ub9cc \uc218\uc815\uc774 \ubd88\uac00\ub2a5\ud55c \ud504\ub85c\uadf8\ub7a8\uc740 \uacb0\uad6d \uc694\uad6c\uc0ac\ud56d\uc774 \ubcc0\uacbd\ub418\uba74 \ub3d9\uc791\ud558\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc791 \ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \ubcc0\uacbd\uc774 \uc26c\uc6b4 \ud504\ub85c\uadf8\ub7a8\uc740 \uc774\ud6c4\uc5d0 \ub3cc\uc544\uac00\uac8c \ud560 \uc218 \uc788\uc73c\uba70 \ubcc0\uacbd\uc0ac\ud56d\uc774 \ubc1c\uc0dd\ud574\ub3c4 \uc720\uc9c0\ubcf4\uc218 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ud604\uc7ac \uae30\ub2a5\uc758 \ub3d9\uc791 \uc5ec\ubd80\uc640 \ubbf8\ub798\uc758 \uc720\uc5f0\uc131 \ub458 \ub2e4 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc544\uc774\uc820\ud558\uc6cc-\ub9e4\ud2b8\ub9ad\uc2a4"},"\uc544\uc774\uc820\ud558\uc6cc \ub9e4\ud2b8\ub9ad\uc2a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae34\uae09\ud55c \ubb38\uc81c\uac00 \uc544\uc8fc \uc911\uc694\ud55c \ubb38\uc81c\uc77c \uacbd\uc6b0\ub294 \ub4dc\ubb3c\uace0, \uc911\uc694\ud55c \ubb38\uc81c\uac00 \ubab9\uc2dc \uae34\uae09\ud55c \uacbd\uc6b0\ub294 \uac70\uc758 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc989, \ud589\uc704\ub294 \uae34\uae09\ud558\uc9c0\ub9cc \ub9e4\ubc88 \uc911\uc694\ub3c4\uac00 \ub192\uc740 \uacbd\uc6b0\ub97c \uac00\uc9c4 \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc544\ud0a4\ud14d\ucc98\ub610\ud55c \uc911\uc694\ud558\uc9c0\ub9cc \uc989\uac01\uc801\uc778 \uae34\uae09\uc131\uc744 \ud544\uc694\ub85c \ud558\ub294 \uacbd\uc6b0\ub294 \uc808\ub300 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub97c \uc6b0\uc120\uc21c\uc704\ub85c \ub9e4\uae30\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uae34\uae09\ud558\uace0 \uc911\uc694\ud55c"),(0,a.kt)("li",{parentName:"ol"},"\uae34\uae09\ud558\uc9c0 \uc54a\uc9c0\ub9cc \uc911\uc694\ud55c"),(0,a.kt)("li",{parentName:"ol"},"\uae34\uae09\ud558\uc9c0\ub9cc \uc911\uc694\ud558\uc9c0 \uc54a\uc740"),(0,a.kt)("li",{parentName:"ol"},"\uae34\uae09\ud558\uc9c0\ub3c4 \uc911\uc694\ud558\uc9c0\ub3c4 \uc54a\uc740")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \uc2e4\uc218\ud558\uae30 \uc26c\uc6b4 \ubd80\ubd84\uc740 3\ubc88 \uacbd\uc6b0\ub97c 1\ubc88 \uacbd\uc6b0\ub85c \uc62c\ub9ac\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc989, \uac1c\ubc1c\uc790\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc774\ub7ec\ud55c \ub51c\ub808\ub9c8\ub97c \ud574\uacb0"),"\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc544\ud0a4\ud14d\ucc98\ub97c-\uc704\ud574-\ud22c\uc7c1\ud558\ub77c"},"\uc544\ud0a4\ud14d\ucc98\ub97c \uc704\ud574 \ud22c\uc7c1\ud558\ub77c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\ub294 \ucc45\uc784\uc744 \uc704\ud574\uc11c\ub294 \ud22c\uc7c1\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud6a8\uc728\uc801\uc778 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\ud300\uc740 \uc774\ub7ec\ud55c \ud22c\uc7c1\uc5d0\uc11c \uc815\uba74\uc73c\ub85c \ub9de\uc11c \uc2f8\uc6c1\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub3c4 \uc774\ud574\uad00\uacc4\uc790\uc774\uba70 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc548\uc804\ud558\uac8c \ubcf4\ud638\ud574\uc57c \ud560 \ucc45\uc784\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98\ub294 \uc2dc\uc2a4\ud15c\uc774 \uc81c\uacf5\ud558\ub294 \ud2b9\uc131\uc774\ub098 \uae30\ub2a5\ubcf4\ub2e4\ub294 \uc2dc\uc2a4\ud15c\uc758 \uad6c\uc870\uc5d0 \ub354 \uc911\uc810\uc744 \ubd05\ub2c8\ub2e4. \uc544\ud0a4\ud14d\ud2b8\ub294 \uc774\ub7ec\ud55c \ud2b9\uc131\uacfc \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uae30 \uc27d\uace0, \uac04\ud3b8\ud558\uac8c \uc218\uc815\ud560 \uc218 \uc788\uc73c\uba70, \ud655\uc7a5\ud558\uae30 \uc26c\uc6b4 \uc544\ud0a4\ud14d\ucc98\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);