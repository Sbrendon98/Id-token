goog.provide('day8.re_frame_10x.fx.trace');
day8.re_frame_10x.fx.trace.enable_BANG_ = (function day8$re_frame_10x$fx$trace$enable_BANG_(p__14031){
var map__14032 = p__14031;
var map__14032__$1 = cljs.core.__destructure_map(map__14032);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14032__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return re_frame.trace.register_trace_cb(key,(function (p1__14030_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","receive-new-traces","day8.re-frame-10x.navigation.epochs.events/receive-new-traces",542616228),p1__14030_SHARP_], null));
}));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),day8.re_frame_10x.fx.trace.enable_BANG_);
day8.re_frame_10x.fx.trace.disable_BANG_ = (function day8$re_frame_10x$fx$trace$disable_BANG_(p__14033){
var map__14034 = p__14033;
var map__14034__$1 = cljs.core.__destructure_map(map__14034);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14034__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return re_frame.trace.remove_trace_cb(key);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),day8.re_frame_10x.fx.trace.disable_BANG_);

//# sourceMappingURL=day8.re_frame_10x.fx.trace.js.map
