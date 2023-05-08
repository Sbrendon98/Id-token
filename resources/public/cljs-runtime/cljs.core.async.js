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
cljs.core.async.t_cljs$core$async16903 = (function (f,blockable,meta16904){
this.f = f;
this.blockable = blockable;
this.meta16904 = meta16904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16905,meta16904__$1){
var self__ = this;
var _16905__$1 = this;
return (new cljs.core.async.t_cljs$core$async16903(self__.f,self__.blockable,meta16904__$1));
}));

(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16905){
var self__ = this;
var _16905__$1 = this;
return self__.meta16904;
}));

(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16904","meta16904",936597872,null)], null);
}));

(cljs.core.async.t_cljs$core$async16903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16903");

(cljs.core.async.t_cljs$core$async16903.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16903.
 */
cljs.core.async.__GT_t_cljs$core$async16903 = (function cljs$core$async$__GT_t_cljs$core$async16903(f,blockable,meta16904){
return (new cljs.core.async.t_cljs$core$async16903(f,blockable,meta16904));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16902 = arguments.length;
switch (G__16902) {
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
return (new cljs.core.async.t_cljs$core$async16903(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16910 = arguments.length;
switch (G__16910) {
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
var G__16912 = arguments.length;
switch (G__16912) {
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
var G__16914 = arguments.length;
switch (G__16914) {
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
var val_19162 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19162) : fn1.call(null,val_19162));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19162) : fn1.call(null,val_19162));
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
var G__16918 = arguments.length;
switch (G__16918) {
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
var n__5636__auto___19164 = n;
var x_19165 = (0);
while(true){
if((x_19165 < n__5636__auto___19164)){
(a[x_19165] = x_19165);

var G__19166 = (x_19165 + (1));
x_19165 = G__19166;
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
cljs.core.async.t_cljs$core$async16929 = (function (flag,meta16930){
this.flag = flag;
this.meta16930 = meta16930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16931,meta16930__$1){
var self__ = this;
var _16931__$1 = this;
return (new cljs.core.async.t_cljs$core$async16929(self__.flag,meta16930__$1));
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16931){
var self__ = this;
var _16931__$1 = this;
return self__.meta16930;
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16930","meta16930",588166664,null)], null);
}));

(cljs.core.async.t_cljs$core$async16929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16929");

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16929.
 */
cljs.core.async.__GT_t_cljs$core$async16929 = (function cljs$core$async$__GT_t_cljs$core$async16929(flag,meta16930){
return (new cljs.core.async.t_cljs$core$async16929(flag,meta16930));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16929(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16940 = (function (flag,cb,meta16941){
this.flag = flag;
this.cb = cb;
this.meta16941 = meta16941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16942,meta16941__$1){
var self__ = this;
var _16942__$1 = this;
return (new cljs.core.async.t_cljs$core$async16940(self__.flag,self__.cb,meta16941__$1));
}));

(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16942){
var self__ = this;
var _16942__$1 = this;
return self__.meta16941;
}));

(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16941","meta16941",-2048223030,null)], null);
}));

(cljs.core.async.t_cljs$core$async16940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16940");

(cljs.core.async.t_cljs$core$async16940.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16940.
 */
cljs.core.async.__GT_t_cljs$core$async16940 = (function cljs$core$async$__GT_t_cljs$core$async16940(flag,cb,meta16941){
return (new cljs.core.async.t_cljs$core$async16940(flag,cb,meta16941));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16940(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16946_SHARP_){
var G__16951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16946_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16951) : fret.call(null,G__16951));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16947_SHARP_){
var G__16958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16947_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16958) : fret.call(null,G__16958));
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
var G__19171 = (i + (1));
i = G__19171;
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
var len__5769__auto___19172 = arguments.length;
var i__5770__auto___19173 = (0);
while(true){
if((i__5770__auto___19173 < len__5769__auto___19172)){
args__5775__auto__.push((arguments[i__5770__auto___19173]));

var G__19175 = (i__5770__auto___19173 + (1));
i__5770__auto___19173 = G__19175;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16973){
var map__16974 = p__16973;
var map__16974__$1 = cljs.core.__destructure_map(map__16974);
var opts = map__16974__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16967){
var G__16968 = cljs.core.first(seq16967);
var seq16967__$1 = cljs.core.next(seq16967);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16968,seq16967__$1);
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
var G__16981 = arguments.length;
switch (G__16981) {
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
var c__16844__auto___19189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17018){
var state_val_17019 = (state_17018[(1)]);
if((state_val_17019 === (7))){
var inst_17014 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17089_19191 = state_17018__$1;
(statearr_17089_19191[(2)] = inst_17014);

(statearr_17089_19191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (1))){
var state_17018__$1 = state_17018;
var statearr_17090_19193 = state_17018__$1;
(statearr_17090_19193[(2)] = null);

(statearr_17090_19193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (4))){
var inst_16990 = (state_17018[(7)]);
var inst_16990__$1 = (state_17018[(2)]);
var inst_16993 = (inst_16990__$1 == null);
var state_17018__$1 = (function (){var statearr_17092 = state_17018;
(statearr_17092[(7)] = inst_16990__$1);

return statearr_17092;
})();
if(cljs.core.truth_(inst_16993)){
var statearr_17093_19194 = state_17018__$1;
(statearr_17093_19194[(1)] = (5));

} else {
var statearr_17102_19196 = state_17018__$1;
(statearr_17102_19196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (13))){
var state_17018__$1 = state_17018;
var statearr_17115_19197 = state_17018__$1;
(statearr_17115_19197[(2)] = null);

(statearr_17115_19197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (6))){
var inst_16990 = (state_17018[(7)]);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17018__$1,(11),to,inst_16990);
} else {
if((state_val_17019 === (3))){
var inst_17016 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17018__$1,inst_17016);
} else {
if((state_val_17019 === (12))){
var state_17018__$1 = state_17018;
var statearr_17116_19200 = state_17018__$1;
(statearr_17116_19200[(2)] = null);

(statearr_17116_19200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (2))){
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17018__$1,(4),from);
} else {
if((state_val_17019 === (11))){
var inst_17007 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
if(cljs.core.truth_(inst_17007)){
var statearr_17117_19201 = state_17018__$1;
(statearr_17117_19201[(1)] = (12));

} else {
var statearr_17118_19202 = state_17018__$1;
(statearr_17118_19202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (9))){
var state_17018__$1 = state_17018;
var statearr_17119_19203 = state_17018__$1;
(statearr_17119_19203[(2)] = null);

(statearr_17119_19203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (5))){
var state_17018__$1 = state_17018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17120_19206 = state_17018__$1;
(statearr_17120_19206[(1)] = (8));

} else {
var statearr_17121_19207 = state_17018__$1;
(statearr_17121_19207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (14))){
var inst_17012 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17122_19208 = state_17018__$1;
(statearr_17122_19208[(2)] = inst_17012);

(statearr_17122_19208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (10))){
var inst_17004 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17123_19209 = state_17018__$1;
(statearr_17123_19209[(2)] = inst_17004);

(statearr_17123_19209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (8))){
var inst_17001 = cljs.core.async.close_BANG_(to);
var state_17018__$1 = state_17018;
var statearr_17124_19210 = state_17018__$1;
(statearr_17124_19210[(2)] = inst_17001);

(statearr_17124_19210[(1)] = (10));


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
var statearr_17125 = [null,null,null,null,null,null,null,null];
(statearr_17125[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17125[(1)] = (1));

return statearr_17125;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17018){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17018);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17126){var ex__16705__auto__ = e17126;
var statearr_17127_19211 = state_17018;
(statearr_17127_19211[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17018[(4)]))){
var statearr_17128_19212 = state_17018;
(statearr_17128_19212[(1)] = cljs.core.first((state_17018[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19214 = state_17018;
state_17018 = G__19214;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17129 = f__16845__auto__();
(statearr_17129[(6)] = c__16844__auto___19189);

return statearr_17129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var process__$1 = (function (p__17131){
var vec__17132 = p__17131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(1),null);
var job = vec__17132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16844__auto___19216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17139){
var state_val_17140 = (state_17139[(1)]);
if((state_val_17140 === (1))){
var state_17139__$1 = state_17139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17139__$1,(2),res,v);
} else {
if((state_val_17140 === (2))){
var inst_17136 = (state_17139[(2)]);
var inst_17137 = cljs.core.async.close_BANG_(res);
var state_17139__$1 = (function (){var statearr_17141 = state_17139;
(statearr_17141[(7)] = inst_17136);

return statearr_17141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17139__$1,inst_17137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17142 = [null,null,null,null,null,null,null,null];
(statearr_17142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17142[(1)] = (1));

return statearr_17142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17139){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17139);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17143){var ex__16705__auto__ = e17143;
var statearr_17144_19219 = state_17139;
(statearr_17144_19219[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17139[(4)]))){
var statearr_17145_19221 = state_17139;
(statearr_17145_19221[(1)] = cljs.core.first((state_17139[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19223 = state_17139;
state_17139 = G__19223;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17146 = f__16845__auto__();
(statearr_17146[(6)] = c__16844__auto___19216);

return statearr_17146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17147){
var vec__17148 = p__17147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(1),null);
var job = vec__17148;
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
var n__5636__auto___19225 = n;
var __19226 = (0);
while(true){
if((__19226 < n__5636__auto___19225)){
var G__17151_19227 = type;
var G__17151_19228__$1 = (((G__17151_19227 instanceof cljs.core.Keyword))?G__17151_19227.fqn:null);
switch (G__17151_19228__$1) {
case "compute":
var c__16844__auto___19230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19226,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = ((function (__19226,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function (state_17165){
var state_val_17166 = (state_17165[(1)]);
if((state_val_17166 === (1))){
var state_17165__$1 = state_17165;
var statearr_17177_19232 = state_17165__$1;
(statearr_17177_19232[(2)] = null);

(statearr_17177_19232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (2))){
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17165__$1,(4),jobs);
} else {
if((state_val_17166 === (3))){
var inst_17163 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17165__$1,inst_17163);
} else {
if((state_val_17166 === (4))){
var inst_17154 = (state_17165[(2)]);
var inst_17155 = process__$1(inst_17154);
var state_17165__$1 = state_17165;
if(cljs.core.truth_(inst_17155)){
var statearr_17185_19243 = state_17165__$1;
(statearr_17185_19243[(1)] = (5));

} else {
var statearr_17187_19244 = state_17165__$1;
(statearr_17187_19244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (5))){
var state_17165__$1 = state_17165;
var statearr_17193_19245 = state_17165__$1;
(statearr_17193_19245[(2)] = null);

(statearr_17193_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (6))){
var state_17165__$1 = state_17165;
var statearr_17194_19246 = state_17165__$1;
(statearr_17194_19246[(2)] = null);

(statearr_17194_19246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (7))){
var inst_17161 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17195_19247 = state_17165__$1;
(statearr_17195_19247[(2)] = inst_17161);

(statearr_17195_19247[(1)] = (3));


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
});})(__19226,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
;
return ((function (__19226,switch__16701__auto__,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17196 = [null,null,null,null,null,null,null];
(statearr_17196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17196[(1)] = (1));

return statearr_17196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17165){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17165);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17197){var ex__16705__auto__ = e17197;
var statearr_17198_19249 = state_17165;
(statearr_17198_19249[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17165[(4)]))){
var statearr_17199_19250 = state_17165;
(statearr_17199_19250[(1)] = cljs.core.first((state_17165[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19251 = state_17165;
state_17165 = G__19251;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
;})(__19226,switch__16701__auto__,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
})();
var state__16846__auto__ = (function (){var statearr_17201 = f__16845__auto__();
(statearr_17201[(6)] = c__16844__auto___19230);

return statearr_17201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
});})(__19226,c__16844__auto___19230,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
);


break;
case "async":
var c__16844__auto___19252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19226,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = ((function (__19226,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function (state_17216){
var state_val_17217 = (state_17216[(1)]);
if((state_val_17217 === (1))){
var state_17216__$1 = state_17216;
var statearr_17218_19254 = state_17216__$1;
(statearr_17218_19254[(2)] = null);

(statearr_17218_19254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (2))){
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17216__$1,(4),jobs);
} else {
if((state_val_17217 === (3))){
var inst_17214 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17216__$1,inst_17214);
} else {
if((state_val_17217 === (4))){
var inst_17206 = (state_17216[(2)]);
var inst_17207 = async(inst_17206);
var state_17216__$1 = state_17216;
if(cljs.core.truth_(inst_17207)){
var statearr_17224_19255 = state_17216__$1;
(statearr_17224_19255[(1)] = (5));

} else {
var statearr_17230_19256 = state_17216__$1;
(statearr_17230_19256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (5))){
var state_17216__$1 = state_17216;
var statearr_17238_19257 = state_17216__$1;
(statearr_17238_19257[(2)] = null);

(statearr_17238_19257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (6))){
var state_17216__$1 = state_17216;
var statearr_17243_19258 = state_17216__$1;
(statearr_17243_19258[(2)] = null);

(statearr_17243_19258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (7))){
var inst_17212 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17244_19259 = state_17216__$1;
(statearr_17244_19259[(2)] = inst_17212);

(statearr_17244_19259[(1)] = (3));


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
});})(__19226,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
;
return ((function (__19226,switch__16701__auto__,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0 = (function (){
var statearr_17245 = [null,null,null,null,null,null,null];
(statearr_17245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17245[(1)] = (1));

return statearr_17245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17216){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17216);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17255){var ex__16705__auto__ = e17255;
var statearr_17258_19260 = state_17216;
(statearr_17258_19260[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17216[(4)]))){
var statearr_17265_19261 = state_17216;
(statearr_17265_19261[(1)] = cljs.core.first((state_17216[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19262 = state_17216;
state_17216 = G__19262;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
;})(__19226,switch__16701__auto__,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
})();
var state__16846__auto__ = (function (){var statearr_17270 = f__16845__auto__();
(statearr_17270[(6)] = c__16844__auto___19252);

return statearr_17270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
});})(__19226,c__16844__auto___19252,G__17151_19227,G__17151_19228__$1,n__5636__auto___19225,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17151_19228__$1)].join('')));

}

var G__19267 = (__19226 + (1));
__19226 = G__19267;
continue;
} else {
}
break;
}

var c__16844__auto___19268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17314){
var state_val_17315 = (state_17314[(1)]);
if((state_val_17315 === (7))){
var inst_17310 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17328_19269 = state_17314__$1;
(statearr_17328_19269[(2)] = inst_17310);

(statearr_17328_19269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (1))){
var state_17314__$1 = state_17314;
var statearr_17330_19270 = state_17314__$1;
(statearr_17330_19270[(2)] = null);

(statearr_17330_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (4))){
var inst_17294 = (state_17314[(7)]);
var inst_17294__$1 = (state_17314[(2)]);
var inst_17295 = (inst_17294__$1 == null);
var state_17314__$1 = (function (){var statearr_17331 = state_17314;
(statearr_17331[(7)] = inst_17294__$1);

return statearr_17331;
})();
if(cljs.core.truth_(inst_17295)){
var statearr_17332_19271 = state_17314__$1;
(statearr_17332_19271[(1)] = (5));

} else {
var statearr_17333_19272 = state_17314__$1;
(statearr_17333_19272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (6))){
var inst_17300 = (state_17314[(8)]);
var inst_17294 = (state_17314[(7)]);
var inst_17300__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17302 = [inst_17294,inst_17300__$1];
var inst_17303 = (new cljs.core.PersistentVector(null,2,(5),inst_17301,inst_17302,null));
var state_17314__$1 = (function (){var statearr_17335 = state_17314;
(statearr_17335[(8)] = inst_17300__$1);

return statearr_17335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17314__$1,(8),jobs,inst_17303);
} else {
if((state_val_17315 === (3))){
var inst_17312 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17314__$1,inst_17312);
} else {
if((state_val_17315 === (2))){
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17314__$1,(4),from);
} else {
if((state_val_17315 === (9))){
var inst_17307 = (state_17314[(2)]);
var state_17314__$1 = (function (){var statearr_17336 = state_17314;
(statearr_17336[(9)] = inst_17307);

return statearr_17336;
})();
var statearr_17337_19273 = state_17314__$1;
(statearr_17337_19273[(2)] = null);

(statearr_17337_19273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (5))){
var inst_17297 = cljs.core.async.close_BANG_(jobs);
var state_17314__$1 = state_17314;
var statearr_17338_19274 = state_17314__$1;
(statearr_17338_19274[(2)] = inst_17297);

(statearr_17338_19274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (8))){
var inst_17300 = (state_17314[(8)]);
var inst_17305 = (state_17314[(2)]);
var state_17314__$1 = (function (){var statearr_17339 = state_17314;
(statearr_17339[(10)] = inst_17305);

return statearr_17339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17314__$1,(9),results,inst_17300);
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
var statearr_17340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17340[(1)] = (1));

return statearr_17340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17314){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17314);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17341){var ex__16705__auto__ = e17341;
var statearr_17342_19277 = state_17314;
(statearr_17342_19277[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17314[(4)]))){
var statearr_17343_19278 = state_17314;
(statearr_17343_19278[(1)] = cljs.core.first((state_17314[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19280 = state_17314;
state_17314 = G__19280;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17344 = f__16845__auto__();
(statearr_17344[(6)] = c__16844__auto___19268);

return statearr_17344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


var c__16844__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17382){
var state_val_17383 = (state_17382[(1)]);
if((state_val_17383 === (7))){
var inst_17378 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17384_19283 = state_17382__$1;
(statearr_17384_19283[(2)] = inst_17378);

(statearr_17384_19283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (20))){
var state_17382__$1 = state_17382;
var statearr_17386_19285 = state_17382__$1;
(statearr_17386_19285[(2)] = null);

(statearr_17386_19285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (1))){
var state_17382__$1 = state_17382;
var statearr_17387_19286 = state_17382__$1;
(statearr_17387_19286[(2)] = null);

(statearr_17387_19286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (4))){
var inst_17347 = (state_17382[(7)]);
var inst_17347__$1 = (state_17382[(2)]);
var inst_17348 = (inst_17347__$1 == null);
var state_17382__$1 = (function (){var statearr_17388 = state_17382;
(statearr_17388[(7)] = inst_17347__$1);

return statearr_17388;
})();
if(cljs.core.truth_(inst_17348)){
var statearr_17389_19287 = state_17382__$1;
(statearr_17389_19287[(1)] = (5));

} else {
var statearr_17390_19288 = state_17382__$1;
(statearr_17390_19288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (15))){
var inst_17360 = (state_17382[(8)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17382__$1,(18),to,inst_17360);
} else {
if((state_val_17383 === (21))){
var inst_17373 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17392_19289 = state_17382__$1;
(statearr_17392_19289[(2)] = inst_17373);

(statearr_17392_19289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (13))){
var inst_17375 = (state_17382[(2)]);
var state_17382__$1 = (function (){var statearr_17393 = state_17382;
(statearr_17393[(9)] = inst_17375);

return statearr_17393;
})();
var statearr_17394_19290 = state_17382__$1;
(statearr_17394_19290[(2)] = null);

(statearr_17394_19290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (6))){
var inst_17347 = (state_17382[(7)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17382__$1,(11),inst_17347);
} else {
if((state_val_17383 === (17))){
var inst_17368 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
if(cljs.core.truth_(inst_17368)){
var statearr_17395_19291 = state_17382__$1;
(statearr_17395_19291[(1)] = (19));

} else {
var statearr_17396_19292 = state_17382__$1;
(statearr_17396_19292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (3))){
var inst_17380 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17382__$1,inst_17380);
} else {
if((state_val_17383 === (12))){
var inst_17357 = (state_17382[(10)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17382__$1,(14),inst_17357);
} else {
if((state_val_17383 === (2))){
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17382__$1,(4),results);
} else {
if((state_val_17383 === (19))){
var state_17382__$1 = state_17382;
var statearr_17397_19300 = state_17382__$1;
(statearr_17397_19300[(2)] = null);

(statearr_17397_19300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (11))){
var inst_17357 = (state_17382[(2)]);
var state_17382__$1 = (function (){var statearr_17398 = state_17382;
(statearr_17398[(10)] = inst_17357);

return statearr_17398;
})();
var statearr_17399_19301 = state_17382__$1;
(statearr_17399_19301[(2)] = null);

(statearr_17399_19301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (9))){
var state_17382__$1 = state_17382;
var statearr_17400_19302 = state_17382__$1;
(statearr_17400_19302[(2)] = null);

(statearr_17400_19302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (5))){
var state_17382__$1 = state_17382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17401_19306 = state_17382__$1;
(statearr_17401_19306[(1)] = (8));

} else {
var statearr_17402_19307 = state_17382__$1;
(statearr_17402_19307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (14))){
var inst_17362 = (state_17382[(11)]);
var inst_17360 = (state_17382[(8)]);
var inst_17360__$1 = (state_17382[(2)]);
var inst_17361 = (inst_17360__$1 == null);
var inst_17362__$1 = cljs.core.not(inst_17361);
var state_17382__$1 = (function (){var statearr_17404 = state_17382;
(statearr_17404[(11)] = inst_17362__$1);

(statearr_17404[(8)] = inst_17360__$1);

return statearr_17404;
})();
if(inst_17362__$1){
var statearr_17405_19308 = state_17382__$1;
(statearr_17405_19308[(1)] = (15));

} else {
var statearr_17407_19312 = state_17382__$1;
(statearr_17407_19312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (16))){
var inst_17362 = (state_17382[(11)]);
var state_17382__$1 = state_17382;
var statearr_17408_19320 = state_17382__$1;
(statearr_17408_19320[(2)] = inst_17362);

(statearr_17408_19320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (10))){
var inst_17354 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17410_19321 = state_17382__$1;
(statearr_17410_19321[(2)] = inst_17354);

(statearr_17410_19321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (18))){
var inst_17365 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17411_19322 = state_17382__$1;
(statearr_17411_19322[(2)] = inst_17365);

(statearr_17411_19322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (8))){
var inst_17351 = cljs.core.async.close_BANG_(to);
var state_17382__$1 = state_17382;
var statearr_17412_19326 = state_17382__$1;
(statearr_17412_19326[(2)] = inst_17351);

(statearr_17412_19326[(1)] = (10));


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
var statearr_17414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__);

(statearr_17414[(1)] = (1));

return statearr_17414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1 = (function (state_17382){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17382);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17415){var ex__16705__auto__ = e17415;
var statearr_17416_19328 = state_17382;
(statearr_17416_19328[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17382[(4)]))){
var statearr_17417_19329 = state_17382;
(statearr_17417_19329[(1)] = cljs.core.first((state_17382[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19334 = state_17382;
state_17382 = G__19334;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__ = function(state_17382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1.call(this,state_17382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17418 = f__16845__auto__();
(statearr_17418[(6)] = c__16844__auto__);

return statearr_17418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

return c__16844__auto__;
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
var G__17421 = arguments.length;
switch (G__17421) {
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
var G__17423 = arguments.length;
switch (G__17423) {
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
var G__17426 = arguments.length;
switch (G__17426) {
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
var c__16844__auto___19363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17453){
var state_val_17454 = (state_17453[(1)]);
if((state_val_17454 === (7))){
var inst_17449 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17455_19364 = state_17453__$1;
(statearr_17455_19364[(2)] = inst_17449);

(statearr_17455_19364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (1))){
var state_17453__$1 = state_17453;
var statearr_17457_19365 = state_17453__$1;
(statearr_17457_19365[(2)] = null);

(statearr_17457_19365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (4))){
var inst_17430 = (state_17453[(7)]);
var inst_17430__$1 = (state_17453[(2)]);
var inst_17431 = (inst_17430__$1 == null);
var state_17453__$1 = (function (){var statearr_17458 = state_17453;
(statearr_17458[(7)] = inst_17430__$1);

return statearr_17458;
})();
if(cljs.core.truth_(inst_17431)){
var statearr_17459_19366 = state_17453__$1;
(statearr_17459_19366[(1)] = (5));

} else {
var statearr_17460_19371 = state_17453__$1;
(statearr_17460_19371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (13))){
var state_17453__$1 = state_17453;
var statearr_17461_19372 = state_17453__$1;
(statearr_17461_19372[(2)] = null);

(statearr_17461_19372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (6))){
var inst_17430 = (state_17453[(7)]);
var inst_17436 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17430) : p.call(null,inst_17430));
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17436)){
var statearr_17462_19378 = state_17453__$1;
(statearr_17462_19378[(1)] = (9));

} else {
var statearr_17463_19379 = state_17453__$1;
(statearr_17463_19379[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (3))){
var inst_17451 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17453__$1,inst_17451);
} else {
if((state_val_17454 === (12))){
var state_17453__$1 = state_17453;
var statearr_17464_19380 = state_17453__$1;
(statearr_17464_19380[(2)] = null);

(statearr_17464_19380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (2))){
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17453__$1,(4),ch);
} else {
if((state_val_17454 === (11))){
var inst_17430 = (state_17453[(7)]);
var inst_17440 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17453__$1,(8),inst_17440,inst_17430);
} else {
if((state_val_17454 === (9))){
var state_17453__$1 = state_17453;
var statearr_17465_19381 = state_17453__$1;
(statearr_17465_19381[(2)] = tc);

(statearr_17465_19381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (5))){
var inst_17433 = cljs.core.async.close_BANG_(tc);
var inst_17434 = cljs.core.async.close_BANG_(fc);
var state_17453__$1 = (function (){var statearr_17467 = state_17453;
(statearr_17467[(8)] = inst_17433);

return statearr_17467;
})();
var statearr_17468_19384 = state_17453__$1;
(statearr_17468_19384[(2)] = inst_17434);

(statearr_17468_19384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (14))){
var inst_17447 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17469_19385 = state_17453__$1;
(statearr_17469_19385[(2)] = inst_17447);

(statearr_17469_19385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (10))){
var state_17453__$1 = state_17453;
var statearr_17470_19386 = state_17453__$1;
(statearr_17470_19386[(2)] = fc);

(statearr_17470_19386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (8))){
var inst_17442 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17442)){
var statearr_17471_19390 = state_17453__$1;
(statearr_17471_19390[(1)] = (12));

} else {
var statearr_17472_19393 = state_17453__$1;
(statearr_17472_19393[(1)] = (13));

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
var statearr_17473 = [null,null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17453){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17453);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17474){var ex__16705__auto__ = e17474;
var statearr_17476_19394 = state_17453;
(statearr_17476_19394[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17453[(4)]))){
var statearr_17477_19396 = state_17453;
(statearr_17477_19396[(1)] = cljs.core.first((state_17453[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19400 = state_17453;
state_17453 = G__19400;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17478 = f__16845__auto__();
(statearr_17478[(6)] = c__16844__auto___19363);

return statearr_17478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var c__16844__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17502){
var state_val_17503 = (state_17502[(1)]);
if((state_val_17503 === (7))){
var inst_17498 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17504_19410 = state_17502__$1;
(statearr_17504_19410[(2)] = inst_17498);

(statearr_17504_19410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (1))){
var inst_17480 = init;
var inst_17481 = inst_17480;
var state_17502__$1 = (function (){var statearr_17506 = state_17502;
(statearr_17506[(7)] = inst_17481);

return statearr_17506;
})();
var statearr_17507_19412 = state_17502__$1;
(statearr_17507_19412[(2)] = null);

(statearr_17507_19412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (4))){
var inst_17485 = (state_17502[(8)]);
var inst_17485__$1 = (state_17502[(2)]);
var inst_17486 = (inst_17485__$1 == null);
var state_17502__$1 = (function (){var statearr_17508 = state_17502;
(statearr_17508[(8)] = inst_17485__$1);

return statearr_17508;
})();
if(cljs.core.truth_(inst_17486)){
var statearr_17509_19413 = state_17502__$1;
(statearr_17509_19413[(1)] = (5));

} else {
var statearr_17510_19414 = state_17502__$1;
(statearr_17510_19414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (6))){
var inst_17481 = (state_17502[(7)]);
var inst_17489 = (state_17502[(9)]);
var inst_17485 = (state_17502[(8)]);
var inst_17489__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17481,inst_17485) : f.call(null,inst_17481,inst_17485));
var inst_17490 = cljs.core.reduced_QMARK_(inst_17489__$1);
var state_17502__$1 = (function (){var statearr_17512 = state_17502;
(statearr_17512[(9)] = inst_17489__$1);

return statearr_17512;
})();
if(inst_17490){
var statearr_17513_19415 = state_17502__$1;
(statearr_17513_19415[(1)] = (8));

} else {
var statearr_17514_19417 = state_17502__$1;
(statearr_17514_19417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (3))){
var inst_17500 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17502__$1,inst_17500);
} else {
if((state_val_17503 === (2))){
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17502__$1,(4),ch);
} else {
if((state_val_17503 === (9))){
var inst_17489 = (state_17502[(9)]);
var inst_17481 = inst_17489;
var state_17502__$1 = (function (){var statearr_17515 = state_17502;
(statearr_17515[(7)] = inst_17481);

return statearr_17515;
})();
var statearr_17517_19428 = state_17502__$1;
(statearr_17517_19428[(2)] = null);

(statearr_17517_19428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (5))){
var inst_17481 = (state_17502[(7)]);
var state_17502__$1 = state_17502;
var statearr_17518_19429 = state_17502__$1;
(statearr_17518_19429[(2)] = inst_17481);

(statearr_17518_19429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (10))){
var inst_17496 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17519_19431 = state_17502__$1;
(statearr_17519_19431[(2)] = inst_17496);

(statearr_17519_19431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (8))){
var inst_17489 = (state_17502[(9)]);
var inst_17492 = cljs.core.deref(inst_17489);
var state_17502__$1 = state_17502;
var statearr_17520_19436 = state_17502__$1;
(statearr_17520_19436[(2)] = inst_17492);

(statearr_17520_19436[(1)] = (10));


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
var statearr_17521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17521[(0)] = cljs$core$async$reduce_$_state_machine__16702__auto__);

(statearr_17521[(1)] = (1));

return statearr_17521;
});
var cljs$core$async$reduce_$_state_machine__16702__auto____1 = (function (state_17502){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17502);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17522){var ex__16705__auto__ = e17522;
var statearr_17523_19440 = state_17502;
(statearr_17523_19440[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17502[(4)]))){
var statearr_17524_19445 = state_17502;
(statearr_17524_19445[(1)] = cljs.core.first((state_17502[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19452 = state_17502;
state_17502 = G__19452;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16702__auto__ = function(state_17502){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16702__auto____1.call(this,state_17502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16702__auto____0;
cljs$core$async$reduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16702__auto____1;
return cljs$core$async$reduce_$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17525 = f__16845__auto__();
(statearr_17525[(6)] = c__16844__auto__);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

return c__16844__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16844__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17532){
var state_val_17533 = (state_17532[(1)]);
if((state_val_17533 === (1))){
var inst_17527 = cljs.core.async.reduce(f__$1,init,ch);
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17532__$1,(2),inst_17527);
} else {
if((state_val_17533 === (2))){
var inst_17529 = (state_17532[(2)]);
var inst_17530 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17529) : f__$1.call(null,inst_17529));
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17532__$1,inst_17530);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16702__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16702__auto____0 = (function (){
var statearr_17534 = [null,null,null,null,null,null,null];
(statearr_17534[(0)] = cljs$core$async$transduce_$_state_machine__16702__auto__);

(statearr_17534[(1)] = (1));

return statearr_17534;
});
var cljs$core$async$transduce_$_state_machine__16702__auto____1 = (function (state_17532){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17532);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17535){var ex__16705__auto__ = e17535;
var statearr_17536_19455 = state_17532;
(statearr_17536_19455[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17532[(4)]))){
var statearr_17537_19458 = state_17532;
(statearr_17537_19458[(1)] = cljs.core.first((state_17532[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19459 = state_17532;
state_17532 = G__19459;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16702__auto__ = function(state_17532){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16702__auto____1.call(this,state_17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16702__auto____0;
cljs$core$async$transduce_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16702__auto____1;
return cljs$core$async$transduce_$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17538 = f__16845__auto__();
(statearr_17538[(6)] = c__16844__auto__);

return statearr_17538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

return c__16844__auto__;
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
var G__17541 = arguments.length;
switch (G__17541) {
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
var c__16844__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17566){
var state_val_17567 = (state_17566[(1)]);
if((state_val_17567 === (7))){
var inst_17548 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
var statearr_17568_19468 = state_17566__$1;
(statearr_17568_19468[(2)] = inst_17548);

(statearr_17568_19468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (1))){
var inst_17542 = cljs.core.seq(coll);
var inst_17543 = inst_17542;
var state_17566__$1 = (function (){var statearr_17570 = state_17566;
(statearr_17570[(7)] = inst_17543);

return statearr_17570;
})();
var statearr_17571_19470 = state_17566__$1;
(statearr_17571_19470[(2)] = null);

(statearr_17571_19470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (4))){
var inst_17543 = (state_17566[(7)]);
var inst_17546 = cljs.core.first(inst_17543);
var state_17566__$1 = state_17566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17566__$1,(7),ch,inst_17546);
} else {
if((state_val_17567 === (13))){
var inst_17560 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
var statearr_17572_19471 = state_17566__$1;
(statearr_17572_19471[(2)] = inst_17560);

(statearr_17572_19471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (6))){
var inst_17551 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
if(cljs.core.truth_(inst_17551)){
var statearr_17573_19472 = state_17566__$1;
(statearr_17573_19472[(1)] = (8));

} else {
var statearr_17574_19473 = state_17566__$1;
(statearr_17574_19473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (3))){
var inst_17564 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17566__$1,inst_17564);
} else {
if((state_val_17567 === (12))){
var state_17566__$1 = state_17566;
var statearr_17575_19474 = state_17566__$1;
(statearr_17575_19474[(2)] = null);

(statearr_17575_19474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (2))){
var inst_17543 = (state_17566[(7)]);
var state_17566__$1 = state_17566;
if(cljs.core.truth_(inst_17543)){
var statearr_17576_19475 = state_17566__$1;
(statearr_17576_19475[(1)] = (4));

} else {
var statearr_17577_19476 = state_17566__$1;
(statearr_17577_19476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (11))){
var inst_17557 = cljs.core.async.close_BANG_(ch);
var state_17566__$1 = state_17566;
var statearr_17578_19477 = state_17566__$1;
(statearr_17578_19477[(2)] = inst_17557);

(statearr_17578_19477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (9))){
var state_17566__$1 = state_17566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17579_19478 = state_17566__$1;
(statearr_17579_19478[(1)] = (11));

} else {
var statearr_17580_19479 = state_17566__$1;
(statearr_17580_19479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (5))){
var inst_17543 = (state_17566[(7)]);
var state_17566__$1 = state_17566;
var statearr_17581_19480 = state_17566__$1;
(statearr_17581_19480[(2)] = inst_17543);

(statearr_17581_19480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (10))){
var inst_17562 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
var statearr_17583_19491 = state_17566__$1;
(statearr_17583_19491[(2)] = inst_17562);

(statearr_17583_19491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (8))){
var inst_17543 = (state_17566[(7)]);
var inst_17553 = cljs.core.next(inst_17543);
var inst_17543__$1 = inst_17553;
var state_17566__$1 = (function (){var statearr_17584 = state_17566;
(statearr_17584[(7)] = inst_17543__$1);

return statearr_17584;
})();
var statearr_17585_19492 = state_17566__$1;
(statearr_17585_19492[(2)] = null);

(statearr_17585_19492[(1)] = (2));


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
var statearr_17587 = [null,null,null,null,null,null,null,null];
(statearr_17587[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_17587[(1)] = (1));

return statearr_17587;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_17566){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17566);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17588){var ex__16705__auto__ = e17588;
var statearr_17589_19494 = state_17566;
(statearr_17589_19494[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17566[(4)]))){
var statearr_17590_19495 = state_17566;
(statearr_17590_19495[(1)] = cljs.core.first((state_17566[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19496 = state_17566;
state_17566 = G__19496;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_17566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_17566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17591 = f__16845__auto__();
(statearr_17591[(6)] = c__16844__auto__);

return statearr_17591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

return c__16844__auto__;
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
var G__17595 = arguments.length;
switch (G__17595) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19507 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19507(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19518 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19518(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19525 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19525(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19526 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19526(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17602 = (function (ch,cs,meta17603){
this.ch = ch;
this.cs = cs;
this.meta17603 = meta17603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17604,meta17603__$1){
var self__ = this;
var _17604__$1 = this;
return (new cljs.core.async.t_cljs$core$async17602(self__.ch,self__.cs,meta17603__$1));
}));

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17604){
var self__ = this;
var _17604__$1 = this;
return self__.meta17603;
}));

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17602.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17603","meta17603",-1358262220,null)], null);
}));

(cljs.core.async.t_cljs$core$async17602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17602");

(cljs.core.async.t_cljs$core$async17602.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17602.
 */
cljs.core.async.__GT_t_cljs$core$async17602 = (function cljs$core$async$__GT_t_cljs$core$async17602(ch,cs,meta17603){
return (new cljs.core.async.t_cljs$core$async17602(ch,cs,meta17603));
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
var m = (new cljs.core.async.t_cljs$core$async17602(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16844__auto___19535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17744){
var state_val_17745 = (state_17744[(1)]);
if((state_val_17745 === (7))){
var inst_17740 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17747_19536 = state_17744__$1;
(statearr_17747_19536[(2)] = inst_17740);

(statearr_17747_19536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (20))){
var inst_17643 = (state_17744[(7)]);
var inst_17655 = cljs.core.first(inst_17643);
var inst_17656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17655,(0),null);
var inst_17657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17655,(1),null);
var state_17744__$1 = (function (){var statearr_17748 = state_17744;
(statearr_17748[(8)] = inst_17656);

return statearr_17748;
})();
if(cljs.core.truth_(inst_17657)){
var statearr_17749_19537 = state_17744__$1;
(statearr_17749_19537[(1)] = (22));

} else {
var statearr_17750_19538 = state_17744__$1;
(statearr_17750_19538[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (27))){
var inst_17693 = (state_17744[(9)]);
var inst_17609 = (state_17744[(10)]);
var inst_17686 = (state_17744[(11)]);
var inst_17688 = (state_17744[(12)]);
var inst_17693__$1 = cljs.core._nth(inst_17686,inst_17688);
var inst_17694 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17693__$1,inst_17609,done);
var state_17744__$1 = (function (){var statearr_17751 = state_17744;
(statearr_17751[(9)] = inst_17693__$1);

return statearr_17751;
})();
if(cljs.core.truth_(inst_17694)){
var statearr_17752_19549 = state_17744__$1;
(statearr_17752_19549[(1)] = (30));

} else {
var statearr_17753_19551 = state_17744__$1;
(statearr_17753_19551[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (1))){
var state_17744__$1 = state_17744;
var statearr_17755_19552 = state_17744__$1;
(statearr_17755_19552[(2)] = null);

(statearr_17755_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (24))){
var inst_17643 = (state_17744[(7)]);
var inst_17663 = (state_17744[(2)]);
var inst_17664 = cljs.core.next(inst_17643);
var inst_17619 = inst_17664;
var inst_17620 = null;
var inst_17621 = (0);
var inst_17622 = (0);
var state_17744__$1 = (function (){var statearr_17756 = state_17744;
(statearr_17756[(13)] = inst_17619);

(statearr_17756[(14)] = inst_17621);

(statearr_17756[(15)] = inst_17622);

(statearr_17756[(16)] = inst_17620);

(statearr_17756[(17)] = inst_17663);

return statearr_17756;
})();
var statearr_17757_19559 = state_17744__$1;
(statearr_17757_19559[(2)] = null);

(statearr_17757_19559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (39))){
var state_17744__$1 = state_17744;
var statearr_17761_19560 = state_17744__$1;
(statearr_17761_19560[(2)] = null);

(statearr_17761_19560[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (4))){
var inst_17609 = (state_17744[(10)]);
var inst_17609__$1 = (state_17744[(2)]);
var inst_17611 = (inst_17609__$1 == null);
var state_17744__$1 = (function (){var statearr_17762 = state_17744;
(statearr_17762[(10)] = inst_17609__$1);

return statearr_17762;
})();
if(cljs.core.truth_(inst_17611)){
var statearr_17763_19566 = state_17744__$1;
(statearr_17763_19566[(1)] = (5));

} else {
var statearr_17764_19567 = state_17744__$1;
(statearr_17764_19567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (15))){
var inst_17619 = (state_17744[(13)]);
var inst_17621 = (state_17744[(14)]);
var inst_17622 = (state_17744[(15)]);
var inst_17620 = (state_17744[(16)]);
var inst_17637 = (state_17744[(2)]);
var inst_17638 = (inst_17622 + (1));
var tmp17758 = inst_17619;
var tmp17759 = inst_17621;
var tmp17760 = inst_17620;
var inst_17619__$1 = tmp17758;
var inst_17620__$1 = tmp17760;
var inst_17621__$1 = tmp17759;
var inst_17622__$1 = inst_17638;
var state_17744__$1 = (function (){var statearr_17765 = state_17744;
(statearr_17765[(13)] = inst_17619__$1);

(statearr_17765[(18)] = inst_17637);

(statearr_17765[(14)] = inst_17621__$1);

(statearr_17765[(15)] = inst_17622__$1);

(statearr_17765[(16)] = inst_17620__$1);

return statearr_17765;
})();
var statearr_17767_19570 = state_17744__$1;
(statearr_17767_19570[(2)] = null);

(statearr_17767_19570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (21))){
var inst_17667 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17771_19571 = state_17744__$1;
(statearr_17771_19571[(2)] = inst_17667);

(statearr_17771_19571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (31))){
var inst_17693 = (state_17744[(9)]);
var inst_17697 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17693);
var state_17744__$1 = state_17744;
var statearr_17772_19572 = state_17744__$1;
(statearr_17772_19572[(2)] = inst_17697);

(statearr_17772_19572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (32))){
var inst_17685 = (state_17744[(19)]);
var inst_17687 = (state_17744[(20)]);
var inst_17686 = (state_17744[(11)]);
var inst_17688 = (state_17744[(12)]);
var inst_17699 = (state_17744[(2)]);
var inst_17700 = (inst_17688 + (1));
var tmp17768 = inst_17685;
var tmp17769 = inst_17687;
var tmp17770 = inst_17686;
var inst_17685__$1 = tmp17768;
var inst_17686__$1 = tmp17770;
var inst_17687__$1 = tmp17769;
var inst_17688__$1 = inst_17700;
var state_17744__$1 = (function (){var statearr_17773 = state_17744;
(statearr_17773[(19)] = inst_17685__$1);

(statearr_17773[(20)] = inst_17687__$1);

(statearr_17773[(21)] = inst_17699);

(statearr_17773[(11)] = inst_17686__$1);

(statearr_17773[(12)] = inst_17688__$1);

return statearr_17773;
})();
var statearr_17774_19575 = state_17744__$1;
(statearr_17774_19575[(2)] = null);

(statearr_17774_19575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (40))){
var inst_17713 = (state_17744[(22)]);
var inst_17717 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17713);
var state_17744__$1 = state_17744;
var statearr_17775_19576 = state_17744__$1;
(statearr_17775_19576[(2)] = inst_17717);

(statearr_17775_19576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (33))){
var inst_17703 = (state_17744[(23)]);
var inst_17705 = cljs.core.chunked_seq_QMARK_(inst_17703);
var state_17744__$1 = state_17744;
if(inst_17705){
var statearr_17777_19577 = state_17744__$1;
(statearr_17777_19577[(1)] = (36));

} else {
var statearr_17778_19578 = state_17744__$1;
(statearr_17778_19578[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (13))){
var inst_17631 = (state_17744[(24)]);
var inst_17634 = cljs.core.async.close_BANG_(inst_17631);
var state_17744__$1 = state_17744;
var statearr_17779_19579 = state_17744__$1;
(statearr_17779_19579[(2)] = inst_17634);

(statearr_17779_19579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (22))){
var inst_17656 = (state_17744[(8)]);
var inst_17659 = cljs.core.async.close_BANG_(inst_17656);
var state_17744__$1 = state_17744;
var statearr_17780_19580 = state_17744__$1;
(statearr_17780_19580[(2)] = inst_17659);

(statearr_17780_19580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (36))){
var inst_17703 = (state_17744[(23)]);
var inst_17707 = cljs.core.chunk_first(inst_17703);
var inst_17709 = cljs.core.chunk_rest(inst_17703);
var inst_17710 = cljs.core.count(inst_17707);
var inst_17685 = inst_17709;
var inst_17686 = inst_17707;
var inst_17687 = inst_17710;
var inst_17688 = (0);
var state_17744__$1 = (function (){var statearr_17781 = state_17744;
(statearr_17781[(19)] = inst_17685);

(statearr_17781[(20)] = inst_17687);

(statearr_17781[(11)] = inst_17686);

(statearr_17781[(12)] = inst_17688);

return statearr_17781;
})();
var statearr_17782_19585 = state_17744__$1;
(statearr_17782_19585[(2)] = null);

(statearr_17782_19585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (41))){
var inst_17703 = (state_17744[(23)]);
var inst_17719 = (state_17744[(2)]);
var inst_17720 = cljs.core.next(inst_17703);
var inst_17685 = inst_17720;
var inst_17686 = null;
var inst_17687 = (0);
var inst_17688 = (0);
var state_17744__$1 = (function (){var statearr_17784 = state_17744;
(statearr_17784[(19)] = inst_17685);

(statearr_17784[(20)] = inst_17687);

(statearr_17784[(11)] = inst_17686);

(statearr_17784[(12)] = inst_17688);

(statearr_17784[(25)] = inst_17719);

return statearr_17784;
})();
var statearr_17785_19586 = state_17744__$1;
(statearr_17785_19586[(2)] = null);

(statearr_17785_19586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (43))){
var state_17744__$1 = state_17744;
var statearr_17786_19589 = state_17744__$1;
(statearr_17786_19589[(2)] = null);

(statearr_17786_19589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (29))){
var inst_17728 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17787_19590 = state_17744__$1;
(statearr_17787_19590[(2)] = inst_17728);

(statearr_17787_19590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (44))){
var inst_17737 = (state_17744[(2)]);
var state_17744__$1 = (function (){var statearr_17788 = state_17744;
(statearr_17788[(26)] = inst_17737);

return statearr_17788;
})();
var statearr_17789_19591 = state_17744__$1;
(statearr_17789_19591[(2)] = null);

(statearr_17789_19591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (6))){
var inst_17677 = (state_17744[(27)]);
var inst_17676 = cljs.core.deref(cs);
var inst_17677__$1 = cljs.core.keys(inst_17676);
var inst_17678 = cljs.core.count(inst_17677__$1);
var inst_17679 = cljs.core.reset_BANG_(dctr,inst_17678);
var inst_17684 = cljs.core.seq(inst_17677__$1);
var inst_17685 = inst_17684;
var inst_17686 = null;
var inst_17687 = (0);
var inst_17688 = (0);
var state_17744__$1 = (function (){var statearr_17791 = state_17744;
(statearr_17791[(19)] = inst_17685);

(statearr_17791[(20)] = inst_17687);

(statearr_17791[(27)] = inst_17677__$1);

(statearr_17791[(11)] = inst_17686);

(statearr_17791[(12)] = inst_17688);

(statearr_17791[(28)] = inst_17679);

return statearr_17791;
})();
var statearr_17792_19592 = state_17744__$1;
(statearr_17792_19592[(2)] = null);

(statearr_17792_19592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (28))){
var inst_17685 = (state_17744[(19)]);
var inst_17703 = (state_17744[(23)]);
var inst_17703__$1 = cljs.core.seq(inst_17685);
var state_17744__$1 = (function (){var statearr_17793 = state_17744;
(statearr_17793[(23)] = inst_17703__$1);

return statearr_17793;
})();
if(inst_17703__$1){
var statearr_17794_19597 = state_17744__$1;
(statearr_17794_19597[(1)] = (33));

} else {
var statearr_17795_19598 = state_17744__$1;
(statearr_17795_19598[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (25))){
var inst_17687 = (state_17744[(20)]);
var inst_17688 = (state_17744[(12)]);
var inst_17690 = (inst_17688 < inst_17687);
var inst_17691 = inst_17690;
var state_17744__$1 = state_17744;
if(cljs.core.truth_(inst_17691)){
var statearr_17796_19602 = state_17744__$1;
(statearr_17796_19602[(1)] = (27));

} else {
var statearr_17797_19603 = state_17744__$1;
(statearr_17797_19603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (34))){
var state_17744__$1 = state_17744;
var statearr_17798_19604 = state_17744__$1;
(statearr_17798_19604[(2)] = null);

(statearr_17798_19604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (17))){
var state_17744__$1 = state_17744;
var statearr_17799_19608 = state_17744__$1;
(statearr_17799_19608[(2)] = null);

(statearr_17799_19608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (3))){
var inst_17742 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17744__$1,inst_17742);
} else {
if((state_val_17745 === (12))){
var inst_17672 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17801_19609 = state_17744__$1;
(statearr_17801_19609[(2)] = inst_17672);

(statearr_17801_19609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (2))){
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17744__$1,(4),ch);
} else {
if((state_val_17745 === (23))){
var state_17744__$1 = state_17744;
var statearr_17802_19610 = state_17744__$1;
(statearr_17802_19610[(2)] = null);

(statearr_17802_19610[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (35))){
var inst_17726 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17803_19611 = state_17744__$1;
(statearr_17803_19611[(2)] = inst_17726);

(statearr_17803_19611[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (19))){
var inst_17643 = (state_17744[(7)]);
var inst_17647 = cljs.core.chunk_first(inst_17643);
var inst_17648 = cljs.core.chunk_rest(inst_17643);
var inst_17649 = cljs.core.count(inst_17647);
var inst_17619 = inst_17648;
var inst_17620 = inst_17647;
var inst_17621 = inst_17649;
var inst_17622 = (0);
var state_17744__$1 = (function (){var statearr_17804 = state_17744;
(statearr_17804[(13)] = inst_17619);

(statearr_17804[(14)] = inst_17621);

(statearr_17804[(15)] = inst_17622);

(statearr_17804[(16)] = inst_17620);

return statearr_17804;
})();
var statearr_17806_19613 = state_17744__$1;
(statearr_17806_19613[(2)] = null);

(statearr_17806_19613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (11))){
var inst_17643 = (state_17744[(7)]);
var inst_17619 = (state_17744[(13)]);
var inst_17643__$1 = cljs.core.seq(inst_17619);
var state_17744__$1 = (function (){var statearr_17807 = state_17744;
(statearr_17807[(7)] = inst_17643__$1);

return statearr_17807;
})();
if(inst_17643__$1){
var statearr_17808_19618 = state_17744__$1;
(statearr_17808_19618[(1)] = (16));

} else {
var statearr_17809_19622 = state_17744__$1;
(statearr_17809_19622[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (9))){
var inst_17674 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17810_19623 = state_17744__$1;
(statearr_17810_19623[(2)] = inst_17674);

(statearr_17810_19623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (5))){
var inst_17617 = cljs.core.deref(cs);
var inst_17618 = cljs.core.seq(inst_17617);
var inst_17619 = inst_17618;
var inst_17620 = null;
var inst_17621 = (0);
var inst_17622 = (0);
var state_17744__$1 = (function (){var statearr_17812 = state_17744;
(statearr_17812[(13)] = inst_17619);

(statearr_17812[(14)] = inst_17621);

(statearr_17812[(15)] = inst_17622);

(statearr_17812[(16)] = inst_17620);

return statearr_17812;
})();
var statearr_17813_19624 = state_17744__$1;
(statearr_17813_19624[(2)] = null);

(statearr_17813_19624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (14))){
var state_17744__$1 = state_17744;
var statearr_17814_19625 = state_17744__$1;
(statearr_17814_19625[(2)] = null);

(statearr_17814_19625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (45))){
var inst_17734 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17816_19626 = state_17744__$1;
(statearr_17816_19626[(2)] = inst_17734);

(statearr_17816_19626[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (26))){
var inst_17677 = (state_17744[(27)]);
var inst_17730 = (state_17744[(2)]);
var inst_17731 = cljs.core.seq(inst_17677);
var state_17744__$1 = (function (){var statearr_17817 = state_17744;
(statearr_17817[(29)] = inst_17730);

return statearr_17817;
})();
if(inst_17731){
var statearr_17818_19627 = state_17744__$1;
(statearr_17818_19627[(1)] = (42));

} else {
var statearr_17819_19628 = state_17744__$1;
(statearr_17819_19628[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (16))){
var inst_17643 = (state_17744[(7)]);
var inst_17645 = cljs.core.chunked_seq_QMARK_(inst_17643);
var state_17744__$1 = state_17744;
if(inst_17645){
var statearr_17820_19629 = state_17744__$1;
(statearr_17820_19629[(1)] = (19));

} else {
var statearr_17821_19634 = state_17744__$1;
(statearr_17821_19634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (38))){
var inst_17723 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17822_19638 = state_17744__$1;
(statearr_17822_19638[(2)] = inst_17723);

(statearr_17822_19638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (30))){
var state_17744__$1 = state_17744;
var statearr_17823_19639 = state_17744__$1;
(statearr_17823_19639[(2)] = null);

(statearr_17823_19639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (10))){
var inst_17622 = (state_17744[(15)]);
var inst_17620 = (state_17744[(16)]);
var inst_17630 = cljs.core._nth(inst_17620,inst_17622);
var inst_17631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17630,(0),null);
var inst_17632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17630,(1),null);
var state_17744__$1 = (function (){var statearr_17824 = state_17744;
(statearr_17824[(24)] = inst_17631);

return statearr_17824;
})();
if(cljs.core.truth_(inst_17632)){
var statearr_17825_19643 = state_17744__$1;
(statearr_17825_19643[(1)] = (13));

} else {
var statearr_17827_19647 = state_17744__$1;
(statearr_17827_19647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (18))){
var inst_17670 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17828_19648 = state_17744__$1;
(statearr_17828_19648[(2)] = inst_17670);

(statearr_17828_19648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (42))){
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17744__$1,(45),dchan);
} else {
if((state_val_17745 === (37))){
var inst_17703 = (state_17744[(23)]);
var inst_17609 = (state_17744[(10)]);
var inst_17713 = (state_17744[(22)]);
var inst_17713__$1 = cljs.core.first(inst_17703);
var inst_17714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17713__$1,inst_17609,done);
var state_17744__$1 = (function (){var statearr_17831 = state_17744;
(statearr_17831[(22)] = inst_17713__$1);

return statearr_17831;
})();
if(cljs.core.truth_(inst_17714)){
var statearr_17832_19652 = state_17744__$1;
(statearr_17832_19652[(1)] = (39));

} else {
var statearr_17833_19653 = state_17744__$1;
(statearr_17833_19653[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (8))){
var inst_17621 = (state_17744[(14)]);
var inst_17622 = (state_17744[(15)]);
var inst_17624 = (inst_17622 < inst_17621);
var inst_17625 = inst_17624;
var state_17744__$1 = state_17744;
if(cljs.core.truth_(inst_17625)){
var statearr_17834_19658 = state_17744__$1;
(statearr_17834_19658[(1)] = (10));

} else {
var statearr_17835_19659 = state_17744__$1;
(statearr_17835_19659[(1)] = (11));

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
var statearr_17836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17836[(0)] = cljs$core$async$mult_$_state_machine__16702__auto__);

(statearr_17836[(1)] = (1));

return statearr_17836;
});
var cljs$core$async$mult_$_state_machine__16702__auto____1 = (function (state_17744){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17744);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e17837){var ex__16705__auto__ = e17837;
var statearr_17838_19660 = state_17744;
(statearr_17838_19660[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17744[(4)]))){
var statearr_17839_19661 = state_17744;
(statearr_17839_19661[(1)] = cljs.core.first((state_17744[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19662 = state_17744;
state_17744 = G__19662;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16702__auto__ = function(state_17744){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16702__auto____1.call(this,state_17744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16702__auto____0;
cljs$core$async$mult_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16702__auto____1;
return cljs$core$async$mult_$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_17842 = f__16845__auto__();
(statearr_17842[(6)] = c__16844__auto___19535);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var G__17844 = arguments.length;
switch (G__17844) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19667 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19667(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19671 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19671(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19672 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19672(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19673 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19673(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19681 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19681(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19682 = arguments.length;
var i__5770__auto___19683 = (0);
while(true){
if((i__5770__auto___19683 < len__5769__auto___19682)){
args__5775__auto__.push((arguments[i__5770__auto___19683]));

var G__19684 = (i__5770__auto___19683 + (1));
i__5770__auto___19683 = G__19684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17857){
var map__17858 = p__17857;
var map__17858__$1 = cljs.core.__destructure_map(map__17858);
var opts = map__17858__$1;
var statearr_17862_19685 = state;
(statearr_17862_19685[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17863_19686 = state;
(statearr_17863_19686[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17864_19689 = state;
(statearr_17864_19689[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17850){
var G__17851 = cljs.core.first(seq17850);
var seq17850__$1 = cljs.core.next(seq17850);
var G__17852 = cljs.core.first(seq17850__$1);
var seq17850__$2 = cljs.core.next(seq17850__$1);
var G__17853 = cljs.core.first(seq17850__$2);
var seq17850__$3 = cljs.core.next(seq17850__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17851,G__17852,G__17853,seq17850__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17874 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17875){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17875 = meta17875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17876,meta17875__$1){
var self__ = this;
var _17876__$1 = this;
return (new cljs.core.async.t_cljs$core$async17874(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17875__$1));
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17876){
var self__ = this;
var _17876__$1 = this;
return self__.meta17875;
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17875","meta17875",-349211629,null)], null);
}));

(cljs.core.async.t_cljs$core$async17874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17874");

(cljs.core.async.t_cljs$core$async17874.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17874.
 */
cljs.core.async.__GT_t_cljs$core$async17874 = (function cljs$core$async$__GT_t_cljs$core$async17874(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17875){
return (new cljs.core.async.t_cljs$core$async17874(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17875));
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
var m = (new cljs.core.async.t_cljs$core$async17874(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16844__auto___19707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_17990){
var state_val_17992 = (state_17990[(1)]);
if((state_val_17992 === (7))){
var inst_17943 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17943)){
var statearr_18001_19708 = state_17990__$1;
(statearr_18001_19708[(1)] = (8));

} else {
var statearr_18002_19709 = state_17990__$1;
(statearr_18002_19709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (20))){
var inst_17935 = (state_17990[(7)]);
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17990__$1,(23),out,inst_17935);
} else {
if((state_val_17992 === (1))){
var inst_17913 = calc_state();
var inst_17914 = cljs.core.__destructure_map(inst_17913);
var inst_17915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17914,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17914,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17914,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17918 = inst_17913;
var state_17990__$1 = (function (){var statearr_18006 = state_17990;
(statearr_18006[(8)] = inst_17916);

(statearr_18006[(9)] = inst_17915);

(statearr_18006[(10)] = inst_17917);

(statearr_18006[(11)] = inst_17918);

return statearr_18006;
})();
var statearr_18008_19710 = state_17990__$1;
(statearr_18008_19710[(2)] = null);

(statearr_18008_19710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (24))){
var inst_17923 = (state_17990[(12)]);
var inst_17918 = inst_17923;
var state_17990__$1 = (function (){var statearr_18011 = state_17990;
(statearr_18011[(11)] = inst_17918);

return statearr_18011;
})();
var statearr_18013_19712 = state_17990__$1;
(statearr_18013_19712[(2)] = null);

(statearr_18013_19712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (4))){
var inst_17937 = (state_17990[(13)]);
var inst_17935 = (state_17990[(7)]);
var inst_17934 = (state_17990[(2)]);
var inst_17935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17934,(0),null);
var inst_17936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17934,(1),null);
var inst_17937__$1 = (inst_17935__$1 == null);
var state_17990__$1 = (function (){var statearr_18017 = state_17990;
(statearr_18017[(14)] = inst_17936);

(statearr_18017[(13)] = inst_17937__$1);

(statearr_18017[(7)] = inst_17935__$1);

return statearr_18017;
})();
if(cljs.core.truth_(inst_17937__$1)){
var statearr_18018_19718 = state_17990__$1;
(statearr_18018_19718[(1)] = (5));

} else {
var statearr_18020_19719 = state_17990__$1;
(statearr_18020_19719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (15))){
var inst_17924 = (state_17990[(15)]);
var inst_17964 = (state_17990[(16)]);
var inst_17964__$1 = cljs.core.empty_QMARK_(inst_17924);
var state_17990__$1 = (function (){var statearr_18023 = state_17990;
(statearr_18023[(16)] = inst_17964__$1);

return statearr_18023;
})();
if(inst_17964__$1){
var statearr_18024_19720 = state_17990__$1;
(statearr_18024_19720[(1)] = (17));

} else {
var statearr_18026_19721 = state_17990__$1;
(statearr_18026_19721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (21))){
var inst_17923 = (state_17990[(12)]);
var inst_17918 = inst_17923;
var state_17990__$1 = (function (){var statearr_18027 = state_17990;
(statearr_18027[(11)] = inst_17918);

return statearr_18027;
})();
var statearr_18030_19722 = state_17990__$1;
(statearr_18030_19722[(2)] = null);

(statearr_18030_19722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (13))){
var inst_17954 = (state_17990[(2)]);
var inst_17955 = calc_state();
var inst_17918 = inst_17955;
var state_17990__$1 = (function (){var statearr_18032 = state_17990;
(statearr_18032[(17)] = inst_17954);

(statearr_18032[(11)] = inst_17918);

return statearr_18032;
})();
var statearr_18033_19723 = state_17990__$1;
(statearr_18033_19723[(2)] = null);

(statearr_18033_19723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (22))){
var inst_17984 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18035_19724 = state_17990__$1;
(statearr_18035_19724[(2)] = inst_17984);

(statearr_18035_19724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (6))){
var inst_17936 = (state_17990[(14)]);
var inst_17941 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17936,change);
var state_17990__$1 = state_17990;
var statearr_18039_19725 = state_17990__$1;
(statearr_18039_19725[(2)] = inst_17941);

(statearr_18039_19725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (25))){
var state_17990__$1 = state_17990;
var statearr_18040_19726 = state_17990__$1;
(statearr_18040_19726[(2)] = null);

(statearr_18040_19726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (17))){
var inst_17936 = (state_17990[(14)]);
var inst_17925 = (state_17990[(18)]);
var inst_17966 = (inst_17925.cljs$core$IFn$_invoke$arity$1 ? inst_17925.cljs$core$IFn$_invoke$arity$1(inst_17936) : inst_17925.call(null,inst_17936));
var inst_17967 = cljs.core.not(inst_17966);
var state_17990__$1 = state_17990;
var statearr_18043_19728 = state_17990__$1;
(statearr_18043_19728[(2)] = inst_17967);

(statearr_18043_19728[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (3))){
var inst_17988 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17990__$1,inst_17988);
} else {
if((state_val_17992 === (12))){
var state_17990__$1 = state_17990;
var statearr_18047_19729 = state_17990__$1;
(statearr_18047_19729[(2)] = null);

(statearr_18047_19729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (2))){
var inst_17923 = (state_17990[(12)]);
var inst_17918 = (state_17990[(11)]);
var inst_17923__$1 = cljs.core.__destructure_map(inst_17918);
var inst_17924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17990__$1 = (function (){var statearr_18052 = state_17990;
(statearr_18052[(12)] = inst_17923__$1);

(statearr_18052[(18)] = inst_17925);

(statearr_18052[(15)] = inst_17924);

return statearr_18052;
})();
return cljs.core.async.ioc_alts_BANG_(state_17990__$1,(4),inst_17926);
} else {
if((state_val_17992 === (23))){
var inst_17975 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17975)){
var statearr_18056_19734 = state_17990__$1;
(statearr_18056_19734[(1)] = (24));

} else {
var statearr_18057_19735 = state_17990__$1;
(statearr_18057_19735[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (19))){
var inst_17970 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18059_19737 = state_17990__$1;
(statearr_18059_19737[(2)] = inst_17970);

(statearr_18059_19737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (11))){
var inst_17936 = (state_17990[(14)]);
var inst_17951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17936);
var state_17990__$1 = state_17990;
var statearr_18060_19738 = state_17990__$1;
(statearr_18060_19738[(2)] = inst_17951);

(statearr_18060_19738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (9))){
var inst_17936 = (state_17990[(14)]);
var inst_17924 = (state_17990[(15)]);
var inst_17960 = (state_17990[(19)]);
var inst_17960__$1 = (inst_17924.cljs$core$IFn$_invoke$arity$1 ? inst_17924.cljs$core$IFn$_invoke$arity$1(inst_17936) : inst_17924.call(null,inst_17936));
var state_17990__$1 = (function (){var statearr_18064 = state_17990;
(statearr_18064[(19)] = inst_17960__$1);

return statearr_18064;
})();
if(cljs.core.truth_(inst_17960__$1)){
var statearr_18065_19740 = state_17990__$1;
(statearr_18065_19740[(1)] = (14));

} else {
var statearr_18066_19741 = state_17990__$1;
(statearr_18066_19741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (5))){
var inst_17937 = (state_17990[(13)]);
var state_17990__$1 = state_17990;
var statearr_18072_19746 = state_17990__$1;
(statearr_18072_19746[(2)] = inst_17937);

(statearr_18072_19746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (14))){
var inst_17960 = (state_17990[(19)]);
var state_17990__$1 = state_17990;
var statearr_18073_19747 = state_17990__$1;
(statearr_18073_19747[(2)] = inst_17960);

(statearr_18073_19747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (26))){
var inst_17980 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18077_19752 = state_17990__$1;
(statearr_18077_19752[(2)] = inst_17980);

(statearr_18077_19752[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (16))){
var inst_17972 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17972)){
var statearr_18079_19753 = state_17990__$1;
(statearr_18079_19753[(1)] = (20));

} else {
var statearr_18080_19754 = state_17990__$1;
(statearr_18080_19754[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (10))){
var inst_17986 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18083_19755 = state_17990__$1;
(statearr_18083_19755[(2)] = inst_17986);

(statearr_18083_19755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (18))){
var inst_17964 = (state_17990[(16)]);
var state_17990__$1 = state_17990;
var statearr_18085_19756 = state_17990__$1;
(statearr_18085_19756[(2)] = inst_17964);

(statearr_18085_19756[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (8))){
var inst_17935 = (state_17990[(7)]);
var inst_17948 = (inst_17935 == null);
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17948)){
var statearr_18086_19760 = state_17990__$1;
(statearr_18086_19760[(1)] = (11));

} else {
var statearr_18088_19761 = state_17990__$1;
(statearr_18088_19761[(1)] = (12));

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
var statearr_18094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18094[(0)] = cljs$core$async$mix_$_state_machine__16702__auto__);

(statearr_18094[(1)] = (1));

return statearr_18094;
});
var cljs$core$async$mix_$_state_machine__16702__auto____1 = (function (state_17990){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_17990);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18095){var ex__16705__auto__ = e18095;
var statearr_18096_19762 = state_17990;
(statearr_18096_19762[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_17990[(4)]))){
var statearr_18097_19763 = state_17990;
(statearr_18097_19763[(1)] = cljs.core.first((state_17990[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19764 = state_17990;
state_17990 = G__19764;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16702__auto__ = function(state_17990){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16702__auto____1.call(this,state_17990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16702__auto____0;
cljs$core$async$mix_$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16702__auto____1;
return cljs$core$async$mix_$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18099 = f__16845__auto__();
(statearr_18099[(6)] = c__16844__auto___19707);

return statearr_18099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19765 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19765(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19766 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19766(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19768 = (function() {
var G__19769 = null;
var G__19769__1 = (function (p){
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
var G__19769__2 = (function (p,v){
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
G__19769 = function(p,v){
switch(arguments.length){
case 1:
return G__19769__1.call(this,p);
case 2:
return G__19769__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19769.cljs$core$IFn$_invoke$arity$1 = G__19769__1;
G__19769.cljs$core$IFn$_invoke$arity$2 = G__19769__2;
return G__19769;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18141 = arguments.length;
switch (G__18141) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19768(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19768(p,v);
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
cljs.core.async.t_cljs$core$async18170 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18171){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18171 = meta18171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18172,meta18171__$1){
var self__ = this;
var _18172__$1 = this;
return (new cljs.core.async.t_cljs$core$async18170(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18171__$1));
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18172){
var self__ = this;
var _18172__$1 = this;
return self__.meta18171;
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18171","meta18171",814407497,null)], null);
}));

(cljs.core.async.t_cljs$core$async18170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18170");

(cljs.core.async.t_cljs$core$async18170.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18170.
 */
cljs.core.async.__GT_t_cljs$core$async18170 = (function cljs$core$async$__GT_t_cljs$core$async18170(ch,topic_fn,buf_fn,mults,ensure_mult,meta18171){
return (new cljs.core.async.t_cljs$core$async18170(ch,topic_fn,buf_fn,mults,ensure_mult,meta18171));
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
var G__18155 = arguments.length;
switch (G__18155) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18152_SHARP_){
if(cljs.core.truth_((p1__18152_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18152_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18152_SHARP_.call(null,topic)))){
return p1__18152_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18152_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18170(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16844__auto___19777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18289){
var state_val_18290 = (state_18289[(1)]);
if((state_val_18290 === (7))){
var inst_18285 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18292_19778 = state_18289__$1;
(statearr_18292_19778[(2)] = inst_18285);

(statearr_18292_19778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (20))){
var state_18289__$1 = state_18289;
var statearr_18293_19782 = state_18289__$1;
(statearr_18293_19782[(2)] = null);

(statearr_18293_19782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (1))){
var state_18289__$1 = state_18289;
var statearr_18294_19783 = state_18289__$1;
(statearr_18294_19783[(2)] = null);

(statearr_18294_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (24))){
var inst_18268 = (state_18289[(7)]);
var inst_18277 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18268);
var state_18289__$1 = state_18289;
var statearr_18295_19784 = state_18289__$1;
(statearr_18295_19784[(2)] = inst_18277);

(statearr_18295_19784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (4))){
var inst_18208 = (state_18289[(8)]);
var inst_18208__$1 = (state_18289[(2)]);
var inst_18209 = (inst_18208__$1 == null);
var state_18289__$1 = (function (){var statearr_18300 = state_18289;
(statearr_18300[(8)] = inst_18208__$1);

return statearr_18300;
})();
if(cljs.core.truth_(inst_18209)){
var statearr_18304_19785 = state_18289__$1;
(statearr_18304_19785[(1)] = (5));

} else {
var statearr_18305_19786 = state_18289__$1;
(statearr_18305_19786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (15))){
var inst_18262 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18307_19787 = state_18289__$1;
(statearr_18307_19787[(2)] = inst_18262);

(statearr_18307_19787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (21))){
var inst_18282 = (state_18289[(2)]);
var state_18289__$1 = (function (){var statearr_18308 = state_18289;
(statearr_18308[(9)] = inst_18282);

return statearr_18308;
})();
var statearr_18309_19788 = state_18289__$1;
(statearr_18309_19788[(2)] = null);

(statearr_18309_19788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (13))){
var inst_18240 = (state_18289[(10)]);
var inst_18245 = cljs.core.chunked_seq_QMARK_(inst_18240);
var state_18289__$1 = state_18289;
if(inst_18245){
var statearr_18314_19789 = state_18289__$1;
(statearr_18314_19789[(1)] = (16));

} else {
var statearr_18315_19790 = state_18289__$1;
(statearr_18315_19790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (22))){
var inst_18274 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
if(cljs.core.truth_(inst_18274)){
var statearr_18320_19791 = state_18289__$1;
(statearr_18320_19791[(1)] = (23));

} else {
var statearr_18321_19792 = state_18289__$1;
(statearr_18321_19792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (6))){
var inst_18208 = (state_18289[(8)]);
var inst_18268 = (state_18289[(7)]);
var inst_18270 = (state_18289[(11)]);
var inst_18268__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18208) : topic_fn.call(null,inst_18208));
var inst_18269 = cljs.core.deref(mults);
var inst_18270__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18269,inst_18268__$1);
var state_18289__$1 = (function (){var statearr_18326 = state_18289;
(statearr_18326[(7)] = inst_18268__$1);

(statearr_18326[(11)] = inst_18270__$1);

return statearr_18326;
})();
if(cljs.core.truth_(inst_18270__$1)){
var statearr_18327_19793 = state_18289__$1;
(statearr_18327_19793[(1)] = (19));

} else {
var statearr_18328_19794 = state_18289__$1;
(statearr_18328_19794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (25))){
var inst_18279 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18329_19796 = state_18289__$1;
(statearr_18329_19796[(2)] = inst_18279);

(statearr_18329_19796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (17))){
var inst_18240 = (state_18289[(10)]);
var inst_18253 = cljs.core.first(inst_18240);
var inst_18254 = cljs.core.async.muxch_STAR_(inst_18253);
var inst_18255 = cljs.core.async.close_BANG_(inst_18254);
var inst_18256 = cljs.core.next(inst_18240);
var inst_18222 = inst_18256;
var inst_18223 = null;
var inst_18224 = (0);
var inst_18225 = (0);
var state_18289__$1 = (function (){var statearr_18330 = state_18289;
(statearr_18330[(12)] = inst_18224);

(statearr_18330[(13)] = inst_18255);

(statearr_18330[(14)] = inst_18225);

(statearr_18330[(15)] = inst_18223);

(statearr_18330[(16)] = inst_18222);

return statearr_18330;
})();
var statearr_18331_19800 = state_18289__$1;
(statearr_18331_19800[(2)] = null);

(statearr_18331_19800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (3))){
var inst_18287 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18289__$1,inst_18287);
} else {
if((state_val_18290 === (12))){
var inst_18264 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18332_19805 = state_18289__$1;
(statearr_18332_19805[(2)] = inst_18264);

(statearr_18332_19805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (2))){
var state_18289__$1 = state_18289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18289__$1,(4),ch);
} else {
if((state_val_18290 === (23))){
var state_18289__$1 = state_18289;
var statearr_18334_19806 = state_18289__$1;
(statearr_18334_19806[(2)] = null);

(statearr_18334_19806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (19))){
var inst_18208 = (state_18289[(8)]);
var inst_18270 = (state_18289[(11)]);
var inst_18272 = cljs.core.async.muxch_STAR_(inst_18270);
var state_18289__$1 = state_18289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18289__$1,(22),inst_18272,inst_18208);
} else {
if((state_val_18290 === (11))){
var inst_18240 = (state_18289[(10)]);
var inst_18222 = (state_18289[(16)]);
var inst_18240__$1 = cljs.core.seq(inst_18222);
var state_18289__$1 = (function (){var statearr_18335 = state_18289;
(statearr_18335[(10)] = inst_18240__$1);

return statearr_18335;
})();
if(inst_18240__$1){
var statearr_18336_19809 = state_18289__$1;
(statearr_18336_19809[(1)] = (13));

} else {
var statearr_18337_19810 = state_18289__$1;
(statearr_18337_19810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (9))){
var inst_18266 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18338_19811 = state_18289__$1;
(statearr_18338_19811[(2)] = inst_18266);

(statearr_18338_19811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (5))){
var inst_18215 = cljs.core.deref(mults);
var inst_18216 = cljs.core.vals(inst_18215);
var inst_18220 = cljs.core.seq(inst_18216);
var inst_18222 = inst_18220;
var inst_18223 = null;
var inst_18224 = (0);
var inst_18225 = (0);
var state_18289__$1 = (function (){var statearr_18347 = state_18289;
(statearr_18347[(12)] = inst_18224);

(statearr_18347[(14)] = inst_18225);

(statearr_18347[(15)] = inst_18223);

(statearr_18347[(16)] = inst_18222);

return statearr_18347;
})();
var statearr_18348_19812 = state_18289__$1;
(statearr_18348_19812[(2)] = null);

(statearr_18348_19812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (14))){
var state_18289__$1 = state_18289;
var statearr_18352_19813 = state_18289__$1;
(statearr_18352_19813[(2)] = null);

(statearr_18352_19813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (16))){
var inst_18240 = (state_18289[(10)]);
var inst_18248 = cljs.core.chunk_first(inst_18240);
var inst_18249 = cljs.core.chunk_rest(inst_18240);
var inst_18250 = cljs.core.count(inst_18248);
var inst_18222 = inst_18249;
var inst_18223 = inst_18248;
var inst_18224 = inst_18250;
var inst_18225 = (0);
var state_18289__$1 = (function (){var statearr_18357 = state_18289;
(statearr_18357[(12)] = inst_18224);

(statearr_18357[(14)] = inst_18225);

(statearr_18357[(15)] = inst_18223);

(statearr_18357[(16)] = inst_18222);

return statearr_18357;
})();
var statearr_18358_19814 = state_18289__$1;
(statearr_18358_19814[(2)] = null);

(statearr_18358_19814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (10))){
var inst_18224 = (state_18289[(12)]);
var inst_18225 = (state_18289[(14)]);
var inst_18223 = (state_18289[(15)]);
var inst_18222 = (state_18289[(16)]);
var inst_18233 = cljs.core._nth(inst_18223,inst_18225);
var inst_18235 = cljs.core.async.muxch_STAR_(inst_18233);
var inst_18236 = cljs.core.async.close_BANG_(inst_18235);
var inst_18237 = (inst_18225 + (1));
var tmp18349 = inst_18224;
var tmp18350 = inst_18223;
var tmp18351 = inst_18222;
var inst_18222__$1 = tmp18351;
var inst_18223__$1 = tmp18350;
var inst_18224__$1 = tmp18349;
var inst_18225__$1 = inst_18237;
var state_18289__$1 = (function (){var statearr_18362 = state_18289;
(statearr_18362[(12)] = inst_18224__$1);

(statearr_18362[(17)] = inst_18236);

(statearr_18362[(14)] = inst_18225__$1);

(statearr_18362[(15)] = inst_18223__$1);

(statearr_18362[(16)] = inst_18222__$1);

return statearr_18362;
})();
var statearr_18364_19817 = state_18289__$1;
(statearr_18364_19817[(2)] = null);

(statearr_18364_19817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (18))){
var inst_18259 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18365_19818 = state_18289__$1;
(statearr_18365_19818[(2)] = inst_18259);

(statearr_18365_19818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (8))){
var inst_18224 = (state_18289[(12)]);
var inst_18225 = (state_18289[(14)]);
var inst_18227 = (inst_18225 < inst_18224);
var inst_18228 = inst_18227;
var state_18289__$1 = state_18289;
if(cljs.core.truth_(inst_18228)){
var statearr_18366_19820 = state_18289__$1;
(statearr_18366_19820[(1)] = (10));

} else {
var statearr_18367_19821 = state_18289__$1;
(statearr_18367_19821[(1)] = (11));

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
var statearr_18371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18371[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18371[(1)] = (1));

return statearr_18371;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18289){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18289);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18373){var ex__16705__auto__ = e18373;
var statearr_18374_19822 = state_18289;
(statearr_18374_19822[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18289[(4)]))){
var statearr_18375_19823 = state_18289;
(statearr_18375_19823[(1)] = cljs.core.first((state_18289[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19824 = state_18289;
state_18289 = G__19824;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18381 = f__16845__auto__();
(statearr_18381[(6)] = c__16844__auto___19777);

return statearr_18381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var G__18383 = arguments.length;
switch (G__18383) {
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
var G__18387 = arguments.length;
switch (G__18387) {
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
var G__18389 = arguments.length;
switch (G__18389) {
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
var c__16844__auto___19828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18432){
var state_val_18433 = (state_18432[(1)]);
if((state_val_18433 === (7))){
var state_18432__$1 = state_18432;
var statearr_18434_19829 = state_18432__$1;
(statearr_18434_19829[(2)] = null);

(statearr_18434_19829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (1))){
var state_18432__$1 = state_18432;
var statearr_18435_19830 = state_18432__$1;
(statearr_18435_19830[(2)] = null);

(statearr_18435_19830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (4))){
var inst_18393 = (state_18432[(7)]);
var inst_18392 = (state_18432[(8)]);
var inst_18395 = (inst_18393 < inst_18392);
var state_18432__$1 = state_18432;
if(cljs.core.truth_(inst_18395)){
var statearr_18436_19834 = state_18432__$1;
(statearr_18436_19834[(1)] = (6));

} else {
var statearr_18437_19835 = state_18432__$1;
(statearr_18437_19835[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (15))){
var inst_18418 = (state_18432[(9)]);
var inst_18423 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18418);
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18432__$1,(17),out,inst_18423);
} else {
if((state_val_18433 === (13))){
var inst_18418 = (state_18432[(9)]);
var inst_18418__$1 = (state_18432[(2)]);
var inst_18419 = cljs.core.some(cljs.core.nil_QMARK_,inst_18418__$1);
var state_18432__$1 = (function (){var statearr_18438 = state_18432;
(statearr_18438[(9)] = inst_18418__$1);

return statearr_18438;
})();
if(cljs.core.truth_(inst_18419)){
var statearr_18439_19836 = state_18432__$1;
(statearr_18439_19836[(1)] = (14));

} else {
var statearr_18440_19837 = state_18432__$1;
(statearr_18440_19837[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (6))){
var state_18432__$1 = state_18432;
var statearr_18441_19842 = state_18432__$1;
(statearr_18441_19842[(2)] = null);

(statearr_18441_19842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (17))){
var inst_18425 = (state_18432[(2)]);
var state_18432__$1 = (function (){var statearr_18443 = state_18432;
(statearr_18443[(10)] = inst_18425);

return statearr_18443;
})();
var statearr_18444_19846 = state_18432__$1;
(statearr_18444_19846[(2)] = null);

(statearr_18444_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (3))){
var inst_18430 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18432__$1,inst_18430);
} else {
if((state_val_18433 === (12))){
var _ = (function (){var statearr_18445 = state_18432;
(statearr_18445[(4)] = cljs.core.rest((state_18432[(4)])));

return statearr_18445;
})();
var state_18432__$1 = state_18432;
var ex18442 = (state_18432__$1[(2)]);
var statearr_18447_19851 = state_18432__$1;
(statearr_18447_19851[(5)] = ex18442);


if((ex18442 instanceof Object)){
var statearr_18449_19852 = state_18432__$1;
(statearr_18449_19852[(1)] = (11));

(statearr_18449_19852[(5)] = null);

} else {
throw ex18442;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (2))){
var inst_18391 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18392 = cnt;
var inst_18393 = (0);
var state_18432__$1 = (function (){var statearr_18450 = state_18432;
(statearr_18450[(7)] = inst_18393);

(statearr_18450[(11)] = inst_18391);

(statearr_18450[(8)] = inst_18392);

return statearr_18450;
})();
var statearr_18451_19853 = state_18432__$1;
(statearr_18451_19853[(2)] = null);

(statearr_18451_19853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (11))){
var inst_18397 = (state_18432[(2)]);
var inst_18398 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18432__$1 = (function (){var statearr_18452 = state_18432;
(statearr_18452[(12)] = inst_18397);

return statearr_18452;
})();
var statearr_18453_19858 = state_18432__$1;
(statearr_18453_19858[(2)] = inst_18398);

(statearr_18453_19858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (9))){
var inst_18393 = (state_18432[(7)]);
var _ = (function (){var statearr_18454 = state_18432;
(statearr_18454[(4)] = cljs.core.cons((12),(state_18432[(4)])));

return statearr_18454;
})();
var inst_18404 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18393) : chs__$1.call(null,inst_18393));
var inst_18405 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18393) : done.call(null,inst_18393));
var inst_18406 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18404,inst_18405);
var ___$1 = (function (){var statearr_18455 = state_18432;
(statearr_18455[(4)] = cljs.core.rest((state_18432[(4)])));

return statearr_18455;
})();
var state_18432__$1 = state_18432;
var statearr_18456_19862 = state_18432__$1;
(statearr_18456_19862[(2)] = inst_18406);

(statearr_18456_19862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (5))){
var inst_18416 = (state_18432[(2)]);
var state_18432__$1 = (function (){var statearr_18457 = state_18432;
(statearr_18457[(13)] = inst_18416);

return statearr_18457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18432__$1,(13),dchan);
} else {
if((state_val_18433 === (14))){
var inst_18421 = cljs.core.async.close_BANG_(out);
var state_18432__$1 = state_18432;
var statearr_18458_19863 = state_18432__$1;
(statearr_18458_19863[(2)] = inst_18421);

(statearr_18458_19863[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (16))){
var inst_18428 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18459_19864 = state_18432__$1;
(statearr_18459_19864[(2)] = inst_18428);

(statearr_18459_19864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (10))){
var inst_18393 = (state_18432[(7)]);
var inst_18409 = (state_18432[(2)]);
var inst_18410 = (inst_18393 + (1));
var inst_18393__$1 = inst_18410;
var state_18432__$1 = (function (){var statearr_18460 = state_18432;
(statearr_18460[(7)] = inst_18393__$1);

(statearr_18460[(14)] = inst_18409);

return statearr_18460;
})();
var statearr_18461_19868 = state_18432__$1;
(statearr_18461_19868[(2)] = null);

(statearr_18461_19868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18433 === (8))){
var inst_18414 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18462_19869 = state_18432__$1;
(statearr_18462_19869[(2)] = inst_18414);

(statearr_18462_19869[(1)] = (5));


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
var statearr_18463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18463[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18463[(1)] = (1));

return statearr_18463;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18432){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18432);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18465){var ex__16705__auto__ = e18465;
var statearr_18466_19870 = state_18432;
(statearr_18466_19870[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18432[(4)]))){
var statearr_18467_19871 = state_18432;
(statearr_18467_19871[(1)] = cljs.core.first((state_18432[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19872 = state_18432;
state_18432 = G__19872;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18469 = f__16845__auto__();
(statearr_18469[(6)] = c__16844__auto___19828);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var G__18472 = arguments.length;
switch (G__18472) {
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
var c__16844__auto___19874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18506){
var state_val_18507 = (state_18506[(1)]);
if((state_val_18507 === (7))){
var inst_18484 = (state_18506[(7)]);
var inst_18483 = (state_18506[(8)]);
var inst_18483__$1 = (state_18506[(2)]);
var inst_18484__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18483__$1,(0),null);
var inst_18485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18483__$1,(1),null);
var inst_18487 = (inst_18484__$1 == null);
var state_18506__$1 = (function (){var statearr_18508 = state_18506;
(statearr_18508[(7)] = inst_18484__$1);

(statearr_18508[(8)] = inst_18483__$1);

(statearr_18508[(9)] = inst_18485);

return statearr_18508;
})();
if(cljs.core.truth_(inst_18487)){
var statearr_18509_19878 = state_18506__$1;
(statearr_18509_19878[(1)] = (8));

} else {
var statearr_18510_19879 = state_18506__$1;
(statearr_18510_19879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (1))){
var inst_18473 = cljs.core.vec(chs);
var inst_18474 = inst_18473;
var state_18506__$1 = (function (){var statearr_18511 = state_18506;
(statearr_18511[(10)] = inst_18474);

return statearr_18511;
})();
var statearr_18512_19880 = state_18506__$1;
(statearr_18512_19880[(2)] = null);

(statearr_18512_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (4))){
var inst_18474 = (state_18506[(10)]);
var state_18506__$1 = state_18506;
return cljs.core.async.ioc_alts_BANG_(state_18506__$1,(7),inst_18474);
} else {
if((state_val_18507 === (6))){
var inst_18502 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18513_19882 = state_18506__$1;
(statearr_18513_19882[(2)] = inst_18502);

(statearr_18513_19882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (3))){
var inst_18504 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18506__$1,inst_18504);
} else {
if((state_val_18507 === (2))){
var inst_18474 = (state_18506[(10)]);
var inst_18476 = cljs.core.count(inst_18474);
var inst_18477 = (inst_18476 > (0));
var state_18506__$1 = state_18506;
if(cljs.core.truth_(inst_18477)){
var statearr_18515_19883 = state_18506__$1;
(statearr_18515_19883[(1)] = (4));

} else {
var statearr_18516_19884 = state_18506__$1;
(statearr_18516_19884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (11))){
var inst_18474 = (state_18506[(10)]);
var inst_18495 = (state_18506[(2)]);
var tmp18514 = inst_18474;
var inst_18474__$1 = tmp18514;
var state_18506__$1 = (function (){var statearr_18518 = state_18506;
(statearr_18518[(10)] = inst_18474__$1);

(statearr_18518[(11)] = inst_18495);

return statearr_18518;
})();
var statearr_18520_19888 = state_18506__$1;
(statearr_18520_19888[(2)] = null);

(statearr_18520_19888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (9))){
var inst_18484 = (state_18506[(7)]);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18506__$1,(11),out,inst_18484);
} else {
if((state_val_18507 === (5))){
var inst_18500 = cljs.core.async.close_BANG_(out);
var state_18506__$1 = state_18506;
var statearr_18521_19897 = state_18506__$1;
(statearr_18521_19897[(2)] = inst_18500);

(statearr_18521_19897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (10))){
var inst_18498 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18522_19898 = state_18506__$1;
(statearr_18522_19898[(2)] = inst_18498);

(statearr_18522_19898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (8))){
var inst_18484 = (state_18506[(7)]);
var inst_18483 = (state_18506[(8)]);
var inst_18474 = (state_18506[(10)]);
var inst_18485 = (state_18506[(9)]);
var inst_18490 = (function (){var cs = inst_18474;
var vec__18479 = inst_18483;
var v = inst_18484;
var c = inst_18485;
return (function (p1__18470_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18470_SHARP_);
});
})();
var inst_18491 = cljs.core.filterv(inst_18490,inst_18474);
var inst_18474__$1 = inst_18491;
var state_18506__$1 = (function (){var statearr_18523 = state_18506;
(statearr_18523[(10)] = inst_18474__$1);

return statearr_18523;
})();
var statearr_18524_19905 = state_18506__$1;
(statearr_18524_19905[(2)] = null);

(statearr_18524_19905[(1)] = (2));


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
var statearr_18525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18525[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18525[(1)] = (1));

return statearr_18525;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18506){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18506);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18526){var ex__16705__auto__ = e18526;
var statearr_18527_19910 = state_18506;
(statearr_18527_19910[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18506[(4)]))){
var statearr_18529_19911 = state_18506;
(statearr_18529_19911[(1)] = cljs.core.first((state_18506[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19912 = state_18506;
state_18506 = G__19912;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18533 = f__16845__auto__();
(statearr_18533[(6)] = c__16844__auto___19874);

return statearr_18533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
var G__18536 = arguments.length;
switch (G__18536) {
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
var c__16844__auto___19914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18564){
var state_val_18565 = (state_18564[(1)]);
if((state_val_18565 === (7))){
var inst_18543 = (state_18564[(7)]);
var inst_18543__$1 = (state_18564[(2)]);
var inst_18545 = (inst_18543__$1 == null);
var inst_18546 = cljs.core.not(inst_18545);
var state_18564__$1 = (function (){var statearr_18569 = state_18564;
(statearr_18569[(7)] = inst_18543__$1);

return statearr_18569;
})();
if(inst_18546){
var statearr_18570_19915 = state_18564__$1;
(statearr_18570_19915[(1)] = (8));

} else {
var statearr_18571_19916 = state_18564__$1;
(statearr_18571_19916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (1))){
var inst_18538 = (0);
var state_18564__$1 = (function (){var statearr_18572 = state_18564;
(statearr_18572[(8)] = inst_18538);

return statearr_18572;
})();
var statearr_18573_19917 = state_18564__$1;
(statearr_18573_19917[(2)] = null);

(statearr_18573_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (4))){
var state_18564__$1 = state_18564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18564__$1,(7),ch);
} else {
if((state_val_18565 === (6))){
var inst_18557 = (state_18564[(2)]);
var state_18564__$1 = state_18564;
var statearr_18574_19918 = state_18564__$1;
(statearr_18574_19918[(2)] = inst_18557);

(statearr_18574_19918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (3))){
var inst_18559 = (state_18564[(2)]);
var inst_18560 = cljs.core.async.close_BANG_(out);
var state_18564__$1 = (function (){var statearr_18575 = state_18564;
(statearr_18575[(9)] = inst_18559);

return statearr_18575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18564__$1,inst_18560);
} else {
if((state_val_18565 === (2))){
var inst_18538 = (state_18564[(8)]);
var inst_18540 = (inst_18538 < n);
var state_18564__$1 = state_18564;
if(cljs.core.truth_(inst_18540)){
var statearr_18576_19919 = state_18564__$1;
(statearr_18576_19919[(1)] = (4));

} else {
var statearr_18577_19920 = state_18564__$1;
(statearr_18577_19920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (11))){
var inst_18538 = (state_18564[(8)]);
var inst_18549 = (state_18564[(2)]);
var inst_18550 = (inst_18538 + (1));
var inst_18538__$1 = inst_18550;
var state_18564__$1 = (function (){var statearr_18578 = state_18564;
(statearr_18578[(8)] = inst_18538__$1);

(statearr_18578[(10)] = inst_18549);

return statearr_18578;
})();
var statearr_18579_19927 = state_18564__$1;
(statearr_18579_19927[(2)] = null);

(statearr_18579_19927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (9))){
var state_18564__$1 = state_18564;
var statearr_18580_19929 = state_18564__$1;
(statearr_18580_19929[(2)] = null);

(statearr_18580_19929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (5))){
var state_18564__$1 = state_18564;
var statearr_18581_19930 = state_18564__$1;
(statearr_18581_19930[(2)] = null);

(statearr_18581_19930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (10))){
var inst_18554 = (state_18564[(2)]);
var state_18564__$1 = state_18564;
var statearr_18582_19931 = state_18564__$1;
(statearr_18582_19931[(2)] = inst_18554);

(statearr_18582_19931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18565 === (8))){
var inst_18543 = (state_18564[(7)]);
var state_18564__$1 = state_18564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18564__$1,(11),out,inst_18543);
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
var statearr_18596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18596[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18596[(1)] = (1));

return statearr_18596;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18564){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18564);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18597){var ex__16705__auto__ = e18597;
var statearr_18598_19941 = state_18564;
(statearr_18598_19941[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18564[(4)]))){
var statearr_18599_19942 = state_18564;
(statearr_18599_19942[(1)] = cljs.core.first((state_18564[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19944 = state_18564;
state_18564 = G__19944;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18613 = f__16845__auto__();
(statearr_18613[(6)] = c__16844__auto___19914);

return statearr_18613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
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
cljs.core.async.t_cljs$core$async18628 = (function (f,ch,meta18622,_,fn1,meta18629){
this.f = f;
this.ch = ch;
this.meta18622 = meta18622;
this._ = _;
this.fn1 = fn1;
this.meta18629 = meta18629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18630,meta18629__$1){
var self__ = this;
var _18630__$1 = this;
return (new cljs.core.async.t_cljs$core$async18628(self__.f,self__.ch,self__.meta18622,self__._,self__.fn1,meta18629__$1));
}));

(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18630){
var self__ = this;
var _18630__$1 = this;
return self__.meta18629;
}));

(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18620_SHARP_){
var G__18635 = (((p1__18620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18620_SHARP_) : self__.f.call(null,p1__18620_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18635) : f1.call(null,G__18635));
});
}));

(cljs.core.async.t_cljs$core$async18628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18622","meta18622",-859139261,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18621","cljs.core.async/t_cljs$core$async18621",-757227134,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18629","meta18629",968631896,null)], null);
}));

(cljs.core.async.t_cljs$core$async18628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18628");

(cljs.core.async.t_cljs$core$async18628.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18628.
 */
cljs.core.async.__GT_t_cljs$core$async18628 = (function cljs$core$async$__GT_t_cljs$core$async18628(f,ch,meta18622,_,fn1,meta18629){
return (new cljs.core.async.t_cljs$core$async18628(f,ch,meta18622,_,fn1,meta18629));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18621 = (function (f,ch,meta18622){
this.f = f;
this.ch = ch;
this.meta18622 = meta18622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18623,meta18622__$1){
var self__ = this;
var _18623__$1 = this;
return (new cljs.core.async.t_cljs$core$async18621(self__.f,self__.ch,meta18622__$1));
}));

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18623){
var self__ = this;
var _18623__$1 = this;
return self__.meta18622;
}));

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18628(self__.f,self__.ch,self__.meta18622,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18640 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18640) : self__.f.call(null,G__18640));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18622","meta18622",-859139261,null)], null);
}));

(cljs.core.async.t_cljs$core$async18621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18621");

(cljs.core.async.t_cljs$core$async18621.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18621.
 */
cljs.core.async.__GT_t_cljs$core$async18621 = (function cljs$core$async$__GT_t_cljs$core$async18621(f,ch,meta18622){
return (new cljs.core.async.t_cljs$core$async18621(f,ch,meta18622));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18641 = (function (f,ch,meta18642){
this.f = f;
this.ch = ch;
this.meta18642 = meta18642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18643,meta18642__$1){
var self__ = this;
var _18643__$1 = this;
return (new cljs.core.async.t_cljs$core$async18641(self__.f,self__.ch,meta18642__$1));
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18643){
var self__ = this;
var _18643__$1 = this;
return self__.meta18642;
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18642","meta18642",-1597424475,null)], null);
}));

(cljs.core.async.t_cljs$core$async18641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18641");

(cljs.core.async.t_cljs$core$async18641.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18641.
 */
cljs.core.async.__GT_t_cljs$core$async18641 = (function cljs$core$async$__GT_t_cljs$core$async18641(f,ch,meta18642){
return (new cljs.core.async.t_cljs$core$async18641(f,ch,meta18642));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18641(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18651 = (function (p,ch,meta18652){
this.p = p;
this.ch = ch;
this.meta18652 = meta18652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18653,meta18652__$1){
var self__ = this;
var _18653__$1 = this;
return (new cljs.core.async.t_cljs$core$async18651(self__.p,self__.ch,meta18652__$1));
}));

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18653){
var self__ = this;
var _18653__$1 = this;
return self__.meta18652;
}));

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18652","meta18652",335064024,null)], null);
}));

(cljs.core.async.t_cljs$core$async18651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18651");

(cljs.core.async.t_cljs$core$async18651.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18651.
 */
cljs.core.async.__GT_t_cljs$core$async18651 = (function cljs$core$async$__GT_t_cljs$core$async18651(p,ch,meta18652){
return (new cljs.core.async.t_cljs$core$async18651(p,ch,meta18652));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18651(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18660 = arguments.length;
switch (G__18660) {
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
var c__16844__auto___19972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18688){
var state_val_18689 = (state_18688[(1)]);
if((state_val_18689 === (7))){
var inst_18684 = (state_18688[(2)]);
var state_18688__$1 = state_18688;
var statearr_18690_19973 = state_18688__$1;
(statearr_18690_19973[(2)] = inst_18684);

(statearr_18690_19973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (1))){
var state_18688__$1 = state_18688;
var statearr_18691_19974 = state_18688__$1;
(statearr_18691_19974[(2)] = null);

(statearr_18691_19974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (4))){
var inst_18670 = (state_18688[(7)]);
var inst_18670__$1 = (state_18688[(2)]);
var inst_18671 = (inst_18670__$1 == null);
var state_18688__$1 = (function (){var statearr_18692 = state_18688;
(statearr_18692[(7)] = inst_18670__$1);

return statearr_18692;
})();
if(cljs.core.truth_(inst_18671)){
var statearr_18693_19975 = state_18688__$1;
(statearr_18693_19975[(1)] = (5));

} else {
var statearr_18694_19976 = state_18688__$1;
(statearr_18694_19976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (6))){
var inst_18670 = (state_18688[(7)]);
var inst_18675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18670) : p.call(null,inst_18670));
var state_18688__$1 = state_18688;
if(cljs.core.truth_(inst_18675)){
var statearr_18695_19977 = state_18688__$1;
(statearr_18695_19977[(1)] = (8));

} else {
var statearr_18696_19978 = state_18688__$1;
(statearr_18696_19978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (3))){
var inst_18686 = (state_18688[(2)]);
var state_18688__$1 = state_18688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18688__$1,inst_18686);
} else {
if((state_val_18689 === (2))){
var state_18688__$1 = state_18688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18688__$1,(4),ch);
} else {
if((state_val_18689 === (11))){
var inst_18678 = (state_18688[(2)]);
var state_18688__$1 = state_18688;
var statearr_18697_19985 = state_18688__$1;
(statearr_18697_19985[(2)] = inst_18678);

(statearr_18697_19985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (9))){
var state_18688__$1 = state_18688;
var statearr_18698_19986 = state_18688__$1;
(statearr_18698_19986[(2)] = null);

(statearr_18698_19986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (5))){
var inst_18673 = cljs.core.async.close_BANG_(out);
var state_18688__$1 = state_18688;
var statearr_18699_19989 = state_18688__$1;
(statearr_18699_19989[(2)] = inst_18673);

(statearr_18699_19989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (10))){
var inst_18681 = (state_18688[(2)]);
var state_18688__$1 = (function (){var statearr_18700 = state_18688;
(statearr_18700[(8)] = inst_18681);

return statearr_18700;
})();
var statearr_18701_19990 = state_18688__$1;
(statearr_18701_19990[(2)] = null);

(statearr_18701_19990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18689 === (8))){
var inst_18670 = (state_18688[(7)]);
var state_18688__$1 = state_18688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18688__$1,(11),out,inst_18670);
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
var statearr_18706 = [null,null,null,null,null,null,null,null,null];
(statearr_18706[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18706[(1)] = (1));

return statearr_18706;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18688){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18688);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18707){var ex__16705__auto__ = e18707;
var statearr_18708_19991 = state_18688;
(statearr_18708_19991[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18688[(4)]))){
var statearr_18709_19992 = state_18688;
(statearr_18709_19992[(1)] = cljs.core.first((state_18688[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19993 = state_18688;
state_18688 = G__19993;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18710 = f__16845__auto__();
(statearr_18710[(6)] = c__16844__auto___19972);

return statearr_18710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18716 = arguments.length;
switch (G__18716) {
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
var c__16844__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18783){
var state_val_18784 = (state_18783[(1)]);
if((state_val_18784 === (7))){
var inst_18779 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
var statearr_18785_19995 = state_18783__$1;
(statearr_18785_19995[(2)] = inst_18779);

(statearr_18785_19995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (20))){
var inst_18746 = (state_18783[(7)]);
var inst_18757 = (state_18783[(2)]);
var inst_18758 = cljs.core.next(inst_18746);
var inst_18730 = inst_18758;
var inst_18731 = null;
var inst_18732 = (0);
var inst_18733 = (0);
var state_18783__$1 = (function (){var statearr_18786 = state_18783;
(statearr_18786[(8)] = inst_18731);

(statearr_18786[(9)] = inst_18733);

(statearr_18786[(10)] = inst_18732);

(statearr_18786[(11)] = inst_18730);

(statearr_18786[(12)] = inst_18757);

return statearr_18786;
})();
var statearr_18787_19997 = state_18783__$1;
(statearr_18787_19997[(2)] = null);

(statearr_18787_19997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (1))){
var state_18783__$1 = state_18783;
var statearr_18788_19998 = state_18783__$1;
(statearr_18788_19998[(2)] = null);

(statearr_18788_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (4))){
var inst_18719 = (state_18783[(13)]);
var inst_18719__$1 = (state_18783[(2)]);
var inst_18720 = (inst_18719__$1 == null);
var state_18783__$1 = (function (){var statearr_18789 = state_18783;
(statearr_18789[(13)] = inst_18719__$1);

return statearr_18789;
})();
if(cljs.core.truth_(inst_18720)){
var statearr_18790_20001 = state_18783__$1;
(statearr_18790_20001[(1)] = (5));

} else {
var statearr_18791_20002 = state_18783__$1;
(statearr_18791_20002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (15))){
var state_18783__$1 = state_18783;
var statearr_18795_20003 = state_18783__$1;
(statearr_18795_20003[(2)] = null);

(statearr_18795_20003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (21))){
var state_18783__$1 = state_18783;
var statearr_18796_20004 = state_18783__$1;
(statearr_18796_20004[(2)] = null);

(statearr_18796_20004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (13))){
var inst_18731 = (state_18783[(8)]);
var inst_18733 = (state_18783[(9)]);
var inst_18732 = (state_18783[(10)]);
var inst_18730 = (state_18783[(11)]);
var inst_18741 = (state_18783[(2)]);
var inst_18743 = (inst_18733 + (1));
var tmp18792 = inst_18731;
var tmp18793 = inst_18732;
var tmp18794 = inst_18730;
var inst_18730__$1 = tmp18794;
var inst_18731__$1 = tmp18792;
var inst_18732__$1 = tmp18793;
var inst_18733__$1 = inst_18743;
var state_18783__$1 = (function (){var statearr_18797 = state_18783;
(statearr_18797[(8)] = inst_18731__$1);

(statearr_18797[(9)] = inst_18733__$1);

(statearr_18797[(14)] = inst_18741);

(statearr_18797[(10)] = inst_18732__$1);

(statearr_18797[(11)] = inst_18730__$1);

return statearr_18797;
})();
var statearr_18798_20011 = state_18783__$1;
(statearr_18798_20011[(2)] = null);

(statearr_18798_20011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (22))){
var state_18783__$1 = state_18783;
var statearr_18799_20012 = state_18783__$1;
(statearr_18799_20012[(2)] = null);

(statearr_18799_20012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (6))){
var inst_18719 = (state_18783[(13)]);
var inst_18728 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18719) : f.call(null,inst_18719));
var inst_18729 = cljs.core.seq(inst_18728);
var inst_18730 = inst_18729;
var inst_18731 = null;
var inst_18732 = (0);
var inst_18733 = (0);
var state_18783__$1 = (function (){var statearr_18800 = state_18783;
(statearr_18800[(8)] = inst_18731);

(statearr_18800[(9)] = inst_18733);

(statearr_18800[(10)] = inst_18732);

(statearr_18800[(11)] = inst_18730);

return statearr_18800;
})();
var statearr_18801_20016 = state_18783__$1;
(statearr_18801_20016[(2)] = null);

(statearr_18801_20016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (17))){
var inst_18746 = (state_18783[(7)]);
var inst_18750 = cljs.core.chunk_first(inst_18746);
var inst_18751 = cljs.core.chunk_rest(inst_18746);
var inst_18752 = cljs.core.count(inst_18750);
var inst_18730 = inst_18751;
var inst_18731 = inst_18750;
var inst_18732 = inst_18752;
var inst_18733 = (0);
var state_18783__$1 = (function (){var statearr_18802 = state_18783;
(statearr_18802[(8)] = inst_18731);

(statearr_18802[(9)] = inst_18733);

(statearr_18802[(10)] = inst_18732);

(statearr_18802[(11)] = inst_18730);

return statearr_18802;
})();
var statearr_18803_20019 = state_18783__$1;
(statearr_18803_20019[(2)] = null);

(statearr_18803_20019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (3))){
var inst_18781 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18783__$1,inst_18781);
} else {
if((state_val_18784 === (12))){
var inst_18766 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
var statearr_18804_20022 = state_18783__$1;
(statearr_18804_20022[(2)] = inst_18766);

(statearr_18804_20022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (2))){
var state_18783__$1 = state_18783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18783__$1,(4),in$);
} else {
if((state_val_18784 === (23))){
var inst_18777 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
var statearr_18805_20023 = state_18783__$1;
(statearr_18805_20023[(2)] = inst_18777);

(statearr_18805_20023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (19))){
var inst_18761 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
var statearr_18806_20025 = state_18783__$1;
(statearr_18806_20025[(2)] = inst_18761);

(statearr_18806_20025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (11))){
var inst_18746 = (state_18783[(7)]);
var inst_18730 = (state_18783[(11)]);
var inst_18746__$1 = cljs.core.seq(inst_18730);
var state_18783__$1 = (function (){var statearr_18807 = state_18783;
(statearr_18807[(7)] = inst_18746__$1);

return statearr_18807;
})();
if(inst_18746__$1){
var statearr_18808_20031 = state_18783__$1;
(statearr_18808_20031[(1)] = (14));

} else {
var statearr_18809_20032 = state_18783__$1;
(statearr_18809_20032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (9))){
var inst_18768 = (state_18783[(2)]);
var inst_18769 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18783__$1 = (function (){var statearr_18810 = state_18783;
(statearr_18810[(15)] = inst_18768);

return statearr_18810;
})();
if(cljs.core.truth_(inst_18769)){
var statearr_18811_20033 = state_18783__$1;
(statearr_18811_20033[(1)] = (21));

} else {
var statearr_18812_20034 = state_18783__$1;
(statearr_18812_20034[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (5))){
var inst_18722 = cljs.core.async.close_BANG_(out);
var state_18783__$1 = state_18783;
var statearr_18813_20039 = state_18783__$1;
(statearr_18813_20039[(2)] = inst_18722);

(statearr_18813_20039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (14))){
var inst_18746 = (state_18783[(7)]);
var inst_18748 = cljs.core.chunked_seq_QMARK_(inst_18746);
var state_18783__$1 = state_18783;
if(inst_18748){
var statearr_18815_20041 = state_18783__$1;
(statearr_18815_20041[(1)] = (17));

} else {
var statearr_18816_20043 = state_18783__$1;
(statearr_18816_20043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (16))){
var inst_18764 = (state_18783[(2)]);
var state_18783__$1 = state_18783;
var statearr_18817_20050 = state_18783__$1;
(statearr_18817_20050[(2)] = inst_18764);

(statearr_18817_20050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18784 === (10))){
var inst_18731 = (state_18783[(8)]);
var inst_18733 = (state_18783[(9)]);
var inst_18739 = cljs.core._nth(inst_18731,inst_18733);
var state_18783__$1 = state_18783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18783__$1,(13),out,inst_18739);
} else {
if((state_val_18784 === (18))){
var inst_18746 = (state_18783[(7)]);
var inst_18755 = cljs.core.first(inst_18746);
var state_18783__$1 = state_18783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18783__$1,(20),out,inst_18755);
} else {
if((state_val_18784 === (8))){
var inst_18733 = (state_18783[(9)]);
var inst_18732 = (state_18783[(10)]);
var inst_18736 = (inst_18733 < inst_18732);
var inst_18737 = inst_18736;
var state_18783__$1 = state_18783;
if(cljs.core.truth_(inst_18737)){
var statearr_18818_20052 = state_18783__$1;
(statearr_18818_20052[(1)] = (10));

} else {
var statearr_18819_20053 = state_18783__$1;
(statearr_18819_20053[(1)] = (11));

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
var statearr_18820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18820[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__);

(statearr_18820[(1)] = (1));

return statearr_18820;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1 = (function (state_18783){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18783);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18824){var ex__16705__auto__ = e18824;
var statearr_18825_20059 = state_18783;
(statearr_18825_20059[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18783[(4)]))){
var statearr_18826_20060 = state_18783;
(statearr_18826_20060[(1)] = cljs.core.first((state_18783[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20062 = state_18783;
state_18783 = G__20062;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__ = function(state_18783){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1.call(this,state_18783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16702__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18827 = f__16845__auto__();
(statearr_18827[(6)] = c__16844__auto__);

return statearr_18827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

return c__16844__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18829 = arguments.length;
switch (G__18829) {
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
var G__18835 = arguments.length;
switch (G__18835) {
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
var G__18837 = arguments.length;
switch (G__18837) {
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
var c__16844__auto___20086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18861){
var state_val_18862 = (state_18861[(1)]);
if((state_val_18862 === (7))){
var inst_18856 = (state_18861[(2)]);
var state_18861__$1 = state_18861;
var statearr_18863_20087 = state_18861__$1;
(statearr_18863_20087[(2)] = inst_18856);

(statearr_18863_20087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (1))){
var inst_18838 = null;
var state_18861__$1 = (function (){var statearr_18864 = state_18861;
(statearr_18864[(7)] = inst_18838);

return statearr_18864;
})();
var statearr_18865_20088 = state_18861__$1;
(statearr_18865_20088[(2)] = null);

(statearr_18865_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (4))){
var inst_18841 = (state_18861[(8)]);
var inst_18841__$1 = (state_18861[(2)]);
var inst_18842 = (inst_18841__$1 == null);
var inst_18843 = cljs.core.not(inst_18842);
var state_18861__$1 = (function (){var statearr_18880 = state_18861;
(statearr_18880[(8)] = inst_18841__$1);

return statearr_18880;
})();
if(inst_18843){
var statearr_18881_20090 = state_18861__$1;
(statearr_18881_20090[(1)] = (5));

} else {
var statearr_18882_20091 = state_18861__$1;
(statearr_18882_20091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (6))){
var state_18861__$1 = state_18861;
var statearr_18883_20096 = state_18861__$1;
(statearr_18883_20096[(2)] = null);

(statearr_18883_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (3))){
var inst_18858 = (state_18861[(2)]);
var inst_18859 = cljs.core.async.close_BANG_(out);
var state_18861__$1 = (function (){var statearr_18890 = state_18861;
(statearr_18890[(9)] = inst_18858);

return statearr_18890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18861__$1,inst_18859);
} else {
if((state_val_18862 === (2))){
var state_18861__$1 = state_18861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18861__$1,(4),ch);
} else {
if((state_val_18862 === (11))){
var inst_18841 = (state_18861[(8)]);
var inst_18850 = (state_18861[(2)]);
var inst_18838 = inst_18841;
var state_18861__$1 = (function (){var statearr_18891 = state_18861;
(statearr_18891[(7)] = inst_18838);

(statearr_18891[(10)] = inst_18850);

return statearr_18891;
})();
var statearr_18892_20105 = state_18861__$1;
(statearr_18892_20105[(2)] = null);

(statearr_18892_20105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (9))){
var inst_18841 = (state_18861[(8)]);
var state_18861__$1 = state_18861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18861__$1,(11),out,inst_18841);
} else {
if((state_val_18862 === (5))){
var inst_18838 = (state_18861[(7)]);
var inst_18841 = (state_18861[(8)]);
var inst_18845 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18841,inst_18838);
var state_18861__$1 = state_18861;
if(inst_18845){
var statearr_18894_20106 = state_18861__$1;
(statearr_18894_20106[(1)] = (8));

} else {
var statearr_18895_20107 = state_18861__$1;
(statearr_18895_20107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (10))){
var inst_18853 = (state_18861[(2)]);
var state_18861__$1 = state_18861;
var statearr_18896_20109 = state_18861__$1;
(statearr_18896_20109[(2)] = inst_18853);

(statearr_18896_20109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18862 === (8))){
var inst_18838 = (state_18861[(7)]);
var tmp18893 = inst_18838;
var inst_18838__$1 = tmp18893;
var state_18861__$1 = (function (){var statearr_18911 = state_18861;
(statearr_18911[(7)] = inst_18838__$1);

return statearr_18911;
})();
var statearr_18912_20118 = state_18861__$1;
(statearr_18912_20118[(2)] = null);

(statearr_18912_20118[(1)] = (2));


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
var statearr_18919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18919[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18919[(1)] = (1));

return statearr_18919;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18861){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18861);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18920){var ex__16705__auto__ = e18920;
var statearr_18921_20130 = state_18861;
(statearr_18921_20130[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18861[(4)]))){
var statearr_18922_20135 = state_18861;
(statearr_18922_20135[(1)] = cljs.core.first((state_18861[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20136 = state_18861;
state_18861 = G__20136;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18923 = f__16845__auto__();
(statearr_18923[(6)] = c__16844__auto___20086);

return statearr_18923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
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
var c__16844__auto___20146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_18969){
var state_val_18970 = (state_18969[(1)]);
if((state_val_18970 === (7))){
var inst_18965 = (state_18969[(2)]);
var state_18969__$1 = state_18969;
var statearr_18971_20156 = state_18969__$1;
(statearr_18971_20156[(2)] = inst_18965);

(statearr_18971_20156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (1))){
var inst_18929 = (new Array(n));
var inst_18930 = inst_18929;
var inst_18931 = (0);
var state_18969__$1 = (function (){var statearr_18972 = state_18969;
(statearr_18972[(7)] = inst_18930);

(statearr_18972[(8)] = inst_18931);

return statearr_18972;
})();
var statearr_18973_20163 = state_18969__$1;
(statearr_18973_20163[(2)] = null);

(statearr_18973_20163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (4))){
var inst_18934 = (state_18969[(9)]);
var inst_18934__$1 = (state_18969[(2)]);
var inst_18935 = (inst_18934__$1 == null);
var inst_18936 = cljs.core.not(inst_18935);
var state_18969__$1 = (function (){var statearr_18974 = state_18969;
(statearr_18974[(9)] = inst_18934__$1);

return statearr_18974;
})();
if(inst_18936){
var statearr_18975_20165 = state_18969__$1;
(statearr_18975_20165[(1)] = (5));

} else {
var statearr_18976_20166 = state_18969__$1;
(statearr_18976_20166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (15))){
var inst_18959 = (state_18969[(2)]);
var state_18969__$1 = state_18969;
var statearr_18977_20172 = state_18969__$1;
(statearr_18977_20172[(2)] = inst_18959);

(statearr_18977_20172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (13))){
var state_18969__$1 = state_18969;
var statearr_18978_20177 = state_18969__$1;
(statearr_18978_20177[(2)] = null);

(statearr_18978_20177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (6))){
var inst_18931 = (state_18969[(8)]);
var inst_18952 = (inst_18931 > (0));
var state_18969__$1 = state_18969;
if(cljs.core.truth_(inst_18952)){
var statearr_18979_20179 = state_18969__$1;
(statearr_18979_20179[(1)] = (12));

} else {
var statearr_18980_20181 = state_18969__$1;
(statearr_18980_20181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (3))){
var inst_18967 = (state_18969[(2)]);
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18969__$1,inst_18967);
} else {
if((state_val_18970 === (12))){
var inst_18930 = (state_18969[(7)]);
var inst_18957 = cljs.core.vec(inst_18930);
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18969__$1,(15),out,inst_18957);
} else {
if((state_val_18970 === (2))){
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18969__$1,(4),ch);
} else {
if((state_val_18970 === (11))){
var inst_18946 = (state_18969[(2)]);
var inst_18947 = (new Array(n));
var inst_18930 = inst_18947;
var inst_18931 = (0);
var state_18969__$1 = (function (){var statearr_18981 = state_18969;
(statearr_18981[(10)] = inst_18946);

(statearr_18981[(7)] = inst_18930);

(statearr_18981[(8)] = inst_18931);

return statearr_18981;
})();
var statearr_18982_20202 = state_18969__$1;
(statearr_18982_20202[(2)] = null);

(statearr_18982_20202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (9))){
var inst_18930 = (state_18969[(7)]);
var inst_18944 = cljs.core.vec(inst_18930);
var state_18969__$1 = state_18969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18969__$1,(11),out,inst_18944);
} else {
if((state_val_18970 === (5))){
var inst_18939 = (state_18969[(11)]);
var inst_18934 = (state_18969[(9)]);
var inst_18930 = (state_18969[(7)]);
var inst_18931 = (state_18969[(8)]);
var inst_18938 = (inst_18930[inst_18931] = inst_18934);
var inst_18939__$1 = (inst_18931 + (1));
var inst_18940 = (inst_18939__$1 < n);
var state_18969__$1 = (function (){var statearr_18983 = state_18969;
(statearr_18983[(11)] = inst_18939__$1);

(statearr_18983[(12)] = inst_18938);

return statearr_18983;
})();
if(cljs.core.truth_(inst_18940)){
var statearr_18984_20226 = state_18969__$1;
(statearr_18984_20226[(1)] = (8));

} else {
var statearr_18985_20227 = state_18969__$1;
(statearr_18985_20227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (14))){
var inst_18962 = (state_18969[(2)]);
var inst_18963 = cljs.core.async.close_BANG_(out);
var state_18969__$1 = (function (){var statearr_18987 = state_18969;
(statearr_18987[(13)] = inst_18962);

return statearr_18987;
})();
var statearr_18988_20230 = state_18969__$1;
(statearr_18988_20230[(2)] = inst_18963);

(statearr_18988_20230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (10))){
var inst_18950 = (state_18969[(2)]);
var state_18969__$1 = state_18969;
var statearr_18989_20231 = state_18969__$1;
(statearr_18989_20231[(2)] = inst_18950);

(statearr_18989_20231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18970 === (8))){
var inst_18939 = (state_18969[(11)]);
var inst_18930 = (state_18969[(7)]);
var tmp18986 = inst_18930;
var inst_18930__$1 = tmp18986;
var inst_18931 = inst_18939;
var state_18969__$1 = (function (){var statearr_18990 = state_18969;
(statearr_18990[(7)] = inst_18930__$1);

(statearr_18990[(8)] = inst_18931);

return statearr_18990;
})();
var statearr_18991_20236 = state_18969__$1;
(statearr_18991_20236[(2)] = null);

(statearr_18991_20236[(1)] = (2));


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
var statearr_18992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18992[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_18992[(1)] = (1));

return statearr_18992;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_18969){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_18969);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e18993){var ex__16705__auto__ = e18993;
var statearr_18994_20250 = state_18969;
(statearr_18994_20250[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_18969[(4)]))){
var statearr_18995_20256 = state_18969;
(statearr_18995_20256[(1)] = cljs.core.first((state_18969[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20268 = state_18969;
state_18969 = G__20268;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_18969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_18969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_18996 = f__16845__auto__();
(statearr_18996[(6)] = c__16844__auto___20146);

return statearr_18996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18998 = arguments.length;
switch (G__18998) {
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
var c__16844__auto___20318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_19054){
var state_val_19055 = (state_19054[(1)]);
if((state_val_19055 === (7))){
var inst_19050 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19056_20337 = state_19054__$1;
(statearr_19056_20337[(2)] = inst_19050);

(statearr_19056_20337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (1))){
var inst_19007 = [];
var inst_19008 = inst_19007;
var inst_19009 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19054__$1 = (function (){var statearr_19057 = state_19054;
(statearr_19057[(7)] = inst_19008);

(statearr_19057[(8)] = inst_19009);

return statearr_19057;
})();
var statearr_19058_20343 = state_19054__$1;
(statearr_19058_20343[(2)] = null);

(statearr_19058_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (4))){
var inst_19015 = (state_19054[(9)]);
var inst_19015__$1 = (state_19054[(2)]);
var inst_19016 = (inst_19015__$1 == null);
var inst_19017 = cljs.core.not(inst_19016);
var state_19054__$1 = (function (){var statearr_19059 = state_19054;
(statearr_19059[(9)] = inst_19015__$1);

return statearr_19059;
})();
if(inst_19017){
var statearr_19060_20361 = state_19054__$1;
(statearr_19060_20361[(1)] = (5));

} else {
var statearr_19061_20362 = state_19054__$1;
(statearr_19061_20362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (15))){
var inst_19008 = (state_19054[(7)]);
var inst_19042 = cljs.core.vec(inst_19008);
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19054__$1,(18),out,inst_19042);
} else {
if((state_val_19055 === (13))){
var inst_19037 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19062_20370 = state_19054__$1;
(statearr_19062_20370[(2)] = inst_19037);

(statearr_19062_20370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (6))){
var inst_19008 = (state_19054[(7)]);
var inst_19039 = inst_19008.length;
var inst_19040 = (inst_19039 > (0));
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_19040)){
var statearr_19063_20371 = state_19054__$1;
(statearr_19063_20371[(1)] = (15));

} else {
var statearr_19064_20373 = state_19054__$1;
(statearr_19064_20373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (17))){
var inst_19047 = (state_19054[(2)]);
var inst_19048 = cljs.core.async.close_BANG_(out);
var state_19054__$1 = (function (){var statearr_19065 = state_19054;
(statearr_19065[(10)] = inst_19047);

return statearr_19065;
})();
var statearr_19066_20377 = state_19054__$1;
(statearr_19066_20377[(2)] = inst_19048);

(statearr_19066_20377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (3))){
var inst_19052 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19054__$1,inst_19052);
} else {
if((state_val_19055 === (12))){
var inst_19008 = (state_19054[(7)]);
var inst_19030 = cljs.core.vec(inst_19008);
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19054__$1,(14),out,inst_19030);
} else {
if((state_val_19055 === (2))){
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19054__$1,(4),ch);
} else {
if((state_val_19055 === (11))){
var inst_19019 = (state_19054[(11)]);
var inst_19015 = (state_19054[(9)]);
var inst_19008 = (state_19054[(7)]);
var inst_19027 = inst_19008.push(inst_19015);
var tmp19067 = inst_19008;
var inst_19008__$1 = tmp19067;
var inst_19009 = inst_19019;
var state_19054__$1 = (function (){var statearr_19068 = state_19054;
(statearr_19068[(7)] = inst_19008__$1);

(statearr_19068[(8)] = inst_19009);

(statearr_19068[(12)] = inst_19027);

return statearr_19068;
})();
var statearr_19069_20383 = state_19054__$1;
(statearr_19069_20383[(2)] = null);

(statearr_19069_20383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (9))){
var inst_19009 = (state_19054[(8)]);
var inst_19023 = cljs.core.keyword_identical_QMARK_(inst_19009,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19054__$1 = state_19054;
var statearr_19071_20385 = state_19054__$1;
(statearr_19071_20385[(2)] = inst_19023);

(statearr_19071_20385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (5))){
var inst_19019 = (state_19054[(11)]);
var inst_19015 = (state_19054[(9)]);
var inst_19020 = (state_19054[(13)]);
var inst_19009 = (state_19054[(8)]);
var inst_19019__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19015) : f.call(null,inst_19015));
var inst_19020__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19019__$1,inst_19009);
var state_19054__$1 = (function (){var statearr_19073 = state_19054;
(statearr_19073[(11)] = inst_19019__$1);

(statearr_19073[(13)] = inst_19020__$1);

return statearr_19073;
})();
if(inst_19020__$1){
var statearr_19074_20387 = state_19054__$1;
(statearr_19074_20387[(1)] = (8));

} else {
var statearr_19075_20388 = state_19054__$1;
(statearr_19075_20388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (14))){
var inst_19019 = (state_19054[(11)]);
var inst_19015 = (state_19054[(9)]);
var inst_19032 = (state_19054[(2)]);
var inst_19033 = [];
var inst_19034 = inst_19033.push(inst_19015);
var inst_19008 = inst_19033;
var inst_19009 = inst_19019;
var state_19054__$1 = (function (){var statearr_19078 = state_19054;
(statearr_19078[(14)] = inst_19034);

(statearr_19078[(15)] = inst_19032);

(statearr_19078[(7)] = inst_19008);

(statearr_19078[(8)] = inst_19009);

return statearr_19078;
})();
var statearr_19079_20391 = state_19054__$1;
(statearr_19079_20391[(2)] = null);

(statearr_19079_20391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (16))){
var state_19054__$1 = state_19054;
var statearr_19082_20392 = state_19054__$1;
(statearr_19082_20392[(2)] = null);

(statearr_19082_20392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (10))){
var inst_19025 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_19025)){
var statearr_19083_20395 = state_19054__$1;
(statearr_19083_20395[(1)] = (11));

} else {
var statearr_19084_20396 = state_19054__$1;
(statearr_19084_20396[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (18))){
var inst_19044 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19085_20398 = state_19054__$1;
(statearr_19085_20398[(2)] = inst_19044);

(statearr_19085_20398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (8))){
var inst_19020 = (state_19054[(13)]);
var state_19054__$1 = state_19054;
var statearr_19087_20399 = state_19054__$1;
(statearr_19087_20399[(2)] = inst_19020);

(statearr_19087_20399[(1)] = (10));


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
var statearr_19089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19089[(0)] = cljs$core$async$state_machine__16702__auto__);

(statearr_19089[(1)] = (1));

return statearr_19089;
});
var cljs$core$async$state_machine__16702__auto____1 = (function (state_19054){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_19054);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e19090){var ex__16705__auto__ = e19090;
var statearr_19091_20400 = state_19054;
(statearr_19091_20400[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_19054[(4)]))){
var statearr_19092_20401 = state_19054;
(statearr_19092_20401[(1)] = cljs.core.first((state_19054[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20407 = state_19054;
state_19054 = G__20407;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
cljs$core$async$state_machine__16702__auto__ = function(state_19054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16702__auto____1.call(this,state_19054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16702__auto____0;
cljs$core$async$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16702__auto____1;
return cljs$core$async$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_19093 = f__16845__auto__();
(statearr_19093[(6)] = c__16844__auto___20318);

return statearr_19093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
