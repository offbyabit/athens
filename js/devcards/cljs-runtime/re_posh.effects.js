goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__60289_60293 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60290_60294 = (function (datoms){
var G__60291 = cljs.core.deref(re_posh.db.store);
var G__60292 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__60291,G__60292) : posh.reagent.transact_BANG_.call(null,G__60291,G__60292));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60289_60293,G__60290_60294) : re_frame.core.reg_fx.call(null,G__60289_60293,G__60290_60294));

//# sourceMappingURL=re_posh.effects.js.map
