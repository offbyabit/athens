goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__44543 = cljs.core.seq(item);
var chunk__44544 = null;
var count__44545 = (0);
var i__44546 = (0);
while(true){
if((i__44546 < count__44545)){
var it = chunk__44544.cljs$core$IIndexed$_nth$arity$2(null,i__44546);
arr.push(it);


var G__44616 = seq__44543;
var G__44617 = chunk__44544;
var G__44618 = count__44545;
var G__44619 = (i__44546 + (1));
seq__44543 = G__44616;
chunk__44544 = G__44617;
count__44545 = G__44618;
i__44546 = G__44619;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44543);
if(temp__5735__auto__){
var seq__44543__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44543__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44543__$1);
var G__44620 = cljs.core.chunk_rest(seq__44543__$1);
var G__44621 = c__4609__auto__;
var G__44622 = cljs.core.count(c__4609__auto__);
var G__44623 = (0);
seq__44543 = G__44620;
chunk__44544 = G__44621;
count__44545 = G__44622;
i__44546 = G__44623;
continue;
} else {
var it = cljs.core.first(seq__44543__$1);
arr.push(it);


var G__44628 = cljs.core.next(seq__44543__$1);
var G__44629 = null;
var G__44630 = (0);
var G__44631 = (0);
seq__44543 = G__44628;
chunk__44544 = G__44629;
count__44545 = G__44630;
i__44546 = G__44631;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44547){
var vec__44548 = p__44547;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44548,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__44551 = struct;
var seq__44552 = cljs.core.seq(vec__44551);
var first__44553 = cljs.core.first(seq__44552);
var seq__44552__$1 = cljs.core.next(seq__44552);
var tag = first__44553;
var first__44553__$1 = cljs.core.first(seq__44552__$1);
var seq__44552__$2 = cljs.core.next(seq__44552__$1);
var attrs = first__44553__$1;
var children = seq__44552__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__44554_44636 = cljs.core.seq(children);
var chunk__44555_44637 = null;
var count__44556_44638 = (0);
var i__44557_44639 = (0);
while(true){
if((i__44557_44639 < count__44556_44638)){
var child_44640 = chunk__44555_44637.cljs$core$IIndexed$_nth$arity$2(null,i__44557_44639);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_44640) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_44640)));


var G__44641 = seq__44554_44636;
var G__44642 = chunk__44555_44637;
var G__44643 = count__44556_44638;
var G__44644 = (i__44557_44639 + (1));
seq__44554_44636 = G__44641;
chunk__44555_44637 = G__44642;
count__44556_44638 = G__44643;
i__44557_44639 = G__44644;
continue;
} else {
var temp__5735__auto___44645 = cljs.core.seq(seq__44554_44636);
if(temp__5735__auto___44645){
var seq__44554_44646__$1 = temp__5735__auto___44645;
if(cljs.core.chunked_seq_QMARK_(seq__44554_44646__$1)){
var c__4609__auto___44647 = cljs.core.chunk_first(seq__44554_44646__$1);
var G__44648 = cljs.core.chunk_rest(seq__44554_44646__$1);
var G__44649 = c__4609__auto___44647;
var G__44650 = cljs.core.count(c__4609__auto___44647);
var G__44651 = (0);
seq__44554_44636 = G__44648;
chunk__44555_44637 = G__44649;
count__44556_44638 = G__44650;
i__44557_44639 = G__44651;
continue;
} else {
var child_44652 = cljs.core.first(seq__44554_44646__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_44652) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_44652)));


var G__44653 = cljs.core.next(seq__44554_44646__$1);
var G__44654 = null;
var G__44655 = (0);
var G__44656 = (0);
seq__44554_44636 = G__44653;
chunk__44555_44637 = G__44654;
count__44556_44638 = G__44655;
i__44557_44639 = G__44656;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$console$iter__44563(s__44564){
return (new cljs.core.LazySeq(null,(function (){
var s__44564__$1 = s__44564;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44564__$1);
if(temp__5735__auto__){
var s__44564__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44564__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44564__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44566 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44565 = (0);
while(true){
if((i__44565 < size__4581__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44565);
cljs.core.chunk_append(b__44566,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__44657 = (i__44565 + (1));
i__44565 = G__44657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44566),shadow$cljs$devtools$client$console$iter__44563(cljs.core.chunk_rest(s__44564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44566),null);
}
} else {
var value = cljs.core.first(s__44564__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__44563(cljs.core.rest(s__44564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$console$iter__44571(s__44572){
return (new cljs.core.LazySeq(null,(function (){
var s__44572__$1 = s__44572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44572__$1);
if(temp__5735__auto__){
var s__44572__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44572__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44572__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44574 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44573 = (0);
while(true){
if((i__44573 < size__4581__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44573);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__44574,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__44666 = (i__44573 + (1));
i__44573 = G__44666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44574),shadow$cljs$devtools$client$console$iter__44571(cljs.core.chunk_rest(s__44572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44574),null);
}
} else {
var key = cljs.core.first(s__44572__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__44571(cljs.core.rest(s__44572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e44578){var e = e44578;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5735__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__44606 = f;
G__44606.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__44606.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__44606.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__44606.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__44606.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__44606;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44607_SHARP_){
return goog.object.get(p1__44607_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
