goog.provide('rewrite_clj.zip.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('clojure.zip');
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_QMARK_(zloc){
var G__59557 = zloc;
var G__59557__$1 = (((G__59557 == null))?null:clojure.zip.node(G__59557));
if((G__59557__$1 == null)){
return null;
} else {
return (rewrite_clj.node.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59557__$1) : rewrite_clj.node.whitespace_QMARK_.call(null,G__59557__$1));
}
});
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$linebreak_QMARK_(zloc){
var G__59558 = zloc;
var G__59558__$1 = (((G__59558 == null))?null:clojure.zip.node(G__59558));
if((G__59558__$1 == null)){
return null;
} else {
return (rewrite_clj.node.linebreak_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.linebreak_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59558__$1) : rewrite_clj.node.linebreak_QMARK_.call(null,G__59558__$1));
}
});
rewrite_clj.zip.whitespace.comment_QMARK_ = (function rewrite_clj$zip$whitespace$comment_QMARK_(zloc){
var G__59559 = zloc;
var G__59559__$1 = (((G__59559 == null))?null:clojure.zip.node(G__59559));
if((G__59559__$1 == null)){
return null;
} else {
return (rewrite_clj.node.comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.comment_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59559__$1) : rewrite_clj.node.comment_QMARK_.call(null,G__59559__$1));
}
});
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__4174__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_(zloc);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace.linebreak_QMARK_(zloc));
} else {
return and__4174__auto__;
}
});
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__59560 = zloc;
var G__59560__$1 = (((G__59560 == null))?null:clojure.zip.node(G__59560));
if((G__59560__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace_or_comment_QMARK_(G__59560__$1);
}
});
/**
 * Perform the given movement while the given predicate returns true.
 */
rewrite_clj.zip.whitespace.skip = (function rewrite_clj$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
});
/**
 * Perform the given movement (default: `z/right`) until a non-whitespace/
 * non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace = (function rewrite_clj$zip$whitespace$skip_whitespace(var_args){
var G__59562 = arguments.length;
switch (G__59562) {
case 1:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.right,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip(f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Move left until a non-whitespace/non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace_left = (function rewrite_clj$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.left,zloc);
});
/**
 * Prepend a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_space = (function rewrite_clj$zip$whitespace$prepend_space(var_args){
var G__59564 = arguments.length;
switch (G__59564) {
case 1:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left(zloc,(rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.node.spaces.call(null,n)));
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = 2);

/**
 * Append a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.append_space = (function rewrite_clj$zip$whitespace$append_space(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 1:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right(zloc,(rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.spaces.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.node.spaces.call(null,n)));
}));

(rewrite_clj.zip.whitespace.append_space.cljs$lang$maxFixedArity = 2);

/**
 * Prepend a newlines node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_newline = (function rewrite_clj$zip$whitespace$prepend_newline(var_args){
var G__59569 = arguments.length;
switch (G__59569) {
case 1:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left(zloc,(rewrite_clj.node.newlines.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.newlines.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.node.newlines.call(null,n)));
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = 2);

/**
 * Append a newline node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.append_newline = (function rewrite_clj$zip$whitespace$append_newline(var_args){
var G__59571 = arguments.length;
switch (G__59571) {
case 1:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right(zloc,(rewrite_clj.node.newlines.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.newlines.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.node.newlines.call(null,n)));
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.zip.whitespace.js.map
