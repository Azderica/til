(self.webpackChunktil=self.webpackChunktil||[]).push([[4565],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=o(t),d=a,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},738:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),i={sidebar_position:10},u={unversionedId:"dev/refactoring/ch10",id:"dev/refactoring/ch10",isDocsHomePage:!1,title:"10. \uc870\uac74\ubd80 \ub85c\uc9c1 \uac04\uc18c\ud654",description:"- \uc870\uac74\ubb38 \ubd84\ud574\ud558\uae30, \uc911\ubcf5 \uc870\uac74\uc2dd \ud1b5\ud569\ud558\uae30",source:"@site/docs/dev/refactoring/ch10.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch10",permalink:"/til/docs/dev/refactoring/ch10",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch10.md",version:"current",lastUpdatedAt:1647264287,formattedLastUpdatedAt:"3/14/2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. \ub370\uc774\ud130 \uc870\uc9c1\ud654",permalink:"/til/docs/dev/refactoring/ch9"},next:{title:"11. API \ub9ac\ud329\ud130\ub9c1",permalink:"/til/docs/dev/refactoring/ch11"}},s=[{value:"10.1 \uc870\uac74\ubb38 \ubd84\ud574\ud558\uae30",id:"101-\uc870\uac74\ubb38-\ubd84\ud574\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}]},{value:"10.2 \uc870\uac74\uc2dd \ud1b5\ud569\ud558\uae30",id:"102-\uc870\uac74\uc2dd-\ud1b5\ud569\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-1",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-1",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",children:[]}]},{value:"10.3 \uc911\ucca9 \uc870\uac74\ubb38\uc744 \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30",id:"103-\uc911\ucca9-\uc870\uac74\ubb38\uc744-\ubcf4\ud638-\uad6c\ubb38\uc73c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-2",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-2",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",children:[]}]},{value:"10.4 \uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30",id:"104-\uc870\uac74\ubd80-\ub85c\uc9c1\uc744-\ub2e4\ud615\uc131\uc73c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-3",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-3",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",children:[]}]},{value:"10.5 \ud2b9\uc774 \ucf00\uc774\uc2a4 \ucd94\uac00\ud558\uae30",id:"105-\ud2b9\uc774-\ucf00\uc774\uc2a4-\ucd94\uac00\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-4",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-4",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-4",children:[]}]},{value:"10.6 \uc5b4\uc11c\uc158 \ucd94\uac00\ud558\uae30",id:"106-\uc5b4\uc11c\uc158-\ucd94\uac00\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-5",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-5",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-5",children:[]}]},{value:"10.7 \uc81c\uc5b4 \ud50c\ub798\ud06c\ub97c \ud0c8\ucd9c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30",id:"107-\uc81c\uc5b4-\ud50c\ub798\ud06c\ub97c-\ud0c8\ucd9c\ubb38\uc73c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-6",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-6",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-6",children:[]}]}],o={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc870\uac74\ubb38 \ubd84\ud574\ud558\uae30, \uc911\ubcf5 \uc870\uac74\uc2dd \ud1b5\ud569\ud558\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \uc870\uac74\ubb38\uc778 \uacbd\uc6b0\ub098 \ub17c\ub9ac\uc801 \uc870\ud569\uc744 \uba85\ud655\ud558\uac8c \ub2e4\ub4ec\ub294 \uacbd\uc6b0"))),(0,l.kt)("li",{parentName:"ul"},"\uc911\ucca9 \uc870\uac74\ubb38\uc744 \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30, \uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud575\uc2ec \ub85c\uc9c1 \uc804 \ubb34\uc5b8\uac00\ub97c \uac80\uc0ac\ud558\uac70\ub098, \uac19\uc740 \ubd84\uae30 \ub85c\uc9c1\uc774 \uc790\uc8fc \ub4f1\uc7a5\ud558\ub294 \uacbd\uc6b0"))),(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc774 \ucf00\uc774\uc2a4 \ucd94\uac00\ud558\uae30(\ub110 \uac1c\uccb4 \ucd94\uac00\ud558\uae30), \uc5b4\uc11c\uc158 \ucd94\uac00\ud558\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc774 \ucf00\uc774\uc2a4 \ucc98\ub9ac\uc2dc"))),(0,l.kt)("li",{parentName:"ul"},"\uc81c\uc5b4 \ud50c\ub798\uadf8\ub97c \ud0c8\ucd9c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc81c\uc5b4 \ud50c\ub798\uadf8\ub97c \uc774\uc6a9\ud574 \ucf54\ub4dc \ub3d9\uc791 \ud750\ub984\uc744 \ubc14\uafb8\ub294 \uacbd\uc6b0")))),(0,l.kt)("h2",{id:"101-\uc870\uac74\ubb38-\ubd84\ud574\ud558\uae30"},"10.1 \uc870\uac74\ubb38 \ubd84\ud574\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nif (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))\n  change = quantity * plan.summerRate\nelse change = quantity * plan.regularRate + plan.regularServiceCharge\n\n// after\nif (summer()) charge = summerCharge()\nelse charge = regularCharge()\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \uc870\uac74\ubd80 \ub85c\uc9c1\uc740 \ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac70\ub300\ud55c \ucf54\ub4dc \ube14\ub7ed\uc740 \ucf54\ub4dc\ub97c \ubd80\uc704\ubcc4\ub85c \ubd84\ud574\ud55c \ub2e4\uc74c \ud574\uccb4\ub41c \ucf54\ub4dc \ub369\uc5b4\ub9ac\ub4e4\uc744 \uac01 \ub369\uc5b4\ub9ac\uc758 \uc758\ub3c4\ub97c \uc0b4\uc778 \uc774\ub984\uc758 \ud568\uc218 \ud638\ucd9c\uc744 \ud588\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc870\uac74\uc2dd\uacfc \uadf8 \uc870\uac74\uc2dd\uc5d0 \ub2ec\ub9b0 \uc870\uac74\uc808 \uac01\uac01\uc744 \ud568\uc218\ub85c \ucd94\ucd9c\ud588\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \uc804 \ucf54\ub4dc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))\n  change = quantity _ plan.summerRate\nelse change = quantity _ plan.regularRate + plan.regularServiceCharge\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"charge = summer() ? summerCharge() : regularCharge()\n\nfunction summer() {\n  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)\n}\nfunction summerCharge() {\n  return quantity * plan.summerRate\n}\nfunction regularCharge() {\n  return quantity * plan.regularRate + plan.regularServiceCharge\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"102-\uc870\uac74\uc2dd-\ud1b5\ud569\ud558\uae30"},"10.2 \uc870\uac74\uc2dd \ud1b5\ud569\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nif (anEmployee.seniority < 2) return 0\nif (anEmployee.monthsDisabled > 12) return 0\nif (anEmployee.isPartTime) return 0\n\n// after\nif (isNotEligibleForDisability()) return 0\n\nfunction isNotEligibleForDisability() {\n  return (\n    anEmployee.seniority < 2 ||\n    anEmployee.monthsDisabled > 12 ||\n    anEmployee.isPartTime\n  )\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-1"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ube44\uad50\ud558\ub294 \uc870\uac74\uc740 \ub2e4\ub974\ub098 \uacb0\uacfc\ub85c \uc218\ud589\ud558\ub294 \ub3d9\uc791\uc774 \ub611\uac19\uc740 \uacbd\uc6b0\uc5d0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc870\uac74\ubd80 \ucf54\ub4dc\ub97c \ud1b5\ud569\ud558\ub294 \uacbd\uc6b0\ub294 \ub450\uac00\uc9c0 \uc774\uc720\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc870\uac01\uc73c\ub85c \ub098\ub25c \uc870\uac74\ub4e4\uc744 \ud558\ub098\ub85c \ud1b5\ud569\ud568\uc73c\ub85c\uc368 \ud558\ub294 \uc77c\uc774 \uba85\ud655\ud574\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30 \uae4c\uc9c0 \uc774\uc5b4\uc9c8 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"\uc808\ucc28-1"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud574\ub2f9 \uc870\uac74\uc2dd\uc744 \ubaa8\ub450\uc5d0 \ubcf4\uc218\ud6a8\uacfc\uac00 \uc5c6\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc870\uac74\ubb38 \ub450 \uac1c\ub97c \uc120\ud0dd\ud558\uc5ec \ub450 \uc870\uac74\ubb38\uc758 \uc870\uac74\uc2dd\ub4e4\uc744 \ub17c\ub9ac \uc5f0\uc0b0\uc790\ub85c \uacb0\ud569\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc870\uac74\uc744 \ud558\ub098\ub9cc \ub0a8\uc744 \ub54c\uae4c\uc9c0 2~3 \uacfc\uc815\uc744 \ubc18\ubcf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud558\ub098\ub85c \ud569\uccd0\uc9c4 \uc870\uac74\uc2dd\uc744 \ud568\uc218\ub85c \ucd94\ucd9c\ud560\uc9c0 \uace0\ubbfc\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\uc55e\uc758 \uc608\uc2dc \ub9d0\uace0\ub3c4 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nif (anEmployee.onVacation) if (anEmployee.seniority > 10) return 1\nreturn 0.5\n\n// after\nif (anEmployee.onVacation && anEmployee.seniority > 10) return 1\nelse return 0\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"103-\uc911\ucca9-\uc870\uac74\ubb38\uc744-\ubcf4\ud638-\uad6c\ubb38\uc73c\ub85c-\ubc14\uafb8\uae30"},"10.3 \uc911\ucca9 \uc870\uac74\ubb38\uc744 \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nfunction getPayAmount() {\n  let result\n  if (isDead) result = deadAmount()\n  else {\n    if (isSeparated) result = separatedAmount()\n    else {\n      if (isRetired) result = retiredAmount()\n      else result = normalPayAmount()\n    }\n  }\n  return result\n}\n\n// after\nfunction getPayAmount() {\n  if (isDead) return deadAmount()\n  if (isSeparated) return separatedAmount()\n  if (isRetired) return retiredAmount()\n  return normalPayAmount()\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-2"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc870\uac74\ubb38\uc740 \uc8fc\ub85c \ub450\uac00\uc9c0 \ud615\ud0dc\ub85c \uc4f0\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ucc38\uc778 \uacbd\ub85c\uc640 \uac70\uc9d3\uc778 \uacbd\ub85c \ubaa8\ub450 \uc815\uc0c1 \ub3d9\uc791\uc73c\ub85c \uc774\uc5b4\uc9c0\ub294 \ud615\ud0dc"),(0,l.kt)("li",{parentName:"ul"},"\ud55c\ucabd\ub9cc \uc815\uc0c1\uc778 \ud615\ud0dc"))),(0,l.kt)("li",{parentName:"ul"},"\uc911\ucca9 \uc870\uac74\ubb38\uc744 \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30 \ub9ac\ud329\ud130\ud305\uc758 \ud575\uc2ec\uc740 \uc758\ub3c4\ub97c \ubd80\uac01\ud558\ub294 \ub370 \uc758\ubbf8\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-2"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uad50\uccb4\ud574\uc57c \ud560 \uc870\uac74 \uc911 \uac00\uc7a5 \ubc14\uae65 \uac83\uc744 \uc120\ud0dd\ud558\uc5ec \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"1~2 \uacfc\uc815\uc744 \ud544\uc694\ud55c \ub9cc\ud07c \ubc18\ubcf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ubaa8\ub4e0 \ubcf4\ud638 \uad6c\ubb38\uc774 \uac19\uc740 \uacb0\uacfc\ub97c \ubc18\ud658\ud55c\ub2e4\uba74 \ubcf4\ud638 \uad6c\ubb38\ub4e4\uc758 \uc870\uac74\uc2dd\uc744 \ud1b5\ud569\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function getPayAmount(employee) {\n  let result\n  if (employee.isSeparated) result = { amount: 0, reasonCode: 'SEP' }\n  else {\n    if (employee.isRetired) result = { amount: 0, reasonCode: 'RET' }\n    else {\n      // \uae09\uc5ec \uacc4\uc0b0 \ub85c\uc9c1\n      lorem.ipsum(dolor.sitAet)\n      consectetur(adipiscing).elict()\n      sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)\n      ut.enim.ad(minim.veniam)\n      result = someFinalComputation()\n    }\n  }\n  return result\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd5c\uc0c1\uc704 \uc870\uac74\ubd80\ud130 \ubcf4\ud638 \uad6c\ubb38\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function getPayAmount(employee) {\n  let result\n  if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' }\n  if (employee.isRetired) result = { amount: 0, reasonCode: 'RET' }\n  else {\n    // \uae09\uc5ec \uacc4\uc0b0 \ub85c\uc9c1\n    lorem.ipsum(dolor.sitAet)\n    consectetur(adipiscing).elict()\n    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)\n    ut.enim.ad(minim.veniam)\n    result = someFinalComputation()\n  }\n  return result\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ud6c4 \ub2e4\uc74c \uc870\uac74\uc73c\ub85c \ub118\uae41\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function getPayAmount(employee) {\n  if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' }\n  if (employee.isRetired) return { amount: 0, reasonCode: 'RET' }\n  else {\n    // \uae09\uc5ec \uacc4\uc0b0 \ub85c\uc9c1\n    lorem.ipsum(dolor.sitAet)\n    consectetur(adipiscing).elict()\n    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)\n    ut.enim.ad(minim.veniam)\n    return someFinalComputation()\n  }\n}\n")),(0,l.kt)("h4",{id:"\uc870\uac74-\ubc18\ub300\ub85c-\ub9cc\ub4e4\uae30"},"\uc870\uac74 \ubc18\ub300\ub85c \ub9cc\ub4e4\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function adjustedCapital(anInstrument) {\n  let result = 0\n  if (anInstrument.capital > 0) {\n    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {\n      result =\n        (anInstrument.income / anInstrument.duration) *\n        anInstrument.adjustmentFactor\n    }\n  }\n  return result\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc870\uac74\uc744 \uc5ed\uc73c\ub85c \ubc14\uafb8\uba74\uc11c \ubcf4\ud638\uad6c\ubb38\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function adjustedCapital(anInstrument) {\n  let result = 0\n  if (anInstrument.capital <= 0) return result\n  if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {\n    result =\n      (anInstrument.income / anInstrument.duration) *\n      anInstrument.adjustmentFactor\n  }\n  return result\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc870\uac74\uc744 \uac04\uc18c\ud654\ud558\uace0, \uc870\uac74\uc2dd\uc744 \ud1b5\ud569\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function adjustedCapital(anInstrument) {\n  if (\n    anInstrument.capital <= 0 ||\n    anInstrument.interestRate <= 0 ||\n    anInstrument.duration <= 0\n  )\n    return result\n  return (\n    (anInstrument.income / anInstrument.duration) *\n    anInstrument.adjustmentFactor\n  )\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"104-\uc870\uac74\ubd80-\ub85c\uc9c1\uc744-\ub2e4\ud615\uc131\uc73c\ub85c-\ubc14\uafb8\uae30"},"10.4 \uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nswitch (bird.type) {\n  case '\uc720\ub7fd \uc81c\ube44':\n    return '\ubcf4\ud1b5\uc774\ub2e4'\n  case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n    return bird.numberOfCounts > 2 ? '\uc9c0\ucce4\ub2e4' : '\ubcf4\ud1b5\uc774\ub2e4'\n  case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n    return bird.voltage > 100 ? '\uadf8\uc744\ub838\ub2e4' : '\uc608\uc058\ub2e4'\n  default:\n    return '\uc54c \uc218 \uc5c6\ub2e4'\n}\n\n// after\nclass EuropeanSwallow {\n  get plumage() {\n    return '\ubcf4\ud1b5\uc774\ub2e4'\n  }\n  // ...\n}\n\nclass AfricanSwallow {\n  get plumage() {\n    return bird.numberOfCounts > 2 ? '\uc9c0\ucce4\ub2e4' : '\ubcf4\ud1b5\uc774\ub2e4'\n  }\n  // ...\n}\n\nclass NorwegianBlueParrot {\n  get plumage() {\n    return bird.voltage > 100 ? '\uadf8\uc744\ub838\ub2e4' : '\uc608\uc058\ub2e4'\n  }\n  // ...\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-3"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c \uc870\uac74\ubd80 \ub85c\uc9c1\uc740 \ud074\ub798\uc2a4\uc640 \ub2e4\ud615\uc131\uc744 \uc774\uc6a9\ud574\uc11c \ub354 \ud655\uc2e4\ud558\uac8c \ubd84\ub9ac\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-3"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ub2e4\ud615\uc801 \ub3d9\uc791\uc744 \ud45c\ud604\ud558\ub294 \ud074\ub798\uc2a4\ub4e4\uc774 \uc544\uc9c1 \uc5c6\ub2e4\uba74 \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4. \uc774\uc655\uc774\uba74 \uc801\ud569\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \uc54c\uc544\uc11c \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud558\ub294 \ud329\ud130\ub9ac \ud568\uc218\ub3c4 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud638\ucd9c\ud558\ub294 \ucf54\ub4dc\uc5d0\uc11c \ud329\ud130\ub9ac \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc870\uac74\ubd80 \ub85c\uc9c1 \ud568\uc218\ub97c \uc288\ud37c\ud074\ub798\uc2a4\ub85c \uc62e\uae41\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc11c\ube0c \ud074\ub798\uc2a4 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc11c\ube0c \ud074\ub798\uc2a4\uc5d0\uc11c \uc288\ud37c\ud074\ub798\uc2a4\uc758 \uc870\uac74\ubd80 \ub85c\uc9c1 \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub4dc\ud569\ub2c8\ub2e4. \uc870\uac74\ubd80 \ubb38\uc7a5 \uc911 \uc120\ud0dd\ub41c \uc11c\ube0c\ud074\ub798\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \uc870\uac74\uc808\uc744 \uc11c\ube0c \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\ub85c \ubcf5\uc0ac\ud55c \ub2e4\uc74c \uc801\uc808\ud788 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uac01 \uc870\uac74\uc808\uc744 \ud574\ub2f9 \uc11c\ube0c\ud074\ub798\uc2a4\uc5d0\uc11c \uba54\uc11c\ub4dc\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc288\ud37c\ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\uc5d0\uc11c\ub294 \uae30\ubcf8 \ub3d9\uc791 \ubd80\ubd84\ub9cc \ub0a8\uae41\ub2c8\ub2e4. \ud639\uc740 \uc288\ud37c\ud074\ub798\uc2a4\uac00 \ucd94\uc0c1 \ud074\ub798\uc2a4\uc5ec\uc57c \ud55c\ub2e4\uba74, \uc774 \uba54\uc11c\ub4dc\ub97c \ucd94\uc0c1\uc73c\ub85c \uc120\uc5b8\ud558\uac70\ub098 \uc11c\ube0c\ud074\ub798\uc2a4\uc5d0\uc11c \ucc98\ub9ac\ud574\uc57c \ud568\uc744 \uc54c\ub9ac\ub294 \uc5d0\ub7ec\ub97c \ub358\uc9d1\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function plumages(birds) {\n  return new Map(birds.map((b) => [b.name, plumage(b)]))\n}\nfunction speeds(birds) {\n  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]))\n}\nfunction plumage(bird) {\n  switch (bird.type) {\n    case '\uc720\ub7fd \uc81c\ube44':\n      return '\ubcf4\ud1b5\uc774\ub2e4'\n    case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n      return bird.numberOfCounts > 2 ? '\uc9c0\ucce4\ub2e4' : '\ubcf4\ud1b5\uc774\ub2e4'\n    case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n      return bird.voltage > 100 ? '\uadf8\uc744\ub838\ub2e4' : '\uc608\uc058\ub2e4'\n    default:\n      return '\uc54c \uc218 \uc5c6\ub2e4'\n  }\n}\nfunction airSpeedVelocity(bird) {\n  switch (bird.type) {\n    case '\uc720\ub7fd \uc81c\ube44':\n      return 35\n    case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n      return 40 - 2 * bird.numberOfCoconuts\n    case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n      return bird.isNailed ? 0 : 10 + bird.voltage / 10\n    default:\n      return null\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bird \ud074\ub798\uc2a4\ub85c \ubb36\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function plumages(birds) {\n  return new Bird(bird).plumages\n}\nfunction speeds(birds) {\n  return new Bird(bird).airSpeedVelocity\n}\nclass Bird {\n  constructor(birdObject) {\n    Object.assign(this, birdObject)\n  }\n  get plumage() {\n    switch (this.type) {\n      case '\uc720\ub7fd \uc81c\ube44':\n        return '\ubcf4\ud1b5\uc774\ub2e4'\n      case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n        return this.numberOfCounts > 2 ? '\uc9c0\ucce4\ub2e4' : '\ubcf4\ud1b5\uc774\ub2e4'\n      case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n        return this.voltage > 100 ? '\uadf8\uc744\ub838\ub2e4' : '\uc608\uc058\ub2e4'\n      default:\n        return '\uc54c \uc218 \uc5c6\ub2e4'\n    }\n  }\n  get airSpeedVelocity() {\n    switch (this.type) {\n      case '\uc720\ub7fd \uc81c\ube44':\n        return 35\n      case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n        return 40 - 2 * this.numberOfCoconuts\n      case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n        return this.isNailed ? 0 : 10 + this.voltage / 10\n      default:\n        return null\n    }\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc885\ubcc4 \uc11c\ube0c\ud074\ub798\uc2a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function plumages(birds) {\n  return createBird(bird).plumages\n}\nfunction speeds(birds) {\n  return createBird(bird).airSpeedVelocity\n}\nfunction createBird(bird) {\n  switch (this.type) {\n    case '\uc720\ub7fd \uc81c\ube44':\n      return new EuropeanSwallow(bird)\n    case '\uc544\ud504\ub9ac\uce74 \uc81c\ube44':\n      return new AfricanSwallow(bird)\n    case '\ub178\ub974\uc6e8\uc774 \ud30c\ub791 \uc575\ubb34':\n      return new NorwegianBirdParrot(bird)\n    default:\n      return new Bird(bird)\n  }\n}\n\nclass Bird {\n  // \uc0dd\ub7b5\n}\n\nclass EuropeanSwallow extends Bird {}\nclass AfricanSwallow extends Bird {}\nclass NorwegianBirdParrot extends Bird {}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uac00 \uae38\uae30 \ub54c\ubb38\uc5d0 \uc0dd\ub7b5\ud558\uace0, \uae30\uc874\uc5d0 switch-case\ub85c \ub418\uc5b4\uc788\ub294 \ubd80\ubd84\uc744 \uc624\ubc84\ub77c\uc774\ub529\ud574\uc11c \uc218\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"105-\ud2b9\uc774-\ucf00\uc774\uc2a4-\ucd94\uac00\ud558\uae30"},"10.5 \ud2b9\uc774 \ucf00\uc774\uc2a4 \ucd94\uac00\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nif (aCustomer === '\ubbf8\ud655\uc778 \uace0\uac1d') customerName = '\uac70\uc8fc\uc790'\n\n// after\nclass UnknownCustomer {\n  get name() {\n    return '\uac70\uc8fc\uc790'\n  }\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-4"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc218\ud55c \uacbd\uc6b0\uc758 \uacf5\ud1b5 \ub3d9\uc791\uc744 \uc694\uc18c \ud558\ub098\uc5d0 \ubaa8\uc544\uc11c \uc0ac\uc6a9\ud558\ub294 \ud2b9\uc774 \ucf00\uc774\uc2a4 \ud328\ud134\uc774 \uc788\ub294\ub370 \uc774\ub54c \uc801\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub85c null\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-4"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ucee8\ud14c\uc774\ub108\uc5d0 \ud2b9\uc774 \ucf00\uc774\uc2a4\uc778\uc9c0 \uac80\uc0ac\ud558\ub294 \uc18d\uc131\uc744 \ucd94\uac00\ud558\uace0 false\ub97c \ubc18\ud658\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud2b9\uc774 \ucf00\uc774\uc2a4 \uac1d\uccb4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774 \uac1d\uccb4\ub294 \ud2b9\uc774 \ucf00\uc774\uc2a4\uc778\uc9c0\ub97c \uac80\uc0ac\ud558\ub294 \uc18d\uc131\ub9cc \ud3ec\ud568\ud558\uc5ec, \uc774 \uc18d\uc131\uc740 true\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ud2b9\uc774 \ucf00\uc774\uc2a4\uc778\uc9c0\ub97c \uac80\uc0ac\ud558\ub294 \ucf54\ub4dc\ub97c \ud568\uc218\ub85c \ucd94\ucd9c\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uac12\uc744 \uc9c1\uc811 \u3142\uad50\ud558\ub294 \ub300\uc2e0 \ubc29\uae08 \ucd94\ucd9c\ud55c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uace0\uce69\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ucf54\ub4dc\uc5d0 \uc0c8\ub85c\uc6b4 \ud2b9\uc774 \ucf00\uc774\uc2a4 \ub300\uc0c1\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. \ud568\uc218\uc758 \ubc18\ud658 \uac12\uc73c\ub85c \ubc1b\uac70\ub098 \ubcc0\ud658 \ud568\uc218\ub97c \uc801\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud2b9\uc774 \ucf00\uc774\uc2a4\ub97c \uac80\uc0ac\ud558\ub294 \ud568\uc218 \ubcf8\ubb38\uc744 \uc218\uc815\ud558\uc5ec \ud2b9\uc774\ucf00\uc774\uc2a4 \uac1d\uccb4\uc758 \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30\ub098 \uc5ec\ub7ec \ud568\uc218\ub97c \ubcc0\ud658 \ud568\uc218\ub85c \ubb36\uae30\ub97c \uc801\uc6a9\ud558\uc5ec \ud2b9\uc774 \ucf00\uc774\uc2a4\ub97c \ucc98\ub9ac\ud558\ub294 \uacf5\ud1b5 \ub3d9\uc791\uc744 \uc0c8\ub85c\uc6b4 \uc694\uc18c\ub85c\uc62e\uae41\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc544\uc9c1\ub3c4 \ud2b9\uc774 \ucf00\uc774\uc2a4 \uac80\uc0ac \ud568\uc218\ub97c \uc774\uc6a9\ud558\ub294 \uacf3\uc774 \ub0a8\uc544 \uc788\ub2e4\uba74 \uac80\uc0ac \ud568\uc218\ub97c \uc778\ub77c\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-4"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Site {\n  get cumstomer() {\n    return this._customer\n  }\n}\n\nclass Customer {\n  get name() {...}\n  get billingPlan() {...}\n  set billingPlan(arg) {...}\n  get paymentHistory() {...}\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \ud074\ub77c\uc774\uc5b8\ud2b8 1\nconst aCustomer = site.customer\nlet customerName\nif (aCustomer === '\ubbf8\ud655\uc778 \uace0\uac1d') customerName = '\uac70\uc8fc\uc790'\nelse customerName = aCustomer.name\n\n// \ud074\ub77c\uc774\uc5b8\ud2b8 2\nconst plan =\n  aCustomer === '\ubbf8\ud655\uc778 \uace0\uac1d'\n    ? registry.billingPlans.basic\n    : aCustomer.billingPlan\n\n// \ud074\ub77c\uc774\uc5b8\ud2b8 3\nif (aCustomer !== '\ubbf8\ud655\uc778 \uace0\uac1d') aCustomer.billingPlan = newPlan\n\n// \ud074\ub77c\uc774\uc5b8\ud2b8 4\nconst weeksDelinquent =\n  aCustomer === '\ubbf8\ud655\uc778 \uace0\uac1d'\n    ? 0\n    : aCustomer.paymentHistory.weeksDelinquentInLastYear\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud130\ub9c1 \ud6c4 \ucf54\ub4dc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class UnknownCustomer {\n  get name() {\n    return '\uac70\uc8fc\uc790'\n  }\n  get paymentHistory() {\n    return new NullPaymentHistory()\n  }\n}\n\nclass NullPaymentHistory {\n  get weeksDelinquentInLastYear() {\n    return 0\n  }\n}\n\n// \ud074\ub77c\uc774\uc5b8\ud2b8\nconst weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear\n\n// \ud280\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\nconst name = aCustomer.isUnknown ? '\ubbf8\ud655\uc778 \uac70\uc8fc\uc790' : aCustomer.name\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ucf54\ub4dc\ub3c4 \uc0dd\ub7b5\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"106-\uc5b4\uc11c\uc158-\ucd94\uac00\ud558\uae30"},"10.6 \uc5b4\uc11c\uc158 \ucd94\uac00\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nif (this.discountRate) base = base - this.discountRate * base\n\n// after\nassert(this.discountRate >= 0)\nif (this.discountRate) base = base - this.discountRate * base\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-5"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc870\uac74\uc774 \ucc38\uc77c \ub54c\ub9cc \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \ucf54\ub4dc \uc601\uc5ed\uc774 \uc788\ub294\ub370, \uc774 \uacbd\uc6b0\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uc791\uc131\ud558\uba74 \uc774\ud574\ud558\uae30 \uc88b\uc544\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\uc154\uc158\uc744 \ud1b5\ud574\uc11c \uc81c\ub300\ub85c \uac1c\ubc1c\ud558\uac8c \ub418\uace0, \uc18c\ud1b5 \ub4f1\uc758 \uc7a5\uc810\uc744 \uac00\uc9d1\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-5"},"\uc808\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucc38\uc774\ub77c\uace0 \uac00\uc815\ud558\ub294 \uc870\uac74\uc774 \ubcf4\uc774\uba74 \uadf8 \uc870\uac74\uc744 \uba85\uc2dc\ud558\ub294 \uc5b4\uc11c\uc158\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-5"},"\uc608\uc2dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Customer {\n  applyDiscount(aNumber) {\n    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if-then\uc73c\ub85c \uc218\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Customer {\n  applyDiscount(aNumber) {\n    if (!this.discountRate) return aNumber\n    else return aNumber - this.discountRate * aNumber\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5b4\uc11c\uc158\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Customer {\n  applyDiscount(aNumber) {\n    if (!this.discountRate) return aNumber\n    else {\n      assert(this.discountRate > 0)\n      return aNumber - this.discountRate * aNumber\n    }\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\ub294 \ubaa9\uc801\uc744 \uc704\ud574 setter \uba54\uc11c\ub4dc\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Customer {\n  set discountRate(aNumber) {\n    assert(null === aNumber || aNumber >= 0)\n    this._discountRate = aNumber\n  }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"107-\uc81c\uc5b4-\ud50c\ub798\ud06c\ub97c-\ud0c8\ucd9c\ubb38\uc73c\ub85c-\ubc14\uafb8\uae30"},"10.7 \uc81c\uc5b4 \ud50c\ub798\ud06c\ub97c \ud0c8\ucd9c\ubb38\uc73c\ub85c \ubc14\uafb8\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// before\nfor (const p of people) {\n  if (!found) {\n    if (p === '\uc870\ucee4') {\n      sendAlert()\n      found = true\n    }\n    // ...\n  }\n}\n\n// after\nfor (const p of people) {\n  if (p === '\uc870\ucee4') {\n    sendAlert()\n    break\n  }\n  // ...\n}\n")),(0,l.kt)("h3",{id:"\ubc30\uacbd-6"},"\ubc30\uacbd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc81c\uc5b4 \ud50c\ub798\uadf8\ub780 \ucf54\ub4dc\uc758 \ub3d9\uc791\uc744 \ubcc0\uacbd\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \ubcc0\uc218\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\ubb38\uc548\uc5d0\uc11c \uc880 \ubcf4\uae30 \uc548\uc88b\uc740 \ucf54\ub4dc\ub294 break, continue, return \ub4f1\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc808\ucc28-6"},"\uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc81c\uc5b4 \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub97c \ud568\uc218\ub85c \ucd94\ucd9c\ud560\uc9c0 \uace0\ubbfc\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc81c\uc5b4 \ud50c\ub798\uadf8\ub97c \uac31\uc2e0\ud558\ub294 \ucf54\ub4dc \uac01\uac01\uc744 \uc801\uc808\ud55c \uc81c\uc5b4\ubb38\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4. \ud558\ub098 \ubc14\uafc0\ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ubaa8\ub450 \uc218\uc815\ud588\ub2e4\uba74 \uc81c\uc5b4 \ud50c\ub798\uadf8\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-6"},"\uc608\uc2dc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uc0dd\ub7b5")))}m.isMDXComponent=!0}}]);