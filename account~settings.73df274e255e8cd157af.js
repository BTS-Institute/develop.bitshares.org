(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1960:function(e,t,a){"use strict";var o=a(0),n=a.n(o),l=a(15),i=a(1),r=a.n(i),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);e.scroll_length;var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={active:!1},a.listener=!1,a.onBodyClick=a.onBodyClick.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),s(t,[{key:"componentDidMount",value:function(){this._setListener()}},{key:"shouldComponentUpdate",value:function(e,t){return!l.a.are_equal_shallow(e.entries,this.props.entries)||!l.a.are_equal_shallow(t,this.state)||e.value!==this.props.value}},{key:"_setListener",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props).entries.length>1&&!this.listener&&(this.listener=!0,document.body.addEventListener("click",this.onBodyClick,{capture:!1,passive:!0}))}},{key:"_removeListener",value:function(){document.body.removeEventListener("click",this.onBodyClick),this.listener=!1}},{key:"componentWillReceiveProps",value:function(e){1===e.entries.length?this._removeListener():e.entries.length>1&&this._setListener(e)}},{key:"componentWillUnmount",value:function(){this._removeListener()}},{key:"onBodyClick",value:function(e){var t=e.target,a=!1;do{if(t.classList&&t.classList.contains("dropdown")&&t.id===this.props.id){a=!0;break}}while(t=t.parentNode);a?e.stopPropagation():this.setState({active:!1})}},{key:"onChange",value:function(e,t){t.preventDefault(),t.stopPropagation(),this.props.onChange(e),this.setState({active:!1})}},{key:"_toggleDropdown",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this,t=this.props,a=t.entries,o=t.value,l=this.state.active;if(0===a.length)return null;if(1==a.length)return n.a.createElement("div",{className:"dropdown-wrapper inactive"+(this.props.upperCase?" upper-case":"")},n.a.createElement("div",null,this.props.singleEntry?this.props.singleEntry:a[0]));var i=a.map(function(t){return n.a.createElement("li",{className:e.props.upperCase?"upper-case":"",key:t,onClick:e.onChange.bind(e,e.props.values[t])},n.a.createElement("span",null,t))});return n.a.createElement("div",{onClick:this._toggleDropdown.bind(this),className:"dropdown-wrapper"+(l?" active":"")+(this.props.upperCase?" upper-case":"")},n.a.createElement("div",{style:{paddingRight:15}},o||n.a.createElement("span",{className:"hidden"},"A")),n.a.createElement("ul",{className:"dropdown",style:{overflow:a.length>this.props.scroll_length?"auto":"hidden"}},i))}}]),t}();c.propTypes={scroll_length:r.a.number},c.defaultProps={scroll_length:9},t.a=c},1993:function(e,t,a){"use strict";var o=a(0),n=a.n(o),l=a(1),i=a.n(l),r=a(141),s=a.n(r),c=a(43),p=a(53),u=a.n(p),h=a(45),d=a(15),b=a(84),_=a(19),g=a(4),m=a.n(g),v=a(11),f=a.n(v),k=a(5),y=a(107),C=a(2),O=a.n(C),w=a(33),j=a(358),E=a(128),A=a(571);function P(e){var t=e.accountObj,a=e.backingAssetObj,o=e.collateralBalanceObj,l=e.debtBalanceObj,i=e.quoteAssetObj,r=e.newPosition,s=e.errors,c=e.collateral,p=e.collateral_ratio,u=e.debtAmount,h=e.backingPrecision,b=e.maintenanceRatio,_=e.remainingBackingBalance,g=e.remainingDebtBalance,v=e.target_collateral_ratio,f=e.unlockedInputType,C=e.disableHelp,P=e.isRatioLocked,S=e.isOriginalBelowMCR,R=e.isPredictionMarket,I=e.isValid,x=e.useTargetCollateral,B=e.onPayDebt,F=e.onMaximizeCollatereal,L=e.onBorrowChange,q=e.onLockChangeDebt,M=e.onCollateralChange,T=e.onLockChangeCollateral,N=e.onRatioChange,D=e.onLockChangeCR,U=e.onSetUseTCR,J=e.onTCRatioChange,z=d.a.get_asset_precision(i.get("precision")),H=r?n.a.createElement(E.a,{noPopOver:!0,noTip:!0,quote_amount:b*u*z,quote_asset:i.get("id"),base_asset:a.get("id"),base_amount:c*h}):null,W=n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(O.a,{component:"h3",content:"borrow.no_valid",asset_symbol:i.get("symbol")})),V=n.a.createElement("span",null,n.a.createElement("span",null,0!=c?n.a.createElement("span",null,n.a.createElement(O.a,{component:"a",onClick:B.bind(this),content:"borrow.pay_max_debt"})," "):null,n.a.createElement(O.a,{component:"span",content:"transfer.available"}),":"," ",n.a.createElement("span",null,l.id?n.a.createElement(w.a,{amount:g,asset:i.get("id")}):n.a.createElement(w.a,{amount:0,asset:i.get("id")})))),G=n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement(O.a,{component:"a",onClick:F.bind(this),content:"borrow.use_max"})," "),n.a.createElement(O.a,{component:"span",content:"transfer.available"}),":"," ",n.a.createElement("span",null,o.id?n.a.createElement(w.a,{amount:_,asset:a.get("id")}):n.a.createElement(w.a,{amount:0,asset:a.get("id")}))));return I?n.a.createElement("div",{style:{textAlign:"left"}},C?null:n.a.createElement("div",{style:{paddingBottom:"1rem"}},n.a.createElement(A.a,{path:"components/"+(R?"BorrowModalPrediction":"BorrowModal"),debt:i.get("symbol"),collateral:a.get("symbol"),borrower:t.get("name"),mr:b})),!R&&S?n.a.createElement(O.a,{component:"h6",className:"has-warning",content:"borrow.errors.below_info"}):null,R?null:n.a.createElement("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"}},n.a.createElement("div",{className:"borrow-price-feeds"},n.a.createElement("span",{className:"borrow-price-label"},n.a.createElement(O.a,{content:"transaction.feed_price"}),": "),n.a.createElement(E.a,{noPopOver:!0,quote_amount:y.a.extractRawFeedPrice(i).getIn(["base","amount"]),quote_asset:y.a.extractRawFeedPrice(i).getIn(["base","asset_id"]),base_asset:y.a.extractRawFeedPrice(i).getIn(["quote","asset_id"]),base_amount:y.a.extractRawFeedPrice(i).getIn(["quote","amount"])})),n.a.createElement("b",null),n.a.createElement("div",{className:"borrow-price-final "+(s.below_maintenance?"has-error":s.close_maintenance?"has-warning":"")},n.a.createElement("span",{className:"borrow-price-label"},n.a.createElement(O.a,{content:"exchange.your_price"}),": "),H)),n.a.createElement(k.Form,{className:"full-width",layout:"vertical"},n.a.createElement(j.a,{label:"transaction.borrow_amount",amount:u.toString(),onChange:L.bind(this),asset:i.get("id"),assets:[i.get("id")],display_balance:V,placeholder:"0.0",tabIndex:1,lockStatus:"debt"!=f&&!P,onLockChange:q.bind(this)}),n.a.createElement(j.a,{label:"transaction.collateral",amount:c.toString(),onChange:M.bind(this),asset:a.get("id"),assets:[a.get("id")],display_balance:G,placeholder:"0.0",tabIndex:2,lockStatus:"collateral"!=f&&!P,onLockChange:T.bind(this),validateStatus:s.collateral_balance?"error":"",help:s.collateral_balance?s.collateral_balance:null}),R?null:n.a.createElement(n.a.Fragment,null,n.a.createElement(k.Row,{gutter:16},n.a.createElement(k.Col,{span:12},n.a.createElement(k.Form.Item,{label:m.a.translate("borrow.coll_ratio"),validateStatus:s.close_maintenance?"warning":s.below_maintenance?"error":null,help:s.close_maintenance?s.close_maintenance:s.below_maintenance?s.below_maintenance:null},n.a.createElement(k.Input,{value:0==p?"":p,tabIndex:3,onChange:N.bind(this),className:"input-group-unbordered-before",addonBefore:n.a.createElement(k.Icon,{className:P?"green":"grey",type:P?"lock":"unlock",onClick:D.bind(this),style:{fontSize:"20px"}})}))),n.a.createElement(k.Col,{span:12},n.a.createElement(k.Form.Item,{validateStatus:s.tcr_below_maintenance?"error":"",help:s.tcr_below_maintenance?s.tcr_below_maintenance:null},n.a.createElement(k.Input.Group,{compact:!0,style:{marginBottom:8}},n.a.createElement(k.Checkbox,{onClick:U.bind(this),checked:x,tabIndex:4},n.a.createElement(O.a,{content:"borrow.enable_target_collateral_ratio"})),n.a.createElement(k.Tooltip,{title:m.a.translate("tooltip.target_collateral_ratio")},n.a.createElement(k.Icon,{type:"question-circle"}))),x?n.a.createElement(k.Input,{value:isNaN(v)?"0":v,tabIndex:5,onChange:J.bind(this)}):null))),n.a.createElement(k.Form.Item,{label:"Ratio Slider"},n.a.createElement(k.Slider,{step:.01,min:0,max:12*b,value:p,onChange:N.bind(this)}))))):W}var S=a(572),R=a.n(S),I=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function F(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var L=function(e){function t(e){x(this,t);var a=B(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a._initialState(e),a._onSubmit=a._onSubmit.bind(a),a}return F(t,n.a.Component),I(t,[{key:"_initialState",value:function(e){var t=e?this._getCurrentPosition(e):{};if(t.collateral){var a=d.a.get_asset_amount(t.debt,e.quoteAssetObj),o=d.a.get_asset_amount(t.collateral,e.backingAssetObj),n=isNaN(t.target_collateral_ratio)?0:t.target_collateral_ratio/1e3;return{debtAmount:a?a.toString():null,collateral:o?o.toString():null,collateral_ratio:this._getCollateralRatio(a,o),target_collateral_ratio:n,errors:this._getInitialErrors(),useTargetCollateral:n>0,original_position:{debt:a,collateral:o,target_collateral_ratio:n},unlockedInputType:"collateral",isRatioLocked:!0}}return{debtAmount:0,collateral:0,collateral_ratio:this._getInitialCollateralRatio(e),target_collateral_ratio:this._getMaintenanceRatio(),errors:this._getInitialErrors(),useTargetCollateral:!1,original_position:{debt:0,collateral:0},unlockedInputType:"debt",isRatioLocked:!0}}},{key:"componentDidUpdate",value:function(){u.a.rebuild()}},{key:"componentDidMount",value:function(){var e=this._initialState(this.props);this.setState(e),this._setUpdatedPosition(e)}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.props.visible===e.visible&&d.a.are_equal_shallow(t,this.state)&&f.a.is(e.quoteAssetObj,this.props.quoteAssetObj)&&!e.backingAssetObj.get("symbol")!==this.props.backingAssetObj.get("symbol")&&f.a.is(e.accountObj,this.props.accountObj)&&f.a.is(e.call_orders,this.props.call_orders)&&this.state.unlockedInputType===t.unlockedInputType)}},{key:"componentWillReceiveProps",value:function(e){var t=this.state,a=t.debtAmount,o=t.collateral,n=t.collateral_ratio;if(e.accountObj!==this.props.accountObj||e.hasCallOrders!==this.props.hasCallOrders||e.quoteAssetObj.get("id")!==this.props.quoteAssetObj.get("id")){var l=this._initialState(e),i=!1;(a||o||n)&&(l.debtAmount=a,l.collateral=o,l.collateral_ratio=n,i=!0),this.setState(l),i&&this._validateFields(l)}}},{key:"_getInitialErrors",value:function(){return{collateral_balance:null,ratio_too_high:null}}},{key:"_getMaintenanceRatio",value:function(){return this.props.quoteAssetObj.getIn(["bitasset","current_feed","maintenance_collateral_ratio"])/1e3}},{key:"confirmClicked",value:function(e){e.preventDefault(),s.a.publish(this.props.modalId,"close")}},{key:"_onBorrowChange",value:function(e){var t=this._getFeedPrice(),a=e.amount.replace(/,/g,""),o={debtAmount:a,collateral:this.state.isRatioLocked?(this.state.collateral_ratio*(a/t).toFixed(this.props.backingAssetObj.get("precision"))).toFixed(this.props.backingAssetObj.get("precision")):this.state.collateral,collateral_ratio:this.state.isRatioLocked?this.state.collateral_ratio:this.state.collateral/(a/t)};this.setState(o),this._validateFields(o),this._setUpdatedPosition(o)}},{key:"_onCollateralChange",value:function(e){var t=this.state,a=t.isRatioLocked,o=t.collateral_ratio,n=e.amount.replace(/,/g,""),l=this._getFeedPrice(),i=a?o:n/(this.state.debtAmount/l),r=a?(n*l/i).toFixed(this.props.backingAssetObj.get("precision")):this.state.debtAmount,s=this._isPredictionMarket(this.props)?{debtAmount:n,collateral:n,collateral_ratio:1}:{debtAmount:r,collateral:n,collateral_ratio:i};this.setState(s),this._validateFields(s),this._setUpdatedPosition(s)}},{key:"_onTargetRatioChange",value:function(e){var t=e.target.value;new RegExp(/[[:digit:]]/).test(t)||(t=t.replace(/[^0-9.]/g,""));var a={target_collateral_ratio:t};this.setState(a),this._validateFields(a),this._setUpdatedPosition(a)}},{key:"_onRatioChange",value:function(e){var t=this._getFeedPrice(),a=void 0,o=void 0,n=0;e.target?(new RegExp(/[[:digit:]]/).test(e.target.value)||(e.target.value=e.target.value.replace(/[^0-9.]/g,"")),n=e.target.value):n=e;"debt"==this.state.unlockedInputType?(a=(this.state.collateral*t/parseFloat(n)).toFixed(this.props.backingAssetObj.get("precision")),o=this.state.collateral):(a=this.state.debtAmount,o=(this.state.debtAmount/t*parseFloat(n)).toFixed(this.props.backingAssetObj.get("precision")));var l={debtAmount:a,collateral:o,collateral_ratio:n};this.setState(l),this._validateFields(l),this._setUpdatedPosition(l)}},{key:"_maximizeCollateral",value:function(){var e=this.props?this._getCurrentPosition(this.props):{},t=0;e.collateral&&(t=d.a.convert_satoshi_to_typed(e.collateral,this.props.backingAssetObj));var a=d.a.convert_satoshi_to_typed(this.props.collateralBalanceObj.get("balance"),this.props.backingAssetObj),o=Math.max(Math.floor(a+t-10),0);this._onCollateralChange(new Object({amount:o.toString()}))}},{key:"_maximizeDebt",value:function(){var e=this.props?this._getCurrentPosition(this.props):{},t=0;e.collateral&&(t=d.a.get_asset_amount(e.collateral,this.props.backingAssetObj));var a=this.props.collateralBalanceObj.get("balance")/d.a.get_asset_precision(this.props.backingAssetObj)+t-10,o={debtAmount:a/this.state.collateral_ratio*this._getFeedPrice(),collateral:a,collateral_ratio:this.state.collateral_ratio};this.setState(o),this._validateFields(o),this._setUpdatedPosition(o)}},{key:"_payDebt",value:function(){var e=this.props?this._getCurrentPosition(this.props):{debt:0};if(!(e.debt<=0)){var t=d.a.get_asset_amount(Math.max(e.debt-this.props.debtBalanceObj.get("balance"),0),this.props.quoteAssetObj);this._onBorrowChange({amount:t.toString()})}}},{key:"_setUpdatedPosition",value:function(e){this.setState({newPosition:parseFloat(e.debtAmount)/parseFloat(e.collateral)})}},{key:"_validateFields",value:function(e){var t=this._getInitialErrors(),a=this.state.original_position,o=this.props.collateralBalanceObj?this.props.collateralBalanceObj.toJS():{balance:0},n=this._getMaintenanceRatio(),l=this._getCollateralRatio(a.debt,a.collateral),i=a.collateral>0&&l<n;parseFloat(e.collateral)-a.collateral>d.a.get_asset_amount(o.balance,this.props.backingAssetObj.toJS())&&(t.collateral_balance=m.a.translate("borrow.errors.collateral")),e.target_collateral_ratio&&e.target_collateral_ratio<n&&(t.tcr_below_maintenance=m.a.translate("borrow.errors.below_mcr_tcr",{mr:n})),i&&e.debtAmount>a.debt?t.below_maintenance=m.a.translate("borrow.errors.increased_debt_on_margin_call"):i&&parseFloat(e.collateral_ratio)<=parseFloat(l)?t.below_maintenance=m.a.translate("borrow.errors.below_ratio_mcr_update",{ocr:l.toFixed(4)}):!i&&parseFloat(e.collateral_ratio)<(this._isPredictionMarket(this.props)?1:n)?t.below_maintenance=m.a.translate("borrow.errors.below",{mr:n}):parseFloat(e.collateral_ratio)<(this._isPredictionMarket(this.props)?1:n+.5)&&(t.close_maintenance=m.a.translate("borrow.errors.close",{mr:n})),this.setState({errors:t})}},{key:"_onSubmit",value:function(e){e.preventDefault(),this.props.hideModal();var t=d.a.get_asset_precision(this.props.quoteAssetObj.get("precision")),a=d.a.get_asset_precision(this.props.backingAssetObj.get("precision")),o=this._getCurrentPosition(this.props),n=!1;!!(void 0!==this.state.target_collateral_ratio&&this.state.target_collateral_ratio>0&&this.state.useTargetCollateral)&&(n={target_collateral_ratio:parseInt(1e3*this.state.target_collateral_ratio,10)});var l=parseInt(this.state.collateral*a-o.collateral,10),i=parseInt(this.state.debtAmount*t-o.debt,10);0==l&&0==i&&(l=1);var r=b.a.new_transaction();n?r.add_type_operation("call_order_update",{fee:{amount:0,asset_id:0},funding_account:this.props.accountObj.get("id"),delta_collateral:{amount:l,asset_id:this.props.backingAssetObj.get("id")},delta_debt:{amount:i,asset_id:this.props.quoteAssetObj.get("id")},extensions:n}):r.add_type_operation("call_order_update",{fee:{amount:0,asset_id:0},funding_account:this.props.accountObj.get("id"),delta_collateral:{amount:l,asset_id:this.props.backingAssetObj.get("id")},delta_debt:{amount:i,asset_id:this.props.quoteAssetObj.get("id")}}),_.a.process_transaction(r,null,!0).catch(function(e){0}),s.a.publish(this.props.modalId,"close")}},{key:"_getCurrentPosition",value:function(e){var t={collateral:null,debt:null};return e&&e.hasCallOrders&&e.call_orders&&(t=(t=e.call_orders.filter(function(e){return!!e}).find(function(t){return t.getIn(["call_price","quote","asset_id"])===e.quoteAssetObj.get("id")}))?t.toJS():{collateral:null,debt:null}),t}},{key:"_getFeedPrice",value:function(){return this.props?this._isPredictionMarket(this.props)?1:1/d.a.get_asset_price(y.a.extractRawFeedPrice(this.props.quoteAssetObj).getIn(["quote","amount"]),this.props.backingAssetObj,y.a.extractRawFeedPrice(this.props.quoteAssetObj).getIn(["base","amount"]),this.props.quoteAssetObj):1}},{key:"_getInitialCollateralRatio",value:function(e){return this._isPredictionMarket(e)?1:2*this._getMaintenanceRatio()}},{key:"_getCollateralRatio",value:function(e,t){return t/(e/this._getFeedPrice())}},{key:"_isPredictionMarket",value:function(e){return e.quoteAssetObj.getIn(["bitasset","is_prediction_market"])}},{key:"_setUseTargetCollateral",value:function(){this.setState({useTargetCollateral:!this.state.useTargetCollateral})}},{key:"_onLockChange",value:function(e){this.setState({isRatioLocked:!1,unlockedInputType:e})}},{key:"_onLockCR",value:function(){this.setState({isRatioLocked:!this.state.isRatioLocked})}},{key:"render",value:function(){var e=this,t=this.props,a=t.quoteAssetObj,o=t.backingAssetObj,l=t.debtBalanceObj,i=t.collateralBalanceObj,r=this.state,s=r.debtAmount,c=r.collateral,p=r.collateral_ratio,u=r.target_collateral_ratio,h=r.errors,b=r.original_position,_=r.useTargetCollateral;p&&!isNaN(p)&&p>0&&p<1e3||(p=0),-1!=p.toString().indexOf(".")&&p.toString().split(".")[1].length>2&&(p=p.toString().split(".")[0]+"."+p.toString().split(".")[1].substr(0,2)),-1!=u.toString().indexOf(".")&&u.toString().split(".")[1].length>2&&(u=u.toString().split(".")[0]+"."+u.toString().split(".")[1].substr(0,2)),l=l?l.toJS():{balance:0,id:null},i=i?i.toJS():{balance:0,id:null};var g=d.a.get_asset_precision(this.props.backingAssetObj.get("precision")),v=d.a.get_asset_precision(this.props.quoteAssetObj.get("precision")),f=this._getCurrentPosition(this.props),y=parseInt(this.state.collateral*g-f.collateral,10),C=parseInt(this.state.debtAmount*v-f.debt,10),O=i.balance-y,w=l.balance+C,j=this._getFeedPrice(),E=this._getMaintenanceRatio(),A=this._isPredictionMarket(this.props),S=b.collateral>0&&this._getCollateralRatio(b.debt,b.collateral)<E,R=[];return!A&&isNaN(j)?R.push(n.a.createElement(k.Button,{tabIndex:6,onClick:this.props.hideModal},m.a.translate("accountObj.perm.cancel"))):(R.push(n.a.createElement(k.Button,{tabIndex:6,key:"submit",type:"primary",onClick:this._onSubmit},m.a.translate("borrow.adjust"))),R.push(n.a.createElement(k.Button,{tabIndex:7,key:"cancel",onClick:function(){e.setState(e._initialState(e.props))}},m.a.translate("wallet.reset")))),n.a.createElement(k.Modal,{title:m.a.translate("borrow.title",{asset_symbol:a.get("symbol")}),visible:this.props.visible,onCancel:this.props.hideModal,footer:R},n.a.createElement(P,{accountObj:this.props.accountObj,backingAssetObj:o,collateralBalanceObj:i,debtBalanceObj:l,quoteAssetObj:a,newPosition:this.state.newPosition||null,errors:h,collateral:c,collateral_ratio:p,debtAmount:s,backingPrecision:g,maintenanceRatio:E,remainingBackingBalance:O,remainingDebtBalance:w,target_collateral_ratio:u,unlockedInputType:this.state.unlockedInputType,disableHelp:this.props.disableHelp,isRatioLocked:this.state.isRatioLocked,isOriginalBelowMCR:S,isPredictionMarket:A,isValid:A||!A&&!isNaN(j),useTargetCollateral:_,onBorrowChange:this._onBorrowChange.bind(this),onCollateralChange:this._onCollateralChange.bind(this),onMaximizeCollatereal:this._maximizeCollateral.bind(this),onRatioChange:this._onRatioChange.bind(this),onLockChangeCR:this._onLockCR.bind(this),onLockChangeCollateral:this._onLockChange.bind(this,"debt"),onLockChangeDebt:this._onLockChange.bind(this,"collateral"),onPayDebt:this._payDebt.bind(this),onTCRatioChange:this._onTargetRatioChange.bind(this),onSetUseTCR:this._setUseTargetCollateral.bind(this)}))}}]),t}();L.propTypes={quoteAssetObj:c.a.ChainAsset.isRequired,backingAssetObj:c.a.ChainAsset.isRequired,debtBalanceObj:c.a.ChainObject,collateralBalanceObj:c.a.ChainObject,call_orders:c.a.ChainObjectsList,hasCallOrders:i.a.bool},L=Object(h.a)(L),L=R()(L,50,{leading:!1});var q=function(e){function t(){x(this,t);var e=B(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={smallScreen:!1,open:!1},e}return F(t,n.a.Component),I(t,[{key:"show",value:function(){this.props.showModal()}},{key:"componentWillMount",value:function(){this.setState({smallScreen:window.innerHeight<=800})}},{key:"render",value:function(){var e=this.props,t=e.quoteAssetObj,a=e.backingAssetObj,o=e.accountObj,l=o.get("balances").toJS(),i=void 0,r=void 0;if(l)for(var s in l)s===a&&(i=l[s]),s===t&&(r=l[s]);return this.props.visible?n.a.createElement(L,{visible:this.props.visible,hideModal:this.props.hideModal,showModal:this.props.showModal,quoteAssetObj:t,call_orders:o.get("call_orders",Object(v.List)()).toList(),hasCallOrders:o.get("call_orders")&&o.get("call_orders").size>0,modalId:this.props.modalId,debtBalanceObj:r,collateralBalanceObj:i,backingAssetObj:a,disableHelp:this.state.smallScreen,accountObj:o}):null}}]),t}();t.a=q}}]);
//# sourceMappingURL=account~settings.js.map