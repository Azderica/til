"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[9893],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=u(r),k=n,m=o["".concat(c,".").concat(k)]||o[k]||d[k]||l;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=o;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}o.displayName="MDXCreateElement"},594:function(e,t,r){r.r(t),r.d(t,{default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i={sidebar_position:8},p={unversionedId:"react/react-a-to-z/ch8",id:"react/react-a-to-z/ch8",isDocsHomePage:!1,title:"8. Nextjs and Typescript",description:"NextJS \ub780",source:"@site/docs/react/react-a-to-z/ch8.md",sourceDirName:"react/react-a-to-z",slug:"/react/react-a-to-z/ch8",permalink:"/til/docs/react/react-a-to-z/ch8",editUrl:"https://github.com/Azderica/til/edit/master/docs/react/react-a-to-z/ch8.md",version:"current",lastUpdatedAt:1677682837,formattedLastUpdatedAt:"3/1/2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"6. React TDD \uae30\ubcf8",permalink:"/til/docs/react/react-a-to-z/ch6"},next:{title:"1\uc7a5. \uc624\ube0c\uc81d\ud2b8\uc640 \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/toby-spring/ch1"}},c=[{value:"NextJS \ub780",id:"nextjs-\ub780",children:[{value:"Next JS\ub780?",id:"next-js\ub780",children:[]},{value:"Server Side Rendering",id:"server-side-rendering",children:[]},{value:"\uc124\uce58 \ubc29\ubc95",id:"\uc124\uce58-\ubc29\ubc95",children:[]}]},{value:"NextJS \uae30\ubcf8 \ud30c\uc77c \uad6c\uc870",id:"nextjs-\uae30\ubcf8-\ud30c\uc77c-\uad6c\uc870",children:[{value:"pages",id:"pages",children:[]},{value:"public",id:"public",children:[]},{value:"styles",id:"styles",children:[]},{value:"next.config.js",id:"nextconfigjs",children:[]}]},{value:"Pre-rendering",id:"pre-rendering",children:[{value:"NextJS\ub294",id:"nextjs\ub294",children:[]},{value:"Pre Render \ud14c\uc2a4\ud2b8 !!!",id:"pre-render-\ud14c\uc2a4\ud2b8-",children:[]}]},{value:"Data Fetching",id:"data-fetching",children:[{value:"Nextjs\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc740...",id:"nextjs\uc5d0\uc11c-\ub370\uc774\ud130\ub97c-\uac00\uc838\uc624\ub294-\ubc29\ubc95\uc740",children:[]},{value:"getStaticProps",id:"getstaticprops",children:[]},{value:"getStaticPaths",id:"getstaticpaths",children:[]},{value:"getServerSideProps",id:"getserversideprops",children:[]}]},{value:"Typescript \ub780?",id:"typescript-\ub780",children:[{value:"TypeScript \uac00 \ub098\uc624\uac8c \ub41c \ubc30\uacbd..",id:"typescript-\uac00-\ub098\uc624\uac8c-\ub41c-\ubc30\uacbd",children:[]},{value:"TypeScript \ub780 ?",id:"typescript-\ub780-",children:[]},{value:"Type System",id:"type-system",children:[]},{value:"TypeScript \uc0ac\uc6a9\ud558\ub294 \uc774\uc720 ?",id:"typescript-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720-",children:[]}]},{value:"\ub9c8\ud06c\ub2e4\uc6b4 \ud30c\uc77c\uc744 \ub370\uc774\ud130\ub85c \ucd94\ucd9c\ud558\uae30",id:"\ub9c8\ud06c\ub2e4\uc6b4-\ud30c\uc77c\uc744-\ub370\uc774\ud130\ub85c-\ucd94\ucd9c\ud558\uae30",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"nextjs-\ub780"},"NextJS \ub780"),(0,l.kt)("h3",{id:"next-js\ub780"},"Next JS\ub780?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React\uc758 SSR(server side rendering)\uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uac8c \ub3c4\uc640 \uc8fc\ub294 \uac04\ub2e8\ud55c \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4. (\ub9ac\uc561\ud2b8\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac)"),(0,l.kt)("li",{parentName:"ul"},"\ub9ac\uc561\ud2b8\ub85c \uac1c\ubc1c\ud560 \ub54c SPA(single Page Application)\uc744 \uc774\uc6a9\ud558\uba70 CSR(Client Side Rendering)\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \uc88b\uc740 \uc810\ub3c4 \uc788\uc9c0\ub9cc \ub2e8\uc810\ub3c4 \uc788\ub294\ub370 \uadf8 \ubd80\ubd84\uc774 \ubc14\ub85c \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654(SEO) \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Client Side Rendering\uc744 \ud558\uba74 \uccab\ud398\uc774\uc9c0\uc5d0\uc11c \ube48 html\uc744 \uac00\uc838\uc640\uc11c JS\ud30c\uc77c\uc744 \ud574\uc11d\ud558\uc5ec \ud654\uba74\uc744 \uad6c\uc131\ud558\uae30 \ub54c\ubb38\uc5d0 \ud3ec\ud138 \uac80\uc0c9\uc5d0 \uac70\uc758 \ub178\ucd9c \ub420 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc Next.js\uc5d0\uc11c\ub294 Pre-Rendering\uc744 \ud1b5\ud574\uc11c \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1 \ud558\uba70 \uc644\uc131\ub41c HTML\uc744 \uac00\uc838\uc624\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790\uc640 \uac80\uc0c9 \uc5d4\uc9c4 \ud06c\ub864\ub7ec\uc5d0\uac8c \ubc14\ub85c \ub80c\ub354\ub9c1 \ub41c \ud398\uc774\uc9c0\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9ac\uc561\ud2b8\uc5d0\uc11c\ub3c4 SSR\uc744 \uc9c0\uc6d0\ud558\uae30\uba74 \uad6c\ud604\ud558\uae30\uc5d0 \uad49\uc7a5\ud788 \ubcf5\uc7a1\ud558\uae30 \ub54c\ubb38\uc5d0 Next.js\ub97c \ud1b5\ud574\uc11c \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc8fc\uac8c \ub429\ub2c8\ub2e4")),(0,l.kt)("h3",{id:"server-side-rendering"},"Server Side Rendering"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub300\uc2e0 \uc11c\ubc84\uc5d0\uc11c \ud398\uc774\uc9c0\ub97c \uc900\ube44\ud558\ub294 \uc6d0\ub9ac\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6d0\ub798 \ub9ac\uc561\ud2b8\uc5d0\uc11c\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\ud558\uae30 \ub54c\ubb38\uc5d0 \uc11c\ubc84\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uace0, \uc11c\ubc84\uc5d0\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc751\ub2f5\ud574\uc11c \ubcf4\ub0b8 html\ub3c4 \uac70\uc758 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"=> \uc774 \ubc29\uc2dd\uc740 \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \ub54c \uc9c0\uc5f0 \uc2dc\uac04 \ubc1c\uc0dd\uc73c\ub85c UX \uce21\uba74\uc5d0\uc11c \uc88b\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"=> \uac80\uc0c9 \uc5d4\uc9c4\uc5d0 \uac80\uc0c9 \uc2dc \uc6f9\ud06c\ub864\ub9c1\uc774 \ub3d9\uc791\ud560 \ub54c \ub0b4\uc6a9\uc744 \uc81c\ub300\ub85c \uac00\uc838\uc640 \uc77d\uc744 \uc218 \uc5c6\uae30\uc5d0 \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654\uc5d0 \ubb38\uc81c\uac00 \ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Next.js\uc5d0\uc11c\ub294 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uc744 \uc774\uc6a9\ud558\ubbc0\ub85c \uc0ac\uc6a9\uc790\uc640 \uac80\uc0c9 \uc5d4\uc9c4 \ud06c\ub864\ub7ec\uc5d0\uac8c \ubc14\ub85c \ub80c\ub354\ub9c1\ub41c \ud398\uc774\uc9c0\ub97c \uc804\ub2ec \ud560 \uc218 \uc788\uc5b4\uc11c \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654\uc5d0 \uc88b\uc740 \uc601\ud5a5\uc744 \uc90d\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc124\uce58-\ubc29\ubc95"},"\uc124\uce58 \ubc29\ubc95"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npx create-next-app@latest\n# or\nyarn create next-app\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npx create-next-app@latest --typescript\n# or\nyarn create next-app --typescript\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"nextjs-\uae30\ubcf8-\ud30c\uc77c-\uad6c\uc870"},"NextJS \uae30\ubcf8 \ud30c\uc77c \uad6c\uc870"),(0,l.kt)("h3",{id:"pages"},"pages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \ud3f4\ub354 \uc548\uc5d0 \ud398\uc774\uc9c0\ub4e4\uc744 \uc0dd\uc131 \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},'index.tsx\uac00 \ucc98\uc74c "/" \ud398\uc774\uc9c0\ub85c \ub429\ub2c8\ub2e4.'),(0,l.kt)("li",{parentName:"ul"},"_app.tsx \ub294 \uacf5\ud1b5\ub418\ub294 \ub808\uc774\uc544\uc6c3\uc744 \uc791\uc131\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0 \uacf5\ud1b5\uc73c\ub85c \ub4e4\uc5b4\uac00\ub294 \uac78 \ub123\uc5b4\uc8fc\ub824\uba74 \uc5ec\uae30\uc5d0 \ub123\uc5b4\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4. (url\uc744 \ud1b5\ud574 \ud2b9\uc815 \ud398\uc774\uc9c0\uc5d0 \uc9c4\uc785\ud558\uae30 \uc804 \ud1b5\uacfc\ud558\ub294 \uc778\ud130\uc149\ud130 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.)"),(0,l.kt)("li",{parentName:"ul"},"\ub9cc\uc57d about\uc774\ub77c\ub294 \ud398\uc774\uc9c0\ub97c \ub9cc\ub4dc\uc2dc\ub824\uba74 pages \ud3f4\ub354 \uc548\uc5d0 about.tsx\ub97c \uc0dd\uc131\ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"public"},"public"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \uac19\uc740 \uc815\uc801(static) \uc5d0\uc14b\ub4e4\uc744 \ubcf4\uad00\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"styles"},"styles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub9d0 \uadf8\ub798\ub3c4 \uc2a4\ud0c0\uc77c\ub9c1\uc744 \ucc98\ub9ac\ud574\uc8fc\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8(module) css\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uc885\uc18d\uc801\uc73c\ub85c \uc2a4\ud0c0\uc77c\ub9c1\ud558\uae30 \uc704\ud55c \uac83\uc774\uba70, \ud655\uc7a5\uc790 \uc55e\uc5d0 module\uc744 \ubd99\uc5ec\uc918\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"nextconfigjs"},"next.config.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nextjs\ub294 \uc6f9\ud329\uc744 \uae30\ubcf8 \ubc88\ub4e4\ub7ec\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub798\uc11c \uc6f9\ud329\uc5d0 \uad00\ud55c \uc124\uc815\ub4e4\uc744 \uc774 \ud30c\uc77c\uc5d0\uc11c \ud574\uc904\uc218\uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"pre-rendering"},"Pre-rendering"),(0,l.kt)("h3",{id:"nextjs\ub294"},"NextJS\ub294"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\ubaa8\ub4e0 \ud398\uc774\uc9c0\ub97c pre-render \ud569\ub2c8\ub2e4. \uc774 pre-render\ud55c\ub2e4\ub294 \uc758\ubbf8\ub294 \ubaa8\ub4e0 \ud398\uc774\uc9c0\ub97c \uc704\ud55c HTML\uc744 Client\uc0ac\uc774\ub4dc\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ucc98\ub9ac\ud558\uae30 \uc804, "\uc0ac\uc804\uc5d0" \uc0dd\uc131\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.'),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \ud558\uae30 \ub54c\ubb38\uc5d0 SEO \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654\uac00 \uc88b\uc544\uc9d1\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"pre-render-\ud14c\uc2a4\ud2b8-"},"Pre Render \ud14c\uc2a4\ud2b8 !!!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/javascript/disable/"},"Javascript Disable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://create-react-app.examples.vercel.com/"},"\ubcf4\ud1b5 React \uc0ac\uc774\ud2b8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://next-learn-starter.vercel.app/"},"NextJS \uc0ac\uc774\ud2b8"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"data-fetching"},"Data Fetching"),(0,l.kt)("h3",{id:"nextjs\uc5d0\uc11c-\ub370\uc774\ud130\ub97c-\uac00\uc838\uc624\ub294-\ubc29\ubc95\uc740"},"Nextjs\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc740..."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0ac\uc6a9 \uc6a9\ub3c4\uc5d0 \ub530\ub77c\uc11c \ub2e4\ub978 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \ub9ac\uc561\ud2b8\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \ub54c useEffect\uc548\uc5d0\uc11c \uac00\uc838\uc635\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Nextjs\uc5d0\uc11c\ub294 \ub2e4\ub978 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc11c \uac00\uc838\uc624\ub294\ub370 \ud558\ub098\uc529 \ubd10\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"getStaticProps ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Static Generation\uc73c\ub85c \ube4c\ub4dc(build)\ud560 \ub54c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc635\ub2c8\ub2e4.(\ubbf8\ub9ac \ub9cc\ub4e4\uc5b4\uc90c)"))),(0,l.kt)("li",{parentName:"ul"},"getStaticPaths ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Static Generation\uc73c\ub85c \ub370\uc774\ud130\uc5d0 \uae30\ubc18\ud558\uc5ec pre-render\uc2dc \ud2b9\uc815\ud55c \ub3d9\uc801 \ub77c\uc6b0\ud305 \uad6c\ud604(",(0,l.kt)("inlineCode",{parentName:"li"},"pages/post/[id].js"),")"))),(0,l.kt)("li",{parentName:"ul"},"getServerSideProps ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Server Side Rendering\uc73c\ub85c \uc694\uccad\uc774 \uc788\uc744 \ub54c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc635\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"getstaticprops"},"getStaticProps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getStaticProps \ud568\uc218\ub97c async\ub85c export \ud558\uba74, getStaticProps\uc5d0\uc11c \ub9ac\ud134\ub418\ub294 props\ub97c \uac00\uc9c0\uace0 \ud398\uc774\uc9c0\ub97c pre-render \ud569\ub2c8\ub2e4. build time\uc5d0 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1 \ud569\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"getstaticprops\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud560-\ub54c"},"getStaticProps\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ub370 \ud544\uc694\ud55c \ub370\uc774\ud130\ub294 \uc0ac\uc6a9\uc790\uc758 \uc694\uccad\ubcf4\ub2e4 \uba3c\uc800 build \uc2dc\uac04\uc5d0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \ub54c"),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 Headless CMS\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \ub54c."),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uacf5\uac1c\uc801\uc73c\ub85c \uce90\uc2dc\ud560 \uc218 \uc788\uc744 \ub54c(\uc0ac\uc6a9\uc790\ubcc4 \uc544\ub2d8)."),(0,l.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub294 \ubbf8\ub9ac \ub80c\ub354\ub9c1\ub418\uc5b4\uc57c \ud558\uace0(SEO\uc758 \uacbd\uc6b0) \ub9e4\uc6b0 \ube68\ub77c\ud560 \ub54c.(getStaticProps\ub294 \uc131\ub2a5\uc744 \uc704\ud574 CDN\uc5d0\uc11c \uce90\uc2dc\ud560 \uc218 \uc788\ub294 HTML \ubc0f JSON \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.)")),(0,l.kt)("h3",{id:"getstaticpaths"},"getStaticPaths"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ub77c\uc6b0\ud305\uc774 \ud544\uc694\ud560 \ub54c getStaticPaths\ub85c \uacbd\ub85c \ub9ac\uc2a4\ud2b8\ub97c \uc815\uc758\ud558\uace0, HTML\uc5d0 build \uc2dc\uac04\uc5d0 \ub80c\ub354\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Nextjs\ub294 pre-render\uc5d0\uc11c \uc815\uc801\uc73c\ub85c getStaticPaths \uc5d0\uc11c \ud638\ucd9c\ud558\ub294 \uacbd\ub85c\ub4e4\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"paths"},"paths"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a0\ud55c \uacbd\ub85c\uac00 pre-render \ub420\uc9c0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9cc\uc57d ",(0,l.kt)("inlineCode",{parentName:"li"},"pages/posts/[id].js")," \uc774\ub77c\ub294 \uc774\ub984\uc758 \ub3d9\uc801 \ub77c\uc6b0\ud305\uc744 \uc0ac\uc6a9\ud558\ub294 \ud398\uc774\uc9c0\uac00 \uc788\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ube4c\ub4dc\ud558\ub294 \ub3d9\uc548 /posts/1\uacfc /posts/2\ub97c \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"params"},"params"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0 \uc774\ub984\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"pages/posts/[postId]/[commentId]")," \ub77c\uba74 , params\uc740 postId\uc640 commentId\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \ud398\uc774\uc9c0 \uc774\ub984\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"pages/[...slug]")," \uc640 \uac19\uc774 \ubaa8\ub4e0 \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, params\ub294 slug\uac00 \ub2f4\uae34 \ubc30\uc5f4\uc774\uc5b4\uc57c\ud55c\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"li"},"['postId', 'commentId']"))),(0,l.kt)("h4",{id:"fallback"},"fallback"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"false \ub77c\uba74 getStaticPaths\ub85c \ub9ac\ud134\ub418\uc9c0 \uc54a\ub294 \uac83\uc740 \ubaa8\ub450 404 \ud398\uc774\uc9c0\uac00 \ub739\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"true \ub77c\uba74 getStaticPaths\ub85c \ub9ac\ud134\ub418\uc9c0 \uc54a\ub294 \uac83\uc740 404\ub85c \ub728\uc9c0 \uc54a\uace0 , fallback \ud398\uc774\uc9c0\uac00 \ub728\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"getserversideprops"},"getServerSideProps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"getServerSideProps \ud568\uc218\ub97c async\ub85c export \ud558\uba74, Next\ub294 \uac01 \uc694\uccad\ub9c8\ub2e4 \ub9ac\ud134\ub418\ub294 \ub370\uc774\ud130\ub97c getServerSideProps\ub85c pre-render\ud569\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"getserversideprops\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud560-\ub54c"},"getServerSideProps\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc694\uccad\ud560 \ub54c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c\ud558\ub294 \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \ub80c\ub354\ud574\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc11c\ubc84\uac00 \ubaa8\ub4e0 \uc694\uccad\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c \uacc4\uc0b0\ud558\uace0, \ucd94\uac00 \uad6c\uc131\uc5c6\uc774 CDN\uc5d0 \uc758\ud574 \uacb0\uacfc\ub97c \uce90\uc2dc\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uccab\ubc88\uc9f8 \ubc14\uc774\ud2b8\uae4c\uc9c0\uc758 \uc2dc\uac04\uc740 getStaticProps\ubcf4\ub2e4 \ub290\ub9bd\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"typescript-\ub780"},"Typescript \ub780?"),(0,l.kt)("h3",{id:"typescript-\uac00-\ub098\uc624\uac8c-\ub41c-\ubc30\uacbd"},"TypeScript \uac00 \ub098\uc624\uac8c \ub41c \ubc30\uacbd.."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JavaScript\ub294 \uc6d0\ub798 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uc5b8\uc5b4\ub85c \ub3c4\uc785\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 Node.js\uc758 \uac1c\ubc1c\ub85c \uc778\ud574\uc11c JavaScript\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubfd0\ub9cc\uc774 \uc544\ub2cc \uc11c\ubc84 \uce21 \uae30\uc220\ub85c\ub3c4 \ud65c\uc6a9\ub418\uac8c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 JavaScript \ucf54\ub4dc\uac00 \ucee4\uc9c8\uc218\ub85d \uc18c\uc2a4 \ucf54\ub4dc\uac00 \ub354 \ubcf5\uc7a1\ud574\uc838\uc11c \ucf54\ub4dc\ub97c \uc720\uc9c0 \uad00\ub9ac\ud558\uace0 \uc7ac\uc0ac\uc6a9\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc84c\uc2b5\ub2c8\ub2e4. \ub354\uc6b1\uc774 Type \uac80\uc0ac \ubc0f \ucef4\ud30c\uc77c \uc2dc \uc624\ub958 \uac80\uc0ac\uc758 \uae30\ub2a5\uc744 \uc218\uc6a9\ud558\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38\uc5d0 JavaScript\uac00 \ubcf8\uaca9\uc801\uc778 \uc11c\ubc84 \uce21 \uae30\uc220\ub85c \uc5d4\ud130\ud504\ub77c\uc774\uc988 \uc218\uc900\uc5d0\uc11c \uc131\uacf5\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\uc774 \uac04\uadf9\uc744 \uba54\uc6b0\uae30 \uc704\ud574 TypeScript\uac00 \uc81c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"typescript-\ub780-"},"TypeScript \ub780 ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ud0c0\uc785\uc744 \ubd80\uc5ec\ud55c \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud655\uc7a5\ub41c \uc5b8\uc5b4\ub77c\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc640 \ub2ec\ub9ac \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589\ud558\ub824\uba74 \ud30c\uc77c\uc744 \ud55c\ubc88 \ubcc0\ud658\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774 \ubcc0\ud658 \uacfc\uc815\uc744 \uc6b0\ub9ac\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\ucef4\ud30c\uc77c(complile)")," \uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"type-system"},"Type System"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c \uc5d0\ub7ec\ub97c \uc7a1\ub294 \uac78 \ub3c4\uc640\uc90d\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"type annotations\ub97c \uc0ac\uc6a9\ud574\uc11c \ucf54\ub4dc\ub97c \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc624\uc9c1 \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c\ub9cc \ud65c\uc131\ud654 \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc785 \uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc131\ub2a5 \ud5a5\uc0c1\uacfc\ub294 \uad00\uacc4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4")),(0,l.kt)("h3",{id:"typescript-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720-"},"TypeScript \uc0ac\uc6a9\ud558\ub294 \uc774\uc720 ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TypeScript\ub294 JavaScript \ucf54\ub4dc\ub97c \ub2e8\uc21c\ud654\ud558\uc5ec \ub354 \uc27d\uac8c \uc77d\uace0 \ub514\ubc84\uadf8\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},"TypeScript\ub294 \uc624\ud508 \uc18c\uc2a4\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"TypeScript\ub294 \uc815\uc801 \uac80\uc0ac\uc640 \uac19\uc740 JavaScript IDE \ubc0f \uc0ac\ub840\ub97c \uc704\ud55c \ub9e4\uc6b0 \uc0dd\uc0b0\uc801\uc778 \uac1c\ubc1c\ub3c4\uad6c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"TypeScript\ub97c \uc0ac\uc6a9\ud558\uba74 \ucf54\ub4dc\ub97c \ub354 \uc27d\uac8c \uc77d\uace0 \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"TypeScript\ub97c \uc0ac\uc6a9\ud558\uba74 \uc77c\ubc18 JavaScript\ubcf4\ub2e4 \ud06c\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"TypeScript\ub294 ES6(ECMAScript 6)\uc758 \ubaa8\ub4e0 \uc774\uc810\uacfc \ub354 \ub9ce\uc740 \uc0dd\uc0b0\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TypeScript\ub294 \ucf54\ub4dc \uc720\ud615 \uac80\uc0ac\ub97c \ud1b5\ud574 JavaScript\ub97c \uc791\uc131\ud560 \ub54c \uac1c\ubc1c\uc790\uac00 \uc77c\ubc18\uc801\uc73c\ub85c \uacaa\ub294 \uace0\ud1b5\uc2a4\ub7ec\uc6b4 \ubc84\uadf8\ub97c \ud53c\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\ub9c8\ud06c\ub2e4\uc6b4-\ud30c\uc77c\uc744-\ub370\uc774\ud130\ub85c-\ucd94\ucd9c\ud558\uae30"},"\ub9c8\ud06c\ub2e4\uc6b4 \ud30c\uc77c\uc744 \ub370\uc774\ud130\ub85c \ucd94\ucd9c\ud558\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/gray-matter"},"gray-matter"))))}s.isMDXComponent=!0}}]);