goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22040 = arguments.length;
var i__5770__auto___22041 = (0);
while(true){
if((i__5770__auto___22041 < len__5769__auto___22040)){
args__5775__auto__.push((arguments[i__5770__auto___22041]));

var G__22042 = (i__5770__auto___22041 + (1));
i__5770__auto___22041 = G__22042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21673){
var G__21674 = cljs.core.first(seq21673);
var seq21673__$1 = cljs.core.next(seq21673);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21674,seq21673__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21675 = cljs.core.seq(sources);
var chunk__21676 = null;
var count__21677 = (0);
var i__21678 = (0);
while(true){
if((i__21678 < count__21677)){
var map__21683 = chunk__21676.cljs$core$IIndexed$_nth$arity$2(null,i__21678);
var map__21683__$1 = cljs.core.__destructure_map(map__21683);
var src = map__21683__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21684){var e_22043 = e21684;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22043);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22043.message)].join('')));
}

var G__22044 = seq__21675;
var G__22045 = chunk__21676;
var G__22046 = count__21677;
var G__22047 = (i__21678 + (1));
seq__21675 = G__22044;
chunk__21676 = G__22045;
count__21677 = G__22046;
i__21678 = G__22047;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21675);
if(temp__5804__auto__){
var seq__21675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21675__$1);
var G__22048 = cljs.core.chunk_rest(seq__21675__$1);
var G__22049 = c__5568__auto__;
var G__22050 = cljs.core.count(c__5568__auto__);
var G__22051 = (0);
seq__21675 = G__22048;
chunk__21676 = G__22049;
count__21677 = G__22050;
i__21678 = G__22051;
continue;
} else {
var map__21685 = cljs.core.first(seq__21675__$1);
var map__21685__$1 = cljs.core.__destructure_map(map__21685);
var src = map__21685__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21685__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21685__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21685__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21686){var e_22052 = e21686;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22052);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22052.message)].join('')));
}

var G__22053 = cljs.core.next(seq__21675__$1);
var G__22054 = null;
var G__22055 = (0);
var G__22056 = (0);
seq__21675 = G__22053;
chunk__21676 = G__22054;
count__21677 = G__22055;
i__21678 = G__22056;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21687 = cljs.core.seq(js_requires);
var chunk__21688 = null;
var count__21689 = (0);
var i__21690 = (0);
while(true){
if((i__21690 < count__21689)){
var js_ns = chunk__21688.cljs$core$IIndexed$_nth$arity$2(null,i__21690);
var require_str_22057 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22057);


var G__22058 = seq__21687;
var G__22059 = chunk__21688;
var G__22060 = count__21689;
var G__22061 = (i__21690 + (1));
seq__21687 = G__22058;
chunk__21688 = G__22059;
count__21689 = G__22060;
i__21690 = G__22061;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21687);
if(temp__5804__auto__){
var seq__21687__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21687__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21687__$1);
var G__22062 = cljs.core.chunk_rest(seq__21687__$1);
var G__22063 = c__5568__auto__;
var G__22064 = cljs.core.count(c__5568__auto__);
var G__22065 = (0);
seq__21687 = G__22062;
chunk__21688 = G__22063;
count__21689 = G__22064;
i__21690 = G__22065;
continue;
} else {
var js_ns = cljs.core.first(seq__21687__$1);
var require_str_22066 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22066);


var G__22067 = cljs.core.next(seq__21687__$1);
var G__22068 = null;
var G__22069 = (0);
var G__22070 = (0);
seq__21687 = G__22067;
chunk__21688 = G__22068;
count__21689 = G__22069;
i__21690 = G__22070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21692){
var map__21693 = p__21692;
var map__21693__$1 = cljs.core.__destructure_map(map__21693);
var msg = map__21693__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21694(s__21695){
return (new cljs.core.LazySeq(null,(function (){
var s__21695__$1 = s__21695;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21695__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21700 = cljs.core.first(xs__6360__auto__);
var map__21700__$1 = cljs.core.__destructure_map(map__21700);
var src = map__21700__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21700__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21695__$1,map__21700,map__21700__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21693,map__21693__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21694_$_iter__21696(s__21697){
return (new cljs.core.LazySeq(null,((function (s__21695__$1,map__21700,map__21700__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21693,map__21693__$1,msg,info,reload_info){
return (function (){
var s__21697__$1 = s__21697;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21697__$1);
if(temp__5804__auto____$1){
var s__21697__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21697__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21697__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21699 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21698 = (0);
while(true){
if((i__21698 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21698);
cljs.core.chunk_append(b__21699,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22071 = (i__21698 + (1));
i__21698 = G__22071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21699),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21694_$_iter__21696(cljs.core.chunk_rest(s__21697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21699),null);
}
} else {
var warning = cljs.core.first(s__21697__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21694_$_iter__21696(cljs.core.rest(s__21697__$2)));
}
} else {
return null;
}
break;
}
});})(s__21695__$1,map__21700,map__21700__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21693,map__21693__$1,msg,info,reload_info))
,null,null));
});})(s__21695__$1,map__21700,map__21700__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21693,map__21693__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21694(cljs.core.rest(s__21695__$1)));
} else {
var G__22072 = cljs.core.rest(s__21695__$1);
s__21695__$1 = G__22072;
continue;
}
} else {
var G__22073 = cljs.core.rest(s__21695__$1);
s__21695__$1 = G__22073;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21701_22074 = cljs.core.seq(warnings);
var chunk__21702_22075 = null;
var count__21703_22076 = (0);
var i__21704_22077 = (0);
while(true){
if((i__21704_22077 < count__21703_22076)){
var map__21707_22078 = chunk__21702_22075.cljs$core$IIndexed$_nth$arity$2(null,i__21704_22077);
var map__21707_22079__$1 = cljs.core.__destructure_map(map__21707_22078);
var w_22080 = map__21707_22079__$1;
var msg_22081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21707_22079__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21707_22079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21707_22079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21707_22079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22084)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22082),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22083),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22081__$1)].join(''));


var G__22085 = seq__21701_22074;
var G__22086 = chunk__21702_22075;
var G__22087 = count__21703_22076;
var G__22088 = (i__21704_22077 + (1));
seq__21701_22074 = G__22085;
chunk__21702_22075 = G__22086;
count__21703_22076 = G__22087;
i__21704_22077 = G__22088;
continue;
} else {
var temp__5804__auto___22089 = cljs.core.seq(seq__21701_22074);
if(temp__5804__auto___22089){
var seq__21701_22090__$1 = temp__5804__auto___22089;
if(cljs.core.chunked_seq_QMARK_(seq__21701_22090__$1)){
var c__5568__auto___22091 = cljs.core.chunk_first(seq__21701_22090__$1);
var G__22092 = cljs.core.chunk_rest(seq__21701_22090__$1);
var G__22093 = c__5568__auto___22091;
var G__22094 = cljs.core.count(c__5568__auto___22091);
var G__22095 = (0);
seq__21701_22074 = G__22092;
chunk__21702_22075 = G__22093;
count__21703_22076 = G__22094;
i__21704_22077 = G__22095;
continue;
} else {
var map__21708_22096 = cljs.core.first(seq__21701_22090__$1);
var map__21708_22097__$1 = cljs.core.__destructure_map(map__21708_22096);
var w_22098 = map__21708_22097__$1;
var msg_22099__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708_22097__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708_22097__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708_22097__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708_22097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22102)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22100),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22101),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22099__$1)].join(''));


var G__22103 = cljs.core.next(seq__21701_22090__$1);
var G__22104 = null;
var G__22105 = (0);
var G__22106 = (0);
seq__21701_22074 = G__22103;
chunk__21702_22075 = G__22104;
count__21703_22076 = G__22105;
i__21704_22077 = G__22106;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21691_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21691_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21709){
var map__21710 = p__21709;
var map__21710__$1 = cljs.core.__destructure_map(map__21710);
var msg = map__21710__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21711 = cljs.core.seq(updates);
var chunk__21713 = null;
var count__21714 = (0);
var i__21715 = (0);
while(true){
if((i__21715 < count__21714)){
var path = chunk__21713.cljs$core$IIndexed$_nth$arity$2(null,i__21715);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21850_22107 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21854_22108 = null;
var count__21855_22109 = (0);
var i__21856_22110 = (0);
while(true){
if((i__21856_22110 < count__21855_22109)){
var node_22111 = chunk__21854_22108.cljs$core$IIndexed$_nth$arity$2(null,i__21856_22110);
if(cljs.core.not(node_22111.shadow$old)){
var path_match_22112 = shadow.cljs.devtools.client.browser.match_paths(node_22111.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22112)){
var new_link_22113 = (function (){var G__21906 = node_22111.cloneNode(true);
G__21906.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22112),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21906;
})();
(node_22111.shadow$old = true);

(new_link_22113.onload = ((function (seq__21850_22107,chunk__21854_22108,count__21855_22109,i__21856_22110,seq__21711,chunk__21713,count__21714,i__21715,new_link_22113,path_match_22112,node_22111,path,map__21710,map__21710__$1,msg,updates,reload_info){
return (function (e){
var seq__21907_22114 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21909_22115 = null;
var count__21910_22116 = (0);
var i__21911_22117 = (0);
while(true){
if((i__21911_22117 < count__21910_22116)){
var map__21917_22118 = chunk__21909_22115.cljs$core$IIndexed$_nth$arity$2(null,i__21911_22117);
var map__21917_22119__$1 = cljs.core.__destructure_map(map__21917_22118);
var task_22120 = map__21917_22119__$1;
var fn_str_22121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21917_22119__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21917_22119__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22123 = goog.getObjectByName(fn_str_22121,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22122)].join(''));

(fn_obj_22123.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22123.cljs$core$IFn$_invoke$arity$2(path,new_link_22113) : fn_obj_22123.call(null,path,new_link_22113));


var G__22124 = seq__21907_22114;
var G__22125 = chunk__21909_22115;
var G__22126 = count__21910_22116;
var G__22127 = (i__21911_22117 + (1));
seq__21907_22114 = G__22124;
chunk__21909_22115 = G__22125;
count__21910_22116 = G__22126;
i__21911_22117 = G__22127;
continue;
} else {
var temp__5804__auto___22128 = cljs.core.seq(seq__21907_22114);
if(temp__5804__auto___22128){
var seq__21907_22129__$1 = temp__5804__auto___22128;
if(cljs.core.chunked_seq_QMARK_(seq__21907_22129__$1)){
var c__5568__auto___22130 = cljs.core.chunk_first(seq__21907_22129__$1);
var G__22131 = cljs.core.chunk_rest(seq__21907_22129__$1);
var G__22132 = c__5568__auto___22130;
var G__22133 = cljs.core.count(c__5568__auto___22130);
var G__22134 = (0);
seq__21907_22114 = G__22131;
chunk__21909_22115 = G__22132;
count__21910_22116 = G__22133;
i__21911_22117 = G__22134;
continue;
} else {
var map__21920_22135 = cljs.core.first(seq__21907_22129__$1);
var map__21920_22136__$1 = cljs.core.__destructure_map(map__21920_22135);
var task_22137 = map__21920_22136__$1;
var fn_str_22138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22136__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22136__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22140 = goog.getObjectByName(fn_str_22138,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22139)].join(''));

(fn_obj_22140.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22140.cljs$core$IFn$_invoke$arity$2(path,new_link_22113) : fn_obj_22140.call(null,path,new_link_22113));


var G__22141 = cljs.core.next(seq__21907_22129__$1);
var G__22142 = null;
var G__22143 = (0);
var G__22144 = (0);
seq__21907_22114 = G__22141;
chunk__21909_22115 = G__22142;
count__21910_22116 = G__22143;
i__21911_22117 = G__22144;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22111);
});})(seq__21850_22107,chunk__21854_22108,count__21855_22109,i__21856_22110,seq__21711,chunk__21713,count__21714,i__21715,new_link_22113,path_match_22112,node_22111,path,map__21710,map__21710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22112], 0));

goog.dom.insertSiblingAfter(new_link_22113,node_22111);


var G__22145 = seq__21850_22107;
var G__22146 = chunk__21854_22108;
var G__22147 = count__21855_22109;
var G__22148 = (i__21856_22110 + (1));
seq__21850_22107 = G__22145;
chunk__21854_22108 = G__22146;
count__21855_22109 = G__22147;
i__21856_22110 = G__22148;
continue;
} else {
var G__22149 = seq__21850_22107;
var G__22150 = chunk__21854_22108;
var G__22151 = count__21855_22109;
var G__22152 = (i__21856_22110 + (1));
seq__21850_22107 = G__22149;
chunk__21854_22108 = G__22150;
count__21855_22109 = G__22151;
i__21856_22110 = G__22152;
continue;
}
} else {
var G__22153 = seq__21850_22107;
var G__22154 = chunk__21854_22108;
var G__22155 = count__21855_22109;
var G__22156 = (i__21856_22110 + (1));
seq__21850_22107 = G__22153;
chunk__21854_22108 = G__22154;
count__21855_22109 = G__22155;
i__21856_22110 = G__22156;
continue;
}
} else {
var temp__5804__auto___22157 = cljs.core.seq(seq__21850_22107);
if(temp__5804__auto___22157){
var seq__21850_22158__$1 = temp__5804__auto___22157;
if(cljs.core.chunked_seq_QMARK_(seq__21850_22158__$1)){
var c__5568__auto___22159 = cljs.core.chunk_first(seq__21850_22158__$1);
var G__22160 = cljs.core.chunk_rest(seq__21850_22158__$1);
var G__22161 = c__5568__auto___22159;
var G__22162 = cljs.core.count(c__5568__auto___22159);
var G__22163 = (0);
seq__21850_22107 = G__22160;
chunk__21854_22108 = G__22161;
count__21855_22109 = G__22162;
i__21856_22110 = G__22163;
continue;
} else {
var node_22164 = cljs.core.first(seq__21850_22158__$1);
if(cljs.core.not(node_22164.shadow$old)){
var path_match_22165 = shadow.cljs.devtools.client.browser.match_paths(node_22164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22165)){
var new_link_22166 = (function (){var G__21922 = node_22164.cloneNode(true);
G__21922.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21922;
})();
(node_22164.shadow$old = true);

(new_link_22166.onload = ((function (seq__21850_22107,chunk__21854_22108,count__21855_22109,i__21856_22110,seq__21711,chunk__21713,count__21714,i__21715,new_link_22166,path_match_22165,node_22164,seq__21850_22158__$1,temp__5804__auto___22157,path,map__21710,map__21710__$1,msg,updates,reload_info){
return (function (e){
var seq__21927_22167 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21929_22168 = null;
var count__21930_22169 = (0);
var i__21931_22170 = (0);
while(true){
if((i__21931_22170 < count__21930_22169)){
var map__21948_22171 = chunk__21929_22168.cljs$core$IIndexed$_nth$arity$2(null,i__21931_22170);
var map__21948_22172__$1 = cljs.core.__destructure_map(map__21948_22171);
var task_22173 = map__21948_22172__$1;
var fn_str_22174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_22172__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_22172__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22176 = goog.getObjectByName(fn_str_22174,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22175)].join(''));

(fn_obj_22176.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22176.cljs$core$IFn$_invoke$arity$2(path,new_link_22166) : fn_obj_22176.call(null,path,new_link_22166));


var G__22177 = seq__21927_22167;
var G__22178 = chunk__21929_22168;
var G__22179 = count__21930_22169;
var G__22180 = (i__21931_22170 + (1));
seq__21927_22167 = G__22177;
chunk__21929_22168 = G__22178;
count__21930_22169 = G__22179;
i__21931_22170 = G__22180;
continue;
} else {
var temp__5804__auto___22181__$1 = cljs.core.seq(seq__21927_22167);
if(temp__5804__auto___22181__$1){
var seq__21927_22182__$1 = temp__5804__auto___22181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21927_22182__$1)){
var c__5568__auto___22183 = cljs.core.chunk_first(seq__21927_22182__$1);
var G__22184 = cljs.core.chunk_rest(seq__21927_22182__$1);
var G__22185 = c__5568__auto___22183;
var G__22186 = cljs.core.count(c__5568__auto___22183);
var G__22187 = (0);
seq__21927_22167 = G__22184;
chunk__21929_22168 = G__22185;
count__21930_22169 = G__22186;
i__21931_22170 = G__22187;
continue;
} else {
var map__21954_22188 = cljs.core.first(seq__21927_22182__$1);
var map__21954_22189__$1 = cljs.core.__destructure_map(map__21954_22188);
var task_22190 = map__21954_22189__$1;
var fn_str_22191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21954_22189__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21954_22189__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22193 = goog.getObjectByName(fn_str_22191,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22192)].join(''));

(fn_obj_22193.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22193.cljs$core$IFn$_invoke$arity$2(path,new_link_22166) : fn_obj_22193.call(null,path,new_link_22166));


var G__22194 = cljs.core.next(seq__21927_22182__$1);
var G__22195 = null;
var G__22196 = (0);
var G__22197 = (0);
seq__21927_22167 = G__22194;
chunk__21929_22168 = G__22195;
count__21930_22169 = G__22196;
i__21931_22170 = G__22197;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22164);
});})(seq__21850_22107,chunk__21854_22108,count__21855_22109,i__21856_22110,seq__21711,chunk__21713,count__21714,i__21715,new_link_22166,path_match_22165,node_22164,seq__21850_22158__$1,temp__5804__auto___22157,path,map__21710,map__21710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22165], 0));

goog.dom.insertSiblingAfter(new_link_22166,node_22164);


var G__22198 = cljs.core.next(seq__21850_22158__$1);
var G__22199 = null;
var G__22200 = (0);
var G__22201 = (0);
seq__21850_22107 = G__22198;
chunk__21854_22108 = G__22199;
count__21855_22109 = G__22200;
i__21856_22110 = G__22201;
continue;
} else {
var G__22202 = cljs.core.next(seq__21850_22158__$1);
var G__22203 = null;
var G__22204 = (0);
var G__22205 = (0);
seq__21850_22107 = G__22202;
chunk__21854_22108 = G__22203;
count__21855_22109 = G__22204;
i__21856_22110 = G__22205;
continue;
}
} else {
var G__22206 = cljs.core.next(seq__21850_22158__$1);
var G__22207 = null;
var G__22208 = (0);
var G__22209 = (0);
seq__21850_22107 = G__22206;
chunk__21854_22108 = G__22207;
count__21855_22109 = G__22208;
i__21856_22110 = G__22209;
continue;
}
}
} else {
}
}
break;
}


var G__22210 = seq__21711;
var G__22211 = chunk__21713;
var G__22212 = count__21714;
var G__22213 = (i__21715 + (1));
seq__21711 = G__22210;
chunk__21713 = G__22211;
count__21714 = G__22212;
i__21715 = G__22213;
continue;
} else {
var G__22214 = seq__21711;
var G__22215 = chunk__21713;
var G__22216 = count__21714;
var G__22217 = (i__21715 + (1));
seq__21711 = G__22214;
chunk__21713 = G__22215;
count__21714 = G__22216;
i__21715 = G__22217;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21711);
if(temp__5804__auto__){
var seq__21711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21711__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21711__$1);
var G__22218 = cljs.core.chunk_rest(seq__21711__$1);
var G__22219 = c__5568__auto__;
var G__22220 = cljs.core.count(c__5568__auto__);
var G__22221 = (0);
seq__21711 = G__22218;
chunk__21713 = G__22219;
count__21714 = G__22220;
i__21715 = G__22221;
continue;
} else {
var path = cljs.core.first(seq__21711__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21962_22222 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21966_22223 = null;
var count__21967_22224 = (0);
var i__21968_22225 = (0);
while(true){
if((i__21968_22225 < count__21967_22224)){
var node_22226 = chunk__21966_22223.cljs$core$IIndexed$_nth$arity$2(null,i__21968_22225);
if(cljs.core.not(node_22226.shadow$old)){
var path_match_22227 = shadow.cljs.devtools.client.browser.match_paths(node_22226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22227)){
var new_link_22228 = (function (){var G__21994 = node_22226.cloneNode(true);
G__21994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21994;
})();
(node_22226.shadow$old = true);

(new_link_22228.onload = ((function (seq__21962_22222,chunk__21966_22223,count__21967_22224,i__21968_22225,seq__21711,chunk__21713,count__21714,i__21715,new_link_22228,path_match_22227,node_22226,path,seq__21711__$1,temp__5804__auto__,map__21710,map__21710__$1,msg,updates,reload_info){
return (function (e){
var seq__21995_22229 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21997_22230 = null;
var count__21998_22231 = (0);
var i__21999_22232 = (0);
while(true){
if((i__21999_22232 < count__21998_22231)){
var map__22003_22233 = chunk__21997_22230.cljs$core$IIndexed$_nth$arity$2(null,i__21999_22232);
var map__22003_22234__$1 = cljs.core.__destructure_map(map__22003_22233);
var task_22235 = map__22003_22234__$1;
var fn_str_22236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003_22234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22003_22234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22238 = goog.getObjectByName(fn_str_22236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22237)].join(''));

(fn_obj_22238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22238.cljs$core$IFn$_invoke$arity$2(path,new_link_22228) : fn_obj_22238.call(null,path,new_link_22228));


var G__22239 = seq__21995_22229;
var G__22240 = chunk__21997_22230;
var G__22241 = count__21998_22231;
var G__22242 = (i__21999_22232 + (1));
seq__21995_22229 = G__22239;
chunk__21997_22230 = G__22240;
count__21998_22231 = G__22241;
i__21999_22232 = G__22242;
continue;
} else {
var temp__5804__auto___22243__$1 = cljs.core.seq(seq__21995_22229);
if(temp__5804__auto___22243__$1){
var seq__21995_22244__$1 = temp__5804__auto___22243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21995_22244__$1)){
var c__5568__auto___22245 = cljs.core.chunk_first(seq__21995_22244__$1);
var G__22246 = cljs.core.chunk_rest(seq__21995_22244__$1);
var G__22247 = c__5568__auto___22245;
var G__22248 = cljs.core.count(c__5568__auto___22245);
var G__22249 = (0);
seq__21995_22229 = G__22246;
chunk__21997_22230 = G__22247;
count__21998_22231 = G__22248;
i__21999_22232 = G__22249;
continue;
} else {
var map__22004_22250 = cljs.core.first(seq__21995_22244__$1);
var map__22004_22251__$1 = cljs.core.__destructure_map(map__22004_22250);
var task_22252 = map__22004_22251__$1;
var fn_str_22253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22004_22251__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22004_22251__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22255 = goog.getObjectByName(fn_str_22253,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22254)].join(''));

(fn_obj_22255.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22255.cljs$core$IFn$_invoke$arity$2(path,new_link_22228) : fn_obj_22255.call(null,path,new_link_22228));


var G__22256 = cljs.core.next(seq__21995_22244__$1);
var G__22257 = null;
var G__22258 = (0);
var G__22259 = (0);
seq__21995_22229 = G__22256;
chunk__21997_22230 = G__22257;
count__21998_22231 = G__22258;
i__21999_22232 = G__22259;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22226);
});})(seq__21962_22222,chunk__21966_22223,count__21967_22224,i__21968_22225,seq__21711,chunk__21713,count__21714,i__21715,new_link_22228,path_match_22227,node_22226,path,seq__21711__$1,temp__5804__auto__,map__21710,map__21710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22227], 0));

goog.dom.insertSiblingAfter(new_link_22228,node_22226);


var G__22260 = seq__21962_22222;
var G__22261 = chunk__21966_22223;
var G__22262 = count__21967_22224;
var G__22263 = (i__21968_22225 + (1));
seq__21962_22222 = G__22260;
chunk__21966_22223 = G__22261;
count__21967_22224 = G__22262;
i__21968_22225 = G__22263;
continue;
} else {
var G__22264 = seq__21962_22222;
var G__22265 = chunk__21966_22223;
var G__22266 = count__21967_22224;
var G__22267 = (i__21968_22225 + (1));
seq__21962_22222 = G__22264;
chunk__21966_22223 = G__22265;
count__21967_22224 = G__22266;
i__21968_22225 = G__22267;
continue;
}
} else {
var G__22268 = seq__21962_22222;
var G__22269 = chunk__21966_22223;
var G__22270 = count__21967_22224;
var G__22271 = (i__21968_22225 + (1));
seq__21962_22222 = G__22268;
chunk__21966_22223 = G__22269;
count__21967_22224 = G__22270;
i__21968_22225 = G__22271;
continue;
}
} else {
var temp__5804__auto___22272__$1 = cljs.core.seq(seq__21962_22222);
if(temp__5804__auto___22272__$1){
var seq__21962_22273__$1 = temp__5804__auto___22272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21962_22273__$1)){
var c__5568__auto___22274 = cljs.core.chunk_first(seq__21962_22273__$1);
var G__22275 = cljs.core.chunk_rest(seq__21962_22273__$1);
var G__22276 = c__5568__auto___22274;
var G__22277 = cljs.core.count(c__5568__auto___22274);
var G__22278 = (0);
seq__21962_22222 = G__22275;
chunk__21966_22223 = G__22276;
count__21967_22224 = G__22277;
i__21968_22225 = G__22278;
continue;
} else {
var node_22279 = cljs.core.first(seq__21962_22273__$1);
if(cljs.core.not(node_22279.shadow$old)){
var path_match_22280 = shadow.cljs.devtools.client.browser.match_paths(node_22279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22280)){
var new_link_22281 = (function (){var G__22005 = node_22279.cloneNode(true);
G__22005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22280),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22005;
})();
(node_22279.shadow$old = true);

(new_link_22281.onload = ((function (seq__21962_22222,chunk__21966_22223,count__21967_22224,i__21968_22225,seq__21711,chunk__21713,count__21714,i__21715,new_link_22281,path_match_22280,node_22279,seq__21962_22273__$1,temp__5804__auto___22272__$1,path,seq__21711__$1,temp__5804__auto__,map__21710,map__21710__$1,msg,updates,reload_info){
return (function (e){
var seq__22006_22282 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22008_22283 = null;
var count__22009_22284 = (0);
var i__22010_22285 = (0);
while(true){
if((i__22010_22285 < count__22009_22284)){
var map__22014_22286 = chunk__22008_22283.cljs$core$IIndexed$_nth$arity$2(null,i__22010_22285);
var map__22014_22287__$1 = cljs.core.__destructure_map(map__22014_22286);
var task_22288 = map__22014_22287__$1;
var fn_str_22289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014_22287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014_22287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22291 = goog.getObjectByName(fn_str_22289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22290)].join(''));

(fn_obj_22291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22291.cljs$core$IFn$_invoke$arity$2(path,new_link_22281) : fn_obj_22291.call(null,path,new_link_22281));


var G__22292 = seq__22006_22282;
var G__22293 = chunk__22008_22283;
var G__22294 = count__22009_22284;
var G__22295 = (i__22010_22285 + (1));
seq__22006_22282 = G__22292;
chunk__22008_22283 = G__22293;
count__22009_22284 = G__22294;
i__22010_22285 = G__22295;
continue;
} else {
var temp__5804__auto___22296__$2 = cljs.core.seq(seq__22006_22282);
if(temp__5804__auto___22296__$2){
var seq__22006_22297__$1 = temp__5804__auto___22296__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22006_22297__$1)){
var c__5568__auto___22298 = cljs.core.chunk_first(seq__22006_22297__$1);
var G__22299 = cljs.core.chunk_rest(seq__22006_22297__$1);
var G__22300 = c__5568__auto___22298;
var G__22301 = cljs.core.count(c__5568__auto___22298);
var G__22302 = (0);
seq__22006_22282 = G__22299;
chunk__22008_22283 = G__22300;
count__22009_22284 = G__22301;
i__22010_22285 = G__22302;
continue;
} else {
var map__22015_22303 = cljs.core.first(seq__22006_22297__$1);
var map__22015_22304__$1 = cljs.core.__destructure_map(map__22015_22303);
var task_22305 = map__22015_22304__$1;
var fn_str_22306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22015_22304__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22015_22304__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22308 = goog.getObjectByName(fn_str_22306,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22307)].join(''));

(fn_obj_22308.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22308.cljs$core$IFn$_invoke$arity$2(path,new_link_22281) : fn_obj_22308.call(null,path,new_link_22281));


var G__22309 = cljs.core.next(seq__22006_22297__$1);
var G__22310 = null;
var G__22311 = (0);
var G__22312 = (0);
seq__22006_22282 = G__22309;
chunk__22008_22283 = G__22310;
count__22009_22284 = G__22311;
i__22010_22285 = G__22312;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22279);
});})(seq__21962_22222,chunk__21966_22223,count__21967_22224,i__21968_22225,seq__21711,chunk__21713,count__21714,i__21715,new_link_22281,path_match_22280,node_22279,seq__21962_22273__$1,temp__5804__auto___22272__$1,path,seq__21711__$1,temp__5804__auto__,map__21710,map__21710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22280], 0));

goog.dom.insertSiblingAfter(new_link_22281,node_22279);


var G__22313 = cljs.core.next(seq__21962_22273__$1);
var G__22314 = null;
var G__22315 = (0);
var G__22316 = (0);
seq__21962_22222 = G__22313;
chunk__21966_22223 = G__22314;
count__21967_22224 = G__22315;
i__21968_22225 = G__22316;
continue;
} else {
var G__22317 = cljs.core.next(seq__21962_22273__$1);
var G__22318 = null;
var G__22319 = (0);
var G__22320 = (0);
seq__21962_22222 = G__22317;
chunk__21966_22223 = G__22318;
count__21967_22224 = G__22319;
i__21968_22225 = G__22320;
continue;
}
} else {
var G__22321 = cljs.core.next(seq__21962_22273__$1);
var G__22322 = null;
var G__22323 = (0);
var G__22324 = (0);
seq__21962_22222 = G__22321;
chunk__21966_22223 = G__22322;
count__21967_22224 = G__22323;
i__21968_22225 = G__22324;
continue;
}
}
} else {
}
}
break;
}


var G__22325 = cljs.core.next(seq__21711__$1);
var G__22326 = null;
var G__22327 = (0);
var G__22328 = (0);
seq__21711 = G__22325;
chunk__21713 = G__22326;
count__21714 = G__22327;
i__21715 = G__22328;
continue;
} else {
var G__22329 = cljs.core.next(seq__21711__$1);
var G__22330 = null;
var G__22331 = (0);
var G__22332 = (0);
seq__21711 = G__22329;
chunk__21713 = G__22330;
count__21714 = G__22331;
i__21715 = G__22332;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22022){
var map__22023 = p__22022;
var map__22023__$1 = cljs.core.__destructure_map(map__22023);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22023__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22024,done,error){
var map__22025 = p__22024;
var map__22025__$1 = cljs.core.__destructure_map(map__22025);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22026,done,error){
var map__22027 = p__22026;
var map__22027__$1 = cljs.core.__destructure_map(map__22027);
var msg = map__22027__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22028){
var map__22029 = p__22028;
var map__22029__$1 = cljs.core.__destructure_map(map__22029);
var src = map__22029__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22029__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22030 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22030) : done.call(null,G__22030));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22031){
var map__22032 = p__22031;
var map__22032__$1 = cljs.core.__destructure_map(map__22032);
var msg__$1 = map__22032__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22032__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22033){var ex = e22033;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22034){
var map__22035 = p__22034;
var map__22035__$1 = cljs.core.__destructure_map(map__22035);
var env = map__22035__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22035__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22036){
var map__22037 = p__22036;
var map__22037__$1 = cljs.core.__destructure_map(map__22037);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22037__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22037__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22038){
var map__22039 = p__22038;
var map__22039__$1 = cljs.core.__destructure_map(map__22039);
var svc = map__22039__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
