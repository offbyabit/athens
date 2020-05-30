goog.provide('athens.style');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('garden.selectors');
athens.style.loading_css = (function athens$style$loading_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3rem"], null)], null)], 0))], null);
});
athens.style.main_css = (function athens$style$main_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pages-table",".pages-table",2034270426),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"11em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67864 = (function (){var G__67865 = new cljs.core.Keyword(null,"even","even",-275845692);
return (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(G__67865) : garden.selectors.nth_child.call(null,G__67865));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__67864) : garden.selectors._AMPERSAND_.call(null,G__67864));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e8e8e8"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".left-sidebar",".left-sidebar",1690489052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.27em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0.27em"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null)], 0))], null);
});
athens.style.with_classes = (function athens$style$with_classes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67871 = arguments.length;
var i__4790__auto___67872 = (0);
while(true){
if((i__4790__auto___67872 < len__4789__auto___67871)){
args__4795__auto__.push((arguments[i__4790__auto___67872]));

var G__67873 = (i__4790__auto___67872 + (1));
i__4790__auto___67872 = G__67873;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return athens.style.with_classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(athens.style.with_classes.cljs$core$IFn$_invoke$arity$variadic = (function (css_classes){
return (function() {
var athens$style$f = null;
var athens$style$f__0 = (function (){
return athens$style$f.cljs$core$IFn$_invoke$arity$1(null);
});
var athens$style$f__1 = (function (attrs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str," "),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",css_classes));
});
athens$style$f = function(attrs){
switch(arguments.length){
case 0:
return athens$style$f__0.call(this);
case 1:
return athens$style$f__1.call(this,attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$style$f.cljs$core$IFn$_invoke$arity$0 = athens$style$f__0;
athens$style$f.cljs$core$IFn$_invoke$arity$1 = athens$style$f__1;
return athens$style$f;
})()
}));

(athens.style.with_classes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(athens.style.with_classes.cljs$lang$applyTo = (function (seq67866){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67866));
}));

athens.style.with_style = (function athens$style$with_style(css_styling){
return (function() {
var athens$style$with_style_$_f = null;
var athens$style$with_style_$_f__0 = (function (){
return athens$style$with_style_$_f.cljs$core$IFn$_invoke$arity$1(null);
});
var athens$style$with_style_$_f__1 = (function (attrs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,css_styling);
});
athens$style$with_style_$_f = function(attrs){
switch(arguments.length){
case 0:
return athens$style$with_style_$_f__0.call(this);
case 1:
return athens$style$with_style_$_f__1.call(this,attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$style$with_style_$_f.cljs$core$IFn$_invoke$arity$0 = athens$style$with_style_$_f__0;
athens$style$with_style_$_f.cljs$core$IFn$_invoke$arity$1 = athens$style$with_style_$_f__1;
return athens$style$with_style_$_f;
})()
});
athens.style._PLUS_left_sidebar = athens.style.with_classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["left-sidebar"], 0));
athens.style._PLUS_pages_table = athens.style.with_classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pages-table"], 0));
athens.style._PLUS_unknown_date = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#595959"], null));
athens.style.COLORS = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"blue","blue",-622100620),"#0075E1",new cljs.core.Keyword(null,"orange","orange",73816386),"#F9A132",new cljs.core.Keyword(null,"red","red",-969428204),"#D20000",new cljs.core.Keyword(null,"green","green",-945526839),"#009E23",new cljs.core.Keyword(null,"dark-gray","dark-gray",318752463),"#322F38",new cljs.core.Keyword(null,"warm-gray","warm-gray",-1896212610),"#433F38",new cljs.core.Keyword(null,"ivory","ivory",-1259182451),"#EFEDEB",new cljs.core.Keyword(null,"white","white",-483998618),"#FFFFFF"], null);
athens.style.OPACITIES = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"100","100",943295053),(1),new cljs.core.Keyword(null,"75","75",389757224),0.75,new cljs.core.Keyword(null,"50","50",-510472304),0.5,new cljs.core.Keyword(null,"25","25",-1028288238),0.25,new cljs.core.Keyword(null,"1","1",-521621649),0.1], null);
athens.style._PLUS_blue_bg = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__67867 = new cljs.core.Keyword(null,"blue","blue",-622100620);
return (athens.style.COLORS.cljs$core$IFn$_invoke$arity$1 ? athens.style.COLORS.cljs$core$IFn$_invoke$arity$1(G__67867) : athens.style.COLORS.call(null,G__67867));
})()], null));
athens.style._PLUS_red_bg = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__67868 = new cljs.core.Keyword(null,"red","red",-969428204);
return (athens.style.COLORS.cljs$core$IFn$_invoke$arity$1 ? athens.style.COLORS.cljs$core$IFn$_invoke$arity$1(G__67868) : athens.style.COLORS.call(null,G__67868));
})()], null));
athens.style._PLUS_orange_bg = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__67869 = new cljs.core.Keyword(null,"orange","orange",73816386);
return (athens.style.COLORS.cljs$core$IFn$_invoke$arity$1 ? athens.style.COLORS.cljs$core$IFn$_invoke$arity$1(G__67869) : athens.style.COLORS.call(null,G__67869));
})()], null));
athens.style._PLUS_green_bg = athens.style.with_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__67870 = new cljs.core.Keyword(null,"green","green",-945526839);
return (athens.style.COLORS.cljs$core$IFn$_invoke$arity$1 ? athens.style.COLORS.cljs$core$IFn$_invoke$arity$1(G__67870) : athens.style.COLORS.call(null,G__67870));
})()], null));

//# sourceMappingURL=athens.style.js.map
