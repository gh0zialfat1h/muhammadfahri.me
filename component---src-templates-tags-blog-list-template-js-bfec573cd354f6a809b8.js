(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"0z9e":function(t,e,n){"use strict";n.r(e),n.d(e,"queryBlog",(function(){return A}));var r=n("mwIZ"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("vOnD"),u=n("QS3V"),p=n("rY4l"),s=n("7oih"),l=n("EYWl"),m=n("7Qib"),f=c.d.div.withConfig({displayName:"TagsBlogListTemplate__PostsWrapper",componentId:"sc-3vzijy-0"})(["padding:0 15px;max-width:1060px;margin:0 auto 35px;"]),A="1386977023";e.default=function(t){var e=o()(t,"pageContext.tagSlug"),n=o()(t,"pageContext.tags"),r=Object(m.c)(n)+" - Blog",a=t.data.allMdx.edges||[],c=t.data.site.siteMetadata.siteUrl;return i.a.createElement(s.a,{location:t.location,active:m.b.blog},i.a.createElement("div",{className:"Blog"},i.a.createElement(l.a,{title:r,url:c+"/blog/tags/"+e}),i.a.createElement(p.a,{title:Object(m.c)(n),color:"#3fabbb"}),i.a.createElement(f,null,a.map((function(t){var e=t.node;return!!e.frontmatter.published&&i.a.createElement(u.a,{data:{title:e.frontmatter.title,thumbnail:e.frontmatter.image.childImageSharp.sizes,excerpt:e.excerpt,date:e.frontmatter.date,path:"/"+e.fields.slug,timeToRead:e.timeToRead},key:e.frontmatter.slug})})))))}},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"44Ds":function(t,e,n){var r=n("e4Nc");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},"4kuk":function(t,e,n){var r=n("SfRM"),o=n("Hvzi"),a=n("u8Dt"),i=n("ekgI"),c=n("JSQU");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},"4uTw":function(t,e,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},"7Qib":function(t,e,n){"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c}));var a={home:"",blog:"Blog",about:"About",portfolio:"Portfolio",contact:"Contact"},i=function(t){var e=/([^/]+)$/g.exec(t);return e.length>=1?"https://github.com/gh0zialfat1h/muhammadfahri.me/blob/master/content/blog/"+e[e.length-1]:""},c=function(t){for(var e,n=r(t);!(e=n()).done;){var o=e.value;if(!o.includes(" "))return o}return t[0]}},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},AP2z:function(t,e,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},Cwc5:function(t,e,n){var r=n("NKxu"),o=n("Npjl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){var r,o=n("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},EYWl:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("qhky"),c=n("nWR2"),u=n.n(c),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.image,n=t.url,r=t.description,o=t.isPost,c=(""===this.props.title?"":this.props.title+" · ")+"Muhammad Fahri",u=[{"@context":"http://schema.org","@type":"WebSite",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],url:n,name:c,alternateName:r}];return o&&u.push([{"@context":"http://schema.org","@type":"BreadcrumbList",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:c,image:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],url:n,name:c,alternateName:n+" | Muhammad Fahri",headline:c,image:{"@type":"ImageObject",url:e},description:r}]),a.a.createElement(i.a,null,a.a.createElement("title",null,c),a.a.createElement("meta",{name:"description",content:r}),a.a.createElement("meta",{name:"image",content:e}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),a.a.createElement("meta",{property:"fb:app_id",content:"302184056577324"}),a.a.createElement("meta",{property:"og:url",content:n}),a.a.createElement("meta",{property:"og:type",content:o?"article":"website"}),a.a.createElement("meta",{property:"og:title",content:c}),a.a.createElement("meta",{property:"og:description",content:r}),a.a.createElement("meta",{property:"og:image",content:e}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:site",content:"@muhammdfahrim"}),a.a.createElement("meta",{name:"twitter:creator",content:"@muhammdfahrim"}),a.a.createElement("meta",{name:"twitter:title",content:c}),a.a.createElement("meta",{name:"twitter:description",content:r}),a.a.createElement("meta",{name:"twitter:image",content:e}))},e}(o.PureComponent);p.defaultProps={title:"Muhammad Fahri",image:"https://muhammadfahri.me"+u.a,url:"https://muhammadfahri.me/",description:"Muhammad Fahri - Backend Developer",isPost:!1}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},NKxu:function(t,e,n){var r=n("lSCD"),o=n("E2jh"),a=n("GoyQ"),i=n("3Fdi"),c=/^\[object .+?Constructor\]$/,u=Function.prototype,p=Object.prototype,s=u.toString,l=p.hasOwnProperty,m=RegExp("^"+s.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?m:c).test(i(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},QS3V:function(t,e,n){"use strict";var r=n("MUpH"),o=n("Wbzz"),a=n("9eSz"),i=n.n(a),c=n("q1tI"),u=n.n(c),p=n("vOnD"),s=n("InJ6");function l(){var t=Object(r.a)(["\n    font-size: 0.9rem;\n  "]);return l=function(){return t},t}function m(){var t=Object(r.a)(["\n    font-size: 1.1rem;\n  "]);return m=function(){return t},t}function f(){var t=Object(r.a)(["\n    padding: 0 0 0 50px;\n    width: 75%;\n    max-width: 100%;\n  "]);return f=function(){return t},t}function A(){var t=Object(r.a)(["\n    width: 25%;\n  "]);return A=function(){return t},t}function d(){var t=Object(r.a)(["\n      flex-direction: row;\n    "]);return d=function(){return t},t}var h=Object(p.d)(o.Link).withConfig({displayName:"Card__Container",componentId:"sc-1tjm9fw-0"})(["& > div{display:flex;align-items:center;text-align:left;flex-direction:column;border-bottom:1px solid rgb(221,221,221);padding:2rem 0px;"," *{margin:0;}}&:first-child{& > div{border-top:1px solid rgb(221,221,221);}}text-decoration:none;"],s.c.md(d())),g=p.d.div.withConfig({displayName:"Card__ImageWrapper",componentId:"sc-1tjm9fw-1"})(["border-radius:4px;overflow:hidden;width:100%;max-width:500px;",";"],s.c.md(A())),v=p.d.div.withConfig({displayName:"Card__Info",componentId:"sc-1tjm9fw-2"})(["width:100%;max-width:560px;padding-top:12px;",";"],s.c.md(f())),y=p.d.h3.withConfig({displayName:"Card__Title",componentId:"sc-1tjm9fw-3"})(["font-family:'Open Sans',sans-serif;color:#282a2d;transition:0.3s;font-size:17px;"," ",":hover &{color:#1976d2;}"],s.c.sm(m()),h),w=p.d.p.withConfig({displayName:"Card__Time",componentId:"sc-1tjm9fw-4"})(["color:#757575;font-size:14px;text-align:right;padding:6px 6px 6px;"]),x=p.d.p.withConfig({displayName:"Card__Excerpt",componentId:"sc-1tjm9fw-5"})(["color:#757575;font-size:15px;",";"],s.c.sm(l()));e.a=function(t){return u.a.createElement(h,{to:t.data.path},u.a.createElement("div",null,u.a.createElement(g,null,u.a.createElement(i.a,{sizes:t.data.thumbnail})),u.a.createElement(v,null,u.a.createElement(y,null,t.data.title),u.a.createElement(w,null,u.a.createElement("time",{dateTime:"2008-02-14 20:00"},t.data.date," "),"· ",t.data.timeToRead," min read"),u.a.createElement(x,null,t.data.excerpt))))}},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Xi7e:function(t,e,n){var r=n("KMkd"),o=n("adU4"),a=n("tMB7"),i=n("+6XX"),c=n("Z8oC");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),o=n("k+1r"),a=n("JHgL"),i=n("pSRY"),c=n("H8j4");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),o=n("Xi7e"),a=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ");t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},nWR2:function(t,e){t.exports="data:image/png;base64,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"},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},rY4l:function(t,e,n){"use strict";var r=n("MUpH"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=n("InJ6");function u(){var t=Object(r.a)(["\n\t\tfont-size: 16px;\n\t"]);return u=function(){return t},t}function p(){var t=Object(r.a)(["\n\t\tfont-size: 78px;\n\t"]);return p=function(){return t},t}var s=i.d.div.withConfig({displayName:"Header__Container",componentId:"n00xvb-0"})(["margin-left:auto;margin-right:auto;margin-top:",";margin-bottom:",";max-width:820px;padding:0 13px;"],(function(t){return t.top?t.top:"100px"}),(function(t){return t.bottom?t.bottom:"10px"})),l=i.d.h1.withConfig({displayName:"Header__Title",componentId:"n00xvb-1"})(["font-family:'Open Sans',sans-serif;color:",";font-size:11vw;"," text-align:center;line-height:100%;font-weight:900;letter-spacing:-1px;text-transform:uppercase;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:2px;-webkit-text-stroke-color:",";"],(function(t){return t.color?t.color:"#f06668"}),c.c.md(p()),(function(t){return t.color?t.color:"#f06668"})),m=i.d.p.withConfig({displayName:"Header__Description",componentId:"n00xvb-2"})(["color:#353535;text-align:center;margin:0;a{text-decoration:none;color:#3384a0;}font-size:15px;",";"],c.c.sm(u()));e.a=function(t){return a.a.createElement(s,{top:t.top,bottom:t.bottom},a.a.createElement(l,{color:t.color},t.title),t.description&&a.a.createElement(m,null,t.description))}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zoYe:function(t,e,n){var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-tags-blog-list-template-js-bfec573cd354f6a809b8.js.map