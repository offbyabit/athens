goog.provide('athens.devcards.block');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('cljs.core.async');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('posh.reagent');
goog.require('datascript.core');
goog.require('cljs_http.client');
goog.require('athens.style');
athens.devcards.block.log = console.log;
athens.devcards.block.trace = (function athens$devcards$block$trace(x){
(athens.devcards.block.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.block.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.block.log.call(null,x));

return x;
});
(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(athens.db.dsdb) : posh.reagent.posh_BANG_.call(null,athens.db.dsdb));
/**
 * TODO: Don't know how we want to handle global subscriptions or dispatches (i.e. routing) now that we are in reagent
 */
athens.devcards.block.left_sidebar = (function athens$devcards$block$left_sidebar(){
var favorites = (function (){var G__53028 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
var G__53029 = athens.db.dsdb;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__53028,G__53029) : posh.reagent.q.call(null,G__53028,G__53029));
})();
var sorted_favorites = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(favorites)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var G__53030 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1(G__53030) : athens.style._PLUS_left_sidebar.call(null,G__53030));
})(),(function (){var iter__4582__auto__ = (function athens$devcards$block$left_sidebar_$_iter__53031(s__53032){
return (new cljs.core.LazySeq(null,(function (){
var s__53032__$1 = s__53032;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53032__$1);
if(temp__5735__auto__){
var s__53032__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53032__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53032__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53034 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53033 = (0);
while(true){
if((i__53033 < size__4581__auto__)){
var vec__53035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53033);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53035,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53035,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53035,(2),null);
cljs.core.chunk_append(b__53034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)));

var G__53106 = (i__53033 + (1));
i__53033 = G__53106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53034),athens$devcards$block$left_sidebar_$_iter__53031(cljs.core.chunk_rest(s__53032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53034),null);
}
} else {
var vec__53038 = cljs.core.first(s__53032__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)),athens$devcards$block$left_sidebar_$_iter__53031(cljs.core.rest(s__53032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sorted_favorites);
})()], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block","athens.devcards.block",-817506573),new cljs.core.Keyword(null,"left-sidebar","left-sidebar",-1413634357)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"left-sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.block !== 'undefined') && (typeof athens.devcards.block.t_athens$devcards$block53041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.block.t_athens$devcards$block53041 = (function (meta53042){
this.meta53042 = meta53042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.block.t_athens$devcards$block53041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53043,meta53042__$1){
var self__ = this;
var _53043__$1 = this;
return (new athens.devcards.block.t_athens$devcards$block53041(meta53042__$1));
}));

(athens.devcards.block.t_athens$devcards$block53041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53043){
var self__ = this;
var _53043__$1 = this;
return self__.meta53042;
}));

(athens.devcards.block.t_athens$devcards$block53041.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.block.t_athens$devcards$block53041.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47504__auto__,devcard_opts__47505__auto__){
var self__ = this;
var this__47504__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47505__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47523__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block.left_sidebar], null);
if(cljs.core.fn_QMARK_(v__47523__auto__)){
return (function (data_atom__47524__auto__,owner__47525__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47523__auto__,data_atom__47524__auto__,owner__47525__auto__], null));
});
} else {
return reagent.core.as_element(v__47523__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47505__auto__))], 0))], 0));
}));

(athens.devcards.block.t_athens$devcards$block53041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53042","meta53042",-417242456,null)], null);
}));

(athens.devcards.block.t_athens$devcards$block53041.cljs$lang$type = true);

(athens.devcards.block.t_athens$devcards$block53041.cljs$lang$ctorStr = "athens.devcards.block/t_athens$devcards$block53041");

(athens.devcards.block.t_athens$devcards$block53041.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.block/t_athens$devcards$block53041");
}));

/**
 * Positional factory function for athens.devcards.block/t_athens$devcards$block53041.
 */
athens.devcards.block.__GT_t_athens$devcards$block53041 = (function athens$devcards$block$__GT_t_athens$devcards$block53041(meta53042){
return (new athens.devcards.block.t_athens$devcards$block53041(meta53042));
});

}

return (new athens.devcards.block.t_athens$devcards$block53041(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block","athens.devcards.block",-817506573),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Indices are omitted because they include all the datoms\n  Could probably use this and `load-db` as generic helpers for any componenets that use posh.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032)], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.block.load_db = (function athens$devcards$block$load_db(){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_53082){
var state_val_53083 = (state_53082[(1)]);
if((state_val_53083 === (7))){
var state_53082__$1 = state_53082;
var statearr_53084_53107 = state_53082__$1;
(statearr_53084_53107[(2)] = false);

(statearr_53084_53107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (1))){
var inst_53045 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_53046 = [false];
var inst_53047 = cljs.core.PersistentHashMap.fromArrays(inst_53045,inst_53046);
var inst_53048 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53047], 0));
var state_53082__$1 = state_53082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53082__$1,(2),inst_53048);
} else {
if((state_val_53083 === (4))){
var state_53082__$1 = state_53082;
var statearr_53085_53108 = state_53082__$1;
(statearr_53085_53108[(2)] = false);

(statearr_53085_53108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (13))){
var inst_53078 = alert("Failed to retrieve data from GitHub");
var state_53082__$1 = state_53082;
var statearr_53086_53109 = state_53082__$1;
(statearr_53086_53109[(2)] = inst_53078);

(statearr_53086_53109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (6))){
var state_53082__$1 = state_53082;
var statearr_53087_53110 = state_53082__$1;
(statearr_53087_53110[(2)] = true);

(statearr_53087_53110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (3))){
var inst_53050 = (state_53082[(7)]);
var inst_53055 = inst_53050.cljs$lang$protocol_mask$partition0$;
var inst_53056 = (inst_53055 & (64));
var inst_53057 = inst_53050.cljs$core$ISeq$;
var inst_53058 = (cljs.core.PROTOCOL_SENTINEL === inst_53057);
var inst_53059 = ((inst_53056) || (inst_53058));
var state_53082__$1 = state_53082;
if(cljs.core.truth_(inst_53059)){
var statearr_53088_53111 = state_53082__$1;
(statearr_53088_53111[(1)] = (6));

} else {
var statearr_53089_53112 = state_53082__$1;
(statearr_53089_53112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (12))){
var inst_53073 = (state_53082[(8)]);
var inst_53075 = athens.db.str_to_db_tx(inst_53073);
var inst_53076 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_53075) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_53075));
var state_53082__$1 = state_53082;
var statearr_53090_53113 = state_53082__$1;
(statearr_53090_53113[(2)] = inst_53076);

(statearr_53090_53113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (2))){
var inst_53050 = (state_53082[(7)]);
var inst_53050__$1 = (state_53082[(2)]);
var inst_53052 = (inst_53050__$1 == null);
var inst_53053 = cljs.core.not(inst_53052);
var state_53082__$1 = (function (){var statearr_53091 = state_53082;
(statearr_53091[(7)] = inst_53050__$1);

return statearr_53091;
})();
if(inst_53053){
var statearr_53092_53114 = state_53082__$1;
(statearr_53092_53114[(1)] = (3));

} else {
var statearr_53093_53115 = state_53082__$1;
(statearr_53093_53115[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (11))){
var inst_53071 = (state_53082[(2)]);
var inst_53072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53071,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_53073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53071,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_53082__$1 = (function (){var statearr_53094 = state_53082;
(statearr_53094[(8)] = inst_53073);

return statearr_53094;
})();
if(cljs.core.truth_(inst_53072)){
var statearr_53095_53116 = state_53082__$1;
(statearr_53095_53116[(1)] = (12));

} else {
var statearr_53096_53117 = state_53082__$1;
(statearr_53096_53117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (9))){
var inst_53050 = (state_53082[(7)]);
var inst_53068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53050);
var state_53082__$1 = state_53082;
var statearr_53097_53118 = state_53082__$1;
(statearr_53097_53118[(2)] = inst_53068);

(statearr_53097_53118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (5))){
var inst_53066 = (state_53082[(2)]);
var state_53082__$1 = state_53082;
if(cljs.core.truth_(inst_53066)){
var statearr_53098_53119 = state_53082__$1;
(statearr_53098_53119[(1)] = (9));

} else {
var statearr_53099_53120 = state_53082__$1;
(statearr_53099_53120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (14))){
var inst_53080 = (state_53082[(2)]);
var state_53082__$1 = state_53082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53082__$1,inst_53080);
} else {
if((state_val_53083 === (10))){
var inst_53050 = (state_53082[(7)]);
var state_53082__$1 = state_53082;
var statearr_53100_53121 = state_53082__$1;
(statearr_53100_53121[(2)] = inst_53050);

(statearr_53100_53121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (8))){
var inst_53063 = (state_53082[(2)]);
var state_53082__$1 = state_53082;
var statearr_53101_53122 = state_53082__$1;
(statearr_53101_53122[(2)] = inst_53063);

(statearr_53101_53122[(1)] = (5));


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
});
return (function() {
var athens$devcards$block$load_db_$_state_machine__39593__auto__ = null;
var athens$devcards$block$load_db_$_state_machine__39593__auto____0 = (function (){
var statearr_53102 = [null,null,null,null,null,null,null,null,null];
(statearr_53102[(0)] = athens$devcards$block$load_db_$_state_machine__39593__auto__);

(statearr_53102[(1)] = (1));

return statearr_53102;
});
var athens$devcards$block$load_db_$_state_machine__39593__auto____1 = (function (state_53082){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_53082);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e53103){if((e53103 instanceof Object)){
var ex__39596__auto__ = e53103;
var statearr_53104_53123 = state_53082;
(statearr_53104_53123[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53124 = state_53082;
state_53082 = G__53124;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$block$load_db_$_state_machine__39593__auto__ = function(state_53082){
switch(arguments.length){
case 0:
return athens$devcards$block$load_db_$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$block$load_db_$_state_machine__39593__auto____1.call(this,state_53082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$block$load_db_$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$block$load_db_$_state_machine__39593__auto____0;
athens$devcards$block$load_db_$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$block$load_db_$_state_machine__39593__auto____1;
return athens$devcards$block$load_db_$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_53105 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_53105[(6)] = c__39615__auto__);

return statearr_53105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.block._main = (function athens$devcards$block$_main(){
return athens.devcards.block.load_db();
});
athens.devcards.block._main();

//# sourceMappingURL=athens.devcards.block.js.map
