goog.provide('athens.devcards.left_sidebar');
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
athens.devcards.left_sidebar.log = console.log;
athens.devcards.left_sidebar.trace = (function athens$devcards$left_sidebar$trace(x){
(athens.devcards.left_sidebar.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.left_sidebar.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.left_sidebar.log.call(null,x));

return x;
});
(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(athens.db.dsdb) : posh.reagent.posh_BANG_.call(null,athens.db.dsdb));
/**
 * TODO: Don't know how we want to handle global subscriptions or dispatches (i.e. routing) now that we are in reagent
 */
athens.devcards.left_sidebar.left_sidebar = (function athens$devcards$left_sidebar$left_sidebar(){
var favorites = (function (){var G__47906 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
var G__47907 = athens.db.dsdb;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__47906,G__47907) : posh.reagent.q.call(null,G__47906,G__47907));
})();
var sorted_favorites = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(favorites)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var G__47908 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1(G__47908) : athens.style._PLUS_left_sidebar.call(null,G__47908));
})(),(function (){var iter__4582__auto__ = (function athens$devcards$left_sidebar$left_sidebar_$_iter__47909(s__47910){
return (new cljs.core.LazySeq(null,(function (){
var s__47910__$1 = s__47910;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47910__$1);
if(temp__5735__auto__){
var s__47910__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47910__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47910__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47912 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47911 = (0);
while(true){
if((i__47911 < size__4581__auto__)){
var vec__47913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47911);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47913,(2),null);
cljs.core.chunk_append(b__47912,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)));

var G__47984 = (i__47911 + (1));
i__47911 = G__47984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47912),athens$devcards$left_sidebar$left_sidebar_$_iter__47909(cljs.core.chunk_rest(s__47910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47912),null);
}
} else {
var vec__47916 = cljs.core.first(s__47910__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47916,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47916,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47916,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)),athens$devcards$left_sidebar$left_sidebar_$_iter__47909(cljs.core.rest(s__47910__$2)));
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"left-sidebar","left-sidebar",-1413634357)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"left-sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919 = (function (meta47920){
this.meta47920 = meta47920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47921,meta47920__$1){
var self__ = this;
var _47921__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919(meta47920__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47921){
var self__ = this;
var _47921__$1 = this;
return self__.meta47920;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47920","meta47920",-1480088456,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar47919");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar47919");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar47919.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar47919 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar47919(meta47920){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919(meta47920));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar47919(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Indices are omitted because they include all the datoms\n  Could probably use this and `load-db` as generic helpers for any componenets that use posh.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032)], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.left_sidebar.load_db = (function athens$devcards$left_sidebar$load_db(){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_47960){
var state_val_47961 = (state_47960[(1)]);
if((state_val_47961 === (7))){
var state_47960__$1 = state_47960;
var statearr_47962_47985 = state_47960__$1;
(statearr_47962_47985[(2)] = false);

(statearr_47962_47985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (1))){
var inst_47923 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47924 = [false];
var inst_47925 = cljs.core.PersistentHashMap.fromArrays(inst_47923,inst_47924);
var inst_47926 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47925], 0));
var state_47960__$1 = state_47960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47960__$1,(2),inst_47926);
} else {
if((state_val_47961 === (4))){
var state_47960__$1 = state_47960;
var statearr_47963_47986 = state_47960__$1;
(statearr_47963_47986[(2)] = false);

(statearr_47963_47986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (13))){
var inst_47956 = alert("Failed to retrieve data from GitHub");
var state_47960__$1 = state_47960;
var statearr_47964_47987 = state_47960__$1;
(statearr_47964_47987[(2)] = inst_47956);

(statearr_47964_47987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (6))){
var state_47960__$1 = state_47960;
var statearr_47965_47988 = state_47960__$1;
(statearr_47965_47988[(2)] = true);

(statearr_47965_47988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (3))){
var inst_47928 = (state_47960[(7)]);
var inst_47933 = inst_47928.cljs$lang$protocol_mask$partition0$;
var inst_47934 = (inst_47933 & (64));
var inst_47935 = inst_47928.cljs$core$ISeq$;
var inst_47936 = (cljs.core.PROTOCOL_SENTINEL === inst_47935);
var inst_47937 = ((inst_47934) || (inst_47936));
var state_47960__$1 = state_47960;
if(cljs.core.truth_(inst_47937)){
var statearr_47966_47989 = state_47960__$1;
(statearr_47966_47989[(1)] = (6));

} else {
var statearr_47967_47990 = state_47960__$1;
(statearr_47967_47990[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (12))){
var inst_47951 = (state_47960[(8)]);
var inst_47953 = athens.db.str_to_db_tx(inst_47951);
var inst_47954 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_47953) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_47953));
var state_47960__$1 = state_47960;
var statearr_47968_47991 = state_47960__$1;
(statearr_47968_47991[(2)] = inst_47954);

(statearr_47968_47991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (2))){
var inst_47928 = (state_47960[(7)]);
var inst_47928__$1 = (state_47960[(2)]);
var inst_47930 = (inst_47928__$1 == null);
var inst_47931 = cljs.core.not(inst_47930);
var state_47960__$1 = (function (){var statearr_47969 = state_47960;
(statearr_47969[(7)] = inst_47928__$1);

return statearr_47969;
})();
if(inst_47931){
var statearr_47970_47992 = state_47960__$1;
(statearr_47970_47992[(1)] = (3));

} else {
var statearr_47971_47993 = state_47960__$1;
(statearr_47971_47993[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (11))){
var inst_47949 = (state_47960[(2)]);
var inst_47950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47949,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47949,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_47960__$1 = (function (){var statearr_47972 = state_47960;
(statearr_47972[(8)] = inst_47951);

return statearr_47972;
})();
if(cljs.core.truth_(inst_47950)){
var statearr_47973_47994 = state_47960__$1;
(statearr_47973_47994[(1)] = (12));

} else {
var statearr_47974_47995 = state_47960__$1;
(statearr_47974_47995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (9))){
var inst_47928 = (state_47960[(7)]);
var inst_47946 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47928);
var state_47960__$1 = state_47960;
var statearr_47975_47996 = state_47960__$1;
(statearr_47975_47996[(2)] = inst_47946);

(statearr_47975_47996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (5))){
var inst_47944 = (state_47960[(2)]);
var state_47960__$1 = state_47960;
if(cljs.core.truth_(inst_47944)){
var statearr_47976_47997 = state_47960__$1;
(statearr_47976_47997[(1)] = (9));

} else {
var statearr_47977_47998 = state_47960__$1;
(statearr_47977_47998[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (14))){
var inst_47958 = (state_47960[(2)]);
var state_47960__$1 = state_47960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47960__$1,inst_47958);
} else {
if((state_val_47961 === (10))){
var inst_47928 = (state_47960[(7)]);
var state_47960__$1 = state_47960;
var statearr_47978_47999 = state_47960__$1;
(statearr_47978_47999[(2)] = inst_47928);

(statearr_47978_47999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47961 === (8))){
var inst_47941 = (state_47960[(2)]);
var state_47960__$1 = state_47960;
var statearr_47979_48000 = state_47960__$1;
(statearr_47979_48000[(2)] = inst_47941);

(statearr_47979_48000[(1)] = (5));


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
var athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__ = null;
var athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____0 = (function (){
var statearr_47980 = [null,null,null,null,null,null,null,null,null];
(statearr_47980[(0)] = athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__);

(statearr_47980[(1)] = (1));

return statearr_47980;
});
var athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____1 = (function (state_47960){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_47960);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e47981){if((e47981 instanceof Object)){
var ex__39596__auto__ = e47981;
var statearr_47982_48001 = state_47960;
(statearr_47982_48001[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48002 = state_47960;
state_47960 = G__48002;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__ = function(state_47960){
switch(arguments.length){
case 0:
return athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____1.call(this,state_47960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____0;
athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto____1;
return athens$devcards$left_sidebar$load_db_$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_47983 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_47983[(6)] = c__39615__auto__);

return statearr_47983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.left_sidebar._main = (function athens$devcards$left_sidebar$_main(){
return athens.devcards.left_sidebar.load_db();
});
athens.devcards.left_sidebar._main();

//# sourceMappingURL=athens.devcards.left_sidebar.js.map
