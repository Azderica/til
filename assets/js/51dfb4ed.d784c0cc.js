(self.webpackChunktil=self.webpackChunktil||[]).push([[875],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),k=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=k(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=k(a),c=l,d=N["".concat(m,".").concat(c)]||N[c]||u[c]||r;return a?n.createElement(d,i(i({ref:t},o),{},{components:a})):n.createElement(d,i({ref:t},o))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4404:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return o}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i={sidebar_position:2},p={unversionedId:"dev/clean-code/ch2",id:"dev/clean-code/ch2",isDocsHomePage:!1,title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 2",description:"4\uc7a5. \uc8fc\uc11d",source:"@site/docs/dev/clean-code/ch2.md",sourceDirName:"dev/clean-code",slug:"/dev/clean-code/ch2",permalink:"/til/docs/dev/clean-code/ch2",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/clean-code/ch2.md",version:"current",lastUpdatedAt:1648825185,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 1",permalink:"/til/docs/dev/clean-code/ch1"},next:{title:"Clean Code \ub0b4\uc6a9 \uc815\ub9ac - 3",permalink:"/til/docs/dev/clean-code/ch3"}},m=[{value:"4\uc7a5. \uc8fc\uc11d",id:"4\uc7a5-\uc8fc\uc11d",children:[{value:"\uc88b\uc740 \uc8fc\uc11d",id:"\uc88b\uc740-\uc8fc\uc11d",children:[]},{value:"\ub098\uc05c \uc8fc\uc11d",id:"\ub098\uc05c-\uc8fc\uc11d",children:[]}]},{value:"5\uc7a5. \ud615\uc2dd \ub9de\ucd94\uae30",id:"5\uc7a5-\ud615\uc2dd-\ub9de\ucd94\uae30",children:[{value:"\ud615\uc2dd\uc744 \ub9de\ucd94\ub294 \ubaa9\uc801",id:"\ud615\uc2dd\uc744-\ub9de\ucd94\ub294-\ubaa9\uc801",children:[]},{value:"\uc801\uc808\ud55c \ud589 \uae38\uc774\ub97c \uc720\uc9c0\ud558\uae30 (\uc138\ub85c \ud615\uc2dd)",id:"\uc801\uc808\ud55c-\ud589-\uae38\uc774\ub97c-\uc720\uc9c0\ud558\uae30-\uc138\ub85c-\ud615\uc2dd",children:[]},{value:"\uac00\ub85c \ud615\uc2dd \ub9de\ucd94\uae30",id:"\uac00\ub85c-\ud615\uc2dd-\ub9de\ucd94\uae30",children:[]},{value:"\ud300 \uaddc\uce59",id:"\ud300-\uaddc\uce59",children:[]}]},{value:"6\uc7a5. \uac1d\uccb4\uc640 \uc790\ub8cc \uad6c\uc870",id:"6\uc7a5-\uac1d\uccb4\uc640-\uc790\ub8cc-\uad6c\uc870",children:[{value:"\uc790\ub8cc \ucd94\uc0c1\ud654",id:"\uc790\ub8cc-\ucd94\uc0c1\ud654",children:[]},{value:"\uc790\ub8cc/\uac1d\uccb4 \ube44\ub300\uce6d",id:"\uc790\ub8cc\uac1d\uccb4-\ube44\ub300\uce6d",children:[]},{value:"\ub514\ubbf8\ud130 \ubc95\uce59",id:"\ub514\ubbf8\ud130-\ubc95\uce59",children:[]},{value:"\uc790\ub8cc \uc804\ub2ec \uac1d\uccb4",id:"\uc790\ub8cc-\uc804\ub2ec-\uac1d\uccb4",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}]}],k={toc:m};function o(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"4\uc7a5-\uc8fc\uc11d"},"4\uc7a5. \uc8fc\uc11d"),(0,r.kt)("p",null,"\ubd80\uc815\ud655\ud55c \uc8fc\uc11d\uc740 \uc544\uc608 \uc5c6\ub294 \uc8fc\uc11d\ubcf4\ub2e4 \ub098\uc058\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc8fc\uc11d\uc740 \ub098\uc05c \ucf54\ub4dc\ub97c \ubcf4\uc644\ud558\uc9c0 \ubabb\ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uc5d0 \uc8fc\uc11d\uc744 \ucd94\uac00\ud558\ub294 \uc77c\ubc18\uc801\uc778 \uc774\uc720\ub294 \ucf54\ub4dc \ud488\uc9c8\uc774 \ub098\uc058\uae30 \ub54c\ubb38\uc5d0, \uc8fc\uc11d\ubcf4\ub2e4\ub294 \ucf54\ub4dc\ub97c \uc815\ub9ac\ub97c \ud574\uc57c \ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\ucf54\ub4dc\ub85c \uc758\ub3c4\ub97c \ud45c\ud604\ud558\uae30.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \uacbd\uc6b0\uc5d0\uc11c \uc8fc\uc11d\uc5d0\uc11c \ud560 \uc218 \uc788\ub294 \uc124\uba85\uc744 \ud568\uc218\ub85c \ud45c\ud604\ud574\ub3c4 \ucda9\ubd84\ud558\ub2e4")))),(0,r.kt)("h3",{id:"\uc88b\uc740-\uc8fc\uc11d"},"\uc88b\uc740 \uc8fc\uc11d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubc95\uc801\uc778 \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud68c\uc0ac\uac00 \uc815\ub9bd\ud55c \uad6c\ud604 \ud45c\uc900\uc744 \uc9c0\ucf1c\uc57c \ud558\ub294 \uacbd\uc6b0"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc815\ubcf4\ub97c \uc81c\uacf5\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\ubcf8\uc801\uc778 \uc815\ubcf4\ub97c \uc8fc\uc11d\uc73c\ub85c \uc81c\uacf5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// kk:mm:ss EEE, MMM dd, yyyy \ud615\uc2dd\uc774\ub2e4.\nPattern timeMatcher = Pattern.compile(\n    "\\\\d*:\\\\d*:\\\\d* \\\\w*, \\\\w*, \\\\d*, \\\\d*");\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc758\ub3c4\ub97c \uc124\uba85\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc758\ub3c4\ub97c \ud45c\ud604")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void testConcurrentAddWidgets() throw Exception {\n  ...\n  // \uc2a4\ub808\ub4dc\ub97c \ub300\ub7c9 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \uc5b4\ub5bb\uac8c\ub4e0 \uacbd\uc7c1 \uc870\uac74\uc744 \ub9cc\ub4e4\ub824 \uc2dc\ub3c4\ud55c\ub2e4.\n  for(int i=0; i<25000; i++){\n    WidgetBuilderThread widgetBuilderThread = new WidgetBuilderThread(widgetBuilder, text, parent, failFlag);\n    Thread thread = new Thread(widgetBuilderThread);\n    thread.start();\n  }\n  assertEquals(false failFlag.get());\n}\n")))))),(0,r.kt)("p",null,"4)  \uc758\ubbf8\ub97c \uba85\ub8cc\ud558\uac8c \ubc1d\ud788\ub294 \uc8fc\uc11d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- \ubaa8\ud638\ud55c \uc778\uc218\ub098 \ubc18\ud658 \uac12\uc758 \uc758\ubbf8\ub97c \uc77d\uae30 \uc88b\uac8c \ud45c\ud604\n\n- Ex)\n\n  ```java\n  ...\n\n  assertThat(a.compareTo(a) == 0);    // a == a\n  assertThat(a.compareTo(b) != 0);    // a != b\n  ...\n  ```\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uacb0\uacfc\ub97c \uacbd\uace0\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uacb0\uacfc\ub97c \uacbd\uace0\ud560 \ubaa9\uc801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static SimpleDateFormat makeStandardHttpDataFormat(){\n  // SimpleDateFormat\uc740 \uc2a4\ub808\ub4dc\uc5d0 \uc548\uc804\ud558\uc9c0 \ubabb\ud558\ub2e4.\n  // \ub530\ub77c\uc11c \uac01 \uc778\uc2a4\ud134\uc2a4\ub97c \ub3c5\ub9bd\uc801\uc73c\ub85c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4.\n  SimpleDateFormat df = new SimpleDateFormat("EEE, dd MMM. yyyy HH:mm:ss z");\n  df.setTimeZone(TimeZone.getTimeZone("GMT"));\n  return df;\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"TODO \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc55e\uc73c\ub85c \ud560 \uc77c\uc744 \uc124\uba85\ud560 \ub54c \uad1c\ucc2e\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO-MdM \ud604\uc7ac \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4\n// \uccb4\ud06c\uc544\uc6c3 \ubaa8\ub378\uc744 \ub3c4\uc785\ud558\uba74 \ud568\uc218\uac00 \ud544\uc694 \uc5c6\ub2e4.\nprotected VersionInfo makeVersion() throws Exception{\n  return null;\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc911\uc694\uc131\uc744 \uac15\uc870\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc911\uc694\uc131\uc744 \uac15\uc870\ud558\uae30 \uc704\ud574 \uc8fc\uc11d\uc744 \uc0ac\uc6a9\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String listItemContent = match.group(3).trim();\n// \uc5ec\uae30\uc11c trim\uc740 \uc815\ub9d0 \uc911\uc694\ud558\ub2e4. trim \ud568\uc218\ub294 \ubb38\uc790\uc5f4\uc5d0\uc11c \uc2dc\uc791 \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.\n// \ubb38\uc790\uc5f4\uc5d0 \uc2dc\uc791 \uacf5\ubc31\uc774 \uc788\uc73c\uba74 \ub2e4\ub978 \ubb38\uc790\uc5f4\ub85c \uc778\uc2dd\ub418\uae30 \ub54c\ubb38\uc774\ub2e4.\nnew ListItemWidget(this, listItemContent, this.level + 1);\nreturn buildList(text.substring(match.end()));\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uacf5\uac1c API\uc5d0\uc11c Javadocs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc124\uba85\uc774 \uc798 \ub41c \uacf5\uac1c API\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \ubc29\ubc95.")))),(0,r.kt)("h3",{id:"\ub098\uc05c-\uc8fc\uc11d"},"\ub098\uc05c \uc8fc\uc11d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc8fc\uc808\uac70\ub9ac\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uac19\uc740 \uc774\uc57c\uae30\ub97c \uc911\ubcf5\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uc624\ud574\ud560 \uc5ec\uc9c0\uac00 \uc788\ub294 \uc8fc\uc2dd"),(0,r.kt)("li",{parentName:"ol"},"\uc758\ubb34\uc801\uc73c\ub85c \ub2e4\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uc774\ub825\uc744 \uae30\ub85d\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uc788\uc73c\ub098 \ub9c8\ub098 \ud55c \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\ubb34\uc11c\uc6b4 \uc7a1\uc74c : \uc758\ubbf8 \uc5c6\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\ud568\uc218\ub098 \ubcc0\uc218\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4\uba74 \uc8fc\uc11d\uc744 \ub2ec\uc9c0 \ub9d0\uae30."),(0,r.kt)("li",{parentName:"ol"},"\uc704\uce58\ub97c \ud45c\uc2dc\ud558\ub294 \uc8fc\uc11d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"// Action//////////////")),(0,r.kt)("li",{parentName:"ul"},"\ubc18\ub4dc\uc2dc \ud544\uc694\ud560 \ub54c\ub9cc, \uc544\uc8fc \ub4dc\ubb3c\uac8c \uc0ac\uc6a9\ud558\uae30"))),(0,r.kt)("li",{parentName:"ol"},"\ub2eb\ub294 \uad04\ud638\uc5d0 \ub2e4\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uacf5\ub85c\ub97c \ub3cc\ub9ac\uac70\ub098 \uc800\uc790\ub97c \ud45c\uc2dc\ud558\ub294 \uc8fc\uc11d"),(0,r.kt)("li",{parentName:"ol"},"\uc8fc\uc11d\uc73c\ub85c \ucc98\ub9ac\ud55c \ucf54\ub4dc"),(0,r.kt)("li",{parentName:"ol"},"HTML \uc8fc\uc11d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub108\ubb34 \uc9c0\uc800\ubd84\ud558\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\uc804\uc5ed \uc815\ubcf4"),(0,r.kt)("li",{parentName:"ol"},"\ub108\ubb34 \ub9ce\uc740 \uc815\ubcf4"),(0,r.kt)("li",{parentName:"ol"},"\ubaa8\ud638\ud55c \uad00\uacc4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\uc11d\uacfc \uc8fc\uc11d\uc774 \uc124\uba85\ud558\ub294 \ucf54\ub4dc\ub294 \ub458 \uc0ac\uc774 \uad00\uacc4\uac00 \uba85\ubc31\ud574\uc57c \ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\ud568\uc218 \ud5e4\ub354",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc9e7\uc740 \ud568\uc218\ub294 \uae34 \uc124\uba85\uc774 \ud544\uc694 \uc5c6\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\ube44\uacf5\uac1c \ucf54\ub4dc\uc5d0\uc11c Javadocs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uacf5\uac1c\ud558\uc9c0 \uc54a\uc744 \ucf54\ub4dc\ub77c\uba74 Javadocs\ub294 \uc4f8\ubaa8\uac00 \uc5c6\uc74c.")))),(0,r.kt)("h2",{id:"5\uc7a5-\ud615\uc2dd-\ub9de\ucd94\uae30"},"5\uc7a5. \ud615\uc2dd \ub9de\ucd94\uae30"),(0,r.kt)("p",null,"\ud504\ub85c\uadf8\ub798\uba38\ub77c\uba74 \ud615\uc2dd\uc744 \uae54\ub054\ud558\uac8c \ub9de\ucdb0 \ucf54\ub4dc\ub97c \uc9dc\uc57c\ud558\uace0, \ucf54\ub4dc \ud615\uc2dd\uc744 \ub9de\ucd94\uae30 \uc704\ud55c \uac04\ub2e8\ud55c \uaddc\uce59\uc744 \uc815\ud558\uace0 \uc774\ub97c \uc218\ud589\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("h3",{id:"\ud615\uc2dd\uc744-\ub9de\ucd94\ub294-\ubaa9\uc801"},"\ud615\uc2dd\uc744 \ub9de\ucd94\ub294 \ubaa9\uc801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ud615\uc2dd\uc740 \uc911\uc694\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc624\ub298 \uad6c\ud604\ud55c \ucf54\ub4dc\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \ubc14\ub014 \ud655\ub960\uc774 \ub192\uc73c\uba70, \uad6c\ud604\ud55c \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\uc740 \uc774\ud6c4 \ubc14\ub014 \ucf54\ub4dc\uc758 \ud488\uc9c8\uc5d0 \uc9c0\ub300\ud55c \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4.")),(0,r.kt)("h3",{id:"\uc801\uc808\ud55c-\ud589-\uae38\uc774\ub97c-\uc720\uc9c0\ud558\uae30-\uc138\ub85c-\ud615\uc2dd"},"\uc801\uc808\ud55c \ud589 \uae38\uc774\ub97c \uc720\uc9c0\ud558\uae30 (\uc138\ub85c \ud615\uc2dd)"),(0,r.kt)("p",null,"\uc0ac\uc2e4 200\uc904 \uc815\ub3c4\uc778 \ud30c\uc77c\ub85c\ub3c4 \ucee4\ub2e4\ub780 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc2e0\ubb38 \uae30\uc0ac\ucc98\ub7fc \uc791\uc131\ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc88b\uc740 \uc2e0\ubb38 \uae30\uc0ac\ub294 \ucd5c\uc0c1\ub2e8\uc5d0\uc11c \uae30\uc0ac\ub97c \uba87 \ub9c8\ub514\ub85c \uc694\uc57d\ud558\ub294 \ud45c\uc81c\uac00 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc2a4\ud30c\uc77c\ub3c4 \uc774\ub984\uc740 \uac04\ub2e8\ud558\uba74\uc11c \uc124\uba85\uc774 \uac00\ub2a5\ud558\uac8c \uc9d3\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2e0\ubb38\uc774 \ub2e4\uc591\ud55c \uae30\uc0ac\ub85c \uc774\ub904\uc9c0\ub294 \uac83\ucc98\ub7fc, \uc18c\uc2a4 \ucf54\ub4dc\ub3c4 \uadf8\ub807\uac8c \uad6c\uc131\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uac1c\ub150\uc740 \ube48 \ud589\uc73c\ub85c \ubd84\ub9ac\ud558\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \uc88b\uc740 \ucf00\uc774\uc2a4\nprivate String function1(){\n  ...\n};\n\nprivate String function2(){\n  ...\n};\n\n// \ub098\uc05c \ucf00\uc774\uc2a4\nprivate String function1(){\n  ...\n};\nprivate String function2(){\n  ...\n};\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc138\ub85c \ubc00\uc9d1\ub3c4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc904 \ubc14\uafc8\uc774 \uac1c\ub150\uc744 \ubd84\ub9ac\ud55c\ub2e4\uba74, \uc138\ub85c \ubc00\uc9d1\ub3c4\ub294 \uc5f0\uad00\uc131\uc744 \uc758\ubbf8"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc218\uc9c1\uac70\ub9ac"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc11c\ub85c \ubc00\uc9d1\ud55c \uac1c\ub150\uc740 \uc138\ub85c\ub85c \uac00\uae4c\uc774 \ub454\ub2e4. \ub2e8, \ub2e4\ub978 \ud30c\uc77c\uc5d0 \uc18d\ud55c\ub2e4\uba74 \uaddc\uce59\uc740 \ud1b5\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud0c0\ub2f9\ud55c \uadfc\uac70\uac00 \uc5c6\ub2e4\uba74 \uc11c\ub85c \ubc00\uc811\ud55c \uac1c\ub150\uc740 \ud55c \ud30c\uc77c\uc5d0 \uc18d\ud574\uc57c \ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ubcc0\uc218 \uc120\uc5b8")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218\ub294 \uc0ac\uc6a9\ud558\ub294 \uc704\uce58\uc5d0 \ucd5c\ub300\ud55c \uac00\uae4c\uc774 \uc120\uc5b8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218\ub294 \ud074\ub798\uc2a4 \ub9e8 \ucc98\uc74c\uc5d0 \uc120\uc5b8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc885\uc18d \ud568\uc218")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud55c \ud568\uc218\uac00 \ub2e4\ub978 \ud568\uc218\ub97c \ud638\ucd9c\ud55c\ub2e4\uba74, \ub450 \ud568\uc218\ub294 \uc138\ub85c\ub85c \uac00\uae4c\uc774 \ubc30\uce58\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uac1c\ub150\uc801 \uc720\uc0ac\uc131")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac1c\ub150\uc801\uc778 \uce5c\ud654\ub3c4\uac00 \ub192\uc744\uc218\ub85d \ucf54\ub4dc\ub97c \uac00\uae4c\uc774 \ubc30\uce58\ud55c\ub2e4."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc138\ub85c \uc21c\uc11c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ud568\uc218 \ud638\ucd9c \uc885\uc18d\uc131\uc740 \uc544\ub798 \ubc29\ud5a5\uc73c\ub85c \uc720\uc9c0")))),(0,r.kt)("h3",{id:"\uac00\ub85c-\ud615\uc2dd-\ub9de\ucd94\uae30"},"\uac00\ub85c \ud615\uc2dd \ub9de\ucd94\uae30"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uac00\ub85c\uae38\uc774\ub294 45\uc790 \uadfc\ucc98\uc774\ub2e4. (\uac00\uae09\uc801\uc73c\ub85c\ub294 120\uc790 \uc815\ub3c4\ub97c \uc81c\ud55c)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uac00\ub85c \uacf5\ubc31\uacfc \ubc00\uc9d1\ub3c4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac00\ub85c \uacf5\ubc31\uc744 \uc0ac\uc6a9\ud574 \ubc00\uc9d1\ud55c \uac1c\ub150\uacfc \ub290\uc2a8\ud55c \uac1c\ub150\uc744 \ud45c\ud604")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private void measureLine(String line){\n  lineCount++;\n  int lineSize = line.length();    // \ub290\uc2a8\ud55c \uac1c\ub150\n  totalhars += lineSize;\n  lineWidthHistogram.addLine(lineSize, lineCount);\n  recordWidestLine(lineSize);        // \ubc00\uc9d1\ud55c \uac1c\ub150\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uac00\ub85c \uc815\ub82c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ucc98\ub7fc \uc120\uc5b8\ubd80\uac00 \uae38\ub2e4\uba74 \ud074\ub798\uc2a4\ub97c \ucabc\uac1c\uc57c \ud55c\ub2e4\ub294 \uc758\ubbf8"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub4e4\uc5ec \uc4f0\uae30"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"scope\ub85c \uc774\ub904\uc9c4 \uacc4\uce35\uc744 \ubcf4\uc5ec\uc900\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"\ub4e4\uc5ec \uc4f0\uae30 \ubb34\uc2dc\ud558\uae30"\ub97c')," \ud53c\ud558\uae30"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uac00\uc9dc \ubc94\uc704"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc138\ubbf8\ucf5c\ub860\uc740 \uc0c8 \ud589\uc5d0\ub2e4 \uc81c\ub300\ub85c \ub4e4\uc5ec \uc368\uc11c \ub123\uc5b4\uc900\ub2e4.")))),(0,r.kt)("h3",{id:"\ud300-\uaddc\uce59"},"\ud300 \uaddc\uce59"),(0,r.kt)("p",null,"\uc88b\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc740 \uc77d\uae30 \uc26c\uc6b4 \ubb38\uc11c\ub85c \uc774\ub904 \uc800 \uc57c\ud55c\ub2e4."),(0,r.kt)("h2",{id:"6\uc7a5-\uac1d\uccb4\uc640-\uc790\ub8cc-\uad6c\uc870"},"6\uc7a5. \uac1d\uccb4\uc640 \uc790\ub8cc \uad6c\uc870"),(0,r.kt)("h3",{id:"\uc790\ub8cc-\ucd94\uc0c1\ud654"},"\uc790\ub8cc \ucd94\uc0c1\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\ub8cc\ub97c \uc138\uc138\ud558\uac8c \uacf5\uac1c\ud558\uae30\ubcf4\ub2e4\ub294 \ucd94\uc131\uc801\uc778 \uac1c\ub150\uc73c\ub85c \ud45c\ud604\ud558\ub294 \ud3b8\uc774 \uc88b\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc544\ubb34 \uc0dd\uac01 \uc5c6\uc774 GET/SET\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc740 \uc88b\uc9c0 \uc54a\ub2e4.")),(0,r.kt)("h3",{id:"\uc790\ub8cc\uac1d\uccb4-\ube44\ub300\uce6d"},"\uc790\ub8cc/\uac1d\uccb4 \ube44\ub300\uce6d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac83\uc774 \uac1d\uccb4\uac00 \uc88b\uc740 \uac83\uc740 \uc544\ub2c8\uace0, \ub2e8\uc21c\ud55c \uc790\ub8cc \uad6c\uc870\uc640 \uc808\ucc28\uc801\uc778 \ucf54\ub4dc\uac00 \uc88b\uc744 \ub54c\ub3c4 \uc788\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc9c0\ud5a5 \ucf54\ub4dc\uc5d0\uc11c \uc5b4\ub824\uc6b4 \ubcc0\uacbd\uc740 \uc808\ucc28\uc801\uc778 \ucf54\ub4dc\uc5d0\uc11c \uc27d\uace0, \uc808\ucc28\uc801\uc778 \ucf54\ub4dc\uc5d0\uc11c \uc5b4\ub824\uc6b4 \ubcc0\uacbd\uc740 \uac1d\uccb4 \uc9c0\ud5a5 \ucf54\ub4dc\uc5d0\uc11c \uc26c\uc6c0.")),(0,r.kt)("h3",{id:"\ub514\ubbf8\ud130-\ubc95\uce59"},"\ub514\ubbf8\ud130 \ubc95\uce59"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ubaa8\ub4c8\uc740 \uc790\uc2e0\uc774 \uc870\uc791\ud558\ub294 \uac1d\uccb4\uc758 \uc18d\uc0ac\uc815\uc744 \ubab0\ub77c\uc57c \ud55c\ub2e4\ub294 \ubc95\uce59",(0,r.kt)("br",{parentName:"p"}),"\n","\uc989, \uac1d\uccb4\uc758 \ub0b4\ubd80\ub97c \ubab0\ub77c\uc57c \ud55c\ub2e4\ub294 \ubc95\uce59")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uae30\ucc28 \ucda9\ub3cc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \uae30\ucc28 \ucda9\ub3cc \ucf54\ub4dc\nfinal String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();\n\n// \uc774\ub97c \ubc29\uc9c0\ud558\ub294 \ucf54\ub4dc\nOptions opts = ctxt.getOptions();\nFile scratchDir = opts.getScratchDir();\nfinal String outputDir = scratchDir.getAbsolutePath();\n\n// \ub2e8, \uc544\ub798\uc758 \ucf54\ub4dc\ub294 \ub514\ubbf8\ud130 \ubc95\uce59\uacfc \uc0c1\uad00 \uc5c6\uc74c.\nfinal String outputDir = ctxt.options.scratchDir.absolutePath;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ub8cc \uad6c\uc870\ub294 \ubb34\uc870\uac74 \ud568\uc218 \uc5c6\uc774 \uacf5\uac1c \ubcc0\uc218\ub9cc \ud3ec\ud568\ud55c\ub2e4\uba74, \ubb38\uc81c\ub294 \uac04\ub2e8\ud558\uaca0\uc9c0\ub9cc",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7f4 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc694\uad6c\ud558\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc640 \ud45c\uc900(ex. \ube48)\uc774 \uc874\uc7ac\ud55c\ub2e4.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc7a1\uc885 \uad6c\uc870"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc7a1\uc885 \uad6c\uc870\ub294 \uc808\ucc28\uc801\uacfc \uac1d\uccb4\uc801\uc758 \ub2e8\uc810\ub9cc \ubaa8\uc544\ub193\uc740 \uad6c\uc870\uc774\uae30 \ub54c\ubb38\uc5d0, \ud53c\ud558\ub294 \ud3b8\uc774 \uc88b\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uad6c\uc870\uccb4 \uac10\ucd94\uae30"))),(0,r.kt)("h3",{id:"\uc790\ub8cc-\uc804\ub2ec-\uac1d\uccb4"},"\uc790\ub8cc \uc804\ub2ec \uac1d\uccb4"),(0,r.kt)("p",null,"DTO\ub098 \ube48 \uad6c\uc870 \ub4f1\uc744 \uc0ac\uc6a9\ud55c\ub2e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud65c\uc131 \ub808\ucf54\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DTO\uc758 \ud2b9\uc218\ud55c \ud615\ud0dc, \uc790\ub8cc \uad6c\uc870\ub85c \ucde8\uae09\ud558\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ube44\uc988\ub2c8\uc2a4 \uaddc\uce59\uc740 \ub123\ub294 \uac83\uc774 \uc544\ub2c8\uace0, \ube44\uc988\ub2c8\uc2a4 \uaddc\uce59\uc744 \ub123\uace0 \uc2f6\uc73c\uba74 \ub0b4\ubd80 \uc790\ub8cc\ub97c \uc228\uae30\ub294 \uac1d\uccb4\ub97c \ub530\ub85c \uc0dd\uc131\ud55c\ub2e4.")))),(0,r.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub294 \ub3d9\uc791\uc744 \uacf5\uac1c\ud558\uace0 \uc790\ub8cc\ub97c \uc228\uae34\ub2e4. \uadf8\ub7ec\ub098, \uc790\ub8cc \uad6c\uc870\ub294 \ubcc4\ub2e4\ub978 \ub3c4\uc791 \uc5c6\uc774 \uc790\ub8cc\ub97c \ub178\ucd9c\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud560 \ub54c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc790\ub8cc \ud0c0\uc785\uc744 \ucd94\uac00\ud558\ub294 \uc720\uc5f0\uc131\uc774 \ud544\uc694\ud558\uba74 \uac1d\uccb4\ub97c \uc120\ud0dd."),(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\ub294 \uc720\uc5f0\uc131\uc774 \ud544\uc694\ud558\uba74 \uc790\ub8cc \uad6c\uc870\uc640 \uc808\ucc28\uc801\uc778 \ucf54\ub4dc\uac00 \ub354 \uc801\ud569\ud558\ub2e4.")))))}o.isMDXComponent=!0}}]);