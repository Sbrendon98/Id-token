goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11211 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11212 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11212);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___11296 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___11296)){
var new_db_11297 = temp__5804__auto___11296;
var fexpr__11215_11298 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__11215_11298.cljs$core$IFn$_invoke$arity$1 ? fexpr__11215_11298.cljs$core$IFn$_invoke$arity$1(new_db_11297) : fexpr__11215_11298.call(null,new_db_11297));
} else {
}

var seq__11216 = cljs.core.seq(effects_without_db);
var chunk__11217 = null;
var count__11218 = (0);
var i__11219 = (0);
while(true){
if((i__11219 < count__11218)){
var vec__11228 = chunk__11217.cljs$core$IIndexed$_nth$arity$2(null,i__11219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11228,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11228,(1),null);
var temp__5802__auto___11299 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11299)){
var effect_fn_11300 = temp__5802__auto___11299;
(effect_fn_11300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11300.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11301 = seq__11216;
var G__11302 = chunk__11217;
var G__11303 = count__11218;
var G__11304 = (i__11219 + (1));
seq__11216 = G__11301;
chunk__11217 = G__11302;
count__11218 = G__11303;
i__11219 = G__11304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11216);
if(temp__5804__auto__){
var seq__11216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11216__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11216__$1);
var G__11305 = cljs.core.chunk_rest(seq__11216__$1);
var G__11306 = c__5568__auto__;
var G__11307 = cljs.core.count(c__5568__auto__);
var G__11308 = (0);
seq__11216 = G__11305;
chunk__11217 = G__11306;
count__11218 = G__11307;
i__11219 = G__11308;
continue;
} else {
var vec__11233 = cljs.core.first(seq__11216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11233,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11233,(1),null);
var temp__5802__auto___11309 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11309)){
var effect_fn_11310 = temp__5802__auto___11309;
(effect_fn_11310.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11310.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11310.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11311 = cljs.core.next(seq__11216__$1);
var G__11312 = null;
var G__11313 = (0);
var G__11314 = (0);
seq__11216 = G__11311;
chunk__11217 = G__11312;
count__11218 = G__11313;
i__11219 = G__11314;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__10932__auto___11315 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__10933__auto___11316 = (end__10932__auto___11315 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10933__auto___11316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__10932__auto___11315);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11211);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___11317 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___11317)){
var new_db_11318 = temp__5804__auto___11317;
var fexpr__11237_11319 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__11237_11319.cljs$core$IFn$_invoke$arity$1 ? fexpr__11237_11319.cljs$core$IFn$_invoke$arity$1(new_db_11318) : fexpr__11237_11319.call(null,new_db_11318));
} else {
}

var seq__11238 = cljs.core.seq(effects_without_db);
var chunk__11239 = null;
var count__11240 = (0);
var i__11241 = (0);
while(true){
if((i__11241 < count__11240)){
var vec__11260 = chunk__11239.cljs$core$IIndexed$_nth$arity$2(null,i__11241);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11260,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11260,(1),null);
var temp__5802__auto___11320 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11320)){
var effect_fn_11321 = temp__5802__auto___11320;
(effect_fn_11321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11321.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11322 = seq__11238;
var G__11323 = chunk__11239;
var G__11324 = count__11240;
var G__11325 = (i__11241 + (1));
seq__11238 = G__11322;
chunk__11239 = G__11323;
count__11240 = G__11324;
i__11241 = G__11325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11238);
if(temp__5804__auto__){
var seq__11238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11238__$1);
var G__11326 = cljs.core.chunk_rest(seq__11238__$1);
var G__11327 = c__5568__auto__;
var G__11328 = cljs.core.count(c__5568__auto__);
var G__11329 = (0);
seq__11238 = G__11326;
chunk__11239 = G__11327;
count__11240 = G__11328;
i__11241 = G__11329;
continue;
} else {
var vec__11263 = cljs.core.first(seq__11238__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11263,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11263,(1),null);
var temp__5802__auto___11330 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11330)){
var effect_fn_11331 = temp__5802__auto___11330;
(effect_fn_11331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11331.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11332 = cljs.core.next(seq__11238__$1);
var G__11333 = null;
var G__11334 = (0);
var G__11335 = (0);
seq__11238 = G__11332;
chunk__11239 = G__11333;
count__11240 = G__11334;
i__11241 = G__11335;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__11266){
var map__11267 = p__11266;
var map__11267__$1 = cljs.core.__destructure_map(map__11267);
var effect = map__11267__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11267__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11267__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__11268 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11269 = null;
var count__11270 = (0);
var i__11271 = (0);
while(true){
if((i__11271 < count__11270)){
var effect = chunk__11269.cljs$core$IIndexed$_nth$arity$2(null,i__11271);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__11336 = seq__11268;
var G__11337 = chunk__11269;
var G__11338 = count__11270;
var G__11339 = (i__11271 + (1));
seq__11268 = G__11336;
chunk__11269 = G__11337;
count__11270 = G__11338;
i__11271 = G__11339;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11268);
if(temp__5804__auto__){
var seq__11268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11268__$1);
var G__11340 = cljs.core.chunk_rest(seq__11268__$1);
var G__11341 = c__5568__auto__;
var G__11342 = cljs.core.count(c__5568__auto__);
var G__11343 = (0);
seq__11268 = G__11340;
chunk__11269 = G__11341;
count__11270 = G__11342;
i__11271 = G__11343;
continue;
} else {
var effect = cljs.core.first(seq__11268__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__11344 = cljs.core.next(seq__11268__$1);
var G__11345 = null;
var G__11346 = (0);
var G__11347 = (0);
seq__11268 = G__11344;
chunk__11269 = G__11345;
count__11270 = G__11346;
i__11271 = G__11347;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__11272 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__11273 = null;
var count__11274 = (0);
var i__11275 = (0);
while(true){
if((i__11275 < count__11274)){
var vec__11282 = chunk__11273.cljs$core$IIndexed$_nth$arity$2(null,i__11275);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11282,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11282,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___11348 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11348)){
var effect_fn_11349 = temp__5802__auto___11348;
(effect_fn_11349.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11349.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11349.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__11350 = seq__11272;
var G__11351 = chunk__11273;
var G__11352 = count__11274;
var G__11353 = (i__11275 + (1));
seq__11272 = G__11350;
chunk__11273 = G__11351;
count__11274 = G__11352;
i__11275 = G__11353;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11272);
if(temp__5804__auto__){
var seq__11272__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11272__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11272__$1);
var G__11354 = cljs.core.chunk_rest(seq__11272__$1);
var G__11355 = c__5568__auto__;
var G__11356 = cljs.core.count(c__5568__auto__);
var G__11357 = (0);
seq__11272 = G__11354;
chunk__11273 = G__11355;
count__11274 = G__11356;
i__11275 = G__11357;
continue;
} else {
var vec__11285 = cljs.core.first(seq__11272__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11285,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11285,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___11358 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___11358)){
var effect_fn_11359 = temp__5802__auto___11358;
(effect_fn_11359.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11359.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11359.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__11360 = cljs.core.next(seq__11272__$1);
var G__11361 = null;
var G__11362 = (0);
var G__11363 = (0);
seq__11272 = G__11360;
chunk__11273 = G__11361;
count__11274 = G__11362;
i__11275 = G__11363;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__11288 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11289 = null;
var count__11290 = (0);
var i__11291 = (0);
while(true){
if((i__11291 < count__11290)){
var event = chunk__11289.cljs$core$IIndexed$_nth$arity$2(null,i__11291);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__11364 = seq__11288;
var G__11365 = chunk__11289;
var G__11366 = count__11290;
var G__11367 = (i__11291 + (1));
seq__11288 = G__11364;
chunk__11289 = G__11365;
count__11290 = G__11366;
i__11291 = G__11367;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11288);
if(temp__5804__auto__){
var seq__11288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11288__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11288__$1);
var G__11368 = cljs.core.chunk_rest(seq__11288__$1);
var G__11369 = c__5568__auto__;
var G__11370 = cljs.core.count(c__5568__auto__);
var G__11371 = (0);
seq__11288 = G__11368;
chunk__11289 = G__11369;
count__11290 = G__11370;
i__11291 = G__11371;
continue;
} else {
var event = cljs.core.first(seq__11288__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__11372 = cljs.core.next(seq__11288__$1);
var G__11373 = null;
var G__11374 = (0);
var G__11375 = (0);
seq__11288 = G__11372;
chunk__11289 = G__11373;
count__11290 = G__11374;
i__11291 = G__11375;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__11292 = cljs.core.seq(value);
var chunk__11293 = null;
var count__11294 = (0);
var i__11295 = (0);
while(true){
if((i__11295 < count__11294)){
var event = chunk__11293.cljs$core$IIndexed$_nth$arity$2(null,i__11295);
clear_event(event);


var G__11376 = seq__11292;
var G__11377 = chunk__11293;
var G__11378 = count__11294;
var G__11379 = (i__11295 + (1));
seq__11292 = G__11376;
chunk__11293 = G__11377;
count__11294 = G__11378;
i__11295 = G__11379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11292);
if(temp__5804__auto__){
var seq__11292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11292__$1);
var G__11380 = cljs.core.chunk_rest(seq__11292__$1);
var G__11381 = c__5568__auto__;
var G__11382 = cljs.core.count(c__5568__auto__);
var G__11383 = (0);
seq__11292 = G__11380;
chunk__11293 = G__11381;
count__11294 = G__11382;
i__11295 = G__11383;
continue;
} else {
var event = cljs.core.first(seq__11292__$1);
clear_event(event);


var G__11384 = cljs.core.next(seq__11292__$1);
var G__11385 = null;
var G__11386 = (0);
var G__11387 = (0);
seq__11292 = G__11384;
chunk__11293 = G__11385;
count__11294 = G__11386;
i__11295 = G__11387;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
