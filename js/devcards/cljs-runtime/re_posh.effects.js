goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__45529_45536 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__45530_45537 = (function (datoms){
var G__45531 = cljs.core.deref(re_posh.db.store);
var G__45532 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__45531,G__45532) : posh.reagent.transact_BANG_.call(null,G__45531,G__45532));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__45529_45536,G__45530_45537) : re_frame.core.reg_fx.call(null,G__45529_45536,G__45530_45537));

//# sourceMappingURL=re_posh.effects.js.map
