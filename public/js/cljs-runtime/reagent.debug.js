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
var G__22016__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22017__i = 0, G__22017__a = new Array(arguments.length -  0);
while (G__22017__i < G__22017__a.length) {G__22017__a[G__22017__i] = arguments[G__22017__i + 0]; ++G__22017__i;}
  args = new cljs.core.IndexedSeq(G__22017__a,0,null);
} 
return G__22016__delegate.call(this,args);};
G__22016.cljs$lang$maxFixedArity = 0;
G__22016.cljs$lang$applyTo = (function (arglist__22018){
var args = cljs.core.seq(arglist__22018);
return G__22016__delegate(args);
});
G__22016.cljs$core$IFn$_invoke$arity$variadic = G__22016__delegate;
return G__22016;
})()
);

(o.error = (function() { 
var G__22019__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22020__i = 0, G__22020__a = new Array(arguments.length -  0);
while (G__22020__i < G__22020__a.length) {G__22020__a[G__22020__i] = arguments[G__22020__i + 0]; ++G__22020__i;}
  args = new cljs.core.IndexedSeq(G__22020__a,0,null);
} 
return G__22019__delegate.call(this,args);};
G__22019.cljs$lang$maxFixedArity = 0;
G__22019.cljs$lang$applyTo = (function (arglist__22021){
var args = cljs.core.seq(arglist__22021);
return G__22019__delegate(args);
});
G__22019.cljs$core$IFn$_invoke$arity$variadic = G__22019__delegate;
return G__22019;
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
