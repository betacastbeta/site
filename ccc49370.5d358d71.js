(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(126),c=t(132),m=t(120);var s=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a,{title:m,description:i,nextItem:o,prevItem:u,editUrl:d}=n;return r.a.createElement(l.a,{title:m,description:i},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,d&&r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(o||u)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:o,prevItem:u}))))))}},127:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(124),c=t.n(l),m=t(122),s=t(119);a.a=e=>{const a=Object(n.useRef)(!1),l=Object(n.useRef)(null),i=Object(m.useHistory)(),{siteConfig:o={}}=Object(s.a)(),{baseUrl:u}=o,d=()=>{a.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(63),t.e(65)]).then(t.bind(null,130)),t.e(39).then(t.t.bind(null,129,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}},132:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(121),c=t(118),m=t(131),s=t(120),i=t(137),o=t(123),u=t(47),d=t.n(u);const h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:u,isBlogPostPage:g=!1}=e,{date:p,permalink:E,tags:v,readingTime:b}=n,{author:_,title:N,image:f,keywords:k}=t,x=t.author_url||t.authorURL,w=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,j=Object(o.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:j}),f&&r.a.createElement("meta",{property:"twitter:image",content:j}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=p.substring(0,10).split("-"),t=a[0],n=h[parseInt(a[1],10)-1],c=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},g?N:r.a.createElement(s.a,{to:E},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:d.a.blogPostDate},n," ",c,", ",t," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:x,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:i.a},a)),(v.length>0||u)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),v.map(({label:e,permalink:a})=>r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e))),u&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More"))))))}}}]);