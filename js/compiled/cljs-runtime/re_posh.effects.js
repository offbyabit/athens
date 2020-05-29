goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__71150_71158 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__71151_71159 = (function (datoms){
var G__71153 = cljs.core.deref(re_posh.db.store);
var G__71154 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__71153,G__71154) : posh.reagent.transact_BANG_.call(null,G__71153,G__71154));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__71150_71158,G__71151_71159) : re_frame.core.reg_fx.call(null,G__71150_71158,G__71151_71159));

//# sourceMappingURL=re_posh.effects.js.map
