goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__69484 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__69484) : stop_at_QMARK_.call(null,G__69484));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__69485 = stop_at_QMARK_;
var G__69486 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__69485,G__69486) : posh.lib.q_analyze.take_until.call(null,G__69485,G__69486));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__69488 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__69488) : rest_at_QMARK_.call(null,G__69488));
}
})())){
return ls;
} else {
var G__70159 = rest_at_QMARK_;
var G__70160 = cljs.core.rest(ls);
rest_at_QMARK_ = G__70159;
ls = G__70160;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__69493 = split_at_QMARK_;
var G__69494 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__69493,G__69494) : posh.lib.q_analyze.split_list_at.call(null,G__69493,G__69494));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__69503 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__69503) : posh.lib.q_analyze.get_all_vars.call(null,G__69503));
})(),(function (){var G__69505 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__69505) : posh.lib.q_analyze.get_all_vars.call(null,G__69505));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__69506 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__69506) : posh.lib.q_analyze.get_all_vars.call(null,G__69506));
})(),cljs.core.first(query));
} else {
var G__69507 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__69507) : posh.lib.q_analyze.get_all_vars.call(null,G__69507));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__69513 = cljs.core.rest(eav);
var G__69514 = (n - (1));
var G__69515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__69516 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__69513,G__69514,G__69515,G__69516) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__69513,G__69514,G__69515,G__69516));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__69517 = cljs.core.rest(eav);
var G__69518 = (n - (1));
var G__69519 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__69520 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__69517,G__69518,G__69519,G__69520) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__69517,G__69518,G__69519,G__69520));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__69531 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__69531) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__69531));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__69532 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__69532) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__69532));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__69533 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69533) : posh.lib.q_analyze.get_eavs.call(null,G__69533));
})(),(function (){var G__69534 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69534) : posh.lib.q_analyze.get_eavs.call(null,G__69534));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__69535 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69535) : posh.lib.q_analyze.get_eavs.call(null,G__69535));
})(),(function (){var G__69536 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69536) : posh.lib.q_analyze.get_eavs.call(null,G__69536));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__69541 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69541) : posh.lib.q_analyze.get_eavs.call(null,G__69541));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_69542 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_69542)) && ((cljs.core.count(ocr_69542) === 2)))){
try{var ocr_69542_0__69546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542,(0));
if(((cljs.core.vector_QMARK_(ocr_69542_0__69546)) && ((cljs.core.count(ocr_69542_0__69546) === 5)))){
try{var ocr_69542_0__69546_0__69555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542_0__69546,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69542_0__69546_0__69555,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542_0__69546,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542_0__69546,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542_0__69546,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69542,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__69567 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69567) : posh.lib.q_analyze.get_eavs.call(null,G__69567));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e69565){if((e69565 instanceof Error)){
var e__44416__auto__ = e69565;
if((e__44416__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto__;
}
} else {
throw e69565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69563){if((e69563 instanceof Error)){
var e__44416__auto__ = e69563;
if((e__44416__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto__;
}
} else {
throw e69563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69561){if((e69561 instanceof Error)){
var e__44416__auto__ = e69561;
if((e__44416__auto__ === cljs.core.match.backtrack)){
var G__69562 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69562) : posh.lib.q_analyze.get_eavs.call(null,G__69562));
} else {
throw e__44416__auto__;
}
} else {
throw e69561;

}
}} else {
var G__69571 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__69571) : posh.lib.q_analyze.get_eavs.call(null,G__69571));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__69572){
var vec__69573 = p__69572;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69573,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69576_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__69576_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__69576_SHARP_);
} else {
return p1__69576_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__69577 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__69577) : posh.lib.q_analyze.count_qvars.call(null,G__69577));
})(),(function (){var G__69579 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__69579) : posh.lib.q_analyze.count_qvars.call(null,G__69579));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__69580 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__69580) : posh.lib.q_analyze.count_qvars.call(null,G__69580));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__69581(s__69582){
return (new cljs.core.LazySeq(null,(function (){
var s__69582__$1 = s__69582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69582__$1);
if(temp__5735__auto__){
var s__69582__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69582__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__69582__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__69584 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__69583 = (0);
while(true){
if((i__69583 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__69583);
cljs.core.chunk_append(b__69584,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__70178 = (i__69583 + (1));
i__69583 = G__70178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69584),posh$lib$q_analyze$fill_qvar_set_$_iter__69581(cljs.core.chunk_rest(s__69582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69584),null);
}
} else {
var r = cljs.core.first(s__69582__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__69581(cljs.core.rest(s__69582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__69590 = cljs.core.first(seq1);
var G__69591 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__69590,G__69591) : f.call(null,G__69590,G__69591));
})(),(function (){var G__69592 = f;
var G__69593 = cljs.core.rest(seq1);
var G__69594 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__69592,G__69593,G__69594) : posh.lib.q_analyze.seq_merge_with.call(null,G__69592,G__69593,G__69594));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__69597){
var vec__69598 = p__69597;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69598,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69598,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69598,(2),null);
var eav = vec__69598;
var vec__69601 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69601,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69601,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69601,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604(s__69605){
return (new cljs.core.LazySeq(null,(function (){
var s__69605__$1 = s__69605;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69605__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__69605__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604_$_iter__69607(s__69608){
return (new cljs.core.LazySeq(null,((function (s__69605__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (){
var s__69608__$1 = s__69608;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__69608__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__69608__$1,s__69605__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604_$_iter__69607_$_iter__69609(s__69610){
return (new cljs.core.LazySeq(null,((function (s__69608__$1,s__69605__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (){
var s__69610__$1 = s__69610;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__69610__$1);
if(temp__5735__auto____$2){
var s__69610__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__69610__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__69610__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__69612 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__69611 = (0);
while(true){
if((i__69611 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__69611);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__69611,s__69610__$1,s__69608__$1,s__69605__$1,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p1__69595_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__69595_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__69611,s__69610__$1,s__69608__$1,s__69605__$1,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__69611,s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p__69613){
var vec__69614 = p__69613;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__69611,s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__69611,s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p1__69596_SHARP_){
if(cljs.core.truth_(p1__69596_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__69611,s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__69612,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__69612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__70183 = (i__69611 + (1));
i__69611 = G__70183;
continue;
} else {
var G__70184 = (i__69611 + (1));
i__69611 = G__70184;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69612),posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604_$_iter__69607_$_iter__69609(cljs.core.chunk_rest(s__69610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69612),null);
}
} else {
var vv = cljs.core.first(s__69610__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__69610__$1,s__69608__$1,s__69605__$1,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p1__69595_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__69595_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__69610__$1,s__69608__$1,s__69605__$1,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p__69620){
var vec__69621 = p__69620;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69621,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69621,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,exposed_qvars,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav){
return (function (p1__69596_SHARP_){
if(cljs.core.truth_(p1__69596_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__69610__$1,s__69608__$1,s__69605__$1,wildcard_count,exposed_qvars,vv,s__69610__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604_$_iter__69607_$_iter__69609(cljs.core.rest(s__69610__$2)));
} else {
var G__70189 = cljs.core.rest(s__69610__$2);
s__69610__$1 = G__70189;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__69608__$1,s__69605__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,null,null));
});})(s__69608__$1,s__69605__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604_$_iter__69607(cljs.core.rest(s__69608__$1)));
} else {
var G__70190 = cljs.core.rest(s__69608__$1);
s__69608__$1 = G__70190;
continue;
}
} else {
return null;
}
break;
}
});})(s__69605__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
,null,null));
});})(s__69605__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__69601,qe,qa,qv,vec__69598,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__69604(cljs.core.rest(s__69605__$1)));
} else {
var G__70191 = cljs.core.rest(s__69605__$1);
s__69605__$1 = G__70191;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_69642 = cljs.core.vec(eav);
var ocr_69643 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_69642)) && ((cljs.core.count(ocr_69642) === 3)))){
try{var ocr_69642_0__69671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_0__69671,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69827){if((e69827 instanceof Error)){
var e__44416__auto__ = e69827;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_69643)) && ((cljs.core.count(ocr_69643) === 3)))){
try{var ocr_69643_2__69679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69679 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69829){if((e69829 instanceof Error)){
var e__44416__auto____$1 = e69829;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69679 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69830){if((e69830 instanceof Error)){
var e__44416__auto____$2 = e69830;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e69830;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69829;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69828){if((e69828 instanceof Error)){
var e__44416__auto____$1 = e69828;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69828;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69815){if((e69815 instanceof Error)){
var e__44416__auto__ = e69815;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_69643)) && ((cljs.core.count(ocr_69643) === 3)))){
try{var ocr_69643_1__69681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69681 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69825){if((e69825 instanceof Error)){
var e__44416__auto____$1 = e69825;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69643_1__69681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69681 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69826){if((e69826 instanceof Error)){
var e__44416__auto____$2 = e69826;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e69826;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69825;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69822){if((e69822 instanceof Error)){
var e__44416__auto____$1 = e69822;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69816){if((e69816 instanceof Error)){
var e__44416__auto____$1 = e69816;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69816;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69707){if((e69707 instanceof Error)){
var e__44416__auto__ = e69707;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_69643)) && ((cljs.core.count(ocr_69643) === 3)))){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69814){if((e69814 instanceof Error)){
var e__44416__auto____$1 = e69814;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69814;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69812){if((e69812 instanceof Error)){
var e__44416__auto____$1 = e69812;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69710){if((e69710 instanceof Error)){
var e__44416__auto____$1 = e69710;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69809){if((e69809 instanceof Error)){
var e__44416__auto____$2 = e69809;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69810){if((e69810 instanceof Error)){
var e__44416__auto____$3 = e69810;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69811){if((e69811 instanceof Error)){
var e__44416__auto____$4 = e69811;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69811;

}
}} else {
throw e__44416__auto____$3;
}
} else {
throw e69810;

}
}} else {
throw e__44416__auto____$2;
}
} else {
throw e69809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69808){if((e69808 instanceof Error)){
var e__44416__auto____$2 = e69808;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e69808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69711){if((e69711 instanceof Error)){
var e__44416__auto____$2 = e69711;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69803){if((e69803 instanceof Error)){
var e__44416__auto____$3 = e69803;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$3;
}
} else {
throw e69803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69799){if((e69799 instanceof Error)){
var e__44416__auto____$3 = e69799;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
try{var ocr_69642_2__69673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_2__69673,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69801){if((e69801 instanceof Error)){
var e__44416__auto____$4 = e69801;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69800){if((e69800 instanceof Error)){
var e__44416__auto____$4 = e69800;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69800;

}
}} else {
throw e__44416__auto____$3;
}
} else {
throw e69799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69712){if((e69712 instanceof Error)){
var e__44416__auto____$3 = e69712;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69789){if((e69789 instanceof Error)){
var e__44416__auto____$4 = e69789;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69788){if((e69788 instanceof Error)){
var e__44416__auto____$4 = e69788;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69788;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69716){if((e69716 instanceof Error)){
var e__44416__auto____$4 = e69716;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69787){if((e69787 instanceof Error)){
var e__44416__auto____$5 = e69787;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$5;
}
} else {
throw e69787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69786){if((e69786 instanceof Error)){
var e__44416__auto____$5 = e69786;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$5;
}
} else {
throw e69786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69720){if((e69720 instanceof Error)){
var e__44416__auto____$5 = e69720;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69785){if((e69785 instanceof Error)){
var e__44416__auto____$6 = e69785;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$6;
}
} else {
throw e69785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69784){if((e69784 instanceof Error)){
var e__44416__auto____$6 = e69784;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$6;
}
} else {
throw e69784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69721){if((e69721 instanceof Error)){
var e__44416__auto____$6 = e69721;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69642_1__69672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_1__69672,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69781){if((e69781 instanceof Error)){
var e__44416__auto____$7 = e69781;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69775){if((e69775 instanceof Error)){
var e__44416__auto____$7 = e69775;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69722){if((e69722 instanceof Error)){
var e__44416__auto____$7 = e69722;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
try{var ocr_69642_0__69671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_0__69671,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69774){if((e69774 instanceof Error)){
var e__44416__auto____$8 = e69774;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$8;
}
} else {
throw e69774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69773){if((e69773 instanceof Error)){
var e__44416__auto____$8 = e69773;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$8;
}
} else {
throw e69773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69723){if((e69723 instanceof Error)){
var e__44416__auto____$8 = e69723;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
try{var ocr_69642_0__69671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_0__69671,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69772){if((e69772 instanceof Error)){
var e__44416__auto____$9 = e69772;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$9;
}
} else {
throw e69772;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69770){if((e69770 instanceof Error)){
var e__44416__auto____$9 = e69770;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$9;
}
} else {
throw e69770;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69724){if((e69724 instanceof Error)){
var e__44416__auto____$9 = e69724;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
try{var ocr_69642_0__69671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_0__69671,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69769){if((e69769 instanceof Error)){
var e__44416__auto____$10 = e69769;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69769;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69768){if((e69768 instanceof Error)){
var e__44416__auto____$10 = e69768;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69725){if((e69725 instanceof Error)){
var e__44416__auto____$10 = e69725;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
try{var ocr_69642_0__69671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69642_0__69671,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69767){if((e69767 instanceof Error)){
var e__44416__auto____$11 = e69767;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$11;
}
} else {
throw e69767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69766){if((e69766 instanceof Error)){
var e__44416__auto____$11 = e69766;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$11;
}
} else {
throw e69766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69726){if((e69726 instanceof Error)){
var e__44416__auto____$11 = e69726;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69761){if((e69761 instanceof Error)){
var e__44416__auto____$12 = e69761;
if((e__44416__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$12;
}
} else {
throw e69761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69747){if((e69747 instanceof Error)){
var e__44416__auto____$12 = e69747;
if((e__44416__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69759){if((e69759 instanceof Error)){
var e__44416__auto____$13 = e69759;
if((e__44416__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$13;
}
} else {
throw e69759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69755){if((e69755 instanceof Error)){
var e__44416__auto____$13 = e69755;
if((e__44416__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69758){if((e69758 instanceof Error)){
var e__44416__auto____$14 = e69758;
if((e__44416__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$14;
}
} else {
throw e69758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69756){if((e69756 instanceof Error)){
var e__44416__auto____$14 = e69756;
if((e__44416__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$14;
}
} else {
throw e69756;

}
}} else {
throw e__44416__auto____$13;
}
} else {
throw e69755;

}
}} else {
throw e__44416__auto____$12;
}
} else {
throw e69747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69727){if((e69727 instanceof Error)){
var e__44416__auto____$12 = e69727;
if((e__44416__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69746){if((e69746 instanceof Error)){
var e__44416__auto____$13 = e69746;
if((e__44416__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$13;
}
} else {
throw e69746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69745){if((e69745 instanceof Error)){
var e__44416__auto____$13 = e69745;
if((e__44416__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$13;
}
} else {
throw e69745;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69728){if((e69728 instanceof Error)){
var e__44416__auto____$13 = e69728;
if((e__44416__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === true)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69744){if((e69744 instanceof Error)){
var e__44416__auto____$14 = e69744;
if((e__44416__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$14;
}
} else {
throw e69744;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69743){if((e69743 instanceof Error)){
var e__44416__auto____$14 = e69743;
if((e__44416__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$14;
}
} else {
throw e69743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69729){if((e69729 instanceof Error)){
var e__44416__auto____$14 = e69729;
if((e__44416__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_69643_2__69685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(2));
if((ocr_69643_2__69685 === false)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === true)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69742){if((e69742 instanceof Error)){
var e__44416__auto____$15 = e69742;
if((e__44416__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$15;
}
} else {
throw e69742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69731){if((e69731 instanceof Error)){
var e__44416__auto____$15 = e69731;
if((e__44416__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_69643_0__69683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(0));
if((ocr_69643_0__69683 === false)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69733){if((e69733 instanceof Error)){
var e__44416__auto____$16 = e69733;
if((e__44416__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_69643_1__69684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69643,(1));
if((ocr_69643_1__69684 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69642,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69740){if((e69740 instanceof Error)){
var e__44416__auto____$17 = e69740;
if((e__44416__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$17;
}
} else {
throw e69740;

}
}} else {
throw e__44416__auto____$16;
}
} else {
throw e69733;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69732){if((e69732 instanceof Error)){
var e__44416__auto____$16 = e69732;
if((e__44416__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$16;
}
} else {
throw e69732;

}
}} else {
throw e__44416__auto____$15;
}
} else {
throw e69731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69730){if((e69730 instanceof Error)){
var e__44416__auto____$15 = e69730;
if((e__44416__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$15;
}
} else {
throw e69730;

}
}} else {
throw e__44416__auto____$14;
}
} else {
throw e69729;

}
}} else {
throw e__44416__auto____$13;
}
} else {
throw e69728;

}
}} else {
throw e__44416__auto____$12;
}
} else {
throw e69727;

}
}} else {
throw e__44416__auto____$11;
}
} else {
throw e69726;

}
}} else {
throw e__44416__auto____$10;
}
} else {
throw e69725;

}
}} else {
throw e__44416__auto____$9;
}
} else {
throw e69724;

}
}} else {
throw e__44416__auto____$8;
}
} else {
throw e69723;

}
}} else {
throw e__44416__auto____$7;
}
} else {
throw e69722;

}
}} else {
throw e__44416__auto____$6;
}
} else {
throw e69721;

}
}} else {
throw e__44416__auto____$5;
}
} else {
throw e69720;

}
}} else {
throw e__44416__auto____$4;
}
} else {
throw e69716;

}
}} else {
throw e__44416__auto____$3;
}
} else {
throw e69712;

}
}} else {
throw e__44416__auto____$2;
}
} else {
throw e69711;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69710;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69709){if((e69709 instanceof Error)){
var e__44416__auto____$1 = e69709;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69709;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69707;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69706){if((e69706 instanceof Error)){
var e__44416__auto__ = e69706;
if((e__44416__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__44416__auto__;
}
} else {
throw e69706;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_69834 = cljs.core.vec(eav);
var ocr_69835 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_69834)) && ((cljs.core.count(ocr_69834) === 3)))){
try{var ocr_69834_0__69866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_0__69866,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69834_2__69868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_2__69868,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69992){if((e69992 instanceof Error)){
var e__44416__auto__ = e69992;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_69835)) && ((cljs.core.count(ocr_69835) === 3)))){
try{var ocr_69835_2__69877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69877 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69994){if((e69994 instanceof Error)){
var e__44416__auto____$1 = e69994;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69877 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70004){if((e70004 instanceof Error)){
var e__44416__auto____$2 = e70004;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e70004;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69993){if((e69993 instanceof Error)){
var e__44416__auto____$1 = e69993;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69993;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69985){if((e69985 instanceof Error)){
var e__44416__auto__ = e69985;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{var ocr_69834_2__69868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_2__69868,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_69835)) && ((cljs.core.count(ocr_69835) === 3)))){
try{var ocr_69835_1__69879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69879 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69988){if((e69988 instanceof Error)){
var e__44416__auto____$1 = e69988;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69879 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69990){if((e69990 instanceof Error)){
var e__44416__auto____$2 = e69990;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e69990;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69987){if((e69987 instanceof Error)){
var e__44416__auto____$1 = e69987;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69986){if((e69986 instanceof Error)){
var e__44416__auto____$1 = e69986;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69986;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69985;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69910){if((e69910 instanceof Error)){
var e__44416__auto__ = e69910;
if((e__44416__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_69835)) && ((cljs.core.count(ocr_69835) === 3)))){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69834_2__69868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_2__69868,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69984){if((e69984 instanceof Error)){
var e__44416__auto____$1 = e69984;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69983){if((e69983 instanceof Error)){
var e__44416__auto____$1 = e69983;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69983;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69912){if((e69912 instanceof Error)){
var e__44416__auto____$1 = e69912;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
try{var ocr_69834_2__69868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_2__69868,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69972){if((e69972 instanceof Error)){
var e__44416__auto____$2 = e69972;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69975){if((e69975 instanceof Error)){
var e__44416__auto____$3 = e69975;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69976){if((e69976 instanceof Error)){
var e__44416__auto____$4 = e69976;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69976;

}
}} else {
throw e__44416__auto____$3;
}
} else {
throw e69975;

}
}} else {
throw e__44416__auto____$2;
}
} else {
throw e69972;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69969){if((e69969 instanceof Error)){
var e__44416__auto____$2 = e69969;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$2;
}
} else {
throw e69969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69913){if((e69913 instanceof Error)){
var e__44416__auto____$2 = e69913;
if((e__44416__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
try{var ocr_69834_2__69868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_2__69868,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69968){if((e69968 instanceof Error)){
var e__44416__auto____$3 = e69968;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$3;
}
} else {
throw e69968;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69967){if((e69967 instanceof Error)){
var e__44416__auto____$3 = e69967;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$3;
}
} else {
throw e69967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69914){if((e69914 instanceof Error)){
var e__44416__auto____$3 = e69914;
if((e__44416__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === true)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69965){if((e69965 instanceof Error)){
var e__44416__auto____$4 = e69965;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69964){if((e69964 instanceof Error)){
var e__44416__auto____$4 = e69964;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$4;
}
} else {
throw e69964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69915){if((e69915 instanceof Error)){
var e__44416__auto____$4 = e69915;
if((e__44416__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === false)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69963){if((e69963 instanceof Error)){
var e__44416__auto____$5 = e69963;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$5;
}
} else {
throw e69963;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69962){if((e69962 instanceof Error)){
var e__44416__auto____$5 = e69962;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$5;
}
} else {
throw e69962;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69916){if((e69916 instanceof Error)){
var e__44416__auto____$5 = e69916;
if((e__44416__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === true)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
try{var ocr_69834_1__69867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_1__69867,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69961){if((e69961 instanceof Error)){
var e__44416__auto____$6 = e69961;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$6;
}
} else {
throw e69961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69958){if((e69958 instanceof Error)){
var e__44416__auto____$6 = e69958;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
try{var ocr_69834_0__69866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_0__69866,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69960){if((e69960 instanceof Error)){
var e__44416__auto____$7 = e69960;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69959){if((e69959 instanceof Error)){
var e__44416__auto____$7 = e69959;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69959;

}
}} else {
throw e__44416__auto____$6;
}
} else {
throw e69958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69924){if((e69924 instanceof Error)){
var e__44416__auto____$6 = e69924;
if((e__44416__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === false)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
try{var ocr_69834_0__69866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_0__69866,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69957){if((e69957 instanceof Error)){
var e__44416__auto____$7 = e69957;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69957;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69956){if((e69956 instanceof Error)){
var e__44416__auto____$7 = e69956;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$7;
}
} else {
throw e69956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69925){if((e69925 instanceof Error)){
var e__44416__auto____$7 = e69925;
if((e__44416__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === true)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === false)){
try{var ocr_69834_0__69866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_69834_0__69866,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69955){if((e69955 instanceof Error)){
var e__44416__auto____$8 = e69955;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$8;
}
} else {
throw e69955;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69944){if((e69944 instanceof Error)){
var e__44416__auto____$8 = e69944;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69953){if((e69953 instanceof Error)){
var e__44416__auto____$9 = e69953;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69954){if((e69954 instanceof Error)){
var e__44416__auto____$10 = e69954;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69954;

}
}} else {
throw e__44416__auto____$9;
}
} else {
throw e69953;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69948){if((e69948 instanceof Error)){
var e__44416__auto____$9 = e69948;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === false)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69952){if((e69952 instanceof Error)){
var e__44416__auto____$10 = e69952;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69952;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69951){if((e69951 instanceof Error)){
var e__44416__auto____$10 = e69951;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69951;

}
}} else {
throw e__44416__auto____$9;
}
} else {
throw e69948;

}
}} else {
throw e__44416__auto____$8;
}
} else {
throw e69944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69928){if((e69928 instanceof Error)){
var e__44416__auto____$8 = e69928;
if((e__44416__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === false)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69942){if((e69942 instanceof Error)){
var e__44416__auto____$9 = e69942;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$9;
}
} else {
throw e69942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69941){if((e69941 instanceof Error)){
var e__44416__auto____$9 = e69941;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$9;
}
} else {
throw e69941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69931){if((e69931 instanceof Error)){
var e__44416__auto____$9 = e69931;
if((e__44416__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === true)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69939){if((e69939 instanceof Error)){
var e__44416__auto____$10 = e69939;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69938){if((e69938 instanceof Error)){
var e__44416__auto____$10 = e69938;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$10;
}
} else {
throw e69938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69932){if((e69932 instanceof Error)){
var e__44416__auto____$10 = e69932;
if((e__44416__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_69835_2__69883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(2));
if((ocr_69835_2__69883 === false)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === true)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69937){if((e69937 instanceof Error)){
var e__44416__auto____$11 = e69937;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$11;
}
} else {
throw e69937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69934){if((e69934 instanceof Error)){
var e__44416__auto____$11 = e69934;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_69835_0__69881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(0));
if((ocr_69835_0__69881 === false)){
try{var ocr_69835_1__69882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69835,(1));
if((ocr_69835_1__69882 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_69834,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69936){if((e69936 instanceof Error)){
var e__44416__auto____$12 = e69936;
if((e__44416__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$12;
}
} else {
throw e69936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69935){if((e69935 instanceof Error)){
var e__44416__auto____$12 = e69935;
if((e__44416__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$12;
}
} else {
throw e69935;

}
}} else {
throw e__44416__auto____$11;
}
} else {
throw e69934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69933){if((e69933 instanceof Error)){
var e__44416__auto____$11 = e69933;
if((e__44416__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$11;
}
} else {
throw e69933;

}
}} else {
throw e__44416__auto____$10;
}
} else {
throw e69932;

}
}} else {
throw e__44416__auto____$9;
}
} else {
throw e69931;

}
}} else {
throw e__44416__auto____$8;
}
} else {
throw e69928;

}
}} else {
throw e__44416__auto____$7;
}
} else {
throw e69925;

}
}} else {
throw e__44416__auto____$6;
}
} else {
throw e69924;

}
}} else {
throw e__44416__auto____$5;
}
} else {
throw e69916;

}
}} else {
throw e__44416__auto____$4;
}
} else {
throw e69915;

}
}} else {
throw e__44416__auto____$3;
}
} else {
throw e69914;

}
}} else {
throw e__44416__auto____$2;
}
} else {
throw e69913;

}
}} else {
throw e__44416__auto____$1;
}
} else {
throw e69912;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69911){if((e69911 instanceof Error)){
var e__44416__auto____$1 = e69911;
if((e__44416__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44416__auto____$1;
}
} else {
throw e69911;

}
}} else {
throw e__44416__auto__;
}
} else {
throw e69910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69909){if((e69909 instanceof Error)){
var e__44416__auto__ = e69909;
if((e__44416__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__44416__auto__;
}
} else {
throw e69909;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70012){
var vec__70013 = p__70012;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70013,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70006_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__70006_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70018){
var vec__70019 = p__70018;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70019,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70016_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__70016_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__70026 = cljs.core.rest(ins);
var G__70027 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__70026,G__70027) : posh.lib.q_analyze.just_qvars.call(null,G__70026,G__70027));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70029_SHARP_){
return cljs.core.zipmap(qvars,p1__70029_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__70038 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70038,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70038,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70038,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70038,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__70390 = var$;
var G__70391 = dbvarmap;
var G__70392 = cljs.core.rest(dbeavs);
var$ = G__70390;
dbvarmap = G__70391;
dbeavs = G__70392;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__70043 = cljs.core.rest(vars);
var G__70044 = dbvarmap;
var G__70045 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__70043,G__70044,G__70045) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__70043,G__70044,G__70045));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__70393 = (n + (1));
var G__70394 = cljs.core.rest(xs__$1);
n = G__70393;
xs__$1 = G__70394;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70051_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__70051_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__70051_SHARP_) : type.call(null,p1__70051_SHARP_));
} else {
return p1__70051_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__70054 = cljs.core.rest(ins);
var G__70055 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__70054,G__70055) : posh.lib.q_analyze.make_dbarg_map.call(null,G__70054,G__70055));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70060){
var vec__70061 = p__70060;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70061,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70061,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__70074_SHARP_,p2__70073_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__70073_SHARP_)){
return p1__70074_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__70082 = cljs.core._EQ_;
var expr__70083 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__70082.cljs$core$IFn$_invoke$arity$2 ? pred__70082.cljs$core$IFn$_invoke$arity$2((1),expr__70083) : pred__70082.call(null,(1),expr__70083)))){
return true;
} else {
if(cljs.core.truth_((pred__70082.cljs$core$IFn$_invoke$arity$2 ? pred__70082.cljs$core$IFn$_invoke$arity$2((3),expr__70083) : pred__70082.call(null,(3),expr__70083)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__70414 = cljs.core.first(remaining);
var G__70415 = cljs.core.rest(remaining);
clause = G__70414;
remaining = G__70415;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__70416 = cljs.core.first(remaining);
var G__70417 = cljs.core.rest(remaining);
clause = G__70416;
remaining = G__70417;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__70085(s__70086){
return (new cljs.core.LazySeq(null,(function (){
var s__70086__$1 = s__70086;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70086__$1);
if(temp__5735__auto__){
var s__70086__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70086__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__70086__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__70088 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__70087 = (0);
while(true){
if((i__70087 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__70087);
cljs.core.chunk_append(b__70088,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__70419 = (i__70087 + (1));
i__70087 = G__70419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70088),posh$lib$q_analyze$resolve_any_idents_$_iter__70085(cljs.core.chunk_rest(s__70086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70088),null);
}
} else {
var var_value = cljs.core.first(s__70086__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__70085(cljs.core.rest(s__70086__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70118){
var vec__70119 = p__70118;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70119,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70119,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70125){
var vec__70126 = p__70125;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70126,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70132){
var vec__70133 = p__70132;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70133,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70133,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70140){
var vec__70142 = p__70140;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70142,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70142,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__70146 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__70147 = cljs.core.vec(r);
var fexpr__70145 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__70145.cljs$core$IFn$_invoke$arity$2 ? fexpr__70145.cljs$core$IFn$_invoke$arity$2(G__70146,G__70147) : fexpr__70145.call(null,G__70146,G__70147));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70149){
var vec__70150 = p__70149;
var seq__70151 = cljs.core.seq(vec__70150);
var first__70152 = cljs.core.first(seq__70151);
var seq__70151__$1 = cljs.core.next(seq__70151);
var db = first__70152;
var eav = seq__70151__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70154){
var vec__70155 = p__70154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70155,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__70103_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__70103_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__70103_SHARP_) : linked_qvars.call(null,p1__70103_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__70103_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__70104_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__70104_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__70104_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
