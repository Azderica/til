"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4022],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},519:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i={sidebar_position:7},o={unversionedId:"kotlin/kotlin-in-action/ch7",id:"kotlin/kotlin-in-action/ch7",isDocsHomePage:!1,title:"7. \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529\uacfc \uae30\ud0c0 \uad00\ub840",description:"- \uc5b8\uc5b4 \uae30\ub2a5\uc744 \ud0c0\uc785\uc5d0 \uc758\uc874\ud558\ub294 \uc790\ubc14\uc640 \ub2ec\ub9ac \ucf54\ud2c0\ub9b0\uc740 \uad00\ub840\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4.",source:"@site/docs/kotlin/kotlin-in-action/ch7.md",sourceDirName:"kotlin/kotlin-in-action",slug:"/kotlin/kotlin-in-action/ch7",permalink:"/til/docs/kotlin/kotlin-in-action/ch7",editUrl:"https://github.com/Azderica/til/edit/master/docs/kotlin/kotlin-in-action/ch7.md",version:"current",lastUpdatedAt:1670657990,formattedLastUpdatedAt:"12/10/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. \ucf54\ud2c0\ub9b0 \ud0c0\uc785 \uc2dc\uc2a4\ud15c",permalink:"/til/docs/kotlin/kotlin-in-action/ch6"},next:{title:"8. \uace0\ucc28 \ud568\uc218: \ud30c\ub77c\ubbf8\ud130\uc640  \ubc18\ud658 \uac12\uc73c\ub85c \ub78c\ub2e4 \uc0ac\uc6a9",permalink:"/til/docs/kotlin/kotlin-in-action/ch8"}},p=[{value:"7.1 \uc0b0\uc220 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529",id:"71-\uc0b0\uc220-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529",children:[{value:"7.1.1. \uc774\ud56d \uc0b0\uc220 \uc5f0\uc0b0 \uc624\ubc84\ub85c\ub529",id:"711-\uc774\ud56d-\uc0b0\uc220-\uc5f0\uc0b0-\uc624\ubc84\ub85c\ub529",children:[]},{value:"7.1.2. \ubcf5\ud569 \ub300\uc785 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529",id:"712-\ubcf5\ud569-\ub300\uc785-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529",children:[]},{value:"7.1.3. \ub2e8\ud56d \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529",id:"713-\ub2e8\ud56d-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529",children:[]}]},{value:"7.2 \ube44\uad50 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529",id:"72-\ube44\uad50-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529",children:[{value:"7.2.1. \ub3d9\ub4f1\uc131 \uc5f0\uc0b0\uc790: equals",id:"721-\ub3d9\ub4f1\uc131-\uc5f0\uc0b0\uc790-equals",children:[]},{value:"7.2.2. \uc21c\uc11c \uc5f0\uc0b0\uc790: compareTo",id:"722-\uc21c\uc11c-\uc5f0\uc0b0\uc790-compareto",children:[]}]},{value:"7.3 \uceec\ub809\uc158\uacfc \ubc94\uc704\uc5d0 \ub300\ud574 \uc4f8 \uc218 \uc788\ub294 \uad00\ub840",id:"73-\uceec\ub809\uc158\uacfc-\ubc94\uc704\uc5d0-\ub300\ud574-\uc4f8-\uc218-\uc788\ub294-\uad00\ub840",children:[{value:"7.3.1. \uc778\ub371\uc2a4\ub85c \uc6d0\uc18c\uc5d0 \uc811\uadfc: get\uacfc set",id:"731-\uc778\ub371\uc2a4\ub85c-\uc6d0\uc18c\uc5d0-\uc811\uadfc-get\uacfc-set",children:[]},{value:"7.3.2. in \uad00\ub840",id:"732-in-\uad00\ub840",children:[]},{value:"7.3.3. rangeTo \uad00\ub840",id:"733-rangeto-\uad00\ub840",children:[]},{value:"7.3.4. for \ub8e8\ud504\ub97c \uc704\ud55c iterator \uad00\ub840",id:"734-for-\ub8e8\ud504\ub97c-\uc704\ud55c-iterator-\uad00\ub840",children:[]}]},{value:"7.4 \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uacfc component \ud568\uc218",id:"74-\uad6c\uc870-\ubd84\ud574-\uc120\uc5b8\uacfc-component-\ud568\uc218",children:[{value:"7.4.1. \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uacfc \ub8e8\ud504",id:"741-\uad6c\uc870-\ubd84\ud574-\uc120\uc5b8\uacfc-\ub8e8\ud504",children:[]}]},{value:"7.5 \ud504\ub85c\ud37c\ud2f0 \uc811\uadfc\uc790 \ub85c\uc9c1 \uc7ac\ud65c\uc6a9: \uc704\uc784 \ud504\ub85c\ud37c\ud2f0",id:"75-\ud504\ub85c\ud37c\ud2f0-\uc811\uadfc\uc790-\ub85c\uc9c1-\uc7ac\ud65c\uc6a9-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0",children:[{value:"7.5.1. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uc18c\uac1c",id:"751-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uc18c\uac1c",children:[]},{value:"7.5.2. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uc0ac\uc6a9: by lazy()\ub97c \uc0ac\uc6a9\ud55c \ud504\ub85c\ud37c\ud2f0 \ucd08\uae30\ud654 \uc9c0\uc5f0",id:"752-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uc0ac\uc6a9-by-lazy\ub97c-\uc0ac\uc6a9\ud55c-\ud504\ub85c\ud37c\ud2f0-\ucd08\uae30\ud654-\uc9c0\uc5f0",children:[]},{value:"7.5.3. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uad6c\ud604",id:"753-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uad6c\ud604",children:[]},{value:"7.5.4. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \ucef4\ud30c\uc77c \uaddc\uce59",id:"754-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\ucef4\ud30c\uc77c-\uaddc\uce59",children:[]},{value:"7.5.5. \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \ub9f5\uc5d0 \uc800\uc7a5",id:"755-\ud504\ub85c\ud37c\ud2f0-\uac12\uc744-\ub9f5\uc5d0-\uc800\uc7a5",children:[]},{value:"7.5.6. \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \ud65c\uc6a9",id:"756-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\ud65c\uc6a9",children:[]}]},{value:"7.6 \uc694\uc57d",id:"76-\uc694\uc57d",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5b8\uc5b4 \uae30\ub2a5\uc744 \ud0c0\uc785\uc5d0 \uc758\uc874\ud558\ub294 \uc790\ubc14\uc640 \ub2ec\ub9ac \ucf54\ud2c0\ub9b0\uc740 \uad00\ub840\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"71-\uc0b0\uc220-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529"},"7.1 \uc0b0\uc220 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529"),(0,r.kt)("h3",{id:"711-\uc774\ud56d-\uc0b0\uc220-\uc5f0\uc0b0-\uc624\ubc84\ub85c\ub529"},"7.1.1. \uc774\ud56d \uc0b0\uc220 \uc5f0\uc0b0 \uc624\ubc84\ub85c\ub529"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"data dlass Point(val x: Int, val y: Int) {\n    operator fun plus(other: Point): Point {\n        return Point(x + other.x, y + other.y)\n    }\n}\nval p1 = Point(10, 20)\nval p2 = Point(30, 40)\nprintln(p1 + p2)    // Point(x = 40, y = 60)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc624\ubc84\ub85c\ub529 \uac00\ub2a5\ud55c \uc774\ud56d \uc0b0\uc220 \uc5f0\uc0b0\uc790\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uc2dd"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud568\uc218 \uc774\ub984"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a * b"),(0,r.kt)("td",{parentName:"tr",align:null},"times")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a / b"),(0,r.kt)("td",{parentName:"tr",align:null},"div")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a % b"),(0,r.kt)("td",{parentName:"tr",align:null},"mod(1.1 \ubd80\ud130 rem)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a + b"),(0,r.kt)("td",{parentName:"tr",align:null},"plus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a - b"),(0,r.kt)("td",{parentName:"tr",align:null},"minus")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ucf54\ud2c0\ub9b0 \uc5f0\uc0b0\uc790\ub97c \uc790\ubc14\uc5d0\uc11c \ud638\ucd9c\ud558\uae30\ub294 \uc27d\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"operator fun Point.times(scale: Double): Point {\n    return Point((x * scale).toInt(), (y * scale).toInt())\n}\nval p = Point(10, 20)\nprintln(p * 1.5)    // Point(x = 15, y = 30)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0 \uc5f0\uc0b0\uc790\ub294 \uc790\ub3d9\uc73c\ub85c \uad50\ud658 \ubc95\uce59(commutativity)\ub97c \uc9c0\uc6d0\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uc0b0\uc790 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc774 \uaf2d \ub450 \ud53c\uc5f0\uc0b0\uc790 \uc911 \ud558\ub098\uc640 \uc77c\uce58\ud574\uc57c\ud558\uc9c0\ub9cc\uc740 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"operatior fun Char.times(count: Int): String {\n    return toString().repeat(count)\n}\nprintln('a' * 3)    // aaa\n")),(0,r.kt)("h3",{id:"712-\ubcf5\ud569-\ub300\uc785-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529"},"7.1.2. \ubcf5\ud569 \ub300\uc785 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-=")," \ub4f1\uc758 \uc5f0\uc0b0\uc790\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\ubcf5\ud569 \ub300\uc785(compound assignment) \uc5f0\uc0b0\uc790"),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"val numbers = ArrayList<Int>()\nnumbers += 42\nprintln(numbers[0])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf5\ud569 \ub300\uc785 \uc5f0\uc0b0\uc790 \ud568\uc218\ub3c4 \ube44\uc2b7\ud558\uac8c ",(0,r.kt)("inlineCode",{parentName:"li"},"minusAssign, timesAssign")," \ub4f1\uc758 \uc774\ub984\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"operator fun<T> MutableCollection<T>.plusAssign(element: T) { this.add(element) }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a += b"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"a = a.plus(b)")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"a.plusAssign(b)")," \ub85c \ubc88\uc5ed\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"713-\ub2e8\ud56d-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529"},"7.1.3. \ub2e8\ud56d \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \ub2e8\ud56d \uc5f0\uc0b0\uc790\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"operator fun Point.unaryMinus(): Point { return Point(-x, -y) }\nval p = Point(10, 20)\nprintln(-p)     // Point(x=-10, y=-20)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc624\ubc84\ub85c\ub529\ud560 \uc218 \uc788\ub294 \ub2e8\ud56d \uc0b0\uc220 \uc5f0\uc0b0\uc790\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uc2dd"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud568\uc218 \uc774\ub984"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+a"),(0,r.kt)("td",{parentName:"tr",align:null},"unaryPlus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a"),(0,r.kt)("td",{parentName:"tr",align:null},"unaryMinus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!a"),(0,r.kt)("td",{parentName:"tr",align:null},"not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"++a, a++"),(0,r.kt)("td",{parentName:"tr",align:null},"inc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--a, a--"),(0,r.kt)("td",{parentName:"tr",align:null},"dec")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"72-\ube44\uad50-\uc5f0\uc0b0\uc790-\uc624\ubc84\ub85c\ub529"},"7.2 \ube44\uad50 \uc5f0\uc0b0\uc790 \uc624\ubc84\ub85c\ub529"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \uc790\ubc14\uc640 \ub2ec\ub9ac \ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \ub300\ud574 \ube44\uad50 \uc5f0\uc0b0\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"721-\ub3d9\ub4f1\uc131-\uc5f0\uc0b0\uc790-equals"},"7.2.1. \ub3d9\ub4f1\uc131 \uc5f0\uc0b0\uc790: equals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," \uc5f0\uc0b0\uc790\ub97c ",(0,r.kt)("inlineCode",{parentName:"li"},"equals")," \uba54\uc11c\ub4dc \ud638\ucd9c\ub85c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a == b")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"a?.equals(b) ?: (b == null)")," \uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2dd\ubcc4\uc790 \ube44\uad50(identity equals, ",(0,r.kt)("inlineCode",{parentName:"li"},"==="),") \ub97c \uc0ac\uc6a9\ud574 \ud30c\ub77c\ubbf8\ud130\uc758 \uc218\uc2e0 \uac1d\uccb4\uc640 \uac19\uc740 \uc9c0 \ube44\uad50\ud558\uba70, \uc790\ubc14\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," \uc5f0\uc0b0\uc790\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"722-\uc21c\uc11c-\uc5f0\uc0b0\uc790-compareto"},"7.2.2. \uc21c\uc11c \uc5f0\uc0b0\uc790: compareTo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\ub3c4 \uc790\ubc14\uc640 \ub3d9\uc77c\ud55c ",(0,r.kt)("inlineCode",{parentName:"li"},"Compareable")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a >= b")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"a.compareTo(b) >= 0")," \uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub3c4 \uc0ac\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"class Person (\n    val firstName: String, val lastName: String\n): Comparable<Person> {\n    override fun compareTo(other: Person): Int {\n        return compareValuesBy(this, other, Person::lastName, Person::firstName)\n    }\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"73-\uceec\ub809\uc158\uacfc-\ubc94\uc704\uc5d0-\ub300\ud574-\uc4f8-\uc218-\uc788\ub294-\uad00\ub840"},"7.3 \uceec\ub809\uc158\uacfc \ubc94\uc704\uc5d0 \ub300\ud574 \uc4f8 \uc218 \uc788\ub294 \uad00\ub840"),(0,r.kt)("h3",{id:"731-\uc778\ub371\uc2a4\ub85c-\uc6d0\uc18c\uc5d0-\uc811\uadfc-get\uacfc-set"},"7.3.1. \uc778\ub371\uc2a4\ub85c \uc6d0\uc18c\uc5d0 \uc811\uadfc: get\uacfc set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \ub9f5\uc758 \uc6d0\uc0ac\uc5d0 \uc811\uadfc\ud560 \ub54c\ub098 \uc790\ubc14\uc5d0\uc11c \ubc30\uc5f4 \uc6d0\uc18c\uc5d0 \uc811\uadfc\ud560 \ub54c, ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x[a, b]")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"x.get(a, b)")," \ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x[a, b] = c")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"x.set(a, b, c)")," \ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4. ")),(0,r.kt)("h3",{id:"732-in-\uad00\ub840"},"7.3.2. in \uad00\ub840"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc774 \uc9c0\uc6d0\ud558\ub294 \ub2e4\ub978 \uc5f0\uc0b0\uc790\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"in")," \uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a in c")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"c.contains(a)")," \ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"733-rangeto-\uad00\ub840"},"7.3.3. rangeTo \uad00\ub840"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start..end")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"start.rangeTo(end)")," \ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rangeTo")," \ud568\uc218\ub294 \ubc94\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"val n = 9\nprintln(0..(n+1))   // 0..10\n(0..n).forEach { print(it) }    // 0123456789\n")),(0,r.kt)("h3",{id:"734-for-\ub8e8\ud504\ub97c-\uc704\ud55c-iterator-\uad00\ub840"},"7.3.4. for \ub8e8\ud504\ub97c \uc704\ud55c iterator \uad00\ub840"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"for")," \ub8e8\ud504\ub294 \ubc94\uc704 \uac80\uc0ac\uc640 \ub611\uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"li"},"in")," \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud558\ub098 \uc758\ubbf8\ub294 \ub2e4\ub974\uba70 \uc774\ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"list.iterator()")," \ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'operator fun CharSequence.iterator(): CharIterator  // for (c in "abc")\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"74-\uad6c\uc870-\ubd84\ud574-\uc120\uc5b8\uacfc-component-\ud568\uc218"},"7.4 \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uacfc component \ud568\uc218"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \ud2b9\uc9d5 \uc911 ",(0,r.kt)("strong",{parentName:"li"},"\uad6c\uc870 \ubd84\ud574 \uc120\uc5b8(destructuring declaration)")," \uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"val (a, b) = p")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"val a = p.component1(), val b = p.component2()")," \uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"// \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uc744 \uc0ac\uc6a9\ud574 \uc5ec\ub7ec \uac12 \ubc18\ud658\ndata class NameComponents(val name: String, val extension: String)\n\nfun splitFilename(fullName: String): NameComponents {\n    val (name, extension) = fullName.split('.', limit = 2)\n    return NameComponents(name, extension)\n}\nval (name, ext) = splitFilename(\"example.kt\")\nprintln(name)   // example\nprintln(ext)    // ext\n")),(0,r.kt)("h3",{id:"741-\uad6c\uc870-\ubd84\ud574-\uc120\uc5b8\uacfc-\ub8e8\ud504"},"7.4.1. \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uacfc \ub8e8\ud504"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud655\uc7a5 \ud568\uc218\ub97c \ub300\ud45c\uc801\uc73c\ub85c \uc0ac\uc6a9\ud55c \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'// \uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uc744 \uc0ac\uc6a9\ud574 \ub9f5 \uc774\ud130\ub808\uc774\uc158\nfun printEntries (map: Map<String, String>) {\n    for ((key, value) in map) {\n        println("$key -> $value")\n    }\n}\nval map = mapOf("Oracle" to "Java", "JetBrains" to "Kotlin")\nprintEntries(map)   // Oracle -> Java \\n JetBrains -> Kotlin\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"75-\ud504\ub85c\ud37c\ud2f0-\uc811\uadfc\uc790-\ub85c\uc9c1-\uc7ac\ud65c\uc6a9-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0"},"7.5 \ud504\ub85c\ud37c\ud2f0 \uc811\uadfc\uc790 \ub85c\uc9c1 \uc7ac\ud65c\uc6a9: \uc704\uc784 \ud504\ub85c\ud37c\ud2f0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc704\uc784 \ud504\ub85c\ud37c\ud2f0(delegated property)")," \ub97c \uc0ac\uc6a9\ud558\uba74 \uac12\uc744 \ub4b7\ubc1b\uce68\ud558\ub294 \ud544\ub4dc\uc5d0 \ub2e8\uc21c\ud788 \uc800\uc7a5\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ubcf5\uc7a1\ud55c \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud558\ub294 \ud504\ub85c\ud37c\ud2f0\ub97c \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ud2b9\uc131\uc758 \uae30\ubc18\uc5d0\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\uc704\uc784"),"\uc774 \uc788\uc73c\uba70, \uc704\uc784\uc740 \uac1d\uccb4\uac00 \uc9c1\uc811 \uc791\uc5c5\uc744\uc218\ud589\ud558\uc9c0 \uc54a\uace0 \ub2e4\ub978 \ub3c4\uc6b0\ubbf8 \uac1d\uccb4\uac00 \uadf8 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\uac8c \ub9e1\uae30\ub294 \ub514\uc790\uc778 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ub3c4\ubb34\uc774 \uac1d\uccb4\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\uc704\uc784 \uac1d\uccb4(delegate)")," \ub77c \ubd80\ub985\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"751-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uc18c\uac1c"},"7.5.1. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uc18c\uac1c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \uc704\uc784\uc758 \ubb38\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"class Foo {\n    var p: Type by Delegate()\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"class Foo {\n    private val delegate = Delegate()\n    var p: Type\n    set(value: Type) = delegate.setValue(..., value)\n    get() = delegate.getValue(...)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\ud37c\ud2f0 \uc704\uc784 \uad00\ub840\ub97c \ub530\ub974\ub294 Delegate \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"getValue"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"setValue"),"\ub97c \uc81c\uacf5\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'class Delegate {\n    operator fun getValue(...) {...}\n    operator fun setValue(..., value: Type) { ... }\n}\nclass Foo {\n    var p: Type by Delegate()   // "by" \ud0a4\uc6cc\ub4dc\ub294 \ud504\ub85c\ud37c\ud2f0\uc640 \uc704\uc784 \uac1d\uccb4\ub97c \uc5f0\uacb0\ud569\ub2c8\ub2e4.\n}\nval foo = Foo()\nval oldValue = foo.p    // delegate.getValue() \ud638\ucd9c\nfoo.p = newValue        // delegate.setValue(..., newValue)\n')),(0,r.kt)("h3",{id:"752-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uc0ac\uc6a9-by-lazy\ub97c-\uc0ac\uc6a9\ud55c-\ud504\ub85c\ud37c\ud2f0-\ucd08\uae30\ud654-\uc9c0\uc5f0"},"7.5.2. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uc0ac\uc6a9: by lazy()\ub97c \uc0ac\uc6a9\ud55c \ud504\ub85c\ud37c\ud2f0 \ucd08\uae30\ud654 \uc9c0\uc5f0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc9c0\uc5f0 \ucd08\uae30\ud654(lazy initialization)")," \ub294 \uac1d\uccb4\uc758 \uc77c\ubd80\ubd84\uc744 \ucd08\uae30\ud654\ud558\uc9c0 \uc54a\uace0 \ub0a8\uaca8\ub480\ub2e4\uac00 \uc2e4\uc81c\ub85c \uadf8 \ubd80\ubd84\uc758 \uac12\uc774 \ud544\uc694\ud560 \uacbd\uc6b0 \ucd08\uae30\ud654\ud560 \ub54c \ud754\ud788 \uc4f0\uc774\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucd08\uae30\ud654 \uacfc\uc815\uc5d0 \uc790\uc6d0\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uac70\ub098 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub9c8\ub2e4 \uaf2d \ucd08\uae30\ud654\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294\ud504\ub85c\ud37c\ud2f0\uc5d0 \ub300\ud574 \uc9c0\uc5f0 \ucd08\uae30\ud654 \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'class Email { /*...*/ }\nfun loadEmails(person: Person) : List<Email> {\n    println("${person.name}\uc758 \uc774\uba54\uc77c\uc744 \uac00\uc838\uc634")\n    return listOf(/*...*/)\n}\n\n// \uc9c0\uc5f0 \ucd08\uae30\ud654 \uc608\uc81c.\nclass Person (val name: String) {\n    private var _emails: List<Email>? = null\n    val emails: List<Email>\n        get() {\n            if(_emails == null) { _emails loadEmails(this)}\n            return _emails!!    // \uc800\uc7a5\ud574 \ub454 \ub370\uc774\ud130\uac00 \uc788\uc73c\uba74 \ub370\uc774\ud130 \ubc18\ud658\n        }\n}\n\nval p = Person("Alice")\np.emails    // Load emails for Alice\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704\uc758 \uc608\uc81c\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\ub4b7\ubc1b\uce68\ud558\ub294 \ud504\ub85c\ud37c\ud2f0(backing property)")," \ub77c\ub294 \uae30\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_emails"),"\ub77c\ub294 \ud504\ub85c\ud37c\ud2f0\ub294 \uac12\uc744 \uc800\uc7a5\ud558\uace0, \ub2e4\ub978 \ud504\ub85c\ud37c\ud2f0\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"emails"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"_emails"),"\ub77c\ub294 \ud504\ub85c\ud37c\ud2f0\uc5d0 \ub300\ud55c \uc77d\uae30 \uc5f0\uc0b0\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \uc774\ub97c \uac1c\uc120\ud588\uc73c\uba70, ",(0,r.kt)("inlineCode",{parentName:"li"},"lazy"),"\ub77c\ub294 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud568\uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"class Person(val name: String) {\n    val emails by lazy { loadEmails(this) }\n}\n")),(0,r.kt)("h3",{id:"753-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\uad6c\ud604"},"7.5.3. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \uad6c\ud604"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \uc704\uc784 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"class ObservableProperty (\n    var propValue: Int, val changeSupport: PropertyChangeSupport\n) {\n    operator fun getValue(p: Person, prop: KProperty<*>): Int = propValue\n    operator fun setValue(p: Person, prop: KProperty<*>, newValue: Int) {\n        val oldValue = propValue\n        propValue = newValue\n        changeSupport.firePropertyChange(prop.name, oldValue, newValue)\n    }\n}\n\nclass Person (\n    val name: String, age: Int, salary: Int\n) : PropertyChangeAware() {\n    var age: Int by ObservableProperty(age, changeSupport)\n    var salary: Int by ObservableProperty(salary, changeSupport)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"by")," \uc624\ub978\ucabd\uc5d0 \uc624\ub294 \uac1d\uccb4\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\uc704\uc784 \uac1d\uccb4(delegate)")," \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc740 \uc704\uc784 \uac1d\uccb4\ub97c \uac10\ucdb0\uc9c4 \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc800\uc7a5\ud558\uace0, \uc8fc \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \uc77d\uac70\ub098 \uc4f8 \ub54c\ub9c8\ub2e4 \uc704\uc784 \uac1d\uccb4\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"getValue")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"setValue")," \ub97c \ud638\ucd9c\ud574\uc90d\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"// Delegates.observable\uc744 \uc0ac\uc6a9\ud574 \ud504\ub85c\ud37c\ud2f0 \ubcc0\uacbd \ud1b5\uc9c0 \uad6c\ud604\nclass Person (\n    val name: String, age: Int, salary: Int\n) : PropertyChangeAware() {\n    private val observer = {\n        prop: KProperty<*>, oldValue: Int, newValue: Int ->\n        changeSupport.firePropertyChange(prop.name, oldValue, newValue)\n    }\n    var age: Int by Delegates.observable(age, observer)\n    var salary: Int by Delegates.observable(salary, observer)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704\uc784 \uba54\ucee4\ub2c8\uc998\uc744 \ubaa8\ub4e0 \ud0c0\uc785\uc5d0 \ub450\ub8e8\ub450\ub8e8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"754-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\ucef4\ud30c\uc77c-\uaddc\uce59"},"7.5.4. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \ucef4\ud30c\uc77c \uaddc\uce59"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 \ubaa8\ub4e0 \ud504\ub85c\ud37c\ud2f0 \uc811\uadfc\uc790 \uc548\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"getValue"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"setValue")," \ud638\ucd9c\uc744 \uc0dd\uc131\ud574\uc90d\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"val x = c.prop")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"val x = <delegate>.getValue(c, <property>)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"c.prop = x")," \ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"<delegate>.setValue(c, <property>, x)"))))),(0,r.kt)("h3",{id:"755-\ud504\ub85c\ud37c\ud2f0-\uac12\uc744-\ub9f5\uc5d0-\uc800\uc7a5"},"7.5.5. \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \ub9f5\uc5d0 \uc800\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc790\uc2e0\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ub3d9\uc801\uc73c\ub85c \uc815\uc758\ud560 \uc218 \uc788\ub294 \uac1d\uccb4\ub97c \ub9cc\ub4e4 \ub54c \uc704\uc784 \ud504\ub85c\ud37c\ud2f0\ub97c \ud65c\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc73c\uba70 \uadf8\ub7f0 \uac1d\uccb4\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\ud655\uc7a5 \uac00\ub2a5\ud55c \uac1d\uccb4(expando object)")," \ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"// \uac12\uc744 \ub9f5\uc5d0 \uc800\uc7a5\ud558\ub294 \uc704\uc784 \ud504\ub85c\ud37c\ud2f0\nclass Person {\n    private val _attributes = hashMapOf<String, String>()\n    fun setAttribute(attrName: String, value: String) {\n        _attributes[attrName] = value\n    }\n    val name: String by _attributes\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"li"},"MutableMap")," \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"getValue"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"setValue")," \ud655\uc7a5 \ud568\uc218\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"756-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-\uc704\uc784-\ud504\ub85c\ud37c\ud2f0-\ud65c\uc6a9"},"7.5.6. \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc704\uc784 \ud504\ub85c\ud37c\ud2f0 \ud65c\uc6a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'// \uc704\uc784 \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud574 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uce7c\ub7fc \uc811\uadfc\nobject Users: IdTable() {\n    val name = varchar("name", length = 50).index()\n    val age = integer("age")\n}\nclass User(id: EntityID) : Entity(id) {\n    var name: String by Users.name\n    var age: Int by Users.age\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User"),"\uc758 \uc0c1\uc704 \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," \ud074\ub798\uc2a4\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uce7c\ub7fc\uc744 \uc5d4\ud2f0\ud2f0\uc758 \uc18d\uc131(attribute) \uac12\uc73c\ub85c \uc5f0\uacb0\ud574\uc8fc\ub294 \ub9e4\ud551\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"76-\uc694\uc57d"},"7.6 \uc694\uc57d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c\ub294 \uc815\ud574\uc9c4 \uc774\ub984\uc758 \ud568\uc218\ub97c \uc624\ubc84\ub85c\ub529\uc554\uc73c\ub85c\uc368 \ud45c\uc900 \uc218\ud559 \uc5f0\uc0b0\uc790\ub97c \uc624\ubc84\ub85c\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ube44\uad50 \uc5f0\uc0b0\uc790\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"equals"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"compareTo")," \uba54\uc11c\ub4dc\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"get, set, contains"),"\ub77c\ub294 \ud568\uc218\ub97c \uc815\uc758\ud558\uba74 \uadf8 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"in")," \uc5f0\uc0b0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0, \uadf8 \uac1d\uccb4\ub97c \ucf54\ud2c0\ub9b0 \uceec\ub809\uc158 \uac1d \uccb4\uc640 \ube44\uc2b7\ud558\uac8c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubbf8\ub9ac \uc815\ud574\uc9c4 \uad00\ub840\ub97c \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"li"},"rangeTo, iterator")," \ud568\uc218\ub97c \uc815\uc758\ud558\uba74 \ubc94\uc704\ub97c \ub9cc\ub4e4\uac70\ub098 \uceec\ub809\uc158\uacfc \ubc30\uc5f4\uc758 \uc6d0\uc18c\ub97c \uc774\ud130\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uad6c\uc870 \ubd84\ud574 \uc120\uc5b8\uc744 \ud1b5\ud574 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc\ub97c \ubd84\ud574\ud574\uc11c \uc5ec\ub7ec \ubcc0\uc218\uc5d0 \ub300\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc704\uc784 \ud504\ub85c\ud37c\ud2f0\ub97c \ud1b5\ud574 \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \uc800\uc7a5\ud558\uac70\ub098 \ucd08\uae30\ud654\ud558\uac70\ub098 \uc77d\uac70\ub098 \ubcc0\uacbd\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub85c\uc9c1\uc744 \uc7ac\ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc784 \ud504\ub85c\ud37c\ud2f0\ub294 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub9cc\ub4e4 \ub54c \uc544\uc8fc \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud568\uc218\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"lazy"),"\ub97c \ud1b5\ud574 \uc9c0\uc5f0 \ucd08\uae30\ud654 \ud504\ub85c\ud37c\ud2f0\ub97c \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delegates.observable")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud504\ub85c\ud37c\ud2f0 \ubcc0\uacbd\uc744 \uad00\ucc30\ud560 \uc218 \uc788\ub294 \uad00\ucc30\uc790\ub97c \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9f5\uc744 \uc704\uc784 \uac1d\uccb4\ub85c \uc0ac\uc6a9\ud558\ub294 \uc704\uc784 \ud504\ub85c\ud37c\ud2f0\ub97c \ud1b5\ud574 \ub2e4\uc591\ud55c \uc18d\uc131\uc744 \uc81c\uacf5\ud558\ub294 \uac1d\uccb4\ub97c \uc720\uc5f0\ud558\uac8c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);