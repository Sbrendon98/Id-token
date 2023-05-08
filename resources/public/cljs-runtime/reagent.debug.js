goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21674__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21675__i = 0, G__21675__a = new Array(arguments.length -  0);
while (G__21675__i < G__21675__a.length) {G__21675__a[G__21675__i] = arguments[G__21675__i + 0]; ++G__21675__i;}
  args = new cljs.core.IndexedSeq(G__21675__a,0,null);
} 
return G__21674__delegate.call(this,args);};
G__21674.cljs$lang$maxFixedArity = 0;
G__21674.cljs$lang$applyTo = (function (arglist__21676){
var args = cljs.core.seq(arglist__21676);
return G__21674__delegate(args);
});
G__21674.cljs$core$IFn$_invoke$arity$variadic = G__21674__delegate;
return G__21674;
})()
);

(o.error = (function() { 
var G__21677__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21678__i = 0, G__21678__a = new Array(arguments.length -  0);
while (G__21678__i < G__21678__a.length) {G__21678__a[G__21678__i] = arguments[G__21678__i + 0]; ++G__21678__i;}
  args = new cljs.core.IndexedSeq(G__21678__a,0,null);
} 
return G__21677__delegate.call(this,args);};
G__21677.cljs$lang$maxFixedArity = 0;
G__21677.cljs$lang$applyTo = (function (arglist__21679){
var args = cljs.core.seq(arglist__21679);
return G__21677__delegate(args);
});
G__21677.cljs$core$IFn$_invoke$arity$variadic = G__21677__delegate;
return G__21677;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
