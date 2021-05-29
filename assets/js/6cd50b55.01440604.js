(self.webpackChunktil=self.webpackChunktil||[]).push([[4830],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9702:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:4},s={unversionedId:"java/effective-java/ch4",id:"java/effective-java/ch4",isDocsHomePage:!1,title:"\uc81c\ub124\ub9ad",description:"Java 5\uc774\ud6c4\ub85c, \uc81c\ub124\ub9ad\uc740 \uc5b8\uc5b4\uc758 \uc77c\ubd80\uc600\uc2b5\ub2c8\ub2e4. \uc81c\ub124\ub9ad\uc744 \uc0ac\uc6a9\ud558\uba74 \uac01 \uceec\ub809\uc158\uc5d0\uc11c \ud5c8\uc6a9\ub418\ub294 \uac1c\uccb4 \uc720\ud615\uc744 \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uc54c\ub9ac\uace0, \uc790\ub3d9\uc73c\ub85c \uce90\uc2a4\ud2b8\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4. \ub300\ubd80\ubd84 \ud504\ub85c\uadf8\ub7a8\uc774 \ub354 \uc548\uc804\ud558\uace0 \uba85\ud655\ud558\uc9c0\ub9cc, collections\uc5d0\ub9cc \ud55c\uc815\uc801\uc774\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc2e0\uacbd\uc744 \uc368\uc57c\ud558\ub294 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/java/effective-java/ch4.md",sourceDirName:"java/effective-java",slug:"/java/effective-java/ch4",permalink:"/til/docs/java/effective-java/ch4",editUrl:"https://github.com/Azderica/til/edit/main/docs/java/effective-java/ch4.md",version:"current",lastUpdatedAt:1622179431,formattedLastUpdatedAt:"5/28/2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud074\ub798\uc2a4\uc640 \uc778\ud130\ud398\uc774\uc2a4",permalink:"/til/docs/java/effective-java/ch3"},next:{title:"Enums \uc640 Annotation",permalink:"/til/docs/java/effective-java/ch5"}},p=[{value:"Item 26. Raw \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4.",id:"item-26-raw-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uba74-\uc548\ub429\ub2c8\ub2e4",children:[]},{value:"Item 27. \ud655\uc778\ub418\uc9c0 \uc54a\uc740 \uacbd\uace0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.",id:"item-27-\ud655\uc778\ub418\uc9c0-\uc54a\uc740-\uacbd\uace0\ub97c-\uc81c\uac70\ud569\ub2c8\ub2e4",children:[]},{value:"Item 28. Arrays \ubcf4\ub2e4\ub294 List\ub97c \uc120\ud638\ud569\ub2c8\ub2e4.",id:"item-28-arrays-\ubcf4\ub2e4\ub294-list\ub97c-\uc120\ud638\ud569\ub2c8\ub2e4",children:[]},{value:"Item 29. Generic types\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",id:"item-29-generic-types\uc744-\uc120\ud638\ud569\ub2c8\ub2e4",children:[]},{value:"Item 30. Generic methods\ub97c \uc120\ud638\ud569\ub2c8\ub2e4.",id:"item-30-generic-methods\ub97c-\uc120\ud638\ud569\ub2c8\ub2e4",children:[]},{value:"Item 31. API \uc720\uc5f0\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c, \uc81c\ud55c\ub41c Wildcards\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",id:"item-31-api-\uc720\uc5f0\uc131\uc744-\ud5a5\uc0c1\uc2dc\ud0a4\uae30-\uc704\ud574\uc11c-\uc81c\ud55c\ub41c-wildcards\ub97c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4",children:[]},{value:"Item 32. \uc81c\ub124\ub9ad\uacfc \uac00\ubcc0\uc778\uc218\ub97c \uc2e0\uc911\ud558\uac8c \ud569\uce69\ub2c8\ub2e4.",id:"item-32-\uc81c\ub124\ub9ad\uacfc-\uac00\ubcc0\uc778\uc218\ub97c-\uc2e0\uc911\ud558\uac8c-\ud569\uce69\ub2c8\ub2e4",children:[]},{value:"Item 33. Typesafe\ud55c \ud63c\uc131 \ucee8\ud14c\uc774\ub108\ub97c \uace0\ub824\ud569\ub2c8\ub2e4.",id:"item-33-typesafe\ud55c-\ud63c\uc131-\ucee8\ud14c\uc774\ub108\ub97c-\uace0\ub824\ud569\ub2c8\ub2e4",children:[]}],o={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Java 5\uc774\ud6c4\ub85c, \uc81c\ub124\ub9ad\uc740 \uc5b8\uc5b4\uc758 \uc77c\ubd80\uc600\uc2b5\ub2c8\ub2e4. \uc81c\ub124\ub9ad\uc744 \uc0ac\uc6a9\ud558\uba74 \uac01 \uceec\ub809\uc158\uc5d0\uc11c \ud5c8\uc6a9\ub418\ub294 \uac1c\uccb4 \uc720\ud615\uc744 \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uc54c\ub9ac\uace0, \uc790\ub3d9\uc73c\ub85c \uce90\uc2a4\ud2b8\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4. \ub300\ubd80\ubd84 \ud504\ub85c\uadf8\ub7a8\uc774 \ub354 \uc548\uc804\ud558\uace0 \uba85\ud655\ud558\uc9c0\ub9cc, collections\uc5d0\ub9cc \ud55c\uc815\uc801\uc774\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc2e0\uacbd\uc744 \uc368\uc57c\ud558\ub294 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"item-26-raw-\ud0c0\uc785\uc744-\uc0ac\uc6a9\ud558\uba74-\uc548\ub429\ub2c8\ub2e4"},"Item 26. Raw \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"Raw \ud0c0\uc785\uc744 \uc798\ubabb \uc0ac\uc6a9\ud55c \ucf54\ub4dc\uc640 \uc798\ub41c \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Raw collection type\nprivate final Collection stamps = ...;\n\n// Parameterized collection type - typesafe\nprivate final Collection<Stamp> stamps = ...;\n")),(0,l.kt)("p",null,"Raw \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74, \uc81c\ub124\ub9ad\uc758 \uc548\uc804\uc131\uacfc \ud45c\ud604\ub825 \uc774\uc810\uc744 \uc783\uac8c \ub418\ubbc0\ub85c \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \uc81c\ud55c\ub418\uc9c0 \uc54a\uc740 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\uc744 \uc0ac\uc6a9 - typesafe\ud558\uace0, \uc720\uc5f0\ud569\ub2c8\ub2e4.\nstatic int numElementsInCommon (Set <?> s1, Set <?> s2) {...}\n")),(0,l.kt)("p",null,"\ud074\ub798\uc2a4 \ub9ac\ud130\ub7f4\uc5d0\ub294 \uc6d0\uc2dc \uc720\ud615\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \ub300\ud45c\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"instanceof")," \uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// raw type\uc758 \ud569\ubc95\uc801 \uc0ac\uc6a9 - instanceof \uc5f0\uc0b0\uc790\nif (o instanceof Set) { // Raw type\n  Set<?> s = (Set<?>) o;    // Wildcard type\n\n  ...\n}\n")),(0,l.kt)("p",null,"\uc989, \uc815\ub9ac\ud558\uba74 raw type\uc744 \uc0ac\uc6a9\ud558\uba74 \ub7f0\ud0c0\uc784\uc5d0 \uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc911\uc694\ud558\uba70, \uc81c\ub124\ub9ad \ub3c4\uc785 \uc774\uc804\uc758 \ub808\uac70\uc2dc \ucf54\ub4dc\uc640\uc758 \ud638\ud658\uc131 \ubc0f \uc0c1\ud638 \uc6b4\uc6a9\uc131\uc744 \uc704\ud574\uc11c\ub9cc \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-27-\ud655\uc778\ub418\uc9c0-\uc54a\uc740-\uacbd\uace0\ub97c-\uc81c\uac70\ud569\ub2c8\ub2e4"},"Item 27. \ud655\uc778\ub418\uc9c0 \uc54a\uc740 \uacbd\uace0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc81c\ub124\ub9ad\uc73c\ub85c \ud504\ub85c\uadf8\ub798\ubc0d\ud560 \ub54c \ud655\uc778\ub418\uc9c0 \uc54a\uc740 \uce90\uc2a4\ud2b8 \uacbd\uace0, \ud655\uc778\ub418\uc9c0 \uc54a\uc740 \uba54\uc11c\ub4dc \ud638\ucd9c \uacbd\uace0, \ud655\uc778\ub418\uc9c0\uc54a\uc740 \ub9e4\uac1c \ubcc0\uc218\uc778 vararg \uc720\ud615 \uacbd\uace0 \ubc0f \ub2e4\uc591\ud55c \ucef4\ud30c\uc77c\ub7ec \uacbd\uace0\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uacbd\uc6b0\uc5d0, ",(0,l.kt)("strong",{parentName:"p"},"\ud655\uc778\ub418\uc9c0 \uc54a\uc740 \ubaa8\ub4e0 \uacbd\uace0\ub97c \uc81c\uac70\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc77c\ubd80 \uacbd\uace0\ub97c \uc81c\uac70\ud560 \uc218\ub294 \uc5c6\uc9c0\ub9cc, \uacbd\uace0\ub97c \uc720\ubc1c\ud55c \ucf54\ub4dc\uac00 typesafe\ud558\ub2e4\ub294 \uac83\uc744 \uc99d\uba85\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},'@SuppressWarnings("unchecked")')," \uc8fc\uc11d\uc73c\ub85c \uacbd\uace0\ub97c \uc5b5\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\ub2e4\ub9cc, \uc774\ub294 \uac00\ub2a5\ud55c \uc791\uc740 \ubc94\uc704\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// @SuppressWarnings\uc758 \ubc94\uc704\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc9c0\uc5ed \ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.\npublic <T> T[] toArray(T[] a) {\n  if (a.length < size) {\n    // \uc774 \uce90\uc2a4\ud2b8\ub294 \uc6b0\ub9ac\uac00 \ub9cc\ub4e4\uace0\uc788\ub294 \ubc30\uc5f4\uc774\uae30 \ub54c\ubb38\uc5d0 \uc815\ud655\ud569\ub2c8\ub2e4.\n    // \uc804\ub2ec \ub41c \uac83\uacfc \ub3d9\uc77c\ud55c \uc720\ud615, \uc989 T []\uc785\ub2c8\ub2e4.\n\n    @SuppressWarnings("unchecked") T[] result =\n      (T[]) Arrays.copyOf(elements, size, a.getClass());\n    return result;\n  }\n\n  System.arraycopy(elements, 0, a, 0, size);\n  if (a.length > size)\n    a[size] = null;\n  return a;\n}\n')),(0,l.kt)("p",null,"\ucd94\uac00\uc801\uc73c\ub85c, ",(0,l.kt)("inlineCode",{parentName:"p"},'@SuppressWarnings("unchecked")')," \uc8fc\uc11d\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub9c8\ub2e4, \uc548\uc804\ud55c \uc774\uc720\ub97c \uc124\uba85\ud558\ub294 \uc8fc\uc11d\uc744 \ucd94\uac00\ud558\ub294 \uac83\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-28-arrays-\ubcf4\ub2e4\ub294-list\ub97c-\uc120\ud638\ud569\ub2c8\ub2e4"},"Item 28. Arrays \ubcf4\ub2e4\ub294 List\ub97c \uc120\ud638\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Array\ub294 \uc81c\ub124\ub9ad \uc720\ud615\uacfc \ub450\uac00\uc9c0 \uc911\uc694\ud55c \uce21\uba74\uc5d0\uc11c \ub2e4\ub985\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\ubc30\uc5f4\uc740 covariant(\ud568\uaed8 \ubcc0\ud560 \uc218 \uc788\uace0), \uc81c\ub124\ub9ad\uc740 erasure(\ubd88\ubcc0)\uc785\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Runtime\uc5d0 \uc2e4\ud328\ud568.\nObject[] objectArray = new Long[1];\nobjectArray[0] = "I don\'t fit in";  // ArrayStoreException \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\n// Compile\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nList<Object> ol = new ArrayList<Long> (); // \ud638\ud658\ub418\uc9c0 \uc54a\uc74c\nol.add("I don\'t fit in");\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"\ubc30\uc5f4\uc740 reified")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \ubc30\uc5f4 \uc0dd\uc131\uc774 \ubd88\uac00\ub2a5\ud558\uba70 \ucef4\ud30c\uc77c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nList<String>[] stringLists = new List<String>[1];\nList<Integer> intList = List.of(42);\nObject[] objects = stringLists;\nobjects[0] = intList;\nString s = stringLists[0].get(0);\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-29-generic-types\uc744-\uc120\ud638\ud569\ub2c8\ub2e4"},"Item 29. Generic types\uc744 \uc120\ud638\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc120\uc5b8\uc744 \ub9e4\uac1c \ubcc0\uc218\ud654\ud558\uace0 JDK\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc81c\ub124\ub9ad \uc720\ud615 \ubc0f \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc5b4\ub835\uc9c0 \uc54a\uc73c\uba70, \uadf8\ub9cc\ud55c \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \uac1d\uccb4 \uae30\ubc18 \uceec\ub809\uc158-\uc81c\ub124\ub9ad\uc758 \uc8fc\uc694 \ud6c4\ubcf4\npublic class Stack {\n  private E[] elements;\n  private int size = 0;\n  private static final int DEFAULT_INITIAL_CAPACITY = 16;\n\n  // \uc694\uc18c \ubc30\uc5f4\uc5d0\ub294 push (E)\uc758 E \uc778\uc2a4\ud134\uc2a4 \ub9cc \ud3ec\ud568\ub429\ub2c8\ub2e4.\n  // \uc774\uac83\uc740 \ud0c0\uc785 \uc548\uc804\uc131\uc744 \ubcf4\uc7a5\ud558\uae30\uc5d0 \ucda9\ubd84\ud558\uc9c0\ub9cc\n  // \ubc30\uc5f4 \uc758 \ub7f0\ud0c0\uc784 \ud0c0\uc785\uc740 E []\uac00 \uc544\ub2d9\ub2c8\ub2e4; \ud56d\uc0c1 Object []\uc785\ub2c8\ub2e4!\n  @SuppressWarnings ( "unchecked")\n  public Stack() {\n    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];\n  }\n\n  public void push(E e) {\n    ensureCapacity();\n    elements[size++] = e;\n  }\n\n  public E pop() {\n    if (size == 0)\n      throw new EmptyStackException();\n\n    // \uc77c\ubc18 \uc2a4\ud0dd\uc744 \uc2e4\ud589\ud558\ub294 \uc791\uc740 \ud504\ub85c\uadf8\ub7a8\n    @SuppressWarnings("unchecked")\n    E result = elements[--size];\n    elements[size] = null; // Eliminate obsolete reference\n    return result;\n  }\n\n  public boolean isEmpty() {\n    return size == 0;\n  }\n\n  private void ensureCapacity() {\n    if (elements.length == size)\n      elements = Arrays.copyOf(elements, 2 * size + 1);\n  }\n}\n')),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \uacbd\uace0 \ucc3d\uc744 \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-30-generic-methods\ub97c-\uc120\ud638\ud569\ub2c8\ub2e4"},"Item 30. Generic methods\ub97c \uc120\ud638\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud074\ub798\uc2a4\uac00 \uc81c\ub124\ub9ad\uc77c \uc218 \uc788\ub294 \uac83\ucc98\ub7fc \uba54\uc18c\ub4dc\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Uses raw types - \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\npublic static Set union(Set s1, Set s2) {\n  Set result = new HashSet(s1);\n  result.addAll(s2);\n  return result;\n}\n\n// Generic method\npublic static <E> Set<E> union(Set<E> s1, Set<E> s2) {\n  Set<E> result = new HashSet<>(s1);\n  result.addAll(s2);\n  return result;\n}\n")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c generic method\ub97c \uc0ac\uc6a9\ud558\ub294 \uac04\ub2e8\ud55c \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  Set<String> guys = Set.of("Tom", "Dick", "Harry");\n  Set<String> stooges = Set.of("Larry", "Moe", "Curly");\n  Set<String> aflCio = union(guys, stooges);\n  System.out.println(aflCio);\n}\n')),(0,l.kt)("p",null,"\uc2dd\ubcc4\ud568 \ud6c4 \ub514\uc2a4\ud39c\uc11c\ub97c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \uc77c\ubc18 \uc2f1\uae00 \ud1a4 \ud329\ud1a0\ub9ac \ud328\ud134\nprivate static UnaryOperator <Object> IDENTITY_FN = (t)-> t;\n\n@SuppressWarnings ( "unchecked")\npublic static <T> UnaryOperator <T> identityFunction () {\n  return (UnaryOperator <T>) IDENTITY_FN;\n}\n')),(0,l.kt)("p",null,"\uceec\ub809\uc158\uc758 \ucd5c\ub300 \uac12\uc744 \uacc4\uc0b0\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \uceec\ub809\uc158\uc5d0\uc11c \ucd5c\ub300 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc7ac\uadc0 \uc720\ud615 \ubc14\uc778\ub529\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\npublic static <E extends Comparable<E>> E max(Collection<E> c) {\n  if (c.isEmpty())\n    throw new IllegalArgumentException("Empty collection");\n\n  E result = null;\n  for (E e : c)\n    if (result == null || e.compareTo(result) > 0)\n      result = Objects.requireNonNull(e);\n  return result;\n}\n')),(0,l.kt)("p",null,"\uc704\uc758 \ub0b4\uc6a9\uc744 \uc694\uc57d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"generic type\uacfc \uac19\uc740 generic methods\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc785\ub825 \ub9e4\uac1c \ubcc0\uc218\uc5d0 \uba85\uc2dc\uc801 \uce90\uc2a4\ud2b8\ub97c \uc785\ub825\ud558\uace0 \uac12\uc744 \ubc18\ud658\ud574\uc57c\ud558\ub294 \uba54\uc11c\ub4dc\ubcf4\ub2e4 \uc548\uc804\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 \uce90\uc2a4\ud2b8 \uc5c6\uc774 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc57c\ud569\ub2c8\ub2e4. (generic)"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-31-api-\uc720\uc5f0\uc131\uc744-\ud5a5\uc0c1\uc2dc\ud0a4\uae30-\uc704\ud574\uc11c-\uc81c\ud55c\ub41c-wildcards\ub97c-\uc0ac\uc6a9\ud569\ub2c8\ub2e4"},"Item 31. API \uc720\uc5f0\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c, \uc81c\ud55c\ub41c Wildcards\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uace0\uc815\ub41c \uc720\ud615\ubcf4\ub2e4\ub294 \ub354 \ub9ce\uc740 \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc544\ub798\uc758 \ucf54\ub4dc\ub294 \uc774\ub7ec\ud55c \uc720\uc5f0\uc131\uc744 \ud45c\ud604\ud55c public API\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Stack<E> {\n  public Stack();\n  public void push(E e);\n  public E pop();\n  public boolean isEmpty();\n}\n")),(0,l.kt)("p",null,"\uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// E producer \uc5ed\ud560\uc744 \uc218\ud589\ud558\ub294 \ub9e4\uac1c \ubcc0\uc218\uc758 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\npublic void pushAll(Iterable<? extends E> src) {\n  for (E e : src)\n    push(e);\n}\n\n// E consumer \uc5ed\ud560\uc744\ud558\ub294 \ub9e4\uac1c \ubcc0\uc218\uc758 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\npublic void popAll(Collection<? super E> dst) {\n  while (!isEmpty())\n    dst.add(pop());\n}\n")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ucf54\ub4dc\ucc98\ub7fc, \uc720\uc5f0\uc131\uc744 \ucd5c\ub300\ud654\ub824\uba74 Producer\uc640 Consumer\ub97c \ub098\ud0c0\ub0b4\ub294 \uc785\ub825 \ub9e4\uac1c \ubcc0\uc218\uc5d0 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"PECS(Producer extends and Consumer super)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get \uacfc Put \uc6d0\uce59\uc774\uba70, structure\uc5d0\uc11c \uac12\uc744 \uc5bb\uc744 \ub54c ",(0,l.kt)("inlineCode",{parentName:"li"},"extends")," \uc640\uc77c\ub4dc \uce74\ub4dc\ub97c \uc0ac\uc6a9\ud558\uace0, structure\uc5d0\uc11c \uac12\uc744 \ub123\uc744\ub54c ",(0,l.kt)("inlineCode",{parentName:"li"},"super")," \uc640\uc77c\ub4dc \uce74\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098, \ud074\ub798\uc2a4 \uc0ac\uc6a9\uc790\uac00 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\uc5d0 \ub300\ud574 \uc0dd\uac01\ud558\uace0 \uac1c\ubc1c\ud574\uc57c\ud55c\ub2e4\uba74, API\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc544\ub798\uc758 \ucf54\ub4dc\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public static <E> Set<E> union(Set<? extends E> s1, Set<? extends E> s2)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Set <Integer> \uc815\uc218 = Set.of (1, 3, 5);\nSet <Double> doubles = Set.of (2.0, 4.0, 6.0);\n\n// \uc5d0\ub7ec \ubc1c\uc0dd, #1\uacfc #2\uac00 \uad50\ucc28 \uc720\ud615\uc774\ubbc0\ub85c\nSet <Number> numbers = union (integers, doubles);\n\n// \uc774\ub97c \ud574\uacb0\ud558\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\nSet <Number> numbers = Union.<Number>union(integers, doubles);\n")),(0,l.kt)("p",null,"\uc544\ub798\uc758 swap \uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c \uad6c\ud604\uc5d0 \uae54\ub054\ud558\uba70, \uc640\uc77c\ub4dc \uce74\ub4dc \uae30\ubc18 \uc120\uc5b8\uc744 \uc798 \ud45c\ud604\ud55c \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public static void swap(List<?> list, int i, int j) {\n  swapHelper(list, i, j);\n}\n\n// \uc640\uc77c\ub4dc \uce74\ub4dc \ucea1\ucc98\ub97c\uc704\ud55c private \ub3c4\uc6b0\ubbf8 \uba54\uc11c\ub4dc\nprivate static <E> void swapHelper(List<E> list, int i, int j) {\n  list.set(i, list.set(j, list.get(i)));\n}\n")),(0,l.kt)("p",null,"\uc774\uc640 \uac19\uc774, API\uc5d0\uc11c \uc640\uc77c\ub4dc\uce74\ub4dc \uc720\ud615\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc77c\ubd80 \uae4c\ub2e4\ub86d\uc9c0\ub9cc API\ub97c \ud6e8\uc52c \ub354 \uc720\uc5f0\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4. \ud2b9\ud788, ",(0,l.kt)("strong",{parentName:"p"},"\uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc640\uc77c\ub4dc \uce74\ub4dc \uc720\ud615\uc758 \uc0ac\uc6a9\uc740 \ud544\uc218\uc801"),"\uc774\uba70 \uae30\ubcf8 \uaddc\uce59\uc778 ",(0,l.kt)("strong",{parentName:"p"},"PECS"),"\ub97c \uae30\uc5b5\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c \ubaa8\ub4e0 \ube44\uad50 \ub300\uc0c1\ub4e4\uc740 consumer\uc785\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-32-\uc81c\ub124\ub9ad\uacfc-\uac00\ubcc0\uc778\uc218\ub97c-\uc2e0\uc911\ud558\uac8c-\ud569\uce69\ub2c8\ub2e4"},"Item 32. \uc81c\ub124\ub9ad\uacfc \uac00\ubcc0\uc778\uc218\ub97c \uc2e0\uc911\ud558\uac8c \ud569\uce69\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac00\ubcc0\uc778\uc218 \uba54\uc18c\ub4dc\uc640 \uc81c\ub124\ub9ad\uc740 Java 5\uc5d0\uc11c \uc0dd\uacbc\uae30 \ub54c\ubb38\uc5d0 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ub418\uc9c0\ub9cc \uc774\ub294 \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uac00\ubcc0 \uc778\uc218\uc758 \ubaa9\uc801"),"\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud30c\ub77c\ubbf8\ud130 \uc778\uc218\ub97c \uba54\uc11c\ub4dc\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\uc758 \ucf54\ub4dc\ub294 \uac00\ubcc0\uc778\uc218 \ubc30\uc5f4\uc758 \ub9e4\uac1c \ubcc0\uc218\uc5d0 \uac12\uc744 \uc800\uc7a5\ud558\ub294 \uac83\uc774 \uc548\uc804\ud558\uc9c0 \uc54a\uc74c\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \uc81c\ub124\ub9ad\uacfc \uac00\ubcc0 \uc778\uc218\ub97c \ud63c\ud569\ud558\uba74 \uc720\ud615 \uc548\uc804\uc131\uc744 \uc704\ubc18\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!\nstatic void dangerous(List<String>... stringLists) {\n  List<Integer> intList = List.of(42);\n  Object[] objects = stringLists;\n  objects[0] = intList;             // Heap pollution\n  String s = stringLists[0].get(0); // ClassCastException\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SafeVarargs")," annotation\uc740 typesafe \ub41c\uac83\uc758 method\ub97c \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \ucef4\ud30c\uc77c\ub7ec\uac00 \ud558\ub294 \ud638\ucd9c \uacbd\uace0\uac00 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uac00\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 annotation\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\ub294 \uc77c\ubc18\uc801\uc778 \uac00\ubcc0\uc778\uc218 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc911\uc694\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac00\ubcc0\uc778\uc218 \ub9e4\uac1c \ubcc0\uc218 \ubc30\uc5f4\uc5d0 \uc544\ubb34\uac83\ub3c4 \uc800\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub294 \ubc30\uc5f4\uc744 \ub9cc\ub4e4\uba74 \uc548\ub429\ub2c8\ub2e4. \uc774\ub97c \uc704\ubc18\ud558\uba74 \uc218\uc815\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc544\ub798\ub294 \uc88b\uc740 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// \uc81c\ub124\ub9ad \uac00\ubcc0 \uc778\uc218 \ub9e4\uac1c \ubcc0\uc218\uac00 \uc788\ub294 \uc548\uc804\ud55c \uba54\uc11c\ub4dc\nstatic <T> List<T> flatten(List<List<? extends T>> lists) {\n  List<T> result = new ArrayList<>();\n  for (List<? extends T> list : lists)\n    result.addAll(list);\n  return result;\n}\n")),(0,l.kt)("p",null,"\uc774\ub97c \uc0ac\uc6a9\ud55c \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"audience = flatten(List.of(friends, romans, countrymen));\n")),(0,l.kt)("p",null,"\uc774\ub97c \uc815\ub9ac\ud558\uba74, \uac00\ubcc0 \uc778\uc218 \uae30\ub2a5\uc740 \ubc30\uc5f4 \uc704\uc758 \uc0dd\uc131\ub41c leaky abstraction\uc774\ubbc0\ub85c, \uac00\ubcc0 \uc778\uc218\uc640 \uc81c\ub124\ub9ad\uc740 \uc81c\ub300\ub85c \uc0c1\ud638\uc791\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba70, \ubc30\uc5f4\uc5d0\ub294 generics\uc640 \ub2e4\ub978 \uc720\ud615\uc758 \uaddc\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18 \uac00\ubcc0 \uc778\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\ub294 \ud615\uc2dd\uc774 \uc548\uc804\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc989, \uc815\uc801 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574\uc11c \uac1c\ubc1c\ud558\ub294 \ubc29\ubc95\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"@SafeVarargs")," annotation\uc744 \uc2e0\uacbd\uc4f8 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"item-33-typesafe\ud55c-\ud63c\uc131-\ucee8\ud14c\uc774\ub108\ub97c-\uace0\ub824\ud569\ub2c8\ub2e4"},"Item 33. Typesafe\ud55c \ud63c\uc131 \ucee8\ud14c\uc774\ub108\ub97c \uace0\ub824\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294, \ud63c\uc131 \ucee8\ud14c\uc774\ub108\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ub300\ud45c\uc801\uc778 \ucf54\ub4dc \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Typesafe \ud63c\uc131 \ucee8\ud14c\uc774\ub108 \ud328\ud134 - implementation\npublic class Favorites {\n  private Map<Class<?>, Object> favorites = new HashMap<>();\n  public <T> void putFavorite(Class<T> type, T instance) {\n    favorites.put(Objects.requireNonNull(type), instance);\n  }\n\n  public <T> T getFavorite(Class<T> type) {\n    return type.cast(favorites.get(type));\n  }\n}\n")),(0,l.kt)("p",null,"\uc704\uc758 Favorities \uac1d\uccb4\ub97c \uc77d\uac70\ub098, \ucd94\uac00 \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 Key\uc5d0 \ud574\ub2f9\ud558\ub294 Class \uac1d\uccb4\ub97c \uc804\ub2ec\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Typesafe \ud63c\uc131 \ucee8\ud14c\uc774\ub108 \ud328\ud134 - client\npublic static void main(String[] args) {\n  Favorites f = new Favorites();\n  f.putFavorite(String.class, "Java");\n  f.putFavorite(Integer.class, 0xcafebabe);\n  f.putFavorite(Class.class, Favorites.class);\n\n  String favoriteString = f.getFavorite(String.class);\n  int favoriteInteger = f.getFavorite(Integer.class);\n  Class<?> favoriteClass = f.getFavorite(Class.class);\n\n  System.out.printf("%s %x %s%n", favoriteString, favoriteInteger, favoriteClass.getName());\n}\n')),(0,l.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc \ub300\uc2e0\uc5d0 Map\uc744 \ud1b5\ud574\uc11c \uad6c\ud604\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \uc774 \uacbd\uc6b0\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uacfc\uc815\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassCastException")," \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc785 \uc548\uc804\uc774 \ubcf4\uc7a5\ub418\ub294 \ud63c\uc131 \ucee8\ud14c\uc774\ub108\uc5d0 \ube44\ud574 \uc704\ud5d8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc55e\uc11c \ub098\uc628 Favorites\uc758 \ud074\ub798\uc2a4\uc5d0\ub294 2\uac00\uc9c0 \ubb38\uc81c\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc545\uc758\uc801\uc778 client\uac00 Favorites\uc758 \uc6d0\uc2dc \ud615\uc2dd Class \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud574\uc11c \uc778\uc2a4\ud134\uc2a4\uc758 \uc548\uc804\uc131\uc744 \uc190\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc218\uc815 \ubd88\uac00\ub2a5\ud55c \uc720\ud615\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574, asSubClass\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70 \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0 type\uc744 \uc54c \uc218 \uc5c6\ub294 annotation\uc744 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// asSubclass\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc81c\ud55c\ub41c \uc720\ud615 \ud1a0\ud070\uc73c\ub85c \uc548\uc804\ud558\uac8c \uce90\uc2a4\ud2b8\nstatic Annotation getAnnotation(AnnotatedElement element, String annotationTypeName) {\n  Class<?> annotationType = null; // Unbounded type token\n\n  try {\n    annotationType = Class.forName(annotationTypeName)s;\n  } catch (Exception ex) {\n    throw new IllegalArgumentException(ex);\n  }\n\n  return element.getAnnotation(annotationType.asSubclass(Annotation.class));\n}\n")),(0,l.kt)("p",null,"\uc694\uc57d\ud558\uba74, \uceec\ub809\uc158 API\uc758 \uc608\uc2dc\uac00 \ub41c \uc81c\ub124\ub9ad \uc0ac\uc6a9\uc740 \ucee8\ud14c\uc774\ub108\ub2f9 \uace0\uc815\ub41c \uc218\uc758 \uc720\ud615 \ub9e4\uac1c \ubcc0\uc218\ub85c \uc81c\ud55c\uc785\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"p"},"\ucee8\ud14c\uc774\ub108\uac00 \uc544\ub2cc \ud0a4\uc5d0 type\ub9e4\uac1c \ubcc0\uc218\ub97c \ubc30\uce58\ud558\uc5ec \uc774 \uc81c\ud55c\uc744 \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")," \uc774\ub7ec\ud55c \ubc29\ubc95\ub85c \ud63c\uc131 \ucee8\ud14c\uc774\ub108\uc758 \ud0a4\ub85c \uc548\uc804\ud55c Class \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Heterogeneous Container (\ud63c\uc131 \ucee8\ud14c\uc774\ub108)")),(0,l.kt)("p",null,"\ub9cc\uc57d \ucee8\ud14c\uc774\ub108 \uc790\uccb4\uac00 \uc544\ub2cc, \uc694\uc18c\uc758 \ud0a4\uc5d0 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\ub97c \ub450\uba74 \uc11c\ub85c \ub2e4\ub978 \ud0c0\uc785\uc758 \uc694\uc18c\uac00 \uc800\uc7a5\ub420 \uc218 \uc788\ub294 \ucee8\ud14c\uc774\ub108\uc774\uba70, \uc774\ub97c \ud63c\uc131 \ucee8\ud14c\uc774\ub108\ub77c\uace0 \ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);