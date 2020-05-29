goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__57394 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__57395 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__57395);

try{try{var seq__57396 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__57397 = null;
var count__57398 = (0);
var i__57399 = (0);
while(true){
if((i__57399 < count__57398)){
var vec__57406 = chunk__57397.cljs$core$IIndexed$_nth$arity$2(null,i__57399);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57406,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57406,(1),null);
var temp__5733__auto___57486 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57486)){
var effect_fn_57487 = temp__5733__auto___57486;
(effect_fn_57487.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57487.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57487.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57488 = seq__57396;
var G__57489 = chunk__57397;
var G__57490 = count__57398;
var G__57491 = (i__57399 + (1));
seq__57396 = G__57488;
chunk__57397 = G__57489;
count__57398 = G__57490;
i__57399 = G__57491;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57396);
if(temp__5735__auto__){
var seq__57396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57396__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57396__$1);
var G__57492 = cljs.core.chunk_rest(seq__57396__$1);
var G__57493 = c__4609__auto__;
var G__57494 = cljs.core.count(c__4609__auto__);
var G__57495 = (0);
seq__57396 = G__57492;
chunk__57397 = G__57493;
count__57398 = G__57494;
i__57399 = G__57495;
continue;
} else {
var vec__57410 = cljs.core.first(seq__57396__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57410,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57410,(1),null);
var temp__5733__auto___57496 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57496)){
var effect_fn_57497 = temp__5733__auto___57496;
(effect_fn_57497.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57497.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57497.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57498 = cljs.core.next(seq__57396__$1);
var G__57499 = null;
var G__57500 = (0);
var G__57501 = (0);
seq__57396 = G__57498;
chunk__57397 = G__57499;
count__57398 = G__57500;
i__57399 = G__57501;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40192__auto___57503 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__40193__auto___57504 = (end__40192__auto___57503 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40193__auto___57504,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__40192__auto___57503);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__57394);
}} else {
var seq__57414 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__57415 = null;
var count__57416 = (0);
var i__57417 = (0);
while(true){
if((i__57417 < count__57416)){
var vec__57425 = chunk__57415.cljs$core$IIndexed$_nth$arity$2(null,i__57417);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57425,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57425,(1),null);
var temp__5733__auto___57506 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57506)){
var effect_fn_57507 = temp__5733__auto___57506;
(effect_fn_57507.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57507.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57507.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57508 = seq__57414;
var G__57509 = chunk__57415;
var G__57510 = count__57416;
var G__57511 = (i__57417 + (1));
seq__57414 = G__57508;
chunk__57415 = G__57509;
count__57416 = G__57510;
i__57417 = G__57511;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57414);
if(temp__5735__auto__){
var seq__57414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57414__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57414__$1);
var G__57512 = cljs.core.chunk_rest(seq__57414__$1);
var G__57513 = c__4609__auto__;
var G__57514 = cljs.core.count(c__4609__auto__);
var G__57515 = (0);
seq__57414 = G__57512;
chunk__57415 = G__57513;
count__57416 = G__57514;
i__57417 = G__57515;
continue;
} else {
var vec__57428 = cljs.core.first(seq__57414__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57428,(1),null);
var temp__5733__auto___57516 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___57516)){
var effect_fn_57517 = temp__5733__auto___57516;
(effect_fn_57517.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57517.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57517.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57520 = cljs.core.next(seq__57414__$1);
var G__57521 = null;
var G__57522 = (0);
var G__57523 = (0);
seq__57414 = G__57520;
chunk__57415 = G__57521;
count__57416 = G__57522;
i__57417 = G__57523;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__57433 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57434 = null;
var count__57435 = (0);
var i__57436 = (0);
while(true){
if((i__57436 < count__57435)){
var map__57444 = chunk__57434.cljs$core$IIndexed$_nth$arity$2(null,i__57436);
var map__57444__$1 = (((((!((map__57444 == null))))?(((((map__57444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57444):map__57444);
var effect = map__57444__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__57433,chunk__57434,count__57435,i__57436,map__57444,map__57444__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__57433,chunk__57434,count__57435,i__57436,map__57444,map__57444__$1,effect,ms,dispatch))
,ms);
}


var G__57539 = seq__57433;
var G__57540 = chunk__57434;
var G__57541 = count__57435;
var G__57542 = (i__57436 + (1));
seq__57433 = G__57539;
chunk__57434 = G__57540;
count__57435 = G__57541;
i__57436 = G__57542;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57433);
if(temp__5735__auto__){
var seq__57433__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57433__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57433__$1);
var G__57543 = cljs.core.chunk_rest(seq__57433__$1);
var G__57544 = c__4609__auto__;
var G__57545 = cljs.core.count(c__4609__auto__);
var G__57546 = (0);
seq__57433 = G__57543;
chunk__57434 = G__57544;
count__57435 = G__57545;
i__57436 = G__57546;
continue;
} else {
var map__57448 = cljs.core.first(seq__57433__$1);
var map__57448__$1 = (((((!((map__57448 == null))))?(((((map__57448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57448):map__57448);
var effect = map__57448__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57448__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57448__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__57433,chunk__57434,count__57435,i__57436,map__57448,map__57448__$1,effect,ms,dispatch,seq__57433__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__57433,chunk__57434,count__57435,i__57436,map__57448,map__57448__$1,effect,ms,dispatch,seq__57433__$1,temp__5735__auto__))
,ms);
}


var G__57550 = cljs.core.next(seq__57433__$1);
var G__57551 = null;
var G__57552 = (0);
var G__57553 = (0);
seq__57433 = G__57550;
chunk__57434 = G__57551;
count__57435 = G__57552;
i__57436 = G__57553;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__57453 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57456 = null;
var count__57457 = (0);
var i__57458 = (0);
while(true){
if((i__57458 < count__57457)){
var event = chunk__57456.cljs$core$IIndexed$_nth$arity$2(null,i__57458);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__57559 = seq__57453;
var G__57560 = chunk__57456;
var G__57561 = count__57457;
var G__57562 = (i__57458 + (1));
seq__57453 = G__57559;
chunk__57456 = G__57560;
count__57457 = G__57561;
i__57458 = G__57562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57453);
if(temp__5735__auto__){
var seq__57453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57453__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57453__$1);
var G__57563 = cljs.core.chunk_rest(seq__57453__$1);
var G__57564 = c__4609__auto__;
var G__57565 = cljs.core.count(c__4609__auto__);
var G__57566 = (0);
seq__57453 = G__57563;
chunk__57456 = G__57564;
count__57457 = G__57565;
i__57458 = G__57566;
continue;
} else {
var event = cljs.core.first(seq__57453__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__57567 = cljs.core.next(seq__57453__$1);
var G__57568 = null;
var G__57569 = (0);
var G__57570 = (0);
seq__57453 = G__57567;
chunk__57456 = G__57568;
count__57457 = G__57569;
i__57458 = G__57570;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__57461 = cljs.core.seq(value);
var chunk__57462 = null;
var count__57463 = (0);
var i__57464 = (0);
while(true){
if((i__57464 < count__57463)){
var event = chunk__57462.cljs$core$IIndexed$_nth$arity$2(null,i__57464);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57572 = seq__57461;
var G__57573 = chunk__57462;
var G__57574 = count__57463;
var G__57575 = (i__57464 + (1));
seq__57461 = G__57572;
chunk__57462 = G__57573;
count__57463 = G__57574;
i__57464 = G__57575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57461);
if(temp__5735__auto__){
var seq__57461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57461__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57461__$1);
var G__57576 = cljs.core.chunk_rest(seq__57461__$1);
var G__57577 = c__4609__auto__;
var G__57578 = cljs.core.count(c__4609__auto__);
var G__57579 = (0);
seq__57461 = G__57576;
chunk__57462 = G__57577;
count__57463 = G__57578;
i__57464 = G__57579;
continue;
} else {
var event = cljs.core.first(seq__57461__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57581 = cljs.core.next(seq__57461__$1);
var G__57582 = null;
var G__57583 = (0);
var G__57584 = (0);
seq__57461 = G__57581;
chunk__57462 = G__57582;
count__57463 = G__57583;
i__57464 = G__57584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
