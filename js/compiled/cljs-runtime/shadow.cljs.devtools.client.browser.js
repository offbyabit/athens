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
var len__4789__auto___67864 = arguments.length;
var i__4790__auto___67865 = (0);
while(true){
if((i__4790__auto___67865 < len__4789__auto___67864)){
args__4795__auto__.push((arguments[i__4790__auto___67865]));

var G__67866 = (i__4790__auto___67865 + (1));
i__4790__auto___67865 = G__67866;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67495){
var G__67496 = cljs.core.first(seq67495);
var seq67495__$1 = cljs.core.next(seq67495);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67496,seq67495__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__67498){
var map__67499 = p__67498;
var map__67499__$1 = (((((!((map__67499 == null))))?(((((map__67499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67499):map__67499);
var src = map__67499__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67499__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67499__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__67509 = cljs.core.seq(sources);
var chunk__67510 = null;
var count__67511 = (0);
var i__67512 = (0);
while(true){
if((i__67512 < count__67511)){
var map__67531 = chunk__67510.cljs$core$IIndexed$_nth$arity$2(null,i__67512);
var map__67531__$1 = (((((!((map__67531 == null))))?(((((map__67531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67531):map__67531);
var src = map__67531__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67531__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67531__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67531__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67531__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67535){var e_67867 = e67535;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67867);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67867.message)].join('')));
}

var G__67868 = seq__67509;
var G__67869 = chunk__67510;
var G__67870 = count__67511;
var G__67871 = (i__67512 + (1));
seq__67509 = G__67868;
chunk__67510 = G__67869;
count__67511 = G__67870;
i__67512 = G__67871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67509);
if(temp__5735__auto__){
var seq__67509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67509__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67509__$1);
var G__67872 = cljs.core.chunk_rest(seq__67509__$1);
var G__67873 = c__4609__auto__;
var G__67874 = cljs.core.count(c__4609__auto__);
var G__67875 = (0);
seq__67509 = G__67872;
chunk__67510 = G__67873;
count__67511 = G__67874;
i__67512 = G__67875;
continue;
} else {
var map__67536 = cljs.core.first(seq__67509__$1);
var map__67536__$1 = (((((!((map__67536 == null))))?(((((map__67536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67536):map__67536);
var src = map__67536__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67536__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67536__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67536__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67536__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e67538){var e_67876 = e67538;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67876);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67876.message)].join('')));
}

var G__67877 = cljs.core.next(seq__67509__$1);
var G__67878 = null;
var G__67879 = (0);
var G__67880 = (0);
seq__67509 = G__67877;
chunk__67510 = G__67878;
count__67511 = G__67879;
i__67512 = G__67880;
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
var seq__67543 = cljs.core.seq(js_requires);
var chunk__67544 = null;
var count__67545 = (0);
var i__67546 = (0);
while(true){
if((i__67546 < count__67545)){
var js_ns = chunk__67544.cljs$core$IIndexed$_nth$arity$2(null,i__67546);
var require_str_67881 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67881);


var G__67882 = seq__67543;
var G__67883 = chunk__67544;
var G__67884 = count__67545;
var G__67885 = (i__67546 + (1));
seq__67543 = G__67882;
chunk__67544 = G__67883;
count__67545 = G__67884;
i__67546 = G__67885;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67543);
if(temp__5735__auto__){
var seq__67543__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67543__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67543__$1);
var G__67886 = cljs.core.chunk_rest(seq__67543__$1);
var G__67887 = c__4609__auto__;
var G__67888 = cljs.core.count(c__4609__auto__);
var G__67889 = (0);
seq__67543 = G__67886;
chunk__67544 = G__67887;
count__67545 = G__67888;
i__67546 = G__67889;
continue;
} else {
var js_ns = cljs.core.first(seq__67543__$1);
var require_str_67890 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67890);


var G__67891 = cljs.core.next(seq__67543__$1);
var G__67892 = null;
var G__67893 = (0);
var G__67894 = (0);
seq__67543 = G__67891;
chunk__67544 = G__67892;
count__67545 = G__67893;
i__67546 = G__67894;
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
var G__67553 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__67553) : callback.call(null,G__67553));
} else {
var G__67554 = shadow.cljs.devtools.client.env.files_url();
var G__67555 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__67556 = "POST";
var G__67557 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__67558 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67554,G__67555,G__67556,G__67557,G__67558);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__67563){
var map__67564 = p__67563;
var map__67564__$1 = (((((!((map__67564 == null))))?(((((map__67564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67564):map__67564);
var msg = map__67564__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__67571 = info;
var map__67571__$1 = (((((!((map__67571 == null))))?(((((map__67571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67571):map__67571);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67571__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67571__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67574(s__67575){
return (new cljs.core.LazySeq(null,(function (){
var s__67575__$1 = s__67575;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67575__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__67581 = cljs.core.first(xs__6292__auto__);
var map__67581__$1 = (((((!((map__67581 == null))))?(((((map__67581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67581):map__67581);
var src = map__67581__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__67575__$1,map__67581,map__67581__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67571,map__67571__$1,sources,compiled,map__67564,map__67564__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67574_$_iter__67576(s__67577){
return (new cljs.core.LazySeq(null,((function (s__67575__$1,map__67581,map__67581__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67571,map__67571__$1,sources,compiled,map__67564,map__67564__$1,msg,info,reload_info){
return (function (){
var s__67577__$1 = s__67577;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67577__$1);
if(temp__5735__auto____$1){
var s__67577__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67577__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67577__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67579 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67578 = (0);
while(true){
if((i__67578 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67578);
cljs.core.chunk_append(b__67579,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__67900 = (i__67578 + (1));
i__67578 = G__67900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67579),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67574_$_iter__67576(cljs.core.chunk_rest(s__67577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67579),null);
}
} else {
var warning = cljs.core.first(s__67577__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67574_$_iter__67576(cljs.core.rest(s__67577__$2)));
}
} else {
return null;
}
break;
}
});})(s__67575__$1,map__67581,map__67581__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67571,map__67571__$1,sources,compiled,map__67564,map__67564__$1,msg,info,reload_info))
,null,null));
});})(s__67575__$1,map__67581,map__67581__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67571,map__67571__$1,sources,compiled,map__67564,map__67564__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67574(cljs.core.rest(s__67575__$1)));
} else {
var G__67901 = cljs.core.rest(s__67575__$1);
s__67575__$1 = G__67901;
continue;
}
} else {
var G__67902 = cljs.core.rest(s__67575__$1);
s__67575__$1 = G__67902;
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
var seq__67587_67904 = cljs.core.seq(warnings);
var chunk__67588_67905 = null;
var count__67589_67906 = (0);
var i__67590_67907 = (0);
while(true){
if((i__67590_67907 < count__67589_67906)){
var map__67597_67908 = chunk__67588_67905.cljs$core$IIndexed$_nth$arity$2(null,i__67590_67907);
var map__67597_67909__$1 = (((((!((map__67597_67908 == null))))?(((((map__67597_67908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67597_67908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67597_67908):map__67597_67908);
var w_67910 = map__67597_67909__$1;
var msg_67911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67597_67909__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67597_67909__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67597_67909__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67597_67909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67914)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67912),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67913),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67911__$1)].join(''));


var G__67915 = seq__67587_67904;
var G__67916 = chunk__67588_67905;
var G__67917 = count__67589_67906;
var G__67918 = (i__67590_67907 + (1));
seq__67587_67904 = G__67915;
chunk__67588_67905 = G__67916;
count__67589_67906 = G__67917;
i__67590_67907 = G__67918;
continue;
} else {
var temp__5735__auto___67919 = cljs.core.seq(seq__67587_67904);
if(temp__5735__auto___67919){
var seq__67587_67920__$1 = temp__5735__auto___67919;
if(cljs.core.chunked_seq_QMARK_(seq__67587_67920__$1)){
var c__4609__auto___67921 = cljs.core.chunk_first(seq__67587_67920__$1);
var G__67922 = cljs.core.chunk_rest(seq__67587_67920__$1);
var G__67923 = c__4609__auto___67921;
var G__67924 = cljs.core.count(c__4609__auto___67921);
var G__67925 = (0);
seq__67587_67904 = G__67922;
chunk__67588_67905 = G__67923;
count__67589_67906 = G__67924;
i__67590_67907 = G__67925;
continue;
} else {
var map__67599_67926 = cljs.core.first(seq__67587_67920__$1);
var map__67599_67927__$1 = (((((!((map__67599_67926 == null))))?(((((map__67599_67926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67599_67926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67599_67926):map__67599_67926);
var w_67928 = map__67599_67927__$1;
var msg_67929__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67599_67927__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67599_67927__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67599_67927__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67599_67927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67932)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67930),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67931),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67929__$1)].join(''));


var G__67933 = cljs.core.next(seq__67587_67920__$1);
var G__67934 = null;
var G__67935 = (0);
var G__67936 = (0);
seq__67587_67904 = G__67933;
chunk__67588_67905 = G__67934;
count__67589_67906 = G__67935;
i__67590_67907 = G__67936;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67602){
var map__67604 = p__67602;
var map__67604__$1 = (((((!((map__67604 == null))))?(((((map__67604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67604):map__67604);
var src = map__67604__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67604__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67604__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67612){
var map__67613 = p__67612;
var map__67613__$1 = (((((!((map__67613 == null))))?(((((map__67613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67613):map__67613);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67613__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67616){
var map__67617 = p__67616;
var map__67617__$1 = (((((!((map__67617 == null))))?(((((map__67617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67617):map__67617);
var rc = map__67617__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67617__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__67562_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67562_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__67630){
var map__67632 = p__67630;
var map__67632__$1 = (((((!((map__67632 == null))))?(((((map__67632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67632):map__67632);
var msg = map__67632__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67632__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67647 = cljs.core.seq(updates);
var chunk__67649 = null;
var count__67650 = (0);
var i__67651 = (0);
while(true){
if((i__67651 < count__67650)){
var path = chunk__67649.cljs$core$IIndexed$_nth$arity$2(null,i__67651);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67729_67938 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67732_67939 = null;
var count__67733_67940 = (0);
var i__67734_67941 = (0);
while(true){
if((i__67734_67941 < count__67733_67940)){
var node_67942 = chunk__67732_67939.cljs$core$IIndexed$_nth$arity$2(null,i__67734_67941);
var path_match_67943 = shadow.cljs.devtools.client.browser.match_paths(node_67942.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67943)){
var new_link_67944 = (function (){var G__67741 = node_67942.cloneNode(true);
G__67741.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67943),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67741;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67943], 0));

goog.dom.insertSiblingAfter(new_link_67944,node_67942);

goog.dom.removeNode(node_67942);


var G__67945 = seq__67729_67938;
var G__67946 = chunk__67732_67939;
var G__67947 = count__67733_67940;
var G__67948 = (i__67734_67941 + (1));
seq__67729_67938 = G__67945;
chunk__67732_67939 = G__67946;
count__67733_67940 = G__67947;
i__67734_67941 = G__67948;
continue;
} else {
var G__67949 = seq__67729_67938;
var G__67950 = chunk__67732_67939;
var G__67951 = count__67733_67940;
var G__67952 = (i__67734_67941 + (1));
seq__67729_67938 = G__67949;
chunk__67732_67939 = G__67950;
count__67733_67940 = G__67951;
i__67734_67941 = G__67952;
continue;
}
} else {
var temp__5735__auto___67953 = cljs.core.seq(seq__67729_67938);
if(temp__5735__auto___67953){
var seq__67729_67954__$1 = temp__5735__auto___67953;
if(cljs.core.chunked_seq_QMARK_(seq__67729_67954__$1)){
var c__4609__auto___67955 = cljs.core.chunk_first(seq__67729_67954__$1);
var G__67956 = cljs.core.chunk_rest(seq__67729_67954__$1);
var G__67957 = c__4609__auto___67955;
var G__67958 = cljs.core.count(c__4609__auto___67955);
var G__67959 = (0);
seq__67729_67938 = G__67956;
chunk__67732_67939 = G__67957;
count__67733_67940 = G__67958;
i__67734_67941 = G__67959;
continue;
} else {
var node_67960 = cljs.core.first(seq__67729_67954__$1);
var path_match_67961 = shadow.cljs.devtools.client.browser.match_paths(node_67960.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67961)){
var new_link_67962 = (function (){var G__67758 = node_67960.cloneNode(true);
G__67758.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67961),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67758;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67961], 0));

goog.dom.insertSiblingAfter(new_link_67962,node_67960);

goog.dom.removeNode(node_67960);


var G__67963 = cljs.core.next(seq__67729_67954__$1);
var G__67964 = null;
var G__67965 = (0);
var G__67966 = (0);
seq__67729_67938 = G__67963;
chunk__67732_67939 = G__67964;
count__67733_67940 = G__67965;
i__67734_67941 = G__67966;
continue;
} else {
var G__67967 = cljs.core.next(seq__67729_67954__$1);
var G__67968 = null;
var G__67969 = (0);
var G__67970 = (0);
seq__67729_67938 = G__67967;
chunk__67732_67939 = G__67968;
count__67733_67940 = G__67969;
i__67734_67941 = G__67970;
continue;
}
}
} else {
}
}
break;
}


var G__67971 = seq__67647;
var G__67972 = chunk__67649;
var G__67973 = count__67650;
var G__67974 = (i__67651 + (1));
seq__67647 = G__67971;
chunk__67649 = G__67972;
count__67650 = G__67973;
i__67651 = G__67974;
continue;
} else {
var G__67975 = seq__67647;
var G__67976 = chunk__67649;
var G__67977 = count__67650;
var G__67978 = (i__67651 + (1));
seq__67647 = G__67975;
chunk__67649 = G__67976;
count__67650 = G__67977;
i__67651 = G__67978;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67647);
if(temp__5735__auto__){
var seq__67647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67647__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67647__$1);
var G__67979 = cljs.core.chunk_rest(seq__67647__$1);
var G__67980 = c__4609__auto__;
var G__67981 = cljs.core.count(c__4609__auto__);
var G__67982 = (0);
seq__67647 = G__67979;
chunk__67649 = G__67980;
count__67650 = G__67981;
i__67651 = G__67982;
continue;
} else {
var path = cljs.core.first(seq__67647__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67765_67983 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67768_67984 = null;
var count__67769_67985 = (0);
var i__67770_67986 = (0);
while(true){
if((i__67770_67986 < count__67769_67985)){
var node_67987 = chunk__67768_67984.cljs$core$IIndexed$_nth$arity$2(null,i__67770_67986);
var path_match_67988 = shadow.cljs.devtools.client.browser.match_paths(node_67987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67988)){
var new_link_67989 = (function (){var G__67806 = node_67987.cloneNode(true);
G__67806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67806;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67988], 0));

goog.dom.insertSiblingAfter(new_link_67989,node_67987);

goog.dom.removeNode(node_67987);


var G__67990 = seq__67765_67983;
var G__67991 = chunk__67768_67984;
var G__67992 = count__67769_67985;
var G__67993 = (i__67770_67986 + (1));
seq__67765_67983 = G__67990;
chunk__67768_67984 = G__67991;
count__67769_67985 = G__67992;
i__67770_67986 = G__67993;
continue;
} else {
var G__67994 = seq__67765_67983;
var G__67995 = chunk__67768_67984;
var G__67996 = count__67769_67985;
var G__67997 = (i__67770_67986 + (1));
seq__67765_67983 = G__67994;
chunk__67768_67984 = G__67995;
count__67769_67985 = G__67996;
i__67770_67986 = G__67997;
continue;
}
} else {
var temp__5735__auto___67998__$1 = cljs.core.seq(seq__67765_67983);
if(temp__5735__auto___67998__$1){
var seq__67765_67999__$1 = temp__5735__auto___67998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67765_67999__$1)){
var c__4609__auto___68000 = cljs.core.chunk_first(seq__67765_67999__$1);
var G__68001 = cljs.core.chunk_rest(seq__67765_67999__$1);
var G__68002 = c__4609__auto___68000;
var G__68003 = cljs.core.count(c__4609__auto___68000);
var G__68004 = (0);
seq__67765_67983 = G__68001;
chunk__67768_67984 = G__68002;
count__67769_67985 = G__68003;
i__67770_67986 = G__68004;
continue;
} else {
var node_68005 = cljs.core.first(seq__67765_67999__$1);
var path_match_68006 = shadow.cljs.devtools.client.browser.match_paths(node_68005.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68006)){
var new_link_68007 = (function (){var G__67813 = node_68005.cloneNode(true);
G__67813.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68006),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67813;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68006], 0));

goog.dom.insertSiblingAfter(new_link_68007,node_68005);

goog.dom.removeNode(node_68005);


var G__68008 = cljs.core.next(seq__67765_67999__$1);
var G__68009 = null;
var G__68010 = (0);
var G__68011 = (0);
seq__67765_67983 = G__68008;
chunk__67768_67984 = G__68009;
count__67769_67985 = G__68010;
i__67770_67986 = G__68011;
continue;
} else {
var G__68012 = cljs.core.next(seq__67765_67999__$1);
var G__68013 = null;
var G__68014 = (0);
var G__68015 = (0);
seq__67765_67983 = G__68012;
chunk__67768_67984 = G__68013;
count__67769_67985 = G__68014;
i__67770_67986 = G__68015;
continue;
}
}
} else {
}
}
break;
}


var G__68016 = cljs.core.next(seq__67647__$1);
var G__68017 = null;
var G__68018 = (0);
var G__68019 = (0);
seq__67647 = G__68016;
chunk__67649 = G__68017;
count__67650 = G__68018;
i__67651 = G__68019;
continue;
} else {
var G__68020 = cljs.core.next(seq__67647__$1);
var G__68021 = null;
var G__68022 = (0);
var G__68023 = (0);
seq__67647 = G__68020;
chunk__67649 = G__68021;
count__67650 = G__68022;
i__67651 = G__68023;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__67826){
var map__67827 = p__67826;
var map__67827__$1 = (((((!((map__67827 == null))))?(((((map__67827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67827):map__67827);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__67829,done){
var map__67830 = p__67829;
var map__67830__$1 = (((((!((map__67830 == null))))?(((((map__67830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67830):map__67830);
var msg = map__67830__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67832){
var map__67833 = p__67832;
var map__67833__$1 = (((((!((map__67833 == null))))?(((((map__67833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67833):map__67833);
var src = map__67833__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e67835){var e = e67835;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__67837,done){
var map__67838 = p__67837;
var map__67838__$1 = (((((!((map__67838 == null))))?(((((map__67838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67838):map__67838);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67838__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__67840){
var map__67841 = p__67840;
var map__67841__$1 = (((((!((map__67841 == null))))?(((((map__67841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67841):map__67841);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67841__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67841__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__67843,done){
var map__67844 = p__67843;
var map__67844__$1 = (((((!((map__67844 == null))))?(((((map__67844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67844):map__67844);
var msg = map__67844__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__67846_68028 = type;
var G__67846_68029__$1 = (((G__67846_68028 instanceof cljs.core.Keyword))?G__67846_68028.fqn:null);
switch (G__67846_68029__$1) {
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
var G__67847 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__67848 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__67849 = "POST";
var G__67850 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__67851 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67847,G__67848,G__67849,G__67850,G__67851);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__67853 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__67852 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__67852.cljs$core$IFn$_invoke$arity$1 ? fexpr__67852.cljs$core$IFn$_invoke$arity$1(G__67853) : fexpr__67852.call(null,G__67853));
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
}catch (e67854){var e = e67854;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___68035 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___68035)){
var s_68036 = temp__5735__auto___68035;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_68036.onclose = (function (e){
return null;
}));

s_68036.close();

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
