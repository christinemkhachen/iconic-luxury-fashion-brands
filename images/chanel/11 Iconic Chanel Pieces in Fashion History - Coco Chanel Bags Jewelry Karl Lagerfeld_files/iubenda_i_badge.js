var _iub=_iub||[];_iub.ifr=_iub.ifr||[],function(t,e){function i(t){return new s(t)}function n(e){if(!e){if(!t.event)return null;e=t.event}return typeof e.keyCode=="number"?e.keyCode:typeof e.which=="number"?e.which:typeof e.charCode=="number"?e.charCode:null}var s=function(t){return this.linkA=t.linkA,this.embedP=t.embedP,this.iFrUrl=t.iFrUrl,this.inParent=t.inParent,this.cdnBaseUrl=t.cdnBaseUrl,this.straightShow=t.straightShow,this.callback=t.callback,this.closeOn=t.closeOn,this.shortHeightBy=t.shortHeightBy,this.addClass=t.addClass,this.zIndex=t.zIndex||1e4,this.name=t.name,this.overflow=t.overflow==="false"||t.overflow===!1?!1:"html",this.isMobile=!1,this.mainDoc=null,this.mainC=null,this.cOver=null,this.sp=null,this.iPPPup=null,this.ppW=800,this.ppH=800,this.vpWidth=null,this.vpHeight=null,this.scrollX=null,this.scrollY=null,this.mainL=null,this.mainT=null,this.margin=80,this.htmlOvr={},this.checkForMobile(),this.straightShow?this.showPP():this.bindAll(),this};s.prototype.showPP=function(){var i=this;if(this.oldOnKeyDown=e.onkeydown,e.onkeydown=function(t){return i.keyPressed(t),!0},this._iub=this.inParent?parent._iub||t._iub:t._iub,this.mainDoc=this.inParent?parent.parent.document:e,this.wipeOut(),this.mainDoc.getElementsByTagName("html")[0],this.getViewPortSize(),this.overflow&&this.setOverflow(this.vpHeight),this.setSizeAndPosition(),this.getDocHeight(),this.mainC=this.mainDoc.createElement("div"),this.mainC.id="iubenda-pp",this.setStyle(this.mainC,"top:"+this.mainT+"px; left:"+this.mainL+"px; position:absolute; z-index:"+this.zIndex+";"),typeof this.addClass=="string"&&(this.mainC.className=this.addClass),this.iPPPup=this.mainDoc.createElement("div"),this.iPPPup.id="iubenda-pp-popup",this.setStyle(this.iPPPup,"position:relative; display:none"),this.mainC.appendChild(this.iPPPup),typeof parent.IubSpinner!="undefined"){var n={lines:8,length:2,width:2,radius:2,color:"#FFF",speed:1.2,trail:60,shadow:!1};this.sp=new parent.IubSpinner(n).spin(),this.setStyle(this.sp.el,"position:relative; left:"+this.ppW/2+"px; top:"+100+"px;"),this.mainC.appendChild(this.sp.el)}var s=this.mainDoc.createElement("div");s.id="iubenda-pp-content",this.iPPPup.appendChild(s),this.cOver=this.mainDoc.createElement("div"),this.cOver.id="iubenda-pp-overlay";var o=this.isMobile?this.getDocHeight()+"px":"100%";if(this.setStyle(this.cOver,"position:fixed; top:0; left:0; width:100%; height:"+o+"; background-color:black; z-index:"+(this.zIndex-1)+"; opacity:.80; filter:alpha(opacity=80); overflow: hidden"),this.closeOn&&this.closeOn!="overlay"||(this.cOver.onclick=function(){return i.closePP(),!1}),!this.closeOn||this.closeOn=="icon"){var r=this.mainDoc.createElement("a");r.href="#",this.setStyle(r,"background:url('"+this.cdnBaseUrl+"close.png') no-repeat scroll 0 0 transparent; border:medium none; display:block; height:24px; position:absolute; right:-9px; top:-10px; width:23px; z-index:10010;"),this.iPPPup.appendChild(r),r.onclick=function(t){return t.stopPropagation(),i.closePP(),!1}}var a=this.mainDoc.createElement("IFRAME"),l=this.iFrUrl.indexOf("?")!=-1?this.iFrUrl+"&ifr=true&height="+this.ppH:this.iFrUrl+"?ifr=true&height="+this.ppH;a.setAttribute("src",l),a.setAttribute("scrolling","no"),a.setAttribute("frameBorder","0"),a.setAttribute("allowtransparency","true"),a.setAttribute("style","border: 1px solid rgba(0, 0, 0, 0.3); -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); -webkit-background-clip: padding-box; -moz-background-clip: padding-box; background-clip: padding-box;"),a.style.width=this.ppW+"px",a.style.height=this.ppH+"px",s.style.width=this.ppW+"px",s.style.height=this.ppH+"px",this.name&&(a.name=this.name),this._iub.onLoadCall(a,function(){i.ppLoaded()}),s.appendChild(a),this.embedP.appendChild(this.mainC),this.mainC.parentNode.insertBefore(this.cOver,this.mainC.nextSibling)},s.prototype.getViewPortSize=function(){this.isMobile?(this.vpWidth=(this.inParent?parent.window.innerWidth:t.innerWidth)||this.mainDoc.documentElement.clientWidth,this.vpHeight=(this.inParent?parent.window.innerHeight:t.innerHeight)||this.mainDoc.documentElement.clientHeight):(this.vpWidth=this.mainDoc.documentElement.clientWidth,this.vpHeight=this.mainDoc.documentElement.clientHeight)},s.prototype.setSizeAndPosition=function(){this.getViewPortSize(),this.margin=this.vpWidth>768?80:this.vpWidth>480?50:25,this.ppW=Math.min(this.vpWidth-this.margin,800),this.ppH=this.isMobile?Math.min(this.vpHeight-this.margin,800):Math.min(Math.max(this.vpHeight-100,480),800),typeof this.shortHeightBy=="number"&&(this.ppH=this.ppH-this.shortHeightBy),this.scrollX=(this.inParent?parent.window.pageXOffset:t.pageXOffset)||this.mainDoc.documentElement.scrollLeft,this.scrollY=(this.inParent?parent.window.pageYOffset:t.pageYOffset)||this.mainDoc.documentElement.scrollTop,this.mainL=(this.vpWidth-this.ppW)/2+this.scrollX,this.mainT=this.isMobile?this.margin/2+this.scrollY:50+this.scrollY},s.prototype.getIFrameContainer=function(){return this.iPPPup},s.prototype.setStyle=function(t,e){this._iub.setStyle(t,e)},s.prototype.closePP=function(){this.embedP.removeChild(this.mainC),this.embedP.removeChild(this.cOver),this.overflow&&this.resetOverflow(this.mainDoc.getElementsByTagName("html")[0]),e.onkeydown=this.oldOnKeyDown},s.prototype.wipeOut=function(){if(this.mainDoc){if(this.mainDoc.getElementById("iubenda-pp")){var t=this.mainDoc.getElementById("iubenda-pp");t.parentNode.removeChild(t)}if(this.mainDoc.getElementById("iubenda-pp-overlay")){var t=this.mainDoc.getElementById("iubenda-pp-overlay");t.parentNode.removeChild(t)}}},s.prototype.ppLoaded=function(){this.sp&&this.sp.stop(),this.iPPPup.style.display="block",typeof this.callback=="function"&&this.callback()},s.prototype.keyPressed=function(t){n(t)===27&&this.closePP()},s.prototype.getDocHeight=function(){var t=this.mainDoc;return Math.max(Math.max(t.body.scrollHeight,t.documentElement.scrollHeight),Math.max(t.body.offsetHeight,t.documentElement.offsetHeight),Math.max(t.body.clientHeight,t.documentElement.clientHeight))},s.prototype.setOverflow=function(t){var e=this.mainDoc.getElementsByTagName("html")[0];this.htmlOvr={general:e.style.overflow.replace("/s*/g"," "),X:e.style.overflowX.replace("/s*/g"," "),Y:e.style.overflowY.replace("/s*/g"," ")};var i=t?t-(this.shortHeightBy||0)>=550?"hidden":"auto":"hidden";e.style.overflow="",e.style.overflowX=i,e.style.overflowY=i},s.prototype.resetOverflow=function(){var t=this.mainDoc.getElementsByTagName("html")[0];t.style.overflow=this.htmlOvr.general,t.style.overflowX=this.htmlOvr.X,t.style.overflowY=this.htmlOvr.Y},s.prototype.checkForMobile=function(){this.isMobile=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())},s.prototype.bindAll=function(){var e=this;this.linkA.onclick=function(i){"undefined"==typeof i&&(i=t.event),i.ctrlKey||typeof i.metaKey!="undefined"&&i.metaKey||(i.target||(i.target=i.srcElement),i.preventDefault?i.preventDefault():i.returnValue=!1,e.showPP())}},t._iub.ifr.iubendaStartIFrame=function(t){return i(t)}}(window,document);var _iub=_iub||[];_iub.ifr=_iub.ifr||[],function(t,e){function i(t){var t=t||{},i=t.linkA||e.getElementById("i_badge-link"),s=t.embedP||parent.parent.document.getElementsByTagName("body")[0],o=t.iFrUrl||i.href.split("?")[0],r=typeof t.inParent!="undefined"?t.inParent:!0,a=t.cdnBaseUrl,l=t.straightShow||!1,h=t.callback||null,u=t.preventClose||!1,c=t.shortenHeightTo||null,d=typeof t.addClass=="string"?t.addClass:null,p=t.useProtocol||"//",f=parseInt(t.zIndex)||null,m=t.overflow;return o=n(o,p),a=n(a,p),_iub.ifr.iubendaStartIFrame({linkA:i,embedP:s,iFrUrl:o,inParent:r,cdnBaseUrl:a,straightShow:l,callback:h,preventClose:u,shortenHeightTo:c,addClass:d,zIndex:f,overflow:m})}function n(t,e){var i=t.indexOf("//")!==-1?t.split("//")[1]:t;return e.concat(i)}t._iub.ifr.iubendaStartBadge=function(t){return i(t)}}(window,document);