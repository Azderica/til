"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[5250],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),c=k(a),d=l,N=c["".concat(p,".").concat(d)]||c[d]||o[d]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},566:function(t,e,a){a.r(e),a.d(e,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i={sidebar_position:6},u={unversionedId:"dev/system-design-interview/ch6",id:"dev/system-design-interview/ch6",isDocsHomePage:!1,title:"6. \ud0a4-\uac12 \uc800\uc7a5\uc18c \uc124\uacc4",description:"- \ud0a4-\uac12 \uc800\uc7a5\uc18c(key-value store)\ub294 \ud0a4-\uac12 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub77c\uace0 \ubd88\ub9ac\ub294 \ube44 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc785\ub2c8\ub2e4.",source:"@site/docs/dev/system-design-interview/ch6.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch6",permalink:"/til/docs/dev/system-design-interview/ch6",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch6.md",version:"current",lastUpdatedAt:1669969740,formattedLastUpdatedAt:"12/2/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \uc548\uc815 \ud574\uc2dc \uc124\uacc4\uc548",permalink:"/til/docs/dev/system-design-interview/ch5"},next:{title:"7. \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc720\uc77c ID \uc0dd\uc131\uae30 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch7"}},p=[{value:"\ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",children:[]},{value:"\ub2e8\uc77c \uc11c\ubc84 \ud0a4-\uac12 \uc800\uc7a5\uc18c",id:"\ub2e8\uc77c-\uc11c\ubc84-\ud0a4-\uac12-\uc800\uc7a5\uc18c",children:[]},{value:"\ubd84\uc0b0 \ud0a4-\uac12 \uc800\uc7a5\uc18c",id:"\ubd84\uc0b0-\ud0a4-\uac12-\uc800\uc7a5\uc18c",children:[{value:"CAP \uc815\ub9ac",id:"cap-\uc815\ub9ac",children:[]},{value:"\uc2dc\uc2a4\ud15c \ucef4\ud3ec\ub10c\ud2b8",id:"\uc2dc\uc2a4\ud15c-\ucef4\ud3ec\ub10c\ud2b8",children:[]}]},{value:"\uc694\uc57d",id:"\uc694\uc57d",children:[]}],k={toc:p};function m(t){var e=t.components,a=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0a4-\uac12 \uc800\uc7a5\uc18c(key-value store)\ub294 \ud0a4-\uac12 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub77c\uace0 \ubd88\ub9ac\ub294 \ube44 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud0a4-\uac12 \uc30d\uc5d0\uc11c\uc758 \ud0a4\ub294 \uc720\uc77c\ud574\uc57c\ud558\uba70 \ud574\ub2f9 \ud0a4\uc5d0 \ub2ec\ub9b0 \uac12\uc740 \ud0a4\ub97c \ud1b5\ud574\uc11c\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"\ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc644\ubcbd\ud55c \uc124\uacc4\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud2b9\uc131\uc744 \uac16\ub294 \uc124\uacc4\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud0a4-\uac12 \uc30d\uc758 \ud06c\uae30\ub294 10KB \uc774\ud558\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud070 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub192\uc740 \uac00\uc6a9\uc131\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2dc\uc2a4\ud15c\uc740 \uc124\uc0ac \uc7a5\uc560\uac00 \uc788\ub354\ub77c\ub3c4 \ube68\ub9ac \uc751\ub2f5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub192\uc740 \uaddc\ubaa8 \ud655\uc7a5\uc131\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub798\ud53d \uc591\uc5d0 \ub530\ub77c \uc790\ub3d9\uc801\uc73c\ub85c \uc11c\ubc84 \uc99d\uc124/\uc0ad\uc81c\uac00 \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc77c\uad00\uc131 \uc218\uc900\uc740 \uc870\uc815\uc774 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc751\ub2f5 \uc9c0\uc5f0\uc2dc\uac04(latency)\uc774 \uc9e7\uc544\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ub2e8\uc77c-\uc11c\ubc84-\ud0a4-\uac12-\uc800\uc7a5\uc18c"},"\ub2e8\uc77c \uc11c\ubc84 \ud0a4-\uac12 \uc800\uc7a5\uc18c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud55c \ub300 \uc11c\ubc84\ub9cc \uc0ac\uc6a9\ud558\ub294 \ud0a4-\uac12 \uc800\uc7a5\uc18c\ub97c \uc124\uacc4\ud558\ub294 \uac83\uc740 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ubc29\ubc95\uc740 \ube60\ub978 \uc18d\ub3c4\ub97c \ubcf4\uc7a5\ud558\uc9c0\ub9cc, \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uba54\ubaa8\ub9ac \uc548\uc5d0 \ub450\ub294 \uac83\uc774 \ubd88\uac00\ub2a5\ud560 \uc218\ub3c4 \uc788\ub2e4\ub294 \uc57d\uc811\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud560 \ud574\uacb0\ucc45\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc555\ucd95(compression)"),(0,r.kt)("li",{parentName:"ul"},"\uc790\uc8fc \uc4f0\uc774\ub294 \ub370\uc774\ud130\ub9cc \uba54\ubaa8\ub9ac\uc5d0 \ub450\uace0 \ub098\uba38\uc9c0\ub294 \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5"))),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ud55c \ub300 \uc11c\ubc84\ub85c \ubd80\uc871\ud55c \ub54c\uac00 \uace7 \ucc3e\uc544\uc635\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ubd84\uc0b0-\ud0a4-\uac12-\uc800\uc7a5\uc18c"},"\ubd84\uc0b0 \ud0a4-\uac12 \uc800\uc7a5\uc18c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubd84\uc0b0 \ud0a4-\uac12 \uc800\uc7a5\uc18c\ub294 \ubd84\uc0b0 \ud574\uc2dc \ud14c\uc774\ube14\uc774\ub77c\uace0\ub3c4 \ubd88\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc124\uacc4\ud560 \ub54c\ub294 CAP \uc815\ub9ac(Consistency, Availability, Partition Tolerance theorem)\ub97c \uc54c\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"cap-\uc815\ub9ac"},"CAP \uc815\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc77c\uad00\uc131(consistency), \uac00\uc6a9\uc131(availability), \ud30c\ud2f0\uc158 \uac10\ub0b4(partition tolerance)\ub77c\ub294 \uc138 \uac00\uc9c0 \uc694\uad6c\uc0ac\ud56d\uc744 \ub3d9\uc2dc\uc5d0 \ub9cc\uc871\ud558\ub294 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc124\uacc4\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud558\ub2e4\ub294 \uc815\ub9ac\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc77c\uad00\uc131: \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0 \uc811\uc18d\ud558\ub294 \ubaa8\ub4e0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc5b4\ub5a4 \ub178\ub4dc\uc5d0 \uc811\uc18d\ud588\ub290\ub0d0\uc5d0 \uad00\uacc4\uc5c6\uc774 \uc5b8\uc81c\ub098 \uac19\uc740 \ub370\uc774\ud130\ub97c \ubd10\uc57c \ud569\ub2c8\ub2e4. "),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc6a9\uc131: \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0 \uc811\uc18d\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc77c\ubd80 \ub178\ub4dc\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \ud56d\uc0c1 \uc751\ub2f5\uc744 \ubc1b\uc744 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \uac10\ub0b4: \ud30c\ud2f0\uc158\uc740 \ub450 \ub178\ub4dc \uc0ac\uc774\uc5d0 \ud1b5\uc2e0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uc600\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ud30c\ud2f0\uc158 \uac10\ub0b4\ub294 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ud30c\ud2f0\uc158\uc774 \uc0dd\uae30\ub354\ub77c\ub3c4 \uc2dc\uc2a4\ud15c\uc740 \uacc4\uc18d \ub3d9\uc791\ud574\uc57c \ud55c\ub2e4\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud0a4-\uac12 \uc800\uc7a5\uc18c\ub294 \uc55e\uc11c \uc81c\uc2dc\ud55c \uc138 \uac00\uc9c0 \uc694\uad6c\uc0ac\ud56d \uac00\uc6b4\ub370 \uc5b4\ub290 \ub450 \uac00\uc9c0\ub97c \ub9cc\uc871\ud558\ub0d0\uc5d0 \ub530\ub77c \uc544\ub798\uc640 \uac19\uc774 \ubd84\ub958\ub429\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CP \uc2dc\uc2a4\ud15c: \uc77c\uad00\uc131\uacfc \ud30c\ud2f0\uc158 \uac10\ub0b4\ub97c \uc9c0\uc6d0\ud558\ub294 \ud0a4-\uac12 \uc800\uc7a5\uc18c. \uac00\uc6a9\uc131\uc744 \ud76c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"AP \uc2dc\uc2a4\ud15c: \uac00\uc6a9\uc131\uacfc \ud30c\ud2f0\uc158 \uac10\ub0b4\ub97c \uc9c0\uc6d0\ud558\ub294 \ud0a4-\uac12 \uc800\uc7a5\uc18c. \ub370\uc774\ud130 \uc77c\uad00\uc131\uc744 \ud76c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CA \uc2dc\uc2a4\ud15c: \uc77c\uad00\uc131\uacfc \uac00\uc6a9\uc131\uc744 \uc9c0\uc6d0\ud558\ub294 \ud0a4-\uac12 \uc800\uc7a5\uc18c. \ud30c\ud2f0\uc158 \uac10\ub0b4\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud1b5\uc0c1 \ub124\ud2b8\uc6cc\ud06c \uc7a5\uc560\ub294 \uc5c6\uc73c\ubbc0\ub85c \uc2e4\uc138\uacc4\uc5d0\uc11c CA \uc2dc\uc2a4\ud15c\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Pacelc \uc774\ub860\uc73c\ub85c \ub118\uc5b4\uac14\uc744 \ud150\ub370. "))),(0,r.kt)("h3",{id:"\uc2dc\uc2a4\ud15c-\ucef4\ud3ec\ub10c\ud2b8"},"\uc2dc\uc2a4\ud15c \ucef4\ud3ec\ub10c\ud2b8"),(0,r.kt)("h4",{id:"\ub370\uc774\ud130-\ud30c\ud2f0\uc158"},"\ub370\uc774\ud130 \ud30c\ud2f0\uc158"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ud30c\ud2f0\uc158 \ub2e8\uc704\ub85c \ub098\ub20c \ub54c\ub294 \ub2e4\uc74c \ub450\uac00\uc9c0 \ubb38\uc81c\ub97c \uc8fc\uc694\ud558\uac8c \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5ec\ub7ec \uc11c\ubc84\uc5d0 \uace0\ub974\uac8c \ubd84\uc0b0\ud560 \uc218 \uc788\ub294\uac00"),(0,r.kt)("li",{parentName:"ul"},"\ub178\ub4dc\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub420 \ub54c \ub370\uc774\ud130\uc758 \uc774\ub3d9\uc744 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\ub294\uac00?"))),(0,r.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ud30c\ud2f0\uc158\ud558\uba74 \uc88b\uc740 \uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5 \uc790\ub3d9\ud654(automatic scaling): \uc2dc\uc2a4\ud15c \ubd80\ud558\uc5d0 \ub530\ub77c \uc11c\ubc84\uac00 \uc790\ub3d9\uc73c\ub85c \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub418\ub3c4\ub85d \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc591\uc131(hetoerogeneity): \uac01 \uc11c\ubc84\uc758 \uc6a9\ub7c9\uc5d0 \ub9de\uac8c \uac00\uc0c1 \ub178\ub4dc\uc758 \uc218\ub97c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uace0\uc131\ub2a5 \uc11c\ubc84\ub294 \ub354 \ub9ce\uc740 \uac00\uc0c1 \ub178\ub4dc\ub97c \uac16\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h4",{id:"\ub370\uc774\ud130-\ub2e4\uc911\ud654replication"},"\ub370\uc774\ud130 \ub2e4\uc911\ud654(replication)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub192\uc740 \uac00\uc6a9\uc131\uacfc \uc548\uc804\uc131\uc744 \ud655\ubcf4\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub370\uc774\ud130\ub97c N\uac1c \uc11c\ubc84\uc5d0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ub2e4\uc911\ud654(Replication)\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac19\uc740 \ub370\uc774\ud130 \uc13c\ud130\uc5d0 \uc18d\ud55c \ub178\ub4dc\ub294 \uc815\uc804, \ub124\ud2b8\uc6cc\ud06c \uc774\uc288, \uc790\uc5f0\uc7ac\ud574 \ub4f1\uc758 \ubb38\uc81c\ub97c \ub3d9\uc2dc\uc5d0 \uacaa\uc744 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, \uc548\uc815\uc131\uc744 \ub2f4\ubcf4\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130\uc758 \uc0ac\ubcf8\uc740 \ub2e4\ub978 \uc13c\ud130\uc758 \uc11c\ubc84\uc5d0 \ubcf4\uad00\ud558\uace0, \uc13c\ud130\ub4e4\uc740 \uace0\uc18d \ub124\ud2b8\uc6cc\ud06c\ub85c \uc5f0\uacb0\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc77c\uad00\uc131consistency"},"\uc77c\uad00\uc131(consistency)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc815\uc871\uc218 \ud569\uc758 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud574\uc11c \uc77d\uae30/\uc4f0\uae30 \uc5f0\uc0b0 \ubaa8\ub450\uc5d0 \uc77c\uad00\uc131\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"N : \uc0ac\ubcf8 \uac1c\uc218"),(0,r.kt)("li",{parentName:"ul"},"W : \uc4f0\uae30 \uc5f0\uc0b0\uc5d0 \ub300\ud55c \uc815\uc871\uc218"),(0,r.kt)("li",{parentName:"ul"},"R : \uc77d\uae30 \uc5f0\uc0b0\uc5d0 \ub300\ud55c \uc815\uc871\uc218"))),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uad6c\uc131\uc744 \uc608\uc2dc\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"R = 1, W = N: \ube60\ub978 \uc77d\uae30 \uc5f0\uc0b0\uc5d0 \ucd5c\uc801\ud654\ub41c \uc2dc\uc2a4\ud15c"),(0,r.kt)("li",{parentName:"ul"},"W = 1, R = N: \ube60\ub978 \uc4f0\uae30 \uc5f0\uc0b0\uc5d0 \ucd5c\uc801\ud654\ub41c \uc2dc\uc2a4\ud15c"),(0,r.kt)("li",{parentName:"ul"},"W + R > N: \uac15\ud55c \uc77c\uad00\uc131\uc774 \ubcf4\uc7a5\ub428 (\ubcf4\ud1b5 N = 3, W = R = 2)"),(0,r.kt)("li",{parentName:"ul"},"W + R <= N: \uac15\ud55c \uc77c\uad00\uc131\uc774 \ubcf4\uc7a5\ub418\uc9c0 \uc54a\uc74c")))),(0,r.kt)("h5",{id:"\uc77c\uad00\uc131-\ubaa8\ub378"},"\uc77c\uad00\uc131 \ubaa8\ub378"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac15\ud55c \uc77c\uad00\uc131(strong consistency): \ubaa8\ub4e0 \uc77d\uae30 \uc5f0\uc0b0\uc740 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uac31\uc2e0\ub41c \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc57d\ud55c \uc77c\uad00\uc131(weak consistency): \uc77d\uae30 \uc5f0\uc0b0\uc740 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uac31\uc2e0\ub41c \uacb0\uacfc\ub97c \ubc18\ud658\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc885 \uc77c\uad00\uc131(eventual consistency): \uc57d\ud55c \uc77c\uad00\uc131\uc758 \ud55c \ud615\ud0dc\ub85c, \uac31\uc2e0 \uacb0\uacfc\uac00 \uacb0\uad6d\uc5d0\ub294 \ubaa8\ub4e0 \uc0ac\ubcf8\uc5d0 \ubc18\uc601(\uc989, \ub3d9\uae30\ud654)\ub418\ub294 \ubaa8\ub378\uc785\ub2c8\ub2e4.")),(0,r.kt)("h5",{id:"\ube44-\uc77c\uad00\uc131-\ud574\uc18c-\uae30\ubc95-\ub370\uc774\ud130-\ubc84\uc800\ub2dd"},"\ube44 \uc77c\uad00\uc131 \ud574\uc18c \uae30\ubc95: \ub370\uc774\ud130 \ubc84\uc800\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ub2e4\uc911\ud638\ud558\uba74 \uac00\uc6a9\uc131\uc740 \ub192\uc544\uc9c0\uc9c0\ub9cc \uc0ac\ubcf8 \uac04 \uc77c\uad00\uc131\uc774 \uae68\uc9c8 \uac00\ub2a5\uc131\uc740 \ub192\uc544\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc84\uc800\ub2dd\uc740 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud560 \ub54c\ub9c8\ub2e4 \ud574\ub2f9 \ub370\uc774\ud130\uc758 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc744 \ub9cc\ub4dc\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc31\ud130 \uc2dc\uacc4\ub97c \ud1b5\ud574 \uc774\uc804 \ubc95\uc804\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud560 \uc218 \uc787\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ubca1\ud130 \uc2dc\uacc4\ub97c \uc0ac\uc6a9\ud574 \ucda9\ub3cc \uac10\uc9c0\ub294 \uc544\ub798\uc758 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uccab\uc9f8, \ucda9\ub3cc \uac10\uc9c0 \ubc0f \ud574\uc18c \ub85c\uc9c1\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \ub4e4\uc5b4\uac00\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \uad6c\ud604\uc774 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub458\uc9f8, ","[\uc11c\ubc84, \ubc84\uc804]","\uc758 \uc21c\uc11c\uc30d \uac1c\uc218\uac00 \uad49\uc7a5\ud788 \ube68\ub9ac \ub298\uc5b4\ub0a9\ub2c8\ub2e4. -> \ud574\uacb0\ucc45\uc740 \uc784\uacc4\uce58 \uc774\uc0c1\uc73c\ub85c \uae38\uc5b4\uc9c0\ub9cc \uc624\ub798\ub41c \uc21c\uc11c\uc30d\uc744 \ubca1\ud130 \uc2dc\uacc4\uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h4",{id:"\uc7a5\uc560-\ucc98\ub9ac"},"\uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc560\ub97c \ucc98\ub9ac\ud558\ub294 \ubd80\ubd84\uc740 \uc911\uc694\ud55c \ubb38\uc81c\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc564 \uac10\uc9c0(failure detection) \uae30\ubc95\uacfc \uc7a5\uc560 \ud574\uc18c(failure resolution) \uc804\ub7b5\uc774 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h5",{id:"\uc7a5\uc560-\uac10\uc9c0"},"\uc7a5\uc560 \uac10\uc9c0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba40\ud2f0 \uce90\uc2a4\ud305 \ucc44\ud138\uc744 \uad6c\ucd95\ud558\ub294 \uac83\uc740 \uc26c\uc6b4 \ubc29\ubc95\uc774\ub098, \uc11c\ubc84\uac00 \ub9ce\uc744 \ub54c\ub294 \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc2ed \ud504\ub85c\ud1a0\ucf5c(gossip protocol) \uac19\uc740 \ubd84\uc0b0\ud615 \uc7a5\uc560 \uac10\uc9c0(decentralized failure detection) \uc194\ub8e8\uc158\uc744 \ucc44\ud0dd\ud558\ub294 \ud3b8\uc774 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\uae30\uc801\uc73c\ub85c \ubc15\ub3d9 \uce74\uc6b4\ud130 \ubaa9\ub85d\uc744 \ubcf4\ub0b4\ub294\ub370, \uc5b4\ub5a4 \uba64\ubc84\uc758 \ubc15\ub3d9 \uce74\uc6b4\ud130 \uac12\uc774 \uc9c0\uc815\ub41c \uc2dc\uac04\ub3d9\uc548 \uac31\uc2e0\ub418\uc9c0 \uc54a\uc73c\uba74 \uc7a5\uc560\ub85c \ubd05\ub2c8\ub2e4.")))),(0,r.kt)("h5",{id:"\uc77c\uc2dc\uc801-\uc7a5\uc560-\ucc98\ub9ac"},"\uc77c\uc2dc\uc801 \uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5c4\uaca9\ud55c \uc815\uc871\uc218 \uc811\uadfc\ubc95\uc774\ub77c\uba74 \uc77d\uae30\uc640 \uc5f0\uc0b0\uc744 \uae08\uc9c0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub290\uc2a8\ud55c \uc815\uc871\uc218 \uc811\uadfc\ubc95\uc740 \uac74\uac15\ud55c N\uac1c\uc5d0\uc11c \uac74\uac15\ud55c W, \uac74\uac15\ud55c R\uac1c\uc758 \uc11c\ubc84\ub97c \uace0\ub985\ub2c8\ub2e4.")),(0,r.kt)("h5",{id:"\uc601\uad6c-\uc7a5\uc560-\ucc98\ub9ac"},"\uc601\uad6c \uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba38\ud2c0(Merkle) \ud2b8\ub9ac \ub4f1\uc744 \uc0ac\uc6a9\ud574\uc11c \uc77c\uad00\uc131\uc774 \ub9dd\uac00\uc9c4 \uc0c1\ud0dc\ub97c \ud0d0\uc9c0\ud558\uace0 \uc804\uc1a1 \ub370\uc774\ud130\uc758 \uc591\uc744 \uc904\uc785\ub2c8\ub2e4.")),(0,r.kt)("h5",{id:"\ub370\uc774\ud130-\uc13c\ud130-\uc7a5\uc560-\ucc98\ub9ac"},"\ub370\uc774\ud130 \uc13c\ud130 \uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc5ec\ub7ec \ub370\uc774\ud130 \uc13c\ud130\uc5d0 \ub2e4\uc911\ud654\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"\uc2dc\uc2a4\ud15c-\uc544\ud0a4\ud14d\ucc98-\ub2e4\uc774\uc5b4\uadf8\ub7a8"},"\uc2dc\uc2a4\ud15c \uc544\ud0a4\ud14d\ucc98 \ub2e4\uc774\uc5b4\uadf8\ub7a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc544\ub798 \uc544\ud0a4\ud14d\ucc98\ub97c \uc124\uacc4\ud55c\ub2e4\uba74 \uc8fc\ub41c \uae30\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ud0a4-\uac12 \uc800\uc7a5\uc18c\uac00 \uc81c\uacf5\ud558\ub294 \ub450 \uac00\uc9c0 \ub2e8\uc21c\ud55c API, \uc989 get(key) \ubc0f put(key, value)\uc640 \ud1b5\uc2e0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc911\uc7ac\uc790/(coordinator)\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ud0a4-\uac12 \uc800\uc7a5\uc18c\uc5d0 \ub300\ud55c \ud504\ub77d\uc2dc(proxy) \uc5ed\ud560\uc744 \ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub178\ub4dc\ub294 \uc548\uc815 \ud574\uc2dc(consistent hash)\uc758 \ud574\uc2dc \ub9c1(hash ring) \uc704\uc5d0 \ubd84\ud3ec\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub178\ub4dc\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\uac00 \ub610\ub294 \uc0ad\uc81c\ud560 \uc218 \uc788\ub3c4\ub85d, \uc2dc\uc2a4\ud15c\uc740 \uc644\uc804\ud788 \ubd84\uc0b0\ub429\ub2c8\ub2e4.(decentralized)"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 \uc5ec\ub7ec \ub178\ub4dc\uc5d0 \ub2e4\uc911\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ub178\ub4dc\uac00 \uac19\uc740 \ucc45\uc784\uc744 \uc9c0\ubbc0\ub85c, SPOF(Single Point of Failure)\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/185771889-8fbf27ac-58b7-480f-b20a-8caa479d3bec.png",alt:"\uc2dc\uc2a4\ud15c \uc544\ud0a4\ud14d\ucc98 \uc694\uad6c\uc0ac\ud56d"})),(0,r.kt)("h4",{id:"\uc4f0\uae30-\uacbd\ub85cwrite-path"},"\uc4f0\uae30 \uacbd\ub85c(write path)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc4f0\uae30 \uacbd\ub85c \uc608\uc2dc(\uce74\uc0b0\ub4dc\ub77c)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/185771884-5e53fa63-072e-44c3-bcbd-d31c5b8578fc.png",alt:"\uc4f0\uae30 \uacbd\ub85c"})),(0,r.kt)("h4",{id:"\uc77d\uae30-\uacbd\ub85cread-path"},"\uc77d\uae30 \uacbd\ub85c(read path)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uacbd\ub85c \uc608\uc2dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uac00 \uc788\ub294 \uacbd\uc6b0, \uba54\ubaa8\ub9ac \uce90\uc2dc\uc5d0\uc11c \ubc14\ub85c \uacb0\uacfc \ubc18\ud658"),(0,r.kt)("li",{parentName:"ul"},"\uce90\uc2dc\uc5d0 \uc5c6\ub294 \uacbd\uc6b0 \uc544\ub798\uc758 \uadf8\ub9bc")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/185771890-2f1559a1-4324-4f17-a3e9-936e3135aadb.png",alt:"\uc77d\uae30 \uacbd\ub85c"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ubaa9\ud45c/\ubb38\uc81c"),(0,r.kt)("th",{parentName:"tr",align:null},"\uae30\uc220"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub300\uaddc\ubaa8 \ub370\uc774\ud130 \uc800\uc7a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc548\uc815 \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud574 \uc11c\ubc84\ub4e4\uc5d0 \ubd80\ud558 \ubd84\uc0b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc77d\uae30 \uc5f0\uc0b0\uc5d0 \ub300\ud55c \ub192\uc740 \uac00\uc6a9\uc131 \ubcf4\uc7a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ub97c \uc5ec\ub7ec \ub370\uc774\ud130\uc13c\ud130\uc5d0 \ub2e4\uc911\ud654")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc4f0\uae30 \uc5f0\uc0b0\uc5d0 \ub300\ud55c \ub192\uc740 \uac00\uc6a9\uc131 \ubcf4\uc7a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc84\uc800\ub2dd \ubc0f \ubca1\ud130 \uc2dc\uacc4\ub97c \uc0ac\uc6a9\ud55c \ucda9\ub3cc \ud574\uc18c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130 \ud30c\ud2f0\uc158"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc548\uc815 \ud574\uc2dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc810\uc9c4\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc131"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc548\uc815 \ud574\uc2dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub2e4\uc591\uc131(heterogeneity)"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc548\uc815 \ud574\uc2dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc870\uc808 \uac00\ub2a5\ud55c \ub370\uc774\ud130 \uc77c\uad00\uc131"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc815\uc871\uc218 \ud569\uc758(quorum consensus)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc77c\uc2dc\uc801 \uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub290\uc2a8\ud55c \uc815\uc871\uc218 \ud504\ub85c\ud1a0\ucf5c(sloppyquorum)\uacfc \ub2e8\uc11c \ud6c4 \uc784\uc2dc \uc704\ud0c1(hinted handoff)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc601\uad6c\uc801 \uc7a5\uc560 \ucc98\ub9ac"),(0,r.kt)("td",{parentName:"tr",align:null},"\uba38\ud074 \ud2b8\ub9ac(Merkle tree)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130 \uc13c\ud130 \uc7a5\uc560 \ub300\uc751"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc5ec\ub7ec \ub370\uc774\ud130 \uc13c\ud130\uc5d0 \uac78\uce5c \ub370\uc774\ud130 \ub2e4\uc911\ud654")))))}m.isMDXComponent=!0}}]);