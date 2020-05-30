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
var G__58651 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58651) : stop_at_QMARK_.call(null,G__58651));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__58652 = stop_at_QMARK_;
var G__58653 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__58652,G__58653) : posh.lib.q_analyze.take_until.call(null,G__58652,G__58653));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__58655 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58655) : rest_at_QMARK_.call(null,G__58655));
}
})())){
return ls;
} else {
var G__59010 = rest_at_QMARK_;
var G__59011 = cljs.core.rest(ls);
rest_at_QMARK_ = G__59010;
ls = G__59011;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__58656 = split_at_QMARK_;
var G__58657 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__58656,G__58657) : posh.lib.q_analyze.split_list_at.call(null,G__58656,G__58657));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__58658 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__58658) : posh.lib.q_analyze.get_all_vars.call(null,G__58658));
})(),(function (){var G__58659 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__58659) : posh.lib.q_analyze.get_all_vars.call(null,G__58659));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__58660 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__58660) : posh.lib.q_analyze.get_all_vars.call(null,G__58660));
})(),cljs.core.first(query));
} else {
var G__58661 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__58661) : posh.lib.q_analyze.get_all_vars.call(null,G__58661));

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
var G__58662 = cljs.core.rest(eav);
var G__58663 = (n - (1));
var G__58664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__58665 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__58662,G__58663,G__58664,G__58665) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__58662,G__58663,G__58664,G__58665));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__58666 = cljs.core.rest(eav);
var G__58667 = (n - (1));
var G__58668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__58669 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__58666,G__58667,G__58668,G__58669) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__58666,G__58667,G__58668,G__58669));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__58670 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__58670) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__58670));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__58671 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__58671) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__58671));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__58672 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58672) : posh.lib.q_analyze.get_eavs.call(null,G__58672));
})(),(function (){var G__58673 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58673) : posh.lib.q_analyze.get_eavs.call(null,G__58673));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__58674 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58674) : posh.lib.q_analyze.get_eavs.call(null,G__58674));
})(),(function (){var G__58675 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58675) : posh.lib.q_analyze.get_eavs.call(null,G__58675));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__58676 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58676) : posh.lib.q_analyze.get_eavs.call(null,G__58676));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_58677 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_58677)) && ((cljs.core.count(ocr_58677) === 2)))){
try{var ocr_58677_0__58680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677,(0));
if(((cljs.core.vector_QMARK_(ocr_58677_0__58680)) && ((cljs.core.count(ocr_58677_0__58680) === 5)))){
try{var ocr_58677_0__58680_0__58682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677_0__58680,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58677_0__58680_0__58682,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677_0__58680,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677_0__58680,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677_0__58680,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58677,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__58691 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58691) : posh.lib.q_analyze.get_eavs.call(null,G__58691));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e58690){if((e58690 instanceof Error)){
var e__57672__auto__ = e58690;
if((e__57672__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto__;
}
} else {
throw e58690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58689){if((e58689 instanceof Error)){
var e__57672__auto__ = e58689;
if((e__57672__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto__;
}
} else {
throw e58689;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58687){if((e58687 instanceof Error)){
var e__57672__auto__ = e58687;
if((e__57672__auto__ === cljs.core.match.backtrack)){
var G__58688 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58688) : posh.lib.q_analyze.get_eavs.call(null,G__58688));
} else {
throw e__57672__auto__;
}
} else {
throw e58687;

}
}} else {
var G__58692 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__58692) : posh.lib.q_analyze.get_eavs.call(null,G__58692));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__58693){
var vec__58694 = p__58693;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58694,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58697_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__58697_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__58697_SHARP_);
} else {
return p1__58697_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__58698 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__58698) : posh.lib.q_analyze.count_qvars.call(null,G__58698));
})(),(function (){var G__58700 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__58700) : posh.lib.q_analyze.count_qvars.call(null,G__58700));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__58701 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__58701) : posh.lib.q_analyze.count_qvars.call(null,G__58701));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__58702(s__58703){
return (new cljs.core.LazySeq(null,(function (){
var s__58703__$1 = s__58703;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58703__$1);
if(temp__5735__auto__){
var s__58703__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58703__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58703__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58705 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58704 = (0);
while(true){
if((i__58704 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58704);
cljs.core.chunk_append(b__58705,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__59068 = (i__58704 + (1));
i__58704 = G__59068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),posh$lib$q_analyze$fill_qvar_set_$_iter__58702(cljs.core.chunk_rest(s__58703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),null);
}
} else {
var r = cljs.core.first(s__58703__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__58702(cljs.core.rest(s__58703__$2)));
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
return cljs.core.cons((function (){var G__58708 = cljs.core.first(seq1);
var G__58709 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__58708,G__58709) : f.call(null,G__58708,G__58709));
})(),(function (){var G__58710 = f;
var G__58711 = cljs.core.rest(seq1);
var G__58712 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__58710,G__58711,G__58712) : posh.lib.q_analyze.seq_merge_with.call(null,G__58710,G__58711,G__58712));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__58715){
var vec__58716 = p__58715;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58716,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58716,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58716,(2),null);
var eav = vec__58716;
var vec__58719 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722(s__58723){
return (new cljs.core.LazySeq(null,(function (){
var s__58723__$1 = s__58723;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58723__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__58723__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722_$_iter__58724(s__58725){
return (new cljs.core.LazySeq(null,((function (s__58723__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (){
var s__58725__$1 = s__58725;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58725__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__58725__$1,s__58723__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722_$_iter__58724_$_iter__58726(s__58727){
return (new cljs.core.LazySeq(null,((function (s__58725__$1,s__58723__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (){
var s__58727__$1 = s__58727;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58727__$1);
if(temp__5735__auto____$2){
var s__58727__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58727__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58727__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58729 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58728 = (0);
while(true){
if((i__58728 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58728);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58728,s__58727__$1,s__58725__$1,s__58723__$1,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p1__58713_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__58713_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__58728,s__58727__$1,s__58725__$1,s__58723__$1,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58728,s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p__58730){
var vec__58731 = p__58730;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58731,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58731,(1),null);
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
});})(i__58728,s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58728,s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p1__58714_SHARP_){
if(cljs.core.truth_(p1__58714_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__58728,s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__58729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__59097 = (i__58728 + (1));
i__58728 = G__59097;
continue;
} else {
var G__59098 = (i__58728 + (1));
i__58728 = G__59098;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58729),posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722_$_iter__58724_$_iter__58726(cljs.core.chunk_rest(s__58727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58729),null);
}
} else {
var vv = cljs.core.first(s__58727__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__58727__$1,s__58725__$1,s__58723__$1,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p1__58713_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__58713_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__58727__$1,s__58725__$1,s__58723__$1,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p__58734){
var vec__58735 = p__58734;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58735,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58735,(1),null);
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
});})(s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,exposed_qvars,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav){
return (function (p1__58714_SHARP_){
if(cljs.core.truth_(p1__58714_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__58727__$1,s__58725__$1,s__58723__$1,wildcard_count,exposed_qvars,vv,s__58727__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722_$_iter__58724_$_iter__58726(cljs.core.rest(s__58727__$2)));
} else {
var G__59102 = cljs.core.rest(s__58727__$2);
s__58727__$1 = G__59102;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__58725__$1,s__58723__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,null,null));
});})(s__58725__$1,s__58723__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722_$_iter__58724(cljs.core.rest(s__58725__$1)));
} else {
var G__59103 = cljs.core.rest(s__58725__$1);
s__58725__$1 = G__59103;
continue;
}
} else {
return null;
}
break;
}
});})(s__58723__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
,null,null));
});})(s__58723__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__58719,qe,qa,qv,vec__58716,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__58722(cljs.core.rest(s__58723__$1)));
} else {
var G__59104 = cljs.core.rest(s__58723__$1);
s__58723__$1 = G__59104;
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
var ocr_58738 = cljs.core.vec(eav);
var ocr_58739 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_58738)) && ((cljs.core.count(ocr_58738) === 3)))){
try{var ocr_58738_0__58767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_0__58767,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58843){if((e58843 instanceof Error)){
var e__57672__auto__ = e58843;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_58739)) && ((cljs.core.count(ocr_58739) === 3)))){
try{var ocr_58739_2__58772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58772 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58845){if((e58845 instanceof Error)){
var e__57672__auto____$1 = e58845;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58772 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58846){if((e58846 instanceof Error)){
var e__57672__auto____$2 = e58846;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58846;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58845;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58844){if((e58844 instanceof Error)){
var e__57672__auto____$1 = e58844;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58844;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58838){if((e58838 instanceof Error)){
var e__57672__auto__ = e58838;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_58739)) && ((cljs.core.count(ocr_58739) === 3)))){
try{var ocr_58739_1__58774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58774 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58841){if((e58841 instanceof Error)){
var e__57672__auto____$1 = e58841;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58739_1__58774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58774 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58842){if((e58842 instanceof Error)){
var e__57672__auto____$2 = e58842;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58842;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58840){if((e58840 instanceof Error)){
var e__57672__auto____$1 = e58840;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58839){if((e58839 instanceof Error)){
var e__57672__auto____$1 = e58839;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58839;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58780){if((e58780 instanceof Error)){
var e__57672__auto__ = e58780;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_58739)) && ((cljs.core.count(ocr_58739) === 3)))){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58837){if((e58837 instanceof Error)){
var e__57672__auto____$1 = e58837;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58836){if((e58836 instanceof Error)){
var e__57672__auto____$1 = e58836;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58782){if((e58782 instanceof Error)){
var e__57672__auto____$1 = e58782;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58833){if((e58833 instanceof Error)){
var e__57672__auto____$2 = e58833;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58834){if((e58834 instanceof Error)){
var e__57672__auto____$3 = e58834;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58835){if((e58835 instanceof Error)){
var e__57672__auto____$4 = e58835;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58835;

}
}} else {
throw e__57672__auto____$3;
}
} else {
throw e58834;

}
}} else {
throw e__57672__auto____$2;
}
} else {
throw e58833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58832){if((e58832 instanceof Error)){
var e__57672__auto____$2 = e58832;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58832;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58783){if((e58783 instanceof Error)){
var e__57672__auto____$2 = e58783;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58831){if((e58831 instanceof Error)){
var e__57672__auto____$3 = e58831;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$3;
}
} else {
throw e58831;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58828){if((e58828 instanceof Error)){
var e__57672__auto____$3 = e58828;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
try{var ocr_58738_2__58769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_2__58769,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58830){if((e58830 instanceof Error)){
var e__57672__auto____$4 = e58830;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58830;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58829){if((e58829 instanceof Error)){
var e__57672__auto____$4 = e58829;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58829;

}
}} else {
throw e__57672__auto____$3;
}
} else {
throw e58828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58784){if((e58784 instanceof Error)){
var e__57672__auto____$3 = e58784;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58827){if((e58827 instanceof Error)){
var e__57672__auto____$4 = e58827;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58826){if((e58826 instanceof Error)){
var e__57672__auto____$4 = e58826;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58785){if((e58785 instanceof Error)){
var e__57672__auto____$4 = e58785;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58825){if((e58825 instanceof Error)){
var e__57672__auto____$5 = e58825;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$5;
}
} else {
throw e58825;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58824){if((e58824 instanceof Error)){
var e__57672__auto____$5 = e58824;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$5;
}
} else {
throw e58824;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58786){if((e58786 instanceof Error)){
var e__57672__auto____$5 = e58786;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58823){if((e58823 instanceof Error)){
var e__57672__auto____$6 = e58823;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$6;
}
} else {
throw e58823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58822){if((e58822 instanceof Error)){
var e__57672__auto____$6 = e58822;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$6;
}
} else {
throw e58822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58787){if((e58787 instanceof Error)){
var e__57672__auto____$6 = e58787;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58738_1__58768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_1__58768,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58821){if((e58821 instanceof Error)){
var e__57672__auto____$7 = e58821;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58820){if((e58820 instanceof Error)){
var e__57672__auto____$7 = e58820;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58788){if((e58788 instanceof Error)){
var e__57672__auto____$7 = e58788;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
try{var ocr_58738_0__58767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_0__58767,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58819){if((e58819 instanceof Error)){
var e__57672__auto____$8 = e58819;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$8;
}
} else {
throw e58819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58818){if((e58818 instanceof Error)){
var e__57672__auto____$8 = e58818;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$8;
}
} else {
throw e58818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58789){if((e58789 instanceof Error)){
var e__57672__auto____$8 = e58789;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
try{var ocr_58738_0__58767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_0__58767,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58817){if((e58817 instanceof Error)){
var e__57672__auto____$9 = e58817;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$9;
}
} else {
throw e58817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58816){if((e58816 instanceof Error)){
var e__57672__auto____$9 = e58816;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$9;
}
} else {
throw e58816;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58790){if((e58790 instanceof Error)){
var e__57672__auto____$9 = e58790;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
try{var ocr_58738_0__58767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_0__58767,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58815){if((e58815 instanceof Error)){
var e__57672__auto____$10 = e58815;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58814){if((e58814 instanceof Error)){
var e__57672__auto____$10 = e58814;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58814;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58791){if((e58791 instanceof Error)){
var e__57672__auto____$10 = e58791;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
try{var ocr_58738_0__58767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58738_0__58767,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58813){if((e58813 instanceof Error)){
var e__57672__auto____$11 = e58813;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$11;
}
} else {
throw e58813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58812){if((e58812 instanceof Error)){
var e__57672__auto____$11 = e58812;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$11;
}
} else {
throw e58812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58792){if((e58792 instanceof Error)){
var e__57672__auto____$11 = e58792;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58811){if((e58811 instanceof Error)){
var e__57672__auto____$12 = e58811;
if((e__57672__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$12;
}
} else {
throw e58811;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58806){if((e58806 instanceof Error)){
var e__57672__auto____$12 = e58806;
if((e__57672__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58810){if((e58810 instanceof Error)){
var e__57672__auto____$13 = e58810;
if((e__57672__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$13;
}
} else {
throw e58810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58807){if((e58807 instanceof Error)){
var e__57672__auto____$13 = e58807;
if((e__57672__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58809){if((e58809 instanceof Error)){
var e__57672__auto____$14 = e58809;
if((e__57672__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$14;
}
} else {
throw e58809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58808){if((e58808 instanceof Error)){
var e__57672__auto____$14 = e58808;
if((e__57672__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$14;
}
} else {
throw e58808;

}
}} else {
throw e__57672__auto____$13;
}
} else {
throw e58807;

}
}} else {
throw e__57672__auto____$12;
}
} else {
throw e58806;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58793){if((e58793 instanceof Error)){
var e__57672__auto____$12 = e58793;
if((e__57672__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58805){if((e58805 instanceof Error)){
var e__57672__auto____$13 = e58805;
if((e__57672__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$13;
}
} else {
throw e58805;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58804){if((e58804 instanceof Error)){
var e__57672__auto____$13 = e58804;
if((e__57672__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$13;
}
} else {
throw e58804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58794){if((e58794 instanceof Error)){
var e__57672__auto____$13 = e58794;
if((e__57672__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === true)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58803){if((e58803 instanceof Error)){
var e__57672__auto____$14 = e58803;
if((e__57672__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$14;
}
} else {
throw e58803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58802){if((e58802 instanceof Error)){
var e__57672__auto____$14 = e58802;
if((e__57672__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$14;
}
} else {
throw e58802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58795){if((e58795 instanceof Error)){
var e__57672__auto____$14 = e58795;
if((e__57672__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_58739_2__58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(2));
if((ocr_58739_2__58778 === false)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === true)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58801){if((e58801 instanceof Error)){
var e__57672__auto____$15 = e58801;
if((e__57672__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$15;
}
} else {
throw e58801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58797){if((e58797 instanceof Error)){
var e__57672__auto____$15 = e58797;
if((e__57672__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_58739_0__58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(0));
if((ocr_58739_0__58776 === false)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58799){if((e58799 instanceof Error)){
var e__57672__auto____$16 = e58799;
if((e__57672__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_58739_1__58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58739,(1));
if((ocr_58739_1__58777 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58738,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58800){if((e58800 instanceof Error)){
var e__57672__auto____$17 = e58800;
if((e__57672__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$17;
}
} else {
throw e58800;

}
}} else {
throw e__57672__auto____$16;
}
} else {
throw e58799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58798){if((e58798 instanceof Error)){
var e__57672__auto____$16 = e58798;
if((e__57672__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$16;
}
} else {
throw e58798;

}
}} else {
throw e__57672__auto____$15;
}
} else {
throw e58797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58796){if((e58796 instanceof Error)){
var e__57672__auto____$15 = e58796;
if((e__57672__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$15;
}
} else {
throw e58796;

}
}} else {
throw e__57672__auto____$14;
}
} else {
throw e58795;

}
}} else {
throw e__57672__auto____$13;
}
} else {
throw e58794;

}
}} else {
throw e__57672__auto____$12;
}
} else {
throw e58793;

}
}} else {
throw e__57672__auto____$11;
}
} else {
throw e58792;

}
}} else {
throw e__57672__auto____$10;
}
} else {
throw e58791;

}
}} else {
throw e__57672__auto____$9;
}
} else {
throw e58790;

}
}} else {
throw e__57672__auto____$8;
}
} else {
throw e58789;

}
}} else {
throw e__57672__auto____$7;
}
} else {
throw e58788;

}
}} else {
throw e__57672__auto____$6;
}
} else {
throw e58787;

}
}} else {
throw e__57672__auto____$5;
}
} else {
throw e58786;

}
}} else {
throw e__57672__auto____$4;
}
} else {
throw e58785;

}
}} else {
throw e__57672__auto____$3;
}
} else {
throw e58784;

}
}} else {
throw e__57672__auto____$2;
}
} else {
throw e58783;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58781){if((e58781 instanceof Error)){
var e__57672__auto____$1 = e58781;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58781;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58779){if((e58779 instanceof Error)){
var e__57672__auto__ = e58779;
if((e__57672__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__57672__auto__;
}
} else {
throw e58779;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_58847 = cljs.core.vec(eav);
var ocr_58848 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_58847)) && ((cljs.core.count(ocr_58847) === 3)))){
try{var ocr_58847_0__58873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_0__58873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58847_2__58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_2__58875,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e58937){if((e58937 instanceof Error)){
var e__57672__auto__ = e58937;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_58848)) && ((cljs.core.count(ocr_58848) === 3)))){
try{var ocr_58848_2__58878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58878 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58939){if((e58939 instanceof Error)){
var e__57672__auto____$1 = e58939;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58878 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58940){if((e58940 instanceof Error)){
var e__57672__auto____$2 = e58940;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58940;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58938){if((e58938 instanceof Error)){
var e__57672__auto____$1 = e58938;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58938;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58932){if((e58932 instanceof Error)){
var e__57672__auto__ = e58932;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{var ocr_58847_2__58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_2__58875,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_58848)) && ((cljs.core.count(ocr_58848) === 3)))){
try{var ocr_58848_1__58880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58880 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58935){if((e58935 instanceof Error)){
var e__57672__auto____$1 = e58935;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58880 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58936){if((e58936 instanceof Error)){
var e__57672__auto____$2 = e58936;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58936;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58934){if((e58934 instanceof Error)){
var e__57672__auto____$1 = e58934;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58933){if((e58933 instanceof Error)){
var e__57672__auto____$1 = e58933;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58933;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58886){if((e58886 instanceof Error)){
var e__57672__auto__ = e58886;
if((e__57672__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_58848)) && ((cljs.core.count(ocr_58848) === 3)))){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58847_2__58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_2__58875,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58931){if((e58931 instanceof Error)){
var e__57672__auto____$1 = e58931;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58930){if((e58930 instanceof Error)){
var e__57672__auto____$1 = e58930;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58888){if((e58888 instanceof Error)){
var e__57672__auto____$1 = e58888;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
try{var ocr_58847_2__58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_2__58875,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58927){if((e58927 instanceof Error)){
var e__57672__auto____$2 = e58927;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58928){if((e58928 instanceof Error)){
var e__57672__auto____$3 = e58928;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58929){if((e58929 instanceof Error)){
var e__57672__auto____$4 = e58929;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58929;

}
}} else {
throw e__57672__auto____$3;
}
} else {
throw e58928;

}
}} else {
throw e__57672__auto____$2;
}
} else {
throw e58927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58926){if((e58926 instanceof Error)){
var e__57672__auto____$2 = e58926;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$2;
}
} else {
throw e58926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58889){if((e58889 instanceof Error)){
var e__57672__auto____$2 = e58889;
if((e__57672__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
try{var ocr_58847_2__58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_2__58875,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58925){if((e58925 instanceof Error)){
var e__57672__auto____$3 = e58925;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$3;
}
} else {
throw e58925;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58924){if((e58924 instanceof Error)){
var e__57672__auto____$3 = e58924;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$3;
}
} else {
throw e58924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58890){if((e58890 instanceof Error)){
var e__57672__auto____$3 = e58890;
if((e__57672__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === true)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58923){if((e58923 instanceof Error)){
var e__57672__auto____$4 = e58923;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58923;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58922){if((e58922 instanceof Error)){
var e__57672__auto____$4 = e58922;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$4;
}
} else {
throw e58922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58891){if((e58891 instanceof Error)){
var e__57672__auto____$4 = e58891;
if((e__57672__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === false)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58921){if((e58921 instanceof Error)){
var e__57672__auto____$5 = e58921;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$5;
}
} else {
throw e58921;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58920){if((e58920 instanceof Error)){
var e__57672__auto____$5 = e58920;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$5;
}
} else {
throw e58920;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58892){if((e58892 instanceof Error)){
var e__57672__auto____$5 = e58892;
if((e__57672__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === true)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
try{var ocr_58847_1__58874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_1__58874,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58919){if((e58919 instanceof Error)){
var e__57672__auto____$6 = e58919;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$6;
}
} else {
throw e58919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58916){if((e58916 instanceof Error)){
var e__57672__auto____$6 = e58916;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
try{var ocr_58847_0__58873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_0__58873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58918){if((e58918 instanceof Error)){
var e__57672__auto____$7 = e58918;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58917){if((e58917 instanceof Error)){
var e__57672__auto____$7 = e58917;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58917;

}
}} else {
throw e__57672__auto____$6;
}
} else {
throw e58916;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58893){if((e58893 instanceof Error)){
var e__57672__auto____$6 = e58893;
if((e__57672__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === false)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
try{var ocr_58847_0__58873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_0__58873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58915){if((e58915 instanceof Error)){
var e__57672__auto____$7 = e58915;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58914){if((e58914 instanceof Error)){
var e__57672__auto____$7 = e58914;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$7;
}
} else {
throw e58914;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58894){if((e58894 instanceof Error)){
var e__57672__auto____$7 = e58894;
if((e__57672__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === true)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === false)){
try{var ocr_58847_0__58873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_58847_0__58873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58913){if((e58913 instanceof Error)){
var e__57672__auto____$8 = e58913;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$8;
}
} else {
throw e58913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58907){if((e58907 instanceof Error)){
var e__57672__auto____$8 = e58907;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58911){if((e58911 instanceof Error)){
var e__57672__auto____$9 = e58911;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58912){if((e58912 instanceof Error)){
var e__57672__auto____$10 = e58912;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58912;

}
}} else {
throw e__57672__auto____$9;
}
} else {
throw e58911;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58908){if((e58908 instanceof Error)){
var e__57672__auto____$9 = e58908;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === false)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58910){if((e58910 instanceof Error)){
var e__57672__auto____$10 = e58910;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58909){if((e58909 instanceof Error)){
var e__57672__auto____$10 = e58909;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58909;

}
}} else {
throw e__57672__auto____$9;
}
} else {
throw e58908;

}
}} else {
throw e__57672__auto____$8;
}
} else {
throw e58907;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58895){if((e58895 instanceof Error)){
var e__57672__auto____$8 = e58895;
if((e__57672__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === false)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58906){if((e58906 instanceof Error)){
var e__57672__auto____$9 = e58906;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$9;
}
} else {
throw e58906;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58905){if((e58905 instanceof Error)){
var e__57672__auto____$9 = e58905;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$9;
}
} else {
throw e58905;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58896){if((e58896 instanceof Error)){
var e__57672__auto____$9 = e58896;
if((e__57672__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === true)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58904){if((e58904 instanceof Error)){
var e__57672__auto____$10 = e58904;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58904;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58903){if((e58903 instanceof Error)){
var e__57672__auto____$10 = e58903;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$10;
}
} else {
throw e58903;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58897){if((e58897 instanceof Error)){
var e__57672__auto____$10 = e58897;
if((e__57672__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_58848_2__58884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(2));
if((ocr_58848_2__58884 === false)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === true)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58902){if((e58902 instanceof Error)){
var e__57672__auto____$11 = e58902;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$11;
}
} else {
throw e58902;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58899){if((e58899 instanceof Error)){
var e__57672__auto____$11 = e58899;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_58848_0__58882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(0));
if((ocr_58848_0__58882 === false)){
try{var ocr_58848_1__58883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58848,(1));
if((ocr_58848_1__58883 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_58847,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e58901){if((e58901 instanceof Error)){
var e__57672__auto____$12 = e58901;
if((e__57672__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$12;
}
} else {
throw e58901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58900){if((e58900 instanceof Error)){
var e__57672__auto____$12 = e58900;
if((e__57672__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$12;
}
} else {
throw e58900;

}
}} else {
throw e__57672__auto____$11;
}
} else {
throw e58899;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58898){if((e58898 instanceof Error)){
var e__57672__auto____$11 = e58898;
if((e__57672__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$11;
}
} else {
throw e58898;

}
}} else {
throw e__57672__auto____$10;
}
} else {
throw e58897;

}
}} else {
throw e__57672__auto____$9;
}
} else {
throw e58896;

}
}} else {
throw e__57672__auto____$8;
}
} else {
throw e58895;

}
}} else {
throw e__57672__auto____$7;
}
} else {
throw e58894;

}
}} else {
throw e__57672__auto____$6;
}
} else {
throw e58893;

}
}} else {
throw e__57672__auto____$5;
}
} else {
throw e58892;

}
}} else {
throw e__57672__auto____$4;
}
} else {
throw e58891;

}
}} else {
throw e__57672__auto____$3;
}
} else {
throw e58890;

}
}} else {
throw e__57672__auto____$2;
}
} else {
throw e58889;

}
}} else {
throw e__57672__auto____$1;
}
} else {
throw e58888;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58887){if((e58887 instanceof Error)){
var e__57672__auto____$1 = e58887;
if((e__57672__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57672__auto____$1;
}
} else {
throw e58887;

}
}} else {
throw e__57672__auto__;
}
} else {
throw e58886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e58885){if((e58885 instanceof Error)){
var e__57672__auto__ = e58885;
if((e__57672__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__57672__auto__;
}
} else {
throw e58885;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58942){
var vec__58943 = p__58942;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58943,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58941_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__58941_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58947){
var vec__58948 = p__58947;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58946_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__58946_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__58951 = cljs.core.rest(ins);
var G__58952 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__58951,G__58952) : posh.lib.q_analyze.just_qvars.call(null,G__58951,G__58952));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58953_SHARP_){
return cljs.core.zipmap(qvars,p1__58953_SHARP_);
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
var vec__58954 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58954,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58954,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58954,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58954,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__59341 = var$;
var G__59342 = dbvarmap;
var G__59343 = cljs.core.rest(dbeavs);
var$ = G__59341;
dbvarmap = G__59342;
dbeavs = G__59343;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__58957 = cljs.core.rest(vars);
var G__58958 = dbvarmap;
var G__58959 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__58957,G__58958,G__58959) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__58957,G__58958,G__58959));
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
var G__59344 = (n + (1));
var G__59345 = cljs.core.rest(xs__$1);
n = G__59344;
xs__$1 = G__59345;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58960_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__58960_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__58960_SHARP_) : type.call(null,p1__58960_SHARP_));
} else {
return p1__58960_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__58961 = cljs.core.rest(ins);
var G__58962 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__58961,G__58962) : posh.lib.q_analyze.make_dbarg_map.call(null,G__58961,G__58962));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58963){
var vec__58964 = p__58963;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58964,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58964,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__58968_SHARP_,p2__58967_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__58967_SHARP_)){
return p1__58968_SHARP_;
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
var pred__58972 = cljs.core._EQ_;
var expr__58973 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__58972.cljs$core$IFn$_invoke$arity$2 ? pred__58972.cljs$core$IFn$_invoke$arity$2((1),expr__58973) : pred__58972.call(null,(1),expr__58973)))){
return true;
} else {
if(cljs.core.truth_((pred__58972.cljs$core$IFn$_invoke$arity$2 ? pred__58972.cljs$core$IFn$_invoke$arity$2((3),expr__58973) : pred__58972.call(null,(3),expr__58973)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__59359 = cljs.core.first(remaining);
var G__59360 = cljs.core.rest(remaining);
clause = G__59359;
remaining = G__59360;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__59361 = cljs.core.first(remaining);
var G__59362 = cljs.core.rest(remaining);
clause = G__59361;
remaining = G__59362;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__58975(s__58976){
return (new cljs.core.LazySeq(null,(function (){
var s__58976__$1 = s__58976;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58976__$1);
if(temp__5735__auto__){
var s__58976__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58976__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58976__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58978 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58977 = (0);
while(true){
if((i__58977 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58977);
cljs.core.chunk_append(b__58978,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__59387 = (i__58977 + (1));
i__58977 = G__59387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58978),posh$lib$q_analyze$resolve_any_idents_$_iter__58975(cljs.core.chunk_rest(s__58976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58978),null);
}
} else {
var var_value = cljs.core.first(s__58976__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__58975(cljs.core.rest(s__58976__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58983){
var vec__58984 = p__58983;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58984,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58984,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58987){
var vec__58988 = p__58987;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58988,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58988,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58991){
var vec__58992 = p__58991;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58992,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58992,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58995){
var vec__58996 = p__58995;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58996,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58996,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__59000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__59001 = cljs.core.vec(r);
var fexpr__58999 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__58999.cljs$core$IFn$_invoke$arity$2 ? fexpr__58999.cljs$core$IFn$_invoke$arity$2(G__59000,G__59001) : fexpr__58999.call(null,G__59000,G__59001));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59002){
var vec__59003 = p__59002;
var seq__59004 = cljs.core.seq(vec__59003);
var first__59005 = cljs.core.first(seq__59004);
var seq__59004__$1 = cljs.core.next(seq__59004);
var db = first__59005;
var eav = seq__59004__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59006){
var vec__59007 = p__59006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59007,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__58981_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__58981_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__58981_SHARP_) : linked_qvars.call(null,p1__58981_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__58981_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__58982_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__58982_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__58982_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
