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
var _STAR_current_trace_STAR__orig_val__46201 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46202 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46202);

try{try{var seq__46203 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46204 = null;
var count__46205 = (0);
var i__46206 = (0);
while(true){
if((i__46206 < count__46205)){
var vec__46216 = chunk__46204.cljs$core$IIndexed$_nth$arity$2(null,i__46206);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(1),null);
var temp__5733__auto___46271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46271)){
var effect_fn_46272 = temp__5733__auto___46271;
(effect_fn_46272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46273 = seq__46203;
var G__46274 = chunk__46204;
var G__46275 = count__46205;
var G__46276 = (i__46206 + (1));
seq__46203 = G__46273;
chunk__46204 = G__46274;
count__46205 = G__46275;
i__46206 = G__46276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46203);
if(temp__5735__auto__){
var seq__46203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46203__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46203__$1);
var G__46277 = cljs.core.chunk_rest(seq__46203__$1);
var G__46278 = c__4609__auto__;
var G__46279 = cljs.core.count(c__4609__auto__);
var G__46280 = (0);
seq__46203 = G__46277;
chunk__46204 = G__46278;
count__46205 = G__46279;
i__46206 = G__46280;
continue;
} else {
var vec__46219 = cljs.core.first(seq__46203__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(1),null);
var temp__5733__auto___46283 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46283)){
var effect_fn_46284 = temp__5733__auto___46283;
(effect_fn_46284.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46284.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46284.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46285 = cljs.core.next(seq__46203__$1);
var G__46286 = null;
var G__46287 = (0);
var G__46288 = (0);
seq__46203 = G__46285;
chunk__46204 = G__46286;
count__46205 = G__46287;
i__46206 = G__46288;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45934__auto___46289 = re_frame.interop.now();
var duration__45935__auto___46290 = (end__45934__auto___46289 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45935__auto___46290,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45934__auto___46289);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46201);
}} else {
var seq__46222 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46223 = null;
var count__46224 = (0);
var i__46225 = (0);
while(true){
if((i__46225 < count__46224)){
var vec__46232 = chunk__46223.cljs$core$IIndexed$_nth$arity$2(null,i__46225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(1),null);
var temp__5733__auto___46291 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46291)){
var effect_fn_46292 = temp__5733__auto___46291;
(effect_fn_46292.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46292.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46292.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46293 = seq__46222;
var G__46294 = chunk__46223;
var G__46295 = count__46224;
var G__46296 = (i__46225 + (1));
seq__46222 = G__46293;
chunk__46223 = G__46294;
count__46224 = G__46295;
i__46225 = G__46296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46222);
if(temp__5735__auto__){
var seq__46222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46222__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46222__$1);
var G__46297 = cljs.core.chunk_rest(seq__46222__$1);
var G__46298 = c__4609__auto__;
var G__46299 = cljs.core.count(c__4609__auto__);
var G__46300 = (0);
seq__46222 = G__46297;
chunk__46223 = G__46298;
count__46224 = G__46299;
i__46225 = G__46300;
continue;
} else {
var vec__46235 = cljs.core.first(seq__46222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46235,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46235,(1),null);
var temp__5733__auto___46301 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46301)){
var effect_fn_46302 = temp__5733__auto___46301;
(effect_fn_46302.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46302.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46302.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46304 = cljs.core.next(seq__46222__$1);
var G__46305 = null;
var G__46306 = (0);
var G__46307 = (0);
seq__46222 = G__46304;
chunk__46223 = G__46305;
count__46224 = G__46306;
i__46225 = G__46307;
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
var seq__46238 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46239 = null;
var count__46240 = (0);
var i__46241 = (0);
while(true){
if((i__46241 < count__46240)){
var map__46246 = chunk__46239.cljs$core$IIndexed$_nth$arity$2(null,i__46241);
var map__46246__$1 = (((((!((map__46246 == null))))?(((((map__46246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46246):map__46246);
var effect = map__46246__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46246__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46246__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46238,chunk__46239,count__46240,i__46241,map__46246,map__46246__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46238,chunk__46239,count__46240,i__46241,map__46246,map__46246__$1,effect,ms,dispatch))
,ms);
}


var G__46311 = seq__46238;
var G__46312 = chunk__46239;
var G__46313 = count__46240;
var G__46314 = (i__46241 + (1));
seq__46238 = G__46311;
chunk__46239 = G__46312;
count__46240 = G__46313;
i__46241 = G__46314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46238);
if(temp__5735__auto__){
var seq__46238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46238__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46238__$1);
var G__46315 = cljs.core.chunk_rest(seq__46238__$1);
var G__46316 = c__4609__auto__;
var G__46317 = cljs.core.count(c__4609__auto__);
var G__46318 = (0);
seq__46238 = G__46315;
chunk__46239 = G__46316;
count__46240 = G__46317;
i__46241 = G__46318;
continue;
} else {
var map__46248 = cljs.core.first(seq__46238__$1);
var map__46248__$1 = (((((!((map__46248 == null))))?(((((map__46248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46248):map__46248);
var effect = map__46248__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46238,chunk__46239,count__46240,i__46241,map__46248,map__46248__$1,effect,ms,dispatch,seq__46238__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46238,chunk__46239,count__46240,i__46241,map__46248,map__46248__$1,effect,ms,dispatch,seq__46238__$1,temp__5735__auto__))
,ms);
}


var G__46319 = cljs.core.next(seq__46238__$1);
var G__46320 = null;
var G__46321 = (0);
var G__46322 = (0);
seq__46238 = G__46319;
chunk__46239 = G__46320;
count__46240 = G__46321;
i__46241 = G__46322;
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
var seq__46254 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46255 = null;
var count__46256 = (0);
var i__46257 = (0);
while(true){
if((i__46257 < count__46256)){
var event = chunk__46255.cljs$core$IIndexed$_nth$arity$2(null,i__46257);
re_frame.router.dispatch(event);


var G__46333 = seq__46254;
var G__46334 = chunk__46255;
var G__46335 = count__46256;
var G__46336 = (i__46257 + (1));
seq__46254 = G__46333;
chunk__46255 = G__46334;
count__46256 = G__46335;
i__46257 = G__46336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46254);
if(temp__5735__auto__){
var seq__46254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46254__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46254__$1);
var G__46341 = cljs.core.chunk_rest(seq__46254__$1);
var G__46342 = c__4609__auto__;
var G__46343 = cljs.core.count(c__4609__auto__);
var G__46344 = (0);
seq__46254 = G__46341;
chunk__46255 = G__46342;
count__46256 = G__46343;
i__46257 = G__46344;
continue;
} else {
var event = cljs.core.first(seq__46254__$1);
re_frame.router.dispatch(event);


var G__46349 = cljs.core.next(seq__46254__$1);
var G__46350 = null;
var G__46351 = (0);
var G__46352 = (0);
seq__46254 = G__46349;
chunk__46255 = G__46350;
count__46256 = G__46351;
i__46257 = G__46352;
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
var seq__46262 = cljs.core.seq(value);
var chunk__46263 = null;
var count__46264 = (0);
var i__46265 = (0);
while(true){
if((i__46265 < count__46264)){
var event = chunk__46263.cljs$core$IIndexed$_nth$arity$2(null,i__46265);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46353 = seq__46262;
var G__46354 = chunk__46263;
var G__46355 = count__46264;
var G__46356 = (i__46265 + (1));
seq__46262 = G__46353;
chunk__46263 = G__46354;
count__46264 = G__46355;
i__46265 = G__46356;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46262);
if(temp__5735__auto__){
var seq__46262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46262__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46262__$1);
var G__46357 = cljs.core.chunk_rest(seq__46262__$1);
var G__46358 = c__4609__auto__;
var G__46359 = cljs.core.count(c__4609__auto__);
var G__46360 = (0);
seq__46262 = G__46357;
chunk__46263 = G__46358;
count__46264 = G__46359;
i__46265 = G__46360;
continue;
} else {
var event = cljs.core.first(seq__46262__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46361 = cljs.core.next(seq__46262__$1);
var G__46362 = null;
var G__46363 = (0);
var G__46364 = (0);
seq__46262 = G__46361;
chunk__46263 = G__46362;
count__46264 = G__46363;
i__46265 = G__46364;
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
