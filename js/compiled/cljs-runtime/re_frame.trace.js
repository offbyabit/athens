goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__61890){
var map__61891 = p__61890;
var map__61891__$1 = (((((!((map__61891 == null))))?(((((map__61891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61891):map__61891);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__61893_61924 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__61894_61925 = null;
var count__61895_61926 = (0);
var i__61896_61927 = (0);
while(true){
if((i__61896_61927 < count__61895_61926)){
var vec__61907_61928 = chunk__61894_61925.cljs$core$IIndexed$_nth$arity$2(null,i__61896_61927);
var k_61929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61907_61928,(0),null);
var cb_61930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61907_61928,(1),null);
try{var G__61911_61931 = cljs.core.deref(re_frame.trace.traces);
(cb_61930.cljs$core$IFn$_invoke$arity$1 ? cb_61930.cljs$core$IFn$_invoke$arity$1(G__61911_61931) : cb_61930.call(null,G__61911_61931));
}catch (e61910){var e_61932 = e61910;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61929,"while storing",cljs.core.deref(re_frame.trace.traces),e_61932], 0));
}

var G__61933 = seq__61893_61924;
var G__61934 = chunk__61894_61925;
var G__61935 = count__61895_61926;
var G__61936 = (i__61896_61927 + (1));
seq__61893_61924 = G__61933;
chunk__61894_61925 = G__61934;
count__61895_61926 = G__61935;
i__61896_61927 = G__61936;
continue;
} else {
var temp__5735__auto___61937 = cljs.core.seq(seq__61893_61924);
if(temp__5735__auto___61937){
var seq__61893_61938__$1 = temp__5735__auto___61937;
if(cljs.core.chunked_seq_QMARK_(seq__61893_61938__$1)){
var c__4609__auto___61939 = cljs.core.chunk_first(seq__61893_61938__$1);
var G__61942 = cljs.core.chunk_rest(seq__61893_61938__$1);
var G__61943 = c__4609__auto___61939;
var G__61944 = cljs.core.count(c__4609__auto___61939);
var G__61945 = (0);
seq__61893_61924 = G__61942;
chunk__61894_61925 = G__61943;
count__61895_61926 = G__61944;
i__61896_61927 = G__61945;
continue;
} else {
var vec__61912_61946 = cljs.core.first(seq__61893_61938__$1);
var k_61947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61912_61946,(0),null);
var cb_61948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61912_61946,(1),null);
try{var G__61916_61949 = cljs.core.deref(re_frame.trace.traces);
(cb_61948.cljs$core$IFn$_invoke$arity$1 ? cb_61948.cljs$core$IFn$_invoke$arity$1(G__61916_61949) : cb_61948.call(null,G__61916_61949));
}catch (e61915){var e_61950 = e61915;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61947,"while storing",cljs.core.deref(re_frame.trace.traces),e_61950], 0));
}

var G__61951 = cljs.core.next(seq__61893_61938__$1);
var G__61952 = null;
var G__61953 = (0);
var G__61954 = (0);
seq__61893_61924 = G__61951;
chunk__61894_61925 = G__61952;
count__61895_61926 = G__61953;
i__61896_61927 = G__61954;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
