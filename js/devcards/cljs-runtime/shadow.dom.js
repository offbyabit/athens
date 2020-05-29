goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47707 = coll;
var G__47708 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47707,G__47708) : shadow.dom.lazy_native_coll_seq.call(null,G__47707,G__47708));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47727 = arguments.length;
switch (G__47727) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47732 = arguments.length;
switch (G__47732) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47738 = arguments.length;
switch (G__47738) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47743 = arguments.length;
switch (G__47743) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47749 = arguments.length;
switch (G__47749) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47755 = document;
var G__47756 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47755,G__47756);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47757 = shadow.dom.dom_node(parent);
var G__47758 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47757,G__47758);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47760 = shadow.dom.dom_node(el);
var G__47761 = cls;
return goog.dom.classlist.add(G__47760,G__47761);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47765 = shadow.dom.dom_node(el);
var G__47766 = cls;
return goog.dom.classlist.remove(G__47765,G__47766);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47769 = arguments.length;
switch (G__47769) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47770 = shadow.dom.dom_node(el);
var G__47771 = cls;
return goog.dom.classlist.toggle(G__47770,G__47771);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47774){if((e47774 instanceof Object)){
var e = e47774;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47774;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47782 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47783 = null;
var count__47784 = (0);
var i__47785 = (0);
while(true){
if((i__47785 < count__47784)){
var el = chunk__47783.cljs$core$IIndexed$_nth$arity$2(null,i__47785);
var handler_48363__$1 = ((function (seq__47782,chunk__47783,count__47784,i__47785,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47782,chunk__47783,count__47784,i__47785,el))
;
var G__47796_48364 = el;
var G__47797_48365 = cljs.core.name(ev);
var G__47798_48366 = handler_48363__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47796_48364,G__47797_48365,G__47798_48366) : shadow.dom.dom_listen.call(null,G__47796_48364,G__47797_48365,G__47798_48366));


var G__48368 = seq__47782;
var G__48369 = chunk__47783;
var G__48370 = count__47784;
var G__48371 = (i__47785 + (1));
seq__47782 = G__48368;
chunk__47783 = G__48369;
count__47784 = G__48370;
i__47785 = G__48371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47782);
if(temp__5735__auto__){
var seq__47782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47782__$1);
var G__48373 = cljs.core.chunk_rest(seq__47782__$1);
var G__48374 = c__4609__auto__;
var G__48375 = cljs.core.count(c__4609__auto__);
var G__48376 = (0);
seq__47782 = G__48373;
chunk__47783 = G__48374;
count__47784 = G__48375;
i__47785 = G__48376;
continue;
} else {
var el = cljs.core.first(seq__47782__$1);
var handler_48378__$1 = ((function (seq__47782,chunk__47783,count__47784,i__47785,el,seq__47782__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47782,chunk__47783,count__47784,i__47785,el,seq__47782__$1,temp__5735__auto__))
;
var G__47802_48379 = el;
var G__47803_48380 = cljs.core.name(ev);
var G__47804_48381 = handler_48378__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47802_48379,G__47803_48380,G__47804_48381) : shadow.dom.dom_listen.call(null,G__47802_48379,G__47803_48380,G__47804_48381));


var G__48383 = cljs.core.next(seq__47782__$1);
var G__48384 = null;
var G__48385 = (0);
var G__48386 = (0);
seq__47782 = G__48383;
chunk__47783 = G__48384;
count__47784 = G__48385;
i__47785 = G__48386;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47808 = arguments.length;
switch (G__47808) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47810 = shadow.dom.dom_node(el);
var G__47811 = cljs.core.name(ev);
var G__47812 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47810,G__47811,G__47812) : shadow.dom.dom_listen.call(null,G__47810,G__47811,G__47812));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47814 = shadow.dom.dom_node(el);
var G__47815 = cljs.core.name(ev);
var G__47816 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47814,G__47815,G__47816) : shadow.dom.dom_listen_remove.call(null,G__47814,G__47815,G__47816));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47818 = cljs.core.seq(events);
var chunk__47819 = null;
var count__47820 = (0);
var i__47821 = (0);
while(true){
if((i__47821 < count__47820)){
var vec__47834 = chunk__47819.cljs$core$IIndexed$_nth$arity$2(null,i__47821);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48397 = seq__47818;
var G__48398 = chunk__47819;
var G__48399 = count__47820;
var G__48400 = (i__47821 + (1));
seq__47818 = G__48397;
chunk__47819 = G__48398;
count__47820 = G__48399;
i__47821 = G__48400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47818);
if(temp__5735__auto__){
var seq__47818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47818__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47818__$1);
var G__48403 = cljs.core.chunk_rest(seq__47818__$1);
var G__48404 = c__4609__auto__;
var G__48405 = cljs.core.count(c__4609__auto__);
var G__48406 = (0);
seq__47818 = G__48403;
chunk__47819 = G__48404;
count__47820 = G__48405;
i__47821 = G__48406;
continue;
} else {
var vec__47838 = cljs.core.first(seq__47818__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47838,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48408 = cljs.core.next(seq__47818__$1);
var G__48409 = null;
var G__48410 = (0);
var G__48411 = (0);
seq__47818 = G__48408;
chunk__47819 = G__48409;
count__47820 = G__48410;
i__47821 = G__48411;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47843 = cljs.core.seq(styles);
var chunk__47844 = null;
var count__47845 = (0);
var i__47846 = (0);
while(true){
if((i__47846 < count__47845)){
var vec__47864 = chunk__47844.cljs$core$IIndexed$_nth$arity$2(null,i__47846);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47864,(1),null);
var G__47867_48414 = dom;
var G__47868_48415 = cljs.core.name(k);
var G__47869_48416 = (((v == null))?"":v);
goog.style.setStyle(G__47867_48414,G__47868_48415,G__47869_48416);


var G__48418 = seq__47843;
var G__48419 = chunk__47844;
var G__48420 = count__47845;
var G__48421 = (i__47846 + (1));
seq__47843 = G__48418;
chunk__47844 = G__48419;
count__47845 = G__48420;
i__47846 = G__48421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47843);
if(temp__5735__auto__){
var seq__47843__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47843__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47843__$1);
var G__48423 = cljs.core.chunk_rest(seq__47843__$1);
var G__48424 = c__4609__auto__;
var G__48425 = cljs.core.count(c__4609__auto__);
var G__48426 = (0);
seq__47843 = G__48423;
chunk__47844 = G__48424;
count__47845 = G__48425;
i__47846 = G__48426;
continue;
} else {
var vec__47874 = cljs.core.first(seq__47843__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874,(1),null);
var G__47878_48427 = dom;
var G__47879_48428 = cljs.core.name(k);
var G__47880_48429 = (((v == null))?"":v);
goog.style.setStyle(G__47878_48427,G__47879_48428,G__47880_48429);


var G__48430 = cljs.core.next(seq__47843__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__47843 = G__48430;
chunk__47844 = G__48431;
count__47845 = G__48432;
i__47846 = G__48433;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47883_48434 = key;
var G__47883_48435__$1 = (((G__47883_48434 instanceof cljs.core.Keyword))?G__47883_48434.fqn:null);
switch (G__47883_48435__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48442 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48442,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48442,"aria-");
}
})())){
el.setAttribute(ks_48442,value);
} else {
(el[ks_48442] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47887 = shadow.dom.dom_node(el);
var G__47888 = cls;
return goog.dom.classlist.contains(G__47887,G__47888);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47895){
var map__47896 = p__47895;
var map__47896__$1 = (((((!((map__47896 == null))))?(((((map__47896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47896):map__47896);
var props = map__47896__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47896__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47899 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47899,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47899,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47899,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47904 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47904,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47904;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47907 = arguments.length;
switch (G__47907) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47914){
var vec__47915 = p__47914;
var seq__47916 = cljs.core.seq(vec__47915);
var first__47917 = cljs.core.first(seq__47916);
var seq__47916__$1 = cljs.core.next(seq__47916);
var nn = first__47917;
var first__47917__$1 = cljs.core.first(seq__47916__$1);
var seq__47916__$2 = cljs.core.next(seq__47916__$1);
var np = first__47917__$1;
var nc = seq__47916__$2;
var node = vec__47915;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47920 = nn;
var G__47921 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47920,G__47921) : create_fn.call(null,G__47920,G__47921));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47922 = nn;
var G__47923 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47922,G__47923) : create_fn.call(null,G__47922,G__47923));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47925 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(1),null);
var seq__47928_48464 = cljs.core.seq(node_children);
var chunk__47929_48465 = null;
var count__47930_48466 = (0);
var i__47931_48467 = (0);
while(true){
if((i__47931_48467 < count__47930_48466)){
var child_struct_48468 = chunk__47929_48465.cljs$core$IIndexed$_nth$arity$2(null,i__47931_48467);
var children_48469 = shadow.dom.dom_node(child_struct_48468);
if(cljs.core.seq_QMARK_(children_48469)){
var seq__47955_48473 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48469));
var chunk__47957_48474 = null;
var count__47958_48475 = (0);
var i__47959_48476 = (0);
while(true){
if((i__47959_48476 < count__47958_48475)){
var child_48477 = chunk__47957_48474.cljs$core$IIndexed$_nth$arity$2(null,i__47959_48476);
if(cljs.core.truth_(child_48477)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48477);


var G__48478 = seq__47955_48473;
var G__48479 = chunk__47957_48474;
var G__48480 = count__47958_48475;
var G__48481 = (i__47959_48476 + (1));
seq__47955_48473 = G__48478;
chunk__47957_48474 = G__48479;
count__47958_48475 = G__48480;
i__47959_48476 = G__48481;
continue;
} else {
var G__48482 = seq__47955_48473;
var G__48483 = chunk__47957_48474;
var G__48484 = count__47958_48475;
var G__48485 = (i__47959_48476 + (1));
seq__47955_48473 = G__48482;
chunk__47957_48474 = G__48483;
count__47958_48475 = G__48484;
i__47959_48476 = G__48485;
continue;
}
} else {
var temp__5735__auto___48486 = cljs.core.seq(seq__47955_48473);
if(temp__5735__auto___48486){
var seq__47955_48487__$1 = temp__5735__auto___48486;
if(cljs.core.chunked_seq_QMARK_(seq__47955_48487__$1)){
var c__4609__auto___48491 = cljs.core.chunk_first(seq__47955_48487__$1);
var G__48492 = cljs.core.chunk_rest(seq__47955_48487__$1);
var G__48493 = c__4609__auto___48491;
var G__48494 = cljs.core.count(c__4609__auto___48491);
var G__48495 = (0);
seq__47955_48473 = G__48492;
chunk__47957_48474 = G__48493;
count__47958_48475 = G__48494;
i__47959_48476 = G__48495;
continue;
} else {
var child_48496 = cljs.core.first(seq__47955_48487__$1);
if(cljs.core.truth_(child_48496)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48496);


var G__48497 = cljs.core.next(seq__47955_48487__$1);
var G__48498 = null;
var G__48499 = (0);
var G__48500 = (0);
seq__47955_48473 = G__48497;
chunk__47957_48474 = G__48498;
count__47958_48475 = G__48499;
i__47959_48476 = G__48500;
continue;
} else {
var G__48501 = cljs.core.next(seq__47955_48487__$1);
var G__48502 = null;
var G__48503 = (0);
var G__48504 = (0);
seq__47955_48473 = G__48501;
chunk__47957_48474 = G__48502;
count__47958_48475 = G__48503;
i__47959_48476 = G__48504;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48469);
}


var G__48506 = seq__47928_48464;
var G__48507 = chunk__47929_48465;
var G__48508 = count__47930_48466;
var G__48509 = (i__47931_48467 + (1));
seq__47928_48464 = G__48506;
chunk__47929_48465 = G__48507;
count__47930_48466 = G__48508;
i__47931_48467 = G__48509;
continue;
} else {
var temp__5735__auto___48511 = cljs.core.seq(seq__47928_48464);
if(temp__5735__auto___48511){
var seq__47928_48512__$1 = temp__5735__auto___48511;
if(cljs.core.chunked_seq_QMARK_(seq__47928_48512__$1)){
var c__4609__auto___48513 = cljs.core.chunk_first(seq__47928_48512__$1);
var G__48515 = cljs.core.chunk_rest(seq__47928_48512__$1);
var G__48516 = c__4609__auto___48513;
var G__48517 = cljs.core.count(c__4609__auto___48513);
var G__48518 = (0);
seq__47928_48464 = G__48515;
chunk__47929_48465 = G__48516;
count__47930_48466 = G__48517;
i__47931_48467 = G__48518;
continue;
} else {
var child_struct_48520 = cljs.core.first(seq__47928_48512__$1);
var children_48521 = shadow.dom.dom_node(child_struct_48520);
if(cljs.core.seq_QMARK_(children_48521)){
var seq__47966_48522 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48521));
var chunk__47968_48523 = null;
var count__47969_48524 = (0);
var i__47970_48525 = (0);
while(true){
if((i__47970_48525 < count__47969_48524)){
var child_48527 = chunk__47968_48523.cljs$core$IIndexed$_nth$arity$2(null,i__47970_48525);
if(cljs.core.truth_(child_48527)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48527);


var G__48529 = seq__47966_48522;
var G__48530 = chunk__47968_48523;
var G__48531 = count__47969_48524;
var G__48532 = (i__47970_48525 + (1));
seq__47966_48522 = G__48529;
chunk__47968_48523 = G__48530;
count__47969_48524 = G__48531;
i__47970_48525 = G__48532;
continue;
} else {
var G__48533 = seq__47966_48522;
var G__48534 = chunk__47968_48523;
var G__48535 = count__47969_48524;
var G__48536 = (i__47970_48525 + (1));
seq__47966_48522 = G__48533;
chunk__47968_48523 = G__48534;
count__47969_48524 = G__48535;
i__47970_48525 = G__48536;
continue;
}
} else {
var temp__5735__auto___48541__$1 = cljs.core.seq(seq__47966_48522);
if(temp__5735__auto___48541__$1){
var seq__47966_48542__$1 = temp__5735__auto___48541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47966_48542__$1)){
var c__4609__auto___48543 = cljs.core.chunk_first(seq__47966_48542__$1);
var G__48544 = cljs.core.chunk_rest(seq__47966_48542__$1);
var G__48545 = c__4609__auto___48543;
var G__48546 = cljs.core.count(c__4609__auto___48543);
var G__48547 = (0);
seq__47966_48522 = G__48544;
chunk__47968_48523 = G__48545;
count__47969_48524 = G__48546;
i__47970_48525 = G__48547;
continue;
} else {
var child_48551 = cljs.core.first(seq__47966_48542__$1);
if(cljs.core.truth_(child_48551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48551);


var G__48554 = cljs.core.next(seq__47966_48542__$1);
var G__48555 = null;
var G__48556 = (0);
var G__48557 = (0);
seq__47966_48522 = G__48554;
chunk__47968_48523 = G__48555;
count__47969_48524 = G__48556;
i__47970_48525 = G__48557;
continue;
} else {
var G__48558 = cljs.core.next(seq__47966_48542__$1);
var G__48559 = null;
var G__48560 = (0);
var G__48561 = (0);
seq__47966_48522 = G__48558;
chunk__47968_48523 = G__48559;
count__47969_48524 = G__48560;
i__47970_48525 = G__48561;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48521);
}


var G__48563 = cljs.core.next(seq__47928_48512__$1);
var G__48564 = null;
var G__48565 = (0);
var G__48566 = (0);
seq__47928_48464 = G__48563;
chunk__47929_48465 = G__48564;
count__47930_48466 = G__48565;
i__47931_48467 = G__48566;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__47986 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47986);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47988 = cljs.core.seq(node);
var chunk__47989 = null;
var count__47990 = (0);
var i__47991 = (0);
while(true){
if((i__47991 < count__47990)){
var n = chunk__47989.cljs$core$IIndexed$_nth$arity$2(null,i__47991);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48578 = seq__47988;
var G__48579 = chunk__47989;
var G__48580 = count__47990;
var G__48581 = (i__47991 + (1));
seq__47988 = G__48578;
chunk__47989 = G__48579;
count__47990 = G__48580;
i__47991 = G__48581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47988);
if(temp__5735__auto__){
var seq__47988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47988__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47988__$1);
var G__48582 = cljs.core.chunk_rest(seq__47988__$1);
var G__48583 = c__4609__auto__;
var G__48584 = cljs.core.count(c__4609__auto__);
var G__48585 = (0);
seq__47988 = G__48582;
chunk__47989 = G__48583;
count__47990 = G__48584;
i__47991 = G__48585;
continue;
} else {
var n = cljs.core.first(seq__47988__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48586 = cljs.core.next(seq__47988__$1);
var G__48587 = null;
var G__48588 = (0);
var G__48589 = (0);
seq__47988 = G__48586;
chunk__47989 = G__48587;
count__47990 = G__48588;
i__47991 = G__48589;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__47992 = shadow.dom.dom_node(new$);
var G__47993 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47992,G__47993);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47995 = arguments.length;
switch (G__47995) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47997 = arguments.length;
switch (G__47997) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48003 = arguments.length;
switch (G__48003) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48611 = arguments.length;
var i__4790__auto___48612 = (0);
while(true){
if((i__4790__auto___48612 < len__4789__auto___48611)){
args__4795__auto__.push((arguments[i__4790__auto___48612]));

var G__48613 = (i__4790__auto___48612 + (1));
i__4790__auto___48612 = G__48613;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48015_48615 = cljs.core.seq(nodes);
var chunk__48016_48616 = null;
var count__48017_48617 = (0);
var i__48018_48618 = (0);
while(true){
if((i__48018_48618 < count__48017_48617)){
var node_48620 = chunk__48016_48616.cljs$core$IIndexed$_nth$arity$2(null,i__48018_48618);
fragment.appendChild(shadow.dom._to_dom(node_48620));


var G__48624 = seq__48015_48615;
var G__48625 = chunk__48016_48616;
var G__48626 = count__48017_48617;
var G__48627 = (i__48018_48618 + (1));
seq__48015_48615 = G__48624;
chunk__48016_48616 = G__48625;
count__48017_48617 = G__48626;
i__48018_48618 = G__48627;
continue;
} else {
var temp__5735__auto___48629 = cljs.core.seq(seq__48015_48615);
if(temp__5735__auto___48629){
var seq__48015_48630__$1 = temp__5735__auto___48629;
if(cljs.core.chunked_seq_QMARK_(seq__48015_48630__$1)){
var c__4609__auto___48631 = cljs.core.chunk_first(seq__48015_48630__$1);
var G__48632 = cljs.core.chunk_rest(seq__48015_48630__$1);
var G__48633 = c__4609__auto___48631;
var G__48634 = cljs.core.count(c__4609__auto___48631);
var G__48635 = (0);
seq__48015_48615 = G__48632;
chunk__48016_48616 = G__48633;
count__48017_48617 = G__48634;
i__48018_48618 = G__48635;
continue;
} else {
var node_48637 = cljs.core.first(seq__48015_48630__$1);
fragment.appendChild(shadow.dom._to_dom(node_48637));


var G__48638 = cljs.core.next(seq__48015_48630__$1);
var G__48639 = null;
var G__48640 = (0);
var G__48641 = (0);
seq__48015_48615 = G__48638;
chunk__48016_48616 = G__48639;
count__48017_48617 = G__48640;
i__48018_48618 = G__48641;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48013){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48013));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48025_48643 = cljs.core.seq(scripts);
var chunk__48026_48644 = null;
var count__48027_48645 = (0);
var i__48028_48646 = (0);
while(true){
if((i__48028_48646 < count__48027_48645)){
var vec__48036_48647 = chunk__48026_48644.cljs$core$IIndexed$_nth$arity$2(null,i__48028_48646);
var script_tag_48648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48036_48647,(0),null);
var script_body_48649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48036_48647,(1),null);
eval(script_body_48649);


var G__48651 = seq__48025_48643;
var G__48652 = chunk__48026_48644;
var G__48653 = count__48027_48645;
var G__48654 = (i__48028_48646 + (1));
seq__48025_48643 = G__48651;
chunk__48026_48644 = G__48652;
count__48027_48645 = G__48653;
i__48028_48646 = G__48654;
continue;
} else {
var temp__5735__auto___48656 = cljs.core.seq(seq__48025_48643);
if(temp__5735__auto___48656){
var seq__48025_48657__$1 = temp__5735__auto___48656;
if(cljs.core.chunked_seq_QMARK_(seq__48025_48657__$1)){
var c__4609__auto___48658 = cljs.core.chunk_first(seq__48025_48657__$1);
var G__48660 = cljs.core.chunk_rest(seq__48025_48657__$1);
var G__48661 = c__4609__auto___48658;
var G__48662 = cljs.core.count(c__4609__auto___48658);
var G__48663 = (0);
seq__48025_48643 = G__48660;
chunk__48026_48644 = G__48661;
count__48027_48645 = G__48662;
i__48028_48646 = G__48663;
continue;
} else {
var vec__48039_48665 = cljs.core.first(seq__48025_48657__$1);
var script_tag_48666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48039_48665,(0),null);
var script_body_48667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48039_48665,(1),null);
eval(script_body_48667);


var G__48670 = cljs.core.next(seq__48025_48657__$1);
var G__48671 = null;
var G__48672 = (0);
var G__48673 = (0);
seq__48025_48643 = G__48670;
chunk__48026_48644 = G__48671;
count__48027_48645 = G__48672;
i__48028_48646 = G__48673;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48044){
var vec__48045 = p__48044;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48045,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48045,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48050 = shadow.dom.dom_node(el);
var G__48051 = cls;
return goog.dom.getAncestorByClass(G__48050,G__48051);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48054 = arguments.length;
switch (G__48054) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48059 = shadow.dom.dom_node(el);
var G__48060 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48059,G__48060);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48063 = shadow.dom.dom_node(el);
var G__48064 = cljs.core.name(tag);
var G__48065 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48063,G__48064,G__48065);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48066 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48066);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48068 = shadow.dom.dom_node(dom);
var G__48069 = value;
return goog.dom.forms.setValue(G__48068,G__48069);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48077 = cljs.core.seq(style_keys);
var chunk__48078 = null;
var count__48079 = (0);
var i__48080 = (0);
while(true){
if((i__48080 < count__48079)){
var it = chunk__48078.cljs$core$IIndexed$_nth$arity$2(null,i__48080);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48687 = seq__48077;
var G__48688 = chunk__48078;
var G__48689 = count__48079;
var G__48690 = (i__48080 + (1));
seq__48077 = G__48687;
chunk__48078 = G__48688;
count__48079 = G__48689;
i__48080 = G__48690;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48077);
if(temp__5735__auto__){
var seq__48077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48077__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48077__$1);
var G__48691 = cljs.core.chunk_rest(seq__48077__$1);
var G__48692 = c__4609__auto__;
var G__48693 = cljs.core.count(c__4609__auto__);
var G__48694 = (0);
seq__48077 = G__48691;
chunk__48078 = G__48692;
count__48079 = G__48693;
i__48080 = G__48694;
continue;
} else {
var it = cljs.core.first(seq__48077__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48696 = cljs.core.next(seq__48077__$1);
var G__48697 = null;
var G__48698 = (0);
var G__48699 = (0);
seq__48077 = G__48696;
chunk__48078 = G__48697;
count__48079 = G__48698;
i__48080 = G__48699;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48089,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48097 = k48089;
var G__48097__$1 = (((G__48097 instanceof cljs.core.Keyword))?G__48097.fqn:null);
switch (G__48097__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48089,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48098){
var vec__48100 = p__48098;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48088){
var self__ = this;
var G__48088__$1 = this;
return (new cljs.core.RecordIter((0),G__48088__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48109 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48109(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48090,other48091){
var self__ = this;
var this48090__$1 = this;
return (((!((other48091 == null)))) && ((this48090__$1.constructor === other48091.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48090__$1.x,other48091.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48090__$1.y,other48091.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48090__$1.__extmap,other48091.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48088){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48110 = cljs.core.keyword_identical_QMARK_;
var expr__48111 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48113 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48114 = expr__48111;
return (pred__48110.cljs$core$IFn$_invoke$arity$2 ? pred__48110.cljs$core$IFn$_invoke$arity$2(G__48113,G__48114) : pred__48110.call(null,G__48113,G__48114));
})())){
return (new shadow.dom.Coordinate(G__48088,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48115 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48116 = expr__48111;
return (pred__48110.cljs$core$IFn$_invoke$arity$2 ? pred__48110.cljs$core$IFn$_invoke$arity$2(G__48115,G__48116) : pred__48110.call(null,G__48115,G__48116));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48088,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48088),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48088){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48088,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48093){
var extmap__4478__auto__ = (function (){var G__48117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48093,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48093)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48117);
} else {
return G__48117;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48093),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48093),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48121 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48121);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48122 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48122);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48126 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48126);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48128,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48132 = k48128;
var G__48132__$1 = (((G__48132 instanceof cljs.core.Keyword))?G__48132.fqn:null);
switch (G__48132__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48128,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48133){
var vec__48134 = p__48133;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48127){
var self__ = this;
var G__48127__$1 = this;
return (new cljs.core.RecordIter((0),G__48127__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48137 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48137(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48129,other48130){
var self__ = this;
var this48129__$1 = this;
return (((!((other48130 == null)))) && ((this48129__$1.constructor === other48130.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48129__$1.w,other48130.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48129__$1.h,other48130.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48129__$1.__extmap,other48130.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48127){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48138 = cljs.core.keyword_identical_QMARK_;
var expr__48139 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48141 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48142 = expr__48139;
return (pred__48138.cljs$core$IFn$_invoke$arity$2 ? pred__48138.cljs$core$IFn$_invoke$arity$2(G__48141,G__48142) : pred__48138.call(null,G__48141,G__48142));
})())){
return (new shadow.dom.Size(G__48127,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48144 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48145 = expr__48139;
return (pred__48138.cljs$core$IFn$_invoke$arity$2 ? pred__48138.cljs$core$IFn$_invoke$arity$2(G__48144,G__48145) : pred__48138.call(null,G__48144,G__48145));
})())){
return (new shadow.dom.Size(self__.w,G__48127,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48127),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48127){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48127,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48131){
var extmap__4478__auto__ = (function (){var G__48154 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48131,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48131)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48154);
} else {
return G__48154;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48131),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48131),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48158 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48158);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48771 = (i + (1));
var G__48773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48771;
ret = G__48773;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48174){
var vec__48175 = p__48174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48175,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48182 = arguments.length;
switch (G__48182) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48191_48785 = new_node;
var G__48192_48786 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48191_48785,G__48192_48786);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48195_48787 = new_node;
var G__48196_48788 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48195_48787,G__48196_48788);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48792 = ps;
var G__48793 = (i + (1));
el__$1 = G__48792;
i = G__48793;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48203 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48203);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48208 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48208);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48210 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48210);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48212 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48212,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48212,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48212,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48216_48800 = cljs.core.seq(props);
var chunk__48217_48801 = null;
var count__48218_48802 = (0);
var i__48219_48803 = (0);
while(true){
if((i__48219_48803 < count__48218_48802)){
var vec__48226_48804 = chunk__48217_48801.cljs$core$IIndexed$_nth$arity$2(null,i__48219_48803);
var k_48805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226_48804,(0),null);
var v_48806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226_48804,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48805);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48805),v_48806);


var G__48809 = seq__48216_48800;
var G__48810 = chunk__48217_48801;
var G__48811 = count__48218_48802;
var G__48812 = (i__48219_48803 + (1));
seq__48216_48800 = G__48809;
chunk__48217_48801 = G__48810;
count__48218_48802 = G__48811;
i__48219_48803 = G__48812;
continue;
} else {
var temp__5735__auto___48813 = cljs.core.seq(seq__48216_48800);
if(temp__5735__auto___48813){
var seq__48216_48814__$1 = temp__5735__auto___48813;
if(cljs.core.chunked_seq_QMARK_(seq__48216_48814__$1)){
var c__4609__auto___48815 = cljs.core.chunk_first(seq__48216_48814__$1);
var G__48816 = cljs.core.chunk_rest(seq__48216_48814__$1);
var G__48817 = c__4609__auto___48815;
var G__48818 = cljs.core.count(c__4609__auto___48815);
var G__48819 = (0);
seq__48216_48800 = G__48816;
chunk__48217_48801 = G__48817;
count__48218_48802 = G__48818;
i__48219_48803 = G__48819;
continue;
} else {
var vec__48230_48820 = cljs.core.first(seq__48216_48814__$1);
var k_48821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48230_48820,(0),null);
var v_48822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48230_48820,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48821);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48821),v_48822);


var G__48824 = cljs.core.next(seq__48216_48814__$1);
var G__48825 = null;
var G__48826 = (0);
var G__48827 = (0);
seq__48216_48800 = G__48824;
chunk__48217_48801 = G__48825;
count__48218_48802 = G__48826;
i__48219_48803 = G__48827;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48234 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48234,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48234,(1),null);
var seq__48238_48828 = cljs.core.seq(node_children);
var chunk__48240_48829 = null;
var count__48241_48830 = (0);
var i__48242_48831 = (0);
while(true){
if((i__48242_48831 < count__48241_48830)){
var child_struct_48832 = chunk__48240_48829.cljs$core$IIndexed$_nth$arity$2(null,i__48242_48831);
if((!((child_struct_48832 == null)))){
if(typeof child_struct_48832 === 'string'){
var text_48833 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48833),child_struct_48832].join(''));
} else {
var children_48834 = shadow.dom.svg_node(child_struct_48832);
if(cljs.core.seq_QMARK_(children_48834)){
var seq__48264_48835 = cljs.core.seq(children_48834);
var chunk__48266_48836 = null;
var count__48267_48837 = (0);
var i__48268_48838 = (0);
while(true){
if((i__48268_48838 < count__48267_48837)){
var child_48839 = chunk__48266_48836.cljs$core$IIndexed$_nth$arity$2(null,i__48268_48838);
if(cljs.core.truth_(child_48839)){
node.appendChild(child_48839);


var G__48840 = seq__48264_48835;
var G__48841 = chunk__48266_48836;
var G__48842 = count__48267_48837;
var G__48843 = (i__48268_48838 + (1));
seq__48264_48835 = G__48840;
chunk__48266_48836 = G__48841;
count__48267_48837 = G__48842;
i__48268_48838 = G__48843;
continue;
} else {
var G__48844 = seq__48264_48835;
var G__48845 = chunk__48266_48836;
var G__48846 = count__48267_48837;
var G__48847 = (i__48268_48838 + (1));
seq__48264_48835 = G__48844;
chunk__48266_48836 = G__48845;
count__48267_48837 = G__48846;
i__48268_48838 = G__48847;
continue;
}
} else {
var temp__5735__auto___48848 = cljs.core.seq(seq__48264_48835);
if(temp__5735__auto___48848){
var seq__48264_48849__$1 = temp__5735__auto___48848;
if(cljs.core.chunked_seq_QMARK_(seq__48264_48849__$1)){
var c__4609__auto___48850 = cljs.core.chunk_first(seq__48264_48849__$1);
var G__48854 = cljs.core.chunk_rest(seq__48264_48849__$1);
var G__48855 = c__4609__auto___48850;
var G__48856 = cljs.core.count(c__4609__auto___48850);
var G__48857 = (0);
seq__48264_48835 = G__48854;
chunk__48266_48836 = G__48855;
count__48267_48837 = G__48856;
i__48268_48838 = G__48857;
continue;
} else {
var child_48858 = cljs.core.first(seq__48264_48849__$1);
if(cljs.core.truth_(child_48858)){
node.appendChild(child_48858);


var G__48859 = cljs.core.next(seq__48264_48849__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__48264_48835 = G__48859;
chunk__48266_48836 = G__48860;
count__48267_48837 = G__48861;
i__48268_48838 = G__48862;
continue;
} else {
var G__48863 = cljs.core.next(seq__48264_48849__$1);
var G__48864 = null;
var G__48865 = (0);
var G__48866 = (0);
seq__48264_48835 = G__48863;
chunk__48266_48836 = G__48864;
count__48267_48837 = G__48865;
i__48268_48838 = G__48866;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48834);
}
}


var G__48867 = seq__48238_48828;
var G__48868 = chunk__48240_48829;
var G__48869 = count__48241_48830;
var G__48870 = (i__48242_48831 + (1));
seq__48238_48828 = G__48867;
chunk__48240_48829 = G__48868;
count__48241_48830 = G__48869;
i__48242_48831 = G__48870;
continue;
} else {
var G__48871 = seq__48238_48828;
var G__48872 = chunk__48240_48829;
var G__48873 = count__48241_48830;
var G__48874 = (i__48242_48831 + (1));
seq__48238_48828 = G__48871;
chunk__48240_48829 = G__48872;
count__48241_48830 = G__48873;
i__48242_48831 = G__48874;
continue;
}
} else {
var temp__5735__auto___48875 = cljs.core.seq(seq__48238_48828);
if(temp__5735__auto___48875){
var seq__48238_48876__$1 = temp__5735__auto___48875;
if(cljs.core.chunked_seq_QMARK_(seq__48238_48876__$1)){
var c__4609__auto___48877 = cljs.core.chunk_first(seq__48238_48876__$1);
var G__48878 = cljs.core.chunk_rest(seq__48238_48876__$1);
var G__48879 = c__4609__auto___48877;
var G__48880 = cljs.core.count(c__4609__auto___48877);
var G__48881 = (0);
seq__48238_48828 = G__48878;
chunk__48240_48829 = G__48879;
count__48241_48830 = G__48880;
i__48242_48831 = G__48881;
continue;
} else {
var child_struct_48882 = cljs.core.first(seq__48238_48876__$1);
if((!((child_struct_48882 == null)))){
if(typeof child_struct_48882 === 'string'){
var text_48883 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48883),child_struct_48882].join(''));
} else {
var children_48884 = shadow.dom.svg_node(child_struct_48882);
if(cljs.core.seq_QMARK_(children_48884)){
var seq__48278_48885 = cljs.core.seq(children_48884);
var chunk__48280_48886 = null;
var count__48281_48887 = (0);
var i__48282_48888 = (0);
while(true){
if((i__48282_48888 < count__48281_48887)){
var child_48889 = chunk__48280_48886.cljs$core$IIndexed$_nth$arity$2(null,i__48282_48888);
if(cljs.core.truth_(child_48889)){
node.appendChild(child_48889);


var G__48891 = seq__48278_48885;
var G__48892 = chunk__48280_48886;
var G__48893 = count__48281_48887;
var G__48894 = (i__48282_48888 + (1));
seq__48278_48885 = G__48891;
chunk__48280_48886 = G__48892;
count__48281_48887 = G__48893;
i__48282_48888 = G__48894;
continue;
} else {
var G__48895 = seq__48278_48885;
var G__48896 = chunk__48280_48886;
var G__48897 = count__48281_48887;
var G__48898 = (i__48282_48888 + (1));
seq__48278_48885 = G__48895;
chunk__48280_48886 = G__48896;
count__48281_48887 = G__48897;
i__48282_48888 = G__48898;
continue;
}
} else {
var temp__5735__auto___48899__$1 = cljs.core.seq(seq__48278_48885);
if(temp__5735__auto___48899__$1){
var seq__48278_48904__$1 = temp__5735__auto___48899__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48278_48904__$1)){
var c__4609__auto___48905 = cljs.core.chunk_first(seq__48278_48904__$1);
var G__48909 = cljs.core.chunk_rest(seq__48278_48904__$1);
var G__48910 = c__4609__auto___48905;
var G__48911 = cljs.core.count(c__4609__auto___48905);
var G__48912 = (0);
seq__48278_48885 = G__48909;
chunk__48280_48886 = G__48910;
count__48281_48887 = G__48911;
i__48282_48888 = G__48912;
continue;
} else {
var child_48913 = cljs.core.first(seq__48278_48904__$1);
if(cljs.core.truth_(child_48913)){
node.appendChild(child_48913);


var G__48914 = cljs.core.next(seq__48278_48904__$1);
var G__48915 = null;
var G__48916 = (0);
var G__48917 = (0);
seq__48278_48885 = G__48914;
chunk__48280_48886 = G__48915;
count__48281_48887 = G__48916;
i__48282_48888 = G__48917;
continue;
} else {
var G__48918 = cljs.core.next(seq__48278_48904__$1);
var G__48919 = null;
var G__48920 = (0);
var G__48921 = (0);
seq__48278_48885 = G__48918;
chunk__48280_48886 = G__48919;
count__48281_48887 = G__48920;
i__48282_48888 = G__48921;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48884);
}
}


var G__48922 = cljs.core.next(seq__48238_48876__$1);
var G__48923 = null;
var G__48924 = (0);
var G__48925 = (0);
seq__48238_48828 = G__48922;
chunk__48240_48829 = G__48923;
count__48241_48830 = G__48924;
i__48242_48831 = G__48925;
continue;
} else {
var G__48929 = cljs.core.next(seq__48238_48876__$1);
var G__48930 = null;
var G__48931 = (0);
var G__48932 = (0);
seq__48238_48828 = G__48929;
chunk__48240_48829 = G__48930;
count__48241_48830 = G__48931;
i__48242_48831 = G__48932;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48290_48933 = shadow.dom._to_svg;
var G__48291_48934 = "string";
var G__48292_48935 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48290_48933,G__48291_48934,G__48292_48935);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48295_48939 = shadow.dom._to_svg;
var G__48296_48940 = "null";
var G__48297_48941 = (function (_){
return null;
});
goog.object.set(G__48295_48939,G__48296_48940,G__48297_48941);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48945 = arguments.length;
var i__4790__auto___48946 = (0);
while(true){
if((i__4790__auto___48946 < len__4789__auto___48945)){
args__4795__auto__.push((arguments[i__4790__auto___48946]));

var G__48947 = (i__4790__auto___48946 + (1));
i__4790__auto___48946 = G__48947;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48299){
var G__48300 = cljs.core.first(seq48299);
var seq48299__$1 = cljs.core.next(seq48299);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48300,seq48299__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48306 = arguments.length;
switch (G__48306) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48310_48953 = shadow.dom.dom_node(el);
var G__48311_48954 = cljs.core.name(event);
var G__48312_48955 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48310_48953,G__48311_48954,G__48312_48955) : shadow.dom.dom_listen.call(null,G__48310_48953,G__48311_48954,G__48312_48955));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46106__auto___48956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_48318){
var state_val_48319 = (state_48318[(1)]);
if((state_val_48319 === (1))){
var state_48318__$1 = state_48318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48318__$1,(2),once_or_cleanup);
} else {
if((state_val_48319 === (2))){
var inst_48315 = (state_48318[(2)]);
var inst_48316 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48318__$1 = (function (){var statearr_48321 = state_48318;
(statearr_48321[(7)] = inst_48315);

return statearr_48321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48318__$1,inst_48316);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46006__auto__ = null;
var shadow$dom$state_machine__46006__auto____0 = (function (){
var statearr_48322 = [null,null,null,null,null,null,null,null];
(statearr_48322[(0)] = shadow$dom$state_machine__46006__auto__);

(statearr_48322[(1)] = (1));

return statearr_48322;
});
var shadow$dom$state_machine__46006__auto____1 = (function (state_48318){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_48318);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e48323){if((e48323 instanceof Object)){
var ex__46009__auto__ = e48323;
var statearr_48324_48963 = state_48318;
(statearr_48324_48963[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48964 = state_48318;
state_48318 = G__48964;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
shadow$dom$state_machine__46006__auto__ = function(state_48318){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46006__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46006__auto____1.call(this,state_48318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46006__auto____0;
shadow$dom$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46006__auto____1;
return shadow$dom$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_48326 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_48326[(6)] = c__46106__auto___48956);

return statearr_48326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
