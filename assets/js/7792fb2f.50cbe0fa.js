"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3927],{3905:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return m}});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),k=o(l),m=r,s=k["".concat(p,".").concat(m)]||k[m]||c[m]||a;return l?n.createElement(s,i(i({ref:t},d),{},{components:l})):n.createElement(s,i({ref:t},d))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},4900:function(e,t,l){l.r(t),l.d(t,{default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=l(7462),r=l(3366),a=(l(7294),l(3905)),i={sidebar_position:3},u={unversionedId:"dev/clean-code/ch3",id:"dev/clean-code/ch3",isDocsHomePage:!1,title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 3",description:"7\uc7a5. \uc624\ub958 \ucc98\ub9ac",source:"@site/docs/dev/clean-code/ch3.md",sourceDirName:"dev/clean-code",slug:"/dev/clean-code/ch3",permalink:"/til/docs/dev/clean-code/ch3",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/clean-code/ch3.md",version:"current",lastUpdatedAt:1656666871,formattedLastUpdatedAt:"7/1/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 2",permalink:"/til/docs/dev/clean-code/ch2"},next:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 4",permalink:"/til/docs/dev/clean-code/ch4"}},p=[{value:"7\uc7a5. \uc624\ub958 \ucc98\ub9ac",id:"7\uc7a5-\uc624\ub958-\ucc98\ub9ac",children:[{value:"\uc624\ub958 \ucf54\ub4dc\ubcf4\ub2e4 \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\uae30",id:"\uc624\ub958-\ucf54\ub4dc\ubcf4\ub2e4-\uc608\uc678\ub97c-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"Try-Catch-Finally \ubb38\ubd80\ud130 \uc791\uc131\ud558\uae30",id:"try-catch-finally-\ubb38\ubd80\ud130-\uc791\uc131\ud558\uae30",children:[]},{value:"\ubbf8\ud655\uc778(unchecked) \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\uae30",id:"\ubbf8\ud655\uc778unchecked-\uc608\uc678\ub97c-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"\uc608\uc678\uc5d0 \uc758\ubbf8\ub97c \uc81c\uacf5\ud558\uae30",id:"\uc608\uc678\uc5d0-\uc758\ubbf8\ub97c-\uc81c\uacf5\ud558\uae30",children:[]},{value:"\ud638\ucd9c\uc790\ub97c \uace0\ub824\ud574 \uc608\uc678 \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud558\uae30",id:"\ud638\ucd9c\uc790\ub97c-\uace0\ub824\ud574-\uc608\uc678-\ud074\ub798\uc2a4\ub97c-\uc815\uc758\ud558\uae30",children:[]},{value:"\uc815\uc0c1 \ud750\ub984\uc744 \uc815\uc758\ud558\uae30",id:"\uc815\uc0c1-\ud750\ub984\uc744-\uc815\uc758\ud558\uae30",children:[]},{value:"null\uc744 \ubc18\ud658\ud558\uc9c0 \ub9d0\uae30",id:"null\uc744-\ubc18\ud658\ud558\uc9c0-\ub9d0\uae30",children:[]},{value:"null\uc744 \uc804\ub2ec\ud558\uc9c0 \ub9d0\uae30",id:"null\uc744-\uc804\ub2ec\ud558\uc9c0-\ub9d0\uae30",children:[]},{value:"\uacb0\ub860.",id:"\uacb0\ub860",children:[]}]},{value:"8\uc7a5. \uacbd\uacc4",id:"8\uc7a5-\uacbd\uacc4",children:[{value:"\uc678\ubd80 \ucf54\ub4dc \uc0ac\uc6a9\ud558\uae30",id:"\uc678\ubd80-\ucf54\ub4dc-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"\uacbd\uacc4\ub97c \uc0b4\ud53c\uace0 \uc775\ud788\uae30",id:"\uacbd\uacc4\ub97c-\uc0b4\ud53c\uace0-\uc775\ud788\uae30",children:[]},{value:"log4j \uc775\ud788\uae30",id:"log4j-\uc775\ud788\uae30",children:[]},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub294 \uacf5\uc9dc \uc774\uc0c1",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8\ub294-\uacf5\uc9dc-\uc774\uc0c1",children:[]},{value:"\uc544\uc9c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30",id:"\uc544\uc9c1-\uc874\uc7ac\ud558\uc9c0-\uc54a\ub294-\ucf54\ub4dc\ub97c-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"\uae68\ub057\ud55c \uacbd\uacc4",id:"\uae68\ub057\ud55c-\uacbd\uacc4",children:[]}]},{value:"9\uc7a5. \ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"9\uc7a5-\ub2e8\uc704-\ud14c\uc2a4\ud2b8",children:[{value:"TDD \ubc95\uce59 \uc138\uac00\uc9c0",id:"tdd-\ubc95\uce59-\uc138\uac00\uc9c0",children:[]},{value:"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc720\uc9c0\ud558\uae30",id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\uc720\uc9c0\ud558\uae30",children:[]},{value:"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc",id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc",children:[]},{value:"\ud14c\uc2a4\ud2b8 \ub2f9 assert \ud558\ub098",id:"\ud14c\uc2a4\ud2b8-\ub2f9-assert-\ud558\ub098",children:[]},{value:"F.I.R.S.T",id:"first",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860-1",children:[]}]},{value:"10\uc7a5. \ud074\ub798\uc2a4",id:"10\uc7a5-\ud074\ub798\uc2a4",children:[{value:"\ud074\ub798\uc2a4 \uccb4\uacc4",id:"\ud074\ub798\uc2a4-\uccb4\uacc4",children:[]},{value:"\ud074\ub798\uc2a4\ub294 \uc791\uc544\uc57c \ud55c\ub2e4.",id:"\ud074\ub798\uc2a4\ub294-\uc791\uc544\uc57c-\ud55c\ub2e4",children:[]},{value:"\ubcc0\uacbd\ud558\uae30 \uc26c\uc6b4 \ud074\ub798\uc2a4",id:"\ubcc0\uacbd\ud558\uae30-\uc26c\uc6b4-\ud074\ub798\uc2a4",children:[]}]}],o={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"7\uc7a5-\uc624\ub958-\ucc98\ub9ac"},"7\uc7a5. \uc624\ub958 \ucc98\ub9ac"),(0,a.kt)("p",null,"\uae68\ub057\ud55c \ucf54\ub4dc\uc640 \uc624\ub958 \ucc98\ub9ac\ub294 \uc5f0\uad00\uc131\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,a.kt)("h3",{id:"\uc624\ub958-\ucf54\ub4dc\ubcf4\ub2e4-\uc608\uc678\ub97c-\uc0ac\uc6a9\ud558\uae30"},"\uc624\ub958 \ucf54\ub4dc\ubcf4\ub2e4 \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\uc624\ub958\uac00 \ubc1c\uc0dd \uc2dc \uc608\uc678\ub97c \ub358\uc9c0\ub294 \ubc29\ubc95\uc774 \ub17c\ub9ac\uc640 \uc624\ub958 \ucc98\ub9ac \ucf54\ub4dc\uac00 \ub4a4\uc11e\uc774\uc9c0 \uc54a\uc544 \ucf54\ub4dc\uac00 \ub354 \uae54\ub054\ud574\uc9c4\ub2e4."),(0,a.kt)("h3",{id:"try-catch-finally-\ubb38\ubd80\ud130-\uc791\uc131\ud558\uae30"},"Try-Catch-Finally \ubb38\ubd80\ud130 \uc791\uc131\ud558\uae30"),(0,a.kt)("p",null,"\uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \ucf54\ub4dc\ub97c \uc9e4 \uacbd\uc6b0\uc5d0\ub294 try-catch-finally \ubb38\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public List<RecordedGrip> retrieveSection(String sectionName) {\n  try {\n    FileInputStream stream = new FileInputStream(sectionName);\n  } catch (Exception e) {\n    throw new StorageException("retrieval error", e);\n  }\n  return new ArrayList<RecordedGrip>();\n}\n')),(0,a.kt)("h3",{id:"\ubbf8\ud655\uc778unchecked-\uc608\uc678\ub97c-\uc0ac\uc6a9\ud558\uae30"},"\ubbf8\ud655\uc778(unchecked) \uc608\uc678\ub97c \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\ud655\uc778\ub41c \uc608\uc678\ub294 \uba87 \uac00\uc9c0 \uc7a5\uc810\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, \ubc18\ub4dc\uc2dc \ud544\uc694\ud558\uc9c0\ub294 \uc54a\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud655\uc778\ub41c \uc624\ub958\uac00 \uce58\ub974\ub294 \ube44\uc6a9\uc5d0 \ub300\ud574\uc11c \uc798 \uc0dd\uac01\ud574\ubcf4\uc544\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud655\uc778\ub41c \uc608\uc678\ub294 OCP(Open Closed Principle)\ub97c \uc704\ubc18\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Ex) \ud655\uc778\ub41c \uc608\uc678\ub97c \ub358\uc84c\uc73c\ub098, catch\uac00 \uc138 \ub2e8\uacc4 \uc704\uc5d0 \uc788\ub2e4\uba74 \ubaa8\ub4e0 \uc120\uc5b8\ubd80\uc5d0 \uc608\uc678\uac00 \ud544\uc694\ud558\ub2e4. \ub300\uaddc\ubaa8 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ud798\ub4e4\ub2e4.")),(0,a.kt)("h3",{id:"\uc608\uc678\uc5d0-\uc758\ubbf8\ub97c-\uc81c\uacf5\ud558\uae30"},"\uc608\uc678\uc5d0 \uc758\ubbf8\ub97c \uc81c\uacf5\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc608\uc678\ub97c \ub358\uc9c8 \ub54c \uc804\ud6c4 \uc0c1\ud669\uc744 \ucda9\ubd84\ud788 \ub367\ubd99\uc77c \ub54c, \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c \uc6d0\uc778\uacfc \uc704\uce58\ub97c \ucc3e\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc624\ub958 \uba54\uc2dc\uc9c0\uc5d0 \uc815\ubcf4(\uc2e4\ud328\ud55c \uc5f0\uc0b0 \uc774\ub984, \uc2e4\ud328 \uc720\ud615)\ub4f1\uc744 \ud568\uaed8 \ub358\uc9c4\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub85c\uae45 \uae30\ub2a5\uc744 \ud1b5\ud574 \ucda9\ubd84\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uc790.")))),(0,a.kt)("h3",{id:"\ud638\ucd9c\uc790\ub97c-\uace0\ub824\ud574-\uc608\uc678-\ud074\ub798\uc2a4\ub97c-\uc815\uc758\ud558\uae30"},"\ud638\ucd9c\uc790\ub97c \uace0\ub824\ud574 \uc608\uc678 \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud558\uae30"),(0,a.kt)("p",null,"\uc624\ub958\ub97c \uc7a1\uc544\ub0b4\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc678\ubd80 API\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 \uac10\uc2f8\uae30 \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc88b\uc740 \ubc29\ubc95\uc774\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"LocalPort port = new LocalPort(12);\ntry {\n  port.open();\n} catch (PortDeviceFailure e) {\n  reportError(e);\n  logger.log(e.getMessage(), e);\n} finally {\n  ...\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc608\uc678 \ud074\ub798\uc2a4\uac00 \ud558\ub098\ub9cc \uc788\uc5b4\ub3c4 \ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ub354 \ub098\uc544\uac00, \ud55c \uc608\uc678\ub294 \uc7a1\uc544\ub0b4\uace0 \ub2e4\ub978 \uc608\uc678\ub294 \ubb34\uc2dc\ud574\ub3c4 \ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc5ec\ub7ec \uc608\uc678 \ucf00\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \ubc29\ubc95\uc774\ub2e4."))),(0,a.kt)("h3",{id:"\uc815\uc0c1-\ud750\ub984\uc744-\uc815\uc758\ud558\uae30"},"\uc815\uc0c1 \ud750\ub984\uc744 \uc815\uc758\ud558\uae30"),(0,a.kt)("p",null,"\ud2b9\uc218 \uc0ac\ub840 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub098 \uac1d\uccb4\ub85c \uc608\uc678\uc801\uc778 \uc0c1\ud669\uc744 \ucea1\uc290\ud654\ud558\uc5ec \ucc98\ub9ac\ud560 \uc218 \uc788\uc74c")),(0,a.kt)("h3",{id:"null\uc744-\ubc18\ud658\ud558\uc9c0-\ub9d0\uae30"},"null\uc744 \ubc18\ud658\ud558\uc9c0 \ub9d0\uae30"),(0,a.kt)("p",null,"null\uc5d0 \ub300\ud55c \uacfc\ud55c \ud655\uc778\uc740 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\ub2e4. \uc989, \uc608\uc678\ub098 ",(0,a.kt)("strong",{parentName:"p"},"\ud2b9\uc218 \uc0ac\ub840 \ud328\ud134"),"\uc774 \ub354 \uc88b\uc740 \uacbd\uc6b0\uac00 \ub9ce\ub2e4."),(0,a.kt)("h3",{id:"null\uc744-\uc804\ub2ec\ud558\uc9c0-\ub9d0\uae30"},"null\uc744 \uc804\ub2ec\ud558\uc9c0 \ub9d0\uae30"),(0,a.kt)("p",null,"\uc778\uc218\uc5d0 null\uc774 \ub118\uc5b4\uac00\uc9c0 \uc54a\ub294 \uc815\ucc45\uc774 \uc788\ub2e4\uba74, \ub9ce\uc740 \uc2e4\uc218\ub97c \uc904\uc77c \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae68\ub057\ud55c \ucf54\ub4dc\ub294 \uc77d\uae30\ub3c4 \uc88b\uc544\uc57c \ud558\uc9c0\ub9cc, ",(0,a.kt)("strong",{parentName:"li"},"\uc548\uc815\uc131"),"\ub3c4 \ub192\uc544\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc624\ub958 \ucc98\ub9ac\ub97c \ud504\ub85c\uadf8\ub7a8 \ub17c\ub9ac\uc640 \ubd84\ub9ac\ud574 \ub3c5\uc790\uc801\uc778 \uc0ac\uc548\uc73c\ub85c \uace0\ub824\ud558\uba74 \ud2bc\ud2bc\ud558\uace0 \uae68\ub057\ud55c \ucf54\ub4dc \uc791\uc131\uc774 \uac00\ub2a5")),(0,a.kt)("h2",{id:"8\uc7a5-\uacbd\uacc4"},"8\uc7a5. \uacbd\uacc4"),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ubaa8\ub4e0 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc9c1\uc811 \uac1c\ubc1c\ud558\ub294 \uacbd\uc6b0\ub294 \ub4dc\ubb3c\ub2e4."),(0,a.kt)("h3",{id:"\uc678\ubd80-\ucf54\ub4dc-\uc0ac\uc6a9\ud558\uae30"},"\uc678\ubd80 \ucf54\ub4dc \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\uc778\ud130\ud398\uc774\uc2a4 \uc81c\uacf5\uc790\uc640 \uc0ac\uc6a9\uc790 \uc0ac\uc774\uc5d0\ub294 \uc774\ud574\uad00\uacc4\uac00 \ub4e4\uc5b4\uac04\ub2e4. \uc81c\uacf5\uc790\ub294 \ucd5c\ub300\ud55c \uc801\uc6a9\uc131\uc744 \ub298\ub9ac\uae30\ub97c \uc6d0\ud558\uc9c0\ub9cc, \uc0ac\uc6a9\uc790\ub294 \uc790\uc2e0\uc758 \uc694\uad6c\uc5d0 \uc9d1\uc911\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud76c\ub9dd\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc989, ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"\uacfc \uac19\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uacbd\uacc4 \uc778\ud130\ud398\uc774\uc2a4\ub97c")," \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc774\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\ub098 \uacc4\uc5f4 \ubc16\uc73c\ub85c \ub178\ucd9c\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud55c\ub2e4.(\ucea1\uc290\ud654\ub3c4 \ud55c \ubc29\ubc95)"),(0,a.kt)("h3",{id:"\uacbd\uacc4\ub97c-\uc0b4\ud53c\uace0-\uc775\ud788\uae30"},"\uacbd\uacc4\ub97c \uc0b4\ud53c\uace0 \uc775\ud788\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \uc801\uc740 \uc2dc\uac04\uc5d0 \ub9ce\uc740 \uae30\ub2a5\uc744 \ub123\uc744 \uc218 \uc788\ub294 \uc7a5\uc810\uc774 \uc874\uc7ac."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098, \ud14c\uc2a4\ud2b8\ub97c \ud574\uc11c \uc9c4\ud589\ud558\ub294 \ubc29\ubc95\uc774 \ubc14\ub78c\uc9c1\ud558\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uac04\ub2e8\ud55c \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc775\ud788\ub294 \ubc29\ubc95\uc744 ",(0,a.kt)("strong",{parentName:"li"},"\ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub77c\uace0")," \ubd80\ub978\ub2e4.")))),(0,a.kt)("h3",{id:"log4j-\uc775\ud788\uae30"},"log4j \uc775\ud788\uae30"),(0,a.kt)("p",null,"\ub85c\uae45\uc744 \uc9c1\uc811 \uad6c\ud604\ud558\uae30\ubcf4\ub2e4\ub294 \uc544\ud30c\uce58\uc758 log4j \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud558\uc790."),(0,a.kt)("p",null,"\uac04\ub2e8\ud55c \uc608\uc2dc \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class LogTest {\n  private Logger logger;\n\n  @Before\n  public void initialize() {\n    logger = Logger.getLogger("logger");\n    logger.removeAllApenders();\n    Logger.getRootLogger().removeAllAppenders();\n  }\n\n  @Test\n  public void basicLogger() {\n    BasicConfigurator.configure();\n    logger.info("basicLogger");\n  }\n\n  @Test\n  public void addAppenderWithStream() {\n    logger.addAppender(new ConsoleAppender(\n        new PatternLayout("%p %t %m%n"),\n      ConsoleAppender.SYSTEM_OUT));\n    logger.info("addAppenderWithStream");\n  }\n\n  @Test\n  public void addAppenderWithoutSteam() {\n    logger.addAppender(new ConsoleAppender(\n        new PatternLayout("%p %t %m%n")));\n    logger.info("addAppenderWithoutStream");\n  }\n}\n')),(0,a.kt)("h3",{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8\ub294-\uacf5\uc9dc-\uc774\uc0c1"},"\ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub294 \uacf5\uc9dc \uc774\uc0c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud559\uc2b5 \ud14c\uc2a4\ud2b8\uc5d0 \ub4dc\ub294 \ube44\uc6a9\uc740 \uc5c6\uc73c\uba70, \ud544\uc694\ud55c \uc9c0\uc2dd\ub9cc \ud655\ubcf4\ud558\ub294 \uc190\uc26c\uc6b4 \ubc29\ubc95"),(0,a.kt)("li",{parentName:"ul"},"\ud22c\uc790\ud558\ub294 \ub178\ub825\ubcf4\ub2e4 \uc5bb\ub294 \uc131\uacfc\uac00 \ub354 \ud06c\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\ud328\ud0a4\uc9c0\uac00 \uc0c8 \ubc84\uc804\uc774 \ub098\uc624\uba74 \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \ub3cc\ub824 \uc608\uc0c1\ub300\ub85c \ub098\uc624\ub294\uc9c0 \uccb4\ud06c\ud55c\ub2e4.")),(0,a.kt)("h3",{id:"\uc544\uc9c1-\uc874\uc7ac\ud558\uc9c0-\uc54a\ub294-\ucf54\ub4dc\ub97c-\uc0ac\uc6a9\ud558\uae30"},"\uc544\uc9c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub294 \ucf54\ub4dc\uc640 \ubaa8\ub974\ub294 \ucf54\ub4dc(\ubbf8\uc644\uc131 \ucf54\ub4dc)\ub97c \ubd84\ub9ac\ud558\uae30"),(0,a.kt)("li",{parentName:"ul"},"\ubc14\ub77c\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uba74 \uc6b0\ub9ac\uac00 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc804\uc801\uc73c\ub85c \ud1b5\uc81c\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc744 \uc5bb\uc744 \uc218 \uc788\uc74c."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc124\uacc4\ub294 \ud14c\uc2a4\ud2b8\uc5d0\uc11c\ub3c4 \ud3b8\ud558\ub2e4.")),(0,a.kt)("h3",{id:"\uae68\ub057\ud55c-\uacbd\uacc4"},"\uae68\ub057\ud55c \uacbd\uacc4"),(0,a.kt)("p",null,"\uacbd\uacc4\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud1b5\uc81c \ubabb\ud558\ub294 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ube44\uc6a9\uc774 \uc801\uac8c \uad6c\uc131\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uacbd\uacc4\uc5d0 \uc704\uce58\ud55c \ucf54\ub4dc\ub294 \uae54\ub054\ud558\uac8c \ubd84\ub9ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ud328\ud0a4\uc9c0\uc5d0 \uc758\uc874\ud558\ub294 \ub300\uc2e0, \ud1b5\uc81c \uac00\ub2a5\ud55c \uc6b0\ub9ac \ucf54\ub4dc\uc5d0 \uc758\uc874\ud55c\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ud328\ud0a4\uc9c0 \ud638\ucd9c \ucf54\ub4dc\ub97c \uac00\ub2a5\ud55c \uc904\uc5ec\uc11c \uacbd\uacc4\ub97c \uad00\ub9ac\ud55c\ub2e4")),(0,a.kt)("h2",{id:"9\uc7a5-\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"9\uc7a5. \ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,a.kt)("p",null,"\uc81c\ub300\ub85c \ub41c \ud14c\uc2a4\ud2b8\uac00 \ud544\uc694\ud558\ub2e4."),(0,a.kt)("h3",{id:"tdd-\ubc95\uce59-\uc138\uac00\uc9c0"},"TDD \ubc95\uce59 \uc138\uac00\uc9c0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc2e4\ud328\ud558\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud560 \ub54c\uae4c\uc9c0 \uc2e4\uc81c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ucef4\ud30c\uc77c\uc740 \uc2e4\ud328\ud558\uc9c0 \uc54a\uc73c\uba74\uc11c \uc2e4\ud589\uc774 \uc2e4\ud328\ud558\ub294 \uc815\ub3c4\ub85c\ub9cc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud604\uc7ac \uc2e4\ud328\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc\ud560 \uc815\ub3c4\ub85c\ub9cc \uc2e4\uc81c \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4.")),(0,a.kt)("p",null,"\uc704 \uaddc\uce59\uc744 \uc798 \uc9c0\ud0a4\uba74, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc640 \uc2e4\uc81c \ucf54\ub4dc\uac00 \uac19\uc774 \ub098\uc628\ub2e4."),(0,a.kt)("h3",{id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\uc720\uc9c0\ud558\uae30"},"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc720\uc9c0\ud558\uae30"),(0,a.kt)("p",null,"\ucf54\ub4dc\uac00 \ub9dd\uac00\uc9c0\uae30 \uc2dc\uc791\ud558\uba74 \ub9dd\uac00\uc9c4\ub2e4. \ub530\ub77c\uc11c, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc2e4\uc81c \ucf54\ub4dc \ubabb\uc9c0\uc54a\uac8c \uc911\uc694\ud558\uac8c \uc9dc\uc57c\ud55c\ub2e4."),(0,a.kt)("h4",{id:"\ud14c\uc2a4\ud2b8\ub294-\uc720\uc5f0\uc131-\uc720\uc9c0\ubcf4\uc218\uc131-\uc7ac\uc0ac\uc6a9\uc131\uc744-\uc81c\uacf5\ud55c\ub2e4"},"\ud14c\uc2a4\ud2b8\ub294 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ucf54\ub4dc\uc5d0 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud558\ub294 \uae30\ub465\uc774 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uac00 \uc788\ub2e4\uba74 \ub9ce\uc740 \uacf5\ud3ec\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc9c0\uc800\ubd84\ud574\uc9c8\uc218\ub85d \uc2e4\uc81c \ucf54\ub4dc\ub3c4 \uc9c0\uc800\ubd84\ud574\uc9c4\ub2e4.")),(0,a.kt)("h3",{id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc"},"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac00\ub3c5\uc131 : \uba85\ub8cc\uc131, \ub2e8\uc21c\uc131, \ud48d\ubd80\ud55c \ud45c\ud604\ub825")),(0,a.kt)("h4",{id:"\ub3c4\uba54\uc778\uc5d0-\ud2b9\ud654\ub41c-\ud14c\uc2a4\ud2b8-\uc5b8\uc5b4"},"\ub3c4\uba54\uc778\uc5d0 \ud2b9\ud654\ub41c \ud14c\uc2a4\ud2b8 \uc5b8\uc5b4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778\uc5d0 \ud2b9\ud654\ub41c \uc5b8\uc5b4(DSL)\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc774\ub2e4.")),(0,a.kt)("h4",{id:"\uc774\uc911-\ud45c\uc900"},"\uc774\uc911 \ud45c\uc900"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e8\uc21c, \uac04\uacb0, \ud45c\ud604\ub825\uc774 \ud48d\ubd80, \uadf8\ub7ec\ub098 \uaf2d \ud6a8\uc728\uc801\uc778 \ud544\uc694\ub294 \uc5c6\ub2e4.")),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\ub2f9-assert-\ud558\ub098"},"\ud14c\uc2a4\ud2b8 \ub2f9 assert \ud558\ub098"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert \ubb38\uc740 \ud558\ub098\uac00 \uc88b\uc9c0\ub9cc, \ub54c\ub85c\ub294 \uc5ec\ub7ec \uac1c\ub97c \uc368\ub3c4 \ub41c\ub2e4. (\ub2e8, \ucd5c\ub300\ud55c \uc904\uc5ec\uc57c \ud55c\ub2e4.)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tip) Assert\ubb38."),(0,a.kt)("p",{parentName:"blockquote"},"\uc815\ud574\uc9c4 \uc870\uac74\uc5d0 \ub9de\uc9c0 \uc54a\uc744 \ub54c \ud504\ub85c\uadf8\ub7a8\uc744 \uc911\ub2e8. ex) assert(\ud45c\ud604\uc2dd)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud14c\uc2a4\ud2b8 \ud568\uc218\ub9c8\ub2e4 \ud55c \uac1c\ub150\ub9cc \ud14c\uc2a4\ud2b8"))),(0,a.kt)("h3",{id:"first"},"F.I.R.S.T"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast(\ube60\ub974\uac8c) : \ud14c\uc2a4\ud2b8\ub294 \ube60\ub974\uac8c \ub3cc\uc544\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Independent(\ub3c5\ub9bd\uc801\uc73c\ub85c) : \uac01 \ud14c\uc2a4\ud2b8\ub294 \uc11c\ub85c \uc758\uc874\ud558\uba74 \uc548 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Repeatable(\ubc18\ubcf5 \uac00\ub2a5\ud558\uac8c) : \ud14c\uc2a4\ud2b8\ub294 \uc5b4\ub5a4 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ubc18\ubcf5 \uac00\ub2a5\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Self-Validating(\uc790\uac00 \uac80\uc99d\ud558\ub294) : \ud14c\uc2a4\ud2b8\ub294 \ubd80\uc6b8(bool) \uac12\uc73c\ub85c \uacb0\uacfc\ub97c \ub0b4\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Timely(\uc801\uc2dc\uc5d0) : \ud14c\uc2a4\ud2b8\ub294 \uc801\uc2dc\uc5d0 \uc791\uc131\ud574\uc57c \ud55c\ub2e4.")),(0,a.kt)("h3",{id:"\uacb0\ub860-1"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc2e4\uc81c \ucf54\ub4dc\uc758 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \ubcf4\uc874\ud558\uace0 \uac15\ud654\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \ud2b9\ud654 \uc5b8\uc5b4(DSL, Domain Specific Language)\ub97c \uad6c\uc131\ud558\uba74 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc9dc\uae30 \uc26c\uc6cc\uc9c4\ub2e4.")),(0,a.kt)("h2",{id:"10\uc7a5-\ud074\ub798\uc2a4"},"10\uc7a5. \ud074\ub798\uc2a4"),(0,a.kt)("h3",{id:"\ud074\ub798\uc2a4-\uccb4\uacc4"},"\ud074\ub798\uc2a4 \uccb4\uacc4"),(0,a.kt)("p",null,"\ucd94\uc0c1\ud654 \ub2e8\uacc4\ub294 \uc21c\ucc28\uc801\uc73c\ub85c \ub0b4\ub824\uac04\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public, private, \ube44\uacf5\uac1c \uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218 \uc21c\uc73c\ub85c \uc9c4\ud589\ub41c\ub2e4.")),(0,a.kt)("h4",{id:"\ucea1\uc290\ud654"},"\ucea1\uc290\ud654"),(0,a.kt)("p",null,"\uaf2d \uc720\uc9c0\ud574\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2c8\ub098, \ucea1\uc290\ud654\ub97c \ud478\ub294 \ubc29\ubc95\uc740 \ucd5c\ud6c4\uc758 \uc218\ub2e8\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud074\ub798\uc2a4\ub294-\uc791\uc544\uc57c-\ud55c\ub2e4"},"\ud074\ub798\uc2a4\ub294 \uc791\uc544\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\ud558\ub098\uc758 \ud074\ub798\uc2a4\ub294 \uc801\uc740 \ucc45\uc784\uc744 \uc5bb\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\uc989, \ud074\ub798\uc2a4 \uc124\uba85\uc740 if, and, or, but \ub4f1\uc758 \ub2e8\uc5b4\ub97c \uc81c\uc678\ud558\uace0 25 \ub2e8\uc5b4 \ub0b4\uc678\ub85c \uac00\ub2a5\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("h4",{id:"\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59srp-single-responsibility-principle"},"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP, Single Responsibility Principle)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub098 \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud560 \uc774\uc720\uac00 \ud558\ub098\ubfd0\uc774\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc6d0\uce59."),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc9c0\ud5a5 \uc124\uacc4\uc5d0\uc11c \ub354\uc6b0 \uc911\uc694\ud55c \uac1c\ub150\uc774\ub2e4.")),(0,a.kt)("h4",{id:"\uc751\uc9d1\ub3c4"},"\uc751\uc9d1\ub3c4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub294 \uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218 \uc218\uac00 \uc801\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac01 \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\ub294 \ud074\ub798\uc2a4 \uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218\ub97c \ud558\ub098 \uc774\uc0c1 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"'\ud568\uc218\ub97c \uc791\uac8c, \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d\uc744 \uc9e7\uac8c'\ub77c\ub294 \uc804\ub7b5\uc73c\ub85c \uc9c4\ud589\ud558\uace0, \uc751\uc9d1\ub3c4\uac00 \ub192\uc544\uc9c0\ub3c4\ub85d \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\ud55c\ub2e4.")),(0,a.kt)("h4",{id:"\uc751\uc9d1\ub3c4\ub97c-\uc720\uc9c0\ud558\uba74-\uc791\uc740-\ud074\ub798\uc2a4-\uc5ec\ub7ff\uc73c\ub85c-\uad6c\uc131\ub41c\ub2e4"},"\uc751\uc9d1\ub3c4\ub97c \uc720\uc9c0\ud558\uba74 \uc791\uc740 \ud074\ub798\uc2a4 \uc5ec\ub7ff\uc73c\ub85c \uad6c\uc131\ub41c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4\uac00 \uc751\uc9d1\ub825\uc744 \uc783\uc73c\uba74 \ucabc\uac1c\uc57c \ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3\uac00\uc9c0 \ub8f0\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\ub9ac\ud329\ud130\ub9c1\ud55c \ud504\ub85c\uadf8\ub7a8\uc740 \uc880 \ub354 \uae38\uace0 \uc11c\uc220\uc801\uc778 \ubcc0\uc218 \uc774\ub984\uc744 \uc0ac\uc6a9"),(0,a.kt)("li",{parentName:"ol"},"\ub9ac\ud329\ud130\ub9c1\ud55c \ud504\ub85c\uadf8\ub7a8\uc740 \ucf54\ub4dc\uc5d0 \uc8fc\uc11d\uc744 \ucd94\uac00\ud558\ub294 \uc218\ub2e8\uc73c\ub85c \ud568\uc218 \uc120\uc5b8\uacfc \ud074\ub798\uc2a4 \uc120\uc5b8\uc744 \ud65c\uc6a9"),(0,a.kt)("li",{parentName:"ol"},"\uac00\ub3c5\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uacf5\ubc31\uc744 \ucd94\uac00\ud558\uace0 \ud615\uc2dd\uc744 \ub9de\ucda4")))),(0,a.kt)("h3",{id:"\ubcc0\uacbd\ud558\uae30-\uc26c\uc6b4-\ud074\ub798\uc2a4"},"\ubcc0\uacbd\ud558\uae30 \uc26c\uc6b4 \ud074\ub798\uc2a4"),(0,a.kt)("p",null,"\ub300\ud45c\uc801\uc73c\ub85c \uc218\uc815\ud558\uae30 \uc5b4\ub824\uc6b4 \ucf54\ub4dc\uac00 SQL \ud074\ub798\uc2a4\uc774\ub2e4. \uc7a0\uc7ac\uc801\uc73c\ub85c \uc218\uc815\ub418\ub294 \uc5ec\uc9c0\ub97c \ub0a8\uae30\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,a.kt)("h4",{id:"\ubcc0\uacbd\uc73c\ub85c\ubd80\ud130-\uaca9\ub9ac"},"\ubcc0\uacbd\uc73c\ub85c\ubd80\ud130 \uaca9\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uad6c\uccb4\uc801\uc778 \ud074\ub798\uc2a4\uc640 \ucd94\uc0c1 \ud074\ub798\uc2a4\uc758 \uc0ac\uc6a9\uc774 \uc911\uc694\ud558\ub2e4. \uc989, \uc778\ud130\ud398\uc774\uc2a4\uc640 \ucd94\uc0c1 \ud074\ub798\uc2a4\uac00 \uc911\uc694\ud558\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uba74 \uc720\uc5f0\uc131\uacfc \uc7ac\uc0ac\uc6a9\uc131\uc774 \ub192\uc544\uc9c0\uace0 \uac01 \uc694\uc18c\ub97c \uc774\ud574\ud558\uae30 \uc26c\uc6cc\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub294 \ud074\ub798\uc2a4 \uc124\uacc4 \uc6d0\uce59(DIP, Dependency Inversion Principle)\uc744 \ub530\ub974\ub294 \ud074\ub798\uc2a4\ub97c \uc9c0\ud0ac \uc218 \uc788\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DIP : \uc0c1\uc138\ud55c \uad6c\ud604\uc774 \uc544\ub2c8\ub77c \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud55c\ub2e4\ub294 \uc6d0\uce59")))))}d.isMDXComponent=!0}}]);