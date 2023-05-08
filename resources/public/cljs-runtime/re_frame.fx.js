goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12358 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12359 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12359);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12457 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12457)){
var new_db_12458 = temp__5804__auto___12457;
var fexpr__12361_12459 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12361_12459.cljs$core$IFn$_invoke$arity$1 ? fexpr__12361_12459.cljs$core$IFn$_invoke$arity$1(new_db_12458) : fexpr__12361_12459.call(null,new_db_12458));
} else {
}

var seq__12363 = cljs.core.seq(effects_without_db);
var chunk__12364 = null;
var count__12365 = (0);
var i__12366 = (0);
while(true){
if((i__12366 < count__12365)){
var vec__12385 = chunk__12364.cljs$core$IIndexed$_nth$arity$2(null,i__12366);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(1),null);
var temp__5802__auto___12460 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12460)){
var effect_fn_12461 = temp__5802__auto___12460;
(effect_fn_12461.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12461.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12461.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12462 = seq__12363;
var G__12463 = chunk__12364;
var G__12464 = count__12365;
var G__12465 = (i__12366 + (1));
seq__12363 = G__12462;
chunk__12364 = G__12463;
count__12365 = G__12464;
i__12366 = G__12465;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12363);
if(temp__5804__auto__){
var seq__12363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12363__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12363__$1);
var G__12466 = cljs.core.chunk_rest(seq__12363__$1);
var G__12467 = c__5568__auto__;
var G__12468 = cljs.core.count(c__5568__auto__);
var G__12469 = (0);
seq__12363 = G__12466;
chunk__12364 = G__12467;
count__12365 = G__12468;
i__12366 = G__12469;
continue;
} else {
var vec__12388 = cljs.core.first(seq__12363__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(1),null);
var temp__5802__auto___12470 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12470)){
var effect_fn_12471 = temp__5802__auto___12470;
(effect_fn_12471.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12471.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12471.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12472 = cljs.core.next(seq__12363__$1);
var G__12473 = null;
var G__12474 = (0);
var G__12475 = (0);
seq__12363 = G__12472;
chunk__12364 = G__12473;
count__12365 = G__12474;
i__12366 = G__12475;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12036__auto___12476 = re_frame.interop.now();
var duration__12037__auto___12477 = (end__12036__auto___12476 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12037__auto___12477,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12036__auto___12476);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12358);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12478 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12478)){
var new_db_12479 = temp__5804__auto___12478;
var fexpr__12393_12480 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12393_12480.cljs$core$IFn$_invoke$arity$1 ? fexpr__12393_12480.cljs$core$IFn$_invoke$arity$1(new_db_12479) : fexpr__12393_12480.call(null,new_db_12479));
} else {
}

var seq__12394 = cljs.core.seq(effects_without_db);
var chunk__12395 = null;
var count__12396 = (0);
var i__12397 = (0);
while(true){
if((i__12397 < count__12396)){
var vec__12405 = chunk__12395.cljs$core$IIndexed$_nth$arity$2(null,i__12397);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405,(1),null);
var temp__5802__auto___12481 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12481)){
var effect_fn_12482 = temp__5802__auto___12481;
(effect_fn_12482.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12482.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12482.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12483 = seq__12394;
var G__12484 = chunk__12395;
var G__12485 = count__12396;
var G__12486 = (i__12397 + (1));
seq__12394 = G__12483;
chunk__12395 = G__12484;
count__12396 = G__12485;
i__12397 = G__12486;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12394);
if(temp__5804__auto__){
var seq__12394__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12394__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12394__$1);
var G__12487 = cljs.core.chunk_rest(seq__12394__$1);
var G__12488 = c__5568__auto__;
var G__12489 = cljs.core.count(c__5568__auto__);
var G__12490 = (0);
seq__12394 = G__12487;
chunk__12395 = G__12488;
count__12396 = G__12489;
i__12397 = G__12490;
continue;
} else {
var vec__12408 = cljs.core.first(seq__12394__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(1),null);
var temp__5802__auto___12491 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12491)){
var effect_fn_12492 = temp__5802__auto___12491;
(effect_fn_12492.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12492.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12492.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12493 = cljs.core.next(seq__12394__$1);
var G__12494 = null;
var G__12495 = (0);
var G__12496 = (0);
seq__12394 = G__12493;
chunk__12395 = G__12494;
count__12396 = G__12495;
i__12397 = G__12496;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__12411){
var map__12412 = p__12411;
var map__12412__$1 = cljs.core.__destructure_map(map__12412);
var effect = map__12412__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12412__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12412__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__12413 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12414 = null;
var count__12415 = (0);
var i__12416 = (0);
while(true){
if((i__12416 < count__12415)){
var effect = chunk__12414.cljs$core$IIndexed$_nth$arity$2(null,i__12416);
re_frame.fx.dispatch_later(effect);


var G__12500 = seq__12413;
var G__12501 = chunk__12414;
var G__12502 = count__12415;
var G__12503 = (i__12416 + (1));
seq__12413 = G__12500;
chunk__12414 = G__12501;
count__12415 = G__12502;
i__12416 = G__12503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12413);
if(temp__5804__auto__){
var seq__12413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12413__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12413__$1);
var G__12504 = cljs.core.chunk_rest(seq__12413__$1);
var G__12505 = c__5568__auto__;
var G__12506 = cljs.core.count(c__5568__auto__);
var G__12507 = (0);
seq__12413 = G__12504;
chunk__12414 = G__12505;
count__12415 = G__12506;
i__12416 = G__12507;
continue;
} else {
var effect = cljs.core.first(seq__12413__$1);
re_frame.fx.dispatch_later(effect);


var G__12508 = cljs.core.next(seq__12413__$1);
var G__12509 = null;
var G__12510 = (0);
var G__12511 = (0);
seq__12413 = G__12508;
chunk__12414 = G__12509;
count__12415 = G__12510;
i__12416 = G__12511;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__12420 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__12421 = null;
var count__12422 = (0);
var i__12423 = (0);
while(true){
if((i__12423 < count__12422)){
var vec__12435 = chunk__12421.cljs$core$IIndexed$_nth$arity$2(null,i__12423);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12513 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12513)){
var effect_fn_12514 = temp__5802__auto___12513;
(effect_fn_12514.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12514.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12514.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12515 = seq__12420;
var G__12516 = chunk__12421;
var G__12517 = count__12422;
var G__12518 = (i__12423 + (1));
seq__12420 = G__12515;
chunk__12421 = G__12516;
count__12422 = G__12517;
i__12423 = G__12518;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12420);
if(temp__5804__auto__){
var seq__12420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12420__$1);
var G__12519 = cljs.core.chunk_rest(seq__12420__$1);
var G__12520 = c__5568__auto__;
var G__12521 = cljs.core.count(c__5568__auto__);
var G__12522 = (0);
seq__12420 = G__12519;
chunk__12421 = G__12520;
count__12422 = G__12521;
i__12423 = G__12522;
continue;
} else {
var vec__12446 = cljs.core.first(seq__12420__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12523 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12523)){
var effect_fn_12524 = temp__5802__auto___12523;
(effect_fn_12524.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12524.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12524.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12525 = cljs.core.next(seq__12420__$1);
var G__12526 = null;
var G__12527 = (0);
var G__12528 = (0);
seq__12420 = G__12525;
chunk__12421 = G__12526;
count__12422 = G__12527;
i__12423 = G__12528;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12449 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12450 = null;
var count__12451 = (0);
var i__12452 = (0);
while(true){
if((i__12452 < count__12451)){
var event = chunk__12450.cljs$core$IIndexed$_nth$arity$2(null,i__12452);
re_frame.router.dispatch(event);


var G__12529 = seq__12449;
var G__12530 = chunk__12450;
var G__12531 = count__12451;
var G__12532 = (i__12452 + (1));
seq__12449 = G__12529;
chunk__12450 = G__12530;
count__12451 = G__12531;
i__12452 = G__12532;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12449);
if(temp__5804__auto__){
var seq__12449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12449__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12449__$1);
var G__12533 = cljs.core.chunk_rest(seq__12449__$1);
var G__12534 = c__5568__auto__;
var G__12535 = cljs.core.count(c__5568__auto__);
var G__12536 = (0);
seq__12449 = G__12533;
chunk__12450 = G__12534;
count__12451 = G__12535;
i__12452 = G__12536;
continue;
} else {
var event = cljs.core.first(seq__12449__$1);
re_frame.router.dispatch(event);


var G__12537 = cljs.core.next(seq__12449__$1);
var G__12538 = null;
var G__12539 = (0);
var G__12540 = (0);
seq__12449 = G__12537;
chunk__12450 = G__12538;
count__12451 = G__12539;
i__12452 = G__12540;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12453 = cljs.core.seq(value);
var chunk__12454 = null;
var count__12455 = (0);
var i__12456 = (0);
while(true){
if((i__12456 < count__12455)){
var event = chunk__12454.cljs$core$IIndexed$_nth$arity$2(null,i__12456);
clear_event(event);


var G__12542 = seq__12453;
var G__12543 = chunk__12454;
var G__12544 = count__12455;
var G__12545 = (i__12456 + (1));
seq__12453 = G__12542;
chunk__12454 = G__12543;
count__12455 = G__12544;
i__12456 = G__12545;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12453);
if(temp__5804__auto__){
var seq__12453__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12453__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12453__$1);
var G__12547 = cljs.core.chunk_rest(seq__12453__$1);
var G__12548 = c__5568__auto__;
var G__12549 = cljs.core.count(c__5568__auto__);
var G__12550 = (0);
seq__12453 = G__12547;
chunk__12454 = G__12548;
count__12455 = G__12549;
i__12456 = G__12550;
continue;
} else {
var event = cljs.core.first(seq__12453__$1);
clear_event(event);


var G__12551 = cljs.core.next(seq__12453__$1);
var G__12552 = null;
var G__12553 = (0);
var G__12554 = (0);
seq__12453 = G__12551;
chunk__12454 = G__12552;
count__12455 = G__12553;
i__12456 = G__12554;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
