(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{127:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(124),c=t.n(l),s=t(122),m=t(119);a.a=e=>{const a=Object(r.useRef)(!1),l=Object(r.useRef)(null),o=Object(s.useHistory)(),{siteConfig:i={}}=Object(m.a)(),{baseUrl:u}=i,d=()=>{a.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(63),t.e(65)]).then(t.bind(null,130)),t.e(39).then(t.t.bind(null,129,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const r=u+t.url;document.createElement("a").href=r,o.push(r)}})})(e,a,t)}),a.current=!0)},h=Object(r.useCallback)(a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}},132:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(121),c=t(118),s=t(131),m=t(120),o=t(137),i=t(123),u=t(47),d=t.n(u);const h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:u,isBlogPostPage:g=!1}=e,{date:E,permalink:p,tags:b,readingTime:f}=r,{author:v,title:_,image:N,keywords:k}=t,w=t.author_url||t.authorURL,x=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,j=Object(i.a)(N,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,k&&k.length&&n.a.createElement("meta",{name:"keywords",content:k.join(",")}),N&&n.a.createElement("meta",{property:"og:image",content:j}),N&&n.a.createElement("meta",{property:"twitter:image",content:j}),N&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_})),n.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],r=h[parseInt(a[1],10)-1],c=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},g?_:n.a.createElement(m.a,{to:p},_)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:E,className:d.a.blogPostDate},r," ",c,", ",t," ",f&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(f)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},y&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:y,alt:v})),n.a.createElement("div",{className:"avatar__intro"},v&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},v)),n.a.createElement("small",{className:"avatar__subtitle"},x)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:o.a},a)),(b.length>0||u)&&n.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),b.map(({label:e,permalink:a})=>n.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e))),u&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(m.a,{to:r.permalink,"aria-label":"Read more about "+_},n.a.createElement("strong",null,"Read More"))))))}},76:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(126),c=t(132),s=t(120);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:m,count:o}=a;return n.a.createElement(l.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,o," ",function(e,a){return e>1?a+"s":a}(o,"post"),' tagged with "',m,'"'),n.a.createElement(s.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}}}]);