(self.webpackChunktil=self.webpackChunktil||[]).push([[3986],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8803:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l={},u={unversionedId:"Dev/refactoring/ch1",id:"Dev/refactoring/ch1",isDocsHomePage:!1,title:"\ub9ac\ud329\ud130\ub9c1: \uccab \ubc88\uc9f8 \uc608\uc2dc",description:"\ub9ac\ud329\ud1a0\ub9c1 \uc804 \ucf54\ub4dc",source:"@site/docs/Dev/refactoring/ch1.md",sourceDirName:"Dev/refactoring",slug:"/Dev/refactoring/ch1",permalink:"/til/docs/Dev/refactoring/ch1",editUrl:"https://github.com/Azderica/til/edit/main/docs/Dev/refactoring/ch1.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc8fc\uc694 \ub514\uc790\uc778 \ud328\ud134",permalink:"/til/docs/Dev/object-orientation-and-design-patterns/ch3"},next:{title:"\uac1d\uccb4 \uc0dd\uc131\uacfc \uc0ad\uc81c",permalink:"/til/docs/Java/effective-java/ch1"}},c=[{value:"\ub9ac\ud329\ud1a0\ub9c1 \uc804 \ucf54\ub4dc",id:"\ub9ac\ud329\ud1a0\ub9c1-\uc804-\ucf54\ub4dc",children:[{value:"\ucf54\ub4dc \ubb38\uc81c\uc810",id:"\ucf54\ub4dc-\ubb38\uc81c\uc810",children:[]}]},{value:"\uc911\uac04 \ub9ac\ud329\ud130\ub9c1 \ucf54\ub4dc \uc801\uc6a9",id:"\uc911\uac04-\ub9ac\ud329\ud130\ub9c1-\ucf54\ub4dc-\uc801\uc6a9",children:[]}],i={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-\uc804-\ucf54\ub4dc"},"\ub9ac\ud329\ud1a0\ub9c1 \uc804 \ucf54\ub4dc"),(0,o.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\uc744 \ud558\uae30 \uc804, \uacf5\uc5f0\ub8cc \uccad\uad6c\uc11c\uc5d0 \ub4e4\uc5b4\uac08 \ub370\uc774\ud130\ub97c \ud45c\ud55c\ud55c \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function statement(invoice, plays) {\n  let totalAmount = 0\n  let volumeCredits = 0\n  let result = `\uccad\uad6c \ub0b4\uc5ed (\uace0\uac1d\uba85: ${invoice.custmoer})\\n`\n  const format = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2,\n  }).format\n\n  for (let perf of invoice.performance) {\n    const play = plays[perf.playID]\n    let thisAmount = 0\n\n    switch (play.type) {\n      case 'tragedy': // \ube44\uadf9\n        thisAmount = 40000\n        if (perf.audience > 30) {\n          thisAmount += 1000 * (perf.audience - 30)\n        }\n        break\n      case 'comedy': // \ud76c\uadf9\n        thisAmount = 30000\n        if (perf.audience > 20) {\n          thisAmount += 10000 + 500 * (perf.audience - 20)\n        }\n        thisAmount += 300 * perf.audience\n        break\n      default:\n        throw new Error(`\uc54c \uc218 \uc5c6\ub294 \uc7a5\ub974: ${play.type}`)\n    }\n\n    // \ud3ec\uc778\ud2b8 \uc801\ub9bd\n    volumeCredits += Math.max(perf.audience - 30, 0)\n    // \ud76c\uadf9 \uad00\uac1d 5\uba85\ub9c8\ub2e4 \ucd94\uac00 \ud3ec\uc778\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n    if ('commedy' === play.type) volumeCredits += Math.floor(perf.audience / 5)\n\n    // \uccad\uad6c \ub0b4\uc5ed\uc744 \ucd9c\ub825\ud55c\ub2e4.\n    result += `  ${play.name}: ${format(thisAmount / 100)} (${\n      perf.audience\n    }\uc11d\\n)`\n    totalAmount += thisAmount\n  }\n  result += `\ucd1d\uc561: ${format(totalAmount / 100)}\\n`\n  result += `\uc801\ub9bd \ud3ec\uc778\ud2b8: ${volumeCredits}\uc810\\n`\n  return result\n}\n")),(0,o.kt)("p",null,"\uc778\ud48b \ud30c\uc77c\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// plays.json\n{\n  "hamlet": { "name": "Hamlet", "type": "tragedy" },\n  "as-like": { "name": "As You Like It", "type": "comedy" },\n  "othello": { "name": "Othello", "type": "tragedy" }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// invoices.json\n[\n  {\n    "customer": "BigCo",\n    "performances": [\n      {\n        "playID": "hamlet",\n        "audience": 55\n      },\n      {\n        "playID": "as-like",\n        "audience": 35\n      },\n      {\n        "playID": "othello",\n        "audience": 40\n      }\n    ]\n  }\n]\n')),(0,o.kt)("h3",{id:"\ucf54\ub4dc-\ubb38\uc81c\uc810"},"\ucf54\ub4dc \ubb38\uc81c\uc810"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ud504\ub85c\uadf8\ub7a8\uc774 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uae30\uc5d0 \ud3b8\ud55c \uad6c\uc870\uac00 \uc544\ub2c8\ub77c\uba74 \uba3c\uc800 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uae30 \uc26c\uc6b4 \ud615\ud0dc\ub85c \ub9ac\ud329\ud130\ub9c1\ud558\uace0 \ub098\uc11c \uc6d0\ud558\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uc744 \uba3c\uc800 \uc218\uc815\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uccad\uad6c \ub0b4\uc5ed\uc744 HTML\ub85c \ucd9c\ub825\ud558\ub294 \uae30\ub2a5 \ud544\uc694"),(0,o.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \uc0c1\ud56d\uc774 \uc774\ud6c4\uc5d0 \ub4e4\uc5b4\uc654\uc744 \ub54c\ub97c \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\ub9ac\ud329\ud1a0\ub9c1\uc758 \ub2e8\uacc4"),(0,o.kt)("p",null,"-\ub9ac\ud329\ud1a0\ub9c1\uc758 \uccab\ub2e8\uacc4\ub294 \uc81c\ub300\ub85c \ub41c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc911\uac04-\ub9ac\ud329\ud130\ub9c1-\ucf54\ub4dc-\uc801\uc6a9"},"\uc911\uac04 \ub9ac\ud329\ud130\ub9c1 \ucf54\ub4dc \uc801\uc6a9"),(0,o.kt)("p",null,"\uc774\ub97c \ucabc\uac20 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function statement(invoice, plays) {\n  let result = `\uccad\uad6c \ub0b4\uc5ed (\uace0\uac1d\uba85: ${invoice.customer})\\n`\n  for (let perf of invoice.performances) {\n    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${\n      perf.audience\n    }\uc11d\\n)`\n    result += `\ucd1d\uc561: ${usd(totalAmount())}\\n`\n    result += `\uc801\ub9bd \ud3ec\uc778\ud2b8: ${totalVolumeCredits()}\uc810\\n`\n    return result\n\n    function totalAmount() {\n      let result = 0\n      for (let perf of invoice.performances) {\n        result += amountFor(perf)\n      }\n      return result\n    }\n\n    // \uc911\ucca9 \ud568\uc218 \uc2dc\uc791\n    function totalVolumeCredits() {\n      let result = 0\n      for (let perf of invoice.performances) {\n        result += volumeCreditsFor(perf)\n      }\n      return result\n    }\n\n    function usd(aNumber) {\n      return new Intl.NumberFormat('en_US', {\n        style: 'currency',\n        currency: 'USD',\n        minimumFractionDigits: 2,\n      }).format(aNumber / 100)\n    }\n\n    function volumeCreditsFor(aPerformance) {\n      let result = 0\n      result += Math.max(aPerformance.audience - 30, 0)\n      if ('comedy' === playFor(aPerformance).type)\n        result += Math.floor(aPerformance.audience / 5)\n      return result\n    }\n\n    function playFor(aPerformance) {\n      return plays[aPerformance.playID]\n    }\n\n    function amountFor(aPerformance) {\n      let result = 0\n      switch (playFor(aPerformance).type) {\n        case 'tragedy': // \ube44\uadf9\n          result = 40000\n          if (aPerformance.audience > 30) {\n            result += 1000 * (aPerformance.audience - 30)\n          }\n          break\n        case 'comedy': // \ud76c\uadf9\n          result = 30000\n          if (aPerformance.audience > 20) {\n            result += 10000 + 500 * (aPerformance.audience - 20)\n          }\n          result += 300 * aPerformance.audience\n          break\n        default:\n          throw new Error(`\uc54c \uc218 \uc5c6\ub294 \uc7a5\ub974: ${playFor(aPerformance).type}`)\n      }\n      return result\n    }\n  } // statement \ub05d\n}\n")))}s.isMDXComponent=!0}}]);