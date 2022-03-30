(self.webpackChunktil=self.webpackChunktil||[]).push([[8549],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4282:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={sidebar_position:15},c={unversionedId:"java/optimizing-java/ch15",id:"java/optimizing-java/ch15",isDocsHomePage:!1,title:"15. \uc790\ubc14 9\uc640\uc758 \ubbf8\ub798",description:"\ubaa8\ub4c8 : \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c/\ubc30\ud3ec\ud558\ub294 \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \ubc29\uc2dd\uc774\ub77c\uc11c \ud558\ub098\uc529 \ub2e8\uacc4\uc801\uc73c\ub85c \ub3c4\uc785\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.",source:"@site/docs/java/optimizing-java/ch15.md",sourceDirName:"java/optimizing-java",slug:"/java/optimizing-java/ch15",permalink:"/til/docs/java/optimizing-java/ch15",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/optimizing-java/ch15.md",version:"current",lastUpdatedAt:1648638706,formattedLastUpdatedAt:"3/30/2022",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"14. \uace0\uc131\ub2a5 \ub85c\uae45 \ubc0f \uba54\uc2dc\uc9d5",permalink:"/til/docs/java/optimizing-java/ch14"},next:{title:"1. \uc548\uc815\uc131",permalink:"/til/docs/kotlin/effective-kotlin/ch1"}},l=[{value:"\ub0b4\uc6a9.",id:"\ub0b4\uc6a9",children:[]},{value:"Doc",id:"doc",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ubaa8\ub4c8 : \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c/\ubc30\ud3ec\ud558\ub294 \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \ubc29\uc2dd\uc774\ub77c\uc11c \ud558\ub098\uc529 \ub2e8\uacc4\uc801\uc73c\ub85c \ub3c4\uc785\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ub0b4\uc6a9"},"\ub0b4\uc6a9."),(0,o.kt)("p",null,"\ub0b4\uc6a9\uc801\uc778 \ubd80\ubd84\uc774 \uc61b\ub0a0\uc801\uc778 \ubd80\ubd84\uc774 \ub9ce\uc544\uc11c \ub2e4\uc74c\uc758 \ucee8\ud150\uce20\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"doc"},"Doc"),(0,o.kt)("p",null,"\uc790\ubc14 \ubc84\uc804\uc5d0 \ub300\ud574\uc11c \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/kr/java/technologies/javase-downloads.html"},"\uc790\ubc14 \ubc84\uc804"))))}u.isMDXComponent=!0}}]);