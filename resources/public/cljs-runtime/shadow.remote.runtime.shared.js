goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19001){
var map__19002 = p__19001;
var map__19002__$1 = cljs.core.__destructure_map(map__19002);
var runtime = map__19002__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19002__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_19075 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_19075)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__19004 = runtime;
var G__19005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_19075);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__19004,G__19005) : shadow.remote.runtime.shared.process.call(null,G__19004,G__19005));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19007,res){
var map__19008 = p__19007;
var map__19008__$1 = cljs.core.__destructure_map(map__19008);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19012 = res;
var G__19012__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19012,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19012);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19012__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19012__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19014 = arguments.length;
switch (G__19014) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19016,msg,handlers,timeout_after_ms){
var map__19017 = p__19016;
var map__19017__$1 = cljs.core.__destructure_map(map__19017);
var runtime = map__19017__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19079 = arguments.length;
var i__5770__auto___19080 = (0);
while(true){
if((i__5770__auto___19080 < len__5769__auto___19079)){
args__5775__auto__.push((arguments[i__5770__auto___19080]));

var G__19081 = (i__5770__auto___19080 + (1));
i__5770__auto___19080 = G__19081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19021,ev,args){
var map__19022 = p__19021;
var map__19022__$1 = cljs.core.__destructure_map(map__19022);
var runtime = map__19022__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19022__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19023 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19026 = null;
var count__19027 = (0);
var i__19028 = (0);
while(true){
if((i__19028 < count__19027)){
var ext = chunk__19026.cljs$core$IIndexed$_nth$arity$2(null,i__19028);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19082 = seq__19023;
var G__19083 = chunk__19026;
var G__19084 = count__19027;
var G__19085 = (i__19028 + (1));
seq__19023 = G__19082;
chunk__19026 = G__19083;
count__19027 = G__19084;
i__19028 = G__19085;
continue;
} else {
var G__19086 = seq__19023;
var G__19087 = chunk__19026;
var G__19088 = count__19027;
var G__19089 = (i__19028 + (1));
seq__19023 = G__19086;
chunk__19026 = G__19087;
count__19027 = G__19088;
i__19028 = G__19089;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19023);
if(temp__5804__auto__){
var seq__19023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19023__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19023__$1);
var G__19090 = cljs.core.chunk_rest(seq__19023__$1);
var G__19091 = c__5568__auto__;
var G__19092 = cljs.core.count(c__5568__auto__);
var G__19093 = (0);
seq__19023 = G__19090;
chunk__19026 = G__19091;
count__19027 = G__19092;
i__19028 = G__19093;
continue;
} else {
var ext = cljs.core.first(seq__19023__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19094 = cljs.core.next(seq__19023__$1);
var G__19095 = null;
var G__19096 = (0);
var G__19097 = (0);
seq__19023 = G__19094;
chunk__19026 = G__19095;
count__19027 = G__19096;
i__19028 = G__19097;
continue;
} else {
var G__19098 = cljs.core.next(seq__19023__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__19023 = G__19098;
chunk__19026 = G__19099;
count__19027 = G__19100;
i__19028 = G__19101;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19018){
var G__19019 = cljs.core.first(seq19018);
var seq19018__$1 = cljs.core.next(seq19018);
var G__19020 = cljs.core.first(seq19018__$1);
var seq19018__$2 = cljs.core.next(seq19018__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19019,G__19020,seq19018__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19032,p__19033){
var map__19034 = p__19032;
var map__19034__$1 = cljs.core.__destructure_map(map__19034);
var runtime = map__19034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19035 = p__19033;
var map__19035__$1 = cljs.core.__destructure_map(map__19035);
var msg = map__19035__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19035__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19037 = cljs.core.deref(state_ref);
var map__19037__$1 = cljs.core.__destructure_map(map__19037);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19038,msg){
var map__19039 = p__19038;
var map__19039__$1 = cljs.core.__destructure_map(map__19039);
var runtime = map__19039__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19040,key,p__19041){
var map__19042 = p__19040;
var map__19042__$1 = cljs.core.__destructure_map(map__19042);
var state = map__19042__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19042__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19043 = p__19041;
var map__19043__$1 = cljs.core.__destructure_map(map__19043);
var spec = map__19043__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19044,key,spec){
var map__19045 = p__19044;
var map__19045__$1 = cljs.core.__destructure_map(map__19045);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19045__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19046_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19046_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19047_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19047_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19048_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19048_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19049_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19049_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19050_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19050_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19051,key){
var map__19052 = p__19051;
var map__19052__$1 = cljs.core.__destructure_map(map__19052);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19053,msg){
var map__19054 = p__19053;
var map__19054__$1 = cljs.core.__destructure_map(map__19054);
var runtime = map__19054__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19055,p__19056){
var map__19057 = p__19055;
var map__19057__$1 = cljs.core.__destructure_map(map__19057);
var runtime = map__19057__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19057__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19058 = p__19056;
var map__19058__$1 = cljs.core.__destructure_map(map__19058);
var msg = map__19058__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19059 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19061 = null;
var count__19062 = (0);
var i__19063 = (0);
while(true){
if((i__19063 < count__19062)){
var map__19067 = chunk__19061.cljs$core$IIndexed$_nth$arity$2(null,i__19063);
var map__19067__$1 = cljs.core.__destructure_map(map__19067);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19067__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19102 = seq__19059;
var G__19103 = chunk__19061;
var G__19104 = count__19062;
var G__19105 = (i__19063 + (1));
seq__19059 = G__19102;
chunk__19061 = G__19103;
count__19062 = G__19104;
i__19063 = G__19105;
continue;
} else {
var G__19106 = seq__19059;
var G__19107 = chunk__19061;
var G__19108 = count__19062;
var G__19109 = (i__19063 + (1));
seq__19059 = G__19106;
chunk__19061 = G__19107;
count__19062 = G__19108;
i__19063 = G__19109;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19059);
if(temp__5804__auto__){
var seq__19059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19059__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19059__$1);
var G__19110 = cljs.core.chunk_rest(seq__19059__$1);
var G__19111 = c__5568__auto__;
var G__19112 = cljs.core.count(c__5568__auto__);
var G__19113 = (0);
seq__19059 = G__19110;
chunk__19061 = G__19111;
count__19062 = G__19112;
i__19063 = G__19113;
continue;
} else {
var map__19068 = cljs.core.first(seq__19059__$1);
var map__19068__$1 = cljs.core.__destructure_map(map__19068);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19068__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19114 = cljs.core.next(seq__19059__$1);
var G__19115 = null;
var G__19116 = (0);
var G__19117 = (0);
seq__19059 = G__19114;
chunk__19061 = G__19115;
count__19062 = G__19116;
i__19063 = G__19117;
continue;
} else {
var G__19118 = cljs.core.next(seq__19059__$1);
var G__19119 = null;
var G__19120 = (0);
var G__19121 = (0);
seq__19059 = G__19118;
chunk__19061 = G__19119;
count__19062 = G__19120;
i__19063 = G__19121;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
