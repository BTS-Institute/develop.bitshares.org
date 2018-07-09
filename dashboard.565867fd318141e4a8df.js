(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1774:function(e,t,n){"use strict";n.d(t,"b",function(){return k}),n.d(t,"a",function(){return g});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),s=n(7),l=n.n(s),c=n(34),u=n(20),p=n(21),d=n(16),h=n.n(d),m=n(2067),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(){return b(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,i=e.title,o=e.className,s=e.updatedTab,c=e.disabled,u=e.subText,p=l()({"is-active":t},o);return"string"==typeof i&&i.indexOf(".")>0&&(i=h.a.translate(i)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},r.a.createElement("span",{className:"tab-title"},i,s?"*":"",u&&" (",u&&u,u&&")"))):r.a.createElement("li",{className:p,onClick:c?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},i,s?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();g.propTypes={changeTab:o.a.func,isActive:o.a.bool.isRequired,index:o.a.number.isRequired,className:o.a.string,isLinkTo:o.a.string,subText:o.a.oneOfType([o.a.object,o.a.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var k=function(e){function t(e){b(this,t);var n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return y(t,r.a.Component),f(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""!==t&&this.props.history.push(t),this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,i=t.tabsClass,o=t.style,s=t.segmented,c=this.state.width<900&&r.a.Children.count(n)>2,u=null,p=r.a.Children.map(n,function(t,n){if(!t)return null;if(c&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:c,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=p[0].props.children),r.a.createElement("div",{className:l()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:o,className:l()("button-group no-margin",i,{segmented:s})},c?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:l()("tab-content",a)},u))}}]),t}();k.propTypes={setting:o.a.string,defaultActiveTab:o.a.number,segmented:o.a.bool},k.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},k=Object(c.connect)(k,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}}),k=Object(m.a)(k)},2069:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),o=n(40),s=n(510),l=n(26),c=n(1774),u=n(13),p=n(14),d=n(21),h=n(238),m=n(2080),f=n(9),b=n(3),v=n.n(b),y=n(7),g=n.n(y),k=n(20),E=n(37),w=n(18),_=n(130),O=n(43),T=n(80),C=n(55),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var M=function(e){function t(){N(this,t);var e=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e.state={imgError:!1},e}return x(t,r.a.Component),A(t,[{key:"shouldComponentUpdate",value:function(e,t){return p.a.check_market_stats(e.marketStats,this.props.marketStats)||e.base.get("id")!==this.props.base.get("id")||e.quote.get("id")!==this.props.quote.get("id")||e.visible!==this.props.visible||t.imgError!==this.state.imgError||e.starredMarkets.size!==this.props.starredMarkets.size}},{key:"componentWillMount",value:function(){this._setInterval()}},{key:"componentWillUnmount",value:function(){this._clearInterval()}},{key:"componentWillReceiveProps",value:function(e){e.base.get("id")===this.props.base.get("id")&&e.quote.get("id")===this.props.quote.get("id")||(this._clearInterval(),this._setInterval(e))}},{key:"_setInterval",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props,t=e.base,n=e.quote;this.statsChecked=new Date,this.statsInterval=T.a.getMarketStatsInterval(35e3,t,n)}},{key:"_clearInterval",value:function(){this.statsInterval&&this.statsInterval()}},{key:"_onError",value:function(e){this.state.imgError||(this.refs[e.toLowerCase()].src="asset-symbols/bts.png",this.setState({imgError:!0}))}},{key:"_toggleFavoriteMarket",value:function(e,t){var n=e+"_"+t;this.props.starredMarkets.has(n)?k.a.removeStarMarket(e,t):k.a.addStarMarket(e,t)}},{key:"render",value:function(){var e=this.props,t=e.base,n=e.quote,a=e.marketStats,i=e.isHidden,o=e.inverted,s=e.visible,l=e.handleHide,c=e.handleFlip;var u=function(e){var t=e.get("symbol");if("OPEN.BTC"===t||"GDEX.BTC"===t||"RUDEX.BTC"===t)return t;var n=e.get("symbol").split(".");return 2===n.length?n[1]:n[0]}(n),d=a?parseFloat(a.change)>0?"change-up":parseFloat(a.change)<0?"change-down":"":"",h=n.get("symbol")+"_"+t.get("symbol"),f=this.props.starredMarkets.has(h)?"gold-star":"grey-star";return r.a.createElement("tr",{style:{display:s?"":"none"}},r.a.createElement("td",null,r.a.createElement("div",{onClick:this._toggleFavoriteMarket.bind(this,n.get("symbol"),t.get("symbol"))},r.a.createElement(w.a,{style:{cursor:"pointer"},className:f,name:"fi-star",title:"icons.fi_star.market"}))),r.a.createElement("td",{style:{textAlign:"left"}},r.a.createElement(m.a,{to:"/market/"+this.props.quote.get("symbol")+"_"+this.props.base.get("symbol")},r.a.createElement("img",{ref:u.toLowerCase(),className:"column-hide-small",onError:this._onError.bind(this,u),style:{maxWidth:20,marginRight:10},src:"asset-symbols/"+u.toLowerCase()+".png"}),r.a.createElement(_.a,{dataPlace:"top",name:n.get("symbol")})," ",":"," ",r.a.createElement(_.a,{dataPlace:"top",name:t.get("symbol")}))),r.a.createElement("td",{style:{textAlign:"right"}},a&&a.price?p.a.price_text(a.price.toReal(),n,t):null),r.a.createElement("td",{style:{textAlign:"right"},className:g()(d)},a?a.change:null,"%"),r.a.createElement("td",{className:"column-hide-small",style:{textAlign:"right"}},a?p.a.format_volume(a.volumeBase,t.get("precision")):null),null===o?null:r.a.createElement("td",{className:"column-hide-small"},r.a.createElement("a",{onClick:c},r.a.createElement(w.a,{name:"shuffle",title:"icons.shuffle"}))),r.a.createElement("td",null,r.a.createElement("a",{style:{marginRight:0},className:i?"action-plus":"order-cancel",onClick:l},r.a.createElement(w.a,{name:i?"plus-circle":"cross-circle",title:i?"icons.plus_circle.show_market":"icons.cross_circle.hide_market",className:"icon-14px"}))))}}]),t}();M.propTypes={quote:E.a.ChainAsset.isRequired,base:E.a.ChainAsset.isRequired},M.defaultProps={tempComponent:"tr"},M=Object(O.a)(M),M=Object(i.connect)(M,{listenTo:function(){return[h.a]},getProps:function(e){return{marketStats:h.a.getState().allMarketStats.get(e.marketId),starredMarkets:d.a.getState().starredMarkets}}});var H=function(e){function t(){N(this,t);var e=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={filter:"",showFlip:!0,showHidden:!1,markets:[]},e.update=e.update.bind(e),e}return x(t,r.a.Component),A(t,[{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillMount",value:function(){f.b.subscribe(this.update)}},{key:"componentWillUnmount",value:function(){f.b.unsubscribe(this.update)}},{key:"update",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props,t=!e.forceDirection||e.handleFlip,n=e.markets.map(function(n){var a=j(n,2),r=a[0],i=a[1];if(e.forceDirection){var o=r+"_"+i;return{key:o,inverted:!t&&null,marketId:o,quote:r,base:i,isHidden:e.hiddenMarkets.includes(o)}}var s=C.a.getMarketName(f.b.getAsset(r),f.b.getAsset(i)),l=s.marketName,c=s.first,u=s.second;if(!c||!u)return null;var p=e.marketDirections.get(l);if(p){var d=[u,c];c=d[0],u=d[1]}return{key:l,inverted:p,marketId:c.get("symbol")+"_"+u.get("symbol"),quote:c.get("symbol"),base:u.get("symbol"),isHidden:e.hiddenMarkets.includes(l)}}).filter(function(e){return null!==e});this.setState({showFlip:t,markets:n})}},{key:"_toggleShowHidden",value:function(e){this.state.showHidden!==e&&this.setState({showHidden:e})}},{key:"_handleFilterInput",value:function(e){e.preventDefault(),this.setState({filter:e.target.value.toUpperCase()})}},{key:"_handleHide",value:function(e,t){if(this.props.handleHide)return this.props.handleHide(e,t);k.a.hideMarket(e.key,t)}},{key:"_handleFlip",value:function(e,t){if(this.props.handleFlip)return this.props.handleFlip(e,t);k.a.changeMarketDirection(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.key,t))}},{key:"render",value:function(){var e=this,t=this.state,n=t.markets,a=t.showFlip,i=t.showHidden,o=t.filter;this.loaded=!0;var s=0;return n=n.map(function(t){var n=!0;if(t.isHidden!==e.state.showHidden)n=!1;else if(o){var a=f.b.getAsset(t.quote),i=f.b.getAsset(t.base),l=p.a.replaceName(a).isBitAsset,c=p.a.replaceName(i).isBitAsset,u=t.quote,d=t.base;if(l&&(u="bit"+u),c&&(d="bit"+d),o.includes(":")){var h=o.split(":")[0].trim(),m=o.split(":")[1].trim();n=u.toLowerCase().includes(String(h).toLowerCase())&&d.toLowerCase().includes(String(m).toLowerCase())}else n=u.toLowerCase().includes(String(o).toLowerCase())||d.toLowerCase().includes(String(o).toLowerCase())}return n&&++s,r.a.createElement(M,S({},t,{visible:n,handleHide:e._handleHide.bind(e,t,!t.isHidden),handleFlip:e._handleFlip.bind(e,t,!t.inverted)}))}),r.a.createElement("div",null,r.a.createElement("div",{className:"header-selector"},r.a.createElement("div",{className:"filter inline-block"},r.a.createElement("input",{type:"text",placeholder:"Filter",onChange:this._handleFilterInput.bind(this)})),r.a.createElement("div",{className:"selector inline-block"},r.a.createElement("div",{className:g()("inline-block",{inactive:i}),onClick:this._toggleShowHidden.bind(this,!1)},r.a.createElement(v.a,{content:"account.hide_hidden"})),r.a.createElement("div",{className:g()("inline-block",{inactive:!i}),onClick:this._toggleShowHidden.bind(this,!0)},r.a.createElement(v.a,{content:"account.show_hidden"})))),r.a.createElement("table",{className:"table dashboard-table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",width:"75px"}}),r.a.createElement("th",{style:{textAlign:"left"}},r.a.createElement(v.a,{component:"span",content:"account.asset"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(v.a,{content:"exchange.price"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(v.a,{content:"account.hour_24_short"})),r.a.createElement("th",{className:"column-hide-small",style:{textAlign:"right"}},r.a.createElement(v.a,{content:"exchange.volume"})),a?r.a.createElement("th",{className:"column-hide-small"},r.a.createElement(v.a,{content:"exchange.flip"})):null,r.a.createElement("th",null,r.a.createElement(v.a,{content:i?"account.perm.show":"exchange.hide"})))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-empty",style:{display:s?"none":""}},r.a.createElement("td",{colSpan:a?6:5},r.a.createElement(v.a,{content:"dashboard.table_empty"}))),n)))}}]),t}(),D=Object(i.connect)(H,{listenTo:function(){return[d.a]},getProps:function(){var e=d.a.getState();return{marketDirections:e.marketDirections,hiddenMarkets:e.hiddenMarkets}}}),I=n(36),L=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function W(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var B=function(e){function t(){return q(this,t),F(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return W(t,r.a.Component),R(t,[{key:"render",value:function(){var e=this.props.starredMarkets,t=[];if(e.size){var n=!0,a=!1,i=void 0;try{for(var o,s=e.values()[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;t.push([l.quote,l.base])}}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}}return r.a.createElement(D,{markets:t,forceDirection:!0})}}]),t}();B=Object(i.connect)(B,{listenTo:function(){return[d.a]},getProps:function(){return{starredMarkets:d.a.getState().starredMarkets}}});var U=function(e){function t(){q(this,t);var e=F(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.marketsByChain={"4018d784":Object(I.h)(),"39f5e2ed":[["TEST","PEG.FAKEUSD"],["TEST","BTWTY"]]};var n=u.Apis.instance().chain_id;return n&&(n=n.substr(0,8)),e.state={chainID:n,markets:[]},e.update=e.update.bind(e),e}return W(t,r.a.Component),R(t,[{key:"shouldComponentUpdate",value:function(e){return!p.a.are_equal_shallow(e,this.props)}},{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"update",value:function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.props).lowVolumeMarkets,t=this.marketsByChain[this.state.chainID]||this.marketsByChain["4018d784"];t=t.filter(function(t){var n=L(t,2),a=n[0],r=n[1];return!(e.get(a+"_"+r)||e.get(r+"_"+a))}),this.setState({markets:t})}},{key:"render",value:function(){return r.a.createElement(D,{markets:this.state.markets})}}]),t}();U=Object(i.connect)(U,{listenTo:function(){return[h.a]},getProps:function(){return{lowVolumeMarkets:h.a.getState().lowVolumeMarkets}}});!function(e){function t(){return q(this,t),F(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}W(t,r.a.Component),R(t,[{key:"render",value:function(){return r.a.createElement(D,{markets:[]})}}])}();var z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),z(t,[{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,i=e.passwordAccount;return a?t.size+n.size+(i?1:0)?r.a.createElement("div",{className:"grid-block page-layout"},r.a.createElement("div",{className:"grid-block no-padding"},r.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},r.a.createElement("div",{className:"content-block small-12"},r.a.createElement("div",{className:"tabs-container generic-bordered-box"},r.a.createElement(c.b,{defaultActiveTab:1,segmented:!1,setting:"dashboardTab",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(c.a,{title:"dashboard.starred_markets"},r.a.createElement(B,null)),r.a.createElement(c.a,{title:"dashboard.featured_markets"},r.a.createElement(U,null)))))))):r.a.createElement(s.a,null):r.a.createElement(o.a,null)}}]),t}();t.default=Object(i.connect)(V,{listenTo:function(){return[l.a]},getProps:function(){var e=l.a.getState(),t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.passwordAccount,r=e.accountsLoaded,i=e.refsLoaded;return{myActiveAccounts:t,myHiddenAccounts:n,passwordAccount:a,accountsReady:r&&i}}})}}]);