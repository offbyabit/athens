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
var G__46184 = arguments.length;
switch (G__46184) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46185 = (function (f,blockable,meta46186){
this.f = f;
this.blockable = blockable;
this.meta46186 = meta46186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46187,meta46186__$1){
var self__ = this;
var _46187__$1 = this;
return (new cljs.core.async.t_cljs$core$async46185(self__.f,self__.blockable,meta46186__$1));
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46187){
var self__ = this;
var _46187__$1 = this;
return self__.meta46186;
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46186","meta46186",-578311065,null)], null);
}));

(cljs.core.async.t_cljs$core$async46185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46185");

(cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46185.
 */
cljs.core.async.__GT_t_cljs$core$async46185 = (function cljs$core$async$__GT_t_cljs$core$async46185(f__$1,blockable__$1,meta46186){
return (new cljs.core.async.t_cljs$core$async46185(f__$1,blockable__$1,meta46186));
});

}

return (new cljs.core.async.t_cljs$core$async46185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46192 = arguments.length;
switch (G__46192) {
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
var G__46194 = arguments.length;
switch (G__46194) {
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
var G__46196 = arguments.length;
switch (G__46196) {
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
var val_47663 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47663) : fn1.call(null,val_47663));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47663) : fn1.call(null,val_47663));
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
var G__46198 = arguments.length;
switch (G__46198) {
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
var n__4666__auto___47695 = n;
var x_47696 = (0);
while(true){
if((x_47696 < n__4666__auto___47695)){
(a[x_47696] = x_47696);

var G__47697 = (x_47696 + (1));
x_47696 = G__47697;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46199 = (function (flag,meta46200){
this.flag = flag;
this.meta46200 = meta46200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46201,meta46200__$1){
var self__ = this;
var _46201__$1 = this;
return (new cljs.core.async.t_cljs$core$async46199(self__.flag,meta46200__$1));
}));

(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46201){
var self__ = this;
var _46201__$1 = this;
return self__.meta46200;
}));

(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46200","meta46200",1829755496,null)], null);
}));

(cljs.core.async.t_cljs$core$async46199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46199");

(cljs.core.async.t_cljs$core$async46199.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46199.
 */
cljs.core.async.__GT_t_cljs$core$async46199 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46199(flag__$1,meta46200){
return (new cljs.core.async.t_cljs$core$async46199(flag__$1,meta46200));
});

}

return (new cljs.core.async.t_cljs$core$async46199(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46202 = (function (flag,cb,meta46203){
this.flag = flag;
this.cb = cb;
this.meta46203 = meta46203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46204,meta46203__$1){
var self__ = this;
var _46204__$1 = this;
return (new cljs.core.async.t_cljs$core$async46202(self__.flag,self__.cb,meta46203__$1));
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46204){
var self__ = this;
var _46204__$1 = this;
return self__.meta46203;
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46203","meta46203",376182584,null)], null);
}));

(cljs.core.async.t_cljs$core$async46202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46202");

(cljs.core.async.t_cljs$core$async46202.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46202.
 */
cljs.core.async.__GT_t_cljs$core$async46202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46202(flag__$1,cb__$1,meta46203){
return (new cljs.core.async.t_cljs$core$async46202(flag__$1,cb__$1,meta46203));
});

}

return (new cljs.core.async.t_cljs$core$async46202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46205_SHARP_){
var G__46207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46205_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46207) : fret.call(null,G__46207));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46206_SHARP_){
var G__46208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46206_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46208) : fret.call(null,G__46208));
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
var G__47722 = (i + (1));
i = G__47722;
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
var len__4789__auto___47725 = arguments.length;
var i__4790__auto___47726 = (0);
while(true){
if((i__4790__auto___47726 < len__4789__auto___47725)){
args__4795__auto__.push((arguments[i__4790__auto___47726]));

var G__47727 = (i__4790__auto___47726 + (1));
i__4790__auto___47726 = G__47727;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46211){
var map__46212 = p__46211;
var map__46212__$1 = (((((!((map__46212 == null))))?(((((map__46212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46212):map__46212);
var opts = map__46212__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46209){
var G__46210 = cljs.core.first(seq46209);
var seq46209__$1 = cljs.core.next(seq46209);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46210,seq46209__$1);
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
var G__46215 = arguments.length;
switch (G__46215) {
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
var c__46126__auto___47746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46239){
var state_val_46240 = (state_46239[(1)]);
if((state_val_46240 === (7))){
var inst_46235 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46241_47759 = state_46239__$1;
(statearr_46241_47759[(2)] = inst_46235);

(statearr_46241_47759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (1))){
var state_46239__$1 = state_46239;
var statearr_46242_47762 = state_46239__$1;
(statearr_46242_47762[(2)] = null);

(statearr_46242_47762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (4))){
var inst_46218 = (state_46239[(7)]);
var inst_46218__$1 = (state_46239[(2)]);
var inst_46219 = (inst_46218__$1 == null);
var state_46239__$1 = (function (){var statearr_46243 = state_46239;
(statearr_46243[(7)] = inst_46218__$1);

return statearr_46243;
})();
if(cljs.core.truth_(inst_46219)){
var statearr_46244_47768 = state_46239__$1;
(statearr_46244_47768[(1)] = (5));

} else {
var statearr_46245_47772 = state_46239__$1;
(statearr_46245_47772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (13))){
var state_46239__$1 = state_46239;
var statearr_46246_47773 = state_46239__$1;
(statearr_46246_47773[(2)] = null);

(statearr_46246_47773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (6))){
var inst_46218 = (state_46239[(7)]);
var state_46239__$1 = state_46239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46239__$1,(11),to,inst_46218);
} else {
if((state_val_46240 === (3))){
var inst_46237 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46239__$1,inst_46237);
} else {
if((state_val_46240 === (12))){
var state_46239__$1 = state_46239;
var statearr_46247_47780 = state_46239__$1;
(statearr_46247_47780[(2)] = null);

(statearr_46247_47780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (2))){
var state_46239__$1 = state_46239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46239__$1,(4),from);
} else {
if((state_val_46240 === (11))){
var inst_46228 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
if(cljs.core.truth_(inst_46228)){
var statearr_46248_47784 = state_46239__$1;
(statearr_46248_47784[(1)] = (12));

} else {
var statearr_46249_47785 = state_46239__$1;
(statearr_46249_47785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (9))){
var state_46239__$1 = state_46239;
var statearr_46250_47794 = state_46239__$1;
(statearr_46250_47794[(2)] = null);

(statearr_46250_47794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (5))){
var state_46239__$1 = state_46239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46251_47795 = state_46239__$1;
(statearr_46251_47795[(1)] = (8));

} else {
var statearr_46252_47796 = state_46239__$1;
(statearr_46252_47796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (14))){
var inst_46233 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46253_47797 = state_46239__$1;
(statearr_46253_47797[(2)] = inst_46233);

(statearr_46253_47797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (10))){
var inst_46225 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46254_47802 = state_46239__$1;
(statearr_46254_47802[(2)] = inst_46225);

(statearr_46254_47802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (8))){
var inst_46222 = cljs.core.async.close_BANG_(to);
var state_46239__$1 = state_46239;
var statearr_46255_47806 = state_46239__$1;
(statearr_46255_47806[(2)] = inst_46222);

(statearr_46255_47806[(1)] = (10));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_46256 = [null,null,null,null,null,null,null,null];
(statearr_46256[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_46256[(1)] = (1));

return statearr_46256;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_46239){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46239);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46257){if((e46257 instanceof Object)){
var ex__46029__auto__ = e46257;
var statearr_46258_47810 = state_46239;
(statearr_46258_47810[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47814 = state_46239;
state_46239 = G__47814;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_46239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_46239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46259 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46259[(6)] = c__46126__auto___47746);

return statearr_46259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var process = (function (p__46260){
var vec__46261 = p__46260;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46261,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46261,(1),null);
var job = vec__46261;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46126__auto___47818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46268){
var state_val_46269 = (state_46268[(1)]);
if((state_val_46269 === (1))){
var state_46268__$1 = state_46268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46268__$1,(2),res,v);
} else {
if((state_val_46269 === (2))){
var inst_46265 = (state_46268[(2)]);
var inst_46266 = cljs.core.async.close_BANG_(res);
var state_46268__$1 = (function (){var statearr_46270 = state_46268;
(statearr_46270[(7)] = inst_46265);

return statearr_46270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46268__$1,inst_46266);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_46271 = [null,null,null,null,null,null,null,null];
(statearr_46271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__);

(statearr_46271[(1)] = (1));

return statearr_46271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1 = (function (state_46268){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46268);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46272){if((e46272 instanceof Object)){
var ex__46029__auto__ = e46272;
var statearr_46273_47829 = state_46268;
(statearr_46273_47829[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47830 = state_46268;
state_46268 = G__47830;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = function(state_46268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1.call(this,state_46268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46274 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46274[(6)] = c__46126__auto___47818);

return statearr_46274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46275){
var vec__46276 = p__46275;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46276,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46276,(1),null);
var job = vec__46276;
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
var n__4666__auto___47843 = n;
var __47844 = (0);
while(true){
if((__47844 < n__4666__auto___47843)){
var G__46279_47848 = type;
var G__46279_47849__$1 = (((G__46279_47848 instanceof cljs.core.Keyword))?G__46279_47848.fqn:null);
switch (G__46279_47849__$1) {
case "compute":
var c__46126__auto___47855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47844,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = ((function (__47844,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function (state_46292){
var state_val_46293 = (state_46292[(1)]);
if((state_val_46293 === (1))){
var state_46292__$1 = state_46292;
var statearr_46294_47856 = state_46292__$1;
(statearr_46294_47856[(2)] = null);

(statearr_46294_47856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (2))){
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46292__$1,(4),jobs);
} else {
if((state_val_46293 === (3))){
var inst_46290 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46292__$1,inst_46290);
} else {
if((state_val_46293 === (4))){
var inst_46282 = (state_46292[(2)]);
var inst_46283 = process(inst_46282);
var state_46292__$1 = state_46292;
if(cljs.core.truth_(inst_46283)){
var statearr_46295_47857 = state_46292__$1;
(statearr_46295_47857[(1)] = (5));

} else {
var statearr_46296_47858 = state_46292__$1;
(statearr_46296_47858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (5))){
var state_46292__$1 = state_46292;
var statearr_46297_47859 = state_46292__$1;
(statearr_46297_47859[(2)] = null);

(statearr_46297_47859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (6))){
var state_46292__$1 = state_46292;
var statearr_46298_47862 = state_46292__$1;
(statearr_46298_47862[(2)] = null);

(statearr_46298_47862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (7))){
var inst_46288 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
var statearr_46299_47863 = state_46292__$1;
(statearr_46299_47863[(2)] = inst_46288);

(statearr_46299_47863[(1)] = (3));


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
});})(__47844,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
;
return ((function (__47844,switch__46025__auto__,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_46300 = [null,null,null,null,null,null,null];
(statearr_46300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__);

(statearr_46300[(1)] = (1));

return statearr_46300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1 = (function (state_46292){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46292);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46301){if((e46301 instanceof Object)){
var ex__46029__auto__ = e46301;
var statearr_46302_47864 = state_46292;
(statearr_46302_47864[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47865 = state_46292;
state_46292 = G__47865;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = function(state_46292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1.call(this,state_46292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__;
})()
;})(__47844,switch__46025__auto__,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
})();
var state__46128__auto__ = (function (){var statearr_46303 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46303[(6)] = c__46126__auto___47855);

return statearr_46303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
});})(__47844,c__46126__auto___47855,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
);


break;
case "async":
var c__46126__auto___47866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47844,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = ((function (__47844,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function (state_46316){
var state_val_46317 = (state_46316[(1)]);
if((state_val_46317 === (1))){
var state_46316__$1 = state_46316;
var statearr_46318_47867 = state_46316__$1;
(statearr_46318_47867[(2)] = null);

(statearr_46318_47867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (2))){
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46316__$1,(4),jobs);
} else {
if((state_val_46317 === (3))){
var inst_46314 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46316__$1,inst_46314);
} else {
if((state_val_46317 === (4))){
var inst_46306 = (state_46316[(2)]);
var inst_46307 = async(inst_46306);
var state_46316__$1 = state_46316;
if(cljs.core.truth_(inst_46307)){
var statearr_46319_47877 = state_46316__$1;
(statearr_46319_47877[(1)] = (5));

} else {
var statearr_46320_47878 = state_46316__$1;
(statearr_46320_47878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (5))){
var state_46316__$1 = state_46316;
var statearr_46321_47879 = state_46316__$1;
(statearr_46321_47879[(2)] = null);

(statearr_46321_47879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (6))){
var state_46316__$1 = state_46316;
var statearr_46322_47880 = state_46316__$1;
(statearr_46322_47880[(2)] = null);

(statearr_46322_47880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (7))){
var inst_46312 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
var statearr_46323_47881 = state_46316__$1;
(statearr_46323_47881[(2)] = inst_46312);

(statearr_46323_47881[(1)] = (3));


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
});})(__47844,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
;
return ((function (__47844,switch__46025__auto__,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_46324 = [null,null,null,null,null,null,null];
(statearr_46324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__);

(statearr_46324[(1)] = (1));

return statearr_46324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1 = (function (state_46316){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46316);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46325){if((e46325 instanceof Object)){
var ex__46029__auto__ = e46325;
var statearr_46326_47882 = state_46316;
(statearr_46326_47882[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47883 = state_46316;
state_46316 = G__47883;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = function(state_46316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1.call(this,state_46316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__;
})()
;})(__47844,switch__46025__auto__,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
})();
var state__46128__auto__ = (function (){var statearr_46327 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46327[(6)] = c__46126__auto___47866);

return statearr_46327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
});})(__47844,c__46126__auto___47866,G__46279_47848,G__46279_47849__$1,n__4666__auto___47843,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46279_47849__$1)].join('')));

}

var G__47888 = (__47844 + (1));
__47844 = G__47888;
continue;
} else {
}
break;
}

var c__46126__auto___47889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46349){
var state_val_46350 = (state_46349[(1)]);
if((state_val_46350 === (7))){
var inst_46345 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
var statearr_46351_47892 = state_46349__$1;
(statearr_46351_47892[(2)] = inst_46345);

(statearr_46351_47892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (1))){
var state_46349__$1 = state_46349;
var statearr_46352_47895 = state_46349__$1;
(statearr_46352_47895[(2)] = null);

(statearr_46352_47895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (4))){
var inst_46330 = (state_46349[(7)]);
var inst_46330__$1 = (state_46349[(2)]);
var inst_46331 = (inst_46330__$1 == null);
var state_46349__$1 = (function (){var statearr_46353 = state_46349;
(statearr_46353[(7)] = inst_46330__$1);

return statearr_46353;
})();
if(cljs.core.truth_(inst_46331)){
var statearr_46354_47896 = state_46349__$1;
(statearr_46354_47896[(1)] = (5));

} else {
var statearr_46355_47897 = state_46349__$1;
(statearr_46355_47897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (6))){
var inst_46335 = (state_46349[(8)]);
var inst_46330 = (state_46349[(7)]);
var inst_46335__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46337 = [inst_46330,inst_46335__$1];
var inst_46338 = (new cljs.core.PersistentVector(null,2,(5),inst_46336,inst_46337,null));
var state_46349__$1 = (function (){var statearr_46356 = state_46349;
(statearr_46356[(8)] = inst_46335__$1);

return statearr_46356;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46349__$1,(8),jobs,inst_46338);
} else {
if((state_val_46350 === (3))){
var inst_46347 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46349__$1,inst_46347);
} else {
if((state_val_46350 === (2))){
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46349__$1,(4),from);
} else {
if((state_val_46350 === (9))){
var inst_46342 = (state_46349[(2)]);
var state_46349__$1 = (function (){var statearr_46357 = state_46349;
(statearr_46357[(9)] = inst_46342);

return statearr_46357;
})();
var statearr_46358_47911 = state_46349__$1;
(statearr_46358_47911[(2)] = null);

(statearr_46358_47911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (5))){
var inst_46333 = cljs.core.async.close_BANG_(jobs);
var state_46349__$1 = state_46349;
var statearr_46359_47918 = state_46349__$1;
(statearr_46359_47918[(2)] = inst_46333);

(statearr_46359_47918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (8))){
var inst_46335 = (state_46349[(8)]);
var inst_46340 = (state_46349[(2)]);
var state_46349__$1 = (function (){var statearr_46360 = state_46349;
(statearr_46360[(10)] = inst_46340);

return statearr_46360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46349__$1,(9),results,inst_46335);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_46361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__);

(statearr_46361[(1)] = (1));

return statearr_46361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1 = (function (state_46349){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46349);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46362){if((e46362 instanceof Object)){
var ex__46029__auto__ = e46362;
var statearr_46363_47919 = state_46349;
(statearr_46363_47919[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47920 = state_46349;
state_46349 = G__47920;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = function(state_46349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1.call(this,state_46349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46364 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46364[(6)] = c__46126__auto___47889);

return statearr_46364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46402){
var state_val_46403 = (state_46402[(1)]);
if((state_val_46403 === (7))){
var inst_46398 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
var statearr_46404_47921 = state_46402__$1;
(statearr_46404_47921[(2)] = inst_46398);

(statearr_46404_47921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (20))){
var state_46402__$1 = state_46402;
var statearr_46405_47922 = state_46402__$1;
(statearr_46405_47922[(2)] = null);

(statearr_46405_47922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (1))){
var state_46402__$1 = state_46402;
var statearr_46406_47923 = state_46402__$1;
(statearr_46406_47923[(2)] = null);

(statearr_46406_47923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (4))){
var inst_46367 = (state_46402[(7)]);
var inst_46367__$1 = (state_46402[(2)]);
var inst_46368 = (inst_46367__$1 == null);
var state_46402__$1 = (function (){var statearr_46407 = state_46402;
(statearr_46407[(7)] = inst_46367__$1);

return statearr_46407;
})();
if(cljs.core.truth_(inst_46368)){
var statearr_46408_47930 = state_46402__$1;
(statearr_46408_47930[(1)] = (5));

} else {
var statearr_46409_47931 = state_46402__$1;
(statearr_46409_47931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (15))){
var inst_46380 = (state_46402[(8)]);
var state_46402__$1 = state_46402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46402__$1,(18),to,inst_46380);
} else {
if((state_val_46403 === (21))){
var inst_46393 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
var statearr_46410_47932 = state_46402__$1;
(statearr_46410_47932[(2)] = inst_46393);

(statearr_46410_47932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (13))){
var inst_46395 = (state_46402[(2)]);
var state_46402__$1 = (function (){var statearr_46411 = state_46402;
(statearr_46411[(9)] = inst_46395);

return statearr_46411;
})();
var statearr_46412_47933 = state_46402__$1;
(statearr_46412_47933[(2)] = null);

(statearr_46412_47933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (6))){
var inst_46367 = (state_46402[(7)]);
var state_46402__$1 = state_46402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46402__$1,(11),inst_46367);
} else {
if((state_val_46403 === (17))){
var inst_46388 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
if(cljs.core.truth_(inst_46388)){
var statearr_46413_47934 = state_46402__$1;
(statearr_46413_47934[(1)] = (19));

} else {
var statearr_46414_47935 = state_46402__$1;
(statearr_46414_47935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (3))){
var inst_46400 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46402__$1,inst_46400);
} else {
if((state_val_46403 === (12))){
var inst_46377 = (state_46402[(10)]);
var state_46402__$1 = state_46402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46402__$1,(14),inst_46377);
} else {
if((state_val_46403 === (2))){
var state_46402__$1 = state_46402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46402__$1,(4),results);
} else {
if((state_val_46403 === (19))){
var state_46402__$1 = state_46402;
var statearr_46415_47942 = state_46402__$1;
(statearr_46415_47942[(2)] = null);

(statearr_46415_47942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (11))){
var inst_46377 = (state_46402[(2)]);
var state_46402__$1 = (function (){var statearr_46416 = state_46402;
(statearr_46416[(10)] = inst_46377);

return statearr_46416;
})();
var statearr_46417_47943 = state_46402__$1;
(statearr_46417_47943[(2)] = null);

(statearr_46417_47943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (9))){
var state_46402__$1 = state_46402;
var statearr_46418_47944 = state_46402__$1;
(statearr_46418_47944[(2)] = null);

(statearr_46418_47944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (5))){
var state_46402__$1 = state_46402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46419_47945 = state_46402__$1;
(statearr_46419_47945[(1)] = (8));

} else {
var statearr_46420_47946 = state_46402__$1;
(statearr_46420_47946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (14))){
var inst_46380 = (state_46402[(8)]);
var inst_46380__$1 = (state_46402[(2)]);
var inst_46381 = (inst_46380__$1 == null);
var inst_46382 = cljs.core.not(inst_46381);
var state_46402__$1 = (function (){var statearr_46421 = state_46402;
(statearr_46421[(8)] = inst_46380__$1);

return statearr_46421;
})();
if(inst_46382){
var statearr_46422_47947 = state_46402__$1;
(statearr_46422_47947[(1)] = (15));

} else {
var statearr_46423_47948 = state_46402__$1;
(statearr_46423_47948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (16))){
var state_46402__$1 = state_46402;
var statearr_46424_47949 = state_46402__$1;
(statearr_46424_47949[(2)] = false);

(statearr_46424_47949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (10))){
var inst_46374 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
var statearr_46425_47950 = state_46402__$1;
(statearr_46425_47950[(2)] = inst_46374);

(statearr_46425_47950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (18))){
var inst_46385 = (state_46402[(2)]);
var state_46402__$1 = state_46402;
var statearr_46426_47951 = state_46402__$1;
(statearr_46426_47951[(2)] = inst_46385);

(statearr_46426_47951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46403 === (8))){
var inst_46371 = cljs.core.async.close_BANG_(to);
var state_46402__$1 = state_46402;
var statearr_46427_47952 = state_46402__$1;
(statearr_46427_47952[(2)] = inst_46371);

(statearr_46427_47952[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_46428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__);

(statearr_46428[(1)] = (1));

return statearr_46428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1 = (function (state_46402){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46402);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46429){if((e46429 instanceof Object)){
var ex__46029__auto__ = e46429;
var statearr_46430_47953 = state_46402;
(statearr_46430_47953[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47954 = state_46402;
state_46402 = G__47954;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__ = function(state_46402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1.call(this,state_46402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46431 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46431[(6)] = c__46126__auto__);

return statearr_46431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
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
var G__46433 = arguments.length;
switch (G__46433) {
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
var G__46435 = arguments.length;
switch (G__46435) {
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
var G__46437 = arguments.length;
switch (G__46437) {
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
var c__46126__auto___47964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46463){
var state_val_46464 = (state_46463[(1)]);
if((state_val_46464 === (7))){
var inst_46459 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46465_47965 = state_46463__$1;
(statearr_46465_47965[(2)] = inst_46459);

(statearr_46465_47965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (1))){
var state_46463__$1 = state_46463;
var statearr_46466_47966 = state_46463__$1;
(statearr_46466_47966[(2)] = null);

(statearr_46466_47966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (4))){
var inst_46440 = (state_46463[(7)]);
var inst_46440__$1 = (state_46463[(2)]);
var inst_46441 = (inst_46440__$1 == null);
var state_46463__$1 = (function (){var statearr_46467 = state_46463;
(statearr_46467[(7)] = inst_46440__$1);

return statearr_46467;
})();
if(cljs.core.truth_(inst_46441)){
var statearr_46468_47969 = state_46463__$1;
(statearr_46468_47969[(1)] = (5));

} else {
var statearr_46469_47970 = state_46463__$1;
(statearr_46469_47970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (13))){
var state_46463__$1 = state_46463;
var statearr_46470_47972 = state_46463__$1;
(statearr_46470_47972[(2)] = null);

(statearr_46470_47972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (6))){
var inst_46440 = (state_46463[(7)]);
var inst_46446 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46440) : p.call(null,inst_46440));
var state_46463__$1 = state_46463;
if(cljs.core.truth_(inst_46446)){
var statearr_46471_47974 = state_46463__$1;
(statearr_46471_47974[(1)] = (9));

} else {
var statearr_46472_47975 = state_46463__$1;
(statearr_46472_47975[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (3))){
var inst_46461 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46463__$1,inst_46461);
} else {
if((state_val_46464 === (12))){
var state_46463__$1 = state_46463;
var statearr_46473_47976 = state_46463__$1;
(statearr_46473_47976[(2)] = null);

(statearr_46473_47976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (2))){
var state_46463__$1 = state_46463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46463__$1,(4),ch);
} else {
if((state_val_46464 === (11))){
var inst_46440 = (state_46463[(7)]);
var inst_46450 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46463__$1,(8),inst_46450,inst_46440);
} else {
if((state_val_46464 === (9))){
var state_46463__$1 = state_46463;
var statearr_46474_47979 = state_46463__$1;
(statearr_46474_47979[(2)] = tc);

(statearr_46474_47979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (5))){
var inst_46443 = cljs.core.async.close_BANG_(tc);
var inst_46444 = cljs.core.async.close_BANG_(fc);
var state_46463__$1 = (function (){var statearr_46475 = state_46463;
(statearr_46475[(8)] = inst_46443);

return statearr_46475;
})();
var statearr_46476_47980 = state_46463__$1;
(statearr_46476_47980[(2)] = inst_46444);

(statearr_46476_47980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (14))){
var inst_46457 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46477_47981 = state_46463__$1;
(statearr_46477_47981[(2)] = inst_46457);

(statearr_46477_47981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (10))){
var state_46463__$1 = state_46463;
var statearr_46478_47982 = state_46463__$1;
(statearr_46478_47982[(2)] = fc);

(statearr_46478_47982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (8))){
var inst_46452 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
if(cljs.core.truth_(inst_46452)){
var statearr_46479_47983 = state_46463__$1;
(statearr_46479_47983[(1)] = (12));

} else {
var statearr_46480_47984 = state_46463__$1;
(statearr_46480_47984[(1)] = (13));

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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_46481 = [null,null,null,null,null,null,null,null,null];
(statearr_46481[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_46481[(1)] = (1));

return statearr_46481;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_46463){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46463);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46482){if((e46482 instanceof Object)){
var ex__46029__auto__ = e46482;
var statearr_46483_47985 = state_46463;
(statearr_46483_47985[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47986 = state_46463;
state_46463 = G__47986;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_46463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_46463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46484 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46484[(6)] = c__46126__auto___47964);

return statearr_46484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46505){
var state_val_46506 = (state_46505[(1)]);
if((state_val_46506 === (7))){
var inst_46501 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
var statearr_46507_47989 = state_46505__$1;
(statearr_46507_47989[(2)] = inst_46501);

(statearr_46507_47989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (1))){
var inst_46485 = init;
var state_46505__$1 = (function (){var statearr_46508 = state_46505;
(statearr_46508[(7)] = inst_46485);

return statearr_46508;
})();
var statearr_46509_47990 = state_46505__$1;
(statearr_46509_47990[(2)] = null);

(statearr_46509_47990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (4))){
var inst_46488 = (state_46505[(8)]);
var inst_46488__$1 = (state_46505[(2)]);
var inst_46489 = (inst_46488__$1 == null);
var state_46505__$1 = (function (){var statearr_46510 = state_46505;
(statearr_46510[(8)] = inst_46488__$1);

return statearr_46510;
})();
if(cljs.core.truth_(inst_46489)){
var statearr_46511_47991 = state_46505__$1;
(statearr_46511_47991[(1)] = (5));

} else {
var statearr_46512_47992 = state_46505__$1;
(statearr_46512_47992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (6))){
var inst_46492 = (state_46505[(9)]);
var inst_46488 = (state_46505[(8)]);
var inst_46485 = (state_46505[(7)]);
var inst_46492__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46485,inst_46488) : f.call(null,inst_46485,inst_46488));
var inst_46493 = cljs.core.reduced_QMARK_(inst_46492__$1);
var state_46505__$1 = (function (){var statearr_46513 = state_46505;
(statearr_46513[(9)] = inst_46492__$1);

return statearr_46513;
})();
if(inst_46493){
var statearr_46514_47993 = state_46505__$1;
(statearr_46514_47993[(1)] = (8));

} else {
var statearr_46515_47994 = state_46505__$1;
(statearr_46515_47994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (3))){
var inst_46503 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46505__$1,inst_46503);
} else {
if((state_val_46506 === (2))){
var state_46505__$1 = state_46505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46505__$1,(4),ch);
} else {
if((state_val_46506 === (9))){
var inst_46492 = (state_46505[(9)]);
var inst_46485 = inst_46492;
var state_46505__$1 = (function (){var statearr_46516 = state_46505;
(statearr_46516[(7)] = inst_46485);

return statearr_46516;
})();
var statearr_46517_47995 = state_46505__$1;
(statearr_46517_47995[(2)] = null);

(statearr_46517_47995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (5))){
var inst_46485 = (state_46505[(7)]);
var state_46505__$1 = state_46505;
var statearr_46518_47997 = state_46505__$1;
(statearr_46518_47997[(2)] = inst_46485);

(statearr_46518_47997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (10))){
var inst_46499 = (state_46505[(2)]);
var state_46505__$1 = state_46505;
var statearr_46519_47998 = state_46505__$1;
(statearr_46519_47998[(2)] = inst_46499);

(statearr_46519_47998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46506 === (8))){
var inst_46492 = (state_46505[(9)]);
var inst_46495 = cljs.core.deref(inst_46492);
var state_46505__$1 = state_46505;
var statearr_46520_47999 = state_46505__$1;
(statearr_46520_47999[(2)] = inst_46495);

(statearr_46520_47999[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46026__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46026__auto____0 = (function (){
var statearr_46521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46521[(0)] = cljs$core$async$reduce_$_state_machine__46026__auto__);

(statearr_46521[(1)] = (1));

return statearr_46521;
});
var cljs$core$async$reduce_$_state_machine__46026__auto____1 = (function (state_46505){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46505);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46522){if((e46522 instanceof Object)){
var ex__46029__auto__ = e46522;
var statearr_46523_48004 = state_46505;
(statearr_46523_48004[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48005 = state_46505;
state_46505 = G__48005;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46026__auto__ = function(state_46505){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46026__auto____1.call(this,state_46505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46026__auto____0;
cljs$core$async$reduce_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46026__auto____1;
return cljs$core$async$reduce_$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46524 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46524[(6)] = c__46126__auto__);

return statearr_46524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46530){
var state_val_46531 = (state_46530[(1)]);
if((state_val_46531 === (1))){
var inst_46525 = cljs.core.async.reduce(f__$1,init,ch);
var state_46530__$1 = state_46530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46530__$1,(2),inst_46525);
} else {
if((state_val_46531 === (2))){
var inst_46527 = (state_46530[(2)]);
var inst_46528 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46527) : f__$1.call(null,inst_46527));
var state_46530__$1 = state_46530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46530__$1,inst_46528);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46026__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46026__auto____0 = (function (){
var statearr_46532 = [null,null,null,null,null,null,null];
(statearr_46532[(0)] = cljs$core$async$transduce_$_state_machine__46026__auto__);

(statearr_46532[(1)] = (1));

return statearr_46532;
});
var cljs$core$async$transduce_$_state_machine__46026__auto____1 = (function (state_46530){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46530);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46533){if((e46533 instanceof Object)){
var ex__46029__auto__ = e46533;
var statearr_46534_48006 = state_46530;
(statearr_46534_48006[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48014 = state_46530;
state_46530 = G__48014;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46026__auto__ = function(state_46530){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46026__auto____1.call(this,state_46530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46026__auto____0;
cljs$core$async$transduce_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46026__auto____1;
return cljs$core$async$transduce_$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46535 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46535[(6)] = c__46126__auto__);

return statearr_46535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
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
var G__46537 = arguments.length;
switch (G__46537) {
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
var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46562){
var state_val_46563 = (state_46562[(1)]);
if((state_val_46563 === (7))){
var inst_46544 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
var statearr_46564_48022 = state_46562__$1;
(statearr_46564_48022[(2)] = inst_46544);

(statearr_46564_48022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (1))){
var inst_46538 = cljs.core.seq(coll);
var inst_46539 = inst_46538;
var state_46562__$1 = (function (){var statearr_46565 = state_46562;
(statearr_46565[(7)] = inst_46539);

return statearr_46565;
})();
var statearr_46566_48027 = state_46562__$1;
(statearr_46566_48027[(2)] = null);

(statearr_46566_48027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (4))){
var inst_46539 = (state_46562[(7)]);
var inst_46542 = cljs.core.first(inst_46539);
var state_46562__$1 = state_46562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46562__$1,(7),ch,inst_46542);
} else {
if((state_val_46563 === (13))){
var inst_46556 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
var statearr_46567_48031 = state_46562__$1;
(statearr_46567_48031[(2)] = inst_46556);

(statearr_46567_48031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (6))){
var inst_46547 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
if(cljs.core.truth_(inst_46547)){
var statearr_46568_48032 = state_46562__$1;
(statearr_46568_48032[(1)] = (8));

} else {
var statearr_46569_48033 = state_46562__$1;
(statearr_46569_48033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (3))){
var inst_46560 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46562__$1,inst_46560);
} else {
if((state_val_46563 === (12))){
var state_46562__$1 = state_46562;
var statearr_46570_48034 = state_46562__$1;
(statearr_46570_48034[(2)] = null);

(statearr_46570_48034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (2))){
var inst_46539 = (state_46562[(7)]);
var state_46562__$1 = state_46562;
if(cljs.core.truth_(inst_46539)){
var statearr_46571_48035 = state_46562__$1;
(statearr_46571_48035[(1)] = (4));

} else {
var statearr_46572_48036 = state_46562__$1;
(statearr_46572_48036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (11))){
var inst_46553 = cljs.core.async.close_BANG_(ch);
var state_46562__$1 = state_46562;
var statearr_46573_48037 = state_46562__$1;
(statearr_46573_48037[(2)] = inst_46553);

(statearr_46573_48037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (9))){
var state_46562__$1 = state_46562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46574_48040 = state_46562__$1;
(statearr_46574_48040[(1)] = (11));

} else {
var statearr_46575_48041 = state_46562__$1;
(statearr_46575_48041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (5))){
var inst_46539 = (state_46562[(7)]);
var state_46562__$1 = state_46562;
var statearr_46576_48042 = state_46562__$1;
(statearr_46576_48042[(2)] = inst_46539);

(statearr_46576_48042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (10))){
var inst_46558 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
var statearr_46577_48044 = state_46562__$1;
(statearr_46577_48044[(2)] = inst_46558);

(statearr_46577_48044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (8))){
var inst_46539 = (state_46562[(7)]);
var inst_46549 = cljs.core.next(inst_46539);
var inst_46539__$1 = inst_46549;
var state_46562__$1 = (function (){var statearr_46578 = state_46562;
(statearr_46578[(7)] = inst_46539__$1);

return statearr_46578;
})();
var statearr_46579_48046 = state_46562__$1;
(statearr_46579_48046[(2)] = null);

(statearr_46579_48046[(1)] = (2));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_46580 = [null,null,null,null,null,null,null,null];
(statearr_46580[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_46580[(1)] = (1));

return statearr_46580;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_46562){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46562);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46581){if((e46581 instanceof Object)){
var ex__46029__auto__ = e46581;
var statearr_46582_48052 = state_46562;
(statearr_46582_48052[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48053 = state_46562;
state_46562 = G__48053;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_46562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_46562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46583 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46583[(6)] = c__46126__auto__);

return statearr_46583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46584 = (function (ch,cs,meta46585){
this.ch = ch;
this.cs = cs;
this.meta46585 = meta46585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46586,meta46585__$1){
var self__ = this;
var _46586__$1 = this;
return (new cljs.core.async.t_cljs$core$async46584(self__.ch,self__.cs,meta46585__$1));
}));

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46586){
var self__ = this;
var _46586__$1 = this;
return self__.meta46585;
}));

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46585","meta46585",4043475,null)], null);
}));

(cljs.core.async.t_cljs$core$async46584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46584");

(cljs.core.async.t_cljs$core$async46584.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46584.
 */
cljs.core.async.__GT_t_cljs$core$async46584 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46584(ch__$1,cs__$1,meta46585){
return (new cljs.core.async.t_cljs$core$async46584(ch__$1,cs__$1,meta46585));
});

}

return (new cljs.core.async.t_cljs$core$async46584(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46126__auto___48066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46721){
var state_val_46722 = (state_46721[(1)]);
if((state_val_46722 === (7))){
var inst_46717 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46723_48072 = state_46721__$1;
(statearr_46723_48072[(2)] = inst_46717);

(statearr_46723_48072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (20))){
var inst_46620 = (state_46721[(7)]);
var inst_46632 = cljs.core.first(inst_46620);
var inst_46633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46632,(0),null);
var inst_46634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46632,(1),null);
var state_46721__$1 = (function (){var statearr_46724 = state_46721;
(statearr_46724[(8)] = inst_46633);

return statearr_46724;
})();
if(cljs.core.truth_(inst_46634)){
var statearr_46725_48073 = state_46721__$1;
(statearr_46725_48073[(1)] = (22));

} else {
var statearr_46726_48074 = state_46721__$1;
(statearr_46726_48074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (27))){
var inst_46669 = (state_46721[(9)]);
var inst_46662 = (state_46721[(10)]);
var inst_46589 = (state_46721[(11)]);
var inst_46664 = (state_46721[(12)]);
var inst_46669__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46662,inst_46664);
var inst_46670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46669__$1,inst_46589,done);
var state_46721__$1 = (function (){var statearr_46727 = state_46721;
(statearr_46727[(9)] = inst_46669__$1);

return statearr_46727;
})();
if(cljs.core.truth_(inst_46670)){
var statearr_46728_48075 = state_46721__$1;
(statearr_46728_48075[(1)] = (30));

} else {
var statearr_46729_48076 = state_46721__$1;
(statearr_46729_48076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (1))){
var state_46721__$1 = state_46721;
var statearr_46730_48077 = state_46721__$1;
(statearr_46730_48077[(2)] = null);

(statearr_46730_48077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (24))){
var inst_46620 = (state_46721[(7)]);
var inst_46639 = (state_46721[(2)]);
var inst_46640 = cljs.core.next(inst_46620);
var inst_46598 = inst_46640;
var inst_46599 = null;
var inst_46600 = (0);
var inst_46601 = (0);
var state_46721__$1 = (function (){var statearr_46731 = state_46721;
(statearr_46731[(13)] = inst_46600);

(statearr_46731[(14)] = inst_46601);

(statearr_46731[(15)] = inst_46639);

(statearr_46731[(16)] = inst_46599);

(statearr_46731[(17)] = inst_46598);

return statearr_46731;
})();
var statearr_46732_48078 = state_46721__$1;
(statearr_46732_48078[(2)] = null);

(statearr_46732_48078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (39))){
var state_46721__$1 = state_46721;
var statearr_46736_48079 = state_46721__$1;
(statearr_46736_48079[(2)] = null);

(statearr_46736_48079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (4))){
var inst_46589 = (state_46721[(11)]);
var inst_46589__$1 = (state_46721[(2)]);
var inst_46590 = (inst_46589__$1 == null);
var state_46721__$1 = (function (){var statearr_46737 = state_46721;
(statearr_46737[(11)] = inst_46589__$1);

return statearr_46737;
})();
if(cljs.core.truth_(inst_46590)){
var statearr_46738_48081 = state_46721__$1;
(statearr_46738_48081[(1)] = (5));

} else {
var statearr_46739_48082 = state_46721__$1;
(statearr_46739_48082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (15))){
var inst_46600 = (state_46721[(13)]);
var inst_46601 = (state_46721[(14)]);
var inst_46599 = (state_46721[(16)]);
var inst_46598 = (state_46721[(17)]);
var inst_46616 = (state_46721[(2)]);
var inst_46617 = (inst_46601 + (1));
var tmp46733 = inst_46600;
var tmp46734 = inst_46599;
var tmp46735 = inst_46598;
var inst_46598__$1 = tmp46735;
var inst_46599__$1 = tmp46734;
var inst_46600__$1 = tmp46733;
var inst_46601__$1 = inst_46617;
var state_46721__$1 = (function (){var statearr_46740 = state_46721;
(statearr_46740[(13)] = inst_46600__$1);

(statearr_46740[(14)] = inst_46601__$1);

(statearr_46740[(16)] = inst_46599__$1);

(statearr_46740[(17)] = inst_46598__$1);

(statearr_46740[(18)] = inst_46616);

return statearr_46740;
})();
var statearr_46741_48083 = state_46721__$1;
(statearr_46741_48083[(2)] = null);

(statearr_46741_48083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (21))){
var inst_46643 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46745_48084 = state_46721__$1;
(statearr_46745_48084[(2)] = inst_46643);

(statearr_46745_48084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (31))){
var inst_46669 = (state_46721[(9)]);
var inst_46673 = done(null);
var inst_46674 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46669);
var state_46721__$1 = (function (){var statearr_46746 = state_46721;
(statearr_46746[(19)] = inst_46673);

return statearr_46746;
})();
var statearr_46747_48085 = state_46721__$1;
(statearr_46747_48085[(2)] = inst_46674);

(statearr_46747_48085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (32))){
var inst_46662 = (state_46721[(10)]);
var inst_46661 = (state_46721[(20)]);
var inst_46663 = (state_46721[(21)]);
var inst_46664 = (state_46721[(12)]);
var inst_46676 = (state_46721[(2)]);
var inst_46677 = (inst_46664 + (1));
var tmp46742 = inst_46662;
var tmp46743 = inst_46661;
var tmp46744 = inst_46663;
var inst_46661__$1 = tmp46743;
var inst_46662__$1 = tmp46742;
var inst_46663__$1 = tmp46744;
var inst_46664__$1 = inst_46677;
var state_46721__$1 = (function (){var statearr_46748 = state_46721;
(statearr_46748[(10)] = inst_46662__$1);

(statearr_46748[(22)] = inst_46676);

(statearr_46748[(20)] = inst_46661__$1);

(statearr_46748[(21)] = inst_46663__$1);

(statearr_46748[(12)] = inst_46664__$1);

return statearr_46748;
})();
var statearr_46749_48093 = state_46721__$1;
(statearr_46749_48093[(2)] = null);

(statearr_46749_48093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (40))){
var inst_46689 = (state_46721[(23)]);
var inst_46693 = done(null);
var inst_46694 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46689);
var state_46721__$1 = (function (){var statearr_46750 = state_46721;
(statearr_46750[(24)] = inst_46693);

return statearr_46750;
})();
var statearr_46751_48094 = state_46721__$1;
(statearr_46751_48094[(2)] = inst_46694);

(statearr_46751_48094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (33))){
var inst_46680 = (state_46721[(25)]);
var inst_46682 = cljs.core.chunked_seq_QMARK_(inst_46680);
var state_46721__$1 = state_46721;
if(inst_46682){
var statearr_46752_48095 = state_46721__$1;
(statearr_46752_48095[(1)] = (36));

} else {
var statearr_46753_48096 = state_46721__$1;
(statearr_46753_48096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (13))){
var inst_46610 = (state_46721[(26)]);
var inst_46613 = cljs.core.async.close_BANG_(inst_46610);
var state_46721__$1 = state_46721;
var statearr_46754_48097 = state_46721__$1;
(statearr_46754_48097[(2)] = inst_46613);

(statearr_46754_48097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (22))){
var inst_46633 = (state_46721[(8)]);
var inst_46636 = cljs.core.async.close_BANG_(inst_46633);
var state_46721__$1 = state_46721;
var statearr_46755_48098 = state_46721__$1;
(statearr_46755_48098[(2)] = inst_46636);

(statearr_46755_48098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (36))){
var inst_46680 = (state_46721[(25)]);
var inst_46684 = cljs.core.chunk_first(inst_46680);
var inst_46685 = cljs.core.chunk_rest(inst_46680);
var inst_46686 = cljs.core.count(inst_46684);
var inst_46661 = inst_46685;
var inst_46662 = inst_46684;
var inst_46663 = inst_46686;
var inst_46664 = (0);
var state_46721__$1 = (function (){var statearr_46756 = state_46721;
(statearr_46756[(10)] = inst_46662);

(statearr_46756[(20)] = inst_46661);

(statearr_46756[(21)] = inst_46663);

(statearr_46756[(12)] = inst_46664);

return statearr_46756;
})();
var statearr_46757_48099 = state_46721__$1;
(statearr_46757_48099[(2)] = null);

(statearr_46757_48099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (41))){
var inst_46680 = (state_46721[(25)]);
var inst_46696 = (state_46721[(2)]);
var inst_46697 = cljs.core.next(inst_46680);
var inst_46661 = inst_46697;
var inst_46662 = null;
var inst_46663 = (0);
var inst_46664 = (0);
var state_46721__$1 = (function (){var statearr_46758 = state_46721;
(statearr_46758[(27)] = inst_46696);

(statearr_46758[(10)] = inst_46662);

(statearr_46758[(20)] = inst_46661);

(statearr_46758[(21)] = inst_46663);

(statearr_46758[(12)] = inst_46664);

return statearr_46758;
})();
var statearr_46759_48101 = state_46721__$1;
(statearr_46759_48101[(2)] = null);

(statearr_46759_48101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (43))){
var state_46721__$1 = state_46721;
var statearr_46760_48102 = state_46721__$1;
(statearr_46760_48102[(2)] = null);

(statearr_46760_48102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (29))){
var inst_46705 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46761_48103 = state_46721__$1;
(statearr_46761_48103[(2)] = inst_46705);

(statearr_46761_48103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (44))){
var inst_46714 = (state_46721[(2)]);
var state_46721__$1 = (function (){var statearr_46762 = state_46721;
(statearr_46762[(28)] = inst_46714);

return statearr_46762;
})();
var statearr_46763_48105 = state_46721__$1;
(statearr_46763_48105[(2)] = null);

(statearr_46763_48105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (6))){
var inst_46653 = (state_46721[(29)]);
var inst_46652 = cljs.core.deref(cs);
var inst_46653__$1 = cljs.core.keys(inst_46652);
var inst_46654 = cljs.core.count(inst_46653__$1);
var inst_46655 = cljs.core.reset_BANG_(dctr,inst_46654);
var inst_46660 = cljs.core.seq(inst_46653__$1);
var inst_46661 = inst_46660;
var inst_46662 = null;
var inst_46663 = (0);
var inst_46664 = (0);
var state_46721__$1 = (function (){var statearr_46764 = state_46721;
(statearr_46764[(10)] = inst_46662);

(statearr_46764[(20)] = inst_46661);

(statearr_46764[(29)] = inst_46653__$1);

(statearr_46764[(21)] = inst_46663);

(statearr_46764[(30)] = inst_46655);

(statearr_46764[(12)] = inst_46664);

return statearr_46764;
})();
var statearr_46765_48107 = state_46721__$1;
(statearr_46765_48107[(2)] = null);

(statearr_46765_48107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (28))){
var inst_46680 = (state_46721[(25)]);
var inst_46661 = (state_46721[(20)]);
var inst_46680__$1 = cljs.core.seq(inst_46661);
var state_46721__$1 = (function (){var statearr_46766 = state_46721;
(statearr_46766[(25)] = inst_46680__$1);

return statearr_46766;
})();
if(inst_46680__$1){
var statearr_46767_48108 = state_46721__$1;
(statearr_46767_48108[(1)] = (33));

} else {
var statearr_46768_48109 = state_46721__$1;
(statearr_46768_48109[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (25))){
var inst_46663 = (state_46721[(21)]);
var inst_46664 = (state_46721[(12)]);
var inst_46666 = (inst_46664 < inst_46663);
var inst_46667 = inst_46666;
var state_46721__$1 = state_46721;
if(cljs.core.truth_(inst_46667)){
var statearr_46769_48111 = state_46721__$1;
(statearr_46769_48111[(1)] = (27));

} else {
var statearr_46770_48112 = state_46721__$1;
(statearr_46770_48112[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (34))){
var state_46721__$1 = state_46721;
var statearr_46771_48113 = state_46721__$1;
(statearr_46771_48113[(2)] = null);

(statearr_46771_48113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (17))){
var state_46721__$1 = state_46721;
var statearr_46772_48118 = state_46721__$1;
(statearr_46772_48118[(2)] = null);

(statearr_46772_48118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (3))){
var inst_46719 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46721__$1,inst_46719);
} else {
if((state_val_46722 === (12))){
var inst_46648 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46773_48120 = state_46721__$1;
(statearr_46773_48120[(2)] = inst_46648);

(statearr_46773_48120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (2))){
var state_46721__$1 = state_46721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46721__$1,(4),ch);
} else {
if((state_val_46722 === (23))){
var state_46721__$1 = state_46721;
var statearr_46774_48121 = state_46721__$1;
(statearr_46774_48121[(2)] = null);

(statearr_46774_48121[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (35))){
var inst_46703 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46775_48122 = state_46721__$1;
(statearr_46775_48122[(2)] = inst_46703);

(statearr_46775_48122[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (19))){
var inst_46620 = (state_46721[(7)]);
var inst_46624 = cljs.core.chunk_first(inst_46620);
var inst_46625 = cljs.core.chunk_rest(inst_46620);
var inst_46626 = cljs.core.count(inst_46624);
var inst_46598 = inst_46625;
var inst_46599 = inst_46624;
var inst_46600 = inst_46626;
var inst_46601 = (0);
var state_46721__$1 = (function (){var statearr_46776 = state_46721;
(statearr_46776[(13)] = inst_46600);

(statearr_46776[(14)] = inst_46601);

(statearr_46776[(16)] = inst_46599);

(statearr_46776[(17)] = inst_46598);

return statearr_46776;
})();
var statearr_46777_48124 = state_46721__$1;
(statearr_46777_48124[(2)] = null);

(statearr_46777_48124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (11))){
var inst_46620 = (state_46721[(7)]);
var inst_46598 = (state_46721[(17)]);
var inst_46620__$1 = cljs.core.seq(inst_46598);
var state_46721__$1 = (function (){var statearr_46778 = state_46721;
(statearr_46778[(7)] = inst_46620__$1);

return statearr_46778;
})();
if(inst_46620__$1){
var statearr_46779_48129 = state_46721__$1;
(statearr_46779_48129[(1)] = (16));

} else {
var statearr_46780_48130 = state_46721__$1;
(statearr_46780_48130[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (9))){
var inst_46650 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46781_48131 = state_46721__$1;
(statearr_46781_48131[(2)] = inst_46650);

(statearr_46781_48131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (5))){
var inst_46596 = cljs.core.deref(cs);
var inst_46597 = cljs.core.seq(inst_46596);
var inst_46598 = inst_46597;
var inst_46599 = null;
var inst_46600 = (0);
var inst_46601 = (0);
var state_46721__$1 = (function (){var statearr_46782 = state_46721;
(statearr_46782[(13)] = inst_46600);

(statearr_46782[(14)] = inst_46601);

(statearr_46782[(16)] = inst_46599);

(statearr_46782[(17)] = inst_46598);

return statearr_46782;
})();
var statearr_46783_48132 = state_46721__$1;
(statearr_46783_48132[(2)] = null);

(statearr_46783_48132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (14))){
var state_46721__$1 = state_46721;
var statearr_46784_48133 = state_46721__$1;
(statearr_46784_48133[(2)] = null);

(statearr_46784_48133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (45))){
var inst_46711 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46785_48134 = state_46721__$1;
(statearr_46785_48134[(2)] = inst_46711);

(statearr_46785_48134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (26))){
var inst_46653 = (state_46721[(29)]);
var inst_46707 = (state_46721[(2)]);
var inst_46708 = cljs.core.seq(inst_46653);
var state_46721__$1 = (function (){var statearr_46786 = state_46721;
(statearr_46786[(31)] = inst_46707);

return statearr_46786;
})();
if(inst_46708){
var statearr_46787_48136 = state_46721__$1;
(statearr_46787_48136[(1)] = (42));

} else {
var statearr_46788_48137 = state_46721__$1;
(statearr_46788_48137[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (16))){
var inst_46620 = (state_46721[(7)]);
var inst_46622 = cljs.core.chunked_seq_QMARK_(inst_46620);
var state_46721__$1 = state_46721;
if(inst_46622){
var statearr_46789_48138 = state_46721__$1;
(statearr_46789_48138[(1)] = (19));

} else {
var statearr_46790_48139 = state_46721__$1;
(statearr_46790_48139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (38))){
var inst_46700 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46791_48140 = state_46721__$1;
(statearr_46791_48140[(2)] = inst_46700);

(statearr_46791_48140[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (30))){
var state_46721__$1 = state_46721;
var statearr_46792_48144 = state_46721__$1;
(statearr_46792_48144[(2)] = null);

(statearr_46792_48144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (10))){
var inst_46601 = (state_46721[(14)]);
var inst_46599 = (state_46721[(16)]);
var inst_46609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46599,inst_46601);
var inst_46610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46609,(0),null);
var inst_46611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46609,(1),null);
var state_46721__$1 = (function (){var statearr_46793 = state_46721;
(statearr_46793[(26)] = inst_46610);

return statearr_46793;
})();
if(cljs.core.truth_(inst_46611)){
var statearr_46794_48149 = state_46721__$1;
(statearr_46794_48149[(1)] = (13));

} else {
var statearr_46795_48150 = state_46721__$1;
(statearr_46795_48150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (18))){
var inst_46646 = (state_46721[(2)]);
var state_46721__$1 = state_46721;
var statearr_46796_48151 = state_46721__$1;
(statearr_46796_48151[(2)] = inst_46646);

(statearr_46796_48151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (42))){
var state_46721__$1 = state_46721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46721__$1,(45),dchan);
} else {
if((state_val_46722 === (37))){
var inst_46680 = (state_46721[(25)]);
var inst_46689 = (state_46721[(23)]);
var inst_46589 = (state_46721[(11)]);
var inst_46689__$1 = cljs.core.first(inst_46680);
var inst_46690 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46689__$1,inst_46589,done);
var state_46721__$1 = (function (){var statearr_46797 = state_46721;
(statearr_46797[(23)] = inst_46689__$1);

return statearr_46797;
})();
if(cljs.core.truth_(inst_46690)){
var statearr_46798_48152 = state_46721__$1;
(statearr_46798_48152[(1)] = (39));

} else {
var statearr_46799_48153 = state_46721__$1;
(statearr_46799_48153[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46722 === (8))){
var inst_46600 = (state_46721[(13)]);
var inst_46601 = (state_46721[(14)]);
var inst_46603 = (inst_46601 < inst_46600);
var inst_46604 = inst_46603;
var state_46721__$1 = state_46721;
if(cljs.core.truth_(inst_46604)){
var statearr_46800_48154 = state_46721__$1;
(statearr_46800_48154[(1)] = (10));

} else {
var statearr_46801_48155 = state_46721__$1;
(statearr_46801_48155[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46026__auto__ = null;
var cljs$core$async$mult_$_state_machine__46026__auto____0 = (function (){
var statearr_46802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46802[(0)] = cljs$core$async$mult_$_state_machine__46026__auto__);

(statearr_46802[(1)] = (1));

return statearr_46802;
});
var cljs$core$async$mult_$_state_machine__46026__auto____1 = (function (state_46721){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46721);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46803){if((e46803 instanceof Object)){
var ex__46029__auto__ = e46803;
var statearr_46804_48156 = state_46721;
(statearr_46804_48156[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48157 = state_46721;
state_46721 = G__48157;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46026__auto__ = function(state_46721){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46026__auto____1.call(this,state_46721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46026__auto____0;
cljs$core$async$mult_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46026__auto____1;
return cljs$core$async$mult_$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46805 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46805[(6)] = c__46126__auto___48066);

return statearr_46805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var G__46807 = arguments.length;
switch (G__46807) {
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
var len__4789__auto___48171 = arguments.length;
var i__4790__auto___48172 = (0);
while(true){
if((i__4790__auto___48172 < len__4789__auto___48171)){
args__4795__auto__.push((arguments[i__4790__auto___48172]));

var G__48173 = (i__4790__auto___48172 + (1));
i__4790__auto___48172 = G__48173;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46812){
var map__46813 = p__46812;
var map__46813__$1 = (((((!((map__46813 == null))))?(((((map__46813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46813):map__46813);
var opts = map__46813__$1;
var statearr_46815_48174 = state;
(statearr_46815_48174[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46816_48175 = state;
(statearr_46816_48175[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46817_48176 = state;
(statearr_46817_48176[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46808){
var G__46809 = cljs.core.first(seq46808);
var seq46808__$1 = cljs.core.next(seq46808);
var G__46810 = cljs.core.first(seq46808__$1);
var seq46808__$2 = cljs.core.next(seq46808__$1);
var G__46811 = cljs.core.first(seq46808__$2);
var seq46808__$3 = cljs.core.next(seq46808__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46809,G__46810,G__46811,seq46808__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46818 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46819){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46819 = meta46819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46820,meta46819__$1){
var self__ = this;
var _46820__$1 = this;
return (new cljs.core.async.t_cljs$core$async46818(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46819__$1));
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46820){
var self__ = this;
var _46820__$1 = this;
return self__.meta46819;
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46819","meta46819",1920220204,null)], null);
}));

(cljs.core.async.t_cljs$core$async46818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46818");

(cljs.core.async.t_cljs$core$async46818.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46818.
 */
cljs.core.async.__GT_t_cljs$core$async46818 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46818(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46819){
return (new cljs.core.async.t_cljs$core$async46818(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46819));
});

}

return (new cljs.core.async.t_cljs$core$async46818(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46126__auto___48184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_46922){
var state_val_46923 = (state_46922[(1)]);
if((state_val_46923 === (7))){
var inst_46837 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
var statearr_46924_48185 = state_46922__$1;
(statearr_46924_48185[(2)] = inst_46837);

(statearr_46924_48185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (20))){
var inst_46849 = (state_46922[(7)]);
var state_46922__$1 = state_46922;
var statearr_46925_48186 = state_46922__$1;
(statearr_46925_48186[(2)] = inst_46849);

(statearr_46925_48186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (27))){
var state_46922__$1 = state_46922;
var statearr_46926_48187 = state_46922__$1;
(statearr_46926_48187[(2)] = null);

(statearr_46926_48187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (1))){
var inst_46824 = (state_46922[(8)]);
var inst_46824__$1 = calc_state();
var inst_46826 = (inst_46824__$1 == null);
var inst_46827 = cljs.core.not(inst_46826);
var state_46922__$1 = (function (){var statearr_46927 = state_46922;
(statearr_46927[(8)] = inst_46824__$1);

return statearr_46927;
})();
if(inst_46827){
var statearr_46928_48191 = state_46922__$1;
(statearr_46928_48191[(1)] = (2));

} else {
var statearr_46929_48192 = state_46922__$1;
(statearr_46929_48192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (24))){
var inst_46882 = (state_46922[(9)]);
var inst_46896 = (state_46922[(10)]);
var inst_46873 = (state_46922[(11)]);
var inst_46896__$1 = (inst_46873.cljs$core$IFn$_invoke$arity$1 ? inst_46873.cljs$core$IFn$_invoke$arity$1(inst_46882) : inst_46873.call(null,inst_46882));
var state_46922__$1 = (function (){var statearr_46930 = state_46922;
(statearr_46930[(10)] = inst_46896__$1);

return statearr_46930;
})();
if(cljs.core.truth_(inst_46896__$1)){
var statearr_46931_48200 = state_46922__$1;
(statearr_46931_48200[(1)] = (29));

} else {
var statearr_46932_48201 = state_46922__$1;
(statearr_46932_48201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (4))){
var inst_46840 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46840)){
var statearr_46933_48202 = state_46922__$1;
(statearr_46933_48202[(1)] = (8));

} else {
var statearr_46934_48206 = state_46922__$1;
(statearr_46934_48206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (15))){
var inst_46867 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46867)){
var statearr_46935_48207 = state_46922__$1;
(statearr_46935_48207[(1)] = (19));

} else {
var statearr_46936_48208 = state_46922__$1;
(statearr_46936_48208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (21))){
var inst_46872 = (state_46922[(12)]);
var inst_46872__$1 = (state_46922[(2)]);
var inst_46873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46872__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46872__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46872__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46922__$1 = (function (){var statearr_46937 = state_46922;
(statearr_46937[(11)] = inst_46873);

(statearr_46937[(12)] = inst_46872__$1);

(statearr_46937[(13)] = inst_46874);

return statearr_46937;
})();
return cljs.core.async.ioc_alts_BANG_(state_46922__$1,(22),inst_46875);
} else {
if((state_val_46923 === (31))){
var inst_46904 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46904)){
var statearr_46938_48209 = state_46922__$1;
(statearr_46938_48209[(1)] = (32));

} else {
var statearr_46939_48210 = state_46922__$1;
(statearr_46939_48210[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (32))){
var inst_46881 = (state_46922[(14)]);
var state_46922__$1 = state_46922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46922__$1,(35),out,inst_46881);
} else {
if((state_val_46923 === (33))){
var inst_46872 = (state_46922[(12)]);
var inst_46849 = inst_46872;
var state_46922__$1 = (function (){var statearr_46940 = state_46922;
(statearr_46940[(7)] = inst_46849);

return statearr_46940;
})();
var statearr_46941_48211 = state_46922__$1;
(statearr_46941_48211[(2)] = null);

(statearr_46941_48211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (13))){
var inst_46849 = (state_46922[(7)]);
var inst_46856 = inst_46849.cljs$lang$protocol_mask$partition0$;
var inst_46857 = (inst_46856 & (64));
var inst_46858 = inst_46849.cljs$core$ISeq$;
var inst_46859 = (cljs.core.PROTOCOL_SENTINEL === inst_46858);
var inst_46860 = ((inst_46857) || (inst_46859));
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46860)){
var statearr_46942_48212 = state_46922__$1;
(statearr_46942_48212[(1)] = (16));

} else {
var statearr_46943_48213 = state_46922__$1;
(statearr_46943_48213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (22))){
var inst_46882 = (state_46922[(9)]);
var inst_46881 = (state_46922[(14)]);
var inst_46880 = (state_46922[(2)]);
var inst_46881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46880,(0),null);
var inst_46882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46880,(1),null);
var inst_46883 = (inst_46881__$1 == null);
var inst_46884 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46882__$1,change);
var inst_46885 = ((inst_46883) || (inst_46884));
var state_46922__$1 = (function (){var statearr_46944 = state_46922;
(statearr_46944[(9)] = inst_46882__$1);

(statearr_46944[(14)] = inst_46881__$1);

return statearr_46944;
})();
if(cljs.core.truth_(inst_46885)){
var statearr_46945_48217 = state_46922__$1;
(statearr_46945_48217[(1)] = (23));

} else {
var statearr_46946_48218 = state_46922__$1;
(statearr_46946_48218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (36))){
var inst_46872 = (state_46922[(12)]);
var inst_46849 = inst_46872;
var state_46922__$1 = (function (){var statearr_46947 = state_46922;
(statearr_46947[(7)] = inst_46849);

return statearr_46947;
})();
var statearr_46948_48219 = state_46922__$1;
(statearr_46948_48219[(2)] = null);

(statearr_46948_48219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (29))){
var inst_46896 = (state_46922[(10)]);
var state_46922__$1 = state_46922;
var statearr_46949_48220 = state_46922__$1;
(statearr_46949_48220[(2)] = inst_46896);

(statearr_46949_48220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (6))){
var state_46922__$1 = state_46922;
var statearr_46950_48224 = state_46922__$1;
(statearr_46950_48224[(2)] = false);

(statearr_46950_48224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (28))){
var inst_46892 = (state_46922[(2)]);
var inst_46893 = calc_state();
var inst_46849 = inst_46893;
var state_46922__$1 = (function (){var statearr_46951 = state_46922;
(statearr_46951[(15)] = inst_46892);

(statearr_46951[(7)] = inst_46849);

return statearr_46951;
})();
var statearr_46952_48225 = state_46922__$1;
(statearr_46952_48225[(2)] = null);

(statearr_46952_48225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (25))){
var inst_46918 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
var statearr_46953_48227 = state_46922__$1;
(statearr_46953_48227[(2)] = inst_46918);

(statearr_46953_48227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (34))){
var inst_46916 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
var statearr_46954_48228 = state_46922__$1;
(statearr_46954_48228[(2)] = inst_46916);

(statearr_46954_48228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (17))){
var state_46922__$1 = state_46922;
var statearr_46955_48229 = state_46922__$1;
(statearr_46955_48229[(2)] = false);

(statearr_46955_48229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (3))){
var state_46922__$1 = state_46922;
var statearr_46956_48233 = state_46922__$1;
(statearr_46956_48233[(2)] = false);

(statearr_46956_48233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (12))){
var inst_46920 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46922__$1,inst_46920);
} else {
if((state_val_46923 === (2))){
var inst_46824 = (state_46922[(8)]);
var inst_46829 = inst_46824.cljs$lang$protocol_mask$partition0$;
var inst_46830 = (inst_46829 & (64));
var inst_46831 = inst_46824.cljs$core$ISeq$;
var inst_46832 = (cljs.core.PROTOCOL_SENTINEL === inst_46831);
var inst_46833 = ((inst_46830) || (inst_46832));
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46833)){
var statearr_46957_48246 = state_46922__$1;
(statearr_46957_48246[(1)] = (5));

} else {
var statearr_46958_48247 = state_46922__$1;
(statearr_46958_48247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (23))){
var inst_46881 = (state_46922[(14)]);
var inst_46887 = (inst_46881 == null);
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46887)){
var statearr_46959_48248 = state_46922__$1;
(statearr_46959_48248[(1)] = (26));

} else {
var statearr_46960_48249 = state_46922__$1;
(statearr_46960_48249[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (35))){
var inst_46907 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
if(cljs.core.truth_(inst_46907)){
var statearr_46961_48250 = state_46922__$1;
(statearr_46961_48250[(1)] = (36));

} else {
var statearr_46962_48251 = state_46922__$1;
(statearr_46962_48251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (19))){
var inst_46849 = (state_46922[(7)]);
var inst_46869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46849);
var state_46922__$1 = state_46922;
var statearr_46963_48252 = state_46922__$1;
(statearr_46963_48252[(2)] = inst_46869);

(statearr_46963_48252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (11))){
var inst_46849 = (state_46922[(7)]);
var inst_46853 = (inst_46849 == null);
var inst_46854 = cljs.core.not(inst_46853);
var state_46922__$1 = state_46922;
if(inst_46854){
var statearr_46964_48253 = state_46922__$1;
(statearr_46964_48253[(1)] = (13));

} else {
var statearr_46965_48254 = state_46922__$1;
(statearr_46965_48254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (9))){
var inst_46824 = (state_46922[(8)]);
var state_46922__$1 = state_46922;
var statearr_46966_48255 = state_46922__$1;
(statearr_46966_48255[(2)] = inst_46824);

(statearr_46966_48255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (5))){
var state_46922__$1 = state_46922;
var statearr_46967_48256 = state_46922__$1;
(statearr_46967_48256[(2)] = true);

(statearr_46967_48256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (14))){
var state_46922__$1 = state_46922;
var statearr_46968_48257 = state_46922__$1;
(statearr_46968_48257[(2)] = false);

(statearr_46968_48257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (26))){
var inst_46882 = (state_46922[(9)]);
var inst_46889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46882);
var state_46922__$1 = state_46922;
var statearr_46969_48258 = state_46922__$1;
(statearr_46969_48258[(2)] = inst_46889);

(statearr_46969_48258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (16))){
var state_46922__$1 = state_46922;
var statearr_46970_48259 = state_46922__$1;
(statearr_46970_48259[(2)] = true);

(statearr_46970_48259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (38))){
var inst_46912 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
var statearr_46971_48260 = state_46922__$1;
(statearr_46971_48260[(2)] = inst_46912);

(statearr_46971_48260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (30))){
var inst_46882 = (state_46922[(9)]);
var inst_46873 = (state_46922[(11)]);
var inst_46874 = (state_46922[(13)]);
var inst_46899 = cljs.core.empty_QMARK_(inst_46873);
var inst_46900 = (inst_46874.cljs$core$IFn$_invoke$arity$1 ? inst_46874.cljs$core$IFn$_invoke$arity$1(inst_46882) : inst_46874.call(null,inst_46882));
var inst_46901 = cljs.core.not(inst_46900);
var inst_46902 = ((inst_46899) && (inst_46901));
var state_46922__$1 = state_46922;
var statearr_46972_48267 = state_46922__$1;
(statearr_46972_48267[(2)] = inst_46902);

(statearr_46972_48267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (10))){
var inst_46824 = (state_46922[(8)]);
var inst_46845 = (state_46922[(2)]);
var inst_46846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46845,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46849 = inst_46824;
var state_46922__$1 = (function (){var statearr_46973 = state_46922;
(statearr_46973[(16)] = inst_46846);

(statearr_46973[(7)] = inst_46849);

(statearr_46973[(17)] = inst_46847);

(statearr_46973[(18)] = inst_46848);

return statearr_46973;
})();
var statearr_46974_48268 = state_46922__$1;
(statearr_46974_48268[(2)] = null);

(statearr_46974_48268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (18))){
var inst_46864 = (state_46922[(2)]);
var state_46922__$1 = state_46922;
var statearr_46975_48269 = state_46922__$1;
(statearr_46975_48269[(2)] = inst_46864);

(statearr_46975_48269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (37))){
var state_46922__$1 = state_46922;
var statearr_46976_48270 = state_46922__$1;
(statearr_46976_48270[(2)] = null);

(statearr_46976_48270[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46923 === (8))){
var inst_46824 = (state_46922[(8)]);
var inst_46842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46824);
var state_46922__$1 = state_46922;
var statearr_46977_48271 = state_46922__$1;
(statearr_46977_48271[(2)] = inst_46842);

(statearr_46977_48271[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__46026__auto__ = null;
var cljs$core$async$mix_$_state_machine__46026__auto____0 = (function (){
var statearr_46978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46978[(0)] = cljs$core$async$mix_$_state_machine__46026__auto__);

(statearr_46978[(1)] = (1));

return statearr_46978;
});
var cljs$core$async$mix_$_state_machine__46026__auto____1 = (function (state_46922){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_46922);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e46979){if((e46979 instanceof Object)){
var ex__46029__auto__ = e46979;
var statearr_46980_48272 = state_46922;
(statearr_46980_48272[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48279 = state_46922;
state_46922 = G__48279;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46026__auto__ = function(state_46922){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46026__auto____1.call(this,state_46922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46026__auto____0;
cljs$core$async$mix_$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46026__auto____1;
return cljs$core$async$mix_$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_46981 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_46981[(6)] = c__46126__auto___48184);

return statearr_46981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var G__46983 = arguments.length;
switch (G__46983) {
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
var G__46986 = arguments.length;
switch (G__46986) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46984_SHARP_){
if(cljs.core.truth_((p1__46984_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46984_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46984_SHARP_.call(null,topic)))){
return p1__46984_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46984_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46987 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46988){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46988 = meta46988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46989,meta46988__$1){
var self__ = this;
var _46989__$1 = this;
return (new cljs.core.async.t_cljs$core$async46987(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46988__$1));
}));

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46989){
var self__ = this;
var _46989__$1 = this;
return self__.meta46988;
}));

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46988","meta46988",1189792680,null)], null);
}));

(cljs.core.async.t_cljs$core$async46987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46987");

(cljs.core.async.t_cljs$core$async46987.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46987.
 */
cljs.core.async.__GT_t_cljs$core$async46987 = (function cljs$core$async$__GT_t_cljs$core$async46987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46988){
return (new cljs.core.async.t_cljs$core$async46987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46988));
});

}

return (new cljs.core.async.t_cljs$core$async46987(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46126__auto___48298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47061){
var state_val_47062 = (state_47061[(1)]);
if((state_val_47062 === (7))){
var inst_47057 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47063_48299 = state_47061__$1;
(statearr_47063_48299[(2)] = inst_47057);

(statearr_47063_48299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (20))){
var state_47061__$1 = state_47061;
var statearr_47064_48300 = state_47061__$1;
(statearr_47064_48300[(2)] = null);

(statearr_47064_48300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (1))){
var state_47061__$1 = state_47061;
var statearr_47065_48301 = state_47061__$1;
(statearr_47065_48301[(2)] = null);

(statearr_47065_48301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (24))){
var inst_47040 = (state_47061[(7)]);
var inst_47049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47040);
var state_47061__$1 = state_47061;
var statearr_47066_48302 = state_47061__$1;
(statearr_47066_48302[(2)] = inst_47049);

(statearr_47066_48302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (4))){
var inst_46992 = (state_47061[(8)]);
var inst_46992__$1 = (state_47061[(2)]);
var inst_46993 = (inst_46992__$1 == null);
var state_47061__$1 = (function (){var statearr_47067 = state_47061;
(statearr_47067[(8)] = inst_46992__$1);

return statearr_47067;
})();
if(cljs.core.truth_(inst_46993)){
var statearr_47068_48307 = state_47061__$1;
(statearr_47068_48307[(1)] = (5));

} else {
var statearr_47069_48313 = state_47061__$1;
(statearr_47069_48313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (15))){
var inst_47034 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47070_48314 = state_47061__$1;
(statearr_47070_48314[(2)] = inst_47034);

(statearr_47070_48314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (21))){
var inst_47054 = (state_47061[(2)]);
var state_47061__$1 = (function (){var statearr_47071 = state_47061;
(statearr_47071[(9)] = inst_47054);

return statearr_47071;
})();
var statearr_47072_48315 = state_47061__$1;
(statearr_47072_48315[(2)] = null);

(statearr_47072_48315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (13))){
var inst_47016 = (state_47061[(10)]);
var inst_47018 = cljs.core.chunked_seq_QMARK_(inst_47016);
var state_47061__$1 = state_47061;
if(inst_47018){
var statearr_47073_48317 = state_47061__$1;
(statearr_47073_48317[(1)] = (16));

} else {
var statearr_47074_48318 = state_47061__$1;
(statearr_47074_48318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (22))){
var inst_47046 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
if(cljs.core.truth_(inst_47046)){
var statearr_47075_48321 = state_47061__$1;
(statearr_47075_48321[(1)] = (23));

} else {
var statearr_47076_48323 = state_47061__$1;
(statearr_47076_48323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (6))){
var inst_47040 = (state_47061[(7)]);
var inst_47042 = (state_47061[(11)]);
var inst_46992 = (state_47061[(8)]);
var inst_47040__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46992) : topic_fn.call(null,inst_46992));
var inst_47041 = cljs.core.deref(mults);
var inst_47042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47041,inst_47040__$1);
var state_47061__$1 = (function (){var statearr_47077 = state_47061;
(statearr_47077[(7)] = inst_47040__$1);

(statearr_47077[(11)] = inst_47042__$1);

return statearr_47077;
})();
if(cljs.core.truth_(inst_47042__$1)){
var statearr_47078_48324 = state_47061__$1;
(statearr_47078_48324[(1)] = (19));

} else {
var statearr_47079_48325 = state_47061__$1;
(statearr_47079_48325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (25))){
var inst_47051 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47080_48326 = state_47061__$1;
(statearr_47080_48326[(2)] = inst_47051);

(statearr_47080_48326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (17))){
var inst_47016 = (state_47061[(10)]);
var inst_47025 = cljs.core.first(inst_47016);
var inst_47026 = cljs.core.async.muxch_STAR_(inst_47025);
var inst_47027 = cljs.core.async.close_BANG_(inst_47026);
var inst_47028 = cljs.core.next(inst_47016);
var inst_47002 = inst_47028;
var inst_47003 = null;
var inst_47004 = (0);
var inst_47005 = (0);
var state_47061__$1 = (function (){var statearr_47081 = state_47061;
(statearr_47081[(12)] = inst_47004);

(statearr_47081[(13)] = inst_47005);

(statearr_47081[(14)] = inst_47003);

(statearr_47081[(15)] = inst_47002);

(statearr_47081[(16)] = inst_47027);

return statearr_47081;
})();
var statearr_47082_48328 = state_47061__$1;
(statearr_47082_48328[(2)] = null);

(statearr_47082_48328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (3))){
var inst_47059 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47061__$1,inst_47059);
} else {
if((state_val_47062 === (12))){
var inst_47036 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47083_48329 = state_47061__$1;
(statearr_47083_48329[(2)] = inst_47036);

(statearr_47083_48329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (2))){
var state_47061__$1 = state_47061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47061__$1,(4),ch);
} else {
if((state_val_47062 === (23))){
var state_47061__$1 = state_47061;
var statearr_47084_48330 = state_47061__$1;
(statearr_47084_48330[(2)] = null);

(statearr_47084_48330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (19))){
var inst_47042 = (state_47061[(11)]);
var inst_46992 = (state_47061[(8)]);
var inst_47044 = cljs.core.async.muxch_STAR_(inst_47042);
var state_47061__$1 = state_47061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47061__$1,(22),inst_47044,inst_46992);
} else {
if((state_val_47062 === (11))){
var inst_47016 = (state_47061[(10)]);
var inst_47002 = (state_47061[(15)]);
var inst_47016__$1 = cljs.core.seq(inst_47002);
var state_47061__$1 = (function (){var statearr_47085 = state_47061;
(statearr_47085[(10)] = inst_47016__$1);

return statearr_47085;
})();
if(inst_47016__$1){
var statearr_47086_48331 = state_47061__$1;
(statearr_47086_48331[(1)] = (13));

} else {
var statearr_47087_48332 = state_47061__$1;
(statearr_47087_48332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (9))){
var inst_47038 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47088_48333 = state_47061__$1;
(statearr_47088_48333[(2)] = inst_47038);

(statearr_47088_48333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (5))){
var inst_46999 = cljs.core.deref(mults);
var inst_47000 = cljs.core.vals(inst_46999);
var inst_47001 = cljs.core.seq(inst_47000);
var inst_47002 = inst_47001;
var inst_47003 = null;
var inst_47004 = (0);
var inst_47005 = (0);
var state_47061__$1 = (function (){var statearr_47089 = state_47061;
(statearr_47089[(12)] = inst_47004);

(statearr_47089[(13)] = inst_47005);

(statearr_47089[(14)] = inst_47003);

(statearr_47089[(15)] = inst_47002);

return statearr_47089;
})();
var statearr_47090_48334 = state_47061__$1;
(statearr_47090_48334[(2)] = null);

(statearr_47090_48334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (14))){
var state_47061__$1 = state_47061;
var statearr_47094_48335 = state_47061__$1;
(statearr_47094_48335[(2)] = null);

(statearr_47094_48335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (16))){
var inst_47016 = (state_47061[(10)]);
var inst_47020 = cljs.core.chunk_first(inst_47016);
var inst_47021 = cljs.core.chunk_rest(inst_47016);
var inst_47022 = cljs.core.count(inst_47020);
var inst_47002 = inst_47021;
var inst_47003 = inst_47020;
var inst_47004 = inst_47022;
var inst_47005 = (0);
var state_47061__$1 = (function (){var statearr_47095 = state_47061;
(statearr_47095[(12)] = inst_47004);

(statearr_47095[(13)] = inst_47005);

(statearr_47095[(14)] = inst_47003);

(statearr_47095[(15)] = inst_47002);

return statearr_47095;
})();
var statearr_47096_48338 = state_47061__$1;
(statearr_47096_48338[(2)] = null);

(statearr_47096_48338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (10))){
var inst_47004 = (state_47061[(12)]);
var inst_47005 = (state_47061[(13)]);
var inst_47003 = (state_47061[(14)]);
var inst_47002 = (state_47061[(15)]);
var inst_47010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47003,inst_47005);
var inst_47011 = cljs.core.async.muxch_STAR_(inst_47010);
var inst_47012 = cljs.core.async.close_BANG_(inst_47011);
var inst_47013 = (inst_47005 + (1));
var tmp47091 = inst_47004;
var tmp47092 = inst_47003;
var tmp47093 = inst_47002;
var inst_47002__$1 = tmp47093;
var inst_47003__$1 = tmp47092;
var inst_47004__$1 = tmp47091;
var inst_47005__$1 = inst_47013;
var state_47061__$1 = (function (){var statearr_47097 = state_47061;
(statearr_47097[(12)] = inst_47004__$1);

(statearr_47097[(13)] = inst_47005__$1);

(statearr_47097[(14)] = inst_47003__$1);

(statearr_47097[(15)] = inst_47002__$1);

(statearr_47097[(17)] = inst_47012);

return statearr_47097;
})();
var statearr_47098_48340 = state_47061__$1;
(statearr_47098_48340[(2)] = null);

(statearr_47098_48340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (18))){
var inst_47031 = (state_47061[(2)]);
var state_47061__$1 = state_47061;
var statearr_47099_48341 = state_47061__$1;
(statearr_47099_48341[(2)] = inst_47031);

(statearr_47099_48341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47062 === (8))){
var inst_47004 = (state_47061[(12)]);
var inst_47005 = (state_47061[(13)]);
var inst_47007 = (inst_47005 < inst_47004);
var inst_47008 = inst_47007;
var state_47061__$1 = state_47061;
if(cljs.core.truth_(inst_47008)){
var statearr_47100_48342 = state_47061__$1;
(statearr_47100_48342[(1)] = (10));

} else {
var statearr_47101_48343 = state_47061__$1;
(statearr_47101_48343[(1)] = (11));

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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47102[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47102[(1)] = (1));

return statearr_47102;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47061){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47061);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47103){if((e47103 instanceof Object)){
var ex__46029__auto__ = e47103;
var statearr_47104_48345 = state_47061;
(statearr_47104_48345[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48346 = state_47061;
state_47061 = G__48346;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47105 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47105[(6)] = c__46126__auto___48298);

return statearr_47105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var G__47107 = arguments.length;
switch (G__47107) {
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
var G__47109 = arguments.length;
switch (G__47109) {
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
var G__47111 = arguments.length;
switch (G__47111) {
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
var c__46126__auto___48372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47150){
var state_val_47151 = (state_47150[(1)]);
if((state_val_47151 === (7))){
var state_47150__$1 = state_47150;
var statearr_47152_48373 = state_47150__$1;
(statearr_47152_48373[(2)] = null);

(statearr_47152_48373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (1))){
var state_47150__$1 = state_47150;
var statearr_47153_48375 = state_47150__$1;
(statearr_47153_48375[(2)] = null);

(statearr_47153_48375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (4))){
var inst_47114 = (state_47150[(7)]);
var inst_47116 = (inst_47114 < cnt);
var state_47150__$1 = state_47150;
if(cljs.core.truth_(inst_47116)){
var statearr_47154_48376 = state_47150__$1;
(statearr_47154_48376[(1)] = (6));

} else {
var statearr_47155_48378 = state_47150__$1;
(statearr_47155_48378[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (15))){
var inst_47146 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47156_48379 = state_47150__$1;
(statearr_47156_48379[(2)] = inst_47146);

(statearr_47156_48379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (13))){
var inst_47139 = cljs.core.async.close_BANG_(out);
var state_47150__$1 = state_47150;
var statearr_47157_48380 = state_47150__$1;
(statearr_47157_48380[(2)] = inst_47139);

(statearr_47157_48380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (6))){
var state_47150__$1 = state_47150;
var statearr_47158_48385 = state_47150__$1;
(statearr_47158_48385[(2)] = null);

(statearr_47158_48385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (3))){
var inst_47148 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47150__$1,inst_47148);
} else {
if((state_val_47151 === (12))){
var inst_47136 = (state_47150[(8)]);
var inst_47136__$1 = (state_47150[(2)]);
var inst_47137 = cljs.core.some(cljs.core.nil_QMARK_,inst_47136__$1);
var state_47150__$1 = (function (){var statearr_47159 = state_47150;
(statearr_47159[(8)] = inst_47136__$1);

return statearr_47159;
})();
if(cljs.core.truth_(inst_47137)){
var statearr_47160_48387 = state_47150__$1;
(statearr_47160_48387[(1)] = (13));

} else {
var statearr_47161_48388 = state_47150__$1;
(statearr_47161_48388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (2))){
var inst_47113 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47114 = (0);
var state_47150__$1 = (function (){var statearr_47162 = state_47150;
(statearr_47162[(7)] = inst_47114);

(statearr_47162[(9)] = inst_47113);

return statearr_47162;
})();
var statearr_47163_48390 = state_47150__$1;
(statearr_47163_48390[(2)] = null);

(statearr_47163_48390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (11))){
var inst_47114 = (state_47150[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47150,(10),Object,null,(9));
var inst_47123 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47114) : chs__$1.call(null,inst_47114));
var inst_47124 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47114) : done.call(null,inst_47114));
var inst_47125 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47123,inst_47124);
var state_47150__$1 = state_47150;
var statearr_47164_48392 = state_47150__$1;
(statearr_47164_48392[(2)] = inst_47125);


cljs.core.async.impl.ioc_helpers.process_exception(state_47150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (9))){
var inst_47114 = (state_47150[(7)]);
var inst_47127 = (state_47150[(2)]);
var inst_47128 = (inst_47114 + (1));
var inst_47114__$1 = inst_47128;
var state_47150__$1 = (function (){var statearr_47165 = state_47150;
(statearr_47165[(7)] = inst_47114__$1);

(statearr_47165[(10)] = inst_47127);

return statearr_47165;
})();
var statearr_47166_48402 = state_47150__$1;
(statearr_47166_48402[(2)] = null);

(statearr_47166_48402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (5))){
var inst_47134 = (state_47150[(2)]);
var state_47150__$1 = (function (){var statearr_47167 = state_47150;
(statearr_47167[(11)] = inst_47134);

return statearr_47167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47150__$1,(12),dchan);
} else {
if((state_val_47151 === (14))){
var inst_47136 = (state_47150[(8)]);
var inst_47141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47136);
var state_47150__$1 = state_47150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47150__$1,(16),out,inst_47141);
} else {
if((state_val_47151 === (16))){
var inst_47143 = (state_47150[(2)]);
var state_47150__$1 = (function (){var statearr_47168 = state_47150;
(statearr_47168[(12)] = inst_47143);

return statearr_47168;
})();
var statearr_47169_48404 = state_47150__$1;
(statearr_47169_48404[(2)] = null);

(statearr_47169_48404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (10))){
var inst_47118 = (state_47150[(2)]);
var inst_47119 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47150__$1 = (function (){var statearr_47170 = state_47150;
(statearr_47170[(13)] = inst_47118);

return statearr_47170;
})();
var statearr_47171_48409 = state_47150__$1;
(statearr_47171_48409[(2)] = inst_47119);


cljs.core.async.impl.ioc_helpers.process_exception(state_47150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (8))){
var inst_47132 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47172_48413 = state_47150__$1;
(statearr_47172_48413[(2)] = inst_47132);

(statearr_47172_48413[(1)] = (5));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47173[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47173[(1)] = (1));

return statearr_47173;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47150){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47150);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47174){if((e47174 instanceof Object)){
var ex__46029__auto__ = e47174;
var statearr_47175_48431 = state_47150;
(statearr_47175_48431[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48436 = state_47150;
state_47150 = G__48436;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47176 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47176[(6)] = c__46126__auto___48372);

return statearr_47176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var G__47179 = arguments.length;
switch (G__47179) {
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
var c__46126__auto___48445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47211){
var state_val_47212 = (state_47211[(1)]);
if((state_val_47212 === (7))){
var inst_47190 = (state_47211[(7)]);
var inst_47191 = (state_47211[(8)]);
var inst_47190__$1 = (state_47211[(2)]);
var inst_47191__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47190__$1,(0),null);
var inst_47192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47190__$1,(1),null);
var inst_47193 = (inst_47191__$1 == null);
var state_47211__$1 = (function (){var statearr_47213 = state_47211;
(statearr_47213[(7)] = inst_47190__$1);

(statearr_47213[(9)] = inst_47192);

(statearr_47213[(8)] = inst_47191__$1);

return statearr_47213;
})();
if(cljs.core.truth_(inst_47193)){
var statearr_47214_48450 = state_47211__$1;
(statearr_47214_48450[(1)] = (8));

} else {
var statearr_47215_48451 = state_47211__$1;
(statearr_47215_48451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (1))){
var inst_47180 = cljs.core.vec(chs);
var inst_47181 = inst_47180;
var state_47211__$1 = (function (){var statearr_47216 = state_47211;
(statearr_47216[(10)] = inst_47181);

return statearr_47216;
})();
var statearr_47217_48452 = state_47211__$1;
(statearr_47217_48452[(2)] = null);

(statearr_47217_48452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (4))){
var inst_47181 = (state_47211[(10)]);
var state_47211__$1 = state_47211;
return cljs.core.async.ioc_alts_BANG_(state_47211__$1,(7),inst_47181);
} else {
if((state_val_47212 === (6))){
var inst_47207 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47218_48453 = state_47211__$1;
(statearr_47218_48453[(2)] = inst_47207);

(statearr_47218_48453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (3))){
var inst_47209 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47211__$1,inst_47209);
} else {
if((state_val_47212 === (2))){
var inst_47181 = (state_47211[(10)]);
var inst_47183 = cljs.core.count(inst_47181);
var inst_47184 = (inst_47183 > (0));
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47184)){
var statearr_47220_48454 = state_47211__$1;
(statearr_47220_48454[(1)] = (4));

} else {
var statearr_47221_48455 = state_47211__$1;
(statearr_47221_48455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (11))){
var inst_47181 = (state_47211[(10)]);
var inst_47200 = (state_47211[(2)]);
var tmp47219 = inst_47181;
var inst_47181__$1 = tmp47219;
var state_47211__$1 = (function (){var statearr_47222 = state_47211;
(statearr_47222[(11)] = inst_47200);

(statearr_47222[(10)] = inst_47181__$1);

return statearr_47222;
})();
var statearr_47223_48456 = state_47211__$1;
(statearr_47223_48456[(2)] = null);

(statearr_47223_48456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (9))){
var inst_47191 = (state_47211[(8)]);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47211__$1,(11),out,inst_47191);
} else {
if((state_val_47212 === (5))){
var inst_47205 = cljs.core.async.close_BANG_(out);
var state_47211__$1 = state_47211;
var statearr_47224_48467 = state_47211__$1;
(statearr_47224_48467[(2)] = inst_47205);

(statearr_47224_48467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (10))){
var inst_47203 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47225_48468 = state_47211__$1;
(statearr_47225_48468[(2)] = inst_47203);

(statearr_47225_48468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (8))){
var inst_47181 = (state_47211[(10)]);
var inst_47190 = (state_47211[(7)]);
var inst_47192 = (state_47211[(9)]);
var inst_47191 = (state_47211[(8)]);
var inst_47195 = (function (){var cs = inst_47181;
var vec__47186 = inst_47190;
var v = inst_47191;
var c = inst_47192;
return (function (p1__47177_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47177_SHARP_);
});
})();
var inst_47196 = cljs.core.filterv(inst_47195,inst_47181);
var inst_47181__$1 = inst_47196;
var state_47211__$1 = (function (){var statearr_47226 = state_47211;
(statearr_47226[(10)] = inst_47181__$1);

return statearr_47226;
})();
var statearr_47227_48473 = state_47211__$1;
(statearr_47227_48473[(2)] = null);

(statearr_47227_48473[(1)] = (2));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47228 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47228[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47228[(1)] = (1));

return statearr_47228;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47211){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47211);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47229){if((e47229 instanceof Object)){
var ex__46029__auto__ = e47229;
var statearr_47230_48474 = state_47211;
(statearr_47230_48474[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48475 = state_47211;
state_47211 = G__48475;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47231 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47231[(6)] = c__46126__auto___48445);

return statearr_47231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
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
var G__47233 = arguments.length;
switch (G__47233) {
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
var c__46126__auto___48529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47257){
var state_val_47258 = (state_47257[(1)]);
if((state_val_47258 === (7))){
var inst_47239 = (state_47257[(7)]);
var inst_47239__$1 = (state_47257[(2)]);
var inst_47240 = (inst_47239__$1 == null);
var inst_47241 = cljs.core.not(inst_47240);
var state_47257__$1 = (function (){var statearr_47259 = state_47257;
(statearr_47259[(7)] = inst_47239__$1);

return statearr_47259;
})();
if(inst_47241){
var statearr_47260_48534 = state_47257__$1;
(statearr_47260_48534[(1)] = (8));

} else {
var statearr_47261_48540 = state_47257__$1;
(statearr_47261_48540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (1))){
var inst_47234 = (0);
var state_47257__$1 = (function (){var statearr_47262 = state_47257;
(statearr_47262[(8)] = inst_47234);

return statearr_47262;
})();
var statearr_47263_48552 = state_47257__$1;
(statearr_47263_48552[(2)] = null);

(statearr_47263_48552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (4))){
var state_47257__$1 = state_47257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47257__$1,(7),ch);
} else {
if((state_val_47258 === (6))){
var inst_47252 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
var statearr_47264_48556 = state_47257__$1;
(statearr_47264_48556[(2)] = inst_47252);

(statearr_47264_48556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (3))){
var inst_47254 = (state_47257[(2)]);
var inst_47255 = cljs.core.async.close_BANG_(out);
var state_47257__$1 = (function (){var statearr_47265 = state_47257;
(statearr_47265[(9)] = inst_47254);

return statearr_47265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47257__$1,inst_47255);
} else {
if((state_val_47258 === (2))){
var inst_47234 = (state_47257[(8)]);
var inst_47236 = (inst_47234 < n);
var state_47257__$1 = state_47257;
if(cljs.core.truth_(inst_47236)){
var statearr_47266_48566 = state_47257__$1;
(statearr_47266_48566[(1)] = (4));

} else {
var statearr_47267_48567 = state_47257__$1;
(statearr_47267_48567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (11))){
var inst_47234 = (state_47257[(8)]);
var inst_47244 = (state_47257[(2)]);
var inst_47245 = (inst_47234 + (1));
var inst_47234__$1 = inst_47245;
var state_47257__$1 = (function (){var statearr_47268 = state_47257;
(statearr_47268[(8)] = inst_47234__$1);

(statearr_47268[(10)] = inst_47244);

return statearr_47268;
})();
var statearr_47269_48576 = state_47257__$1;
(statearr_47269_48576[(2)] = null);

(statearr_47269_48576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (9))){
var state_47257__$1 = state_47257;
var statearr_47270_48580 = state_47257__$1;
(statearr_47270_48580[(2)] = null);

(statearr_47270_48580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (5))){
var state_47257__$1 = state_47257;
var statearr_47271_48581 = state_47257__$1;
(statearr_47271_48581[(2)] = null);

(statearr_47271_48581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (10))){
var inst_47249 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
var statearr_47272_48582 = state_47257__$1;
(statearr_47272_48582[(2)] = inst_47249);

(statearr_47272_48582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (8))){
var inst_47239 = (state_47257[(7)]);
var state_47257__$1 = state_47257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47257__$1,(11),out,inst_47239);
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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47273[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47273[(1)] = (1));

return statearr_47273;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47257){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47257);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47274){if((e47274 instanceof Object)){
var ex__46029__auto__ = e47274;
var statearr_47275_48586 = state_47257;
(statearr_47275_48586[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48587 = state_47257;
state_47257 = G__48587;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47276 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47276[(6)] = c__46126__auto___48529);

return statearr_47276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47278 = (function (f,ch,meta47279){
this.f = f;
this.ch = ch;
this.meta47279 = meta47279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47280,meta47279__$1){
var self__ = this;
var _47280__$1 = this;
return (new cljs.core.async.t_cljs$core$async47278(self__.f,self__.ch,meta47279__$1));
}));

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47280){
var self__ = this;
var _47280__$1 = this;
return self__.meta47279;
}));

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47281 = (function (f,ch,meta47279,_,fn1,meta47282){
this.f = f;
this.ch = ch;
this.meta47279 = meta47279;
this._ = _;
this.fn1 = fn1;
this.meta47282 = meta47282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47283,meta47282__$1){
var self__ = this;
var _47283__$1 = this;
return (new cljs.core.async.t_cljs$core$async47281(self__.f,self__.ch,self__.meta47279,self__._,self__.fn1,meta47282__$1));
}));

(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47283){
var self__ = this;
var _47283__$1 = this;
return self__.meta47282;
}));

(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47277_SHARP_){
var G__47284 = (((p1__47277_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47277_SHARP_) : self__.f.call(null,p1__47277_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47284) : f1.call(null,G__47284));
});
}));

(cljs.core.async.t_cljs$core$async47281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47279","meta47279",-125536516,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47278","cljs.core.async/t_cljs$core$async47278",1232034578,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47282","meta47282",473024201,null)], null);
}));

(cljs.core.async.t_cljs$core$async47281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47281");

(cljs.core.async.t_cljs$core$async47281.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47281.
 */
cljs.core.async.__GT_t_cljs$core$async47281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47281(f__$1,ch__$1,meta47279__$1,___$2,fn1__$1,meta47282){
return (new cljs.core.async.t_cljs$core$async47281(f__$1,ch__$1,meta47279__$1,___$2,fn1__$1,meta47282));
});

}

return (new cljs.core.async.t_cljs$core$async47281(self__.f,self__.ch,self__.meta47279,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47285 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47285) : self__.f.call(null,G__47285));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47279","meta47279",-125536516,null)], null);
}));

(cljs.core.async.t_cljs$core$async47278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47278");

(cljs.core.async.t_cljs$core$async47278.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47278.
 */
cljs.core.async.__GT_t_cljs$core$async47278 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47278(f__$1,ch__$1,meta47279){
return (new cljs.core.async.t_cljs$core$async47278(f__$1,ch__$1,meta47279));
});

}

return (new cljs.core.async.t_cljs$core$async47278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47286 = (function (f,ch,meta47287){
this.f = f;
this.ch = ch;
this.meta47287 = meta47287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47288,meta47287__$1){
var self__ = this;
var _47288__$1 = this;
return (new cljs.core.async.t_cljs$core$async47286(self__.f,self__.ch,meta47287__$1));
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47288){
var self__ = this;
var _47288__$1 = this;
return self__.meta47287;
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47287","meta47287",-732664641,null)], null);
}));

(cljs.core.async.t_cljs$core$async47286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47286");

(cljs.core.async.t_cljs$core$async47286.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47286.
 */
cljs.core.async.__GT_t_cljs$core$async47286 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47286(f__$1,ch__$1,meta47287){
return (new cljs.core.async.t_cljs$core$async47286(f__$1,ch__$1,meta47287));
});

}

return (new cljs.core.async.t_cljs$core$async47286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47289 = (function (p,ch,meta47290){
this.p = p;
this.ch = ch;
this.meta47290 = meta47290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47291,meta47290__$1){
var self__ = this;
var _47291__$1 = this;
return (new cljs.core.async.t_cljs$core$async47289(self__.p,self__.ch,meta47290__$1));
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47291){
var self__ = this;
var _47291__$1 = this;
return self__.meta47290;
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47290","meta47290",-1083668565,null)], null);
}));

(cljs.core.async.t_cljs$core$async47289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47289");

(cljs.core.async.t_cljs$core$async47289.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47289.
 */
cljs.core.async.__GT_t_cljs$core$async47289 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47289(p__$1,ch__$1,meta47290){
return (new cljs.core.async.t_cljs$core$async47289(p__$1,ch__$1,meta47290));
});

}

return (new cljs.core.async.t_cljs$core$async47289(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47293 = arguments.length;
switch (G__47293) {
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
var c__46126__auto___48676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47314){
var state_val_47315 = (state_47314[(1)]);
if((state_val_47315 === (7))){
var inst_47310 = (state_47314[(2)]);
var state_47314__$1 = state_47314;
var statearr_47316_48678 = state_47314__$1;
(statearr_47316_48678[(2)] = inst_47310);

(statearr_47316_48678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (1))){
var state_47314__$1 = state_47314;
var statearr_47317_48679 = state_47314__$1;
(statearr_47317_48679[(2)] = null);

(statearr_47317_48679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (4))){
var inst_47296 = (state_47314[(7)]);
var inst_47296__$1 = (state_47314[(2)]);
var inst_47297 = (inst_47296__$1 == null);
var state_47314__$1 = (function (){var statearr_47318 = state_47314;
(statearr_47318[(7)] = inst_47296__$1);

return statearr_47318;
})();
if(cljs.core.truth_(inst_47297)){
var statearr_47319_48680 = state_47314__$1;
(statearr_47319_48680[(1)] = (5));

} else {
var statearr_47320_48681 = state_47314__$1;
(statearr_47320_48681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (6))){
var inst_47296 = (state_47314[(7)]);
var inst_47301 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47296) : p.call(null,inst_47296));
var state_47314__$1 = state_47314;
if(cljs.core.truth_(inst_47301)){
var statearr_47321_48682 = state_47314__$1;
(statearr_47321_48682[(1)] = (8));

} else {
var statearr_47322_48683 = state_47314__$1;
(statearr_47322_48683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (3))){
var inst_47312 = (state_47314[(2)]);
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47314__$1,inst_47312);
} else {
if((state_val_47315 === (2))){
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47314__$1,(4),ch);
} else {
if((state_val_47315 === (11))){
var inst_47304 = (state_47314[(2)]);
var state_47314__$1 = state_47314;
var statearr_47323_48684 = state_47314__$1;
(statearr_47323_48684[(2)] = inst_47304);

(statearr_47323_48684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (9))){
var state_47314__$1 = state_47314;
var statearr_47324_48689 = state_47314__$1;
(statearr_47324_48689[(2)] = null);

(statearr_47324_48689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (5))){
var inst_47299 = cljs.core.async.close_BANG_(out);
var state_47314__$1 = state_47314;
var statearr_47325_48690 = state_47314__$1;
(statearr_47325_48690[(2)] = inst_47299);

(statearr_47325_48690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (10))){
var inst_47307 = (state_47314[(2)]);
var state_47314__$1 = (function (){var statearr_47326 = state_47314;
(statearr_47326[(8)] = inst_47307);

return statearr_47326;
})();
var statearr_47327_48699 = state_47314__$1;
(statearr_47327_48699[(2)] = null);

(statearr_47327_48699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (8))){
var inst_47296 = (state_47314[(7)]);
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47314__$1,(11),out,inst_47296);
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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47328 = [null,null,null,null,null,null,null,null,null];
(statearr_47328[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47328[(1)] = (1));

return statearr_47328;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47314){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47314);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47329){if((e47329 instanceof Object)){
var ex__46029__auto__ = e47329;
var statearr_47330_48702 = state_47314;
(statearr_47330_48702[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48703 = state_47314;
state_47314 = G__48703;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47331 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47331[(6)] = c__46126__auto___48676);

return statearr_47331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47333 = arguments.length;
switch (G__47333) {
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
var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47395){
var state_val_47396 = (state_47395[(1)]);
if((state_val_47396 === (7))){
var inst_47391 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
var statearr_47397_48705 = state_47395__$1;
(statearr_47397_48705[(2)] = inst_47391);

(statearr_47397_48705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (20))){
var inst_47361 = (state_47395[(7)]);
var inst_47372 = (state_47395[(2)]);
var inst_47373 = cljs.core.next(inst_47361);
var inst_47347 = inst_47373;
var inst_47348 = null;
var inst_47349 = (0);
var inst_47350 = (0);
var state_47395__$1 = (function (){var statearr_47398 = state_47395;
(statearr_47398[(8)] = inst_47372);

(statearr_47398[(9)] = inst_47350);

(statearr_47398[(10)] = inst_47349);

(statearr_47398[(11)] = inst_47347);

(statearr_47398[(12)] = inst_47348);

return statearr_47398;
})();
var statearr_47399_48709 = state_47395__$1;
(statearr_47399_48709[(2)] = null);

(statearr_47399_48709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (1))){
var state_47395__$1 = state_47395;
var statearr_47400_48714 = state_47395__$1;
(statearr_47400_48714[(2)] = null);

(statearr_47400_48714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (4))){
var inst_47336 = (state_47395[(13)]);
var inst_47336__$1 = (state_47395[(2)]);
var inst_47337 = (inst_47336__$1 == null);
var state_47395__$1 = (function (){var statearr_47401 = state_47395;
(statearr_47401[(13)] = inst_47336__$1);

return statearr_47401;
})();
if(cljs.core.truth_(inst_47337)){
var statearr_47402_48715 = state_47395__$1;
(statearr_47402_48715[(1)] = (5));

} else {
var statearr_47403_48716 = state_47395__$1;
(statearr_47403_48716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (15))){
var state_47395__$1 = state_47395;
var statearr_47407_48717 = state_47395__$1;
(statearr_47407_48717[(2)] = null);

(statearr_47407_48717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (21))){
var state_47395__$1 = state_47395;
var statearr_47408_48718 = state_47395__$1;
(statearr_47408_48718[(2)] = null);

(statearr_47408_48718[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (13))){
var inst_47350 = (state_47395[(9)]);
var inst_47349 = (state_47395[(10)]);
var inst_47347 = (state_47395[(11)]);
var inst_47348 = (state_47395[(12)]);
var inst_47357 = (state_47395[(2)]);
var inst_47358 = (inst_47350 + (1));
var tmp47404 = inst_47349;
var tmp47405 = inst_47347;
var tmp47406 = inst_47348;
var inst_47347__$1 = tmp47405;
var inst_47348__$1 = tmp47406;
var inst_47349__$1 = tmp47404;
var inst_47350__$1 = inst_47358;
var state_47395__$1 = (function (){var statearr_47409 = state_47395;
(statearr_47409[(9)] = inst_47350__$1);

(statearr_47409[(10)] = inst_47349__$1);

(statearr_47409[(11)] = inst_47347__$1);

(statearr_47409[(12)] = inst_47348__$1);

(statearr_47409[(14)] = inst_47357);

return statearr_47409;
})();
var statearr_47410_48719 = state_47395__$1;
(statearr_47410_48719[(2)] = null);

(statearr_47410_48719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (22))){
var state_47395__$1 = state_47395;
var statearr_47411_48721 = state_47395__$1;
(statearr_47411_48721[(2)] = null);

(statearr_47411_48721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (6))){
var inst_47336 = (state_47395[(13)]);
var inst_47345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47336) : f.call(null,inst_47336));
var inst_47346 = cljs.core.seq(inst_47345);
var inst_47347 = inst_47346;
var inst_47348 = null;
var inst_47349 = (0);
var inst_47350 = (0);
var state_47395__$1 = (function (){var statearr_47412 = state_47395;
(statearr_47412[(9)] = inst_47350);

(statearr_47412[(10)] = inst_47349);

(statearr_47412[(11)] = inst_47347);

(statearr_47412[(12)] = inst_47348);

return statearr_47412;
})();
var statearr_47413_48722 = state_47395__$1;
(statearr_47413_48722[(2)] = null);

(statearr_47413_48722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (17))){
var inst_47361 = (state_47395[(7)]);
var inst_47365 = cljs.core.chunk_first(inst_47361);
var inst_47366 = cljs.core.chunk_rest(inst_47361);
var inst_47367 = cljs.core.count(inst_47365);
var inst_47347 = inst_47366;
var inst_47348 = inst_47365;
var inst_47349 = inst_47367;
var inst_47350 = (0);
var state_47395__$1 = (function (){var statearr_47414 = state_47395;
(statearr_47414[(9)] = inst_47350);

(statearr_47414[(10)] = inst_47349);

(statearr_47414[(11)] = inst_47347);

(statearr_47414[(12)] = inst_47348);

return statearr_47414;
})();
var statearr_47415_48724 = state_47395__$1;
(statearr_47415_48724[(2)] = null);

(statearr_47415_48724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (3))){
var inst_47393 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47395__$1,inst_47393);
} else {
if((state_val_47396 === (12))){
var inst_47381 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
var statearr_47416_48726 = state_47395__$1;
(statearr_47416_48726[(2)] = inst_47381);

(statearr_47416_48726[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (2))){
var state_47395__$1 = state_47395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47395__$1,(4),in$);
} else {
if((state_val_47396 === (23))){
var inst_47389 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
var statearr_47417_48727 = state_47395__$1;
(statearr_47417_48727[(2)] = inst_47389);

(statearr_47417_48727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (19))){
var inst_47376 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
var statearr_47418_48728 = state_47395__$1;
(statearr_47418_48728[(2)] = inst_47376);

(statearr_47418_48728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (11))){
var inst_47347 = (state_47395[(11)]);
var inst_47361 = (state_47395[(7)]);
var inst_47361__$1 = cljs.core.seq(inst_47347);
var state_47395__$1 = (function (){var statearr_47419 = state_47395;
(statearr_47419[(7)] = inst_47361__$1);

return statearr_47419;
})();
if(inst_47361__$1){
var statearr_47420_48729 = state_47395__$1;
(statearr_47420_48729[(1)] = (14));

} else {
var statearr_47421_48730 = state_47395__$1;
(statearr_47421_48730[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (9))){
var inst_47383 = (state_47395[(2)]);
var inst_47384 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47395__$1 = (function (){var statearr_47422 = state_47395;
(statearr_47422[(15)] = inst_47383);

return statearr_47422;
})();
if(cljs.core.truth_(inst_47384)){
var statearr_47423_48731 = state_47395__$1;
(statearr_47423_48731[(1)] = (21));

} else {
var statearr_47424_48732 = state_47395__$1;
(statearr_47424_48732[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (5))){
var inst_47339 = cljs.core.async.close_BANG_(out);
var state_47395__$1 = state_47395;
var statearr_47425_48733 = state_47395__$1;
(statearr_47425_48733[(2)] = inst_47339);

(statearr_47425_48733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (14))){
var inst_47361 = (state_47395[(7)]);
var inst_47363 = cljs.core.chunked_seq_QMARK_(inst_47361);
var state_47395__$1 = state_47395;
if(inst_47363){
var statearr_47426_48738 = state_47395__$1;
(statearr_47426_48738[(1)] = (17));

} else {
var statearr_47427_48739 = state_47395__$1;
(statearr_47427_48739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (16))){
var inst_47379 = (state_47395[(2)]);
var state_47395__$1 = state_47395;
var statearr_47428_48741 = state_47395__$1;
(statearr_47428_48741[(2)] = inst_47379);

(statearr_47428_48741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47396 === (10))){
var inst_47350 = (state_47395[(9)]);
var inst_47348 = (state_47395[(12)]);
var inst_47355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47348,inst_47350);
var state_47395__$1 = state_47395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47395__$1,(13),out,inst_47355);
} else {
if((state_val_47396 === (18))){
var inst_47361 = (state_47395[(7)]);
var inst_47370 = cljs.core.first(inst_47361);
var state_47395__$1 = state_47395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47395__$1,(20),out,inst_47370);
} else {
if((state_val_47396 === (8))){
var inst_47350 = (state_47395[(9)]);
var inst_47349 = (state_47395[(10)]);
var inst_47352 = (inst_47350 < inst_47349);
var inst_47353 = inst_47352;
var state_47395__$1 = state_47395;
if(cljs.core.truth_(inst_47353)){
var statearr_47429_48743 = state_47395__$1;
(statearr_47429_48743[(1)] = (10));

} else {
var statearr_47430_48744 = state_47395__$1;
(statearr_47430_48744[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____0 = (function (){
var statearr_47431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47431[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__);

(statearr_47431[(1)] = (1));

return statearr_47431;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____1 = (function (state_47395){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47395);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47432){if((e47432 instanceof Object)){
var ex__46029__auto__ = e47432;
var statearr_47433_48745 = state_47395;
(statearr_47433_48745[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48746 = state_47395;
state_47395 = G__48746;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__ = function(state_47395){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____1.call(this,state_47395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46026__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47434 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47434[(6)] = c__46126__auto__);

return statearr_47434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47436 = arguments.length;
switch (G__47436) {
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
var G__47438 = arguments.length;
switch (G__47438) {
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
var G__47440 = arguments.length;
switch (G__47440) {
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
var c__46126__auto___48754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47464){
var state_val_47465 = (state_47464[(1)]);
if((state_val_47465 === (7))){
var inst_47459 = (state_47464[(2)]);
var state_47464__$1 = state_47464;
var statearr_47466_48756 = state_47464__$1;
(statearr_47466_48756[(2)] = inst_47459);

(statearr_47466_48756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (1))){
var inst_47441 = null;
var state_47464__$1 = (function (){var statearr_47467 = state_47464;
(statearr_47467[(7)] = inst_47441);

return statearr_47467;
})();
var statearr_47468_48758 = state_47464__$1;
(statearr_47468_48758[(2)] = null);

(statearr_47468_48758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (4))){
var inst_47444 = (state_47464[(8)]);
var inst_47444__$1 = (state_47464[(2)]);
var inst_47445 = (inst_47444__$1 == null);
var inst_47446 = cljs.core.not(inst_47445);
var state_47464__$1 = (function (){var statearr_47469 = state_47464;
(statearr_47469[(8)] = inst_47444__$1);

return statearr_47469;
})();
if(inst_47446){
var statearr_47470_48759 = state_47464__$1;
(statearr_47470_48759[(1)] = (5));

} else {
var statearr_47471_48767 = state_47464__$1;
(statearr_47471_48767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (6))){
var state_47464__$1 = state_47464;
var statearr_47472_48768 = state_47464__$1;
(statearr_47472_48768[(2)] = null);

(statearr_47472_48768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (3))){
var inst_47461 = (state_47464[(2)]);
var inst_47462 = cljs.core.async.close_BANG_(out);
var state_47464__$1 = (function (){var statearr_47473 = state_47464;
(statearr_47473[(9)] = inst_47461);

return statearr_47473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47464__$1,inst_47462);
} else {
if((state_val_47465 === (2))){
var state_47464__$1 = state_47464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47464__$1,(4),ch);
} else {
if((state_val_47465 === (11))){
var inst_47444 = (state_47464[(8)]);
var inst_47453 = (state_47464[(2)]);
var inst_47441 = inst_47444;
var state_47464__$1 = (function (){var statearr_47474 = state_47464;
(statearr_47474[(7)] = inst_47441);

(statearr_47474[(10)] = inst_47453);

return statearr_47474;
})();
var statearr_47475_48773 = state_47464__$1;
(statearr_47475_48773[(2)] = null);

(statearr_47475_48773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (9))){
var inst_47444 = (state_47464[(8)]);
var state_47464__$1 = state_47464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47464__$1,(11),out,inst_47444);
} else {
if((state_val_47465 === (5))){
var inst_47444 = (state_47464[(8)]);
var inst_47441 = (state_47464[(7)]);
var inst_47448 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47444,inst_47441);
var state_47464__$1 = state_47464;
if(inst_47448){
var statearr_47477_48776 = state_47464__$1;
(statearr_47477_48776[(1)] = (8));

} else {
var statearr_47478_48777 = state_47464__$1;
(statearr_47478_48777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (10))){
var inst_47456 = (state_47464[(2)]);
var state_47464__$1 = state_47464;
var statearr_47479_48778 = state_47464__$1;
(statearr_47479_48778[(2)] = inst_47456);

(statearr_47479_48778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47465 === (8))){
var inst_47441 = (state_47464[(7)]);
var tmp47476 = inst_47441;
var inst_47441__$1 = tmp47476;
var state_47464__$1 = (function (){var statearr_47480 = state_47464;
(statearr_47480[(7)] = inst_47441__$1);

return statearr_47480;
})();
var statearr_47481_48779 = state_47464__$1;
(statearr_47481_48779[(2)] = null);

(statearr_47481_48779[(1)] = (2));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47482[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47482[(1)] = (1));

return statearr_47482;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47464){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47464);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47483){if((e47483 instanceof Object)){
var ex__46029__auto__ = e47483;
var statearr_47484_48781 = state_47464;
(statearr_47484_48781[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48785 = state_47464;
state_47464 = G__48785;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47485 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47485[(6)] = c__46126__auto___48754);

return statearr_47485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47487 = arguments.length;
switch (G__47487) {
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
var c__46126__auto___48788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47525){
var state_val_47526 = (state_47525[(1)]);
if((state_val_47526 === (7))){
var inst_47521 = (state_47525[(2)]);
var state_47525__$1 = state_47525;
var statearr_47527_48796 = state_47525__$1;
(statearr_47527_48796[(2)] = inst_47521);

(statearr_47527_48796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (1))){
var inst_47488 = (new Array(n));
var inst_47489 = inst_47488;
var inst_47490 = (0);
var state_47525__$1 = (function (){var statearr_47528 = state_47525;
(statearr_47528[(7)] = inst_47489);

(statearr_47528[(8)] = inst_47490);

return statearr_47528;
})();
var statearr_47529_48801 = state_47525__$1;
(statearr_47529_48801[(2)] = null);

(statearr_47529_48801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (4))){
var inst_47493 = (state_47525[(9)]);
var inst_47493__$1 = (state_47525[(2)]);
var inst_47494 = (inst_47493__$1 == null);
var inst_47495 = cljs.core.not(inst_47494);
var state_47525__$1 = (function (){var statearr_47530 = state_47525;
(statearr_47530[(9)] = inst_47493__$1);

return statearr_47530;
})();
if(inst_47495){
var statearr_47531_48812 = state_47525__$1;
(statearr_47531_48812[(1)] = (5));

} else {
var statearr_47532_48816 = state_47525__$1;
(statearr_47532_48816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (15))){
var inst_47515 = (state_47525[(2)]);
var state_47525__$1 = state_47525;
var statearr_47533_48817 = state_47525__$1;
(statearr_47533_48817[(2)] = inst_47515);

(statearr_47533_48817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (13))){
var state_47525__$1 = state_47525;
var statearr_47534_48822 = state_47525__$1;
(statearr_47534_48822[(2)] = null);

(statearr_47534_48822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (6))){
var inst_47490 = (state_47525[(8)]);
var inst_47511 = (inst_47490 > (0));
var state_47525__$1 = state_47525;
if(cljs.core.truth_(inst_47511)){
var statearr_47535_48823 = state_47525__$1;
(statearr_47535_48823[(1)] = (12));

} else {
var statearr_47536_48824 = state_47525__$1;
(statearr_47536_48824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (3))){
var inst_47523 = (state_47525[(2)]);
var state_47525__$1 = state_47525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47525__$1,inst_47523);
} else {
if((state_val_47526 === (12))){
var inst_47489 = (state_47525[(7)]);
var inst_47513 = cljs.core.vec(inst_47489);
var state_47525__$1 = state_47525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47525__$1,(15),out,inst_47513);
} else {
if((state_val_47526 === (2))){
var state_47525__$1 = state_47525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47525__$1,(4),ch);
} else {
if((state_val_47526 === (11))){
var inst_47505 = (state_47525[(2)]);
var inst_47506 = (new Array(n));
var inst_47489 = inst_47506;
var inst_47490 = (0);
var state_47525__$1 = (function (){var statearr_47537 = state_47525;
(statearr_47537[(7)] = inst_47489);

(statearr_47537[(8)] = inst_47490);

(statearr_47537[(10)] = inst_47505);

return statearr_47537;
})();
var statearr_47538_48832 = state_47525__$1;
(statearr_47538_48832[(2)] = null);

(statearr_47538_48832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (9))){
var inst_47489 = (state_47525[(7)]);
var inst_47503 = cljs.core.vec(inst_47489);
var state_47525__$1 = state_47525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47525__$1,(11),out,inst_47503);
} else {
if((state_val_47526 === (5))){
var inst_47489 = (state_47525[(7)]);
var inst_47490 = (state_47525[(8)]);
var inst_47498 = (state_47525[(11)]);
var inst_47493 = (state_47525[(9)]);
var inst_47497 = (inst_47489[inst_47490] = inst_47493);
var inst_47498__$1 = (inst_47490 + (1));
var inst_47499 = (inst_47498__$1 < n);
var state_47525__$1 = (function (){var statearr_47539 = state_47525;
(statearr_47539[(11)] = inst_47498__$1);

(statearr_47539[(12)] = inst_47497);

return statearr_47539;
})();
if(cljs.core.truth_(inst_47499)){
var statearr_47540_48847 = state_47525__$1;
(statearr_47540_48847[(1)] = (8));

} else {
var statearr_47541_48849 = state_47525__$1;
(statearr_47541_48849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (14))){
var inst_47518 = (state_47525[(2)]);
var inst_47519 = cljs.core.async.close_BANG_(out);
var state_47525__$1 = (function (){var statearr_47543 = state_47525;
(statearr_47543[(13)] = inst_47518);

return statearr_47543;
})();
var statearr_47544_48860 = state_47525__$1;
(statearr_47544_48860[(2)] = inst_47519);

(statearr_47544_48860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (10))){
var inst_47509 = (state_47525[(2)]);
var state_47525__$1 = state_47525;
var statearr_47545_48869 = state_47525__$1;
(statearr_47545_48869[(2)] = inst_47509);

(statearr_47545_48869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47526 === (8))){
var inst_47489 = (state_47525[(7)]);
var inst_47498 = (state_47525[(11)]);
var tmp47542 = inst_47489;
var inst_47489__$1 = tmp47542;
var inst_47490 = inst_47498;
var state_47525__$1 = (function (){var statearr_47546 = state_47525;
(statearr_47546[(7)] = inst_47489__$1);

(statearr_47546[(8)] = inst_47490);

return statearr_47546;
})();
var statearr_47547_48882 = state_47525__$1;
(statearr_47547_48882[(2)] = null);

(statearr_47547_48882[(1)] = (2));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47548[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47548[(1)] = (1));

return statearr_47548;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47525){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47525);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47549){if((e47549 instanceof Object)){
var ex__46029__auto__ = e47549;
var statearr_47550_48893 = state_47525;
(statearr_47550_48893[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48899 = state_47525;
state_47525 = G__48899;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47551 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47551[(6)] = c__46126__auto___48788);

return statearr_47551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47553 = arguments.length;
switch (G__47553) {
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
var c__46126__auto___48925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_47595){
var state_val_47596 = (state_47595[(1)]);
if((state_val_47596 === (7))){
var inst_47591 = (state_47595[(2)]);
var state_47595__$1 = state_47595;
var statearr_47597_48934 = state_47595__$1;
(statearr_47597_48934[(2)] = inst_47591);

(statearr_47597_48934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (1))){
var inst_47554 = [];
var inst_47555 = inst_47554;
var inst_47556 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47595__$1 = (function (){var statearr_47598 = state_47595;
(statearr_47598[(7)] = inst_47555);

(statearr_47598[(8)] = inst_47556);

return statearr_47598;
})();
var statearr_47599_48938 = state_47595__$1;
(statearr_47599_48938[(2)] = null);

(statearr_47599_48938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (4))){
var inst_47559 = (state_47595[(9)]);
var inst_47559__$1 = (state_47595[(2)]);
var inst_47560 = (inst_47559__$1 == null);
var inst_47561 = cljs.core.not(inst_47560);
var state_47595__$1 = (function (){var statearr_47600 = state_47595;
(statearr_47600[(9)] = inst_47559__$1);

return statearr_47600;
})();
if(inst_47561){
var statearr_47601_48939 = state_47595__$1;
(statearr_47601_48939[(1)] = (5));

} else {
var statearr_47602_48940 = state_47595__$1;
(statearr_47602_48940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (15))){
var inst_47585 = (state_47595[(2)]);
var state_47595__$1 = state_47595;
var statearr_47603_48948 = state_47595__$1;
(statearr_47603_48948[(2)] = inst_47585);

(statearr_47603_48948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (13))){
var state_47595__$1 = state_47595;
var statearr_47604_48952 = state_47595__$1;
(statearr_47604_48952[(2)] = null);

(statearr_47604_48952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (6))){
var inst_47555 = (state_47595[(7)]);
var inst_47580 = inst_47555.length;
var inst_47581 = (inst_47580 > (0));
var state_47595__$1 = state_47595;
if(cljs.core.truth_(inst_47581)){
var statearr_47605_48953 = state_47595__$1;
(statearr_47605_48953[(1)] = (12));

} else {
var statearr_47606_48954 = state_47595__$1;
(statearr_47606_48954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (3))){
var inst_47593 = (state_47595[(2)]);
var state_47595__$1 = state_47595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47595__$1,inst_47593);
} else {
if((state_val_47596 === (12))){
var inst_47555 = (state_47595[(7)]);
var inst_47583 = cljs.core.vec(inst_47555);
var state_47595__$1 = state_47595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47595__$1,(15),out,inst_47583);
} else {
if((state_val_47596 === (2))){
var state_47595__$1 = state_47595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47595__$1,(4),ch);
} else {
if((state_val_47596 === (11))){
var inst_47559 = (state_47595[(9)]);
var inst_47563 = (state_47595[(10)]);
var inst_47573 = (state_47595[(2)]);
var inst_47574 = [];
var inst_47575 = inst_47574.push(inst_47559);
var inst_47555 = inst_47574;
var inst_47556 = inst_47563;
var state_47595__$1 = (function (){var statearr_47607 = state_47595;
(statearr_47607[(7)] = inst_47555);

(statearr_47607[(11)] = inst_47573);

(statearr_47607[(8)] = inst_47556);

(statearr_47607[(12)] = inst_47575);

return statearr_47607;
})();
var statearr_47608_48964 = state_47595__$1;
(statearr_47608_48964[(2)] = null);

(statearr_47608_48964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (9))){
var inst_47555 = (state_47595[(7)]);
var inst_47571 = cljs.core.vec(inst_47555);
var state_47595__$1 = state_47595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47595__$1,(11),out,inst_47571);
} else {
if((state_val_47596 === (5))){
var inst_47556 = (state_47595[(8)]);
var inst_47559 = (state_47595[(9)]);
var inst_47563 = (state_47595[(10)]);
var inst_47563__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47559) : f.call(null,inst_47559));
var inst_47564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47563__$1,inst_47556);
var inst_47565 = cljs.core.keyword_identical_QMARK_(inst_47556,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47566 = ((inst_47564) || (inst_47565));
var state_47595__$1 = (function (){var statearr_47609 = state_47595;
(statearr_47609[(10)] = inst_47563__$1);

return statearr_47609;
})();
if(cljs.core.truth_(inst_47566)){
var statearr_47610_48965 = state_47595__$1;
(statearr_47610_48965[(1)] = (8));

} else {
var statearr_47611_48966 = state_47595__$1;
(statearr_47611_48966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (14))){
var inst_47588 = (state_47595[(2)]);
var inst_47589 = cljs.core.async.close_BANG_(out);
var state_47595__$1 = (function (){var statearr_47613 = state_47595;
(statearr_47613[(13)] = inst_47588);

return statearr_47613;
})();
var statearr_47614_48967 = state_47595__$1;
(statearr_47614_48967[(2)] = inst_47589);

(statearr_47614_48967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (10))){
var inst_47578 = (state_47595[(2)]);
var state_47595__$1 = state_47595;
var statearr_47615_48975 = state_47595__$1;
(statearr_47615_48975[(2)] = inst_47578);

(statearr_47615_48975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47596 === (8))){
var inst_47555 = (state_47595[(7)]);
var inst_47559 = (state_47595[(9)]);
var inst_47563 = (state_47595[(10)]);
var inst_47568 = inst_47555.push(inst_47559);
var tmp47612 = inst_47555;
var inst_47555__$1 = tmp47612;
var inst_47556 = inst_47563;
var state_47595__$1 = (function (){var statearr_47616 = state_47595;
(statearr_47616[(7)] = inst_47555__$1);

(statearr_47616[(8)] = inst_47556);

(statearr_47616[(14)] = inst_47568);

return statearr_47616;
})();
var statearr_47617_48976 = state_47595__$1;
(statearr_47617_48976[(2)] = null);

(statearr_47617_48976[(1)] = (2));


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
var cljs$core$async$state_machine__46026__auto__ = null;
var cljs$core$async$state_machine__46026__auto____0 = (function (){
var statearr_47618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47618[(0)] = cljs$core$async$state_machine__46026__auto__);

(statearr_47618[(1)] = (1));

return statearr_47618;
});
var cljs$core$async$state_machine__46026__auto____1 = (function (state_47595){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_47595);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e47619){if((e47619 instanceof Object)){
var ex__46029__auto__ = e47619;
var statearr_47620_48979 = state_47595;
(statearr_47620_48979[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48980 = state_47595;
state_47595 = G__48980;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
cljs$core$async$state_machine__46026__auto__ = function(state_47595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46026__auto____1.call(this,state_47595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46026__auto____0;
cljs$core$async$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46026__auto____1;
return cljs$core$async$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_47621 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_47621[(6)] = c__46126__auto___48925);

return statearr_47621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
