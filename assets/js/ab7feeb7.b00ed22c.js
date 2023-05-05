"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8415],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(v,o(o({ref:r},u),{},{components:t})):n.createElement(v,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},261:function(e,r,t){t.r(r),t.d(r,{default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return s}});var n=t(7462),i=t(3366),c=(t(7294),t(3905)),o={sidebar_position:1},a={unversionedId:"spring/spring-cloud-msa/ch1",id:"spring/spring-cloud-msa/ch1",isDocsHomePage:!1,title:"1. Service Discovery",description:"Spring Cloud Netflix Eureka",source:"@site/docs/spring/spring-cloud-msa/ch1.md",sourceDirName:"spring/spring-cloud-msa",slug:"/spring/spring-cloud-msa/ch1",permalink:"/til/docs/spring/spring-cloud-msa/ch1",editUrl:"https://github.com/Azderica/til/edit/master/docs/spring/spring-cloud-msa/ch1.md",version:"current",lastUpdatedAt:1683303349,formattedLastUpdatedAt:"5/5/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"0. Microservice\uc640 Spring Cloud \uc18c\uac1c",permalink:"/til/docs/spring/spring-cloud-msa/ch0"},next:{title:"6. User Microservice",permalink:"/til/docs/spring/spring-cloud-msa/ch6"}},s=[{value:"Spring Cloud Netflix Eureka",id:"spring-cloud-netflix-eureka",children:[]},{value:"Eureka Service Discovery - \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"eureka-service-discovery---\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:[]},{value:"User Service - \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"user-service---\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:[]},{value:"User Service - \ub4f1\ub85d",id:"user-service---\ub4f1\ub85d",children:[]},{value:"User Service - Load Balancer",id:"user-service---load-balancer",children:[]}],l={toc:s};function u(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"spring-cloud-netflix-eureka"},"Spring Cloud Netflix Eureka"),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"eureka-service-discovery---\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"Eureka Service Discovery - \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"user-service---\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"User Service - \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"user-service---\ub4f1\ub85d"},"User Service - \ub4f1\ub85d"),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"user-service---load-balancer"},"User Service - Load Balancer"))}u.isMDXComponent=!0}}]);