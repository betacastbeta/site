(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(92),s=t(97),o=t(91),l=t(90),u=t(94),i=t(80),b=t.n(i);function d(){return c.a.createElement("div",{className:b.a.coverContainer},c.a.createElement("h1",{className:b.a.title_text},"\u03b2Cast"),c.a.createElement("img",{src:"img/logo.png",className:b.a.opensource}),c.a.createElement("h1",{className:b.a.header_text},"Mas \xe9 s\xf3 qualquer coisa sobre coisa alguma. ",c.a.createElement("br",null),'Pensamentos di\xe1rios, ou n\xe3o, sobre coisas "desimportantes".',c.a.createElement("br",null),"De dif\xedcil compreens\xe3o para cegos, mas acess\xedvel em \xe1udio e texto."))}a.default=function(){const e=Object(l.a)(),{siteConfig:a={}}=e;return c.a.createElement(s.a,{title:"whathafuck!?",description:"don't know <head />"},c.a.createElement("header",{className:b.a.background},c.a.createElement("div",{className:"container"},c.a.createElement(d,null),c.a.createElement("div",{className:b.a.buttons},c.a.createElement(o.a,{className:Object(r.a)("button button--outline button--secondary button--lg",b.a.getStarted),to:Object(u.a)("https://whats.link/betacast1")},"Lista What's App"),c.a.createElement(o.a,{className:Object(r.a)("button button--outline button--secondary button--lg",b.a.getStarted),to:Object(u.a)("https://www.instagram.com/betacastbeta/")},"Instagram"),c.a.createElement(o.a,{className:Object(r.a)("button button--outline button--secondary button--lg",b.a.getStarted),to:Object(u.a)("https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/")},"YouTube"),c.a.createElement(o.a,{className:Object(r.a)("button button--outline button--third button--lg",b.a.getStarted),to:Object(u.a)("arquivo/hello")},"Arquivo")))),c.a.createElement("main",null))}},98:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(95),s=t.n(r),o=t(93),l=t(90);a.a=e=>{const a=Object(n.useRef)(!1),r=Object(n.useRef)(null),u=Object(o.useHistory)(),{siteConfig:i={}}=Object(l.a)(),{baseUrl:b}=i,d=()=>{a.current||(Promise.all([fetch(b+"search-doc.json").then(e=>e.json()),fetch(b+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(34),t.e(36)]).then(t.bind(null,101)),t.e(23).then(t.t.bind(null,100,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=b+t.url;document.createElement("a").href=n,u.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:r}))}}}]);