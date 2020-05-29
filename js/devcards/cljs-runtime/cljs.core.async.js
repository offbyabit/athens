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
var G__46164 = arguments.length;
switch (G__46164) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46165 = (function (f,blockable,meta46166){
this.f = f;
this.blockable = blockable;
this.meta46166 = meta46166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46167,meta46166__$1){
var self__ = this;
var _46167__$1 = this;
return (new cljs.core.async.t_cljs$core$async46165(self__.f,self__.blockable,meta46166__$1));
}));

(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46167){
var self__ = this;
var _46167__$1 = this;
return self__.meta46166;
}));

(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46166","meta46166",912125157,null)], null);
}));

(cljs.core.async.t_cljs$core$async46165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46165");

(cljs.core.async.t_cljs$core$async46165.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46165.
 */
cljs.core.async.__GT_t_cljs$core$async46165 = (function cljs$core$async$__GT_t_cljs$core$async46165(f__$1,blockable__$1,meta46166){
return (new cljs.core.async.t_cljs$core$async46165(f__$1,blockable__$1,meta46166));
});

}

return (new cljs.core.async.t_cljs$core$async46165(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46170 = arguments.length;
switch (G__46170) {
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
var G__46174 = arguments.length;
switch (G__46174) {
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
var G__46176 = arguments.length;
switch (G__46176) {
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
var val_47612 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47612) : fn1.call(null,val_47612));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47612) : fn1.call(null,val_47612));
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
var G__46178 = arguments.length;
switch (G__46178) {
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
var n__4666__auto___47634 = n;
var x_47636 = (0);
while(true){
if((x_47636 < n__4666__auto___47634)){
(a[x_47636] = x_47636);

var G__47638 = (x_47636 + (1));
x_47636 = G__47638;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46179 = (function (flag,meta46180){
this.flag = flag;
this.meta46180 = meta46180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46181,meta46180__$1){
var self__ = this;
var _46181__$1 = this;
return (new cljs.core.async.t_cljs$core$async46179(self__.flag,meta46180__$1));
}));

(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46181){
var self__ = this;
var _46181__$1 = this;
return self__.meta46180;
}));

(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46180","meta46180",2004052615,null)], null);
}));

(cljs.core.async.t_cljs$core$async46179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46179");

(cljs.core.async.t_cljs$core$async46179.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46179.
 */
cljs.core.async.__GT_t_cljs$core$async46179 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46179(flag__$1,meta46180){
return (new cljs.core.async.t_cljs$core$async46179(flag__$1,meta46180));
});

}

return (new cljs.core.async.t_cljs$core$async46179(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46182 = (function (flag,cb,meta46183){
this.flag = flag;
this.cb = cb;
this.meta46183 = meta46183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46184,meta46183__$1){
var self__ = this;
var _46184__$1 = this;
return (new cljs.core.async.t_cljs$core$async46182(self__.flag,self__.cb,meta46183__$1));
}));

(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46184){
var self__ = this;
var _46184__$1 = this;
return self__.meta46183;
}));

(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46183","meta46183",-148015556,null)], null);
}));

(cljs.core.async.t_cljs$core$async46182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46182");

(cljs.core.async.t_cljs$core$async46182.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46182.
 */
cljs.core.async.__GT_t_cljs$core$async46182 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46182(flag__$1,cb__$1,meta46183){
return (new cljs.core.async.t_cljs$core$async46182(flag__$1,cb__$1,meta46183));
});

}

return (new cljs.core.async.t_cljs$core$async46182(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46185_SHARP_){
var G__46187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46185_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46187) : fret.call(null,G__46187));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46186_SHARP_){
var G__46188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46186_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46188) : fret.call(null,G__46188));
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
var G__47673 = (i + (1));
i = G__47673;
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
var len__4789__auto___47679 = arguments.length;
var i__4790__auto___47680 = (0);
while(true){
if((i__4790__auto___47680 < len__4789__auto___47679)){
args__4795__auto__.push((arguments[i__4790__auto___47680]));

var G__47681 = (i__4790__auto___47680 + (1));
i__4790__auto___47680 = G__47681;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46191){
var map__46192 = p__46191;
var map__46192__$1 = (((((!((map__46192 == null))))?(((((map__46192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46192):map__46192);
var opts = map__46192__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46189){
var G__46190 = cljs.core.first(seq46189);
var seq46189__$1 = cljs.core.next(seq46189);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46190,seq46189__$1);
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
var G__46195 = arguments.length;
switch (G__46195) {
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
var c__46106__auto___47701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46219){
var state_val_46220 = (state_46219[(1)]);
if((state_val_46220 === (7))){
var inst_46215 = (state_46219[(2)]);
var state_46219__$1 = state_46219;
var statearr_46221_47702 = state_46219__$1;
(statearr_46221_47702[(2)] = inst_46215);

(statearr_46221_47702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (1))){
var state_46219__$1 = state_46219;
var statearr_46222_47703 = state_46219__$1;
(statearr_46222_47703[(2)] = null);

(statearr_46222_47703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (4))){
var inst_46198 = (state_46219[(7)]);
var inst_46198__$1 = (state_46219[(2)]);
var inst_46199 = (inst_46198__$1 == null);
var state_46219__$1 = (function (){var statearr_46223 = state_46219;
(statearr_46223[(7)] = inst_46198__$1);

return statearr_46223;
})();
if(cljs.core.truth_(inst_46199)){
var statearr_46224_47704 = state_46219__$1;
(statearr_46224_47704[(1)] = (5));

} else {
var statearr_46225_47705 = state_46219__$1;
(statearr_46225_47705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (13))){
var state_46219__$1 = state_46219;
var statearr_46226_47706 = state_46219__$1;
(statearr_46226_47706[(2)] = null);

(statearr_46226_47706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (6))){
var inst_46198 = (state_46219[(7)]);
var state_46219__$1 = state_46219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46219__$1,(11),to,inst_46198);
} else {
if((state_val_46220 === (3))){
var inst_46217 = (state_46219[(2)]);
var state_46219__$1 = state_46219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46219__$1,inst_46217);
} else {
if((state_val_46220 === (12))){
var state_46219__$1 = state_46219;
var statearr_46227_47709 = state_46219__$1;
(statearr_46227_47709[(2)] = null);

(statearr_46227_47709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (2))){
var state_46219__$1 = state_46219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46219__$1,(4),from);
} else {
if((state_val_46220 === (11))){
var inst_46208 = (state_46219[(2)]);
var state_46219__$1 = state_46219;
if(cljs.core.truth_(inst_46208)){
var statearr_46228_47710 = state_46219__$1;
(statearr_46228_47710[(1)] = (12));

} else {
var statearr_46229_47711 = state_46219__$1;
(statearr_46229_47711[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (9))){
var state_46219__$1 = state_46219;
var statearr_46230_47712 = state_46219__$1;
(statearr_46230_47712[(2)] = null);

(statearr_46230_47712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (5))){
var state_46219__$1 = state_46219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46231_47713 = state_46219__$1;
(statearr_46231_47713[(1)] = (8));

} else {
var statearr_46232_47714 = state_46219__$1;
(statearr_46232_47714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (14))){
var inst_46213 = (state_46219[(2)]);
var state_46219__$1 = state_46219;
var statearr_46233_47716 = state_46219__$1;
(statearr_46233_47716[(2)] = inst_46213);

(statearr_46233_47716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (10))){
var inst_46205 = (state_46219[(2)]);
var state_46219__$1 = state_46219;
var statearr_46234_47720 = state_46219__$1;
(statearr_46234_47720[(2)] = inst_46205);

(statearr_46234_47720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46220 === (8))){
var inst_46202 = cljs.core.async.close_BANG_(to);
var state_46219__$1 = state_46219;
var statearr_46235_47722 = state_46219__$1;
(statearr_46235_47722[(2)] = inst_46202);

(statearr_46235_47722[(1)] = (10));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_46236 = [null,null,null,null,null,null,null,null];
(statearr_46236[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_46236[(1)] = (1));

return statearr_46236;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_46219){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46219);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46237){if((e46237 instanceof Object)){
var ex__46009__auto__ = e46237;
var statearr_46238_47734 = state_46219;
(statearr_46238_47734[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47735 = state_46219;
state_46219 = G__47735;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_46219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_46219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46239 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46239[(6)] = c__46106__auto___47701);

return statearr_46239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var process = (function (p__46240){
var vec__46241 = p__46240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46241,(1),null);
var job = vec__46241;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46106__auto___47741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46248){
var state_val_46249 = (state_46248[(1)]);
if((state_val_46249 === (1))){
var state_46248__$1 = state_46248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46248__$1,(2),res,v);
} else {
if((state_val_46249 === (2))){
var inst_46245 = (state_46248[(2)]);
var inst_46246 = cljs.core.async.close_BANG_(res);
var state_46248__$1 = (function (){var statearr_46250 = state_46248;
(statearr_46250[(7)] = inst_46245);

return statearr_46250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46248__$1,inst_46246);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_46251 = [null,null,null,null,null,null,null,null];
(statearr_46251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__);

(statearr_46251[(1)] = (1));

return statearr_46251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1 = (function (state_46248){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46248);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46252){if((e46252 instanceof Object)){
var ex__46009__auto__ = e46252;
var statearr_46253_47744 = state_46248;
(statearr_46253_47744[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47745 = state_46248;
state_46248 = G__47745;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = function(state_46248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1.call(this,state_46248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46254 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46254[(6)] = c__46106__auto___47741);

return statearr_46254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46255){
var vec__46256 = p__46255;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46256,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46256,(1),null);
var job = vec__46256;
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
var n__4666__auto___47747 = n;
var __47748 = (0);
while(true){
if((__47748 < n__4666__auto___47747)){
var G__46259_47750 = type;
var G__46259_47751__$1 = (((G__46259_47750 instanceof cljs.core.Keyword))?G__46259_47750.fqn:null);
switch (G__46259_47751__$1) {
case "compute":
var c__46106__auto___47753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47748,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = ((function (__47748,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function (state_46272){
var state_val_46273 = (state_46272[(1)]);
if((state_val_46273 === (1))){
var state_46272__$1 = state_46272;
var statearr_46274_47754 = state_46272__$1;
(statearr_46274_47754[(2)] = null);

(statearr_46274_47754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46273 === (2))){
var state_46272__$1 = state_46272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46272__$1,(4),jobs);
} else {
if((state_val_46273 === (3))){
var inst_46270 = (state_46272[(2)]);
var state_46272__$1 = state_46272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46272__$1,inst_46270);
} else {
if((state_val_46273 === (4))){
var inst_46262 = (state_46272[(2)]);
var inst_46263 = process(inst_46262);
var state_46272__$1 = state_46272;
if(cljs.core.truth_(inst_46263)){
var statearr_46275_47759 = state_46272__$1;
(statearr_46275_47759[(1)] = (5));

} else {
var statearr_46276_47762 = state_46272__$1;
(statearr_46276_47762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46273 === (5))){
var state_46272__$1 = state_46272;
var statearr_46277_47763 = state_46272__$1;
(statearr_46277_47763[(2)] = null);

(statearr_46277_47763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46273 === (6))){
var state_46272__$1 = state_46272;
var statearr_46278_47764 = state_46272__$1;
(statearr_46278_47764[(2)] = null);

(statearr_46278_47764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46273 === (7))){
var inst_46268 = (state_46272[(2)]);
var state_46272__$1 = state_46272;
var statearr_46279_47767 = state_46272__$1;
(statearr_46279_47767[(2)] = inst_46268);

(statearr_46279_47767[(1)] = (3));


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
});})(__47748,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
;
return ((function (__47748,switch__46005__auto__,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_46280 = [null,null,null,null,null,null,null];
(statearr_46280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__);

(statearr_46280[(1)] = (1));

return statearr_46280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1 = (function (state_46272){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46272);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46281){if((e46281 instanceof Object)){
var ex__46009__auto__ = e46281;
var statearr_46282_47772 = state_46272;
(statearr_46282_47772[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47773 = state_46272;
state_46272 = G__47773;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = function(state_46272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1.call(this,state_46272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__;
})()
;})(__47748,switch__46005__auto__,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
})();
var state__46108__auto__ = (function (){var statearr_46283 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46283[(6)] = c__46106__auto___47753);

return statearr_46283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
});})(__47748,c__46106__auto___47753,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
);


break;
case "async":
var c__46106__auto___47775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47748,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = ((function (__47748,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function (state_46296){
var state_val_46297 = (state_46296[(1)]);
if((state_val_46297 === (1))){
var state_46296__$1 = state_46296;
var statearr_46298_47776 = state_46296__$1;
(statearr_46298_47776[(2)] = null);

(statearr_46298_47776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46297 === (2))){
var state_46296__$1 = state_46296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46296__$1,(4),jobs);
} else {
if((state_val_46297 === (3))){
var inst_46294 = (state_46296[(2)]);
var state_46296__$1 = state_46296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46296__$1,inst_46294);
} else {
if((state_val_46297 === (4))){
var inst_46286 = (state_46296[(2)]);
var inst_46287 = async(inst_46286);
var state_46296__$1 = state_46296;
if(cljs.core.truth_(inst_46287)){
var statearr_46299_47777 = state_46296__$1;
(statearr_46299_47777[(1)] = (5));

} else {
var statearr_46300_47778 = state_46296__$1;
(statearr_46300_47778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46297 === (5))){
var state_46296__$1 = state_46296;
var statearr_46301_47779 = state_46296__$1;
(statearr_46301_47779[(2)] = null);

(statearr_46301_47779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46297 === (6))){
var state_46296__$1 = state_46296;
var statearr_46302_47780 = state_46296__$1;
(statearr_46302_47780[(2)] = null);

(statearr_46302_47780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46297 === (7))){
var inst_46292 = (state_46296[(2)]);
var state_46296__$1 = state_46296;
var statearr_46303_47781 = state_46296__$1;
(statearr_46303_47781[(2)] = inst_46292);

(statearr_46303_47781[(1)] = (3));


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
});})(__47748,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
;
return ((function (__47748,switch__46005__auto__,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_46304 = [null,null,null,null,null,null,null];
(statearr_46304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__);

(statearr_46304[(1)] = (1));

return statearr_46304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1 = (function (state_46296){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46296);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46305){if((e46305 instanceof Object)){
var ex__46009__auto__ = e46305;
var statearr_46306_47789 = state_46296;
(statearr_46306_47789[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47790 = state_46296;
state_46296 = G__47790;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = function(state_46296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1.call(this,state_46296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__;
})()
;})(__47748,switch__46005__auto__,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
})();
var state__46108__auto__ = (function (){var statearr_46307 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46307[(6)] = c__46106__auto___47775);

return statearr_46307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
});})(__47748,c__46106__auto___47775,G__46259_47750,G__46259_47751__$1,n__4666__auto___47747,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46259_47751__$1)].join('')));

}

var G__47794 = (__47748 + (1));
__47748 = G__47794;
continue;
} else {
}
break;
}

var c__46106__auto___47795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46329){
var state_val_46330 = (state_46329[(1)]);
if((state_val_46330 === (7))){
var inst_46325 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46331_47799 = state_46329__$1;
(statearr_46331_47799[(2)] = inst_46325);

(statearr_46331_47799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (1))){
var state_46329__$1 = state_46329;
var statearr_46332_47800 = state_46329__$1;
(statearr_46332_47800[(2)] = null);

(statearr_46332_47800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (4))){
var inst_46310 = (state_46329[(7)]);
var inst_46310__$1 = (state_46329[(2)]);
var inst_46311 = (inst_46310__$1 == null);
var state_46329__$1 = (function (){var statearr_46333 = state_46329;
(statearr_46333[(7)] = inst_46310__$1);

return statearr_46333;
})();
if(cljs.core.truth_(inst_46311)){
var statearr_46334_47801 = state_46329__$1;
(statearr_46334_47801[(1)] = (5));

} else {
var statearr_46335_47805 = state_46329__$1;
(statearr_46335_47805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (6))){
var inst_46310 = (state_46329[(7)]);
var inst_46315 = (state_46329[(8)]);
var inst_46315__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46317 = [inst_46310,inst_46315__$1];
var inst_46318 = (new cljs.core.PersistentVector(null,2,(5),inst_46316,inst_46317,null));
var state_46329__$1 = (function (){var statearr_46336 = state_46329;
(statearr_46336[(8)] = inst_46315__$1);

return statearr_46336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46329__$1,(8),jobs,inst_46318);
} else {
if((state_val_46330 === (3))){
var inst_46327 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46329__$1,inst_46327);
} else {
if((state_val_46330 === (2))){
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46329__$1,(4),from);
} else {
if((state_val_46330 === (9))){
var inst_46322 = (state_46329[(2)]);
var state_46329__$1 = (function (){var statearr_46337 = state_46329;
(statearr_46337[(9)] = inst_46322);

return statearr_46337;
})();
var statearr_46338_47807 = state_46329__$1;
(statearr_46338_47807[(2)] = null);

(statearr_46338_47807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (5))){
var inst_46313 = cljs.core.async.close_BANG_(jobs);
var state_46329__$1 = state_46329;
var statearr_46339_47809 = state_46329__$1;
(statearr_46339_47809[(2)] = inst_46313);

(statearr_46339_47809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (8))){
var inst_46315 = (state_46329[(8)]);
var inst_46320 = (state_46329[(2)]);
var state_46329__$1 = (function (){var statearr_46340 = state_46329;
(statearr_46340[(10)] = inst_46320);

return statearr_46340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46329__$1,(9),results,inst_46315);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_46341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__);

(statearr_46341[(1)] = (1));

return statearr_46341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1 = (function (state_46329){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46329);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46342){if((e46342 instanceof Object)){
var ex__46009__auto__ = e46342;
var statearr_46343_47813 = state_46329;
(statearr_46343_47813[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47817 = state_46329;
state_46329 = G__47817;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = function(state_46329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1.call(this,state_46329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46344 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46344[(6)] = c__46106__auto___47795);

return statearr_46344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


var c__46106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46382){
var state_val_46383 = (state_46382[(1)]);
if((state_val_46383 === (7))){
var inst_46378 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46384_47822 = state_46382__$1;
(statearr_46384_47822[(2)] = inst_46378);

(statearr_46384_47822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (20))){
var state_46382__$1 = state_46382;
var statearr_46385_47826 = state_46382__$1;
(statearr_46385_47826[(2)] = null);

(statearr_46385_47826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (1))){
var state_46382__$1 = state_46382;
var statearr_46386_47827 = state_46382__$1;
(statearr_46386_47827[(2)] = null);

(statearr_46386_47827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (4))){
var inst_46347 = (state_46382[(7)]);
var inst_46347__$1 = (state_46382[(2)]);
var inst_46348 = (inst_46347__$1 == null);
var state_46382__$1 = (function (){var statearr_46387 = state_46382;
(statearr_46387[(7)] = inst_46347__$1);

return statearr_46387;
})();
if(cljs.core.truth_(inst_46348)){
var statearr_46388_47828 = state_46382__$1;
(statearr_46388_47828[(1)] = (5));

} else {
var statearr_46389_47832 = state_46382__$1;
(statearr_46389_47832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (15))){
var inst_46360 = (state_46382[(8)]);
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46382__$1,(18),to,inst_46360);
} else {
if((state_val_46383 === (21))){
var inst_46373 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46390_47833 = state_46382__$1;
(statearr_46390_47833[(2)] = inst_46373);

(statearr_46390_47833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (13))){
var inst_46375 = (state_46382[(2)]);
var state_46382__$1 = (function (){var statearr_46391 = state_46382;
(statearr_46391[(9)] = inst_46375);

return statearr_46391;
})();
var statearr_46392_47837 = state_46382__$1;
(statearr_46392_47837[(2)] = null);

(statearr_46392_47837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (6))){
var inst_46347 = (state_46382[(7)]);
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46382__$1,(11),inst_46347);
} else {
if((state_val_46383 === (17))){
var inst_46368 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
if(cljs.core.truth_(inst_46368)){
var statearr_46393_47841 = state_46382__$1;
(statearr_46393_47841[(1)] = (19));

} else {
var statearr_46394_47842 = state_46382__$1;
(statearr_46394_47842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (3))){
var inst_46380 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46382__$1,inst_46380);
} else {
if((state_val_46383 === (12))){
var inst_46357 = (state_46382[(10)]);
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46382__$1,(14),inst_46357);
} else {
if((state_val_46383 === (2))){
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46382__$1,(4),results);
} else {
if((state_val_46383 === (19))){
var state_46382__$1 = state_46382;
var statearr_46395_47853 = state_46382__$1;
(statearr_46395_47853[(2)] = null);

(statearr_46395_47853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (11))){
var inst_46357 = (state_46382[(2)]);
var state_46382__$1 = (function (){var statearr_46396 = state_46382;
(statearr_46396[(10)] = inst_46357);

return statearr_46396;
})();
var statearr_46397_47854 = state_46382__$1;
(statearr_46397_47854[(2)] = null);

(statearr_46397_47854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (9))){
var state_46382__$1 = state_46382;
var statearr_46398_47855 = state_46382__$1;
(statearr_46398_47855[(2)] = null);

(statearr_46398_47855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (5))){
var state_46382__$1 = state_46382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46399_47862 = state_46382__$1;
(statearr_46399_47862[(1)] = (8));

} else {
var statearr_46400_47863 = state_46382__$1;
(statearr_46400_47863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (14))){
var inst_46360 = (state_46382[(8)]);
var inst_46360__$1 = (state_46382[(2)]);
var inst_46361 = (inst_46360__$1 == null);
var inst_46362 = cljs.core.not(inst_46361);
var state_46382__$1 = (function (){var statearr_46401 = state_46382;
(statearr_46401[(8)] = inst_46360__$1);

return statearr_46401;
})();
if(inst_46362){
var statearr_46402_47870 = state_46382__$1;
(statearr_46402_47870[(1)] = (15));

} else {
var statearr_46403_47871 = state_46382__$1;
(statearr_46403_47871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (16))){
var state_46382__$1 = state_46382;
var statearr_46404_47872 = state_46382__$1;
(statearr_46404_47872[(2)] = false);

(statearr_46404_47872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (10))){
var inst_46354 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46405_47873 = state_46382__$1;
(statearr_46405_47873[(2)] = inst_46354);

(statearr_46405_47873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (18))){
var inst_46365 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46406_47877 = state_46382__$1;
(statearr_46406_47877[(2)] = inst_46365);

(statearr_46406_47877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (8))){
var inst_46351 = cljs.core.async.close_BANG_(to);
var state_46382__$1 = state_46382;
var statearr_46407_47881 = state_46382__$1;
(statearr_46407_47881[(2)] = inst_46351);

(statearr_46407_47881[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_46408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__);

(statearr_46408[(1)] = (1));

return statearr_46408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1 = (function (state_46382){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46382);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46409){if((e46409 instanceof Object)){
var ex__46009__auto__ = e46409;
var statearr_46410_47882 = state_46382;
(statearr_46410_47882[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47884 = state_46382;
state_46382 = G__47884;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__ = function(state_46382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1.call(this,state_46382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46411 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46411[(6)] = c__46106__auto__);

return statearr_46411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

return c__46106__auto__;
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
var G__46413 = arguments.length;
switch (G__46413) {
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
var G__46415 = arguments.length;
switch (G__46415) {
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
var G__46417 = arguments.length;
switch (G__46417) {
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
var c__46106__auto___47890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46443){
var state_val_46444 = (state_46443[(1)]);
if((state_val_46444 === (7))){
var inst_46439 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
var statearr_46445_47891 = state_46443__$1;
(statearr_46445_47891[(2)] = inst_46439);

(statearr_46445_47891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (1))){
var state_46443__$1 = state_46443;
var statearr_46446_47892 = state_46443__$1;
(statearr_46446_47892[(2)] = null);

(statearr_46446_47892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (4))){
var inst_46420 = (state_46443[(7)]);
var inst_46420__$1 = (state_46443[(2)]);
var inst_46421 = (inst_46420__$1 == null);
var state_46443__$1 = (function (){var statearr_46447 = state_46443;
(statearr_46447[(7)] = inst_46420__$1);

return statearr_46447;
})();
if(cljs.core.truth_(inst_46421)){
var statearr_46448_47893 = state_46443__$1;
(statearr_46448_47893[(1)] = (5));

} else {
var statearr_46449_47894 = state_46443__$1;
(statearr_46449_47894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (13))){
var state_46443__$1 = state_46443;
var statearr_46450_47898 = state_46443__$1;
(statearr_46450_47898[(2)] = null);

(statearr_46450_47898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (6))){
var inst_46420 = (state_46443[(7)]);
var inst_46426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46420) : p.call(null,inst_46420));
var state_46443__$1 = state_46443;
if(cljs.core.truth_(inst_46426)){
var statearr_46451_47902 = state_46443__$1;
(statearr_46451_47902[(1)] = (9));

} else {
var statearr_46452_47903 = state_46443__$1;
(statearr_46452_47903[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (3))){
var inst_46441 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46443__$1,inst_46441);
} else {
if((state_val_46444 === (12))){
var state_46443__$1 = state_46443;
var statearr_46453_47905 = state_46443__$1;
(statearr_46453_47905[(2)] = null);

(statearr_46453_47905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (2))){
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46443__$1,(4),ch);
} else {
if((state_val_46444 === (11))){
var inst_46420 = (state_46443[(7)]);
var inst_46430 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46443__$1,(8),inst_46430,inst_46420);
} else {
if((state_val_46444 === (9))){
var state_46443__$1 = state_46443;
var statearr_46454_47908 = state_46443__$1;
(statearr_46454_47908[(2)] = tc);

(statearr_46454_47908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (5))){
var inst_46423 = cljs.core.async.close_BANG_(tc);
var inst_46424 = cljs.core.async.close_BANG_(fc);
var state_46443__$1 = (function (){var statearr_46455 = state_46443;
(statearr_46455[(8)] = inst_46423);

return statearr_46455;
})();
var statearr_46456_47909 = state_46443__$1;
(statearr_46456_47909[(2)] = inst_46424);

(statearr_46456_47909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (14))){
var inst_46437 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
var statearr_46457_47910 = state_46443__$1;
(statearr_46457_47910[(2)] = inst_46437);

(statearr_46457_47910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (10))){
var state_46443__$1 = state_46443;
var statearr_46458_47911 = state_46443__$1;
(statearr_46458_47911[(2)] = fc);

(statearr_46458_47911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46444 === (8))){
var inst_46432 = (state_46443[(2)]);
var state_46443__$1 = state_46443;
if(cljs.core.truth_(inst_46432)){
var statearr_46459_47912 = state_46443__$1;
(statearr_46459_47912[(1)] = (12));

} else {
var statearr_46460_47913 = state_46443__$1;
(statearr_46460_47913[(1)] = (13));

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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_46461 = [null,null,null,null,null,null,null,null,null];
(statearr_46461[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_46461[(1)] = (1));

return statearr_46461;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_46443){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46443);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46462){if((e46462 instanceof Object)){
var ex__46009__auto__ = e46462;
var statearr_46463_47918 = state_46443;
(statearr_46463_47918[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47919 = state_46443;
state_46443 = G__47919;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_46443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_46443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46464 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46464[(6)] = c__46106__auto___47890);

return statearr_46464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var c__46106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46485){
var state_val_46486 = (state_46485[(1)]);
if((state_val_46486 === (7))){
var inst_46481 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
var statearr_46487_47924 = state_46485__$1;
(statearr_46487_47924[(2)] = inst_46481);

(statearr_46487_47924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (1))){
var inst_46465 = init;
var state_46485__$1 = (function (){var statearr_46488 = state_46485;
(statearr_46488[(7)] = inst_46465);

return statearr_46488;
})();
var statearr_46489_47932 = state_46485__$1;
(statearr_46489_47932[(2)] = null);

(statearr_46489_47932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (4))){
var inst_46468 = (state_46485[(8)]);
var inst_46468__$1 = (state_46485[(2)]);
var inst_46469 = (inst_46468__$1 == null);
var state_46485__$1 = (function (){var statearr_46490 = state_46485;
(statearr_46490[(8)] = inst_46468__$1);

return statearr_46490;
})();
if(cljs.core.truth_(inst_46469)){
var statearr_46491_47939 = state_46485__$1;
(statearr_46491_47939[(1)] = (5));

} else {
var statearr_46492_47940 = state_46485__$1;
(statearr_46492_47940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (6))){
var inst_46472 = (state_46485[(9)]);
var inst_46465 = (state_46485[(7)]);
var inst_46468 = (state_46485[(8)]);
var inst_46472__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46465,inst_46468) : f.call(null,inst_46465,inst_46468));
var inst_46473 = cljs.core.reduced_QMARK_(inst_46472__$1);
var state_46485__$1 = (function (){var statearr_46493 = state_46485;
(statearr_46493[(9)] = inst_46472__$1);

return statearr_46493;
})();
if(inst_46473){
var statearr_46494_47941 = state_46485__$1;
(statearr_46494_47941[(1)] = (8));

} else {
var statearr_46495_47942 = state_46485__$1;
(statearr_46495_47942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (3))){
var inst_46483 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46485__$1,inst_46483);
} else {
if((state_val_46486 === (2))){
var state_46485__$1 = state_46485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46485__$1,(4),ch);
} else {
if((state_val_46486 === (9))){
var inst_46472 = (state_46485[(9)]);
var inst_46465 = inst_46472;
var state_46485__$1 = (function (){var statearr_46496 = state_46485;
(statearr_46496[(7)] = inst_46465);

return statearr_46496;
})();
var statearr_46497_47943 = state_46485__$1;
(statearr_46497_47943[(2)] = null);

(statearr_46497_47943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (5))){
var inst_46465 = (state_46485[(7)]);
var state_46485__$1 = state_46485;
var statearr_46498_47944 = state_46485__$1;
(statearr_46498_47944[(2)] = inst_46465);

(statearr_46498_47944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (10))){
var inst_46479 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
var statearr_46499_47945 = state_46485__$1;
(statearr_46499_47945[(2)] = inst_46479);

(statearr_46499_47945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (8))){
var inst_46472 = (state_46485[(9)]);
var inst_46475 = cljs.core.deref(inst_46472);
var state_46485__$1 = state_46485;
var statearr_46500_47946 = state_46485__$1;
(statearr_46500_47946[(2)] = inst_46475);

(statearr_46500_47946[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46006__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46006__auto____0 = (function (){
var statearr_46501 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46501[(0)] = cljs$core$async$reduce_$_state_machine__46006__auto__);

(statearr_46501[(1)] = (1));

return statearr_46501;
});
var cljs$core$async$reduce_$_state_machine__46006__auto____1 = (function (state_46485){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46485);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46502){if((e46502 instanceof Object)){
var ex__46009__auto__ = e46502;
var statearr_46503_47953 = state_46485;
(statearr_46503_47953[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47954 = state_46485;
state_46485 = G__47954;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46006__auto__ = function(state_46485){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46006__auto____1.call(this,state_46485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46006__auto____0;
cljs$core$async$reduce_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46006__auto____1;
return cljs$core$async$reduce_$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46504 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46504[(6)] = c__46106__auto__);

return statearr_46504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

return c__46106__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46510){
var state_val_46511 = (state_46510[(1)]);
if((state_val_46511 === (1))){
var inst_46505 = cljs.core.async.reduce(f__$1,init,ch);
var state_46510__$1 = state_46510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46510__$1,(2),inst_46505);
} else {
if((state_val_46511 === (2))){
var inst_46507 = (state_46510[(2)]);
var inst_46508 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46507) : f__$1.call(null,inst_46507));
var state_46510__$1 = state_46510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46510__$1,inst_46508);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46006__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46006__auto____0 = (function (){
var statearr_46512 = [null,null,null,null,null,null,null];
(statearr_46512[(0)] = cljs$core$async$transduce_$_state_machine__46006__auto__);

(statearr_46512[(1)] = (1));

return statearr_46512;
});
var cljs$core$async$transduce_$_state_machine__46006__auto____1 = (function (state_46510){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46510);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46513){if((e46513 instanceof Object)){
var ex__46009__auto__ = e46513;
var statearr_46514_47961 = state_46510;
(statearr_46514_47961[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47962 = state_46510;
state_46510 = G__47962;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46006__auto__ = function(state_46510){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46006__auto____1.call(this,state_46510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46006__auto____0;
cljs$core$async$transduce_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46006__auto____1;
return cljs$core$async$transduce_$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46515 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46515[(6)] = c__46106__auto__);

return statearr_46515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

return c__46106__auto__;
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
var G__46517 = arguments.length;
switch (G__46517) {
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
var c__46106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46542){
var state_val_46543 = (state_46542[(1)]);
if((state_val_46543 === (7))){
var inst_46524 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46544_47964 = state_46542__$1;
(statearr_46544_47964[(2)] = inst_46524);

(statearr_46544_47964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (1))){
var inst_46518 = cljs.core.seq(coll);
var inst_46519 = inst_46518;
var state_46542__$1 = (function (){var statearr_46545 = state_46542;
(statearr_46545[(7)] = inst_46519);

return statearr_46545;
})();
var statearr_46546_47965 = state_46542__$1;
(statearr_46546_47965[(2)] = null);

(statearr_46546_47965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (4))){
var inst_46519 = (state_46542[(7)]);
var inst_46522 = cljs.core.first(inst_46519);
var state_46542__$1 = state_46542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46542__$1,(7),ch,inst_46522);
} else {
if((state_val_46543 === (13))){
var inst_46536 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46547_47972 = state_46542__$1;
(statearr_46547_47972[(2)] = inst_46536);

(statearr_46547_47972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (6))){
var inst_46527 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
if(cljs.core.truth_(inst_46527)){
var statearr_46548_47973 = state_46542__$1;
(statearr_46548_47973[(1)] = (8));

} else {
var statearr_46549_47974 = state_46542__$1;
(statearr_46549_47974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (3))){
var inst_46540 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46542__$1,inst_46540);
} else {
if((state_val_46543 === (12))){
var state_46542__$1 = state_46542;
var statearr_46550_47975 = state_46542__$1;
(statearr_46550_47975[(2)] = null);

(statearr_46550_47975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (2))){
var inst_46519 = (state_46542[(7)]);
var state_46542__$1 = state_46542;
if(cljs.core.truth_(inst_46519)){
var statearr_46551_47976 = state_46542__$1;
(statearr_46551_47976[(1)] = (4));

} else {
var statearr_46552_47977 = state_46542__$1;
(statearr_46552_47977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (11))){
var inst_46533 = cljs.core.async.close_BANG_(ch);
var state_46542__$1 = state_46542;
var statearr_46553_47978 = state_46542__$1;
(statearr_46553_47978[(2)] = inst_46533);

(statearr_46553_47978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (9))){
var state_46542__$1 = state_46542;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46554_47979 = state_46542__$1;
(statearr_46554_47979[(1)] = (11));

} else {
var statearr_46555_47980 = state_46542__$1;
(statearr_46555_47980[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (5))){
var inst_46519 = (state_46542[(7)]);
var state_46542__$1 = state_46542;
var statearr_46556_47981 = state_46542__$1;
(statearr_46556_47981[(2)] = inst_46519);

(statearr_46556_47981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (10))){
var inst_46538 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46557_47982 = state_46542__$1;
(statearr_46557_47982[(2)] = inst_46538);

(statearr_46557_47982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (8))){
var inst_46519 = (state_46542[(7)]);
var inst_46529 = cljs.core.next(inst_46519);
var inst_46519__$1 = inst_46529;
var state_46542__$1 = (function (){var statearr_46558 = state_46542;
(statearr_46558[(7)] = inst_46519__$1);

return statearr_46558;
})();
var statearr_46559_47983 = state_46542__$1;
(statearr_46559_47983[(2)] = null);

(statearr_46559_47983[(1)] = (2));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_46560 = [null,null,null,null,null,null,null,null];
(statearr_46560[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_46560[(1)] = (1));

return statearr_46560;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_46542){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46542);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46561){if((e46561 instanceof Object)){
var ex__46009__auto__ = e46561;
var statearr_46562_47984 = state_46542;
(statearr_46562_47984[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47985 = state_46542;
state_46542 = G__47985;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_46542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_46542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46563 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46563[(6)] = c__46106__auto__);

return statearr_46563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

return c__46106__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46564 = (function (ch,cs,meta46565){
this.ch = ch;
this.cs = cs;
this.meta46565 = meta46565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46566,meta46565__$1){
var self__ = this;
var _46566__$1 = this;
return (new cljs.core.async.t_cljs$core$async46564(self__.ch,self__.cs,meta46565__$1));
}));

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46566){
var self__ = this;
var _46566__$1 = this;
return self__.meta46565;
}));

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46565","meta46565",5302407,null)], null);
}));

(cljs.core.async.t_cljs$core$async46564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46564");

(cljs.core.async.t_cljs$core$async46564.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46564.
 */
cljs.core.async.__GT_t_cljs$core$async46564 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46564(ch__$1,cs__$1,meta46565){
return (new cljs.core.async.t_cljs$core$async46564(ch__$1,cs__$1,meta46565));
});

}

return (new cljs.core.async.t_cljs$core$async46564(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46106__auto___47998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46701){
var state_val_46702 = (state_46701[(1)]);
if((state_val_46702 === (7))){
var inst_46697 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46703_47999 = state_46701__$1;
(statearr_46703_47999[(2)] = inst_46697);

(statearr_46703_47999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (20))){
var inst_46600 = (state_46701[(7)]);
var inst_46612 = cljs.core.first(inst_46600);
var inst_46613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46612,(0),null);
var inst_46614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46612,(1),null);
var state_46701__$1 = (function (){var statearr_46704 = state_46701;
(statearr_46704[(8)] = inst_46613);

return statearr_46704;
})();
if(cljs.core.truth_(inst_46614)){
var statearr_46705_48000 = state_46701__$1;
(statearr_46705_48000[(1)] = (22));

} else {
var statearr_46706_48001 = state_46701__$1;
(statearr_46706_48001[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (27))){
var inst_46644 = (state_46701[(9)]);
var inst_46569 = (state_46701[(10)]);
var inst_46649 = (state_46701[(11)]);
var inst_46642 = (state_46701[(12)]);
var inst_46649__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46642,inst_46644);
var inst_46650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46649__$1,inst_46569,done);
var state_46701__$1 = (function (){var statearr_46707 = state_46701;
(statearr_46707[(11)] = inst_46649__$1);

return statearr_46707;
})();
if(cljs.core.truth_(inst_46650)){
var statearr_46708_48004 = state_46701__$1;
(statearr_46708_48004[(1)] = (30));

} else {
var statearr_46709_48005 = state_46701__$1;
(statearr_46709_48005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (1))){
var state_46701__$1 = state_46701;
var statearr_46710_48006 = state_46701__$1;
(statearr_46710_48006[(2)] = null);

(statearr_46710_48006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (24))){
var inst_46600 = (state_46701[(7)]);
var inst_46619 = (state_46701[(2)]);
var inst_46620 = cljs.core.next(inst_46600);
var inst_46578 = inst_46620;
var inst_46579 = null;
var inst_46580 = (0);
var inst_46581 = (0);
var state_46701__$1 = (function (){var statearr_46711 = state_46701;
(statearr_46711[(13)] = inst_46581);

(statearr_46711[(14)] = inst_46579);

(statearr_46711[(15)] = inst_46578);

(statearr_46711[(16)] = inst_46580);

(statearr_46711[(17)] = inst_46619);

return statearr_46711;
})();
var statearr_46712_48007 = state_46701__$1;
(statearr_46712_48007[(2)] = null);

(statearr_46712_48007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (39))){
var state_46701__$1 = state_46701;
var statearr_46716_48008 = state_46701__$1;
(statearr_46716_48008[(2)] = null);

(statearr_46716_48008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (4))){
var inst_46569 = (state_46701[(10)]);
var inst_46569__$1 = (state_46701[(2)]);
var inst_46570 = (inst_46569__$1 == null);
var state_46701__$1 = (function (){var statearr_46717 = state_46701;
(statearr_46717[(10)] = inst_46569__$1);

return statearr_46717;
})();
if(cljs.core.truth_(inst_46570)){
var statearr_46718_48009 = state_46701__$1;
(statearr_46718_48009[(1)] = (5));

} else {
var statearr_46719_48010 = state_46701__$1;
(statearr_46719_48010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (15))){
var inst_46581 = (state_46701[(13)]);
var inst_46579 = (state_46701[(14)]);
var inst_46578 = (state_46701[(15)]);
var inst_46580 = (state_46701[(16)]);
var inst_46596 = (state_46701[(2)]);
var inst_46597 = (inst_46581 + (1));
var tmp46713 = inst_46579;
var tmp46714 = inst_46578;
var tmp46715 = inst_46580;
var inst_46578__$1 = tmp46714;
var inst_46579__$1 = tmp46713;
var inst_46580__$1 = tmp46715;
var inst_46581__$1 = inst_46597;
var state_46701__$1 = (function (){var statearr_46720 = state_46701;
(statearr_46720[(18)] = inst_46596);

(statearr_46720[(13)] = inst_46581__$1);

(statearr_46720[(14)] = inst_46579__$1);

(statearr_46720[(15)] = inst_46578__$1);

(statearr_46720[(16)] = inst_46580__$1);

return statearr_46720;
})();
var statearr_46721_48011 = state_46701__$1;
(statearr_46721_48011[(2)] = null);

(statearr_46721_48011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (21))){
var inst_46623 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46725_48012 = state_46701__$1;
(statearr_46725_48012[(2)] = inst_46623);

(statearr_46725_48012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (31))){
var inst_46649 = (state_46701[(11)]);
var inst_46653 = done(null);
var inst_46654 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46649);
var state_46701__$1 = (function (){var statearr_46726 = state_46701;
(statearr_46726[(19)] = inst_46653);

return statearr_46726;
})();
var statearr_46727_48014 = state_46701__$1;
(statearr_46727_48014[(2)] = inst_46654);

(statearr_46727_48014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (32))){
var inst_46644 = (state_46701[(9)]);
var inst_46643 = (state_46701[(20)]);
var inst_46641 = (state_46701[(21)]);
var inst_46642 = (state_46701[(12)]);
var inst_46656 = (state_46701[(2)]);
var inst_46657 = (inst_46644 + (1));
var tmp46722 = inst_46643;
var tmp46723 = inst_46641;
var tmp46724 = inst_46642;
var inst_46641__$1 = tmp46723;
var inst_46642__$1 = tmp46724;
var inst_46643__$1 = tmp46722;
var inst_46644__$1 = inst_46657;
var state_46701__$1 = (function (){var statearr_46728 = state_46701;
(statearr_46728[(9)] = inst_46644__$1);

(statearr_46728[(22)] = inst_46656);

(statearr_46728[(20)] = inst_46643__$1);

(statearr_46728[(21)] = inst_46641__$1);

(statearr_46728[(12)] = inst_46642__$1);

return statearr_46728;
})();
var statearr_46729_48019 = state_46701__$1;
(statearr_46729_48019[(2)] = null);

(statearr_46729_48019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (40))){
var inst_46669 = (state_46701[(23)]);
var inst_46673 = done(null);
var inst_46674 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46669);
var state_46701__$1 = (function (){var statearr_46730 = state_46701;
(statearr_46730[(24)] = inst_46673);

return statearr_46730;
})();
var statearr_46731_48020 = state_46701__$1;
(statearr_46731_48020[(2)] = inst_46674);

(statearr_46731_48020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (33))){
var inst_46660 = (state_46701[(25)]);
var inst_46662 = cljs.core.chunked_seq_QMARK_(inst_46660);
var state_46701__$1 = state_46701;
if(inst_46662){
var statearr_46732_48021 = state_46701__$1;
(statearr_46732_48021[(1)] = (36));

} else {
var statearr_46733_48022 = state_46701__$1;
(statearr_46733_48022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (13))){
var inst_46590 = (state_46701[(26)]);
var inst_46593 = cljs.core.async.close_BANG_(inst_46590);
var state_46701__$1 = state_46701;
var statearr_46734_48023 = state_46701__$1;
(statearr_46734_48023[(2)] = inst_46593);

(statearr_46734_48023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (22))){
var inst_46613 = (state_46701[(8)]);
var inst_46616 = cljs.core.async.close_BANG_(inst_46613);
var state_46701__$1 = state_46701;
var statearr_46735_48024 = state_46701__$1;
(statearr_46735_48024[(2)] = inst_46616);

(statearr_46735_48024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (36))){
var inst_46660 = (state_46701[(25)]);
var inst_46664 = cljs.core.chunk_first(inst_46660);
var inst_46665 = cljs.core.chunk_rest(inst_46660);
var inst_46666 = cljs.core.count(inst_46664);
var inst_46641 = inst_46665;
var inst_46642 = inst_46664;
var inst_46643 = inst_46666;
var inst_46644 = (0);
var state_46701__$1 = (function (){var statearr_46736 = state_46701;
(statearr_46736[(9)] = inst_46644);

(statearr_46736[(20)] = inst_46643);

(statearr_46736[(21)] = inst_46641);

(statearr_46736[(12)] = inst_46642);

return statearr_46736;
})();
var statearr_46737_48032 = state_46701__$1;
(statearr_46737_48032[(2)] = null);

(statearr_46737_48032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (41))){
var inst_46660 = (state_46701[(25)]);
var inst_46676 = (state_46701[(2)]);
var inst_46677 = cljs.core.next(inst_46660);
var inst_46641 = inst_46677;
var inst_46642 = null;
var inst_46643 = (0);
var inst_46644 = (0);
var state_46701__$1 = (function (){var statearr_46738 = state_46701;
(statearr_46738[(9)] = inst_46644);

(statearr_46738[(20)] = inst_46643);

(statearr_46738[(21)] = inst_46641);

(statearr_46738[(27)] = inst_46676);

(statearr_46738[(12)] = inst_46642);

return statearr_46738;
})();
var statearr_46739_48042 = state_46701__$1;
(statearr_46739_48042[(2)] = null);

(statearr_46739_48042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (43))){
var state_46701__$1 = state_46701;
var statearr_46740_48043 = state_46701__$1;
(statearr_46740_48043[(2)] = null);

(statearr_46740_48043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (29))){
var inst_46685 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46741_48048 = state_46701__$1;
(statearr_46741_48048[(2)] = inst_46685);

(statearr_46741_48048[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (44))){
var inst_46694 = (state_46701[(2)]);
var state_46701__$1 = (function (){var statearr_46742 = state_46701;
(statearr_46742[(28)] = inst_46694);

return statearr_46742;
})();
var statearr_46743_48049 = state_46701__$1;
(statearr_46743_48049[(2)] = null);

(statearr_46743_48049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (6))){
var inst_46633 = (state_46701[(29)]);
var inst_46632 = cljs.core.deref(cs);
var inst_46633__$1 = cljs.core.keys(inst_46632);
var inst_46634 = cljs.core.count(inst_46633__$1);
var inst_46635 = cljs.core.reset_BANG_(dctr,inst_46634);
var inst_46640 = cljs.core.seq(inst_46633__$1);
var inst_46641 = inst_46640;
var inst_46642 = null;
var inst_46643 = (0);
var inst_46644 = (0);
var state_46701__$1 = (function (){var statearr_46744 = state_46701;
(statearr_46744[(9)] = inst_46644);

(statearr_46744[(20)] = inst_46643);

(statearr_46744[(21)] = inst_46641);

(statearr_46744[(29)] = inst_46633__$1);

(statearr_46744[(12)] = inst_46642);

(statearr_46744[(30)] = inst_46635);

return statearr_46744;
})();
var statearr_46745_48052 = state_46701__$1;
(statearr_46745_48052[(2)] = null);

(statearr_46745_48052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (28))){
var inst_46660 = (state_46701[(25)]);
var inst_46641 = (state_46701[(21)]);
var inst_46660__$1 = cljs.core.seq(inst_46641);
var state_46701__$1 = (function (){var statearr_46746 = state_46701;
(statearr_46746[(25)] = inst_46660__$1);

return statearr_46746;
})();
if(inst_46660__$1){
var statearr_46747_48055 = state_46701__$1;
(statearr_46747_48055[(1)] = (33));

} else {
var statearr_46748_48056 = state_46701__$1;
(statearr_46748_48056[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (25))){
var inst_46644 = (state_46701[(9)]);
var inst_46643 = (state_46701[(20)]);
var inst_46646 = (inst_46644 < inst_46643);
var inst_46647 = inst_46646;
var state_46701__$1 = state_46701;
if(cljs.core.truth_(inst_46647)){
var statearr_46749_48057 = state_46701__$1;
(statearr_46749_48057[(1)] = (27));

} else {
var statearr_46750_48058 = state_46701__$1;
(statearr_46750_48058[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (34))){
var state_46701__$1 = state_46701;
var statearr_46751_48061 = state_46701__$1;
(statearr_46751_48061[(2)] = null);

(statearr_46751_48061[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (17))){
var state_46701__$1 = state_46701;
var statearr_46752_48062 = state_46701__$1;
(statearr_46752_48062[(2)] = null);

(statearr_46752_48062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (3))){
var inst_46699 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46701__$1,inst_46699);
} else {
if((state_val_46702 === (12))){
var inst_46628 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46753_48067 = state_46701__$1;
(statearr_46753_48067[(2)] = inst_46628);

(statearr_46753_48067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (2))){
var state_46701__$1 = state_46701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46701__$1,(4),ch);
} else {
if((state_val_46702 === (23))){
var state_46701__$1 = state_46701;
var statearr_46754_48070 = state_46701__$1;
(statearr_46754_48070[(2)] = null);

(statearr_46754_48070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (35))){
var inst_46683 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46755_48071 = state_46701__$1;
(statearr_46755_48071[(2)] = inst_46683);

(statearr_46755_48071[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (19))){
var inst_46600 = (state_46701[(7)]);
var inst_46604 = cljs.core.chunk_first(inst_46600);
var inst_46605 = cljs.core.chunk_rest(inst_46600);
var inst_46606 = cljs.core.count(inst_46604);
var inst_46578 = inst_46605;
var inst_46579 = inst_46604;
var inst_46580 = inst_46606;
var inst_46581 = (0);
var state_46701__$1 = (function (){var statearr_46756 = state_46701;
(statearr_46756[(13)] = inst_46581);

(statearr_46756[(14)] = inst_46579);

(statearr_46756[(15)] = inst_46578);

(statearr_46756[(16)] = inst_46580);

return statearr_46756;
})();
var statearr_46757_48072 = state_46701__$1;
(statearr_46757_48072[(2)] = null);

(statearr_46757_48072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (11))){
var inst_46600 = (state_46701[(7)]);
var inst_46578 = (state_46701[(15)]);
var inst_46600__$1 = cljs.core.seq(inst_46578);
var state_46701__$1 = (function (){var statearr_46758 = state_46701;
(statearr_46758[(7)] = inst_46600__$1);

return statearr_46758;
})();
if(inst_46600__$1){
var statearr_46759_48073 = state_46701__$1;
(statearr_46759_48073[(1)] = (16));

} else {
var statearr_46760_48074 = state_46701__$1;
(statearr_46760_48074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (9))){
var inst_46630 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46761_48075 = state_46701__$1;
(statearr_46761_48075[(2)] = inst_46630);

(statearr_46761_48075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (5))){
var inst_46576 = cljs.core.deref(cs);
var inst_46577 = cljs.core.seq(inst_46576);
var inst_46578 = inst_46577;
var inst_46579 = null;
var inst_46580 = (0);
var inst_46581 = (0);
var state_46701__$1 = (function (){var statearr_46762 = state_46701;
(statearr_46762[(13)] = inst_46581);

(statearr_46762[(14)] = inst_46579);

(statearr_46762[(15)] = inst_46578);

(statearr_46762[(16)] = inst_46580);

return statearr_46762;
})();
var statearr_46763_48076 = state_46701__$1;
(statearr_46763_48076[(2)] = null);

(statearr_46763_48076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (14))){
var state_46701__$1 = state_46701;
var statearr_46764_48081 = state_46701__$1;
(statearr_46764_48081[(2)] = null);

(statearr_46764_48081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (45))){
var inst_46691 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46765_48082 = state_46701__$1;
(statearr_46765_48082[(2)] = inst_46691);

(statearr_46765_48082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (26))){
var inst_46633 = (state_46701[(29)]);
var inst_46687 = (state_46701[(2)]);
var inst_46688 = cljs.core.seq(inst_46633);
var state_46701__$1 = (function (){var statearr_46766 = state_46701;
(statearr_46766[(31)] = inst_46687);

return statearr_46766;
})();
if(inst_46688){
var statearr_46767_48083 = state_46701__$1;
(statearr_46767_48083[(1)] = (42));

} else {
var statearr_46768_48084 = state_46701__$1;
(statearr_46768_48084[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (16))){
var inst_46600 = (state_46701[(7)]);
var inst_46602 = cljs.core.chunked_seq_QMARK_(inst_46600);
var state_46701__$1 = state_46701;
if(inst_46602){
var statearr_46769_48085 = state_46701__$1;
(statearr_46769_48085[(1)] = (19));

} else {
var statearr_46770_48086 = state_46701__$1;
(statearr_46770_48086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (38))){
var inst_46680 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46771_48087 = state_46701__$1;
(statearr_46771_48087[(2)] = inst_46680);

(statearr_46771_48087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (30))){
var state_46701__$1 = state_46701;
var statearr_46772_48092 = state_46701__$1;
(statearr_46772_48092[(2)] = null);

(statearr_46772_48092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (10))){
var inst_46581 = (state_46701[(13)]);
var inst_46579 = (state_46701[(14)]);
var inst_46589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46579,inst_46581);
var inst_46590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46589,(0),null);
var inst_46591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46589,(1),null);
var state_46701__$1 = (function (){var statearr_46773 = state_46701;
(statearr_46773[(26)] = inst_46590);

return statearr_46773;
})();
if(cljs.core.truth_(inst_46591)){
var statearr_46774_48094 = state_46701__$1;
(statearr_46774_48094[(1)] = (13));

} else {
var statearr_46775_48095 = state_46701__$1;
(statearr_46775_48095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (18))){
var inst_46626 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46776_48096 = state_46701__$1;
(statearr_46776_48096[(2)] = inst_46626);

(statearr_46776_48096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (42))){
var state_46701__$1 = state_46701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46701__$1,(45),dchan);
} else {
if((state_val_46702 === (37))){
var inst_46660 = (state_46701[(25)]);
var inst_46669 = (state_46701[(23)]);
var inst_46569 = (state_46701[(10)]);
var inst_46669__$1 = cljs.core.first(inst_46660);
var inst_46670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46669__$1,inst_46569,done);
var state_46701__$1 = (function (){var statearr_46777 = state_46701;
(statearr_46777[(23)] = inst_46669__$1);

return statearr_46777;
})();
if(cljs.core.truth_(inst_46670)){
var statearr_46778_48099 = state_46701__$1;
(statearr_46778_48099[(1)] = (39));

} else {
var statearr_46779_48103 = state_46701__$1;
(statearr_46779_48103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (8))){
var inst_46581 = (state_46701[(13)]);
var inst_46580 = (state_46701[(16)]);
var inst_46583 = (inst_46581 < inst_46580);
var inst_46584 = inst_46583;
var state_46701__$1 = state_46701;
if(cljs.core.truth_(inst_46584)){
var statearr_46780_48104 = state_46701__$1;
(statearr_46780_48104[(1)] = (10));

} else {
var statearr_46781_48105 = state_46701__$1;
(statearr_46781_48105[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46006__auto__ = null;
var cljs$core$async$mult_$_state_machine__46006__auto____0 = (function (){
var statearr_46782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46782[(0)] = cljs$core$async$mult_$_state_machine__46006__auto__);

(statearr_46782[(1)] = (1));

return statearr_46782;
});
var cljs$core$async$mult_$_state_machine__46006__auto____1 = (function (state_46701){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46701);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46783){if((e46783 instanceof Object)){
var ex__46009__auto__ = e46783;
var statearr_46784_48106 = state_46701;
(statearr_46784_48106[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48107 = state_46701;
state_46701 = G__48107;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46006__auto__ = function(state_46701){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46006__auto____1.call(this,state_46701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46006__auto____0;
cljs$core$async$mult_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46006__auto____1;
return cljs$core$async$mult_$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46785 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46785[(6)] = c__46106__auto___47998);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var G__46787 = arguments.length;
switch (G__46787) {
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
var len__4789__auto___48118 = arguments.length;
var i__4790__auto___48119 = (0);
while(true){
if((i__4790__auto___48119 < len__4789__auto___48118)){
args__4795__auto__.push((arguments[i__4790__auto___48119]));

var G__48120 = (i__4790__auto___48119 + (1));
i__4790__auto___48119 = G__48120;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46792){
var map__46793 = p__46792;
var map__46793__$1 = (((((!((map__46793 == null))))?(((((map__46793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46793):map__46793);
var opts = map__46793__$1;
var statearr_46795_48123 = state;
(statearr_46795_48123[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46796_48124 = state;
(statearr_46796_48124[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46797_48125 = state;
(statearr_46797_48125[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46788){
var G__46789 = cljs.core.first(seq46788);
var seq46788__$1 = cljs.core.next(seq46788);
var G__46790 = cljs.core.first(seq46788__$1);
var seq46788__$2 = cljs.core.next(seq46788__$1);
var G__46791 = cljs.core.first(seq46788__$2);
var seq46788__$3 = cljs.core.next(seq46788__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46789,G__46790,G__46791,seq46788__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46798 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46799){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46799 = meta46799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46800,meta46799__$1){
var self__ = this;
var _46800__$1 = this;
return (new cljs.core.async.t_cljs$core$async46798(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46799__$1));
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46800){
var self__ = this;
var _46800__$1 = this;
return self__.meta46799;
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46798.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46799","meta46799",488276626,null)], null);
}));

(cljs.core.async.t_cljs$core$async46798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46798");

(cljs.core.async.t_cljs$core$async46798.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46798.
 */
cljs.core.async.__GT_t_cljs$core$async46798 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46798(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46799){
return (new cljs.core.async.t_cljs$core$async46798(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46799));
});

}

return (new cljs.core.async.t_cljs$core$async46798(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46106__auto___48143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_46902){
var state_val_46903 = (state_46902[(1)]);
if((state_val_46903 === (7))){
var inst_46817 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
var statearr_46904_48146 = state_46902__$1;
(statearr_46904_48146[(2)] = inst_46817);

(statearr_46904_48146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (20))){
var inst_46829 = (state_46902[(7)]);
var state_46902__$1 = state_46902;
var statearr_46905_48147 = state_46902__$1;
(statearr_46905_48147[(2)] = inst_46829);

(statearr_46905_48147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (27))){
var state_46902__$1 = state_46902;
var statearr_46906_48148 = state_46902__$1;
(statearr_46906_48148[(2)] = null);

(statearr_46906_48148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (1))){
var inst_46804 = (state_46902[(8)]);
var inst_46804__$1 = calc_state();
var inst_46806 = (inst_46804__$1 == null);
var inst_46807 = cljs.core.not(inst_46806);
var state_46902__$1 = (function (){var statearr_46907 = state_46902;
(statearr_46907[(8)] = inst_46804__$1);

return statearr_46907;
})();
if(inst_46807){
var statearr_46908_48149 = state_46902__$1;
(statearr_46908_48149[(1)] = (2));

} else {
var statearr_46909_48150 = state_46902__$1;
(statearr_46909_48150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (24))){
var inst_46853 = (state_46902[(9)]);
var inst_46876 = (state_46902[(10)]);
var inst_46862 = (state_46902[(11)]);
var inst_46876__$1 = (inst_46853.cljs$core$IFn$_invoke$arity$1 ? inst_46853.cljs$core$IFn$_invoke$arity$1(inst_46862) : inst_46853.call(null,inst_46862));
var state_46902__$1 = (function (){var statearr_46910 = state_46902;
(statearr_46910[(10)] = inst_46876__$1);

return statearr_46910;
})();
if(cljs.core.truth_(inst_46876__$1)){
var statearr_46911_48151 = state_46902__$1;
(statearr_46911_48151[(1)] = (29));

} else {
var statearr_46912_48152 = state_46902__$1;
(statearr_46912_48152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (4))){
var inst_46820 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46820)){
var statearr_46913_48153 = state_46902__$1;
(statearr_46913_48153[(1)] = (8));

} else {
var statearr_46914_48155 = state_46902__$1;
(statearr_46914_48155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (15))){
var inst_46847 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46847)){
var statearr_46915_48156 = state_46902__$1;
(statearr_46915_48156[(1)] = (19));

} else {
var statearr_46916_48157 = state_46902__$1;
(statearr_46916_48157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (21))){
var inst_46852 = (state_46902[(12)]);
var inst_46852__$1 = (state_46902[(2)]);
var inst_46853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46852__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46852__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46852__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46902__$1 = (function (){var statearr_46917 = state_46902;
(statearr_46917[(12)] = inst_46852__$1);

(statearr_46917[(9)] = inst_46853);

(statearr_46917[(13)] = inst_46854);

return statearr_46917;
})();
return cljs.core.async.ioc_alts_BANG_(state_46902__$1,(22),inst_46855);
} else {
if((state_val_46903 === (31))){
var inst_46884 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46884)){
var statearr_46918_48159 = state_46902__$1;
(statearr_46918_48159[(1)] = (32));

} else {
var statearr_46919_48160 = state_46902__$1;
(statearr_46919_48160[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (32))){
var inst_46861 = (state_46902[(14)]);
var state_46902__$1 = state_46902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46902__$1,(35),out,inst_46861);
} else {
if((state_val_46903 === (33))){
var inst_46852 = (state_46902[(12)]);
var inst_46829 = inst_46852;
var state_46902__$1 = (function (){var statearr_46920 = state_46902;
(statearr_46920[(7)] = inst_46829);

return statearr_46920;
})();
var statearr_46921_48161 = state_46902__$1;
(statearr_46921_48161[(2)] = null);

(statearr_46921_48161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (13))){
var inst_46829 = (state_46902[(7)]);
var inst_46836 = inst_46829.cljs$lang$protocol_mask$partition0$;
var inst_46837 = (inst_46836 & (64));
var inst_46838 = inst_46829.cljs$core$ISeq$;
var inst_46839 = (cljs.core.PROTOCOL_SENTINEL === inst_46838);
var inst_46840 = ((inst_46837) || (inst_46839));
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46840)){
var statearr_46922_48162 = state_46902__$1;
(statearr_46922_48162[(1)] = (16));

} else {
var statearr_46923_48163 = state_46902__$1;
(statearr_46923_48163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (22))){
var inst_46862 = (state_46902[(11)]);
var inst_46861 = (state_46902[(14)]);
var inst_46860 = (state_46902[(2)]);
var inst_46861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46860,(0),null);
var inst_46862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46860,(1),null);
var inst_46863 = (inst_46861__$1 == null);
var inst_46864 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46862__$1,change);
var inst_46865 = ((inst_46863) || (inst_46864));
var state_46902__$1 = (function (){var statearr_46924 = state_46902;
(statearr_46924[(11)] = inst_46862__$1);

(statearr_46924[(14)] = inst_46861__$1);

return statearr_46924;
})();
if(cljs.core.truth_(inst_46865)){
var statearr_46925_48164 = state_46902__$1;
(statearr_46925_48164[(1)] = (23));

} else {
var statearr_46926_48165 = state_46902__$1;
(statearr_46926_48165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (36))){
var inst_46852 = (state_46902[(12)]);
var inst_46829 = inst_46852;
var state_46902__$1 = (function (){var statearr_46927 = state_46902;
(statearr_46927[(7)] = inst_46829);

return statearr_46927;
})();
var statearr_46928_48166 = state_46902__$1;
(statearr_46928_48166[(2)] = null);

(statearr_46928_48166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (29))){
var inst_46876 = (state_46902[(10)]);
var state_46902__$1 = state_46902;
var statearr_46929_48167 = state_46902__$1;
(statearr_46929_48167[(2)] = inst_46876);

(statearr_46929_48167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (6))){
var state_46902__$1 = state_46902;
var statearr_46930_48172 = state_46902__$1;
(statearr_46930_48172[(2)] = false);

(statearr_46930_48172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (28))){
var inst_46872 = (state_46902[(2)]);
var inst_46873 = calc_state();
var inst_46829 = inst_46873;
var state_46902__$1 = (function (){var statearr_46931 = state_46902;
(statearr_46931[(7)] = inst_46829);

(statearr_46931[(15)] = inst_46872);

return statearr_46931;
})();
var statearr_46932_48173 = state_46902__$1;
(statearr_46932_48173[(2)] = null);

(statearr_46932_48173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (25))){
var inst_46898 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
var statearr_46933_48178 = state_46902__$1;
(statearr_46933_48178[(2)] = inst_46898);

(statearr_46933_48178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (34))){
var inst_46896 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
var statearr_46934_48179 = state_46902__$1;
(statearr_46934_48179[(2)] = inst_46896);

(statearr_46934_48179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (17))){
var state_46902__$1 = state_46902;
var statearr_46935_48180 = state_46902__$1;
(statearr_46935_48180[(2)] = false);

(statearr_46935_48180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (3))){
var state_46902__$1 = state_46902;
var statearr_46936_48183 = state_46902__$1;
(statearr_46936_48183[(2)] = false);

(statearr_46936_48183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (12))){
var inst_46900 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46902__$1,inst_46900);
} else {
if((state_val_46903 === (2))){
var inst_46804 = (state_46902[(8)]);
var inst_46809 = inst_46804.cljs$lang$protocol_mask$partition0$;
var inst_46810 = (inst_46809 & (64));
var inst_46811 = inst_46804.cljs$core$ISeq$;
var inst_46812 = (cljs.core.PROTOCOL_SENTINEL === inst_46811);
var inst_46813 = ((inst_46810) || (inst_46812));
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46813)){
var statearr_46937_48184 = state_46902__$1;
(statearr_46937_48184[(1)] = (5));

} else {
var statearr_46938_48185 = state_46902__$1;
(statearr_46938_48185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (23))){
var inst_46861 = (state_46902[(14)]);
var inst_46867 = (inst_46861 == null);
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46867)){
var statearr_46939_48186 = state_46902__$1;
(statearr_46939_48186[(1)] = (26));

} else {
var statearr_46940_48187 = state_46902__$1;
(statearr_46940_48187[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (35))){
var inst_46887 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
if(cljs.core.truth_(inst_46887)){
var statearr_46941_48188 = state_46902__$1;
(statearr_46941_48188[(1)] = (36));

} else {
var statearr_46942_48189 = state_46902__$1;
(statearr_46942_48189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (19))){
var inst_46829 = (state_46902[(7)]);
var inst_46849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46829);
var state_46902__$1 = state_46902;
var statearr_46943_48190 = state_46902__$1;
(statearr_46943_48190[(2)] = inst_46849);

(statearr_46943_48190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (11))){
var inst_46829 = (state_46902[(7)]);
var inst_46833 = (inst_46829 == null);
var inst_46834 = cljs.core.not(inst_46833);
var state_46902__$1 = state_46902;
if(inst_46834){
var statearr_46944_48193 = state_46902__$1;
(statearr_46944_48193[(1)] = (13));

} else {
var statearr_46945_48194 = state_46902__$1;
(statearr_46945_48194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (9))){
var inst_46804 = (state_46902[(8)]);
var state_46902__$1 = state_46902;
var statearr_46946_48197 = state_46902__$1;
(statearr_46946_48197[(2)] = inst_46804);

(statearr_46946_48197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (5))){
var state_46902__$1 = state_46902;
var statearr_46947_48198 = state_46902__$1;
(statearr_46947_48198[(2)] = true);

(statearr_46947_48198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (14))){
var state_46902__$1 = state_46902;
var statearr_46948_48199 = state_46902__$1;
(statearr_46948_48199[(2)] = false);

(statearr_46948_48199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (26))){
var inst_46862 = (state_46902[(11)]);
var inst_46869 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46862);
var state_46902__$1 = state_46902;
var statearr_46949_48200 = state_46902__$1;
(statearr_46949_48200[(2)] = inst_46869);

(statearr_46949_48200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (16))){
var state_46902__$1 = state_46902;
var statearr_46950_48201 = state_46902__$1;
(statearr_46950_48201[(2)] = true);

(statearr_46950_48201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (38))){
var inst_46892 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
var statearr_46951_48202 = state_46902__$1;
(statearr_46951_48202[(2)] = inst_46892);

(statearr_46951_48202[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (30))){
var inst_46853 = (state_46902[(9)]);
var inst_46862 = (state_46902[(11)]);
var inst_46854 = (state_46902[(13)]);
var inst_46879 = cljs.core.empty_QMARK_(inst_46853);
var inst_46880 = (inst_46854.cljs$core$IFn$_invoke$arity$1 ? inst_46854.cljs$core$IFn$_invoke$arity$1(inst_46862) : inst_46854.call(null,inst_46862));
var inst_46881 = cljs.core.not(inst_46880);
var inst_46882 = ((inst_46879) && (inst_46881));
var state_46902__$1 = state_46902;
var statearr_46952_48204 = state_46902__$1;
(statearr_46952_48204[(2)] = inst_46882);

(statearr_46952_48204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (10))){
var inst_46804 = (state_46902[(8)]);
var inst_46825 = (state_46902[(2)]);
var inst_46826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46825,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46825,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46825,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46829 = inst_46804;
var state_46902__$1 = (function (){var statearr_46953 = state_46902;
(statearr_46953[(16)] = inst_46826);

(statearr_46953[(7)] = inst_46829);

(statearr_46953[(17)] = inst_46827);

(statearr_46953[(18)] = inst_46828);

return statearr_46953;
})();
var statearr_46954_48205 = state_46902__$1;
(statearr_46954_48205[(2)] = null);

(statearr_46954_48205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (18))){
var inst_46844 = (state_46902[(2)]);
var state_46902__$1 = state_46902;
var statearr_46955_48206 = state_46902__$1;
(statearr_46955_48206[(2)] = inst_46844);

(statearr_46955_48206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (37))){
var state_46902__$1 = state_46902;
var statearr_46956_48207 = state_46902__$1;
(statearr_46956_48207[(2)] = null);

(statearr_46956_48207[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46903 === (8))){
var inst_46804 = (state_46902[(8)]);
var inst_46822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46804);
var state_46902__$1 = state_46902;
var statearr_46957_48209 = state_46902__$1;
(statearr_46957_48209[(2)] = inst_46822);

(statearr_46957_48209[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__46006__auto__ = null;
var cljs$core$async$mix_$_state_machine__46006__auto____0 = (function (){
var statearr_46958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46958[(0)] = cljs$core$async$mix_$_state_machine__46006__auto__);

(statearr_46958[(1)] = (1));

return statearr_46958;
});
var cljs$core$async$mix_$_state_machine__46006__auto____1 = (function (state_46902){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_46902);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e46959){if((e46959 instanceof Object)){
var ex__46009__auto__ = e46959;
var statearr_46960_48211 = state_46902;
(statearr_46960_48211[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48215 = state_46902;
state_46902 = G__48215;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46006__auto__ = function(state_46902){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46006__auto____1.call(this,state_46902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46006__auto____0;
cljs$core$async$mix_$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46006__auto____1;
return cljs$core$async$mix_$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_46961 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_46961[(6)] = c__46106__auto___48143);

return statearr_46961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var G__46963 = arguments.length;
switch (G__46963) {
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
var G__46966 = arguments.length;
switch (G__46966) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46964_SHARP_){
if(cljs.core.truth_((p1__46964_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46964_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46964_SHARP_.call(null,topic)))){
return p1__46964_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46964_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46967 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46968){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46968 = meta46968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46969,meta46968__$1){
var self__ = this;
var _46969__$1 = this;
return (new cljs.core.async.t_cljs$core$async46967(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46968__$1));
}));

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46969){
var self__ = this;
var _46969__$1 = this;
return self__.meta46968;
}));

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46968","meta46968",-1035703398,null)], null);
}));

(cljs.core.async.t_cljs$core$async46967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46967");

(cljs.core.async.t_cljs$core$async46967.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46967.
 */
cljs.core.async.__GT_t_cljs$core$async46967 = (function cljs$core$async$__GT_t_cljs$core$async46967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46968){
return (new cljs.core.async.t_cljs$core$async46967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46968));
});

}

return (new cljs.core.async.t_cljs$core$async46967(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46106__auto___48256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47041){
var state_val_47042 = (state_47041[(1)]);
if((state_val_47042 === (7))){
var inst_47037 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47043_48257 = state_47041__$1;
(statearr_47043_48257[(2)] = inst_47037);

(statearr_47043_48257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (20))){
var state_47041__$1 = state_47041;
var statearr_47044_48258 = state_47041__$1;
(statearr_47044_48258[(2)] = null);

(statearr_47044_48258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (1))){
var state_47041__$1 = state_47041;
var statearr_47045_48259 = state_47041__$1;
(statearr_47045_48259[(2)] = null);

(statearr_47045_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (24))){
var inst_47020 = (state_47041[(7)]);
var inst_47029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47020);
var state_47041__$1 = state_47041;
var statearr_47046_48260 = state_47041__$1;
(statearr_47046_48260[(2)] = inst_47029);

(statearr_47046_48260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (4))){
var inst_46972 = (state_47041[(8)]);
var inst_46972__$1 = (state_47041[(2)]);
var inst_46973 = (inst_46972__$1 == null);
var state_47041__$1 = (function (){var statearr_47047 = state_47041;
(statearr_47047[(8)] = inst_46972__$1);

return statearr_47047;
})();
if(cljs.core.truth_(inst_46973)){
var statearr_47048_48261 = state_47041__$1;
(statearr_47048_48261[(1)] = (5));

} else {
var statearr_47049_48262 = state_47041__$1;
(statearr_47049_48262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (15))){
var inst_47014 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47050_48263 = state_47041__$1;
(statearr_47050_48263[(2)] = inst_47014);

(statearr_47050_48263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (21))){
var inst_47034 = (state_47041[(2)]);
var state_47041__$1 = (function (){var statearr_47051 = state_47041;
(statearr_47051[(9)] = inst_47034);

return statearr_47051;
})();
var statearr_47052_48270 = state_47041__$1;
(statearr_47052_48270[(2)] = null);

(statearr_47052_48270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (13))){
var inst_46996 = (state_47041[(10)]);
var inst_46998 = cljs.core.chunked_seq_QMARK_(inst_46996);
var state_47041__$1 = state_47041;
if(inst_46998){
var statearr_47053_48271 = state_47041__$1;
(statearr_47053_48271[(1)] = (16));

} else {
var statearr_47054_48272 = state_47041__$1;
(statearr_47054_48272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (22))){
var inst_47026 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
if(cljs.core.truth_(inst_47026)){
var statearr_47055_48273 = state_47041__$1;
(statearr_47055_48273[(1)] = (23));

} else {
var statearr_47056_48274 = state_47041__$1;
(statearr_47056_48274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (6))){
var inst_47022 = (state_47041[(11)]);
var inst_47020 = (state_47041[(7)]);
var inst_46972 = (state_47041[(8)]);
var inst_47020__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46972) : topic_fn.call(null,inst_46972));
var inst_47021 = cljs.core.deref(mults);
var inst_47022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47021,inst_47020__$1);
var state_47041__$1 = (function (){var statearr_47057 = state_47041;
(statearr_47057[(11)] = inst_47022__$1);

(statearr_47057[(7)] = inst_47020__$1);

return statearr_47057;
})();
if(cljs.core.truth_(inst_47022__$1)){
var statearr_47058_48275 = state_47041__$1;
(statearr_47058_48275[(1)] = (19));

} else {
var statearr_47059_48276 = state_47041__$1;
(statearr_47059_48276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (25))){
var inst_47031 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47060_48277 = state_47041__$1;
(statearr_47060_48277[(2)] = inst_47031);

(statearr_47060_48277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (17))){
var inst_46996 = (state_47041[(10)]);
var inst_47005 = cljs.core.first(inst_46996);
var inst_47006 = cljs.core.async.muxch_STAR_(inst_47005);
var inst_47007 = cljs.core.async.close_BANG_(inst_47006);
var inst_47008 = cljs.core.next(inst_46996);
var inst_46982 = inst_47008;
var inst_46983 = null;
var inst_46984 = (0);
var inst_46985 = (0);
var state_47041__$1 = (function (){var statearr_47061 = state_47041;
(statearr_47061[(12)] = inst_46982);

(statearr_47061[(13)] = inst_46984);

(statearr_47061[(14)] = inst_47007);

(statearr_47061[(15)] = inst_46983);

(statearr_47061[(16)] = inst_46985);

return statearr_47061;
})();
var statearr_47062_48284 = state_47041__$1;
(statearr_47062_48284[(2)] = null);

(statearr_47062_48284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (3))){
var inst_47039 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47041__$1,inst_47039);
} else {
if((state_val_47042 === (12))){
var inst_47016 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47063_48285 = state_47041__$1;
(statearr_47063_48285[(2)] = inst_47016);

(statearr_47063_48285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (2))){
var state_47041__$1 = state_47041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47041__$1,(4),ch);
} else {
if((state_val_47042 === (23))){
var state_47041__$1 = state_47041;
var statearr_47064_48286 = state_47041__$1;
(statearr_47064_48286[(2)] = null);

(statearr_47064_48286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (19))){
var inst_47022 = (state_47041[(11)]);
var inst_46972 = (state_47041[(8)]);
var inst_47024 = cljs.core.async.muxch_STAR_(inst_47022);
var state_47041__$1 = state_47041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47041__$1,(22),inst_47024,inst_46972);
} else {
if((state_val_47042 === (11))){
var inst_46982 = (state_47041[(12)]);
var inst_46996 = (state_47041[(10)]);
var inst_46996__$1 = cljs.core.seq(inst_46982);
var state_47041__$1 = (function (){var statearr_47065 = state_47041;
(statearr_47065[(10)] = inst_46996__$1);

return statearr_47065;
})();
if(inst_46996__$1){
var statearr_47066_48287 = state_47041__$1;
(statearr_47066_48287[(1)] = (13));

} else {
var statearr_47067_48288 = state_47041__$1;
(statearr_47067_48288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (9))){
var inst_47018 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47068_48289 = state_47041__$1;
(statearr_47068_48289[(2)] = inst_47018);

(statearr_47068_48289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (5))){
var inst_46979 = cljs.core.deref(mults);
var inst_46980 = cljs.core.vals(inst_46979);
var inst_46981 = cljs.core.seq(inst_46980);
var inst_46982 = inst_46981;
var inst_46983 = null;
var inst_46984 = (0);
var inst_46985 = (0);
var state_47041__$1 = (function (){var statearr_47069 = state_47041;
(statearr_47069[(12)] = inst_46982);

(statearr_47069[(13)] = inst_46984);

(statearr_47069[(15)] = inst_46983);

(statearr_47069[(16)] = inst_46985);

return statearr_47069;
})();
var statearr_47070_48293 = state_47041__$1;
(statearr_47070_48293[(2)] = null);

(statearr_47070_48293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (14))){
var state_47041__$1 = state_47041;
var statearr_47074_48294 = state_47041__$1;
(statearr_47074_48294[(2)] = null);

(statearr_47074_48294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (16))){
var inst_46996 = (state_47041[(10)]);
var inst_47000 = cljs.core.chunk_first(inst_46996);
var inst_47001 = cljs.core.chunk_rest(inst_46996);
var inst_47002 = cljs.core.count(inst_47000);
var inst_46982 = inst_47001;
var inst_46983 = inst_47000;
var inst_46984 = inst_47002;
var inst_46985 = (0);
var state_47041__$1 = (function (){var statearr_47075 = state_47041;
(statearr_47075[(12)] = inst_46982);

(statearr_47075[(13)] = inst_46984);

(statearr_47075[(15)] = inst_46983);

(statearr_47075[(16)] = inst_46985);

return statearr_47075;
})();
var statearr_47076_48298 = state_47041__$1;
(statearr_47076_48298[(2)] = null);

(statearr_47076_48298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (10))){
var inst_46982 = (state_47041[(12)]);
var inst_46984 = (state_47041[(13)]);
var inst_46983 = (state_47041[(15)]);
var inst_46985 = (state_47041[(16)]);
var inst_46990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46983,inst_46985);
var inst_46991 = cljs.core.async.muxch_STAR_(inst_46990);
var inst_46992 = cljs.core.async.close_BANG_(inst_46991);
var inst_46993 = (inst_46985 + (1));
var tmp47071 = inst_46982;
var tmp47072 = inst_46984;
var tmp47073 = inst_46983;
var inst_46982__$1 = tmp47071;
var inst_46983__$1 = tmp47073;
var inst_46984__$1 = tmp47072;
var inst_46985__$1 = inst_46993;
var state_47041__$1 = (function (){var statearr_47077 = state_47041;
(statearr_47077[(12)] = inst_46982__$1);

(statearr_47077[(13)] = inst_46984__$1);

(statearr_47077[(15)] = inst_46983__$1);

(statearr_47077[(16)] = inst_46985__$1);

(statearr_47077[(17)] = inst_46992);

return statearr_47077;
})();
var statearr_47078_48301 = state_47041__$1;
(statearr_47078_48301[(2)] = null);

(statearr_47078_48301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (18))){
var inst_47011 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47079_48302 = state_47041__$1;
(statearr_47079_48302[(2)] = inst_47011);

(statearr_47079_48302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (8))){
var inst_46984 = (state_47041[(13)]);
var inst_46985 = (state_47041[(16)]);
var inst_46987 = (inst_46985 < inst_46984);
var inst_46988 = inst_46987;
var state_47041__$1 = state_47041;
if(cljs.core.truth_(inst_46988)){
var statearr_47080_48303 = state_47041__$1;
(statearr_47080_48303[(1)] = (10));

} else {
var statearr_47081_48304 = state_47041__$1;
(statearr_47081_48304[(1)] = (11));

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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47082[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47082[(1)] = (1));

return statearr_47082;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47041){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47041);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47083){if((e47083 instanceof Object)){
var ex__46009__auto__ = e47083;
var statearr_47084_48307 = state_47041;
(statearr_47084_48307[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48308 = state_47041;
state_47041 = G__48308;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47085 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47085[(6)] = c__46106__auto___48256);

return statearr_47085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var G__47087 = arguments.length;
switch (G__47087) {
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
var G__47089 = arguments.length;
switch (G__47089) {
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
var G__47091 = arguments.length;
switch (G__47091) {
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
var c__46106__auto___48325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47130){
var state_val_47131 = (state_47130[(1)]);
if((state_val_47131 === (7))){
var state_47130__$1 = state_47130;
var statearr_47132_48327 = state_47130__$1;
(statearr_47132_48327[(2)] = null);

(statearr_47132_48327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (1))){
var state_47130__$1 = state_47130;
var statearr_47133_48328 = state_47130__$1;
(statearr_47133_48328[(2)] = null);

(statearr_47133_48328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (4))){
var inst_47094 = (state_47130[(7)]);
var inst_47096 = (inst_47094 < cnt);
var state_47130__$1 = state_47130;
if(cljs.core.truth_(inst_47096)){
var statearr_47134_48329 = state_47130__$1;
(statearr_47134_48329[(1)] = (6));

} else {
var statearr_47135_48330 = state_47130__$1;
(statearr_47135_48330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (15))){
var inst_47126 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
var statearr_47136_48331 = state_47130__$1;
(statearr_47136_48331[(2)] = inst_47126);

(statearr_47136_48331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (13))){
var inst_47119 = cljs.core.async.close_BANG_(out);
var state_47130__$1 = state_47130;
var statearr_47137_48332 = state_47130__$1;
(statearr_47137_48332[(2)] = inst_47119);

(statearr_47137_48332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (6))){
var state_47130__$1 = state_47130;
var statearr_47138_48333 = state_47130__$1;
(statearr_47138_48333[(2)] = null);

(statearr_47138_48333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (3))){
var inst_47128 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47130__$1,inst_47128);
} else {
if((state_val_47131 === (12))){
var inst_47116 = (state_47130[(8)]);
var inst_47116__$1 = (state_47130[(2)]);
var inst_47117 = cljs.core.some(cljs.core.nil_QMARK_,inst_47116__$1);
var state_47130__$1 = (function (){var statearr_47139 = state_47130;
(statearr_47139[(8)] = inst_47116__$1);

return statearr_47139;
})();
if(cljs.core.truth_(inst_47117)){
var statearr_47140_48334 = state_47130__$1;
(statearr_47140_48334[(1)] = (13));

} else {
var statearr_47141_48335 = state_47130__$1;
(statearr_47141_48335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (2))){
var inst_47093 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47094 = (0);
var state_47130__$1 = (function (){var statearr_47142 = state_47130;
(statearr_47142[(9)] = inst_47093);

(statearr_47142[(7)] = inst_47094);

return statearr_47142;
})();
var statearr_47143_48336 = state_47130__$1;
(statearr_47143_48336[(2)] = null);

(statearr_47143_48336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (11))){
var inst_47094 = (state_47130[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47130,(10),Object,null,(9));
var inst_47103 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47094) : chs__$1.call(null,inst_47094));
var inst_47104 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47094) : done.call(null,inst_47094));
var inst_47105 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47103,inst_47104);
var state_47130__$1 = state_47130;
var statearr_47144_48337 = state_47130__$1;
(statearr_47144_48337[(2)] = inst_47105);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (9))){
var inst_47094 = (state_47130[(7)]);
var inst_47107 = (state_47130[(2)]);
var inst_47108 = (inst_47094 + (1));
var inst_47094__$1 = inst_47108;
var state_47130__$1 = (function (){var statearr_47145 = state_47130;
(statearr_47145[(10)] = inst_47107);

(statearr_47145[(7)] = inst_47094__$1);

return statearr_47145;
})();
var statearr_47146_48338 = state_47130__$1;
(statearr_47146_48338[(2)] = null);

(statearr_47146_48338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (5))){
var inst_47114 = (state_47130[(2)]);
var state_47130__$1 = (function (){var statearr_47147 = state_47130;
(statearr_47147[(11)] = inst_47114);

return statearr_47147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47130__$1,(12),dchan);
} else {
if((state_val_47131 === (14))){
var inst_47116 = (state_47130[(8)]);
var inst_47121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47116);
var state_47130__$1 = state_47130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47130__$1,(16),out,inst_47121);
} else {
if((state_val_47131 === (16))){
var inst_47123 = (state_47130[(2)]);
var state_47130__$1 = (function (){var statearr_47148 = state_47130;
(statearr_47148[(12)] = inst_47123);

return statearr_47148;
})();
var statearr_47149_48341 = state_47130__$1;
(statearr_47149_48341[(2)] = null);

(statearr_47149_48341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (10))){
var inst_47098 = (state_47130[(2)]);
var inst_47099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47130__$1 = (function (){var statearr_47150 = state_47130;
(statearr_47150[(13)] = inst_47098);

return statearr_47150;
})();
var statearr_47151_48343 = state_47130__$1;
(statearr_47151_48343[(2)] = inst_47099);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (8))){
var inst_47112 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
var statearr_47152_48344 = state_47130__$1;
(statearr_47152_48344[(2)] = inst_47112);

(statearr_47152_48344[(1)] = (5));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47153[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47153[(1)] = (1));

return statearr_47153;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47130){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47130);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47154){if((e47154 instanceof Object)){
var ex__46009__auto__ = e47154;
var statearr_47155_48346 = state_47130;
(statearr_47155_48346[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48347 = state_47130;
state_47130 = G__48347;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47156 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47156[(6)] = c__46106__auto___48325);

return statearr_47156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var G__47159 = arguments.length;
switch (G__47159) {
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
var c__46106__auto___48350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47191){
var state_val_47192 = (state_47191[(1)]);
if((state_val_47192 === (7))){
var inst_47171 = (state_47191[(7)]);
var inst_47170 = (state_47191[(8)]);
var inst_47170__$1 = (state_47191[(2)]);
var inst_47171__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47170__$1,(0),null);
var inst_47172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47170__$1,(1),null);
var inst_47173 = (inst_47171__$1 == null);
var state_47191__$1 = (function (){var statearr_47193 = state_47191;
(statearr_47193[(9)] = inst_47172);

(statearr_47193[(7)] = inst_47171__$1);

(statearr_47193[(8)] = inst_47170__$1);

return statearr_47193;
})();
if(cljs.core.truth_(inst_47173)){
var statearr_47194_48351 = state_47191__$1;
(statearr_47194_48351[(1)] = (8));

} else {
var statearr_47195_48353 = state_47191__$1;
(statearr_47195_48353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (1))){
var inst_47160 = cljs.core.vec(chs);
var inst_47161 = inst_47160;
var state_47191__$1 = (function (){var statearr_47196 = state_47191;
(statearr_47196[(10)] = inst_47161);

return statearr_47196;
})();
var statearr_47197_48354 = state_47191__$1;
(statearr_47197_48354[(2)] = null);

(statearr_47197_48354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (4))){
var inst_47161 = (state_47191[(10)]);
var state_47191__$1 = state_47191;
return cljs.core.async.ioc_alts_BANG_(state_47191__$1,(7),inst_47161);
} else {
if((state_val_47192 === (6))){
var inst_47187 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47198_48355 = state_47191__$1;
(statearr_47198_48355[(2)] = inst_47187);

(statearr_47198_48355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (3))){
var inst_47189 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47191__$1,inst_47189);
} else {
if((state_val_47192 === (2))){
var inst_47161 = (state_47191[(10)]);
var inst_47163 = cljs.core.count(inst_47161);
var inst_47164 = (inst_47163 > (0));
var state_47191__$1 = state_47191;
if(cljs.core.truth_(inst_47164)){
var statearr_47200_48356 = state_47191__$1;
(statearr_47200_48356[(1)] = (4));

} else {
var statearr_47201_48357 = state_47191__$1;
(statearr_47201_48357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (11))){
var inst_47161 = (state_47191[(10)]);
var inst_47180 = (state_47191[(2)]);
var tmp47199 = inst_47161;
var inst_47161__$1 = tmp47199;
var state_47191__$1 = (function (){var statearr_47202 = state_47191;
(statearr_47202[(11)] = inst_47180);

(statearr_47202[(10)] = inst_47161__$1);

return statearr_47202;
})();
var statearr_47203_48358 = state_47191__$1;
(statearr_47203_48358[(2)] = null);

(statearr_47203_48358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (9))){
var inst_47171 = (state_47191[(7)]);
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47191__$1,(11),out,inst_47171);
} else {
if((state_val_47192 === (5))){
var inst_47185 = cljs.core.async.close_BANG_(out);
var state_47191__$1 = state_47191;
var statearr_47204_48359 = state_47191__$1;
(statearr_47204_48359[(2)] = inst_47185);

(statearr_47204_48359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (10))){
var inst_47183 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47205_48360 = state_47191__$1;
(statearr_47205_48360[(2)] = inst_47183);

(statearr_47205_48360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (8))){
var inst_47172 = (state_47191[(9)]);
var inst_47171 = (state_47191[(7)]);
var inst_47161 = (state_47191[(10)]);
var inst_47170 = (state_47191[(8)]);
var inst_47175 = (function (){var cs = inst_47161;
var vec__47166 = inst_47170;
var v = inst_47171;
var c = inst_47172;
return (function (p1__47157_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47157_SHARP_);
});
})();
var inst_47176 = cljs.core.filterv(inst_47175,inst_47161);
var inst_47161__$1 = inst_47176;
var state_47191__$1 = (function (){var statearr_47206 = state_47191;
(statearr_47206[(10)] = inst_47161__$1);

return statearr_47206;
})();
var statearr_47207_48367 = state_47191__$1;
(statearr_47207_48367[(2)] = null);

(statearr_47207_48367[(1)] = (2));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47208[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47208[(1)] = (1));

return statearr_47208;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47191){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47191);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47209){if((e47209 instanceof Object)){
var ex__46009__auto__ = e47209;
var statearr_47210_48372 = state_47191;
(statearr_47210_48372[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48377 = state_47191;
state_47191 = G__48377;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47211 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47211[(6)] = c__46106__auto___48350);

return statearr_47211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
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
var G__47213 = arguments.length;
switch (G__47213) {
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
var c__46106__auto___48388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47237){
var state_val_47238 = (state_47237[(1)]);
if((state_val_47238 === (7))){
var inst_47219 = (state_47237[(7)]);
var inst_47219__$1 = (state_47237[(2)]);
var inst_47220 = (inst_47219__$1 == null);
var inst_47221 = cljs.core.not(inst_47220);
var state_47237__$1 = (function (){var statearr_47239 = state_47237;
(statearr_47239[(7)] = inst_47219__$1);

return statearr_47239;
})();
if(inst_47221){
var statearr_47240_48391 = state_47237__$1;
(statearr_47240_48391[(1)] = (8));

} else {
var statearr_47241_48392 = state_47237__$1;
(statearr_47241_48392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (1))){
var inst_47214 = (0);
var state_47237__$1 = (function (){var statearr_47242 = state_47237;
(statearr_47242[(8)] = inst_47214);

return statearr_47242;
})();
var statearr_47243_48393 = state_47237__$1;
(statearr_47243_48393[(2)] = null);

(statearr_47243_48393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (4))){
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47237__$1,(7),ch);
} else {
if((state_val_47238 === (6))){
var inst_47232 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47244_48395 = state_47237__$1;
(statearr_47244_48395[(2)] = inst_47232);

(statearr_47244_48395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (3))){
var inst_47234 = (state_47237[(2)]);
var inst_47235 = cljs.core.async.close_BANG_(out);
var state_47237__$1 = (function (){var statearr_47245 = state_47237;
(statearr_47245[(9)] = inst_47234);

return statearr_47245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47237__$1,inst_47235);
} else {
if((state_val_47238 === (2))){
var inst_47214 = (state_47237[(8)]);
var inst_47216 = (inst_47214 < n);
var state_47237__$1 = state_47237;
if(cljs.core.truth_(inst_47216)){
var statearr_47246_48401 = state_47237__$1;
(statearr_47246_48401[(1)] = (4));

} else {
var statearr_47247_48402 = state_47237__$1;
(statearr_47247_48402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (11))){
var inst_47214 = (state_47237[(8)]);
var inst_47224 = (state_47237[(2)]);
var inst_47225 = (inst_47214 + (1));
var inst_47214__$1 = inst_47225;
var state_47237__$1 = (function (){var statearr_47248 = state_47237;
(statearr_47248[(10)] = inst_47224);

(statearr_47248[(8)] = inst_47214__$1);

return statearr_47248;
})();
var statearr_47249_48407 = state_47237__$1;
(statearr_47249_48407[(2)] = null);

(statearr_47249_48407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (9))){
var state_47237__$1 = state_47237;
var statearr_47250_48412 = state_47237__$1;
(statearr_47250_48412[(2)] = null);

(statearr_47250_48412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (5))){
var state_47237__$1 = state_47237;
var statearr_47251_48413 = state_47237__$1;
(statearr_47251_48413[(2)] = null);

(statearr_47251_48413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (10))){
var inst_47229 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47252_48417 = state_47237__$1;
(statearr_47252_48417[(2)] = inst_47229);

(statearr_47252_48417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (8))){
var inst_47219 = (state_47237[(7)]);
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47237__$1,(11),out,inst_47219);
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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47253[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47253[(1)] = (1));

return statearr_47253;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47237){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47237);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47254){if((e47254 instanceof Object)){
var ex__46009__auto__ = e47254;
var statearr_47255_48438 = state_47237;
(statearr_47255_48438[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48440 = state_47237;
state_47237 = G__48440;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47256 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47256[(6)] = c__46106__auto___48388);

return statearr_47256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47258 = (function (f,ch,meta47259){
this.f = f;
this.ch = ch;
this.meta47259 = meta47259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47260,meta47259__$1){
var self__ = this;
var _47260__$1 = this;
return (new cljs.core.async.t_cljs$core$async47258(self__.f,self__.ch,meta47259__$1));
}));

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47260){
var self__ = this;
var _47260__$1 = this;
return self__.meta47259;
}));

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47261 = (function (f,ch,meta47259,_,fn1,meta47262){
this.f = f;
this.ch = ch;
this.meta47259 = meta47259;
this._ = _;
this.fn1 = fn1;
this.meta47262 = meta47262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47263,meta47262__$1){
var self__ = this;
var _47263__$1 = this;
return (new cljs.core.async.t_cljs$core$async47261(self__.f,self__.ch,self__.meta47259,self__._,self__.fn1,meta47262__$1));
}));

(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47263){
var self__ = this;
var _47263__$1 = this;
return self__.meta47262;
}));

(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47257_SHARP_){
var G__47264 = (((p1__47257_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47257_SHARP_) : self__.f.call(null,p1__47257_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47264) : f1.call(null,G__47264));
});
}));

(cljs.core.async.t_cljs$core$async47261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47259","meta47259",676462740,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47258","cljs.core.async/t_cljs$core$async47258",-1465307864,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47262","meta47262",487324715,null)], null);
}));

(cljs.core.async.t_cljs$core$async47261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47261");

(cljs.core.async.t_cljs$core$async47261.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47261.
 */
cljs.core.async.__GT_t_cljs$core$async47261 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47261(f__$1,ch__$1,meta47259__$1,___$2,fn1__$1,meta47262){
return (new cljs.core.async.t_cljs$core$async47261(f__$1,ch__$1,meta47259__$1,___$2,fn1__$1,meta47262));
});

}

return (new cljs.core.async.t_cljs$core$async47261(self__.f,self__.ch,self__.meta47259,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47265 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47265) : self__.f.call(null,G__47265));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47259","meta47259",676462740,null)], null);
}));

(cljs.core.async.t_cljs$core$async47258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47258");

(cljs.core.async.t_cljs$core$async47258.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47258.
 */
cljs.core.async.__GT_t_cljs$core$async47258 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47258(f__$1,ch__$1,meta47259){
return (new cljs.core.async.t_cljs$core$async47258(f__$1,ch__$1,meta47259));
});

}

return (new cljs.core.async.t_cljs$core$async47258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47266 = (function (f,ch,meta47267){
this.f = f;
this.ch = ch;
this.meta47267 = meta47267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47268,meta47267__$1){
var self__ = this;
var _47268__$1 = this;
return (new cljs.core.async.t_cljs$core$async47266(self__.f,self__.ch,meta47267__$1));
}));

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47268){
var self__ = this;
var _47268__$1 = this;
return self__.meta47267;
}));

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47267","meta47267",-748567839,null)], null);
}));

(cljs.core.async.t_cljs$core$async47266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47266");

(cljs.core.async.t_cljs$core$async47266.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47266.
 */
cljs.core.async.__GT_t_cljs$core$async47266 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47266(f__$1,ch__$1,meta47267){
return (new cljs.core.async.t_cljs$core$async47266(f__$1,ch__$1,meta47267));
});

}

return (new cljs.core.async.t_cljs$core$async47266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47269 = (function (p,ch,meta47270){
this.p = p;
this.ch = ch;
this.meta47270 = meta47270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47271,meta47270__$1){
var self__ = this;
var _47271__$1 = this;
return (new cljs.core.async.t_cljs$core$async47269(self__.p,self__.ch,meta47270__$1));
}));

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47271){
var self__ = this;
var _47271__$1 = this;
return self__.meta47270;
}));

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47270","meta47270",542050870,null)], null);
}));

(cljs.core.async.t_cljs$core$async47269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47269");

(cljs.core.async.t_cljs$core$async47269.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47269.
 */
cljs.core.async.__GT_t_cljs$core$async47269 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47269(p__$1,ch__$1,meta47270){
return (new cljs.core.async.t_cljs$core$async47269(p__$1,ch__$1,meta47270));
});

}

return (new cljs.core.async.t_cljs$core$async47269(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47273 = arguments.length;
switch (G__47273) {
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
var c__46106__auto___48510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47294){
var state_val_47295 = (state_47294[(1)]);
if((state_val_47295 === (7))){
var inst_47290 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
var statearr_47296_48514 = state_47294__$1;
(statearr_47296_48514[(2)] = inst_47290);

(statearr_47296_48514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (1))){
var state_47294__$1 = state_47294;
var statearr_47297_48519 = state_47294__$1;
(statearr_47297_48519[(2)] = null);

(statearr_47297_48519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (4))){
var inst_47276 = (state_47294[(7)]);
var inst_47276__$1 = (state_47294[(2)]);
var inst_47277 = (inst_47276__$1 == null);
var state_47294__$1 = (function (){var statearr_47298 = state_47294;
(statearr_47298[(7)] = inst_47276__$1);

return statearr_47298;
})();
if(cljs.core.truth_(inst_47277)){
var statearr_47299_48526 = state_47294__$1;
(statearr_47299_48526[(1)] = (5));

} else {
var statearr_47300_48528 = state_47294__$1;
(statearr_47300_48528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (6))){
var inst_47276 = (state_47294[(7)]);
var inst_47281 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47276) : p.call(null,inst_47276));
var state_47294__$1 = state_47294;
if(cljs.core.truth_(inst_47281)){
var statearr_47301_48537 = state_47294__$1;
(statearr_47301_48537[(1)] = (8));

} else {
var statearr_47302_48540 = state_47294__$1;
(statearr_47302_48540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (3))){
var inst_47292 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47294__$1,inst_47292);
} else {
if((state_val_47295 === (2))){
var state_47294__$1 = state_47294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47294__$1,(4),ch);
} else {
if((state_val_47295 === (11))){
var inst_47284 = (state_47294[(2)]);
var state_47294__$1 = state_47294;
var statearr_47303_48548 = state_47294__$1;
(statearr_47303_48548[(2)] = inst_47284);

(statearr_47303_48548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (9))){
var state_47294__$1 = state_47294;
var statearr_47304_48550 = state_47294__$1;
(statearr_47304_48550[(2)] = null);

(statearr_47304_48550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (5))){
var inst_47279 = cljs.core.async.close_BANG_(out);
var state_47294__$1 = state_47294;
var statearr_47305_48553 = state_47294__$1;
(statearr_47305_48553[(2)] = inst_47279);

(statearr_47305_48553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (10))){
var inst_47287 = (state_47294[(2)]);
var state_47294__$1 = (function (){var statearr_47306 = state_47294;
(statearr_47306[(8)] = inst_47287);

return statearr_47306;
})();
var statearr_47307_48562 = state_47294__$1;
(statearr_47307_48562[(2)] = null);

(statearr_47307_48562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47295 === (8))){
var inst_47276 = (state_47294[(7)]);
var state_47294__$1 = state_47294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47294__$1,(11),out,inst_47276);
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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47308 = [null,null,null,null,null,null,null,null,null];
(statearr_47308[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47308[(1)] = (1));

return statearr_47308;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47294){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47294);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47309){if((e47309 instanceof Object)){
var ex__46009__auto__ = e47309;
var statearr_47310_48567 = state_47294;
(statearr_47310_48567[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48568 = state_47294;
state_47294 = G__48568;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47311 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47311[(6)] = c__46106__auto___48510);

return statearr_47311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47313 = arguments.length;
switch (G__47313) {
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
var c__46106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47375){
var state_val_47376 = (state_47375[(1)]);
if((state_val_47376 === (7))){
var inst_47371 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
var statearr_47377_48577 = state_47375__$1;
(statearr_47377_48577[(2)] = inst_47371);

(statearr_47377_48577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (20))){
var inst_47341 = (state_47375[(7)]);
var inst_47352 = (state_47375[(2)]);
var inst_47353 = cljs.core.next(inst_47341);
var inst_47327 = inst_47353;
var inst_47328 = null;
var inst_47329 = (0);
var inst_47330 = (0);
var state_47375__$1 = (function (){var statearr_47378 = state_47375;
(statearr_47378[(8)] = inst_47330);

(statearr_47378[(9)] = inst_47328);

(statearr_47378[(10)] = inst_47352);

(statearr_47378[(11)] = inst_47327);

(statearr_47378[(12)] = inst_47329);

return statearr_47378;
})();
var statearr_47379_48590 = state_47375__$1;
(statearr_47379_48590[(2)] = null);

(statearr_47379_48590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (1))){
var state_47375__$1 = state_47375;
var statearr_47380_48594 = state_47375__$1;
(statearr_47380_48594[(2)] = null);

(statearr_47380_48594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (4))){
var inst_47316 = (state_47375[(13)]);
var inst_47316__$1 = (state_47375[(2)]);
var inst_47317 = (inst_47316__$1 == null);
var state_47375__$1 = (function (){var statearr_47381 = state_47375;
(statearr_47381[(13)] = inst_47316__$1);

return statearr_47381;
})();
if(cljs.core.truth_(inst_47317)){
var statearr_47382_48596 = state_47375__$1;
(statearr_47382_48596[(1)] = (5));

} else {
var statearr_47383_48597 = state_47375__$1;
(statearr_47383_48597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (15))){
var state_47375__$1 = state_47375;
var statearr_47387_48599 = state_47375__$1;
(statearr_47387_48599[(2)] = null);

(statearr_47387_48599[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (21))){
var state_47375__$1 = state_47375;
var statearr_47388_48600 = state_47375__$1;
(statearr_47388_48600[(2)] = null);

(statearr_47388_48600[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (13))){
var inst_47330 = (state_47375[(8)]);
var inst_47328 = (state_47375[(9)]);
var inst_47327 = (state_47375[(11)]);
var inst_47329 = (state_47375[(12)]);
var inst_47337 = (state_47375[(2)]);
var inst_47338 = (inst_47330 + (1));
var tmp47384 = inst_47328;
var tmp47385 = inst_47327;
var tmp47386 = inst_47329;
var inst_47327__$1 = tmp47385;
var inst_47328__$1 = tmp47384;
var inst_47329__$1 = tmp47386;
var inst_47330__$1 = inst_47338;
var state_47375__$1 = (function (){var statearr_47389 = state_47375;
(statearr_47389[(8)] = inst_47330__$1);

(statearr_47389[(9)] = inst_47328__$1);

(statearr_47389[(11)] = inst_47327__$1);

(statearr_47389[(12)] = inst_47329__$1);

(statearr_47389[(14)] = inst_47337);

return statearr_47389;
})();
var statearr_47390_48604 = state_47375__$1;
(statearr_47390_48604[(2)] = null);

(statearr_47390_48604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (22))){
var state_47375__$1 = state_47375;
var statearr_47391_48606 = state_47375__$1;
(statearr_47391_48606[(2)] = null);

(statearr_47391_48606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (6))){
var inst_47316 = (state_47375[(13)]);
var inst_47325 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47316) : f.call(null,inst_47316));
var inst_47326 = cljs.core.seq(inst_47325);
var inst_47327 = inst_47326;
var inst_47328 = null;
var inst_47329 = (0);
var inst_47330 = (0);
var state_47375__$1 = (function (){var statearr_47392 = state_47375;
(statearr_47392[(8)] = inst_47330);

(statearr_47392[(9)] = inst_47328);

(statearr_47392[(11)] = inst_47327);

(statearr_47392[(12)] = inst_47329);

return statearr_47392;
})();
var statearr_47393_48610 = state_47375__$1;
(statearr_47393_48610[(2)] = null);

(statearr_47393_48610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (17))){
var inst_47341 = (state_47375[(7)]);
var inst_47345 = cljs.core.chunk_first(inst_47341);
var inst_47346 = cljs.core.chunk_rest(inst_47341);
var inst_47347 = cljs.core.count(inst_47345);
var inst_47327 = inst_47346;
var inst_47328 = inst_47345;
var inst_47329 = inst_47347;
var inst_47330 = (0);
var state_47375__$1 = (function (){var statearr_47394 = state_47375;
(statearr_47394[(8)] = inst_47330);

(statearr_47394[(9)] = inst_47328);

(statearr_47394[(11)] = inst_47327);

(statearr_47394[(12)] = inst_47329);

return statearr_47394;
})();
var statearr_47395_48614 = state_47375__$1;
(statearr_47395_48614[(2)] = null);

(statearr_47395_48614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (3))){
var inst_47373 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47375__$1,inst_47373);
} else {
if((state_val_47376 === (12))){
var inst_47361 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
var statearr_47396_48628 = state_47375__$1;
(statearr_47396_48628[(2)] = inst_47361);

(statearr_47396_48628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (2))){
var state_47375__$1 = state_47375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47375__$1,(4),in$);
} else {
if((state_val_47376 === (23))){
var inst_47369 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
var statearr_47397_48636 = state_47375__$1;
(statearr_47397_48636[(2)] = inst_47369);

(statearr_47397_48636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (19))){
var inst_47356 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
var statearr_47398_48642 = state_47375__$1;
(statearr_47398_48642[(2)] = inst_47356);

(statearr_47398_48642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (11))){
var inst_47341 = (state_47375[(7)]);
var inst_47327 = (state_47375[(11)]);
var inst_47341__$1 = cljs.core.seq(inst_47327);
var state_47375__$1 = (function (){var statearr_47399 = state_47375;
(statearr_47399[(7)] = inst_47341__$1);

return statearr_47399;
})();
if(inst_47341__$1){
var statearr_47400_48650 = state_47375__$1;
(statearr_47400_48650[(1)] = (14));

} else {
var statearr_47401_48655 = state_47375__$1;
(statearr_47401_48655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (9))){
var inst_47363 = (state_47375[(2)]);
var inst_47364 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47375__$1 = (function (){var statearr_47402 = state_47375;
(statearr_47402[(15)] = inst_47363);

return statearr_47402;
})();
if(cljs.core.truth_(inst_47364)){
var statearr_47403_48659 = state_47375__$1;
(statearr_47403_48659[(1)] = (21));

} else {
var statearr_47404_48664 = state_47375__$1;
(statearr_47404_48664[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (5))){
var inst_47319 = cljs.core.async.close_BANG_(out);
var state_47375__$1 = state_47375;
var statearr_47405_48668 = state_47375__$1;
(statearr_47405_48668[(2)] = inst_47319);

(statearr_47405_48668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (14))){
var inst_47341 = (state_47375[(7)]);
var inst_47343 = cljs.core.chunked_seq_QMARK_(inst_47341);
var state_47375__$1 = state_47375;
if(inst_47343){
var statearr_47406_48669 = state_47375__$1;
(statearr_47406_48669[(1)] = (17));

} else {
var statearr_47407_48676 = state_47375__$1;
(statearr_47407_48676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (16))){
var inst_47359 = (state_47375[(2)]);
var state_47375__$1 = state_47375;
var statearr_47408_48677 = state_47375__$1;
(statearr_47408_48677[(2)] = inst_47359);

(statearr_47408_48677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47376 === (10))){
var inst_47330 = (state_47375[(8)]);
var inst_47328 = (state_47375[(9)]);
var inst_47335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47328,inst_47330);
var state_47375__$1 = state_47375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47375__$1,(13),out,inst_47335);
} else {
if((state_val_47376 === (18))){
var inst_47341 = (state_47375[(7)]);
var inst_47350 = cljs.core.first(inst_47341);
var state_47375__$1 = state_47375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47375__$1,(20),out,inst_47350);
} else {
if((state_val_47376 === (8))){
var inst_47330 = (state_47375[(8)]);
var inst_47329 = (state_47375[(12)]);
var inst_47332 = (inst_47330 < inst_47329);
var inst_47333 = inst_47332;
var state_47375__$1 = state_47375;
if(cljs.core.truth_(inst_47333)){
var statearr_47409_48680 = state_47375__$1;
(statearr_47409_48680[(1)] = (10));

} else {
var statearr_47410_48681 = state_47375__$1;
(statearr_47410_48681[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____0 = (function (){
var statearr_47411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__);

(statearr_47411[(1)] = (1));

return statearr_47411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____1 = (function (state_47375){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47375);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47412){if((e47412 instanceof Object)){
var ex__46009__auto__ = e47412;
var statearr_47413_48682 = state_47375;
(statearr_47413_48682[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48683 = state_47375;
state_47375 = G__48683;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__ = function(state_47375){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____1.call(this,state_47375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46006__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47414 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47414[(6)] = c__46106__auto__);

return statearr_47414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));

return c__46106__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47416 = arguments.length;
switch (G__47416) {
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
var G__47418 = arguments.length;
switch (G__47418) {
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
var G__47420 = arguments.length;
switch (G__47420) {
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
var c__46106__auto___48708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47444){
var state_val_47445 = (state_47444[(1)]);
if((state_val_47445 === (7))){
var inst_47439 = (state_47444[(2)]);
var state_47444__$1 = state_47444;
var statearr_47446_48709 = state_47444__$1;
(statearr_47446_48709[(2)] = inst_47439);

(statearr_47446_48709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (1))){
var inst_47421 = null;
var state_47444__$1 = (function (){var statearr_47447 = state_47444;
(statearr_47447[(7)] = inst_47421);

return statearr_47447;
})();
var statearr_47448_48710 = state_47444__$1;
(statearr_47448_48710[(2)] = null);

(statearr_47448_48710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (4))){
var inst_47424 = (state_47444[(8)]);
var inst_47424__$1 = (state_47444[(2)]);
var inst_47425 = (inst_47424__$1 == null);
var inst_47426 = cljs.core.not(inst_47425);
var state_47444__$1 = (function (){var statearr_47449 = state_47444;
(statearr_47449[(8)] = inst_47424__$1);

return statearr_47449;
})();
if(inst_47426){
var statearr_47450_48711 = state_47444__$1;
(statearr_47450_48711[(1)] = (5));

} else {
var statearr_47451_48713 = state_47444__$1;
(statearr_47451_48713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (6))){
var state_47444__$1 = state_47444;
var statearr_47452_48714 = state_47444__$1;
(statearr_47452_48714[(2)] = null);

(statearr_47452_48714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (3))){
var inst_47441 = (state_47444[(2)]);
var inst_47442 = cljs.core.async.close_BANG_(out);
var state_47444__$1 = (function (){var statearr_47453 = state_47444;
(statearr_47453[(9)] = inst_47441);

return statearr_47453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47444__$1,inst_47442);
} else {
if((state_val_47445 === (2))){
var state_47444__$1 = state_47444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47444__$1,(4),ch);
} else {
if((state_val_47445 === (11))){
var inst_47424 = (state_47444[(8)]);
var inst_47433 = (state_47444[(2)]);
var inst_47421 = inst_47424;
var state_47444__$1 = (function (){var statearr_47454 = state_47444;
(statearr_47454[(10)] = inst_47433);

(statearr_47454[(7)] = inst_47421);

return statearr_47454;
})();
var statearr_47455_48719 = state_47444__$1;
(statearr_47455_48719[(2)] = null);

(statearr_47455_48719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (9))){
var inst_47424 = (state_47444[(8)]);
var state_47444__$1 = state_47444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47444__$1,(11),out,inst_47424);
} else {
if((state_val_47445 === (5))){
var inst_47424 = (state_47444[(8)]);
var inst_47421 = (state_47444[(7)]);
var inst_47428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47424,inst_47421);
var state_47444__$1 = state_47444;
if(inst_47428){
var statearr_47457_48720 = state_47444__$1;
(statearr_47457_48720[(1)] = (8));

} else {
var statearr_47458_48721 = state_47444__$1;
(statearr_47458_48721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (10))){
var inst_47436 = (state_47444[(2)]);
var state_47444__$1 = state_47444;
var statearr_47459_48722 = state_47444__$1;
(statearr_47459_48722[(2)] = inst_47436);

(statearr_47459_48722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47445 === (8))){
var inst_47421 = (state_47444[(7)]);
var tmp47456 = inst_47421;
var inst_47421__$1 = tmp47456;
var state_47444__$1 = (function (){var statearr_47460 = state_47444;
(statearr_47460[(7)] = inst_47421__$1);

return statearr_47460;
})();
var statearr_47461_48723 = state_47444__$1;
(statearr_47461_48723[(2)] = null);

(statearr_47461_48723[(1)] = (2));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47462[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47462[(1)] = (1));

return statearr_47462;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47444){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47444);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47463){if((e47463 instanceof Object)){
var ex__46009__auto__ = e47463;
var statearr_47464_48724 = state_47444;
(statearr_47464_48724[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48726 = state_47444;
state_47444 = G__48726;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47465 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47465[(6)] = c__46106__auto___48708);

return statearr_47465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47467 = arguments.length;
switch (G__47467) {
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
var c__46106__auto___48728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47505){
var state_val_47506 = (state_47505[(1)]);
if((state_val_47506 === (7))){
var inst_47501 = (state_47505[(2)]);
var state_47505__$1 = state_47505;
var statearr_47507_48734 = state_47505__$1;
(statearr_47507_48734[(2)] = inst_47501);

(statearr_47507_48734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (1))){
var inst_47468 = (new Array(n));
var inst_47469 = inst_47468;
var inst_47470 = (0);
var state_47505__$1 = (function (){var statearr_47508 = state_47505;
(statearr_47508[(7)] = inst_47470);

(statearr_47508[(8)] = inst_47469);

return statearr_47508;
})();
var statearr_47509_48737 = state_47505__$1;
(statearr_47509_48737[(2)] = null);

(statearr_47509_48737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (4))){
var inst_47473 = (state_47505[(9)]);
var inst_47473__$1 = (state_47505[(2)]);
var inst_47474 = (inst_47473__$1 == null);
var inst_47475 = cljs.core.not(inst_47474);
var state_47505__$1 = (function (){var statearr_47510 = state_47505;
(statearr_47510[(9)] = inst_47473__$1);

return statearr_47510;
})();
if(inst_47475){
var statearr_47511_48739 = state_47505__$1;
(statearr_47511_48739[(1)] = (5));

} else {
var statearr_47512_48740 = state_47505__$1;
(statearr_47512_48740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (15))){
var inst_47495 = (state_47505[(2)]);
var state_47505__$1 = state_47505;
var statearr_47513_48741 = state_47505__$1;
(statearr_47513_48741[(2)] = inst_47495);

(statearr_47513_48741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (13))){
var state_47505__$1 = state_47505;
var statearr_47514_48742 = state_47505__$1;
(statearr_47514_48742[(2)] = null);

(statearr_47514_48742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (6))){
var inst_47470 = (state_47505[(7)]);
var inst_47491 = (inst_47470 > (0));
var state_47505__$1 = state_47505;
if(cljs.core.truth_(inst_47491)){
var statearr_47515_48744 = state_47505__$1;
(statearr_47515_48744[(1)] = (12));

} else {
var statearr_47516_48745 = state_47505__$1;
(statearr_47516_48745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (3))){
var inst_47503 = (state_47505[(2)]);
var state_47505__$1 = state_47505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47505__$1,inst_47503);
} else {
if((state_val_47506 === (12))){
var inst_47469 = (state_47505[(8)]);
var inst_47493 = cljs.core.vec(inst_47469);
var state_47505__$1 = state_47505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47505__$1,(15),out,inst_47493);
} else {
if((state_val_47506 === (2))){
var state_47505__$1 = state_47505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47505__$1,(4),ch);
} else {
if((state_val_47506 === (11))){
var inst_47485 = (state_47505[(2)]);
var inst_47486 = (new Array(n));
var inst_47469 = inst_47486;
var inst_47470 = (0);
var state_47505__$1 = (function (){var statearr_47517 = state_47505;
(statearr_47517[(7)] = inst_47470);

(statearr_47517[(10)] = inst_47485);

(statearr_47517[(8)] = inst_47469);

return statearr_47517;
})();
var statearr_47518_48747 = state_47505__$1;
(statearr_47518_48747[(2)] = null);

(statearr_47518_48747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (9))){
var inst_47469 = (state_47505[(8)]);
var inst_47483 = cljs.core.vec(inst_47469);
var state_47505__$1 = state_47505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47505__$1,(11),out,inst_47483);
} else {
if((state_val_47506 === (5))){
var inst_47470 = (state_47505[(7)]);
var inst_47478 = (state_47505[(11)]);
var inst_47473 = (state_47505[(9)]);
var inst_47469 = (state_47505[(8)]);
var inst_47477 = (inst_47469[inst_47470] = inst_47473);
var inst_47478__$1 = (inst_47470 + (1));
var inst_47479 = (inst_47478__$1 < n);
var state_47505__$1 = (function (){var statearr_47519 = state_47505;
(statearr_47519[(12)] = inst_47477);

(statearr_47519[(11)] = inst_47478__$1);

return statearr_47519;
})();
if(cljs.core.truth_(inst_47479)){
var statearr_47520_48748 = state_47505__$1;
(statearr_47520_48748[(1)] = (8));

} else {
var statearr_47521_48749 = state_47505__$1;
(statearr_47521_48749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (14))){
var inst_47498 = (state_47505[(2)]);
var inst_47499 = cljs.core.async.close_BANG_(out);
var state_47505__$1 = (function (){var statearr_47523 = state_47505;
(statearr_47523[(13)] = inst_47498);

return statearr_47523;
})();
var statearr_47524_48750 = state_47505__$1;
(statearr_47524_48750[(2)] = inst_47499);

(statearr_47524_48750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (10))){
var inst_47489 = (state_47505[(2)]);
var state_47505__$1 = state_47505;
var statearr_47525_48751 = state_47505__$1;
(statearr_47525_48751[(2)] = inst_47489);

(statearr_47525_48751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47506 === (8))){
var inst_47478 = (state_47505[(11)]);
var inst_47469 = (state_47505[(8)]);
var tmp47522 = inst_47469;
var inst_47469__$1 = tmp47522;
var inst_47470 = inst_47478;
var state_47505__$1 = (function (){var statearr_47526 = state_47505;
(statearr_47526[(7)] = inst_47470);

(statearr_47526[(8)] = inst_47469__$1);

return statearr_47526;
})();
var statearr_47527_48752 = state_47505__$1;
(statearr_47527_48752[(2)] = null);

(statearr_47527_48752[(1)] = (2));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47528[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47528[(1)] = (1));

return statearr_47528;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47505){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47505);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47529){if((e47529 instanceof Object)){
var ex__46009__auto__ = e47529;
var statearr_47530_48753 = state_47505;
(statearr_47530_48753[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48754 = state_47505;
state_47505 = G__48754;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47531 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47531[(6)] = c__46106__auto___48728);

return statearr_47531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47533 = arguments.length;
switch (G__47533) {
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
var c__46106__auto___48756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46107__auto__ = (function (){var switch__46005__auto__ = (function (state_47575){
var state_val_47576 = (state_47575[(1)]);
if((state_val_47576 === (7))){
var inst_47571 = (state_47575[(2)]);
var state_47575__$1 = state_47575;
var statearr_47577_48757 = state_47575__$1;
(statearr_47577_48757[(2)] = inst_47571);

(statearr_47577_48757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (1))){
var inst_47534 = [];
var inst_47535 = inst_47534;
var inst_47536 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47575__$1 = (function (){var statearr_47578 = state_47575;
(statearr_47578[(7)] = inst_47535);

(statearr_47578[(8)] = inst_47536);

return statearr_47578;
})();
var statearr_47579_48764 = state_47575__$1;
(statearr_47579_48764[(2)] = null);

(statearr_47579_48764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (4))){
var inst_47539 = (state_47575[(9)]);
var inst_47539__$1 = (state_47575[(2)]);
var inst_47540 = (inst_47539__$1 == null);
var inst_47541 = cljs.core.not(inst_47540);
var state_47575__$1 = (function (){var statearr_47580 = state_47575;
(statearr_47580[(9)] = inst_47539__$1);

return statearr_47580;
})();
if(inst_47541){
var statearr_47581_48767 = state_47575__$1;
(statearr_47581_48767[(1)] = (5));

} else {
var statearr_47582_48768 = state_47575__$1;
(statearr_47582_48768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (15))){
var inst_47565 = (state_47575[(2)]);
var state_47575__$1 = state_47575;
var statearr_47583_48769 = state_47575__$1;
(statearr_47583_48769[(2)] = inst_47565);

(statearr_47583_48769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (13))){
var state_47575__$1 = state_47575;
var statearr_47584_48774 = state_47575__$1;
(statearr_47584_48774[(2)] = null);

(statearr_47584_48774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (6))){
var inst_47535 = (state_47575[(7)]);
var inst_47560 = inst_47535.length;
var inst_47561 = (inst_47560 > (0));
var state_47575__$1 = state_47575;
if(cljs.core.truth_(inst_47561)){
var statearr_47585_48775 = state_47575__$1;
(statearr_47585_48775[(1)] = (12));

} else {
var statearr_47586_48776 = state_47575__$1;
(statearr_47586_48776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (3))){
var inst_47573 = (state_47575[(2)]);
var state_47575__$1 = state_47575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47575__$1,inst_47573);
} else {
if((state_val_47576 === (12))){
var inst_47535 = (state_47575[(7)]);
var inst_47563 = cljs.core.vec(inst_47535);
var state_47575__$1 = state_47575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47575__$1,(15),out,inst_47563);
} else {
if((state_val_47576 === (2))){
var state_47575__$1 = state_47575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47575__$1,(4),ch);
} else {
if((state_val_47576 === (11))){
var inst_47539 = (state_47575[(9)]);
var inst_47543 = (state_47575[(10)]);
var inst_47553 = (state_47575[(2)]);
var inst_47554 = [];
var inst_47555 = inst_47554.push(inst_47539);
var inst_47535 = inst_47554;
var inst_47536 = inst_47543;
var state_47575__$1 = (function (){var statearr_47587 = state_47575;
(statearr_47587[(7)] = inst_47535);

(statearr_47587[(11)] = inst_47555);

(statearr_47587[(8)] = inst_47536);

(statearr_47587[(12)] = inst_47553);

return statearr_47587;
})();
var statearr_47588_48784 = state_47575__$1;
(statearr_47588_48784[(2)] = null);

(statearr_47588_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (9))){
var inst_47535 = (state_47575[(7)]);
var inst_47551 = cljs.core.vec(inst_47535);
var state_47575__$1 = state_47575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47575__$1,(11),out,inst_47551);
} else {
if((state_val_47576 === (5))){
var inst_47536 = (state_47575[(8)]);
var inst_47539 = (state_47575[(9)]);
var inst_47543 = (state_47575[(10)]);
var inst_47543__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47539) : f.call(null,inst_47539));
var inst_47544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47543__$1,inst_47536);
var inst_47545 = cljs.core.keyword_identical_QMARK_(inst_47536,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47546 = ((inst_47544) || (inst_47545));
var state_47575__$1 = (function (){var statearr_47589 = state_47575;
(statearr_47589[(10)] = inst_47543__$1);

return statearr_47589;
})();
if(cljs.core.truth_(inst_47546)){
var statearr_47590_48789 = state_47575__$1;
(statearr_47590_48789[(1)] = (8));

} else {
var statearr_47591_48790 = state_47575__$1;
(statearr_47591_48790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (14))){
var inst_47568 = (state_47575[(2)]);
var inst_47569 = cljs.core.async.close_BANG_(out);
var state_47575__$1 = (function (){var statearr_47593 = state_47575;
(statearr_47593[(13)] = inst_47568);

return statearr_47593;
})();
var statearr_47594_48791 = state_47575__$1;
(statearr_47594_48791[(2)] = inst_47569);

(statearr_47594_48791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (10))){
var inst_47558 = (state_47575[(2)]);
var state_47575__$1 = state_47575;
var statearr_47595_48794 = state_47575__$1;
(statearr_47595_48794[(2)] = inst_47558);

(statearr_47595_48794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47576 === (8))){
var inst_47535 = (state_47575[(7)]);
var inst_47539 = (state_47575[(9)]);
var inst_47543 = (state_47575[(10)]);
var inst_47548 = inst_47535.push(inst_47539);
var tmp47592 = inst_47535;
var inst_47535__$1 = tmp47592;
var inst_47536 = inst_47543;
var state_47575__$1 = (function (){var statearr_47596 = state_47575;
(statearr_47596[(14)] = inst_47548);

(statearr_47596[(7)] = inst_47535__$1);

(statearr_47596[(8)] = inst_47536);

return statearr_47596;
})();
var statearr_47597_48795 = state_47575__$1;
(statearr_47597_48795[(2)] = null);

(statearr_47597_48795[(1)] = (2));


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
var cljs$core$async$state_machine__46006__auto__ = null;
var cljs$core$async$state_machine__46006__auto____0 = (function (){
var statearr_47598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47598[(0)] = cljs$core$async$state_machine__46006__auto__);

(statearr_47598[(1)] = (1));

return statearr_47598;
});
var cljs$core$async$state_machine__46006__auto____1 = (function (state_47575){
while(true){
var ret_value__46007__auto__ = (function (){try{while(true){
var result__46008__auto__ = switch__46005__auto__(state_47575);
if(cljs.core.keyword_identical_QMARK_(result__46008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46008__auto__;
}
break;
}
}catch (e47599){if((e47599 instanceof Object)){
var ex__46009__auto__ = e47599;
var statearr_47600_48798 = state_47575;
(statearr_47600_48798[(5)] = ex__46009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48799 = state_47575;
state_47575 = G__48799;
continue;
} else {
return ret_value__46007__auto__;
}
break;
}
});
cljs$core$async$state_machine__46006__auto__ = function(state_47575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46006__auto____1.call(this,state_47575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46006__auto____0;
cljs$core$async$state_machine__46006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46006__auto____1;
return cljs$core$async$state_machine__46006__auto__;
})()
})();
var state__46108__auto__ = (function (){var statearr_47601 = (f__46107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46107__auto__.cljs$core$IFn$_invoke$arity$0() : f__46107__auto__.call(null));
(statearr_47601[(6)] = c__46106__auto___48756);

return statearr_47601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46108__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
