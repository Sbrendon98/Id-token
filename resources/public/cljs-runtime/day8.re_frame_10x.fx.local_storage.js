goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e13930){if((e13930 instanceof Error)){
var _ = e13930;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e13930;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(var_args){
var G__13937 = arguments.length;
switch (G__13937) {
case 1:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e13939){if((e13939 instanceof Error)){
var _ = e13939;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e13939;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__13940 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__13941 = null;
var count__13942 = (0);
var i__13943 = (0);
while(true){
if((i__13943 < count__13942)){
var k = chunk__13941.cljs$core$IIndexed$_nth$arity$2(null,i__13943);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__13951 = seq__13940;
var G__13952 = chunk__13941;
var G__13953 = count__13942;
var G__13954 = (i__13943 + (1));
seq__13940 = G__13951;
chunk__13941 = G__13952;
count__13942 = G__13953;
i__13943 = G__13954;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13940);
if(temp__5804__auto__){
var seq__13940__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13940__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13940__$1);
var G__13955 = cljs.core.chunk_rest(seq__13940__$1);
var G__13956 = c__5568__auto__;
var G__13957 = cljs.core.count(c__5568__auto__);
var G__13958 = (0);
seq__13940 = G__13955;
chunk__13941 = G__13956;
count__13942 = G__13957;
i__13943 = G__13958;
continue;
} else {
var k = cljs.core.first(seq__13940__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__13959 = cljs.core.next(seq__13940__$1);
var G__13960 = null;
var G__13961 = (0);
var G__13962 = (0);
seq__13940 = G__13959;
chunk__13941 = G__13960;
count__13942 = G__13961;
i__13943 = G__13962;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__13947 = arguments.length;
switch (G__13947) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___13964 = arguments.length;
var i__5770__auto___13965 = (0);
while(true){
if((i__5770__auto___13965 < len__5769__auto___13964)){
args_arr__5794__auto__.push((arguments[i__5770__auto___13965]));

var G__13966 = (i__5770__auto___13965 + (1));
i__5770__auto___13965 = G__13966;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0)));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq13945){
var G__13946 = cljs.core.first(seq13945);
var seq13945__$1 = cljs.core.next(seq13945);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13946,seq13945__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__13948){
var map__13949 = p__13948;
var map__13949__$1 = cljs.core.__destructure_map(map__13949);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13949__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13949__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,or));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
