(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(t,i){!function(){var t="netflix-video";window.Utils=function(t){return t.tracker=function(t,i,e){if(this.suppressLog)this.suppressLog=!1;else if("undefined"!=typeof Monet&&Monet.trackEvent(t,{url:i,pos:e.time}),"undefined"!=typeof Enabler)switch(t){case"VIDEO_FIRST_QUART":Enabler.counter("VIDEO_FIRST_QUART");break;case"VIDEO_SECOND_QUART":Enabler.counter("VIDEO_SECOND_QUART");break;case"VIDEO_THIRD_QUART":Enabler.counter("VIDEO_THIRD_QUART");break;case"VIDEO_PLAY":Enabler.counter("VIDEO_PLAY");break;case"VIDEO_COMPLETE":Enabler.counter("VIDEO_COMPLETE");break;case"VIDEO_PAUSE":Enabler.counter("VIDEO_PAUSE");break;case"VIDEO_STOP":Enabler.counter("VIDEO_STOP");break;case"VIDEO_UNMUTE":Enabler.counter("VIDEO_UNMUTE");break;case"VIDEO_MUTE":Enabler.counter("VIDEO_MUTE")}},t.isAutoplayAvailable=function(){if(!this.isMobile)return!0;if(this.isiOS){if(this.isSafari){if(this.isiPad)var t=Number(navigator.userAgent.split("iPad")[1].split(" ")[3].replace("_","."));else t=navigator.userAgent.split("iPhone OS ")[1].split(" ")[0].split("_")[0];return t>=10}return!1}return!0},t.timeFormat=function(t){var i=parseInt(t,10),e=Math.floor(i/3600),s=Math.floor((i-3600*e)/60),o=i-3600*e-60*s;return s<10&&(s=s),o<10&&(o="0"+o),(s||0)+":"+(o||"00")},t.hide=function(t){t.classList.add("hide")},t.show=function(t){t.classList.remove("hide")},t}(window.Utils||{});var i,e=function(t,i){function e(t,i){this._id=t,this.id=t,this.title=i.sources[t].split("/").pop().split(".")[0],this.plays=0,this.completed=0,this.layers=[],this.source=i.sources[t],this.customControls=i.customControls[t]||!1,this.controls=void 0===i.controls[t]||i.controls[t],this.muted=i.muted[t]||!1,this.hideOnComplete=i.hideOnComplete[t]||!1}return e.prototype.hasBeenPlayed=function(){return Boolean(this.plays)},e}(),s=function(i,s){function o(i,s){this.component=i,this.config=s,this.sources=[],this.wrapper=document.createElement("div"),this.closeButton=function(){var t=document.createElement("div"),i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","20px"),i.setAttribute("height","20px"),i.fill=new Utils.SvgIcon("closeButtonFill","M0,10a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",this.config.closeColors[0]);var e=Math.round(14),s=20-e;return i.cross=new Utils.SvgIcon("line1","M"+s+" "+s+" L"+e+" "+e+" M"+e+" "+s+" L"+s+" "+e),i.cross.setAttribute("stroke",this.config.closeColors[1]),i.cross.setAttribute("stroke-width",2),i.appendChild(i.fill),i.appendChild(i.cross),t.appendChild(i),t}.call(this),this.closeButtonSvg=this.closeButton.getElementsByTagName("svg")[0],this.container=document.createElement("div"),this.container.className="netflix-video-container",this.clickArea=document.createElement("div"),this.closeButton.classList.add("close"),this.clickArea.classList.add("videoClick"),this.wrapper.classList.add("netflix-video"),this.wrapper.appendChild(this.container),this.wrapper.appendChild(this.clickArea),this.wrapper.appendChild(this.closeButton),this.component.appendChild(this.wrapper);for(var o=0;o<this.config.sources.length;o++)this.sources.push(new e(o,this.config)),this.sources[o].muted=this.config.muted[o];function n(t,i){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("width","25px"),e.setAttribute("height","25px"),e.setAttribute("viewBox","0 0 50 50"),e.id=t||"",e.hover=i,e}function r(){this._video.paused?this.resume():(this.pause(),Utils.tracker("VIDEO_PAUSE",this.currentVideo.source,{time:this.video.getCurrentTime()}))}function h(){this.video.isMuted()?this.unmute():this.mute()}function a(){clearInterval(this.timer),this.playing=!0,this.component.playing=!0,this.timer=setInterval(function(){l.call(this)}.bind(this),10),l.call(this)}function l(){if(this.video.getDuration()){c.call(this);var t=this.video.getCurrentTime()/this.video.getDuration();this.barFill.seeking||(this.barFill.style.width=100*t+"%")}switch(this.component.dispatch("video-time",{currentTime:this.video.getCurrentTime(),duration:this.video.getDuration()||0,target:this.component}),Math.round(100*t)){case 25:this.currentVideo.firstQuart||(Utils.tracker("VIDEO_FIRST_QUART",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.currentVideo.firstQuart=!0);break;case 50:this.currentVideo.secondQuart||(Utils.tracker("VIDEO_SECOND_QUART",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.currentVideo.secondQuart=!0);break;case 75:this.currentVideo.thirdQuart||(Utils.tracker("VIDEO_THIRD_QUART",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.currentVideo.thirdQuart=!0)}}function c(t){this.timerView.innerHTML=this.timerView.innerHTML=Utils.timeFormat(t||Math.round(this.video.getCurrentTime()))+" / "+Utils.timeFormat(Math.round(this.video.getDuration()))}function u(){this.clickArea.addEventListener("click",d.bind(this)),this.closeButton.addEventListener("click",this.close.bind(this)),this.closeButton.addEventListener("mouseover",function(){TweenMax.to(this.closeButtonSvg.fill,.3,{fill:this.config.closeColors[1],ease:Quad.easeOut}),this.closeButtonSvg.cross.setAttribute("stroke",this.config.closeColors[0])}.bind(this)),this.closeButton.addEventListener("mouseout",function(){TweenMax.to(this.closeButtonSvg.fill,.3,{fill:this.config.closeColors[0],ease:Quad.easeOut}),this.closeButtonSvg.cross.setAttribute("stroke",this.config.closeColors[1])}.bind(this))}function d(){this.component.dispatch("video-click")}function p(t){switch(void 0!=t.data?t.data:t.type){case"ended":this.active=!1,f.call(this);break;case"loadeddata":this.active&&!this.initPlay||(this.initPlay=!1,m.call(this)),this.active=!0;break;case"pause":this.component.dispatch("video-pause"),v.call(this);break;case"play":this.ended&&m.call(this),this.ended=!1,Utils.tracker("VIDEO_PLAY",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.component.dispatch("video-play")}}function f(){this.currentVideo.hideOnComplete&&this.hide(),this.stopTimer(),this.initPlay=!0,this.ended=!0,this.playing=!1,this.playButton.classList.remove("pause"),this.playButton.tween.play(),this.barFill.style.width="100%",this.barFill.current=this.barFill.style.width,Utils.tracker("VIDEO_COMPLETE",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.component.dispatch("video-complete"),this.currentVideo.completed++}function m(){a.call(this),Utils.show(this.container),this.playButton.classList.add("pause"),this.playButton.tween.reverse(),this.config.controlsAutoHide&&this.config.controlsAutoHide[this.id]&&TweenMax.to(this.controls,2,{alpha:0,delay:2,ease:Cubic.easeOut}),this.currentVideo.duration=this.video.duration,1==this.autoplay&&(this.autoplay=!1),this.currentVideo.plays++}function v(){this.playButton.classList.remove("pause"),this.playButton.tween.play()}this.stopTimer=function(){this.playing=!1,this.component.playing=!1,clearInterval(this.timer),c.call(this)},function(){Utils.createStyle.call(this.component,t,".hide","border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important;position: absolute !important;width: 1px !important;",[".hide",!0],"border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important;position: absolute !important;width: 1px !important;",".netflix-video","background-color:#000; position: absolute; top: 0; left: 0;",".netflix-video .netflix-video-container","position:absolute;top:0;left:0;",".netflix-video .videoClick","position:absolute;top:0;left:0;cursor:pointer;width:100%;height:100%;background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);",".netflix-video .close","position:absolute;top:10px;left:10px;z-index:15;cursor:pointer;width:"+this.config.closeButtonSize+"px;height:"+this.config.closeButtonSize+"px;overflow:hidden;",".netflix-video .videoPanels","width:100%;height:100%;position:absolute;pointer-events:none;",".netflix-video .iVideoPanels","width:0;height:0;position:absolute;",".netflix-video .controls","z-index:12;position:absolute;bottom:1px;width:100%;",".netflix-video .playButton.v_icon","margin-left:5px;",".netflix-video .v_icon","width:25px;height:25px;float:left;cursor:pointer;",".netflix-video .timer","float:left;font-family:Arial,sans-serif;font-weight:700;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,.5);line-height:26px;margin-left:9px;pointer-events:none;")}.call(this),function(){this.controls=document.createElement("div"),TweenMax.set(this.controls,{y:this.config.contolsOffsetY}),this.bar=document.createElement("div"),this.bar.classList.add("bar"),this.bar.innerHTML='<div class="track"></div>',this.barFill=document.createElement("div"),this.barFill.classList.add("fill"),this.barFill.style.backgroundColor=this.config.colors[0],this.barIndicator=document.createElement("div"),this.barIndicator.classList.add("indicator"),this.barIndicator.style.backgroundColor=this.config.colors[0],this.bar.appendChild(this.barFill),this.bar.appendChild(this.barIndicator),Utils.hide(this.barIndicator),Utils.hide(this.bar),Utils.createStyle.call(this.component,t,".bar","height:15px; position: absolute; top: -10px; left: 10px; cursor:pointer;",".bar .track","width:100%;height:1px; background-color: "+this.config.colors[1]+";position: absolute; top: 10px; left: 0;",".bar .fill","height:1px; position: absolute; top: 10px; left: 0;",".bar .indicator","width:10px;height:10px; border-radius:5px; position: absolute; top: 5px; left: 0px;background-color:"+this.config.colors[1]+";pointer-events: none;"),this.config.controlsAutoHide&&(this.controls.addEventListener("mouseover",function(){TweenMax.to(this.controls,.3,{alpha:1,ease:Cubic.easeOut})}.bind(this)),this.controls.addEventListener("mouseout",function(){this.playing&&TweenMax.to(this.controls,1,{alpha:0,ease:Cubic.easeOut})}.bind(this)),this.clickArea.addEventListener("mouseover",function(){TweenMax.to(this.controls,.3,{alpha:1,ease:Cubic.easeOut})}.bind(this)),this.clickArea.addEventListener("mouseout",function(){this.playing&&TweenMax.to(this.controls,1,{alpha:0,ease:Cubic.easeOut})}.bind(this))),this.bar.addEventListener("click",function(t){var i=t.offsetX/this.bar.getBoundingClientRect().width;this.seek(this.video.getDuration()*i)}.bind(this)),this.bar.addEventListener("mouseover",function(){Utils.show(this.barIndicator),this.barFill.seeking=!0,this.barFill.current=this.barFill.style.width}.bind(this)),this.bar.addEventListener("mouseout",function(){this.barFill.seeking=!1,Utils.hide(this.barIndicator),this.barFill.style.width=this.barFill.current}.bind(this)),this.bar.addEventListener("mousemove",function(t){t.offsetX<this.bar.getBoundingClientRect().width-6&&t.offsetX>6&&TweenMax.set(this.barIndicator,{x:t.offsetX-6});var i=t.offsetX/this.bar.getBoundingClientRect().width*100;TweenMax.set(this.barFill,{width:i+"%"})}.bind(this)),this.playButton=new n(null,"M16,15 L16,35 24,30 24,19 M24,19 L24,30 35,25 35,25"),this.playButton.icon=new Utils.SvgIcon("svgIcon","M16,15 L16,36 23,36 23,15 M28,15 L28,36 35,36 35,15",this.config.colors[0]),this.playButton.appendChild(this.playButton.icon),this.playButton.tween={play:function(){this.icon.setAttributeNS(null,"d",this.hover)}.bind(this.playButton),reverse:function(){this.icon.setAttributeNS(null,"d",this.icon.getAttribute("data-original"))}.bind(this.playButton)},this.muteButton=new n(null,"M35,20 L46,31 M35,31 L46,20"),this.muteButton.fill=new Utils.SvgIcon("","M13,20 L13,31 21,31 29,37 31,37 31,14 29,14 21,20 13,20 M35,20 L45,30",this.config.colors[0]),this.muteButton.appendChild(this.muteButton.fill),this.muteButton.icon=new Utils.SvgIcon("svgIcon","M35,20 A5,5 0 0,1 35,31",this.config.colors[0]),this.muteButton.icon.setAttribute("stroke",this.config.colors[0]),this.muteButton.icon.setAttribute("stroke-width","3"),this.muteButton.icon.setAttribute("fill-opacity","0"),this.muteButton.appendChild(this.muteButton.icon),this.muteButton.tween={play:function(){this.icon.setAttributeNS(null,"d",this.hover)}.bind(this.muteButton),reverse:function(){this.icon.setAttributeNS(null,"d",this.icon.getAttribute("data-original"))}.bind(this.muteButton)},this.timerView=document.createElement("div"),this.playButton.classList.add("playButton"),this.playButton.classList.add("v_icon"),this.muteButton.classList.add("muteButton"),this.muteButton.classList.add("v_icon"),this.timerView.className="timer",this.timerView.style.color=this.config.colors[0],this.controls.classList.add("controls"),this.controls.appendChild(this.playButton),this.controls.appendChild(this.muteButton),this.controls.appendChild(this.timerView),this.controls.appendChild(this.bar),this.wrapper.appendChild(this.controls),Utils.isiOS&&Utils.hide(this.muteButton),this.playButton.addEventListener("click",r.bind(this)),this.playButton.addEventListener("mouseover",function(){TweenMax.to(this.playButton.icon,.2,{fill:this.config.colors[1],ease:Quad.easeOut})}.bind(this)),this.playButton.addEventListener("mouseout",function(){TweenMax.to(this.playButton.icon,.2,{fill:this.config.colors[0],ease:Quad.easeOut})}.bind(this)),this.muteButton.addEventListener("click",h.bind(this)),this.muteButton.addEventListener("mouseover",function(){TweenMax.to(this.muteButton.icon,.2,{fill:this.config.colors[1],stroke:this.config.colors[1],ease:Quad.easeOut}),TweenMax.to(this.muteButton.fill,.2,{fill:this.config.colors[1],ease:Quad.easeOut})}.bind(this)),this.muteButton.addEventListener("mouseout",function(){TweenMax.to(this.muteButton.icon,.2,{stroke:this.config.colors[0],ease:Quad.easeOut}),TweenMax.to(this.muteButton.fill,.2,{fill:this.config.colors[0],ease:Quad.easeOut})}.bind(this)),this.config.customControlsMobile&&TweenMax.set([this.playButton,this.muteButton],{scale:1.5}),this.playButton.classList.remove("pause"),this.playButton.tween.play()}.call(this),function(){this.id=0,this.video_id=this.component.getAttribute("video_id"),this.PlayerState={ENDED:"ended",PLAYING:"loadeddata",PAUSED:"pause",CUED:"loadstart",BUFFERING:"play",LOADED:"loadeddata",VOLUME:"volumechange"},this._video=document.createElement("video"),this._video.width=(this.config.size[0],this.config.size[0].width),this._video.height=(this.config.size[0],this.config.size[0].height),this._video.addEventListener("ended",p.bind(this)),this._video.addEventListener("play",p.bind(this)),this._video.addEventListener("pause",p.bind(this)),this._video.addEventListener("volumechange",p.bind(this)),this._video.addEventListener("loadeddata",p.bind(this)),this.spinner=document.createElement("div"),this.wrapper.insertBefore(this.spinner,this.wrapper.firstChild),this.spinner.classList.add("spinner"),this.spinner.innerHTML='<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"> <stop stop-color="#fff" stop-opacity="0" offset="0%"/> <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/> <stop stop-color="#fff" offset="100%"/> </linearGradient> </defs> <g fill="none" fill-rule="evenodd"> <g transform="translate(1 1)"> <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/> </path> <circle fill="#fff" cx="36" cy="18" r="1"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/> </circle> </g> </g></svg>',Utils.createStyle.call(this.component,t,".spinner","position:absolute;top:50%;left:50%;width:38px;height:38px;transform:translate(-50%,-50%)"),this._video.removeAttribute("controls"),this.container.appendChild(this._video),this.video={cueVideoById:function(t){var i=document.getElementsByTagName("html")[0].hasAttribute("monet-inception-pristine-element");"undefined"==typeof Enabler||i?this._video.src=t:this._video.src=Enabler.getUrl(t)}.bind(this),getDuration:function(){return this._video.duration}.bind(this),getCurrentTime:function(){return this._video.currentTime}.bind(this),isMuted:function(){return this._video.muted}.bind(this),pauseVideo:function(){this._video.pause()}.bind(this),playVideo:function(){this._video.play()}.bind(this),unMute:function(){this._video.muted=!1}.bind(this),mute:function(){this._video.muted=!0}.bind(this),seekTo:function(t){this._video.currentTime=t}.bind(this)},this.resize(),u.call(this),this.hide(),Utils.isAutoplayAvailable()&&!0===this.config.autoplay&&("undefined"!=typeof gwd?(this.show(),this.setSource(0),this._video.setAttribute("autoplay",""),Utils.isMobile&&(this._video.setAttribute("playsinline",""),this._video.setAttribute("muted",""))):this.play(0)),"undefined"!=typeof Enabler&&Enabler.loadModule(studio.module.ModuleId.VIDEO,function(){studio.video.Reporter.attach("Video "+this.video_id,this._video)}.bind(this))}.call(this)}return o.prototype.resize=function(t){t=t||{};var i=this.config.size[this.id]?this.id:0;this.previousSize={width:this.width,height:this.height},this.width=t.width||this.config.size[i].width,this.height=t.height||this.config.size[i].height,this.container.setAttribute("width",this.width),this.container.setAttribute("height",this.height),TweenMax.set(this.bar,{width:this.width-20}),TweenMax.set([this.container,this._video,this.wrapper,this.component],{width:this.width,height:this.height})},o.prototype.setSource=function(t){this.videoLoaded=this.currentVideo===this.sources[t],this.currentVideo=this.sources[t],this.currentVideo.firstQuart=!1,this.currentVideo.secondQuart=!1,this.currentVideo.thirdQuart=!1,this.video.id="video_"+t,this.active=!1,this.resize(this.config.size[t]),void 0!==this.config.showBar[t]?this.config.showBar[t]?Utils.show(this.bar):Utils.hide(this.bar):this.config.showBar[0]?Utils.show(this.bar):Utils.hide(this.bar),this.currentVideo.customControls||this.disableCustomControls(),this.currentVideo.controls&&this.enableControls(),this.currentVideo.controls||this.disableControls(),this.currentVideo.customControls&&this.enableCustomControls(),this.playHistory=this.playHistory||[],this.playHistory.push(this.currentVideo),Utils.suppressLog=!0,this.currentVideo.muted?this.mute():this.unmute(),this.timerView.innerHTML="",this.video.cueVideoById(this.currentVideo.source)},o.prototype.play=function(t){this.initPlay=!0,-1===t&&(this.autoplay=!0),this.sources.length&&(t=this.sources[t]?t:this.currentVideo?this.currentVideo._id:0,this.config.fullscreen[void 0===this.config.fullscreen[t]?0:t]&&-1!==t&&this.enterFullscreen(),this.load(t),this.videoPlays=this.videoPlays||{},this.videoPlays[t]=this.videoPlays[t]?this.videoPlays[t]+1:1,this.resume())},o.prototype.pause=function(t){this.initPlay=!0,this.video.pauseVideo(),null!==t&&void 0!==t&&this.seek(t),this.playing=!1,this.component.playing=!1},o.prototype.stop=function(){this.initPlay=!0,this._video.ended||(this.pause(0,!1),this.active=!1,Utils.tracker("VIDEO_STOP",this.currentVideo.source,{time:this.video.getCurrentTime()}),Utils.suppressLog=!0,this.stopTimer())},o.prototype.resume=function(){this.playing=!0,this.component.playing=!0,this.video.playVideo(),this.playButton.classList.add("pause"),this.playButton.tween.reverse()},o.prototype.seek=function(t){this.video.seekTo(t||0),this.barFill.current=this.barFill.style.width},o.prototype.unmute=function(){this.video.unMute(),this.currentVideo.muted=!1,Utils.show(this.muteButton),this.muteButton.classList.add("unmute"),this.muteButton.tween.reverse(),Utils.tracker("VIDEO_UNMUTE",this.currentVideo.source,{time:this.video.getCurrentTime()})},o.prototype.mute=function(){this.video.mute(),this.currentVideo.muted=!0,this.muteButton.classList.remove("unmute"),this.muteButton.tween.play(),Utils.tracker("VIDEO_MUTE",this.currentVideo.source,{time:this.video.getCurrentTime()})},o.prototype.load=function(t){this.sources.length&&(this.show(),this.setSource(t),this._video&&this._video.load())},o.prototype.hide=function(){this.pause(null,!1),Utils.hide(this.component),Utils.hide(this.container),Utils.hide(this.wrapper),this.stopTimer(),this.active=!1},o.prototype.show=function(){Utils.show(this.component),Utils.show(this.wrapper),Utils.show(this.container)},o.prototype.close=function(t){this.hide(),this.currentVideo&&this.currentVideo.source&&t&&Utils.tracker("VIDEO_STOP",this.currentVideo.source,{time:this.video.getCurrentTime()}),this.component.dispatch("video-close")},o.prototype.enableCustomControls=function(){Utils.show(this.controls),Utils.show(this.clickArea),this._video.removeAttribute("controls")},o.prototype.disableCustomControls=function(){Utils.hide(this.controls),Utils.hide(this.clickArea),this._video.setAttribute("controls","controls")},o.prototype.enableControls=function(){Utils.hide(this.clickArea),this._video.setAttribute("controls","controls")},o.prototype.disableControls=function(){Utils.show(this.clickArea),this._video.removeAttribute("controls")},o}();((i=function(){var t=Utils.reflectConstruct(HTMLElement,[],this.constructor);return t._attached=!1,t._hasInited=!1,t}).prototype=Object.create(HTMLElement.prototype,{disconnectedCallback:{value:function(){this._attached=!1}},connectedCallback:{value:function(){if(this._attached=!0,!this._hasInited){this._hasInited=!0;var t=this;this.toggle=!0,this.width=parseInt(this.getAttribute("width")||this.offsetWidth),this.height=parseInt(this.getAttribute("height")||this.offsetHeight);for(var i=document.querySelectorAll("netflix-video"),e=0;e<i.length;e++)i[e].setAttribute("video_id",e+1),i[e].style.position="absolute";var o=this.config={};if(o.size=[{width:this.width,height:this.height}],o.sources=[this.getAttribute("source")],o.closeButtonSize=20,o.colors=[this.getAttribute("color-1"),this.getAttribute("color-2")],o.showBar=[!0],o.controlsAutoHide=[this.hasAttribute("controlsAutoHide")],o.closeColors=[this.getAttribute("close-color-1")||this.getAttribute("color-1"),this.getAttribute("close-color-2")||this.getAttribute("color-2")],o.hideOnComplete=[this.hasAttribute("hideOnComplete")],o.customControls=[this.hasAttribute("controls")],o.controls=[!1],o.fullscreen=[this.hasAttribute("fullscreen")],o.muted=[this.hasAttribute("muted")],o.autoplay=this.hasAttribute("autoplay"),o.contolsOffsetY=this.getAttribute("controls-offset-y")||0,o.autoplay&&(o.muted[0]=!0),Utils.isMobile&&(o.controls=[!0],o.customControls=[!1]),this.getAttribute("data-dynamic-key")){var n=document.querySelector("monet-integrator");n?(n.register(this),n.ensureInitialized().then(function(){var i=t.getAttribute("data-dynamic-key");try{r(i)&&(o.sources=h(i),this.video=new s(this,o),this.dispatchEvent(new CustomEvent("ready")))}catch(t){this.dispatchEvent(new CustomEvent("dataFailover",{detail:"Monet dynamic ID: "+i+" not found in JSON"}))}}.bind(this),function(t){this.dispatchEvent(new CustomEvent("containerFailover"))})):(this.video=new s(this,o),this.dispatchEvent(new CustomEvent("ready")))}else window.addEventListener("adinitialized",function(){this.video=new s(this,o)}.bind(this),!1)}function r(i){var e="Toggle_"+i;return!!Monet.getFieldValue(e)||(t.dispatchEvent(new CustomEvent("ready")),t.toggle=!1)}function h(t){var i=t+"_Video",e=Monet.getFieldValue(i);if(e)return[e];throw new Error("Monet dynamic ID: "+t+" not found in backup JSON")}},enumerable:!0},play:{value:function(){this.toggle||this.dispatch("video-complete"),this.video&&this.video.play()}},pause:{value:function(){this.video&&this.toggle&&this.video.pause()}},close:{value:function(t){this.video&&this.toggle&&this.video.close(t)}},mute:{value:function(){this.video&&this.toggle&&this.video.mute()}},unmute:{value:function(){this.video&&this.toggle&&this.video.unmute()}},seek:{value:function(t){this.video&&this.toggle&&this.video.seek(t)}},resize:{value:function(t,i){this.video&&this.toggle&&this.video.resize({width:t,height:i})}},dispatch:{value:function(t,i){var e=document.createEvent("CustomEvent");e.initCustomEvent(t,!0,!0,i),this.dispatchEvent(e)}},preview:{value:function(){this.setAttribute("width",300),this.setAttribute("height",300),this.setAttribute("color-1","#E50914"),this.setAttribute("color-2","#F5F5F1"),this.setAttribute("close-color-1","#E50914"),this.setAttribute("close-color-2","#F5F5F1"),this.setAttribute("data-dynamic-key","Trailer"),this.setAttribute("controls","true"),this.setAttribute("autoplay","true"),this.setAttribute("source","//ae.nflximg.net/monet/video/fpo/1x1.mp4")}}})).constructor=i,Object.setPrototypeOf(i,HTMLElement),customElements.define(t,i)}()},125:function(t,i,e){t.exports={id:"5aacacc2-df1a-4028-9335-6b767bf96670",name:"wc-netflix-video",description:"A simple video player component for ads",type:"web_components",context:"Default",state:"published",updated:1568156537043,full_name:"NetflixAdsEng/wc-netflix-video",html_url:"https://github.com/NetflixAdsEng/wc-netflix-video",username:"GitHub",version:"6.0.0",minimum:"5.0.0"}},5:function(t,i,e){"use strict";e.r(i),e(124),e(125)}}]);