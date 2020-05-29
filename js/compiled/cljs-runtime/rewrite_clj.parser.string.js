goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('goog.string');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.set("");

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore(reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5733__auto__ = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
if(((cljs.core.not(escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into(lines,buf);
} else {
if((c === "\n")){
var G__59386 = escape_QMARK_;
var G__59387 = rewrite_clj.parser.string.flush_into(lines,buf);
escape_QMARK_ = G__59386;
lines = G__59387;
continue;
} else {
buf.append(c);

var G__59388 = ((cljs.core.not(escape_QMARK_)) && ((c === "\\")));
var G__59389 = lines;
escape_QMARK_ = G__59388;
lines = G__59389;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
var G__59383 = rewrite_clj.parser.string.read_string_data(reader);
return (rewrite_clj.node.string_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string_node.cljs$core$IFn$_invoke$arity$1(G__59383) : rewrite_clj.node.string_node.call(null,G__59383));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var lines = rewrite_clj.parser.string.read_string_data(reader);
var regex = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
var G__59384 = cljs.core.re_pattern(regex);
var G__59385 = ["#\"",regex,"\""].join('');
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$2(G__59384,G__59385) : rewrite_clj.node.token_node.call(null,G__59384,G__59385));
});

//# sourceMappingURL=rewrite_clj.parser.string.js.map
