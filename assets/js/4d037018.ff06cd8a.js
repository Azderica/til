"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6196],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7494:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l={sidebar_position:5},o={unversionedId:"dev/system-design-interview/ch5",id:"dev/system-design-interview/ch5",isDocsHomePage:!1,title:"5. \uc548\uc815 \ud574\uc2dc \uc124\uacc4\uc548",description:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c",source:"@site/docs/dev/system-design-interview/ch5.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch5",permalink:"/til/docs/dev/system-design-interview/ch5",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch5.md",version:"current",lastUpdatedAt:1660963721,formattedLastUpdatedAt:"8/20/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch4"},next:{title:"6. \ud0a4-\uac12 \uc800\uc7a5\uc18c \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch6"}},u=[{value:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c",id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58rehash-\ubb38\uc81c",children:[]},{value:"\uc548\uc815 \ud574\uc2dc",id:"\uc548\uc815-\ud574\uc2dc",children:[]},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58rehash-\ubb38\uc81c"},"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N\uac1c\uc758 \uce90\uc2dc \uc11c\ubc84\uac00 \uc788\uc73c\uba70, \uc11c\ubc84\ub4e4\uc5d0 \ubd80\ud558\ub97c \uade0\ub4f1\ud558\uac8c \ub098\ub204\ub294 \ubcf4\ud3b8\uc801 \ubc29\ubc95\uc740 \uc544\ub798\uc758 \ud574\uc2dc \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"serverIndex = hash(key) % N(\uc11c\ubc84\uc758 \uac1c\uc218)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc11c\ubc84 \ud480 \ud06c\uae30\uac00 \uace0\uc815\ub418\uc5b4 \uc788\uc744 \ub54c, \ub370\uc774\ud130 \ubd84\ud3ec\uac00 \uade0\ub4f1\ud560 \ub54c\ub294 \uc798 \ub3d9\uc791\ud558\ub098 \uc11c\ubc84\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub418\uba74 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc548\uc815-\ud574\uc2dc"},"\uc548\uc815 \ud574\uc2dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc\ub294 \ud574\uc2dc \ud14c\uc774\ube14 \ud06c\uae30\uac00 \uc870\uc815\ub420 \ub54c \ud3c9\uade0\uc801\uc73c\ub85c \uc624\uc9c1 k/n\uac1c\uc758 \ud0a4\ub9cc \uc7ac\ubc30\uce58\ud558\ub294 \ud574\uc2dc \uae30\uc220\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc544\ub798\uc758 \ub0b4\uc6a9\ub4e4\uc744 \uc54c\uace0 \uc788\uc73c\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud574\uc2dc \uacf5\uac04\uacfc \ud574\uc2dc \ub9c1"),(0,a.kt)("li",{parentName:"ul"},"\ud574\uc2dc \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},"\ud574\uc2dc \ud0a4"),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc870\ud68c"),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \ucd94\uac00"),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc81c\uac70"),(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uad6c\ud604\ubc95\uc758 \ub450\uac00\uc9c0 \ubb38\uc81c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uccab \ubc88\uc7ac \ubb38\uc81c\ub294 \ud30c\ud2f0\uc158\uc758 \ud06c\uae30\ub97c \uade0\ub4f1\ud558\uac8c \uc720\uc9c0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \ubb38\uc81c\ub294 \ud0a4\uc758 \uade0\ub4f1 \ubd84\ud3ec\ub97c \ub2ec\uc131\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\uac00\uc0c1 \ub178\ub4dc "),(0,a.kt)("li",{parentName:"ul"},"\uc7ac\ubc30\uce58\ud560 \ud0a4 \uacb0\uc815")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub9c8\uce58\uba70"},"\ub9c8\uce58\uba70"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc\uc758 \uc774\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub420 \ub54c \uc7ac\ubc30\uce58\ub418\ub294 \ud0a4\uc758 \uc218\uac00 \ucd5c\uc18c\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uac00 \ubcf4\ub2e4 \uade0\ub4f1\ud558\uac8c \ubd84\ud3ec\ud558\uac8c \ub418\ubbc0\ub85c \uc218\ud3c9\uc801 \uaddc\ubaa8 \ud655\uc7a5\uc131\uc744 \ub2ec\uc131\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f \ud0a4 \ubb38\uc81c\ub97c \uc904\uc785\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc73c\ub85c \ub110\ub9ac \uc4f0\uc774\ub294 \uae30\uc220\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc544\ub9c8\uc874 \ub2e4\uc774\ub098\ubaa8 \ub370\uc774\ud130\ubca0\uc774\uc2a4(DyanmoDB)\uc758 \ud30c\ud2f0\uc154\ub2dd \uad00\ub828 \ucef4\ud3ec\ub10c\ud2b8"),(0,a.kt)("li",{parentName:"ul"},"\uc544\ud30c\uce58 \uce74\uc0b0\ub4dc\ub77c(Apache Cassandra) \ud074\ub7ec\uc2a4\uc5d0\uc11c\uc758 \ub370\uc774\ud130 \ud30c\ud2f0\uc154\ub2dd"),(0,a.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ucf54\ub4dc(Discord) \ucc44\ud305 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158"),(0,a.kt)("li",{parentName:"ul"},"\uc544\uce74\ub9c8\uc774(Akamai) CDN"),(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uadf8\ub808\ud504(Meglev) \ub124\ud2b8\uc6cc\ud06c \ubd80\ud558 \ubd84\uc0b0\uae30")))))}p.isMDXComponent=!0}}]);