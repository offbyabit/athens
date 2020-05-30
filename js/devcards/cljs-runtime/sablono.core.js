goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__62449__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__62264 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__62265 = cljs.core.seq(vec__62264);
var first__62266 = cljs.core.first(seq__62265);
var seq__62265__$1 = cljs.core.next(seq__62265);
var tag = first__62266;
var body = seq__62265__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__62449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62453__i = 0, G__62453__a = new Array(arguments.length -  0);
while (G__62453__i < G__62453__a.length) {G__62453__a[G__62453__i] = arguments[G__62453__i + 0]; ++G__62453__i;}
  args = new cljs.core.IndexedSeq(G__62453__a,0,null);
} 
return G__62449__delegate.call(this,args);};
G__62449.cljs$lang$maxFixedArity = 0;
G__62449.cljs$lang$applyTo = (function (arglist__62454){
var args = cljs.core.seq(arglist__62454);
return G__62449__delegate(args);
});
G__62449.cljs$core$IFn$_invoke$arity$variadic = G__62449__delegate;
return G__62449;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__62267(s__62268){
return (new cljs.core.LazySeq(null,(function (){
var s__62268__$1 = s__62268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62268__$1);
if(temp__5735__auto__){
var s__62268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62268__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62268__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62270 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62269 = (0);
while(true){
if((i__62269 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62269);
cljs.core.chunk_append(b__62270,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__62458 = (i__62269 + (1));
i__62269 = G__62458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62270),sablono$core$update_arglists_$_iter__62267(cljs.core.chunk_rest(s__62268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62270),null);
}
} else {
var args = cljs.core.first(s__62268__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__62267(cljs.core.rest(s__62268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62459 = arguments.length;
var i__4790__auto___62460 = (0);
while(true){
if((i__4790__auto___62460 < len__4789__auto___62459)){
args__4795__auto__.push((arguments[i__4790__auto___62460]));

var G__62461 = (i__4790__auto___62460 + (1));
i__4790__auto___62460 = G__62461;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__62272(s__62273){
return (new cljs.core.LazySeq(null,(function (){
var s__62273__$1 = s__62273;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62273__$1);
if(temp__5735__auto__){
var s__62273__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62273__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62273__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62275 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62274 = (0);
while(true){
if((i__62274 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62274);
cljs.core.chunk_append(b__62275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__62467 = (i__62274 + (1));
i__62274 = G__62467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62275),sablono$core$iter__62272(cljs.core.chunk_rest(s__62273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62275),null);
}
} else {
var style = cljs.core.first(s__62273__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__62272(cljs.core.rest(s__62273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq62271){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62271));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__62276 = goog.dom.getDocument().body;
var G__62277 = (function (){var G__62278 = "script";
var G__62279 = ({"src": src});
return goog.dom.createDom(G__62278,G__62279);
})();
return goog.dom.appendChild(G__62276,G__62277);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to62280 = (function sablono$core$link_to62280(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62478 = arguments.length;
var i__4790__auto___62479 = (0);
while(true){
if((i__4790__auto___62479 < len__4789__auto___62478)){
args__4795__auto__.push((arguments[i__4790__auto___62479]));

var G__62480 = (i__4790__auto___62479 + (1));
i__4790__auto___62479 = G__62480;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to62280.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to62280.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to62280.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to62280.cljs$lang$applyTo = (function (seq62281){
var G__62282 = cljs.core.first(seq62281);
var seq62281__$1 = cljs.core.next(seq62281);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62282,seq62281__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to62280);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to62293 = (function sablono$core$mail_to62293(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62481 = arguments.length;
var i__4790__auto___62482 = (0);
while(true){
if((i__4790__auto___62482 < len__4789__auto___62481)){
args__4795__auto__.push((arguments[i__4790__auto___62482]));

var G__62483 = (i__4790__auto___62482 + (1));
i__4790__auto___62482 = G__62483;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to62293.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to62293.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__62299){
var vec__62300 = p__62299;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to62293.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to62293.cljs$lang$applyTo = (function (seq62294){
var G__62296 = cljs.core.first(seq62294);
var seq62294__$1 = cljs.core.next(seq62294);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62296,seq62294__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to62293);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list62306 = (function sablono$core$unordered_list62306(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list62306_$_iter__62308(s__62309){
return (new cljs.core.LazySeq(null,(function (){
var s__62309__$1 = s__62309;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62309__$1);
if(temp__5735__auto__){
var s__62309__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62309__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62309__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62311 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62310 = (0);
while(true){
if((i__62310 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62310);
cljs.core.chunk_append(b__62311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62489 = (i__62310 + (1));
i__62310 = G__62489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62311),sablono$core$unordered_list62306_$_iter__62308(cljs.core.chunk_rest(s__62309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62311),null);
}
} else {
var x = cljs.core.first(s__62309__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list62306_$_iter__62308(cljs.core.rest(s__62309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list62306);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list62317 = (function sablono$core$ordered_list62317(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list62317_$_iter__62318(s__62319){
return (new cljs.core.LazySeq(null,(function (){
var s__62319__$1 = s__62319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62319__$1);
if(temp__5735__auto__){
var s__62319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62319__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62319__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62321 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62320 = (0);
while(true){
if((i__62320 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62320);
cljs.core.chunk_append(b__62321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62493 = (i__62320 + (1));
i__62320 = G__62493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62321),sablono$core$ordered_list62317_$_iter__62318(cljs.core.chunk_rest(s__62319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62321),null);
}
} else {
var x = cljs.core.first(s__62319__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list62317_$_iter__62318(cljs.core.rest(s__62319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list62317);
/**
 * Create an image element.
 */
sablono.core.image62322 = (function sablono$core$image62322(var_args){
var G__62324 = arguments.length;
switch (G__62324) {
case 1:
return sablono.core.image62322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image62322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image62322.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image62322.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image62322.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image62322);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62325_SHARP_,p2__62326_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62325_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62326_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62327_SHARP_,p2__62328_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62327_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62328_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__62330 = arguments.length;
switch (G__62330) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field62331 = (function sablono$core$color_field62331(var_args){
var G__62333 = arguments.length;
switch (G__62333) {
case 1:
return sablono.core.color_field62331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field62331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field62331.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62256__auto__);
}));

(sablono.core.color_field62331.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.color_field62331.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field62331);

/**
 * Creates a date input field.
 */
sablono.core.date_field62334 = (function sablono$core$date_field62334(var_args){
var G__62336 = arguments.length;
switch (G__62336) {
case 1:
return sablono.core.date_field62334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field62334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field62334.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62256__auto__);
}));

(sablono.core.date_field62334.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.date_field62334.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field62334);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field62337 = (function sablono$core$datetime_field62337(var_args){
var G__62339 = arguments.length;
switch (G__62339) {
case 1:
return sablono.core.datetime_field62337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field62337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field62337.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62256__auto__);
}));

(sablono.core.datetime_field62337.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.datetime_field62337.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field62337);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field62340 = (function sablono$core$datetime_local_field62340(var_args){
var G__62342 = arguments.length;
switch (G__62342) {
case 1:
return sablono.core.datetime_local_field62340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field62340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field62340.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62256__auto__);
}));

(sablono.core.datetime_local_field62340.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.datetime_local_field62340.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field62340);

/**
 * Creates a email input field.
 */
sablono.core.email_field62343 = (function sablono$core$email_field62343(var_args){
var G__62345 = arguments.length;
switch (G__62345) {
case 1:
return sablono.core.email_field62343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field62343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field62343.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62256__auto__);
}));

(sablono.core.email_field62343.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.email_field62343.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field62343);

/**
 * Creates a file input field.
 */
sablono.core.file_field62346 = (function sablono$core$file_field62346(var_args){
var G__62348 = arguments.length;
switch (G__62348) {
case 1:
return sablono.core.file_field62346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field62346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field62346.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62256__auto__);
}));

(sablono.core.file_field62346.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.file_field62346.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field62346);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field62349 = (function sablono$core$hidden_field62349(var_args){
var G__62351 = arguments.length;
switch (G__62351) {
case 1:
return sablono.core.hidden_field62349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field62349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field62349.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62256__auto__);
}));

(sablono.core.hidden_field62349.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.hidden_field62349.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field62349);

/**
 * Creates a month input field.
 */
sablono.core.month_field62352 = (function sablono$core$month_field62352(var_args){
var G__62354 = arguments.length;
switch (G__62354) {
case 1:
return sablono.core.month_field62352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field62352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field62352.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62256__auto__);
}));

(sablono.core.month_field62352.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.month_field62352.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field62352);

/**
 * Creates a number input field.
 */
sablono.core.number_field62355 = (function sablono$core$number_field62355(var_args){
var G__62357 = arguments.length;
switch (G__62357) {
case 1:
return sablono.core.number_field62355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field62355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field62355.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62256__auto__);
}));

(sablono.core.number_field62355.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.number_field62355.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field62355);

/**
 * Creates a password input field.
 */
sablono.core.password_field62358 = (function sablono$core$password_field62358(var_args){
var G__62360 = arguments.length;
switch (G__62360) {
case 1:
return sablono.core.password_field62358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field62358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field62358.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62256__auto__);
}));

(sablono.core.password_field62358.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.password_field62358.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field62358);

/**
 * Creates a range input field.
 */
sablono.core.range_field62361 = (function sablono$core$range_field62361(var_args){
var G__62369 = arguments.length;
switch (G__62369) {
case 1:
return sablono.core.range_field62361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field62361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field62361.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62256__auto__);
}));

(sablono.core.range_field62361.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.range_field62361.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field62361);

/**
 * Creates a search input field.
 */
sablono.core.search_field62370 = (function sablono$core$search_field62370(var_args){
var G__62372 = arguments.length;
switch (G__62372) {
case 1:
return sablono.core.search_field62370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field62370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field62370.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62256__auto__);
}));

(sablono.core.search_field62370.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.search_field62370.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field62370);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field62373 = (function sablono$core$tel_field62373(var_args){
var G__62375 = arguments.length;
switch (G__62375) {
case 1:
return sablono.core.tel_field62373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field62373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field62373.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62256__auto__);
}));

(sablono.core.tel_field62373.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.tel_field62373.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field62373);

/**
 * Creates a text input field.
 */
sablono.core.text_field62379 = (function sablono$core$text_field62379(var_args){
var G__62381 = arguments.length;
switch (G__62381) {
case 1:
return sablono.core.text_field62379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field62379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field62379.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62256__auto__);
}));

(sablono.core.text_field62379.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.text_field62379.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field62379);

/**
 * Creates a time input field.
 */
sablono.core.time_field62383 = (function sablono$core$time_field62383(var_args){
var G__62385 = arguments.length;
switch (G__62385) {
case 1:
return sablono.core.time_field62383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field62383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field62383.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62256__auto__);
}));

(sablono.core.time_field62383.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.time_field62383.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field62383);

/**
 * Creates a url input field.
 */
sablono.core.url_field62388 = (function sablono$core$url_field62388(var_args){
var G__62390 = arguments.length;
switch (G__62390) {
case 1:
return sablono.core.url_field62388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field62388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field62388.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62256__auto__);
}));

(sablono.core.url_field62388.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.url_field62388.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field62388);

/**
 * Creates a week input field.
 */
sablono.core.week_field62391 = (function sablono$core$week_field62391(var_args){
var G__62393 = arguments.length;
switch (G__62393) {
case 1:
return sablono.core.week_field62391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field62391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field62391.cljs$core$IFn$_invoke$arity$1 = (function (name__62256__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62256__auto__);
}));

(sablono.core.week_field62391.cljs$core$IFn$_invoke$arity$2 = (function (name__62256__auto__,value__62257__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62256__auto__,value__62257__auto__);
}));

(sablono.core.week_field62391.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field62391);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box62394 = (function sablono$core$check_box62394(var_args){
var G__62396 = arguments.length;
switch (G__62396) {
case 1:
return sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62394.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62394.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box62394);
/**
 * Creates a radio button.
 */
sablono.core.radio_button62398 = (function sablono$core$radio_button62398(var_args){
var G__62400 = arguments.length;
switch (G__62400) {
case 1:
return sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62398.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62398.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button62398);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__62402 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__62402);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options62404 = (function sablono$core$select_options62404(coll){
var iter__4582__auto__ = (function sablono$core$select_options62404_$_iter__62411(s__62412){
return (new cljs.core.LazySeq(null,(function (){
var s__62412__$1 = s__62412;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62412__$1);
if(temp__5735__auto__){
var s__62412__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62412__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62412__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62414 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62413 = (0);
while(true){
if((i__62413 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62413);
cljs.core.chunk_append(b__62414,((cljs.core.sequential_QMARK_(x))?(function (){var vec__62417 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62417,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62417,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62417,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62404.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62404.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62404.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__62575 = (i__62413 + (1));
i__62413 = G__62575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62414),sablono$core$select_options62404_$_iter__62411(cljs.core.chunk_rest(s__62412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62414),null);
}
} else {
var x = cljs.core.first(s__62412__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__62423 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62423,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62423,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62423,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62404.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62404.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62404.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options62404_$_iter__62411(cljs.core.rest(s__62412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options62404);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down62427 = (function sablono$core$drop_down62427(var_args){
var G__62429 = arguments.length;
switch (G__62429) {
case 2:
return sablono.core.drop_down62427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down62427.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down62427.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down62427.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down62427.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down62427.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down62427);
/**
 * Creates a text area element.
 */
sablono.core.text_area62430 = (function sablono$core$text_area62430(var_args){
var G__62432 = arguments.length;
switch (G__62432) {
case 1:
return sablono.core.text_area62430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area62430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area62430.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area62430.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area62430.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area62430);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label62435 = (function sablono$core$label62435(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label62435);
/**
 * Creates a submit button.
 */
sablono.core.submit_button62436 = (function sablono$core$submit_button62436(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button62436);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button62437 = (function sablono$core$reset_button62437(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button62437);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to62438 = (function sablono$core$form_to62438(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62606 = arguments.length;
var i__4790__auto___62607 = (0);
while(true){
if((i__4790__auto___62607 < len__4789__auto___62606)){
args__4795__auto__.push((arguments[i__4790__auto___62607]));

var G__62608 = (i__4790__auto___62607 + (1));
i__4790__auto___62607 = G__62608;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to62438.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to62438.cljs$core$IFn$_invoke$arity$variadic = (function (p__62442,body){
var vec__62443 = p__62442;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62443,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__62446 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__62447 = "_method";
var G__62448 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__62446,G__62447,G__62448) : sablono.core.hidden_field.call(null,G__62446,G__62447,G__62448));
})()], null)),body));
}));

(sablono.core.form_to62438.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to62438.cljs$lang$applyTo = (function (seq62439){
var G__62440 = cljs.core.first(seq62439);
var seq62439__$1 = cljs.core.next(seq62439);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62440,seq62439__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to62438);

//# sourceMappingURL=sablono.core.js.map
