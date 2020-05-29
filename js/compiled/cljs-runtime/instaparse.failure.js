goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__73435 = (line + (1));
var G__73436 = (1);
var G__73437 = (counter + (1));
line = G__73435;
col = G__73436;
counter = G__73437;
continue;
} else {
var G__73438 = line;
var G__73439 = (col + (1));
var G__73440 = (counter + (1));
line = G__73438;
col = G__73439;
counter = G__73440;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__73442 = cljs.core.next(chars);
var G__73443 = (n__$1 - (1));
chars = G__73442;
n__$1 = G__73443;
continue;
} else {
var G__73444 = cljs.core.next(chars);
var G__73445 = n__$1;
chars = G__73444;
n__$1 = G__73445;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__73416){
var map__73417 = p__73416;
var map__73417__$1 = (((((!((map__73417 == null))))?(((((map__73417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73417):map__73417);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73417__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73417__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73417__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73417__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__73419_73451 = cljs.core.seq(full_reasons);
var chunk__73424_73452 = null;
var count__73425_73453 = (0);
var i__73426_73454 = (0);
while(true){
if((i__73426_73454 < count__73425_73453)){
var r_73455 = chunk__73424_73452.cljs$core$IIndexed$_nth$arity$2(null,i__73426_73454);
instaparse.failure.print_reason(r_73455);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__73456 = seq__73419_73451;
var G__73457 = chunk__73424_73452;
var G__73458 = count__73425_73453;
var G__73459 = (i__73426_73454 + (1));
seq__73419_73451 = G__73456;
chunk__73424_73452 = G__73457;
count__73425_73453 = G__73458;
i__73426_73454 = G__73459;
continue;
} else {
var temp__5735__auto___73460 = cljs.core.seq(seq__73419_73451);
if(temp__5735__auto___73460){
var seq__73419_73461__$1 = temp__5735__auto___73460;
if(cljs.core.chunked_seq_QMARK_(seq__73419_73461__$1)){
var c__4609__auto___73462 = cljs.core.chunk_first(seq__73419_73461__$1);
var G__73463 = cljs.core.chunk_rest(seq__73419_73461__$1);
var G__73464 = c__4609__auto___73462;
var G__73465 = cljs.core.count(c__4609__auto___73462);
var G__73466 = (0);
seq__73419_73451 = G__73463;
chunk__73424_73452 = G__73464;
count__73425_73453 = G__73465;
i__73426_73454 = G__73466;
continue;
} else {
var r_73467 = cljs.core.first(seq__73419_73461__$1);
instaparse.failure.print_reason(r_73467);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__73468 = cljs.core.next(seq__73419_73461__$1);
var G__73469 = null;
var G__73470 = (0);
var G__73471 = (0);
seq__73419_73451 = G__73468;
chunk__73424_73452 = G__73469;
count__73425_73453 = G__73470;
i__73426_73454 = G__73471;
continue;
}
} else {
}
}
break;
}

var seq__73431 = cljs.core.seq(partial_reasons);
var chunk__73432 = null;
var count__73433 = (0);
var i__73434 = (0);
while(true){
if((i__73434 < count__73433)){
var r = chunk__73432.cljs$core$IIndexed$_nth$arity$2(null,i__73434);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__73472 = seq__73431;
var G__73473 = chunk__73432;
var G__73474 = count__73433;
var G__73475 = (i__73434 + (1));
seq__73431 = G__73472;
chunk__73432 = G__73473;
count__73433 = G__73474;
i__73434 = G__73475;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73431);
if(temp__5735__auto__){
var seq__73431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73431__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__73431__$1);
var G__73476 = cljs.core.chunk_rest(seq__73431__$1);
var G__73477 = c__4609__auto__;
var G__73478 = cljs.core.count(c__4609__auto__);
var G__73479 = (0);
seq__73431 = G__73476;
chunk__73432 = G__73477;
count__73433 = G__73478;
i__73434 = G__73479;
continue;
} else {
var r = cljs.core.first(seq__73431__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__73480 = cljs.core.next(seq__73431__$1);
var G__73481 = null;
var G__73482 = (0);
var G__73483 = (0);
seq__73431 = G__73480;
chunk__73432 = G__73481;
count__73433 = G__73482;
i__73434 = G__73483;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
