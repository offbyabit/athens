goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67423){
var map__67425 = p__67423;
var map__67425__$1 = (((((!((map__67425 == null))))?(((((map__67425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67425):map__67425);
var m = map__67425__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67425__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67457_67742 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67458_67743 = null;
var count__67459_67744 = (0);
var i__67460_67745 = (0);
while(true){
if((i__67460_67745 < count__67459_67744)){
var f_67746 = chunk__67458_67743.cljs$core$IIndexed$_nth$arity$2(null,i__67460_67745);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67746], 0));


var G__67747 = seq__67457_67742;
var G__67748 = chunk__67458_67743;
var G__67749 = count__67459_67744;
var G__67750 = (i__67460_67745 + (1));
seq__67457_67742 = G__67747;
chunk__67458_67743 = G__67748;
count__67459_67744 = G__67749;
i__67460_67745 = G__67750;
continue;
} else {
var temp__5735__auto___67751 = cljs.core.seq(seq__67457_67742);
if(temp__5735__auto___67751){
var seq__67457_67752__$1 = temp__5735__auto___67751;
if(cljs.core.chunked_seq_QMARK_(seq__67457_67752__$1)){
var c__4609__auto___67753 = cljs.core.chunk_first(seq__67457_67752__$1);
var G__67754 = cljs.core.chunk_rest(seq__67457_67752__$1);
var G__67755 = c__4609__auto___67753;
var G__67756 = cljs.core.count(c__4609__auto___67753);
var G__67757 = (0);
seq__67457_67742 = G__67754;
chunk__67458_67743 = G__67755;
count__67459_67744 = G__67756;
i__67460_67745 = G__67757;
continue;
} else {
var f_67759 = cljs.core.first(seq__67457_67752__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67759], 0));


var G__67760 = cljs.core.next(seq__67457_67752__$1);
var G__67761 = null;
var G__67762 = (0);
var G__67763 = (0);
seq__67457_67742 = G__67760;
chunk__67458_67743 = G__67761;
count__67459_67744 = G__67762;
i__67460_67745 = G__67763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_67764], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_67764)))?cljs.core.second(arglists_67764):arglists_67764)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67486_67773 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67487_67774 = null;
var count__67488_67775 = (0);
var i__67489_67776 = (0);
while(true){
if((i__67489_67776 < count__67488_67775)){
var vec__67521_67778 = chunk__67487_67774.cljs$core$IIndexed$_nth$arity$2(null,i__67489_67776);
var name_67779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67521_67778,(0),null);
var map__67524_67780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67521_67778,(1),null);
var map__67524_67781__$1 = (((((!((map__67524_67780 == null))))?(((((map__67524_67780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67524_67780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67524_67780):map__67524_67780);
var doc_67782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67524_67781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67524_67781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67779], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67783], 0));

if(cljs.core.truth_(doc_67782)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67782], 0));
} else {
}


var G__67784 = seq__67486_67773;
var G__67785 = chunk__67487_67774;
var G__67786 = count__67488_67775;
var G__67787 = (i__67489_67776 + (1));
seq__67486_67773 = G__67784;
chunk__67487_67774 = G__67785;
count__67488_67775 = G__67786;
i__67489_67776 = G__67787;
continue;
} else {
var temp__5735__auto___67789 = cljs.core.seq(seq__67486_67773);
if(temp__5735__auto___67789){
var seq__67486_67790__$1 = temp__5735__auto___67789;
if(cljs.core.chunked_seq_QMARK_(seq__67486_67790__$1)){
var c__4609__auto___67791 = cljs.core.chunk_first(seq__67486_67790__$1);
var G__67792 = cljs.core.chunk_rest(seq__67486_67790__$1);
var G__67793 = c__4609__auto___67791;
var G__67794 = cljs.core.count(c__4609__auto___67791);
var G__67795 = (0);
seq__67486_67773 = G__67792;
chunk__67487_67774 = G__67793;
count__67488_67775 = G__67794;
i__67489_67776 = G__67795;
continue;
} else {
var vec__67549_67796 = cljs.core.first(seq__67486_67790__$1);
var name_67797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67549_67796,(0),null);
var map__67552_67798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67549_67796,(1),null);
var map__67552_67799__$1 = (((((!((map__67552_67798 == null))))?(((((map__67552_67798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67552_67798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67552_67798):map__67552_67798);
var doc_67800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67552_67799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67552_67799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67797], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67801], 0));

if(cljs.core.truth_(doc_67800)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67800], 0));
} else {
}


var G__67802 = cljs.core.next(seq__67486_67790__$1);
var G__67803 = null;
var G__67804 = (0);
var G__67805 = (0);
seq__67486_67773 = G__67802;
chunk__67487_67774 = G__67803;
count__67488_67775 = G__67804;
i__67489_67776 = G__67805;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__67565 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67566 = null;
var count__67567 = (0);
var i__67568 = (0);
while(true){
if((i__67568 < count__67567)){
var role = chunk__67566.cljs$core$IIndexed$_nth$arity$2(null,i__67568);
var temp__5735__auto___67807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___67807__$1)){
var spec_67808 = temp__5735__auto___67807__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67808)], 0));
} else {
}


var G__67809 = seq__67565;
var G__67810 = chunk__67566;
var G__67811 = count__67567;
var G__67812 = (i__67568 + (1));
seq__67565 = G__67809;
chunk__67566 = G__67810;
count__67567 = G__67811;
i__67568 = G__67812;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__67565);
if(temp__5735__auto____$1){
var seq__67565__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67565__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67565__$1);
var G__67814 = cljs.core.chunk_rest(seq__67565__$1);
var G__67815 = c__4609__auto__;
var G__67816 = cljs.core.count(c__4609__auto__);
var G__67817 = (0);
seq__67565 = G__67814;
chunk__67566 = G__67815;
count__67567 = G__67816;
i__67568 = G__67817;
continue;
} else {
var role = cljs.core.first(seq__67565__$1);
var temp__5735__auto___67818__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___67818__$2)){
var spec_67819 = temp__5735__auto___67818__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67819)], 0));
} else {
}


var G__67820 = cljs.core.next(seq__67565__$1);
var G__67821 = null;
var G__67822 = (0);
var G__67823 = (0);
seq__67565 = G__67820;
chunk__67566 = G__67821;
count__67567 = G__67822;
i__67568 = G__67823;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__67824 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__67825 = cljs.core.ex_cause(t);
via = G__67824;
t = G__67825;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__67606 = datafied_throwable;
var map__67606__$1 = (((((!((map__67606 == null))))?(((((map__67606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67606):map__67606);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67606__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67606__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67606__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__67607 = cljs.core.last(via);
var map__67607__$1 = (((((!((map__67607 == null))))?(((((map__67607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67607):map__67607);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67607__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67607__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__67608 = data;
var map__67608__$1 = (((((!((map__67608 == null))))?(((((map__67608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67608):map__67608);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67608__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67608__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67608__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__67609 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__67609__$1 = (((((!((map__67609 == null))))?(((((map__67609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67609):map__67609);
var top_data = map__67609__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67622 = phase;
var G__67622__$1 = (((G__67622 instanceof cljs.core.Keyword))?G__67622.fqn:null);
switch (G__67622__$1) {
case "read-source":
var map__67623 = data;
var map__67623__$1 = (((((!((map__67623 == null))))?(((((map__67623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67623):map__67623);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67623__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67623__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__67625 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__67625__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67625,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67625);
var G__67625__$2 = (cljs.core.truth_((function (){var fexpr__67626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67626.cljs$core$IFn$_invoke$arity$1 ? fexpr__67626.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67626.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67625__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67625__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67625__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__67627 = top_data;
var G__67627__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67627,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67627);
var G__67627__$2 = (cljs.core.truth_((function (){var fexpr__67631 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67631.cljs$core$IFn$_invoke$arity$1 ? fexpr__67631.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67631.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67627__$1);
var G__67627__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67627__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67627__$2);
var G__67627__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67627__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67627__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67627__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67627__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__67636 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67636,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67636,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67636,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67636,(3),null);
var G__67645 = top_data;
var G__67645__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67645,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__67645);
var G__67645__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67645__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__67645__$1);
var G__67645__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67645__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__67645__$2);
var G__67645__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67645__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67645__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67645__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67645__$4;
}

break;
case "execution":
var vec__67662 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67603_SHARP_){
var or__4185__auto__ = (p1__67603_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__67666 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67666.cljs$core$IFn$_invoke$arity$1 ? fexpr__67666.cljs$core$IFn$_invoke$arity$1(p1__67603_SHARP_) : fexpr__67666.call(null,p1__67603_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__67668 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__67668__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__67668);
var G__67668__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67668__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67668__$1);
var G__67668__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__67668__$2);
var G__67668__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67668__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__67668__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67668__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67668__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67622__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__67673){
var map__67674 = p__67673;
var map__67674__$1 = (((((!((map__67674 == null))))?(((((map__67674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67674):map__67674);
var triage_data = map__67674__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__67685 = phase;
var G__67685__$1 = (((G__67685 instanceof cljs.core.Keyword))?G__67685.fqn:null);
switch (G__67685__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__67686 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__67687 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67688 = loc;
var G__67689 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67690_67856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67691_67857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67692_67858 = true;
var _STAR_print_fn_STAR__temp_val__67693_67859 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67692_67858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67693_67859);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67670_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67670_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67691_67857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67690_67856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67686,G__67687,G__67688,G__67689) : format.call(null,G__67686,G__67687,G__67688,G__67689));

break;
case "macroexpansion":
var G__67698 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__67699 = cause_type;
var G__67700 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67701 = loc;
var G__67702 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67698,G__67699,G__67700,G__67701,G__67702) : format.call(null,G__67698,G__67699,G__67700,G__67701,G__67702));

break;
case "compile-syntax-check":
var G__67703 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__67704 = cause_type;
var G__67705 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67706 = loc;
var G__67707 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67703,G__67704,G__67705,G__67706,G__67707) : format.call(null,G__67703,G__67704,G__67705,G__67706,G__67707));

break;
case "compilation":
var G__67708 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__67709 = cause_type;
var G__67710 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67711 = loc;
var G__67712 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67708,G__67709,G__67710,G__67711,G__67712) : format.call(null,G__67708,G__67709,G__67710,G__67711,G__67712));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__67713 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__67714 = symbol;
var G__67715 = loc;
var G__67716 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67717_67860 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67718_67861 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67719_67862 = true;
var _STAR_print_fn_STAR__temp_val__67720_67863 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67719_67862);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67720_67863);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67671_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67671_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67718_67861);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67717_67860);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67713,G__67714,G__67715,G__67716) : format.call(null,G__67713,G__67714,G__67715,G__67716));
} else {
var G__67722 = "Execution error%s at %s(%s).\n%s\n";
var G__67723 = cause_type;
var G__67724 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67725 = loc;
var G__67726 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67722,G__67723,G__67724,G__67725,G__67726) : format.call(null,G__67722,G__67723,G__67724,G__67725,G__67726));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67685__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
