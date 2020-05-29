goog.provide('athens.subs');
goog.require('cljs.core');
goog.require('athens.blocks');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
var G__53588_53660 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__53589_53661 = (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53588_53660,G__53589_53661) : re_frame.core.reg_sub.call(null,G__53588_53660,G__53589_53661));
var G__53590_53663 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__53591_53664 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53590_53663,G__53591_53664) : re_frame.core.reg_sub.call(null,G__53590_53663,G__53591_53664));
var G__53592_53666 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__53593_53667 = (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53592_53666,G__53593_53667) : re_frame.core.reg_sub.call(null,G__53592_53666,G__53593_53667));
var G__53595_53668 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__53596_53669 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__53595_53668,G__53596_53669) : re_posh.core.reg_query_sub.call(null,G__53595_53668,G__53596_53669));
var G__53597_53670 = new cljs.core.Keyword("node","refs","node/refs",-1563406590);
var G__53598_53671 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__53597_53670,G__53598_53671) : re_posh.core.reg_query_sub.call(null,G__53597_53670,G__53598_53671));
var G__53599_53674 = new cljs.core.Keyword("page","sidebar","page/sidebar",32416927);
var G__53600_53675 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__53599_53674,G__53600_53675) : re_posh.core.reg_query_sub.call(null,G__53599_53674,G__53600_53675));
var G__53601_53676 = new cljs.core.Keyword(null,"node","node",581201198);
var G__53602_53677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53601_53676,G__53602_53677) : re_posh.core.reg_pull_sub.call(null,G__53601_53676,G__53602_53677));
var G__53603_53678 = new cljs.core.Keyword("block","uid","block/uid",-1623585167);
var G__53604_53679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53603_53678,G__53604_53679) : re_posh.core.reg_pull_sub.call(null,G__53603_53678,G__53604_53679));
var G__53608_53680 = new cljs.core.Keyword("block","string","block/string",-2066596447);
var G__53609_53681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53608_53680,G__53609_53681) : re_posh.core.reg_pull_sub.call(null,G__53608_53680,G__53609_53681));
var G__53611_53682 = new cljs.core.Keyword(null,"blocks","blocks",-610462153);
var G__53612_53683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53611_53682,G__53612_53683) : re_posh.core.reg_pull_sub.call(null,G__53611_53682,G__53612_53683));
var G__53613_53684 = new cljs.core.Keyword("block","children","block/children",-1040716209);
var G__53614_53685 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53613_53684,G__53614_53685) : re_posh.core.reg_pull_sub.call(null,G__53613_53684,G__53614_53685));
var G__53616_53688 = new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544);
var G__53617_53689 = (function (p__53619,_){
var vec__53620 = p__53619;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(1),null);
var G__53623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53623) : re_posh.core.subscribe.call(null,G__53623));
});
var G__53618_53690 = (function (block,_){
return athens.blocks.sort_block(block);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__53616_53688,G__53617_53689,G__53618_53690) : re_frame.core.reg_sub.call(null,G__53616_53688,G__53617_53689,G__53618_53690));
var G__53628_53699 = new cljs.core.Keyword("block","_children","block/_children",1128070632);
var G__53629_53700 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__53628_53699,G__53629_53700) : re_posh.core.reg_pull_sub.call(null,G__53628_53699,G__53629_53700));
var G__53631_53702 = new cljs.core.Keyword("block","_children2","block/_children2",-1277243604);
var G__53632_53703 = (function (p__53634,_){
var vec__53635 = p__53634;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53635,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53635,(1),null);
var G__53638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53638) : re_posh.core.subscribe.call(null,G__53638));
});
var G__53633_53704 = (function (block,_){
return cljs.core.reverse(cljs.core.rest((function (){var b = block;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__53708 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__53709 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__53708;
res = G__53709;
continue;
}
break;
}
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__53631_53702,G__53632_53703,G__53633_53704) : re_frame.core.reg_sub.call(null,G__53631_53702,G__53632_53703,G__53633_53704));
var G__53641_53711 = new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062);
var G__53642_53712 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53643_53713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null);
var G__53644_53714 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null));

var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47115__auto__;
}catch (e53645){var e = e53645;
throw e;
}}):(function (nodes,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
}));
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53641_53711,G__53642_53712,G__53643_53713,G__53644_53714) : re_posh.core.reg_sub.call(null,G__53641_53711,G__53642_53712,G__53643_53713,G__53644_53714));
var G__53646_53721 = new cljs.core.Keyword(null,"favorites","favorites",1740773480);
var G__53647_53722 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53648_53723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null);
var G__53649_53724 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null))));

return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(0),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47115__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47115__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),(2),nodes)))));
}catch (e53658){var e = e53658;
throw e;
}}):(function (nodes,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,nodes));
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53646_53721,G__53647_53722,G__53648_53723,G__53649_53724) : re_frame.core.reg_sub.call(null,G__53646_53721,G__53647_53722,G__53648_53723,G__53649_53724));

//# sourceMappingURL=athens.subs.js.map
