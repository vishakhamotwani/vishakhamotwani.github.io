System.register(["./p-84603263.system.js","./p-168ec2c4.system.js","./p-a38ee966.system.js"],(function(t){"use strict";var i,e,s,r,n,a;return{setters:[function(t){i=t.r;e=t.h;s=t.g},function(t){r=t.m;n=t.q},function(t){a=t.A}],execute:function(){var o=function(t,i){if(t.charAt(0)=="/"&&i.charAt(i.length-1)=="/"){return i.slice(0,i.length-1)+t}return i+t};var c=t("stencil_route_link",function(){function t(t){i(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=r(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if(n(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(o(this.url,this.root))};t.prototype.render=function(){var t;var i={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){i.class[this.anchorClass]=true}if(this.custom==="a"){i=Object.assign({},i,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return e(this.custom,Object.assign({},i),e("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());a.injectProps(c,["history","location","root"])}}}));