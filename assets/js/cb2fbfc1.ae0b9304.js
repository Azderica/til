(self.webpackChunktil=self.webpackChunktil||[]).push([[135],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),c=m(n),d=l,s=c["".concat(p,".").concat(d)]||c[d]||o[d]||r;return n?a.createElement(s,i(i({ref:t},k),{},{components:n})):a.createElement(s,i({ref:t},k))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4175:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i={sidebar_position:6},u={unversionedId:"dev/designing-data-intensive-applications/ch6",id:"dev/designing-data-intensive-applications/ch6",isDocsHomePage:!1,title:"6. \ud30c\ud2f0\uc154\ub2dd",description:"- \ub370\uc774\ud130\uc14b\uc774 \ub9e4\uc6b0 \ud06c\uac70\ub098 \uc9c8\uc758 \ucc98\ub9ac\ub7c9\uc774 \ub9e4\uc6b0 \ub192\ub2e4\uba74 \ubcf5\uc81c\ub9cc\uc73c\ub85c \ubd80\uc871\ud558\uba70 \ub370\uc774\ud130\ub97c \ud30c\ud2f0\uc158\uc73c\ub85c \ucabc\uac24 \ud544\uc694\uac00 \uc788\uc73c\uba70 \uc774\ub97c \uc0e4\ub529\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.",source:"@site/docs/dev/designing-data-intensive-applications/ch6.md",sourceDirName:"dev/designing-data-intensive-applications",slug:"/dev/designing-data-intensive-applications/ch6",permalink:"/til/docs/dev/designing-data-intensive-applications/ch6",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/designing-data-intensive-applications/ch6.md",version:"current",lastUpdatedAt:1635808069,formattedLastUpdatedAt:"11/2/2021",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. \ubcf5\uc81c",permalink:"/til/docs/dev/designing-data-intensive-applications/ch5"},next:{title:"\uac1d\uccb4 \uc9c0\ud5a5",permalink:"/til/docs/dev/object-orientation-and-design-patterns/ch1"}},p=[{value:"\ud30c\ud2f0\uc154\ub2dd\uacfc \ubcf5\uc81c",id:"\ud30c\ud2f0\uc154\ub2dd\uacfc-\ubcf5\uc81c",children:[]},{value:"\ud0a4-\uac12 \ub370\uc774\ud130 \ud30c\ud2f0\uc154\ub2dd",id:"\ud0a4-\uac12-\ub370\uc774\ud130-\ud30c\ud2f0\uc154\ub2dd",children:[{value:"\ud0a4 \ubc94\uc704 \uae30\uc900 \ud30c\ud2f0\uc154\ub2dd",id:"\ud0a4-\ubc94\uc704-\uae30\uc900-\ud30c\ud2f0\uc154\ub2dd",children:[]},{value:"\ud0a4\uc758 \ud574\uc2dc\uac12 \uae30\uc900 \ud30c\ud2f0\uc154\ub2dd",id:"\ud0a4\uc758-\ud574\uc2dc\uac12-\uae30\uc900-\ud30c\ud2f0\uc154\ub2dd",children:[]},{value:"\uc3e0\ub9b0 \uc791\uc5c5\ubd80\ud558\uc640 \ud56b\ud31f \uc644\ud654",id:"\uc3e0\ub9b0-\uc791\uc5c5\ubd80\ud558\uc640-\ud56b\ud31f-\uc644\ud654",children:[]}]},{value:"\ud30c\ud2f0\uc154\ub2dd\uacfc \ubcf4\uc870 \uc0c9\uc778",id:"\ud30c\ud2f0\uc154\ub2dd\uacfc-\ubcf4\uc870-\uc0c9\uc778",children:[{value:"\ubb38\uc11c \uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd",id:"\ubb38\uc11c-\uae30\uc900-\ubcf4\uc870-\uc0c9\uc778-\ud30c\ud2f0\uc154\ub2dd",children:[]},{value:"\uc6a9\uc5b4 \uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd",id:"\uc6a9\uc5b4-\uae30\uc900-\ubcf4\uc870-\uc0c9\uc778-\ud30c\ud2f0\uc154\ub2dd",children:[]}]},{value:"\ud30c\ud2f0\uc158\uacfc \uc7ac\uade0\ud615\ud654",id:"\ud30c\ud2f0\uc158\uacfc-\uc7ac\uade0\ud615\ud654",children:[{value:"\uc7ac\uade0\ud615\ud654 \uc804\ub7b5",id:"\uc7ac\uade0\ud615\ud654-\uc804\ub7b5",children:[]},{value:"\uc6b4\uc601: \uc790\ub3d9 \uc7ac\uade0\ud615\ud654\uc640 \uc218\ub3d9 \uc7ac\uade0\ud615\ud654",id:"\uc6b4\uc601-\uc790\ub3d9-\uc7ac\uade0\ud615\ud654\uc640-\uc218\ub3d9-\uc7ac\uade0\ud615\ud654",children:[]}]},{value:"\uc694\uccad \ub77c\uc6b0\ud305",id:"\uc694\uccad-\ub77c\uc6b0\ud305",children:[{value:"\ubcd1\ub82c \uc9c8\uc758 \uc2e4\ud589",id:"\ubcd1\ub82c-\uc9c8\uc758-\uc2e4\ud589",children:[]}]}],m={toc:p};function k(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc14b\uc774 \ub9e4\uc6b0 \ud06c\uac70\ub098 \uc9c8\uc758 \ucc98\ub9ac\ub7c9\uc774 \ub9e4\uc6b0 \ub192\ub2e4\uba74 \ubcf5\uc81c\ub9cc\uc73c\ub85c \ubd80\uc871\ud558\uba70 \ub370\uc774\ud130\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\ud30c\ud2f0\uc158"),"\uc73c\ub85c \ucabc\uac24 \ud544\uc694\uac00 \uc788\uc73c\uba70 \uc774\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\uc0e4\ub529"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158\uc744 \ub098\ub20c \ub54c\ub294 \ubcf4\ud1b5 \uac01 \ub370\uc774\ud130 \ub2e8\uc704\uac00 \ud558\ub098\uc758 \ud30c\ud2f0\uc158\uc5d0 \uc18d\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ud30c\ud2f0\uc154\ub2dd\uc744 \uc6d0\ud558\ub294 \uc8fc\ub41c \uc774\uc720\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\ud655\uc7a5\uc131"),"\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ube44\uacf5\uc720 \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \ub2e4\ub978 \ud30c\ud2f0\uc158\uc740 \ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc800\uc7a5\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ub300\uc6a9\ub7c9 \ub370\uc774\ud130\uc14b\uc774 \uc5ec\ub7ec \ub514\uc2a4\ud06c\uc5d0 \ubd84\uc0b0\ub420 \uc218 \uc788\uace0 \uc9c8\uc758 \ubd80\ud558\ub294 \uc5ec\ub7ec \ud504\ub85c\uc138\uc11c\uc5d0 \ubd84\uc0b0\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 \ub300\uc6a9\ub7c9 \ub370\uc774\ud130\uc14b\uc744 \ud30c\ud2f0\uc154\ub2dd\ud558\ub294 \ubc29\ubc95\uacfc \ub370\uc774\ud130 \uc0c9\uc778\uacfc \ud30c\ud2f0\uc154\ub2dd\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \uc54c\uc544\ubcf4\uace0, \uadf8 \ub2e4\uc74c\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130\uc5d0 \ub178\ub4dc\ub97c \ucd94\uac00\ud558\uac70\ub098 \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \ub178\ub4dc\ub97c \uc81c\uac70\ud560 \ub54c \ud544\uc694\ud55c \uc7ac\uade0\ud615\ud654\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc5b4\ub5bb\uac8c \uc694\uccad\uc744 \uc62c\ubc14\ub978 \ud30c\ud2f0\uc158\uc5d0 \uc804\ub2ec\ud558\uace0 \uc9c8\uc758\ub97c \uc2e4\ud589\ud558\ub294\uc9c0 \uac1c\ub7b5\uc801\uc73c\ub85c \ubd05\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ud30c\ud2f0\uc154\ub2dd\uacfc-\ubcf5\uc81c"},"\ud30c\ud2f0\uc154\ub2dd\uacfc \ubcf5\uc81c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \ubcf5\uc81c\uc640 \ud30c\ud2f0\uc154\ub2dd\uc744 \ud568\uaed8 \uc801\uc6a9\ud574 \uac01 \ud30c\ud2f0\uc158\uc758 \ubcf5\uc0ac\ubcf8\ub4e4 \uc5ec\ub7ec \ub178\ub4dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud55c \ub178\ub4dc\uc5d0 \uc5ec\ub7ec \ud30c\ud2f0\uc158\uc744 \uc800\uc7a5\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud0a4-\uac12-\ub370\uc774\ud130-\ud30c\ud2f0\uc154\ub2dd"},"\ud0a4-\uac12 \ub370\uc774\ud130 \ud30c\ud2f0\uc154\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd\uc758 \ubaa9\uc801\uc740 \ub370\uc774\ud130\uc640 \uc9c8\uc758 \ubd80\ud558\ub97c \ub178\ub4dc \uc0ac\uc774\uc5d0 \uace0\ub974\uac8c \ubd84\uc0b0\uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd\uc774 \uace0\ub974\uac8c \uc774\ub904\uc9c0\uc9c0 \uc54a\ub294 \uacbd\uc6b0, ",(0,r.kt)("strong",{parentName:"li"},"\uc3e0\ub838\ub2e4(skewed)")," \ub77c\uace0 \ub9d0\ud558\uba70 \ud30c\ud2f0\uc154\ub2dd\uc758 \ud6a8\uacfc\uac00 \ub9e4\uc6b0 \ub5a8\uc5b4\uc9d1\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub54c \ubd88\uade0\ud615\ud558\uac8c \ubd80\ud558\uac00 \ub192\uc740 \ud30c\ud2f0\uc158\uc744 ",(0,r.kt)("strong",{parentName:"li"},"\ud56b\uc2a4\ud31f"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud56b\uc2a4\ud31f\uc744 \ud68c\ud53c\ud558\ub294 \uac00\uc7a5 \ub2e8\uc21c\ud55c \ubc29\ubc95\uc740 \ub808\ucf54\ub4dc\ub97c \ud560\ub2f9\ud560 \ub178\ub4dc\ub97c \ubb34\uc791\uc704\ub85c \uc124\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud070 \ub2e8\uc810\uc73c\ub85c \uc5b4\ub5a4 \ub808\ucf54\ub4dc\ub97c \uc77d\uc744 \ub54c \ud574\ub2f9 \ub808\ucf54\ub4dc\ub97c \uc5b4\ub290 \ub178\ub4dc\uc5d0 \uc800\uc7a5\ud588\ub294\uc9c0 \uc54c \uc218 \uc5c6\uc73c\ubbc0\ub85c \ubaa8\ub4e0 \ub178\ub4dc\uc5d0\uc11c \ubcd1\ub82c\uc801\uc73c\ub85c \uc9c8\uc758\ub97c \uc2e4\ud589\ud574\uc57c\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub354 \uc88b\uc740 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 \ucc45\uc758 \ubaa9\ucc28\ucc98\ub7fc \uae30\ubcf8\ud0a4\ub97c \ud1b5\ud574\uc11c \ub808\ucf54\ub4dc\ub97c \uc811\uadfc\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ud0a4-\ubc94\uc704-\uae30\uc900-\ud30c\ud2f0\uc154\ub2dd"},"\ud0a4 \ubc94\uc704 \uae30\uc900 \ud30c\ud2f0\uc154\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 \uc885\uc774 \ubc31\uacfc\uc0ac\uc804\ucc98\ub7fc \uac01 \ud30c\ud2f0\uc158\uc5d0 \uc5f0\uc18d\ub41c \ubc94\uc704\uc758 \ud0a4\ub97c \ud560\ub2f9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 \ubc94\uc704\ub4e4 \uc0ac\uc774\uc758 \uacbd\uacc4\ub97c \uc54c\uba74 \uc5b4\ub5a4 \ud0a4\uac00 \uc5b4\ub290 \ud30c\ud2f0\uc158\uc5d0 \uc18d\ud558\ub294\uc9c0 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud0a4\uc758 \ubc94\uc704 \ud06c\uae30\uac00 \ubc18\ub4dc\uc2dc \ub3d9\uc77c\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \ub370\uc774\ud130\ub97c \uace0\ub974\uac8c \ubd84\uc0b0\uc2dc\ud0a4\ub824\uba74 \ud30c\ud2f0\uc158 \uacbd\uacc4\ub97c \ub370\uc774\ud130\uc5d0 \ub9de\ucdb0 \uc870\uc815\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \uacbd\uacc4\ub294 \uad00\ub9ac\uc790\uac00 \uc218\ub3d9\uc73c\ub85c \uc120\ud0dd\ud558\uac70\ub098 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc120\ud0dd\ub418\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud30c\ud2f0\uc158 \ub0b4\uc5d0\uc11c\ub294 \ud0a4\ub97c \uc815\ub82c\ub41c \uc21c\uc11c\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574 \ubc94\uc704 \uc2a4\uce94\uc774 \uc26c\uc6cc\uc9c0\ub294 \uc774\uc810\uacfc \ud0a4\ub97c \uc5f0\uc1c4\ub41c \uc0c9\uc778\uc73c\ub85c \uac04\uc8fc\ud574\uc11c \uc9c8\uc758 \ud558\ub098\ub85c \uad00\ub828 \ub808\ucf54\ub4dc \uc5ec\ub7ec \uac1c\ub97c \uc77d\uc5b4\uc624\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud0a4 \ubc94\uc704 \uae30\uc900 \ud30c\ud2f0\uc154\ub2dd\uc740 \ud2b9\uc815\ud55c \uc811\uadfc \ud328\ud134\uc774 \ud56b\uc2a4\ud31f\uc744 \uc720\ubc1c\ud55c\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex. \ud0c0\uc784\uc2a4\ud0ec\ud504\uce74 \ud0a4\ub77c\uba74 \ud30c\ud2f0\uc158\uc740 \uc2dc\uac04 \ubc94\uc704\uc5d0 \ub300\uc751\ub418\uba70 \ucd5c\uadfc \uc2dc\uac04\ub9cc \uc694\uad6c\ub418\ub294 \uc0c1\ud669\uc744 \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \ud0a4\ub97c \uccab\ubc88\uc9f8 \uc694\uc18c\ub85c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\ud0a4\uc758-\ud574\uc2dc\uac12-\uae30\uc900-\ud30c\ud2f0\uc154\ub2dd"},"\ud0a4\uc758 \ud574\uc2dc\uac12 \uae30\uc900 \ud30c\ud2f0\uc154\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc3e0\ub9bc\uacfc \ud56b\uc2a4\ud31f\uc758 \uc704\ud5d8 \ub54c\ubb38\uc5d0 \ub9ce\uc740 \ubd84\uc0b0 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\ub294 \ud0a4\uc758 \ud30c\ud2f0\uc158\uc744 \uc815\ud558\ub294 \ub370 \ud574\uc2dc \ud568\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc88b\uc740 \ud574\uc2dc \ud568\uc218\ub294 \uc3e0\ub9b0 \ub370\uc774\ud130\ub97c \uc785\ub825\ubc1b\uc544 \uade0\uc77c\ud558\uac8c \ubd84\uc0b0\ub418\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd \ud574\uc2dc \ud568\uc218\ub294 \uc554\ud638\uc801\uc73c\ub85c \uac15\ub825\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud0a4\uc5d0 \uc801\ud569\ud55c \ud574\uc2dc \ud568\uc218\ub97c \uad6c\ud588\ub2e4\uba74 \uac01 \ud30c\ud2f0\uc158\uc5d0 \ud574\uc26c\uac12 \ubc94\uc704\ub97c \ud560\ub2f9\ud558\uace0 \ud574\uc2dc\uac12\uc774 \ud30c\ud2f0\uc158\uc758 \ubc94\uc704\uc5d0 \uc18d\ud558\ub294 \ubaa8\ub4e0 \ud0a4\ub97c \ud30c\ud2f0\uc158\uc5d0 \ud560\ub2f9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uae30\ubc95\uc740 \ud30c\ud2f0\uc158 \uc0ac\uc774\uc5d0 \uade0\uc77c\ud558\uac8c \ubd84\uc0b0\uc2dc\ud0a4\ub294\ub370 \uc88b\uc2b5\ub2c8\ub2e4. \uc774\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\uc77c\uad00\uc131 \ud574\uc2f1"),"\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd\uc5d0 \ud0a4\uc758 \ud574\uc2dc\uac12\uc744 \uc0ac\uc6a9\ud574\uc11c \ud30c\ud2f0\uc154\ub2dd\ud558\uba74 \ud0a4 \ubc94\uc704 \ud30c\ud2f0\uc154\ub2dd\uc758 \uc88b\uc740 \uc18d\uc131\uc744 \uc783\uc5b4\ubc84\ub9bd\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc14\ub85c \ubc94\uc704 \uc9c8\uc758\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uce74\uc0b0\ub4dc\ub77c\ub294 \uc774\ub7ec\ud55c \uc7a5\uc810\uc744 \uc704\ud574 \ubcf5\ud569 \uae30\ubcf8\ud0a4\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989\uc774 \uacbd\uc6b0 \uccab\ubc88\uc9f8 \uce7c\ub7fc\uc5d0 \uace0\uc815\ub41c \uac12\uc744 \uc9c0\uc815\ud558\uba74 \ub2e4\ub978 \uce7c\ub7fc\uc5d0 \ub300\ud574 \ubc94\uc704 \uc2a4\uce94\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uc1c4\ub41c \uc0c9\uc778\uc744 \uc0ac\uc6a9\ud558\uba74 \uc77c\ub300\ub2e4 \uad00\uacc4\ub97c \ud45c\ud604\ud558\ub294 \uc6b0\uc544\ud55c \ub370\uc774\ud130 \ubaa8\ub378\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc77c\uad00\uc131 \ud574\uc2f1(\ud574\uc2dc \ud30c\ud2f0\uc154\ub2dd)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CDN\uac19\uc740 \uc778\ud130\ub137 \uaddc\ubaa8\uc758 \uce90\uc2dc \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ubd80\ud558\ub97c \uade0\ub4f1\ud558\uac8c \uc2dc\ud0a4\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \uacbd\uacc4\ub97c \ubb34\uc791\uc704\ub85c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ud63c\uc6a9\ud558\uae30 \uc26c\uc6b4 \ub2e8\uc5b4\uc774\ubbc0\ub85c ",(0,r.kt)("strong",{parentName:"li"},"\ud574\uc2dc \ud30c\ud2f0\uc154\ub2dd")," \uc6a9\uc5b4\ub85c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\uc3e0\ub9b0-\uc791\uc5c5\ubd80\ud558\uc640-\ud56b\ud31f-\uc644\ud654"},"\uc3e0\ub9b0 \uc791\uc5c5\ubd80\ud558\uc640 \ud56b\ud31f \uc644\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0a4\ub97c \ud574\uc2f1\ud574\uc11c \ud30c\ud2f0\uc158\uc744 \uc815\ud558\uba74 \ud56b\uc2a4\ud31f\uc744 \uc904\uc774\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud56b\uc2a4\ud31f\uc744 \uc644\uc804\ud788 \uc81c\uac70\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud56d\uc0c1 \ub3d9\uc77c\ud55c \ud0a4\ub97c \uc77d\uace0 \uc4f4\ub290 \uadf9\ub2e8\uc801\uc778 \uc0c1\ud669\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uc694\uccad\uc774 \ub3d9\uc77c\ud55c \ud30c\ud2f0\uc158\uc73c\ub85c \uc3e0\ub9ac\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"ex. \uc218\ub9cc \uba85\uc758 \ud314\ub85c\uc6cc\ub97c \uac70\ub290\ub9b0 \uc720\uba85\uc778\uc778 \uacbd\uc6b0 \ud6c4\ud3ed\ud48d\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud604\ub300 \ub370\uc774\ud130 \uc2dc\uc2a4\ud15c\uc740 \ub300\ubd80\ubd84 \ud06c\uac8c \uc3e0\ub9b0 \uc791\uc5c5\ubd80\ud558\ub97c \uc790\ub3d9\uc73c\ub85c \ubcf4\uc815\ud558\uc9c0 \ubabb\ud558\ubbc0\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc3e0\ub9bc\uc744 \uc644\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ud0a4\uc5d0 \ucabc\uac1c\uc11c \uc4f0\uba74 \uc77d\uae30\ub97c \uc2e4\ud589\ud560 \ub54c \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud574\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud30c\ud2f0\uc154\ub2dd\uacfc-\ubcf4\uc870-\uc0c9\uc778"},"\ud30c\ud2f0\uc154\ub2dd\uacfc \ubcf4\uc870 \uc0c9\uc778"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd \ubc29\uc2dd\uc740 \ud0a4-\uac12 \ub370\uc774\ud130 \ubaa8\ub378\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc\ub97c \uae30\ubcf8\ud0a4\ub97c \ud1b5\ud574\uc11c\ub9cc \uc811\uadfc\ud55c\ub2e4\uba74 \ud0a4\ub85c\ubd80\ud130 \ud30c\ud2f0\uc158\uc744 \uacb0\uc815\ud558\uace0 \uc774\ub97c \uc0ac\uc6a9\ud574 \ud574\ub2f9 \ud0a4\ub97c \ub2f4\ub2f9\ud558\ub294 \ud30c\ud2f0\uc158\uc73c\ub85c \uc77d\uae30 \uc4f0\uae30 \uc694\uccad\uc744 \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc774 \uc5f0\uad00\ub418\uba74 \uc0c1\ud669\uc740 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc740 \ubcf4\ud1b5 \ub808\ucf54\ub4dc\ub97c \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud558\ub294 \uc6a9\ub3c4\uac00 \uc544\ub2cc \ud2b9\uc815\ud55c \uac12\uc774 \ubc1c\uc0dd\ud55c \ud56d\ubaa9\uc744 \uac80\uc0c9\ud558\ub294 \uc218\ub2e8\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc740 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \ud575\uc2ec \uc694\uc18c\uc774\uba70 \ubb38\uc11c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c\ub3c4 \ud754\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \ud0a4-\uac12 \uc800\uc7a5\uc18c\uc5d0\uc11c\ub294 \uad6c\ud604 \ubcf5\uc7a1\ub3c4\uac00 \ucd94\uac00\ub418\ub294 \uac83\uc744 \ud53c\ud558\ub824\uace0 \ubcf4\uc870 \uc0c9\uc778\uc744 \uc9c0\uc6d0\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \ub370\uc774\ud130\ubaa8\ub378\ub9c1\uc5d0\uc11c \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc740 \uc194\ub77c\ub098 ES \uac19\uc740 \uac80\uc0c9 \uc11c\ubc84\uc5d0\uc11c\ub294 \uc874\uc7ac\uc774 \uc774\uc720\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc740 \ud30c\ud2f0\uc158\uc5d0 \uae54\ub054\ud558\uac8c \ub300\uc751\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc0c9\uc778\uc774 \uc788\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ud30c\ud2f0\uc154\ub2dd\ud558\ub294\ub370 \ub110\ub9ac \uc4f0\uc774\ub294 \ub450\uac00\uc9c0 \ubc29\ubc95\uc774 ",(0,r.kt)("strong",{parentName:"li"},"\ubb38\uc11c \uae30\ubc18 \ud30c\ud2f0\uc154\ub2dd"),"\uacfc ",(0,r.kt)("strong",{parentName:"li"},"\uc6a9\uc5b4 \uae30\ubc18 \ud30c\ud2f0\uc154\ub2dd"),"\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\ubb38\uc11c-\uae30\uc900-\ubcf4\uc870-\uc0c9\uc778-\ud30c\ud2f0\uc154\ub2dd"},"\ubb38\uc11c \uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud56d\ubaa9\uc5d0\ub294 ",(0,r.kt)("strong",{parentName:"li"},"\ubb38\uc11c ID(document ID)")," \ub77c\uace0 \ubd80\ub974\ub294 \uace0\uc720 ID\uac00 \uc788\uace0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ubb38\uc11c ID \uae30\uc900\uc73c\ub85c \ud30c\ud2f0\uc154\ub2dd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc11c\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c\ub294 \ud544\ub4dc, \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c\ub294 \uce7c\ub7fc\uc5d0 \ubcf4\uc870 \uc0c9\uc778\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c9\uc778\uc744 \uc120\uc5b8\ud588\ub2e4\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc790\ub3d9\uc73c\ub85c \uc0c9\uc778 \uc0dd\uc131\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/139751925-deca45fa-6c0c-4540-bf5f-f9ea7fcdc6a1.png",alt:"\ubb38\uc11c\uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc0c9\uc778 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 \uac01 \ud30c\ud2f0\uc158\uc774 \uc644\uc804\ud788 \ub3c5\ub9bd\uc801\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud30c\ud2f0\uc158\uc740 \uc790\uc2e0\uc758 \ubcf4\uc870 \uc0c9\uc778\uc744 \uc720\uc9c0\ud558\uba70 \uadf8 \ud30c\ud2f0\uc158\uc5d0 \uc18d\ud558\ub294 \ubb38\uc11c\ub9cc \ub2f4\ub2f9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ud30c\ud2f0\uc158\uc5d0 \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\ub294\uc9c0 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc774\uc720\ub85c \ubb38\uc11c \ud30c\ud2f0\uc154\ub2dd \uc0c9\uc778\uc740 ",(0,r.kt)("strong",{parentName:"li"},"\uc9c0\uc5ed \uc0c9\uc778(local index)")," \uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc11c \uae30\uc900\uc73c\ub85c \ud30c\ud2f0\uc154\ub2dd\ub41c \uc0c9\uc778\uc744 \uc368\uc11c \uc77d\uc744 \ub54c\ub294 \uc8fc\uc758\ub97c \uae30\uc6b8\uc5ec\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \ube68\uac04\uc0c9 \uc790\ub3d9\ucc28\ub97c \ucc3e\ub294 \uacbd\uc6b0, \ubaa8\ub4e0 \ud30c\ud2f0\uc158\uc73c\ub85c \uc9c8\uc758\ub97c \ubcf4\ub0b4\uc11c \uc5bb\uc740 \uacb0\uacfc\ub97c \ubaa8\ub450 \ubaa8\uc544\uc57c\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc154\ub2dd\ub41c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc774\ub7f0 \uc2dd\uc73c\ub85c \uc9c8\uc758\ub97c \ubcf4\ub0b4\ub294 \ubc29\ubc95\uc744 ",(0,r.kt)("strong",{parentName:"li"},"\uc2a4\uce90\ud130/\uac1c\ud130(scatter/gather)"),"\ub77c\uace0\ub3c4 \ud558\ub294\ub370 \ubcf4\uc870 \uc0c9\uc778\uc744 \uc368\uc11c \uc77d\ub294 \uc9c8\uc758\ub294 \ud070 \ube44\uc6a9\uc774 \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud30c\ud2f0\uc158\uc5d0\uc11c \uc9c8\uc758\ub97c \ubcd1\ub82c \uc2e4\ud589\ud558\ub354\ub77c\ub3c4 \uc2a4\uce90\ud130/\uac1c\ud130\ub294 \uaf2c\ub9ac \uc9c0\uc5f0 \uc2dc\uac04 \uc99d\ud3ed\uc774 \ubc1c\uc0dd\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7fc\uc5d0\ub3c4 \ubcf4\uc870 \uc0c9\uc778\uc744 \ubb38\uc11c \uae30\uc900\uc73c\ub85c \ud30c\ud2f0\uc154\ub2dd\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. (\ubabd\uace0DB, \uce74\uc0b0\ub4dc\ub77c, ES \ub4f1) \ubaa8"),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ubcf4\uc870 \uc0c9\uc778 \uc9c8\uc758\uac00 \ub2e8\uc77c \ud30c\ud2f0\uc158\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \ud30c\ud2f0\uc154\ub2dd \ubc29\uc2dd\uc744 \uc124\uacc4\ud558\uae30\ub97c \uad8c\uc7a5\ud558\uc9c0\ub9cc \ud56d\uc0c1 \uac00\ub2a5\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"\uc6a9\uc5b4-\uae30\uc900-\ubcf4\uc870-\uc0c9\uc778-\ud30c\ud2f0\uc154\ub2dd"},"\uc6a9\uc5b4 \uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud30c\ud2f0\uc158\uc774 \uc790\uc2e0\ub9cc\uc758 \ubcf4\uc870 \uc0c9\uc778 \ub300\uc2e0 \ubaa8\ub4e0 \ud30c\ud2f0\uc158\uc758 \ub370\uc774\ud130\ub97c \ub2f4\ub2f9\ud558\ub294 \uc804\uc5ed \uc0c9\uc778\uc744 \ub9cc\ub4e4 \uc218\ub3c4 \u3163\u3147\u3146\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ud55c \ub178\ub4dc\uc5d0\ub9cc \uc0c9\uc778\uc744 \uc800\uc7a5\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ub178\ub4dc\uac00 \ubcd1\ubaa9\uc774 \ub418\uc5b4 \ud30c\ud2f0\uc154\ub2dd\uc758 \ubaa9\uc801\uc744 \ud574\uce58\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uc0c9\uc778\ub3c4 \ud30c\ud2f0\uc154\ub2dd\ud574\uc57c \ud558\uc9c0\ub9cc \uae30\ubcf8 \ud0a4 \uc0c9\uc778\uacfc\ub294 \ub2e4\ub978 \uc2dd\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42582516/139752705-b5a8d365-f5d2-42bb-bc40-6bc8efd09a5d.png",alt:"\uc6a9\uc5b4\uae30\uc900 \ubcf4\uc870 \uc0c9\uc778 \ud30c\ud2f0\uc154\ub2dd"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc3e\uace0\uc790 \ud558\ub294 \uc6a9\uc5b4\uc5d0 \ub530\ub77c \uc0c9\uc778\uc758 \ud30c\ud2f0\uc158\uc774 \uacb0\uc815\ub418\ubbc0\ub85c \uc774\ub7f0 \uc2dd\uc758\uc0c9\uc778\uc744 \uc6a9\uc5b4 \uae30\uc900\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"li"},"\ud30c\ud2f0\uc154\ub2dd\ub410\ub2e4(term-partitioned)")," \ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6a9\uc5b4\ub77c\ub294 \uc774\ub984\uc740 \uc804\ubb38 \uc0c9\uc778\uc5d0\uc11c \ub098\uc654\uc73c\uba70 \ubb38\uc11c\uc5d0 \ub4f1\uc7a5\ud558\ub294 \ubaa8\ub4e0 \ub2e8\uc5b4\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.\n\uc0c9\uc778\uc744 \ud30c\ud2f0\uc154\ub2dd\ud560 \ub54c \uc6a9\uc5b4 \uc790\uccb4\ub97c \uc0ac\uc6a9\ud560\uc218\ub3c4 \uc6a9\uc5b4\uc758 \ud574\uc2dc\uac12\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc787\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc11c \ud30c\ud2f0\uc154\ub2dd \uc0c9\uc778\uc5d0 \ube44\ud574 \uc804\uc5ed \uc0c9\uc778\uc774 \uac00\uc9c0\ub294 \uc774\uc810\uc740 \uc77d\uae30\uac00 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ubaa8\ub4e0 \ud30c\ud2f0\uc158\uc5d0 \uc2a4\uce90\ud130/\uac1c\ub354\ub97c \uc2e4\ud589\ud560 \ud544\uc694\uc5c6\uc774 \uc6d0\ud558\ub294 \uc6a9\uc5b4\ub97c \ud3ec\ud568\ud558\ub294 \ud30c\ud2f0\uc158\uc73c\ub85c\ub9cc \uc694\uccad\uc744 \ubcf4\ub0b4\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub807\uc9c0\ub9cc \uc804\uc5ed \uc0c9\uc778\uc740 \uc4f0\uae30\uac00 \ub290\ub9ac\uace0 \ubcf5\uc7a1\ud558\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc804\uc5ed \ubcf4\uc870 \uc0c9\uc778\uc740 \ub300\uac1c \ube44\ub3d9\uae30\ub85c \uac31\uc2e0\ub429\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\ud30c\ud2f0\uc158\uacfc-\uc7ac\uade0\ud615\ud654"},"\ud30c\ud2f0\uc158\uacfc \uc7ac\uade0\ud615\ud654"),(0,r.kt)("h3",{id:"\uc7ac\uade0\ud615\ud654-\uc804\ub7b5"},"\uc7ac\uade0\ud615\ud654 \uc804\ub7b5"),(0,r.kt)("h3",{id:"\uc6b4\uc601-\uc790\ub3d9-\uc7ac\uade0\ud615\ud654\uc640-\uc218\ub3d9-\uc7ac\uade0\ud615\ud654"},"\uc6b4\uc601: \uc790\ub3d9 \uc7ac\uade0\ud615\ud654\uc640 \uc218\ub3d9 \uc7ac\uade0\ud615\ud654"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc694\uccad-\ub77c\uc6b0\ud305"},"\uc694\uccad \ub77c\uc6b0\ud305"),(0,r.kt)("h3",{id:"\ubcd1\ub82c-\uc9c8\uc758-\uc2e4\ud589"},"\ubcd1\ub82c \uc9c8\uc758 \uc2e4\ud589"))}k.isMDXComponent=!0}}]);