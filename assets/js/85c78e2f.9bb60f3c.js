"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[7062],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9316:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i={sidebar_position:8},o={unversionedId:"dev/ddd-start/ch8",id:"dev/ddd-start/ch8",isDocsHomePage:!1,title:"8. \uc560\uadf8\ub9ac\uac70\ud2b8 \ud2b8\ub79c\uc7ad\uc158 \uad00\ub9ac",description:"\uc560\uadf8\ub9ac\uac70\ud2b8\uc640 \ud2b8\ub79c\uc7ad\uc158",source:"@site/docs/dev/ddd-start/ch8.md",sourceDirName:"dev/ddd-start",slug:"/dev/ddd-start/ch8",permalink:"/til/docs/dev/ddd-start/ch8",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/ddd-start/ch8.md",version:"current",lastUpdatedAt:1662008941,formattedLastUpdatedAt:"9/1/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. \ub3c4\uba54\uc778 \uc11c\ube44\uc2a4",permalink:"/til/docs/dev/ddd-start/ch7"},next:{title:"9. \ub3c4\uba54\uc778 \ubaa8\ub378\uacfc BOUNDED CONTEXT",permalink:"/til/docs/dev/ddd-start/ch9"}},c=[{value:"\uc560\uadf8\ub9ac\uac70\ud2b8\uc640 \ud2b8\ub79c\uc7ad\uc158",id:"\uc560\uadf8\ub9ac\uac70\ud2b8\uc640-\ud2b8\ub79c\uc7ad\uc158",children:[]},{value:"\uc120\uc810 \uc7a0\uae08",id:"\uc120\uc810-\uc7a0\uae08",children:[{value:"\uc120\uc810 \uc7a0\uae08\uacfc \uad50\ucc29 \uc0c1\ud0dc",id:"\uc120\uc810-\uc7a0\uae08\uacfc-\uad50\ucc29-\uc0c1\ud0dc",children:[]}]},{value:"\ube44\uc120\uc810 \uc7a0\uae08",id:"\ube44\uc120\uc810-\uc7a0\uae08",children:[{value:"\uac15\uc81c \ubc84\uc804 \uc99d\uac00",id:"\uac15\uc81c-\ubc84\uc804-\uc99d\uac00",children:[]}]},{value:"\uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08",id:"\uc624\ud504\ub77c\uc778-\uc120\uc810-\uc7a0\uae08",children:[{value:"\uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08\uc744 \uc704\ud55c LockManager \uc778\ud130\ud398\uc774\uc2a4\uc640 \uad00\ub828 \ud074\ub798\uc2a4",id:"\uc624\ud504\ub77c\uc778-\uc120\uc810-\uc7a0\uae08\uc744-\uc704\ud55c-lockmanager-\uc778\ud130\ud398\uc774\uc2a4\uc640-\uad00\ub828-\ud074\ub798\uc2a4",children:[]},{value:"DB\ub97c \uc774\uc6a9\ud55c LockManager \uad6c\ud604",id:"db\ub97c-\uc774\uc6a9\ud55c-lockmanager-\uad6c\ud604",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uc560\uadf8\ub9ac\uac70\ud2b8\uc640-\ud2b8\ub79c\uc7ad\uc158"},"\uc560\uadf8\ub9ac\uac70\ud2b8\uc640 \ud2b8\ub79c\uc7ad\uc158"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \ub450 \uc0ac\uc6a9\uc790\uac00 \uac70\uc758 \ub3d9\uc2dc\uc5d0 \ubcc0\uacbd\ud560 \ub54c \ud2b8\ub79c\uc7ad\uc158\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6b4\uc601\uc790\ub294 \uae30\ubcf8 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574\uc11c \ubc30\uc1a1 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud588\ub294\ub370 \uadf8 \uc0ac\uc774 \uace0\uac1d\uc740 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4. \uc989, \uc560\uadf8\ub9ac\uac70\ud2b8\uc758 \uc77c\uad00\uc131\uc774 \uae68\uc9d1\ub2c8\ub2e4. \uc774\ub7f0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub824\uba74 \ub2e4\uc74c\uc758 \ub450 \uac00\uc9c0 \uc911 \ud558\ub098\ub97c \ud574\uc57c \ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc6b4\uc601\uc790\uac00 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \uc870\ud68c\ud558\uace0 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ub3d9\uc548 \uace0\uac1d\uc774 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uc218\uc815\ud558\uc9c0 \ubabb\ud558\uac8c \ub9c9\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6b4\uc601\uc790\uac00 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \uc870\ud68c\ud55c \uc774\ud6c4\uc5d0 \uace0\uac1d\uc774 \uc815\ubcf4\ub97c \ubcc0\uacbd\ud558\uba74 \uc6b4\uc601\uc790\uac00 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \ub2e4\uc2dc \uc870\ud68c\ud55c \ub4a4 \uc218\uc815\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc774 \ub450\uac00\uc9c0\ub294 \uc560\uadf8\ub9ac\uac70\ud2b8 \uc790\uccb4\uc758 \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac \ubc29\uc2dd\uc5d0\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\uc120\uc810(Perssimistic) \uc7a0\uae08"),"\uacfc ",(0,l.kt)("strong",{parentName:"li"},"\ube44\uc120\uc810(Optimistic) \uc7a0\uae08"),"\uc758 \ub450 \uac00\uc9c0 \ubc29\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc120\uc810-\uc7a0\uae08"},"\uc120\uc810 \uc7a0\uae08"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc120\uc810 \uc7a0\uae08(Pessimistic Lock)\uc740 \uba3c\uc800 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uad6c\ud55c \uc2a4\ub808\ub4dc\uac00 \uc560\uadf8\ub9ac\uac70\ud2b8 \uc0ac\uc6a9\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \ud574\ub2f9 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uc218\uc815\ud558\ub294 \uac83\uc744 \ub9c9\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud55c \uc2a4\ub808\ub4dc\uac00 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uad6c\ud558\uace0 \uc218\uc815\ud558\ub294 \ub3d9\uc548 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \uc218\uc815\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c \ub3d9\uc2dc\uc5d0 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uc218\uc815\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \ub370\uc774\ud130 \ucda9\ub3cc \ubb38\uc81c\ub97c \ud574\uc18c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc120\uc810 \uc7a0\uae08\uc740 \ubcf4\ud1b5 DBMS\uac00 \uc81c\uacf5\ud558\ub294 \ud589 \ub2e8\uc704 \uc7a0\uae08\uc744 \uc0ac\uc6a9\ud574\uc11c \uad6c\ud604\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc120\uc810-\uc7a0\uae08\uacfc-\uad50\ucc29-\uc0c1\ud0dc"},"\uc120\uc810 \uc7a0\uae08\uacfc \uad50\ucc29 \uc0c1\ud0dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc120\uc810 \uc7a0\uae08 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc7a0\uae08 \uc21c\uc11c\uc5d0 \ub530\ud55c \uad50\ucc29 \uc0c1\ud0dc(deadlock)\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc120\uc810 \uc7a0\uae08\uc5d0 \ub530\ub978 \uad50\ucc29 \uc0c1\ud0dc\ub294 \uc0c1\ub300\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc218\uac00 \ub9ce\uc744 \ub54c \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uace0, \uc0ac\uc6a9\uc790 \uc218\uac00 \ub9ce\uc544\uc9c0\uba74 \uad50\ucc29 \uc0c1\ud0dc\uc5d0 \ube60\uc9c0\ub294 \uc2a4\ub808\ub4dc\uac00 \ub354 \ube60\ub974\uac8c \uc99d\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub354 \ub9ce\uc740 \uc2a4\ub808\ub4dc\uac00 \uad50\ucc29 \uc0c1\ud0dc\uc5d0 \ube60\uc9c8\uc218\ub85d \uc2dc\uc2a4\ud15c\uc740 \uc810\uc810 \uc544\ubb34\uac83\ub3c4 \ud560 \uc218 \uc5c6\ub294 \uc0c1\ud669\uc5d0 \uc774\ub974\uac8c \ub41c\ub2e4.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\ube44\uc120\uc810-\uc7a0\uae08"},"\ube44\uc120\uc810 \uc7a0\uae08"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ex) \uc6b4\uc601\uc790\uac00 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \uc870\ud68c\ud558\uace0 \ubc30\uc1a1 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\ub294\uc0ac\uc774\uc5d0 \uace0\uac1d\uc774 \ubc30\uc1a1\uc9c0\ub97c \ubcc0\uacbd\ud558\uba74, \uc6b4\uc601\uc790\ub294 \uace0\uac1d\uc774 \ubcc0\uacbd\ud558\uae30 \uc804\uc758 \ubc30\uc1a1\uc9c0 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574\uc11c \ubc30\uc1a1 \uc900\ube44\ub97c \ud558\uace0 \ubc30\uc1a1 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc758 \ubb38\uc81c\ub294 \uc120\uc810 \uc7a0\uae08 \ubc29\uc2dd\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c, \ube44\uc120\uc810 \uc7a0\uae08(Optimistic Lock)\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE aggtable SET version = version + 1, colx = ?, coly = ?\nWHERE aggid = ? and version = \ud604\uc7ac\ubc84\uc804\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704 \ucffc\ub9ac\ub294 \uc560\uadf8\ub9ac\uac70\ud2b8 \ubc84\uc804\uacfc \ub3d9\uc77c\ud55c \uacbd\uc6b0\uc5d0\ub9cc \ub370\uc774\ud130\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc989, \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc774 \uba3c\uc800 \ub370\uc774\ud130\ub97c \uc218\uc815\ud574\uc11c \ubc84\uc804 \uac12\uc774 \ubc14\ub00c\uba74 \ub370\uc774\ud130 \uc218\uc815\uc5d0 \uc2e4\ud328\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"JPA\uc5d0\uc11c\ub294 \ubc84\uc804\uc744 \uc774\uc6a9\ud55c \ube44\uc120\uc810 \uc7a0\uae08 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@Table(name = "purchase_order")\n@Access(AccessType.FIELD)\npublic class Order {\n  @EmbeddedId\n  private OrderNo number;\n\n  @Version\n  private long version;\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud45c\ud604 \uc601\uc5ed\uc758 \ucf54\ub4dc\ub294 \uc774 \uc775\uc149\uc158\uc758 \ubc1c\uc0dd \uc5ec\ubd80\uc5d0 \ub530\ub77c \ud2b8\ub79c\uc7ad\uc158 \ucda9\ub3cc\uc774 \uc77c\uc5b4\ub0ac\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\npublic class OrderController {\n  private ChangeShippingService service;\n\n  @RequestMapping(...)\n  public String changeShipping(Request req) {\n    try {\n      service.changeShipping(req);\n      return "success";\n    } catch(OptimisticLockingFailureException ex) {\n      return "conflicts";\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704\ucc98\ub7fc \ubc84\uc804\uc774 \ub3d9\uc77c\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc218\uc815 \uac00\ub2a5\uc744 \uc218\ud589\ud558\ub3c4\ub85d \ud568\uc73c\ub85c\uc368 \ud2b8\ub79c\uc7ad\uc158 \ucda9\ub3cc \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud45c\ud604 \uacc4\uce35\uc740 \ubc84\uc804 \ucda9\ub3cc \uc775\uc149\uc158\uc774 \ubc1c\uc0dd\ud558\uba74 \ubc84\uc804 \ucda9\ub3cc\uc744 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub824\uc8fc\uace0 \uc0ac\uc6a9\uc790\uac00 \uc54c\ub9de\uc740 \ud6c4\uc18d \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubc84\uc804 \ucda9\ub3cc \uc0c1\ud669\uc5d0 \ub300\ud55c \uad6c\ubd84\uc774 \uba85\uc2dc\uc801\uc73c\ub85c \ud544\uc694\uc5c6\ub2e4\uba74 \uc751\uc6a9 \uc11c\ube44\uc2a4\uc5d0\uc11c \ud504\ub808\uc784\uc6cc\ud06c \uc775\uc149\uc158\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\ub3c4\ub85d \uad6c\ud604\ud574\ub3c4 \ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uac15\uc81c-\ubc84\uc804-\uc99d\uac00"},"\uac15\uc81c \ubc84\uc804 \uc99d\uac00"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JPA\ub294 \ub8e8\ud2b8 \uc5d4\ud2f0\ud2f0\uc758 \ubc84\uc804 \uac12\uc744 \uc99d\uac00\ud558\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \uc788\uc5b4 \uc774\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d EntityManager#find() \uba54\uc11c\ub4dc\ub85c \uc5d4\ud2f0\ud2f0\ub97c \uad6c\ud560 \ub54c \uac15\uc81c\ub85c \ubc84\uc804 \uac12\uc744 \uc99d\uac00\uc2dc\ud0a4\ub294 \uc7a0\uae08 \ubaa8\ub4dc\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LockModeType.OPTIMISTIC_FORCE_INCREMENT")," \uc744 \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \uc5d4\ud2f0\ud2f0\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ud2b8\ub79c\uc7ad\uc158 \uc885\ub8cc \uc2dc\uc810\uc5d0 \ubc84\uc804 \uac12 \uc99d\uac00 \ucc98\ub9ac\ub97c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574 \ube44\uc120\uc810 \uc7a0\uae08 \uae30\ub2a5\uc744 \uc548\uc804\ud558\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc624\ud504\ub77c\uc778-\uc120\uc810-\uc7a0\uae08"},"\uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jira\ub85c \uc720\uba85\ud55c \uc544\ud2c0\ub77c\uc2dc\uc548\uc758 \ucee8\ud50c\ub8e8\uc5b8\uc2a4 \uc704\ud0a4\ub294 \uc0ac\uc804\uc5d0 \ucda9\ub3cc \uc5ec\ubd80\ub97c \uc54c\ub824\uc8fc\uc2dc\ub9cc \uc218\uc815\uc744 \ub9c9\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ub3d9\uc2dc \ubcc0\uacbd\uc744 \ub9c9\ub294 \uc120\uc810 \uc7a0\uae08 \ubc29\uc2dd\uacfc \ub2ec\ub9ac \uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08\uc740 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uac78\uccd0 \ub3d9\uc2dc \ubcc0\uacbd\uc744 \ub9c9\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc624\ud504\ub77c\uc778-\uc120\uc810-\uc7a0\uae08\uc744-\uc704\ud55c-lockmanager-\uc778\ud130\ud398\uc774\uc2a4\uc640-\uad00\ub828-\ud074\ub798\uc2a4"},"\uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08\uc744 \uc704\ud55c LockManager \uc778\ud130\ud398\uc774\uc2a4\uc640 \uad00\ub828 \ud074\ub798\uc2a4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc624\ud504\ub77c\uc778 \uc120\uc810 \uc7a0\uae08\uc740 \ud06c\uac8c \uc7a0\uae08 \uc120\uc810 \uc2dc\ub3c4, \uc7a0\uae08 \ud655\uc778, \uc7a0\uae08 \ud574\uc81c, \ub77d \uc720\ud6a8 \uc2dc\uac04 \uc5f0\uc7a5\uc758 \ub124\uac00\uc9c0 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface LockManager {\n  LockId tryLock(String type, String id) throws LockException;  // \uc7a0\uae08 \uc120\uc810 \uc2dc\ub3c4\n  void checkLock(LockId lockId) throws LockException;   // \uc7a0\uae08 \ud655\uc778\n  void releaseLock(LockId lockId) throws LockException;   // \uc7a0\uae08 \ud574\uc81c\n  void extendLockExpiration(LockId lockId, long inc) throws LockException;  // \ub77d \uc720\ud6a8 \uc2dc\uac04 \uc5f0\uc7a5\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc7a0\uae08\uc774 \uc720\ud6a8\ud55c\uc9c0 \uac80\uc0ac\ub294 \ub2e4\uc74c\uc744 \uccb4\ud06c\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc7a0\uae08\uc758 \uc720\ud6a8 \uc2dc\uac04\uc774 \uc9c0\ub0ac\uc73c\uba74 \uc774\ub9c8 \ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \uc7a0\uae08\uc744 \uc120\uc810\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc7a0\uae08\uc744 \uc120\uc810\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uac00 \uae30\ub2a5\uc744 \uc2e4\ud589\ud588\ub2e4\uba74 \uae30\ub2a5 \uc2e4\ud589\uc744 \ub9c9\uc544\uc57c\ud569\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"db\ub97c-\uc774\uc6a9\ud55c-lockmanager-\uad6c\ud604"},"DB\ub97c \uc774\uc6a9\ud55c LockManager \uad6c\ud604"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uc0dd\ub7b5. (\ucc45 \ucc38\uace0)")))}p.isMDXComponent=!0}}]);