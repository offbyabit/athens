goog.provide('re_posh.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
goog.require('re_posh.db');
goog.require('reagent.ratom');
goog.require('posh.reagent');
if((typeof re_posh !== 'undefined') && (typeof re_posh.subs !== 'undefined') && (typeof re_posh.subs.execute_sub !== 'undefined')){
} else {
re_posh.subs.execute_sub = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60251 = cljs.core.get_global_hierarchy;
return (fexpr__60251.cljs$core$IFn$_invoke$arity$0 ? fexpr__60251.cljs$core$IFn$_invoke$arity$0() : fexpr__60251.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-posh.subs","execute-sub"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"query","query",-1288509510),(function (p__60252){
var map__60253 = p__60252;
var map__60253__$1 = (((((!((map__60253 == null))))?(((((map__60253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60253):map__60253);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var pre_q = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.reagent.q,query,cljs.core.deref(re_posh.db.store));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pre_q,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,variables));
}));
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pull","pull",-860544805),(function (p__60255){
var map__60256 = p__60255;
var map__60256__$1 = (((((!((map__60256 == null))))?(((((map__60256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60256):map__60256);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60256__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60256__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__60258 = cljs.core.deref(re_posh.db.store);
var G__60259 = pattern;
var G__60260 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__60258,G__60259,G__60260) : posh.reagent.pull.call(null,G__60258,G__60259,G__60260));
}));
re_posh.subs.execute_sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pull-many","pull-many",217148130),(function (p__60261){
var map__60262 = p__60261;
var map__60262__$1 = (((((!((map__60262 == null))))?(((((map__60262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60262):map__60262);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60262__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60262__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var G__60264 = cljs.core.deref(re_posh.db.store);
var G__60265 = pattern;
var G__60266 = ids;
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__60264,G__60265,G__60266) : posh.reagent.pull_many.call(null,G__60264,G__60265,G__60266));
}));
/**
 * For a given `query-id` register a `config` function and input `signals`
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a function that generates config for query or pull for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A config function is always the last argument and it has this general form:
 *   `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the config functions gets as a first argument.
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-config-fn)   ;; (fn [db v]  ... a-value)
 *   The node's input signal defaults to datascript database, and the value within `ds` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here, the form is (fn [db v] ... signal | [signal])
 *     config-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many.
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   config function - either a singleton or sequence, paralleling
 *   the structure returned by the signal function.
 *   Here, is an example signal-fn, which returns a vector of input signals.
 *     (fn [query-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *   For that signal function, the config function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 *   then the config function must be written to expect a single value
 *   as the 1st argument:
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 *   
 */
re_posh.subs.reg_sub = (function re_posh$subs$reg_sub(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60295 = arguments.length;
var i__4790__auto___60296 = (0);
while(true){
if((i__4790__auto___60296 < len__4789__auto___60295)){
args__4795__auto__.push((arguments[i__4790__auto___60296]));

var G__60297 = (i__4790__auto___60296 + (1));
i__4790__auto___60296 = G__60297;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var config_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-posh: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__60269 = cljs.core.count(input_args);
switch (G__60269) {
case (0):
return (function() {
var G__60301 = null;
var G__60301__1 = (function (_){
return null;
});
var G__60301__2 = (function (_,___$1){
return null;
});
G__60301 = function(_,___$1){
switch(arguments.length){
case 1:
return G__60301__1.call(this,_);
case 2:
return G__60301__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60301.cljs$core$IFn$_invoke$arity$1 = G__60301__1;
G__60301.cljs$core$IFn$_invoke$arity$2 = G__60301__2;
return G__60301;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to ba an inputs function, got: ",f], 0));
}

return f;

break;
case (2):
var vec__60270 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got: ",marker], 0));
}

return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(vec) : re_frame.core.subscribe.call(null,vec));
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(vec) : re_frame.core.subscribe.call(null,vec));
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.core.subscribe,vecs);
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.core.subscribe,vecs);
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()

}
})();
return re_frame.core.reg_sub_raw(query_id,(function (_,params){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input_args),(0))){
var G__60273 = (function (){var G__60274 = cljs.core.deref(cljs.core.deref(re_posh.db.store));
var G__60275 = params;
return (config_fn.cljs$core$IFn$_invoke$arity$2 ? config_fn.cljs$core$IFn$_invoke$arity$2(G__60274,G__60275) : config_fn.call(null,G__60274,G__60275));
})();
return (re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1 ? re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1(G__60273) : re_posh.subs.execute_sub.call(null,G__60273));
} else {
return reagent.ratom.make_reaction((function (){
var inputs = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(params) : inputs_fn.call(null,params));
var signals = ((cljs.core.list_QMARK_(inputs))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,inputs):cljs.core.deref(inputs));
return cljs.core.deref((function (){var G__60276 = (config_fn.cljs$core$IFn$_invoke$arity$2 ? config_fn.cljs$core$IFn$_invoke$arity$2(signals,params) : config_fn.call(null,signals,params));
return (re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1 ? re_posh.subs.execute_sub.cljs$core$IFn$_invoke$arity$1(G__60276) : re_posh.subs.execute_sub.call(null,G__60276));
})());
}));
}
}));
}));

(re_posh.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_posh.subs.reg_sub.cljs$lang$applyTo = (function (seq60267){
var G__60268 = cljs.core.first(seq60267);
var seq60267__$1 = cljs.core.next(seq60267);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60268,seq60267__$1);
}));

/**
 * Syntax sugar for writing queries. It allows writing query subscription
 * in a very simple way:
 * 
 *   (re-posh/reg-query-sub
 * :query-id
 * '[:find ...
 *   :in $ $1 $2  ;; <- all variables go here
 *   :where ...])
 * 
 *   It's possible to subscibe to this query with
 * 
 *   (re-posh/subscribe [:query-id var-1 var-2])
 * 
 *   so that variables `var-1` and `var-2` will be automatically sent to `:in` form
 *   
 */
re_posh.subs.reg_query_sub = (function re_posh$subs$reg_query_sub(sub_name,query){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60277){
var vec__60278 = p__60277;
var seq__60279 = cljs.core.seq(vec__60278);
var first__60280 = cljs.core.first(seq__60279);
var seq__60279__$1 = cljs.core.next(seq__60279);
var ___$1 = first__60280;
var params = seq__60279__$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),params], null);
})], 0));
});
/**
 * Syntax sugar for writing pull queries. It allows writing pull subscription
 *   in a very simple way:
 * 
 *   (re-posh/reg-pull-sub
 * :pull-id
 * '[*]) ;;<- pull pattern
 * 
 *   It's possible to subscribe to this pull query with
 * 
 *   (re-posh/subscibe [:pull-id id])
 * 
 *   Where id is an entity id
 */
re_posh.subs.reg_pull_sub = (function re_posh$subs$reg_pull_sub(sub_name,pattern){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60281){
var vec__60282 = p__60281;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
})], 0));
});
/**
 * Syntax sugar for writing pull-many queries.
 *   Same as reg-pull-sub but takes vector of eids under key :ids
 * 
 *   (reg-pull-many-sub
 * :things
 * '[*])
 * 
 *   It's possible to subscribe to this pull-many query with
 * 
 *   (re-posh/subscribe [:things ids])
 * 
 *   Where ids is a sequence of entity ids
 */
re_posh.subs.reg_pull_many_sub = (function re_posh$subs$reg_pull_many_sub(sub_name,pattern){
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(sub_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__60285){
var vec__60286 = p__60285;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null);
})], 0));
});

//# sourceMappingURL=re_posh.subs.js.map
