goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49907 = arguments.length;
var i__4790__auto___49908 = (0);
while(true){
if((i__4790__auto___49908 < len__4789__auto___49907)){
args__4795__auto__.push((arguments[i__4790__auto___49908]));

var G__49909 = (i__4790__auto___49908 + (1));
i__4790__auto___49908 = G__49909;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49714){
var G__49715 = cljs.core.first(seq49714);
var seq49714__$1 = cljs.core.next(seq49714);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49715,seq49714__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49719){
var map__49720 = p__49719;
var map__49720__$1 = (((((!((map__49720 == null))))?(((((map__49720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49720):map__49720);
var src = map__49720__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49722 = cljs.core.seq(sources);
var chunk__49723 = null;
var count__49724 = (0);
var i__49725 = (0);
while(true){
if((i__49725 < count__49724)){
var map__49737 = chunk__49723.cljs$core$IIndexed$_nth$arity$2(null,i__49725);
var map__49737__$1 = (((((!((map__49737 == null))))?(((((map__49737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49737):map__49737);
var src = map__49737__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49737__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49737__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49737__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49737__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49740){var e_49912 = e49740;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49912);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49912.message)].join('')));
}

var G__49913 = seq__49722;
var G__49914 = chunk__49723;
var G__49915 = count__49724;
var G__49916 = (i__49725 + (1));
seq__49722 = G__49913;
chunk__49723 = G__49914;
count__49724 = G__49915;
i__49725 = G__49916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49722);
if(temp__5735__auto__){
var seq__49722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49722__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49722__$1);
var G__49917 = cljs.core.chunk_rest(seq__49722__$1);
var G__49918 = c__4609__auto__;
var G__49919 = cljs.core.count(c__4609__auto__);
var G__49920 = (0);
seq__49722 = G__49917;
chunk__49723 = G__49918;
count__49724 = G__49919;
i__49725 = G__49920;
continue;
} else {
var map__49741 = cljs.core.first(seq__49722__$1);
var map__49741__$1 = (((((!((map__49741 == null))))?(((((map__49741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49741):map__49741);
var src = map__49741__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49749){var e_49921 = e49749;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49921);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49921.message)].join('')));
}

var G__49922 = cljs.core.next(seq__49722__$1);
var G__49923 = null;
var G__49924 = (0);
var G__49925 = (0);
seq__49722 = G__49922;
chunk__49723 = G__49923;
count__49724 = G__49924;
i__49725 = G__49925;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49750 = cljs.core.seq(js_requires);
var chunk__49751 = null;
var count__49752 = (0);
var i__49753 = (0);
while(true){
if((i__49753 < count__49752)){
var js_ns = chunk__49751.cljs$core$IIndexed$_nth$arity$2(null,i__49753);
var require_str_49927 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49927);


var G__49928 = seq__49750;
var G__49929 = chunk__49751;
var G__49930 = count__49752;
var G__49931 = (i__49753 + (1));
seq__49750 = G__49928;
chunk__49751 = G__49929;
count__49752 = G__49930;
i__49753 = G__49931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49750);
if(temp__5735__auto__){
var seq__49750__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49750__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49750__$1);
var G__49932 = cljs.core.chunk_rest(seq__49750__$1);
var G__49933 = c__4609__auto__;
var G__49934 = cljs.core.count(c__4609__auto__);
var G__49935 = (0);
seq__49750 = G__49932;
chunk__49751 = G__49933;
count__49752 = G__49934;
i__49753 = G__49935;
continue;
} else {
var js_ns = cljs.core.first(seq__49750__$1);
var require_str_49936 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49936);


var G__49937 = cljs.core.next(seq__49750__$1);
var G__49938 = null;
var G__49939 = (0);
var G__49940 = (0);
seq__49750 = G__49937;
chunk__49751 = G__49938;
count__49752 = G__49939;
i__49753 = G__49940;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49755 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49755) : callback.call(null,G__49755));
} else {
var G__49756 = shadow.cljs.devtools.client.env.files_url();
var G__49757 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49758 = "POST";
var G__49759 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49760 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49756,G__49757,G__49758,G__49759,G__49760);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49763){
var map__49764 = p__49763;
var map__49764__$1 = (((((!((map__49764 == null))))?(((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49764):map__49764);
var msg = map__49764__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49767 = info;
var map__49767__$1 = (((((!((map__49767 == null))))?(((((map__49767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49767):map__49767);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49770(s__49771){
return (new cljs.core.LazySeq(null,(function (){
var s__49771__$1 = s__49771;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49771__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49777 = cljs.core.first(xs__6292__auto__);
var map__49777__$1 = (((((!((map__49777 == null))))?(((((map__49777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49777):map__49777);
var src = map__49777__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49777__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49771__$1,map__49777,map__49777__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49767,map__49767__$1,sources,compiled,map__49764,map__49764__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49770_$_iter__49772(s__49773){
return (new cljs.core.LazySeq(null,((function (s__49771__$1,map__49777,map__49777__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49767,map__49767__$1,sources,compiled,map__49764,map__49764__$1,msg,info,reload_info){
return (function (){
var s__49773__$1 = s__49773;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49773__$1);
if(temp__5735__auto____$1){
var s__49773__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49773__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49773__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49775 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49774 = (0);
while(true){
if((i__49774 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49774);
cljs.core.chunk_append(b__49775,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49942 = (i__49774 + (1));
i__49774 = G__49942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49775),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49770_$_iter__49772(cljs.core.chunk_rest(s__49773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49775),null);
}
} else {
var warning = cljs.core.first(s__49773__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49770_$_iter__49772(cljs.core.rest(s__49773__$2)));
}
} else {
return null;
}
break;
}
});})(s__49771__$1,map__49777,map__49777__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49767,map__49767__$1,sources,compiled,map__49764,map__49764__$1,msg,info,reload_info))
,null,null));
});})(s__49771__$1,map__49777,map__49777__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49767,map__49767__$1,sources,compiled,map__49764,map__49764__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49770(cljs.core.rest(s__49771__$1)));
} else {
var G__49944 = cljs.core.rest(s__49771__$1);
s__49771__$1 = G__49944;
continue;
}
} else {
var G__49945 = cljs.core.rest(s__49771__$1);
s__49771__$1 = G__49945;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__49781_49946 = cljs.core.seq(warnings);
var chunk__49782_49947 = null;
var count__49783_49948 = (0);
var i__49784_49949 = (0);
while(true){
if((i__49784_49949 < count__49783_49948)){
var map__49790_49950 = chunk__49782_49947.cljs$core$IIndexed$_nth$arity$2(null,i__49784_49949);
var map__49790_49951__$1 = (((((!((map__49790_49950 == null))))?(((((map__49790_49950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49790_49950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49790_49950):map__49790_49950);
var w_49952 = map__49790_49951__$1;
var msg_49953__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790_49951__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790_49951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790_49951__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790_49951__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49956)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49954),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49955),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49953__$1)].join(''));


var G__49957 = seq__49781_49946;
var G__49958 = chunk__49782_49947;
var G__49959 = count__49783_49948;
var G__49960 = (i__49784_49949 + (1));
seq__49781_49946 = G__49957;
chunk__49782_49947 = G__49958;
count__49783_49948 = G__49959;
i__49784_49949 = G__49960;
continue;
} else {
var temp__5735__auto___49961 = cljs.core.seq(seq__49781_49946);
if(temp__5735__auto___49961){
var seq__49781_49962__$1 = temp__5735__auto___49961;
if(cljs.core.chunked_seq_QMARK_(seq__49781_49962__$1)){
var c__4609__auto___49963 = cljs.core.chunk_first(seq__49781_49962__$1);
var G__49964 = cljs.core.chunk_rest(seq__49781_49962__$1);
var G__49965 = c__4609__auto___49963;
var G__49966 = cljs.core.count(c__4609__auto___49963);
var G__49967 = (0);
seq__49781_49946 = G__49964;
chunk__49782_49947 = G__49965;
count__49783_49948 = G__49966;
i__49784_49949 = G__49967;
continue;
} else {
var map__49792_49969 = cljs.core.first(seq__49781_49962__$1);
var map__49792_49970__$1 = (((((!((map__49792_49969 == null))))?(((((map__49792_49969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49792_49969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49792_49969):map__49792_49969);
var w_49971 = map__49792_49970__$1;
var msg_49972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792_49970__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792_49970__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792_49970__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792_49970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49975)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49973),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49974),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49972__$1)].join(''));


var G__49976 = cljs.core.next(seq__49781_49962__$1);
var G__49977 = null;
var G__49978 = (0);
var G__49979 = (0);
seq__49781_49946 = G__49976;
chunk__49782_49947 = G__49977;
count__49783_49948 = G__49978;
i__49784_49949 = G__49979;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49795){
var map__49796 = p__49795;
var map__49796__$1 = (((((!((map__49796 == null))))?(((((map__49796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49796):map__49796);
var src = map__49796__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49796__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49798){
var map__49800 = p__49798;
var map__49800__$1 = (((((!((map__49800 == null))))?(((((map__49800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49800):map__49800);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49802){
var map__49803 = p__49802;
var map__49803__$1 = (((((!((map__49803 == null))))?(((((map__49803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49803):map__49803);
var rc = map__49803__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49762_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49762_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49806){
var map__49807 = p__49806;
var map__49807__$1 = (((((!((map__49807 == null))))?(((((map__49807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49807):map__49807);
var msg = map__49807__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49807__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49809 = cljs.core.seq(updates);
var chunk__49811 = null;
var count__49812 = (0);
var i__49813 = (0);
while(true){
if((i__49813 < count__49812)){
var path = chunk__49811.cljs$core$IIndexed$_nth$arity$2(null,i__49813);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49842_49983 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49845_49984 = null;
var count__49846_49985 = (0);
var i__49847_49986 = (0);
while(true){
if((i__49847_49986 < count__49846_49985)){
var node_49987 = chunk__49845_49984.cljs$core$IIndexed$_nth$arity$2(null,i__49847_49986);
var path_match_49988 = shadow.cljs.devtools.client.browser.match_paths(node_49987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49988)){
var new_link_49989 = (function (){var G__49853 = node_49987.cloneNode(true);
G__49853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49853;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49988], 0));

goog.dom.insertSiblingAfter(new_link_49989,node_49987);

goog.dom.removeNode(node_49987);


var G__49990 = seq__49842_49983;
var G__49991 = chunk__49845_49984;
var G__49992 = count__49846_49985;
var G__49993 = (i__49847_49986 + (1));
seq__49842_49983 = G__49990;
chunk__49845_49984 = G__49991;
count__49846_49985 = G__49992;
i__49847_49986 = G__49993;
continue;
} else {
var G__49996 = seq__49842_49983;
var G__49997 = chunk__49845_49984;
var G__49998 = count__49846_49985;
var G__49999 = (i__49847_49986 + (1));
seq__49842_49983 = G__49996;
chunk__49845_49984 = G__49997;
count__49846_49985 = G__49998;
i__49847_49986 = G__49999;
continue;
}
} else {
var temp__5735__auto___50000 = cljs.core.seq(seq__49842_49983);
if(temp__5735__auto___50000){
var seq__49842_50001__$1 = temp__5735__auto___50000;
if(cljs.core.chunked_seq_QMARK_(seq__49842_50001__$1)){
var c__4609__auto___50002 = cljs.core.chunk_first(seq__49842_50001__$1);
var G__50003 = cljs.core.chunk_rest(seq__49842_50001__$1);
var G__50004 = c__4609__auto___50002;
var G__50005 = cljs.core.count(c__4609__auto___50002);
var G__50006 = (0);
seq__49842_49983 = G__50003;
chunk__49845_49984 = G__50004;
count__49846_49985 = G__50005;
i__49847_49986 = G__50006;
continue;
} else {
var node_50007 = cljs.core.first(seq__49842_50001__$1);
var path_match_50008 = shadow.cljs.devtools.client.browser.match_paths(node_50007.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50008)){
var new_link_50009 = (function (){var G__49854 = node_50007.cloneNode(true);
G__49854.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49854;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50008], 0));

goog.dom.insertSiblingAfter(new_link_50009,node_50007);

goog.dom.removeNode(node_50007);


var G__50010 = cljs.core.next(seq__49842_50001__$1);
var G__50011 = null;
var G__50012 = (0);
var G__50013 = (0);
seq__49842_49983 = G__50010;
chunk__49845_49984 = G__50011;
count__49846_49985 = G__50012;
i__49847_49986 = G__50013;
continue;
} else {
var G__50014 = cljs.core.next(seq__49842_50001__$1);
var G__50015 = null;
var G__50016 = (0);
var G__50017 = (0);
seq__49842_49983 = G__50014;
chunk__49845_49984 = G__50015;
count__49846_49985 = G__50016;
i__49847_49986 = G__50017;
continue;
}
}
} else {
}
}
break;
}


var G__50018 = seq__49809;
var G__50019 = chunk__49811;
var G__50020 = count__49812;
var G__50021 = (i__49813 + (1));
seq__49809 = G__50018;
chunk__49811 = G__50019;
count__49812 = G__50020;
i__49813 = G__50021;
continue;
} else {
var G__50022 = seq__49809;
var G__50023 = chunk__49811;
var G__50024 = count__49812;
var G__50025 = (i__49813 + (1));
seq__49809 = G__50022;
chunk__49811 = G__50023;
count__49812 = G__50024;
i__49813 = G__50025;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49809);
if(temp__5735__auto__){
var seq__49809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49809__$1);
var G__50026 = cljs.core.chunk_rest(seq__49809__$1);
var G__50027 = c__4609__auto__;
var G__50028 = cljs.core.count(c__4609__auto__);
var G__50029 = (0);
seq__49809 = G__50026;
chunk__49811 = G__50027;
count__49812 = G__50028;
i__49813 = G__50029;
continue;
} else {
var path = cljs.core.first(seq__49809__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49855_50030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49858_50031 = null;
var count__49859_50032 = (0);
var i__49860_50033 = (0);
while(true){
if((i__49860_50033 < count__49859_50032)){
var node_50034 = chunk__49858_50031.cljs$core$IIndexed$_nth$arity$2(null,i__49860_50033);
var path_match_50035 = shadow.cljs.devtools.client.browser.match_paths(node_50034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50035)){
var new_link_50036 = (function (){var G__49866 = node_50034.cloneNode(true);
G__49866.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49866;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50035], 0));

goog.dom.insertSiblingAfter(new_link_50036,node_50034);

goog.dom.removeNode(node_50034);


var G__50037 = seq__49855_50030;
var G__50038 = chunk__49858_50031;
var G__50039 = count__49859_50032;
var G__50040 = (i__49860_50033 + (1));
seq__49855_50030 = G__50037;
chunk__49858_50031 = G__50038;
count__49859_50032 = G__50039;
i__49860_50033 = G__50040;
continue;
} else {
var G__50041 = seq__49855_50030;
var G__50042 = chunk__49858_50031;
var G__50043 = count__49859_50032;
var G__50044 = (i__49860_50033 + (1));
seq__49855_50030 = G__50041;
chunk__49858_50031 = G__50042;
count__49859_50032 = G__50043;
i__49860_50033 = G__50044;
continue;
}
} else {
var temp__5735__auto___50045__$1 = cljs.core.seq(seq__49855_50030);
if(temp__5735__auto___50045__$1){
var seq__49855_50046__$1 = temp__5735__auto___50045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49855_50046__$1)){
var c__4609__auto___50047 = cljs.core.chunk_first(seq__49855_50046__$1);
var G__50048 = cljs.core.chunk_rest(seq__49855_50046__$1);
var G__50049 = c__4609__auto___50047;
var G__50050 = cljs.core.count(c__4609__auto___50047);
var G__50051 = (0);
seq__49855_50030 = G__50048;
chunk__49858_50031 = G__50049;
count__49859_50032 = G__50050;
i__49860_50033 = G__50051;
continue;
} else {
var node_50053 = cljs.core.first(seq__49855_50046__$1);
var path_match_50054 = shadow.cljs.devtools.client.browser.match_paths(node_50053.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50054)){
var new_link_50056 = (function (){var G__49867 = node_50053.cloneNode(true);
G__49867.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50054),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49867;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50054], 0));

goog.dom.insertSiblingAfter(new_link_50056,node_50053);

goog.dom.removeNode(node_50053);


var G__50057 = cljs.core.next(seq__49855_50046__$1);
var G__50058 = null;
var G__50059 = (0);
var G__50060 = (0);
seq__49855_50030 = G__50057;
chunk__49858_50031 = G__50058;
count__49859_50032 = G__50059;
i__49860_50033 = G__50060;
continue;
} else {
var G__50061 = cljs.core.next(seq__49855_50046__$1);
var G__50062 = null;
var G__50063 = (0);
var G__50064 = (0);
seq__49855_50030 = G__50061;
chunk__49858_50031 = G__50062;
count__49859_50032 = G__50063;
i__49860_50033 = G__50064;
continue;
}
}
} else {
}
}
break;
}


var G__50065 = cljs.core.next(seq__49809__$1);
var G__50066 = null;
var G__50067 = (0);
var G__50068 = (0);
seq__49809 = G__50065;
chunk__49811 = G__50066;
count__49812 = G__50067;
i__49813 = G__50068;
continue;
} else {
var G__50069 = cljs.core.next(seq__49809__$1);
var G__50070 = null;
var G__50071 = (0);
var G__50072 = (0);
seq__49809 = G__50069;
chunk__49811 = G__50070;
count__49812 = G__50071;
i__49813 = G__50072;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49869){
var map__49870 = p__49869;
var map__49870__$1 = (((((!((map__49870 == null))))?(((((map__49870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49870):map__49870);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49873,done){
var map__49874 = p__49873;
var map__49874__$1 = (((((!((map__49874 == null))))?(((((map__49874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49874):map__49874);
var msg = map__49874__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49878){
var map__49879 = p__49878;
var map__49879__$1 = (((((!((map__49879 == null))))?(((((map__49879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49879):map__49879);
var src = map__49879__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49879__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49881){var e = e49881;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49882,done){
var map__49883 = p__49882;
var map__49883__$1 = (((((!((map__49883 == null))))?(((((map__49883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49883):map__49883);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49883__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49883__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49886){
var map__49887 = p__49886;
var map__49887__$1 = (((((!((map__49887 == null))))?(((((map__49887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49887):map__49887);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49887__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49887__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49889,done){
var map__49890 = p__49889;
var map__49890__$1 = (((((!((map__49890 == null))))?(((((map__49890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49890):map__49890);
var msg = map__49890__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49892_50086 = type;
var G__49892_50087__$1 = (((G__49892_50086 instanceof cljs.core.Keyword))?G__49892_50086.fqn:null);
switch (G__49892_50087__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__49894 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49895 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49896 = "POST";
var G__49897 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49898 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49894,G__49895,G__49896,G__49897,G__49898);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49901 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49900 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49900.cljs$core$IFn$_invoke$arity$1 ? fexpr__49900.cljs$core$IFn$_invoke$arity$1(G__49901) : fexpr__49900.call(null,G__49901));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e49903){var e = e49903;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50107 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50107)){
var s_50109 = temp__5735__auto___50107;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50109.onclose = (function (e){
return null;
}));

s_50109.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
