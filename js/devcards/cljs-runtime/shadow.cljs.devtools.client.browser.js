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
var len__4789__auto___49896 = arguments.length;
var i__4790__auto___49897 = (0);
while(true){
if((i__4790__auto___49897 < len__4789__auto___49896)){
args__4795__auto__.push((arguments[i__4790__auto___49897]));

var G__49898 = (i__4790__auto___49897 + (1));
i__4790__auto___49897 = G__49898;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49686){
var G__49687 = cljs.core.first(seq49686);
var seq49686__$1 = cljs.core.next(seq49686);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49687,seq49686__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49701){
var map__49702 = p__49701;
var map__49702__$1 = (((((!((map__49702 == null))))?(((((map__49702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49702):map__49702);
var src = map__49702__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49702__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49702__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49709 = cljs.core.seq(sources);
var chunk__49710 = null;
var count__49711 = (0);
var i__49712 = (0);
while(true){
if((i__49712 < count__49711)){
var map__49720 = chunk__49710.cljs$core$IIndexed$_nth$arity$2(null,i__49712);
var map__49720__$1 = (((((!((map__49720 == null))))?(((((map__49720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49720):map__49720);
var src = map__49720__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49722){var e_49901 = e49722;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49901);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49901.message)].join('')));
}

var G__49902 = seq__49709;
var G__49903 = chunk__49710;
var G__49904 = count__49711;
var G__49905 = (i__49712 + (1));
seq__49709 = G__49902;
chunk__49710 = G__49903;
count__49711 = G__49904;
i__49712 = G__49905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49709);
if(temp__5735__auto__){
var seq__49709__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49709__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49709__$1);
var G__49908 = cljs.core.chunk_rest(seq__49709__$1);
var G__49909 = c__4609__auto__;
var G__49910 = cljs.core.count(c__4609__auto__);
var G__49911 = (0);
seq__49709 = G__49908;
chunk__49710 = G__49909;
count__49711 = G__49910;
i__49712 = G__49911;
continue;
} else {
var map__49725 = cljs.core.first(seq__49709__$1);
var map__49725__$1 = (((((!((map__49725 == null))))?(((((map__49725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49725):map__49725);
var src = map__49725__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49728){var e_49912 = e49728;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49912);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49912.message)].join('')));
}

var G__49913 = cljs.core.next(seq__49709__$1);
var G__49914 = null;
var G__49915 = (0);
var G__49916 = (0);
seq__49709 = G__49913;
chunk__49710 = G__49914;
count__49711 = G__49915;
i__49712 = G__49916;
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
var seq__49731 = cljs.core.seq(js_requires);
var chunk__49732 = null;
var count__49733 = (0);
var i__49734 = (0);
while(true){
if((i__49734 < count__49733)){
var js_ns = chunk__49732.cljs$core$IIndexed$_nth$arity$2(null,i__49734);
var require_str_49920 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49920);


var G__49923 = seq__49731;
var G__49924 = chunk__49732;
var G__49925 = count__49733;
var G__49926 = (i__49734 + (1));
seq__49731 = G__49923;
chunk__49732 = G__49924;
count__49733 = G__49925;
i__49734 = G__49926;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49731);
if(temp__5735__auto__){
var seq__49731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49731__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49731__$1);
var G__49928 = cljs.core.chunk_rest(seq__49731__$1);
var G__49929 = c__4609__auto__;
var G__49930 = cljs.core.count(c__4609__auto__);
var G__49931 = (0);
seq__49731 = G__49928;
chunk__49732 = G__49929;
count__49733 = G__49930;
i__49734 = G__49931;
continue;
} else {
var js_ns = cljs.core.first(seq__49731__$1);
var require_str_49935 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49935);


var G__49936 = cljs.core.next(seq__49731__$1);
var G__49937 = null;
var G__49938 = (0);
var G__49939 = (0);
seq__49731 = G__49936;
chunk__49732 = G__49937;
count__49733 = G__49938;
i__49734 = G__49939;
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
var G__49736 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49736) : callback.call(null,G__49736));
} else {
var G__49737 = shadow.cljs.devtools.client.env.files_url();
var G__49738 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49739 = "POST";
var G__49740 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49741 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49737,G__49738,G__49739,G__49740,G__49741);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49744){
var map__49745 = p__49744;
var map__49745__$1 = (((((!((map__49745 == null))))?(((((map__49745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49745):map__49745);
var msg = map__49745__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49747 = info;
var map__49747__$1 = (((((!((map__49747 == null))))?(((((map__49747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49747):map__49747);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49749(s__49750){
return (new cljs.core.LazySeq(null,(function (){
var s__49750__$1 = s__49750;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49750__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49757 = cljs.core.first(xs__6292__auto__);
var map__49757__$1 = (((((!((map__49757 == null))))?(((((map__49757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49757):map__49757);
var src = map__49757__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49757__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49750__$1,map__49757,map__49757__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49747,map__49747__$1,sources,compiled,map__49745,map__49745__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49749_$_iter__49751(s__49752){
return (new cljs.core.LazySeq(null,((function (s__49750__$1,map__49757,map__49757__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49747,map__49747__$1,sources,compiled,map__49745,map__49745__$1,msg,info,reload_info){
return (function (){
var s__49752__$1 = s__49752;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49752__$1);
if(temp__5735__auto____$1){
var s__49752__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49752__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49752__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49754 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49753 = (0);
while(true){
if((i__49753 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49753);
cljs.core.chunk_append(b__49754,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49945 = (i__49753 + (1));
i__49753 = G__49945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49754),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49749_$_iter__49751(cljs.core.chunk_rest(s__49752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49754),null);
}
} else {
var warning = cljs.core.first(s__49752__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49749_$_iter__49751(cljs.core.rest(s__49752__$2)));
}
} else {
return null;
}
break;
}
});})(s__49750__$1,map__49757,map__49757__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49747,map__49747__$1,sources,compiled,map__49745,map__49745__$1,msg,info,reload_info))
,null,null));
});})(s__49750__$1,map__49757,map__49757__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49747,map__49747__$1,sources,compiled,map__49745,map__49745__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49749(cljs.core.rest(s__49750__$1)));
} else {
var G__49949 = cljs.core.rest(s__49750__$1);
s__49750__$1 = G__49949;
continue;
}
} else {
var G__49950 = cljs.core.rest(s__49750__$1);
s__49750__$1 = G__49950;
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
var seq__49761_49952 = cljs.core.seq(warnings);
var chunk__49762_49953 = null;
var count__49763_49954 = (0);
var i__49764_49955 = (0);
while(true){
if((i__49764_49955 < count__49763_49954)){
var map__49770_49956 = chunk__49762_49953.cljs$core$IIndexed$_nth$arity$2(null,i__49764_49955);
var map__49770_49957__$1 = (((((!((map__49770_49956 == null))))?(((((map__49770_49956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49770_49956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49770_49956):map__49770_49956);
var w_49958 = map__49770_49957__$1;
var msg_49959__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770_49957__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770_49957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770_49957__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770_49957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49962)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49960),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49961),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49959__$1)].join(''));


var G__49966 = seq__49761_49952;
var G__49967 = chunk__49762_49953;
var G__49968 = count__49763_49954;
var G__49969 = (i__49764_49955 + (1));
seq__49761_49952 = G__49966;
chunk__49762_49953 = G__49967;
count__49763_49954 = G__49968;
i__49764_49955 = G__49969;
continue;
} else {
var temp__5735__auto___49971 = cljs.core.seq(seq__49761_49952);
if(temp__5735__auto___49971){
var seq__49761_49972__$1 = temp__5735__auto___49971;
if(cljs.core.chunked_seq_QMARK_(seq__49761_49972__$1)){
var c__4609__auto___49973 = cljs.core.chunk_first(seq__49761_49972__$1);
var G__49976 = cljs.core.chunk_rest(seq__49761_49972__$1);
var G__49977 = c__4609__auto___49973;
var G__49978 = cljs.core.count(c__4609__auto___49973);
var G__49979 = (0);
seq__49761_49952 = G__49976;
chunk__49762_49953 = G__49977;
count__49763_49954 = G__49978;
i__49764_49955 = G__49979;
continue;
} else {
var map__49772_49981 = cljs.core.first(seq__49761_49972__$1);
var map__49772_49982__$1 = (((((!((map__49772_49981 == null))))?(((((map__49772_49981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49772_49981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49772_49981):map__49772_49981);
var w_49983 = map__49772_49982__$1;
var msg_49984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49982__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49987)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49985),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49986),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49984__$1)].join(''));


var G__49991 = cljs.core.next(seq__49761_49972__$1);
var G__49992 = null;
var G__49993 = (0);
var G__49994 = (0);
seq__49761_49952 = G__49991;
chunk__49762_49953 = G__49992;
count__49763_49954 = G__49993;
i__49764_49955 = G__49994;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49775){
var map__49776 = p__49775;
var map__49776__$1 = (((((!((map__49776 == null))))?(((((map__49776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49776):map__49776);
var src = map__49776__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49776__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49776__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49781){
var map__49782 = p__49781;
var map__49782__$1 = (((((!((map__49782 == null))))?(((((map__49782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49782):map__49782);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49784){
var map__49785 = p__49784;
var map__49785__$1 = (((((!((map__49785 == null))))?(((((map__49785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49785):map__49785);
var rc = map__49785__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49743_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49743_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49789){
var map__49790 = p__49789;
var map__49790__$1 = (((((!((map__49790 == null))))?(((((map__49790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49790):map__49790);
var msg = map__49790__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49792 = cljs.core.seq(updates);
var chunk__49794 = null;
var count__49795 = (0);
var i__49796 = (0);
while(true){
if((i__49796 < count__49795)){
var path = chunk__49794.cljs$core$IIndexed$_nth$arity$2(null,i__49796);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49827_50011 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49830_50012 = null;
var count__49831_50013 = (0);
var i__49832_50014 = (0);
while(true){
if((i__49832_50014 < count__49831_50013)){
var node_50015 = chunk__49830_50012.cljs$core$IIndexed$_nth$arity$2(null,i__49832_50014);
var path_match_50016 = shadow.cljs.devtools.client.browser.match_paths(node_50015.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50016)){
var new_link_50017 = (function (){var G__49838 = node_50015.cloneNode(true);
G__49838.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50016),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49838;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50016], 0));

goog.dom.insertSiblingAfter(new_link_50017,node_50015);

goog.dom.removeNode(node_50015);


var G__50019 = seq__49827_50011;
var G__50020 = chunk__49830_50012;
var G__50021 = count__49831_50013;
var G__50022 = (i__49832_50014 + (1));
seq__49827_50011 = G__50019;
chunk__49830_50012 = G__50020;
count__49831_50013 = G__50021;
i__49832_50014 = G__50022;
continue;
} else {
var G__50024 = seq__49827_50011;
var G__50025 = chunk__49830_50012;
var G__50026 = count__49831_50013;
var G__50027 = (i__49832_50014 + (1));
seq__49827_50011 = G__50024;
chunk__49830_50012 = G__50025;
count__49831_50013 = G__50026;
i__49832_50014 = G__50027;
continue;
}
} else {
var temp__5735__auto___50028 = cljs.core.seq(seq__49827_50011);
if(temp__5735__auto___50028){
var seq__49827_50031__$1 = temp__5735__auto___50028;
if(cljs.core.chunked_seq_QMARK_(seq__49827_50031__$1)){
var c__4609__auto___50033 = cljs.core.chunk_first(seq__49827_50031__$1);
var G__50034 = cljs.core.chunk_rest(seq__49827_50031__$1);
var G__50035 = c__4609__auto___50033;
var G__50036 = cljs.core.count(c__4609__auto___50033);
var G__50037 = (0);
seq__49827_50011 = G__50034;
chunk__49830_50012 = G__50035;
count__49831_50013 = G__50036;
i__49832_50014 = G__50037;
continue;
} else {
var node_50038 = cljs.core.first(seq__49827_50031__$1);
var path_match_50039 = shadow.cljs.devtools.client.browser.match_paths(node_50038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50039)){
var new_link_50040 = (function (){var G__49839 = node_50038.cloneNode(true);
G__49839.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50039),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49839;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50039], 0));

goog.dom.insertSiblingAfter(new_link_50040,node_50038);

goog.dom.removeNode(node_50038);


var G__50046 = cljs.core.next(seq__49827_50031__$1);
var G__50047 = null;
var G__50048 = (0);
var G__50049 = (0);
seq__49827_50011 = G__50046;
chunk__49830_50012 = G__50047;
count__49831_50013 = G__50048;
i__49832_50014 = G__50049;
continue;
} else {
var G__50050 = cljs.core.next(seq__49827_50031__$1);
var G__50051 = null;
var G__50052 = (0);
var G__50053 = (0);
seq__49827_50011 = G__50050;
chunk__49830_50012 = G__50051;
count__49831_50013 = G__50052;
i__49832_50014 = G__50053;
continue;
}
}
} else {
}
}
break;
}


var G__50055 = seq__49792;
var G__50056 = chunk__49794;
var G__50057 = count__49795;
var G__50058 = (i__49796 + (1));
seq__49792 = G__50055;
chunk__49794 = G__50056;
count__49795 = G__50057;
i__49796 = G__50058;
continue;
} else {
var G__50063 = seq__49792;
var G__50064 = chunk__49794;
var G__50065 = count__49795;
var G__50066 = (i__49796 + (1));
seq__49792 = G__50063;
chunk__49794 = G__50064;
count__49795 = G__50065;
i__49796 = G__50066;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49792);
if(temp__5735__auto__){
var seq__49792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49792__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49792__$1);
var G__50067 = cljs.core.chunk_rest(seq__49792__$1);
var G__50068 = c__4609__auto__;
var G__50069 = cljs.core.count(c__4609__auto__);
var G__50070 = (0);
seq__49792 = G__50067;
chunk__49794 = G__50068;
count__49795 = G__50069;
i__49796 = G__50070;
continue;
} else {
var path = cljs.core.first(seq__49792__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49841_50075 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49844_50076 = null;
var count__49845_50077 = (0);
var i__49846_50078 = (0);
while(true){
if((i__49846_50078 < count__49845_50077)){
var node_50079 = chunk__49844_50076.cljs$core$IIndexed$_nth$arity$2(null,i__49846_50078);
var path_match_50080 = shadow.cljs.devtools.client.browser.match_paths(node_50079.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50080)){
var new_link_50081 = (function (){var G__49854 = node_50079.cloneNode(true);
G__49854.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50080),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49854;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50080], 0));

goog.dom.insertSiblingAfter(new_link_50081,node_50079);

goog.dom.removeNode(node_50079);


var G__50083 = seq__49841_50075;
var G__50084 = chunk__49844_50076;
var G__50085 = count__49845_50077;
var G__50086 = (i__49846_50078 + (1));
seq__49841_50075 = G__50083;
chunk__49844_50076 = G__50084;
count__49845_50077 = G__50085;
i__49846_50078 = G__50086;
continue;
} else {
var G__50087 = seq__49841_50075;
var G__50088 = chunk__49844_50076;
var G__50089 = count__49845_50077;
var G__50090 = (i__49846_50078 + (1));
seq__49841_50075 = G__50087;
chunk__49844_50076 = G__50088;
count__49845_50077 = G__50089;
i__49846_50078 = G__50090;
continue;
}
} else {
var temp__5735__auto___50091__$1 = cljs.core.seq(seq__49841_50075);
if(temp__5735__auto___50091__$1){
var seq__49841_50092__$1 = temp__5735__auto___50091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49841_50092__$1)){
var c__4609__auto___50093 = cljs.core.chunk_first(seq__49841_50092__$1);
var G__50094 = cljs.core.chunk_rest(seq__49841_50092__$1);
var G__50095 = c__4609__auto___50093;
var G__50096 = cljs.core.count(c__4609__auto___50093);
var G__50097 = (0);
seq__49841_50075 = G__50094;
chunk__49844_50076 = G__50095;
count__49845_50077 = G__50096;
i__49846_50078 = G__50097;
continue;
} else {
var node_50098 = cljs.core.first(seq__49841_50092__$1);
var path_match_50099 = shadow.cljs.devtools.client.browser.match_paths(node_50098.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50099)){
var new_link_50102 = (function (){var G__49855 = node_50098.cloneNode(true);
G__49855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50099),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49855;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50099], 0));

goog.dom.insertSiblingAfter(new_link_50102,node_50098);

goog.dom.removeNode(node_50098);


var G__50104 = cljs.core.next(seq__49841_50092__$1);
var G__50105 = null;
var G__50106 = (0);
var G__50107 = (0);
seq__49841_50075 = G__50104;
chunk__49844_50076 = G__50105;
count__49845_50077 = G__50106;
i__49846_50078 = G__50107;
continue;
} else {
var G__50108 = cljs.core.next(seq__49841_50092__$1);
var G__50109 = null;
var G__50110 = (0);
var G__50111 = (0);
seq__49841_50075 = G__50108;
chunk__49844_50076 = G__50109;
count__49845_50077 = G__50110;
i__49846_50078 = G__50111;
continue;
}
}
} else {
}
}
break;
}


var G__50113 = cljs.core.next(seq__49792__$1);
var G__50114 = null;
var G__50115 = (0);
var G__50116 = (0);
seq__49792 = G__50113;
chunk__49794 = G__50114;
count__49795 = G__50115;
i__49796 = G__50116;
continue;
} else {
var G__50117 = cljs.core.next(seq__49792__$1);
var G__50118 = null;
var G__50119 = (0);
var G__50120 = (0);
seq__49792 = G__50117;
chunk__49794 = G__50118;
count__49795 = G__50119;
i__49796 = G__50120;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49859){
var map__49860 = p__49859;
var map__49860__$1 = (((((!((map__49860 == null))))?(((((map__49860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49860):map__49860);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49862,done){
var map__49863 = p__49862;
var map__49863__$1 = (((((!((map__49863 == null))))?(((((map__49863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49863):map__49863);
var msg = map__49863__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49866){
var map__49867 = p__49866;
var map__49867__$1 = (((((!((map__49867 == null))))?(((((map__49867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49867):map__49867);
var src = map__49867__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49870){var e = e49870;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49871,done){
var map__49872 = p__49871;
var map__49872__$1 = (((((!((map__49872 == null))))?(((((map__49872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49872):map__49872);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49874){
var map__49875 = p__49874;
var map__49875__$1 = (((((!((map__49875 == null))))?(((((map__49875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49875):map__49875);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49875__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49875__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49878,done){
var map__49879 = p__49878;
var map__49879__$1 = (((((!((map__49879 == null))))?(((((map__49879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49879):map__49879);
var msg = map__49879__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49882_50155 = type;
var G__49882_50156__$1 = (((G__49882_50155 instanceof cljs.core.Keyword))?G__49882_50155.fqn:null);
switch (G__49882_50156__$1) {
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
var G__49883 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49884 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49885 = "POST";
var G__49886 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49887 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49883,G__49884,G__49885,G__49886,G__49887);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49890 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49889 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49889.cljs$core$IFn$_invoke$arity$1 ? fexpr__49889.cljs$core$IFn$_invoke$arity$1(G__49890) : fexpr__49889.call(null,G__49890));
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
}catch (e49892){var e = e49892;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50206 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50206)){
var s_50207 = temp__5735__auto___50206;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50207.onclose = (function (e){
return null;
}));

s_50207.close();

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
