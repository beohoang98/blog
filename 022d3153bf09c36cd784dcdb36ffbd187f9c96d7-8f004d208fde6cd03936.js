"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[790],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,n=new RegExp("^"+i.source),o=new RegExp(i.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,s)=>{let i=!1,n=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=n,n=!0,l++):n&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=n,n=!1,i=!0):(i=r(c)===c&&s(c)!==c,o=n,n=s(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(n,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return n},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),s=(a(3204),a(5697)),i=a.n(s);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,s){return void 0===s&&(s={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},s,{opacity:t?1:0})})}function d(e,t,a,r,s,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,n({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:s,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",n({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,n({},i,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},y.displayName="Picture",y.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(y,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,n({},e)),r.createElement("noscript",null,r.createElement(y,n({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),n=3;n<r;n++)s[n-3]=arguments[n];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:C},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let O,q;const R=function(e){let{as:t="div",image:s,style:i,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,N);const{width:b,height:y,layout:w}=s,v=c(b,y,w),{style:E,className:x}=v,k=o(v,T),S=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);p&&(d=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{O||(O=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(L);if(q&&I.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(n({isLoading:!0,isLoaded:I.has(L),image:s},h)),I.has(L)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,L,I,i,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{I.has(L)&&q&&(S.current.innerHTML=q(n({isLoading:I.has(L),isLoaded:I.has(L),image:s},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[s]),(0,r.createElement)(t,n({},k,{style:n({},E,i,{backgroundColor:u}),className:x+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));_.propTypes=j,_.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:s,__error:i}=t,l=o(t,P);return i&&console.warn(i),s?r.createElement(e,n({image:s},l)):(console.warn("Image not loaded",a),null)}}const A=z((function(e){let{as:t="div",className:a,class:s,style:i,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),f=n({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:v,height:C,layout:j,images:N,placeholder:T,backgroundColor:I}=l,O=c(v,C,j),{style:q,className:R}=O,_=o(O,S),P={fallback:void 0,sources:[]};return N.fallback&&(P.fallback=n({},N.fallback,{srcSet:N.fallback.srcSet?L(N.fallback.srcSet):void 0})),N.sources&&(P.sources=N.sources.map((e=>n({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,n({},_,{style:n({},q,i,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(m,{layout:j,width:v,height:C},r.createElement(E,n({},d(T,!1,j,v,C,I,b,y))),r.createElement(x,n({"data-gatsby-image-ssr":"",className:g},w,u("eager"===p,!1,P,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:C,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const H=z(_);H.displayName="StaticImage",H.propTypes=F},7464:function(e,t,a){var r=a(1883),s=a(8032),i=a(5893);t.Z=()=>{const{site:e}=(0,r.useStaticQuery)("153443247"),{siteMetadata:t}=e||{},n=null==t?void 0:t.author,o=null==t?void 0:t.social;return console.log("siteMetadata",t),(0,i.jsxs)("div",{className:"bio",children:[(0,i.jsx)(s.S,{className:"bio-avatar",src:"https://avatars.githubusercontent.com/u/24849960",formats:["auto","webp","avif"],width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8428)}),(null==n?void 0:n.name)&&(0,i.jsxs)("p",{children:["Written by ",(0,i.jsx)("strong",{children:n.name})," ",(null==n?void 0:n.summary)||null," ",(0,i.jsx)("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||""),children:"You should follow them on Twitter"})]})]})}},8428:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3376f39641633fc1893356994b8964ab/d24ee/24849960.jpg","srcSet":"/static/3376f39641633fc1893356994b8964ab/dc5aa/24849960.jpg 13w,\\n/static/3376f39641633fc1893356994b8964ab/646b7/24849960.jpg 25w,\\n/static/3376f39641633fc1893356994b8964ab/d24ee/24849960.jpg 50w,\\n/static/3376f39641633fc1893356994b8964ab/64618/24849960.jpg 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/3376f39641633fc1893356994b8964ab/e7faa/24849960.avif 13w,\\n/static/3376f39641633fc1893356994b8964ab/f04f9/24849960.avif 25w,\\n/static/3376f39641633fc1893356994b8964ab/d4bf4/24849960.avif 50w,\\n/static/3376f39641633fc1893356994b8964ab/ee81f/24849960.avif 100w","type":"image/avif","sizes":"(min-width: 50px) 50px, 100vw"},{"srcSet":"/static/3376f39641633fc1893356994b8964ab/989b1/24849960.webp 13w,\\n/static/3376f39641633fc1893356994b8964ab/ce49b/24849960.webp 25w,\\n/static/3376f39641633fc1893356994b8964ab/3faea/24849960.webp 50w,\\n/static/3376f39641633fc1893356994b8964ab/6a679/24849960.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-8f004d208fde6cd03936.js.map