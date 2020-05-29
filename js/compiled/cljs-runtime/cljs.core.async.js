goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__64060 = arguments.length;
switch (G__64060) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64061 = (function (f,blockable,meta64062){
this.f = f;
this.blockable = blockable;
this.meta64062 = meta64062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64063,meta64062__$1){
var self__ = this;
var _64063__$1 = this;
return (new cljs.core.async.t_cljs$core$async64061(self__.f,self__.blockable,meta64062__$1));
}));

(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64063){
var self__ = this;
var _64063__$1 = this;
return self__.meta64062;
}));

(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async64061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async64061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta64062","meta64062",-503228187,null)], null);
}));

(cljs.core.async.t_cljs$core$async64061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64061");

(cljs.core.async.t_cljs$core$async64061.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64061.
 */
cljs.core.async.__GT_t_cljs$core$async64061 = (function cljs$core$async$__GT_t_cljs$core$async64061(f__$1,blockable__$1,meta64062){
return (new cljs.core.async.t_cljs$core$async64061(f__$1,blockable__$1,meta64062));
});

}

return (new cljs.core.async.t_cljs$core$async64061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__64072 = arguments.length;
switch (G__64072) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__64074 = arguments.length;
switch (G__64074) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__64080 = arguments.length;
switch (G__64080) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_65563 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65563) : fn1.call(null,val_65563));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65563) : fn1.call(null,val_65563));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__64082 = arguments.length;
switch (G__64082) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___65627 = n;
var x_65628 = (0);
while(true){
if((x_65628 < n__4666__auto___65627)){
(a[x_65628] = x_65628);

var G__65629 = (x_65628 + (1));
x_65628 = G__65629;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64083 = (function (flag,meta64084){
this.flag = flag;
this.meta64084 = meta64084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64085,meta64084__$1){
var self__ = this;
var _64085__$1 = this;
return (new cljs.core.async.t_cljs$core$async64083(self__.flag,meta64084__$1));
}));

(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64085){
var self__ = this;
var _64085__$1 = this;
return self__.meta64084;
}));

(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async64083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta64084","meta64084",1511425072,null)], null);
}));

(cljs.core.async.t_cljs$core$async64083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64083");

(cljs.core.async.t_cljs$core$async64083.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64083.
 */
cljs.core.async.__GT_t_cljs$core$async64083 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async64083(flag__$1,meta64084){
return (new cljs.core.async.t_cljs$core$async64083(flag__$1,meta64084));
});

}

return (new cljs.core.async.t_cljs$core$async64083(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64088 = (function (flag,cb,meta64089){
this.flag = flag;
this.cb = cb;
this.meta64089 = meta64089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64090,meta64089__$1){
var self__ = this;
var _64090__$1 = this;
return (new cljs.core.async.t_cljs$core$async64088(self__.flag,self__.cb,meta64089__$1));
}));

(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64090){
var self__ = this;
var _64090__$1 = this;
return self__.meta64089;
}));

(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async64088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta64089","meta64089",899620843,null)], null);
}));

(cljs.core.async.t_cljs$core$async64088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64088");

(cljs.core.async.t_cljs$core$async64088.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64088.
 */
cljs.core.async.__GT_t_cljs$core$async64088 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async64088(flag__$1,cb__$1,meta64089){
return (new cljs.core.async.t_cljs$core$async64088(flag__$1,cb__$1,meta64089));
});

}

return (new cljs.core.async.t_cljs$core$async64088(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64091_SHARP_){
var G__64093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64091_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64093) : fret.call(null,G__64093));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64092_SHARP_){
var G__64094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64092_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64094) : fret.call(null,G__64094));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65639 = (i + (1));
i = G__65639;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65640 = arguments.length;
var i__4790__auto___65641 = (0);
while(true){
if((i__4790__auto___65641 < len__4789__auto___65640)){
args__4795__auto__.push((arguments[i__4790__auto___65641]));

var G__65642 = (i__4790__auto___65641 + (1));
i__4790__auto___65641 = G__65642;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__64097){
var map__64098 = p__64097;
var map__64098__$1 = (((((!((map__64098 == null))))?(((((map__64098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64098):map__64098);
var opts = map__64098__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq64095){
var G__64096 = cljs.core.first(seq64095);
var seq64095__$1 = cljs.core.next(seq64095);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64096,seq64095__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__64101 = arguments.length;
switch (G__64101) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41735__auto___65653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64125){
var state_val_64126 = (state_64125[(1)]);
if((state_val_64126 === (7))){
var inst_64121 = (state_64125[(2)]);
var state_64125__$1 = state_64125;
var statearr_64127_65654 = state_64125__$1;
(statearr_64127_65654[(2)] = inst_64121);

(statearr_64127_65654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (1))){
var state_64125__$1 = state_64125;
var statearr_64128_65655 = state_64125__$1;
(statearr_64128_65655[(2)] = null);

(statearr_64128_65655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (4))){
var inst_64104 = (state_64125[(7)]);
var inst_64104__$1 = (state_64125[(2)]);
var inst_64105 = (inst_64104__$1 == null);
var state_64125__$1 = (function (){var statearr_64129 = state_64125;
(statearr_64129[(7)] = inst_64104__$1);

return statearr_64129;
})();
if(cljs.core.truth_(inst_64105)){
var statearr_64130_65656 = state_64125__$1;
(statearr_64130_65656[(1)] = (5));

} else {
var statearr_64131_65657 = state_64125__$1;
(statearr_64131_65657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (13))){
var state_64125__$1 = state_64125;
var statearr_64132_65662 = state_64125__$1;
(statearr_64132_65662[(2)] = null);

(statearr_64132_65662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (6))){
var inst_64104 = (state_64125[(7)]);
var state_64125__$1 = state_64125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64125__$1,(11),to,inst_64104);
} else {
if((state_val_64126 === (3))){
var inst_64123 = (state_64125[(2)]);
var state_64125__$1 = state_64125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64125__$1,inst_64123);
} else {
if((state_val_64126 === (12))){
var state_64125__$1 = state_64125;
var statearr_64133_65667 = state_64125__$1;
(statearr_64133_65667[(2)] = null);

(statearr_64133_65667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (2))){
var state_64125__$1 = state_64125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64125__$1,(4),from);
} else {
if((state_val_64126 === (11))){
var inst_64114 = (state_64125[(2)]);
var state_64125__$1 = state_64125;
if(cljs.core.truth_(inst_64114)){
var statearr_64134_65668 = state_64125__$1;
(statearr_64134_65668[(1)] = (12));

} else {
var statearr_64135_65669 = state_64125__$1;
(statearr_64135_65669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (9))){
var state_64125__$1 = state_64125;
var statearr_64136_65670 = state_64125__$1;
(statearr_64136_65670[(2)] = null);

(statearr_64136_65670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (5))){
var state_64125__$1 = state_64125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64137_65674 = state_64125__$1;
(statearr_64137_65674[(1)] = (8));

} else {
var statearr_64138_65679 = state_64125__$1;
(statearr_64138_65679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (14))){
var inst_64119 = (state_64125[(2)]);
var state_64125__$1 = state_64125;
var statearr_64139_65680 = state_64125__$1;
(statearr_64139_65680[(2)] = inst_64119);

(statearr_64139_65680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (10))){
var inst_64111 = (state_64125[(2)]);
var state_64125__$1 = state_64125;
var statearr_64140_65681 = state_64125__$1;
(statearr_64140_65681[(2)] = inst_64111);

(statearr_64140_65681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64126 === (8))){
var inst_64108 = cljs.core.async.close_BANG_(to);
var state_64125__$1 = state_64125;
var statearr_64141_65688 = state_64125__$1;
(statearr_64141_65688[(2)] = inst_64108);

(statearr_64141_65688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_64142 = [null,null,null,null,null,null,null,null];
(statearr_64142[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_64142[(1)] = (1));

return statearr_64142;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_64125){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64125);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64143){if((e64143 instanceof Object)){
var ex__41716__auto__ = e64143;
var statearr_64144_65689 = state_64125;
(statearr_64144_65689[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65690 = state_64125;
state_64125 = G__65690;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_64125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_64125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64145 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64145[(6)] = c__41735__auto___65653);

return statearr_64145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__64146){
var vec__64147 = p__64146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64147,(1),null);
var job = vec__64147;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41735__auto___65691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64154){
var state_val_64155 = (state_64154[(1)]);
if((state_val_64155 === (1))){
var state_64154__$1 = state_64154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64154__$1,(2),res,v);
} else {
if((state_val_64155 === (2))){
var inst_64151 = (state_64154[(2)]);
var inst_64152 = cljs.core.async.close_BANG_(res);
var state_64154__$1 = (function (){var statearr_64156 = state_64154;
(statearr_64156[(7)] = inst_64151);

return statearr_64156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64154__$1,inst_64152);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_64157 = [null,null,null,null,null,null,null,null];
(statearr_64157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__);

(statearr_64157[(1)] = (1));

return statearr_64157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1 = (function (state_64154){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64154);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64158){if((e64158 instanceof Object)){
var ex__41716__auto__ = e64158;
var statearr_64159_65698 = state_64154;
(statearr_64159_65698[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65699 = state_64154;
state_64154 = G__65699;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = function(state_64154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1.call(this,state_64154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64160 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64160[(6)] = c__41735__auto___65691);

return statearr_64160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__64161){
var vec__64162 = p__64161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64162,(1),null);
var job = vec__64162;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___65700 = n;
var __65701 = (0);
while(true){
if((__65701 < n__4666__auto___65700)){
var G__64165_65702 = type;
var G__64165_65703__$1 = (((G__64165_65702 instanceof cljs.core.Keyword))?G__64165_65702.fqn:null);
switch (G__64165_65703__$1) {
case "compute":
var c__41735__auto___65705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65701,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = ((function (__65701,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function (state_64178){
var state_val_64179 = (state_64178[(1)]);
if((state_val_64179 === (1))){
var state_64178__$1 = state_64178;
var statearr_64180_65712 = state_64178__$1;
(statearr_64180_65712[(2)] = null);

(statearr_64180_65712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64179 === (2))){
var state_64178__$1 = state_64178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64178__$1,(4),jobs);
} else {
if((state_val_64179 === (3))){
var inst_64176 = (state_64178[(2)]);
var state_64178__$1 = state_64178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64178__$1,inst_64176);
} else {
if((state_val_64179 === (4))){
var inst_64168 = (state_64178[(2)]);
var inst_64169 = process(inst_64168);
var state_64178__$1 = state_64178;
if(cljs.core.truth_(inst_64169)){
var statearr_64181_65713 = state_64178__$1;
(statearr_64181_65713[(1)] = (5));

} else {
var statearr_64182_65714 = state_64178__$1;
(statearr_64182_65714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64179 === (5))){
var state_64178__$1 = state_64178;
var statearr_64183_65715 = state_64178__$1;
(statearr_64183_65715[(2)] = null);

(statearr_64183_65715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64179 === (6))){
var state_64178__$1 = state_64178;
var statearr_64184_65716 = state_64178__$1;
(statearr_64184_65716[(2)] = null);

(statearr_64184_65716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64179 === (7))){
var inst_64174 = (state_64178[(2)]);
var state_64178__$1 = state_64178;
var statearr_64185_65717 = state_64178__$1;
(statearr_64185_65717[(2)] = inst_64174);

(statearr_64185_65717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__65701,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
;
return ((function (__65701,switch__41712__auto__,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_64186 = [null,null,null,null,null,null,null];
(statearr_64186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__);

(statearr_64186[(1)] = (1));

return statearr_64186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1 = (function (state_64178){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64178);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64187){if((e64187 instanceof Object)){
var ex__41716__auto__ = e64187;
var statearr_64188_65718 = state_64178;
(statearr_64188_65718[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65719 = state_64178;
state_64178 = G__65719;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = function(state_64178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1.call(this,state_64178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__;
})()
;})(__65701,switch__41712__auto__,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
})();
var state__41737__auto__ = (function (){var statearr_64189 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64189[(6)] = c__41735__auto___65705);

return statearr_64189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
});})(__65701,c__41735__auto___65705,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
);


break;
case "async":
var c__41735__auto___65720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65701,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = ((function (__65701,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function (state_64202){
var state_val_64203 = (state_64202[(1)]);
if((state_val_64203 === (1))){
var state_64202__$1 = state_64202;
var statearr_64204_65721 = state_64202__$1;
(statearr_64204_65721[(2)] = null);

(statearr_64204_65721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64203 === (2))){
var state_64202__$1 = state_64202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64202__$1,(4),jobs);
} else {
if((state_val_64203 === (3))){
var inst_64200 = (state_64202[(2)]);
var state_64202__$1 = state_64202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64202__$1,inst_64200);
} else {
if((state_val_64203 === (4))){
var inst_64192 = (state_64202[(2)]);
var inst_64193 = async(inst_64192);
var state_64202__$1 = state_64202;
if(cljs.core.truth_(inst_64193)){
var statearr_64205_65728 = state_64202__$1;
(statearr_64205_65728[(1)] = (5));

} else {
var statearr_64206_65729 = state_64202__$1;
(statearr_64206_65729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64203 === (5))){
var state_64202__$1 = state_64202;
var statearr_64207_65730 = state_64202__$1;
(statearr_64207_65730[(2)] = null);

(statearr_64207_65730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64203 === (6))){
var state_64202__$1 = state_64202;
var statearr_64208_65731 = state_64202__$1;
(statearr_64208_65731[(2)] = null);

(statearr_64208_65731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64203 === (7))){
var inst_64198 = (state_64202[(2)]);
var state_64202__$1 = state_64202;
var statearr_64209_65732 = state_64202__$1;
(statearr_64209_65732[(2)] = inst_64198);

(statearr_64209_65732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__65701,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
;
return ((function (__65701,switch__41712__auto__,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_64210 = [null,null,null,null,null,null,null];
(statearr_64210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__);

(statearr_64210[(1)] = (1));

return statearr_64210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1 = (function (state_64202){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64202);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64211){if((e64211 instanceof Object)){
var ex__41716__auto__ = e64211;
var statearr_64212_65733 = state_64202;
(statearr_64212_65733[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65734 = state_64202;
state_64202 = G__65734;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = function(state_64202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1.call(this,state_64202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__;
})()
;})(__65701,switch__41712__auto__,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
})();
var state__41737__auto__ = (function (){var statearr_64213 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64213[(6)] = c__41735__auto___65720);

return statearr_64213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
});})(__65701,c__41735__auto___65720,G__64165_65702,G__64165_65703__$1,n__4666__auto___65700,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64165_65703__$1)].join('')));

}

var G__65735 = (__65701 + (1));
__65701 = G__65735;
continue;
} else {
}
break;
}

var c__41735__auto___65736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64235){
var state_val_64236 = (state_64235[(1)]);
if((state_val_64236 === (7))){
var inst_64231 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
var statearr_64237_65737 = state_64235__$1;
(statearr_64237_65737[(2)] = inst_64231);

(statearr_64237_65737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (1))){
var state_64235__$1 = state_64235;
var statearr_64238_65738 = state_64235__$1;
(statearr_64238_65738[(2)] = null);

(statearr_64238_65738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (4))){
var inst_64216 = (state_64235[(7)]);
var inst_64216__$1 = (state_64235[(2)]);
var inst_64217 = (inst_64216__$1 == null);
var state_64235__$1 = (function (){var statearr_64239 = state_64235;
(statearr_64239[(7)] = inst_64216__$1);

return statearr_64239;
})();
if(cljs.core.truth_(inst_64217)){
var statearr_64240_65739 = state_64235__$1;
(statearr_64240_65739[(1)] = (5));

} else {
var statearr_64241_65740 = state_64235__$1;
(statearr_64241_65740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (6))){
var inst_64221 = (state_64235[(8)]);
var inst_64216 = (state_64235[(7)]);
var inst_64221__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_64222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64223 = [inst_64216,inst_64221__$1];
var inst_64224 = (new cljs.core.PersistentVector(null,2,(5),inst_64222,inst_64223,null));
var state_64235__$1 = (function (){var statearr_64242 = state_64235;
(statearr_64242[(8)] = inst_64221__$1);

return statearr_64242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64235__$1,(8),jobs,inst_64224);
} else {
if((state_val_64236 === (3))){
var inst_64233 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64235__$1,inst_64233);
} else {
if((state_val_64236 === (2))){
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64235__$1,(4),from);
} else {
if((state_val_64236 === (9))){
var inst_64228 = (state_64235[(2)]);
var state_64235__$1 = (function (){var statearr_64243 = state_64235;
(statearr_64243[(9)] = inst_64228);

return statearr_64243;
})();
var statearr_64244_65742 = state_64235__$1;
(statearr_64244_65742[(2)] = null);

(statearr_64244_65742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (5))){
var inst_64219 = cljs.core.async.close_BANG_(jobs);
var state_64235__$1 = state_64235;
var statearr_64245_65743 = state_64235__$1;
(statearr_64245_65743[(2)] = inst_64219);

(statearr_64245_65743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (8))){
var inst_64221 = (state_64235[(8)]);
var inst_64226 = (state_64235[(2)]);
var state_64235__$1 = (function (){var statearr_64246 = state_64235;
(statearr_64246[(10)] = inst_64226);

return statearr_64246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64235__$1,(9),results,inst_64221);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_64247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__);

(statearr_64247[(1)] = (1));

return statearr_64247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1 = (function (state_64235){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64235);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64248){if((e64248 instanceof Object)){
var ex__41716__auto__ = e64248;
var statearr_64249_65749 = state_64235;
(statearr_64249_65749[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65750 = state_64235;
state_64235 = G__65750;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = function(state_64235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1.call(this,state_64235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64250 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64250[(6)] = c__41735__auto___65736);

return statearr_64250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64288){
var state_val_64289 = (state_64288[(1)]);
if((state_val_64289 === (7))){
var inst_64284 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
var statearr_64290_65751 = state_64288__$1;
(statearr_64290_65751[(2)] = inst_64284);

(statearr_64290_65751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (20))){
var state_64288__$1 = state_64288;
var statearr_64291_65752 = state_64288__$1;
(statearr_64291_65752[(2)] = null);

(statearr_64291_65752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (1))){
var state_64288__$1 = state_64288;
var statearr_64292_65753 = state_64288__$1;
(statearr_64292_65753[(2)] = null);

(statearr_64292_65753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (4))){
var inst_64253 = (state_64288[(7)]);
var inst_64253__$1 = (state_64288[(2)]);
var inst_64254 = (inst_64253__$1 == null);
var state_64288__$1 = (function (){var statearr_64293 = state_64288;
(statearr_64293[(7)] = inst_64253__$1);

return statearr_64293;
})();
if(cljs.core.truth_(inst_64254)){
var statearr_64294_65758 = state_64288__$1;
(statearr_64294_65758[(1)] = (5));

} else {
var statearr_64295_65759 = state_64288__$1;
(statearr_64295_65759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (15))){
var inst_64266 = (state_64288[(8)]);
var state_64288__$1 = state_64288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64288__$1,(18),to,inst_64266);
} else {
if((state_val_64289 === (21))){
var inst_64279 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
var statearr_64296_65760 = state_64288__$1;
(statearr_64296_65760[(2)] = inst_64279);

(statearr_64296_65760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (13))){
var inst_64281 = (state_64288[(2)]);
var state_64288__$1 = (function (){var statearr_64297 = state_64288;
(statearr_64297[(9)] = inst_64281);

return statearr_64297;
})();
var statearr_64298_65761 = state_64288__$1;
(statearr_64298_65761[(2)] = null);

(statearr_64298_65761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (6))){
var inst_64253 = (state_64288[(7)]);
var state_64288__$1 = state_64288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64288__$1,(11),inst_64253);
} else {
if((state_val_64289 === (17))){
var inst_64274 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
if(cljs.core.truth_(inst_64274)){
var statearr_64299_65762 = state_64288__$1;
(statearr_64299_65762[(1)] = (19));

} else {
var statearr_64300_65763 = state_64288__$1;
(statearr_64300_65763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (3))){
var inst_64286 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64288__$1,inst_64286);
} else {
if((state_val_64289 === (12))){
var inst_64263 = (state_64288[(10)]);
var state_64288__$1 = state_64288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64288__$1,(14),inst_64263);
} else {
if((state_val_64289 === (2))){
var state_64288__$1 = state_64288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64288__$1,(4),results);
} else {
if((state_val_64289 === (19))){
var state_64288__$1 = state_64288;
var statearr_64301_65766 = state_64288__$1;
(statearr_64301_65766[(2)] = null);

(statearr_64301_65766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (11))){
var inst_64263 = (state_64288[(2)]);
var state_64288__$1 = (function (){var statearr_64302 = state_64288;
(statearr_64302[(10)] = inst_64263);

return statearr_64302;
})();
var statearr_64303_65767 = state_64288__$1;
(statearr_64303_65767[(2)] = null);

(statearr_64303_65767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (9))){
var state_64288__$1 = state_64288;
var statearr_64304_65768 = state_64288__$1;
(statearr_64304_65768[(2)] = null);

(statearr_64304_65768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (5))){
var state_64288__$1 = state_64288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64305_65769 = state_64288__$1;
(statearr_64305_65769[(1)] = (8));

} else {
var statearr_64306_65770 = state_64288__$1;
(statearr_64306_65770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (14))){
var inst_64266 = (state_64288[(8)]);
var inst_64266__$1 = (state_64288[(2)]);
var inst_64267 = (inst_64266__$1 == null);
var inst_64268 = cljs.core.not(inst_64267);
var state_64288__$1 = (function (){var statearr_64307 = state_64288;
(statearr_64307[(8)] = inst_64266__$1);

return statearr_64307;
})();
if(inst_64268){
var statearr_64308_65771 = state_64288__$1;
(statearr_64308_65771[(1)] = (15));

} else {
var statearr_64309_65772 = state_64288__$1;
(statearr_64309_65772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (16))){
var state_64288__$1 = state_64288;
var statearr_64310_65773 = state_64288__$1;
(statearr_64310_65773[(2)] = false);

(statearr_64310_65773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (10))){
var inst_64260 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
var statearr_64311_65774 = state_64288__$1;
(statearr_64311_65774[(2)] = inst_64260);

(statearr_64311_65774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (18))){
var inst_64271 = (state_64288[(2)]);
var state_64288__$1 = state_64288;
var statearr_64312_65775 = state_64288__$1;
(statearr_64312_65775[(2)] = inst_64271);

(statearr_64312_65775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64289 === (8))){
var inst_64257 = cljs.core.async.close_BANG_(to);
var state_64288__$1 = state_64288;
var statearr_64313_65776 = state_64288__$1;
(statearr_64313_65776[(2)] = inst_64257);

(statearr_64313_65776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_64314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__);

(statearr_64314[(1)] = (1));

return statearr_64314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1 = (function (state_64288){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64288);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64315){if((e64315 instanceof Object)){
var ex__41716__auto__ = e64315;
var statearr_64316_65779 = state_64288;
(statearr_64316_65779[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65780 = state_64288;
state_64288 = G__65780;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__ = function(state_64288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1.call(this,state_64288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64317 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64317[(6)] = c__41735__auto__);

return statearr_64317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__64319 = arguments.length;
switch (G__64319) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__64321 = arguments.length;
switch (G__64321) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__64323 = arguments.length;
switch (G__64323) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41735__auto___65784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64349){
var state_val_64350 = (state_64349[(1)]);
if((state_val_64350 === (7))){
var inst_64345 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
var statearr_64351_65786 = state_64349__$1;
(statearr_64351_65786[(2)] = inst_64345);

(statearr_64351_65786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (1))){
var state_64349__$1 = state_64349;
var statearr_64352_65787 = state_64349__$1;
(statearr_64352_65787[(2)] = null);

(statearr_64352_65787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (4))){
var inst_64326 = (state_64349[(7)]);
var inst_64326__$1 = (state_64349[(2)]);
var inst_64327 = (inst_64326__$1 == null);
var state_64349__$1 = (function (){var statearr_64353 = state_64349;
(statearr_64353[(7)] = inst_64326__$1);

return statearr_64353;
})();
if(cljs.core.truth_(inst_64327)){
var statearr_64354_65788 = state_64349__$1;
(statearr_64354_65788[(1)] = (5));

} else {
var statearr_64355_65789 = state_64349__$1;
(statearr_64355_65789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (13))){
var state_64349__$1 = state_64349;
var statearr_64356_65794 = state_64349__$1;
(statearr_64356_65794[(2)] = null);

(statearr_64356_65794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (6))){
var inst_64326 = (state_64349[(7)]);
var inst_64332 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64326) : p.call(null,inst_64326));
var state_64349__$1 = state_64349;
if(cljs.core.truth_(inst_64332)){
var statearr_64357_65795 = state_64349__$1;
(statearr_64357_65795[(1)] = (9));

} else {
var statearr_64358_65796 = state_64349__$1;
(statearr_64358_65796[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (3))){
var inst_64347 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64349__$1,inst_64347);
} else {
if((state_val_64350 === (12))){
var state_64349__$1 = state_64349;
var statearr_64359_65797 = state_64349__$1;
(statearr_64359_65797[(2)] = null);

(statearr_64359_65797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (2))){
var state_64349__$1 = state_64349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64349__$1,(4),ch);
} else {
if((state_val_64350 === (11))){
var inst_64326 = (state_64349[(7)]);
var inst_64336 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64349__$1,(8),inst_64336,inst_64326);
} else {
if((state_val_64350 === (9))){
var state_64349__$1 = state_64349;
var statearr_64360_65798 = state_64349__$1;
(statearr_64360_65798[(2)] = tc);

(statearr_64360_65798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (5))){
var inst_64329 = cljs.core.async.close_BANG_(tc);
var inst_64330 = cljs.core.async.close_BANG_(fc);
var state_64349__$1 = (function (){var statearr_64361 = state_64349;
(statearr_64361[(8)] = inst_64329);

return statearr_64361;
})();
var statearr_64362_65799 = state_64349__$1;
(statearr_64362_65799[(2)] = inst_64330);

(statearr_64362_65799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (14))){
var inst_64343 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
var statearr_64363_65807 = state_64349__$1;
(statearr_64363_65807[(2)] = inst_64343);

(statearr_64363_65807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (10))){
var state_64349__$1 = state_64349;
var statearr_64364_65808 = state_64349__$1;
(statearr_64364_65808[(2)] = fc);

(statearr_64364_65808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (8))){
var inst_64338 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
if(cljs.core.truth_(inst_64338)){
var statearr_64365_65812 = state_64349__$1;
(statearr_64365_65812[(1)] = (12));

} else {
var statearr_64366_65813 = state_64349__$1;
(statearr_64366_65813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_64367 = [null,null,null,null,null,null,null,null,null];
(statearr_64367[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_64367[(1)] = (1));

return statearr_64367;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_64349){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64349);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64368){if((e64368 instanceof Object)){
var ex__41716__auto__ = e64368;
var statearr_64369_65824 = state_64349;
(statearr_64369_65824[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65825 = state_64349;
state_64349 = G__65825;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_64349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_64349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64370 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64370[(6)] = c__41735__auto___65784);

return statearr_64370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64391){
var state_val_64392 = (state_64391[(1)]);
if((state_val_64392 === (7))){
var inst_64387 = (state_64391[(2)]);
var state_64391__$1 = state_64391;
var statearr_64393_65829 = state_64391__$1;
(statearr_64393_65829[(2)] = inst_64387);

(statearr_64393_65829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (1))){
var inst_64371 = init;
var state_64391__$1 = (function (){var statearr_64394 = state_64391;
(statearr_64394[(7)] = inst_64371);

return statearr_64394;
})();
var statearr_64395_65831 = state_64391__$1;
(statearr_64395_65831[(2)] = null);

(statearr_64395_65831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (4))){
var inst_64374 = (state_64391[(8)]);
var inst_64374__$1 = (state_64391[(2)]);
var inst_64375 = (inst_64374__$1 == null);
var state_64391__$1 = (function (){var statearr_64396 = state_64391;
(statearr_64396[(8)] = inst_64374__$1);

return statearr_64396;
})();
if(cljs.core.truth_(inst_64375)){
var statearr_64397_65832 = state_64391__$1;
(statearr_64397_65832[(1)] = (5));

} else {
var statearr_64398_65833 = state_64391__$1;
(statearr_64398_65833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (6))){
var inst_64378 = (state_64391[(9)]);
var inst_64374 = (state_64391[(8)]);
var inst_64371 = (state_64391[(7)]);
var inst_64378__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_64371,inst_64374) : f.call(null,inst_64371,inst_64374));
var inst_64379 = cljs.core.reduced_QMARK_(inst_64378__$1);
var state_64391__$1 = (function (){var statearr_64399 = state_64391;
(statearr_64399[(9)] = inst_64378__$1);

return statearr_64399;
})();
if(inst_64379){
var statearr_64400_65834 = state_64391__$1;
(statearr_64400_65834[(1)] = (8));

} else {
var statearr_64401_65835 = state_64391__$1;
(statearr_64401_65835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (3))){
var inst_64389 = (state_64391[(2)]);
var state_64391__$1 = state_64391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64391__$1,inst_64389);
} else {
if((state_val_64392 === (2))){
var state_64391__$1 = state_64391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64391__$1,(4),ch);
} else {
if((state_val_64392 === (9))){
var inst_64378 = (state_64391[(9)]);
var inst_64371 = inst_64378;
var state_64391__$1 = (function (){var statearr_64402 = state_64391;
(statearr_64402[(7)] = inst_64371);

return statearr_64402;
})();
var statearr_64403_65841 = state_64391__$1;
(statearr_64403_65841[(2)] = null);

(statearr_64403_65841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (5))){
var inst_64371 = (state_64391[(7)]);
var state_64391__$1 = state_64391;
var statearr_64404_65842 = state_64391__$1;
(statearr_64404_65842[(2)] = inst_64371);

(statearr_64404_65842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (10))){
var inst_64385 = (state_64391[(2)]);
var state_64391__$1 = state_64391;
var statearr_64405_65844 = state_64391__$1;
(statearr_64405_65844[(2)] = inst_64385);

(statearr_64405_65844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (8))){
var inst_64378 = (state_64391[(9)]);
var inst_64381 = cljs.core.deref(inst_64378);
var state_64391__$1 = state_64391;
var statearr_64406_65847 = state_64391__$1;
(statearr_64406_65847[(2)] = inst_64381);

(statearr_64406_65847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__41713__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41713__auto____0 = (function (){
var statearr_64407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64407[(0)] = cljs$core$async$reduce_$_state_machine__41713__auto__);

(statearr_64407[(1)] = (1));

return statearr_64407;
});
var cljs$core$async$reduce_$_state_machine__41713__auto____1 = (function (state_64391){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64391);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64408){if((e64408 instanceof Object)){
var ex__41716__auto__ = e64408;
var statearr_64409_65848 = state_64391;
(statearr_64409_65848[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65849 = state_64391;
state_64391 = G__65849;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41713__auto__ = function(state_64391){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41713__auto____1.call(this,state_64391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41713__auto____0;
cljs$core$async$reduce_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41713__auto____1;
return cljs$core$async$reduce_$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64410 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64410[(6)] = c__41735__auto__);

return statearr_64410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64416){
var state_val_64417 = (state_64416[(1)]);
if((state_val_64417 === (1))){
var inst_64411 = cljs.core.async.reduce(f__$1,init,ch);
var state_64416__$1 = state_64416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64416__$1,(2),inst_64411);
} else {
if((state_val_64417 === (2))){
var inst_64413 = (state_64416[(2)]);
var inst_64414 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_64413) : f__$1.call(null,inst_64413));
var state_64416__$1 = state_64416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64416__$1,inst_64414);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41713__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41713__auto____0 = (function (){
var statearr_64418 = [null,null,null,null,null,null,null];
(statearr_64418[(0)] = cljs$core$async$transduce_$_state_machine__41713__auto__);

(statearr_64418[(1)] = (1));

return statearr_64418;
});
var cljs$core$async$transduce_$_state_machine__41713__auto____1 = (function (state_64416){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64416);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64419){if((e64419 instanceof Object)){
var ex__41716__auto__ = e64419;
var statearr_64420_65850 = state_64416;
(statearr_64420_65850[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65855 = state_64416;
state_64416 = G__65855;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41713__auto__ = function(state_64416){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41713__auto____1.call(this,state_64416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41713__auto____0;
cljs$core$async$transduce_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41713__auto____1;
return cljs$core$async$transduce_$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64421 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64421[(6)] = c__41735__auto__);

return statearr_64421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__64423 = arguments.length;
switch (G__64423) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64448){
var state_val_64449 = (state_64448[(1)]);
if((state_val_64449 === (7))){
var inst_64430 = (state_64448[(2)]);
var state_64448__$1 = state_64448;
var statearr_64450_65857 = state_64448__$1;
(statearr_64450_65857[(2)] = inst_64430);

(statearr_64450_65857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (1))){
var inst_64424 = cljs.core.seq(coll);
var inst_64425 = inst_64424;
var state_64448__$1 = (function (){var statearr_64451 = state_64448;
(statearr_64451[(7)] = inst_64425);

return statearr_64451;
})();
var statearr_64452_65862 = state_64448__$1;
(statearr_64452_65862[(2)] = null);

(statearr_64452_65862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (4))){
var inst_64425 = (state_64448[(7)]);
var inst_64428 = cljs.core.first(inst_64425);
var state_64448__$1 = state_64448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64448__$1,(7),ch,inst_64428);
} else {
if((state_val_64449 === (13))){
var inst_64442 = (state_64448[(2)]);
var state_64448__$1 = state_64448;
var statearr_64453_65864 = state_64448__$1;
(statearr_64453_65864[(2)] = inst_64442);

(statearr_64453_65864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (6))){
var inst_64433 = (state_64448[(2)]);
var state_64448__$1 = state_64448;
if(cljs.core.truth_(inst_64433)){
var statearr_64454_65865 = state_64448__$1;
(statearr_64454_65865[(1)] = (8));

} else {
var statearr_64455_65866 = state_64448__$1;
(statearr_64455_65866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (3))){
var inst_64446 = (state_64448[(2)]);
var state_64448__$1 = state_64448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64448__$1,inst_64446);
} else {
if((state_val_64449 === (12))){
var state_64448__$1 = state_64448;
var statearr_64456_65868 = state_64448__$1;
(statearr_64456_65868[(2)] = null);

(statearr_64456_65868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (2))){
var inst_64425 = (state_64448[(7)]);
var state_64448__$1 = state_64448;
if(cljs.core.truth_(inst_64425)){
var statearr_64457_65869 = state_64448__$1;
(statearr_64457_65869[(1)] = (4));

} else {
var statearr_64458_65870 = state_64448__$1;
(statearr_64458_65870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (11))){
var inst_64439 = cljs.core.async.close_BANG_(ch);
var state_64448__$1 = state_64448;
var statearr_64459_65875 = state_64448__$1;
(statearr_64459_65875[(2)] = inst_64439);

(statearr_64459_65875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (9))){
var state_64448__$1 = state_64448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64460_65876 = state_64448__$1;
(statearr_64460_65876[(1)] = (11));

} else {
var statearr_64461_65877 = state_64448__$1;
(statearr_64461_65877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (5))){
var inst_64425 = (state_64448[(7)]);
var state_64448__$1 = state_64448;
var statearr_64462_65878 = state_64448__$1;
(statearr_64462_65878[(2)] = inst_64425);

(statearr_64462_65878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (10))){
var inst_64444 = (state_64448[(2)]);
var state_64448__$1 = state_64448;
var statearr_64463_65879 = state_64448__$1;
(statearr_64463_65879[(2)] = inst_64444);

(statearr_64463_65879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64449 === (8))){
var inst_64425 = (state_64448[(7)]);
var inst_64435 = cljs.core.next(inst_64425);
var inst_64425__$1 = inst_64435;
var state_64448__$1 = (function (){var statearr_64464 = state_64448;
(statearr_64464[(7)] = inst_64425__$1);

return statearr_64464;
})();
var statearr_64465_65880 = state_64448__$1;
(statearr_64465_65880[(2)] = null);

(statearr_64465_65880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_64466 = [null,null,null,null,null,null,null,null];
(statearr_64466[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_64466[(1)] = (1));

return statearr_64466;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_64448){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64448);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64467){if((e64467 instanceof Object)){
var ex__41716__auto__ = e64467;
var statearr_64468_65881 = state_64448;
(statearr_64468_65881[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65882 = state_64448;
state_64448 = G__65882;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_64448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_64448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64469 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64469[(6)] = c__41735__auto__);

return statearr_64469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64470 = (function (ch,cs,meta64471){
this.ch = ch;
this.cs = cs;
this.meta64471 = meta64471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64472,meta64471__$1){
var self__ = this;
var _64472__$1 = this;
return (new cljs.core.async.t_cljs$core$async64470(self__.ch,self__.cs,meta64471__$1));
}));

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64472){
var self__ = this;
var _64472__$1 = this;
return self__.meta64471;
}));

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async64470.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async64470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta64471","meta64471",-1072311660,null)], null);
}));

(cljs.core.async.t_cljs$core$async64470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64470");

(cljs.core.async.t_cljs$core$async64470.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64470.
 */
cljs.core.async.__GT_t_cljs$core$async64470 = (function cljs$core$async$mult_$___GT_t_cljs$core$async64470(ch__$1,cs__$1,meta64471){
return (new cljs.core.async.t_cljs$core$async64470(ch__$1,cs__$1,meta64471));
});

}

return (new cljs.core.async.t_cljs$core$async64470(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41735__auto___65891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64607){
var state_val_64608 = (state_64607[(1)]);
if((state_val_64608 === (7))){
var inst_64603 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64609_65892 = state_64607__$1;
(statearr_64609_65892[(2)] = inst_64603);

(statearr_64609_65892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (20))){
var inst_64506 = (state_64607[(7)]);
var inst_64518 = cljs.core.first(inst_64506);
var inst_64519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64518,(0),null);
var inst_64520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64518,(1),null);
var state_64607__$1 = (function (){var statearr_64610 = state_64607;
(statearr_64610[(8)] = inst_64519);

return statearr_64610;
})();
if(cljs.core.truth_(inst_64520)){
var statearr_64611_65893 = state_64607__$1;
(statearr_64611_65893[(1)] = (22));

} else {
var statearr_64612_65894 = state_64607__$1;
(statearr_64612_65894[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (27))){
var inst_64548 = (state_64607[(9)]);
var inst_64475 = (state_64607[(10)]);
var inst_64555 = (state_64607[(11)]);
var inst_64550 = (state_64607[(12)]);
var inst_64555__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_64548,inst_64550);
var inst_64556 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64555__$1,inst_64475,done);
var state_64607__$1 = (function (){var statearr_64613 = state_64607;
(statearr_64613[(11)] = inst_64555__$1);

return statearr_64613;
})();
if(cljs.core.truth_(inst_64556)){
var statearr_64614_65897 = state_64607__$1;
(statearr_64614_65897[(1)] = (30));

} else {
var statearr_64615_65898 = state_64607__$1;
(statearr_64615_65898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (1))){
var state_64607__$1 = state_64607;
var statearr_64616_65899 = state_64607__$1;
(statearr_64616_65899[(2)] = null);

(statearr_64616_65899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (24))){
var inst_64506 = (state_64607[(7)]);
var inst_64525 = (state_64607[(2)]);
var inst_64526 = cljs.core.next(inst_64506);
var inst_64484 = inst_64526;
var inst_64485 = null;
var inst_64486 = (0);
var inst_64487 = (0);
var state_64607__$1 = (function (){var statearr_64617 = state_64607;
(statearr_64617[(13)] = inst_64525);

(statearr_64617[(14)] = inst_64486);

(statearr_64617[(15)] = inst_64485);

(statearr_64617[(16)] = inst_64487);

(statearr_64617[(17)] = inst_64484);

return statearr_64617;
})();
var statearr_64618_65901 = state_64607__$1;
(statearr_64618_65901[(2)] = null);

(statearr_64618_65901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (39))){
var state_64607__$1 = state_64607;
var statearr_64622_65902 = state_64607__$1;
(statearr_64622_65902[(2)] = null);

(statearr_64622_65902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (4))){
var inst_64475 = (state_64607[(10)]);
var inst_64475__$1 = (state_64607[(2)]);
var inst_64476 = (inst_64475__$1 == null);
var state_64607__$1 = (function (){var statearr_64623 = state_64607;
(statearr_64623[(10)] = inst_64475__$1);

return statearr_64623;
})();
if(cljs.core.truth_(inst_64476)){
var statearr_64624_65903 = state_64607__$1;
(statearr_64624_65903[(1)] = (5));

} else {
var statearr_64625_65904 = state_64607__$1;
(statearr_64625_65904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (15))){
var inst_64486 = (state_64607[(14)]);
var inst_64485 = (state_64607[(15)]);
var inst_64487 = (state_64607[(16)]);
var inst_64484 = (state_64607[(17)]);
var inst_64502 = (state_64607[(2)]);
var inst_64503 = (inst_64487 + (1));
var tmp64619 = inst_64486;
var tmp64620 = inst_64485;
var tmp64621 = inst_64484;
var inst_64484__$1 = tmp64621;
var inst_64485__$1 = tmp64620;
var inst_64486__$1 = tmp64619;
var inst_64487__$1 = inst_64503;
var state_64607__$1 = (function (){var statearr_64626 = state_64607;
(statearr_64626[(18)] = inst_64502);

(statearr_64626[(14)] = inst_64486__$1);

(statearr_64626[(15)] = inst_64485__$1);

(statearr_64626[(16)] = inst_64487__$1);

(statearr_64626[(17)] = inst_64484__$1);

return statearr_64626;
})();
var statearr_64627_65910 = state_64607__$1;
(statearr_64627_65910[(2)] = null);

(statearr_64627_65910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (21))){
var inst_64529 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64631_65912 = state_64607__$1;
(statearr_64631_65912[(2)] = inst_64529);

(statearr_64631_65912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (31))){
var inst_64555 = (state_64607[(11)]);
var inst_64559 = done(null);
var inst_64560 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64555);
var state_64607__$1 = (function (){var statearr_64632 = state_64607;
(statearr_64632[(19)] = inst_64559);

return statearr_64632;
})();
var statearr_64633_65913 = state_64607__$1;
(statearr_64633_65913[(2)] = inst_64560);

(statearr_64633_65913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (32))){
var inst_64549 = (state_64607[(20)]);
var inst_64548 = (state_64607[(9)]);
var inst_64547 = (state_64607[(21)]);
var inst_64550 = (state_64607[(12)]);
var inst_64562 = (state_64607[(2)]);
var inst_64563 = (inst_64550 + (1));
var tmp64628 = inst_64549;
var tmp64629 = inst_64548;
var tmp64630 = inst_64547;
var inst_64547__$1 = tmp64630;
var inst_64548__$1 = tmp64629;
var inst_64549__$1 = tmp64628;
var inst_64550__$1 = inst_64563;
var state_64607__$1 = (function (){var statearr_64634 = state_64607;
(statearr_64634[(20)] = inst_64549__$1);

(statearr_64634[(9)] = inst_64548__$1);

(statearr_64634[(22)] = inst_64562);

(statearr_64634[(21)] = inst_64547__$1);

(statearr_64634[(12)] = inst_64550__$1);

return statearr_64634;
})();
var statearr_64635_65915 = state_64607__$1;
(statearr_64635_65915[(2)] = null);

(statearr_64635_65915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (40))){
var inst_64575 = (state_64607[(23)]);
var inst_64579 = done(null);
var inst_64580 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64575);
var state_64607__$1 = (function (){var statearr_64636 = state_64607;
(statearr_64636[(24)] = inst_64579);

return statearr_64636;
})();
var statearr_64637_65916 = state_64607__$1;
(statearr_64637_65916[(2)] = inst_64580);

(statearr_64637_65916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (33))){
var inst_64566 = (state_64607[(25)]);
var inst_64568 = cljs.core.chunked_seq_QMARK_(inst_64566);
var state_64607__$1 = state_64607;
if(inst_64568){
var statearr_64638_65918 = state_64607__$1;
(statearr_64638_65918[(1)] = (36));

} else {
var statearr_64639_65919 = state_64607__$1;
(statearr_64639_65919[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (13))){
var inst_64496 = (state_64607[(26)]);
var inst_64499 = cljs.core.async.close_BANG_(inst_64496);
var state_64607__$1 = state_64607;
var statearr_64640_65923 = state_64607__$1;
(statearr_64640_65923[(2)] = inst_64499);

(statearr_64640_65923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (22))){
var inst_64519 = (state_64607[(8)]);
var inst_64522 = cljs.core.async.close_BANG_(inst_64519);
var state_64607__$1 = state_64607;
var statearr_64641_65924 = state_64607__$1;
(statearr_64641_65924[(2)] = inst_64522);

(statearr_64641_65924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (36))){
var inst_64566 = (state_64607[(25)]);
var inst_64570 = cljs.core.chunk_first(inst_64566);
var inst_64571 = cljs.core.chunk_rest(inst_64566);
var inst_64572 = cljs.core.count(inst_64570);
var inst_64547 = inst_64571;
var inst_64548 = inst_64570;
var inst_64549 = inst_64572;
var inst_64550 = (0);
var state_64607__$1 = (function (){var statearr_64642 = state_64607;
(statearr_64642[(20)] = inst_64549);

(statearr_64642[(9)] = inst_64548);

(statearr_64642[(21)] = inst_64547);

(statearr_64642[(12)] = inst_64550);

return statearr_64642;
})();
var statearr_64643_65925 = state_64607__$1;
(statearr_64643_65925[(2)] = null);

(statearr_64643_65925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (41))){
var inst_64566 = (state_64607[(25)]);
var inst_64582 = (state_64607[(2)]);
var inst_64583 = cljs.core.next(inst_64566);
var inst_64547 = inst_64583;
var inst_64548 = null;
var inst_64549 = (0);
var inst_64550 = (0);
var state_64607__$1 = (function (){var statearr_64644 = state_64607;
(statearr_64644[(20)] = inst_64549);

(statearr_64644[(9)] = inst_64548);

(statearr_64644[(27)] = inst_64582);

(statearr_64644[(21)] = inst_64547);

(statearr_64644[(12)] = inst_64550);

return statearr_64644;
})();
var statearr_64645_65926 = state_64607__$1;
(statearr_64645_65926[(2)] = null);

(statearr_64645_65926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (43))){
var state_64607__$1 = state_64607;
var statearr_64646_65927 = state_64607__$1;
(statearr_64646_65927[(2)] = null);

(statearr_64646_65927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (29))){
var inst_64591 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64647_65928 = state_64607__$1;
(statearr_64647_65928[(2)] = inst_64591);

(statearr_64647_65928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (44))){
var inst_64600 = (state_64607[(2)]);
var state_64607__$1 = (function (){var statearr_64648 = state_64607;
(statearr_64648[(28)] = inst_64600);

return statearr_64648;
})();
var statearr_64649_65929 = state_64607__$1;
(statearr_64649_65929[(2)] = null);

(statearr_64649_65929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (6))){
var inst_64539 = (state_64607[(29)]);
var inst_64538 = cljs.core.deref(cs);
var inst_64539__$1 = cljs.core.keys(inst_64538);
var inst_64540 = cljs.core.count(inst_64539__$1);
var inst_64541 = cljs.core.reset_BANG_(dctr,inst_64540);
var inst_64546 = cljs.core.seq(inst_64539__$1);
var inst_64547 = inst_64546;
var inst_64548 = null;
var inst_64549 = (0);
var inst_64550 = (0);
var state_64607__$1 = (function (){var statearr_64650 = state_64607;
(statearr_64650[(20)] = inst_64549);

(statearr_64650[(9)] = inst_64548);

(statearr_64650[(21)] = inst_64547);

(statearr_64650[(29)] = inst_64539__$1);

(statearr_64650[(12)] = inst_64550);

(statearr_64650[(30)] = inst_64541);

return statearr_64650;
})();
var statearr_64651_65931 = state_64607__$1;
(statearr_64651_65931[(2)] = null);

(statearr_64651_65931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (28))){
var inst_64547 = (state_64607[(21)]);
var inst_64566 = (state_64607[(25)]);
var inst_64566__$1 = cljs.core.seq(inst_64547);
var state_64607__$1 = (function (){var statearr_64652 = state_64607;
(statearr_64652[(25)] = inst_64566__$1);

return statearr_64652;
})();
if(inst_64566__$1){
var statearr_64653_65932 = state_64607__$1;
(statearr_64653_65932[(1)] = (33));

} else {
var statearr_64654_65933 = state_64607__$1;
(statearr_64654_65933[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (25))){
var inst_64549 = (state_64607[(20)]);
var inst_64550 = (state_64607[(12)]);
var inst_64552 = (inst_64550 < inst_64549);
var inst_64553 = inst_64552;
var state_64607__$1 = state_64607;
if(cljs.core.truth_(inst_64553)){
var statearr_64655_65934 = state_64607__$1;
(statearr_64655_65934[(1)] = (27));

} else {
var statearr_64656_65935 = state_64607__$1;
(statearr_64656_65935[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (34))){
var state_64607__$1 = state_64607;
var statearr_64657_65936 = state_64607__$1;
(statearr_64657_65936[(2)] = null);

(statearr_64657_65936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (17))){
var state_64607__$1 = state_64607;
var statearr_64658_65937 = state_64607__$1;
(statearr_64658_65937[(2)] = null);

(statearr_64658_65937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (3))){
var inst_64605 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64607__$1,inst_64605);
} else {
if((state_val_64608 === (12))){
var inst_64534 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64659_65938 = state_64607__$1;
(statearr_64659_65938[(2)] = inst_64534);

(statearr_64659_65938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (2))){
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64607__$1,(4),ch);
} else {
if((state_val_64608 === (23))){
var state_64607__$1 = state_64607;
var statearr_64660_65942 = state_64607__$1;
(statearr_64660_65942[(2)] = null);

(statearr_64660_65942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (35))){
var inst_64589 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64661_65947 = state_64607__$1;
(statearr_64661_65947[(2)] = inst_64589);

(statearr_64661_65947[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (19))){
var inst_64506 = (state_64607[(7)]);
var inst_64510 = cljs.core.chunk_first(inst_64506);
var inst_64511 = cljs.core.chunk_rest(inst_64506);
var inst_64512 = cljs.core.count(inst_64510);
var inst_64484 = inst_64511;
var inst_64485 = inst_64510;
var inst_64486 = inst_64512;
var inst_64487 = (0);
var state_64607__$1 = (function (){var statearr_64662 = state_64607;
(statearr_64662[(14)] = inst_64486);

(statearr_64662[(15)] = inst_64485);

(statearr_64662[(16)] = inst_64487);

(statearr_64662[(17)] = inst_64484);

return statearr_64662;
})();
var statearr_64663_65948 = state_64607__$1;
(statearr_64663_65948[(2)] = null);

(statearr_64663_65948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (11))){
var inst_64484 = (state_64607[(17)]);
var inst_64506 = (state_64607[(7)]);
var inst_64506__$1 = cljs.core.seq(inst_64484);
var state_64607__$1 = (function (){var statearr_64664 = state_64607;
(statearr_64664[(7)] = inst_64506__$1);

return statearr_64664;
})();
if(inst_64506__$1){
var statearr_64665_65949 = state_64607__$1;
(statearr_64665_65949[(1)] = (16));

} else {
var statearr_64666_65950 = state_64607__$1;
(statearr_64666_65950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (9))){
var inst_64536 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64667_65951 = state_64607__$1;
(statearr_64667_65951[(2)] = inst_64536);

(statearr_64667_65951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (5))){
var inst_64482 = cljs.core.deref(cs);
var inst_64483 = cljs.core.seq(inst_64482);
var inst_64484 = inst_64483;
var inst_64485 = null;
var inst_64486 = (0);
var inst_64487 = (0);
var state_64607__$1 = (function (){var statearr_64668 = state_64607;
(statearr_64668[(14)] = inst_64486);

(statearr_64668[(15)] = inst_64485);

(statearr_64668[(16)] = inst_64487);

(statearr_64668[(17)] = inst_64484);

return statearr_64668;
})();
var statearr_64669_65952 = state_64607__$1;
(statearr_64669_65952[(2)] = null);

(statearr_64669_65952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (14))){
var state_64607__$1 = state_64607;
var statearr_64670_65953 = state_64607__$1;
(statearr_64670_65953[(2)] = null);

(statearr_64670_65953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (45))){
var inst_64597 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64671_65955 = state_64607__$1;
(statearr_64671_65955[(2)] = inst_64597);

(statearr_64671_65955[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (26))){
var inst_64539 = (state_64607[(29)]);
var inst_64593 = (state_64607[(2)]);
var inst_64594 = cljs.core.seq(inst_64539);
var state_64607__$1 = (function (){var statearr_64672 = state_64607;
(statearr_64672[(31)] = inst_64593);

return statearr_64672;
})();
if(inst_64594){
var statearr_64673_65956 = state_64607__$1;
(statearr_64673_65956[(1)] = (42));

} else {
var statearr_64674_65957 = state_64607__$1;
(statearr_64674_65957[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (16))){
var inst_64506 = (state_64607[(7)]);
var inst_64508 = cljs.core.chunked_seq_QMARK_(inst_64506);
var state_64607__$1 = state_64607;
if(inst_64508){
var statearr_64675_65958 = state_64607__$1;
(statearr_64675_65958[(1)] = (19));

} else {
var statearr_64676_65959 = state_64607__$1;
(statearr_64676_65959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (38))){
var inst_64586 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64677_65960 = state_64607__$1;
(statearr_64677_65960[(2)] = inst_64586);

(statearr_64677_65960[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (30))){
var state_64607__$1 = state_64607;
var statearr_64678_65962 = state_64607__$1;
(statearr_64678_65962[(2)] = null);

(statearr_64678_65962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (10))){
var inst_64485 = (state_64607[(15)]);
var inst_64487 = (state_64607[(16)]);
var inst_64495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_64485,inst_64487);
var inst_64496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64495,(0),null);
var inst_64497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64495,(1),null);
var state_64607__$1 = (function (){var statearr_64679 = state_64607;
(statearr_64679[(26)] = inst_64496);

return statearr_64679;
})();
if(cljs.core.truth_(inst_64497)){
var statearr_64680_65963 = state_64607__$1;
(statearr_64680_65963[(1)] = (13));

} else {
var statearr_64681_65964 = state_64607__$1;
(statearr_64681_65964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (18))){
var inst_64532 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
var statearr_64682_65965 = state_64607__$1;
(statearr_64682_65965[(2)] = inst_64532);

(statearr_64682_65965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (42))){
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64607__$1,(45),dchan);
} else {
if((state_val_64608 === (37))){
var inst_64475 = (state_64607[(10)]);
var inst_64575 = (state_64607[(23)]);
var inst_64566 = (state_64607[(25)]);
var inst_64575__$1 = cljs.core.first(inst_64566);
var inst_64576 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64575__$1,inst_64475,done);
var state_64607__$1 = (function (){var statearr_64683 = state_64607;
(statearr_64683[(23)] = inst_64575__$1);

return statearr_64683;
})();
if(cljs.core.truth_(inst_64576)){
var statearr_64684_65966 = state_64607__$1;
(statearr_64684_65966[(1)] = (39));

} else {
var statearr_64685_65967 = state_64607__$1;
(statearr_64685_65967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64608 === (8))){
var inst_64486 = (state_64607[(14)]);
var inst_64487 = (state_64607[(16)]);
var inst_64489 = (inst_64487 < inst_64486);
var inst_64490 = inst_64489;
var state_64607__$1 = state_64607;
if(cljs.core.truth_(inst_64490)){
var statearr_64686_65968 = state_64607__$1;
(statearr_64686_65968[(1)] = (10));

} else {
var statearr_64687_65969 = state_64607__$1;
(statearr_64687_65969[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__41713__auto__ = null;
var cljs$core$async$mult_$_state_machine__41713__auto____0 = (function (){
var statearr_64688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64688[(0)] = cljs$core$async$mult_$_state_machine__41713__auto__);

(statearr_64688[(1)] = (1));

return statearr_64688;
});
var cljs$core$async$mult_$_state_machine__41713__auto____1 = (function (state_64607){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64607);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64689){if((e64689 instanceof Object)){
var ex__41716__auto__ = e64689;
var statearr_64690_65974 = state_64607;
(statearr_64690_65974[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65975 = state_64607;
state_64607 = G__65975;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41713__auto__ = function(state_64607){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41713__auto____1.call(this,state_64607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41713__auto____0;
cljs$core$async$mult_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41713__auto____1;
return cljs$core$async$mult_$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64691 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64691[(6)] = c__41735__auto___65891);

return statearr_64691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__64693 = arguments.length;
switch (G__64693) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65987 = arguments.length;
var i__4790__auto___65988 = (0);
while(true){
if((i__4790__auto___65988 < len__4789__auto___65987)){
args__4795__auto__.push((arguments[i__4790__auto___65988]));

var G__65990 = (i__4790__auto___65988 + (1));
i__4790__auto___65988 = G__65990;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__64698){
var map__64699 = p__64698;
var map__64699__$1 = (((((!((map__64699 == null))))?(((((map__64699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64699):map__64699);
var opts = map__64699__$1;
var statearr_64701_65991 = state;
(statearr_64701_65991[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_64702_65992 = state;
(statearr_64702_65992[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_64703_65993 = state;
(statearr_64703_65993[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq64694){
var G__64695 = cljs.core.first(seq64694);
var seq64694__$1 = cljs.core.next(seq64694);
var G__64696 = cljs.core.first(seq64694__$1);
var seq64694__$2 = cljs.core.next(seq64694__$1);
var G__64697 = cljs.core.first(seq64694__$2);
var seq64694__$3 = cljs.core.next(seq64694__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64695,G__64696,G__64697,seq64694__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64704 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64705){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta64705 = meta64705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64706,meta64705__$1){
var self__ = this;
var _64706__$1 = this;
return (new cljs.core.async.t_cljs$core$async64704(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64705__$1));
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64706){
var self__ = this;
var _64706__$1 = this;
return self__.meta64705;
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64704.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta64705","meta64705",1145590525,null)], null);
}));

(cljs.core.async.t_cljs$core$async64704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64704");

(cljs.core.async.t_cljs$core$async64704.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64704.
 */
cljs.core.async.__GT_t_cljs$core$async64704 = (function cljs$core$async$mix_$___GT_t_cljs$core$async64704(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64705){
return (new cljs.core.async.t_cljs$core$async64704(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64705));
});

}

return (new cljs.core.async.t_cljs$core$async64704(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41735__auto___66015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64808){
var state_val_64809 = (state_64808[(1)]);
if((state_val_64809 === (7))){
var inst_64723 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
var statearr_64810_66016 = state_64808__$1;
(statearr_64810_66016[(2)] = inst_64723);

(statearr_64810_66016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (20))){
var inst_64735 = (state_64808[(7)]);
var state_64808__$1 = state_64808;
var statearr_64811_66017 = state_64808__$1;
(statearr_64811_66017[(2)] = inst_64735);

(statearr_64811_66017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (27))){
var state_64808__$1 = state_64808;
var statearr_64812_66019 = state_64808__$1;
(statearr_64812_66019[(2)] = null);

(statearr_64812_66019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (1))){
var inst_64710 = (state_64808[(8)]);
var inst_64710__$1 = calc_state();
var inst_64712 = (inst_64710__$1 == null);
var inst_64713 = cljs.core.not(inst_64712);
var state_64808__$1 = (function (){var statearr_64813 = state_64808;
(statearr_64813[(8)] = inst_64710__$1);

return statearr_64813;
})();
if(inst_64713){
var statearr_64814_66020 = state_64808__$1;
(statearr_64814_66020[(1)] = (2));

} else {
var statearr_64815_66021 = state_64808__$1;
(statearr_64815_66021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (24))){
var inst_64768 = (state_64808[(9)]);
var inst_64782 = (state_64808[(10)]);
var inst_64759 = (state_64808[(11)]);
var inst_64782__$1 = (inst_64759.cljs$core$IFn$_invoke$arity$1 ? inst_64759.cljs$core$IFn$_invoke$arity$1(inst_64768) : inst_64759.call(null,inst_64768));
var state_64808__$1 = (function (){var statearr_64816 = state_64808;
(statearr_64816[(10)] = inst_64782__$1);

return statearr_64816;
})();
if(cljs.core.truth_(inst_64782__$1)){
var statearr_64817_66031 = state_64808__$1;
(statearr_64817_66031[(1)] = (29));

} else {
var statearr_64818_66032 = state_64808__$1;
(statearr_64818_66032[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (4))){
var inst_64726 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64726)){
var statearr_64819_66033 = state_64808__$1;
(statearr_64819_66033[(1)] = (8));

} else {
var statearr_64820_66034 = state_64808__$1;
(statearr_64820_66034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (15))){
var inst_64753 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64753)){
var statearr_64821_66041 = state_64808__$1;
(statearr_64821_66041[(1)] = (19));

} else {
var statearr_64822_66042 = state_64808__$1;
(statearr_64822_66042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (21))){
var inst_64758 = (state_64808[(12)]);
var inst_64758__$1 = (state_64808[(2)]);
var inst_64759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64758__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64758__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64758__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_64808__$1 = (function (){var statearr_64823 = state_64808;
(statearr_64823[(12)] = inst_64758__$1);

(statearr_64823[(13)] = inst_64760);

(statearr_64823[(11)] = inst_64759);

return statearr_64823;
})();
return cljs.core.async.ioc_alts_BANG_(state_64808__$1,(22),inst_64761);
} else {
if((state_val_64809 === (31))){
var inst_64790 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64790)){
var statearr_64824_66043 = state_64808__$1;
(statearr_64824_66043[(1)] = (32));

} else {
var statearr_64825_66044 = state_64808__$1;
(statearr_64825_66044[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (32))){
var inst_64767 = (state_64808[(14)]);
var state_64808__$1 = state_64808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64808__$1,(35),out,inst_64767);
} else {
if((state_val_64809 === (33))){
var inst_64758 = (state_64808[(12)]);
var inst_64735 = inst_64758;
var state_64808__$1 = (function (){var statearr_64826 = state_64808;
(statearr_64826[(7)] = inst_64735);

return statearr_64826;
})();
var statearr_64827_66045 = state_64808__$1;
(statearr_64827_66045[(2)] = null);

(statearr_64827_66045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (13))){
var inst_64735 = (state_64808[(7)]);
var inst_64742 = inst_64735.cljs$lang$protocol_mask$partition0$;
var inst_64743 = (inst_64742 & (64));
var inst_64744 = inst_64735.cljs$core$ISeq$;
var inst_64745 = (cljs.core.PROTOCOL_SENTINEL === inst_64744);
var inst_64746 = ((inst_64743) || (inst_64745));
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64746)){
var statearr_64828_66052 = state_64808__$1;
(statearr_64828_66052[(1)] = (16));

} else {
var statearr_64829_66053 = state_64808__$1;
(statearr_64829_66053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (22))){
var inst_64768 = (state_64808[(9)]);
var inst_64767 = (state_64808[(14)]);
var inst_64766 = (state_64808[(2)]);
var inst_64767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64766,(0),null);
var inst_64768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64766,(1),null);
var inst_64769 = (inst_64767__$1 == null);
var inst_64770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64768__$1,change);
var inst_64771 = ((inst_64769) || (inst_64770));
var state_64808__$1 = (function (){var statearr_64830 = state_64808;
(statearr_64830[(9)] = inst_64768__$1);

(statearr_64830[(14)] = inst_64767__$1);

return statearr_64830;
})();
if(cljs.core.truth_(inst_64771)){
var statearr_64831_66054 = state_64808__$1;
(statearr_64831_66054[(1)] = (23));

} else {
var statearr_64832_66055 = state_64808__$1;
(statearr_64832_66055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (36))){
var inst_64758 = (state_64808[(12)]);
var inst_64735 = inst_64758;
var state_64808__$1 = (function (){var statearr_64833 = state_64808;
(statearr_64833[(7)] = inst_64735);

return statearr_64833;
})();
var statearr_64834_66056 = state_64808__$1;
(statearr_64834_66056[(2)] = null);

(statearr_64834_66056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (29))){
var inst_64782 = (state_64808[(10)]);
var state_64808__$1 = state_64808;
var statearr_64835_66063 = state_64808__$1;
(statearr_64835_66063[(2)] = inst_64782);

(statearr_64835_66063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (6))){
var state_64808__$1 = state_64808;
var statearr_64836_66064 = state_64808__$1;
(statearr_64836_66064[(2)] = false);

(statearr_64836_66064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (28))){
var inst_64778 = (state_64808[(2)]);
var inst_64779 = calc_state();
var inst_64735 = inst_64779;
var state_64808__$1 = (function (){var statearr_64837 = state_64808;
(statearr_64837[(7)] = inst_64735);

(statearr_64837[(15)] = inst_64778);

return statearr_64837;
})();
var statearr_64838_66065 = state_64808__$1;
(statearr_64838_66065[(2)] = null);

(statearr_64838_66065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (25))){
var inst_64804 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
var statearr_64839_66066 = state_64808__$1;
(statearr_64839_66066[(2)] = inst_64804);

(statearr_64839_66066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (34))){
var inst_64802 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
var statearr_64840_66067 = state_64808__$1;
(statearr_64840_66067[(2)] = inst_64802);

(statearr_64840_66067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (17))){
var state_64808__$1 = state_64808;
var statearr_64841_66068 = state_64808__$1;
(statearr_64841_66068[(2)] = false);

(statearr_64841_66068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (3))){
var state_64808__$1 = state_64808;
var statearr_64842_66069 = state_64808__$1;
(statearr_64842_66069[(2)] = false);

(statearr_64842_66069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (12))){
var inst_64806 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64808__$1,inst_64806);
} else {
if((state_val_64809 === (2))){
var inst_64710 = (state_64808[(8)]);
var inst_64715 = inst_64710.cljs$lang$protocol_mask$partition0$;
var inst_64716 = (inst_64715 & (64));
var inst_64717 = inst_64710.cljs$core$ISeq$;
var inst_64718 = (cljs.core.PROTOCOL_SENTINEL === inst_64717);
var inst_64719 = ((inst_64716) || (inst_64718));
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64719)){
var statearr_64843_66070 = state_64808__$1;
(statearr_64843_66070[(1)] = (5));

} else {
var statearr_64844_66071 = state_64808__$1;
(statearr_64844_66071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (23))){
var inst_64767 = (state_64808[(14)]);
var inst_64773 = (inst_64767 == null);
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64773)){
var statearr_64845_66072 = state_64808__$1;
(statearr_64845_66072[(1)] = (26));

} else {
var statearr_64846_66073 = state_64808__$1;
(statearr_64846_66073[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (35))){
var inst_64793 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
if(cljs.core.truth_(inst_64793)){
var statearr_64847_66074 = state_64808__$1;
(statearr_64847_66074[(1)] = (36));

} else {
var statearr_64848_66075 = state_64808__$1;
(statearr_64848_66075[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (19))){
var inst_64735 = (state_64808[(7)]);
var inst_64755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64735);
var state_64808__$1 = state_64808;
var statearr_64849_66076 = state_64808__$1;
(statearr_64849_66076[(2)] = inst_64755);

(statearr_64849_66076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (11))){
var inst_64735 = (state_64808[(7)]);
var inst_64739 = (inst_64735 == null);
var inst_64740 = cljs.core.not(inst_64739);
var state_64808__$1 = state_64808;
if(inst_64740){
var statearr_64850_66083 = state_64808__$1;
(statearr_64850_66083[(1)] = (13));

} else {
var statearr_64851_66084 = state_64808__$1;
(statearr_64851_66084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (9))){
var inst_64710 = (state_64808[(8)]);
var state_64808__$1 = state_64808;
var statearr_64852_66085 = state_64808__$1;
(statearr_64852_66085[(2)] = inst_64710);

(statearr_64852_66085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (5))){
var state_64808__$1 = state_64808;
var statearr_64853_66086 = state_64808__$1;
(statearr_64853_66086[(2)] = true);

(statearr_64853_66086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (14))){
var state_64808__$1 = state_64808;
var statearr_64854_66087 = state_64808__$1;
(statearr_64854_66087[(2)] = false);

(statearr_64854_66087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (26))){
var inst_64768 = (state_64808[(9)]);
var inst_64775 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_64768);
var state_64808__$1 = state_64808;
var statearr_64855_66088 = state_64808__$1;
(statearr_64855_66088[(2)] = inst_64775);

(statearr_64855_66088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (16))){
var state_64808__$1 = state_64808;
var statearr_64856_66089 = state_64808__$1;
(statearr_64856_66089[(2)] = true);

(statearr_64856_66089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (38))){
var inst_64798 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
var statearr_64857_66090 = state_64808__$1;
(statearr_64857_66090[(2)] = inst_64798);

(statearr_64857_66090[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (30))){
var inst_64768 = (state_64808[(9)]);
var inst_64760 = (state_64808[(13)]);
var inst_64759 = (state_64808[(11)]);
var inst_64785 = cljs.core.empty_QMARK_(inst_64759);
var inst_64786 = (inst_64760.cljs$core$IFn$_invoke$arity$1 ? inst_64760.cljs$core$IFn$_invoke$arity$1(inst_64768) : inst_64760.call(null,inst_64768));
var inst_64787 = cljs.core.not(inst_64786);
var inst_64788 = ((inst_64785) && (inst_64787));
var state_64808__$1 = state_64808;
var statearr_64858_66091 = state_64808__$1;
(statearr_64858_66091[(2)] = inst_64788);

(statearr_64858_66091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (10))){
var inst_64710 = (state_64808[(8)]);
var inst_64731 = (state_64808[(2)]);
var inst_64732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64731,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64731,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64731,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_64735 = inst_64710;
var state_64808__$1 = (function (){var statearr_64859 = state_64808;
(statearr_64859[(16)] = inst_64733);

(statearr_64859[(17)] = inst_64732);

(statearr_64859[(18)] = inst_64734);

(statearr_64859[(7)] = inst_64735);

return statearr_64859;
})();
var statearr_64860_66095 = state_64808__$1;
(statearr_64860_66095[(2)] = null);

(statearr_64860_66095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (18))){
var inst_64750 = (state_64808[(2)]);
var state_64808__$1 = state_64808;
var statearr_64861_66096 = state_64808__$1;
(statearr_64861_66096[(2)] = inst_64750);

(statearr_64861_66096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (37))){
var state_64808__$1 = state_64808;
var statearr_64862_66097 = state_64808__$1;
(statearr_64862_66097[(2)] = null);

(statearr_64862_66097[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64809 === (8))){
var inst_64710 = (state_64808[(8)]);
var inst_64728 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64710);
var state_64808__$1 = state_64808;
var statearr_64863_66098 = state_64808__$1;
(statearr_64863_66098[(2)] = inst_64728);

(statearr_64863_66098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__41713__auto__ = null;
var cljs$core$async$mix_$_state_machine__41713__auto____0 = (function (){
var statearr_64864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64864[(0)] = cljs$core$async$mix_$_state_machine__41713__auto__);

(statearr_64864[(1)] = (1));

return statearr_64864;
});
var cljs$core$async$mix_$_state_machine__41713__auto____1 = (function (state_64808){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64808);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64865){if((e64865 instanceof Object)){
var ex__41716__auto__ = e64865;
var statearr_64866_66104 = state_64808;
(statearr_64866_66104[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66105 = state_64808;
state_64808 = G__66105;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41713__auto__ = function(state_64808){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41713__auto____1.call(this,state_64808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41713__auto____0;
cljs$core$async$mix_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41713__auto____1;
return cljs$core$async$mix_$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64867 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64867[(6)] = c__41735__auto___66015);

return statearr_64867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__64869 = arguments.length;
switch (G__64869) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__64872 = arguments.length;
switch (G__64872) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__64870_SHARP_){
if(cljs.core.truth_((p1__64870_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__64870_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__64870_SHARP_.call(null,topic)))){
return p1__64870_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64870_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64873 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64874){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64874 = meta64874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64875,meta64874__$1){
var self__ = this;
var _64875__$1 = this;
return (new cljs.core.async.t_cljs$core$async64873(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64874__$1));
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64875){
var self__ = this;
var _64875__$1 = this;
return self__.meta64874;
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async64873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async64873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64874","meta64874",460251261,null)], null);
}));

(cljs.core.async.t_cljs$core$async64873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64873");

(cljs.core.async.t_cljs$core$async64873.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async64873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64873.
 */
cljs.core.async.__GT_t_cljs$core$async64873 = (function cljs$core$async$__GT_t_cljs$core$async64873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64874){
return (new cljs.core.async.t_cljs$core$async64873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64874));
});

}

return (new cljs.core.async.t_cljs$core$async64873(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41735__auto___66124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_64947){
var state_val_64948 = (state_64947[(1)]);
if((state_val_64948 === (7))){
var inst_64943 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64949_66125 = state_64947__$1;
(statearr_64949_66125[(2)] = inst_64943);

(statearr_64949_66125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (20))){
var state_64947__$1 = state_64947;
var statearr_64950_66127 = state_64947__$1;
(statearr_64950_66127[(2)] = null);

(statearr_64950_66127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (1))){
var state_64947__$1 = state_64947;
var statearr_64951_66128 = state_64947__$1;
(statearr_64951_66128[(2)] = null);

(statearr_64951_66128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (24))){
var inst_64926 = (state_64947[(7)]);
var inst_64935 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_64926);
var state_64947__$1 = state_64947;
var statearr_64952_66130 = state_64947__$1;
(statearr_64952_66130[(2)] = inst_64935);

(statearr_64952_66130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (4))){
var inst_64878 = (state_64947[(8)]);
var inst_64878__$1 = (state_64947[(2)]);
var inst_64879 = (inst_64878__$1 == null);
var state_64947__$1 = (function (){var statearr_64953 = state_64947;
(statearr_64953[(8)] = inst_64878__$1);

return statearr_64953;
})();
if(cljs.core.truth_(inst_64879)){
var statearr_64954_66133 = state_64947__$1;
(statearr_64954_66133[(1)] = (5));

} else {
var statearr_64955_66134 = state_64947__$1;
(statearr_64955_66134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (15))){
var inst_64920 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64956_66135 = state_64947__$1;
(statearr_64956_66135[(2)] = inst_64920);

(statearr_64956_66135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (21))){
var inst_64940 = (state_64947[(2)]);
var state_64947__$1 = (function (){var statearr_64957 = state_64947;
(statearr_64957[(9)] = inst_64940);

return statearr_64957;
})();
var statearr_64958_66137 = state_64947__$1;
(statearr_64958_66137[(2)] = null);

(statearr_64958_66137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (13))){
var inst_64902 = (state_64947[(10)]);
var inst_64904 = cljs.core.chunked_seq_QMARK_(inst_64902);
var state_64947__$1 = state_64947;
if(inst_64904){
var statearr_64959_66138 = state_64947__$1;
(statearr_64959_66138[(1)] = (16));

} else {
var statearr_64960_66139 = state_64947__$1;
(statearr_64960_66139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (22))){
var inst_64932 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
if(cljs.core.truth_(inst_64932)){
var statearr_64961_66140 = state_64947__$1;
(statearr_64961_66140[(1)] = (23));

} else {
var statearr_64962_66141 = state_64947__$1;
(statearr_64962_66141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (6))){
var inst_64926 = (state_64947[(7)]);
var inst_64878 = (state_64947[(8)]);
var inst_64928 = (state_64947[(11)]);
var inst_64926__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_64878) : topic_fn.call(null,inst_64878));
var inst_64927 = cljs.core.deref(mults);
var inst_64928__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64927,inst_64926__$1);
var state_64947__$1 = (function (){var statearr_64963 = state_64947;
(statearr_64963[(7)] = inst_64926__$1);

(statearr_64963[(11)] = inst_64928__$1);

return statearr_64963;
})();
if(cljs.core.truth_(inst_64928__$1)){
var statearr_64964_66143 = state_64947__$1;
(statearr_64964_66143[(1)] = (19));

} else {
var statearr_64965_66144 = state_64947__$1;
(statearr_64965_66144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (25))){
var inst_64937 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64966_66145 = state_64947__$1;
(statearr_64966_66145[(2)] = inst_64937);

(statearr_64966_66145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (17))){
var inst_64902 = (state_64947[(10)]);
var inst_64911 = cljs.core.first(inst_64902);
var inst_64912 = cljs.core.async.muxch_STAR_(inst_64911);
var inst_64913 = cljs.core.async.close_BANG_(inst_64912);
var inst_64914 = cljs.core.next(inst_64902);
var inst_64888 = inst_64914;
var inst_64889 = null;
var inst_64890 = (0);
var inst_64891 = (0);
var state_64947__$1 = (function (){var statearr_64967 = state_64947;
(statearr_64967[(12)] = inst_64913);

(statearr_64967[(13)] = inst_64888);

(statearr_64967[(14)] = inst_64891);

(statearr_64967[(15)] = inst_64890);

(statearr_64967[(16)] = inst_64889);

return statearr_64967;
})();
var statearr_64968_66146 = state_64947__$1;
(statearr_64968_66146[(2)] = null);

(statearr_64968_66146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (3))){
var inst_64945 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64947__$1,inst_64945);
} else {
if((state_val_64948 === (12))){
var inst_64922 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64969_66147 = state_64947__$1;
(statearr_64969_66147[(2)] = inst_64922);

(statearr_64969_66147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (2))){
var state_64947__$1 = state_64947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64947__$1,(4),ch);
} else {
if((state_val_64948 === (23))){
var state_64947__$1 = state_64947;
var statearr_64970_66148 = state_64947__$1;
(statearr_64970_66148[(2)] = null);

(statearr_64970_66148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (19))){
var inst_64878 = (state_64947[(8)]);
var inst_64928 = (state_64947[(11)]);
var inst_64930 = cljs.core.async.muxch_STAR_(inst_64928);
var state_64947__$1 = state_64947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64947__$1,(22),inst_64930,inst_64878);
} else {
if((state_val_64948 === (11))){
var inst_64888 = (state_64947[(13)]);
var inst_64902 = (state_64947[(10)]);
var inst_64902__$1 = cljs.core.seq(inst_64888);
var state_64947__$1 = (function (){var statearr_64971 = state_64947;
(statearr_64971[(10)] = inst_64902__$1);

return statearr_64971;
})();
if(inst_64902__$1){
var statearr_64972_66150 = state_64947__$1;
(statearr_64972_66150[(1)] = (13));

} else {
var statearr_64973_66151 = state_64947__$1;
(statearr_64973_66151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (9))){
var inst_64924 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64974_66155 = state_64947__$1;
(statearr_64974_66155[(2)] = inst_64924);

(statearr_64974_66155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (5))){
var inst_64885 = cljs.core.deref(mults);
var inst_64886 = cljs.core.vals(inst_64885);
var inst_64887 = cljs.core.seq(inst_64886);
var inst_64888 = inst_64887;
var inst_64889 = null;
var inst_64890 = (0);
var inst_64891 = (0);
var state_64947__$1 = (function (){var statearr_64975 = state_64947;
(statearr_64975[(13)] = inst_64888);

(statearr_64975[(14)] = inst_64891);

(statearr_64975[(15)] = inst_64890);

(statearr_64975[(16)] = inst_64889);

return statearr_64975;
})();
var statearr_64976_66160 = state_64947__$1;
(statearr_64976_66160[(2)] = null);

(statearr_64976_66160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (14))){
var state_64947__$1 = state_64947;
var statearr_64980_66161 = state_64947__$1;
(statearr_64980_66161[(2)] = null);

(statearr_64980_66161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (16))){
var inst_64902 = (state_64947[(10)]);
var inst_64906 = cljs.core.chunk_first(inst_64902);
var inst_64907 = cljs.core.chunk_rest(inst_64902);
var inst_64908 = cljs.core.count(inst_64906);
var inst_64888 = inst_64907;
var inst_64889 = inst_64906;
var inst_64890 = inst_64908;
var inst_64891 = (0);
var state_64947__$1 = (function (){var statearr_64981 = state_64947;
(statearr_64981[(13)] = inst_64888);

(statearr_64981[(14)] = inst_64891);

(statearr_64981[(15)] = inst_64890);

(statearr_64981[(16)] = inst_64889);

return statearr_64981;
})();
var statearr_64982_66167 = state_64947__$1;
(statearr_64982_66167[(2)] = null);

(statearr_64982_66167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (10))){
var inst_64888 = (state_64947[(13)]);
var inst_64891 = (state_64947[(14)]);
var inst_64890 = (state_64947[(15)]);
var inst_64889 = (state_64947[(16)]);
var inst_64896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_64889,inst_64891);
var inst_64897 = cljs.core.async.muxch_STAR_(inst_64896);
var inst_64898 = cljs.core.async.close_BANG_(inst_64897);
var inst_64899 = (inst_64891 + (1));
var tmp64977 = inst_64888;
var tmp64978 = inst_64890;
var tmp64979 = inst_64889;
var inst_64888__$1 = tmp64977;
var inst_64889__$1 = tmp64979;
var inst_64890__$1 = tmp64978;
var inst_64891__$1 = inst_64899;
var state_64947__$1 = (function (){var statearr_64983 = state_64947;
(statearr_64983[(17)] = inst_64898);

(statearr_64983[(13)] = inst_64888__$1);

(statearr_64983[(14)] = inst_64891__$1);

(statearr_64983[(15)] = inst_64890__$1);

(statearr_64983[(16)] = inst_64889__$1);

return statearr_64983;
})();
var statearr_64984_66178 = state_64947__$1;
(statearr_64984_66178[(2)] = null);

(statearr_64984_66178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (18))){
var inst_64917 = (state_64947[(2)]);
var state_64947__$1 = state_64947;
var statearr_64985_66179 = state_64947__$1;
(statearr_64985_66179[(2)] = inst_64917);

(statearr_64985_66179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64948 === (8))){
var inst_64891 = (state_64947[(14)]);
var inst_64890 = (state_64947[(15)]);
var inst_64893 = (inst_64891 < inst_64890);
var inst_64894 = inst_64893;
var state_64947__$1 = state_64947;
if(cljs.core.truth_(inst_64894)){
var statearr_64986_66180 = state_64947__$1;
(statearr_64986_66180[(1)] = (10));

} else {
var statearr_64987_66181 = state_64947__$1;
(statearr_64987_66181[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_64988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64988[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_64988[(1)] = (1));

return statearr_64988;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_64947){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_64947);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e64989){if((e64989 instanceof Object)){
var ex__41716__auto__ = e64989;
var statearr_64990_66194 = state_64947;
(statearr_64990_66194[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66199 = state_64947;
state_64947 = G__66199;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_64947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_64947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_64991 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_64991[(6)] = c__41735__auto___66124);

return statearr_64991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__64993 = arguments.length;
switch (G__64993) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__64995 = arguments.length;
switch (G__64995) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__64997 = arguments.length;
switch (G__64997) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__41735__auto___66224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65036){
var state_val_65037 = (state_65036[(1)]);
if((state_val_65037 === (7))){
var state_65036__$1 = state_65036;
var statearr_65038_66225 = state_65036__$1;
(statearr_65038_66225[(2)] = null);

(statearr_65038_66225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (1))){
var state_65036__$1 = state_65036;
var statearr_65039_66226 = state_65036__$1;
(statearr_65039_66226[(2)] = null);

(statearr_65039_66226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (4))){
var inst_65000 = (state_65036[(7)]);
var inst_65002 = (inst_65000 < cnt);
var state_65036__$1 = state_65036;
if(cljs.core.truth_(inst_65002)){
var statearr_65040_66227 = state_65036__$1;
(statearr_65040_66227[(1)] = (6));

} else {
var statearr_65041_66228 = state_65036__$1;
(statearr_65041_66228[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (15))){
var inst_65032 = (state_65036[(2)]);
var state_65036__$1 = state_65036;
var statearr_65042_66229 = state_65036__$1;
(statearr_65042_66229[(2)] = inst_65032);

(statearr_65042_66229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (13))){
var inst_65025 = cljs.core.async.close_BANG_(out);
var state_65036__$1 = state_65036;
var statearr_65043_66244 = state_65036__$1;
(statearr_65043_66244[(2)] = inst_65025);

(statearr_65043_66244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (6))){
var state_65036__$1 = state_65036;
var statearr_65044_66247 = state_65036__$1;
(statearr_65044_66247[(2)] = null);

(statearr_65044_66247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (3))){
var inst_65034 = (state_65036[(2)]);
var state_65036__$1 = state_65036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65036__$1,inst_65034);
} else {
if((state_val_65037 === (12))){
var inst_65022 = (state_65036[(8)]);
var inst_65022__$1 = (state_65036[(2)]);
var inst_65023 = cljs.core.some(cljs.core.nil_QMARK_,inst_65022__$1);
var state_65036__$1 = (function (){var statearr_65045 = state_65036;
(statearr_65045[(8)] = inst_65022__$1);

return statearr_65045;
})();
if(cljs.core.truth_(inst_65023)){
var statearr_65046_66254 = state_65036__$1;
(statearr_65046_66254[(1)] = (13));

} else {
var statearr_65047_66255 = state_65036__$1;
(statearr_65047_66255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (2))){
var inst_64999 = cljs.core.reset_BANG_(dctr,cnt);
var inst_65000 = (0);
var state_65036__$1 = (function (){var statearr_65048 = state_65036;
(statearr_65048[(9)] = inst_64999);

(statearr_65048[(7)] = inst_65000);

return statearr_65048;
})();
var statearr_65049_66257 = state_65036__$1;
(statearr_65049_66257[(2)] = null);

(statearr_65049_66257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (11))){
var inst_65000 = (state_65036[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65036,(10),Object,null,(9));
var inst_65009 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_65000) : chs__$1.call(null,inst_65000));
var inst_65010 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_65000) : done.call(null,inst_65000));
var inst_65011 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_65009,inst_65010);
var state_65036__$1 = state_65036;
var statearr_65050_66258 = state_65036__$1;
(statearr_65050_66258[(2)] = inst_65011);


cljs.core.async.impl.ioc_helpers.process_exception(state_65036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (9))){
var inst_65000 = (state_65036[(7)]);
var inst_65013 = (state_65036[(2)]);
var inst_65014 = (inst_65000 + (1));
var inst_65000__$1 = inst_65014;
var state_65036__$1 = (function (){var statearr_65051 = state_65036;
(statearr_65051[(10)] = inst_65013);

(statearr_65051[(7)] = inst_65000__$1);

return statearr_65051;
})();
var statearr_65052_66259 = state_65036__$1;
(statearr_65052_66259[(2)] = null);

(statearr_65052_66259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (5))){
var inst_65020 = (state_65036[(2)]);
var state_65036__$1 = (function (){var statearr_65053 = state_65036;
(statearr_65053[(11)] = inst_65020);

return statearr_65053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65036__$1,(12),dchan);
} else {
if((state_val_65037 === (14))){
var inst_65022 = (state_65036[(8)]);
var inst_65027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_65022);
var state_65036__$1 = state_65036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65036__$1,(16),out,inst_65027);
} else {
if((state_val_65037 === (16))){
var inst_65029 = (state_65036[(2)]);
var state_65036__$1 = (function (){var statearr_65054 = state_65036;
(statearr_65054[(12)] = inst_65029);

return statearr_65054;
})();
var statearr_65055_66260 = state_65036__$1;
(statearr_65055_66260[(2)] = null);

(statearr_65055_66260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (10))){
var inst_65004 = (state_65036[(2)]);
var inst_65005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_65036__$1 = (function (){var statearr_65056 = state_65036;
(statearr_65056[(13)] = inst_65004);

return statearr_65056;
})();
var statearr_65057_66264 = state_65036__$1;
(statearr_65057_66264[(2)] = inst_65005);


cljs.core.async.impl.ioc_helpers.process_exception(state_65036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65037 === (8))){
var inst_65018 = (state_65036[(2)]);
var state_65036__$1 = state_65036;
var statearr_65058_66269 = state_65036__$1;
(statearr_65058_66269[(2)] = inst_65018);

(statearr_65058_66269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65059[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65059[(1)] = (1));

return statearr_65059;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65036){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65036);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65060){if((e65060 instanceof Object)){
var ex__41716__auto__ = e65060;
var statearr_65061_66290 = state_65036;
(statearr_65061_66290[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66291 = state_65036;
state_65036 = G__66291;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65062 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65062[(6)] = c__41735__auto___66224);

return statearr_65062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__65065 = arguments.length;
switch (G__65065) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65097){
var state_val_65098 = (state_65097[(1)]);
if((state_val_65098 === (7))){
var inst_65076 = (state_65097[(7)]);
var inst_65077 = (state_65097[(8)]);
var inst_65076__$1 = (state_65097[(2)]);
var inst_65077__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65076__$1,(0),null);
var inst_65078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65076__$1,(1),null);
var inst_65079 = (inst_65077__$1 == null);
var state_65097__$1 = (function (){var statearr_65099 = state_65097;
(statearr_65099[(9)] = inst_65078);

(statearr_65099[(7)] = inst_65076__$1);

(statearr_65099[(8)] = inst_65077__$1);

return statearr_65099;
})();
if(cljs.core.truth_(inst_65079)){
var statearr_65100_66333 = state_65097__$1;
(statearr_65100_66333[(1)] = (8));

} else {
var statearr_65101_66335 = state_65097__$1;
(statearr_65101_66335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (1))){
var inst_65066 = cljs.core.vec(chs);
var inst_65067 = inst_65066;
var state_65097__$1 = (function (){var statearr_65102 = state_65097;
(statearr_65102[(10)] = inst_65067);

return statearr_65102;
})();
var statearr_65103_66336 = state_65097__$1;
(statearr_65103_66336[(2)] = null);

(statearr_65103_66336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (4))){
var inst_65067 = (state_65097[(10)]);
var state_65097__$1 = state_65097;
return cljs.core.async.ioc_alts_BANG_(state_65097__$1,(7),inst_65067);
} else {
if((state_val_65098 === (6))){
var inst_65093 = (state_65097[(2)]);
var state_65097__$1 = state_65097;
var statearr_65104_66341 = state_65097__$1;
(statearr_65104_66341[(2)] = inst_65093);

(statearr_65104_66341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (3))){
var inst_65095 = (state_65097[(2)]);
var state_65097__$1 = state_65097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65097__$1,inst_65095);
} else {
if((state_val_65098 === (2))){
var inst_65067 = (state_65097[(10)]);
var inst_65069 = cljs.core.count(inst_65067);
var inst_65070 = (inst_65069 > (0));
var state_65097__$1 = state_65097;
if(cljs.core.truth_(inst_65070)){
var statearr_65106_66357 = state_65097__$1;
(statearr_65106_66357[(1)] = (4));

} else {
var statearr_65107_66358 = state_65097__$1;
(statearr_65107_66358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (11))){
var inst_65067 = (state_65097[(10)]);
var inst_65086 = (state_65097[(2)]);
var tmp65105 = inst_65067;
var inst_65067__$1 = tmp65105;
var state_65097__$1 = (function (){var statearr_65108 = state_65097;
(statearr_65108[(11)] = inst_65086);

(statearr_65108[(10)] = inst_65067__$1);

return statearr_65108;
})();
var statearr_65109_66363 = state_65097__$1;
(statearr_65109_66363[(2)] = null);

(statearr_65109_66363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (9))){
var inst_65077 = (state_65097[(8)]);
var state_65097__$1 = state_65097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65097__$1,(11),out,inst_65077);
} else {
if((state_val_65098 === (5))){
var inst_65091 = cljs.core.async.close_BANG_(out);
var state_65097__$1 = state_65097;
var statearr_65110_66364 = state_65097__$1;
(statearr_65110_66364[(2)] = inst_65091);

(statearr_65110_66364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (10))){
var inst_65089 = (state_65097[(2)]);
var state_65097__$1 = state_65097;
var statearr_65111_66365 = state_65097__$1;
(statearr_65111_66365[(2)] = inst_65089);

(statearr_65111_66365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65098 === (8))){
var inst_65078 = (state_65097[(9)]);
var inst_65076 = (state_65097[(7)]);
var inst_65067 = (state_65097[(10)]);
var inst_65077 = (state_65097[(8)]);
var inst_65081 = (function (){var cs = inst_65067;
var vec__65072 = inst_65076;
var v = inst_65077;
var c = inst_65078;
return (function (p1__65063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__65063_SHARP_);
});
})();
var inst_65082 = cljs.core.filterv(inst_65081,inst_65067);
var inst_65067__$1 = inst_65082;
var state_65097__$1 = (function (){var statearr_65112 = state_65097;
(statearr_65112[(10)] = inst_65067__$1);

return statearr_65112;
})();
var statearr_65113_66366 = state_65097__$1;
(statearr_65113_66366[(2)] = null);

(statearr_65113_66366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65114[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65114[(1)] = (1));

return statearr_65114;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65097){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65097);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65115){if((e65115 instanceof Object)){
var ex__41716__auto__ = e65115;
var statearr_65116_66367 = state_65097;
(statearr_65116_66367[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66368 = state_65097;
state_65097 = G__66368;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65117 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65117[(6)] = c__41735__auto___66298);

return statearr_65117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__65119 = arguments.length;
switch (G__65119) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65143){
var state_val_65144 = (state_65143[(1)]);
if((state_val_65144 === (7))){
var inst_65125 = (state_65143[(7)]);
var inst_65125__$1 = (state_65143[(2)]);
var inst_65126 = (inst_65125__$1 == null);
var inst_65127 = cljs.core.not(inst_65126);
var state_65143__$1 = (function (){var statearr_65145 = state_65143;
(statearr_65145[(7)] = inst_65125__$1);

return statearr_65145;
})();
if(inst_65127){
var statearr_65146_66397 = state_65143__$1;
(statearr_65146_66397[(1)] = (8));

} else {
var statearr_65147_66401 = state_65143__$1;
(statearr_65147_66401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (1))){
var inst_65120 = (0);
var state_65143__$1 = (function (){var statearr_65148 = state_65143;
(statearr_65148[(8)] = inst_65120);

return statearr_65148;
})();
var statearr_65149_66402 = state_65143__$1;
(statearr_65149_66402[(2)] = null);

(statearr_65149_66402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (4))){
var state_65143__$1 = state_65143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65143__$1,(7),ch);
} else {
if((state_val_65144 === (6))){
var inst_65138 = (state_65143[(2)]);
var state_65143__$1 = state_65143;
var statearr_65150_66403 = state_65143__$1;
(statearr_65150_66403[(2)] = inst_65138);

(statearr_65150_66403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (3))){
var inst_65140 = (state_65143[(2)]);
var inst_65141 = cljs.core.async.close_BANG_(out);
var state_65143__$1 = (function (){var statearr_65151 = state_65143;
(statearr_65151[(9)] = inst_65140);

return statearr_65151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65143__$1,inst_65141);
} else {
if((state_val_65144 === (2))){
var inst_65120 = (state_65143[(8)]);
var inst_65122 = (inst_65120 < n);
var state_65143__$1 = state_65143;
if(cljs.core.truth_(inst_65122)){
var statearr_65152_66404 = state_65143__$1;
(statearr_65152_66404[(1)] = (4));

} else {
var statearr_65153_66405 = state_65143__$1;
(statearr_65153_66405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (11))){
var inst_65120 = (state_65143[(8)]);
var inst_65130 = (state_65143[(2)]);
var inst_65131 = (inst_65120 + (1));
var inst_65120__$1 = inst_65131;
var state_65143__$1 = (function (){var statearr_65154 = state_65143;
(statearr_65154[(10)] = inst_65130);

(statearr_65154[(8)] = inst_65120__$1);

return statearr_65154;
})();
var statearr_65155_66406 = state_65143__$1;
(statearr_65155_66406[(2)] = null);

(statearr_65155_66406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (9))){
var state_65143__$1 = state_65143;
var statearr_65156_66408 = state_65143__$1;
(statearr_65156_66408[(2)] = null);

(statearr_65156_66408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (5))){
var state_65143__$1 = state_65143;
var statearr_65157_66409 = state_65143__$1;
(statearr_65157_66409[(2)] = null);

(statearr_65157_66409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (10))){
var inst_65135 = (state_65143[(2)]);
var state_65143__$1 = state_65143;
var statearr_65158_66411 = state_65143__$1;
(statearr_65158_66411[(2)] = inst_65135);

(statearr_65158_66411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65144 === (8))){
var inst_65125 = (state_65143[(7)]);
var state_65143__$1 = state_65143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65143__$1,(11),out,inst_65125);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65159[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65159[(1)] = (1));

return statearr_65159;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65143){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65143);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65160){if((e65160 instanceof Object)){
var ex__41716__auto__ = e65160;
var statearr_65161_66413 = state_65143;
(statearr_65161_66413[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66414 = state_65143;
state_65143 = G__66414;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65162 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65162[(6)] = c__41735__auto___66396);

return statearr_65162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65164 = (function (f,ch,meta65165){
this.f = f;
this.ch = ch;
this.meta65165 = meta65165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65166,meta65165__$1){
var self__ = this;
var _65166__$1 = this;
return (new cljs.core.async.t_cljs$core$async65164(self__.f,self__.ch,meta65165__$1));
}));

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65166){
var self__ = this;
var _65166__$1 = this;
return self__.meta65165;
}));

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65167 = (function (f,ch,meta65165,_,fn1,meta65168){
this.f = f;
this.ch = ch;
this.meta65165 = meta65165;
this._ = _;
this.fn1 = fn1;
this.meta65168 = meta65168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65169,meta65168__$1){
var self__ = this;
var _65169__$1 = this;
return (new cljs.core.async.t_cljs$core$async65167(self__.f,self__.ch,self__.meta65165,self__._,self__.fn1,meta65168__$1));
}));

(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65169){
var self__ = this;
var _65169__$1 = this;
return self__.meta65168;
}));

(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__65163_SHARP_){
var G__65170 = (((p1__65163_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__65163_SHARP_) : self__.f.call(null,p1__65163_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__65170) : f1.call(null,G__65170));
});
}));

(cljs.core.async.t_cljs$core$async65167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65165","meta65165",-1835692105,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async65164","cljs.core.async/t_cljs$core$async65164",-1939338700,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta65168","meta65168",-653852509,null)], null);
}));

(cljs.core.async.t_cljs$core$async65167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65167");

(cljs.core.async.t_cljs$core$async65167.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async65167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65167.
 */
cljs.core.async.__GT_t_cljs$core$async65167 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65167(f__$1,ch__$1,meta65165__$1,___$2,fn1__$1,meta65168){
return (new cljs.core.async.t_cljs$core$async65167(f__$1,ch__$1,meta65165__$1,___$2,fn1__$1,meta65168));
});

}

return (new cljs.core.async.t_cljs$core$async65167(self__.f,self__.ch,self__.meta65165,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__65171 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65171) : self__.f.call(null,G__65171));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async65164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65165","meta65165",-1835692105,null)], null);
}));

(cljs.core.async.t_cljs$core$async65164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65164");

(cljs.core.async.t_cljs$core$async65164.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async65164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65164.
 */
cljs.core.async.__GT_t_cljs$core$async65164 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65164(f__$1,ch__$1,meta65165){
return (new cljs.core.async.t_cljs$core$async65164(f__$1,ch__$1,meta65165));
});

}

return (new cljs.core.async.t_cljs$core$async65164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65172 = (function (f,ch,meta65173){
this.f = f;
this.ch = ch;
this.meta65173 = meta65173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65174,meta65173__$1){
var self__ = this;
var _65174__$1 = this;
return (new cljs.core.async.t_cljs$core$async65172(self__.f,self__.ch,meta65173__$1));
}));

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65174){
var self__ = this;
var _65174__$1 = this;
return self__.meta65173;
}));

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async65172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65173","meta65173",-79516440,null)], null);
}));

(cljs.core.async.t_cljs$core$async65172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65172");

(cljs.core.async.t_cljs$core$async65172.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async65172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65172.
 */
cljs.core.async.__GT_t_cljs$core$async65172 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async65172(f__$1,ch__$1,meta65173){
return (new cljs.core.async.t_cljs$core$async65172(f__$1,ch__$1,meta65173));
});

}

return (new cljs.core.async.t_cljs$core$async65172(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65175 = (function (p,ch,meta65176){
this.p = p;
this.ch = ch;
this.meta65176 = meta65176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65177,meta65176__$1){
var self__ = this;
var _65177__$1 = this;
return (new cljs.core.async.t_cljs$core$async65175(self__.p,self__.ch,meta65176__$1));
}));

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65177){
var self__ = this;
var _65177__$1 = this;
return self__.meta65176;
}));

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async65175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65176","meta65176",-567037394,null)], null);
}));

(cljs.core.async.t_cljs$core$async65175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65175");

(cljs.core.async.t_cljs$core$async65175.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async65175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65175.
 */
cljs.core.async.__GT_t_cljs$core$async65175 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async65175(p__$1,ch__$1,meta65176){
return (new cljs.core.async.t_cljs$core$async65175(p__$1,ch__$1,meta65176));
});

}

return (new cljs.core.async.t_cljs$core$async65175(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__65179 = arguments.length;
switch (G__65179) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65200){
var state_val_65201 = (state_65200[(1)]);
if((state_val_65201 === (7))){
var inst_65196 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
var statearr_65202_66490 = state_65200__$1;
(statearr_65202_66490[(2)] = inst_65196);

(statearr_65202_66490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (1))){
var state_65200__$1 = state_65200;
var statearr_65203_66491 = state_65200__$1;
(statearr_65203_66491[(2)] = null);

(statearr_65203_66491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (4))){
var inst_65182 = (state_65200[(7)]);
var inst_65182__$1 = (state_65200[(2)]);
var inst_65183 = (inst_65182__$1 == null);
var state_65200__$1 = (function (){var statearr_65204 = state_65200;
(statearr_65204[(7)] = inst_65182__$1);

return statearr_65204;
})();
if(cljs.core.truth_(inst_65183)){
var statearr_65205_66495 = state_65200__$1;
(statearr_65205_66495[(1)] = (5));

} else {
var statearr_65206_66496 = state_65200__$1;
(statearr_65206_66496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (6))){
var inst_65182 = (state_65200[(7)]);
var inst_65187 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65182) : p.call(null,inst_65182));
var state_65200__$1 = state_65200;
if(cljs.core.truth_(inst_65187)){
var statearr_65207_66497 = state_65200__$1;
(statearr_65207_66497[(1)] = (8));

} else {
var statearr_65208_66498 = state_65200__$1;
(statearr_65208_66498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (3))){
var inst_65198 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65200__$1,inst_65198);
} else {
if((state_val_65201 === (2))){
var state_65200__$1 = state_65200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65200__$1,(4),ch);
} else {
if((state_val_65201 === (11))){
var inst_65190 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
var statearr_65209_66499 = state_65200__$1;
(statearr_65209_66499[(2)] = inst_65190);

(statearr_65209_66499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (9))){
var state_65200__$1 = state_65200;
var statearr_65210_66500 = state_65200__$1;
(statearr_65210_66500[(2)] = null);

(statearr_65210_66500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (5))){
var inst_65185 = cljs.core.async.close_BANG_(out);
var state_65200__$1 = state_65200;
var statearr_65211_66501 = state_65200__$1;
(statearr_65211_66501[(2)] = inst_65185);

(statearr_65211_66501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (10))){
var inst_65193 = (state_65200[(2)]);
var state_65200__$1 = (function (){var statearr_65212 = state_65200;
(statearr_65212[(8)] = inst_65193);

return statearr_65212;
})();
var statearr_65213_66506 = state_65200__$1;
(statearr_65213_66506[(2)] = null);

(statearr_65213_66506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (8))){
var inst_65182 = (state_65200[(7)]);
var state_65200__$1 = state_65200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65200__$1,(11),out,inst_65182);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65214 = [null,null,null,null,null,null,null,null,null];
(statearr_65214[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65214[(1)] = (1));

return statearr_65214;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65200){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65200);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65215){if((e65215 instanceof Object)){
var ex__41716__auto__ = e65215;
var statearr_65216_66510 = state_65200;
(statearr_65216_66510[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66511 = state_65200;
state_65200 = G__66511;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65217 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65217[(6)] = c__41735__auto___66489);

return statearr_65217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__65219 = arguments.length;
switch (G__65219) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65281){
var state_val_65282 = (state_65281[(1)]);
if((state_val_65282 === (7))){
var inst_65277 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
var statearr_65283_66517 = state_65281__$1;
(statearr_65283_66517[(2)] = inst_65277);

(statearr_65283_66517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (20))){
var inst_65247 = (state_65281[(7)]);
var inst_65258 = (state_65281[(2)]);
var inst_65259 = cljs.core.next(inst_65247);
var inst_65233 = inst_65259;
var inst_65234 = null;
var inst_65235 = (0);
var inst_65236 = (0);
var state_65281__$1 = (function (){var statearr_65284 = state_65281;
(statearr_65284[(8)] = inst_65234);

(statearr_65284[(9)] = inst_65258);

(statearr_65284[(10)] = inst_65233);

(statearr_65284[(11)] = inst_65235);

(statearr_65284[(12)] = inst_65236);

return statearr_65284;
})();
var statearr_65285_66518 = state_65281__$1;
(statearr_65285_66518[(2)] = null);

(statearr_65285_66518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (1))){
var state_65281__$1 = state_65281;
var statearr_65286_66519 = state_65281__$1;
(statearr_65286_66519[(2)] = null);

(statearr_65286_66519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (4))){
var inst_65222 = (state_65281[(13)]);
var inst_65222__$1 = (state_65281[(2)]);
var inst_65223 = (inst_65222__$1 == null);
var state_65281__$1 = (function (){var statearr_65287 = state_65281;
(statearr_65287[(13)] = inst_65222__$1);

return statearr_65287;
})();
if(cljs.core.truth_(inst_65223)){
var statearr_65288_66520 = state_65281__$1;
(statearr_65288_66520[(1)] = (5));

} else {
var statearr_65289_66522 = state_65281__$1;
(statearr_65289_66522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (15))){
var state_65281__$1 = state_65281;
var statearr_65293_66523 = state_65281__$1;
(statearr_65293_66523[(2)] = null);

(statearr_65293_66523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (21))){
var state_65281__$1 = state_65281;
var statearr_65294_66524 = state_65281__$1;
(statearr_65294_66524[(2)] = null);

(statearr_65294_66524[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (13))){
var inst_65234 = (state_65281[(8)]);
var inst_65233 = (state_65281[(10)]);
var inst_65235 = (state_65281[(11)]);
var inst_65236 = (state_65281[(12)]);
var inst_65243 = (state_65281[(2)]);
var inst_65244 = (inst_65236 + (1));
var tmp65290 = inst_65234;
var tmp65291 = inst_65233;
var tmp65292 = inst_65235;
var inst_65233__$1 = tmp65291;
var inst_65234__$1 = tmp65290;
var inst_65235__$1 = tmp65292;
var inst_65236__$1 = inst_65244;
var state_65281__$1 = (function (){var statearr_65295 = state_65281;
(statearr_65295[(8)] = inst_65234__$1);

(statearr_65295[(14)] = inst_65243);

(statearr_65295[(10)] = inst_65233__$1);

(statearr_65295[(11)] = inst_65235__$1);

(statearr_65295[(12)] = inst_65236__$1);

return statearr_65295;
})();
var statearr_65296_66525 = state_65281__$1;
(statearr_65296_66525[(2)] = null);

(statearr_65296_66525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (22))){
var state_65281__$1 = state_65281;
var statearr_65297_66531 = state_65281__$1;
(statearr_65297_66531[(2)] = null);

(statearr_65297_66531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (6))){
var inst_65222 = (state_65281[(13)]);
var inst_65231 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65222) : f.call(null,inst_65222));
var inst_65232 = cljs.core.seq(inst_65231);
var inst_65233 = inst_65232;
var inst_65234 = null;
var inst_65235 = (0);
var inst_65236 = (0);
var state_65281__$1 = (function (){var statearr_65298 = state_65281;
(statearr_65298[(8)] = inst_65234);

(statearr_65298[(10)] = inst_65233);

(statearr_65298[(11)] = inst_65235);

(statearr_65298[(12)] = inst_65236);

return statearr_65298;
})();
var statearr_65299_66534 = state_65281__$1;
(statearr_65299_66534[(2)] = null);

(statearr_65299_66534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (17))){
var inst_65247 = (state_65281[(7)]);
var inst_65251 = cljs.core.chunk_first(inst_65247);
var inst_65252 = cljs.core.chunk_rest(inst_65247);
var inst_65253 = cljs.core.count(inst_65251);
var inst_65233 = inst_65252;
var inst_65234 = inst_65251;
var inst_65235 = inst_65253;
var inst_65236 = (0);
var state_65281__$1 = (function (){var statearr_65300 = state_65281;
(statearr_65300[(8)] = inst_65234);

(statearr_65300[(10)] = inst_65233);

(statearr_65300[(11)] = inst_65235);

(statearr_65300[(12)] = inst_65236);

return statearr_65300;
})();
var statearr_65301_66535 = state_65281__$1;
(statearr_65301_66535[(2)] = null);

(statearr_65301_66535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (3))){
var inst_65279 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65281__$1,inst_65279);
} else {
if((state_val_65282 === (12))){
var inst_65267 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
var statearr_65302_66536 = state_65281__$1;
(statearr_65302_66536[(2)] = inst_65267);

(statearr_65302_66536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (2))){
var state_65281__$1 = state_65281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65281__$1,(4),in$);
} else {
if((state_val_65282 === (23))){
var inst_65275 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
var statearr_65303_66537 = state_65281__$1;
(statearr_65303_66537[(2)] = inst_65275);

(statearr_65303_66537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (19))){
var inst_65262 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
var statearr_65304_66538 = state_65281__$1;
(statearr_65304_66538[(2)] = inst_65262);

(statearr_65304_66538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (11))){
var inst_65233 = (state_65281[(10)]);
var inst_65247 = (state_65281[(7)]);
var inst_65247__$1 = cljs.core.seq(inst_65233);
var state_65281__$1 = (function (){var statearr_65305 = state_65281;
(statearr_65305[(7)] = inst_65247__$1);

return statearr_65305;
})();
if(inst_65247__$1){
var statearr_65306_66539 = state_65281__$1;
(statearr_65306_66539[(1)] = (14));

} else {
var statearr_65307_66540 = state_65281__$1;
(statearr_65307_66540[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (9))){
var inst_65269 = (state_65281[(2)]);
var inst_65270 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_65281__$1 = (function (){var statearr_65308 = state_65281;
(statearr_65308[(15)] = inst_65269);

return statearr_65308;
})();
if(cljs.core.truth_(inst_65270)){
var statearr_65309_66541 = state_65281__$1;
(statearr_65309_66541[(1)] = (21));

} else {
var statearr_65310_66544 = state_65281__$1;
(statearr_65310_66544[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (5))){
var inst_65225 = cljs.core.async.close_BANG_(out);
var state_65281__$1 = state_65281;
var statearr_65311_66547 = state_65281__$1;
(statearr_65311_66547[(2)] = inst_65225);

(statearr_65311_66547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (14))){
var inst_65247 = (state_65281[(7)]);
var inst_65249 = cljs.core.chunked_seq_QMARK_(inst_65247);
var state_65281__$1 = state_65281;
if(inst_65249){
var statearr_65312_66548 = state_65281__$1;
(statearr_65312_66548[(1)] = (17));

} else {
var statearr_65313_66549 = state_65281__$1;
(statearr_65313_66549[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (16))){
var inst_65265 = (state_65281[(2)]);
var state_65281__$1 = state_65281;
var statearr_65314_66550 = state_65281__$1;
(statearr_65314_66550[(2)] = inst_65265);

(statearr_65314_66550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65282 === (10))){
var inst_65234 = (state_65281[(8)]);
var inst_65236 = (state_65281[(12)]);
var inst_65241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_65234,inst_65236);
var state_65281__$1 = state_65281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65281__$1,(13),out,inst_65241);
} else {
if((state_val_65282 === (18))){
var inst_65247 = (state_65281[(7)]);
var inst_65256 = cljs.core.first(inst_65247);
var state_65281__$1 = state_65281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65281__$1,(20),out,inst_65256);
} else {
if((state_val_65282 === (8))){
var inst_65235 = (state_65281[(11)]);
var inst_65236 = (state_65281[(12)]);
var inst_65238 = (inst_65236 < inst_65235);
var inst_65239 = inst_65238;
var state_65281__$1 = state_65281;
if(cljs.core.truth_(inst_65239)){
var statearr_65315_66551 = state_65281__$1;
(statearr_65315_66551[(1)] = (10));

} else {
var statearr_65316_66554 = state_65281__$1;
(statearr_65316_66554[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____0 = (function (){
var statearr_65317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65317[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__);

(statearr_65317[(1)] = (1));

return statearr_65317;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____1 = (function (state_65281){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65281);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65318){if((e65318 instanceof Object)){
var ex__41716__auto__ = e65318;
var statearr_65319_66560 = state_65281;
(statearr_65319_66560[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66561 = state_65281;
state_65281 = G__66561;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__ = function(state_65281){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____1.call(this,state_65281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41713__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65320 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65320[(6)] = c__41735__auto__);

return statearr_65320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__65322 = arguments.length;
switch (G__65322) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__65324 = arguments.length;
switch (G__65324) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__65326 = arguments.length;
switch (G__65326) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65350){
var state_val_65351 = (state_65350[(1)]);
if((state_val_65351 === (7))){
var inst_65345 = (state_65350[(2)]);
var state_65350__$1 = state_65350;
var statearr_65352_66587 = state_65350__$1;
(statearr_65352_66587[(2)] = inst_65345);

(statearr_65352_66587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (1))){
var inst_65327 = null;
var state_65350__$1 = (function (){var statearr_65353 = state_65350;
(statearr_65353[(7)] = inst_65327);

return statearr_65353;
})();
var statearr_65354_66592 = state_65350__$1;
(statearr_65354_66592[(2)] = null);

(statearr_65354_66592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (4))){
var inst_65330 = (state_65350[(8)]);
var inst_65330__$1 = (state_65350[(2)]);
var inst_65331 = (inst_65330__$1 == null);
var inst_65332 = cljs.core.not(inst_65331);
var state_65350__$1 = (function (){var statearr_65355 = state_65350;
(statearr_65355[(8)] = inst_65330__$1);

return statearr_65355;
})();
if(inst_65332){
var statearr_65356_66597 = state_65350__$1;
(statearr_65356_66597[(1)] = (5));

} else {
var statearr_65357_66602 = state_65350__$1;
(statearr_65357_66602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (6))){
var state_65350__$1 = state_65350;
var statearr_65358_66606 = state_65350__$1;
(statearr_65358_66606[(2)] = null);

(statearr_65358_66606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (3))){
var inst_65347 = (state_65350[(2)]);
var inst_65348 = cljs.core.async.close_BANG_(out);
var state_65350__$1 = (function (){var statearr_65359 = state_65350;
(statearr_65359[(9)] = inst_65347);

return statearr_65359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65350__$1,inst_65348);
} else {
if((state_val_65351 === (2))){
var state_65350__$1 = state_65350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65350__$1,(4),ch);
} else {
if((state_val_65351 === (11))){
var inst_65330 = (state_65350[(8)]);
var inst_65339 = (state_65350[(2)]);
var inst_65327 = inst_65330;
var state_65350__$1 = (function (){var statearr_65360 = state_65350;
(statearr_65360[(10)] = inst_65339);

(statearr_65360[(7)] = inst_65327);

return statearr_65360;
})();
var statearr_65361_66618 = state_65350__$1;
(statearr_65361_66618[(2)] = null);

(statearr_65361_66618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (9))){
var inst_65330 = (state_65350[(8)]);
var state_65350__$1 = state_65350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65350__$1,(11),out,inst_65330);
} else {
if((state_val_65351 === (5))){
var inst_65327 = (state_65350[(7)]);
var inst_65330 = (state_65350[(8)]);
var inst_65334 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65330,inst_65327);
var state_65350__$1 = state_65350;
if(inst_65334){
var statearr_65363_66631 = state_65350__$1;
(statearr_65363_66631[(1)] = (8));

} else {
var statearr_65364_66633 = state_65350__$1;
(statearr_65364_66633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (10))){
var inst_65342 = (state_65350[(2)]);
var state_65350__$1 = state_65350;
var statearr_65365_66635 = state_65350__$1;
(statearr_65365_66635[(2)] = inst_65342);

(statearr_65365_66635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (8))){
var inst_65327 = (state_65350[(7)]);
var tmp65362 = inst_65327;
var inst_65327__$1 = tmp65362;
var state_65350__$1 = (function (){var statearr_65366 = state_65350;
(statearr_65366[(7)] = inst_65327__$1);

return statearr_65366;
})();
var statearr_65367_66644 = state_65350__$1;
(statearr_65367_66644[(2)] = null);

(statearr_65367_66644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65368[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65368[(1)] = (1));

return statearr_65368;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65350){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65350);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65369){if((e65369 instanceof Object)){
var ex__41716__auto__ = e65369;
var statearr_65370_66657 = state_65350;
(statearr_65370_66657[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66663 = state_65350;
state_65350 = G__66663;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65371 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65371[(6)] = c__41735__auto___66586);

return statearr_65371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__65373 = arguments.length;
switch (G__65373) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65411){
var state_val_65412 = (state_65411[(1)]);
if((state_val_65412 === (7))){
var inst_65407 = (state_65411[(2)]);
var state_65411__$1 = state_65411;
var statearr_65413_66704 = state_65411__$1;
(statearr_65413_66704[(2)] = inst_65407);

(statearr_65413_66704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (1))){
var inst_65374 = (new Array(n));
var inst_65375 = inst_65374;
var inst_65376 = (0);
var state_65411__$1 = (function (){var statearr_65414 = state_65411;
(statearr_65414[(7)] = inst_65376);

(statearr_65414[(8)] = inst_65375);

return statearr_65414;
})();
var statearr_65415_66713 = state_65411__$1;
(statearr_65415_66713[(2)] = null);

(statearr_65415_66713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (4))){
var inst_65379 = (state_65411[(9)]);
var inst_65379__$1 = (state_65411[(2)]);
var inst_65380 = (inst_65379__$1 == null);
var inst_65381 = cljs.core.not(inst_65380);
var state_65411__$1 = (function (){var statearr_65416 = state_65411;
(statearr_65416[(9)] = inst_65379__$1);

return statearr_65416;
})();
if(inst_65381){
var statearr_65417_66717 = state_65411__$1;
(statearr_65417_66717[(1)] = (5));

} else {
var statearr_65418_66718 = state_65411__$1;
(statearr_65418_66718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (15))){
var inst_65401 = (state_65411[(2)]);
var state_65411__$1 = state_65411;
var statearr_65419_66719 = state_65411__$1;
(statearr_65419_66719[(2)] = inst_65401);

(statearr_65419_66719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (13))){
var state_65411__$1 = state_65411;
var statearr_65420_66720 = state_65411__$1;
(statearr_65420_66720[(2)] = null);

(statearr_65420_66720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (6))){
var inst_65376 = (state_65411[(7)]);
var inst_65397 = (inst_65376 > (0));
var state_65411__$1 = state_65411;
if(cljs.core.truth_(inst_65397)){
var statearr_65421_66728 = state_65411__$1;
(statearr_65421_66728[(1)] = (12));

} else {
var statearr_65422_66729 = state_65411__$1;
(statearr_65422_66729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (3))){
var inst_65409 = (state_65411[(2)]);
var state_65411__$1 = state_65411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65411__$1,inst_65409);
} else {
if((state_val_65412 === (12))){
var inst_65375 = (state_65411[(8)]);
var inst_65399 = cljs.core.vec(inst_65375);
var state_65411__$1 = state_65411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65411__$1,(15),out,inst_65399);
} else {
if((state_val_65412 === (2))){
var state_65411__$1 = state_65411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65411__$1,(4),ch);
} else {
if((state_val_65412 === (11))){
var inst_65391 = (state_65411[(2)]);
var inst_65392 = (new Array(n));
var inst_65375 = inst_65392;
var inst_65376 = (0);
var state_65411__$1 = (function (){var statearr_65423 = state_65411;
(statearr_65423[(10)] = inst_65391);

(statearr_65423[(7)] = inst_65376);

(statearr_65423[(8)] = inst_65375);

return statearr_65423;
})();
var statearr_65424_66734 = state_65411__$1;
(statearr_65424_66734[(2)] = null);

(statearr_65424_66734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (9))){
var inst_65375 = (state_65411[(8)]);
var inst_65389 = cljs.core.vec(inst_65375);
var state_65411__$1 = state_65411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65411__$1,(11),out,inst_65389);
} else {
if((state_val_65412 === (5))){
var inst_65376 = (state_65411[(7)]);
var inst_65379 = (state_65411[(9)]);
var inst_65375 = (state_65411[(8)]);
var inst_65384 = (state_65411[(11)]);
var inst_65383 = (inst_65375[inst_65376] = inst_65379);
var inst_65384__$1 = (inst_65376 + (1));
var inst_65385 = (inst_65384__$1 < n);
var state_65411__$1 = (function (){var statearr_65425 = state_65411;
(statearr_65425[(12)] = inst_65383);

(statearr_65425[(11)] = inst_65384__$1);

return statearr_65425;
})();
if(cljs.core.truth_(inst_65385)){
var statearr_65426_66735 = state_65411__$1;
(statearr_65426_66735[(1)] = (8));

} else {
var statearr_65427_66736 = state_65411__$1;
(statearr_65427_66736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (14))){
var inst_65404 = (state_65411[(2)]);
var inst_65405 = cljs.core.async.close_BANG_(out);
var state_65411__$1 = (function (){var statearr_65429 = state_65411;
(statearr_65429[(13)] = inst_65404);

return statearr_65429;
})();
var statearr_65430_66738 = state_65411__$1;
(statearr_65430_66738[(2)] = inst_65405);

(statearr_65430_66738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (10))){
var inst_65395 = (state_65411[(2)]);
var state_65411__$1 = state_65411;
var statearr_65431_66740 = state_65411__$1;
(statearr_65431_66740[(2)] = inst_65395);

(statearr_65431_66740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65412 === (8))){
var inst_65375 = (state_65411[(8)]);
var inst_65384 = (state_65411[(11)]);
var tmp65428 = inst_65375;
var inst_65375__$1 = tmp65428;
var inst_65376 = inst_65384;
var state_65411__$1 = (function (){var statearr_65432 = state_65411;
(statearr_65432[(7)] = inst_65376);

(statearr_65432[(8)] = inst_65375__$1);

return statearr_65432;
})();
var statearr_65433_66742 = state_65411__$1;
(statearr_65433_66742[(2)] = null);

(statearr_65433_66742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65434[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65434[(1)] = (1));

return statearr_65434;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65411){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65411);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65435){if((e65435 instanceof Object)){
var ex__41716__auto__ = e65435;
var statearr_65436_66744 = state_65411;
(statearr_65436_66744[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66745 = state_65411;
state_65411 = G__66745;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65437 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65437[(6)] = c__41735__auto___66695);

return statearr_65437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__65439 = arguments.length;
switch (G__65439) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41735__auto___66749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_65481){
var state_val_65482 = (state_65481[(1)]);
if((state_val_65482 === (7))){
var inst_65477 = (state_65481[(2)]);
var state_65481__$1 = state_65481;
var statearr_65483_66750 = state_65481__$1;
(statearr_65483_66750[(2)] = inst_65477);

(statearr_65483_66750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (1))){
var inst_65440 = [];
var inst_65441 = inst_65440;
var inst_65442 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_65481__$1 = (function (){var statearr_65484 = state_65481;
(statearr_65484[(7)] = inst_65441);

(statearr_65484[(8)] = inst_65442);

return statearr_65484;
})();
var statearr_65485_66751 = state_65481__$1;
(statearr_65485_66751[(2)] = null);

(statearr_65485_66751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (4))){
var inst_65445 = (state_65481[(9)]);
var inst_65445__$1 = (state_65481[(2)]);
var inst_65446 = (inst_65445__$1 == null);
var inst_65447 = cljs.core.not(inst_65446);
var state_65481__$1 = (function (){var statearr_65486 = state_65481;
(statearr_65486[(9)] = inst_65445__$1);

return statearr_65486;
})();
if(inst_65447){
var statearr_65487_66752 = state_65481__$1;
(statearr_65487_66752[(1)] = (5));

} else {
var statearr_65488_66753 = state_65481__$1;
(statearr_65488_66753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (15))){
var inst_65471 = (state_65481[(2)]);
var state_65481__$1 = state_65481;
var statearr_65489_66754 = state_65481__$1;
(statearr_65489_66754[(2)] = inst_65471);

(statearr_65489_66754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (13))){
var state_65481__$1 = state_65481;
var statearr_65490_66756 = state_65481__$1;
(statearr_65490_66756[(2)] = null);

(statearr_65490_66756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (6))){
var inst_65441 = (state_65481[(7)]);
var inst_65466 = inst_65441.length;
var inst_65467 = (inst_65466 > (0));
var state_65481__$1 = state_65481;
if(cljs.core.truth_(inst_65467)){
var statearr_65491_66757 = state_65481__$1;
(statearr_65491_66757[(1)] = (12));

} else {
var statearr_65492_66758 = state_65481__$1;
(statearr_65492_66758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (3))){
var inst_65479 = (state_65481[(2)]);
var state_65481__$1 = state_65481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65481__$1,inst_65479);
} else {
if((state_val_65482 === (12))){
var inst_65441 = (state_65481[(7)]);
var inst_65469 = cljs.core.vec(inst_65441);
var state_65481__$1 = state_65481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65481__$1,(15),out,inst_65469);
} else {
if((state_val_65482 === (2))){
var state_65481__$1 = state_65481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65481__$1,(4),ch);
} else {
if((state_val_65482 === (11))){
var inst_65449 = (state_65481[(10)]);
var inst_65445 = (state_65481[(9)]);
var inst_65459 = (state_65481[(2)]);
var inst_65460 = [];
var inst_65461 = inst_65460.push(inst_65445);
var inst_65441 = inst_65460;
var inst_65442 = inst_65449;
var state_65481__$1 = (function (){var statearr_65493 = state_65481;
(statearr_65493[(7)] = inst_65441);

(statearr_65493[(8)] = inst_65442);

(statearr_65493[(11)] = inst_65461);

(statearr_65493[(12)] = inst_65459);

return statearr_65493;
})();
var statearr_65494_66759 = state_65481__$1;
(statearr_65494_66759[(2)] = null);

(statearr_65494_66759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (9))){
var inst_65441 = (state_65481[(7)]);
var inst_65457 = cljs.core.vec(inst_65441);
var state_65481__$1 = state_65481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65481__$1,(11),out,inst_65457);
} else {
if((state_val_65482 === (5))){
var inst_65442 = (state_65481[(8)]);
var inst_65449 = (state_65481[(10)]);
var inst_65445 = (state_65481[(9)]);
var inst_65449__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65445) : f.call(null,inst_65445));
var inst_65450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65449__$1,inst_65442);
var inst_65451 = cljs.core.keyword_identical_QMARK_(inst_65442,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_65452 = ((inst_65450) || (inst_65451));
var state_65481__$1 = (function (){var statearr_65495 = state_65481;
(statearr_65495[(10)] = inst_65449__$1);

return statearr_65495;
})();
if(cljs.core.truth_(inst_65452)){
var statearr_65496_66763 = state_65481__$1;
(statearr_65496_66763[(1)] = (8));

} else {
var statearr_65497_66764 = state_65481__$1;
(statearr_65497_66764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (14))){
var inst_65474 = (state_65481[(2)]);
var inst_65475 = cljs.core.async.close_BANG_(out);
var state_65481__$1 = (function (){var statearr_65499 = state_65481;
(statearr_65499[(13)] = inst_65474);

return statearr_65499;
})();
var statearr_65500_66765 = state_65481__$1;
(statearr_65500_66765[(2)] = inst_65475);

(statearr_65500_66765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (10))){
var inst_65464 = (state_65481[(2)]);
var state_65481__$1 = state_65481;
var statearr_65501_66766 = state_65481__$1;
(statearr_65501_66766[(2)] = inst_65464);

(statearr_65501_66766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65482 === (8))){
var inst_65441 = (state_65481[(7)]);
var inst_65449 = (state_65481[(10)]);
var inst_65445 = (state_65481[(9)]);
var inst_65454 = inst_65441.push(inst_65445);
var tmp65498 = inst_65441;
var inst_65441__$1 = tmp65498;
var inst_65442 = inst_65449;
var state_65481__$1 = (function (){var statearr_65502 = state_65481;
(statearr_65502[(7)] = inst_65441__$1);

(statearr_65502[(8)] = inst_65442);

(statearr_65502[(14)] = inst_65454);

return statearr_65502;
})();
var statearr_65503_66767 = state_65481__$1;
(statearr_65503_66767[(2)] = null);

(statearr_65503_66767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41713__auto__ = null;
var cljs$core$async$state_machine__41713__auto____0 = (function (){
var statearr_65504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65504[(0)] = cljs$core$async$state_machine__41713__auto__);

(statearr_65504[(1)] = (1));

return statearr_65504;
});
var cljs$core$async$state_machine__41713__auto____1 = (function (state_65481){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_65481);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e65505){if((e65505 instanceof Object)){
var ex__41716__auto__ = e65505;
var statearr_65506_66776 = state_65481;
(statearr_65506_66776[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66777 = state_65481;
state_65481 = G__66777;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
cljs$core$async$state_machine__41713__auto__ = function(state_65481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41713__auto____1.call(this,state_65481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41713__auto____0;
cljs$core$async$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41713__auto____1;
return cljs$core$async$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_65507 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_65507[(6)] = c__41735__auto___66749);

return statearr_65507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
