goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47206){var e = e47206;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
var G__47213_47734 = new cljs.core.Keyword(null,"http","http",382524695);
var G__47214_47735 = (function (p__47219){
var map__47220 = p__47219;
var map__47220__$1 = (((((!((map__47220 == null))))?(((((map__47220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47220):map__47220);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47220__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_47294){
var state_val_47297 = (state_47294[(1)]);
if((state_val_47297 === (7))){
var inst_47251 = (state_47294[(7)]);
var inst_47251__$1 = (state_47294[(2)]);
var inst_47254 = (inst_47251__$1 == null);
var inst_47255 = cljs.core.not(inst_47254);
var state_47294__$1 = (function (){var statearr_47310 = state_47294;
(statearr_47310[(7)] = inst_47251__$1);

return statearr_47310;
})();
if(inst_47255){
var statearr_47313_47767 = state_47294__$1;
(statearr_47313_47767[(1)] = (8));

} else {
var statearr_47317_47768 = state_47294__$1;
(statearr_47317_47768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (1))){
var state_47294__$1 = state_47294;
var G__47319_47771 = method;
var G__47319_47772__$1 = (((G__47319_47771 instanceof cljs.core.Keyword))?G__47319_47771.fqn:null);
switch (G__47319_47772__$1) {
case "post":
var statearr_47335_47774 = state_47294__$1;
(statearr_47335_47774[(1)] = (3));


break;
case "get":
var statearr_47337_47775 = state_47294__$1;
(statearr_47337_47775[(1)] = (4));


break;
case "put":
var statearr_47338_47776 = state_47294__$1;
(statearr_47338_47776[(1)] = (5));


break;
case "delete":
var statearr_47341_47777 = state_47294__$1;
(statearr_47341_47777[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47319_47772__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (4))){
var state_47294__$1 = state_47294;
var statearr_47354_47778 = state_47294__$1;
(statearr_47354_47778[(2)] = cljs_http.client.get);

(statearr_47354_47778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (15))){
var inst_47251 = (state_47294[(7)]);
var state_47294__$1 = state_47294;
var statearr_47356_47780 = state_47294__$1;
(statearr_47356_47780[(2)] = inst_47251);

(statearr_47356_47780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (13))){
var inst_47268 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
var statearr_47360_47784 = state_47294__$1;
(statearr_47360_47784[(2)] = inst_47268);

(statearr_47360_47784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (6))){
var state_47294__$1 = state_47294;
var statearr_47362_47794 = state_47294__$1;
(statearr_47362_47794[(2)] = cljs_http.client.delete$);

(statearr_47362_47794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (17))){
var inst_47279 = (state_47294[(8)]);
var inst_47281 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_47279);
var inst_47282 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47281) : re_frame.core.dispatch.call(null,inst_47281));
var state_47294__$1 = state_47294;
var statearr_47363_47796 = state_47294__$1;
(statearr_47363_47796[(2)] = inst_47282);

(statearr_47363_47796[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (3))){
var state_47294__$1 = state_47294;
var statearr_47368_47798 = state_47294__$1;
(statearr_47368_47798[(2)] = cljs_http.client.post);

(statearr_47368_47798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (12))){
var state_47294__$1 = state_47294;
var statearr_47373_47799 = state_47294__$1;
(statearr_47373_47799[(2)] = false);

(statearr_47373_47799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (2))){
var inst_47247 = (state_47294[(2)]);
var inst_47249 = (inst_47247.cljs$core$IFn$_invoke$arity$2 ? inst_47247.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_47247.call(null,url,opts));
var state_47294__$1 = state_47294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47294__$1,(7),inst_47249);
} else {
if((state_val_47297 === (19))){
var inst_47288 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47294__$1,inst_47288);
} else {
if((state_val_47297 === (11))){
var state_47294__$1 = state_47294;
var statearr_47380_47802 = state_47294__$1;
(statearr_47380_47802[(2)] = true);

(statearr_47380_47802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (9))){
var state_47294__$1 = state_47294;
var statearr_47383_47803 = state_47294__$1;
(statearr_47383_47803[(2)] = false);

(statearr_47383_47803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (5))){
var state_47294__$1 = state_47294;
var statearr_47387_47804 = state_47294__$1;
(statearr_47387_47804[(2)] = cljs_http.client.put);

(statearr_47387_47804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (14))){
var inst_47251 = (state_47294[(7)]);
var inst_47274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47251);
var state_47294__$1 = state_47294;
var statearr_47392_47805 = state_47294__$1;
(statearr_47392_47805[(2)] = inst_47274);

(statearr_47392_47805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (16))){
var inst_47277 = (state_47294[(9)]);
var inst_47277__$1 = (state_47294[(2)]);
var inst_47278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47277__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47277__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_47294__$1 = (function (){var statearr_47397 = state_47294;
(statearr_47397[(9)] = inst_47277__$1);

(statearr_47397[(8)] = inst_47279);

return statearr_47397;
})();
if(cljs.core.truth_(inst_47278)){
var statearr_47400_47808 = state_47294__$1;
(statearr_47400_47808[(1)] = (17));

} else {
var statearr_47401_47809 = state_47294__$1;
(statearr_47401_47809[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (10))){
var inst_47271 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
if(cljs.core.truth_(inst_47271)){
var statearr_47408_47810 = state_47294__$1;
(statearr_47408_47810[(1)] = (14));

} else {
var statearr_47410_47812 = state_47294__$1;
(statearr_47410_47812[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (18))){
var inst_47277 = (state_47294[(9)]);
var inst_47284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_47277);
var inst_47285 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47284) : re_frame.core.dispatch.call(null,inst_47284));
var state_47294__$1 = state_47294;
var statearr_47415_47815 = state_47294__$1;
(statearr_47415_47815[(2)] = inst_47285);

(statearr_47415_47815[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47297 === (8))){
var inst_47251 = (state_47294[(7)]);
var inst_47258 = inst_47251.cljs$lang$protocol_mask$partition0$;
var inst_47259 = (inst_47258 & (64));
var inst_47260 = inst_47251.cljs$core$ISeq$;
var inst_47261 = (cljs.core.PROTOCOL_SENTINEL === inst_47260);
var inst_47262 = ((inst_47259) || (inst_47261));
var state_47294__$1 = state_47294;
if(cljs.core.truth_(inst_47262)){
var statearr_47420_47823 = state_47294__$1;
(statearr_47420_47823[(1)] = (11));

} else {
var statearr_47422_47825 = state_47294__$1;
(statearr_47422_47825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$events$state_machine__41713__auto__ = null;
var athens$events$state_machine__41713__auto____0 = (function (){
var statearr_47429 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47429[(0)] = athens$events$state_machine__41713__auto__);

(statearr_47429[(1)] = (1));

return statearr_47429;
});
var athens$events$state_machine__41713__auto____1 = (function (state_47294){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_47294);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e47434){if((e47434 instanceof Object)){
var ex__41716__auto__ = e47434;
var statearr_47438_47841 = state_47294;
(statearr_47438_47841[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47846 = state_47294;
state_47294 = G__47846;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$events$state_machine__41713__auto__ = function(state_47294){
switch(arguments.length){
case 0:
return athens$events$state_machine__41713__auto____0.call(this);
case 1:
return athens$events$state_machine__41713__auto____1.call(this,state_47294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__41713__auto____0;
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__41713__auto____1;
return athens$events$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_47457 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_47457[(6)] = c__41735__auto__);

return statearr_47457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47213_47734,G__47214_47735) : re_frame.core.reg_fx.call(null,G__47213_47734,G__47214_47735));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__47470_47861 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__47471_47862 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__47477){
var vec__47480 = p__47477;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47480,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47480,(1),null);
var _PLUS_debux_dbg_opts_PLUS__47864 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__47121__auto___47878 = _PLUS_debux_dbg_opts_PLUS__47864;
var result__47122__auto___47879 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS__47864;
var result__47122__auto___47879 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___47879,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto___47879;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS__47864;
var result__47122__auto___47879 = (function (){var G__47492 = (function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS__47864;
var result__47122__auto___47879 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___47879,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto___47879;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__47492) : datascript.core.empty_db.call(null,G__47492));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___47879,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto___47879;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___47879,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e47484){var e_47888 = e47484;
throw e_47888;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.db.str_to_db_tx((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47499){var e = e47499;
throw e;
}}):(function (_,p__47506){
var vec__47508 = p__47506;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47508,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47508,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__47470_47861,G__47471_47862) : re_posh.core.reg_event_ds.call(null,G__47470_47861,G__47471_47862));
var G__47514_47894 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__47515_47895 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__47520){
var vec__47522 = p__47520;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47522,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47522,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47522,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.not((function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47529){var e = e47529;
throw e;
}}):(function (_,p__47548){
var vec__47549 = p__47548;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__47514_47894,G__47515_47895) : re_posh.core.reg_event_ds.call(null,G__47514_47894,G__47515_47895));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__47563 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__47564 = ds;
var G__47565 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47563,G__47564,G__47565) : datascript.core.q.call(null,G__47563,G__47564,G__47565));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__47567 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__47568 = ds;
var G__47569 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47567,G__47568,G__47569) : datascript.core.q.call(null,G__47567,G__47568,G__47569));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__47570){
var vec__47579 = p__47570;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47579,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47579,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
var G__47586_47925 = new cljs.core.Keyword("node","rename","node/rename",1504180899);
var G__47587_47926 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (ds,p__47591){
var vec__47593 = p__47591;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47593,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47593,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47593,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eid","eid",-2094915839,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null)))));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = (function (){var eid = (function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.events.node_with_title((function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})();
var blocks = (function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.events.referencing_blocks((function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})();
return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null)),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47122__auto__;
})(),new cljs.core.Keyword("node","title","node/title",628940777),(function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))),(2),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3((function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.events.rename_refs_tx;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),(3),blocks)))));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eid","eid",-2094915839,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47618){var e = e47618;
throw e;
}}):(function (ds,p__47629){
var vec__47631 = p__47629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47631,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47631,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47631,(2),null);
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__47586_47925,G__47587_47926) : re_posh.core.reg_event_ds.call(null,G__47586_47925,G__47587_47926));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47642){var e = e47642;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47651){var e = e47651;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47667){var e = e47667;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47702){var e = e47702;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
