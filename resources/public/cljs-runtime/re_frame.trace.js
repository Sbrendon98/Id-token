goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12060){
var map__12061 = p__12060;
var map__12061__$1 = cljs.core.__destructure_map(map__12061);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12061__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12061__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12061__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12061__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12064_12091 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12065_12092 = null;
var count__12066_12093 = (0);
var i__12067_12094 = (0);
while(true){
if((i__12067_12094 < count__12066_12093)){
var vec__12078_12095 = chunk__12065_12092.cljs$core$IIndexed$_nth$arity$2(null,i__12067_12094);
var k_12096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12078_12095,(0),null);
var cb_12097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12078_12095,(1),null);
try{var G__12082_12098 = cljs.core.deref(re_frame.trace.traces);
(cb_12097.cljs$core$IFn$_invoke$arity$1 ? cb_12097.cljs$core$IFn$_invoke$arity$1(G__12082_12098) : cb_12097.call(null,G__12082_12098));
}catch (e12081){var e_12099 = e12081;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12096,"while storing",cljs.core.deref(re_frame.trace.traces),e_12099], 0));
}

var G__12100 = seq__12064_12091;
var G__12101 = chunk__12065_12092;
var G__12102 = count__12066_12093;
var G__12103 = (i__12067_12094 + (1));
seq__12064_12091 = G__12100;
chunk__12065_12092 = G__12101;
count__12066_12093 = G__12102;
i__12067_12094 = G__12103;
continue;
} else {
var temp__5804__auto___12108 = cljs.core.seq(seq__12064_12091);
if(temp__5804__auto___12108){
var seq__12064_12109__$1 = temp__5804__auto___12108;
if(cljs.core.chunked_seq_QMARK_(seq__12064_12109__$1)){
var c__5568__auto___12110 = cljs.core.chunk_first(seq__12064_12109__$1);
var G__12111 = cljs.core.chunk_rest(seq__12064_12109__$1);
var G__12112 = c__5568__auto___12110;
var G__12113 = cljs.core.count(c__5568__auto___12110);
var G__12114 = (0);
seq__12064_12091 = G__12111;
chunk__12065_12092 = G__12112;
count__12066_12093 = G__12113;
i__12067_12094 = G__12114;
continue;
} else {
var vec__12083_12115 = cljs.core.first(seq__12064_12109__$1);
var k_12116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12083_12115,(0),null);
var cb_12117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12083_12115,(1),null);
try{var G__12087_12121 = cljs.core.deref(re_frame.trace.traces);
(cb_12117.cljs$core$IFn$_invoke$arity$1 ? cb_12117.cljs$core$IFn$_invoke$arity$1(G__12087_12121) : cb_12117.call(null,G__12087_12121));
}catch (e12086){var e_12122 = e12086;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12116,"while storing",cljs.core.deref(re_frame.trace.traces),e_12122], 0));
}

var G__12123 = cljs.core.next(seq__12064_12109__$1);
var G__12124 = null;
var G__12125 = (0);
var G__12126 = (0);
seq__12064_12091 = G__12123;
chunk__12065_12092 = G__12124;
count__12066_12093 = G__12125;
i__12067_12094 = G__12126;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
