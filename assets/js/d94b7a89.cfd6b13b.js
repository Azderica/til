(self.webpackChunktil=self.webpackChunktil||[]).push([[4526],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),k=l,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3022:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=t(2122),l=t(9756),r=(t(7294),t(3905)),i={sidebar_position:3},o={unversionedId:"java/effective-java/ch3",id:"java/effective-java/ch3",isDocsHomePage:!1,title:"3. \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uacf5\ud1b5\uc801\uc778 \uba54\uc18c\ub4dc",description:"Object\ub294 \uc790\ubc14\uc5d0\uc11c \ubaa8\ub4e0 \uc624\ube0c\uc81d\ud2b8\uc758 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4\uc774\uba70, \uc0c1\uc18d\uc744 \ud1b5\ud574\uc11c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Object \ud074\ub798\uc2a4\uc5d0\uc11c final\uc774 \uc544\ub2cc \uba54\uc11c\ub4dc\ub4e4(\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c, equals, hashCode, toString, clone, finalize \ub4f1)\uc774 \ubaa8\ub450 \uc624\ubc84\ub77c\uc774\ub529\uc744 \uc5fc\ub450\ud558\uace0 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",source:"@site/docs/java/effective-java/ch3.md",sourceDirName:"java/effective-java",slug:"/java/effective-java/ch3",permalink:"/til/docs/java/effective-java/ch3",editUrl:"https://github.com/Azderica/til/edit/master/docs/java/effective-java/ch3.md",version:"current",lastUpdatedAt:1644934059,formattedLastUpdatedAt:"2/15/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \uac1d\uccb4 \uc0dd\uc131\uacfc \uc0ad\uc81c",permalink:"/til/docs/java/effective-java/ch2"},next:{title:"4. \ud074\ub798\uc2a4\uc640 \uc778\ud130\ud398\uc774\uc2a4",permalink:"/til/docs/java/effective-java/ch4"}},p=[{value:"Item 10. <code>Equals</code>\ub97c \uc624\ubc84\ub77c\uc774\ub529 \ud560 \ub54c, \uc77c\ubc18\uc801\uc778 \ub8f0\uc744 \uc900\uc218\ud569\ub2c8\ub2e4.",id:"item-10-equals\ub97c-\uc624\ubc84\ub77c\uc774\ub529-\ud560-\ub54c-\uc77c\ubc18\uc801\uc778-\ub8f0\uc744-\uc900\uc218\ud569\ub2c8\ub2e4",children:[{value:"equivalence relation\uc758 \uc870\uac74.",id:"equivalence-relation\uc758-\uc870\uac74",children:[]},{value:"\uc88b\uc740 equals \uc0ac\uc6a9 \ubc29\ubc95",id:"\uc88b\uc740-equals-\uc0ac\uc6a9-\ubc29\ubc95",children:[]}]},{value:"Item 11. <code>Equals</code>\ub97c \uc624\ubc84\ub77c\uc774\ub529 \ud560\ub54c, <code>Hashcode</code>\ub97c \ud56d\uc0c1 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4.",id:"item-11-equals\ub97c-\uc624\ubc84\ub77c\uc774\ub529-\ud560\ub54c-hashcode\ub97c-\ud56d\uc0c1-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4",children:[]},{value:"Item 12. <code>ToString</code>\uc744 \ud56d\uc0c1 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4.",id:"item-12-tostring\uc744-\ud56d\uc0c1-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4",children:[]},{value:"Item 13. \uc2e0\uc911\ud558\uac8c <code>Clone</code>\uc744 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4.",id:"item-13-\uc2e0\uc911\ud558\uac8c-clone\uc744-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4",children:[]},{value:"Item 14. <code>Comparable</code>\uc744 \uac1c\ubc1c\ud560\ub54c \uace0\ub824\ud569\ub2c8\ub2e4.",id:"item-14-comparable\uc744-\uac1c\ubc1c\ud560\ub54c-\uace0\ub824\ud569\ub2c8\ub2e4",children:[{value:"Comparable VS Comparator",id:"comparable-vs-comparator",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\ub294 \uc790\ubc14\uc5d0\uc11c \ubaa8\ub4e0 \uc624\ube0c\uc81d\ud2b8\uc758 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4\uc774\uba70, \uc0c1\uc18d\uc744 \ud1b5\ud574\uc11c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," \ud074\ub798\uc2a4\uc5d0\uc11c final\uc774 \uc544\ub2cc \uba54\uc11c\ub4dc\ub4e4(\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c, equals, hashCode, toString, clone, finalize \ub4f1)\uc774 \ubaa8\ub450 \uc624\ubc84\ub77c\uc774\ub529\uc744 \uc5fc\ub450\ud558\uace0 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 \uc774\ub97c \uc7ac\uc815\uc758\ud558\ub294 \uac83\uc5d0 \ub300\ud574\uc11c \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"item-10-equals\ub97c-\uc624\ubc84\ub77c\uc774\ub529-\ud560-\ub54c-\uc77c\ubc18\uc801\uc778-\ub8f0\uc744-\uc900\uc218\ud569\ub2c8\ub2e4"},"Item 10. ",(0,r.kt)("inlineCode",{parentName:"h2"},"Equals"),"\ub97c \uc624\ubc84\ub77c\uc774\ub529 \ud560 \ub54c, \uc77c\ubc18\uc801\uc778 \ub8f0\uc744 \uc900\uc218\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"equals \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\ub294 \ubc29\ubc95\uc740 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc, \uc798\ubabb\ub41c \uc0ac\uc6a9\uc740 \ub054\ucc0d\ud55c \uacb0\uacfc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub2e4\uc74c\uc758 \ub8f0\uc744 \uc900\uc218\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc758 \uac01 \uc778\uc2a4\ud134\uc2a4\ub294 \ubcf8\uc9c8\uc801\uc73c\ub85c unique\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"logical equality(\uc9c0\uc5ed\uc801 \ub3d9\uc77c\uc131)")," \ud14c\uc2a4\ud2b8\ub97c \uc81c\uacf5\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc288\ud37c \ud074\ub798\uc2a4\ub294 \uc774\ubbf8 equals\ub97c \uc774\ubbf8 \uc624\ubc84\ub77c\uc774\ub529\ud558\uc600\uc73c\ubbc0\ub85c, \uc288\ud37c\ud074\ub798\uc2a4\uc758 \ub3d9\uc791\uc740 \uc774\ubbf8 \ud074\ub798\uc2a4\uc758 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub294 private\ub098 package-private\uc774\ubbc0\ub85c, \ud574\ub2f9 'equals'\ub294 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc744\uac83\uc774\ub77c\uace0 \ud655\uc2e0\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"equivalence-relation\uc758-\uc870\uac74"},"equivalence relation\uc758 \uc870\uac74."),(0,r.kt)("p",null,"equivalence relation \uc774\ub780, \uc694\uc18c \uc9d1\ud569\uc5d0\uc11c \uc694\uc18c\uac00 \uc11c\ub85c \ub3d9\uc77c\ud55c \uac83\uc73c\ub85c \uac04\uc8fc\ud558\ub294 \ud558\uc704 \uc9d1\ud569\uc73c\ub85c \ubd84\ud560\ud558\ub294 \uc5f0\uc0b0\uc790\uc774\uba70 \uc774\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"equivalence class"),"\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 5\uac00\uc9c0\uc758 \uc694\uad6c \uc0ac\ud56d\uc744 \uc9c0\ucf1c\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Reflexivity(\ubc18\uc0ac\uc131)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uac00 \uc790\uc2e0\uacfc \ub3d9\uc77c\ud574\uc57c\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Symmetry(\ub300\uce6d)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uac00 \ub3d9\uc77c\ud55c \uc9c0 \uc5ec\ubd80\uc5d0 \ub300\ud574 \ub3d9\uc758\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"equals \ub97c \uc704\ubc18\ud55c \uacbd\uc6b0, \ud574\ub2f9 \uac1d\uccb4\uac00 \ub2e4\ub978 \uac1d\uccb4\ub97c \ube44\uad50\ud558\uac8c \ub418\uba74 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud560\uc9c0 \uc54c \uc218\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \ub300\uce6d\uc744 \uc704\ubc18\ud55c \ucf00\uc774\uc2a4\npublic final class CaseInsensitiveString {\n  private final String s;\n\n  public CaseInsensitiveString(String s) {\n    this.s = Objects.requireNonNull(s);\n  }\n\n  // \ub300\uce6d\uc744 \uc704\ubc18\ud55c \uacbd\uc6b0\n  @Override public boolean equals(Object o) {\n    if (o instanceof CaseInsensitiveString)\n      return (s.equalsIgnoreCase((CaseInsensitiveString) o).s);\n    if (o instanceof String)  // \ub2e8\ubc29\ud5a5 \uc0c1\ud638 \uc6b4\uc6a9\uc131\n      return s.equalsIgnoreCase ((String) o);\n    return false;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \ub300\uce6d\uc744 \uc900\uc218\ud55c \ucf54\ub4dc\n@Override public boolean equals(Object o) {\n  return o instanceof CaseInsensitiveString &&\n    ((CaseInsensitiveString) o).s.equalsIgnoreCase (s);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Transitivity")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud55c \uac1d\uccb4\uac00 \ub450\ubc88\uc9f8 \uac1d\uccb4\uc640 \uac19\uace0, \ub450\ubc88\uc9f8 \uac1d\uccb4\uac00 \uc138\ubc88\uc9f8 \uac1d\uccb4\uc640 \uac19\uc73c\uba74 \uccab\ubc88\uc9f8 \uac1d\uccb4\uc640 \uc138\ubc88\uc9f8 \uac1d\uccb4\uac00 \uac19\uc544\uc57c\ud569\ub2c8\ub2e4.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// equals contract\ub97c \uc704\ubc18\ud558\uc9c0 \uc54a\ub294 \uac12 \uad6c\uc131 \uc694\uc18c\npublic class ColorPoint {\n  private final Point point;\n  private final Color color;\n\n  public ColorPoint(int x, int y, Color color) {\n    point = new Point(x, y);\n    this.color = Objects.requireNonNull(color);\n  }\n\n  public Point asPoint() {\n    return point;\n  }\n\n  @Override public boolean equals(Object o) {\n    if(!(o instanceof ColorPoint))\n      return false;\n    ColorPoint cp = (ColorPoint) o;\n    return cp.point.equals(point) && cp.color.equals(color);\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Consistency")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uac00 \uac19\uc740 \uacbd\uc6b0\uc5d0, \ub458 \uc911 \ud558\ub098\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c \ud56d\uc0c1 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub294 \ub9ac\uc18c\uc2a4\uc5d0 \uc758\uc874\ud558\ub294 \uacbd\uc6b0, equals\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\ub294 \uac83\uc774, ",(0,r.kt)("inlineCode",{parentName:"li"},"java.net.url"),"\uc5d0\uc11c\uc758 equals\uc774\uba70, \uc774\ub294 IP\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uac04\uc774 \ubc14\ub00c\uba74\uc11c \ubc14\ub014 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Non-nullity")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac1d\uccb4\ub294 null\uacfc \uac19\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Implicit null check - preferred\n@Override public boolean equals(Object o) {\n  if (!(o instanceof MyType))\n    return false;\n  MyType mt = (MyType) o;\n  ...s\n}\n")),(0,r.kt)("h3",{id:"\uc88b\uc740-equals-\uc0ac\uc6a9-\ubc29\ubc95"},"\uc88b\uc740 equals \uc0ac\uc6a9 \ubc29\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"=="),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\uc218\uac00 \uc774 \uac1d\uccb4\uc5d0 \ub300\ud55c \ucc38\uc870\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instanceof"),"\ub97c \uc0ac\uc6a9\ud574\uc11c argument\uc758 \uc720\ud615\ud55c \ud0c0\uc785\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc62c\ubc14\ub978 \uc720\ud615\uc73c\ub85c \uce90\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\uc758 \uac01 \uc911\uc694\ud55c \ud544\ub4dc\uc5d0 \ub300\ud574 \uc778\uc218\uc758 \ud574\ub2f9 \ud544\ub4dc\uac00, \uc774 \uac1d\uccb4\uc758 \ud574\ub2f9 \ud544\ub4dc\uc640 \uc77c\uce58\ud558\ub294 \uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ubc29\ubc95\uc73c\ub85c equals\ub97c \uc791\uc131\ud558\uace0 \ub098\uc11c\ub294 \uc138\uac00\uc9c0\ub97c \ud655\uc778\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symmetric"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"transitive"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"consistent"))),(0,r.kt)("p",null,"\uadf8 \uc678\uc758 \uc8fc\uc758\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals"),"\ub97c \uc7ac\uc815\uc758\ud560 \ub54c\ub294, ",(0,r.kt)("inlineCode",{parentName:"li"},"hashCode"),"\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub108\ubb34 \uc601\ub9ac\ud558\uac8c \ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ubcf5\uc7a1\ud558\uac8c \uad6c\uc131\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals"),"\ub97c \uc120\uc5b8\ud560 \ub54c\ub294, \uac1d\uccb4\ub97c \ub2e4\ub978 \ud0c0\uc785\uc73c\ub85c \ub300\uccb4\ud558\uba74 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"item-11-equals\ub97c-\uc624\ubc84\ub77c\uc774\ub529-\ud560\ub54c-hashcode\ub97c-\ud56d\uc0c1-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4"},"Item 11. ",(0,r.kt)("inlineCode",{parentName:"h2"},"Equals"),"\ub97c \uc624\ubc84\ub77c\uc774\ub529 \ud560\ub54c, ",(0,r.kt)("inlineCode",{parentName:"h2"},"Hashcode"),"\ub97c \ud56d\uc0c1 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals"),"\ub97c \uc7ac\uc815\uc758\ud558\ub294 \ubaa8\ub4e0 \ud074\ub798\uc2a4\uc5d0\uc11c\ub294 \ubc18\ub4dc\uc2dc ",(0,r.kt)("inlineCode",{parentName:"li"},"hashCode"),"\ub97c \uc7ac\uc815\uc758\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \uac1c\uccb4\uc5d0 \ub3d9\uc77c\ud55c \ud574\uc2dc \ucf54\ub4dc\uac00 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \uc804\ud615\uc801\uc778 hashCode method\n@Override public int hashCode() {\n  int result = Short.hashCode(areaCode);\n  result = 31 * result + Short.hashCode(prefix);\n  result = 31 * result + Short.hashCode(lineNum);\n  return result;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 hash code \uacc4\uc0b0\uc5d0\uc11c \uc911\uc694\ud55c \ud544\ub4dc\ub97c \uc81c\uc678\ud558\uba74 \uc548\ub429\ub2c8\ub2e4. (\ud488\uc9c8\uc774 \uae09\uaca9\ud558\uac8c \ub5a8\uc5b4\uc9d0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashCode"),"\uc5d0\uc11c \ubc18\ud658\ud55c \uac12\uc5d0 \ub300\ud574 \uc790\uc138\ud55c \uc2a4\ud399\uc744 \uc81c\uacf5\ud558\uba74 \uc548\ub429\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \ud074\ub77c\uc774\uc5b8\ud2b8 \uac12\uc5d0 \ud569\ub9ac\uc801\uc73c\ub85c \uc758\uc874\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"item-12-tostring\uc744-\ud56d\uc0c1-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4"},"Item 12. ",(0,r.kt)("inlineCode",{parentName:"h2"},"ToString"),"\uc744 \ud56d\uc0c1 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\uc758 \ubd80\ubd84\uc744 \uc911\uc2dc\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"equals\ub098 hashCode\ub97c \uc900\uc218\ud558\ub294 \uac83\ub9cc\ud07c\uc758 \ube44\uc911\uc740 \uc544\ub2c8\uc9c0\ub9cc, \uc88b\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"toString"),"\uc744 \uc81c\uacf5\ud558\uba74, \ud074\ub798\uc2a4\ub97c \ub354 \uc88b\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0 \uc774\ud6c4\uc5d0 \ub514\ubc84\uae45\uc744 \ud558\uae30\ub3c4 \ud3b8\ud574\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"li"},"toString")," \uba54\uc18c\ub4dc\ub294 \uac1d\uccb4\uc5d0\uc11c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ubc18\ud658\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud615\uc2dd \uc9c0\uc815 \uc5ec\ubd80\uc640 \uad00\uacc4\uc5c6\uc774, \uc758\ub3c4\ub97c \uba85\ud655\ud558\uac8c \ubb38\uc11c\ud654\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/* \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc138 \ubd80\ubd84\uc73c\ub85c \ub098\ub204\ub294 \uac83\uc740 \ub108\ubb34 \uc791\uae30\ub54c\ubb38\uc5d0,\n * \uc774\ub7ec\ud55c \ud544\ub4dc\uac12\uc744 \ucc44\uc6b0\uae30 \uc704\ud574, \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4.\n * Ex. lineNum\uc774 123\uc778 \uacbd\uc6b0, "0123"\uc73c\ub85c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n */\n@Override public String toString() {\n  return String.format("%03d-%03d-%04d", areaCode, prefix, lineNum);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud615\uc2dd\uc744 \uc9c0\uc815\ud588\ub4e0 \ub9d0\ub4e0, ",(0,r.kt)("inlineCode",{parentName:"li"},"toString"),"\ub85c \ubc18\ud658\ub418\ub294 \uac12\uc5d0 \ud3ec\ud568\ub41c \uc815\ubcf4\uc5d0 \ub300\ud574 \ud504\ub85c\uadf8\ub7a8 \uc561\uc138\uc2a4\ub97c \uc81c\uacf5\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74, toString\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uae09\uc801 \ud574\ub2f9 \uac1d\uccb4\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ubaa8\ub4e0 \uc815\ubcf4\ub4e4\uc744 \ub178\ucd9c\uc2dc\ud0a4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"item-13-\uc2e0\uc911\ud558\uac8c-clone\uc744-\uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4"},"Item 13. \uc2e0\uc911\ud558\uac8c ",(0,r.kt)("inlineCode",{parentName:"h2"},"Clone"),"\uc744 \uc624\ubc84\ub77c\uc774\ub529\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Cloneable")," \uc778\ud130\ud398\uc774\uc2a4\ub294 \ubcf5\uc81c\uac00\ub2a5\ud55c \ud074\ub798\uc2a4\ub97c \uba85\uc2dc\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc774\uc9c0\ub9cc, \uadf8 \ubaa9\uc801\uc744 \uc218\ud589\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc989, \uc5ec\ub7ec \uac1d\uccb4\ub97c \ubcf5\uc0ac\ud558\ub294 \uacbd\uc6b0 \uc798\ubabb\ub418\ub294 \uacbd\uc6b0\uac00 \uc27d\uac8c \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"immutable class"),"\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub0ad\ube44\uc801\uc778 \ubcf5\uc0ac\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," \uba54\uc18c\ub4dc\ub97c \uc81c\uacf5\ud558\uba74 \uc548\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Stack {\n  private Object[] elements;\n  private int size = 0;\n  private static final int DEFAULT_INITIAL_CAPACITY = 16;\n\n  public Stack() {\n    this.elements = new Object[DEFAULT_INITIAL_CAPACITY];\n  }\n\n  public void push(Object e) {\n    ensureCapacity();\n    elements[size++] = e;\n  }\n\n  public Object pop() {\n    if(size == 0) throw new EmptyStackException();\n    Object result = elements[--size];\n    elements[size] = null;  // \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucc38\uc870\n    return result;\n  }\n\n  public void ensureCapacity() {\n    if(elements.length == size)\n      elements = Arrays.copyOf(elements, 2 * size + 1);\n  }\n}\n")),(0,r.kt)("p",null,"\ud574\ub2f9 \uc704\uc758 \uc2a4\ud0dd \ud074\ub798\uc2a4\ub97c clone\uc744 \ud558\ub294 \uacbd\uc6b0, \ubcf5\uc81c\ub41c Stack \ud074\ub798\uc2a4\uc758 \uacbd\uc6b0 \ub3d9\uc77c\ud55c elements \uc8fc\uc18c\ub97c \ucc38\uc870\ud558\uae30 \ub54c\ubb38\uc5d0, \ubcf5\uc81c\ubcf8\uc758 \ubd88\ubcc0\uc131\uc774 \ud30c\uad34\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989, clone \uba54\uc11c\ub4dc\ub294 \uc0dd\uc131\uc790 \uc5ed\ud560\uc744 \uc218\ud589\ud558\uae30 \ub54c\ubb38\uc5d0, \uc6d0\ubcf8 \uac1d\uccb4\uc5d0 \ud574\ub97c \ub07c\uce58\uc9c0 \uc54a\uace0 \ubcf5\uc81c\ubcf8\uc5d0 \ubd88\ubcc0\uc744 \uc218\ud589\ud558\ub294 \uc9c0 \ud655\uc778\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c ",(0,r.kt)("strong",{parentName:"p"},"\ucd94\uac00\uc801\uc73c\ub85c \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uace0, \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \uc218\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub294 \ud070 \uc704\ud5d8\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 clone()\uc744 \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override public Stack clone() {\n  try {\n    Stack result = (Stack) super.clone();\n    result.elements = elements.clone();\n    return result;\n  } catch (CloneNotSupportedException e) {\n    throw new AssertionError();\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Cloneable")," \uc544\ud0a4\ud14d\ucc98\ub294 \ubcc0\uacbd\uac00\ub2a5\ud55c \uac1d\uccb4\uc744 \ucc38\uc870\ud558\ub294 final \ud544\ub4dc\uc758 \uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9\uacfc \ud638\ud658\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \uc544\ub798\uc640 \uac19\uc740 \ubcf5\uc0ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \ubc18\ubcf5\uc801\uc778 \ubcf5\uc0ac, \uae68\ub057\ud558\uc9c0\ub9cc \ub9f9\ubaa9\uc801\uc73c\ub85c \ubcf5\uc0ac\ubcf8\uc744 \ub36e\uc5b4\uc501\ub2c8\ub2e4.\nEntry deepCopy() {\n  Entry result = new Entry(key, value, next);\n  for(Entry p = result; p.next != null; p = p.next)\n    p.next = new Entry(p.next.key, p.next.value, p.next.next);\n  return result;\n}\n")),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \ubc29\ubc95\ubcf4\ub2e4, \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ubcf5\uc0ac \uc0dd\uc131\uc790 \ub610\ub294 \ubcf5\uc0ac \ud329\ud1a0\ub9ac\ub97c \uc81c\uacf5\ud558\ub294 \uac83"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \ubcf5\uc0ac \uc0dd\uc131\uc790, Copy constructor\npublic Yum(Yum yum) { ... }\n\n// \ubcf5\uc0ac \ud329\ud1a0\ub9ac, Copy factory\npublic static Yum newInstance(Yum yum) { ... };\n")),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ubc29\ubc95\uc740 \ud074\ub798\uc2a4\uac00 \uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4 \ud0c0\uc785 \uc778\uc2a4\ud134\uc2a4\ub97c \uc778\uc218\ub85c \ubc1b\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc6d0\ubcf8\uc758 \uad6c\ud604 \ud0c0\uc785\uc5d0 \uc5bd\ub9e4\uc774\uc9c0 \uc54a\uace0 \ubcf5\uc81c\ubcf8\uc758 \ud0c0\uc785\uc744 \uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c, ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloneable"),"\uc744 \ud655\uc7a5\ud558\ub294 \uac83\uc740 \uc88b\uc9c0 \uc54a\uc73c\uba70 \uc0dd\uc131\uc790\uc640 \ud329\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ubc30\uc5f4\uc758 \uacbd\uc6b0\ub294 clone \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ucd94\uac00\uc801\uc73c\ub85c \uc54c\uba74 \uc88b\uc740 \uae00")),(0,r.kt)("p",null,"clone() \uba54\uc11c\ub4dc\uc758 \uacbd\uc6b0, deep copy\uc774\uace0 arraycopy()\uc758 \uacbd\uc6b0, shallow clone\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://masima305.tistory.com/36"},"clone() vs arraycopy()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://velog.io/@coin46/Shallow-copy-vs-Deep-copy"},"Shallow Copy vs Deep Copy"))),(0,r.kt)("p",null,"[\ucd94\uac00\uc801\uc73c\ub85c ]"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"item-14-comparable\uc744-\uac1c\ubc1c\ud560\ub54c-\uace0\ub824\ud569\ub2c8\ub2e4"},"Item 14. ",(0,r.kt)("inlineCode",{parentName:"h2"},"Comparable"),"\uc744 \uac1c\ubc1c\ud560\ub54c \uace0\ub824\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"compareTo")," \uba54\uc11c\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Comparable")," \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc720\uc77c\ud55c \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. (Object \uba54\uc11c\ub4dc\uac00 \uc544\ub2d9\ub2c8\ub2e4.) \uc774\ub294 Comparable \uac1d\uccb4\uc758 \uceec\ub809\uc158 \uc720\uc9c0 \uad00\ub9ac\uc5d0\ub3c4 \ud3b8\ud558\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"sgn\uc5d0 \ub300\ud55c \uc5ec\ub7ec\uac00\uc9c0 \uc218\ud559\uc801 \uc870\uac74\uc774 \uc788\uc73c\ub098 \uc5ec\uae30\uc11c\ub294 \ub108\ubb34 \uc218\ud559\uc801\uc73c\ub85c \uc124\uba85\ub418\uae30\uc5d0 \uc774\ub97c \uc0dd\ub7b5\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \uac1c\uccb4 \ucc38\uc870 \ud544\ub4dc\uc640 \ube44\uad50 \uac00\ub2a5\ud55c \ub2e8\uc77c \ud544\ub4dc\npublic final class CaseInsensitiveString implements Comparable<CaseInsensitiveString> {\n  public int compareTo(CaseInsensitiveString cis) {\n    return String.CASE_INSENSITIVE_ORDER.compare(s, cis.s);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"equals"),"\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),"\uc640 \uc8fc\ub85c \ube44\uad50\ub300\uc0c1\uc774 \ub418\uba70 \uc774\ub97c \ud2b9\uc9d5\ubcc4\ub85c \uc815\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compareTo"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uae30\uc900\uc5d0 \ub530\ub77c \ube44\uad50\ud569\ub2c8\ub2e4. \ub3d9\uc77c\uc131 \ube44\uad50\uc5d0 \ub354\ud574 \uc21c\uc11c\uae4c\uc9c0 \ube44\uad50\ud560 \uc218 \uc788\uc73c\uba70 \uc81c\ub124\ub9ad\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 \uac12\uc758 \ub3d9\uc77c\uc131 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"=="),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 \ub3d9\uc77c\uc131 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc774\uc911\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"compareTo"),"\uc5d0 \ub300\ud574\uc11c \uc880 \ub354 \uc54c\uc544\ubcf4\uc790\uba74 \uc9c0\ucf1c\uc57c\ud558\ub294 3\uac00\uc9c0\uc758 \uaddc\uc57d\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 \ucc38\uc870\uc758 \uc21c\uc11c\ub97c \ubc14\uafd4 \ube44\uad50\ud574\ub3c4 \ud56d\uc0c1 \uc608\uc0c1\ud55c \uacb0\uacfc\uac00 \uac19\uc544\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"a < b, b < c\ub77c\uba74 a < c\uac00 \uc131\ub9bd\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac19\uc740 \uac1d\uccb4\ub4e4\ub07c\ub9ac\ub294 \uc5b4\ub5a4 \uac1d\uccb4\uc640 \ube44\uad50\ud558\ub354\ub77c\ub3c4 \ud56d\uc0c1 \uac19\uc544\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"comparable-vs-comparator"},"Comparable VS Comparator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Comparable")," \uc778\ud130\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"compareTo()")," \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub529 \ud558\uc5ec\uc11c \uc778\uc790\ub85c \ub118\uc5b4\uc628 \uac19\uc740 \ud0c0\uc785\uc758 \ub2e4\ub978 \uac1d\uccb4\uc640 \ub300\uc18c \ube44\uad50\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Player implements Comparable<Player> {\n// Fields, Getters, Setters \uc0dd\ub7b5\n  @Override\n  public int compareTo(Player o) {\n    return o.getScore() - getScore();\n  }\n}\n\nCollections.sort(players);\nSystem.out.println(players);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Comparator")," \uc778\ud130\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, \uc815\ub82c \ub300\uc0c1 \ud074\ub798\uc2a4\ub97c \uc218\uc815\ud560 \uc218 \uc5c6\uc744 \ub54c \uc8fc\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc8fc\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"Arrays.sort()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Collections.sort()")," \ub4f1\uc744 \uc0ac\uc6a9\ud558\uba70, \uc774\ub97c \ud1b5\ud574\uc11c \uc815\ub82c\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Comparator<Player> comparator = new Comparator<Player>() {\n  @Override\n  public int compare(Player a, Player b) {\n    return b.getScore() - a.getScore();\n  }\n};\n\nCollections.sort(players, comparator);\nSystem.out.println(players);\n")),(0,r.kt)("p",null,"\ub2e4\ub9cc \ubcf4\ud1b5\uc740 \ub78c\ub2e4\ud568\uc218\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Collections.sort(players, (a, b) -> b.getScore() - a.getScore());\nSystem.out.println(players);\n")),(0,r.kt)("p",null,"\uc774\uc5d0 \ub300\ud55c \uc0c1\uc138 \ub0b4\uc6a9\uc740 \uc544\ub798\ub974 \ucc38\uace0\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.daleseo.com/java-comparable-comparator/"},"comparable vs comparator"))))}c.isMDXComponent=!0}}]);