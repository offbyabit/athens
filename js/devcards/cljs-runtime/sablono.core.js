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
var G__53828__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__53621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__53622 = cljs.core.seq(vec__53621);
var first__53623 = cljs.core.first(seq__53622);
var seq__53622__$1 = cljs.core.next(seq__53622);
var tag = first__53623;
var body = seq__53622__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__53828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53829__i = 0, G__53829__a = new Array(arguments.length -  0);
while (G__53829__i < G__53829__a.length) {G__53829__a[G__53829__i] = arguments[G__53829__i + 0]; ++G__53829__i;}
  args = new cljs.core.IndexedSeq(G__53829__a,0,null);
} 
return G__53828__delegate.call(this,args);};
G__53828.cljs$lang$maxFixedArity = 0;
G__53828.cljs$lang$applyTo = (function (arglist__53830){
var args = cljs.core.seq(arglist__53830);
return G__53828__delegate(args);
});
G__53828.cljs$core$IFn$_invoke$arity$variadic = G__53828__delegate;
return G__53828;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__53627(s__53628){
return (new cljs.core.LazySeq(null,(function (){
var s__53628__$1 = s__53628;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53628__$1);
if(temp__5735__auto__){
var s__53628__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53628__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53628__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53630 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53629 = (0);
while(true){
if((i__53629 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53629);
cljs.core.chunk_append(b__53630,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__53831 = (i__53629 + (1));
i__53629 = G__53831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53630),sablono$core$update_arglists_$_iter__53627(cljs.core.chunk_rest(s__53628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53630),null);
}
} else {
var args = cljs.core.first(s__53628__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__53627(cljs.core.rest(s__53628__$2)));
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
var len__4789__auto___53835 = arguments.length;
var i__4790__auto___53836 = (0);
while(true){
if((i__4790__auto___53836 < len__4789__auto___53835)){
args__4795__auto__.push((arguments[i__4790__auto___53836]));

var G__53837 = (i__4790__auto___53836 + (1));
i__4790__auto___53836 = G__53837;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__53652(s__53653){
return (new cljs.core.LazySeq(null,(function (){
var s__53653__$1 = s__53653;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53653__$1);
if(temp__5735__auto__){
var s__53653__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53653__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53653__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53655 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53654 = (0);
while(true){
if((i__53654 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53654);
cljs.core.chunk_append(b__53655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__53843 = (i__53654 + (1));
i__53654 = G__53843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53655),sablono$core$iter__53652(cljs.core.chunk_rest(s__53653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53655),null);
}
} else {
var style = cljs.core.first(s__53653__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__53652(cljs.core.rest(s__53653__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq53642){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53642));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__53666 = goog.dom.getDocument().body;
var G__53667 = (function (){var G__53670 = "script";
var G__53671 = ({"src": src});
return goog.dom.createDom(G__53670,G__53671);
})();
return goog.dom.appendChild(G__53666,G__53667);
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
sablono.core.link_to53673 = (function sablono$core$link_to53673(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53846 = arguments.length;
var i__4790__auto___53847 = (0);
while(true){
if((i__4790__auto___53847 < len__4789__auto___53846)){
args__4795__auto__.push((arguments[i__4790__auto___53847]));

var G__53848 = (i__4790__auto___53847 + (1));
i__4790__auto___53847 = G__53848;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to53673.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to53673.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to53673.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to53673.cljs$lang$applyTo = (function (seq53676){
var G__53677 = cljs.core.first(seq53676);
var seq53676__$1 = cljs.core.next(seq53676);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53677,seq53676__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to53673);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to53682 = (function sablono$core$mail_to53682(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53851 = arguments.length;
var i__4790__auto___53852 = (0);
while(true){
if((i__4790__auto___53852 < len__4789__auto___53851)){
args__4795__auto__.push((arguments[i__4790__auto___53852]));

var G__53853 = (i__4790__auto___53852 + (1));
i__4790__auto___53852 = G__53853;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to53682.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to53682.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__53689){
var vec__53690 = p__53689;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53690,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to53682.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to53682.cljs$lang$applyTo = (function (seq53683){
var G__53684 = cljs.core.first(seq53683);
var seq53683__$1 = cljs.core.next(seq53683);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53684,seq53683__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to53682);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list53695 = (function sablono$core$unordered_list53695(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list53695_$_iter__53700(s__53701){
return (new cljs.core.LazySeq(null,(function (){
var s__53701__$1 = s__53701;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53701__$1);
if(temp__5735__auto__){
var s__53701__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53701__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53701__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53703 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53702 = (0);
while(true){
if((i__53702 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53702);
cljs.core.chunk_append(b__53703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53859 = (i__53702 + (1));
i__53702 = G__53859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53703),sablono$core$unordered_list53695_$_iter__53700(cljs.core.chunk_rest(s__53701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53703),null);
}
} else {
var x = cljs.core.first(s__53701__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list53695_$_iter__53700(cljs.core.rest(s__53701__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list53695);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list53704 = (function sablono$core$ordered_list53704(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list53704_$_iter__53705(s__53706){
return (new cljs.core.LazySeq(null,(function (){
var s__53706__$1 = s__53706;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53706__$1);
if(temp__5735__auto__){
var s__53706__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53706__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53706__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53708 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53707 = (0);
while(true){
if((i__53707 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53707);
cljs.core.chunk_append(b__53708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53862 = (i__53707 + (1));
i__53707 = G__53862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53708),sablono$core$ordered_list53704_$_iter__53705(cljs.core.chunk_rest(s__53706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53708),null);
}
} else {
var x = cljs.core.first(s__53706__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list53704_$_iter__53705(cljs.core.rest(s__53706__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list53704);
/**
 * Create an image element.
 */
sablono.core.image53709 = (function sablono$core$image53709(var_args){
var G__53711 = arguments.length;
switch (G__53711) {
case 1:
return sablono.core.image53709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image53709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image53709.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image53709.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image53709.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image53709);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__53712_SHARP_,p2__53713_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53712_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53713_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__53714_SHARP_,p2__53715_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53714_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53715_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__53717 = arguments.length;
switch (G__53717) {
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
sablono.core.color_field53718 = (function sablono$core$color_field53718(var_args){
var G__53720 = arguments.length;
switch (G__53720) {
case 1:
return sablono.core.color_field53718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field53718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field53718.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__53610__auto__);
}));

(sablono.core.color_field53718.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.color_field53718.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field53718);

/**
 * Creates a date input field.
 */
sablono.core.date_field53721 = (function sablono$core$date_field53721(var_args){
var G__53723 = arguments.length;
switch (G__53723) {
case 1:
return sablono.core.date_field53721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field53721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field53721.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__53610__auto__);
}));

(sablono.core.date_field53721.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.date_field53721.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field53721);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field53724 = (function sablono$core$datetime_field53724(var_args){
var G__53726 = arguments.length;
switch (G__53726) {
case 1:
return sablono.core.datetime_field53724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field53724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field53724.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__53610__auto__);
}));

(sablono.core.datetime_field53724.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.datetime_field53724.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field53724);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field53727 = (function sablono$core$datetime_local_field53727(var_args){
var G__53729 = arguments.length;
switch (G__53729) {
case 1:
return sablono.core.datetime_local_field53727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field53727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field53727.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__53610__auto__);
}));

(sablono.core.datetime_local_field53727.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.datetime_local_field53727.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field53727);

/**
 * Creates a email input field.
 */
sablono.core.email_field53730 = (function sablono$core$email_field53730(var_args){
var G__53732 = arguments.length;
switch (G__53732) {
case 1:
return sablono.core.email_field53730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field53730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field53730.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__53610__auto__);
}));

(sablono.core.email_field53730.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.email_field53730.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field53730);

/**
 * Creates a file input field.
 */
sablono.core.file_field53733 = (function sablono$core$file_field53733(var_args){
var G__53735 = arguments.length;
switch (G__53735) {
case 1:
return sablono.core.file_field53733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field53733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field53733.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__53610__auto__);
}));

(sablono.core.file_field53733.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.file_field53733.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field53733);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field53736 = (function sablono$core$hidden_field53736(var_args){
var G__53738 = arguments.length;
switch (G__53738) {
case 1:
return sablono.core.hidden_field53736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field53736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field53736.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__53610__auto__);
}));

(sablono.core.hidden_field53736.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.hidden_field53736.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field53736);

/**
 * Creates a month input field.
 */
sablono.core.month_field53739 = (function sablono$core$month_field53739(var_args){
var G__53741 = arguments.length;
switch (G__53741) {
case 1:
return sablono.core.month_field53739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field53739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field53739.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__53610__auto__);
}));

(sablono.core.month_field53739.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.month_field53739.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field53739);

/**
 * Creates a number input field.
 */
sablono.core.number_field53742 = (function sablono$core$number_field53742(var_args){
var G__53744 = arguments.length;
switch (G__53744) {
case 1:
return sablono.core.number_field53742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field53742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field53742.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__53610__auto__);
}));

(sablono.core.number_field53742.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.number_field53742.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field53742);

/**
 * Creates a password input field.
 */
sablono.core.password_field53747 = (function sablono$core$password_field53747(var_args){
var G__53751 = arguments.length;
switch (G__53751) {
case 1:
return sablono.core.password_field53747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field53747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field53747.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__53610__auto__);
}));

(sablono.core.password_field53747.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.password_field53747.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field53747);

/**
 * Creates a range input field.
 */
sablono.core.range_field53755 = (function sablono$core$range_field53755(var_args){
var G__53757 = arguments.length;
switch (G__53757) {
case 1:
return sablono.core.range_field53755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field53755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field53755.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__53610__auto__);
}));

(sablono.core.range_field53755.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.range_field53755.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field53755);

/**
 * Creates a search input field.
 */
sablono.core.search_field53762 = (function sablono$core$search_field53762(var_args){
var G__53766 = arguments.length;
switch (G__53766) {
case 1:
return sablono.core.search_field53762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field53762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field53762.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__53610__auto__);
}));

(sablono.core.search_field53762.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.search_field53762.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field53762);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field53770 = (function sablono$core$tel_field53770(var_args){
var G__53772 = arguments.length;
switch (G__53772) {
case 1:
return sablono.core.tel_field53770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field53770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field53770.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__53610__auto__);
}));

(sablono.core.tel_field53770.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.tel_field53770.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field53770);

/**
 * Creates a text input field.
 */
sablono.core.text_field53776 = (function sablono$core$text_field53776(var_args){
var G__53778 = arguments.length;
switch (G__53778) {
case 1:
return sablono.core.text_field53776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field53776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field53776.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__53610__auto__);
}));

(sablono.core.text_field53776.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.text_field53776.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field53776);

/**
 * Creates a time input field.
 */
sablono.core.time_field53782 = (function sablono$core$time_field53782(var_args){
var G__53784 = arguments.length;
switch (G__53784) {
case 1:
return sablono.core.time_field53782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field53782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field53782.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__53610__auto__);
}));

(sablono.core.time_field53782.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.time_field53782.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field53782);

/**
 * Creates a url input field.
 */
sablono.core.url_field53785 = (function sablono$core$url_field53785(var_args){
var G__53787 = arguments.length;
switch (G__53787) {
case 1:
return sablono.core.url_field53785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field53785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field53785.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__53610__auto__);
}));

(sablono.core.url_field53785.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.url_field53785.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field53785);

/**
 * Creates a week input field.
 */
sablono.core.week_field53788 = (function sablono$core$week_field53788(var_args){
var G__53790 = arguments.length;
switch (G__53790) {
case 1:
return sablono.core.week_field53788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field53788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field53788.cljs$core$IFn$_invoke$arity$1 = (function (name__53610__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__53610__auto__);
}));

(sablono.core.week_field53788.cljs$core$IFn$_invoke$arity$2 = (function (name__53610__auto__,value__53611__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__53610__auto__,value__53611__auto__);
}));

(sablono.core.week_field53788.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field53788);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box53791 = (function sablono$core$check_box53791(var_args){
var G__53793 = arguments.length;
switch (G__53793) {
case 1:
return sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box53791.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box53791.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box53791);
/**
 * Creates a radio button.
 */
sablono.core.radio_button53794 = (function sablono$core$radio_button53794(var_args){
var G__53796 = arguments.length;
switch (G__53796) {
case 1:
return sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button53794.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button53794.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button53794);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__53797 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__53797);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options53798 = (function sablono$core$select_options53798(coll){
var iter__4582__auto__ = (function sablono$core$select_options53798_$_iter__53799(s__53800){
return (new cljs.core.LazySeq(null,(function (){
var s__53800__$1 = s__53800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53800__$1);
if(temp__5735__auto__){
var s__53800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53800__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53800__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53802 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53801 = (0);
while(true){
if((i__53801 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53801);
cljs.core.chunk_append(b__53802,((cljs.core.sequential_QMARK_(x))?(function (){var vec__53803 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53803,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53803,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53803,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options53798.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options53798.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options53798.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__53982 = (i__53801 + (1));
i__53801 = G__53982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53802),sablono$core$select_options53798_$_iter__53799(cljs.core.chunk_rest(s__53800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53802),null);
}
} else {
var x = cljs.core.first(s__53800__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__53806 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53806,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53806,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53806,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options53798.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options53798.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options53798.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options53798_$_iter__53799(cljs.core.rest(s__53800__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options53798);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down53809 = (function sablono$core$drop_down53809(var_args){
var G__53811 = arguments.length;
switch (G__53811) {
case 2:
return sablono.core.drop_down53809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down53809.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down53809.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down53809.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down53809.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down53809.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down53809);
/**
 * Creates a text area element.
 */
sablono.core.text_area53812 = (function sablono$core$text_area53812(var_args){
var G__53814 = arguments.length;
switch (G__53814) {
case 1:
return sablono.core.text_area53812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area53812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area53812.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area53812.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area53812.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area53812);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label53815 = (function sablono$core$label53815(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label53815);
/**
 * Creates a submit button.
 */
sablono.core.submit_button53816 = (function sablono$core$submit_button53816(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button53816);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button53817 = (function sablono$core$reset_button53817(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button53817);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to53818 = (function sablono$core$form_to53818(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54002 = arguments.length;
var i__4790__auto___54003 = (0);
while(true){
if((i__4790__auto___54003 < len__4789__auto___54002)){
args__4795__auto__.push((arguments[i__4790__auto___54003]));

var G__54004 = (i__4790__auto___54003 + (1));
i__4790__auto___54003 = G__54004;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to53818.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to53818.cljs$core$IFn$_invoke$arity$variadic = (function (p__53821,body){
var vec__53822 = p__53821;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53822,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53822,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__53825 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__53826 = "_method";
var G__53827 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__53825,G__53826,G__53827) : sablono.core.hidden_field.call(null,G__53825,G__53826,G__53827));
})()], null)),body));
}));

(sablono.core.form_to53818.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to53818.cljs$lang$applyTo = (function (seq53819){
var G__53820 = cljs.core.first(seq53819);
var seq53819__$1 = cljs.core.next(seq53819);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53820,seq53819__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to53818);

//# sourceMappingURL=sablono.core.js.map
