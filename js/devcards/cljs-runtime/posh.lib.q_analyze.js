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
var G__43925 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43925) : stop_at_QMARK_.call(null,G__43925));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__43926 = stop_at_QMARK_;
var G__43927 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__43926,G__43927) : posh.lib.q_analyze.take_until.call(null,G__43926,G__43927));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__43930 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43930) : rest_at_QMARK_.call(null,G__43930));
}
})())){
return ls;
} else {
var G__44285 = rest_at_QMARK_;
var G__44286 = cljs.core.rest(ls);
rest_at_QMARK_ = G__44285;
ls = G__44286;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__43931 = split_at_QMARK_;
var G__43932 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__43931,G__43932) : posh.lib.q_analyze.split_list_at.call(null,G__43931,G__43932));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__43933 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43933) : posh.lib.q_analyze.get_all_vars.call(null,G__43933));
})(),(function (){var G__43934 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43934) : posh.lib.q_analyze.get_all_vars.call(null,G__43934));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__43935 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43935) : posh.lib.q_analyze.get_all_vars.call(null,G__43935));
})(),cljs.core.first(query));
} else {
var G__43936 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43936) : posh.lib.q_analyze.get_all_vars.call(null,G__43936));

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
var G__43937 = cljs.core.rest(eav);
var G__43938 = (n - (1));
var G__43939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__43940 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__43937,G__43938,G__43939,G__43940) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__43937,G__43938,G__43939,G__43940));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__43941 = cljs.core.rest(eav);
var G__43942 = (n - (1));
var G__43943 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__43944 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__43941,G__43942,G__43943,G__43944) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__43941,G__43942,G__43943,G__43944));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__43945 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__43945) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__43945));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__43946 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__43946) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__43946));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__43947 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43947) : posh.lib.q_analyze.get_eavs.call(null,G__43947));
})(),(function (){var G__43948 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43948) : posh.lib.q_analyze.get_eavs.call(null,G__43948));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__43949 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43949) : posh.lib.q_analyze.get_eavs.call(null,G__43949));
})(),(function (){var G__43950 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43950) : posh.lib.q_analyze.get_eavs.call(null,G__43950));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__43951 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43951) : posh.lib.q_analyze.get_eavs.call(null,G__43951));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_43952 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_43952)) && ((cljs.core.count(ocr_43952) === 2)))){
try{var ocr_43952_0__43955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952,(0));
if(((cljs.core.vector_QMARK_(ocr_43952_0__43955)) && ((cljs.core.count(ocr_43952_0__43955) === 5)))){
try{var ocr_43952_0__43955_0__43957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952_0__43955,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43952_0__43955_0__43957,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952_0__43955,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952_0__43955,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952_0__43955,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43952,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__43966 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43966) : posh.lib.q_analyze.get_eavs.call(null,G__43966));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e43965){if((e43965 instanceof Error)){
var e__42920__auto__ = e43965;
if((e__42920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto__;
}
} else {
throw e43965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43964){if((e43964 instanceof Error)){
var e__42920__auto__ = e43964;
if((e__42920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto__;
}
} else {
throw e43964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43962){if((e43962 instanceof Error)){
var e__42920__auto__ = e43962;
if((e__42920__auto__ === cljs.core.match.backtrack)){
var G__43963 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43963) : posh.lib.q_analyze.get_eavs.call(null,G__43963));
} else {
throw e__42920__auto__;
}
} else {
throw e43962;

}
}} else {
var G__43967 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43967) : posh.lib.q_analyze.get_eavs.call(null,G__43967));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__43968){
var vec__43970 = p__43968;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43973_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__43973_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__43973_SHARP_);
} else {
return p1__43973_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43976 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43976) : posh.lib.q_analyze.count_qvars.call(null,G__43976));
})(),(function (){var G__43977 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43977) : posh.lib.q_analyze.count_qvars.call(null,G__43977));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__43978 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43978) : posh.lib.q_analyze.count_qvars.call(null,G__43978));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__43979(s__43980){
return (new cljs.core.LazySeq(null,(function (){
var s__43980__$1 = s__43980;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43980__$1);
if(temp__5735__auto__){
var s__43980__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43980__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43980__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43982 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43981 = (0);
while(true){
if((i__43981 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43981);
cljs.core.chunk_append(b__43982,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__44371 = (i__43981 + (1));
i__43981 = G__44371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43982),posh$lib$q_analyze$fill_qvar_set_$_iter__43979(cljs.core.chunk_rest(s__43980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43982),null);
}
} else {
var r = cljs.core.first(s__43980__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__43979(cljs.core.rest(s__43980__$2)));
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
return cljs.core.cons((function (){var G__43983 = cljs.core.first(seq1);
var G__43984 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43983,G__43984) : f.call(null,G__43983,G__43984));
})(),(function (){var G__43985 = f;
var G__43986 = cljs.core.rest(seq1);
var G__43987 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__43985,G__43986,G__43987) : posh.lib.q_analyze.seq_merge_with.call(null,G__43985,G__43986,G__43987));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__43990){
var vec__43991 = p__43990;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43991,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43991,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43991,(2),null);
var eav = vec__43991;
var vec__43994 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43994,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43994,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43994,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997(s__43998){
return (new cljs.core.LazySeq(null,(function (){
var s__43998__$1 = s__43998;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43998__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__43998__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997_$_iter__43999(s__44000){
return (new cljs.core.LazySeq(null,((function (s__43998__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (){
var s__44000__$1 = s__44000;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44000__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__44000__$1,s__43998__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997_$_iter__43999_$_iter__44001(s__44002){
return (new cljs.core.LazySeq(null,((function (s__44000__$1,s__43998__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (){
var s__44002__$1 = s__44002;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__44002__$1);
if(temp__5735__auto____$2){
var s__44002__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__44002__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44002__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44004 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44003 = (0);
while(true){
if((i__44003 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44003);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__44003,s__44002__$1,s__44000__$1,s__43998__$1,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p1__43988_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__43988_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__44003,s__44002__$1,s__44000__$1,s__43998__$1,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__44003,s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p__44005){
var vec__44006 = p__44005;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44006,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44006,(1),null);
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
});})(i__44003,s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__44003,s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p1__43989_SHARP_){
if(cljs.core.truth_(p1__43989_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__44003,s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__44004,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__44004,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__44396 = (i__44003 + (1));
i__44003 = G__44396;
continue;
} else {
var G__44397 = (i__44003 + (1));
i__44003 = G__44397;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44004),posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997_$_iter__43999_$_iter__44001(cljs.core.chunk_rest(s__44002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44004),null);
}
} else {
var vv = cljs.core.first(s__44002__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__44002__$1,s__44000__$1,s__43998__$1,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p1__43988_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__43988_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__44002__$1,s__44000__$1,s__43998__$1,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p__44009){
var vec__44010 = p__44009;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44010,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44010,(1),null);
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
});})(s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,exposed_qvars,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav){
return (function (p1__43989_SHARP_){
if(cljs.core.truth_(p1__43989_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__44002__$1,s__44000__$1,s__43998__$1,wildcard_count,exposed_qvars,vv,s__44002__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997_$_iter__43999_$_iter__44001(cljs.core.rest(s__44002__$2)));
} else {
var G__44413 = cljs.core.rest(s__44002__$2);
s__44002__$1 = G__44413;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__44000__$1,s__43998__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,null,null));
});})(s__44000__$1,s__43998__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997_$_iter__43999(cljs.core.rest(s__44000__$1)));
} else {
var G__44414 = cljs.core.rest(s__44000__$1);
s__44000__$1 = G__44414;
continue;
}
} else {
return null;
}
break;
}
});})(s__43998__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
,null,null));
});})(s__43998__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43994,qe,qa,qv,vec__43991,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__43997(cljs.core.rest(s__43998__$1)));
} else {
var G__44415 = cljs.core.rest(s__43998__$1);
s__43998__$1 = G__44415;
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
var ocr_44013 = cljs.core.vec(eav);
var ocr_44014 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_44013)) && ((cljs.core.count(ocr_44013) === 3)))){
try{var ocr_44013_0__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_0__44042,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44118){if((e44118 instanceof Error)){
var e__42920__auto__ = e44118;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_44014)) && ((cljs.core.count(ocr_44014) === 3)))){
try{var ocr_44014_2__44047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44047 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44120){if((e44120 instanceof Error)){
var e__42920__auto____$1 = e44120;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44047 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44121){if((e44121 instanceof Error)){
var e__42920__auto____$2 = e44121;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44121;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44120;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44119){if((e44119 instanceof Error)){
var e__42920__auto____$1 = e44119;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44119;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44118;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44113){if((e44113 instanceof Error)){
var e__42920__auto__ = e44113;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_44014)) && ((cljs.core.count(ocr_44014) === 3)))){
try{var ocr_44014_1__44049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44049 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44116){if((e44116 instanceof Error)){
var e__42920__auto____$1 = e44116;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44014_1__44049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44049 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44117){if((e44117 instanceof Error)){
var e__42920__auto____$2 = e44117;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44117;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44116;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44115){if((e44115 instanceof Error)){
var e__42920__auto____$1 = e44115;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44114){if((e44114 instanceof Error)){
var e__42920__auto____$1 = e44114;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44114;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44113;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44055){if((e44055 instanceof Error)){
var e__42920__auto__ = e44055;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_44014)) && ((cljs.core.count(ocr_44014) === 3)))){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44112){if((e44112 instanceof Error)){
var e__42920__auto____$1 = e44112;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44112;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44111){if((e44111 instanceof Error)){
var e__42920__auto____$1 = e44111;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44111;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44057){if((e44057 instanceof Error)){
var e__42920__auto____$1 = e44057;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44108){if((e44108 instanceof Error)){
var e__42920__auto____$2 = e44108;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44109){if((e44109 instanceof Error)){
var e__42920__auto____$3 = e44109;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44110){if((e44110 instanceof Error)){
var e__42920__auto____$4 = e44110;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44110;

}
}} else {
throw e__42920__auto____$3;
}
} else {
throw e44109;

}
}} else {
throw e__42920__auto____$2;
}
} else {
throw e44108;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44107){if((e44107 instanceof Error)){
var e__42920__auto____$2 = e44107;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44107;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44058){if((e44058 instanceof Error)){
var e__42920__auto____$2 = e44058;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44106){if((e44106 instanceof Error)){
var e__42920__auto____$3 = e44106;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$3;
}
} else {
throw e44106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44103){if((e44103 instanceof Error)){
var e__42920__auto____$3 = e44103;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
try{var ocr_44013_2__44044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_2__44044,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44105){if((e44105 instanceof Error)){
var e__42920__auto____$4 = e44105;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44104){if((e44104 instanceof Error)){
var e__42920__auto____$4 = e44104;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44104;

}
}} else {
throw e__42920__auto____$3;
}
} else {
throw e44103;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44059){if((e44059 instanceof Error)){
var e__42920__auto____$3 = e44059;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44102){if((e44102 instanceof Error)){
var e__42920__auto____$4 = e44102;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44101){if((e44101 instanceof Error)){
var e__42920__auto____$4 = e44101;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44101;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44060){if((e44060 instanceof Error)){
var e__42920__auto____$4 = e44060;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44100){if((e44100 instanceof Error)){
var e__42920__auto____$5 = e44100;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$5;
}
} else {
throw e44100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44099){if((e44099 instanceof Error)){
var e__42920__auto____$5 = e44099;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$5;
}
} else {
throw e44099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44061){if((e44061 instanceof Error)){
var e__42920__auto____$5 = e44061;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44098){if((e44098 instanceof Error)){
var e__42920__auto____$6 = e44098;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$6;
}
} else {
throw e44098;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44097){if((e44097 instanceof Error)){
var e__42920__auto____$6 = e44097;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$6;
}
} else {
throw e44097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44062){if((e44062 instanceof Error)){
var e__42920__auto____$6 = e44062;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44013_1__44043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_1__44043,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44096){if((e44096 instanceof Error)){
var e__42920__auto____$7 = e44096;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44095){if((e44095 instanceof Error)){
var e__42920__auto____$7 = e44095;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44095;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44063){if((e44063 instanceof Error)){
var e__42920__auto____$7 = e44063;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
try{var ocr_44013_0__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_0__44042,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44094){if((e44094 instanceof Error)){
var e__42920__auto____$8 = e44094;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$8;
}
} else {
throw e44094;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44093){if((e44093 instanceof Error)){
var e__42920__auto____$8 = e44093;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$8;
}
} else {
throw e44093;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44064){if((e44064 instanceof Error)){
var e__42920__auto____$8 = e44064;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
try{var ocr_44013_0__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_0__44042,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44092){if((e44092 instanceof Error)){
var e__42920__auto____$9 = e44092;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$9;
}
} else {
throw e44092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44091){if((e44091 instanceof Error)){
var e__42920__auto____$9 = e44091;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$9;
}
} else {
throw e44091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44065){if((e44065 instanceof Error)){
var e__42920__auto____$9 = e44065;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
try{var ocr_44013_0__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_0__44042,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44090){if((e44090 instanceof Error)){
var e__42920__auto____$10 = e44090;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44090;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44089){if((e44089 instanceof Error)){
var e__42920__auto____$10 = e44089;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44089;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44066){if((e44066 instanceof Error)){
var e__42920__auto____$10 = e44066;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
try{var ocr_44013_0__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44013_0__44042,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44088){if((e44088 instanceof Error)){
var e__42920__auto____$11 = e44088;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$11;
}
} else {
throw e44088;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44087){if((e44087 instanceof Error)){
var e__42920__auto____$11 = e44087;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$11;
}
} else {
throw e44087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44067){if((e44067 instanceof Error)){
var e__42920__auto____$11 = e44067;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44086){if((e44086 instanceof Error)){
var e__42920__auto____$12 = e44086;
if((e__42920__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$12;
}
} else {
throw e44086;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44081){if((e44081 instanceof Error)){
var e__42920__auto____$12 = e44081;
if((e__42920__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44085){if((e44085 instanceof Error)){
var e__42920__auto____$13 = e44085;
if((e__42920__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$13;
}
} else {
throw e44085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44082){if((e44082 instanceof Error)){
var e__42920__auto____$13 = e44082;
if((e__42920__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44084){if((e44084 instanceof Error)){
var e__42920__auto____$14 = e44084;
if((e__42920__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$14;
}
} else {
throw e44084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44083){if((e44083 instanceof Error)){
var e__42920__auto____$14 = e44083;
if((e__42920__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$14;
}
} else {
throw e44083;

}
}} else {
throw e__42920__auto____$13;
}
} else {
throw e44082;

}
}} else {
throw e__42920__auto____$12;
}
} else {
throw e44081;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44068){if((e44068 instanceof Error)){
var e__42920__auto____$12 = e44068;
if((e__42920__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44080){if((e44080 instanceof Error)){
var e__42920__auto____$13 = e44080;
if((e__42920__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$13;
}
} else {
throw e44080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44079){if((e44079 instanceof Error)){
var e__42920__auto____$13 = e44079;
if((e__42920__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$13;
}
} else {
throw e44079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44069){if((e44069 instanceof Error)){
var e__42920__auto____$13 = e44069;
if((e__42920__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === true)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44078){if((e44078 instanceof Error)){
var e__42920__auto____$14 = e44078;
if((e__42920__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$14;
}
} else {
throw e44078;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44077){if((e44077 instanceof Error)){
var e__42920__auto____$14 = e44077;
if((e__42920__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$14;
}
} else {
throw e44077;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44070){if((e44070 instanceof Error)){
var e__42920__auto____$14 = e44070;
if((e__42920__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_44014_2__44053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(2));
if((ocr_44014_2__44053 === false)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === true)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44076){if((e44076 instanceof Error)){
var e__42920__auto____$15 = e44076;
if((e__42920__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$15;
}
} else {
throw e44076;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44072){if((e44072 instanceof Error)){
var e__42920__auto____$15 = e44072;
if((e__42920__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_44014_0__44051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(0));
if((ocr_44014_0__44051 === false)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44074){if((e44074 instanceof Error)){
var e__42920__auto____$16 = e44074;
if((e__42920__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_44014_1__44052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44014,(1));
if((ocr_44014_1__44052 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44013,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44075){if((e44075 instanceof Error)){
var e__42920__auto____$17 = e44075;
if((e__42920__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$17;
}
} else {
throw e44075;

}
}} else {
throw e__42920__auto____$16;
}
} else {
throw e44074;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44073){if((e44073 instanceof Error)){
var e__42920__auto____$16 = e44073;
if((e__42920__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$16;
}
} else {
throw e44073;

}
}} else {
throw e__42920__auto____$15;
}
} else {
throw e44072;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44071){if((e44071 instanceof Error)){
var e__42920__auto____$15 = e44071;
if((e__42920__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$15;
}
} else {
throw e44071;

}
}} else {
throw e__42920__auto____$14;
}
} else {
throw e44070;

}
}} else {
throw e__42920__auto____$13;
}
} else {
throw e44069;

}
}} else {
throw e__42920__auto____$12;
}
} else {
throw e44068;

}
}} else {
throw e__42920__auto____$11;
}
} else {
throw e44067;

}
}} else {
throw e__42920__auto____$10;
}
} else {
throw e44066;

}
}} else {
throw e__42920__auto____$9;
}
} else {
throw e44065;

}
}} else {
throw e__42920__auto____$8;
}
} else {
throw e44064;

}
}} else {
throw e__42920__auto____$7;
}
} else {
throw e44063;

}
}} else {
throw e__42920__auto____$6;
}
} else {
throw e44062;

}
}} else {
throw e__42920__auto____$5;
}
} else {
throw e44061;

}
}} else {
throw e__42920__auto____$4;
}
} else {
throw e44060;

}
}} else {
throw e__42920__auto____$3;
}
} else {
throw e44059;

}
}} else {
throw e__42920__auto____$2;
}
} else {
throw e44058;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44056){if((e44056 instanceof Error)){
var e__42920__auto____$1 = e44056;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44056;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44054){if((e44054 instanceof Error)){
var e__42920__auto__ = e44054;
if((e__42920__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__42920__auto__;
}
} else {
throw e44054;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_44122 = cljs.core.vec(eav);
var ocr_44123 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_44122)) && ((cljs.core.count(ocr_44122) === 3)))){
try{var ocr_44122_0__44148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_0__44148,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44122_2__44150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_2__44150,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44212){if((e44212 instanceof Error)){
var e__42920__auto__ = e44212;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_44123)) && ((cljs.core.count(ocr_44123) === 3)))){
try{var ocr_44123_2__44153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44153 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44214){if((e44214 instanceof Error)){
var e__42920__auto____$1 = e44214;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44153 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44215){if((e44215 instanceof Error)){
var e__42920__auto____$2 = e44215;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44215;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44214;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44213){if((e44213 instanceof Error)){
var e__42920__auto____$1 = e44213;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44213;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44212;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44207){if((e44207 instanceof Error)){
var e__42920__auto__ = e44207;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{var ocr_44122_2__44150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_2__44150,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_44123)) && ((cljs.core.count(ocr_44123) === 3)))){
try{var ocr_44123_1__44155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44155 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44210){if((e44210 instanceof Error)){
var e__42920__auto____$1 = e44210;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44155 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44211){if((e44211 instanceof Error)){
var e__42920__auto____$2 = e44211;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44211;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44210;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44209){if((e44209 instanceof Error)){
var e__42920__auto____$1 = e44209;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44208){if((e44208 instanceof Error)){
var e__42920__auto____$1 = e44208;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44208;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44207;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44161){if((e44161 instanceof Error)){
var e__42920__auto__ = e44161;
if((e__42920__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_44123)) && ((cljs.core.count(ocr_44123) === 3)))){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44122_2__44150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_2__44150,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44206){if((e44206 instanceof Error)){
var e__42920__auto____$1 = e44206;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44205){if((e44205 instanceof Error)){
var e__42920__auto____$1 = e44205;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44163){if((e44163 instanceof Error)){
var e__42920__auto____$1 = e44163;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
try{var ocr_44122_2__44150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_2__44150,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44202){if((e44202 instanceof Error)){
var e__42920__auto____$2 = e44202;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44203){if((e44203 instanceof Error)){
var e__42920__auto____$3 = e44203;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44204){if((e44204 instanceof Error)){
var e__42920__auto____$4 = e44204;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44204;

}
}} else {
throw e__42920__auto____$3;
}
} else {
throw e44203;

}
}} else {
throw e__42920__auto____$2;
}
} else {
throw e44202;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44201){if((e44201 instanceof Error)){
var e__42920__auto____$2 = e44201;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$2;
}
} else {
throw e44201;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44164){if((e44164 instanceof Error)){
var e__42920__auto____$2 = e44164;
if((e__42920__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
try{var ocr_44122_2__44150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_2__44150,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44200){if((e44200 instanceof Error)){
var e__42920__auto____$3 = e44200;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$3;
}
} else {
throw e44200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44199){if((e44199 instanceof Error)){
var e__42920__auto____$3 = e44199;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$3;
}
} else {
throw e44199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44165){if((e44165 instanceof Error)){
var e__42920__auto____$3 = e44165;
if((e__42920__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === true)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44198){if((e44198 instanceof Error)){
var e__42920__auto____$4 = e44198;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44197){if((e44197 instanceof Error)){
var e__42920__auto____$4 = e44197;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$4;
}
} else {
throw e44197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44166){if((e44166 instanceof Error)){
var e__42920__auto____$4 = e44166;
if((e__42920__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === false)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44196){if((e44196 instanceof Error)){
var e__42920__auto____$5 = e44196;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$5;
}
} else {
throw e44196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44195){if((e44195 instanceof Error)){
var e__42920__auto____$5 = e44195;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$5;
}
} else {
throw e44195;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44167){if((e44167 instanceof Error)){
var e__42920__auto____$5 = e44167;
if((e__42920__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === true)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
try{var ocr_44122_1__44149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_1__44149,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44194){if((e44194 instanceof Error)){
var e__42920__auto____$6 = e44194;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$6;
}
} else {
throw e44194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44191){if((e44191 instanceof Error)){
var e__42920__auto____$6 = e44191;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
try{var ocr_44122_0__44148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_0__44148,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44193){if((e44193 instanceof Error)){
var e__42920__auto____$7 = e44193;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44192){if((e44192 instanceof Error)){
var e__42920__auto____$7 = e44192;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44192;

}
}} else {
throw e__42920__auto____$6;
}
} else {
throw e44191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44168){if((e44168 instanceof Error)){
var e__42920__auto____$6 = e44168;
if((e__42920__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === false)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
try{var ocr_44122_0__44148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_0__44148,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44190){if((e44190 instanceof Error)){
var e__42920__auto____$7 = e44190;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44189){if((e44189 instanceof Error)){
var e__42920__auto____$7 = e44189;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$7;
}
} else {
throw e44189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44169){if((e44169 instanceof Error)){
var e__42920__auto____$7 = e44169;
if((e__42920__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === true)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === false)){
try{var ocr_44122_0__44148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44122_0__44148,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44188){if((e44188 instanceof Error)){
var e__42920__auto____$8 = e44188;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$8;
}
} else {
throw e44188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44182){if((e44182 instanceof Error)){
var e__42920__auto____$8 = e44182;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44186){if((e44186 instanceof Error)){
var e__42920__auto____$9 = e44186;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44187){if((e44187 instanceof Error)){
var e__42920__auto____$10 = e44187;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44187;

}
}} else {
throw e__42920__auto____$9;
}
} else {
throw e44186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44183){if((e44183 instanceof Error)){
var e__42920__auto____$9 = e44183;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === false)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44185){if((e44185 instanceof Error)){
var e__42920__auto____$10 = e44185;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44184){if((e44184 instanceof Error)){
var e__42920__auto____$10 = e44184;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44184;

}
}} else {
throw e__42920__auto____$9;
}
} else {
throw e44183;

}
}} else {
throw e__42920__auto____$8;
}
} else {
throw e44182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44170){if((e44170 instanceof Error)){
var e__42920__auto____$8 = e44170;
if((e__42920__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === false)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44181){if((e44181 instanceof Error)){
var e__42920__auto____$9 = e44181;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$9;
}
} else {
throw e44181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44180){if((e44180 instanceof Error)){
var e__42920__auto____$9 = e44180;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$9;
}
} else {
throw e44180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44171){if((e44171 instanceof Error)){
var e__42920__auto____$9 = e44171;
if((e__42920__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === true)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44179){if((e44179 instanceof Error)){
var e__42920__auto____$10 = e44179;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44178){if((e44178 instanceof Error)){
var e__42920__auto____$10 = e44178;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$10;
}
} else {
throw e44178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44172){if((e44172 instanceof Error)){
var e__42920__auto____$10 = e44172;
if((e__42920__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_44123_2__44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(2));
if((ocr_44123_2__44159 === false)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === true)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44177){if((e44177 instanceof Error)){
var e__42920__auto____$11 = e44177;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$11;
}
} else {
throw e44177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44174){if((e44174 instanceof Error)){
var e__42920__auto____$11 = e44174;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_44123_0__44157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(0));
if((ocr_44123_0__44157 === false)){
try{var ocr_44123_1__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44123,(1));
if((ocr_44123_1__44158 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44122,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44176){if((e44176 instanceof Error)){
var e__42920__auto____$12 = e44176;
if((e__42920__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$12;
}
} else {
throw e44176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44175){if((e44175 instanceof Error)){
var e__42920__auto____$12 = e44175;
if((e__42920__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$12;
}
} else {
throw e44175;

}
}} else {
throw e__42920__auto____$11;
}
} else {
throw e44174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44173){if((e44173 instanceof Error)){
var e__42920__auto____$11 = e44173;
if((e__42920__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$11;
}
} else {
throw e44173;

}
}} else {
throw e__42920__auto____$10;
}
} else {
throw e44172;

}
}} else {
throw e__42920__auto____$9;
}
} else {
throw e44171;

}
}} else {
throw e__42920__auto____$8;
}
} else {
throw e44170;

}
}} else {
throw e__42920__auto____$7;
}
} else {
throw e44169;

}
}} else {
throw e__42920__auto____$6;
}
} else {
throw e44168;

}
}} else {
throw e__42920__auto____$5;
}
} else {
throw e44167;

}
}} else {
throw e__42920__auto____$4;
}
} else {
throw e44166;

}
}} else {
throw e__42920__auto____$3;
}
} else {
throw e44165;

}
}} else {
throw e__42920__auto____$2;
}
} else {
throw e44164;

}
}} else {
throw e__42920__auto____$1;
}
} else {
throw e44163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44162){if((e44162 instanceof Error)){
var e__42920__auto____$1 = e44162;
if((e__42920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42920__auto____$1;
}
} else {
throw e44162;

}
}} else {
throw e__42920__auto__;
}
} else {
throw e44161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44160){if((e44160 instanceof Error)){
var e__42920__auto__ = e44160;
if((e__42920__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__42920__auto__;
}
} else {
throw e44160;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44217){
var vec__44218 = p__44217;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44218,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__44216_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__44216_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44222){
var vec__44223 = p__44222;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__44221_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__44221_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__44226 = cljs.core.rest(ins);
var G__44227 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__44226,G__44227) : posh.lib.q_analyze.just_qvars.call(null,G__44226,G__44227));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44228_SHARP_){
return cljs.core.zipmap(qvars,p1__44228_SHARP_);
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
var vec__44229 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__44738 = var$;
var G__44739 = dbvarmap;
var G__44740 = cljs.core.rest(dbeavs);
var$ = G__44738;
dbvarmap = G__44739;
dbeavs = G__44740;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__44232 = cljs.core.rest(vars);
var G__44233 = dbvarmap;
var G__44234 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__44232,G__44233,G__44234) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__44232,G__44233,G__44234));
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
var G__44741 = (n + (1));
var G__44742 = cljs.core.rest(xs__$1);
n = G__44741;
xs__$1 = G__44742;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44235_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__44235_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__44235_SHARP_) : type.call(null,p1__44235_SHARP_));
} else {
return p1__44235_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__44236 = cljs.core.rest(ins);
var G__44237 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__44236,G__44237) : posh.lib.q_analyze.make_dbarg_map.call(null,G__44236,G__44237));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44238){
var vec__44239 = p__44238;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44239,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44239,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__44243_SHARP_,p2__44242_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__44242_SHARP_)){
return p1__44243_SHARP_;
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
var pred__44247 = cljs.core._EQ_;
var expr__44248 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__44247.cljs$core$IFn$_invoke$arity$2 ? pred__44247.cljs$core$IFn$_invoke$arity$2((1),expr__44248) : pred__44247.call(null,(1),expr__44248)))){
return true;
} else {
if(cljs.core.truth_((pred__44247.cljs$core$IFn$_invoke$arity$2 ? pred__44247.cljs$core$IFn$_invoke$arity$2((3),expr__44248) : pred__44247.call(null,(3),expr__44248)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__44767 = cljs.core.first(remaining);
var G__44768 = cljs.core.rest(remaining);
clause = G__44767;
remaining = G__44768;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__44769 = cljs.core.first(remaining);
var G__44770 = cljs.core.rest(remaining);
clause = G__44769;
remaining = G__44770;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__44250(s__44251){
return (new cljs.core.LazySeq(null,(function (){
var s__44251__$1 = s__44251;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44251__$1);
if(temp__5735__auto__){
var s__44251__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44251__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44251__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44253 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44252 = (0);
while(true){
if((i__44252 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44252);
cljs.core.chunk_append(b__44253,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__44779 = (i__44252 + (1));
i__44252 = G__44779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44253),posh$lib$q_analyze$resolve_any_idents_$_iter__44250(cljs.core.chunk_rest(s__44251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44253),null);
}
} else {
var var_value = cljs.core.first(s__44251__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__44250(cljs.core.rest(s__44251__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44258){
var vec__44259 = p__44258;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44259,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44259,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44262){
var vec__44263 = p__44262;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44263,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44266){
var vec__44267 = p__44266;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44267,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44267,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44270){
var vec__44271 = p__44270;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__44275 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__44276 = cljs.core.vec(r);
var fexpr__44274 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__44274.cljs$core$IFn$_invoke$arity$2 ? fexpr__44274.cljs$core$IFn$_invoke$arity$2(G__44275,G__44276) : fexpr__44274.call(null,G__44275,G__44276));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44277){
var vec__44278 = p__44277;
var seq__44279 = cljs.core.seq(vec__44278);
var first__44280 = cljs.core.first(seq__44279);
var seq__44279__$1 = cljs.core.next(seq__44279);
var db = first__44280;
var eav = seq__44279__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44281){
var vec__44282 = p__44281;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44282,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__44256_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__44256_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__44256_SHARP_) : linked_qvars.call(null,p1__44256_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__44256_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__44257_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__44257_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__44257_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
