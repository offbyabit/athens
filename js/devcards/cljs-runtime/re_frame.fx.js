goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56897 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56898 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56898);

try{try{var seq__56900 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56901 = null;
var count__56902 = (0);
var i__56903 = (0);
while(true){
if((i__56903 < count__56902)){
var vec__56910 = chunk__56901.cljs$core$IIndexed$_nth$arity$2(null,i__56903);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56910,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56910,(1),null);
var temp__5733__auto___56952 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56952)){
var effect_fn_56953 = temp__5733__auto___56952;
(effect_fn_56953.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56953.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56953.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56954 = seq__56900;
var G__56955 = chunk__56901;
var G__56956 = count__56902;
var G__56957 = (i__56903 + (1));
seq__56900 = G__56954;
chunk__56901 = G__56955;
count__56902 = G__56956;
i__56903 = G__56957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56900);
if(temp__5735__auto__){
var seq__56900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56900__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56900__$1);
var G__56958 = cljs.core.chunk_rest(seq__56900__$1);
var G__56959 = c__4609__auto__;
var G__56960 = cljs.core.count(c__4609__auto__);
var G__56961 = (0);
seq__56900 = G__56958;
chunk__56901 = G__56959;
count__56902 = G__56960;
i__56903 = G__56961;
continue;
} else {
var vec__56913 = cljs.core.first(seq__56900__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56913,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56913,(1),null);
var temp__5733__auto___56964 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56964)){
var effect_fn_56965 = temp__5733__auto___56964;
(effect_fn_56965.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56965.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56965.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56970 = cljs.core.next(seq__56900__$1);
var G__56971 = null;
var G__56972 = (0);
var G__56973 = (0);
seq__56900 = G__56970;
chunk__56901 = G__56971;
count__56902 = G__56972;
i__56903 = G__56973;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56613__auto___56974 = re_frame.interop.now();
var duration__56614__auto___56975 = (end__56613__auto___56974 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56614__auto___56975,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56613__auto___56974);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56897);
}} else {
var seq__56916 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56917 = null;
var count__56918 = (0);
var i__56919 = (0);
while(true){
if((i__56919 < count__56918)){
var vec__56926 = chunk__56917.cljs$core$IIndexed$_nth$arity$2(null,i__56919);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(1),null);
var temp__5733__auto___56976 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56976)){
var effect_fn_56977 = temp__5733__auto___56976;
(effect_fn_56977.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56977.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56977.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56978 = seq__56916;
var G__56979 = chunk__56917;
var G__56980 = count__56918;
var G__56981 = (i__56919 + (1));
seq__56916 = G__56978;
chunk__56917 = G__56979;
count__56918 = G__56980;
i__56919 = G__56981;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56916);
if(temp__5735__auto__){
var seq__56916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56916__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56916__$1);
var G__56982 = cljs.core.chunk_rest(seq__56916__$1);
var G__56983 = c__4609__auto__;
var G__56984 = cljs.core.count(c__4609__auto__);
var G__56985 = (0);
seq__56916 = G__56982;
chunk__56917 = G__56983;
count__56918 = G__56984;
i__56919 = G__56985;
continue;
} else {
var vec__56929 = cljs.core.first(seq__56916__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(1),null);
var temp__5733__auto___56986 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56986)){
var effect_fn_56987 = temp__5733__auto___56986;
(effect_fn_56987.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56987.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56987.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56988 = cljs.core.next(seq__56916__$1);
var G__56989 = null;
var G__56990 = (0);
var G__56991 = (0);
seq__56916 = G__56988;
chunk__56917 = G__56989;
count__56918 = G__56990;
i__56919 = G__56991;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__56932 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56933 = null;
var count__56934 = (0);
var i__56935 = (0);
while(true){
if((i__56935 < count__56934)){
var map__56940 = chunk__56933.cljs$core$IIndexed$_nth$arity$2(null,i__56935);
var map__56940__$1 = (((((!((map__56940 == null))))?(((((map__56940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56940):map__56940);
var effect = map__56940__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56940,map__56940__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56940,map__56940__$1,effect,ms,dispatch))
,ms);
}


var G__56992 = seq__56932;
var G__56993 = chunk__56933;
var G__56994 = count__56934;
var G__56995 = (i__56935 + (1));
seq__56932 = G__56992;
chunk__56933 = G__56993;
count__56934 = G__56994;
i__56935 = G__56995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56932);
if(temp__5735__auto__){
var seq__56932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56932__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56932__$1);
var G__56996 = cljs.core.chunk_rest(seq__56932__$1);
var G__56997 = c__4609__auto__;
var G__56998 = cljs.core.count(c__4609__auto__);
var G__56999 = (0);
seq__56932 = G__56996;
chunk__56933 = G__56997;
count__56934 = G__56998;
i__56935 = G__56999;
continue;
} else {
var map__56942 = cljs.core.first(seq__56932__$1);
var map__56942__$1 = (((((!((map__56942 == null))))?(((((map__56942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56942):map__56942);
var effect = map__56942__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56942,map__56942__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56942,map__56942__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__))
,ms);
}


var G__57000 = cljs.core.next(seq__56932__$1);
var G__57001 = null;
var G__57002 = (0);
var G__57003 = (0);
seq__56932 = G__57000;
chunk__56933 = G__57001;
count__56934 = G__57002;
i__56935 = G__57003;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56944 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56945 = null;
var count__56946 = (0);
var i__56947 = (0);
while(true){
if((i__56947 < count__56946)){
var event = chunk__56945.cljs$core$IIndexed$_nth$arity$2(null,i__56947);
re_frame.router.dispatch(event);


var G__57004 = seq__56944;
var G__57005 = chunk__56945;
var G__57006 = count__56946;
var G__57007 = (i__56947 + (1));
seq__56944 = G__57004;
chunk__56945 = G__57005;
count__56946 = G__57006;
i__56947 = G__57007;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56944);
if(temp__5735__auto__){
var seq__56944__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56944__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56944__$1);
var G__57008 = cljs.core.chunk_rest(seq__56944__$1);
var G__57009 = c__4609__auto__;
var G__57010 = cljs.core.count(c__4609__auto__);
var G__57011 = (0);
seq__56944 = G__57008;
chunk__56945 = G__57009;
count__56946 = G__57010;
i__56947 = G__57011;
continue;
} else {
var event = cljs.core.first(seq__56944__$1);
re_frame.router.dispatch(event);


var G__57012 = cljs.core.next(seq__56944__$1);
var G__57013 = null;
var G__57014 = (0);
var G__57015 = (0);
seq__56944 = G__57012;
chunk__56945 = G__57013;
count__56946 = G__57014;
i__56947 = G__57015;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56948 = cljs.core.seq(value);
var chunk__56949 = null;
var count__56950 = (0);
var i__56951 = (0);
while(true){
if((i__56951 < count__56950)){
var event = chunk__56949.cljs$core$IIndexed$_nth$arity$2(null,i__56951);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57016 = seq__56948;
var G__57017 = chunk__56949;
var G__57018 = count__56950;
var G__57019 = (i__56951 + (1));
seq__56948 = G__57016;
chunk__56949 = G__57017;
count__56950 = G__57018;
i__56951 = G__57019;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56948);
if(temp__5735__auto__){
var seq__56948__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56948__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56948__$1);
var G__57020 = cljs.core.chunk_rest(seq__56948__$1);
var G__57021 = c__4609__auto__;
var G__57022 = cljs.core.count(c__4609__auto__);
var G__57023 = (0);
seq__56948 = G__57020;
chunk__56949 = G__57021;
count__56950 = G__57022;
i__56951 = G__57023;
continue;
} else {
var event = cljs.core.first(seq__56948__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57024 = cljs.core.next(seq__56948__$1);
var G__57025 = null;
var G__57026 = (0);
var G__57027 = (0);
seq__56948 = G__57024;
chunk__56949 = G__57025;
count__56950 = G__57026;
i__56951 = G__57027;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
