"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6196],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7494:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a={sidebar_position:5},c={unversionedId:"dev/system-design-interview/ch5",id:"dev/system-design-interview/ch5",isDocsHomePage:!1,title:"5. \uc548\uc815 \ud574\uc2dc \uc124\uacc4\uc548",description:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c",source:"@site/docs/dev/system-design-interview/ch5.md",sourceDirName:"dev/system-design-interview",slug:"/dev/system-design-interview/ch5",permalink:"/til/docs/dev/system-design-interview/ch5",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/system-design-interview/ch5.md",version:"current",lastUpdatedAt:1660778749,formattedLastUpdatedAt:"8/17/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",permalink:"/til/docs/dev/system-design-interview/ch4"},next:{title:"1. \ud611\ub825\ud558\ub294 \uac1d\uccb4\ub4e4\uc758 \uacf5\ub3d9\uccb4",permalink:"/til/docs/dev/the-essence-of-object-orientation/ch1"}},l=[{value:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c",id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58rehash-\ubb38\uc81c",children:[]},{value:"\uc548\uc815 \ud574\uc2dc",id:"\uc548\uc815-\ud574\uc2dc",children:[]},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58rehash-\ubb38\uc81c"},"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58(rehash) \ubb38\uc81c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\uac1c\uc758 \uce90\uc2dc \uc11c\ubc84\uac00 \uc788\uc73c\uba70, \uc11c\ubc84\ub4e4\uc5d0 \ubd80\ud558\ub97c \uade0\ub4f1\ud558\uac8c \ub098\ub204\ub294 \ubcf4\ud3b8\uc801 \ubc29\ubc95\uc740 \uc544\ub798\uc758 \ud574\uc2dc \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"serverIndex = hash(key) % N(\uc11c\ubc84\uc758 \uac1c\uc218)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc11c\ubc84 \ud480 \ud06c\uae30\uac00 \uace0\uc815\ub418\uc5b4 \uc788\uc744 \ub54c, \ub370\uc774\ud130 \ubd84\ud3ec\uac00 \uade0\ub4f1\ud560 \ub54c\ub294 \uc798 \ub3d9\uc791\ud558\ub098 \uc11c\ubc84\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub418\uba74 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\uc548\uc815-\ud574\uc2dc"},"\uc548\uc815 \ud574\uc2dc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc\ub294 \ud574\uc2dc \ud14c\uc774\ube14 \ud06c\uae30\uac00 \uc870\uc815\ub420 \ub54c \ud3c9\uade0\uc801\uc73c\ub85c \uc624\uc9c1 k/n\uac1c\uc758 \ud0a4\ub9cc \uc7ac\ubc30\uce58\ud558\ub294 \ud574\uc2dc \uae30\uc220\uc785\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\ub9c8\uce58\uba70"},"\ub9c8\uce58\uba70"))}u.isMDXComponent=!0}}]);