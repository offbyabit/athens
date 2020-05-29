goog.provide('athens.parse_renderer');
goog.require('cljs.core');
goog.require('athens.parse_transform_helper');
goog.require('athens.parser');
goog.require('instaparse.core');
goog.require('re_frame.core');
goog.require('reitit.frontend.easy');
/**
 * Transforms Instaparse output to Hiccup.
 */
athens.parse_renderer.transform = (function athens$parse_renderer$transform(tree){
var G__50330 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block","block",664686210),(function() { 
var G__50352__delegate = function (raw_contents){
var collapsed_contents = athens.parse_transform_helper.combine_adjacent_strings(raw_contents);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block"], null)], null),collapsed_contents);
};
var G__50352 = function (var_args){
var raw_contents = null;
if (arguments.length > 0) {
var G__50353__i = 0, G__50353__a = new Array(arguments.length -  0);
while (G__50353__i < G__50353__a.length) {G__50353__a[G__50353__i] = arguments[G__50353__i + 0]; ++G__50353__i;}
  raw_contents = new cljs.core.IndexedSeq(G__50353__a,0,null);
} 
return G__50352__delegate.call(this,raw_contents);};
G__50352.cljs$lang$maxFixedArity = 0;
G__50352.cljs$lang$applyTo = (function (arglist__50354){
var raw_contents = cljs.core.seq(arglist__50354);
return G__50352__delegate(raw_contents);
});
G__50352.cljs$core$IFn$_invoke$arity$variadic = G__50352__delegate;
return G__50352;
})()
,new cljs.core.Keyword(null,"any-chars","any-chars",1675129711),(function() { 
var G__50357__delegate = function (chars){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(chars);
};
var G__50357 = function (var_args){
var chars = null;
if (arguments.length > 0) {
var G__50361__i = 0, G__50361__a = new Array(arguments.length -  0);
while (G__50361__i < G__50361__a.length) {G__50361__a[G__50361__i] = arguments[G__50361__i + 0]; ++G__50361__i;}
  chars = new cljs.core.IndexedSeq(G__50361__a,0,null);
} 
return G__50357__delegate.call(this,chars);};
G__50357.cljs$lang$maxFixedArity = 0;
G__50357.cljs$lang$applyTo = (function (arglist__50362){
var chars = cljs.core.seq(arglist__50362);
return G__50357__delegate(chars);
});
G__50357.cljs$core$IFn$_invoke$arity$variadic = G__50357__delegate;
return G__50357;
})()
,new cljs.core.Keyword(null,"block-link","block-link",833646341),(function (title){
var id = (function (){var G__50332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50332) : re_frame.core.subscribe.call(null,G__50332));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),"[["], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(id))], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),"dodgerblue"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),"]]"], null)], null);
}),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (id){
var string = (function (){var G__50333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),id], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50333) : re_frame.core.subscribe.call(null,G__50333));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))], null),(function (){var G__50334 = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(string));
return (athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$1 ? athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$1(G__50334) : athens.parse_renderer.parse_and_render.call(null,G__50334));
})()], null)], null);
}),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function (tag_name){
var id = (function (){var G__50337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),tag_name], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50337) : re_frame.core.subscribe.call(null,G__50337));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"hashtag",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(id))], null))], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null);
}),new cljs.core.Keyword(null,"bold","bold",-116809535),(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bold"], null),text], null);
})], null);
var G__50331 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__50330,G__50331) : instaparse.core.transform.call(null,G__50330,G__50331));
});
/**
 * Converts a string of block syntax to Hiccup, with fallback formatting if it can’t be parsed.
 */
athens.parse_renderer.parse_and_render = (function athens$parse_renderer$parse_and_render(string){
var result = (athens.parser.block_parser.cljs$core$IFn$_invoke$arity$1 ? athens.parser.block_parser.cljs$core$IFn$_invoke$arity$1(string) : athens.parser.block_parser.call(null,string));
if(instaparse.core.failure_QMARK_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.core.get_failure(result)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),string], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.vec(athens.parse_renderer.transform(result))], null);
}
});

//# sourceMappingURL=athens.parse_renderer.js.map
