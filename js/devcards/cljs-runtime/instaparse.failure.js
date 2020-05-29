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
var G__42002 = (line + (1));
var G__42003 = (1);
var G__42004 = (counter + (1));
line = G__42002;
col = G__42003;
counter = G__42004;
continue;
} else {
var G__42005 = line;
var G__42006 = (col + (1));
var G__42007 = (counter + (1));
line = G__42005;
col = G__42006;
counter = G__42007;
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
var G__42008 = cljs.core.next(chars);
var G__42009 = (n__$1 - (1));
chars = G__42008;
n__$1 = G__42009;
continue;
} else {
var G__42011 = cljs.core.next(chars);
var G__42012 = n__$1;
chars = G__42011;
n__$1 = G__42012;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__41988){
var map__41991 = p__41988;
var map__41991__$1 = (((((!((map__41991 == null))))?(((((map__41991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41991):map__41991);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__41993_42021 = cljs.core.seq(full_reasons);
var chunk__41994_42022 = null;
var count__41995_42023 = (0);
var i__41996_42024 = (0);
while(true){
if((i__41996_42024 < count__41995_42023)){
var r_42025 = chunk__41994_42022.cljs$core$IIndexed$_nth$arity$2(null,i__41996_42024);
instaparse.failure.print_reason(r_42025);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__42026 = seq__41993_42021;
var G__42027 = chunk__41994_42022;
var G__42028 = count__41995_42023;
var G__42029 = (i__41996_42024 + (1));
seq__41993_42021 = G__42026;
chunk__41994_42022 = G__42027;
count__41995_42023 = G__42028;
i__41996_42024 = G__42029;
continue;
} else {
var temp__5735__auto___42030 = cljs.core.seq(seq__41993_42021);
if(temp__5735__auto___42030){
var seq__41993_42031__$1 = temp__5735__auto___42030;
if(cljs.core.chunked_seq_QMARK_(seq__41993_42031__$1)){
var c__4609__auto___42032 = cljs.core.chunk_first(seq__41993_42031__$1);
var G__42033 = cljs.core.chunk_rest(seq__41993_42031__$1);
var G__42034 = c__4609__auto___42032;
var G__42035 = cljs.core.count(c__4609__auto___42032);
var G__42036 = (0);
seq__41993_42021 = G__42033;
chunk__41994_42022 = G__42034;
count__41995_42023 = G__42035;
i__41996_42024 = G__42036;
continue;
} else {
var r_42037 = cljs.core.first(seq__41993_42031__$1);
instaparse.failure.print_reason(r_42037);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__42038 = cljs.core.next(seq__41993_42031__$1);
var G__42039 = null;
var G__42040 = (0);
var G__42041 = (0);
seq__41993_42021 = G__42038;
chunk__41994_42022 = G__42039;
count__41995_42023 = G__42040;
i__41996_42024 = G__42041;
continue;
}
} else {
}
}
break;
}

var seq__41997 = cljs.core.seq(partial_reasons);
var chunk__41998 = null;
var count__41999 = (0);
var i__42000 = (0);
while(true){
if((i__42000 < count__41999)){
var r = chunk__41998.cljs$core$IIndexed$_nth$arity$2(null,i__42000);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__42042 = seq__41997;
var G__42043 = chunk__41998;
var G__42044 = count__41999;
var G__42045 = (i__42000 + (1));
seq__41997 = G__42042;
chunk__41998 = G__42043;
count__41999 = G__42044;
i__42000 = G__42045;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41997);
if(temp__5735__auto__){
var seq__41997__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41997__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41997__$1);
var G__42046 = cljs.core.chunk_rest(seq__41997__$1);
var G__42047 = c__4609__auto__;
var G__42048 = cljs.core.count(c__4609__auto__);
var G__42049 = (0);
seq__41997 = G__42046;
chunk__41998 = G__42047;
count__41999 = G__42048;
i__42000 = G__42049;
continue;
} else {
var r = cljs.core.first(seq__41997__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__42052 = cljs.core.next(seq__41997__$1);
var G__42053 = null;
var G__42054 = (0);
var G__42055 = (0);
seq__41997 = G__42052;
chunk__41998 = G__42053;
count__41999 = G__42054;
i__42000 = G__42055;
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
