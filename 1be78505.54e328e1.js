(window.webpackJsonp=window.webpackJsonp||[]).push([[8,30],{183:function(e,a,t){"use strict";t.r(a);t(33),t(25),t(26),t(63),t(232);var n=t(0),l=t.n(n),r=t(186),i=t(188),c=t(71),o=t(193),s=(t(22),t(81),t(1)),u=(t(80),t(189)),m=t.n(u),d=t(202),h=t(203),b=t(191),f=t(192),p=t(155),v=t.n(p);function E(e){var a=e.item,t=e.onItemClick,r=e.collapsible,i=a.items,c=a.href,o=a.label,u=a.type,d=Object(n.useState)(a.collapsed),h=d[0],p=d[1],v=Object(n.useState)(null),k=v[0],g=v[1];a.collapsed!==k&&(g(a.collapsed),p(a.collapsed));var C=Object(n.useCallback)((function(e){e.preventDefault(),p((function(e){return!e}))}));switch(u){case"category":return i.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":h}),key:o},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!a.collapsed}),href:"#!",onClick:r?C:void 0},o),l.a.createElement("ul",{className:"menu__list"},i.map((function(e){return l.a.createElement(E,{key:e.label,item:e,onItemClick:t,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(b.a,Object(s.a)({className:"menu__link",to:c},Object(f.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),o))}}var k=function(e){var a=Object(n.useState)(!1),t=a[0],r=a[1],c=Object(i.a)(),o=c.siteConfig,u=(o=void 0===o?{}:o).themeConfig.navbar,f=(u=void 0===u?{}:u).title,p=u.hideOnScroll,k=void 0!==p&&p,g=c.isClient,C=Object(h.a)(),N=C.logoLink,_=C.logoLinkProps,w=C.logoImageUrl,O=C.logoAlt,y=e.docsSidebars,j=e.path,M=e.sidebar,S=e.sidebarCollapsible;if(Object(d.a)(t),!M)return null;var I=y[M];if(!I)throw new Error('Cannot find the sidebar "'+M+'" in the sidebar config!');return S&&I.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var r=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!r,r;case"link":default:return l===t}}(e,j)})),l.a.createElement("div",{className:v.a.sidebar},k&&l.a.createElement(b.a,Object(s.a)({className:v.a.sidebarLogo,to:N},_),null!=w&&l.a.createElement("img",{key:g,src:w,alt:O}),null!=f&&l.a.createElement("strong",null,f)),l.a.createElement("div",{className:m()("menu","menu--responsive",v.a.menu,{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!t)}},t?l.a.createElement("span",{className:m()(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},I.map((function(e){return l.a.createElement(E,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:S})})))))},g=t(204),C=t(11),N=(t(156),t(157)),_=t.n(N),w=function(e){return function(a){var t,n=a.id,r=Object(C.a)(a,["id"]),c=Object(i.a)().siteConfig,o=(c=void 0===c?{}:c).themeConfig,s=(o=void 0===o?{}:o).navbar,u=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==u&&u;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",(t={},t[_.a.enhancedAnchor]=!d,t)),id:n}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#"),r.children):l.a.createElement(e,r)}},O=t(158),y=t.n(O),j={code:function(e){var a=e.children;return"string"==typeof a?l.a.createElement(g.a,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(b.a,e)},pre:function(e){return l.a.createElement("div",Object(s.a)({className:y.a.mdxCodeBlock},e))},h1:w("h1"),h2:w("h2"),h3:w("h3"),h4:w("h4"),h5:w("h5"),h6:w("h6")},M=t(196),S=t(201),I=t(159),x=t.n(I);a.default=function(e){var a=e.route,t=e.docsMetadata,n=e.location,s=a.routes.find((function(e){return Object(S.a)(n.pathname,e)}))||{},u=t.permalinkToSidebar,m=t.docsSidebars,d=t.version,h=u[s.path],b=Object(i.a)(),f=b.siteConfig,p=(f=void 0===f?{}:f).themeConfig,v=void 0===p?{}:p,E=b.isClient,g=v.sidebarCollapsible,C=void 0===g||g;return 0===Object.keys(s).length?l.a.createElement(M.default,e):l.a.createElement(o.a,{version:d,key:E},l.a.createElement("div",{className:x.a.docPage},h&&l.a.createElement("div",{className:x.a.docSidebarContainer},l.a.createElement(k,{docsSidebars:m,path:s.path,sidebar:h,sidebarCollapsible:C})),l.a.createElement("main",{className:x.a.docMainContainer},l.a.createElement(r.a,{components:j},Object(c.a)(a.routes)))))}},196:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(193);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},232:function(e,a,t){"use strict";var n=t(5),l=t(43)(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),t(83)("find")}}]);