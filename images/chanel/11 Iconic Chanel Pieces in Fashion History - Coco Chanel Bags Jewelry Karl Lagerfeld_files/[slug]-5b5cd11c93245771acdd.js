(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2436],{6378:function(e,t,i){"use strict";i.d(t,{fC:function(){return o},gD:function(){return a},B$:function(){return l}});var r=i(1506),n=function(e){var t=new Date(e),i=""+(t.getMonth()+1),r=""+t.getDate(),n=t.getFullYear();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),[i,r,n].join(".")},o=function(e,t){return e?"".concat(n(t)," ").concat(r.Z.articleWrittenByLabel," ").concat(e):"".concat(n(t))},a=function(e){switch(e){case"Fullscreen":return"article-layout__figure--full-width";case"Outside Wrap":return"article-layout__figure--extra-wrap";case"Inside Wrap":default:return"article-layout__figure"}},l=function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]}},750:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return D},default:function(){return M}});var r=i(2875),n=i(3521),o=i(5614),a=i(7945),l=i(5634),s=i(1506),c=i(7158),d=i(8633),u=i(1132),m=i(3506),v=i(543),g=i(8027),p=i(6378),h=i(6357),f=i(3573),b=i(4263),y=i(347),x=i(9152),_=i(2408),j=i(2773),w=i(1324),N=i(4211),A=i(9916),I=i(1781),k=i(3946),O=i(2936),P=i(6246),z=i(2393),L=i(2087);function R(e){var t=e.sharableImage,i=(0,l.useRouter)(),r="black",n="white",o=32,a="".concat(s.Z.frontendUrl).concat(i.asPath);return(0,L.jsxs)("div",{className:"social-share-button",children:[(0,L.jsx)(f.Z,{url:a,children:(0,L.jsx)(b.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(y.Z,{url:a,children:(0,L.jsx)(x.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(_.Z,{url:a,media:t,children:(0,L.jsx)(j.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(w.Z,{url:a,children:(0,L.jsx)(N.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(A.Z,{url:a,children:(0,L.jsx)(I.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(k.Z,{url:a,children:(0,L.jsx)(O.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})}),(0,L.jsx)(P.Z,{url:a,children:(0,L.jsx)(z.Z,{size:o,iconFillColor:r,bgStyle:{fill:n}})})]})}var C=i(2281);function G(e){var t,i,r=e.seo,n=e.originalPublicationDate,o=e._firstPublishedAt,a=e.publishedAuthorName,c=e.editorName,d=e.category,u=e.title,m=e.abstract,f=e.postCover,b=(0,l.useRouter)(),y=r.filter((function(e){return"meta"===e.tag})).filter((function(e){return"og:image"===e.attributes.property})).pop(),x=n||o,_=a||c,j=f.filter((function(e){return"CoverImageRecord"===e.__typename})).pop(),w=f.filter((function(e){return"VideoCoverRecord"===e.__typename})).pop();return(0,L.jsxs)("header",{className:"hero--center",children:[(0,L.jsxs)("div",{className:"hero__body",children:[(0,L.jsx)(v.default,{href:"/".concat(s.Z.categoryDirectory,"/").concat(null===d||void 0===d?void 0:d.slug),children:(0,L.jsx)("a",{className:"hero__pretitle",title:null===d||void 0===d?void 0:d.title,children:null===d||void 0===d?void 0:d.title})}),(0,L.jsx)("h1",{className:"hero__title",children:u}),(0,L.jsx)("div",{className:"hero__text",children:(0,h.ZP)(m)}),(0,L.jsx)("div",{className:"hero__footer",children:(0,p.fC)(_,x)}),(0,L.jsx)("div",{className:"hero__toolbar",children:(0,L.jsx)("div",{className:"hero__toolbar__item",children:(0,L.jsx)(R,{sharableImage:y.attributes.content})})})]}),(0,L.jsxs)("figure",{className:"article-layout__figure--extra-wrap",children:[(null===j||void 0===j?void 0:j.coverImage)&&(0,L.jsx)(g.default,{src:null===j||void 0===j?void 0:j.coverImage.url,alt:null!==j&&void 0!==j&&j.coverImage.alt?null===j||void 0===j?void 0:j.coverImage.alt:null===j||void 0===j||null===(t=j.coverImage.smartTags)||void 0===t?void 0:t.join(" "),height:null===j||void 0===j?void 0:j.coverImage.height,width:null===j||void 0===j?void 0:j.coverImage.width,placeholder:"blur",blurDataURL:null===j||void 0===j?void 0:j.coverImage.blurUpThumb}),w&&(0,L.jsx)("div",{className:"js-video-hero",children:(0,L.jsx)("div",{className:"article-layout__figure__video",children:(0,L.jsxs)("div",{className:"video-hero",children:[(0,L.jsx)("div",{className:"video-hero__cover"}),(0,L.jsx)("div",{className:"video-hero__tv",children:(0,L.jsx)("iframe",{className:"video-hero__screen",src:"https://www.youtube-nocookie.com/embed/".concat((0,p.B$)(w.url),"/?controls=0&autoplay=1&mute=1&loop=1&playlist=").concat((0,p.B$)(w.url),"&start=").concat(w.startSeconds||0,"&end=").concat(w.endSeconds)})})]})})})]}),(null===j||void 0===j||null===(i=j.coverImage)||void 0===i?void 0:i.title)&&(0,L.jsx)("div",{className:"wrap",children:(0,L.jsx)("figcaption",{className:"figure-caption",children:null===j||void 0===j?void 0:j.coverImage.title})}),(0,L.jsx)("div",{className:"space--both-2",children:(0,L.jsx)("div",{className:"adv--topdesktop",children:(0,L.jsx)(C.Un,{className:"article-layout__figure--extra-wrap _iub_cs_activate-inline",adUnit:"/21831397253/ARTICLE_LEADERBOARD",sizes:[[728,90],[320,50]],sizeMapping:[{viewport:[1024,768],sizes:[[728,90]]},{viewport:[640,480],sizes:[[320,50]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:b.query.category}})})})]})}var E=i(3882),Z=i(298);function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}var S=(0,n.default)((function(){return i.e(7732).then(i.bind(i,7732))}),{loadableGenerated:{webpack:function(){return[7732]},modules:["[category]/[slug]/index.js -> @/components/Article/RecommendedArticles"]}}),B=void 0,U=(0,n.default)((function(){return i.e(3321).then(i.bind(i,3321))}),{loadableGenerated:{webpack:function(){return[3321]},modules:["[category]/[slug]/index.js -> components/Article/TagList"]}}),F=(0,n.default)((function(){return i.e(4462).then(i.bind(i,4462))}),{loadableGenerated:{webpack:function(){return[4462]},modules:["[category]/[slug]/index.js -> @/components/Article/RelatedArticles"]}}),D=!0;function M(e){var t,v=e.subscription,g=(0,d.L)(v).data,p=g.article,h=(0,l.useRouter)(),f=null===p||void 0===p?void 0:p.seo.filter((function(e){return"title"===e.tag})).pop().content.replace(/\"/g,"&quot;"),b=null===p||void 0===p?void 0:p.seo.filter((function(e){var t;return"og:description"===(null===(t=e.attributes)||void 0===t?void 0:t.property)})).pop().attributes.content.replace(/["']/g,""),y=null===p||void 0===p?void 0:p.seo.filter((function(e){return"meta"===e.tag})).filter((function(e){return"og:image"===e.attributes.property})).pop();null===p||void 0===p||null===(t=p.tags)||void 0===t||t.map((function(e){return e.title}));if((0,E.useEffect)((function(){document.body.classList.remove("body-with-masthead"),document.body.classList.remove("home"),document.body.classList.remove("home-index");var e=document.getElementById("GenecyDFPAdWallpaperCont");if(e){e.parentNode.removeChild(e);var t=document.getElementsByClassName("site-content")[0],i=document.getElementsByClassName("site-footer")[0];t&&i&&(t.style.width="100vw",i.style.width="100vw",t.style.maxWidth="100%",i.style.maxWidth="100%",t.style.marginRight="auto",i.style.marginRight="auto",t.style.marginLeft="auto",i.style.marginLeft="auto",document.body.classList.remove("body-with-background"))}}),[]),null===p)return(0,L.jsx)(o.default,{statusCode:404});var x="".concat(s.Z.frontendUrl).concat(h.asPath),_=function(e){switch(e.__typename){case"TextAreaRecord":var t=(0,n.default)((function(){return i.e(9537).then(i.bind(i,9537))}),{loadableGenerated:{webpack:function(){return[9537]},modules:["[category]/[slug]/index.js -> @/components/Article/TextArea"]}});return(0,L.jsx)(t,{textContent:e.content},e.id);case"VideoRecord":B=(0,n.default)((function(){return Promise.all([i.e(2544),i.e(4986),i.e(5030),i.e(8361)]).then(i.bind(i,9962))}),{loadableGenerated:{webpack:function(){return[9962]},modules:["[category]/[slug]/index.js -> @/components/Article/VideoPlayer"]}});var o={aspectRatio:"16:9",height:e.video.height,width:e.video.width,responsive:!0,fluid:!0,techOrder:["html5",e.video.provider],autoplay:!1,controls:!0,sources:[{src:e.video.url,type:e.video.mimeType?e.video.mimeType:"video/".concat(e.video.provider)}]};return(0,L.jsx)(B,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?T(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({sectionTitle:e.title,uniqueId:e.id},o),e.id);case"AdaptiveGalleryRecord":var a=(0,n.default)((function(){return i.e(4530).then(i.bind(i,4530))}),{loadableGenerated:{webpack:function(){return[4530]},modules:["[category]/[slug]/index.js -> @/components/Article/AdaptiveGallery"]}});return(0,L.jsx)(a,{caption:e.caption,images:e.images},e.id);case"QuoteRecord":var l=(0,n.default)((function(){return i.e(7460).then(i.bind(i,7460))}),{loadableGenerated:{webpack:function(){return[7460]},modules:["[category]/[slug]/index.js -> @/components/Article/Quote"]}});return(0,L.jsx)(l,{quote:e.content},e.id);case"HighlightedtextRecord":var s=(0,n.default)((function(){return i.e(310).then(i.bind(i,310))}),{loadableGenerated:{webpack:function(){return[310]},modules:["[category]/[slug]/index.js -> @/components/Article/HighlightedText"]}});return(0,L.jsx)(s,{content:e.content},e.id);case"ImageBoxWithLinkRecord":var c=(0,n.default)((function(){return Promise.all([i.e(4906),i.e(129)]).then(i.bind(i,5182))}),{loadableGenerated:{webpack:function(){return[5182]},modules:["[category]/[slug]/index.js -> @/components/Article/ImageBoxWithLink"]}});return(0,L.jsx)(c,{title:e.title,externalUrl:e.externalUrl,imageMode:e.mode,image:e.image},e.id);case"ImageBoxRecord":var d=(0,n.default)((function(){return Promise.all([i.e(4906),i.e(4110)]).then(i.bind(i,173))}),{loadableGenerated:{webpack:function(){return[173]},modules:["[category]/[slug]/index.js -> @/components/Article/ImageBox"]}});return(0,L.jsx)(d,{caption:e.caption,externalUrl:e.externalUrl,imageMode:e.mode,image:e.image},e.id);case"ImageBoxWithGradientRecord":var u=(0,n.default)((function(){return i.e(2399).then(i.bind(i,2399))}),{loadableGenerated:{webpack:function(){return[2399]},modules:["[category]/[slug]/index.js -> @/components/Article/ImageBoxWithGradient"]}});return(0,L.jsx)(u,{caption:e.caption,image:e.image},e.id);case"ImageGalleryRecord":var m=(0,n.default)((function(){return i.e(463).then(i.bind(i,463))}),{loadableGenerated:{webpack:function(){return[463]},modules:["[category]/[slug]/index.js -> @/components/Article/ImageGallery"]}});return(0,L.jsx)(m,{images:e.images},e.id);case"ImageTextRecord":var v=(0,n.default)((function(){return Promise.all([i.e(4906),i.e(1654)]).then(i.bind(i,6018))}),{loadableGenerated:{webpack:function(){return[6018]},modules:["[category]/[slug]/index.js -> @/components/Article/TextAndImage"]}});return(0,L.jsx)(v,{title:e.title,content:e.content,image:e.image,invert:e.invertOrder},e.id);case"ShopRecord":var g=(0,n.default)((function(){return i.e(4097).then(i.bind(i,4097))}),{loadableGenerated:{webpack:function(){return[4097]},modules:["[category]/[slug]/index.js -> @/components/Article/Shop"]}});return(0,L.jsx)(g,{images:e.images},e.id);case"SquareBlockRecord":var p=(0,n.default)((function(){return Promise.all([i.e(4906),i.e(7493)]).then(i.bind(i,8847))}),{loadableGenerated:{webpack:function(){return[8847]},modules:["[category]/[slug]/index.js -> @/components/Article/SquareImages"]}});return(0,L.jsx)(p,{images:e.images},e.id);case"IframeRecord":var h=(0,n.default)((function(){return i.e(3256).then(i.bind(i,3256))}),{loadableGenerated:{webpack:function(){return[3256]},modules:["[category]/[slug]/index.js -> @/components/Article/EmbeddableIframe"]}});return(0,L.jsx)(h,{url:e.url,height:e.height,width:e.width,allowFullScreen:e.allowFullscreen},e.id);case"HlsVideoRecord":return B=(0,n.default)((function(){return Promise.all([i.e(4027),i.e(849)]).then(i.bind(i,849))}),{loadableGenerated:{webpack:function(){return[849]},modules:["[category]/[slug]/index.js -> @/components/Article/HlsVideoPlayer"]}}),(0,L.jsx)(B,{controls:e.showControls,autoPlay:e.autoPlay,muted:e.muted,loop:e.loop,src:e.videoSource.video.streamingUrl},e.id)}},j=null===p||void 0===p?void 0:p.postCover.filter((function(e){return"CoverImageRecord"===e.__typename})).pop();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Z.Z,{}),(0,L.jsxs)(m.Z,{preview:v.preview,footerProps:null===g||void 0===g?void 0:g.magazines,transparentHeader:!0,children:[(0,L.jsx)(c.default,{children:(null===p||void 0===p?void 0:p.seo)&&(0,u.y)(null===p||void 0===p?void 0:p.seo)}),(0,L.jsx)(a.PB,{canonical:x,openGraph:{url:x}}),(0,L.jsx)(a.dX,{url:x,title:f,images:["".concat(void 0===j?y.attributes.content:null===j||void 0===j?void 0:j.coverImage.url)],datePublished:new Date(null===p||void 0===p?void 0:p._publishedAt).toISOString(),dateModified:new Date(null===p||void 0===p?void 0:p._updatedAt).toISOString(),authorName:null===p||void 0===p?void 0:p.publishedAuthorName,publisherName:"L&#39;Officiel",publisherLogo:"https://www.datocms-assets.com/39109/1615808428-logo-lofficiel.svg",description:b}),(0,L.jsx)("div",{className:"wrap--on-fullhd",children:(0,L.jsx)("div",{className:"site-background",children:(0,L.jsx)("div",{className:"wrap--full",children:(0,L.jsx)("div",{className:"site-content__spacer",children:(0,L.jsxs)("article",{className:"article-layout",children:[(0,L.jsxs)("aside",{className:"article-layout__left",children:[(0,L.jsx)("div",{className:"article-layout__toolbar",children:(0,L.jsx)("div",{className:"article-layout__toolbar__item",children:(0,L.jsx)(R,{sharableImage:y.attributes.content})})}),(0,L.jsx)("div",{className:"adv--left-sidebar",children:(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline",adUnit:"/21831397253/OFFICIEL_GLOBAL_ARTICLE_DESKTOP_BOX_LEFT",sizes:[[160,600],[300,1050]],sizeMapping:[{viewport:[1440,900],sizes:[[300,1050]]},{viewport:[1024,768],sizes:[[160,600]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category}})})]}),(0,L.jsxs)("section",{className:"article-layout__main",children:[(0,L.jsx)("div",{className:"space--bottom-3",children:(0,L.jsx)(G,{seo:null===p||void 0===p?void 0:p.seo,originalPublicationDate:null===p||void 0===p?void 0:p.originalPublicationDate,_firstPublishedAt:null===p||void 0===p?void 0:p._firstPublishedAt,publishedAuthorName:null===p||void 0===p?void 0:p.publishedAuthorName,category:null===p||void 0===p?void 0:p.category,title:null===p||void 0===p?void 0:p.title,abstract:null===p||void 0===p?void 0:p.abstract,postCover:null===p||void 0===p?void 0:p.postCover})}),(0,L.jsx)("div",{className:"space--both-4 article-layout__figure--extra-wrap",children:(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("div",{className:"adv--topdesktop",children:(0,L.jsx)(C.Un,{adUnit:"/21831397253/OFFICIEL_GLOBAL_ARTICLE_TOP",sizes:[[300,50],[320,100],[970,90],[970,250]],sizeMapping:[{viewport:[2560,1440],sizes:[[970,90],[970,250]]},{viewport:[640,480],sizes:[[320,100],[300,50]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category}})})})}),(0,L.jsxs)("section",{children:[null===p||void 0===p?void 0:p.postBlocks.map((function(e,t){return t%3===0?(0,L.jsxs)("div",{className:"",children:[(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline adv--mobile-250-mobile",adUnit:"/21831397253/ARTCILEMOBILEBOX",sizes:[250,250],sizeMapping:[{viewport:[640,480],sizes:[[250,250]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category}}),_(e)]}):_(e)})),(0,L.jsx)("div",{className:"adv--topdesktop space--bottom-2 article-layout__figure--extra-wrap",children:(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline",adUnit:"/21831397253/Officiel_Global_Home_Page",sizes:[[970,250],[1920,250],[320,100],[300,50]],sizeMapping:[{viewport:[2560,1440],sizes:[[1920,250],[970,250]]},{viewport:[640,480],sizes:[[320,100],[300,50]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category,slot:"body"}})}),(0,L.jsx)("div",{className:"adv--topdesktop space--bottom-2",children:(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline",adUnit:"/21831397253/ARTICLE_TOP_TAGS",sizes:[[320,100],[300,50],[728,90]],sizeMapping:[{viewport:[1024,768],sizes:[[728,90]]},{viewport:[640,480],sizes:[[320,100],[300,50]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category}})})]}),(null===p||void 0===p?void 0:p.tags.length)>0&&(0,L.jsx)(U,{tags:null===p||void 0===p?void 0:p.tags})]}),(0,L.jsx)("aside",{className:"article-layout__right",children:(0,L.jsx)("div",{className:"adv--right-sidebar",children:(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline",adUnit:"/21831397253/OFFICIEL_GLOBAL_ARTICLE_DESKTOP_BOX_RIGHT",sizes:[[300,600],[160,600],[336,280],[300,1050]],sizeMapping:[{viewport:[2560,1440],sizes:[[336,280],[300,1050]]},{viewport:[1440,900],sizes:[[300,600]]},{viewport:[1024,768],sizes:[[160,600]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category},onSlotRender:function(e){document.getElementsByClassName("article-layout")[0].classList.add("article-layout--with-sticky-adv")}})})})]})})})})}),3===(null===p||void 0===p?void 0:p.relatedPosts.length)&&(0,L.jsx)(F,{relatedArticles:null===p||void 0===p?void 0:p.relatedPosts}),(0,L.jsx)("div",{className:"adv--undertitlemobile space--both-2",children:(0,L.jsx)(C.Un,{className:"_iub_cs_activate-inline",adUnit:"/21831397253/GLOBAL_MOBILE_INTERSTITIAL",sizes:[[250,250],[300,250]],sizeMapping:[{viewport:[640,480],sizes:[[250,250],[300,250]]}],targetingArguments:{environment:"production",market:s.Z.countryName,page_type:"article",category:h.query.category}})}),(0,L.jsx)(S,{articles:null===g||void 0===g?void 0:g.recommendedArticles})]})]})}},9:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[category]/[slug]",function(){return i(750)}])}},function(e){e.O(0,[9774,8848,7945,8633,3991,4668,2888,179],(function(){return t=9,e(e.s=t);var t}));var t=e.O();_N_E=t}]);