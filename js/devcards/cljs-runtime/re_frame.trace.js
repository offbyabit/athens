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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__56633){
var map__56634 = p__56633;
var map__56634__$1 = (((((!((map__56634 == null))))?(((((map__56634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56634):map__56634);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56634__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56634__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56634__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56634__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__56636_56663 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__56637_56664 = null;
var count__56638_56665 = (0);
var i__56639_56666 = (0);
while(true){
if((i__56639_56666 < count__56638_56665)){
var vec__56650_56667 = chunk__56637_56664.cljs$core$IIndexed$_nth$arity$2(null,i__56639_56666);
var k_56668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56650_56667,(0),null);
var cb_56669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56650_56667,(1),null);
try{var G__56654_56670 = cljs.core.deref(re_frame.trace.traces);
(cb_56669.cljs$core$IFn$_invoke$arity$1 ? cb_56669.cljs$core$IFn$_invoke$arity$1(G__56654_56670) : cb_56669.call(null,G__56654_56670));
}catch (e56653){var e_56672 = e56653;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56668,"while storing",cljs.core.deref(re_frame.trace.traces),e_56672], 0));
}

var G__56677 = seq__56636_56663;
var G__56678 = chunk__56637_56664;
var G__56679 = count__56638_56665;
var G__56680 = (i__56639_56666 + (1));
seq__56636_56663 = G__56677;
chunk__56637_56664 = G__56678;
count__56638_56665 = G__56679;
i__56639_56666 = G__56680;
continue;
} else {
var temp__5735__auto___56686 = cljs.core.seq(seq__56636_56663);
if(temp__5735__auto___56686){
var seq__56636_56688__$1 = temp__5735__auto___56686;
if(cljs.core.chunked_seq_QMARK_(seq__56636_56688__$1)){
var c__4609__auto___56689 = cljs.core.chunk_first(seq__56636_56688__$1);
var G__56690 = cljs.core.chunk_rest(seq__56636_56688__$1);
var G__56691 = c__4609__auto___56689;
var G__56692 = cljs.core.count(c__4609__auto___56689);
var G__56693 = (0);
seq__56636_56663 = G__56690;
chunk__56637_56664 = G__56691;
count__56638_56665 = G__56692;
i__56639_56666 = G__56693;
continue;
} else {
var vec__56655_56694 = cljs.core.first(seq__56636_56688__$1);
var k_56695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56655_56694,(0),null);
var cb_56696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56655_56694,(1),null);
try{var G__56659_56700 = cljs.core.deref(re_frame.trace.traces);
(cb_56696.cljs$core$IFn$_invoke$arity$1 ? cb_56696.cljs$core$IFn$_invoke$arity$1(G__56659_56700) : cb_56696.call(null,G__56659_56700));
}catch (e56658){var e_56704 = e56658;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56695,"while storing",cljs.core.deref(re_frame.trace.traces),e_56704], 0));
}

var G__56705 = cljs.core.next(seq__56636_56688__$1);
var G__56706 = null;
var G__56707 = (0);
var G__56708 = (0);
seq__56636_56663 = G__56705;
chunk__56637_56664 = G__56706;
count__56638_56665 = G__56707;
i__56639_56666 = G__56708;
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
