goog.provide('athens.style');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('garden.selectors');
athens.style.loading_css = (function athens$style$loading_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3rem"], null)], null)], 0))], null);
});
athens.style.main_css = (function athens$style$main_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pages-table",".pages-table",2034270426),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"11em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54110 = (function (){var G__54111 = new cljs.core.Keyword(null,"even","even",-275845692);
return (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(G__54111) : garden.selectors.nth_child.call(null,G__54111));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__54110) : garden.selectors._AMPERSAND_.call(null,G__54110));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e8e8e8"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".left-sidebar",".left-sidebar",1690489052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.27em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0.27em"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null)], 0))], null);
});
athens.style.with_classes = (function athens$style$with_classes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54119 = arguments.length;
var i__4790__auto___54120 = (0);
while(true){
if((i__4790__auto___54120 < len__4789__auto___54119)){
args__4795__auto__.push((arguments[i__4790__auto___54120]));

var G__54121 = (i__4790__auto___54120 + (1));
i__4790__auto___54120 = G__54121;
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
(athens.style.with_classes.cljs$lang$applyTo = (function (seq54115){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54115));
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

//# sourceMappingURL=athens.style.js.map
