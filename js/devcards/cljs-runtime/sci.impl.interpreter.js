goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__51788 = xs;
args__$2 = G__51788;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__51789 = xs;
args__$2 = G__51789;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51790 = arguments.length;
var i__4790__auto___51791 = (0);
while(true){
if((i__4790__auto___51791 < len__4789__auto___51790)){
args__4795__auto__.push((arguments[i__4790__auto___51791]));

var G__51792 = (i__4790__auto___51791 + (1));
i__4790__auto___51791 = G__51792;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__51793 = ctx__$2;
var G__51794 = rest_let_bindings;
ctx__$1 = G__51793;
let_bindings__$1 = G__51794;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__51795 = nexprs;
exprs__$1 = G__51795;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq50988){
var G__50989 = cljs.core.first(seq50988);
var seq50988__$1 = cljs.core.next(seq50988);
var G__50990 = cljs.core.first(seq50988__$1);
var seq50988__$2 = cljs.core.next(seq50988__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50989,G__50990,seq50988__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__50997){
var vec__50998 = p__50997;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50998,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50998,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50998,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50998,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__51001 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__51002 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51001,G__51002) : sci.impl.utils.kw_identical_QMARK_.call(null,G__51001,G__51002));
})())?(function (){var G__51003 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51003,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__51003;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__51007 = libspec;
var seq__51008 = cljs.core.seq(vec__51007);
var first__51009 = cljs.core.first(seq__51008);
var seq__51008__$1 = cljs.core.next(seq__51008);
var lib_name = first__51009;
var opts = seq__51008__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__51013 = opts;
var vec__51014 = G__51013;
var seq__51015 = cljs.core.seq(vec__51014);
var first__51016 = cljs.core.first(seq__51015);
var seq__51015__$1 = cljs.core.next(seq__51015);
var opt_name = first__51016;
var first__51016__$1 = cljs.core.first(seq__51015__$1);
var seq__51015__$2 = cljs.core.next(seq__51015__$1);
var fst_opt = first__51016__$1;
var rst_opts = seq__51015__$2;
var ret__$1 = ret;
var G__51013__$1 = G__51013;
while(true){
var ret__$2 = ret__$1;
var vec__51021 = G__51013__$1;
var seq__51022 = cljs.core.seq(vec__51021);
var first__51023 = cljs.core.first(seq__51022);
var seq__51022__$1 = cljs.core.next(seq__51022);
var opt_name__$1 = first__51023;
var first__51023__$1 = cljs.core.first(seq__51022__$1);
var seq__51022__$2 = cljs.core.next(seq__51022__$1);
var fst_opt__$1 = first__51023__$1;
var rst_opts__$1 = seq__51022__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__51024 = opt_name__$1;
var G__51024__$1 = (((G__51024 instanceof cljs.core.Keyword))?G__51024.fqn:null);
switch (G__51024__$1) {
case "as":
var G__51800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__51801 = rst_opts__$1;
ret__$1 = G__51800;
G__51013__$1 = G__51801;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__51802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__51803 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__51802;
G__51013__$1 = G__51803;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__51804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__51805 = rst_opts__$1;
ret__$1 = G__51804;
G__51013__$1 = G__51805;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51024__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__51025){
var vec__51026 = p__51025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__51029){
var map__51032 = p__51029;
var map__51032__$1 = (((((!((map__51032 == null))))?(((((map__51032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51032):map__51032);
var _parsed_libspec = map__51032__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__51037 = new cljs.core.Keyword(null,"all","all",892129742);
var G__51038 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51037,G__51038) : sci.impl.utils.kw_identical_QMARK_.call(null,G__51037,G__51038));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51039 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51039,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__51045 = sci.impl.interpreter.parse_libspec(libspec);
var map__51045__$1 = (((((!((map__51045 == null))))?(((((map__51045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51045):map__51045);
var parsed_libspec = map__51045__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__51047 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__51047) : load_fn.call(null,G__51047));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__51048 = temp__5733__auto____$2;
var map__51048__$1 = (((((!((map__51048 == null))))?(((((map__51048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51048):map__51048);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51048__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51048__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__51051_51830 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__51052_51831 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__51051_51830,G__51052_51831) : sci.impl.interpreter.eval_string_STAR_.call(null,G__51051_51830,G__51052_51831));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e51050){if((e51050 instanceof Error)){
var e_51832 = e51050;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_51832;
} else {
throw e51050;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51834 = arguments.length;
var i__4790__auto___51835 = (0);
while(true){
if((i__4790__auto___51835 < len__4789__auto___51834)){
args__4795__auto__.push((arguments[i__4790__auto___51835]));

var G__51836 = (i__4790__auto___51835 + (1));
i__4790__auto___51835 = G__51836;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__51065 = ctx;
var G__51066 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51065,G__51066) : sci.impl.interpreter.interpret.call(null,G__51065,G__51066));
})();
if((ret instanceof cljs.core.Symbol)){
var G__51838 = (function (){var G__51067 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51067,current_libspec);
} else {
return G__51067;
}
})();
var G__51839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__51840 = cljs.core.next(args__$1);
libspecs = G__51838;
current_libspec = G__51839;
args__$1 = G__51840;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__51842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__51843 = null;
var G__51844 = cljs.core.next(args__$1);
libspecs = G__51842;
current_libspec = G__51843;
args__$1 = G__51844;
continue;
} else {
var G__51845 = (function (){var G__51068 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51068,current_libspec);
} else {
return G__51068;
}
})();
var G__51846 = ret;
var G__51847 = cljs.core.next(args__$1);
libspecs = G__51845;
current_libspec = G__51846;
args__$1 = G__51847;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__51069 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51069,current_libspec);
} else {
return G__51069;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__51054_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__51054_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq51055){
var G__51056 = cljs.core.first(seq51055);
var seq51055__$1 = cljs.core.next(seq51055);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51056,seq51055__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51849 = arguments.length;
var i__4790__auto___51850 = (0);
while(true){
if((i__4790__auto___51850 < len__4789__auto___51849)){
args__4795__auto__.push((arguments[i__4790__auto___51850]));

var G__51851 = (i__4790__auto___51850 + (1));
i__4790__auto___51850 = G__51851;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq51071){
var G__51072 = cljs.core.first(seq51071);
var seq51071__$1 = cljs.core.next(seq51071);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51072,seq51071__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__51075){
var vec__51076 = p__51075;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(0),null);
var map__51079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(1),null);
var map__51079__$1 = (((((!((map__51079 == null))))?(((((map__51079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51079):map__51079);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51081 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51081,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51081,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__51084 = ctx;
var G__51085 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51084,G__51085) : sci.impl.interpreter.interpret.call(null,G__51084,G__51085));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__51086 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__51086__$1 = (((((!((map__51086 == null))))?(((((map__51086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51086):map__51086);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__51094 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__51095 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__51095);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__51094);
}}catch (e51088){if((e51088 instanceof Error)){
var e = e51088;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__51089 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__51090 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51089,G__51090) : sci.impl.interpreter.interpret.call(null,G__51089,G__51090));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51091 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e51088;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__51096){
var vec__51097 = p__51096;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51097,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51097,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51101_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51101_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51101_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__51105){
var vec__51106 = p__51105;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51104_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51104_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51104_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__51114,p__51115){
var map__51116 = p__51114;
var map__51116__$1 = (((((!((map__51116 == null))))?(((((map__51116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51116):map__51116);
var ctx = map__51116__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__51117 = p__51115;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51117,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51117,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51117,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51117,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51113_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51113_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51113_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__51127){
var vec__51128 = p__51127;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51128,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51128,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__51131){
var vec__51132 = p__51131;
var seq__51133 = cljs.core.seq(vec__51132);
var first__51134 = cljs.core.first(seq__51133);
var seq__51133__$1 = cljs.core.next(seq__51133);
var _ = first__51134;
var first__51134__$1 = cljs.core.first(seq__51133__$1);
var seq__51133__$2 = cljs.core.next(seq__51133__$1);
var ns_sym = first__51134__$1;
var exprs = seq__51133__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__51135 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51135,(1),null);
var G__51138_51904 = k;
var G__51138_51905__$1 = (((G__51138_51904 instanceof cljs.core.Keyword))?G__51138_51904.fqn:null);
switch (G__51138_51905__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51138_51904,G__51138_51905__$1,vec__51135,k,v,ns_sym__$1,vec__51132,seq__51133,first__51134,seq__51133__$1,_,first__51134__$1,seq__51133__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__51138_51904,G__51138_51905__$1,vec__51135,k,v,ns_sym__$1,vec__51132,seq__51133,first__51134,seq__51133__$1,_,first__51134__$1,seq__51133__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51138_51905__$1)].join('')));

}

var G__51908 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__51908;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__51142){
var vec__51143 = p__51142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51143,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51143,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51143,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__51149 = exprs;
var vec__51150 = G__51149;
var seq__51151 = cljs.core.seq(vec__51150);
var first__51152 = cljs.core.first(seq__51151);
var seq__51151__$1 = cljs.core.next(seq__51151);
var expr = first__51152;
var exprs__$1 = seq__51151__$1;
var G__51149__$1 = G__51149;
while(true){
var vec__51153 = G__51149__$1;
var seq__51154 = cljs.core.seq(vec__51153);
var first__51155 = cljs.core.first(seq__51154);
var seq__51154__$1 = cljs.core.next(seq__51154);
var expr__$1 = first__51155;
var exprs__$2 = seq__51154__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e51156){if((e51156 instanceof Error)){
var e = e51156;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e51156;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__51916 = exprs__$3;
G__51149__$1 = G__51916;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__51353 = cljs.core.count(args);
switch (G__51353) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg51163 = (function (){var G__51354 = ctx;
var G__51355 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51354,G__51355) : sci.impl.interpreter.interpret.call(null,G__51354,G__51355));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg51163) : f.call(null,arg51163));

break;
case (2):
var arg51164 = (function (){var G__51356 = ctx;
var G__51357 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51356,G__51357) : sci.impl.interpreter.interpret.call(null,G__51356,G__51357));
})();
var args__$1 = cljs.core.rest(args);
var arg51165 = (function (){var G__51358 = ctx;
var G__51359 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51358,G__51359) : sci.impl.interpreter.interpret.call(null,G__51358,G__51359));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg51164,arg51165) : f.call(null,arg51164,arg51165));

break;
case (3):
var arg51166 = (function (){var G__51360 = ctx;
var G__51361 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51360,G__51361) : sci.impl.interpreter.interpret.call(null,G__51360,G__51361));
})();
var args__$1 = cljs.core.rest(args);
var arg51167 = (function (){var G__51362 = ctx;
var G__51363 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51362,G__51363) : sci.impl.interpreter.interpret.call(null,G__51362,G__51363));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51168 = (function (){var G__51364 = ctx;
var G__51365 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51364,G__51365) : sci.impl.interpreter.interpret.call(null,G__51364,G__51365));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg51166,arg51167,arg51168) : f.call(null,arg51166,arg51167,arg51168));

break;
case (4):
var arg51169 = (function (){var G__51366 = ctx;
var G__51367 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51366,G__51367) : sci.impl.interpreter.interpret.call(null,G__51366,G__51367));
})();
var args__$1 = cljs.core.rest(args);
var arg51170 = (function (){var G__51368 = ctx;
var G__51369 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51368,G__51369) : sci.impl.interpreter.interpret.call(null,G__51368,G__51369));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51171 = (function (){var G__51370 = ctx;
var G__51371 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51370,G__51371) : sci.impl.interpreter.interpret.call(null,G__51370,G__51371));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51172 = (function (){var G__51372 = ctx;
var G__51373 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51372,G__51373) : sci.impl.interpreter.interpret.call(null,G__51372,G__51373));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg51169,arg51170,arg51171,arg51172) : f.call(null,arg51169,arg51170,arg51171,arg51172));

break;
case (5):
var arg51173 = (function (){var G__51374 = ctx;
var G__51375 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51374,G__51375) : sci.impl.interpreter.interpret.call(null,G__51374,G__51375));
})();
var args__$1 = cljs.core.rest(args);
var arg51174 = (function (){var G__51376 = ctx;
var G__51377 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51376,G__51377) : sci.impl.interpreter.interpret.call(null,G__51376,G__51377));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51175 = (function (){var G__51378 = ctx;
var G__51379 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51378,G__51379) : sci.impl.interpreter.interpret.call(null,G__51378,G__51379));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51176 = (function (){var G__51380 = ctx;
var G__51381 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51380,G__51381) : sci.impl.interpreter.interpret.call(null,G__51380,G__51381));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51177 = (function (){var G__51382 = ctx;
var G__51383 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51382,G__51383) : sci.impl.interpreter.interpret.call(null,G__51382,G__51383));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg51173,arg51174,arg51175,arg51176,arg51177) : f.call(null,arg51173,arg51174,arg51175,arg51176,arg51177));

break;
case (6):
var arg51178 = (function (){var G__51384 = ctx;
var G__51385 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51384,G__51385) : sci.impl.interpreter.interpret.call(null,G__51384,G__51385));
})();
var args__$1 = cljs.core.rest(args);
var arg51179 = (function (){var G__51386 = ctx;
var G__51387 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51386,G__51387) : sci.impl.interpreter.interpret.call(null,G__51386,G__51387));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51180 = (function (){var G__51388 = ctx;
var G__51389 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51388,G__51389) : sci.impl.interpreter.interpret.call(null,G__51388,G__51389));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51181 = (function (){var G__51390 = ctx;
var G__51391 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51390,G__51391) : sci.impl.interpreter.interpret.call(null,G__51390,G__51391));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51182 = (function (){var G__51392 = ctx;
var G__51393 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51392,G__51393) : sci.impl.interpreter.interpret.call(null,G__51392,G__51393));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51183 = (function (){var G__51394 = ctx;
var G__51395 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51394,G__51395) : sci.impl.interpreter.interpret.call(null,G__51394,G__51395));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg51178,arg51179,arg51180,arg51181,arg51182,arg51183) : f.call(null,arg51178,arg51179,arg51180,arg51181,arg51182,arg51183));

break;
case (7):
var arg51184 = (function (){var G__51396 = ctx;
var G__51397 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51396,G__51397) : sci.impl.interpreter.interpret.call(null,G__51396,G__51397));
})();
var args__$1 = cljs.core.rest(args);
var arg51185 = (function (){var G__51398 = ctx;
var G__51399 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51398,G__51399) : sci.impl.interpreter.interpret.call(null,G__51398,G__51399));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51186 = (function (){var G__51400 = ctx;
var G__51401 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51400,G__51401) : sci.impl.interpreter.interpret.call(null,G__51400,G__51401));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51187 = (function (){var G__51402 = ctx;
var G__51403 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51402,G__51403) : sci.impl.interpreter.interpret.call(null,G__51402,G__51403));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51188 = (function (){var G__51404 = ctx;
var G__51405 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51404,G__51405) : sci.impl.interpreter.interpret.call(null,G__51404,G__51405));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51189 = (function (){var G__51406 = ctx;
var G__51407 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51406,G__51407) : sci.impl.interpreter.interpret.call(null,G__51406,G__51407));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51190 = (function (){var G__51408 = ctx;
var G__51409 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51408,G__51409) : sci.impl.interpreter.interpret.call(null,G__51408,G__51409));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg51184,arg51185,arg51186,arg51187,arg51188,arg51189,arg51190) : f.call(null,arg51184,arg51185,arg51186,arg51187,arg51188,arg51189,arg51190));

break;
case (8):
var arg51191 = (function (){var G__51410 = ctx;
var G__51411 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51410,G__51411) : sci.impl.interpreter.interpret.call(null,G__51410,G__51411));
})();
var args__$1 = cljs.core.rest(args);
var arg51192 = (function (){var G__51412 = ctx;
var G__51413 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51412,G__51413) : sci.impl.interpreter.interpret.call(null,G__51412,G__51413));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51193 = (function (){var G__51414 = ctx;
var G__51415 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51414,G__51415) : sci.impl.interpreter.interpret.call(null,G__51414,G__51415));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51194 = (function (){var G__51416 = ctx;
var G__51417 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51416,G__51417) : sci.impl.interpreter.interpret.call(null,G__51416,G__51417));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51195 = (function (){var G__51418 = ctx;
var G__51419 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51418,G__51419) : sci.impl.interpreter.interpret.call(null,G__51418,G__51419));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51196 = (function (){var G__51420 = ctx;
var G__51421 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51420,G__51421) : sci.impl.interpreter.interpret.call(null,G__51420,G__51421));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51197 = (function (){var G__51423 = ctx;
var G__51424 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51423,G__51424) : sci.impl.interpreter.interpret.call(null,G__51423,G__51424));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51198 = (function (){var G__51425 = ctx;
var G__51426 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51425,G__51426) : sci.impl.interpreter.interpret.call(null,G__51425,G__51426));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg51191,arg51192,arg51193,arg51194,arg51195,arg51196,arg51197,arg51198) : f.call(null,arg51191,arg51192,arg51193,arg51194,arg51195,arg51196,arg51197,arg51198));

break;
case (9):
var arg51199 = (function (){var G__51427 = ctx;
var G__51428 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51427,G__51428) : sci.impl.interpreter.interpret.call(null,G__51427,G__51428));
})();
var args__$1 = cljs.core.rest(args);
var arg51200 = (function (){var G__51429 = ctx;
var G__51430 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51429,G__51430) : sci.impl.interpreter.interpret.call(null,G__51429,G__51430));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51201 = (function (){var G__51431 = ctx;
var G__51432 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51431,G__51432) : sci.impl.interpreter.interpret.call(null,G__51431,G__51432));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51202 = (function (){var G__51433 = ctx;
var G__51434 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51433,G__51434) : sci.impl.interpreter.interpret.call(null,G__51433,G__51434));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51203 = (function (){var G__51435 = ctx;
var G__51436 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51435,G__51436) : sci.impl.interpreter.interpret.call(null,G__51435,G__51436));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51204 = (function (){var G__51437 = ctx;
var G__51438 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51437,G__51438) : sci.impl.interpreter.interpret.call(null,G__51437,G__51438));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51205 = (function (){var G__51439 = ctx;
var G__51440 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51439,G__51440) : sci.impl.interpreter.interpret.call(null,G__51439,G__51440));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51206 = (function (){var G__51442 = ctx;
var G__51443 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51442,G__51443) : sci.impl.interpreter.interpret.call(null,G__51442,G__51443));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51207 = (function (){var G__51446 = ctx;
var G__51447 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51446,G__51447) : sci.impl.interpreter.interpret.call(null,G__51446,G__51447));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg51199,arg51200,arg51201,arg51202,arg51203,arg51204,arg51205,arg51206,arg51207) : f.call(null,arg51199,arg51200,arg51201,arg51202,arg51203,arg51204,arg51205,arg51206,arg51207));

break;
case (10):
var arg51208 = (function (){var G__51452 = ctx;
var G__51453 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51452,G__51453) : sci.impl.interpreter.interpret.call(null,G__51452,G__51453));
})();
var args__$1 = cljs.core.rest(args);
var arg51209 = (function (){var G__51455 = ctx;
var G__51456 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51455,G__51456) : sci.impl.interpreter.interpret.call(null,G__51455,G__51456));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51210 = (function (){var G__51457 = ctx;
var G__51458 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51457,G__51458) : sci.impl.interpreter.interpret.call(null,G__51457,G__51458));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51211 = (function (){var G__51459 = ctx;
var G__51460 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51459,G__51460) : sci.impl.interpreter.interpret.call(null,G__51459,G__51460));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51212 = (function (){var G__51461 = ctx;
var G__51462 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51461,G__51462) : sci.impl.interpreter.interpret.call(null,G__51461,G__51462));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51213 = (function (){var G__51463 = ctx;
var G__51464 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51463,G__51464) : sci.impl.interpreter.interpret.call(null,G__51463,G__51464));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51214 = (function (){var G__51465 = ctx;
var G__51466 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51465,G__51466) : sci.impl.interpreter.interpret.call(null,G__51465,G__51466));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51215 = (function (){var G__51467 = ctx;
var G__51468 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51467,G__51468) : sci.impl.interpreter.interpret.call(null,G__51467,G__51468));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51216 = (function (){var G__51469 = ctx;
var G__51470 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51469,G__51470) : sci.impl.interpreter.interpret.call(null,G__51469,G__51470));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51217 = (function (){var G__51471 = ctx;
var G__51472 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51471,G__51472) : sci.impl.interpreter.interpret.call(null,G__51471,G__51472));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg51208,arg51209,arg51210,arg51211,arg51212,arg51213,arg51214,arg51215,arg51216,arg51217) : f.call(null,arg51208,arg51209,arg51210,arg51211,arg51212,arg51213,arg51214,arg51215,arg51216,arg51217));

break;
case (11):
var arg51218 = (function (){var G__51473 = ctx;
var G__51474 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51473,G__51474) : sci.impl.interpreter.interpret.call(null,G__51473,G__51474));
})();
var args__$1 = cljs.core.rest(args);
var arg51219 = (function (){var G__51476 = ctx;
var G__51477 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51476,G__51477) : sci.impl.interpreter.interpret.call(null,G__51476,G__51477));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51220 = (function (){var G__51480 = ctx;
var G__51481 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51480,G__51481) : sci.impl.interpreter.interpret.call(null,G__51480,G__51481));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51221 = (function (){var G__51482 = ctx;
var G__51483 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51482,G__51483) : sci.impl.interpreter.interpret.call(null,G__51482,G__51483));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51222 = (function (){var G__51484 = ctx;
var G__51485 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51484,G__51485) : sci.impl.interpreter.interpret.call(null,G__51484,G__51485));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51223 = (function (){var G__51486 = ctx;
var G__51487 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51486,G__51487) : sci.impl.interpreter.interpret.call(null,G__51486,G__51487));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51224 = (function (){var G__51488 = ctx;
var G__51489 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51488,G__51489) : sci.impl.interpreter.interpret.call(null,G__51488,G__51489));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51225 = (function (){var G__51490 = ctx;
var G__51491 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51490,G__51491) : sci.impl.interpreter.interpret.call(null,G__51490,G__51491));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51226 = (function (){var G__51492 = ctx;
var G__51493 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51492,G__51493) : sci.impl.interpreter.interpret.call(null,G__51492,G__51493));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51227 = (function (){var G__51494 = ctx;
var G__51495 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51494,G__51495) : sci.impl.interpreter.interpret.call(null,G__51494,G__51495));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51228 = (function (){var G__51496 = ctx;
var G__51497 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51496,G__51497) : sci.impl.interpreter.interpret.call(null,G__51496,G__51497));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg51218,arg51219,arg51220,arg51221,arg51222,arg51223,arg51224,arg51225,arg51226,arg51227,arg51228) : f.call(null,arg51218,arg51219,arg51220,arg51221,arg51222,arg51223,arg51224,arg51225,arg51226,arg51227,arg51228));

break;
case (12):
var arg51229 = (function (){var G__51498 = ctx;
var G__51499 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51498,G__51499) : sci.impl.interpreter.interpret.call(null,G__51498,G__51499));
})();
var args__$1 = cljs.core.rest(args);
var arg51230 = (function (){var G__51500 = ctx;
var G__51501 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51500,G__51501) : sci.impl.interpreter.interpret.call(null,G__51500,G__51501));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51231 = (function (){var G__51502 = ctx;
var G__51503 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51502,G__51503) : sci.impl.interpreter.interpret.call(null,G__51502,G__51503));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51232 = (function (){var G__51504 = ctx;
var G__51505 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51504,G__51505) : sci.impl.interpreter.interpret.call(null,G__51504,G__51505));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51233 = (function (){var G__51506 = ctx;
var G__51507 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51506,G__51507) : sci.impl.interpreter.interpret.call(null,G__51506,G__51507));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51234 = (function (){var G__51508 = ctx;
var G__51509 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51508,G__51509) : sci.impl.interpreter.interpret.call(null,G__51508,G__51509));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51235 = (function (){var G__51510 = ctx;
var G__51511 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51510,G__51511) : sci.impl.interpreter.interpret.call(null,G__51510,G__51511));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51236 = (function (){var G__51524 = ctx;
var G__51525 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51524,G__51525) : sci.impl.interpreter.interpret.call(null,G__51524,G__51525));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51237 = (function (){var G__51529 = ctx;
var G__51530 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51529,G__51530) : sci.impl.interpreter.interpret.call(null,G__51529,G__51530));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51238 = (function (){var G__51531 = ctx;
var G__51532 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51531,G__51532) : sci.impl.interpreter.interpret.call(null,G__51531,G__51532));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51239 = (function (){var G__51533 = ctx;
var G__51534 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51533,G__51534) : sci.impl.interpreter.interpret.call(null,G__51533,G__51534));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51240 = (function (){var G__51535 = ctx;
var G__51536 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51535,G__51536) : sci.impl.interpreter.interpret.call(null,G__51535,G__51536));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg51229,arg51230,arg51231,arg51232,arg51233,arg51234,arg51235,arg51236,arg51237,arg51238,arg51239,arg51240) : f.call(null,arg51229,arg51230,arg51231,arg51232,arg51233,arg51234,arg51235,arg51236,arg51237,arg51238,arg51239,arg51240));

break;
case (13):
var arg51241 = (function (){var G__51537 = ctx;
var G__51538 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51537,G__51538) : sci.impl.interpreter.interpret.call(null,G__51537,G__51538));
})();
var args__$1 = cljs.core.rest(args);
var arg51242 = (function (){var G__51539 = ctx;
var G__51540 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51539,G__51540) : sci.impl.interpreter.interpret.call(null,G__51539,G__51540));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51243 = (function (){var G__51541 = ctx;
var G__51542 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51541,G__51542) : sci.impl.interpreter.interpret.call(null,G__51541,G__51542));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51244 = (function (){var G__51543 = ctx;
var G__51544 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51543,G__51544) : sci.impl.interpreter.interpret.call(null,G__51543,G__51544));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51245 = (function (){var G__51545 = ctx;
var G__51546 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51545,G__51546) : sci.impl.interpreter.interpret.call(null,G__51545,G__51546));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51246 = (function (){var G__51547 = ctx;
var G__51548 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51547,G__51548) : sci.impl.interpreter.interpret.call(null,G__51547,G__51548));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51247 = (function (){var G__51549 = ctx;
var G__51550 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51549,G__51550) : sci.impl.interpreter.interpret.call(null,G__51549,G__51550));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51248 = (function (){var G__51551 = ctx;
var G__51552 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51551,G__51552) : sci.impl.interpreter.interpret.call(null,G__51551,G__51552));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51249 = (function (){var G__51553 = ctx;
var G__51554 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51553,G__51554) : sci.impl.interpreter.interpret.call(null,G__51553,G__51554));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51250 = (function (){var G__51555 = ctx;
var G__51556 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51555,G__51556) : sci.impl.interpreter.interpret.call(null,G__51555,G__51556));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51251 = (function (){var G__51557 = ctx;
var G__51558 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51557,G__51558) : sci.impl.interpreter.interpret.call(null,G__51557,G__51558));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51252 = (function (){var G__51559 = ctx;
var G__51560 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51559,G__51560) : sci.impl.interpreter.interpret.call(null,G__51559,G__51560));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51253 = (function (){var G__51561 = ctx;
var G__51562 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51561,G__51562) : sci.impl.interpreter.interpret.call(null,G__51561,G__51562));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg51241,arg51242,arg51243,arg51244,arg51245,arg51246,arg51247,arg51248,arg51249,arg51250,arg51251,arg51252,arg51253) : f.call(null,arg51241,arg51242,arg51243,arg51244,arg51245,arg51246,arg51247,arg51248,arg51249,arg51250,arg51251,arg51252,arg51253));

break;
case (14):
var arg51254 = (function (){var G__51563 = ctx;
var G__51564 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51563,G__51564) : sci.impl.interpreter.interpret.call(null,G__51563,G__51564));
})();
var args__$1 = cljs.core.rest(args);
var arg51255 = (function (){var G__51565 = ctx;
var G__51566 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51565,G__51566) : sci.impl.interpreter.interpret.call(null,G__51565,G__51566));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51256 = (function (){var G__51567 = ctx;
var G__51568 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51567,G__51568) : sci.impl.interpreter.interpret.call(null,G__51567,G__51568));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51257 = (function (){var G__51569 = ctx;
var G__51570 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51569,G__51570) : sci.impl.interpreter.interpret.call(null,G__51569,G__51570));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51258 = (function (){var G__51571 = ctx;
var G__51572 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51571,G__51572) : sci.impl.interpreter.interpret.call(null,G__51571,G__51572));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51259 = (function (){var G__51573 = ctx;
var G__51574 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51573,G__51574) : sci.impl.interpreter.interpret.call(null,G__51573,G__51574));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51260 = (function (){var G__51575 = ctx;
var G__51576 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51575,G__51576) : sci.impl.interpreter.interpret.call(null,G__51575,G__51576));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51261 = (function (){var G__51577 = ctx;
var G__51578 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51577,G__51578) : sci.impl.interpreter.interpret.call(null,G__51577,G__51578));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51262 = (function (){var G__51579 = ctx;
var G__51580 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51579,G__51580) : sci.impl.interpreter.interpret.call(null,G__51579,G__51580));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51263 = (function (){var G__51581 = ctx;
var G__51582 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51581,G__51582) : sci.impl.interpreter.interpret.call(null,G__51581,G__51582));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51264 = (function (){var G__51583 = ctx;
var G__51584 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51583,G__51584) : sci.impl.interpreter.interpret.call(null,G__51583,G__51584));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51265 = (function (){var G__51585 = ctx;
var G__51586 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51585,G__51586) : sci.impl.interpreter.interpret.call(null,G__51585,G__51586));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51266 = (function (){var G__51587 = ctx;
var G__51588 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51587,G__51588) : sci.impl.interpreter.interpret.call(null,G__51587,G__51588));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51267 = (function (){var G__51589 = ctx;
var G__51590 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51589,G__51590) : sci.impl.interpreter.interpret.call(null,G__51589,G__51590));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg51254,arg51255,arg51256,arg51257,arg51258,arg51259,arg51260,arg51261,arg51262,arg51263,arg51264,arg51265,arg51266,arg51267) : f.call(null,arg51254,arg51255,arg51256,arg51257,arg51258,arg51259,arg51260,arg51261,arg51262,arg51263,arg51264,arg51265,arg51266,arg51267));

break;
case (15):
var arg51268 = (function (){var G__51591 = ctx;
var G__51592 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51591,G__51592) : sci.impl.interpreter.interpret.call(null,G__51591,G__51592));
})();
var args__$1 = cljs.core.rest(args);
var arg51269 = (function (){var G__51593 = ctx;
var G__51594 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51593,G__51594) : sci.impl.interpreter.interpret.call(null,G__51593,G__51594));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51270 = (function (){var G__51595 = ctx;
var G__51596 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51595,G__51596) : sci.impl.interpreter.interpret.call(null,G__51595,G__51596));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51271 = (function (){var G__51597 = ctx;
var G__51598 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51597,G__51598) : sci.impl.interpreter.interpret.call(null,G__51597,G__51598));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51272 = (function (){var G__51599 = ctx;
var G__51600 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51599,G__51600) : sci.impl.interpreter.interpret.call(null,G__51599,G__51600));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51273 = (function (){var G__51601 = ctx;
var G__51602 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51601,G__51602) : sci.impl.interpreter.interpret.call(null,G__51601,G__51602));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51274 = (function (){var G__51603 = ctx;
var G__51604 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51603,G__51604) : sci.impl.interpreter.interpret.call(null,G__51603,G__51604));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51275 = (function (){var G__51605 = ctx;
var G__51606 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51605,G__51606) : sci.impl.interpreter.interpret.call(null,G__51605,G__51606));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51276 = (function (){var G__51607 = ctx;
var G__51608 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51607,G__51608) : sci.impl.interpreter.interpret.call(null,G__51607,G__51608));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51277 = (function (){var G__51609 = ctx;
var G__51610 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51609,G__51610) : sci.impl.interpreter.interpret.call(null,G__51609,G__51610));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51278 = (function (){var G__51611 = ctx;
var G__51612 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51611,G__51612) : sci.impl.interpreter.interpret.call(null,G__51611,G__51612));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51279 = (function (){var G__51613 = ctx;
var G__51614 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51613,G__51614) : sci.impl.interpreter.interpret.call(null,G__51613,G__51614));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51280 = (function (){var G__51615 = ctx;
var G__51616 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51615,G__51616) : sci.impl.interpreter.interpret.call(null,G__51615,G__51616));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51281 = (function (){var G__51617 = ctx;
var G__51618 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51617,G__51618) : sci.impl.interpreter.interpret.call(null,G__51617,G__51618));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51282 = (function (){var G__51619 = ctx;
var G__51620 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51619,G__51620) : sci.impl.interpreter.interpret.call(null,G__51619,G__51620));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg51268,arg51269,arg51270,arg51271,arg51272,arg51273,arg51274,arg51275,arg51276,arg51277,arg51278,arg51279,arg51280,arg51281,arg51282) : f.call(null,arg51268,arg51269,arg51270,arg51271,arg51272,arg51273,arg51274,arg51275,arg51276,arg51277,arg51278,arg51279,arg51280,arg51281,arg51282));

break;
case (16):
var arg51283 = (function (){var G__51621 = ctx;
var G__51622 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51621,G__51622) : sci.impl.interpreter.interpret.call(null,G__51621,G__51622));
})();
var args__$1 = cljs.core.rest(args);
var arg51284 = (function (){var G__51623 = ctx;
var G__51624 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51623,G__51624) : sci.impl.interpreter.interpret.call(null,G__51623,G__51624));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51285 = (function (){var G__51625 = ctx;
var G__51626 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51625,G__51626) : sci.impl.interpreter.interpret.call(null,G__51625,G__51626));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51286 = (function (){var G__51627 = ctx;
var G__51628 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51627,G__51628) : sci.impl.interpreter.interpret.call(null,G__51627,G__51628));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51287 = (function (){var G__51629 = ctx;
var G__51630 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51629,G__51630) : sci.impl.interpreter.interpret.call(null,G__51629,G__51630));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51288 = (function (){var G__51631 = ctx;
var G__51632 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51631,G__51632) : sci.impl.interpreter.interpret.call(null,G__51631,G__51632));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51289 = (function (){var G__51633 = ctx;
var G__51634 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51633,G__51634) : sci.impl.interpreter.interpret.call(null,G__51633,G__51634));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51290 = (function (){var G__51635 = ctx;
var G__51636 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51635,G__51636) : sci.impl.interpreter.interpret.call(null,G__51635,G__51636));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51291 = (function (){var G__51637 = ctx;
var G__51638 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51637,G__51638) : sci.impl.interpreter.interpret.call(null,G__51637,G__51638));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51292 = (function (){var G__51639 = ctx;
var G__51640 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51639,G__51640) : sci.impl.interpreter.interpret.call(null,G__51639,G__51640));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51293 = (function (){var G__51641 = ctx;
var G__51642 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51641,G__51642) : sci.impl.interpreter.interpret.call(null,G__51641,G__51642));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51294 = (function (){var G__51643 = ctx;
var G__51644 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51643,G__51644) : sci.impl.interpreter.interpret.call(null,G__51643,G__51644));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51295 = (function (){var G__51645 = ctx;
var G__51646 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51645,G__51646) : sci.impl.interpreter.interpret.call(null,G__51645,G__51646));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51296 = (function (){var G__51647 = ctx;
var G__51648 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51647,G__51648) : sci.impl.interpreter.interpret.call(null,G__51647,G__51648));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51297 = (function (){var G__51649 = ctx;
var G__51650 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51649,G__51650) : sci.impl.interpreter.interpret.call(null,G__51649,G__51650));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51298 = (function (){var G__51651 = ctx;
var G__51652 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51651,G__51652) : sci.impl.interpreter.interpret.call(null,G__51651,G__51652));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg51283,arg51284,arg51285,arg51286,arg51287,arg51288,arg51289,arg51290,arg51291,arg51292,arg51293,arg51294,arg51295,arg51296,arg51297,arg51298) : f.call(null,arg51283,arg51284,arg51285,arg51286,arg51287,arg51288,arg51289,arg51290,arg51291,arg51292,arg51293,arg51294,arg51295,arg51296,arg51297,arg51298));

break;
case (17):
var arg51299 = (function (){var G__51653 = ctx;
var G__51654 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51653,G__51654) : sci.impl.interpreter.interpret.call(null,G__51653,G__51654));
})();
var args__$1 = cljs.core.rest(args);
var arg51300 = (function (){var G__51655 = ctx;
var G__51656 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51655,G__51656) : sci.impl.interpreter.interpret.call(null,G__51655,G__51656));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51301 = (function (){var G__51657 = ctx;
var G__51658 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51657,G__51658) : sci.impl.interpreter.interpret.call(null,G__51657,G__51658));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51302 = (function (){var G__51659 = ctx;
var G__51660 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51659,G__51660) : sci.impl.interpreter.interpret.call(null,G__51659,G__51660));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51303 = (function (){var G__51661 = ctx;
var G__51662 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51661,G__51662) : sci.impl.interpreter.interpret.call(null,G__51661,G__51662));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51304 = (function (){var G__51663 = ctx;
var G__51664 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51663,G__51664) : sci.impl.interpreter.interpret.call(null,G__51663,G__51664));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51305 = (function (){var G__51665 = ctx;
var G__51666 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51665,G__51666) : sci.impl.interpreter.interpret.call(null,G__51665,G__51666));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51306 = (function (){var G__51667 = ctx;
var G__51668 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51667,G__51668) : sci.impl.interpreter.interpret.call(null,G__51667,G__51668));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51307 = (function (){var G__51669 = ctx;
var G__51670 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51669,G__51670) : sci.impl.interpreter.interpret.call(null,G__51669,G__51670));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51308 = (function (){var G__51671 = ctx;
var G__51672 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51671,G__51672) : sci.impl.interpreter.interpret.call(null,G__51671,G__51672));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51309 = (function (){var G__51673 = ctx;
var G__51674 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51673,G__51674) : sci.impl.interpreter.interpret.call(null,G__51673,G__51674));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51310 = (function (){var G__51675 = ctx;
var G__51676 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51675,G__51676) : sci.impl.interpreter.interpret.call(null,G__51675,G__51676));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51311 = (function (){var G__51677 = ctx;
var G__51678 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51677,G__51678) : sci.impl.interpreter.interpret.call(null,G__51677,G__51678));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51312 = (function (){var G__51679 = ctx;
var G__51680 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51679,G__51680) : sci.impl.interpreter.interpret.call(null,G__51679,G__51680));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51313 = (function (){var G__51681 = ctx;
var G__51682 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51681,G__51682) : sci.impl.interpreter.interpret.call(null,G__51681,G__51682));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51314 = (function (){var G__51683 = ctx;
var G__51684 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51683,G__51684) : sci.impl.interpreter.interpret.call(null,G__51683,G__51684));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51315 = (function (){var G__51685 = ctx;
var G__51686 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51685,G__51686) : sci.impl.interpreter.interpret.call(null,G__51685,G__51686));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg51299,arg51300,arg51301,arg51302,arg51303,arg51304,arg51305,arg51306,arg51307,arg51308,arg51309,arg51310,arg51311,arg51312,arg51313,arg51314,arg51315) : f.call(null,arg51299,arg51300,arg51301,arg51302,arg51303,arg51304,arg51305,arg51306,arg51307,arg51308,arg51309,arg51310,arg51311,arg51312,arg51313,arg51314,arg51315));

break;
case (18):
var arg51316 = (function (){var G__51687 = ctx;
var G__51688 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51687,G__51688) : sci.impl.interpreter.interpret.call(null,G__51687,G__51688));
})();
var args__$1 = cljs.core.rest(args);
var arg51317 = (function (){var G__51689 = ctx;
var G__51690 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51689,G__51690) : sci.impl.interpreter.interpret.call(null,G__51689,G__51690));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51318 = (function (){var G__51691 = ctx;
var G__51692 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51691,G__51692) : sci.impl.interpreter.interpret.call(null,G__51691,G__51692));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51319 = (function (){var G__51693 = ctx;
var G__51694 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51693,G__51694) : sci.impl.interpreter.interpret.call(null,G__51693,G__51694));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51320 = (function (){var G__51695 = ctx;
var G__51696 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51695,G__51696) : sci.impl.interpreter.interpret.call(null,G__51695,G__51696));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51321 = (function (){var G__51697 = ctx;
var G__51698 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51697,G__51698) : sci.impl.interpreter.interpret.call(null,G__51697,G__51698));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51322 = (function (){var G__51699 = ctx;
var G__51700 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51699,G__51700) : sci.impl.interpreter.interpret.call(null,G__51699,G__51700));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51323 = (function (){var G__51701 = ctx;
var G__51702 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51701,G__51702) : sci.impl.interpreter.interpret.call(null,G__51701,G__51702));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51324 = (function (){var G__51703 = ctx;
var G__51704 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51703,G__51704) : sci.impl.interpreter.interpret.call(null,G__51703,G__51704));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51325 = (function (){var G__51705 = ctx;
var G__51706 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51705,G__51706) : sci.impl.interpreter.interpret.call(null,G__51705,G__51706));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51326 = (function (){var G__51707 = ctx;
var G__51708 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51707,G__51708) : sci.impl.interpreter.interpret.call(null,G__51707,G__51708));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51327 = (function (){var G__51709 = ctx;
var G__51710 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51709,G__51710) : sci.impl.interpreter.interpret.call(null,G__51709,G__51710));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51328 = (function (){var G__51711 = ctx;
var G__51712 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51711,G__51712) : sci.impl.interpreter.interpret.call(null,G__51711,G__51712));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51329 = (function (){var G__51713 = ctx;
var G__51714 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51713,G__51714) : sci.impl.interpreter.interpret.call(null,G__51713,G__51714));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51330 = (function (){var G__51715 = ctx;
var G__51716 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51715,G__51716) : sci.impl.interpreter.interpret.call(null,G__51715,G__51716));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51331 = (function (){var G__51717 = ctx;
var G__51718 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51717,G__51718) : sci.impl.interpreter.interpret.call(null,G__51717,G__51718));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51332 = (function (){var G__51719 = ctx;
var G__51720 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51719,G__51720) : sci.impl.interpreter.interpret.call(null,G__51719,G__51720));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg51333 = (function (){var G__51721 = ctx;
var G__51722 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51721,G__51722) : sci.impl.interpreter.interpret.call(null,G__51721,G__51722));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg51316,arg51317,arg51318,arg51319,arg51320,arg51321,arg51322,arg51323,arg51324,arg51325,arg51326,arg51327,arg51328,arg51329,arg51330,arg51331,arg51332,arg51333) : f.call(null,arg51316,arg51317,arg51318,arg51319,arg51320,arg51321,arg51322,arg51323,arg51324,arg51325,arg51326,arg51327,arg51328,arg51329,arg51330,arg51331,arg51332,arg51333));

break;
case (19):
var arg51334 = (function (){var G__51723 = ctx;
var G__51724 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51723,G__51724) : sci.impl.interpreter.interpret.call(null,G__51723,G__51724));
})();
var args__$1 = cljs.core.rest(args);
var arg51335 = (function (){var G__51725 = ctx;
var G__51726 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51725,G__51726) : sci.impl.interpreter.interpret.call(null,G__51725,G__51726));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51336 = (function (){var G__51727 = ctx;
var G__51728 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51727,G__51728) : sci.impl.interpreter.interpret.call(null,G__51727,G__51728));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51337 = (function (){var G__51729 = ctx;
var G__51730 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51729,G__51730) : sci.impl.interpreter.interpret.call(null,G__51729,G__51730));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51338 = (function (){var G__51731 = ctx;
var G__51732 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51731,G__51732) : sci.impl.interpreter.interpret.call(null,G__51731,G__51732));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51339 = (function (){var G__51733 = ctx;
var G__51734 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51733,G__51734) : sci.impl.interpreter.interpret.call(null,G__51733,G__51734));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51340 = (function (){var G__51735 = ctx;
var G__51736 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51735,G__51736) : sci.impl.interpreter.interpret.call(null,G__51735,G__51736));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51341 = (function (){var G__51737 = ctx;
var G__51738 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51737,G__51738) : sci.impl.interpreter.interpret.call(null,G__51737,G__51738));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51342 = (function (){var G__51739 = ctx;
var G__51740 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51739,G__51740) : sci.impl.interpreter.interpret.call(null,G__51739,G__51740));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51343 = (function (){var G__51741 = ctx;
var G__51742 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51741,G__51742) : sci.impl.interpreter.interpret.call(null,G__51741,G__51742));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51344 = (function (){var G__51743 = ctx;
var G__51744 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51743,G__51744) : sci.impl.interpreter.interpret.call(null,G__51743,G__51744));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51345 = (function (){var G__51745 = ctx;
var G__51746 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51745,G__51746) : sci.impl.interpreter.interpret.call(null,G__51745,G__51746));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51346 = (function (){var G__51747 = ctx;
var G__51748 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51747,G__51748) : sci.impl.interpreter.interpret.call(null,G__51747,G__51748));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51347 = (function (){var G__51749 = ctx;
var G__51750 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51749,G__51750) : sci.impl.interpreter.interpret.call(null,G__51749,G__51750));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51348 = (function (){var G__51751 = ctx;
var G__51752 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51751,G__51752) : sci.impl.interpreter.interpret.call(null,G__51751,G__51752));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51349 = (function (){var G__51753 = ctx;
var G__51754 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51753,G__51754) : sci.impl.interpreter.interpret.call(null,G__51753,G__51754));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51350 = (function (){var G__51755 = ctx;
var G__51756 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51755,G__51756) : sci.impl.interpreter.interpret.call(null,G__51755,G__51756));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg51351 = (function (){var G__51757 = ctx;
var G__51758 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51757,G__51758) : sci.impl.interpreter.interpret.call(null,G__51757,G__51758));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg51352 = (function (){var G__51759 = ctx;
var G__51760 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51759,G__51760) : sci.impl.interpreter.interpret.call(null,G__51759,G__51760));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg51334,arg51335,arg51336,arg51337,arg51338,arg51339,arg51340,arg51341,arg51342,arg51343,arg51344,arg51345,arg51346,arg51347,arg51348,arg51349,arg51350,arg51351,arg51352) : f.call(null,arg51334,arg51335,arg51336,arg51337,arg51338,arg51339,arg51340,arg51341,arg51342,arg51343,arg51344,arg51345,arg51346,arg51347,arg51348,arg51349,arg51350,arg51351,arg51352));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__51761 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__51761)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__51761)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__51761)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__51761)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__51761)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__51761)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__51762 = ctx;
var G__51763 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51762,G__51763) : sci.impl.interpreter.interpret.call(null,G__51762,G__51763));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__51761)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__51761)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__51761)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__51761)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__51761)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__51761)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__51761)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__51761)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__51761)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__51764 = ctx;
var G__51765 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51764,G__51765) : sci.impl.interpreter.interpret.call(null,G__51764,G__51765));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__51761)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__51761)){
return (new cljs.core.LazySeq(null,(function (){var G__51766 = ctx;
var G__51767 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__51766,G__51767) : sci.impl.interpreter.interpret.call(null,G__51766,G__51767));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__51761)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__51761)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__51761)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__51761)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51761)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__51769 = op;
var G__51770 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51769,G__51770) : sci.impl.utils.kw_identical_QMARK_.call(null,G__51769,G__51770));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e51768){if((e51768 instanceof Error)){
var e = e51768;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e51768;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__51777 = op;
var G__51777__$1 = (((G__51777 instanceof cljs.core.Keyword))?G__51777.fqn:null);
switch (G__51777__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51774_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51774_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51774_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51775_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51775_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51775_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51776_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__51776_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__51776_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__51935 = cljs.core.rest(exprs);
var G__51936 = (function (){var G__51780 = ctx;
var G__51781 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__51780,G__51781) : sci.impl.interpreter.eval_form.call(null,G__51780,G__51781));
})();
exprs = G__51935;
ret = G__51936;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__51784 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__51785 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__51784,G__51785) : sci.impl.utils.kw_identical_QMARK_.call(null,G__51784,G__51785));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__51937 = ret__$1;
ret = G__51937;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__51787 = arguments.length;
switch (G__51787) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
