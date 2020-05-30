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
return cljs.core.cons((coll[idx]),(function (){var G__47716 = coll;
var G__47717 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47716,G__47717) : shadow.dom.lazy_native_coll_seq.call(null,G__47716,G__47717));
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
var G__47735 = arguments.length;
switch (G__47735) {
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
var G__47740 = arguments.length;
switch (G__47740) {
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
var G__47742 = arguments.length;
switch (G__47742) {
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
var G__47744 = arguments.length;
switch (G__47744) {
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
var G__47748 = arguments.length;
switch (G__47748) {
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
var G__47749 = document;
var G__47750 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47749,G__47750);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47751 = shadow.dom.dom_node(parent);
var G__47752 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47751,G__47752);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47753 = shadow.dom.dom_node(el);
var G__47754 = cls;
return goog.dom.classlist.add(G__47753,G__47754);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47755 = shadow.dom.dom_node(el);
var G__47756 = cls;
return goog.dom.classlist.remove(G__47755,G__47756);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47758 = arguments.length;
switch (G__47758) {
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
var G__47760 = shadow.dom.dom_node(el);
var G__47761 = cls;
return goog.dom.classlist.toggle(G__47760,G__47761);
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
}catch (e47763){if((e47763 instanceof Object)){
var e = e47763;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47763;

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
var seq__47764 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47765 = null;
var count__47766 = (0);
var i__47767 = (0);
while(true){
if((i__47767 < count__47766)){
var el = chunk__47765.cljs$core$IIndexed$_nth$arity$2(null,i__47767);
var handler_48352__$1 = ((function (seq__47764,chunk__47765,count__47766,i__47767,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47764,chunk__47765,count__47766,i__47767,el))
;
var G__47777_48353 = el;
var G__47778_48354 = cljs.core.name(ev);
var G__47779_48355 = handler_48352__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47777_48353,G__47778_48354,G__47779_48355) : shadow.dom.dom_listen.call(null,G__47777_48353,G__47778_48354,G__47779_48355));


var G__48356 = seq__47764;
var G__48357 = chunk__47765;
var G__48358 = count__47766;
var G__48359 = (i__47767 + (1));
seq__47764 = G__48356;
chunk__47765 = G__48357;
count__47766 = G__48358;
i__47767 = G__48359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47764);
if(temp__5735__auto__){
var seq__47764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47764__$1);
var G__48360 = cljs.core.chunk_rest(seq__47764__$1);
var G__48361 = c__4609__auto__;
var G__48362 = cljs.core.count(c__4609__auto__);
var G__48363 = (0);
seq__47764 = G__48360;
chunk__47765 = G__48361;
count__47766 = G__48362;
i__47767 = G__48363;
continue;
} else {
var el = cljs.core.first(seq__47764__$1);
var handler_48365__$1 = ((function (seq__47764,chunk__47765,count__47766,i__47767,el,seq__47764__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47764,chunk__47765,count__47766,i__47767,el,seq__47764__$1,temp__5735__auto__))
;
var G__47781_48366 = el;
var G__47782_48367 = cljs.core.name(ev);
var G__47783_48368 = handler_48365__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47781_48366,G__47782_48367,G__47783_48368) : shadow.dom.dom_listen.call(null,G__47781_48366,G__47782_48367,G__47783_48368));


var G__48381 = cljs.core.next(seq__47764__$1);
var G__48382 = null;
var G__48383 = (0);
var G__48384 = (0);
seq__47764 = G__48381;
chunk__47765 = G__48382;
count__47766 = G__48383;
i__47767 = G__48384;
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
var G__47787 = arguments.length;
switch (G__47787) {
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
var G__47788 = shadow.dom.dom_node(el);
var G__47789 = cljs.core.name(ev);
var G__47790 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47788,G__47789,G__47790) : shadow.dom.dom_listen.call(null,G__47788,G__47789,G__47790));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47791 = shadow.dom.dom_node(el);
var G__47792 = cljs.core.name(ev);
var G__47793 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47791,G__47792,G__47793) : shadow.dom.dom_listen_remove.call(null,G__47791,G__47792,G__47793));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47798 = cljs.core.seq(events);
var chunk__47799 = null;
var count__47800 = (0);
var i__47801 = (0);
while(true){
if((i__47801 < count__47800)){
var vec__47811 = chunk__47799.cljs$core$IIndexed$_nth$arity$2(null,i__47801);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47811,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48394 = seq__47798;
var G__48395 = chunk__47799;
var G__48396 = count__47800;
var G__48397 = (i__47801 + (1));
seq__47798 = G__48394;
chunk__47799 = G__48395;
count__47800 = G__48396;
i__47801 = G__48397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47798);
if(temp__5735__auto__){
var seq__47798__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47798__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47798__$1);
var G__48398 = cljs.core.chunk_rest(seq__47798__$1);
var G__48399 = c__4609__auto__;
var G__48400 = cljs.core.count(c__4609__auto__);
var G__48401 = (0);
seq__47798 = G__48398;
chunk__47799 = G__48399;
count__47800 = G__48400;
i__47801 = G__48401;
continue;
} else {
var vec__47815 = cljs.core.first(seq__47798__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47815,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48405 = cljs.core.next(seq__47798__$1);
var G__48406 = null;
var G__48407 = (0);
var G__48408 = (0);
seq__47798 = G__48405;
chunk__47799 = G__48406;
count__47800 = G__48407;
i__47801 = G__48408;
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
var seq__47819 = cljs.core.seq(styles);
var chunk__47820 = null;
var count__47821 = (0);
var i__47822 = (0);
while(true){
if((i__47822 < count__47821)){
var vec__47837 = chunk__47820.cljs$core$IIndexed$_nth$arity$2(null,i__47822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(1),null);
var G__47840_48414 = dom;
var G__47841_48415 = cljs.core.name(k);
var G__47842_48416 = (((v == null))?"":v);
goog.style.setStyle(G__47840_48414,G__47841_48415,G__47842_48416);


var G__48418 = seq__47819;
var G__48419 = chunk__47820;
var G__48420 = count__47821;
var G__48421 = (i__47822 + (1));
seq__47819 = G__48418;
chunk__47820 = G__48419;
count__47821 = G__48420;
i__47822 = G__48421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47819);
if(temp__5735__auto__){
var seq__47819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47819__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47819__$1);
var G__48424 = cljs.core.chunk_rest(seq__47819__$1);
var G__48425 = c__4609__auto__;
var G__48426 = cljs.core.count(c__4609__auto__);
var G__48427 = (0);
seq__47819 = G__48424;
chunk__47820 = G__48425;
count__47821 = G__48426;
i__47822 = G__48427;
continue;
} else {
var vec__47845 = cljs.core.first(seq__47819__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47845,(1),null);
var G__47850_48428 = dom;
var G__47851_48429 = cljs.core.name(k);
var G__47852_48430 = (((v == null))?"":v);
goog.style.setStyle(G__47850_48428,G__47851_48429,G__47852_48430);


var G__48432 = cljs.core.next(seq__47819__$1);
var G__48433 = null;
var G__48434 = (0);
var G__48435 = (0);
seq__47819 = G__48432;
chunk__47820 = G__48433;
count__47821 = G__48434;
i__47822 = G__48435;
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
var G__47854_48437 = key;
var G__47854_48438__$1 = (((G__47854_48437 instanceof cljs.core.Keyword))?G__47854_48437.fqn:null);
switch (G__47854_48438__$1) {
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
var ks_48444 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48444,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48444,"aria-");
}
})())){
el.setAttribute(ks_48444,value);
} else {
(el[ks_48444] = value);
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
var G__47860 = shadow.dom.dom_node(el);
var G__47861 = cls;
return goog.dom.classlist.contains(G__47860,G__47861);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47868){
var map__47869 = p__47868;
var map__47869__$1 = (((((!((map__47869 == null))))?(((((map__47869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47869):map__47869);
var props = map__47869__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47871 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47874 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47874,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47874;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47876 = arguments.length;
switch (G__47876) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47884){
var vec__47885 = p__47884;
var seq__47886 = cljs.core.seq(vec__47885);
var first__47887 = cljs.core.first(seq__47886);
var seq__47886__$1 = cljs.core.next(seq__47886);
var nn = first__47887;
var first__47887__$1 = cljs.core.first(seq__47886__$1);
var seq__47886__$2 = cljs.core.next(seq__47886__$1);
var np = first__47887__$1;
var nc = seq__47886__$2;
var node = vec__47885;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47890 = nn;
var G__47891 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47890,G__47891) : create_fn.call(null,G__47890,G__47891));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47893 = nn;
var G__47894 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47893,G__47894) : create_fn.call(null,G__47893,G__47894));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47898 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898,(1),null);
var seq__47901_48476 = cljs.core.seq(node_children);
var chunk__47902_48477 = null;
var count__47903_48478 = (0);
var i__47904_48479 = (0);
while(true){
if((i__47904_48479 < count__47903_48478)){
var child_struct_48480 = chunk__47902_48477.cljs$core$IIndexed$_nth$arity$2(null,i__47904_48479);
var children_48481 = shadow.dom.dom_node(child_struct_48480);
if(cljs.core.seq_QMARK_(children_48481)){
var seq__47924_48482 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48481));
var chunk__47926_48483 = null;
var count__47927_48484 = (0);
var i__47928_48485 = (0);
while(true){
if((i__47928_48485 < count__47927_48484)){
var child_48486 = chunk__47926_48483.cljs$core$IIndexed$_nth$arity$2(null,i__47928_48485);
if(cljs.core.truth_(child_48486)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48486);


var G__48487 = seq__47924_48482;
var G__48488 = chunk__47926_48483;
var G__48489 = count__47927_48484;
var G__48490 = (i__47928_48485 + (1));
seq__47924_48482 = G__48487;
chunk__47926_48483 = G__48488;
count__47927_48484 = G__48489;
i__47928_48485 = G__48490;
continue;
} else {
var G__48491 = seq__47924_48482;
var G__48492 = chunk__47926_48483;
var G__48493 = count__47927_48484;
var G__48494 = (i__47928_48485 + (1));
seq__47924_48482 = G__48491;
chunk__47926_48483 = G__48492;
count__47927_48484 = G__48493;
i__47928_48485 = G__48494;
continue;
}
} else {
var temp__5735__auto___48495 = cljs.core.seq(seq__47924_48482);
if(temp__5735__auto___48495){
var seq__47924_48496__$1 = temp__5735__auto___48495;
if(cljs.core.chunked_seq_QMARK_(seq__47924_48496__$1)){
var c__4609__auto___48497 = cljs.core.chunk_first(seq__47924_48496__$1);
var G__48498 = cljs.core.chunk_rest(seq__47924_48496__$1);
var G__48499 = c__4609__auto___48497;
var G__48500 = cljs.core.count(c__4609__auto___48497);
var G__48501 = (0);
seq__47924_48482 = G__48498;
chunk__47926_48483 = G__48499;
count__47927_48484 = G__48500;
i__47928_48485 = G__48501;
continue;
} else {
var child_48502 = cljs.core.first(seq__47924_48496__$1);
if(cljs.core.truth_(child_48502)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48502);


var G__48503 = cljs.core.next(seq__47924_48496__$1);
var G__48504 = null;
var G__48505 = (0);
var G__48506 = (0);
seq__47924_48482 = G__48503;
chunk__47926_48483 = G__48504;
count__47927_48484 = G__48505;
i__47928_48485 = G__48506;
continue;
} else {
var G__48510 = cljs.core.next(seq__47924_48496__$1);
var G__48511 = null;
var G__48512 = (0);
var G__48513 = (0);
seq__47924_48482 = G__48510;
chunk__47926_48483 = G__48511;
count__47927_48484 = G__48512;
i__47928_48485 = G__48513;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48481);
}


var G__48514 = seq__47901_48476;
var G__48515 = chunk__47902_48477;
var G__48516 = count__47903_48478;
var G__48517 = (i__47904_48479 + (1));
seq__47901_48476 = G__48514;
chunk__47902_48477 = G__48515;
count__47903_48478 = G__48516;
i__47904_48479 = G__48517;
continue;
} else {
var temp__5735__auto___48519 = cljs.core.seq(seq__47901_48476);
if(temp__5735__auto___48519){
var seq__47901_48521__$1 = temp__5735__auto___48519;
if(cljs.core.chunked_seq_QMARK_(seq__47901_48521__$1)){
var c__4609__auto___48522 = cljs.core.chunk_first(seq__47901_48521__$1);
var G__48523 = cljs.core.chunk_rest(seq__47901_48521__$1);
var G__48524 = c__4609__auto___48522;
var G__48525 = cljs.core.count(c__4609__auto___48522);
var G__48526 = (0);
seq__47901_48476 = G__48523;
chunk__47902_48477 = G__48524;
count__47903_48478 = G__48525;
i__47904_48479 = G__48526;
continue;
} else {
var child_struct_48527 = cljs.core.first(seq__47901_48521__$1);
var children_48528 = shadow.dom.dom_node(child_struct_48527);
if(cljs.core.seq_QMARK_(children_48528)){
var seq__47936_48530 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48528));
var chunk__47938_48531 = null;
var count__47939_48532 = (0);
var i__47940_48533 = (0);
while(true){
if((i__47940_48533 < count__47939_48532)){
var child_48535 = chunk__47938_48531.cljs$core$IIndexed$_nth$arity$2(null,i__47940_48533);
if(cljs.core.truth_(child_48535)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48535);


var G__48541 = seq__47936_48530;
var G__48542 = chunk__47938_48531;
var G__48543 = count__47939_48532;
var G__48544 = (i__47940_48533 + (1));
seq__47936_48530 = G__48541;
chunk__47938_48531 = G__48542;
count__47939_48532 = G__48543;
i__47940_48533 = G__48544;
continue;
} else {
var G__48548 = seq__47936_48530;
var G__48549 = chunk__47938_48531;
var G__48550 = count__47939_48532;
var G__48551 = (i__47940_48533 + (1));
seq__47936_48530 = G__48548;
chunk__47938_48531 = G__48549;
count__47939_48532 = G__48550;
i__47940_48533 = G__48551;
continue;
}
} else {
var temp__5735__auto___48553__$1 = cljs.core.seq(seq__47936_48530);
if(temp__5735__auto___48553__$1){
var seq__47936_48554__$1 = temp__5735__auto___48553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47936_48554__$1)){
var c__4609__auto___48555 = cljs.core.chunk_first(seq__47936_48554__$1);
var G__48557 = cljs.core.chunk_rest(seq__47936_48554__$1);
var G__48558 = c__4609__auto___48555;
var G__48559 = cljs.core.count(c__4609__auto___48555);
var G__48560 = (0);
seq__47936_48530 = G__48557;
chunk__47938_48531 = G__48558;
count__47939_48532 = G__48559;
i__47940_48533 = G__48560;
continue;
} else {
var child_48561 = cljs.core.first(seq__47936_48554__$1);
if(cljs.core.truth_(child_48561)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48561);


var G__48562 = cljs.core.next(seq__47936_48554__$1);
var G__48563 = null;
var G__48564 = (0);
var G__48565 = (0);
seq__47936_48530 = G__48562;
chunk__47938_48531 = G__48563;
count__47939_48532 = G__48564;
i__47940_48533 = G__48565;
continue;
} else {
var G__48568 = cljs.core.next(seq__47936_48554__$1);
var G__48569 = null;
var G__48570 = (0);
var G__48571 = (0);
seq__47936_48530 = G__48568;
chunk__47938_48531 = G__48569;
count__47939_48532 = G__48570;
i__47940_48533 = G__48571;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48528);
}


var G__48572 = cljs.core.next(seq__47901_48521__$1);
var G__48573 = null;
var G__48574 = (0);
var G__48575 = (0);
seq__47901_48476 = G__48572;
chunk__47902_48477 = G__48573;
count__47903_48478 = G__48574;
i__47904_48479 = G__48575;
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
var G__47956 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47956);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47959 = cljs.core.seq(node);
var chunk__47960 = null;
var count__47961 = (0);
var i__47962 = (0);
while(true){
if((i__47962 < count__47961)){
var n = chunk__47960.cljs$core$IIndexed$_nth$arity$2(null,i__47962);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48595 = seq__47959;
var G__48596 = chunk__47960;
var G__48597 = count__47961;
var G__48598 = (i__47962 + (1));
seq__47959 = G__48595;
chunk__47960 = G__48596;
count__47961 = G__48597;
i__47962 = G__48598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47959);
if(temp__5735__auto__){
var seq__47959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47959__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47959__$1);
var G__48599 = cljs.core.chunk_rest(seq__47959__$1);
var G__48600 = c__4609__auto__;
var G__48601 = cljs.core.count(c__4609__auto__);
var G__48602 = (0);
seq__47959 = G__48599;
chunk__47960 = G__48600;
count__47961 = G__48601;
i__47962 = G__48602;
continue;
} else {
var n = cljs.core.first(seq__47959__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48603 = cljs.core.next(seq__47959__$1);
var G__48604 = null;
var G__48605 = (0);
var G__48606 = (0);
seq__47959 = G__48603;
chunk__47960 = G__48604;
count__47961 = G__48605;
i__47962 = G__48606;
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
var G__47967 = shadow.dom.dom_node(new$);
var G__47968 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47967,G__47968);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47973 = arguments.length;
switch (G__47973) {
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
var G__47978 = arguments.length;
switch (G__47978) {
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
var G__47988 = arguments.length;
switch (G__47988) {
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
var len__4789__auto___48613 = arguments.length;
var i__4790__auto___48614 = (0);
while(true){
if((i__4790__auto___48614 < len__4789__auto___48613)){
args__4795__auto__.push((arguments[i__4790__auto___48614]));

var G__48615 = (i__4790__auto___48614 + (1));
i__4790__auto___48614 = G__48615;
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
var seq__48000_48616 = cljs.core.seq(nodes);
var chunk__48001_48617 = null;
var count__48002_48618 = (0);
var i__48003_48619 = (0);
while(true){
if((i__48003_48619 < count__48002_48618)){
var node_48620 = chunk__48001_48617.cljs$core$IIndexed$_nth$arity$2(null,i__48003_48619);
fragment.appendChild(shadow.dom._to_dom(node_48620));


var G__48621 = seq__48000_48616;
var G__48622 = chunk__48001_48617;
var G__48623 = count__48002_48618;
var G__48624 = (i__48003_48619 + (1));
seq__48000_48616 = G__48621;
chunk__48001_48617 = G__48622;
count__48002_48618 = G__48623;
i__48003_48619 = G__48624;
continue;
} else {
var temp__5735__auto___48626 = cljs.core.seq(seq__48000_48616);
if(temp__5735__auto___48626){
var seq__48000_48628__$1 = temp__5735__auto___48626;
if(cljs.core.chunked_seq_QMARK_(seq__48000_48628__$1)){
var c__4609__auto___48629 = cljs.core.chunk_first(seq__48000_48628__$1);
var G__48630 = cljs.core.chunk_rest(seq__48000_48628__$1);
var G__48631 = c__4609__auto___48629;
var G__48632 = cljs.core.count(c__4609__auto___48629);
var G__48633 = (0);
seq__48000_48616 = G__48630;
chunk__48001_48617 = G__48631;
count__48002_48618 = G__48632;
i__48003_48619 = G__48633;
continue;
} else {
var node_48634 = cljs.core.first(seq__48000_48628__$1);
fragment.appendChild(shadow.dom._to_dom(node_48634));


var G__48636 = cljs.core.next(seq__48000_48628__$1);
var G__48637 = null;
var G__48638 = (0);
var G__48639 = (0);
seq__48000_48616 = G__48636;
chunk__48001_48617 = G__48637;
count__48002_48618 = G__48638;
i__48003_48619 = G__48639;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47996){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47996));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48007_48640 = cljs.core.seq(scripts);
var chunk__48008_48641 = null;
var count__48009_48642 = (0);
var i__48010_48643 = (0);
while(true){
if((i__48010_48643 < count__48009_48642)){
var vec__48019_48648 = chunk__48008_48641.cljs$core$IIndexed$_nth$arity$2(null,i__48010_48643);
var script_tag_48649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48019_48648,(0),null);
var script_body_48650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48019_48648,(1),null);
eval(script_body_48650);


var G__48652 = seq__48007_48640;
var G__48653 = chunk__48008_48641;
var G__48654 = count__48009_48642;
var G__48655 = (i__48010_48643 + (1));
seq__48007_48640 = G__48652;
chunk__48008_48641 = G__48653;
count__48009_48642 = G__48654;
i__48010_48643 = G__48655;
continue;
} else {
var temp__5735__auto___48661 = cljs.core.seq(seq__48007_48640);
if(temp__5735__auto___48661){
var seq__48007_48662__$1 = temp__5735__auto___48661;
if(cljs.core.chunked_seq_QMARK_(seq__48007_48662__$1)){
var c__4609__auto___48663 = cljs.core.chunk_first(seq__48007_48662__$1);
var G__48664 = cljs.core.chunk_rest(seq__48007_48662__$1);
var G__48665 = c__4609__auto___48663;
var G__48666 = cljs.core.count(c__4609__auto___48663);
var G__48667 = (0);
seq__48007_48640 = G__48664;
chunk__48008_48641 = G__48665;
count__48009_48642 = G__48666;
i__48010_48643 = G__48667;
continue;
} else {
var vec__48023_48668 = cljs.core.first(seq__48007_48662__$1);
var script_tag_48669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023_48668,(0),null);
var script_body_48670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023_48668,(1),null);
eval(script_body_48670);


var G__48671 = cljs.core.next(seq__48007_48662__$1);
var G__48672 = null;
var G__48673 = (0);
var G__48674 = (0);
seq__48007_48640 = G__48671;
chunk__48008_48641 = G__48672;
count__48009_48642 = G__48673;
i__48010_48643 = G__48674;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48026){
var vec__48028 = p__48026;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48028,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48028,(1),null);
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
var G__48038 = shadow.dom.dom_node(el);
var G__48039 = cls;
return goog.dom.getAncestorByClass(G__48038,G__48039);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48045 = arguments.length;
switch (G__48045) {
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
var G__48047 = shadow.dom.dom_node(el);
var G__48048 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48047,G__48048);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48049 = shadow.dom.dom_node(el);
var G__48050 = cljs.core.name(tag);
var G__48051 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48049,G__48050,G__48051);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48054 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48054);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48055 = shadow.dom.dom_node(dom);
var G__48056 = value;
return goog.dom.forms.setValue(G__48055,G__48056);
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
var seq__48057 = cljs.core.seq(style_keys);
var chunk__48058 = null;
var count__48059 = (0);
var i__48060 = (0);
while(true){
if((i__48060 < count__48059)){
var it = chunk__48058.cljs$core$IIndexed$_nth$arity$2(null,i__48060);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48685 = seq__48057;
var G__48686 = chunk__48058;
var G__48687 = count__48059;
var G__48688 = (i__48060 + (1));
seq__48057 = G__48685;
chunk__48058 = G__48686;
count__48059 = G__48687;
i__48060 = G__48688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48057);
if(temp__5735__auto__){
var seq__48057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48057__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48057__$1);
var G__48691 = cljs.core.chunk_rest(seq__48057__$1);
var G__48692 = c__4609__auto__;
var G__48693 = cljs.core.count(c__4609__auto__);
var G__48694 = (0);
seq__48057 = G__48691;
chunk__48058 = G__48692;
count__48059 = G__48693;
i__48060 = G__48694;
continue;
} else {
var it = cljs.core.first(seq__48057__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48695 = cljs.core.next(seq__48057__$1);
var G__48696 = null;
var G__48697 = (0);
var G__48698 = (0);
seq__48057 = G__48695;
chunk__48058 = G__48696;
count__48059 = G__48697;
i__48060 = G__48698;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48062,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48067 = k48062;
var G__48067__$1 = (((G__48067 instanceof cljs.core.Keyword))?G__48067.fqn:null);
switch (G__48067__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48062,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48068){
var vec__48069 = p__48068;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48061){
var self__ = this;
var G__48061__$1 = this;
return (new cljs.core.RecordIter((0),G__48061__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48080 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48080(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48063,other48064){
var self__ = this;
var this48063__$1 = this;
return (((!((other48064 == null)))) && ((this48063__$1.constructor === other48064.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48063__$1.x,other48064.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48063__$1.y,other48064.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48063__$1.__extmap,other48064.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48061){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48086 = cljs.core.keyword_identical_QMARK_;
var expr__48087 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48089 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48090 = expr__48087;
return (pred__48086.cljs$core$IFn$_invoke$arity$2 ? pred__48086.cljs$core$IFn$_invoke$arity$2(G__48089,G__48090) : pred__48086.call(null,G__48089,G__48090));
})())){
return (new shadow.dom.Coordinate(G__48061,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48091 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48092 = expr__48087;
return (pred__48086.cljs$core$IFn$_invoke$arity$2 ? pred__48086.cljs$core$IFn$_invoke$arity$2(G__48091,G__48092) : pred__48086.call(null,G__48091,G__48092));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48061,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48061),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48061){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48061,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48065){
var extmap__4478__auto__ = (function (){var G__48100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48065,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48065)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48100);
} else {
return G__48100;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48065),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48065),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48104 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48104);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48106 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48106);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48110 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48110);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48115,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48123 = k48115;
var G__48123__$1 = (((G__48123 instanceof cljs.core.Keyword))?G__48123.fqn:null);
switch (G__48123__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48115,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48125){
var vec__48126 = p__48125;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48126,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48126,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48114){
var self__ = this;
var G__48114__$1 = this;
return (new cljs.core.RecordIter((0),G__48114__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48135 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48135(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48116,other48117){
var self__ = this;
var this48116__$1 = this;
return (((!((other48117 == null)))) && ((this48116__$1.constructor === other48117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.w,other48117.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.h,other48117.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.__extmap,other48117.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48114){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48141 = cljs.core.keyword_identical_QMARK_;
var expr__48142 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48145 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48146 = expr__48142;
return (pred__48141.cljs$core$IFn$_invoke$arity$2 ? pred__48141.cljs$core$IFn$_invoke$arity$2(G__48145,G__48146) : pred__48141.call(null,G__48145,G__48146));
})())){
return (new shadow.dom.Size(G__48114,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48147 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48148 = expr__48142;
return (pred__48141.cljs$core$IFn$_invoke$arity$2 ? pred__48141.cljs$core$IFn$_invoke$arity$2(G__48147,G__48148) : pred__48141.call(null,G__48147,G__48148));
})())){
return (new shadow.dom.Size(self__.w,G__48114,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48114),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48114){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48114,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48119){
var extmap__4478__auto__ = (function (){var G__48159 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48119,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48119)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48159);
} else {
return G__48159;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48119),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48119),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48160 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48160);
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
var G__48764 = (i + (1));
var G__48765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48764;
ret = G__48765;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48165){
var vec__48166 = p__48165;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48170 = arguments.length;
switch (G__48170) {
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
var G__48177_48769 = new_node;
var G__48178_48770 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48177_48769,G__48178_48770);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48179_48771 = new_node;
var G__48180_48772 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48179_48771,G__48180_48772);

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
var G__48774 = ps;
var G__48775 = (i + (1));
el__$1 = G__48774;
i = G__48775;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48181 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48181);
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
var G__48182 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48182);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48183 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48183);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48188 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48188,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48188,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48188,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48193_48789 = cljs.core.seq(props);
var chunk__48194_48790 = null;
var count__48195_48791 = (0);
var i__48196_48792 = (0);
while(true){
if((i__48196_48792 < count__48195_48791)){
var vec__48214_48793 = chunk__48194_48790.cljs$core$IIndexed$_nth$arity$2(null,i__48196_48792);
var k_48794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214_48793,(0),null);
var v_48795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214_48793,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48794);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48794),v_48795);


var G__48797 = seq__48193_48789;
var G__48798 = chunk__48194_48790;
var G__48799 = count__48195_48791;
var G__48800 = (i__48196_48792 + (1));
seq__48193_48789 = G__48797;
chunk__48194_48790 = G__48798;
count__48195_48791 = G__48799;
i__48196_48792 = G__48800;
continue;
} else {
var temp__5735__auto___48802 = cljs.core.seq(seq__48193_48789);
if(temp__5735__auto___48802){
var seq__48193_48803__$1 = temp__5735__auto___48802;
if(cljs.core.chunked_seq_QMARK_(seq__48193_48803__$1)){
var c__4609__auto___48804 = cljs.core.chunk_first(seq__48193_48803__$1);
var G__48805 = cljs.core.chunk_rest(seq__48193_48803__$1);
var G__48806 = c__4609__auto___48804;
var G__48807 = cljs.core.count(c__4609__auto___48804);
var G__48808 = (0);
seq__48193_48789 = G__48805;
chunk__48194_48790 = G__48806;
count__48195_48791 = G__48807;
i__48196_48792 = G__48808;
continue;
} else {
var vec__48221_48809 = cljs.core.first(seq__48193_48803__$1);
var k_48810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221_48809,(0),null);
var v_48811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221_48809,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48810);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48810),v_48811);


var G__48818 = cljs.core.next(seq__48193_48803__$1);
var G__48819 = null;
var G__48820 = (0);
var G__48821 = (0);
seq__48193_48789 = G__48818;
chunk__48194_48790 = G__48819;
count__48195_48791 = G__48820;
i__48196_48792 = G__48821;
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
var vec__48230 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48230,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48230,(1),null);
var seq__48234_48825 = cljs.core.seq(node_children);
var chunk__48236_48826 = null;
var count__48237_48827 = (0);
var i__48238_48828 = (0);
while(true){
if((i__48238_48828 < count__48237_48827)){
var child_struct_48829 = chunk__48236_48826.cljs$core$IIndexed$_nth$arity$2(null,i__48238_48828);
if((!((child_struct_48829 == null)))){
if(typeof child_struct_48829 === 'string'){
var text_48830 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48830),child_struct_48829].join(''));
} else {
var children_48831 = shadow.dom.svg_node(child_struct_48829);
if(cljs.core.seq_QMARK_(children_48831)){
var seq__48273_48833 = cljs.core.seq(children_48831);
var chunk__48275_48834 = null;
var count__48276_48835 = (0);
var i__48277_48836 = (0);
while(true){
if((i__48277_48836 < count__48276_48835)){
var child_48837 = chunk__48275_48834.cljs$core$IIndexed$_nth$arity$2(null,i__48277_48836);
if(cljs.core.truth_(child_48837)){
node.appendChild(child_48837);


var G__48838 = seq__48273_48833;
var G__48839 = chunk__48275_48834;
var G__48840 = count__48276_48835;
var G__48841 = (i__48277_48836 + (1));
seq__48273_48833 = G__48838;
chunk__48275_48834 = G__48839;
count__48276_48835 = G__48840;
i__48277_48836 = G__48841;
continue;
} else {
var G__48843 = seq__48273_48833;
var G__48844 = chunk__48275_48834;
var G__48845 = count__48276_48835;
var G__48846 = (i__48277_48836 + (1));
seq__48273_48833 = G__48843;
chunk__48275_48834 = G__48844;
count__48276_48835 = G__48845;
i__48277_48836 = G__48846;
continue;
}
} else {
var temp__5735__auto___48848 = cljs.core.seq(seq__48273_48833);
if(temp__5735__auto___48848){
var seq__48273_48850__$1 = temp__5735__auto___48848;
if(cljs.core.chunked_seq_QMARK_(seq__48273_48850__$1)){
var c__4609__auto___48851 = cljs.core.chunk_first(seq__48273_48850__$1);
var G__48852 = cljs.core.chunk_rest(seq__48273_48850__$1);
var G__48853 = c__4609__auto___48851;
var G__48854 = cljs.core.count(c__4609__auto___48851);
var G__48855 = (0);
seq__48273_48833 = G__48852;
chunk__48275_48834 = G__48853;
count__48276_48835 = G__48854;
i__48277_48836 = G__48855;
continue;
} else {
var child_48861 = cljs.core.first(seq__48273_48850__$1);
if(cljs.core.truth_(child_48861)){
node.appendChild(child_48861);


var G__48862 = cljs.core.next(seq__48273_48850__$1);
var G__48863 = null;
var G__48864 = (0);
var G__48865 = (0);
seq__48273_48833 = G__48862;
chunk__48275_48834 = G__48863;
count__48276_48835 = G__48864;
i__48277_48836 = G__48865;
continue;
} else {
var G__48870 = cljs.core.next(seq__48273_48850__$1);
var G__48871 = null;
var G__48872 = (0);
var G__48873 = (0);
seq__48273_48833 = G__48870;
chunk__48275_48834 = G__48871;
count__48276_48835 = G__48872;
i__48277_48836 = G__48873;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48831);
}
}


var G__48874 = seq__48234_48825;
var G__48875 = chunk__48236_48826;
var G__48876 = count__48237_48827;
var G__48877 = (i__48238_48828 + (1));
seq__48234_48825 = G__48874;
chunk__48236_48826 = G__48875;
count__48237_48827 = G__48876;
i__48238_48828 = G__48877;
continue;
} else {
var G__48878 = seq__48234_48825;
var G__48879 = chunk__48236_48826;
var G__48880 = count__48237_48827;
var G__48881 = (i__48238_48828 + (1));
seq__48234_48825 = G__48878;
chunk__48236_48826 = G__48879;
count__48237_48827 = G__48880;
i__48238_48828 = G__48881;
continue;
}
} else {
var temp__5735__auto___48883 = cljs.core.seq(seq__48234_48825);
if(temp__5735__auto___48883){
var seq__48234_48884__$1 = temp__5735__auto___48883;
if(cljs.core.chunked_seq_QMARK_(seq__48234_48884__$1)){
var c__4609__auto___48885 = cljs.core.chunk_first(seq__48234_48884__$1);
var G__48886 = cljs.core.chunk_rest(seq__48234_48884__$1);
var G__48887 = c__4609__auto___48885;
var G__48888 = cljs.core.count(c__4609__auto___48885);
var G__48889 = (0);
seq__48234_48825 = G__48886;
chunk__48236_48826 = G__48887;
count__48237_48827 = G__48888;
i__48238_48828 = G__48889;
continue;
} else {
var child_struct_48890 = cljs.core.first(seq__48234_48884__$1);
if((!((child_struct_48890 == null)))){
if(typeof child_struct_48890 === 'string'){
var text_48891 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48891),child_struct_48890].join(''));
} else {
var children_48892 = shadow.dom.svg_node(child_struct_48890);
if(cljs.core.seq_QMARK_(children_48892)){
var seq__48280_48894 = cljs.core.seq(children_48892);
var chunk__48282_48895 = null;
var count__48283_48896 = (0);
var i__48284_48897 = (0);
while(true){
if((i__48284_48897 < count__48283_48896)){
var child_48898 = chunk__48282_48895.cljs$core$IIndexed$_nth$arity$2(null,i__48284_48897);
if(cljs.core.truth_(child_48898)){
node.appendChild(child_48898);


var G__48900 = seq__48280_48894;
var G__48901 = chunk__48282_48895;
var G__48902 = count__48283_48896;
var G__48903 = (i__48284_48897 + (1));
seq__48280_48894 = G__48900;
chunk__48282_48895 = G__48901;
count__48283_48896 = G__48902;
i__48284_48897 = G__48903;
continue;
} else {
var G__48904 = seq__48280_48894;
var G__48905 = chunk__48282_48895;
var G__48906 = count__48283_48896;
var G__48907 = (i__48284_48897 + (1));
seq__48280_48894 = G__48904;
chunk__48282_48895 = G__48905;
count__48283_48896 = G__48906;
i__48284_48897 = G__48907;
continue;
}
} else {
var temp__5735__auto___48908__$1 = cljs.core.seq(seq__48280_48894);
if(temp__5735__auto___48908__$1){
var seq__48280_48909__$1 = temp__5735__auto___48908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48280_48909__$1)){
var c__4609__auto___48911 = cljs.core.chunk_first(seq__48280_48909__$1);
var G__48912 = cljs.core.chunk_rest(seq__48280_48909__$1);
var G__48913 = c__4609__auto___48911;
var G__48914 = cljs.core.count(c__4609__auto___48911);
var G__48915 = (0);
seq__48280_48894 = G__48912;
chunk__48282_48895 = G__48913;
count__48283_48896 = G__48914;
i__48284_48897 = G__48915;
continue;
} else {
var child_48916 = cljs.core.first(seq__48280_48909__$1);
if(cljs.core.truth_(child_48916)){
node.appendChild(child_48916);


var G__48917 = cljs.core.next(seq__48280_48909__$1);
var G__48918 = null;
var G__48919 = (0);
var G__48920 = (0);
seq__48280_48894 = G__48917;
chunk__48282_48895 = G__48918;
count__48283_48896 = G__48919;
i__48284_48897 = G__48920;
continue;
} else {
var G__48921 = cljs.core.next(seq__48280_48909__$1);
var G__48922 = null;
var G__48923 = (0);
var G__48924 = (0);
seq__48280_48894 = G__48921;
chunk__48282_48895 = G__48922;
count__48283_48896 = G__48923;
i__48284_48897 = G__48924;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48892);
}
}


var G__48926 = cljs.core.next(seq__48234_48884__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__48234_48825 = G__48926;
chunk__48236_48826 = G__48927;
count__48237_48827 = G__48928;
i__48238_48828 = G__48929;
continue;
} else {
var G__48930 = cljs.core.next(seq__48234_48884__$1);
var G__48931 = null;
var G__48932 = (0);
var G__48933 = (0);
seq__48234_48825 = G__48930;
chunk__48236_48826 = G__48931;
count__48237_48827 = G__48932;
i__48238_48828 = G__48933;
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

var G__48286_48935 = shadow.dom._to_svg;
var G__48287_48936 = "string";
var G__48288_48937 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48286_48935,G__48287_48936,G__48288_48937);

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

var G__48290_48941 = shadow.dom._to_svg;
var G__48291_48942 = "null";
var G__48292_48943 = (function (_){
return null;
});
goog.object.set(G__48290_48941,G__48291_48942,G__48292_48943);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48944 = arguments.length;
var i__4790__auto___48945 = (0);
while(true){
if((i__4790__auto___48945 < len__4789__auto___48944)){
args__4795__auto__.push((arguments[i__4790__auto___48945]));

var G__48946 = (i__4790__auto___48945 + (1));
i__4790__auto___48945 = G__48946;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48294){
var G__48295 = cljs.core.first(seq48294);
var seq48294__$1 = cljs.core.next(seq48294);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48295,seq48294__$1);
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
var G__48297 = arguments.length;
switch (G__48297) {
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
var G__48303_48958 = shadow.dom.dom_node(el);
var G__48304_48959 = cljs.core.name(event);
var G__48305_48960 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48303_48958,G__48304_48959,G__48305_48960) : shadow.dom.dom_listen.call(null,G__48303_48958,G__48304_48959,G__48305_48960));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46126__auto___48969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_48311){
var state_val_48312 = (state_48311[(1)]);
if((state_val_48312 === (1))){
var state_48311__$1 = state_48311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48311__$1,(2),once_or_cleanup);
} else {
if((state_val_48312 === (2))){
var inst_48308 = (state_48311[(2)]);
var inst_48309 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48311__$1 = (function (){var statearr_48316 = state_48311;
(statearr_48316[(7)] = inst_48308);

return statearr_48316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48311__$1,inst_48309);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46026__auto__ = null;
var shadow$dom$state_machine__46026__auto____0 = (function (){
var statearr_48319 = [null,null,null,null,null,null,null,null];
(statearr_48319[(0)] = shadow$dom$state_machine__46026__auto__);

(statearr_48319[(1)] = (1));

return statearr_48319;
});
var shadow$dom$state_machine__46026__auto____1 = (function (state_48311){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_48311);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e48320){if((e48320 instanceof Object)){
var ex__46029__auto__ = e48320;
var statearr_48322_48972 = state_48311;
(statearr_48322_48972[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48974 = state_48311;
state_48311 = G__48974;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
shadow$dom$state_machine__46026__auto__ = function(state_48311){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46026__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46026__auto____1.call(this,state_48311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46026__auto____0;
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46026__auto____1;
return shadow$dom$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_48327 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_48327[(6)] = c__46126__auto___48969);

return statearr_48327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
