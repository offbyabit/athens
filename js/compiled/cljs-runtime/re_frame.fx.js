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
var _STAR_current_trace_STAR__orig_val__62072 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__62073 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__62073);

try{try{var seq__62074 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__62075 = null;
var count__62076 = (0);
var i__62077 = (0);
while(true){
if((i__62077 < count__62076)){
var vec__62097 = chunk__62075.cljs$core$IIndexed$_nth$arity$2(null,i__62077);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62097,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62097,(1),null);
var temp__5733__auto___62177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62177)){
var effect_fn_62178 = temp__5733__auto___62177;
(effect_fn_62178.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62178.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62178.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62179 = seq__62074;
var G__62180 = chunk__62075;
var G__62181 = count__62076;
var G__62182 = (i__62077 + (1));
seq__62074 = G__62179;
chunk__62075 = G__62180;
count__62076 = G__62181;
i__62077 = G__62182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62074);
if(temp__5735__auto__){
var seq__62074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62074__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62074__$1);
var G__62183 = cljs.core.chunk_rest(seq__62074__$1);
var G__62184 = c__4609__auto__;
var G__62185 = cljs.core.count(c__4609__auto__);
var G__62186 = (0);
seq__62074 = G__62183;
chunk__62075 = G__62184;
count__62076 = G__62185;
i__62077 = G__62186;
continue;
} else {
var vec__62112 = cljs.core.first(seq__62074__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62112,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62112,(1),null);
var temp__5733__auto___62187 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62187)){
var effect_fn_62188 = temp__5733__auto___62187;
(effect_fn_62188.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62188.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62188.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62189 = cljs.core.next(seq__62074__$1);
var G__62190 = null;
var G__62191 = (0);
var G__62192 = (0);
seq__62074 = G__62189;
chunk__62075 = G__62190;
count__62076 = G__62191;
i__62077 = G__62192;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40399__auto___62193 = re_frame.interop.now();
var duration__40400__auto___62194 = (end__40399__auto___62193 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40400__auto___62194,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40399__auto___62193);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__62072);
}} else {
var seq__62116 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__62117 = null;
var count__62118 = (0);
var i__62119 = (0);
while(true){
if((i__62119 < count__62118)){
var vec__62126 = chunk__62117.cljs$core$IIndexed$_nth$arity$2(null,i__62119);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62126,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62126,(1),null);
var temp__5733__auto___62208 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62208)){
var effect_fn_62213 = temp__5733__auto___62208;
(effect_fn_62213.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62213.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62213.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62214 = seq__62116;
var G__62215 = chunk__62117;
var G__62216 = count__62118;
var G__62217 = (i__62119 + (1));
seq__62116 = G__62214;
chunk__62117 = G__62215;
count__62118 = G__62216;
i__62119 = G__62217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62116);
if(temp__5735__auto__){
var seq__62116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62116__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62116__$1);
var G__62218 = cljs.core.chunk_rest(seq__62116__$1);
var G__62219 = c__4609__auto__;
var G__62220 = cljs.core.count(c__4609__auto__);
var G__62221 = (0);
seq__62116 = G__62218;
chunk__62117 = G__62219;
count__62118 = G__62220;
i__62119 = G__62221;
continue;
} else {
var vec__62131 = cljs.core.first(seq__62116__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62131,(1),null);
var temp__5733__auto___62222 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62222)){
var effect_fn_62223 = temp__5733__auto___62222;
(effect_fn_62223.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62223.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62223.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62224 = cljs.core.next(seq__62116__$1);
var G__62225 = null;
var G__62226 = (0);
var G__62227 = (0);
seq__62116 = G__62224;
chunk__62117 = G__62225;
count__62118 = G__62226;
i__62119 = G__62227;
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
var seq__62134 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__62135 = null;
var count__62136 = (0);
var i__62137 = (0);
while(true){
if((i__62137 < count__62136)){
var map__62144 = chunk__62135.cljs$core$IIndexed$_nth$arity$2(null,i__62137);
var map__62144__$1 = (((((!((map__62144 == null))))?(((((map__62144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62144):map__62144);
var effect = map__62144__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62144__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62144__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__62134,chunk__62135,count__62136,i__62137,map__62144,map__62144__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__62134,chunk__62135,count__62136,i__62137,map__62144,map__62144__$1,effect,ms,dispatch))
,ms);
}


var G__62232 = seq__62134;
var G__62233 = chunk__62135;
var G__62234 = count__62136;
var G__62235 = (i__62137 + (1));
seq__62134 = G__62232;
chunk__62135 = G__62233;
count__62136 = G__62234;
i__62137 = G__62235;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62134);
if(temp__5735__auto__){
var seq__62134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62134__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62134__$1);
var G__62238 = cljs.core.chunk_rest(seq__62134__$1);
var G__62239 = c__4609__auto__;
var G__62240 = cljs.core.count(c__4609__auto__);
var G__62241 = (0);
seq__62134 = G__62238;
chunk__62135 = G__62239;
count__62136 = G__62240;
i__62137 = G__62241;
continue;
} else {
var map__62147 = cljs.core.first(seq__62134__$1);
var map__62147__$1 = (((((!((map__62147 == null))))?(((((map__62147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62147):map__62147);
var effect = map__62147__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__62134,chunk__62135,count__62136,i__62137,map__62147,map__62147__$1,effect,ms,dispatch,seq__62134__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__62134,chunk__62135,count__62136,i__62137,map__62147,map__62147__$1,effect,ms,dispatch,seq__62134__$1,temp__5735__auto__))
,ms);
}


var G__62246 = cljs.core.next(seq__62134__$1);
var G__62247 = null;
var G__62248 = (0);
var G__62249 = (0);
seq__62134 = G__62246;
chunk__62135 = G__62247;
count__62136 = G__62248;
i__62137 = G__62249;
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
var seq__62155 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__62156 = null;
var count__62157 = (0);
var i__62158 = (0);
while(true){
if((i__62158 < count__62157)){
var event = chunk__62156.cljs$core$IIndexed$_nth$arity$2(null,i__62158);
re_frame.router.dispatch(event);


var G__62253 = seq__62155;
var G__62254 = chunk__62156;
var G__62255 = count__62157;
var G__62256 = (i__62158 + (1));
seq__62155 = G__62253;
chunk__62156 = G__62254;
count__62157 = G__62255;
i__62158 = G__62256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62155);
if(temp__5735__auto__){
var seq__62155__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62155__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62155__$1);
var G__62261 = cljs.core.chunk_rest(seq__62155__$1);
var G__62262 = c__4609__auto__;
var G__62263 = cljs.core.count(c__4609__auto__);
var G__62264 = (0);
seq__62155 = G__62261;
chunk__62156 = G__62262;
count__62157 = G__62263;
i__62158 = G__62264;
continue;
} else {
var event = cljs.core.first(seq__62155__$1);
re_frame.router.dispatch(event);


var G__62265 = cljs.core.next(seq__62155__$1);
var G__62266 = null;
var G__62267 = (0);
var G__62268 = (0);
seq__62155 = G__62265;
chunk__62156 = G__62266;
count__62157 = G__62267;
i__62158 = G__62268;
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
var seq__62163 = cljs.core.seq(value);
var chunk__62164 = null;
var count__62165 = (0);
var i__62166 = (0);
while(true){
if((i__62166 < count__62165)){
var event = chunk__62164.cljs$core$IIndexed$_nth$arity$2(null,i__62166);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__62281 = seq__62163;
var G__62282 = chunk__62164;
var G__62283 = count__62165;
var G__62284 = (i__62166 + (1));
seq__62163 = G__62281;
chunk__62164 = G__62282;
count__62165 = G__62283;
i__62166 = G__62284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62163);
if(temp__5735__auto__){
var seq__62163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62163__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62163__$1);
var G__62286 = cljs.core.chunk_rest(seq__62163__$1);
var G__62287 = c__4609__auto__;
var G__62288 = cljs.core.count(c__4609__auto__);
var G__62289 = (0);
seq__62163 = G__62286;
chunk__62164 = G__62287;
count__62165 = G__62288;
i__62166 = G__62289;
continue;
} else {
var event = cljs.core.first(seq__62163__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__62290 = cljs.core.next(seq__62163__$1);
var G__62291 = null;
var G__62292 = (0);
var G__62293 = (0);
seq__62163 = G__62290;
chunk__62164 = G__62291;
count__62165 = G__62292;
i__62166 = G__62293;
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
