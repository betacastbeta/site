(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{103:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(92),c=t(89),s=t(102),m=t(91),o=t(108),i=t(94),u=t(47),d=t.n(u);const h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:u,isBlogPostPage:g=!1}=e,{date:E,permalink:p,tags:b,readingTime:v}=n,{author:_,title:N,image:f,keywords:k}=t,w=t.author_url||t.authorURL,x=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,j=Object(i.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:j}),f&&r.a.createElement("meta",{property:"twitter:image",content:j}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],n=h[parseInt(a[1],10)-1],c=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},g?N:r.a.createElement(m.a,{to:p},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:d.a.blogPostDate},n," ",c,", ",t," ",v&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},x)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},a)),(b.length>0||u)&&r.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),b.map(({label:e,permalink:a})=>r.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e))),u&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More"))))))}},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(90),c=t(97),s=t(103),m=t(91);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),m="/"===a.permalink?n:"Blog",{blogDescription:i}=a;return r.a.createElement(c.a,{title:m,description:i},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},98:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(95),c=t.n(l),s=t(93),m=t(90);a.a=e=>{const a=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(s.useHistory)(),{siteConfig:i={}}=Object(m.a)(),{baseUrl:u}=i,d=()=>{a.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(34),t.e(36)]).then(t.bind(null,101)),t.e(23).then(t.t.bind(null,100,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,o.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}}}]);