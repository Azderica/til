(self.webpackChunktil=self.webpackChunktil||[]).push([[3783],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={sidebar_position:9},o={unversionedId:"dev/refactoring/ch9",id:"dev/refactoring/ch9",isDocsHomePage:!1,title:"9. \ub370\uc774\ud130 \uc870\uc9c1\ud654",description:"- \ubcc0\uc218 \ucabc\uac1c\uae30, \ubcc0\uc218 \uc774\ub984 \ubc14\uafb8\uae30, \ud30c\uc0dd \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30",source:"@site/docs/dev/refactoring/ch9.md",sourceDirName:"dev/refactoring",slug:"/dev/refactoring/ch9",permalink:"/til/docs/dev/refactoring/ch9",editUrl:"https://github.com/Azderica/til/edit/master/docs/dev/refactoring/ch9.md",version:"current",lastUpdatedAt:1652277557,formattedLastUpdatedAt:"5/11/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. \uae30\ub2a5 \uc774\ub3d9",permalink:"/til/docs/dev/refactoring/ch8"},next:{title:"10. \uc870\uac74\ubd80 \ub85c\uc9c1 \uac04\uc18c\ud654",permalink:"/til/docs/dev/refactoring/ch10"}},u=[{value:"9.1 \ubcc0\uc218 \ucabc\uac1c\uae30",id:"91-\ubcc0\uc218-\ucabc\uac1c\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}]},{value:"9.2 \ud544\ub4dc \uc774\ub984 \ubc14\uafb8\uae30",id:"92-\ud544\ub4dc-\uc774\ub984-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-1",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-1",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",children:[]}]},{value:"9.3 \ud30c\uc0dd \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30",id:"93-\ud30c\uc0dd-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-2",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-2",children:[]},{value:"\uc5d0\uc2dc",id:"\uc5d0\uc2dc",children:[]}]},{value:"9.4 \ucc38\uc870\ub97c \uac12\uc73c\ub85c \ubc14\uafb8\uae30",id:"94-\ucc38\uc870\ub97c-\uac12\uc73c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-3",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-3",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",children:[]}]},{value:"9.5 \uac12\uc744 \ucc38\uc870\ub85c \ubc14\uafb8\uae30",id:"95-\uac12\uc744-\ucc38\uc870\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-4",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-4",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",children:[]}]},{value:"9.6 \ub9e4\uc9c1 \ub9ac\ud130\ub7f4 \ubc14\uafb8\uae30",id:"96-\ub9e4\uc9c1-\ub9ac\ud130\ub7f4-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-5",children:[]},{value:"\ubc29\ubc95",id:"\ubc29\ubc95",children:[]}]}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \ucabc\uac1c\uae30, \ubcc0\uc218 \uc774\ub984 \ubc14\uafb8\uae30, \ud30c\uc0dd \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,i.kt)("li",{parentName:"ul"},"\ucc38\uc870\ub97c \uac12\uc73c\ub85c \ubc14\uafb8\uae30, \uac12\uc744 \ucc38\uc870\ub85c \ubc14\uafb8\uae30"),(0,i.kt)("li",{parentName:"ul"},"\ub9e4\uc9c1 \ub9ac\ud130\ub7f4 \ubc14\uafb8\uae30")),(0,i.kt)("h2",{id:"91-\ubcc0\uc218-\ucabc\uac1c\uae30"},"9.1 \ubcc0\uc218 \ucabc\uac1c\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nlet temp = 2 * (height + width)\nconsole.log(temp)\ntemp = height * width\nconsole.log(temp)\n\n// after\nconst perimeter = 2 * (height + width)\nconsole.log(perimeter)\nconst area = height * width\nconsole.log(area)\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucc38\uc870 \ubaa9\uc801\uc73c\ub85c \uc4f0\ub294 \ubcc0\uc218\ub294 \uac12\uc744 \ud55c\ubc88\ub9cc \ub300\uc785\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ubaa9\uc801\uc73c\ub85c \uc4f0\uc778 \ubcc0\uc218\ub294 \ud63c\ub780\uc744 \uc90d\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ubcc0\uc218\ub97c \uc120\uc5b8\ud55c \uacf3\uacfc \uac12\uc744 \ucc98\uc74c \ub300\uc785\ud558\ub294 \uacf3\uc5d0\uc11c \ubcc0\uc218 \uc774\ub984\uc744 \ubc14\uafc9\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uac00\ub2a5\ud558\uba74 \uc774\ub54c \ubd88\ubcc0\uc73c\ub85c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc774 \ubcc0\uc218\uc5d0 \ub450 \ubc88\uc9f8\ub85c \uac12\uc744 \ub300\uc785\ud558\ub294 \uacf3 \uc55e\uae4c\uc9c0\uc758 \ubaa8\ub4e0 \ucc38\uc870\ub97c \uc0c8\ub85c\uc6b4 \ubcc0\uc218 \uc774\ub984\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ub450 \ubc88\uc9f8 \ub300\uc785 \uc2dc \ubcc0\uc218\ub97c \uc6d0\ub798 \uc774\ub984\uc73c\ub85c \ub2e4\uc2dc \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function distanceTravelled(scenario, time) {\n  let result\n  let acc = scenario.primaryForce / scenario.mass\n  let primaryTime = Math.min(time, scenario.delay)\n  result = 0.5 * acc * primaryTime * primaryTime\n  let secondaryTime = time - scenario.delay\n  if (secondaryTime > 0) {\n    let primaryVelocity = acc * scenario.delay\n    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass\n    result +=\n      primaryVelocity * secondaryTime +\n      0.5 * acc * secondaryTime * secondaryTime\n  }\n  return result\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc77c\ubd80 \ub9ac\ud329\ud1a0\ub9c1 \uc774\ud6c4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function distanceTravelled(scenario, time) {\n  let result\n  const primaryAcceleration = scenario.primaryForce / scenario.mass\n  let primaryTime = Math.min(time, scenario.delay)\n  result = 0.5 * primaryAcceleration * primaryTime * primaryTime\n  let secondaryTime = time - scenario.delay\n  if (secondaryTime > 0) {\n    let primaryVelocity = acc * scenario.delay\n    const secondaryAcceleration =\n      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass\n    result +=\n      primaryVelocity * secondaryTime +\n      0.5 * secondaryAcceleration * secondaryTime * secondaryTime\n  }\n  return result\n}\n")),(0,i.kt)("h4",{id:"\uc785\ub825-\ub9e4\uac1c-\ubcc0\uc218-\uc218\uc815-\uc2dc"},"\uc785\ub825 \ub9e4\uac1c \ubcc0\uc218 \uc218\uc815 \uc2dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function discount(inputValue, quantity) {\n  if (inputValue > 50) inputValue = inputValue - 2\n  if (quantity > 100) inputValue = inputValue - 1\n  return inputValue\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function discount(originalInputValue, quantity) {\n  let inputValue = originalInputValue\n  if (inputValue > 50) inputValue = inputValue - 2\n  if (quantity > 100) inputValue = inputValue - 1\n  return inputValue\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function discount(inputValue, quantity) {\n  let result = inputValue\n  if (inputValue > 50) result = result - 2\n  if (quantity > 100) result = result - 1\n  return result\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"92-\ud544\ub4dc-\uc774\ub984-\ubc14\uafb8\uae30"},"9.2 \ud544\ub4dc \uc774\ub984 \ubc14\uafb8\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Organization {\n  get name() {...}\n}\n\n// after\nclass Organization {\n  get title() {...}\n}\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd-1"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uad6c\uc870\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc774\ud574\ud558\ub294\ub370 \ud070 \uc5ed\ud560\uc744 \ud558\uba70, \uc774\ub984\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc808\ucc28-1"},"\uc808\ucc28"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ub808\ucf54\ub4dc\uc758 \uc720\ud6a8 \ubc94\uc704\uac00 \uc81c\ud55c\uc801\uc774\ub77c\uba74 \ud544\ub4dc\uc5d0 \uc811\uadfc\ud558\ub294 \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \uc218\uc815\ud55c \ud6c4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4. \uc774\ud6c4 \ub2e8\uacc4\ub294 \ud544\uc694\uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ub808\ucf54\ub4dc\uac00 \ucea1\uc290\ud654\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc6b0\uc120 \ub808\ucf54\ub4dc\ub97c \ucea1\uc290\ud654\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ucea1\uc290\ud654\ub41c \uac1d\uccb4 \uc548\uc758 private \ud544\ub4dc\uba85\uc744 \ubcc0\uacbd\ud558\uace0, \uadf8\uc5d0 \ub9de\uac8c \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub4e4\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc0dd\uc131\uc790\uc758 \ub9e4\uac1c\ubcc0\uc218 \uc911 \ud544\ub4dc\uc640 \uc774\ub984\uc774 \uacb9\uce58\ub294 \uac8c \uc788\ub2e4\uba74 \ud568\uc218 \uc120\uc5b8 \ubc14\uafb8\uae30\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc811\uadfc\uc790\ub4e4\uc758 \uc774\ub984\ub3c4 \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Organization {\n  constructor(data) {\n    this._name = data.name\n    this._country = data.country\n  }\n  get name() {\n    return this._name\n  }\n  set name(aString) {\n    this._name = aString\n  }\n  get country() {\n    return this._country\n  }\n  set country(aCountry) {\n    this._country = aCountry\n  }\n}\n\nconst organization = new Organization({\n  name: '\uc560\ud06c\ub9ac \uad6c\uc2a4\ubca0\ub9ac',\n  country: 'GB',\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud1a0\ub9c1 \uc774\ud6c4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Organization {\n  constructor(data) {\n    this._title = data.title\n    this._country = data.country\n  }\n  get title() {\n    return this._title\n  }\n  set title(aString) {\n    this._title = aString\n  }\n  get country() {\n    return this._country\n  }\n  set country(aCountry) {\n    this._country = aCountry\n  }\n}\n\nconst organization = new Organization({\n  title: '\uc560\ud06c\ub9ac \uad6c\uc2a4\ubca0\ub9ac',\n  country: 'GB',\n})\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"93-\ud30c\uc0dd-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30"},"9.3 \ud30c\uc0dd \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nget discountedTotal() {return this._discountedTotal}\nset discount(aNumber) {\n  const old = this._discount\n  this._discount = aNumber\n  this._discountedTotal += old - aNumber\n}\n\n// after\nget discountedTotal() {return this._discountedTotal}\nset discount(aNumber) {this._discount = aNumber;}\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd-2"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac00\ubcc0 \ub370\uc774\ud130\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc5d0 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac00\ubcc0 \ub370\uc774\ud130\uc758 \uc720\ud6a8 \ubc94\uc704\ub97c \uac00\ub2a5\ud55c \uc904\uc774\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc27d\uac8c \uacc4\uc0b0\ud574\ub0bc \uc218 \uc788\ub294 \ubcc0\uc218\uac12\uc740 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc758 \uacbd\uc6b0\ub294 \uc608\uc678\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uad6c\uc870\ub97c \uac10\uc2f8\uba70 \uadf8 \ub370\uc774\ud130\uc5d0 \uae30\ucd08\ud574\uc11c \uacc4\uc0b0\ud55c \uacb0\uacfc\ub97c \uc18d\uc131\uc73c\ub85c \uc81c\uacf5\ud558\ub294 \uac1d\uccb4\uc778 \uacbd\uc6b0"),(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uad6c\uc870\ub97c \ubc1b\uc544 \ub2e4\ub978 \ub370\uc774\ud130 \uad6c\uc870\ub85c \ubcc0\ud658\ud574 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc778 \uacbd\uc6b0")))),(0,i.kt)("h3",{id:"\uc808\ucc28-2"},"\uc808\ucc28"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ubcc0\uc218 \uac12\uc774 \uac31\uc2e0\ub418\ub294 \uc9c0\uc810\uc744 \ubaa8\ub450 \ucc3e\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud558\uba74 \ubcc0\uc218 \ucabc\uac1c\uae30\ub97c \ud65c\uc6a9\ud574\uc11c \uac01 \uac31\uc2e0 \uc9c0\uc810\uc5d0\uc11c \ubcc0\uc218\ub97c \ubd84\ub9ac\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud574\ub2f9 \ubcc0\uc218\uc758 \uac12\uc744 \uacc4\uc0b0\ud574\uc8fc\ub294 \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud574\ub2f9 \ubcc0\uc218\uac00 \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \uacf3\uc5d0 \uc5b4\uc2dc\uc158\uc744 \ucd94\uac00\ud558\uc5ec \ud568\uc218\uc758 \uacc4\uc0b0 \uacb0\uacfc\uac00 \ubcc0\uc218\uc758 \uac12\uacfc \uac19\uc740\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ubcc0\uc218\ub97c \uc77d\ub294 \ucf54\ub4dc\ub97c \ubaa8\ub450 \ud568\uc218 \ud638\ucd9c\ub85c \ub300\uccb4\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uace0 \uac31\uc2e0\ud558\ub294 \ucf54\ub4dc\ub97c \uc8fd\uc740 \ucf54\ub4dc \uc81c\uac70\ud558\uae30\ub85c \uc5c6\uc571\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc5d0\uc2dc"},"\uc5d0\uc2dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class ProductionPlan {\n  get production() {\n    return this._production\n  }\n  applyAdjustment(anAdjustment) {\n    this._adjustments.push(anAdjustment)\n    this._production += anAdjustment.amount\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2e0\uaddc \ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"assert\ub97c \ud1b5\ud574\uc11c \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud544\ub4dc\ub97c \ubc18\ud658\ud558\ub294 \ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc11c \uacc4\uc0b0 \uacb0\uacfc\ub97c \uc9c1\uc811 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uae30\uc874 \uba54\uc11c\ub4dc\ub97c \uc778\ub77c\uc778\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc61b \ubcc0\uc218\ub97c \ucc38\uc870\ud558\ub294 \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \uc8fd\uc740 \ucf54\ub4dc \uc81c\uac70\ud558\uae30\ub85c \uc815\ub9ac\ud569\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class ProductionPlan {\n  get production() {\n    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)\n  }\n  applyAdjustment(anAdjustment) {\n    this._adjustments.push(anAdjustment)\n  }\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"94-\ucc38\uc870\ub97c-\uac12\uc73c\ub85c-\ubc14\uafb8\uae30"},"9.4 \ucc38\uc870\ub97c \uac12\uc73c\ub85c \ubc14\uafb8\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nclass Product {\n  applyDiscount(arg) {\n    this._price.amount -= arg\n  }\n}\n\n// after\nclass Product {\n  applyDiscount(arg) {\n    this._price = new Money(this._price.amount - arg, this._price.currency)\n  }\n}\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd-3"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \ub2e4\ub978 \uac1d\uccb4\uc5d0 \uc911\ucca9\ud558\uba74 \ub0b4\ubd80 \uac1d\uccb4\ub97c \ucc38\uc870 \ud639\uc740 \uac12\uc73c\ub85c \ucde8\uae09\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc808\ucc28-3"},"\uc808\ucc28"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud6c4\ubcf4 \ud074\ub798\uc2a4\uac00 \ubd88\ubcc0\uc778\uc9c0, \ud639\uc740 \ubd88\ubcc0\uc774 \ub420 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uac01\uac01\uc758 \uc138\ud130\ub97c \ud558\ub098\uc529 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc774 \uac12 \uac1d\uccb4\uc758 \ud544\ub4dc\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub294 \ub3d9\uce58\uc131 \ube44\uad50 \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"95-\uac12\uc744-\ucc38\uc870\ub85c-\ubc14\uafb8\uae30"},"9.5 \uac12\uc744 \ucc38\uc870\ub85c \ubc14\uafb8\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nlet customer = new Customer(customerData)\n\n// after\nlet customer = customerRepository.get(customerData)\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd-4"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ubb3c\ub9ac\uc801\uc73c\ub85c \ubcf5\uc81c\ud574\uc57c\ud558\ub294 \uc0c1\ud669\uc758 \ubb38\uc81c\ub294 \ud574\ub2f9 \ubcf5\uc81c\ubcf8\ub4e4\uc758 \ubaa8\ub4e0 \ubd80\ubd84\uc744 \uac31\uc2e0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac12\uc744 \ucc38\uc870\ub85c \ubc14\uafb8\uba74 \ud558\ub098\ub2f9 \uac1d\uccb4\ub3c4 \ud558\ub098\ub9cc \uc874\uc7ac\ud558\uac8c \ub429\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc808\ucc28-4"},"\uc808\ucc28"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uac19\uc740 \ubd80\ub958\uc5d0 \uc18d\ud558\ub294 \uac1d\uccb4\ub4e4\uc744 \ubcf4\uad00\ud560 \uc800\uc7a5\uc18c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc0dd\uc131\uc790\uc5d0\uc11c \uc774 \ubd80\ub958\uc758 \uac1d\uccb4\ub4e4 \uc911 \ud2b9\uc815 \uac1d\uccb4\ub97c \uc815\ud655\ud788 \ucc3e\uc544\ub0b4\ub294 \ubc29\ubc95\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud638\uc2a4\ud2b8 \uac1d\uccb4\uc758 \uc0dd\uc131\uc790\ub4e4\uc744 \uc218\uc815\ud558\uc5ec \ud544\uc694\ud55c \uac1d\uccb4\ub97c \uc774 \uc800\uc7a5\uc18c\uc5d0\uc11c \ucc3e\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ud558\ub098 \uc218\uc815\ud560 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Order {\n  constructor(data) {\n    this._number = data.number\n    this._customer = new Customer(data.customer)\n  }\n  get customer() {\n    return this._customer\n  }\n}\n\nclass Customer {\n  constructor(id) {\n    this._id = id\n  }\n  get id() {\n    return this._id\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ud560 \uc800\uc7a5\uc18c \uac1d\uccb4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let _repositoryData\n\nexport function initialize() {\n  _repositoryData = {}\n  _repositoryData.customers = new Map()\n}\n\nexport function registerCustomer(id) {\n  if (!_repositoryData.customers.has(id)) {\n    _repositoryData.customers.set(id, new Customer(id))\n  }\n  return findCustomer(id)\n}\n\nexport function findCustomer(id) {\n  return _repositoryData.customers.get(id)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Order {\n  constructor(data) {\n    this._number = data.number\n    this._customer = registerCustomer(data.customer)\n  }\n  get customer() {\n    return this._customer\n  }\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"96-\ub9e4\uc9c1-\ub9ac\ud130\ub7f4-\ubc14\uafb8\uae30"},"9.6 \ub9e4\uc9c1 \ub9ac\ud130\ub7f4 \ubc14\uafb8\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// before\nfunction potentialEnergy(mass, height) {\n  return mass * 9.81 * height\n}\n\n// after\nconst STANDARD_GRAVITY = 9.81\nfunction potentialEnergy(mass, height) {\n  return mass * STANDARD_GRAVITY * height\n}\n")),(0,i.kt)("h3",{id:"\ubc30\uacbd-5"},"\ubc30\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc22b\uc790\ub300\uc2e0 \uc774\ub97c \uc798 \ud45c\ud604\ud574\uc904 \uc218 \uc788\ub294 \uc0c1\uc218\ub85c \ubcc0\uacbd\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ubc29\ubc95"},"\ubc29\ubc95"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc0c1\uc218\ub97c \uc120\uc5b8\ud558\uace0 \ub9e4\uc9c1 \ub9ac\ud130\ub7f4\uc744 \ub300\uc785\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud574\ub2f9 \ub9ac\ud130\ub7f4\uc774 \uc0ac\uc6a9\ub418\ub294 \uacf3\uc744 \ubaa8\ub450 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ucc3e\uc740 \uacf3 \uac01\uac01\uc5d0\uc11c \ub9ac\ud130\ub7f4\uc774 \uc0c8 \uc0c1\uc218\uc640 \ub611\uac19\uc740 \uc758\ubbf8\ub85c \uc4f0\uc600\ub294\uc9c0 \ud655\uc778\ud558\uba70, \uac19\uc740 \uc758\ubbf8\uc778 \uacbd\uc6b0 \uc0c1\uc218\ub85c \ub300\uccb4\ud558\uc5ec \ud14c\uc2a4\ud2b8\ud569\ub2c8\ub2e4.")))}c.isMDXComponent=!0}}]);