goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16831 = (function (f,blockable,meta16832){
this.f = f;
this.blockable = blockable;
this.meta16832 = meta16832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16833,meta16832__$1){
var self__ = this;
var _16833__$1 = this;
return (new cljs.core.async.t_cljs$core$async16831(self__.f,self__.blockable,meta16832__$1));
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16833){
var self__ = this;
var _16833__$1 = this;
return self__.meta16832;
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16832","meta16832",325984527,null)], null);
}));

(cljs.core.async.t_cljs$core$async16831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16831");

(cljs.core.async.t_cljs$core$async16831.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16831.
 */
cljs.core.async.__GT_t_cljs$core$async16831 = (function cljs$core$async$__GT_t_cljs$core$async16831(f,blockable,meta16832){
return (new cljs.core.async.t_cljs$core$async16831(f,blockable,meta16832));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16830 = arguments.length;
switch (G__16830) {
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
return (new cljs.core.async.t_cljs$core$async16831(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16836 = arguments.length;
switch (G__16836) {
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
var G__16838 = arguments.length;
switch (G__16838) {
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
var G__16840 = arguments.length;
switch (G__16840) {
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
var val_18323 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18323) : fn1.call(null,val_18323));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18323) : fn1.call(null,val_18323));
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
var G__16848 = arguments.length;
switch (G__16848) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___18325 = n;
var x_18326 = (0);
while(true){
if((x_18326 < n__5636__auto___18325)){
(a[x_18326] = x_18326);

var G__18327 = (x_18326 + (1));
x_18326 = G__18327;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16869 = (function (flag,meta16870){
this.flag = flag;
this.meta16870 = meta16870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16871,meta16870__$1){
var self__ = this;
var _16871__$1 = this;
return (new cljs.core.async.t_cljs$core$async16869(self__.flag,meta16870__$1));
}));

(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16871){
var self__ = this;
var _16871__$1 = this;
return self__.meta16870;
}));

(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16870","meta16870",-1520529264,null)], null);
}));

(cljs.core.async.t_cljs$core$async16869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16869");

(cljs.core.async.t_cljs$core$async16869.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16869.
 */
cljs.core.async.__GT_t_cljs$core$async16869 = (function cljs$core$async$__GT_t_cljs$core$async16869(flag,meta16870){
return (new cljs.core.async.t_cljs$core$async16869(flag,meta16870));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16869(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16884 = (function (flag,cb,meta16885){
this.flag = flag;
this.cb = cb;
this.meta16885 = meta16885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16886,meta16885__$1){
var self__ = this;
var _16886__$1 = this;
return (new cljs.core.async.t_cljs$core$async16884(self__.flag,self__.cb,meta16885__$1));
}));

(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16886){
var self__ = this;
var _16886__$1 = this;
return self__.meta16885;
}));

(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16885","meta16885",255922661,null)], null);
}));

(cljs.core.async.t_cljs$core$async16884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16884");

(cljs.core.async.t_cljs$core$async16884.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16884.
 */
cljs.core.async.__GT_t_cljs$core$async16884 = (function cljs$core$async$__GT_t_cljs$core$async16884(flag,cb,meta16885){
return (new cljs.core.async.t_cljs$core$async16884(flag,cb,meta16885));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16884(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16896_SHARP_){
var G__16899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16896_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16899) : fret.call(null,G__16899));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16897_SHARP_){
var G__16900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16897_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16900) : fret.call(null,G__16900));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18328 = (i + (1));
i = G__18328;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___18329 = arguments.length;
var i__5770__auto___18330 = (0);
while(true){
if((i__5770__auto___18330 < len__5769__auto___18329)){
args__5775__auto__.push((arguments[i__5770__auto___18330]));

var G__18331 = (i__5770__auto___18330 + (1));
i__5770__auto___18330 = G__18331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16912){
var map__16913 = p__16912;
var map__16913__$1 = cljs.core.__destructure_map(map__16913);
var opts = map__16913__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16902){
var G__16903 = cljs.core.first(seq16902);
var seq16902__$1 = cljs.core.next(seq16902);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16903,seq16902__$1);
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
var G__16915 = arguments.length;
switch (G__16915) {
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
var c__16772__auto___18333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_16946){
var state_val_16947 = (state_16946[(1)]);
if((state_val_16947 === (7))){
var inst_16942 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16952_18334 = state_16946__$1;
(statearr_16952_18334[(2)] = inst_16942);

(statearr_16952_18334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (1))){
var state_16946__$1 = state_16946;
var statearr_16953_18335 = state_16946__$1;
(statearr_16953_18335[(2)] = null);

(statearr_16953_18335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (4))){
var inst_16924 = (state_16946[(7)]);
var inst_16924__$1 = (state_16946[(2)]);
var inst_16926 = (inst_16924__$1 == null);
var state_16946__$1 = (function (){var statearr_16954 = state_16946;
(statearr_16954[(7)] = inst_16924__$1);

return statearr_16954;
})();
if(cljs.core.truth_(inst_16926)){
var statearr_16955_18336 = state_16946__$1;
(statearr_16955_18336[(1)] = (5));

} else {
var statearr_16956_18337 = state_16946__$1;
(statearr_16956_18337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (13))){
var state_16946__$1 = state_16946;
var statearr_16957_18338 = state_16946__$1;
(statearr_16957_18338[(2)] = null);

(statearr_16957_18338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (6))){
var inst_16924 = (state_16946[(7)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16946__$1,(11),to,inst_16924);
} else {
if((state_val_16947 === (3))){
var inst_16944 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16946__$1,inst_16944);
} else {
if((state_val_16947 === (12))){
var state_16946__$1 = state_16946;
var statearr_16958_18339 = state_16946__$1;
(statearr_16958_18339[(2)] = null);

(statearr_16958_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (2))){
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16946__$1,(4),from);
} else {
if((state_val_16947 === (11))){
var inst_16935 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
if(cljs.core.truth_(inst_16935)){
var statearr_16959_18340 = state_16946__$1;
(statearr_16959_18340[(1)] = (12));

} else {
var statearr_16960_18341 = state_16946__$1;
(statearr_16960_18341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (9))){
var state_16946__$1 = state_16946;
var statearr_16961_18342 = state_16946__$1;
(statearr_16961_18342[(2)] = null);

(statearr_16961_18342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (5))){
var state_16946__$1 = state_16946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16962_18343 = state_16946__$1;
(statearr_16962_18343[(1)] = (8));

} else {
var statearr_16963_18344 = state_16946__$1;
(statearr_16963_18344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (14))){
var inst_16940 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16964_18345 = state_16946__$1;
(statearr_16964_18345[(2)] = inst_16940);

(statearr_16964_18345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (10))){
var inst_16932 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16965_18346 = state_16946__$1;
(statearr_16965_18346[(2)] = inst_16932);

(statearr_16965_18346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (8))){
var inst_16929 = cljs.core.async.close_BANG_(to);
var state_16946__$1 = state_16946;
var statearr_16966_18347 = state_16946__$1;
(statearr_16966_18347[(2)] = inst_16929);

(statearr_16966_18347[(1)] = (10));


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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_16967 = [null,null,null,null,null,null,null,null];
(statearr_16967[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_16967[(1)] = (1));

return statearr_16967;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_16946){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_16946);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e16968){var ex__16705__auto__ = e16968;
var statearr_16969_18348 = state_16946;
(statearr_16969_18348[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_16946[(4)]))){
var statearr_16970_18349 = state_16946;
(statearr_16970_18349[(1)] = cljs.core.first((state_16946[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18350 = state_16946;
state_16946 = G__18350;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_16946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_16946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_16971 = f__16773__auto__();
(statearr_16971[(6)] = c__16772__auto___18333);

return statearr_16971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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
var process__$1 = (function (p__16972){
var vec__16973 = p__16972;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(1),null);
var job = vec__16973;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16772__auto___18351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_16980){
var state_val_16981 = (state_16980[(1)]);
if((state_val_16981 === (1))){
var state_16980__$1 = state_16980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16980__$1,(2),res,v);
} else {
if((state_val_16981 === (2))){
var inst_16977 = (state_16980[(2)]);
var inst_16978 = cljs.core.async.close_BANG_(res);
var state_16980__$1 = (function (){var statearr_16982 = state_16980;
(statearr_16982[(7)] = inst_16977);

return statearr_16982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16980__$1,inst_16978);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_16983 = [null,null,null,null,null,null,null,null];
(statearr_16983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_16983[(1)] = (1));

return statearr_16983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_16980){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_16980);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e16984){var ex__16705__auto__ = e16984;
var statearr_16985_18352 = state_16980;
(statearr_16985_18352[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_16980[(4)]))){
var statearr_16986_18353 = state_16980;
(statearr_16986_18353[(1)] = cljs.core.first((state_16980[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18354 = state_16980;
state_16980 = G__18354;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_16980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_16980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_16987 = f__16773__auto__();
(statearr_16987[(6)] = c__16772__auto___18351);

return statearr_16987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16988){
var vec__16989 = p__16988;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16989,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16989,(1),null);
var job = vec__16989;
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
var n__5636__auto___18355 = n;
var __18356 = (0);
while(true){
if((__18356 < n__5636__auto___18355)){
var G__16992_18357 = type;
var G__16992_18358__$1 = (((G__16992_18357 instanceof cljs.core.Keyword))?G__16992_18357.fqn:null);
switch (G__16992_18358__$1) {
case "compute":
var c__16772__auto___18360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18356,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = ((function (__18356,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function (state_17005){
var state_val_17006 = (state_17005[(1)]);
if((state_val_17006 === (1))){
var state_17005__$1 = state_17005;
var statearr_17007_18361 = state_17005__$1;
(statearr_17007_18361[(2)] = null);

(statearr_17007_18361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (2))){
var state_17005__$1 = state_17005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17005__$1,(4),jobs);
} else {
if((state_val_17006 === (3))){
var inst_17003 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17005__$1,inst_17003);
} else {
if((state_val_17006 === (4))){
var inst_16995 = (state_17005[(2)]);
var inst_16996 = process__$1(inst_16995);
var state_17005__$1 = state_17005;
if(cljs.core.truth_(inst_16996)){
var statearr_17008_18362 = state_17005__$1;
(statearr_17008_18362[(1)] = (5));

} else {
var statearr_17009_18363 = state_17005__$1;
(statearr_17009_18363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (5))){
var state_17005__$1 = state_17005;
var statearr_17010_18364 = state_17005__$1;
(statearr_17010_18364[(2)] = null);

(statearr_17010_18364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (6))){
var state_17005__$1 = state_17005;
var statearr_17011_18365 = state_17005__$1;
(statearr_17011_18365[(2)] = null);

(statearr_17011_18365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (7))){
var inst_17001 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17012_18366 = state_17005__$1;
(statearr_17012_18366[(2)] = inst_17001);

(statearr_17012_18366[(1)] = (3));


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
});})(__18356,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
;
return ((function (__18356,switch__16701__auto__,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null];
(statearr_17013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17005){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17005);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17014){var ex__16705__auto__ = e17014;
var statearr_17015_18367 = state_17005;
(statearr_17015_18367[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17005[(4)]))){
var statearr_17016_18368 = state_17005;
(statearr_17016_18368[(1)] = cljs.core.first((state_17005[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18369 = state_17005;
state_17005 = G__18369;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
;})(__18356,switch__16701__auto__,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
})();
var state__16774__auto__ = (function (){var statearr_17017 = f__16773__auto__();
(statearr_17017[(6)] = c__16772__auto___18360);

return statearr_17017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
});})(__18356,c__16772__auto___18360,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
);


break;
case "async":
var c__16772__auto___18370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18356,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = ((function (__18356,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function (state_17030){
var state_val_17031 = (state_17030[(1)]);
if((state_val_17031 === (1))){
var state_17030__$1 = state_17030;
var statearr_17032_18371 = state_17030__$1;
(statearr_17032_18371[(2)] = null);

(statearr_17032_18371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (2))){
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17030__$1,(4),jobs);
} else {
if((state_val_17031 === (3))){
var inst_17028 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17030__$1,inst_17028);
} else {
if((state_val_17031 === (4))){
var inst_17020 = (state_17030[(2)]);
var inst_17021 = async(inst_17020);
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17021)){
var statearr_17033_18372 = state_17030__$1;
(statearr_17033_18372[(1)] = (5));

} else {
var statearr_17034_18373 = state_17030__$1;
(statearr_17034_18373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (5))){
var state_17030__$1 = state_17030;
var statearr_17035_18374 = state_17030__$1;
(statearr_17035_18374[(2)] = null);

(statearr_17035_18374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (6))){
var state_17030__$1 = state_17030;
var statearr_17036_18375 = state_17030__$1;
(statearr_17036_18375[(2)] = null);

(statearr_17036_18375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (7))){
var inst_17026 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17037_18376 = state_17030__$1;
(statearr_17037_18376[(2)] = inst_17026);

(statearr_17037_18376[(1)] = (3));


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
});})(__18356,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
;
return ((function (__18356,switch__16701__auto__,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17038 = [null,null,null,null,null,null,null];
(statearr_17038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17038[(1)] = (1));

return statearr_17038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17030){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17030);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17039){var ex__16705__auto__ = e17039;
var statearr_17040_18377 = state_17030;
(statearr_17040_18377[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17030[(4)]))){
var statearr_17041_18378 = state_17030;
(statearr_17041_18378[(1)] = cljs.core.first((state_17030[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18379 = state_17030;
state_17030 = G__18379;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
;})(__18356,switch__16701__auto__,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
})();
var state__16774__auto__ = (function (){var statearr_17042 = f__16773__auto__();
(statearr_17042[(6)] = c__16772__auto___18370);

return statearr_17042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
});})(__18356,c__16772__auto___18370,G__16992_18357,G__16992_18358__$1,n__5636__auto___18355,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16992_18358__$1)].join('')));

}

var G__18380 = (__18356 + (1));
__18356 = G__18380;
continue;
} else {
}
break;
}

var c__16772__auto___18381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17064){
var state_val_17065 = (state_17064[(1)]);
if((state_val_17065 === (7))){
var inst_17060 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17066_18382 = state_17064__$1;
(statearr_17066_18382[(2)] = inst_17060);

(statearr_17066_18382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (1))){
var state_17064__$1 = state_17064;
var statearr_17067_18383 = state_17064__$1;
(statearr_17067_18383[(2)] = null);

(statearr_17067_18383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (4))){
var inst_17045 = (state_17064[(7)]);
var inst_17045__$1 = (state_17064[(2)]);
var inst_17046 = (inst_17045__$1 == null);
var state_17064__$1 = (function (){var statearr_17068 = state_17064;
(statearr_17068[(7)] = inst_17045__$1);

return statearr_17068;
})();
if(cljs.core.truth_(inst_17046)){
var statearr_17069_18384 = state_17064__$1;
(statearr_17069_18384[(1)] = (5));

} else {
var statearr_17070_18385 = state_17064__$1;
(statearr_17070_18385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (6))){
var inst_17045 = (state_17064[(7)]);
var inst_17050 = (state_17064[(8)]);
var inst_17050__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17052 = [inst_17045,inst_17050__$1];
var inst_17053 = (new cljs.core.PersistentVector(null,2,(5),inst_17051,inst_17052,null));
var state_17064__$1 = (function (){var statearr_17071 = state_17064;
(statearr_17071[(8)] = inst_17050__$1);

return statearr_17071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17064__$1,(8),jobs,inst_17053);
} else {
if((state_val_17065 === (3))){
var inst_17062 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17064__$1,inst_17062);
} else {
if((state_val_17065 === (2))){
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17064__$1,(4),from);
} else {
if((state_val_17065 === (9))){
var inst_17057 = (state_17064[(2)]);
var state_17064__$1 = (function (){var statearr_17072 = state_17064;
(statearr_17072[(9)] = inst_17057);

return statearr_17072;
})();
var statearr_17073_18386 = state_17064__$1;
(statearr_17073_18386[(2)] = null);

(statearr_17073_18386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (5))){
var inst_17048 = cljs.core.async.close_BANG_(jobs);
var state_17064__$1 = state_17064;
var statearr_17074_18387 = state_17064__$1;
(statearr_17074_18387[(2)] = inst_17048);

(statearr_17074_18387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17065 === (8))){
var inst_17050 = (state_17064[(8)]);
var inst_17055 = (state_17064[(2)]);
var state_17064__$1 = (function (){var statearr_17075 = state_17064;
(statearr_17075[(10)] = inst_17055);

return statearr_17075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17064__$1,(9),results,inst_17050);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17076[(1)] = (1));

return statearr_17076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17064){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17064);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17077){var ex__16705__auto__ = e17077;
var statearr_17078_18388 = state_17064;
(statearr_17078_18388[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17064[(4)]))){
var statearr_17079_18389 = state_17064;
(statearr_17079_18389[(1)] = cljs.core.first((state_17064[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18390 = state_17064;
state_17064 = G__18390;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17080 = f__16773__auto__();
(statearr_17080[(6)] = c__16772__auto___18381);

return statearr_17080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


var c__16772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17118){
var state_val_17119 = (state_17118[(1)]);
if((state_val_17119 === (7))){
var inst_17114 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17120_18391 = state_17118__$1;
(statearr_17120_18391[(2)] = inst_17114);

(statearr_17120_18391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (20))){
var state_17118__$1 = state_17118;
var statearr_17121_18392 = state_17118__$1;
(statearr_17121_18392[(2)] = null);

(statearr_17121_18392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (1))){
var state_17118__$1 = state_17118;
var statearr_17122_18393 = state_17118__$1;
(statearr_17122_18393[(2)] = null);

(statearr_17122_18393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (4))){
var inst_17083 = (state_17118[(7)]);
var inst_17083__$1 = (state_17118[(2)]);
var inst_17084 = (inst_17083__$1 == null);
var state_17118__$1 = (function (){var statearr_17123 = state_17118;
(statearr_17123[(7)] = inst_17083__$1);

return statearr_17123;
})();
if(cljs.core.truth_(inst_17084)){
var statearr_17124_18394 = state_17118__$1;
(statearr_17124_18394[(1)] = (5));

} else {
var statearr_17125_18395 = state_17118__$1;
(statearr_17125_18395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (15))){
var inst_17096 = (state_17118[(8)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17118__$1,(18),to,inst_17096);
} else {
if((state_val_17119 === (21))){
var inst_17109 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17126_18398 = state_17118__$1;
(statearr_17126_18398[(2)] = inst_17109);

(statearr_17126_18398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (13))){
var inst_17111 = (state_17118[(2)]);
var state_17118__$1 = (function (){var statearr_17127 = state_17118;
(statearr_17127[(9)] = inst_17111);

return statearr_17127;
})();
var statearr_17128_18399 = state_17118__$1;
(statearr_17128_18399[(2)] = null);

(statearr_17128_18399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (6))){
var inst_17083 = (state_17118[(7)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17118__$1,(11),inst_17083);
} else {
if((state_val_17119 === (17))){
var inst_17104 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
if(cljs.core.truth_(inst_17104)){
var statearr_17129_18400 = state_17118__$1;
(statearr_17129_18400[(1)] = (19));

} else {
var statearr_17130_18401 = state_17118__$1;
(statearr_17130_18401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (3))){
var inst_17116 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17118__$1,inst_17116);
} else {
if((state_val_17119 === (12))){
var inst_17093 = (state_17118[(10)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17118__$1,(14),inst_17093);
} else {
if((state_val_17119 === (2))){
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17118__$1,(4),results);
} else {
if((state_val_17119 === (19))){
var state_17118__$1 = state_17118;
var statearr_17131_18402 = state_17118__$1;
(statearr_17131_18402[(2)] = null);

(statearr_17131_18402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (11))){
var inst_17093 = (state_17118[(2)]);
var state_17118__$1 = (function (){var statearr_17132 = state_17118;
(statearr_17132[(10)] = inst_17093);

return statearr_17132;
})();
var statearr_17133_18403 = state_17118__$1;
(statearr_17133_18403[(2)] = null);

(statearr_17133_18403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (9))){
var state_17118__$1 = state_17118;
var statearr_17134_18404 = state_17118__$1;
(statearr_17134_18404[(2)] = null);

(statearr_17134_18404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (5))){
var state_17118__$1 = state_17118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17135_18406 = state_17118__$1;
(statearr_17135_18406[(1)] = (8));

} else {
var statearr_17136_18407 = state_17118__$1;
(statearr_17136_18407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (14))){
var inst_17098 = (state_17118[(11)]);
var inst_17096 = (state_17118[(8)]);
var inst_17096__$1 = (state_17118[(2)]);
var inst_17097 = (inst_17096__$1 == null);
var inst_17098__$1 = cljs.core.not(inst_17097);
var state_17118__$1 = (function (){var statearr_17137 = state_17118;
(statearr_17137[(11)] = inst_17098__$1);

(statearr_17137[(8)] = inst_17096__$1);

return statearr_17137;
})();
if(inst_17098__$1){
var statearr_17138_18409 = state_17118__$1;
(statearr_17138_18409[(1)] = (15));

} else {
var statearr_17139_18410 = state_17118__$1;
(statearr_17139_18410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (16))){
var inst_17098 = (state_17118[(11)]);
var state_17118__$1 = state_17118;
var statearr_17140_18412 = state_17118__$1;
(statearr_17140_18412[(2)] = inst_17098);

(statearr_17140_18412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (10))){
var inst_17090 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17141_18413 = state_17118__$1;
(statearr_17141_18413[(2)] = inst_17090);

(statearr_17141_18413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (18))){
var inst_17101 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17142_18414 = state_17118__$1;
(statearr_17142_18414[(2)] = inst_17101);

(statearr_17142_18414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (8))){
var inst_17087 = cljs.core.async.close_BANG_(to);
var state_17118__$1 = state_17118;
var statearr_17143_18415 = state_17118__$1;
(statearr_17143_18415[(2)] = inst_17087);

(statearr_17143_18415[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17144[(1)] = (1));

return statearr_17144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17118){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17118);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17145){var ex__16705__auto__ = e17145;
var statearr_17146_18417 = state_17118;
(statearr_17146_18417[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17118[(4)]))){
var statearr_17147_18418 = state_17118;
(statearr_17147_18418[(1)] = cljs.core.first((state_17118[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18419 = state_17118;
state_17118 = G__18419;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17148 = f__16773__auto__();
(statearr_17148[(6)] = c__16772__auto__);

return statearr_17148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

return c__16772__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17150 = arguments.length;
switch (G__17150) {
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
var G__17152 = arguments.length;
switch (G__17152) {
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
var G__17154 = arguments.length;
switch (G__17154) {
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
var c__16772__auto___18427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17180){
var state_val_17181 = (state_17180[(1)]);
if((state_val_17181 === (7))){
var inst_17176 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17182_18430 = state_17180__$1;
(statearr_17182_18430[(2)] = inst_17176);

(statearr_17182_18430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (1))){
var state_17180__$1 = state_17180;
var statearr_17183_18431 = state_17180__$1;
(statearr_17183_18431[(2)] = null);

(statearr_17183_18431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (4))){
var inst_17157 = (state_17180[(7)]);
var inst_17157__$1 = (state_17180[(2)]);
var inst_17158 = (inst_17157__$1 == null);
var state_17180__$1 = (function (){var statearr_17184 = state_17180;
(statearr_17184[(7)] = inst_17157__$1);

return statearr_17184;
})();
if(cljs.core.truth_(inst_17158)){
var statearr_17185_18432 = state_17180__$1;
(statearr_17185_18432[(1)] = (5));

} else {
var statearr_17186_18433 = state_17180__$1;
(statearr_17186_18433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (13))){
var state_17180__$1 = state_17180;
var statearr_17187_18435 = state_17180__$1;
(statearr_17187_18435[(2)] = null);

(statearr_17187_18435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (6))){
var inst_17157 = (state_17180[(7)]);
var inst_17163 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17157) : p.call(null,inst_17157));
var state_17180__$1 = state_17180;
if(cljs.core.truth_(inst_17163)){
var statearr_17188_18436 = state_17180__$1;
(statearr_17188_18436[(1)] = (9));

} else {
var statearr_17189_18437 = state_17180__$1;
(statearr_17189_18437[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (3))){
var inst_17178 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17180__$1,inst_17178);
} else {
if((state_val_17181 === (12))){
var state_17180__$1 = state_17180;
var statearr_17190_18438 = state_17180__$1;
(statearr_17190_18438[(2)] = null);

(statearr_17190_18438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (2))){
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17180__$1,(4),ch);
} else {
if((state_val_17181 === (11))){
var inst_17157 = (state_17180[(7)]);
var inst_17167 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17180__$1,(8),inst_17167,inst_17157);
} else {
if((state_val_17181 === (9))){
var state_17180__$1 = state_17180;
var statearr_17191_18441 = state_17180__$1;
(statearr_17191_18441[(2)] = tc);

(statearr_17191_18441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (5))){
var inst_17160 = cljs.core.async.close_BANG_(tc);
var inst_17161 = cljs.core.async.close_BANG_(fc);
var state_17180__$1 = (function (){var statearr_17192 = state_17180;
(statearr_17192[(8)] = inst_17160);

return statearr_17192;
})();
var statearr_17193_18442 = state_17180__$1;
(statearr_17193_18442[(2)] = inst_17161);

(statearr_17193_18442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (14))){
var inst_17174 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17194_18443 = state_17180__$1;
(statearr_17194_18443[(2)] = inst_17174);

(statearr_17194_18443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (10))){
var state_17180__$1 = state_17180;
var statearr_17195_18444 = state_17180__$1;
(statearr_17195_18444[(2)] = fc);

(statearr_17195_18444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (8))){
var inst_17169 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
if(cljs.core.truth_(inst_17169)){
var statearr_17196_18445 = state_17180__$1;
(statearr_17196_18445[(1)] = (12));

} else {
var statearr_17197_18446 = state_17180__$1;
(statearr_17197_18446[(1)] = (13));

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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17198 = [null,null,null,null,null,null,null,null,null];
(statearr_17198[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17198[(1)] = (1));

return statearr_17198;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17180){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17180);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17199){var ex__16705__auto__ = e17199;
var statearr_17200_18449 = state_17180;
(statearr_17200_18449[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17180[(4)]))){
var statearr_17201_18450 = state_17180;
(statearr_17201_18450[(1)] = cljs.core.first((state_17180[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_17180;
state_17180 = G__18451;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17202 = f__16773__auto__();
(statearr_17202[(6)] = c__16772__auto___18427);

return statearr_17202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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
var c__16772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17224){
var state_val_17225 = (state_17224[(1)]);
if((state_val_17225 === (7))){
var inst_17220 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17226_18454 = state_17224__$1;
(statearr_17226_18454[(2)] = inst_17220);

(statearr_17226_18454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (1))){
var inst_17203 = init;
var inst_17204 = inst_17203;
var state_17224__$1 = (function (){var statearr_17227 = state_17224;
(statearr_17227[(7)] = inst_17204);

return statearr_17227;
})();
var statearr_17228_18455 = state_17224__$1;
(statearr_17228_18455[(2)] = null);

(statearr_17228_18455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (4))){
var inst_17207 = (state_17224[(8)]);
var inst_17207__$1 = (state_17224[(2)]);
var inst_17208 = (inst_17207__$1 == null);
var state_17224__$1 = (function (){var statearr_17229 = state_17224;
(statearr_17229[(8)] = inst_17207__$1);

return statearr_17229;
})();
if(cljs.core.truth_(inst_17208)){
var statearr_17230_18456 = state_17224__$1;
(statearr_17230_18456[(1)] = (5));

} else {
var statearr_17231_18457 = state_17224__$1;
(statearr_17231_18457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (6))){
var inst_17207 = (state_17224[(8)]);
var inst_17211 = (state_17224[(9)]);
var inst_17204 = (state_17224[(7)]);
var inst_17211__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17204,inst_17207) : f.call(null,inst_17204,inst_17207));
var inst_17212 = cljs.core.reduced_QMARK_(inst_17211__$1);
var state_17224__$1 = (function (){var statearr_17232 = state_17224;
(statearr_17232[(9)] = inst_17211__$1);

return statearr_17232;
})();
if(inst_17212){
var statearr_17233_18458 = state_17224__$1;
(statearr_17233_18458[(1)] = (8));

} else {
var statearr_17234_18459 = state_17224__$1;
(statearr_17234_18459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (3))){
var inst_17222 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17224__$1,inst_17222);
} else {
if((state_val_17225 === (2))){
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17224__$1,(4),ch);
} else {
if((state_val_17225 === (9))){
var inst_17211 = (state_17224[(9)]);
var inst_17204 = inst_17211;
var state_17224__$1 = (function (){var statearr_17235 = state_17224;
(statearr_17235[(7)] = inst_17204);

return statearr_17235;
})();
var statearr_17236_18460 = state_17224__$1;
(statearr_17236_18460[(2)] = null);

(statearr_17236_18460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (5))){
var inst_17204 = (state_17224[(7)]);
var state_17224__$1 = state_17224;
var statearr_17237_18461 = state_17224__$1;
(statearr_17237_18461[(2)] = inst_17204);

(statearr_17237_18461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (10))){
var inst_17218 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17238_18462 = state_17224__$1;
(statearr_17238_18462[(2)] = inst_17218);

(statearr_17238_18462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (8))){
var inst_17211 = (state_17224[(9)]);
var inst_17214 = cljs.core.deref(inst_17211);
var state_17224__$1 = state_17224;
var statearr_17239_18463 = state_17224__$1;
(statearr_17239_18463[(2)] = inst_17214);

(statearr_17239_18463[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16702__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16702__auto____0 = (function (){
var statearr_17240 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17240[(0)] = cljs$core$async$reduce_$_state_machine__16702__auto__);

(statearr_17240[(1)] = (1));

return statearr_17240;
});
var cljs$core$async$reduce_$_state_machine__16702__auto____1 = (function (state_17224){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17224);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17241){var ex__16705__auto__ = e17241;
var statearr_17242_18464 = state_17224;
(statearr_17242_18464[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17224[(4)]))){
var statearr_17243_18465 = state_17224;
(statearr_17243_18465[(1)] = cljs.core.first((state_17224[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18466 = state_17224;
state_17224 = G__18466;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16702__auto__ = function(state_17224){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16702__auto____1.call(this,state_17224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16702__auto____0;
cljs$core$async$reduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16702__auto____1;
return cljs$core$async$reduce_$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17244 = f__16773__auto__();
(statearr_17244[(6)] = c__16772__auto__);

return statearr_17244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

return c__16772__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17250){
var state_val_17251 = (state_17250[(1)]);
if((state_val_17251 === (1))){
var inst_17245 = cljs.core.async.reduce(f__$1,init,ch);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17250__$1,(2),inst_17245);
} else {
if((state_val_17251 === (2))){
var inst_17247 = (state_17250[(2)]);
var inst_17248 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17247) : f__$1.call(null,inst_17247));
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17250__$1,inst_17248);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16702__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16702__auto____0 = (function (){
var statearr_17252 = [null,null,null,null,null,null,null];
(statearr_17252[(0)] = cljs$core$async$transduce_$_state_machine__16702__auto__);

(statearr_17252[(1)] = (1));

return statearr_17252;
});
var cljs$core$async$transduce_$_state_machine__16702__auto____1 = (function (state_17250){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17250);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17253){var ex__16705__auto__ = e17253;
var statearr_17254_18467 = state_17250;
(statearr_17254_18467[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17250[(4)]))){
var statearr_17255_18468 = state_17250;
(statearr_17255_18468[(1)] = cljs.core.first((state_17250[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18469 = state_17250;
state_17250 = G__18469;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16702__auto__ = function(state_17250){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16702__auto____1.call(this,state_17250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16702__auto____0;
cljs$core$async$transduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16702__auto____1;
return cljs$core$async$transduce_$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17256 = f__16773__auto__();
(statearr_17256[(6)] = c__16772__auto__);

return statearr_17256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

return c__16772__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17258 = arguments.length;
switch (G__17258) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17283){
var state_val_17284 = (state_17283[(1)]);
if((state_val_17284 === (7))){
var inst_17265 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
var statearr_17285_18471 = state_17283__$1;
(statearr_17285_18471[(2)] = inst_17265);

(statearr_17285_18471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (1))){
var inst_17259 = cljs.core.seq(coll);
var inst_17260 = inst_17259;
var state_17283__$1 = (function (){var statearr_17286 = state_17283;
(statearr_17286[(7)] = inst_17260);

return statearr_17286;
})();
var statearr_17287_18472 = state_17283__$1;
(statearr_17287_18472[(2)] = null);

(statearr_17287_18472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (4))){
var inst_17260 = (state_17283[(7)]);
var inst_17263 = cljs.core.first(inst_17260);
var state_17283__$1 = state_17283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17283__$1,(7),ch,inst_17263);
} else {
if((state_val_17284 === (13))){
var inst_17277 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
var statearr_17288_18473 = state_17283__$1;
(statearr_17288_18473[(2)] = inst_17277);

(statearr_17288_18473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (6))){
var inst_17268 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
if(cljs.core.truth_(inst_17268)){
var statearr_17289_18474 = state_17283__$1;
(statearr_17289_18474[(1)] = (8));

} else {
var statearr_17290_18475 = state_17283__$1;
(statearr_17290_18475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (3))){
var inst_17281 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17283__$1,inst_17281);
} else {
if((state_val_17284 === (12))){
var state_17283__$1 = state_17283;
var statearr_17291_18476 = state_17283__$1;
(statearr_17291_18476[(2)] = null);

(statearr_17291_18476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (2))){
var inst_17260 = (state_17283[(7)]);
var state_17283__$1 = state_17283;
if(cljs.core.truth_(inst_17260)){
var statearr_17292_18477 = state_17283__$1;
(statearr_17292_18477[(1)] = (4));

} else {
var statearr_17293_18478 = state_17283__$1;
(statearr_17293_18478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (11))){
var inst_17274 = cljs.core.async.close_BANG_(ch);
var state_17283__$1 = state_17283;
var statearr_17294_18479 = state_17283__$1;
(statearr_17294_18479[(2)] = inst_17274);

(statearr_17294_18479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (9))){
var state_17283__$1 = state_17283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17295_18480 = state_17283__$1;
(statearr_17295_18480[(1)] = (11));

} else {
var statearr_17296_18481 = state_17283__$1;
(statearr_17296_18481[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (5))){
var inst_17260 = (state_17283[(7)]);
var state_17283__$1 = state_17283;
var statearr_17297_18482 = state_17283__$1;
(statearr_17297_18482[(2)] = inst_17260);

(statearr_17297_18482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (10))){
var inst_17279 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
var statearr_17298_18483 = state_17283__$1;
(statearr_17298_18483[(2)] = inst_17279);

(statearr_17298_18483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (8))){
var inst_17260 = (state_17283[(7)]);
var inst_17270 = cljs.core.next(inst_17260);
var inst_17260__$1 = inst_17270;
var state_17283__$1 = (function (){var statearr_17299 = state_17283;
(statearr_17299[(7)] = inst_17260__$1);

return statearr_17299;
})();
var statearr_17300_18484 = state_17283__$1;
(statearr_17300_18484[(2)] = null);

(statearr_17300_18484[(1)] = (2));


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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17301 = [null,null,null,null,null,null,null,null];
(statearr_17301[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17301[(1)] = (1));

return statearr_17301;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17283){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17283);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17302){var ex__16705__auto__ = e17302;
var statearr_17303_18485 = state_17283;
(statearr_17303_18485[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17283[(4)]))){
var statearr_17304_18486 = state_17283;
(statearr_17304_18486[(1)] = cljs.core.first((state_17283[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18487 = state_17283;
state_17283 = G__18487;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17305 = f__16773__auto__();
(statearr_17305[(6)] = c__16772__auto__);

return statearr_17305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

return c__16772__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17307 = arguments.length;
switch (G__17307) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18489 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18489(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18490 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18490(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18491 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18491(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18492 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18492(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17308 = (function (ch,cs,meta17309){
this.ch = ch;
this.cs = cs;
this.meta17309 = meta17309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17310,meta17309__$1){
var self__ = this;
var _17310__$1 = this;
return (new cljs.core.async.t_cljs$core$async17308(self__.ch,self__.cs,meta17309__$1));
}));

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17310){
var self__ = this;
var _17310__$1 = this;
return self__.meta17309;
}));

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17308.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17309","meta17309",-1238678409,null)], null);
}));

(cljs.core.async.t_cljs$core$async17308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17308");

(cljs.core.async.t_cljs$core$async17308.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17308.
 */
cljs.core.async.__GT_t_cljs$core$async17308 = (function cljs$core$async$__GT_t_cljs$core$async17308(ch,cs,meta17309){
return (new cljs.core.async.t_cljs$core$async17308(ch,cs,meta17309));
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
var m = (new cljs.core.async.t_cljs$core$async17308(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16772__auto___18493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17443){
var state_val_17444 = (state_17443[(1)]);
if((state_val_17444 === (7))){
var inst_17439 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17445_18494 = state_17443__$1;
(statearr_17445_18494[(2)] = inst_17439);

(statearr_17445_18494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (20))){
var inst_17344 = (state_17443[(7)]);
var inst_17356 = cljs.core.first(inst_17344);
var inst_17357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17356,(0),null);
var inst_17358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17356,(1),null);
var state_17443__$1 = (function (){var statearr_17446 = state_17443;
(statearr_17446[(8)] = inst_17357);

return statearr_17446;
})();
if(cljs.core.truth_(inst_17358)){
var statearr_17447_18495 = state_17443__$1;
(statearr_17447_18495[(1)] = (22));

} else {
var statearr_17448_18496 = state_17443__$1;
(statearr_17448_18496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (27))){
var inst_17388 = (state_17443[(9)]);
var inst_17386 = (state_17443[(10)]);
var inst_17313 = (state_17443[(11)]);
var inst_17393 = (state_17443[(12)]);
var inst_17393__$1 = cljs.core._nth(inst_17386,inst_17388);
var inst_17394 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17393__$1,inst_17313,done);
var state_17443__$1 = (function (){var statearr_17449 = state_17443;
(statearr_17449[(12)] = inst_17393__$1);

return statearr_17449;
})();
if(cljs.core.truth_(inst_17394)){
var statearr_17450_18497 = state_17443__$1;
(statearr_17450_18497[(1)] = (30));

} else {
var statearr_17451_18498 = state_17443__$1;
(statearr_17451_18498[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (1))){
var state_17443__$1 = state_17443;
var statearr_17452_18499 = state_17443__$1;
(statearr_17452_18499[(2)] = null);

(statearr_17452_18499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (24))){
var inst_17344 = (state_17443[(7)]);
var inst_17363 = (state_17443[(2)]);
var inst_17364 = cljs.core.next(inst_17344);
var inst_17322 = inst_17364;
var inst_17323 = null;
var inst_17324 = (0);
var inst_17325 = (0);
var state_17443__$1 = (function (){var statearr_17453 = state_17443;
(statearr_17453[(13)] = inst_17363);

(statearr_17453[(14)] = inst_17323);

(statearr_17453[(15)] = inst_17325);

(statearr_17453[(16)] = inst_17324);

(statearr_17453[(17)] = inst_17322);

return statearr_17453;
})();
var statearr_17454_18500 = state_17443__$1;
(statearr_17454_18500[(2)] = null);

(statearr_17454_18500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (39))){
var state_17443__$1 = state_17443;
var statearr_17458_18501 = state_17443__$1;
(statearr_17458_18501[(2)] = null);

(statearr_17458_18501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (4))){
var inst_17313 = (state_17443[(11)]);
var inst_17313__$1 = (state_17443[(2)]);
var inst_17314 = (inst_17313__$1 == null);
var state_17443__$1 = (function (){var statearr_17459 = state_17443;
(statearr_17459[(11)] = inst_17313__$1);

return statearr_17459;
})();
if(cljs.core.truth_(inst_17314)){
var statearr_17460_18502 = state_17443__$1;
(statearr_17460_18502[(1)] = (5));

} else {
var statearr_17461_18503 = state_17443__$1;
(statearr_17461_18503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (15))){
var inst_17323 = (state_17443[(14)]);
var inst_17325 = (state_17443[(15)]);
var inst_17324 = (state_17443[(16)]);
var inst_17322 = (state_17443[(17)]);
var inst_17340 = (state_17443[(2)]);
var inst_17341 = (inst_17325 + (1));
var tmp17455 = inst_17323;
var tmp17456 = inst_17324;
var tmp17457 = inst_17322;
var inst_17322__$1 = tmp17457;
var inst_17323__$1 = tmp17455;
var inst_17324__$1 = tmp17456;
var inst_17325__$1 = inst_17341;
var state_17443__$1 = (function (){var statearr_17462 = state_17443;
(statearr_17462[(14)] = inst_17323__$1);

(statearr_17462[(15)] = inst_17325__$1);

(statearr_17462[(16)] = inst_17324__$1);

(statearr_17462[(18)] = inst_17340);

(statearr_17462[(17)] = inst_17322__$1);

return statearr_17462;
})();
var statearr_17463_18504 = state_17443__$1;
(statearr_17463_18504[(2)] = null);

(statearr_17463_18504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (21))){
var inst_17367 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17467_18505 = state_17443__$1;
(statearr_17467_18505[(2)] = inst_17367);

(statearr_17467_18505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (31))){
var inst_17393 = (state_17443[(12)]);
var inst_17397 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17393);
var state_17443__$1 = state_17443;
var statearr_17468_18506 = state_17443__$1;
(statearr_17468_18506[(2)] = inst_17397);

(statearr_17468_18506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (32))){
var inst_17385 = (state_17443[(19)]);
var inst_17387 = (state_17443[(20)]);
var inst_17388 = (state_17443[(9)]);
var inst_17386 = (state_17443[(10)]);
var inst_17399 = (state_17443[(2)]);
var inst_17400 = (inst_17388 + (1));
var tmp17464 = inst_17385;
var tmp17465 = inst_17387;
var tmp17466 = inst_17386;
var inst_17385__$1 = tmp17464;
var inst_17386__$1 = tmp17466;
var inst_17387__$1 = tmp17465;
var inst_17388__$1 = inst_17400;
var state_17443__$1 = (function (){var statearr_17469 = state_17443;
(statearr_17469[(19)] = inst_17385__$1);

(statearr_17469[(20)] = inst_17387__$1);

(statearr_17469[(9)] = inst_17388__$1);

(statearr_17469[(10)] = inst_17386__$1);

(statearr_17469[(21)] = inst_17399);

return statearr_17469;
})();
var statearr_17470_18507 = state_17443__$1;
(statearr_17470_18507[(2)] = null);

(statearr_17470_18507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (40))){
var inst_17412 = (state_17443[(22)]);
var inst_17416 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17412);
var state_17443__$1 = state_17443;
var statearr_17471_18508 = state_17443__$1;
(statearr_17471_18508[(2)] = inst_17416);

(statearr_17471_18508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (33))){
var inst_17403 = (state_17443[(23)]);
var inst_17405 = cljs.core.chunked_seq_QMARK_(inst_17403);
var state_17443__$1 = state_17443;
if(inst_17405){
var statearr_17472_18509 = state_17443__$1;
(statearr_17472_18509[(1)] = (36));

} else {
var statearr_17473_18510 = state_17443__$1;
(statearr_17473_18510[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (13))){
var inst_17334 = (state_17443[(24)]);
var inst_17337 = cljs.core.async.close_BANG_(inst_17334);
var state_17443__$1 = state_17443;
var statearr_17474_18511 = state_17443__$1;
(statearr_17474_18511[(2)] = inst_17337);

(statearr_17474_18511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (22))){
var inst_17357 = (state_17443[(8)]);
var inst_17360 = cljs.core.async.close_BANG_(inst_17357);
var state_17443__$1 = state_17443;
var statearr_17475_18512 = state_17443__$1;
(statearr_17475_18512[(2)] = inst_17360);

(statearr_17475_18512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (36))){
var inst_17403 = (state_17443[(23)]);
var inst_17407 = cljs.core.chunk_first(inst_17403);
var inst_17408 = cljs.core.chunk_rest(inst_17403);
var inst_17409 = cljs.core.count(inst_17407);
var inst_17385 = inst_17408;
var inst_17386 = inst_17407;
var inst_17387 = inst_17409;
var inst_17388 = (0);
var state_17443__$1 = (function (){var statearr_17476 = state_17443;
(statearr_17476[(19)] = inst_17385);

(statearr_17476[(20)] = inst_17387);

(statearr_17476[(9)] = inst_17388);

(statearr_17476[(10)] = inst_17386);

return statearr_17476;
})();
var statearr_17477_18513 = state_17443__$1;
(statearr_17477_18513[(2)] = null);

(statearr_17477_18513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (41))){
var inst_17403 = (state_17443[(23)]);
var inst_17418 = (state_17443[(2)]);
var inst_17419 = cljs.core.next(inst_17403);
var inst_17385 = inst_17419;
var inst_17386 = null;
var inst_17387 = (0);
var inst_17388 = (0);
var state_17443__$1 = (function (){var statearr_17478 = state_17443;
(statearr_17478[(25)] = inst_17418);

(statearr_17478[(19)] = inst_17385);

(statearr_17478[(20)] = inst_17387);

(statearr_17478[(9)] = inst_17388);

(statearr_17478[(10)] = inst_17386);

return statearr_17478;
})();
var statearr_17479_18514 = state_17443__$1;
(statearr_17479_18514[(2)] = null);

(statearr_17479_18514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (43))){
var state_17443__$1 = state_17443;
var statearr_17480_18515 = state_17443__$1;
(statearr_17480_18515[(2)] = null);

(statearr_17480_18515[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (29))){
var inst_17427 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17481_18516 = state_17443__$1;
(statearr_17481_18516[(2)] = inst_17427);

(statearr_17481_18516[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (44))){
var inst_17436 = (state_17443[(2)]);
var state_17443__$1 = (function (){var statearr_17482 = state_17443;
(statearr_17482[(26)] = inst_17436);

return statearr_17482;
})();
var statearr_17483_18517 = state_17443__$1;
(statearr_17483_18517[(2)] = null);

(statearr_17483_18517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (6))){
var inst_17377 = (state_17443[(27)]);
var inst_17376 = cljs.core.deref(cs);
var inst_17377__$1 = cljs.core.keys(inst_17376);
var inst_17378 = cljs.core.count(inst_17377__$1);
var inst_17379 = cljs.core.reset_BANG_(dctr,inst_17378);
var inst_17384 = cljs.core.seq(inst_17377__$1);
var inst_17385 = inst_17384;
var inst_17386 = null;
var inst_17387 = (0);
var inst_17388 = (0);
var state_17443__$1 = (function (){var statearr_17484 = state_17443;
(statearr_17484[(28)] = inst_17379);

(statearr_17484[(19)] = inst_17385);

(statearr_17484[(20)] = inst_17387);

(statearr_17484[(27)] = inst_17377__$1);

(statearr_17484[(9)] = inst_17388);

(statearr_17484[(10)] = inst_17386);

return statearr_17484;
})();
var statearr_17485_18518 = state_17443__$1;
(statearr_17485_18518[(2)] = null);

(statearr_17485_18518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (28))){
var inst_17385 = (state_17443[(19)]);
var inst_17403 = (state_17443[(23)]);
var inst_17403__$1 = cljs.core.seq(inst_17385);
var state_17443__$1 = (function (){var statearr_17486 = state_17443;
(statearr_17486[(23)] = inst_17403__$1);

return statearr_17486;
})();
if(inst_17403__$1){
var statearr_17487_18519 = state_17443__$1;
(statearr_17487_18519[(1)] = (33));

} else {
var statearr_17488_18520 = state_17443__$1;
(statearr_17488_18520[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (25))){
var inst_17387 = (state_17443[(20)]);
var inst_17388 = (state_17443[(9)]);
var inst_17390 = (inst_17388 < inst_17387);
var inst_17391 = inst_17390;
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17391)){
var statearr_17489_18521 = state_17443__$1;
(statearr_17489_18521[(1)] = (27));

} else {
var statearr_17490_18522 = state_17443__$1;
(statearr_17490_18522[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (34))){
var state_17443__$1 = state_17443;
var statearr_17491_18523 = state_17443__$1;
(statearr_17491_18523[(2)] = null);

(statearr_17491_18523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (17))){
var state_17443__$1 = state_17443;
var statearr_17492_18524 = state_17443__$1;
(statearr_17492_18524[(2)] = null);

(statearr_17492_18524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (3))){
var inst_17441 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17443__$1,inst_17441);
} else {
if((state_val_17444 === (12))){
var inst_17372 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17493_18525 = state_17443__$1;
(statearr_17493_18525[(2)] = inst_17372);

(statearr_17493_18525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (2))){
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17443__$1,(4),ch);
} else {
if((state_val_17444 === (23))){
var state_17443__$1 = state_17443;
var statearr_17494_18526 = state_17443__$1;
(statearr_17494_18526[(2)] = null);

(statearr_17494_18526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (35))){
var inst_17425 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17495_18527 = state_17443__$1;
(statearr_17495_18527[(2)] = inst_17425);

(statearr_17495_18527[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (19))){
var inst_17344 = (state_17443[(7)]);
var inst_17348 = cljs.core.chunk_first(inst_17344);
var inst_17349 = cljs.core.chunk_rest(inst_17344);
var inst_17350 = cljs.core.count(inst_17348);
var inst_17322 = inst_17349;
var inst_17323 = inst_17348;
var inst_17324 = inst_17350;
var inst_17325 = (0);
var state_17443__$1 = (function (){var statearr_17496 = state_17443;
(statearr_17496[(14)] = inst_17323);

(statearr_17496[(15)] = inst_17325);

(statearr_17496[(16)] = inst_17324);

(statearr_17496[(17)] = inst_17322);

return statearr_17496;
})();
var statearr_17497_18528 = state_17443__$1;
(statearr_17497_18528[(2)] = null);

(statearr_17497_18528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (11))){
var inst_17322 = (state_17443[(17)]);
var inst_17344 = (state_17443[(7)]);
var inst_17344__$1 = cljs.core.seq(inst_17322);
var state_17443__$1 = (function (){var statearr_17498 = state_17443;
(statearr_17498[(7)] = inst_17344__$1);

return statearr_17498;
})();
if(inst_17344__$1){
var statearr_17499_18529 = state_17443__$1;
(statearr_17499_18529[(1)] = (16));

} else {
var statearr_17500_18530 = state_17443__$1;
(statearr_17500_18530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (9))){
var inst_17374 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17501_18531 = state_17443__$1;
(statearr_17501_18531[(2)] = inst_17374);

(statearr_17501_18531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (5))){
var inst_17320 = cljs.core.deref(cs);
var inst_17321 = cljs.core.seq(inst_17320);
var inst_17322 = inst_17321;
var inst_17323 = null;
var inst_17324 = (0);
var inst_17325 = (0);
var state_17443__$1 = (function (){var statearr_17502 = state_17443;
(statearr_17502[(14)] = inst_17323);

(statearr_17502[(15)] = inst_17325);

(statearr_17502[(16)] = inst_17324);

(statearr_17502[(17)] = inst_17322);

return statearr_17502;
})();
var statearr_17503_18532 = state_17443__$1;
(statearr_17503_18532[(2)] = null);

(statearr_17503_18532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (14))){
var state_17443__$1 = state_17443;
var statearr_17504_18533 = state_17443__$1;
(statearr_17504_18533[(2)] = null);

(statearr_17504_18533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (45))){
var inst_17433 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17505_18534 = state_17443__$1;
(statearr_17505_18534[(2)] = inst_17433);

(statearr_17505_18534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (26))){
var inst_17377 = (state_17443[(27)]);
var inst_17429 = (state_17443[(2)]);
var inst_17430 = cljs.core.seq(inst_17377);
var state_17443__$1 = (function (){var statearr_17506 = state_17443;
(statearr_17506[(29)] = inst_17429);

return statearr_17506;
})();
if(inst_17430){
var statearr_17507_18535 = state_17443__$1;
(statearr_17507_18535[(1)] = (42));

} else {
var statearr_17508_18536 = state_17443__$1;
(statearr_17508_18536[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (16))){
var inst_17344 = (state_17443[(7)]);
var inst_17346 = cljs.core.chunked_seq_QMARK_(inst_17344);
var state_17443__$1 = state_17443;
if(inst_17346){
var statearr_17509_18537 = state_17443__$1;
(statearr_17509_18537[(1)] = (19));

} else {
var statearr_17510_18538 = state_17443__$1;
(statearr_17510_18538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (38))){
var inst_17422 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17511_18539 = state_17443__$1;
(statearr_17511_18539[(2)] = inst_17422);

(statearr_17511_18539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (30))){
var state_17443__$1 = state_17443;
var statearr_17512_18540 = state_17443__$1;
(statearr_17512_18540[(2)] = null);

(statearr_17512_18540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (10))){
var inst_17323 = (state_17443[(14)]);
var inst_17325 = (state_17443[(15)]);
var inst_17333 = cljs.core._nth(inst_17323,inst_17325);
var inst_17334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(0),null);
var inst_17335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(1),null);
var state_17443__$1 = (function (){var statearr_17513 = state_17443;
(statearr_17513[(24)] = inst_17334);

return statearr_17513;
})();
if(cljs.core.truth_(inst_17335)){
var statearr_17514_18541 = state_17443__$1;
(statearr_17514_18541[(1)] = (13));

} else {
var statearr_17515_18542 = state_17443__$1;
(statearr_17515_18542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (18))){
var inst_17370 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17516_18543 = state_17443__$1;
(statearr_17516_18543[(2)] = inst_17370);

(statearr_17516_18543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (42))){
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17443__$1,(45),dchan);
} else {
if((state_val_17444 === (37))){
var inst_17412 = (state_17443[(22)]);
var inst_17313 = (state_17443[(11)]);
var inst_17403 = (state_17443[(23)]);
var inst_17412__$1 = cljs.core.first(inst_17403);
var inst_17413 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17412__$1,inst_17313,done);
var state_17443__$1 = (function (){var statearr_17517 = state_17443;
(statearr_17517[(22)] = inst_17412__$1);

return statearr_17517;
})();
if(cljs.core.truth_(inst_17413)){
var statearr_17518_18544 = state_17443__$1;
(statearr_17518_18544[(1)] = (39));

} else {
var statearr_17519_18545 = state_17443__$1;
(statearr_17519_18545[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (8))){
var inst_17325 = (state_17443[(15)]);
var inst_17324 = (state_17443[(16)]);
var inst_17327 = (inst_17325 < inst_17324);
var inst_17328 = inst_17327;
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17328)){
var statearr_17520_18546 = state_17443__$1;
(statearr_17520_18546[(1)] = (10));

} else {
var statearr_17521_18547 = state_17443__$1;
(statearr_17521_18547[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16702__auto__ = null;
var cljs$core$async$mult_$_state_machine__16702__auto____0 = (function (){
var statearr_17522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17522[(0)] = cljs$core$async$mult_$_state_machine__16702__auto__);

(statearr_17522[(1)] = (1));

return statearr_17522;
});
var cljs$core$async$mult_$_state_machine__16702__auto____1 = (function (state_17443){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17443);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17523){var ex__16705__auto__ = e17523;
var statearr_17524_18548 = state_17443;
(statearr_17524_18548[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17443[(4)]))){
var statearr_17525_18549 = state_17443;
(statearr_17525_18549[(1)] = cljs.core.first((state_17443[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18550 = state_17443;
state_17443 = G__18550;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16702__auto__ = function(state_17443){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16702__auto____1.call(this,state_17443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16702__auto____0;
cljs$core$async$mult_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16702__auto____1;
return cljs$core$async$mult_$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17526 = f__16773__auto__();
(statearr_17526[(6)] = c__16772__auto___18493);

return statearr_17526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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
var G__17528 = arguments.length;
switch (G__17528) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18552 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18552(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18553 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18553(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18554 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18554(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18555 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18555(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18556 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18556(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18557 = arguments.length;
var i__5770__auto___18558 = (0);
while(true){
if((i__5770__auto___18558 < len__5769__auto___18557)){
args__5775__auto__.push((arguments[i__5770__auto___18558]));

var G__18559 = (i__5770__auto___18558 + (1));
i__5770__auto___18558 = G__18559;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17533){
var map__17534 = p__17533;
var map__17534__$1 = cljs.core.__destructure_map(map__17534);
var opts = map__17534__$1;
var statearr_17535_18560 = state;
(statearr_17535_18560[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17536_18561 = state;
(statearr_17536_18561[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17537_18562 = state;
(statearr_17537_18562[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17529){
var G__17530 = cljs.core.first(seq17529);
var seq17529__$1 = cljs.core.next(seq17529);
var G__17531 = cljs.core.first(seq17529__$1);
var seq17529__$2 = cljs.core.next(seq17529__$1);
var G__17532 = cljs.core.first(seq17529__$2);
var seq17529__$3 = cljs.core.next(seq17529__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17530,G__17531,G__17532,seq17529__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17538 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17539){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17539 = meta17539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17540,meta17539__$1){
var self__ = this;
var _17540__$1 = this;
return (new cljs.core.async.t_cljs$core$async17538(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17539__$1));
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17540){
var self__ = this;
var _17540__$1 = this;
return self__.meta17539;
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17539","meta17539",-1722291887,null)], null);
}));

(cljs.core.async.t_cljs$core$async17538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17538");

(cljs.core.async.t_cljs$core$async17538.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17538.
 */
cljs.core.async.__GT_t_cljs$core$async17538 = (function cljs$core$async$__GT_t_cljs$core$async17538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17539){
return (new cljs.core.async.t_cljs$core$async17538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17539));
});


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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
var m = (new cljs.core.async.t_cljs$core$async17538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16772__auto___18563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17608){
var state_val_17609 = (state_17608[(1)]);
if((state_val_17609 === (7))){
var inst_17568 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
if(cljs.core.truth_(inst_17568)){
var statearr_17610_18564 = state_17608__$1;
(statearr_17610_18564[(1)] = (8));

} else {
var statearr_17611_18565 = state_17608__$1;
(statearr_17611_18565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (20))){
var inst_17561 = (state_17608[(7)]);
var state_17608__$1 = state_17608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17608__$1,(23),out,inst_17561);
} else {
if((state_val_17609 === (1))){
var inst_17544 = calc_state();
var inst_17545 = cljs.core.__destructure_map(inst_17544);
var inst_17546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17549 = inst_17544;
var state_17608__$1 = (function (){var statearr_17612 = state_17608;
(statearr_17612[(8)] = inst_17549);

(statearr_17612[(9)] = inst_17546);

(statearr_17612[(10)] = inst_17548);

(statearr_17612[(11)] = inst_17547);

return statearr_17612;
})();
var statearr_17613_18566 = state_17608__$1;
(statearr_17613_18566[(2)] = null);

(statearr_17613_18566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (24))){
var inst_17552 = (state_17608[(12)]);
var inst_17549 = inst_17552;
var state_17608__$1 = (function (){var statearr_17614 = state_17608;
(statearr_17614[(8)] = inst_17549);

return statearr_17614;
})();
var statearr_17615_18567 = state_17608__$1;
(statearr_17615_18567[(2)] = null);

(statearr_17615_18567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (4))){
var inst_17563 = (state_17608[(13)]);
var inst_17561 = (state_17608[(7)]);
var inst_17560 = (state_17608[(2)]);
var inst_17561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17560,(0),null);
var inst_17562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17560,(1),null);
var inst_17563__$1 = (inst_17561__$1 == null);
var state_17608__$1 = (function (){var statearr_17616 = state_17608;
(statearr_17616[(13)] = inst_17563__$1);

(statearr_17616[(14)] = inst_17562);

(statearr_17616[(7)] = inst_17561__$1);

return statearr_17616;
})();
if(cljs.core.truth_(inst_17563__$1)){
var statearr_17617_18568 = state_17608__$1;
(statearr_17617_18568[(1)] = (5));

} else {
var statearr_17618_18569 = state_17608__$1;
(statearr_17618_18569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (15))){
var inst_17582 = (state_17608[(15)]);
var inst_17553 = (state_17608[(16)]);
var inst_17582__$1 = cljs.core.empty_QMARK_(inst_17553);
var state_17608__$1 = (function (){var statearr_17619 = state_17608;
(statearr_17619[(15)] = inst_17582__$1);

return statearr_17619;
})();
if(inst_17582__$1){
var statearr_17620_18570 = state_17608__$1;
(statearr_17620_18570[(1)] = (17));

} else {
var statearr_17621_18571 = state_17608__$1;
(statearr_17621_18571[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (21))){
var inst_17552 = (state_17608[(12)]);
var inst_17549 = inst_17552;
var state_17608__$1 = (function (){var statearr_17622 = state_17608;
(statearr_17622[(8)] = inst_17549);

return statearr_17622;
})();
var statearr_17623_18572 = state_17608__$1;
(statearr_17623_18572[(2)] = null);

(statearr_17623_18572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (13))){
var inst_17575 = (state_17608[(2)]);
var inst_17576 = calc_state();
var inst_17549 = inst_17576;
var state_17608__$1 = (function (){var statearr_17624 = state_17608;
(statearr_17624[(8)] = inst_17549);

(statearr_17624[(17)] = inst_17575);

return statearr_17624;
})();
var statearr_17625_18573 = state_17608__$1;
(statearr_17625_18573[(2)] = null);

(statearr_17625_18573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (22))){
var inst_17602 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
var statearr_17626_18574 = state_17608__$1;
(statearr_17626_18574[(2)] = inst_17602);

(statearr_17626_18574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (6))){
var inst_17562 = (state_17608[(14)]);
var inst_17566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17562,change);
var state_17608__$1 = state_17608;
var statearr_17627_18575 = state_17608__$1;
(statearr_17627_18575[(2)] = inst_17566);

(statearr_17627_18575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (25))){
var state_17608__$1 = state_17608;
var statearr_17628_18576 = state_17608__$1;
(statearr_17628_18576[(2)] = null);

(statearr_17628_18576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (17))){
var inst_17554 = (state_17608[(18)]);
var inst_17562 = (state_17608[(14)]);
var inst_17584 = (inst_17554.cljs$core$IFn$_invoke$arity$1 ? inst_17554.cljs$core$IFn$_invoke$arity$1(inst_17562) : inst_17554.call(null,inst_17562));
var inst_17585 = cljs.core.not(inst_17584);
var state_17608__$1 = state_17608;
var statearr_17629_18577 = state_17608__$1;
(statearr_17629_18577[(2)] = inst_17585);

(statearr_17629_18577[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (3))){
var inst_17606 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17608__$1,inst_17606);
} else {
if((state_val_17609 === (12))){
var state_17608__$1 = state_17608;
var statearr_17630_18578 = state_17608__$1;
(statearr_17630_18578[(2)] = null);

(statearr_17630_18578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (2))){
var inst_17552 = (state_17608[(12)]);
var inst_17549 = (state_17608[(8)]);
var inst_17552__$1 = cljs.core.__destructure_map(inst_17549);
var inst_17553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17608__$1 = (function (){var statearr_17631 = state_17608;
(statearr_17631[(18)] = inst_17554);

(statearr_17631[(12)] = inst_17552__$1);

(statearr_17631[(16)] = inst_17553);

return statearr_17631;
})();
return cljs.core.async.ioc_alts_BANG_(state_17608__$1,(4),inst_17555);
} else {
if((state_val_17609 === (23))){
var inst_17593 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
if(cljs.core.truth_(inst_17593)){
var statearr_17632_18579 = state_17608__$1;
(statearr_17632_18579[(1)] = (24));

} else {
var statearr_17633_18580 = state_17608__$1;
(statearr_17633_18580[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (19))){
var inst_17588 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
var statearr_17634_18581 = state_17608__$1;
(statearr_17634_18581[(2)] = inst_17588);

(statearr_17634_18581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (11))){
var inst_17562 = (state_17608[(14)]);
var inst_17572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17562);
var state_17608__$1 = state_17608;
var statearr_17635_18582 = state_17608__$1;
(statearr_17635_18582[(2)] = inst_17572);

(statearr_17635_18582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (9))){
var inst_17562 = (state_17608[(14)]);
var inst_17553 = (state_17608[(16)]);
var inst_17579 = (state_17608[(19)]);
var inst_17579__$1 = (inst_17553.cljs$core$IFn$_invoke$arity$1 ? inst_17553.cljs$core$IFn$_invoke$arity$1(inst_17562) : inst_17553.call(null,inst_17562));
var state_17608__$1 = (function (){var statearr_17636 = state_17608;
(statearr_17636[(19)] = inst_17579__$1);

return statearr_17636;
})();
if(cljs.core.truth_(inst_17579__$1)){
var statearr_17637_18583 = state_17608__$1;
(statearr_17637_18583[(1)] = (14));

} else {
var statearr_17638_18584 = state_17608__$1;
(statearr_17638_18584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (5))){
var inst_17563 = (state_17608[(13)]);
var state_17608__$1 = state_17608;
var statearr_17639_18585 = state_17608__$1;
(statearr_17639_18585[(2)] = inst_17563);

(statearr_17639_18585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (14))){
var inst_17579 = (state_17608[(19)]);
var state_17608__$1 = state_17608;
var statearr_17640_18586 = state_17608__$1;
(statearr_17640_18586[(2)] = inst_17579);

(statearr_17640_18586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (26))){
var inst_17598 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
var statearr_17641_18587 = state_17608__$1;
(statearr_17641_18587[(2)] = inst_17598);

(statearr_17641_18587[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (16))){
var inst_17590 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
if(cljs.core.truth_(inst_17590)){
var statearr_17642_18588 = state_17608__$1;
(statearr_17642_18588[(1)] = (20));

} else {
var statearr_17643_18589 = state_17608__$1;
(statearr_17643_18589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (10))){
var inst_17604 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
var statearr_17644_18590 = state_17608__$1;
(statearr_17644_18590[(2)] = inst_17604);

(statearr_17644_18590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (18))){
var inst_17582 = (state_17608[(15)]);
var state_17608__$1 = state_17608;
var statearr_17645_18591 = state_17608__$1;
(statearr_17645_18591[(2)] = inst_17582);

(statearr_17645_18591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (8))){
var inst_17561 = (state_17608[(7)]);
var inst_17570 = (inst_17561 == null);
var state_17608__$1 = state_17608;
if(cljs.core.truth_(inst_17570)){
var statearr_17646_18592 = state_17608__$1;
(statearr_17646_18592[(1)] = (11));

} else {
var statearr_17647_18593 = state_17608__$1;
(statearr_17647_18593[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__16702__auto__ = null;
var cljs$core$async$mix_$_state_machine__16702__auto____0 = (function (){
var statearr_17648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17648[(0)] = cljs$core$async$mix_$_state_machine__16702__auto__);

(statearr_17648[(1)] = (1));

return statearr_17648;
});
var cljs$core$async$mix_$_state_machine__16702__auto____1 = (function (state_17608){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17608);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17649){var ex__16705__auto__ = e17649;
var statearr_17650_18594 = state_17608;
(statearr_17650_18594[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17608[(4)]))){
var statearr_17651_18595 = state_17608;
(statearr_17651_18595[(1)] = cljs.core.first((state_17608[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18596 = state_17608;
state_17608 = G__18596;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16702__auto__ = function(state_17608){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16702__auto____1.call(this,state_17608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16702__auto____0;
cljs$core$async$mix_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16702__auto____1;
return cljs$core$async$mix_$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17652 = f__16773__auto__();
(statearr_17652[(6)] = c__16772__auto___18563);

return statearr_17652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18597 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18597(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18598 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18598(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18599 = (function() {
var G__18600 = null;
var G__18600__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18600__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18600 = function(p,v){
switch(arguments.length){
case 1:
return G__18600__1.call(this,p);
case 2:
return G__18600__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18600.cljs$core$IFn$_invoke$arity$1 = G__18600__1;
G__18600.cljs$core$IFn$_invoke$arity$2 = G__18600__2;
return G__18600;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17654 = arguments.length;
switch (G__17654) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18599(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18599(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17659 = meta17659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17660,meta17659__$1){
var self__ = this;
var _17660__$1 = this;
return (new cljs.core.async.t_cljs$core$async17658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17659__$1));
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17660){
var self__ = this;
var _17660__$1 = this;
return self__.meta17659;
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17659","meta17659",955307409,null)], null);
}));

(cljs.core.async.t_cljs$core$async17658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17658");

(cljs.core.async.t_cljs$core$async17658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17658.
 */
cljs.core.async.__GT_t_cljs$core$async17658 = (function cljs$core$async$__GT_t_cljs$core$async17658(ch,topic_fn,buf_fn,mults,ensure_mult,meta17659){
return (new cljs.core.async.t_cljs$core$async17658(ch,topic_fn,buf_fn,mults,ensure_mult,meta17659));
});


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
var G__17657 = arguments.length;
switch (G__17657) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17655_SHARP_){
if(cljs.core.truth_((p1__17655_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17655_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17655_SHARP_.call(null,topic)))){
return p1__17655_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17655_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16772__auto___18603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17732){
var state_val_17733 = (state_17732[(1)]);
if((state_val_17733 === (7))){
var inst_17728 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17734_18604 = state_17732__$1;
(statearr_17734_18604[(2)] = inst_17728);

(statearr_17734_18604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (20))){
var state_17732__$1 = state_17732;
var statearr_17735_18605 = state_17732__$1;
(statearr_17735_18605[(2)] = null);

(statearr_17735_18605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (1))){
var state_17732__$1 = state_17732;
var statearr_17736_18606 = state_17732__$1;
(statearr_17736_18606[(2)] = null);

(statearr_17736_18606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (24))){
var inst_17711 = (state_17732[(7)]);
var inst_17720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17711);
var state_17732__$1 = state_17732;
var statearr_17737_18607 = state_17732__$1;
(statearr_17737_18607[(2)] = inst_17720);

(statearr_17737_18607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (4))){
var inst_17663 = (state_17732[(8)]);
var inst_17663__$1 = (state_17732[(2)]);
var inst_17664 = (inst_17663__$1 == null);
var state_17732__$1 = (function (){var statearr_17738 = state_17732;
(statearr_17738[(8)] = inst_17663__$1);

return statearr_17738;
})();
if(cljs.core.truth_(inst_17664)){
var statearr_17739_18608 = state_17732__$1;
(statearr_17739_18608[(1)] = (5));

} else {
var statearr_17740_18609 = state_17732__$1;
(statearr_17740_18609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (15))){
var inst_17705 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17741_18610 = state_17732__$1;
(statearr_17741_18610[(2)] = inst_17705);

(statearr_17741_18610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (21))){
var inst_17725 = (state_17732[(2)]);
var state_17732__$1 = (function (){var statearr_17742 = state_17732;
(statearr_17742[(9)] = inst_17725);

return statearr_17742;
})();
var statearr_17743_18611 = state_17732__$1;
(statearr_17743_18611[(2)] = null);

(statearr_17743_18611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (13))){
var inst_17687 = (state_17732[(10)]);
var inst_17689 = cljs.core.chunked_seq_QMARK_(inst_17687);
var state_17732__$1 = state_17732;
if(inst_17689){
var statearr_17744_18612 = state_17732__$1;
(statearr_17744_18612[(1)] = (16));

} else {
var statearr_17745_18613 = state_17732__$1;
(statearr_17745_18613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (22))){
var inst_17717 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
if(cljs.core.truth_(inst_17717)){
var statearr_17746_18614 = state_17732__$1;
(statearr_17746_18614[(1)] = (23));

} else {
var statearr_17747_18615 = state_17732__$1;
(statearr_17747_18615[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (6))){
var inst_17711 = (state_17732[(7)]);
var inst_17663 = (state_17732[(8)]);
var inst_17713 = (state_17732[(11)]);
var inst_17711__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17663) : topic_fn.call(null,inst_17663));
var inst_17712 = cljs.core.deref(mults);
var inst_17713__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17712,inst_17711__$1);
var state_17732__$1 = (function (){var statearr_17748 = state_17732;
(statearr_17748[(7)] = inst_17711__$1);

(statearr_17748[(11)] = inst_17713__$1);

return statearr_17748;
})();
if(cljs.core.truth_(inst_17713__$1)){
var statearr_17749_18616 = state_17732__$1;
(statearr_17749_18616[(1)] = (19));

} else {
var statearr_17750_18617 = state_17732__$1;
(statearr_17750_18617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (25))){
var inst_17722 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17751_18618 = state_17732__$1;
(statearr_17751_18618[(2)] = inst_17722);

(statearr_17751_18618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (17))){
var inst_17687 = (state_17732[(10)]);
var inst_17696 = cljs.core.first(inst_17687);
var inst_17697 = cljs.core.async.muxch_STAR_(inst_17696);
var inst_17698 = cljs.core.async.close_BANG_(inst_17697);
var inst_17699 = cljs.core.next(inst_17687);
var inst_17673 = inst_17699;
var inst_17674 = null;
var inst_17675 = (0);
var inst_17676 = (0);
var state_17732__$1 = (function (){var statearr_17752 = state_17732;
(statearr_17752[(12)] = inst_17698);

(statearr_17752[(13)] = inst_17675);

(statearr_17752[(14)] = inst_17676);

(statearr_17752[(15)] = inst_17673);

(statearr_17752[(16)] = inst_17674);

return statearr_17752;
})();
var statearr_17753_18619 = state_17732__$1;
(statearr_17753_18619[(2)] = null);

(statearr_17753_18619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (3))){
var inst_17730 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17732__$1,inst_17730);
} else {
if((state_val_17733 === (12))){
var inst_17707 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17754_18620 = state_17732__$1;
(statearr_17754_18620[(2)] = inst_17707);

(statearr_17754_18620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (2))){
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17732__$1,(4),ch);
} else {
if((state_val_17733 === (23))){
var state_17732__$1 = state_17732;
var statearr_17755_18621 = state_17732__$1;
(statearr_17755_18621[(2)] = null);

(statearr_17755_18621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (19))){
var inst_17663 = (state_17732[(8)]);
var inst_17713 = (state_17732[(11)]);
var inst_17715 = cljs.core.async.muxch_STAR_(inst_17713);
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17732__$1,(22),inst_17715,inst_17663);
} else {
if((state_val_17733 === (11))){
var inst_17687 = (state_17732[(10)]);
var inst_17673 = (state_17732[(15)]);
var inst_17687__$1 = cljs.core.seq(inst_17673);
var state_17732__$1 = (function (){var statearr_17756 = state_17732;
(statearr_17756[(10)] = inst_17687__$1);

return statearr_17756;
})();
if(inst_17687__$1){
var statearr_17757_18622 = state_17732__$1;
(statearr_17757_18622[(1)] = (13));

} else {
var statearr_17758_18623 = state_17732__$1;
(statearr_17758_18623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (9))){
var inst_17709 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17759_18624 = state_17732__$1;
(statearr_17759_18624[(2)] = inst_17709);

(statearr_17759_18624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (5))){
var inst_17670 = cljs.core.deref(mults);
var inst_17671 = cljs.core.vals(inst_17670);
var inst_17672 = cljs.core.seq(inst_17671);
var inst_17673 = inst_17672;
var inst_17674 = null;
var inst_17675 = (0);
var inst_17676 = (0);
var state_17732__$1 = (function (){var statearr_17760 = state_17732;
(statearr_17760[(13)] = inst_17675);

(statearr_17760[(14)] = inst_17676);

(statearr_17760[(15)] = inst_17673);

(statearr_17760[(16)] = inst_17674);

return statearr_17760;
})();
var statearr_17761_18625 = state_17732__$1;
(statearr_17761_18625[(2)] = null);

(statearr_17761_18625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (14))){
var state_17732__$1 = state_17732;
var statearr_17765_18626 = state_17732__$1;
(statearr_17765_18626[(2)] = null);

(statearr_17765_18626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (16))){
var inst_17687 = (state_17732[(10)]);
var inst_17691 = cljs.core.chunk_first(inst_17687);
var inst_17692 = cljs.core.chunk_rest(inst_17687);
var inst_17693 = cljs.core.count(inst_17691);
var inst_17673 = inst_17692;
var inst_17674 = inst_17691;
var inst_17675 = inst_17693;
var inst_17676 = (0);
var state_17732__$1 = (function (){var statearr_17766 = state_17732;
(statearr_17766[(13)] = inst_17675);

(statearr_17766[(14)] = inst_17676);

(statearr_17766[(15)] = inst_17673);

(statearr_17766[(16)] = inst_17674);

return statearr_17766;
})();
var statearr_17767_18627 = state_17732__$1;
(statearr_17767_18627[(2)] = null);

(statearr_17767_18627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (10))){
var inst_17675 = (state_17732[(13)]);
var inst_17676 = (state_17732[(14)]);
var inst_17673 = (state_17732[(15)]);
var inst_17674 = (state_17732[(16)]);
var inst_17681 = cljs.core._nth(inst_17674,inst_17676);
var inst_17682 = cljs.core.async.muxch_STAR_(inst_17681);
var inst_17683 = cljs.core.async.close_BANG_(inst_17682);
var inst_17684 = (inst_17676 + (1));
var tmp17762 = inst_17675;
var tmp17763 = inst_17673;
var tmp17764 = inst_17674;
var inst_17673__$1 = tmp17763;
var inst_17674__$1 = tmp17764;
var inst_17675__$1 = tmp17762;
var inst_17676__$1 = inst_17684;
var state_17732__$1 = (function (){var statearr_17768 = state_17732;
(statearr_17768[(17)] = inst_17683);

(statearr_17768[(13)] = inst_17675__$1);

(statearr_17768[(14)] = inst_17676__$1);

(statearr_17768[(15)] = inst_17673__$1);

(statearr_17768[(16)] = inst_17674__$1);

return statearr_17768;
})();
var statearr_17769_18628 = state_17732__$1;
(statearr_17769_18628[(2)] = null);

(statearr_17769_18628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (18))){
var inst_17702 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17770_18629 = state_17732__$1;
(statearr_17770_18629[(2)] = inst_17702);

(statearr_17770_18629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17733 === (8))){
var inst_17675 = (state_17732[(13)]);
var inst_17676 = (state_17732[(14)]);
var inst_17678 = (inst_17676 < inst_17675);
var inst_17679 = inst_17678;
var state_17732__$1 = state_17732;
if(cljs.core.truth_(inst_17679)){
var statearr_17771_18630 = state_17732__$1;
(statearr_17771_18630[(1)] = (10));

} else {
var statearr_17772_18631 = state_17732__$1;
(statearr_17772_18631[(1)] = (11));

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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17773[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17773[(1)] = (1));

return statearr_17773;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17732){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17732);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17774){var ex__16705__auto__ = e17774;
var statearr_17775_18632 = state_17732;
(statearr_17775_18632[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17732[(4)]))){
var statearr_17776_18633 = state_17732;
(statearr_17776_18633[(1)] = cljs.core.first((state_17732[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18634 = state_17732;
state_17732 = G__18634;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17777 = f__16773__auto__();
(statearr_17777[(6)] = c__16772__auto___18603);

return statearr_17777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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
var G__17779 = arguments.length;
switch (G__17779) {
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
var G__17781 = arguments.length;
switch (G__17781) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__17783 = arguments.length;
switch (G__17783) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16772__auto___18638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17826){
var state_val_17827 = (state_17826[(1)]);
if((state_val_17827 === (7))){
var state_17826__$1 = state_17826;
var statearr_17828_18639 = state_17826__$1;
(statearr_17828_18639[(2)] = null);

(statearr_17828_18639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (1))){
var state_17826__$1 = state_17826;
var statearr_17829_18640 = state_17826__$1;
(statearr_17829_18640[(2)] = null);

(statearr_17829_18640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (4))){
var inst_17787 = (state_17826[(7)]);
var inst_17786 = (state_17826[(8)]);
var inst_17789 = (inst_17787 < inst_17786);
var state_17826__$1 = state_17826;
if(cljs.core.truth_(inst_17789)){
var statearr_17830_18641 = state_17826__$1;
(statearr_17830_18641[(1)] = (6));

} else {
var statearr_17831_18642 = state_17826__$1;
(statearr_17831_18642[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (15))){
var inst_17812 = (state_17826[(9)]);
var inst_17817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17812);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17826__$1,(17),out,inst_17817);
} else {
if((state_val_17827 === (13))){
var inst_17812 = (state_17826[(9)]);
var inst_17812__$1 = (state_17826[(2)]);
var inst_17813 = cljs.core.some(cljs.core.nil_QMARK_,inst_17812__$1);
var state_17826__$1 = (function (){var statearr_17832 = state_17826;
(statearr_17832[(9)] = inst_17812__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17813)){
var statearr_17833_18643 = state_17826__$1;
(statearr_17833_18643[(1)] = (14));

} else {
var statearr_17834_18644 = state_17826__$1;
(statearr_17834_18644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (6))){
var state_17826__$1 = state_17826;
var statearr_17835_18645 = state_17826__$1;
(statearr_17835_18645[(2)] = null);

(statearr_17835_18645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (17))){
var inst_17819 = (state_17826[(2)]);
var state_17826__$1 = (function (){var statearr_17837 = state_17826;
(statearr_17837[(10)] = inst_17819);

return statearr_17837;
})();
var statearr_17838_18646 = state_17826__$1;
(statearr_17838_18646[(2)] = null);

(statearr_17838_18646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (3))){
var inst_17824 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17826__$1,inst_17824);
} else {
if((state_val_17827 === (12))){
var _ = (function (){var statearr_17839 = state_17826;
(statearr_17839[(4)] = cljs.core.rest((state_17826[(4)])));

return statearr_17839;
})();
var state_17826__$1 = state_17826;
var ex17836 = (state_17826__$1[(2)]);
var statearr_17840_18647 = state_17826__$1;
(statearr_17840_18647[(5)] = ex17836);


if((ex17836 instanceof Object)){
var statearr_17841_18648 = state_17826__$1;
(statearr_17841_18648[(1)] = (11));

(statearr_17841_18648[(5)] = null);

} else {
throw ex17836;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (2))){
var inst_17785 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17786 = cnt;
var inst_17787 = (0);
var state_17826__$1 = (function (){var statearr_17842 = state_17826;
(statearr_17842[(7)] = inst_17787);

(statearr_17842[(11)] = inst_17785);

(statearr_17842[(8)] = inst_17786);

return statearr_17842;
})();
var statearr_17843_18649 = state_17826__$1;
(statearr_17843_18649[(2)] = null);

(statearr_17843_18649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (11))){
var inst_17791 = (state_17826[(2)]);
var inst_17792 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17826__$1 = (function (){var statearr_17844 = state_17826;
(statearr_17844[(12)] = inst_17791);

return statearr_17844;
})();
var statearr_17845_18650 = state_17826__$1;
(statearr_17845_18650[(2)] = inst_17792);

(statearr_17845_18650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (9))){
var inst_17787 = (state_17826[(7)]);
var _ = (function (){var statearr_17846 = state_17826;
(statearr_17846[(4)] = cljs.core.cons((12),(state_17826[(4)])));

return statearr_17846;
})();
var inst_17798 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17787) : chs__$1.call(null,inst_17787));
var inst_17799 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17787) : done.call(null,inst_17787));
var inst_17800 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17798,inst_17799);
var ___$1 = (function (){var statearr_17847 = state_17826;
(statearr_17847[(4)] = cljs.core.rest((state_17826[(4)])));

return statearr_17847;
})();
var state_17826__$1 = state_17826;
var statearr_17848_18651 = state_17826__$1;
(statearr_17848_18651[(2)] = inst_17800);

(statearr_17848_18651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (5))){
var inst_17810 = (state_17826[(2)]);
var state_17826__$1 = (function (){var statearr_17849 = state_17826;
(statearr_17849[(13)] = inst_17810);

return statearr_17849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17826__$1,(13),dchan);
} else {
if((state_val_17827 === (14))){
var inst_17815 = cljs.core.async.close_BANG_(out);
var state_17826__$1 = state_17826;
var statearr_17850_18652 = state_17826__$1;
(statearr_17850_18652[(2)] = inst_17815);

(statearr_17850_18652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (16))){
var inst_17822 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17851_18653 = state_17826__$1;
(statearr_17851_18653[(2)] = inst_17822);

(statearr_17851_18653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (10))){
var inst_17787 = (state_17826[(7)]);
var inst_17803 = (state_17826[(2)]);
var inst_17804 = (inst_17787 + (1));
var inst_17787__$1 = inst_17804;
var state_17826__$1 = (function (){var statearr_17852 = state_17826;
(statearr_17852[(14)] = inst_17803);

(statearr_17852[(7)] = inst_17787__$1);

return statearr_17852;
})();
var statearr_17853_18654 = state_17826__$1;
(statearr_17853_18654[(2)] = null);

(statearr_17853_18654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (8))){
var inst_17808 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17854_18655 = state_17826__$1;
(statearr_17854_18655[(2)] = inst_17808);

(statearr_17854_18655[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17855[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17855[(1)] = (1));

return statearr_17855;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17826){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17826);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17856){var ex__16705__auto__ = e17856;
var statearr_17857_18656 = state_17826;
(statearr_17857_18656[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17826[(4)]))){
var statearr_17858_18657 = state_17826;
(statearr_17858_18657[(1)] = cljs.core.first((state_17826[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18658 = state_17826;
state_17826 = G__18658;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17859 = f__16773__auto__();
(statearr_17859[(6)] = c__16772__auto___18638);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

}

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
var G__17862 = arguments.length;
switch (G__17862) {
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
var c__16772__auto___18660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17894){
var state_val_17895 = (state_17894[(1)]);
if((state_val_17895 === (7))){
var inst_17874 = (state_17894[(7)]);
var inst_17873 = (state_17894[(8)]);
var inst_17873__$1 = (state_17894[(2)]);
var inst_17874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17873__$1,(0),null);
var inst_17875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17873__$1,(1),null);
var inst_17876 = (inst_17874__$1 == null);
var state_17894__$1 = (function (){var statearr_17896 = state_17894;
(statearr_17896[(7)] = inst_17874__$1);

(statearr_17896[(9)] = inst_17875);

(statearr_17896[(8)] = inst_17873__$1);

return statearr_17896;
})();
if(cljs.core.truth_(inst_17876)){
var statearr_17897_18661 = state_17894__$1;
(statearr_17897_18661[(1)] = (8));

} else {
var statearr_17898_18662 = state_17894__$1;
(statearr_17898_18662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (1))){
var inst_17863 = cljs.core.vec(chs);
var inst_17864 = inst_17863;
var state_17894__$1 = (function (){var statearr_17899 = state_17894;
(statearr_17899[(10)] = inst_17864);

return statearr_17899;
})();
var statearr_17900_18663 = state_17894__$1;
(statearr_17900_18663[(2)] = null);

(statearr_17900_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (4))){
var inst_17864 = (state_17894[(10)]);
var state_17894__$1 = state_17894;
return cljs.core.async.ioc_alts_BANG_(state_17894__$1,(7),inst_17864);
} else {
if((state_val_17895 === (6))){
var inst_17890 = (state_17894[(2)]);
var state_17894__$1 = state_17894;
var statearr_17901_18664 = state_17894__$1;
(statearr_17901_18664[(2)] = inst_17890);

(statearr_17901_18664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (3))){
var inst_17892 = (state_17894[(2)]);
var state_17894__$1 = state_17894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17894__$1,inst_17892);
} else {
if((state_val_17895 === (2))){
var inst_17864 = (state_17894[(10)]);
var inst_17866 = cljs.core.count(inst_17864);
var inst_17867 = (inst_17866 > (0));
var state_17894__$1 = state_17894;
if(cljs.core.truth_(inst_17867)){
var statearr_17903_18665 = state_17894__$1;
(statearr_17903_18665[(1)] = (4));

} else {
var statearr_17904_18666 = state_17894__$1;
(statearr_17904_18666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (11))){
var inst_17864 = (state_17894[(10)]);
var inst_17883 = (state_17894[(2)]);
var tmp17902 = inst_17864;
var inst_17864__$1 = tmp17902;
var state_17894__$1 = (function (){var statearr_17905 = state_17894;
(statearr_17905[(10)] = inst_17864__$1);

(statearr_17905[(11)] = inst_17883);

return statearr_17905;
})();
var statearr_17906_18667 = state_17894__$1;
(statearr_17906_18667[(2)] = null);

(statearr_17906_18667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (9))){
var inst_17874 = (state_17894[(7)]);
var state_17894__$1 = state_17894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17894__$1,(11),out,inst_17874);
} else {
if((state_val_17895 === (5))){
var inst_17888 = cljs.core.async.close_BANG_(out);
var state_17894__$1 = state_17894;
var statearr_17907_18668 = state_17894__$1;
(statearr_17907_18668[(2)] = inst_17888);

(statearr_17907_18668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (10))){
var inst_17886 = (state_17894[(2)]);
var state_17894__$1 = state_17894;
var statearr_17908_18669 = state_17894__$1;
(statearr_17908_18669[(2)] = inst_17886);

(statearr_17908_18669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17895 === (8))){
var inst_17864 = (state_17894[(10)]);
var inst_17874 = (state_17894[(7)]);
var inst_17875 = (state_17894[(9)]);
var inst_17873 = (state_17894[(8)]);
var inst_17878 = (function (){var cs = inst_17864;
var vec__17869 = inst_17873;
var v = inst_17874;
var c = inst_17875;
return (function (p1__17860_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17860_SHARP_);
});
})();
var inst_17879 = cljs.core.filterv(inst_17878,inst_17864);
var inst_17864__$1 = inst_17879;
var state_17894__$1 = (function (){var statearr_17909 = state_17894;
(statearr_17909[(10)] = inst_17864__$1);

return statearr_17909;
})();
var statearr_17910_18670 = state_17894__$1;
(statearr_17910_18670[(2)] = null);

(statearr_17910_18670[(1)] = (2));


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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17911[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17911[(1)] = (1));

return statearr_17911;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17894){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17894);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17912){var ex__16705__auto__ = e17912;
var statearr_17913_18671 = state_17894;
(statearr_17913_18671[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17894[(4)]))){
var statearr_17914_18672 = state_17894;
(statearr_17914_18672[(1)] = cljs.core.first((state_17894[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18673 = state_17894;
state_17894 = G__18673;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17915 = f__16773__auto__();
(statearr_17915[(6)] = c__16772__auto___18660);

return statearr_17915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
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
var G__17917 = arguments.length;
switch (G__17917) {
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
var c__16772__auto___18675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17941){
var state_val_17942 = (state_17941[(1)]);
if((state_val_17942 === (7))){
var inst_17923 = (state_17941[(7)]);
var inst_17923__$1 = (state_17941[(2)]);
var inst_17924 = (inst_17923__$1 == null);
var inst_17925 = cljs.core.not(inst_17924);
var state_17941__$1 = (function (){var statearr_17943 = state_17941;
(statearr_17943[(7)] = inst_17923__$1);

return statearr_17943;
})();
if(inst_17925){
var statearr_17944_18676 = state_17941__$1;
(statearr_17944_18676[(1)] = (8));

} else {
var statearr_17945_18677 = state_17941__$1;
(statearr_17945_18677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (1))){
var inst_17918 = (0);
var state_17941__$1 = (function (){var statearr_17946 = state_17941;
(statearr_17946[(8)] = inst_17918);

return statearr_17946;
})();
var statearr_17947_18678 = state_17941__$1;
(statearr_17947_18678[(2)] = null);

(statearr_17947_18678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (4))){
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17941__$1,(7),ch);
} else {
if((state_val_17942 === (6))){
var inst_17936 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17948_18679 = state_17941__$1;
(statearr_17948_18679[(2)] = inst_17936);

(statearr_17948_18679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (3))){
var inst_17938 = (state_17941[(2)]);
var inst_17939 = cljs.core.async.close_BANG_(out);
var state_17941__$1 = (function (){var statearr_17949 = state_17941;
(statearr_17949[(9)] = inst_17938);

return statearr_17949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17941__$1,inst_17939);
} else {
if((state_val_17942 === (2))){
var inst_17918 = (state_17941[(8)]);
var inst_17920 = (inst_17918 < n);
var state_17941__$1 = state_17941;
if(cljs.core.truth_(inst_17920)){
var statearr_17950_18680 = state_17941__$1;
(statearr_17950_18680[(1)] = (4));

} else {
var statearr_17951_18681 = state_17941__$1;
(statearr_17951_18681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (11))){
var inst_17918 = (state_17941[(8)]);
var inst_17928 = (state_17941[(2)]);
var inst_17929 = (inst_17918 + (1));
var inst_17918__$1 = inst_17929;
var state_17941__$1 = (function (){var statearr_17952 = state_17941;
(statearr_17952[(10)] = inst_17928);

(statearr_17952[(8)] = inst_17918__$1);

return statearr_17952;
})();
var statearr_17953_18682 = state_17941__$1;
(statearr_17953_18682[(2)] = null);

(statearr_17953_18682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (9))){
var state_17941__$1 = state_17941;
var statearr_17954_18683 = state_17941__$1;
(statearr_17954_18683[(2)] = null);

(statearr_17954_18683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (5))){
var state_17941__$1 = state_17941;
var statearr_17955_18684 = state_17941__$1;
(statearr_17955_18684[(2)] = null);

(statearr_17955_18684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (10))){
var inst_17933 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17956_18685 = state_17941__$1;
(statearr_17956_18685[(2)] = inst_17933);

(statearr_17956_18685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (8))){
var inst_17923 = (state_17941[(7)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17941__$1,(11),out,inst_17923);
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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_17957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17957[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17957[(1)] = (1));

return statearr_17957;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17941){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17941);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17958){var ex__16705__auto__ = e17958;
var statearr_17959_18686 = state_17941;
(statearr_17959_18686[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17941[(4)]))){
var statearr_17960_18687 = state_17941;
(statearr_17960_18687[(1)] = cljs.core.first((state_17941[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18688 = state_17941;
state_17941 = G__18688;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_17961 = f__16773__auto__();
(statearr_17961[(6)] = c__16772__auto___18675);

return statearr_17961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17966 = (function (f,ch,meta17964,_,fn1,meta17967){
this.f = f;
this.ch = ch;
this.meta17964 = meta17964;
this._ = _;
this.fn1 = fn1;
this.meta17967 = meta17967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17968,meta17967__$1){
var self__ = this;
var _17968__$1 = this;
return (new cljs.core.async.t_cljs$core$async17966(self__.f,self__.ch,self__.meta17964,self__._,self__.fn1,meta17967__$1));
}));

(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17968){
var self__ = this;
var _17968__$1 = this;
return self__.meta17967;
}));

(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17962_SHARP_){
var G__17969 = (((p1__17962_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17962_SHARP_) : self__.f.call(null,p1__17962_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17969) : f1.call(null,G__17969));
});
}));

(cljs.core.async.t_cljs$core$async17966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17964","meta17964",509530127,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17963","cljs.core.async/t_cljs$core$async17963",-1161544132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17967","meta17967",-2093704198,null)], null);
}));

(cljs.core.async.t_cljs$core$async17966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17966");

(cljs.core.async.t_cljs$core$async17966.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17966.
 */
cljs.core.async.__GT_t_cljs$core$async17966 = (function cljs$core$async$__GT_t_cljs$core$async17966(f,ch,meta17964,_,fn1,meta17967){
return (new cljs.core.async.t_cljs$core$async17966(f,ch,meta17964,_,fn1,meta17967));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17963 = (function (f,ch,meta17964){
this.f = f;
this.ch = ch;
this.meta17964 = meta17964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17965,meta17964__$1){
var self__ = this;
var _17965__$1 = this;
return (new cljs.core.async.t_cljs$core$async17963(self__.f,self__.ch,meta17964__$1));
}));

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17965){
var self__ = this;
var _17965__$1 = this;
return self__.meta17964;
}));

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17966(self__.f,self__.ch,self__.meta17964,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17970 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17970) : self__.f.call(null,G__17970));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17964","meta17964",509530127,null)], null);
}));

(cljs.core.async.t_cljs$core$async17963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17963");

(cljs.core.async.t_cljs$core$async17963.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17963.
 */
cljs.core.async.__GT_t_cljs$core$async17963 = (function cljs$core$async$__GT_t_cljs$core$async17963(f,ch,meta17964){
return (new cljs.core.async.t_cljs$core$async17963(f,ch,meta17964));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17971 = (function (f,ch,meta17972){
this.f = f;
this.ch = ch;
this.meta17972 = meta17972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17973,meta17972__$1){
var self__ = this;
var _17973__$1 = this;
return (new cljs.core.async.t_cljs$core$async17971(self__.f,self__.ch,meta17972__$1));
}));

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17973){
var self__ = this;
var _17973__$1 = this;
return self__.meta17972;
}));

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17972","meta17972",-632436674,null)], null);
}));

(cljs.core.async.t_cljs$core$async17971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17971");

(cljs.core.async.t_cljs$core$async17971.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17971.
 */
cljs.core.async.__GT_t_cljs$core$async17971 = (function cljs$core$async$__GT_t_cljs$core$async17971(f,ch,meta17972){
return (new cljs.core.async.t_cljs$core$async17971(f,ch,meta17972));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17974 = (function (p,ch,meta17975){
this.p = p;
this.ch = ch;
this.meta17975 = meta17975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17976,meta17975__$1){
var self__ = this;
var _17976__$1 = this;
return (new cljs.core.async.t_cljs$core$async17974(self__.p,self__.ch,meta17975__$1));
}));

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17976){
var self__ = this;
var _17976__$1 = this;
return self__.meta17975;
}));

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17975","meta17975",2006935218,null)], null);
}));

(cljs.core.async.t_cljs$core$async17974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17974");

(cljs.core.async.t_cljs$core$async17974.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17974.
 */
cljs.core.async.__GT_t_cljs$core$async17974 = (function cljs$core$async$__GT_t_cljs$core$async17974(p,ch,meta17975){
return (new cljs.core.async.t_cljs$core$async17974(p,ch,meta17975));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17974(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17978 = arguments.length;
switch (G__17978) {
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
var c__16772__auto___18690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_17999){
var state_val_18000 = (state_17999[(1)]);
if((state_val_18000 === (7))){
var inst_17995 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
var statearr_18001_18691 = state_17999__$1;
(statearr_18001_18691[(2)] = inst_17995);

(statearr_18001_18691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (1))){
var state_17999__$1 = state_17999;
var statearr_18002_18692 = state_17999__$1;
(statearr_18002_18692[(2)] = null);

(statearr_18002_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (4))){
var inst_17981 = (state_17999[(7)]);
var inst_17981__$1 = (state_17999[(2)]);
var inst_17982 = (inst_17981__$1 == null);
var state_17999__$1 = (function (){var statearr_18003 = state_17999;
(statearr_18003[(7)] = inst_17981__$1);

return statearr_18003;
})();
if(cljs.core.truth_(inst_17982)){
var statearr_18004_18693 = state_17999__$1;
(statearr_18004_18693[(1)] = (5));

} else {
var statearr_18005_18694 = state_17999__$1;
(statearr_18005_18694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (6))){
var inst_17981 = (state_17999[(7)]);
var inst_17986 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17981) : p.call(null,inst_17981));
var state_17999__$1 = state_17999;
if(cljs.core.truth_(inst_17986)){
var statearr_18006_18695 = state_17999__$1;
(statearr_18006_18695[(1)] = (8));

} else {
var statearr_18007_18696 = state_17999__$1;
(statearr_18007_18696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (3))){
var inst_17997 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17999__$1,inst_17997);
} else {
if((state_val_18000 === (2))){
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17999__$1,(4),ch);
} else {
if((state_val_18000 === (11))){
var inst_17989 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
var statearr_18008_18697 = state_17999__$1;
(statearr_18008_18697[(2)] = inst_17989);

(statearr_18008_18697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (9))){
var state_17999__$1 = state_17999;
var statearr_18009_18698 = state_17999__$1;
(statearr_18009_18698[(2)] = null);

(statearr_18009_18698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (5))){
var inst_17984 = cljs.core.async.close_BANG_(out);
var state_17999__$1 = state_17999;
var statearr_18010_18699 = state_17999__$1;
(statearr_18010_18699[(2)] = inst_17984);

(statearr_18010_18699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (10))){
var inst_17992 = (state_17999[(2)]);
var state_17999__$1 = (function (){var statearr_18011 = state_17999;
(statearr_18011[(8)] = inst_17992);

return statearr_18011;
})();
var statearr_18012_18700 = state_17999__$1;
(statearr_18012_18700[(2)] = null);

(statearr_18012_18700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18000 === (8))){
var inst_17981 = (state_17999[(7)]);
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17999__$1,(11),out,inst_17981);
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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_18013 = [null,null,null,null,null,null,null,null,null];
(statearr_18013[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18013[(1)] = (1));

return statearr_18013;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17999){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17999);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18014){var ex__16705__auto__ = e18014;
var statearr_18015_18701 = state_17999;
(statearr_18015_18701[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17999[(4)]))){
var statearr_18016_18702 = state_17999;
(statearr_18016_18702[(1)] = cljs.core.first((state_17999[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18703 = state_17999;
state_17999 = G__18703;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_18017 = f__16773__auto__();
(statearr_18017[(6)] = c__16772__auto___18690);

return statearr_18017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18019 = arguments.length;
switch (G__18019) {
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
var c__16772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_18081){
var state_val_18082 = (state_18081[(1)]);
if((state_val_18082 === (7))){
var inst_18077 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
var statearr_18083_18705 = state_18081__$1;
(statearr_18083_18705[(2)] = inst_18077);

(statearr_18083_18705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (20))){
var inst_18047 = (state_18081[(7)]);
var inst_18058 = (state_18081[(2)]);
var inst_18059 = cljs.core.next(inst_18047);
var inst_18033 = inst_18059;
var inst_18034 = null;
var inst_18035 = (0);
var inst_18036 = (0);
var state_18081__$1 = (function (){var statearr_18084 = state_18081;
(statearr_18084[(8)] = inst_18058);

(statearr_18084[(9)] = inst_18035);

(statearr_18084[(10)] = inst_18034);

(statearr_18084[(11)] = inst_18033);

(statearr_18084[(12)] = inst_18036);

return statearr_18084;
})();
var statearr_18085_18706 = state_18081__$1;
(statearr_18085_18706[(2)] = null);

(statearr_18085_18706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (1))){
var state_18081__$1 = state_18081;
var statearr_18086_18707 = state_18081__$1;
(statearr_18086_18707[(2)] = null);

(statearr_18086_18707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (4))){
var inst_18022 = (state_18081[(13)]);
var inst_18022__$1 = (state_18081[(2)]);
var inst_18023 = (inst_18022__$1 == null);
var state_18081__$1 = (function (){var statearr_18087 = state_18081;
(statearr_18087[(13)] = inst_18022__$1);

return statearr_18087;
})();
if(cljs.core.truth_(inst_18023)){
var statearr_18088_18708 = state_18081__$1;
(statearr_18088_18708[(1)] = (5));

} else {
var statearr_18089_18709 = state_18081__$1;
(statearr_18089_18709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (15))){
var state_18081__$1 = state_18081;
var statearr_18093_18710 = state_18081__$1;
(statearr_18093_18710[(2)] = null);

(statearr_18093_18710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (21))){
var state_18081__$1 = state_18081;
var statearr_18094_18711 = state_18081__$1;
(statearr_18094_18711[(2)] = null);

(statearr_18094_18711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (13))){
var inst_18035 = (state_18081[(9)]);
var inst_18034 = (state_18081[(10)]);
var inst_18033 = (state_18081[(11)]);
var inst_18036 = (state_18081[(12)]);
var inst_18043 = (state_18081[(2)]);
var inst_18044 = (inst_18036 + (1));
var tmp18090 = inst_18035;
var tmp18091 = inst_18034;
var tmp18092 = inst_18033;
var inst_18033__$1 = tmp18092;
var inst_18034__$1 = tmp18091;
var inst_18035__$1 = tmp18090;
var inst_18036__$1 = inst_18044;
var state_18081__$1 = (function (){var statearr_18095 = state_18081;
(statearr_18095[(14)] = inst_18043);

(statearr_18095[(9)] = inst_18035__$1);

(statearr_18095[(10)] = inst_18034__$1);

(statearr_18095[(11)] = inst_18033__$1);

(statearr_18095[(12)] = inst_18036__$1);

return statearr_18095;
})();
var statearr_18096_18712 = state_18081__$1;
(statearr_18096_18712[(2)] = null);

(statearr_18096_18712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (22))){
var state_18081__$1 = state_18081;
var statearr_18097_18713 = state_18081__$1;
(statearr_18097_18713[(2)] = null);

(statearr_18097_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (6))){
var inst_18022 = (state_18081[(13)]);
var inst_18031 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18022) : f.call(null,inst_18022));
var inst_18032 = cljs.core.seq(inst_18031);
var inst_18033 = inst_18032;
var inst_18034 = null;
var inst_18035 = (0);
var inst_18036 = (0);
var state_18081__$1 = (function (){var statearr_18098 = state_18081;
(statearr_18098[(9)] = inst_18035);

(statearr_18098[(10)] = inst_18034);

(statearr_18098[(11)] = inst_18033);

(statearr_18098[(12)] = inst_18036);

return statearr_18098;
})();
var statearr_18099_18714 = state_18081__$1;
(statearr_18099_18714[(2)] = null);

(statearr_18099_18714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (17))){
var inst_18047 = (state_18081[(7)]);
var inst_18051 = cljs.core.chunk_first(inst_18047);
var inst_18052 = cljs.core.chunk_rest(inst_18047);
var inst_18053 = cljs.core.count(inst_18051);
var inst_18033 = inst_18052;
var inst_18034 = inst_18051;
var inst_18035 = inst_18053;
var inst_18036 = (0);
var state_18081__$1 = (function (){var statearr_18100 = state_18081;
(statearr_18100[(9)] = inst_18035);

(statearr_18100[(10)] = inst_18034);

(statearr_18100[(11)] = inst_18033);

(statearr_18100[(12)] = inst_18036);

return statearr_18100;
})();
var statearr_18101_18715 = state_18081__$1;
(statearr_18101_18715[(2)] = null);

(statearr_18101_18715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (3))){
var inst_18079 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18081__$1,inst_18079);
} else {
if((state_val_18082 === (12))){
var inst_18067 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
var statearr_18102_18716 = state_18081__$1;
(statearr_18102_18716[(2)] = inst_18067);

(statearr_18102_18716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (2))){
var state_18081__$1 = state_18081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18081__$1,(4),in$);
} else {
if((state_val_18082 === (23))){
var inst_18075 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
var statearr_18103_18717 = state_18081__$1;
(statearr_18103_18717[(2)] = inst_18075);

(statearr_18103_18717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (19))){
var inst_18062 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
var statearr_18104_18718 = state_18081__$1;
(statearr_18104_18718[(2)] = inst_18062);

(statearr_18104_18718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (11))){
var inst_18047 = (state_18081[(7)]);
var inst_18033 = (state_18081[(11)]);
var inst_18047__$1 = cljs.core.seq(inst_18033);
var state_18081__$1 = (function (){var statearr_18105 = state_18081;
(statearr_18105[(7)] = inst_18047__$1);

return statearr_18105;
})();
if(inst_18047__$1){
var statearr_18106_18719 = state_18081__$1;
(statearr_18106_18719[(1)] = (14));

} else {
var statearr_18107_18720 = state_18081__$1;
(statearr_18107_18720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (9))){
var inst_18069 = (state_18081[(2)]);
var inst_18070 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18081__$1 = (function (){var statearr_18108 = state_18081;
(statearr_18108[(15)] = inst_18069);

return statearr_18108;
})();
if(cljs.core.truth_(inst_18070)){
var statearr_18109_18721 = state_18081__$1;
(statearr_18109_18721[(1)] = (21));

} else {
var statearr_18110_18722 = state_18081__$1;
(statearr_18110_18722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (5))){
var inst_18025 = cljs.core.async.close_BANG_(out);
var state_18081__$1 = state_18081;
var statearr_18111_18723 = state_18081__$1;
(statearr_18111_18723[(2)] = inst_18025);

(statearr_18111_18723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (14))){
var inst_18047 = (state_18081[(7)]);
var inst_18049 = cljs.core.chunked_seq_QMARK_(inst_18047);
var state_18081__$1 = state_18081;
if(inst_18049){
var statearr_18112_18724 = state_18081__$1;
(statearr_18112_18724[(1)] = (17));

} else {
var statearr_18113_18725 = state_18081__$1;
(statearr_18113_18725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (16))){
var inst_18065 = (state_18081[(2)]);
var state_18081__$1 = state_18081;
var statearr_18114_18726 = state_18081__$1;
(statearr_18114_18726[(2)] = inst_18065);

(statearr_18114_18726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18082 === (10))){
var inst_18034 = (state_18081[(10)]);
var inst_18036 = (state_18081[(12)]);
var inst_18041 = cljs.core._nth(inst_18034,inst_18036);
var state_18081__$1 = state_18081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18081__$1,(13),out,inst_18041);
} else {
if((state_val_18082 === (18))){
var inst_18047 = (state_18081[(7)]);
var inst_18056 = cljs.core.first(inst_18047);
var state_18081__$1 = state_18081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18081__$1,(20),out,inst_18056);
} else {
if((state_val_18082 === (8))){
var inst_18035 = (state_18081[(9)]);
var inst_18036 = (state_18081[(12)]);
var inst_18038 = (inst_18036 < inst_18035);
var inst_18039 = inst_18038;
var state_18081__$1 = state_18081;
if(cljs.core.truth_(inst_18039)){
var statearr_18115_18727 = state_18081__$1;
(statearr_18115_18727[(1)] = (10));

} else {
var statearr_18116_18728 = state_18081__$1;
(statearr_18116_18728[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_18117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__);

(statearr_18117[(1)] = (1));

return statearr_18117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1 = (function (state_18081){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18081);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18118){var ex__16705__auto__ = e18118;
var statearr_18119_18729 = state_18081;
(statearr_18119_18729[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18081[(4)]))){
var statearr_18120_18730 = state_18081;
(statearr_18120_18730[(1)] = cljs.core.first((state_18081[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18731 = state_18081;
state_18081 = G__18731;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__ = function(state_18081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1.call(this,state_18081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_18121 = f__16773__auto__();
(statearr_18121[(6)] = c__16772__auto__);

return statearr_18121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

return c__16772__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18123 = arguments.length;
switch (G__18123) {
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
var G__18125 = arguments.length;
switch (G__18125) {
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
var G__18127 = arguments.length;
switch (G__18127) {
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
var c__16772__auto___18735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_18151){
var state_val_18152 = (state_18151[(1)]);
if((state_val_18152 === (7))){
var inst_18146 = (state_18151[(2)]);
var state_18151__$1 = state_18151;
var statearr_18153_18736 = state_18151__$1;
(statearr_18153_18736[(2)] = inst_18146);

(statearr_18153_18736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (1))){
var inst_18128 = null;
var state_18151__$1 = (function (){var statearr_18154 = state_18151;
(statearr_18154[(7)] = inst_18128);

return statearr_18154;
})();
var statearr_18155_18737 = state_18151__$1;
(statearr_18155_18737[(2)] = null);

(statearr_18155_18737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (4))){
var inst_18131 = (state_18151[(8)]);
var inst_18131__$1 = (state_18151[(2)]);
var inst_18132 = (inst_18131__$1 == null);
var inst_18133 = cljs.core.not(inst_18132);
var state_18151__$1 = (function (){var statearr_18156 = state_18151;
(statearr_18156[(8)] = inst_18131__$1);

return statearr_18156;
})();
if(inst_18133){
var statearr_18157_18738 = state_18151__$1;
(statearr_18157_18738[(1)] = (5));

} else {
var statearr_18158_18739 = state_18151__$1;
(statearr_18158_18739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (6))){
var state_18151__$1 = state_18151;
var statearr_18159_18740 = state_18151__$1;
(statearr_18159_18740[(2)] = null);

(statearr_18159_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (3))){
var inst_18148 = (state_18151[(2)]);
var inst_18149 = cljs.core.async.close_BANG_(out);
var state_18151__$1 = (function (){var statearr_18160 = state_18151;
(statearr_18160[(9)] = inst_18148);

return statearr_18160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18151__$1,inst_18149);
} else {
if((state_val_18152 === (2))){
var state_18151__$1 = state_18151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18151__$1,(4),ch);
} else {
if((state_val_18152 === (11))){
var inst_18131 = (state_18151[(8)]);
var inst_18140 = (state_18151[(2)]);
var inst_18128 = inst_18131;
var state_18151__$1 = (function (){var statearr_18161 = state_18151;
(statearr_18161[(7)] = inst_18128);

(statearr_18161[(10)] = inst_18140);

return statearr_18161;
})();
var statearr_18162_18741 = state_18151__$1;
(statearr_18162_18741[(2)] = null);

(statearr_18162_18741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (9))){
var inst_18131 = (state_18151[(8)]);
var state_18151__$1 = state_18151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18151__$1,(11),out,inst_18131);
} else {
if((state_val_18152 === (5))){
var inst_18131 = (state_18151[(8)]);
var inst_18128 = (state_18151[(7)]);
var inst_18135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18131,inst_18128);
var state_18151__$1 = state_18151;
if(inst_18135){
var statearr_18164_18742 = state_18151__$1;
(statearr_18164_18742[(1)] = (8));

} else {
var statearr_18165_18743 = state_18151__$1;
(statearr_18165_18743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (10))){
var inst_18143 = (state_18151[(2)]);
var state_18151__$1 = state_18151;
var statearr_18166_18744 = state_18151__$1;
(statearr_18166_18744[(2)] = inst_18143);

(statearr_18166_18744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (8))){
var inst_18128 = (state_18151[(7)]);
var tmp18163 = inst_18128;
var inst_18128__$1 = tmp18163;
var state_18151__$1 = (function (){var statearr_18167 = state_18151;
(statearr_18167[(7)] = inst_18128__$1);

return statearr_18167;
})();
var statearr_18168_18745 = state_18151__$1;
(statearr_18168_18745[(2)] = null);

(statearr_18168_18745[(1)] = (2));


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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_18169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18169[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18169[(1)] = (1));

return statearr_18169;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18151){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18151);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18170){var ex__16705__auto__ = e18170;
var statearr_18171_18746 = state_18151;
(statearr_18171_18746[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18151[(4)]))){
var statearr_18172_18747 = state_18151;
(statearr_18172_18747[(1)] = cljs.core.first((state_18151[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18748 = state_18151;
state_18151 = G__18748;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_18173 = f__16773__auto__();
(statearr_18173[(6)] = c__16772__auto___18735);

return statearr_18173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18175 = arguments.length;
switch (G__18175) {
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
var c__16772__auto___18750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_18213){
var state_val_18214 = (state_18213[(1)]);
if((state_val_18214 === (7))){
var inst_18209 = (state_18213[(2)]);
var state_18213__$1 = state_18213;
var statearr_18215_18751 = state_18213__$1;
(statearr_18215_18751[(2)] = inst_18209);

(statearr_18215_18751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (1))){
var inst_18176 = (new Array(n));
var inst_18177 = inst_18176;
var inst_18178 = (0);
var state_18213__$1 = (function (){var statearr_18216 = state_18213;
(statearr_18216[(7)] = inst_18178);

(statearr_18216[(8)] = inst_18177);

return statearr_18216;
})();
var statearr_18217_18752 = state_18213__$1;
(statearr_18217_18752[(2)] = null);

(statearr_18217_18752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (4))){
var inst_18181 = (state_18213[(9)]);
var inst_18181__$1 = (state_18213[(2)]);
var inst_18182 = (inst_18181__$1 == null);
var inst_18183 = cljs.core.not(inst_18182);
var state_18213__$1 = (function (){var statearr_18218 = state_18213;
(statearr_18218[(9)] = inst_18181__$1);

return statearr_18218;
})();
if(inst_18183){
var statearr_18219_18753 = state_18213__$1;
(statearr_18219_18753[(1)] = (5));

} else {
var statearr_18220_18754 = state_18213__$1;
(statearr_18220_18754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (15))){
var inst_18203 = (state_18213[(2)]);
var state_18213__$1 = state_18213;
var statearr_18221_18755 = state_18213__$1;
(statearr_18221_18755[(2)] = inst_18203);

(statearr_18221_18755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (13))){
var state_18213__$1 = state_18213;
var statearr_18222_18756 = state_18213__$1;
(statearr_18222_18756[(2)] = null);

(statearr_18222_18756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (6))){
var inst_18178 = (state_18213[(7)]);
var inst_18199 = (inst_18178 > (0));
var state_18213__$1 = state_18213;
if(cljs.core.truth_(inst_18199)){
var statearr_18223_18757 = state_18213__$1;
(statearr_18223_18757[(1)] = (12));

} else {
var statearr_18224_18758 = state_18213__$1;
(statearr_18224_18758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (3))){
var inst_18211 = (state_18213[(2)]);
var state_18213__$1 = state_18213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18213__$1,inst_18211);
} else {
if((state_val_18214 === (12))){
var inst_18177 = (state_18213[(8)]);
var inst_18201 = cljs.core.vec(inst_18177);
var state_18213__$1 = state_18213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18213__$1,(15),out,inst_18201);
} else {
if((state_val_18214 === (2))){
var state_18213__$1 = state_18213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18213__$1,(4),ch);
} else {
if((state_val_18214 === (11))){
var inst_18193 = (state_18213[(2)]);
var inst_18194 = (new Array(n));
var inst_18177 = inst_18194;
var inst_18178 = (0);
var state_18213__$1 = (function (){var statearr_18225 = state_18213;
(statearr_18225[(7)] = inst_18178);

(statearr_18225[(10)] = inst_18193);

(statearr_18225[(8)] = inst_18177);

return statearr_18225;
})();
var statearr_18226_18759 = state_18213__$1;
(statearr_18226_18759[(2)] = null);

(statearr_18226_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (9))){
var inst_18177 = (state_18213[(8)]);
var inst_18191 = cljs.core.vec(inst_18177);
var state_18213__$1 = state_18213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18213__$1,(11),out,inst_18191);
} else {
if((state_val_18214 === (5))){
var inst_18178 = (state_18213[(7)]);
var inst_18186 = (state_18213[(11)]);
var inst_18177 = (state_18213[(8)]);
var inst_18181 = (state_18213[(9)]);
var inst_18185 = (inst_18177[inst_18178] = inst_18181);
var inst_18186__$1 = (inst_18178 + (1));
var inst_18187 = (inst_18186__$1 < n);
var state_18213__$1 = (function (){var statearr_18227 = state_18213;
(statearr_18227[(11)] = inst_18186__$1);

(statearr_18227[(12)] = inst_18185);

return statearr_18227;
})();
if(cljs.core.truth_(inst_18187)){
var statearr_18228_18760 = state_18213__$1;
(statearr_18228_18760[(1)] = (8));

} else {
var statearr_18229_18761 = state_18213__$1;
(statearr_18229_18761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (14))){
var inst_18206 = (state_18213[(2)]);
var inst_18207 = cljs.core.async.close_BANG_(out);
var state_18213__$1 = (function (){var statearr_18231 = state_18213;
(statearr_18231[(13)] = inst_18206);

return statearr_18231;
})();
var statearr_18232_18762 = state_18213__$1;
(statearr_18232_18762[(2)] = inst_18207);

(statearr_18232_18762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (10))){
var inst_18197 = (state_18213[(2)]);
var state_18213__$1 = state_18213;
var statearr_18233_18763 = state_18213__$1;
(statearr_18233_18763[(2)] = inst_18197);

(statearr_18233_18763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18214 === (8))){
var inst_18186 = (state_18213[(11)]);
var inst_18177 = (state_18213[(8)]);
var tmp18230 = inst_18177;
var inst_18177__$1 = tmp18230;
var inst_18178 = inst_18186;
var state_18213__$1 = (function (){var statearr_18234 = state_18213;
(statearr_18234[(7)] = inst_18178);

(statearr_18234[(8)] = inst_18177__$1);

return statearr_18234;
})();
var statearr_18235_18764 = state_18213__$1;
(statearr_18235_18764[(2)] = null);

(statearr_18235_18764[(1)] = (2));


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
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_18236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18236[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18236[(1)] = (1));

return statearr_18236;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18213){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18213);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18237){var ex__16705__auto__ = e18237;
var statearr_18238_18765 = state_18213;
(statearr_18238_18765[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18213[(4)]))){
var statearr_18239_18766 = state_18213;
(statearr_18239_18766[(1)] = cljs.core.first((state_18213[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18767 = state_18213;
state_18213 = G__18767;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_18240 = f__16773__auto__();
(statearr_18240[(6)] = c__16772__auto___18750);

return statearr_18240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18242 = arguments.length;
switch (G__18242) {
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
var c__16772__auto___18769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_18287){
var state_val_18288 = (state_18287[(1)]);
if((state_val_18288 === (7))){
var inst_18283 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18289_18770 = state_18287__$1;
(statearr_18289_18770[(2)] = inst_18283);

(statearr_18289_18770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (1))){
var inst_18243 = [];
var inst_18244 = inst_18243;
var inst_18245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18287__$1 = (function (){var statearr_18290 = state_18287;
(statearr_18290[(7)] = inst_18244);

(statearr_18290[(8)] = inst_18245);

return statearr_18290;
})();
var statearr_18291_18771 = state_18287__$1;
(statearr_18291_18771[(2)] = null);

(statearr_18291_18771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (4))){
var inst_18248 = (state_18287[(9)]);
var inst_18248__$1 = (state_18287[(2)]);
var inst_18249 = (inst_18248__$1 == null);
var inst_18250 = cljs.core.not(inst_18249);
var state_18287__$1 = (function (){var statearr_18292 = state_18287;
(statearr_18292[(9)] = inst_18248__$1);

return statearr_18292;
})();
if(inst_18250){
var statearr_18293_18772 = state_18287__$1;
(statearr_18293_18772[(1)] = (5));

} else {
var statearr_18294_18773 = state_18287__$1;
(statearr_18294_18773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (15))){
var inst_18244 = (state_18287[(7)]);
var inst_18275 = cljs.core.vec(inst_18244);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18287__$1,(18),out,inst_18275);
} else {
if((state_val_18288 === (13))){
var inst_18270 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18295_18774 = state_18287__$1;
(statearr_18295_18774[(2)] = inst_18270);

(statearr_18295_18774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (6))){
var inst_18244 = (state_18287[(7)]);
var inst_18272 = inst_18244.length;
var inst_18273 = (inst_18272 > (0));
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18273)){
var statearr_18296_18775 = state_18287__$1;
(statearr_18296_18775[(1)] = (15));

} else {
var statearr_18297_18776 = state_18287__$1;
(statearr_18297_18776[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (17))){
var inst_18280 = (state_18287[(2)]);
var inst_18281 = cljs.core.async.close_BANG_(out);
var state_18287__$1 = (function (){var statearr_18298 = state_18287;
(statearr_18298[(10)] = inst_18280);

return statearr_18298;
})();
var statearr_18299_18777 = state_18287__$1;
(statearr_18299_18777[(2)] = inst_18281);

(statearr_18299_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (3))){
var inst_18285 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18287__$1,inst_18285);
} else {
if((state_val_18288 === (12))){
var inst_18244 = (state_18287[(7)]);
var inst_18263 = cljs.core.vec(inst_18244);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18287__$1,(14),out,inst_18263);
} else {
if((state_val_18288 === (2))){
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18287__$1,(4),ch);
} else {
if((state_val_18288 === (11))){
var inst_18252 = (state_18287[(11)]);
var inst_18248 = (state_18287[(9)]);
var inst_18244 = (state_18287[(7)]);
var inst_18260 = inst_18244.push(inst_18248);
var tmp18300 = inst_18244;
var inst_18244__$1 = tmp18300;
var inst_18245 = inst_18252;
var state_18287__$1 = (function (){var statearr_18301 = state_18287;
(statearr_18301[(12)] = inst_18260);

(statearr_18301[(7)] = inst_18244__$1);

(statearr_18301[(8)] = inst_18245);

return statearr_18301;
})();
var statearr_18302_18778 = state_18287__$1;
(statearr_18302_18778[(2)] = null);

(statearr_18302_18778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (9))){
var inst_18245 = (state_18287[(8)]);
var inst_18256 = cljs.core.keyword_identical_QMARK_(inst_18245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18287__$1 = state_18287;
var statearr_18303_18779 = state_18287__$1;
(statearr_18303_18779[(2)] = inst_18256);

(statearr_18303_18779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (5))){
var inst_18252 = (state_18287[(11)]);
var inst_18253 = (state_18287[(13)]);
var inst_18248 = (state_18287[(9)]);
var inst_18245 = (state_18287[(8)]);
var inst_18252__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18248) : f.call(null,inst_18248));
var inst_18253__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18252__$1,inst_18245);
var state_18287__$1 = (function (){var statearr_18304 = state_18287;
(statearr_18304[(11)] = inst_18252__$1);

(statearr_18304[(13)] = inst_18253__$1);

return statearr_18304;
})();
if(inst_18253__$1){
var statearr_18305_18780 = state_18287__$1;
(statearr_18305_18780[(1)] = (8));

} else {
var statearr_18306_18781 = state_18287__$1;
(statearr_18306_18781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (14))){
var inst_18252 = (state_18287[(11)]);
var inst_18248 = (state_18287[(9)]);
var inst_18265 = (state_18287[(2)]);
var inst_18266 = [];
var inst_18267 = inst_18266.push(inst_18248);
var inst_18244 = inst_18266;
var inst_18245 = inst_18252;
var state_18287__$1 = (function (){var statearr_18307 = state_18287;
(statearr_18307[(7)] = inst_18244);

(statearr_18307[(8)] = inst_18245);

(statearr_18307[(14)] = inst_18265);

(statearr_18307[(15)] = inst_18267);

return statearr_18307;
})();
var statearr_18308_18782 = state_18287__$1;
(statearr_18308_18782[(2)] = null);

(statearr_18308_18782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (16))){
var state_18287__$1 = state_18287;
var statearr_18309_18783 = state_18287__$1;
(statearr_18309_18783[(2)] = null);

(statearr_18309_18783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (10))){
var inst_18258 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18258)){
var statearr_18310_18784 = state_18287__$1;
(statearr_18310_18784[(1)] = (11));

} else {
var statearr_18311_18785 = state_18287__$1;
(statearr_18311_18785[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (18))){
var inst_18277 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18312_18786 = state_18287__$1;
(statearr_18312_18786[(2)] = inst_18277);

(statearr_18312_18786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (8))){
var inst_18253 = (state_18287[(13)]);
var state_18287__$1 = state_18287;
var statearr_18313_18787 = state_18287__$1;
(statearr_18313_18787[(2)] = inst_18253);

(statearr_18313_18787[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__16702__auto__ = null;
var cljs$core$async$state_machine__16702__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18287){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18287);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18315){var ex__16705__auto__ = e18315;
var statearr_18316_18788 = state_18287;
(statearr_18316_18788[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18287[(4)]))){
var statearr_18317_18789 = state_18287;
(statearr_18317_18789[(1)] = cljs.core.first((state_18287[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18790 = state_18287;
state_18287 = G__18790;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_18318 = f__16773__auto__();
(statearr_18318[(6)] = c__16772__auto___18769);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
