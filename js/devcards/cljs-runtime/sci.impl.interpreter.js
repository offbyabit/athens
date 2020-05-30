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
var G__65251 = xs;
args__$2 = G__65251;
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
var G__65252 = xs;
args__$2 = G__65252;
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
var len__4789__auto___65253 = arguments.length;
var i__4790__auto___65254 = (0);
while(true){
if((i__4790__auto___65254 < len__4789__auto___65253)){
args__4795__auto__.push((arguments[i__4790__auto___65254]));

var G__65255 = (i__4790__auto___65254 + (1));
i__4790__auto___65254 = G__65255;
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
var G__65256 = ctx__$2;
var G__65257 = rest_let_bindings;
ctx__$1 = G__65256;
let_bindings__$1 = G__65257;
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
var G__65258 = nexprs;
exprs__$1 = G__65258;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq64451){
var G__64452 = cljs.core.first(seq64451);
var seq64451__$1 = cljs.core.next(seq64451);
var G__64453 = cljs.core.first(seq64451__$1);
var seq64451__$2 = cljs.core.next(seq64451__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64452,G__64453,seq64451__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__64460){
var vec__64461 = p__64460;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64461,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64461,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64461,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64461,(3),null);
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
var v = (cljs.core.truth_((function (){var G__64464 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__64465 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__64464,G__64465) : sci.impl.utils.kw_identical_QMARK_.call(null,G__64464,G__64465));
})())?(function (){var G__64466 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__64466,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__64466;
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
var vec__64467 = libspec;
var seq__64468 = cljs.core.seq(vec__64467);
var first__64469 = cljs.core.first(seq__64468);
var seq__64468__$1 = cljs.core.next(seq__64468);
var lib_name = first__64469;
var opts = seq__64468__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__64473 = opts;
var vec__64474 = G__64473;
var seq__64475 = cljs.core.seq(vec__64474);
var first__64476 = cljs.core.first(seq__64475);
var seq__64475__$1 = cljs.core.next(seq__64475);
var opt_name = first__64476;
var first__64476__$1 = cljs.core.first(seq__64475__$1);
var seq__64475__$2 = cljs.core.next(seq__64475__$1);
var fst_opt = first__64476__$1;
var rst_opts = seq__64475__$2;
var ret__$1 = ret;
var G__64473__$1 = G__64473;
while(true){
var ret__$2 = ret__$1;
var vec__64481 = G__64473__$1;
var seq__64482 = cljs.core.seq(vec__64481);
var first__64483 = cljs.core.first(seq__64482);
var seq__64482__$1 = cljs.core.next(seq__64482);
var opt_name__$1 = first__64483;
var first__64483__$1 = cljs.core.first(seq__64482__$1);
var seq__64482__$2 = cljs.core.next(seq__64482__$1);
var fst_opt__$1 = first__64483__$1;
var rst_opts__$1 = seq__64482__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__64486 = opt_name__$1;
var G__64486__$1 = (((G__64486 instanceof cljs.core.Keyword))?G__64486.fqn:null);
switch (G__64486__$1) {
case "as":
var G__65277 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__65278 = rst_opts__$1;
ret__$1 = G__65277;
G__64473__$1 = G__65278;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__65281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__65282 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__65281;
G__64473__$1 = G__65282;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__65289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__65290 = rst_opts__$1;
ret__$1 = G__65289;
G__64473__$1 = G__65290;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64486__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__64488){
var vec__64489 = p__64488;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64489,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__64495){
var map__64496 = p__64495;
var map__64496__$1 = (((((!((map__64496 == null))))?(((((map__64496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64496):map__64496);
var _parsed_libspec = map__64496__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__64500 = new cljs.core.Keyword(null,"all","all",892129742);
var G__64501 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__64500,G__64501) : sci.impl.utils.kw_identical_QMARK_.call(null,G__64500,G__64501));
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
var vec__64502 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64502,(1),null);
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
var map__64508 = sci.impl.interpreter.parse_libspec(libspec);
var map__64508__$1 = (((((!((map__64508 == null))))?(((((map__64508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64508):map__64508);
var parsed_libspec = map__64508__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__64510 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__64510) : load_fn.call(null,G__64510));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__64511 = temp__5733__auto____$2;
var map__64511__$1 = (((((!((map__64511 == null))))?(((((map__64511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64511):map__64511);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__64514_65326 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__64515_65327 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__64514_65326,G__64515_65327) : sci.impl.interpreter.eval_string_STAR_.call(null,G__64514_65326,G__64515_65327));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e64513){if((e64513 instanceof Error)){
var e_65328 = e64513;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_65328;
} else {
throw e64513;

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
var len__4789__auto___65329 = arguments.length;
var i__4790__auto___65330 = (0);
while(true){
if((i__4790__auto___65330 < len__4789__auto___65329)){
args__4795__auto__.push((arguments[i__4790__auto___65330]));

var G__65333 = (i__4790__auto___65330 + (1));
i__4790__auto___65330 = G__65333;
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
var ret = (function (){var G__64528 = ctx;
var G__64529 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64528,G__64529) : sci.impl.interpreter.interpret.call(null,G__64528,G__64529));
})();
if((ret instanceof cljs.core.Symbol)){
var G__65338 = (function (){var G__64530 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64530,current_libspec);
} else {
return G__64530;
}
})();
var G__65339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__65340 = cljs.core.next(args__$1);
libspecs = G__65338;
current_libspec = G__65339;
args__$1 = G__65340;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__65348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__65349 = null;
var G__65350 = cljs.core.next(args__$1);
libspecs = G__65348;
current_libspec = G__65349;
args__$1 = G__65350;
continue;
} else {
var G__65351 = (function (){var G__64531 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64531,current_libspec);
} else {
return G__64531;
}
})();
var G__65352 = ret;
var G__65353 = cljs.core.next(args__$1);
libspecs = G__65351;
current_libspec = G__65352;
args__$1 = G__65353;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__64532 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64532,current_libspec);
} else {
return G__64532;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__64517_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__64517_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq64518){
var G__64519 = cljs.core.first(seq64518);
var seq64518__$1 = cljs.core.next(seq64518);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64519,seq64518__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65354 = arguments.length;
var i__4790__auto___65355 = (0);
while(true){
if((i__4790__auto___65355 < len__4789__auto___65354)){
args__4795__auto__.push((arguments[i__4790__auto___65355]));

var G__65358 = (i__4790__auto___65355 + (1));
i__4790__auto___65355 = G__65358;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq64536){
var G__64537 = cljs.core.first(seq64536);
var seq64536__$1 = cljs.core.next(seq64536);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64537,seq64536__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__64538){
var vec__64539 = p__64538;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64539,(0),null);
var map__64542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64539,(1),null);
var map__64542__$1 = (((((!((map__64542 == null))))?(((((map__64542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64542):map__64542);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64544 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64544,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64544,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__64547 = ctx;
var G__64548 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64547,G__64548) : sci.impl.interpreter.interpret.call(null,G__64547,G__64548));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__64549 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__64549__$1 = (((((!((map__64549 == null))))?(((((map__64549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64549):map__64549);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__64557 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__64558 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__64558);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__64557);
}}catch (e64551){if((e64551 instanceof Error)){
var e = e64551;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__64552 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__64553 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64552,G__64553) : sci.impl.interpreter.interpret.call(null,G__64552,G__64553));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__64554 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64554,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64554,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e64551;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__64562){
var vec__64563 = p__64562;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64563,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64563,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64566_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__64566_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__64566_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__64571){
var vec__64572 = p__64571;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64572,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64572,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64572,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64567_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__64567_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__64567_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__64580,p__64581){
var map__64582 = p__64580;
var map__64582__$1 = (((((!((map__64582 == null))))?(((((map__64582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64582):map__64582);
var ctx = map__64582__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64582__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__64583 = p__64581;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64583,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64583,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64583,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64583,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64576_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__64576_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__64576_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__64590){
var vec__64591 = p__64590;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64591,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64591,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__64594){
var vec__64595 = p__64594;
var seq__64596 = cljs.core.seq(vec__64595);
var first__64597 = cljs.core.first(seq__64596);
var seq__64596__$1 = cljs.core.next(seq__64596);
var _ = first__64597;
var first__64597__$1 = cljs.core.first(seq__64596__$1);
var seq__64596__$2 = cljs.core.next(seq__64596__$1);
var ns_sym = first__64597__$1;
var exprs = seq__64596__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__64598 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64598,(1),null);
var G__64601_65375 = k;
var G__64601_65376__$1 = (((G__64601_65375 instanceof cljs.core.Keyword))?G__64601_65375.fqn:null);
switch (G__64601_65376__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__64601_65375,G__64601_65376__$1,vec__64598,k,v,ns_sym__$1,vec__64595,seq__64596,first__64597,seq__64596__$1,_,first__64597__$1,seq__64596__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__64601_65375,G__64601_65376__$1,vec__64598,k,v,ns_sym__$1,vec__64595,seq__64596,first__64597,seq__64596__$1,_,first__64597__$1,seq__64596__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64601_65376__$1)].join('')));

}

var G__65378 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__65378;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__64605){
var vec__64606 = p__64605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64606,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64606,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64606,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__64616 = exprs;
var vec__64617 = G__64616;
var seq__64618 = cljs.core.seq(vec__64617);
var first__64619 = cljs.core.first(seq__64618);
var seq__64618__$1 = cljs.core.next(seq__64618);
var expr = first__64619;
var exprs__$1 = seq__64618__$1;
var G__64616__$1 = G__64616;
while(true){
var vec__64620 = G__64616__$1;
var seq__64621 = cljs.core.seq(vec__64620);
var first__64622 = cljs.core.first(seq__64621);
var seq__64621__$1 = cljs.core.next(seq__64621);
var expr__$1 = first__64622;
var exprs__$2 = seq__64621__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e64623){if((e64623 instanceof Error)){
var e = e64623;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e64623;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__65384 = exprs__$3;
G__64616__$1 = G__65384;
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
var G__64816 = cljs.core.count(args);
switch (G__64816) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg64626 = (function (){var G__64817 = ctx;
var G__64818 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64817,G__64818) : sci.impl.interpreter.interpret.call(null,G__64817,G__64818));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg64626) : f.call(null,arg64626));

break;
case (2):
var arg64627 = (function (){var G__64819 = ctx;
var G__64820 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64819,G__64820) : sci.impl.interpreter.interpret.call(null,G__64819,G__64820));
})();
var args__$1 = cljs.core.rest(args);
var arg64628 = (function (){var G__64821 = ctx;
var G__64822 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64821,G__64822) : sci.impl.interpreter.interpret.call(null,G__64821,G__64822));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg64627,arg64628) : f.call(null,arg64627,arg64628));

break;
case (3):
var arg64629 = (function (){var G__64823 = ctx;
var G__64824 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64823,G__64824) : sci.impl.interpreter.interpret.call(null,G__64823,G__64824));
})();
var args__$1 = cljs.core.rest(args);
var arg64630 = (function (){var G__64825 = ctx;
var G__64826 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64825,G__64826) : sci.impl.interpreter.interpret.call(null,G__64825,G__64826));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64631 = (function (){var G__64827 = ctx;
var G__64828 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64827,G__64828) : sci.impl.interpreter.interpret.call(null,G__64827,G__64828));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg64629,arg64630,arg64631) : f.call(null,arg64629,arg64630,arg64631));

break;
case (4):
var arg64632 = (function (){var G__64829 = ctx;
var G__64830 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64829,G__64830) : sci.impl.interpreter.interpret.call(null,G__64829,G__64830));
})();
var args__$1 = cljs.core.rest(args);
var arg64633 = (function (){var G__64831 = ctx;
var G__64832 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64831,G__64832) : sci.impl.interpreter.interpret.call(null,G__64831,G__64832));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64634 = (function (){var G__64833 = ctx;
var G__64834 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64833,G__64834) : sci.impl.interpreter.interpret.call(null,G__64833,G__64834));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64635 = (function (){var G__64835 = ctx;
var G__64836 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64835,G__64836) : sci.impl.interpreter.interpret.call(null,G__64835,G__64836));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg64632,arg64633,arg64634,arg64635) : f.call(null,arg64632,arg64633,arg64634,arg64635));

break;
case (5):
var arg64636 = (function (){var G__64837 = ctx;
var G__64838 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64837,G__64838) : sci.impl.interpreter.interpret.call(null,G__64837,G__64838));
})();
var args__$1 = cljs.core.rest(args);
var arg64637 = (function (){var G__64839 = ctx;
var G__64840 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64839,G__64840) : sci.impl.interpreter.interpret.call(null,G__64839,G__64840));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64638 = (function (){var G__64841 = ctx;
var G__64842 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64841,G__64842) : sci.impl.interpreter.interpret.call(null,G__64841,G__64842));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64639 = (function (){var G__64843 = ctx;
var G__64844 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64843,G__64844) : sci.impl.interpreter.interpret.call(null,G__64843,G__64844));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64640 = (function (){var G__64845 = ctx;
var G__64846 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64845,G__64846) : sci.impl.interpreter.interpret.call(null,G__64845,G__64846));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg64636,arg64637,arg64638,arg64639,arg64640) : f.call(null,arg64636,arg64637,arg64638,arg64639,arg64640));

break;
case (6):
var arg64641 = (function (){var G__64848 = ctx;
var G__64849 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64848,G__64849) : sci.impl.interpreter.interpret.call(null,G__64848,G__64849));
})();
var args__$1 = cljs.core.rest(args);
var arg64642 = (function (){var G__64850 = ctx;
var G__64851 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64850,G__64851) : sci.impl.interpreter.interpret.call(null,G__64850,G__64851));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64643 = (function (){var G__64852 = ctx;
var G__64853 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64852,G__64853) : sci.impl.interpreter.interpret.call(null,G__64852,G__64853));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64644 = (function (){var G__64854 = ctx;
var G__64855 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64854,G__64855) : sci.impl.interpreter.interpret.call(null,G__64854,G__64855));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64645 = (function (){var G__64856 = ctx;
var G__64857 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64856,G__64857) : sci.impl.interpreter.interpret.call(null,G__64856,G__64857));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64646 = (function (){var G__64858 = ctx;
var G__64859 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64858,G__64859) : sci.impl.interpreter.interpret.call(null,G__64858,G__64859));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg64641,arg64642,arg64643,arg64644,arg64645,arg64646) : f.call(null,arg64641,arg64642,arg64643,arg64644,arg64645,arg64646));

break;
case (7):
var arg64647 = (function (){var G__64860 = ctx;
var G__64861 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64860,G__64861) : sci.impl.interpreter.interpret.call(null,G__64860,G__64861));
})();
var args__$1 = cljs.core.rest(args);
var arg64648 = (function (){var G__64862 = ctx;
var G__64863 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64862,G__64863) : sci.impl.interpreter.interpret.call(null,G__64862,G__64863));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64649 = (function (){var G__64864 = ctx;
var G__64865 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64864,G__64865) : sci.impl.interpreter.interpret.call(null,G__64864,G__64865));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64650 = (function (){var G__64866 = ctx;
var G__64867 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64866,G__64867) : sci.impl.interpreter.interpret.call(null,G__64866,G__64867));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64651 = (function (){var G__64868 = ctx;
var G__64869 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64868,G__64869) : sci.impl.interpreter.interpret.call(null,G__64868,G__64869));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64652 = (function (){var G__64870 = ctx;
var G__64871 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64870,G__64871) : sci.impl.interpreter.interpret.call(null,G__64870,G__64871));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64653 = (function (){var G__64872 = ctx;
var G__64873 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64872,G__64873) : sci.impl.interpreter.interpret.call(null,G__64872,G__64873));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg64647,arg64648,arg64649,arg64650,arg64651,arg64652,arg64653) : f.call(null,arg64647,arg64648,arg64649,arg64650,arg64651,arg64652,arg64653));

break;
case (8):
var arg64654 = (function (){var G__64875 = ctx;
var G__64876 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64875,G__64876) : sci.impl.interpreter.interpret.call(null,G__64875,G__64876));
})();
var args__$1 = cljs.core.rest(args);
var arg64655 = (function (){var G__64879 = ctx;
var G__64880 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64879,G__64880) : sci.impl.interpreter.interpret.call(null,G__64879,G__64880));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64656 = (function (){var G__64882 = ctx;
var G__64883 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64882,G__64883) : sci.impl.interpreter.interpret.call(null,G__64882,G__64883));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64657 = (function (){var G__64884 = ctx;
var G__64885 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64884,G__64885) : sci.impl.interpreter.interpret.call(null,G__64884,G__64885));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64658 = (function (){var G__64886 = ctx;
var G__64887 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64886,G__64887) : sci.impl.interpreter.interpret.call(null,G__64886,G__64887));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64659 = (function (){var G__64888 = ctx;
var G__64889 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64888,G__64889) : sci.impl.interpreter.interpret.call(null,G__64888,G__64889));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64660 = (function (){var G__64890 = ctx;
var G__64891 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64890,G__64891) : sci.impl.interpreter.interpret.call(null,G__64890,G__64891));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64661 = (function (){var G__64892 = ctx;
var G__64893 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64892,G__64893) : sci.impl.interpreter.interpret.call(null,G__64892,G__64893));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg64654,arg64655,arg64656,arg64657,arg64658,arg64659,arg64660,arg64661) : f.call(null,arg64654,arg64655,arg64656,arg64657,arg64658,arg64659,arg64660,arg64661));

break;
case (9):
var arg64662 = (function (){var G__64894 = ctx;
var G__64895 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64894,G__64895) : sci.impl.interpreter.interpret.call(null,G__64894,G__64895));
})();
var args__$1 = cljs.core.rest(args);
var arg64663 = (function (){var G__64896 = ctx;
var G__64897 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64896,G__64897) : sci.impl.interpreter.interpret.call(null,G__64896,G__64897));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64664 = (function (){var G__64898 = ctx;
var G__64899 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64898,G__64899) : sci.impl.interpreter.interpret.call(null,G__64898,G__64899));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64665 = (function (){var G__64900 = ctx;
var G__64901 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64900,G__64901) : sci.impl.interpreter.interpret.call(null,G__64900,G__64901));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64666 = (function (){var G__64902 = ctx;
var G__64903 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64902,G__64903) : sci.impl.interpreter.interpret.call(null,G__64902,G__64903));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64667 = (function (){var G__64906 = ctx;
var G__64907 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64906,G__64907) : sci.impl.interpreter.interpret.call(null,G__64906,G__64907));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64668 = (function (){var G__64909 = ctx;
var G__64910 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64909,G__64910) : sci.impl.interpreter.interpret.call(null,G__64909,G__64910));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64669 = (function (){var G__64911 = ctx;
var G__64912 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64911,G__64912) : sci.impl.interpreter.interpret.call(null,G__64911,G__64912));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64670 = (function (){var G__64913 = ctx;
var G__64914 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64913,G__64914) : sci.impl.interpreter.interpret.call(null,G__64913,G__64914));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg64662,arg64663,arg64664,arg64665,arg64666,arg64667,arg64668,arg64669,arg64670) : f.call(null,arg64662,arg64663,arg64664,arg64665,arg64666,arg64667,arg64668,arg64669,arg64670));

break;
case (10):
var arg64671 = (function (){var G__64915 = ctx;
var G__64916 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64915,G__64916) : sci.impl.interpreter.interpret.call(null,G__64915,G__64916));
})();
var args__$1 = cljs.core.rest(args);
var arg64672 = (function (){var G__64918 = ctx;
var G__64919 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64918,G__64919) : sci.impl.interpreter.interpret.call(null,G__64918,G__64919));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64673 = (function (){var G__64920 = ctx;
var G__64921 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64920,G__64921) : sci.impl.interpreter.interpret.call(null,G__64920,G__64921));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64674 = (function (){var G__64922 = ctx;
var G__64923 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64922,G__64923) : sci.impl.interpreter.interpret.call(null,G__64922,G__64923));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64675 = (function (){var G__64924 = ctx;
var G__64925 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64924,G__64925) : sci.impl.interpreter.interpret.call(null,G__64924,G__64925));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64676 = (function (){var G__64926 = ctx;
var G__64927 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64926,G__64927) : sci.impl.interpreter.interpret.call(null,G__64926,G__64927));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64677 = (function (){var G__64928 = ctx;
var G__64929 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64928,G__64929) : sci.impl.interpreter.interpret.call(null,G__64928,G__64929));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64678 = (function (){var G__64930 = ctx;
var G__64931 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64930,G__64931) : sci.impl.interpreter.interpret.call(null,G__64930,G__64931));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64679 = (function (){var G__64932 = ctx;
var G__64933 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64932,G__64933) : sci.impl.interpreter.interpret.call(null,G__64932,G__64933));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64680 = (function (){var G__64934 = ctx;
var G__64935 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64934,G__64935) : sci.impl.interpreter.interpret.call(null,G__64934,G__64935));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg64671,arg64672,arg64673,arg64674,arg64675,arg64676,arg64677,arg64678,arg64679,arg64680) : f.call(null,arg64671,arg64672,arg64673,arg64674,arg64675,arg64676,arg64677,arg64678,arg64679,arg64680));

break;
case (11):
var arg64681 = (function (){var G__64938 = ctx;
var G__64939 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64938,G__64939) : sci.impl.interpreter.interpret.call(null,G__64938,G__64939));
})();
var args__$1 = cljs.core.rest(args);
var arg64682 = (function (){var G__64940 = ctx;
var G__64941 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64940,G__64941) : sci.impl.interpreter.interpret.call(null,G__64940,G__64941));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64683 = (function (){var G__64943 = ctx;
var G__64944 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64943,G__64944) : sci.impl.interpreter.interpret.call(null,G__64943,G__64944));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64684 = (function (){var G__64945 = ctx;
var G__64946 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64945,G__64946) : sci.impl.interpreter.interpret.call(null,G__64945,G__64946));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64685 = (function (){var G__64947 = ctx;
var G__64948 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64947,G__64948) : sci.impl.interpreter.interpret.call(null,G__64947,G__64948));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64686 = (function (){var G__64949 = ctx;
var G__64950 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64949,G__64950) : sci.impl.interpreter.interpret.call(null,G__64949,G__64950));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64687 = (function (){var G__64951 = ctx;
var G__64952 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64951,G__64952) : sci.impl.interpreter.interpret.call(null,G__64951,G__64952));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64688 = (function (){var G__64953 = ctx;
var G__64954 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64953,G__64954) : sci.impl.interpreter.interpret.call(null,G__64953,G__64954));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64689 = (function (){var G__64955 = ctx;
var G__64956 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64955,G__64956) : sci.impl.interpreter.interpret.call(null,G__64955,G__64956));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64690 = (function (){var G__64957 = ctx;
var G__64958 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64957,G__64958) : sci.impl.interpreter.interpret.call(null,G__64957,G__64958));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64691 = (function (){var G__64959 = ctx;
var G__64960 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64959,G__64960) : sci.impl.interpreter.interpret.call(null,G__64959,G__64960));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg64681,arg64682,arg64683,arg64684,arg64685,arg64686,arg64687,arg64688,arg64689,arg64690,arg64691) : f.call(null,arg64681,arg64682,arg64683,arg64684,arg64685,arg64686,arg64687,arg64688,arg64689,arg64690,arg64691));

break;
case (12):
var arg64692 = (function (){var G__64961 = ctx;
var G__64962 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64961,G__64962) : sci.impl.interpreter.interpret.call(null,G__64961,G__64962));
})();
var args__$1 = cljs.core.rest(args);
var arg64693 = (function (){var G__64963 = ctx;
var G__64964 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64963,G__64964) : sci.impl.interpreter.interpret.call(null,G__64963,G__64964));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64694 = (function (){var G__64965 = ctx;
var G__64966 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64965,G__64966) : sci.impl.interpreter.interpret.call(null,G__64965,G__64966));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64695 = (function (){var G__64967 = ctx;
var G__64968 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64967,G__64968) : sci.impl.interpreter.interpret.call(null,G__64967,G__64968));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64696 = (function (){var G__64973 = ctx;
var G__64974 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64973,G__64974) : sci.impl.interpreter.interpret.call(null,G__64973,G__64974));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64697 = (function (){var G__64975 = ctx;
var G__64976 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64975,G__64976) : sci.impl.interpreter.interpret.call(null,G__64975,G__64976));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64698 = (function (){var G__64977 = ctx;
var G__64978 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64977,G__64978) : sci.impl.interpreter.interpret.call(null,G__64977,G__64978));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64699 = (function (){var G__64983 = ctx;
var G__64984 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64983,G__64984) : sci.impl.interpreter.interpret.call(null,G__64983,G__64984));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64700 = (function (){var G__64985 = ctx;
var G__64986 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64985,G__64986) : sci.impl.interpreter.interpret.call(null,G__64985,G__64986));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64701 = (function (){var G__64987 = ctx;
var G__64988 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64987,G__64988) : sci.impl.interpreter.interpret.call(null,G__64987,G__64988));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64702 = (function (){var G__64993 = ctx;
var G__64994 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64993,G__64994) : sci.impl.interpreter.interpret.call(null,G__64993,G__64994));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64703 = (function (){var G__64995 = ctx;
var G__64996 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__64995,G__64996) : sci.impl.interpreter.interpret.call(null,G__64995,G__64996));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg64692,arg64693,arg64694,arg64695,arg64696,arg64697,arg64698,arg64699,arg64700,arg64701,arg64702,arg64703) : f.call(null,arg64692,arg64693,arg64694,arg64695,arg64696,arg64697,arg64698,arg64699,arg64700,arg64701,arg64702,arg64703));

break;
case (13):
var arg64704 = (function (){var G__65000 = ctx;
var G__65001 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65000,G__65001) : sci.impl.interpreter.interpret.call(null,G__65000,G__65001));
})();
var args__$1 = cljs.core.rest(args);
var arg64705 = (function (){var G__65002 = ctx;
var G__65003 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65002,G__65003) : sci.impl.interpreter.interpret.call(null,G__65002,G__65003));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64706 = (function (){var G__65004 = ctx;
var G__65005 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65004,G__65005) : sci.impl.interpreter.interpret.call(null,G__65004,G__65005));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64707 = (function (){var G__65006 = ctx;
var G__65007 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65006,G__65007) : sci.impl.interpreter.interpret.call(null,G__65006,G__65007));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64708 = (function (){var G__65008 = ctx;
var G__65009 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65008,G__65009) : sci.impl.interpreter.interpret.call(null,G__65008,G__65009));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64709 = (function (){var G__65010 = ctx;
var G__65011 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65010,G__65011) : sci.impl.interpreter.interpret.call(null,G__65010,G__65011));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64710 = (function (){var G__65012 = ctx;
var G__65013 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65012,G__65013) : sci.impl.interpreter.interpret.call(null,G__65012,G__65013));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64711 = (function (){var G__65014 = ctx;
var G__65015 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65014,G__65015) : sci.impl.interpreter.interpret.call(null,G__65014,G__65015));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64712 = (function (){var G__65016 = ctx;
var G__65017 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65016,G__65017) : sci.impl.interpreter.interpret.call(null,G__65016,G__65017));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64713 = (function (){var G__65018 = ctx;
var G__65019 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65018,G__65019) : sci.impl.interpreter.interpret.call(null,G__65018,G__65019));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64714 = (function (){var G__65020 = ctx;
var G__65021 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65020,G__65021) : sci.impl.interpreter.interpret.call(null,G__65020,G__65021));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64715 = (function (){var G__65022 = ctx;
var G__65023 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65022,G__65023) : sci.impl.interpreter.interpret.call(null,G__65022,G__65023));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64716 = (function (){var G__65024 = ctx;
var G__65025 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65024,G__65025) : sci.impl.interpreter.interpret.call(null,G__65024,G__65025));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg64704,arg64705,arg64706,arg64707,arg64708,arg64709,arg64710,arg64711,arg64712,arg64713,arg64714,arg64715,arg64716) : f.call(null,arg64704,arg64705,arg64706,arg64707,arg64708,arg64709,arg64710,arg64711,arg64712,arg64713,arg64714,arg64715,arg64716));

break;
case (14):
var arg64717 = (function (){var G__65026 = ctx;
var G__65027 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65026,G__65027) : sci.impl.interpreter.interpret.call(null,G__65026,G__65027));
})();
var args__$1 = cljs.core.rest(args);
var arg64718 = (function (){var G__65028 = ctx;
var G__65029 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65028,G__65029) : sci.impl.interpreter.interpret.call(null,G__65028,G__65029));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64719 = (function (){var G__65030 = ctx;
var G__65031 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65030,G__65031) : sci.impl.interpreter.interpret.call(null,G__65030,G__65031));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64720 = (function (){var G__65032 = ctx;
var G__65033 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65032,G__65033) : sci.impl.interpreter.interpret.call(null,G__65032,G__65033));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64721 = (function (){var G__65034 = ctx;
var G__65035 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65034,G__65035) : sci.impl.interpreter.interpret.call(null,G__65034,G__65035));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64722 = (function (){var G__65036 = ctx;
var G__65037 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65036,G__65037) : sci.impl.interpreter.interpret.call(null,G__65036,G__65037));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64723 = (function (){var G__65038 = ctx;
var G__65039 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65038,G__65039) : sci.impl.interpreter.interpret.call(null,G__65038,G__65039));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64724 = (function (){var G__65040 = ctx;
var G__65041 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65040,G__65041) : sci.impl.interpreter.interpret.call(null,G__65040,G__65041));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64725 = (function (){var G__65042 = ctx;
var G__65043 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65042,G__65043) : sci.impl.interpreter.interpret.call(null,G__65042,G__65043));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64726 = (function (){var G__65044 = ctx;
var G__65045 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65044,G__65045) : sci.impl.interpreter.interpret.call(null,G__65044,G__65045));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64727 = (function (){var G__65046 = ctx;
var G__65047 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65046,G__65047) : sci.impl.interpreter.interpret.call(null,G__65046,G__65047));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64728 = (function (){var G__65048 = ctx;
var G__65049 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65048,G__65049) : sci.impl.interpreter.interpret.call(null,G__65048,G__65049));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64729 = (function (){var G__65050 = ctx;
var G__65051 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65050,G__65051) : sci.impl.interpreter.interpret.call(null,G__65050,G__65051));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64730 = (function (){var G__65052 = ctx;
var G__65053 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65052,G__65053) : sci.impl.interpreter.interpret.call(null,G__65052,G__65053));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg64717,arg64718,arg64719,arg64720,arg64721,arg64722,arg64723,arg64724,arg64725,arg64726,arg64727,arg64728,arg64729,arg64730) : f.call(null,arg64717,arg64718,arg64719,arg64720,arg64721,arg64722,arg64723,arg64724,arg64725,arg64726,arg64727,arg64728,arg64729,arg64730));

break;
case (15):
var arg64731 = (function (){var G__65054 = ctx;
var G__65055 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65054,G__65055) : sci.impl.interpreter.interpret.call(null,G__65054,G__65055));
})();
var args__$1 = cljs.core.rest(args);
var arg64732 = (function (){var G__65056 = ctx;
var G__65057 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65056,G__65057) : sci.impl.interpreter.interpret.call(null,G__65056,G__65057));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64733 = (function (){var G__65058 = ctx;
var G__65059 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65058,G__65059) : sci.impl.interpreter.interpret.call(null,G__65058,G__65059));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64734 = (function (){var G__65060 = ctx;
var G__65061 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65060,G__65061) : sci.impl.interpreter.interpret.call(null,G__65060,G__65061));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64735 = (function (){var G__65062 = ctx;
var G__65063 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65062,G__65063) : sci.impl.interpreter.interpret.call(null,G__65062,G__65063));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64736 = (function (){var G__65064 = ctx;
var G__65065 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65064,G__65065) : sci.impl.interpreter.interpret.call(null,G__65064,G__65065));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64737 = (function (){var G__65066 = ctx;
var G__65067 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65066,G__65067) : sci.impl.interpreter.interpret.call(null,G__65066,G__65067));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64738 = (function (){var G__65068 = ctx;
var G__65069 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65068,G__65069) : sci.impl.interpreter.interpret.call(null,G__65068,G__65069));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64739 = (function (){var G__65070 = ctx;
var G__65071 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65070,G__65071) : sci.impl.interpreter.interpret.call(null,G__65070,G__65071));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64740 = (function (){var G__65072 = ctx;
var G__65073 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65072,G__65073) : sci.impl.interpreter.interpret.call(null,G__65072,G__65073));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64741 = (function (){var G__65074 = ctx;
var G__65075 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65074,G__65075) : sci.impl.interpreter.interpret.call(null,G__65074,G__65075));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64742 = (function (){var G__65076 = ctx;
var G__65077 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65076,G__65077) : sci.impl.interpreter.interpret.call(null,G__65076,G__65077));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64743 = (function (){var G__65078 = ctx;
var G__65079 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65078,G__65079) : sci.impl.interpreter.interpret.call(null,G__65078,G__65079));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64744 = (function (){var G__65080 = ctx;
var G__65081 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65080,G__65081) : sci.impl.interpreter.interpret.call(null,G__65080,G__65081));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg64745 = (function (){var G__65082 = ctx;
var G__65083 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65082,G__65083) : sci.impl.interpreter.interpret.call(null,G__65082,G__65083));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg64731,arg64732,arg64733,arg64734,arg64735,arg64736,arg64737,arg64738,arg64739,arg64740,arg64741,arg64742,arg64743,arg64744,arg64745) : f.call(null,arg64731,arg64732,arg64733,arg64734,arg64735,arg64736,arg64737,arg64738,arg64739,arg64740,arg64741,arg64742,arg64743,arg64744,arg64745));

break;
case (16):
var arg64746 = (function (){var G__65084 = ctx;
var G__65085 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65084,G__65085) : sci.impl.interpreter.interpret.call(null,G__65084,G__65085));
})();
var args__$1 = cljs.core.rest(args);
var arg64747 = (function (){var G__65086 = ctx;
var G__65087 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65086,G__65087) : sci.impl.interpreter.interpret.call(null,G__65086,G__65087));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64748 = (function (){var G__65088 = ctx;
var G__65089 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65088,G__65089) : sci.impl.interpreter.interpret.call(null,G__65088,G__65089));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64749 = (function (){var G__65090 = ctx;
var G__65091 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65090,G__65091) : sci.impl.interpreter.interpret.call(null,G__65090,G__65091));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64750 = (function (){var G__65092 = ctx;
var G__65093 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65092,G__65093) : sci.impl.interpreter.interpret.call(null,G__65092,G__65093));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64751 = (function (){var G__65094 = ctx;
var G__65095 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65094,G__65095) : sci.impl.interpreter.interpret.call(null,G__65094,G__65095));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64752 = (function (){var G__65096 = ctx;
var G__65097 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65096,G__65097) : sci.impl.interpreter.interpret.call(null,G__65096,G__65097));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64753 = (function (){var G__65098 = ctx;
var G__65099 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65098,G__65099) : sci.impl.interpreter.interpret.call(null,G__65098,G__65099));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64754 = (function (){var G__65100 = ctx;
var G__65101 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65100,G__65101) : sci.impl.interpreter.interpret.call(null,G__65100,G__65101));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64755 = (function (){var G__65102 = ctx;
var G__65103 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65102,G__65103) : sci.impl.interpreter.interpret.call(null,G__65102,G__65103));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64756 = (function (){var G__65104 = ctx;
var G__65105 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65104,G__65105) : sci.impl.interpreter.interpret.call(null,G__65104,G__65105));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64757 = (function (){var G__65106 = ctx;
var G__65107 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65106,G__65107) : sci.impl.interpreter.interpret.call(null,G__65106,G__65107));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64758 = (function (){var G__65108 = ctx;
var G__65109 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65108,G__65109) : sci.impl.interpreter.interpret.call(null,G__65108,G__65109));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64759 = (function (){var G__65110 = ctx;
var G__65111 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65110,G__65111) : sci.impl.interpreter.interpret.call(null,G__65110,G__65111));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg64760 = (function (){var G__65112 = ctx;
var G__65113 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65112,G__65113) : sci.impl.interpreter.interpret.call(null,G__65112,G__65113));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg64761 = (function (){var G__65114 = ctx;
var G__65115 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65114,G__65115) : sci.impl.interpreter.interpret.call(null,G__65114,G__65115));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg64746,arg64747,arg64748,arg64749,arg64750,arg64751,arg64752,arg64753,arg64754,arg64755,arg64756,arg64757,arg64758,arg64759,arg64760,arg64761) : f.call(null,arg64746,arg64747,arg64748,arg64749,arg64750,arg64751,arg64752,arg64753,arg64754,arg64755,arg64756,arg64757,arg64758,arg64759,arg64760,arg64761));

break;
case (17):
var arg64762 = (function (){var G__65116 = ctx;
var G__65117 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65116,G__65117) : sci.impl.interpreter.interpret.call(null,G__65116,G__65117));
})();
var args__$1 = cljs.core.rest(args);
var arg64763 = (function (){var G__65118 = ctx;
var G__65119 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65118,G__65119) : sci.impl.interpreter.interpret.call(null,G__65118,G__65119));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64764 = (function (){var G__65120 = ctx;
var G__65121 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65120,G__65121) : sci.impl.interpreter.interpret.call(null,G__65120,G__65121));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64765 = (function (){var G__65122 = ctx;
var G__65123 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65122,G__65123) : sci.impl.interpreter.interpret.call(null,G__65122,G__65123));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64766 = (function (){var G__65124 = ctx;
var G__65125 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65124,G__65125) : sci.impl.interpreter.interpret.call(null,G__65124,G__65125));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64767 = (function (){var G__65126 = ctx;
var G__65127 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65126,G__65127) : sci.impl.interpreter.interpret.call(null,G__65126,G__65127));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64768 = (function (){var G__65128 = ctx;
var G__65129 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65128,G__65129) : sci.impl.interpreter.interpret.call(null,G__65128,G__65129));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64769 = (function (){var G__65130 = ctx;
var G__65131 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65130,G__65131) : sci.impl.interpreter.interpret.call(null,G__65130,G__65131));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64770 = (function (){var G__65132 = ctx;
var G__65133 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65132,G__65133) : sci.impl.interpreter.interpret.call(null,G__65132,G__65133));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64771 = (function (){var G__65134 = ctx;
var G__65135 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65134,G__65135) : sci.impl.interpreter.interpret.call(null,G__65134,G__65135));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64772 = (function (){var G__65136 = ctx;
var G__65137 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65136,G__65137) : sci.impl.interpreter.interpret.call(null,G__65136,G__65137));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64773 = (function (){var G__65138 = ctx;
var G__65139 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65138,G__65139) : sci.impl.interpreter.interpret.call(null,G__65138,G__65139));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64774 = (function (){var G__65140 = ctx;
var G__65141 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65140,G__65141) : sci.impl.interpreter.interpret.call(null,G__65140,G__65141));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64775 = (function (){var G__65142 = ctx;
var G__65143 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65142,G__65143) : sci.impl.interpreter.interpret.call(null,G__65142,G__65143));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg64776 = (function (){var G__65144 = ctx;
var G__65145 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65144,G__65145) : sci.impl.interpreter.interpret.call(null,G__65144,G__65145));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg64777 = (function (){var G__65146 = ctx;
var G__65147 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65146,G__65147) : sci.impl.interpreter.interpret.call(null,G__65146,G__65147));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg64778 = (function (){var G__65148 = ctx;
var G__65149 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65148,G__65149) : sci.impl.interpreter.interpret.call(null,G__65148,G__65149));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg64762,arg64763,arg64764,arg64765,arg64766,arg64767,arg64768,arg64769,arg64770,arg64771,arg64772,arg64773,arg64774,arg64775,arg64776,arg64777,arg64778) : f.call(null,arg64762,arg64763,arg64764,arg64765,arg64766,arg64767,arg64768,arg64769,arg64770,arg64771,arg64772,arg64773,arg64774,arg64775,arg64776,arg64777,arg64778));

break;
case (18):
var arg64779 = (function (){var G__65150 = ctx;
var G__65151 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65150,G__65151) : sci.impl.interpreter.interpret.call(null,G__65150,G__65151));
})();
var args__$1 = cljs.core.rest(args);
var arg64780 = (function (){var G__65152 = ctx;
var G__65153 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65152,G__65153) : sci.impl.interpreter.interpret.call(null,G__65152,G__65153));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64781 = (function (){var G__65154 = ctx;
var G__65155 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65154,G__65155) : sci.impl.interpreter.interpret.call(null,G__65154,G__65155));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64782 = (function (){var G__65156 = ctx;
var G__65157 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65156,G__65157) : sci.impl.interpreter.interpret.call(null,G__65156,G__65157));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64783 = (function (){var G__65158 = ctx;
var G__65159 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65158,G__65159) : sci.impl.interpreter.interpret.call(null,G__65158,G__65159));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64784 = (function (){var G__65160 = ctx;
var G__65161 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65160,G__65161) : sci.impl.interpreter.interpret.call(null,G__65160,G__65161));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64785 = (function (){var G__65162 = ctx;
var G__65163 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65162,G__65163) : sci.impl.interpreter.interpret.call(null,G__65162,G__65163));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64786 = (function (){var G__65164 = ctx;
var G__65165 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65164,G__65165) : sci.impl.interpreter.interpret.call(null,G__65164,G__65165));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64787 = (function (){var G__65166 = ctx;
var G__65167 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65166,G__65167) : sci.impl.interpreter.interpret.call(null,G__65166,G__65167));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64788 = (function (){var G__65168 = ctx;
var G__65169 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65168,G__65169) : sci.impl.interpreter.interpret.call(null,G__65168,G__65169));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64789 = (function (){var G__65170 = ctx;
var G__65171 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65170,G__65171) : sci.impl.interpreter.interpret.call(null,G__65170,G__65171));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64790 = (function (){var G__65172 = ctx;
var G__65173 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65172,G__65173) : sci.impl.interpreter.interpret.call(null,G__65172,G__65173));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64791 = (function (){var G__65174 = ctx;
var G__65175 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65174,G__65175) : sci.impl.interpreter.interpret.call(null,G__65174,G__65175));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64792 = (function (){var G__65176 = ctx;
var G__65177 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65176,G__65177) : sci.impl.interpreter.interpret.call(null,G__65176,G__65177));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg64793 = (function (){var G__65178 = ctx;
var G__65179 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65178,G__65179) : sci.impl.interpreter.interpret.call(null,G__65178,G__65179));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg64794 = (function (){var G__65180 = ctx;
var G__65181 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65180,G__65181) : sci.impl.interpreter.interpret.call(null,G__65180,G__65181));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg64795 = (function (){var G__65182 = ctx;
var G__65183 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65182,G__65183) : sci.impl.interpreter.interpret.call(null,G__65182,G__65183));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg64796 = (function (){var G__65184 = ctx;
var G__65185 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65184,G__65185) : sci.impl.interpreter.interpret.call(null,G__65184,G__65185));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg64779,arg64780,arg64781,arg64782,arg64783,arg64784,arg64785,arg64786,arg64787,arg64788,arg64789,arg64790,arg64791,arg64792,arg64793,arg64794,arg64795,arg64796) : f.call(null,arg64779,arg64780,arg64781,arg64782,arg64783,arg64784,arg64785,arg64786,arg64787,arg64788,arg64789,arg64790,arg64791,arg64792,arg64793,arg64794,arg64795,arg64796));

break;
case (19):
var arg64797 = (function (){var G__65186 = ctx;
var G__65187 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65186,G__65187) : sci.impl.interpreter.interpret.call(null,G__65186,G__65187));
})();
var args__$1 = cljs.core.rest(args);
var arg64798 = (function (){var G__65188 = ctx;
var G__65189 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65188,G__65189) : sci.impl.interpreter.interpret.call(null,G__65188,G__65189));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg64799 = (function (){var G__65190 = ctx;
var G__65191 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65190,G__65191) : sci.impl.interpreter.interpret.call(null,G__65190,G__65191));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg64800 = (function (){var G__65192 = ctx;
var G__65193 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65192,G__65193) : sci.impl.interpreter.interpret.call(null,G__65192,G__65193));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg64801 = (function (){var G__65194 = ctx;
var G__65195 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65194,G__65195) : sci.impl.interpreter.interpret.call(null,G__65194,G__65195));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg64802 = (function (){var G__65196 = ctx;
var G__65197 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65196,G__65197) : sci.impl.interpreter.interpret.call(null,G__65196,G__65197));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg64803 = (function (){var G__65198 = ctx;
var G__65199 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65198,G__65199) : sci.impl.interpreter.interpret.call(null,G__65198,G__65199));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg64804 = (function (){var G__65200 = ctx;
var G__65201 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65200,G__65201) : sci.impl.interpreter.interpret.call(null,G__65200,G__65201));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg64805 = (function (){var G__65202 = ctx;
var G__65203 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65202,G__65203) : sci.impl.interpreter.interpret.call(null,G__65202,G__65203));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg64806 = (function (){var G__65204 = ctx;
var G__65205 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65204,G__65205) : sci.impl.interpreter.interpret.call(null,G__65204,G__65205));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg64807 = (function (){var G__65206 = ctx;
var G__65207 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65206,G__65207) : sci.impl.interpreter.interpret.call(null,G__65206,G__65207));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg64808 = (function (){var G__65208 = ctx;
var G__65209 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65208,G__65209) : sci.impl.interpreter.interpret.call(null,G__65208,G__65209));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg64809 = (function (){var G__65210 = ctx;
var G__65211 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65210,G__65211) : sci.impl.interpreter.interpret.call(null,G__65210,G__65211));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg64810 = (function (){var G__65212 = ctx;
var G__65213 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65212,G__65213) : sci.impl.interpreter.interpret.call(null,G__65212,G__65213));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg64811 = (function (){var G__65214 = ctx;
var G__65215 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65214,G__65215) : sci.impl.interpreter.interpret.call(null,G__65214,G__65215));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg64812 = (function (){var G__65216 = ctx;
var G__65217 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65216,G__65217) : sci.impl.interpreter.interpret.call(null,G__65216,G__65217));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg64813 = (function (){var G__65218 = ctx;
var G__65219 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65218,G__65219) : sci.impl.interpreter.interpret.call(null,G__65218,G__65219));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg64814 = (function (){var G__65220 = ctx;
var G__65221 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65220,G__65221) : sci.impl.interpreter.interpret.call(null,G__65220,G__65221));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg64815 = (function (){var G__65222 = ctx;
var G__65223 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65222,G__65223) : sci.impl.interpreter.interpret.call(null,G__65222,G__65223));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg64797,arg64798,arg64799,arg64800,arg64801,arg64802,arg64803,arg64804,arg64805,arg64806,arg64807,arg64808,arg64809,arg64810,arg64811,arg64812,arg64813,arg64814,arg64815) : f.call(null,arg64797,arg64798,arg64799,arg64800,arg64801,arg64802,arg64803,arg64804,arg64805,arg64806,arg64807,arg64808,arg64809,arg64810,arg64811,arg64812,arg64813,arg64814,arg64815));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__65224 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__65224)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__65224)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__65224)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__65224)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__65224)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__65224)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__65225 = ctx;
var G__65226 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65225,G__65226) : sci.impl.interpreter.interpret.call(null,G__65225,G__65226));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__65224)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__65224)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__65224)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__65224)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__65224)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__65224)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__65224)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__65224)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__65224)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__65227 = ctx;
var G__65228 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65227,G__65228) : sci.impl.interpreter.interpret.call(null,G__65227,G__65228));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__65224)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__65224)){
return (new cljs.core.LazySeq(null,(function (){var G__65229 = ctx;
var G__65230 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65229,G__65230) : sci.impl.interpreter.interpret.call(null,G__65229,G__65230));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__65224)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__65224)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__65224)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__65224)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65224)].join('')));

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
if(cljs.core.truth_((function (){var G__65232 = op;
var G__65233 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__65232,G__65233) : sci.impl.utils.kw_identical_QMARK_.call(null,G__65232,G__65233));
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
}catch (e65231){if((e65231 instanceof Error)){
var e = e65231;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e65231;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__65240 = op;
var G__65240__$1 = (((G__65240 instanceof cljs.core.Keyword))?G__65240.fqn:null);
switch (G__65240__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65237_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65237_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65237_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65238_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65238_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65238_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65239_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65239_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65239_SHARP_));
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
var G__65469 = cljs.core.rest(exprs);
var G__65470 = (function (){var G__65243 = ctx;
var G__65244 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__65243,G__65244) : sci.impl.interpreter.eval_form.call(null,G__65243,G__65244));
})();
exprs = G__65469;
ret = G__65470;
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
if(cljs.core.truth_((function (){var G__65247 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__65248 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__65247,G__65248) : sci.impl.utils.kw_identical_QMARK_.call(null,G__65247,G__65248));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__65471 = ret__$1;
ret = G__65471;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__65250 = arguments.length;
switch (G__65250) {
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
