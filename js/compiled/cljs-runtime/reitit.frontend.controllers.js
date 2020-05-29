goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__75181,match){
var map__75182 = p__75181;
var map__75182__$1 = (((((!((map__75182 == null))))?(((((map__75182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75182):map__75182);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75182__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75182__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75182__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__75184(s__75185){
return (new cljs.core.LazySeq(null,(function (){
var s__75185__$1 = s__75185;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75185__$1);
if(temp__5735__auto__){
var s__75185__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75185__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__75185__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__75187 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__75186 = (0);
while(true){
if((i__75186 < size__4581__auto__)){
var vec__75188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__75186);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75188,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75188,(1),null);
cljs.core.chunk_append(b__75187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__75204 = (i__75186 + (1));
i__75186 = G__75204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75187),reitit$frontend$controllers$get_identity_$_iter__75184(cljs.core.chunk_rest(s__75185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75187),null);
}
} else {
var vec__75191 = cljs.core.first(s__75185__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75191,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75191,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__75184(cljs.core.rest(s__75185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__75194 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75194) : f.call(null,G__75194));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__75195_75205 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__75196_75206 = null;
var count__75197_75207 = (0);
var i__75198_75208 = (0);
while(true){
if((i__75198_75208 < count__75197_75207)){
var controller_75209 = chunk__75196_75206.cljs$core$IIndexed$_nth$arity$2(null,i__75198_75208);
reitit.frontend.controllers.apply_controller(controller_75209,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__75210 = seq__75195_75205;
var G__75211 = chunk__75196_75206;
var G__75212 = count__75197_75207;
var G__75213 = (i__75198_75208 + (1));
seq__75195_75205 = G__75210;
chunk__75196_75206 = G__75211;
count__75197_75207 = G__75212;
i__75198_75208 = G__75213;
continue;
} else {
var temp__5735__auto___75214 = cljs.core.seq(seq__75195_75205);
if(temp__5735__auto___75214){
var seq__75195_75215__$1 = temp__5735__auto___75214;
if(cljs.core.chunked_seq_QMARK_(seq__75195_75215__$1)){
var c__4609__auto___75216 = cljs.core.chunk_first(seq__75195_75215__$1);
var G__75217 = cljs.core.chunk_rest(seq__75195_75215__$1);
var G__75218 = c__4609__auto___75216;
var G__75219 = cljs.core.count(c__4609__auto___75216);
var G__75220 = (0);
seq__75195_75205 = G__75217;
chunk__75196_75206 = G__75218;
count__75197_75207 = G__75219;
i__75198_75208 = G__75220;
continue;
} else {
var controller_75221 = cljs.core.first(seq__75195_75215__$1);
reitit.frontend.controllers.apply_controller(controller_75221,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__75222 = cljs.core.next(seq__75195_75215__$1);
var G__75223 = null;
var G__75224 = (0);
var G__75225 = (0);
seq__75195_75205 = G__75222;
chunk__75196_75206 = G__75223;
count__75197_75207 = G__75224;
i__75198_75208 = G__75225;
continue;
}
} else {
}
}
break;
}

var seq__75199_75226 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__75200_75227 = null;
var count__75201_75228 = (0);
var i__75202_75229 = (0);
while(true){
if((i__75202_75229 < count__75201_75228)){
var controller_75230 = chunk__75200_75227.cljs$core$IIndexed$_nth$arity$2(null,i__75202_75229);
reitit.frontend.controllers.apply_controller(controller_75230,new cljs.core.Keyword(null,"start","start",-355208981));


var G__75231 = seq__75199_75226;
var G__75232 = chunk__75200_75227;
var G__75233 = count__75201_75228;
var G__75234 = (i__75202_75229 + (1));
seq__75199_75226 = G__75231;
chunk__75200_75227 = G__75232;
count__75201_75228 = G__75233;
i__75202_75229 = G__75234;
continue;
} else {
var temp__5735__auto___75235 = cljs.core.seq(seq__75199_75226);
if(temp__5735__auto___75235){
var seq__75199_75236__$1 = temp__5735__auto___75235;
if(cljs.core.chunked_seq_QMARK_(seq__75199_75236__$1)){
var c__4609__auto___75237 = cljs.core.chunk_first(seq__75199_75236__$1);
var G__75238 = cljs.core.chunk_rest(seq__75199_75236__$1);
var G__75239 = c__4609__auto___75237;
var G__75240 = cljs.core.count(c__4609__auto___75237);
var G__75241 = (0);
seq__75199_75226 = G__75238;
chunk__75200_75227 = G__75239;
count__75201_75228 = G__75240;
i__75202_75229 = G__75241;
continue;
} else {
var controller_75242 = cljs.core.first(seq__75199_75236__$1);
reitit.frontend.controllers.apply_controller(controller_75242,new cljs.core.Keyword(null,"start","start",-355208981));


var G__75243 = cljs.core.next(seq__75199_75236__$1);
var G__75244 = null;
var G__75245 = (0);
var G__75246 = (0);
seq__75199_75226 = G__75243;
chunk__75200_75227 = G__75244;
count__75201_75228 = G__75245;
i__75202_75229 = G__75246;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
