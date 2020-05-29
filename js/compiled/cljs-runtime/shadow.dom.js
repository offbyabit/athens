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
return cljs.core.cons((coll[idx]),(function (){var G__65522 = coll;
var G__65523 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65522,G__65523) : shadow.dom.lazy_native_coll_seq.call(null,G__65522,G__65523));
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
var G__65533 = arguments.length;
switch (G__65533) {
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
var G__65538 = arguments.length;
switch (G__65538) {
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
var G__65543 = arguments.length;
switch (G__65543) {
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
var G__65546 = arguments.length;
switch (G__65546) {
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
var G__65548 = arguments.length;
switch (G__65548) {
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
var G__65549 = document;
var G__65550 = shadow.dom.dom_node(el);
return goog.dom.contains(G__65549,G__65550);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__65551 = shadow.dom.dom_node(parent);
var G__65552 = shadow.dom.dom_node(el);
return goog.dom.contains(G__65551,G__65552);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__65553 = shadow.dom.dom_node(el);
var G__65554 = cls;
return goog.dom.classlist.add(G__65553,G__65554);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__65555 = shadow.dom.dom_node(el);
var G__65556 = cls;
return goog.dom.classlist.remove(G__65555,G__65556);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__65558 = arguments.length;
switch (G__65558) {
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
var G__65559 = shadow.dom.dom_node(el);
var G__65560 = cls;
return goog.dom.classlist.toggle(G__65559,G__65560);
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
}catch (e65561){if((e65561 instanceof Object)){
var e = e65561;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65561;

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
var seq__65564 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65565 = null;
var count__65566 = (0);
var i__65567 = (0);
while(true){
if((i__65567 < count__65566)){
var el = chunk__65565.cljs$core$IIndexed$_nth$arity$2(null,i__65567);
var handler_66149__$1 = ((function (seq__65564,chunk__65565,count__65566,i__65567,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65564,chunk__65565,count__65566,i__65567,el))
;
var G__65575_66152 = el;
var G__65576_66153 = cljs.core.name(ev);
var G__65577_66154 = handler_66149__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__65575_66152,G__65576_66153,G__65577_66154) : shadow.dom.dom_listen.call(null,G__65575_66152,G__65576_66153,G__65577_66154));


var G__66156 = seq__65564;
var G__66157 = chunk__65565;
var G__66158 = count__65566;
var G__66159 = (i__65567 + (1));
seq__65564 = G__66156;
chunk__65565 = G__66157;
count__65566 = G__66158;
i__65567 = G__66159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65564);
if(temp__5735__auto__){
var seq__65564__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65564__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__65564__$1);
var G__66162 = cljs.core.chunk_rest(seq__65564__$1);
var G__66163 = c__4609__auto__;
var G__66164 = cljs.core.count(c__4609__auto__);
var G__66165 = (0);
seq__65564 = G__66162;
chunk__65565 = G__66163;
count__65566 = G__66164;
i__65567 = G__66165;
continue;
} else {
var el = cljs.core.first(seq__65564__$1);
var handler_66166__$1 = ((function (seq__65564,chunk__65565,count__65566,i__65567,el,seq__65564__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65564,chunk__65565,count__65566,i__65567,el,seq__65564__$1,temp__5735__auto__))
;
var G__65578_66168 = el;
var G__65579_66169 = cljs.core.name(ev);
var G__65580_66170 = handler_66166__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__65578_66168,G__65579_66169,G__65580_66170) : shadow.dom.dom_listen.call(null,G__65578_66168,G__65579_66169,G__65580_66170));


var G__66173 = cljs.core.next(seq__65564__$1);
var G__66174 = null;
var G__66175 = (0);
var G__66176 = (0);
seq__65564 = G__66173;
chunk__65565 = G__66174;
count__65566 = G__66175;
i__65567 = G__66176;
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
var G__65582 = arguments.length;
switch (G__65582) {
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
var G__65583 = shadow.dom.dom_node(el);
var G__65584 = cljs.core.name(ev);
var G__65585 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__65583,G__65584,G__65585) : shadow.dom.dom_listen.call(null,G__65583,G__65584,G__65585));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__65586 = shadow.dom.dom_node(el);
var G__65587 = cljs.core.name(ev);
var G__65588 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__65586,G__65587,G__65588) : shadow.dom.dom_listen_remove.call(null,G__65586,G__65587,G__65588));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__65589 = cljs.core.seq(events);
var chunk__65590 = null;
var count__65591 = (0);
var i__65592 = (0);
while(true){
if((i__65592 < count__65591)){
var vec__65599 = chunk__65590.cljs$core$IIndexed$_nth$arity$2(null,i__65592);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65599,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65599,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66184 = seq__65589;
var G__66185 = chunk__65590;
var G__66186 = count__65591;
var G__66187 = (i__65592 + (1));
seq__65589 = G__66184;
chunk__65590 = G__66185;
count__65591 = G__66186;
i__65592 = G__66187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65589);
if(temp__5735__auto__){
var seq__65589__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65589__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__65589__$1);
var G__66190 = cljs.core.chunk_rest(seq__65589__$1);
var G__66191 = c__4609__auto__;
var G__66192 = cljs.core.count(c__4609__auto__);
var G__66193 = (0);
seq__65589 = G__66190;
chunk__65590 = G__66191;
count__65591 = G__66192;
i__65592 = G__66193;
continue;
} else {
var vec__65602 = cljs.core.first(seq__65589__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66195 = cljs.core.next(seq__65589__$1);
var G__66196 = null;
var G__66197 = (0);
var G__66198 = (0);
seq__65589 = G__66195;
chunk__65590 = G__66196;
count__65591 = G__66197;
i__65592 = G__66198;
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
var seq__65605 = cljs.core.seq(styles);
var chunk__65606 = null;
var count__65607 = (0);
var i__65608 = (0);
while(true){
if((i__65608 < count__65607)){
var vec__65621 = chunk__65606.cljs$core$IIndexed$_nth$arity$2(null,i__65608);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65621,(1),null);
var G__65624_66205 = dom;
var G__65625_66206 = cljs.core.name(k);
var G__65626_66207 = (((v == null))?"":v);
goog.style.setStyle(G__65624_66205,G__65625_66206,G__65626_66207);


var G__66210 = seq__65605;
var G__66211 = chunk__65606;
var G__66212 = count__65607;
var G__66213 = (i__65608 + (1));
seq__65605 = G__66210;
chunk__65606 = G__66211;
count__65607 = G__66212;
i__65608 = G__66213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65605);
if(temp__5735__auto__){
var seq__65605__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65605__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__65605__$1);
var G__66214 = cljs.core.chunk_rest(seq__65605__$1);
var G__66215 = c__4609__auto__;
var G__66216 = cljs.core.count(c__4609__auto__);
var G__66217 = (0);
seq__65605 = G__66214;
chunk__65606 = G__66215;
count__65607 = G__66216;
i__65608 = G__66217;
continue;
} else {
var vec__65630 = cljs.core.first(seq__65605__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(1),null);
var G__65633_66237 = dom;
var G__65634_66238 = cljs.core.name(k);
var G__65635_66239 = (((v == null))?"":v);
goog.style.setStyle(G__65633_66237,G__65634_66238,G__65635_66239);


var G__66240 = cljs.core.next(seq__65605__$1);
var G__66241 = null;
var G__66242 = (0);
var G__66243 = (0);
seq__65605 = G__66240;
chunk__65606 = G__66241;
count__65607 = G__66242;
i__65608 = G__66243;
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
var G__65636_66245 = key;
var G__65636_66246__$1 = (((G__65636_66245 instanceof cljs.core.Keyword))?G__65636_66245.fqn:null);
switch (G__65636_66246__$1) {
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
var ks_66249 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_66249,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_66249,"aria-");
}
})())){
el.setAttribute(ks_66249,value);
} else {
(el[ks_66249] = value);
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
var G__65637 = shadow.dom.dom_node(el);
var G__65638 = cls;
return goog.dom.classlist.contains(G__65637,G__65638);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65643){
var map__65644 = p__65643;
var map__65644__$1 = (((((!((map__65644 == null))))?(((((map__65644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65644):map__65644);
var props = map__65644__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65644__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65646 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65646,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65646,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65646,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65649 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65649,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65649;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65652 = arguments.length;
switch (G__65652) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65658){
var vec__65659 = p__65658;
var seq__65660 = cljs.core.seq(vec__65659);
var first__65661 = cljs.core.first(seq__65660);
var seq__65660__$1 = cljs.core.next(seq__65660);
var nn = first__65661;
var first__65661__$1 = cljs.core.first(seq__65660__$1);
var seq__65660__$2 = cljs.core.next(seq__65660__$1);
var np = first__65661__$1;
var nc = seq__65660__$2;
var node = vec__65659;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65663 = nn;
var G__65664 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65663,G__65664) : create_fn.call(null,G__65663,G__65664));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65665 = nn;
var G__65666 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65665,G__65666) : create_fn.call(null,G__65665,G__65666));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65671 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65671,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65671,(1),null);
var seq__65675_66265 = cljs.core.seq(node_children);
var chunk__65676_66266 = null;
var count__65677_66267 = (0);
var i__65678_66268 = (0);
while(true){
if((i__65678_66268 < count__65677_66267)){
var child_struct_66270 = chunk__65676_66266.cljs$core$IIndexed$_nth$arity$2(null,i__65678_66268);
var children_66271 = shadow.dom.dom_node(child_struct_66270);
if(cljs.core.seq_QMARK_(children_66271)){
var seq__65706_66272 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66271));
var chunk__65708_66273 = null;
var count__65709_66274 = (0);
var i__65710_66275 = (0);
while(true){
if((i__65710_66275 < count__65709_66274)){
var child_66276 = chunk__65708_66273.cljs$core$IIndexed$_nth$arity$2(null,i__65710_66275);
if(cljs.core.truth_(child_66276)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66276);


var G__66277 = seq__65706_66272;
var G__66278 = chunk__65708_66273;
var G__66279 = count__65709_66274;
var G__66280 = (i__65710_66275 + (1));
seq__65706_66272 = G__66277;
chunk__65708_66273 = G__66278;
count__65709_66274 = G__66279;
i__65710_66275 = G__66280;
continue;
} else {
var G__66281 = seq__65706_66272;
var G__66282 = chunk__65708_66273;
var G__66283 = count__65709_66274;
var G__66284 = (i__65710_66275 + (1));
seq__65706_66272 = G__66281;
chunk__65708_66273 = G__66282;
count__65709_66274 = G__66283;
i__65710_66275 = G__66284;
continue;
}
} else {
var temp__5735__auto___66285 = cljs.core.seq(seq__65706_66272);
if(temp__5735__auto___66285){
var seq__65706_66286__$1 = temp__5735__auto___66285;
if(cljs.core.chunked_seq_QMARK_(seq__65706_66286__$1)){
var c__4609__auto___66293 = cljs.core.chunk_first(seq__65706_66286__$1);
var G__66294 = cljs.core.chunk_rest(seq__65706_66286__$1);
var G__66295 = c__4609__auto___66293;
var G__66296 = cljs.core.count(c__4609__auto___66293);
var G__66297 = (0);
seq__65706_66272 = G__66294;
chunk__65708_66273 = G__66295;
count__65709_66274 = G__66296;
i__65710_66275 = G__66297;
continue;
} else {
var child_66299 = cljs.core.first(seq__65706_66286__$1);
if(cljs.core.truth_(child_66299)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66299);


var G__66300 = cljs.core.next(seq__65706_66286__$1);
var G__66301 = null;
var G__66302 = (0);
var G__66303 = (0);
seq__65706_66272 = G__66300;
chunk__65708_66273 = G__66301;
count__65709_66274 = G__66302;
i__65710_66275 = G__66303;
continue;
} else {
var G__66304 = cljs.core.next(seq__65706_66286__$1);
var G__66305 = null;
var G__66306 = (0);
var G__66307 = (0);
seq__65706_66272 = G__66304;
chunk__65708_66273 = G__66305;
count__65709_66274 = G__66306;
i__65710_66275 = G__66307;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66271);
}


var G__66308 = seq__65675_66265;
var G__66309 = chunk__65676_66266;
var G__66310 = count__65677_66267;
var G__66311 = (i__65678_66268 + (1));
seq__65675_66265 = G__66308;
chunk__65676_66266 = G__66309;
count__65677_66267 = G__66310;
i__65678_66268 = G__66311;
continue;
} else {
var temp__5735__auto___66312 = cljs.core.seq(seq__65675_66265);
if(temp__5735__auto___66312){
var seq__65675_66313__$1 = temp__5735__auto___66312;
if(cljs.core.chunked_seq_QMARK_(seq__65675_66313__$1)){
var c__4609__auto___66314 = cljs.core.chunk_first(seq__65675_66313__$1);
var G__66315 = cljs.core.chunk_rest(seq__65675_66313__$1);
var G__66316 = c__4609__auto___66314;
var G__66317 = cljs.core.count(c__4609__auto___66314);
var G__66318 = (0);
seq__65675_66265 = G__66315;
chunk__65676_66266 = G__66316;
count__65677_66267 = G__66317;
i__65678_66268 = G__66318;
continue;
} else {
var child_struct_66319 = cljs.core.first(seq__65675_66313__$1);
var children_66320 = shadow.dom.dom_node(child_struct_66319);
if(cljs.core.seq_QMARK_(children_66320)){
var seq__65722_66321 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66320));
var chunk__65724_66322 = null;
var count__65725_66323 = (0);
var i__65726_66324 = (0);
while(true){
if((i__65726_66324 < count__65725_66323)){
var child_66325 = chunk__65724_66322.cljs$core$IIndexed$_nth$arity$2(null,i__65726_66324);
if(cljs.core.truth_(child_66325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66325);


var G__66329 = seq__65722_66321;
var G__66330 = chunk__65724_66322;
var G__66331 = count__65725_66323;
var G__66332 = (i__65726_66324 + (1));
seq__65722_66321 = G__66329;
chunk__65724_66322 = G__66330;
count__65725_66323 = G__66331;
i__65726_66324 = G__66332;
continue;
} else {
var G__66334 = seq__65722_66321;
var G__66337 = chunk__65724_66322;
var G__66338 = count__65725_66323;
var G__66339 = (i__65726_66324 + (1));
seq__65722_66321 = G__66334;
chunk__65724_66322 = G__66337;
count__65725_66323 = G__66338;
i__65726_66324 = G__66339;
continue;
}
} else {
var temp__5735__auto___66340__$1 = cljs.core.seq(seq__65722_66321);
if(temp__5735__auto___66340__$1){
var seq__65722_66342__$1 = temp__5735__auto___66340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65722_66342__$1)){
var c__4609__auto___66343 = cljs.core.chunk_first(seq__65722_66342__$1);
var G__66344 = cljs.core.chunk_rest(seq__65722_66342__$1);
var G__66345 = c__4609__auto___66343;
var G__66346 = cljs.core.count(c__4609__auto___66343);
var G__66347 = (0);
seq__65722_66321 = G__66344;
chunk__65724_66322 = G__66345;
count__65725_66323 = G__66346;
i__65726_66324 = G__66347;
continue;
} else {
var child_66348 = cljs.core.first(seq__65722_66342__$1);
if(cljs.core.truth_(child_66348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66348);


var G__66349 = cljs.core.next(seq__65722_66342__$1);
var G__66350 = null;
var G__66351 = (0);
var G__66352 = (0);
seq__65722_66321 = G__66349;
chunk__65724_66322 = G__66350;
count__65725_66323 = G__66351;
i__65726_66324 = G__66352;
continue;
} else {
var G__66353 = cljs.core.next(seq__65722_66342__$1);
var G__66354 = null;
var G__66355 = (0);
var G__66356 = (0);
seq__65722_66321 = G__66353;
chunk__65724_66322 = G__66354;
count__65725_66323 = G__66355;
i__65726_66324 = G__66356;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66320);
}


var G__66359 = cljs.core.next(seq__65675_66313__$1);
var G__66360 = null;
var G__66361 = (0);
var G__66362 = (0);
seq__65675_66265 = G__66359;
chunk__65676_66266 = G__66360;
count__65677_66267 = G__66361;
i__65678_66268 = G__66362;
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
var G__65741 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__65741);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__65745 = cljs.core.seq(node);
var chunk__65746 = null;
var count__65747 = (0);
var i__65748 = (0);
while(true){
if((i__65748 < count__65747)){
var n = chunk__65746.cljs$core$IIndexed$_nth$arity$2(null,i__65748);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66374 = seq__65745;
var G__66375 = chunk__65746;
var G__66376 = count__65747;
var G__66377 = (i__65748 + (1));
seq__65745 = G__66374;
chunk__65746 = G__66375;
count__65747 = G__66376;
i__65748 = G__66377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65745);
if(temp__5735__auto__){
var seq__65745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65745__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__65745__$1);
var G__66382 = cljs.core.chunk_rest(seq__65745__$1);
var G__66383 = c__4609__auto__;
var G__66384 = cljs.core.count(c__4609__auto__);
var G__66385 = (0);
seq__65745 = G__66382;
chunk__65746 = G__66383;
count__65747 = G__66384;
i__65748 = G__66385;
continue;
} else {
var n = cljs.core.first(seq__65745__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66389 = cljs.core.next(seq__65745__$1);
var G__66390 = null;
var G__66391 = (0);
var G__66392 = (0);
seq__65745 = G__66389;
chunk__65746 = G__66390;
count__65747 = G__66391;
i__65748 = G__66392;
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
var G__65754 = shadow.dom.dom_node(new$);
var G__65755 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__65754,G__65755);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__65757 = arguments.length;
switch (G__65757) {
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
var G__65765 = arguments.length;
switch (G__65765) {
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
var G__65778 = arguments.length;
switch (G__65778) {
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
var len__4789__auto___66415 = arguments.length;
var i__4790__auto___66416 = (0);
while(true){
if((i__4790__auto___66416 < len__4789__auto___66415)){
args__4795__auto__.push((arguments[i__4790__auto___66416]));

var G__66417 = (i__4790__auto___66416 + (1));
i__4790__auto___66416 = G__66417;
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
var seq__65790_66418 = cljs.core.seq(nodes);
var chunk__65791_66419 = null;
var count__65792_66420 = (0);
var i__65793_66421 = (0);
while(true){
if((i__65793_66421 < count__65792_66420)){
var node_66422 = chunk__65791_66419.cljs$core$IIndexed$_nth$arity$2(null,i__65793_66421);
fragment.appendChild(shadow.dom._to_dom(node_66422));


var G__66423 = seq__65790_66418;
var G__66424 = chunk__65791_66419;
var G__66425 = count__65792_66420;
var G__66426 = (i__65793_66421 + (1));
seq__65790_66418 = G__66423;
chunk__65791_66419 = G__66424;
count__65792_66420 = G__66425;
i__65793_66421 = G__66426;
continue;
} else {
var temp__5735__auto___66427 = cljs.core.seq(seq__65790_66418);
if(temp__5735__auto___66427){
var seq__65790_66428__$1 = temp__5735__auto___66427;
if(cljs.core.chunked_seq_QMARK_(seq__65790_66428__$1)){
var c__4609__auto___66429 = cljs.core.chunk_first(seq__65790_66428__$1);
var G__66430 = cljs.core.chunk_rest(seq__65790_66428__$1);
var G__66431 = c__4609__auto___66429;
var G__66432 = cljs.core.count(c__4609__auto___66429);
var G__66433 = (0);
seq__65790_66418 = G__66430;
chunk__65791_66419 = G__66431;
count__65792_66420 = G__66432;
i__65793_66421 = G__66433;
continue;
} else {
var node_66434 = cljs.core.first(seq__65790_66428__$1);
fragment.appendChild(shadow.dom._to_dom(node_66434));


var G__66435 = cljs.core.next(seq__65790_66428__$1);
var G__66436 = null;
var G__66437 = (0);
var G__66438 = (0);
seq__65790_66418 = G__66435;
chunk__65791_66419 = G__66436;
count__65792_66420 = G__66437;
i__65793_66421 = G__66438;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65785){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65785));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65800_66439 = cljs.core.seq(scripts);
var chunk__65801_66440 = null;
var count__65802_66441 = (0);
var i__65803_66442 = (0);
while(true){
if((i__65803_66442 < count__65802_66441)){
var vec__65814_66443 = chunk__65801_66440.cljs$core$IIndexed$_nth$arity$2(null,i__65803_66442);
var script_tag_66444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65814_66443,(0),null);
var script_body_66445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65814_66443,(1),null);
eval(script_body_66445);


var G__66446 = seq__65800_66439;
var G__66447 = chunk__65801_66440;
var G__66448 = count__65802_66441;
var G__66449 = (i__65803_66442 + (1));
seq__65800_66439 = G__66446;
chunk__65801_66440 = G__66447;
count__65802_66441 = G__66448;
i__65803_66442 = G__66449;
continue;
} else {
var temp__5735__auto___66450 = cljs.core.seq(seq__65800_66439);
if(temp__5735__auto___66450){
var seq__65800_66451__$1 = temp__5735__auto___66450;
if(cljs.core.chunked_seq_QMARK_(seq__65800_66451__$1)){
var c__4609__auto___66452 = cljs.core.chunk_first(seq__65800_66451__$1);
var G__66453 = cljs.core.chunk_rest(seq__65800_66451__$1);
var G__66454 = c__4609__auto___66452;
var G__66455 = cljs.core.count(c__4609__auto___66452);
var G__66456 = (0);
seq__65800_66439 = G__66453;
chunk__65801_66440 = G__66454;
count__65802_66441 = G__66455;
i__65803_66442 = G__66456;
continue;
} else {
var vec__65817_66457 = cljs.core.first(seq__65800_66451__$1);
var script_tag_66458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65817_66457,(0),null);
var script_body_66459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65817_66457,(1),null);
eval(script_body_66459);


var G__66460 = cljs.core.next(seq__65800_66451__$1);
var G__66461 = null;
var G__66462 = (0);
var G__66463 = (0);
seq__65800_66439 = G__66460;
chunk__65801_66440 = G__66461;
count__65802_66441 = G__66462;
i__65803_66442 = G__66463;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65820){
var vec__65821 = p__65820;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65821,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65821,(1),null);
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
var G__65826 = shadow.dom.dom_node(el);
var G__65827 = cls;
return goog.dom.getAncestorByClass(G__65826,G__65827);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__65830 = arguments.length;
switch (G__65830) {
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
var G__65836 = shadow.dom.dom_node(el);
var G__65837 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__65836,G__65837);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__65838 = shadow.dom.dom_node(el);
var G__65839 = cljs.core.name(tag);
var G__65840 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__65838,G__65839,G__65840);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__65843 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__65843);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__65845 = shadow.dom.dom_node(dom);
var G__65846 = value;
return goog.dom.forms.setValue(G__65845,G__65846);
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
var seq__65851 = cljs.core.seq(style_keys);
var chunk__65852 = null;
var count__65853 = (0);
var i__65854 = (0);
while(true){
if((i__65854 < count__65853)){
var it = chunk__65852.cljs$core$IIndexed$_nth$arity$2(null,i__65854);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66472 = seq__65851;
var G__66473 = chunk__65852;
var G__66474 = count__65853;
var G__66475 = (i__65854 + (1));
seq__65851 = G__66472;
chunk__65852 = G__66473;
count__65853 = G__66474;
i__65854 = G__66475;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65851);
if(temp__5735__auto__){
var seq__65851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65851__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__65851__$1);
var G__66476 = cljs.core.chunk_rest(seq__65851__$1);
var G__66477 = c__4609__auto__;
var G__66478 = cljs.core.count(c__4609__auto__);
var G__66479 = (0);
seq__65851 = G__66476;
chunk__65852 = G__66477;
count__65853 = G__66478;
i__65854 = G__66479;
continue;
} else {
var it = cljs.core.first(seq__65851__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66480 = cljs.core.next(seq__65851__$1);
var G__66481 = null;
var G__66482 = (0);
var G__66483 = (0);
seq__65851 = G__66480;
chunk__65852 = G__66481;
count__65853 = G__66482;
i__65854 = G__66483;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k65859,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__65867 = k65859;
var G__65867__$1 = (((G__65867 instanceof cljs.core.Keyword))?G__65867.fqn:null);
switch (G__65867__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65859,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__65871){
var vec__65872 = p__65871;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65858){
var self__ = this;
var G__65858__$1 = this;
return (new cljs.core.RecordIter((0),G__65858__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__65883 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__65883(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65860,other65861){
var self__ = this;
var this65860__$1 = this;
return (((!((other65861 == null)))) && ((this65860__$1.constructor === other65861.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65860__$1.x,other65861.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65860__$1.y,other65861.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65860__$1.__extmap,other65861.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__65858){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__65884 = cljs.core.keyword_identical_QMARK_;
var expr__65885 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__65887 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__65888 = expr__65885;
return (pred__65884.cljs$core$IFn$_invoke$arity$2 ? pred__65884.cljs$core$IFn$_invoke$arity$2(G__65887,G__65888) : pred__65884.call(null,G__65887,G__65888));
})())){
return (new shadow.dom.Coordinate(G__65858,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__65889 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__65890 = expr__65885;
return (pred__65884.cljs$core$IFn$_invoke$arity$2 ? pred__65884.cljs$core$IFn$_invoke$arity$2(G__65889,G__65890) : pred__65884.call(null,G__65889,G__65890));
})())){
return (new shadow.dom.Coordinate(self__.x,G__65858,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__65858),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__65858){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65858,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65863){
var extmap__4478__auto__ = (function (){var G__65895 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65863,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65863)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65895);
} else {
return G__65895;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65863),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65863),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__65896 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__65896);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__65900 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__65900);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__65905 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__65905);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k65907,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__65914 = k65907;
var G__65914__$1 = (((G__65914 instanceof cljs.core.Keyword))?G__65914.fqn:null);
switch (G__65914__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65907,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__65917){
var vec__65920 = p__65917;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65920,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65920,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65906){
var self__ = this;
var G__65906__$1 = this;
return (new cljs.core.RecordIter((0),G__65906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__65930 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__65930(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65908,other65909){
var self__ = this;
var this65908__$1 = this;
return (((!((other65909 == null)))) && ((this65908__$1.constructor === other65909.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65908__$1.w,other65909.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65908__$1.h,other65909.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65908__$1.__extmap,other65909.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__65906){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__65939 = cljs.core.keyword_identical_QMARK_;
var expr__65940 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__65943 = new cljs.core.Keyword(null,"w","w",354169001);
var G__65944 = expr__65940;
return (pred__65939.cljs$core$IFn$_invoke$arity$2 ? pred__65939.cljs$core$IFn$_invoke$arity$2(G__65943,G__65944) : pred__65939.call(null,G__65943,G__65944));
})())){
return (new shadow.dom.Size(G__65906,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__65945 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__65946 = expr__65940;
return (pred__65939.cljs$core$IFn$_invoke$arity$2 ? pred__65939.cljs$core$IFn$_invoke$arity$2(G__65945,G__65946) : pred__65939.call(null,G__65945,G__65946));
})())){
return (new shadow.dom.Size(self__.w,G__65906,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__65906),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__65906){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65906,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65911){
var extmap__4478__auto__ = (function (){var G__65954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65911,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65954);
} else {
return G__65954;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65911),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65911),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__65961 = shadow.dom.dom_node(el);
return goog.style.getSize(G__65961);
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
var G__66542 = (i + (1));
var G__66543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66542;
ret = G__66543;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65976){
var vec__65977 = p__65976;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65977,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65977,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65982 = arguments.length;
switch (G__65982) {
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
var G__65983_66552 = new_node;
var G__65984_66553 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__65983_66552,G__65984_66553);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__65985_66555 = new_node;
var G__65986_66556 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__65985_66555,G__65986_66556);

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
var G__66558 = ps;
var G__66559 = (i + (1));
el__$1 = G__66558;
i = G__66559;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__65989 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__65989);
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
var G__65994 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__65994);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__65995 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__65995);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__65996 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65996,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65996,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65996,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65999_66564 = cljs.core.seq(props);
var chunk__66000_66565 = null;
var count__66001_66566 = (0);
var i__66002_66567 = (0);
while(true){
if((i__66002_66567 < count__66001_66566)){
var vec__66009_66569 = chunk__66000_66565.cljs$core$IIndexed$_nth$arity$2(null,i__66002_66567);
var k_66570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66009_66569,(0),null);
var v_66571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66009_66569,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_66570);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66570),v_66571);


var G__66572 = seq__65999_66564;
var G__66573 = chunk__66000_66565;
var G__66574 = count__66001_66566;
var G__66575 = (i__66002_66567 + (1));
seq__65999_66564 = G__66572;
chunk__66000_66565 = G__66573;
count__66001_66566 = G__66574;
i__66002_66567 = G__66575;
continue;
} else {
var temp__5735__auto___66576 = cljs.core.seq(seq__65999_66564);
if(temp__5735__auto___66576){
var seq__65999_66577__$1 = temp__5735__auto___66576;
if(cljs.core.chunked_seq_QMARK_(seq__65999_66577__$1)){
var c__4609__auto___66578 = cljs.core.chunk_first(seq__65999_66577__$1);
var G__66579 = cljs.core.chunk_rest(seq__65999_66577__$1);
var G__66580 = c__4609__auto___66578;
var G__66581 = cljs.core.count(c__4609__auto___66578);
var G__66582 = (0);
seq__65999_66564 = G__66579;
chunk__66000_66565 = G__66580;
count__66001_66566 = G__66581;
i__66002_66567 = G__66582;
continue;
} else {
var vec__66012_66583 = cljs.core.first(seq__65999_66577__$1);
var k_66584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66012_66583,(0),null);
var v_66585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66012_66583,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_66584);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66584),v_66585);


var G__66588 = cljs.core.next(seq__65999_66577__$1);
var G__66589 = null;
var G__66590 = (0);
var G__66591 = (0);
seq__65999_66564 = G__66588;
chunk__66000_66565 = G__66589;
count__66001_66566 = G__66590;
i__66002_66567 = G__66591;
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
var vec__66022 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66022,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66022,(1),null);
var seq__66025_66598 = cljs.core.seq(node_children);
var chunk__66027_66599 = null;
var count__66028_66600 = (0);
var i__66029_66601 = (0);
while(true){
if((i__66029_66601 < count__66028_66600)){
var child_struct_66604 = chunk__66027_66599.cljs$core$IIndexed$_nth$arity$2(null,i__66029_66601);
if((!((child_struct_66604 == null)))){
if(typeof child_struct_66604 === 'string'){
var text_66607 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66607),child_struct_66604].join(''));
} else {
var children_66608 = shadow.dom.svg_node(child_struct_66604);
if(cljs.core.seq_QMARK_(children_66608)){
var seq__66057_66609 = cljs.core.seq(children_66608);
var chunk__66059_66610 = null;
var count__66060_66611 = (0);
var i__66061_66612 = (0);
while(true){
if((i__66061_66612 < count__66060_66611)){
var child_66613 = chunk__66059_66610.cljs$core$IIndexed$_nth$arity$2(null,i__66061_66612);
if(cljs.core.truth_(child_66613)){
node.appendChild(child_66613);


var G__66614 = seq__66057_66609;
var G__66615 = chunk__66059_66610;
var G__66616 = count__66060_66611;
var G__66617 = (i__66061_66612 + (1));
seq__66057_66609 = G__66614;
chunk__66059_66610 = G__66615;
count__66060_66611 = G__66616;
i__66061_66612 = G__66617;
continue;
} else {
var G__66619 = seq__66057_66609;
var G__66620 = chunk__66059_66610;
var G__66621 = count__66060_66611;
var G__66622 = (i__66061_66612 + (1));
seq__66057_66609 = G__66619;
chunk__66059_66610 = G__66620;
count__66060_66611 = G__66621;
i__66061_66612 = G__66622;
continue;
}
} else {
var temp__5735__auto___66623 = cljs.core.seq(seq__66057_66609);
if(temp__5735__auto___66623){
var seq__66057_66624__$1 = temp__5735__auto___66623;
if(cljs.core.chunked_seq_QMARK_(seq__66057_66624__$1)){
var c__4609__auto___66625 = cljs.core.chunk_first(seq__66057_66624__$1);
var G__66627 = cljs.core.chunk_rest(seq__66057_66624__$1);
var G__66628 = c__4609__auto___66625;
var G__66629 = cljs.core.count(c__4609__auto___66625);
var G__66630 = (0);
seq__66057_66609 = G__66627;
chunk__66059_66610 = G__66628;
count__66060_66611 = G__66629;
i__66061_66612 = G__66630;
continue;
} else {
var child_66634 = cljs.core.first(seq__66057_66624__$1);
if(cljs.core.truth_(child_66634)){
node.appendChild(child_66634);


var G__66636 = cljs.core.next(seq__66057_66624__$1);
var G__66637 = null;
var G__66638 = (0);
var G__66639 = (0);
seq__66057_66609 = G__66636;
chunk__66059_66610 = G__66637;
count__66060_66611 = G__66638;
i__66061_66612 = G__66639;
continue;
} else {
var G__66640 = cljs.core.next(seq__66057_66624__$1);
var G__66641 = null;
var G__66642 = (0);
var G__66643 = (0);
seq__66057_66609 = G__66640;
chunk__66059_66610 = G__66641;
count__66060_66611 = G__66642;
i__66061_66612 = G__66643;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66608);
}
}


var G__66645 = seq__66025_66598;
var G__66646 = chunk__66027_66599;
var G__66647 = count__66028_66600;
var G__66648 = (i__66029_66601 + (1));
seq__66025_66598 = G__66645;
chunk__66027_66599 = G__66646;
count__66028_66600 = G__66647;
i__66029_66601 = G__66648;
continue;
} else {
var G__66649 = seq__66025_66598;
var G__66650 = chunk__66027_66599;
var G__66651 = count__66028_66600;
var G__66652 = (i__66029_66601 + (1));
seq__66025_66598 = G__66649;
chunk__66027_66599 = G__66650;
count__66028_66600 = G__66651;
i__66029_66601 = G__66652;
continue;
}
} else {
var temp__5735__auto___66653 = cljs.core.seq(seq__66025_66598);
if(temp__5735__auto___66653){
var seq__66025_66654__$1 = temp__5735__auto___66653;
if(cljs.core.chunked_seq_QMARK_(seq__66025_66654__$1)){
var c__4609__auto___66656 = cljs.core.chunk_first(seq__66025_66654__$1);
var G__66658 = cljs.core.chunk_rest(seq__66025_66654__$1);
var G__66659 = c__4609__auto___66656;
var G__66660 = cljs.core.count(c__4609__auto___66656);
var G__66661 = (0);
seq__66025_66598 = G__66658;
chunk__66027_66599 = G__66659;
count__66028_66600 = G__66660;
i__66029_66601 = G__66661;
continue;
} else {
var child_struct_66662 = cljs.core.first(seq__66025_66654__$1);
if((!((child_struct_66662 == null)))){
if(typeof child_struct_66662 === 'string'){
var text_66665 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66665),child_struct_66662].join(''));
} else {
var children_66666 = shadow.dom.svg_node(child_struct_66662);
if(cljs.core.seq_QMARK_(children_66666)){
var seq__66077_66667 = cljs.core.seq(children_66666);
var chunk__66079_66668 = null;
var count__66080_66669 = (0);
var i__66081_66670 = (0);
while(true){
if((i__66081_66670 < count__66080_66669)){
var child_66671 = chunk__66079_66668.cljs$core$IIndexed$_nth$arity$2(null,i__66081_66670);
if(cljs.core.truth_(child_66671)){
node.appendChild(child_66671);


var G__66673 = seq__66077_66667;
var G__66674 = chunk__66079_66668;
var G__66675 = count__66080_66669;
var G__66676 = (i__66081_66670 + (1));
seq__66077_66667 = G__66673;
chunk__66079_66668 = G__66674;
count__66080_66669 = G__66675;
i__66081_66670 = G__66676;
continue;
} else {
var G__66677 = seq__66077_66667;
var G__66678 = chunk__66079_66668;
var G__66679 = count__66080_66669;
var G__66680 = (i__66081_66670 + (1));
seq__66077_66667 = G__66677;
chunk__66079_66668 = G__66678;
count__66080_66669 = G__66679;
i__66081_66670 = G__66680;
continue;
}
} else {
var temp__5735__auto___66682__$1 = cljs.core.seq(seq__66077_66667);
if(temp__5735__auto___66682__$1){
var seq__66077_66684__$1 = temp__5735__auto___66682__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66077_66684__$1)){
var c__4609__auto___66685 = cljs.core.chunk_first(seq__66077_66684__$1);
var G__66686 = cljs.core.chunk_rest(seq__66077_66684__$1);
var G__66687 = c__4609__auto___66685;
var G__66688 = cljs.core.count(c__4609__auto___66685);
var G__66689 = (0);
seq__66077_66667 = G__66686;
chunk__66079_66668 = G__66687;
count__66080_66669 = G__66688;
i__66081_66670 = G__66689;
continue;
} else {
var child_66690 = cljs.core.first(seq__66077_66684__$1);
if(cljs.core.truth_(child_66690)){
node.appendChild(child_66690);


var G__66691 = cljs.core.next(seq__66077_66684__$1);
var G__66692 = null;
var G__66693 = (0);
var G__66694 = (0);
seq__66077_66667 = G__66691;
chunk__66079_66668 = G__66692;
count__66080_66669 = G__66693;
i__66081_66670 = G__66694;
continue;
} else {
var G__66700 = cljs.core.next(seq__66077_66684__$1);
var G__66701 = null;
var G__66702 = (0);
var G__66703 = (0);
seq__66077_66667 = G__66700;
chunk__66079_66668 = G__66701;
count__66080_66669 = G__66702;
i__66081_66670 = G__66703;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66666);
}
}


var G__66705 = cljs.core.next(seq__66025_66654__$1);
var G__66706 = null;
var G__66707 = (0);
var G__66708 = (0);
seq__66025_66598 = G__66705;
chunk__66027_66599 = G__66706;
count__66028_66600 = G__66707;
i__66029_66601 = G__66708;
continue;
} else {
var G__66709 = cljs.core.next(seq__66025_66654__$1);
var G__66710 = null;
var G__66711 = (0);
var G__66712 = (0);
seq__66025_66598 = G__66709;
chunk__66027_66599 = G__66710;
count__66028_66600 = G__66711;
i__66029_66601 = G__66712;
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

var G__66092_66714 = shadow.dom._to_svg;
var G__66093_66715 = "string";
var G__66094_66716 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__66092_66714,G__66093_66715,G__66094_66716);

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

var G__66099_66721 = shadow.dom._to_svg;
var G__66100_66722 = "null";
var G__66101_66723 = (function (_){
return null;
});
goog.object.set(G__66099_66721,G__66100_66722,G__66101_66723);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66724 = arguments.length;
var i__4790__auto___66725 = (0);
while(true){
if((i__4790__auto___66725 < len__4789__auto___66724)){
args__4795__auto__.push((arguments[i__4790__auto___66725]));

var G__66726 = (i__4790__auto___66725 + (1));
i__4790__auto___66725 = G__66726;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq66102){
var G__66103 = cljs.core.first(seq66102);
var seq66102__$1 = cljs.core.next(seq66102);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66103,seq66102__$1);
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
var G__66107 = arguments.length;
switch (G__66107) {
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
var G__66109_66730 = shadow.dom.dom_node(el);
var G__66110_66731 = cljs.core.name(event);
var G__66111_66732 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__66109_66730,G__66110_66731,G__66111_66732) : shadow.dom.dom_listen.call(null,G__66109_66730,G__66110_66731,G__66111_66732));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__41735__auto___66733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_66116){
var state_val_66117 = (state_66116[(1)]);
if((state_val_66117 === (1))){
var state_66116__$1 = state_66116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66116__$1,(2),once_or_cleanup);
} else {
if((state_val_66117 === (2))){
var inst_66113 = (state_66116[(2)]);
var inst_66114 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_66116__$1 = (function (){var statearr_66119 = state_66116;
(statearr_66119[(7)] = inst_66113);

return statearr_66119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66116__$1,inst_66114);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41713__auto__ = null;
var shadow$dom$state_machine__41713__auto____0 = (function (){
var statearr_66120 = [null,null,null,null,null,null,null,null];
(statearr_66120[(0)] = shadow$dom$state_machine__41713__auto__);

(statearr_66120[(1)] = (1));

return statearr_66120;
});
var shadow$dom$state_machine__41713__auto____1 = (function (state_66116){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_66116);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e66121){if((e66121 instanceof Object)){
var ex__41716__auto__ = e66121;
var statearr_66122_66737 = state_66116;
(statearr_66122_66737[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66739 = state_66116;
state_66116 = G__66739;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
shadow$dom$state_machine__41713__auto__ = function(state_66116){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41713__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41713__auto____1.call(this,state_66116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41713__auto____0;
shadow$dom$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41713__auto____1;
return shadow$dom$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_66123 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_66123[(6)] = c__41735__auto___66733);

return statearr_66123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
