"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[5563],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5017:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l={sidebar_position:3},o={unversionedId:"spring/spring-security/ch3",id:"spring/spring-security/ch3",isDocsHomePage:!1,title:"3\ubd80 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2dc\ud050\ub9ac\ud2f0",description:"21. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 ignoring() 1\ubd80",source:"@site/docs/spring/spring-security/ch3.md",sourceDirName:"spring/spring-security",slug:"/spring/spring-security/ch3",permalink:"/til/docs/spring/spring-security/ch3",editUrl:"https://github.com/Azderica/til/edit/master/docs/spring/spring-security/ch3.md",version:"current",lastUpdatedAt:1681524588,formattedLastUpdatedAt:"4/15/2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2\ubd80 \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0: \uc544\ud0a4\ud14d\ucc98",permalink:"/til/docs/spring/spring-security/ch2"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/toby-spring/ch1"}},u=[{value:"21. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 ignoring() 1\ubd80",id:"21-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0-ignoring-1\ubd80",children:[]},{value:"22. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 ignoring() 2\ubd80",id:"22-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0-ignoring-2\ubd80",children:[]},{value:"23. Async \uc6f9 MVC\ub97c \uc9c0\uc6d0\ud558\ub294 \ud544\ud130: WebAsyncManagerIntegrationFilter",id:"23-async-\uc6f9-mvc\ub97c-\uc9c0\uc6d0\ud558\ub294-\ud544\ud130-webasyncmanagerintegrationfilter",children:[]},{value:"24. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0\uc640 @Async",id:"24-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0\uc640-async",children:[]},{value:"25. SecurityContext \uc601\uc18d\ud654 \ud544\ud130: SecurityContextPersistenceFilter",id:"25-securitycontext-\uc601\uc18d\ud654-\ud544\ud130-securitycontextpersistencefilter",children:[]},{value:"26. \uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \ud5e4\ub354 \ucd94\uac00\ud558\ub294 \ud544\ud130: HeaderWriterFilter",id:"26-\uc2dc\ud050\ub9ac\ud2f0-\uad00\ub828-\ud5e4\ub354-\ucd94\uac00\ud558\ub294-\ud544\ud130-headerwriterfilter",children:[]},{value:"28. CSRF \ud1a0\ud070 \uc0ac\uc6a9 \uc608\uc81c",id:"28-csrf-\ud1a0\ud070-\uc0ac\uc6a9-\uc608\uc81c",children:[]},{value:"29. \ub85c\uadf8\uc544\uc6c3 \ucc98\ub9ac \ud544\ud130: LogoutFilter",id:"29-\ub85c\uadf8\uc544\uc6c3-\ucc98\ub9ac-\ud544\ud130-logoutfilter",children:[]},{value:"30. \ud3fc \uc778\uc99d \ucc98\ub9ac \ud544\ud130: UsernamePasswordAuthenticationFilter",id:"30-\ud3fc-\uc778\uc99d-\ucc98\ub9ac-\ud544\ud130-usernamepasswordauthenticationfilter",children:[]},{value:"31. DefaultLoginPageGeneratingFilter",id:"31-defaultloginpagegeneratingfilter",children:[]},{value:"32. \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3 \ud3fc \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",id:"32-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3-\ud3fc-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",children:[]},{value:"33. Basic \uc778\uc99d \ucc98\ub9ac \ud544\ud130: BasicAuthenticationFilter",id:"33-basic-\uc778\uc99d-\ucc98\ub9ac-\ud544\ud130-basicauthenticationfilter",children:[]},{value:"34. \uc694\uccad \uce90\uc2dc \ud544\ud130: RequestCacheAwareFilter",id:"34-\uc694\uccad-\uce90\uc2dc-\ud544\ud130-requestcacheawarefilter",children:[]},{value:"35. \uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \uc11c\ube14\ub9bf \uc2a4\ud329 \uad6c\ud604 \ud544\ud130: SecurityContextHolderAwareRequestFilter",id:"35-\uc2dc\ud050\ub9ac\ud2f0-\uad00\ub828-\uc11c\ube14\ub9bf-\uc2a4\ud329-\uad6c\ud604-\ud544\ud130-securitycontextholderawarerequestfilter",children:[]},{value:"36. \uc775\uba85 \uc778\uc99d \ud544\ud130: AnonymousAuthenticationFilter",id:"36-\uc775\uba85-\uc778\uc99d-\ud544\ud130-anonymousauthenticationfilter",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"21-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0-ignoring-1\ubd80"},"21. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 ignoring() 1\ubd80"),(0,i.kt)("p",null,"WebSecurity\uc758 ignoring()\uc744 \uc0ac\uc6a9\ud574\uc11c \uc2dc\ud050\ub9ac\ud2f0 \ud544\ud130 \uc801\uc6a9\uc744 \uc81c\uc678\ud560 \uc694\uccad\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void configure(WebSecurity web) throws Exception {\n  web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations()); \n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2a4\ud504\ub9c1 \ubd80\ud2b8\uac00 \uc81c\uacf5\ud558\ub294 PathRequest\ub97c \uc0ac\uc6a9\ud574\uc11c \uc815\uc801 \uc790\uc6d0 \uc694\uccad\uc744 \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 \ud544\ud130\ub97c \uc801\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"22-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0-ignoring-2\ubd80"},"22. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 ignoring() 2\ubd80"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http.authorizeRequests()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()"))),(0,i.kt)("p",null,"\uc774\ub7f0 \uc124\uc815\uc73c\ub85c\ub3c4 \uac19\uc740 \uacb0\uacfc\ub97c \ubcfc \uc218\ub294 \uc788\uc9c0\ub9cc \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0 \ud544\ud130\uac00 \uc801\uc6a9\ub41c\ub2e4\ub294 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ub9ac\uc18c\uc2a4\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"http.authorizeRequests()"),"\uc5d0\uc11c \ucc98\ub9ac\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc815\uc801 \ub9ac\uc18c\uc2a4\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"WebSecurity.ignore()"),"\ub97c \uad8c\uc7a5\ud558\uba70 \uc608\uc678\uc801\uc778 \uc815\uc801 \uc790\uc6d0 (\uc778\uc99d\uc774 \ud544\uc694\ud55c \uc815\uc801\uc790\uc6d0\uc774 \uc788\ub294 \uacbd\uc6b0)\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"http.authorizeRequests()"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"23-async-\uc6f9-mvc\ub97c-\uc9c0\uc6d0\ud558\ub294-\ud544\ud130-webasyncmanagerintegrationfilter"},"23. Async \uc6f9 MVC\ub97c \uc9c0\uc6d0\ud558\ub294 \ud544\ud130: WebAsyncManagerIntegrationFilter"),(0,i.kt)("p",null,"\uc2a4\ud504\ub9c1 MVC\uc758 Async \uae30\ub2a5(\ud578\ub4e4\ub7ec\uc5d0\uc11c Callable\uc744 \ub9ac\ud134\ud560 \uc218 \uc788\ub294 \uae30\ub2a5)\uc744 \uc0ac\uc6a9\ud560 \ub54c\uc5d0\ub3c4 SecurityContext\ub97c \uacf5\uc720\ud558\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ud544\ud130\uc785\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PreProcess: SecurityContext\ub97c \uc124\uc815\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Callable: \ube44\ub85d \ub2e4\ub978 \uc4f0\ub808\ub4dc\uc9c0\ub9cc \uadf8 \uc548\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c SecurityContext\ub97c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"PostProcess: SecurityContext\ub97c \uc815\ub9ac(clean up)\ud55c\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"24-\uc2a4\ud504\ub9c1-\uc2dc\ud050\ub9ac\ud2f0\uc640-async"},"24. \uc2a4\ud504\ub9c1 \uc2dc\ud050\ub9ac\ud2f0\uc640 @Async"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Async"),"\ub97c \uc0ac\uc6a9\ud55c \uc11c\ube44\uc2a4\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc4f0\ub808\ub4dc\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 SecurityContext\ub97c \uacf5\uc720\ubc1b\uc9c0 \ubabb\ud55c\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHRE ADLOCAL);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SecurityContext\ub97c \uc790\uc2dd \uc4f0\ub808\ub4dc\uc5d0\ub3c4 \uacf5\uc720\ud558\ub294 \uc804\ub7b5."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Async"),"\ub97c \ucc98\ub9ac\ud558\ub294 \uc4f0\ub808\ub4dc\uc5d0\uc11c\ub3c4 SecurityContext\ub97c \uacf5\uc720\ubc1b\uc744 \uc218 \uc788\ub2e4.")),(0,i.kt)("p",null,"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/InheritableThreadLocal.html"},"InheritableThreadLocal"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"25-securitycontext-\uc601\uc18d\ud654-\ud544\ud130-securitycontextpersistencefilter"},"25. SecurityContext \uc601\uc18d\ud654 \ud544\ud130: SecurityContextPersistenceFilter"),(0,i.kt)("p",null,"SecurityContextRepository\ub97c \uc0ac\uc6a9\ud574\uc11c \uae30\uc874\uc758 SecurityContext\ub97c \uc77d\uc5b4\uc624\uac70\ub098 \ucd08\uae30\ud654 \ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uc804\ub7b5\uc740 HTTP Session\uc744 \uc0ac\uc6a9\ud569\ub2c8."),(0,i.kt)("li",{parentName:"ul"},"Spring-Session\uacfc \uc5f0\ub3d9\ud558\uc5ec \uc138\uc158 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"26-\uc2dc\ud050\ub9ac\ud2f0-\uad00\ub828-\ud5e4\ub354-\ucd94\uac00\ud558\ub294-\ud544\ud130-headerwriterfilter"},"26. \uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \ud5e4\ub354 \ucd94\uac00\ud558\ub294 \ud544\ud130: HeaderWriterFilter"),(0,i.kt)("p",null,"\uc751\ub2f5 \ud5e4\ub354\uc5d0 \uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \ud5e4\ub354\ub97c \ucd94\uac00\ud574\uc8fc\ub294 \ud544\ud130"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XContentTypeOptionsHeaderWriter : \ub9c8\uc784 \ud0c0\uc785 \uc2a4\ub2c8\ud551 \ubc29\uc5b4."),(0,i.kt)("li",{parentName:"ul"},"XXssProtectionHeaderWriter : \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub0b4\uc7a5\ub41c XSS \ud544\ud130 \uc801\uc6a9"),(0,i.kt)("li",{parentName:"ul"},"CacheControlHeadersWriter : \uce90\uc2dc \ud788\uc2a4\ud1a0\ub9ac \ucde8\uc57d\uc810 \ubc29\uc5b4"),(0,i.kt)("li",{parentName:"ul"},"HstsHeaderWriter : HTTPS\ub85c\ub9cc \uc18c\ud1b5\ud558\ub3c4\ub85d \uac15\uc81c."),(0,i.kt)("li",{parentName:"ul"},"XFrameOptionsHeaderWriter: clickjacking \ubc29\uc5b4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Cache-Control: no-cache, no-store, max-age=0, must-revalidate\nContent-Language: en-US\nContent-Type: text/html;charset=UTF-8 \nDate: Sun, 04 Aug 2019 16:25:10 GMT\nTransfer-Encoding: chunked\nExpires: 0\nPragma: no-cache\nX-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nX-XSS-Protection: 1; mode=block\n")),(0,i.kt)("p",null,"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-O"},"X-Content-Type-Options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Testing_for_Browser_cache_weakness_(OTG-AUTHN-006)"},"Cache-Control")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"},"X-XSS-Protection - 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naver/lucy-xss-filter"},"X-XSS-Protection - 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html"},"HSTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},"X-Frame-Options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cyberx.tistory.com/171"},"\uc6f9 \ubcf4\uc548, \uc6f9 \ucde8\uc57d\uc810\uc744 \uac04\ub2e8\ud55c \uc124\uc815\uc73c\ub85c \ub9c9\uc790"))),(0,i.kt)("br",null),(0,i.kt)("ol",{start:27},(0,i.kt)("li",{parentName:"ol"},"CSRF \uc5b4\ud0dd \ubc29\uc9c0 \ud544\ud130: CsrfFilter")),(0,i.kt)("p",null,"CSRF"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc6d0\uce58\uc54a\ub294 \uacf5\uaca9")),(0,i.kt)("p",null,"CSRF \uc5b4\ud0dd \ubc29\uc9c0 \ud544\ud130"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc778\uc99d\ub41c \uc720\uc800\uc758 \uacc4\uc815\uc744 \uc0ac\uc6a9\ud574 \uc545\uc758\uc801\uc778 \ubcc0\uacbd \uc694\uccad\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\ub0b4\ub294 \uae30\ubc95."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)"},"CSRF")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://namu.wiki/w/CSRF"},"CSRF")),(0,i.kt)("li",{parentName:"ul"},"CORS\ub97c\uc0ac\uc6a9\ud560\ub54c\ud2b9\ud788\uc8fc\uc758\ud574\uc57c\ud568.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud0c0 \ub3c4\uba54\uc778\uc5d0\uc11c \ubcf4\ub0b4\uc624\ub294 \uc694\uccad\uc744 \ud5c8\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"Cross-origin"))))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/230754312-f40e3948-3d4b-45b1-9df3-2a37b265f28e.png",alt:"CSRF"})),(0,i.kt)("p",null,"\uc758\ub3c4\ud55c \uc0ac\uc6a9\uc790\ub9cc \ub9ac\uc18c\uc2a4\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud558\ub294 \ud544\ud130 "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CSRF \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc29\uc9c0."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/230754323-8428da98-07c5-43c9-b2d8-df5ad1c7cf34.png",alt:"CsrfFilter"})))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"28-csrf-\ud1a0\ud070-\uc0ac\uc6a9-\uc608\uc81c"},"28. CSRF \ud1a0\ud070 \uc0ac\uc6a9 \uc608\uc81c"),(0,i.kt)("p",null,"JSP\uc5d0\uc11c \uc2a4\ud504\ub9c1 MVC\uac00 \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"<form:form>")," \ud0dc\uadf8 \ub610\ub294 \ud0c0\uc784\ub9ac\ud504 2.1+ \ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \ub54c \ud3fc\uc5d0 CRSF \ud788\ub4e0 \ud544\ub4dc\uac00 \uae30\ubcf8\uc73c\ub85c \uc0dd\uc131 \ub428."),(0,i.kt)("p",null,"Signup.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en" xmlns:th="http://www.thymeleaf.org"> <head>\n  <meta charset="UTF-8">\n  <title>SignUp</title> \n</head>\n<body>\n  <h1>Sign Up</h1>\n  <form action="/signup" th:action="@{/signup}" th:object="${account}" method="post">\n    <p>Username: <input type="text" th:field="*{username}" /></p> \n    <p>Password: <input type="text" th:field="*{password}" /></p> \n    <p><input type="submit" value="Submit" /></p>\n  </form> \n</body>\n</html>\n')),(0,i.kt)("p",null,"SignUpController"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package me.whiteship.demospringsecurityform.account;\n\nimport org.springframework.beans.factory.annotation.Autowired; \nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.GetMapping; \nimport org.springframework.web.bind.annotation.ModelAttribute; \nimport org.springframework.web.bind.annotation.PostMapping;\n\n@Controller\npublic class SignUpController {\n\n  @Autowired\n  AccountService accountService;\n\n  @GetMapping("/signup")\n  public String signUpForm(Model model) {\n    model.addAttribute("account", new Account());\n    return "signup"; \n  }\n\n  @PostMapping("/signup")\n  public String processSignUp(@ModelAttribute Account account) {\n    account.setRole("USER"); \n    accountService.createNew(account); \n    return "redirect:/";\n  } \n}\n')),(0,i.kt)("p",null,"SignUpControllerTest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SpringRunner.class) \n@SpringBootTest \n@AutoConfigureMockMvc\npublic class SignUpControllerTest {\n\n  @Autowired \n  MockMvc mockMvc;\n\n  @Test\n  public void signUpForm() throws Exception {\n    mockMvc.perform(get("/signup")) \n      .andDo(print())\n      .andExpect(content().string(containsString("_csrf")));\n  }\n\n  @Test\n  public void procesSignUp() throws Exception {\n    mockMvc.perform(post("/signup") \n      .param("username", "keesun") \n      .param("password", "123") \n      .with(csrf()))\n        .andExpect(status().is3xxRedirection()); \n  }\n}\n')),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"29-\ub85c\uadf8\uc544\uc6c3-\ucc98\ub9ac-\ud544\ud130-logoutfilter"},"29. \ub85c\uadf8\uc544\uc6c3 \ucc98\ub9ac \ud544\ud130: LogoutFilter"),(0,i.kt)("p",null,"\uc5ec\ub7ec LogoutHandler\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3\uc2dc \ud544\uc694\ud55c \ucc98\ub9ac\ub97c \ud558\uba70 \uc774\ud6c4\uc5d0\ub294 LogoutSuccessHandler\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ud6c4\ucc98\ub9ac\ub97c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"LogoutHandler"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CsrfLogoutHandler"),(0,i.kt)("li",{parentName:"ul"},"SecurityContextLogoutHandler")),(0,i.kt)("p",null,"LogoutSuccessHandler"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SimplUrlLogoutSuccessHandler")),(0,i.kt)("p",null,"\ub85c\uadf8\uc544\uc6c3 \ud544\ud130 \uc124\uc815"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'http.logout() \n  .logoutUrl("/logout")\n  .logoutSuccessUrl("/") \n  .logoutRequestMatcher() \n  .invalidateHttpSession(true) \n  .deleteCookies() \n  .addLogoutHandler() \n  .logoutSuccessHandler();\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/231175495-3918c89f-5054-4ac2-871b-fa0772fce781.png",alt:"logout-filter"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"30-\ud3fc-\uc778\uc99d-\ucc98\ub9ac-\ud544\ud130-usernamepasswordauthenticationfilter"},"30. \ud3fc \uc778\uc99d \ucc98\ub9ac \ud544\ud130: UsernamePasswordAuthenticationFilter"),(0,i.kt)("p",null,"\ud3fc \ub85c\uadf8\uc778\uc744 \ucc98\ub9ac\ud558\ub294 \uc778\uc99d \ud544\ud130"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ud3fc\uc5d0 \uc785\ub825\ud55c username\uacfc password\ub85c Authentcation\uc744 \ub9cc\ub4e4\uace0 AuthenticationManager\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\uc99d\uc744 \uc2dc\ub3c4\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"AuthenticationManager (ProviderManager)\ub294 \uc5ec\ub7ec AuthenticationProvider\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\uc99d\uc744 \uc2dc\ub3c4\ud558\ub294\ub370, \uadf8 \uc911\uc5d0 DaoAuthenticationProvider\ub294 UserDetailsServivce\ub97c \uc0ac\uc6a9\ud558\uc5ec UserDetails \uc815\ubcf4\ub97c \uac00\uc838\uc640 \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c password\uc640 \ube44\uad50\ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/231177042-885a7a60-03e7-4bcc-8f88-209ad5ee24a3.png",alt:"UsernamePasswordAuthenticationFilter"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"31-defaultloginpagegeneratingfilter"},"31. DefaultLoginPageGeneratingFilter"),(0,i.kt)("p",null,"\uae30\ubcf8 \ub85c\uadf8\uc778 \ud3fc \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud574\uc8fc\ub294 \ud544\ud130 "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET /login \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ud544\ud130.")),(0,i.kt)("p",null,"\ub85c\uadf8\uc778 \ud3fc \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'http.formLogin() \n  .usernameParameter("my-username") \n  .passwordParameter("my-password");\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/231498172-34ea75d2-16c5-4090-b039-9139c16d17b9.png",alt:"\ub85c\uadf8\uc778 \ud3fc \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"32-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3-\ud3fc-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"},"32. \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3 \ud3fc \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/site/docs/current/reference/html5/#jc-form"},"jc-form")),(0,i.kt)("p",null,"Signin.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en" xmlns:th="http://www.thymeleaf.org"> \n<head>\n  <meta charset="UTF-8">\n  <title>SignIn</title> \n</head>\n<body>\n  <h1>Sign In</h1>\n  <div th:if="${param.error}">\n    <div class="alert alert-danger"> \n      Invalid username or password.\n    </div> \n  </div>\n  <form action="/signin" th:action="@{/signin}" method="post"> \n    <p>Username: <input type="text" name="username" /></p> \n    <p>Password: <input type="password" name="password" /></p> \n    <p><input type="submit" value="SignIn" /></p>\n  </form> \n</body>\n</html>\n')),(0,i.kt)("p",null,"Logout.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en" xmlns:th="http://www.thymeleaf.org"> \n<head>\n  <meta charset="UTF-8">\n  <title>SignIn</title> \n</head>\n<body>\n  <h1>Logout</h1>\n  <form action="/logout" th:action="@{/logout}" method="post">\n    <p><input type="submit" value="Logout" /></p> \n  </form>\n</body> \n</html>\n')),(0,i.kt)("p",null,"\uc2dc\ud050\ub9ac\ud2f0 \uc124\uc815"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'http.formLogin()\n  .loginPage("/signin") \n  .permitAll();\n')),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"33-basic-\uc778\uc99d-\ucc98\ub9ac-\ud544\ud130-basicauthenticationfilter"},"33. Basic \uc778\uc99d \ucc98\ub9ac \ud544\ud130: BasicAuthenticationFilter"),(0,i.kt)("p",null,"Basic \uc778\uc99d\uc774\ub780?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7617"},"https://tools.ietf.org/html/rfc7617")),(0,i.kt)("li",{parentName:"ul"},"\uc694\uccad \ud5e4\ub354\uc5d0 username\uc640 password\ub97c \uc2e4\uc5b4 \ubcf4\ub0b4\uba74 \ube0c\ub77c\uc6b0\uc800 \ub610\ub294 \uc11c\ubc84\uac00 \uadf8 \uac12\uc744 \uc77d\uc5b4\uc11c \uc778\uc99d\ud558\ub294 \ubc29\uc2dd. \uc608) Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l (keesun:123 \uc744 BASE 64)"),(0,i.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5, \ube0c\ub77c\uc6b0\uc800 \uae30\ubc18 \uc694\uccad\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud560 \ub54c \uc790\uc8fc \uc0ac\uc6a9."),(0,i.kt)("li",{parentName:"ul"},"\ubcf4\uc548\uc5d0 \ucde8\uc57d\ud558\uae30 \ub54c\ubb38\uc5d0 \ubc18\ub4dc\uc2dc HTTPS\ub97c \uc0ac\uc6a9\ud560 \uac83\uc744 \uad8c\uc7a5.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"34-\uc694\uccad-\uce90\uc2dc-\ud544\ud130-requestcacheawarefilter"},"34. \uc694\uccad \uce90\uc2dc \ud544\ud130: RequestCacheAwareFilter"),(0,i.kt)("p",null,"\ud604\uc7ac \uc694\uccad\uacfc \uad00\ub828 \uc788\ub294 \uce90\uc2dc\ub41c \uc694\uccad\uc774 \uc788\ub294\uc9c0 \ucc3e\uc544\uc11c \uc801\uc6a9\ud558\ub294 \ud544\ud130."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uce90\uc2dc\ub41c \uc694\uccad\uc774 \uc5c6\ub2e4\uba74, \ud604\uc7ac \uc694\uccad \ucc98\ub9ac"),(0,i.kt)("li",{parentName:"ul"},"\uce90\uc2dc\ub41c \uc694\uccad\uc774 \uc788\ub2e4\uba74, \ud574\ub2f9 \uce90\uc2dc\ub41c \uc694\uccad \ucc98\ub9ac")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"35-\uc2dc\ud050\ub9ac\ud2f0-\uad00\ub828-\uc11c\ube14\ub9bf-\uc2a4\ud329-\uad6c\ud604-\ud544\ud130-securitycontextholderawarerequestfilter"},"35. \uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \uc11c\ube14\ub9bf \uc2a4\ud329 \uad6c\ud604 \ud544\ud130: SecurityContextHolderAwareRequestFilter"),(0,i.kt)("p",null,"\uc2dc\ud050\ub9ac\ud2f0 \uad00\ub828 \uc11c\ube14\ub9bf API\ub97c \uad6c\ud604\ud574\uc8fc\ub294 \ud544\ud130"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpServletRequest#authenticate(HttpServletResponse)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpServletRequest#login(String, String)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpServletRequest#logout()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AsyncContext#start(Runnable)"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/232069691-5338cb98-f15d-474a-beb1-622d8265ffa1.png",alt:"SecurityContextHolderAwareRequestFilter"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"36-\uc775\uba85-\uc778\uc99d-\ud544\ud130-anonymousauthenticationfilter"},"36. \uc775\uba85 \uc778\uc99d \ud544\ud130: AnonymousAuthenticationFilter"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#anonymous"},"anonymous")),(0,i.kt)("p",null,"\ud604\uc7ac SecurityContext\uc5d0 Authentication\uc774 null\uc774\uba74 \u201c\uc775\uba85 Authentication\u201d\uc744 \ub9cc\ub4e4\uc5b4 \ub123\uc5b4\uc8fc\uace0, null\uc774 \uc544\ub2c8\uba74 \uc544\ubb34\uc77c\ub3c4 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uae30\ubcf8\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud560 \u201c\uc775\uba85 Authentication\u201d \uac1d\uccb4\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"http.anonymous() \n  .principal()\n  .authorities() \n  .key()\n")),(0,i.kt)("p",null,"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Null_object_pattern"},"https://en.wikipedia.org/wiki/Null_object_pattern"))))}s.isMDXComponent=!0}}]);