goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___73502 = arguments.length;
var i__4790__auto___73503 = (0);
while(true){
if((i__4790__auto___73503 < len__4789__auto___73502)){
args__4795__auto__.push((arguments[i__4790__auto___73503]));

var G__73504 = (i__4790__auto___73503 + (1));
i__4790__auto___73503 = G__73504;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq73485){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73485));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___73505 = arguments.length;
var i__4790__auto___73507 = (0);
while(true){
if((i__4790__auto___73507 < len__4789__auto___73505)){
args__4795__auto__.push((arguments[i__4790__auto___73507]));

var G__73508 = (i__4790__auto___73507 + (1));
i__4790__auto___73507 = G__73508;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq73486){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73486));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__73495 = "";
var G__73495__$1 = (cljs.core.truth_(re.ignoreCase)?[G__73495,"i"].join(''):G__73495);
var G__73495__$2 = (cljs.core.truth_(re.multiline)?[G__73495__$1,"m"].join(''):G__73495__$1);
if(cljs.core.truth_(re.unicode)){
return [G__73495__$2,"u"].join('');
} else {
return G__73495__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
