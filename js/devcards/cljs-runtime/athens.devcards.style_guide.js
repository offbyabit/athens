goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('garden.stylesheet');
athens.devcards.style_guide.log = console.log;
athens.devcards.style_guide._PLUS_flex_center = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null));
athens.devcards.style_guide._PLUS_flex_space_between = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null));
athens.devcards.style_guide._PLUS_colors_container = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(athens.devcards.style_guide._PLUS_flex_space_between,athens.style.with_style(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#E5E5E5",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)));
athens.devcards.style_guide._PLUS_circle = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(40)], null));
athens.devcards.style_guide.colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"dark-gray","dark-gray",318752463),new cljs.core.Keyword(null,"warm-gray","warm-gray",-1896212610),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"white","white",-483998618)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide68281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide68281 = (function (meta68282){
this.meta68282 = meta68282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide68281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68283,meta68282__$1){
var self__ = this;
var _68283__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68281(meta68282__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68283){
var self__ = this;
var _68283__$1 = this;
return self__.meta68282;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__62869__auto__,devcard_opts__62870__auto__){
var self__ = this;
var this__62869__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__62870__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__62888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(athens.devcards.style_guide._PLUS_colors_container.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.style_guide._PLUS_colors_container.cljs$core$IFn$_invoke$arity$0() : athens.devcards.style_guide._PLUS_colors_container.call(null)),(function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__68284(s__68285){
return (new cljs.core.LazySeq(null,(function (){
var s__68285__$1 = s__68285;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68285__$1);
if(temp__5735__auto__){
var s__68285__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68285__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68285__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68287 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68286 = (0);
while(true){
if((i__68286 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68286);
cljs.core.chunk_append(b__68287,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(athens.devcards.style_guide._PLUS_flex_center.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.style_guide._PLUS_flex_center.cljs$core$IFn$_invoke$arity$0() : athens.devcards.style_guide._PLUS_flex_center.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.COLORS) : c.call(null,athens.style.COLORS)),new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(40)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.COLORS) : c.call(null,athens.style.COLORS))], null)], null));

var G__68300 = (i__68286 + (1));
i__68286 = G__68300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68287),athens$devcards$style_guide$iter__68284(cljs.core.chunk_rest(s__68285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68287),null);
}
} else {
var c = cljs.core.first(s__68285__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(athens.devcards.style_guide._PLUS_flex_center.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.style_guide._PLUS_flex_center.cljs$core$IFn$_invoke$arity$0() : athens.devcards.style_guide._PLUS_flex_center.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.COLORS) : c.call(null,athens.style.COLORS)),new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(40)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.COLORS) : c.call(null,athens.style.COLORS))], null)], null),athens$devcards$style_guide$iter__68284(cljs.core.rest(s__68285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.colors);
})()], null);
if(cljs.core.fn_QMARK_(v__62888__auto__)){
return (function (data_atom__62889__auto__,owner__62890__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__62888__auto__,data_atom__62889__auto__,owner__62890__auto__], null));
});
} else {
return reagent.core.as_element(v__62888__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__62870__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68282","meta68282",-488751656,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide68281");

(athens.devcards.style_guide.t_athens$devcards$style_guide68281.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide68281");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide68281.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide68281 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide68281(meta68282){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68281(meta68282));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide68281(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.style_guide.main_css = (function athens$devcards$style_guide$main_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"50px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"65px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"38px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"49px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"21px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"27px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null)], null)], 0))], null);
});
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide68288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide68288 = (function (meta68289){
this.meta68289 = meta68289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide68288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68290,meta68289__$1){
var self__ = this;
var _68290__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68288(meta68289__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68290){
var self__ = this;
var _68290__$1 = this;
return self__.meta68289;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__62869__auto__,devcard_opts__62870__auto__){
var self__ = this;
var this__62869__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__62870__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__62888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.style_guide.main_css], null),(function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__68291(s__68292){
return (new cljs.core.LazySeq(null,(function (){
var s__68292__$1 = s__68292;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68292__$1);
if(temp__5735__auto__){
var s__68292__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68292__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68292__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68294 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68293 = (0);
while(true){
if((i__68293 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68293);
cljs.core.chunk_append(b__68294,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(athens.devcards.style_guide._PLUS_flex_space_between.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.style_guide._PLUS_flex_space_between.cljs$core$IFn$_invoke$arity$0() : athens.devcards.style_guide._PLUS_flex_space_between.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__68309 = (i__68293 + (1));
i__68293 = G__68309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68294),athens$devcards$style_guide$iter__68291(cljs.core.chunk_rest(s__68292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68294),null);
}
} else {
var t = cljs.core.first(s__68292__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(athens.devcards.style_guide._PLUS_flex_space_between.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.style_guide._PLUS_flex_space_between.cljs$core$IFn$_invoke$arity$0() : athens.devcards.style_guide._PLUS_flex_space_between.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__68291(cljs.core.rest(s__68292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})()], null);
if(cljs.core.fn_QMARK_(v__62888__auto__)){
return (function (data_atom__62889__auto__,owner__62890__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__62888__auto__,data_atom__62889__auto__,owner__62890__auto__], null));
});
} else {
return reagent.core.as_element(v__62888__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__62870__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68289","meta68289",554949444,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide68288");

(athens.devcards.style_guide.t_athens$devcards$style_guide68288.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide68288");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide68288.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide68288 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide68288(meta68289){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68288(meta68289));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide68288(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Font","Font",1319999918)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Font",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Not sure how to import fonts.\n\n  resources\n  - https://fonts.googleapis.com/css2?family=IBM+Plex+Sans\n  - https://fonts.google.com/specimen/IBM+Plex+Sans\n  - https://cljdoc.org/d/garden/garden/1.3.10/api/garden.stylesheet\n  - https://gist.github.com/paulkoegel/1c17be411c26d959fc6d75776d86e4f8",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Material-UI-Icons","Material-UI-Icons",-1768918071)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Material-UI-Icons",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Not sure how to import Material UI icons.\n  - Author of shadow-cljs has https://github.com/cljsjs/packages/tree/master/material-ui-icons\n  - but this library was deprecated on npm https://www.npmjs.com/package/material-ui-icons\n\n  resources\n  - https://shadow-cljs.github.io/docs/UsersGuide.html#cljsjs\n  - https://shadow-cljs.github.io/docs/UsersGuide.html#infer-externs\n  - https://github.com/cljsjs/packages/tree/master/material-ui-icons\n  - https://material-ui.com/components/icons/#svg-material-icons\n  - https://www.npmjs.com/package/@material-ui/icons",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide68295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide68295 = (function (meta68296){
this.meta68296 = meta68296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide68295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68297,meta68296__$1){
var self__ = this;
var _68297__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68295(meta68296__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68297){
var self__ = this;
var _68297__$1 = this;
return self__.meta68296;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__62869__auto__,devcard_opts__62870__auto__){
var self__ = this;
var this__62869__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__62870__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__62888__auto__ = null;
if(cljs.core.fn_QMARK_(v__62888__auto__)){
return (function (data_atom__62889__auto__,owner__62890__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__62888__auto__,data_atom__62889__auto__,owner__62890__auto__], null));
});
} else {
return reagent.core.as_element(v__62888__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__62870__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68296","meta68296",1902631368,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide68295");

(athens.devcards.style_guide.t_athens$devcards$style_guide68295.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide68295");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide68295.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide68295 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide68295(meta68296){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide68295(meta68296));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide68295(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
