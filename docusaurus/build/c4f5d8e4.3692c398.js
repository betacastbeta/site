(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{122:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(119),o=t.n(c),s=t(117),l=t(114);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(s.useHistory)(),{siteConfig:m={}}=Object(l.a)(),{baseUrl:u}=m,d=()=>{a.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(58),t.e(60)]).then(t.bind(null,125)),t.e(40).then(t.t.bind(null,124,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)}),a.current=!0)},b=Object(n.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:c}))}},97:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),o=t(116),s=t(121),l=t(115),i=t(114),m=t(118),u=t(98),d=t.n(u);const b=[{title:c.a.createElement(c.a.Fragment,null,"Automa\xe7\xe3o extrema em projetos de fluxo e apresenta\xe7\xe3o de dados"),description:c.a.createElement(c.a.Fragment,null,"Trabalhamos com ",c.a.createElement("code",null,"Airflow"),", ",c.a.createElement("code",null,"Python")," e v\xe1rias outras tecnologias ",c.a.createElement("b",null,"open-source")," para construir solu\xe7\xf5es de extra\xe7\xe3o, transforma\xe7\xe3o, carga e apresenta\xe7\xe3o de dados. Nossa filosofia \xe9 automatizar ao m\xe1ximo o trabalho repetitivo para que sempre possamos fazer trabalho novo.")}];function h(){return c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:Object(o.a)("col col--8 col--offset-2",d.a.opensource)},c.a.createElement("img",{src:"img/open_source.png",className:d.a.opensource})))))}function E({title:e,description:a}){return c.a.createElement("div",{className:Object(o.a)("col col--8 col--offset-2",d.a.features2)},c.a.createElement("h3",{className:d.a.features2},e),c.a.createElement("p",null,a))}function p(){return c.a.createElement("div",{className:d.a.coverContainer},c.a.createElement("img",{src:"img/team-cginf.png",className:d.a.cover}),c.a.createElement("h1",{className:d.a.cginf},"SEGES_CGINF"),c.a.createElement("h1",{className:d.a.time},"{ time de dados }"))}a.default=function(){const e=Object(i.a)(),{siteConfig:a={}}=e;return c.a.createElement(s.a,{title:"Hello from SEGES_CGINF",description:"Site SEGES_CGINF: Time de Dados <head />"},c.a.createElement("header",{className:d.a.background},c.a.createElement("div",{className:"container"},c.a.createElement(p,null),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(l.a,{className:Object(o.a)("button button--outline button--primary button--lg",d.a.getStarted),to:Object(m.a)("monitoramento_rx/status_atualizacao")},"Monitoramento do Raio-X"),c.a.createElement(l.a,{className:Object(o.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("compartilhe/intro")},"Compartilhe"),c.a.createElement(l.a,{className:Object(o.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("sprints/sprint-intro")},"Sprints"),c.a.createElement(l.a,{className:Object(o.a)("button button--outline button--third button--lg",d.a.getStarted),to:Object(m.a)("recomendacoes/recomendacoes-hello")},"Recomenda\xe7\xf5es (novo!)")))),c.a.createElement("main",null,b&&b.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},b.map((e,a)=>c.a.createElement(E,Object(n.a)({key:a},e)))))),c.a.createElement(h,null)))}}}]);