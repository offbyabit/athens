goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
goog.require('clojure.zip');
rewrite_clj.zip.seqz.seq_QMARK_ = (function rewrite_clj$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"forms","forms",2045992350),null], null), null),rewrite_clj.zip.base.tag(zloc));
});
rewrite_clj.zip.seqz.list_QMARK_ = (function rewrite_clj$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),new cljs.core.Keyword(null,"list","list",765357683));
});
rewrite_clj.zip.seqz.vector_QMARK_ = (function rewrite_clj$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),new cljs.core.Keyword(null,"vector","vector",1902966158));
});
rewrite_clj.zip.seqz.set_QMARK_ = (function rewrite_clj$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),new cljs.core.Keyword(null,"set","set",304602554));
});
rewrite_clj.zip.seqz.map_QMARK_ = (function rewrite_clj$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),new cljs.core.Keyword(null,"map","map",1371690461));
});
rewrite_clj.zip.seqz.map_seq = (function rewrite_clj$zip$seqz$map_seq(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5733__auto__ = rewrite_clj.zip.move.down(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var n0 = temp__5733__auto__;
var G__59727 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n0) : f.call(null,n0));
var G__59727__$1 = (((G__59727 == null))?null:cljs.core.iterate((function (loc){
var temp__5733__auto____$1 = rewrite_clj.zip.move.right(loc);
if(cljs.core.truth_(temp__5733__auto____$1)){
var n = temp__5733__auto____$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n));
} else {
return null;
}
}),G__59727));
var G__59727__$2 = (((G__59727__$1 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__59727__$1));
var G__59727__$3 = (((G__59727__$2 == null))?null:cljs.core.last(G__59727__$2));
if((G__59727__$3 == null)){
return null;
} else {
return rewrite_clj.zip.move.up(G__59727__$3);
}
} else {
return zloc;
}
});
/**
 * Apply function to all value nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_vals = (function rewrite_clj$zip$seqz$map_vals(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4174__auto__ = loc;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.zip.node(loc);
} else {
return and__4174__auto__;
}
})())){
return parent;
} else {
var temp__5733__auto__ = rewrite_clj.zip.move.right(loc);
if(cljs.core.truth_(temp__5733__auto__)){
var v0 = temp__5733__auto__;
var temp__5733__auto____$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
if(cljs.core.truth_(temp__5733__auto____$1)){
var v = temp__5733__auto____$1;
var G__59730 = rewrite_clj.zip.move.right(v);
var G__59731 = rewrite_clj.zip.move.up(v);
loc = G__59730;
parent = G__59731;
continue;
} else {
var G__59732 = rewrite_clj.zip.move.right(v0);
var G__59733 = parent;
loc = G__59732;
parent = G__59733;
continue;
}
} else {
return parent;
}
}
break;
}
});
/**
 * Apply function to all key nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_keys = (function rewrite_clj$zip$seqz$map_keys(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4174__auto__ = loc;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.zip.node(loc);
} else {
return and__4174__auto__;
}
})())){
return parent;
} else {
var temp__5733__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
var G__59734 = rewrite_clj.zip.move.right(rewrite_clj.zip.move.right(v));
var G__59735 = rewrite_clj.zip.move.up(v);
loc = G__59734;
parent = G__59735;
continue;
} else {
var G__59736 = rewrite_clj.zip.move.right(rewrite_clj.zip.move.right(loc));
var G__59737 = parent;
loc = G__59736;
parent = G__59737;
continue;
}
}
break;
}
});
/**
 * Apply function to all value nodes in the given seq node. Iterates over
 * value nodes of maps but over each element of a seq.
 */
rewrite_clj.zip.seqz.map = (function rewrite_clj$zip$seqz$map(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
return rewrite_clj.zip.seqz.map_vals(f,zloc);
} else {
return rewrite_clj.zip.seqz.map_seq(f,zloc);
}
});
/**
 * If a map is given, get element with the given key; if a seq is given, get nth element.
 */
rewrite_clj.zip.seqz.get = (function rewrite_clj$zip$seqz$get(zloc,k){
if(((rewrite_clj.zip.seqz.map_QMARK_(zloc)) || (((rewrite_clj.zip.seqz.seq_QMARK_(zloc)) && (cljs.core.integer_QMARK_(k)))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
var G__59728 = zloc;
var G__59728__$1 = (((G__59728 == null))?null:rewrite_clj.zip.move.down(G__59728));
var G__59728__$2 = (((G__59728__$1 == null))?null:rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2(G__59728__$1,k));
if((G__59728__$2 == null)){
return null;
} else {
return rewrite_clj.zip.move.right(G__59728__$2);
}
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__59729 = rewrite_clj.zip.move.down(zloc);
var G__59729__$1 = (((G__59729 == null))?null:cljs.core.iterate(rewrite_clj.zip.move.right,G__59729));
if((G__59729__$1 == null)){
return null;
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__59729__$1);
}
})(),k);
}
});
/**
 * Set map/seq element to the given value.
 */
rewrite_clj.zip.seqz.assoc = (function rewrite_clj$zip$seqz$assoc(zloc,k,v){
var temp__5733__auto__ = rewrite_clj.zip.seqz.get(zloc,k);
if(cljs.core.truth_(temp__5733__auto__)){
var vloc = temp__5733__auto__;
return rewrite_clj.zip.move.up(rewrite_clj.zip.editz.replace(vloc,v));
} else {
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
return rewrite_clj.zip.insert.append_child(rewrite_clj.zip.insert.append_child(zloc,k),v);
} else {
throw (new Error(["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
}
});

//# sourceMappingURL=rewrite_clj.zip.seqz.js.map
