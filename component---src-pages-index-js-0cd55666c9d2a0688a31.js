"use strict";(self.webpackChunkcory_serratore=self.webpackChunkcory_serratore||[]).push([[678],{3723:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return g},M:function(){return C},P:function(){return w},S:function(){return M},_:function(){return o},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return s}});var r=a(7294),n=(a(2369),a(5697)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,o,s){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:s}=e,c=o(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:l}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=o(e,h);const s=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,i({},l,t,{sizes:s,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:s})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=y.propTypes;const L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:L},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],I=new Set;let N,T;const R=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,f=o(e,k);const{width:h,height:b,layout:y}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,b,y),{style:E,className:w}=v,C=o(v,x),L=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const R=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,b);return(0,r.useEffect)((()=>{N||(N=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S);if(T&&I.has(S))return;let t,r;return N.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(S),image:n},f)),I.has(S)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,S,I,l,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(S)&&T&&(L.current.innerHTML=T(i({isLoading:I.has(S),isLoaded:I.has(S),image:n},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},C,{style:i({},E,l,{backgroundColor:c}),className:w+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:R},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));A.propTypes=S,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),q={src:l().string.isRequired,alt:L,width:_,height:_,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(U=A,function(e){let{src:t,__imageData:a,__error:n}=e,l=o(e,O);return n&&console.warn(n),a?r.createElement(U,i({image:a},l)):(console.warn("Image not loaded",t),null)});var U;M.displayName="StaticImage",M.propTypes=q},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const l=e[n];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3413:function(e,t,a){a.d(t,{F:function(){return n}});var r=a(7294);const n=e=>{let{pageContext:t}=e;return r.createElement(r.Fragment,null,r.createElement("meta",{charset:"uft-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"}),r.createElement("title",null,t.title),r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),r.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Georama:wght@800&family=Montserrat+Alternates:wght@200&family=Raleway:wght@300;400&display=swap",rel:"stylesheet"}))}},384:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(1883);var l=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement("div",{className:"navbar-module--navbar--a114f"},r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(n.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(n.rU,{to:"/#articles"},"Articles")),r.createElement("li",null,r.createElement(n.rU,{to:"/#about"},"About"))))),r.createElement("div",{className:"navbar-module--navbar-margin--1f528"}))};var i=e=>{let{children:t}=e;return r.createElement("footer",null,"© All Rights Reserved")};var o=e=>{let{children:t}=e;return r.createElement("div",{className:"layout-module--page--8d91a"},r.createElement(l,null),r.createElement("main",null,t),r.createElement(i,null))}},4379:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);var n=e=>{let{context:t}=e;return r.createElement("div",{className:"subscribe-module--subscribe--0fca2"},r.createElement("p",null,"Take the red pill and start reading ",r.createElement("strong",null,"The Solution Space Newsletter")," and learn how to gain a reputation as an ",r.createElement("strong",null,"irreplaceable problem solver"),"."),r.createElement("form",{action:" https://buttondown.email/api/emails/embed-subscribe/CorySerratore ",method:"post",target:"popupwindow",class:"embeddable-buttondown-form"},r.createElement("input",{type:"email",name:"email",placeholder:"your email address"}),r.createElement("input",{type:"hidden",value:"1",name:"embed"}),r.createElement("input",{type:"submit",value:"Read For Free"})))}},9622:function(e,t,a){a.d(t,{$:function(){return n}});var r=a(1883);const n=()=>{const{site:e}=(0,r.K2)("4080856488");return e.siteMetadata}},7917:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f.F},default:function(){return h}});var r=a(7294),n=a(9622),l=a(1883);const i=()=>{const{allMarkdownRemark:e}=(0,l.K2)("3115243891");return e.edges.map((e=>({title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:e.node.frontmatter.author,image:e.node.frontmatter.image,summary:e.node.frontmatter.summary,articleURL:e.node.frontmatter.articleURL,slug:e.node.frontmatter.slug})))};var o=a(384);var s=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement("header",null,r.createElement("h1",null,"CORY SERRATORE"),r.createElement("h2",null,"Recession Proof Your Career"),r.createElement("h3",null,"Invest in Yourself ➞ Grow ➞ Prosper")))},c=a(4379);var d=e=>{let{id:t,children:a}=e;return r.createElement("section",{id:t},r.createElement("div",{className:"section-module--section-header--cc2f1"},a))};var u=e=>{let{children:t}=e;return r.createElement("div",{className:"blog-grid-module--container--c2643"},r.createElement("div",{className:"blog-grid-module--blog-grid--729bd"},t))},m=a(3723);var p=e=>{var t,a;let{articleMetadata:n,children:i}=e;const o=(0,m.c)(null===(t=n.image)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData);return r.createElement("div",{className:"blog-grid-item-module--blog-grid-item--aa955"},r.createElement("div",{className:"blog-grid-item-module--thumbnail--cd09b"},r.createElement(m.G,{image:o})),r.createElement("div",{className:"blog-grid-item-module--article-title--34dcc"},r.createElement("h4",null,n.title),r.createElement("p",{className:"blog-grid-item-module--article-excerpt--a0afe"},n.summary),r.createElement(l.rU,{className:"blog-grid-item-module--read-more--6cb72",to:""+n.slug},"Read Full Post")),r.createElement("div",{className:"blog-grid-item-module--meta-data--b709d"},r.createElement("span",null,n.author),r.createElement("span",null,n.date)))};var g=e=>{let{children:t}=e;return r.createElement("div",{className:"profile-module--container--2fec1"},r.createElement("div",{className:"profile-module--profile-image--c09bf"},r.createElement(m.S,{src:"../content/images/profile.jpg",width:"300",__imageData:a(9673)})),r.createElement("div",{className:"profile-module--profile--36a7f"},r.createElement("h3",null,"Hi, I'm Cory."),r.createElement("p",null,r.createElement("strong",null,"I'm a software creator and advisor.")),r.createElement("p",null,"I'm the guy they come to when they want to solve their problems effectively and efficiently. No band-aid fixes and workarounds. I get to the root of the problem and put systems in place to solve them."),r.createElement("p",null,"I apply over 25 years of experience in software development as a developer, architect, business analyst and team manager, to develop effective systems to solve problems."),r.createElement("p",null,"I help software creators earn a reputation as irreplaceable problem solvers and value creators instead of replaceable commodities.")))},f=a(3413);var h=e=>{let{data:t}=e;const{title:a,description:l,url:m}=(0,n.$)(),f=i();return r.createElement(o.Z,null,r.createElement(s,null),r.createElement(c.Z,null),r.createElement(d,{id:"articles"},r.createElement("h1",null,"ARTICLES"),r.createElement("h2",null,"Feed Your Curiosity"),r.createElement("p",null,"Explorations of software, personal and professional development.")),r.createElement(u,null,f.map((e=>r.createElement(p,{articleMetadata:e})))),r.createElement(d,{id:"about"},r.createElement("h1",null,"ABOUT ME"),r.createElement("h2",null,"Who Is Cory Serratore?"),r.createElement("p",null,"A software creator with a passion for personal and professional development.")),r.createElement(g,null),r.createElement(c.Z,null))}},9673:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#587898","images":{"fallback":{"src":"/static/daf7cd6bbf87c6112d1f4c4eecaf7328/0fdf4/profile.jpg","srcSet":"/static/daf7cd6bbf87c6112d1f4c4eecaf7328/91a6d/profile.jpg 75w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/96deb/profile.jpg 150w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/0fdf4/profile.jpg 300w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/a89ca/profile.jpg 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/daf7cd6bbf87c6112d1f4c4eecaf7328/18188/profile.webp 75w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/c65bc/profile.webp 150w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/078c3/profile.webp 300w,\\n/static/daf7cd6bbf87c6112d1f4c4eecaf7328/6d09e/profile.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":"300","height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-js-0cd55666c9d2a0688a31.js.map