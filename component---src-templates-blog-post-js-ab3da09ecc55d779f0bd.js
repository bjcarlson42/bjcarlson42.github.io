(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7HQ6":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABL0lwEe2A8pCL/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACAxESIf/aAAgBAQABBQJ2VqNWabHrFITFMtTr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPwFSaj//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwFj/8QAHRAAAQIHAAAAAAAAAAAAAAAAEQABAgMQEiAxcf/aAAgBAQAGPwJxtMJlxyj7T//EABsQAQEBAAIDAAAAAAAAAAAAAAERADFBIVFh/9oACAEBAAE/IWpy+LlVOwdTvFkMHQ+2mAx3CZNps1F/N//aAAwDAQACAAMAAAAQi9e9/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBECEx/9oACAEDAQE/EJMZtcH/xAAZEQEAAgMAAAAAAAAAAAAAAAABABEQITH/2gAIAQIBAT8QDZU1h7P/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMUFhUYH/2gAIAQEAAT8Q1SoD4rLgoN+P0/cabRxpeTTwXrOnm8BH5ivYnmQ6CAaxFymVsyjCLtM//9k=","width":50,"height":50,"src":"/static/dd07c4f21e9069d716712ce5ef318616/99438/profile-pic.jpg","srcSet":"/static/dd07c4f21e9069d716712ce5ef318616/99438/profile-pic.jpg 1x,\\n/static/dd07c4f21e9069d716712ce5ef318616/aba1d/profile-pic.jpg 1.5x,\\n/static/dd07c4f21e9069d716712ce5ef318616/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Benjamin Carlson","summary":"who is a 19 year old studying computer science building cool things with technology on the side. "},"social":{"twitter":"benscstutorials"}}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=A(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(L,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,j=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:B?1:0,transition:O?"opacity "+E+"ms":"none"},o),Q="boolean"==typeof m?"lightgray":m,N={transitionDelay:E+"ms"},k=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},O&&N),o),f),T={title:t,alt:this.state.isVisible?"":a,style:k,className:A,itemProp:y};if(g){var V=g,M=p(g);return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),Q&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&N)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:V,generateSources:x}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(V),d.default.createElement(L,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)((0,l.default)({alt:a,title:t,loading:w},M),{},{imageVariants:V}))}}))}if(h){var Y=h,z=p(h),P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},Q&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:Q,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},O&&N)}),z.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:T,imageVariants:Y,generateSources:x}),z.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:T,imageVariants:Y,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(Y),d.default.createElement(L,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)((0,l.default)({alt:a,title:t,loading:w},z),{},{imageVariants:Y}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});O.propTypes={resolutions:C,sizes:Q,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=O;t.default=N},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),l=a("czNK"),d=a("ZD67"),c=a("0/R4"),u=a("s5qY"),f=a("s5qY"),A=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,g=Object.isExtensible,h=d.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(c(e)){var t=p(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(u(this,"WeakMap"),e,t)}},b=e.exports=a("4LiD")("WeakMap",m,E,d,!0,!0);f&&A&&(l((r=d.getConstructor(m,"WeakMap")).prototype,E),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=b.prototype,a=t[e];s(t,e,(function(t,i){if(c(t)&&!g(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),l=a("SlkY"),d=a("CkkT"),c=a("aagx"),u=a("s5qY"),f=d(5),A=d(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var d=e((function(e,r){o(e,d,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(d.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?g(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?g(u(this,t)).has(e):a&&c(a,this._i)}}),d},def:function(e,t,a){var r=i(n(t),!0);return!0===r?g(e).set(t,a):r[e._i]=a,e},ufstore:g}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return A}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("f3/d"),a("0mN4"),a("7HQ6")),o=a("9eSz"),l=a.n(o),d=a("p3AD"),c=function(){var e=s.data,t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a.name)," ",a.summary," ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},u=a("Bl7J"),f=a("vrFN"),A=(t.default=function(e){var t=e.data,a=e.pageContext,r=e.location,s=t.markdownRemark,o=a.previous,l=a.next,A=s.frontmatter.title;return i.a.createElement(u.a,{location:r},i.a.createElement(f.a,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},s.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},s.frontmatter.date),"Python Tutorial 2: Variables, Data Types, and Comments"===A&&i.a.createElement("span",null,i.a.createElement("iframe",{title:"1",width:"560",height:"315",src:"https://www.youtube.com/embed/Z8k8BfzO_6E",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(c,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,o&&i.a.createElement(n.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),i.a.createElement("li",null,l&&i.a.createElement(n.Link,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →")))))},"2868899261")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ab3da09ecc55d779f0bd.js.map