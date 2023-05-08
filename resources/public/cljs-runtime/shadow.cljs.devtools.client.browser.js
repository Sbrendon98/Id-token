goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22207 = arguments.length;
var i__5770__auto___22208 = (0);
while(true){
if((i__5770__auto___22208 < len__5769__auto___22207)){
args__5775__auto__.push((arguments[i__5770__auto___22208]));

var G__22209 = (i__5770__auto___22208 + (1));
i__5770__auto___22208 = G__22209;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21767){
var G__21768 = cljs.core.first(seq21767);
var seq21767__$1 = cljs.core.next(seq21767);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21768,seq21767__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21776 = cljs.core.seq(sources);
var chunk__21777 = null;
var count__21778 = (0);
var i__21779 = (0);
while(true){
if((i__21779 < count__21778)){
var map__21784 = chunk__21777.cljs$core$IIndexed$_nth$arity$2(null,i__21779);
var map__21784__$1 = cljs.core.__destructure_map(map__21784);
var src = map__21784__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21785){var e_22212 = e21785;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22212);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22212.message)].join('')));
}

var G__22213 = seq__21776;
var G__22214 = chunk__21777;
var G__22215 = count__21778;
var G__22216 = (i__21779 + (1));
seq__21776 = G__22213;
chunk__21777 = G__22214;
count__21778 = G__22215;
i__21779 = G__22216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21776);
if(temp__5804__auto__){
var seq__21776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21776__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21776__$1);
var G__22217 = cljs.core.chunk_rest(seq__21776__$1);
var G__22218 = c__5568__auto__;
var G__22219 = cljs.core.count(c__5568__auto__);
var G__22220 = (0);
seq__21776 = G__22217;
chunk__21777 = G__22218;
count__21778 = G__22219;
i__21779 = G__22220;
continue;
} else {
var map__21786 = cljs.core.first(seq__21776__$1);
var map__21786__$1 = cljs.core.__destructure_map(map__21786);
var src = map__21786__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21787){var e_22223 = e21787;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22223);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22223.message)].join('')));
}

var G__22224 = cljs.core.next(seq__21776__$1);
var G__22225 = null;
var G__22226 = (0);
var G__22227 = (0);
seq__21776 = G__22224;
chunk__21777 = G__22225;
count__21778 = G__22226;
i__21779 = G__22227;
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
var seq__21795 = cljs.core.seq(js_requires);
var chunk__21796 = null;
var count__21797 = (0);
var i__21798 = (0);
while(true){
if((i__21798 < count__21797)){
var js_ns = chunk__21796.cljs$core$IIndexed$_nth$arity$2(null,i__21798);
var require_str_22228 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22228);


var G__22229 = seq__21795;
var G__22230 = chunk__21796;
var G__22231 = count__21797;
var G__22232 = (i__21798 + (1));
seq__21795 = G__22229;
chunk__21796 = G__22230;
count__21797 = G__22231;
i__21798 = G__22232;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21795);
if(temp__5804__auto__){
var seq__21795__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21795__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21795__$1);
var G__22233 = cljs.core.chunk_rest(seq__21795__$1);
var G__22234 = c__5568__auto__;
var G__22235 = cljs.core.count(c__5568__auto__);
var G__22236 = (0);
seq__21795 = G__22233;
chunk__21796 = G__22234;
count__21797 = G__22235;
i__21798 = G__22236;
continue;
} else {
var js_ns = cljs.core.first(seq__21795__$1);
var require_str_22237 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22237);


var G__22238 = cljs.core.next(seq__21795__$1);
var G__22239 = null;
var G__22240 = (0);
var G__22241 = (0);
seq__21795 = G__22238;
chunk__21796 = G__22239;
count__21797 = G__22240;
i__21798 = G__22241;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21806){
var map__21807 = p__21806;
var map__21807__$1 = cljs.core.__destructure_map(map__21807);
var msg = map__21807__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21807__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21807__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21808(s__21809){
return (new cljs.core.LazySeq(null,(function (){
var s__21809__$1 = s__21809;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21809__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21815 = cljs.core.first(xs__6360__auto__);
var map__21815__$1 = cljs.core.__destructure_map(map__21815);
var src = map__21815__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21809__$1,map__21815,map__21815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21807,map__21807__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21808_$_iter__21810(s__21811){
return (new cljs.core.LazySeq(null,((function (s__21809__$1,map__21815,map__21815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21807,map__21807__$1,msg,info,reload_info){
return (function (){
var s__21811__$1 = s__21811;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21811__$1);
if(temp__5804__auto____$1){
var s__21811__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21811__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21811__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21813 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21812 = (0);
while(true){
if((i__21812 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21812);
cljs.core.chunk_append(b__21813,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22244 = (i__21812 + (1));
i__21812 = G__22244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21813),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21808_$_iter__21810(cljs.core.chunk_rest(s__21811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21813),null);
}
} else {
var warning = cljs.core.first(s__21811__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21808_$_iter__21810(cljs.core.rest(s__21811__$2)));
}
} else {
return null;
}
break;
}
});})(s__21809__$1,map__21815,map__21815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21807,map__21807__$1,msg,info,reload_info))
,null,null));
});})(s__21809__$1,map__21815,map__21815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21807,map__21807__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21808(cljs.core.rest(s__21809__$1)));
} else {
var G__22245 = cljs.core.rest(s__21809__$1);
s__21809__$1 = G__22245;
continue;
}
} else {
var G__22246 = cljs.core.rest(s__21809__$1);
s__21809__$1 = G__22246;
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
var seq__21820_22247 = cljs.core.seq(warnings);
var chunk__21821_22248 = null;
var count__21822_22249 = (0);
var i__21823_22250 = (0);
while(true){
if((i__21823_22250 < count__21822_22249)){
var map__21829_22251 = chunk__21821_22248.cljs$core$IIndexed$_nth$arity$2(null,i__21823_22250);
var map__21829_22252__$1 = cljs.core.__destructure_map(map__21829_22251);
var w_22253 = map__21829_22252__$1;
var msg_22254__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829_22252__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829_22252__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829_22252__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829_22252__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22257)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22255),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22256),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22254__$1)].join(''));


var G__22258 = seq__21820_22247;
var G__22259 = chunk__21821_22248;
var G__22260 = count__21822_22249;
var G__22261 = (i__21823_22250 + (1));
seq__21820_22247 = G__22258;
chunk__21821_22248 = G__22259;
count__21822_22249 = G__22260;
i__21823_22250 = G__22261;
continue;
} else {
var temp__5804__auto___22262 = cljs.core.seq(seq__21820_22247);
if(temp__5804__auto___22262){
var seq__21820_22263__$1 = temp__5804__auto___22262;
if(cljs.core.chunked_seq_QMARK_(seq__21820_22263__$1)){
var c__5568__auto___22264 = cljs.core.chunk_first(seq__21820_22263__$1);
var G__22265 = cljs.core.chunk_rest(seq__21820_22263__$1);
var G__22266 = c__5568__auto___22264;
var G__22267 = cljs.core.count(c__5568__auto___22264);
var G__22268 = (0);
seq__21820_22247 = G__22265;
chunk__21821_22248 = G__22266;
count__21822_22249 = G__22267;
i__21823_22250 = G__22268;
continue;
} else {
var map__21830_22269 = cljs.core.first(seq__21820_22263__$1);
var map__21830_22270__$1 = cljs.core.__destructure_map(map__21830_22269);
var w_22271 = map__21830_22270__$1;
var msg_22272__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830_22270__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830_22270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830_22270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830_22270__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22275)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22273),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22274),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22272__$1)].join(''));


var G__22276 = cljs.core.next(seq__21820_22263__$1);
var G__22277 = null;
var G__22278 = (0);
var G__22279 = (0);
seq__21820_22247 = G__22276;
chunk__21821_22248 = G__22277;
count__21822_22249 = G__22278;
i__21823_22250 = G__22279;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21804_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21804_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21832){
var map__21833 = p__21832;
var map__21833__$1 = cljs.core.__destructure_map(map__21833);
var msg = map__21833__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21834 = cljs.core.seq(updates);
var chunk__21837 = null;
var count__21838 = (0);
var i__21839 = (0);
while(true){
if((i__21839 < count__21838)){
var path = chunk__21837.cljs$core$IIndexed$_nth$arity$2(null,i__21839);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22030_22280 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22034_22281 = null;
var count__22035_22282 = (0);
var i__22036_22283 = (0);
while(true){
if((i__22036_22283 < count__22035_22282)){
var node_22284 = chunk__22034_22281.cljs$core$IIndexed$_nth$arity$2(null,i__22036_22283);
if(cljs.core.not(node_22284.shadow$old)){
var path_match_22285 = shadow.cljs.devtools.client.browser.match_paths(node_22284.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22285)){
var new_link_22286 = (function (){var G__22071 = node_22284.cloneNode(true);
G__22071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22285),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22071;
})();
(node_22284.shadow$old = true);

(new_link_22286.onload = ((function (seq__22030_22280,chunk__22034_22281,count__22035_22282,i__22036_22283,seq__21834,chunk__21837,count__21838,i__21839,new_link_22286,path_match_22285,node_22284,path,map__21833,map__21833__$1,msg,updates,reload_info){
return (function (e){
var seq__22075_22287 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22077_22288 = null;
var count__22078_22289 = (0);
var i__22079_22290 = (0);
while(true){
if((i__22079_22290 < count__22078_22289)){
var map__22087_22291 = chunk__22077_22288.cljs$core$IIndexed$_nth$arity$2(null,i__22079_22290);
var map__22087_22292__$1 = cljs.core.__destructure_map(map__22087_22291);
var task_22293 = map__22087_22292__$1;
var fn_str_22294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087_22292__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087_22292__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22296 = goog.getObjectByName(fn_str_22294,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22295)].join(''));

(fn_obj_22296.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22296.cljs$core$IFn$_invoke$arity$2(path,new_link_22286) : fn_obj_22296.call(null,path,new_link_22286));


var G__22297 = seq__22075_22287;
var G__22298 = chunk__22077_22288;
var G__22299 = count__22078_22289;
var G__22300 = (i__22079_22290 + (1));
seq__22075_22287 = G__22297;
chunk__22077_22288 = G__22298;
count__22078_22289 = G__22299;
i__22079_22290 = G__22300;
continue;
} else {
var temp__5804__auto___22301 = cljs.core.seq(seq__22075_22287);
if(temp__5804__auto___22301){
var seq__22075_22302__$1 = temp__5804__auto___22301;
if(cljs.core.chunked_seq_QMARK_(seq__22075_22302__$1)){
var c__5568__auto___22303 = cljs.core.chunk_first(seq__22075_22302__$1);
var G__22304 = cljs.core.chunk_rest(seq__22075_22302__$1);
var G__22305 = c__5568__auto___22303;
var G__22306 = cljs.core.count(c__5568__auto___22303);
var G__22307 = (0);
seq__22075_22287 = G__22304;
chunk__22077_22288 = G__22305;
count__22078_22289 = G__22306;
i__22079_22290 = G__22307;
continue;
} else {
var map__22088_22308 = cljs.core.first(seq__22075_22302__$1);
var map__22088_22309__$1 = cljs.core.__destructure_map(map__22088_22308);
var task_22310 = map__22088_22309__$1;
var fn_str_22311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22088_22309__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22088_22309__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22313 = goog.getObjectByName(fn_str_22311,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22312)].join(''));

(fn_obj_22313.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22313.cljs$core$IFn$_invoke$arity$2(path,new_link_22286) : fn_obj_22313.call(null,path,new_link_22286));


var G__22314 = cljs.core.next(seq__22075_22302__$1);
var G__22315 = null;
var G__22316 = (0);
var G__22317 = (0);
seq__22075_22287 = G__22314;
chunk__22077_22288 = G__22315;
count__22078_22289 = G__22316;
i__22079_22290 = G__22317;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22284);
});})(seq__22030_22280,chunk__22034_22281,count__22035_22282,i__22036_22283,seq__21834,chunk__21837,count__21838,i__21839,new_link_22286,path_match_22285,node_22284,path,map__21833,map__21833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22285], 0));

goog.dom.insertSiblingAfter(new_link_22286,node_22284);


var G__22318 = seq__22030_22280;
var G__22319 = chunk__22034_22281;
var G__22320 = count__22035_22282;
var G__22321 = (i__22036_22283 + (1));
seq__22030_22280 = G__22318;
chunk__22034_22281 = G__22319;
count__22035_22282 = G__22320;
i__22036_22283 = G__22321;
continue;
} else {
var G__22322 = seq__22030_22280;
var G__22323 = chunk__22034_22281;
var G__22324 = count__22035_22282;
var G__22325 = (i__22036_22283 + (1));
seq__22030_22280 = G__22322;
chunk__22034_22281 = G__22323;
count__22035_22282 = G__22324;
i__22036_22283 = G__22325;
continue;
}
} else {
var G__22326 = seq__22030_22280;
var G__22327 = chunk__22034_22281;
var G__22328 = count__22035_22282;
var G__22329 = (i__22036_22283 + (1));
seq__22030_22280 = G__22326;
chunk__22034_22281 = G__22327;
count__22035_22282 = G__22328;
i__22036_22283 = G__22329;
continue;
}
} else {
var temp__5804__auto___22330 = cljs.core.seq(seq__22030_22280);
if(temp__5804__auto___22330){
var seq__22030_22331__$1 = temp__5804__auto___22330;
if(cljs.core.chunked_seq_QMARK_(seq__22030_22331__$1)){
var c__5568__auto___22332 = cljs.core.chunk_first(seq__22030_22331__$1);
var G__22333 = cljs.core.chunk_rest(seq__22030_22331__$1);
var G__22334 = c__5568__auto___22332;
var G__22335 = cljs.core.count(c__5568__auto___22332);
var G__22336 = (0);
seq__22030_22280 = G__22333;
chunk__22034_22281 = G__22334;
count__22035_22282 = G__22335;
i__22036_22283 = G__22336;
continue;
} else {
var node_22337 = cljs.core.first(seq__22030_22331__$1);
if(cljs.core.not(node_22337.shadow$old)){
var path_match_22338 = shadow.cljs.devtools.client.browser.match_paths(node_22337.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22338)){
var new_link_22339 = (function (){var G__22089 = node_22337.cloneNode(true);
G__22089.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22338),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22089;
})();
(node_22337.shadow$old = true);

(new_link_22339.onload = ((function (seq__22030_22280,chunk__22034_22281,count__22035_22282,i__22036_22283,seq__21834,chunk__21837,count__21838,i__21839,new_link_22339,path_match_22338,node_22337,seq__22030_22331__$1,temp__5804__auto___22330,path,map__21833,map__21833__$1,msg,updates,reload_info){
return (function (e){
var seq__22090_22340 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22092_22341 = null;
var count__22093_22342 = (0);
var i__22094_22343 = (0);
while(true){
if((i__22094_22343 < count__22093_22342)){
var map__22100_22344 = chunk__22092_22341.cljs$core$IIndexed$_nth$arity$2(null,i__22094_22343);
var map__22100_22345__$1 = cljs.core.__destructure_map(map__22100_22344);
var task_22346 = map__22100_22345__$1;
var fn_str_22347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100_22345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100_22345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22349 = goog.getObjectByName(fn_str_22347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22348)].join(''));

(fn_obj_22349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22349.cljs$core$IFn$_invoke$arity$2(path,new_link_22339) : fn_obj_22349.call(null,path,new_link_22339));


var G__22350 = seq__22090_22340;
var G__22351 = chunk__22092_22341;
var G__22352 = count__22093_22342;
var G__22353 = (i__22094_22343 + (1));
seq__22090_22340 = G__22350;
chunk__22092_22341 = G__22351;
count__22093_22342 = G__22352;
i__22094_22343 = G__22353;
continue;
} else {
var temp__5804__auto___22354__$1 = cljs.core.seq(seq__22090_22340);
if(temp__5804__auto___22354__$1){
var seq__22090_22355__$1 = temp__5804__auto___22354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22090_22355__$1)){
var c__5568__auto___22356 = cljs.core.chunk_first(seq__22090_22355__$1);
var G__22357 = cljs.core.chunk_rest(seq__22090_22355__$1);
var G__22358 = c__5568__auto___22356;
var G__22359 = cljs.core.count(c__5568__auto___22356);
var G__22360 = (0);
seq__22090_22340 = G__22357;
chunk__22092_22341 = G__22358;
count__22093_22342 = G__22359;
i__22094_22343 = G__22360;
continue;
} else {
var map__22102_22361 = cljs.core.first(seq__22090_22355__$1);
var map__22102_22362__$1 = cljs.core.__destructure_map(map__22102_22361);
var task_22363 = map__22102_22362__$1;
var fn_str_22364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22102_22362__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22102_22362__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22366 = goog.getObjectByName(fn_str_22364,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22365)].join(''));

(fn_obj_22366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22366.cljs$core$IFn$_invoke$arity$2(path,new_link_22339) : fn_obj_22366.call(null,path,new_link_22339));


var G__22367 = cljs.core.next(seq__22090_22355__$1);
var G__22368 = null;
var G__22369 = (0);
var G__22370 = (0);
seq__22090_22340 = G__22367;
chunk__22092_22341 = G__22368;
count__22093_22342 = G__22369;
i__22094_22343 = G__22370;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22337);
});})(seq__22030_22280,chunk__22034_22281,count__22035_22282,i__22036_22283,seq__21834,chunk__21837,count__21838,i__21839,new_link_22339,path_match_22338,node_22337,seq__22030_22331__$1,temp__5804__auto___22330,path,map__21833,map__21833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22338], 0));

goog.dom.insertSiblingAfter(new_link_22339,node_22337);


var G__22371 = cljs.core.next(seq__22030_22331__$1);
var G__22372 = null;
var G__22373 = (0);
var G__22374 = (0);
seq__22030_22280 = G__22371;
chunk__22034_22281 = G__22372;
count__22035_22282 = G__22373;
i__22036_22283 = G__22374;
continue;
} else {
var G__22375 = cljs.core.next(seq__22030_22331__$1);
var G__22376 = null;
var G__22377 = (0);
var G__22378 = (0);
seq__22030_22280 = G__22375;
chunk__22034_22281 = G__22376;
count__22035_22282 = G__22377;
i__22036_22283 = G__22378;
continue;
}
} else {
var G__22379 = cljs.core.next(seq__22030_22331__$1);
var G__22380 = null;
var G__22381 = (0);
var G__22382 = (0);
seq__22030_22280 = G__22379;
chunk__22034_22281 = G__22380;
count__22035_22282 = G__22381;
i__22036_22283 = G__22382;
continue;
}
}
} else {
}
}
break;
}


var G__22383 = seq__21834;
var G__22384 = chunk__21837;
var G__22385 = count__21838;
var G__22386 = (i__21839 + (1));
seq__21834 = G__22383;
chunk__21837 = G__22384;
count__21838 = G__22385;
i__21839 = G__22386;
continue;
} else {
var G__22387 = seq__21834;
var G__22388 = chunk__21837;
var G__22389 = count__21838;
var G__22390 = (i__21839 + (1));
seq__21834 = G__22387;
chunk__21837 = G__22388;
count__21838 = G__22389;
i__21839 = G__22390;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21834);
if(temp__5804__auto__){
var seq__21834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21834__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21834__$1);
var G__22391 = cljs.core.chunk_rest(seq__21834__$1);
var G__22392 = c__5568__auto__;
var G__22393 = cljs.core.count(c__5568__auto__);
var G__22394 = (0);
seq__21834 = G__22391;
chunk__21837 = G__22392;
count__21838 = G__22393;
i__21839 = G__22394;
continue;
} else {
var path = cljs.core.first(seq__21834__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22104_22395 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22108_22396 = null;
var count__22109_22397 = (0);
var i__22110_22398 = (0);
while(true){
if((i__22110_22398 < count__22109_22397)){
var node_22399 = chunk__22108_22396.cljs$core$IIndexed$_nth$arity$2(null,i__22110_22398);
if(cljs.core.not(node_22399.shadow$old)){
var path_match_22400 = shadow.cljs.devtools.client.browser.match_paths(node_22399.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22400)){
var new_link_22401 = (function (){var G__22143 = node_22399.cloneNode(true);
G__22143.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22400),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22143;
})();
(node_22399.shadow$old = true);

(new_link_22401.onload = ((function (seq__22104_22395,chunk__22108_22396,count__22109_22397,i__22110_22398,seq__21834,chunk__21837,count__21838,i__21839,new_link_22401,path_match_22400,node_22399,path,seq__21834__$1,temp__5804__auto__,map__21833,map__21833__$1,msg,updates,reload_info){
return (function (e){
var seq__22144_22402 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22146_22403 = null;
var count__22147_22404 = (0);
var i__22148_22405 = (0);
while(true){
if((i__22148_22405 < count__22147_22404)){
var map__22152_22406 = chunk__22146_22403.cljs$core$IIndexed$_nth$arity$2(null,i__22148_22405);
var map__22152_22407__$1 = cljs.core.__destructure_map(map__22152_22406);
var task_22408 = map__22152_22407__$1;
var fn_str_22409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152_22407__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152_22407__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22411 = goog.getObjectByName(fn_str_22409,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22410)].join(''));

(fn_obj_22411.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22411.cljs$core$IFn$_invoke$arity$2(path,new_link_22401) : fn_obj_22411.call(null,path,new_link_22401));


var G__22412 = seq__22144_22402;
var G__22413 = chunk__22146_22403;
var G__22414 = count__22147_22404;
var G__22415 = (i__22148_22405 + (1));
seq__22144_22402 = G__22412;
chunk__22146_22403 = G__22413;
count__22147_22404 = G__22414;
i__22148_22405 = G__22415;
continue;
} else {
var temp__5804__auto___22417__$1 = cljs.core.seq(seq__22144_22402);
if(temp__5804__auto___22417__$1){
var seq__22144_22418__$1 = temp__5804__auto___22417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22144_22418__$1)){
var c__5568__auto___22419 = cljs.core.chunk_first(seq__22144_22418__$1);
var G__22420 = cljs.core.chunk_rest(seq__22144_22418__$1);
var G__22421 = c__5568__auto___22419;
var G__22422 = cljs.core.count(c__5568__auto___22419);
var G__22423 = (0);
seq__22144_22402 = G__22420;
chunk__22146_22403 = G__22421;
count__22147_22404 = G__22422;
i__22148_22405 = G__22423;
continue;
} else {
var map__22153_22424 = cljs.core.first(seq__22144_22418__$1);
var map__22153_22425__$1 = cljs.core.__destructure_map(map__22153_22424);
var task_22426 = map__22153_22425__$1;
var fn_str_22427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153_22425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153_22425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22429 = goog.getObjectByName(fn_str_22427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22428)].join(''));

(fn_obj_22429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22429.cljs$core$IFn$_invoke$arity$2(path,new_link_22401) : fn_obj_22429.call(null,path,new_link_22401));


var G__22430 = cljs.core.next(seq__22144_22418__$1);
var G__22431 = null;
var G__22432 = (0);
var G__22433 = (0);
seq__22144_22402 = G__22430;
chunk__22146_22403 = G__22431;
count__22147_22404 = G__22432;
i__22148_22405 = G__22433;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22399);
});})(seq__22104_22395,chunk__22108_22396,count__22109_22397,i__22110_22398,seq__21834,chunk__21837,count__21838,i__21839,new_link_22401,path_match_22400,node_22399,path,seq__21834__$1,temp__5804__auto__,map__21833,map__21833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22400], 0));

goog.dom.insertSiblingAfter(new_link_22401,node_22399);


var G__22434 = seq__22104_22395;
var G__22435 = chunk__22108_22396;
var G__22436 = count__22109_22397;
var G__22437 = (i__22110_22398 + (1));
seq__22104_22395 = G__22434;
chunk__22108_22396 = G__22435;
count__22109_22397 = G__22436;
i__22110_22398 = G__22437;
continue;
} else {
var G__22438 = seq__22104_22395;
var G__22439 = chunk__22108_22396;
var G__22440 = count__22109_22397;
var G__22441 = (i__22110_22398 + (1));
seq__22104_22395 = G__22438;
chunk__22108_22396 = G__22439;
count__22109_22397 = G__22440;
i__22110_22398 = G__22441;
continue;
}
} else {
var G__22442 = seq__22104_22395;
var G__22443 = chunk__22108_22396;
var G__22444 = count__22109_22397;
var G__22445 = (i__22110_22398 + (1));
seq__22104_22395 = G__22442;
chunk__22108_22396 = G__22443;
count__22109_22397 = G__22444;
i__22110_22398 = G__22445;
continue;
}
} else {
var temp__5804__auto___22446__$1 = cljs.core.seq(seq__22104_22395);
if(temp__5804__auto___22446__$1){
var seq__22104_22447__$1 = temp__5804__auto___22446__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22104_22447__$1)){
var c__5568__auto___22448 = cljs.core.chunk_first(seq__22104_22447__$1);
var G__22449 = cljs.core.chunk_rest(seq__22104_22447__$1);
var G__22450 = c__5568__auto___22448;
var G__22451 = cljs.core.count(c__5568__auto___22448);
var G__22452 = (0);
seq__22104_22395 = G__22449;
chunk__22108_22396 = G__22450;
count__22109_22397 = G__22451;
i__22110_22398 = G__22452;
continue;
} else {
var node_22453 = cljs.core.first(seq__22104_22447__$1);
if(cljs.core.not(node_22453.shadow$old)){
var path_match_22454 = shadow.cljs.devtools.client.browser.match_paths(node_22453.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22454)){
var new_link_22455 = (function (){var G__22154 = node_22453.cloneNode(true);
G__22154.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22454),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22154;
})();
(node_22453.shadow$old = true);

(new_link_22455.onload = ((function (seq__22104_22395,chunk__22108_22396,count__22109_22397,i__22110_22398,seq__21834,chunk__21837,count__21838,i__21839,new_link_22455,path_match_22454,node_22453,seq__22104_22447__$1,temp__5804__auto___22446__$1,path,seq__21834__$1,temp__5804__auto__,map__21833,map__21833__$1,msg,updates,reload_info){
return (function (e){
var seq__22155_22458 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22157_22459 = null;
var count__22158_22460 = (0);
var i__22159_22461 = (0);
while(true){
if((i__22159_22461 < count__22158_22460)){
var map__22169_22463 = chunk__22157_22459.cljs$core$IIndexed$_nth$arity$2(null,i__22159_22461);
var map__22169_22464__$1 = cljs.core.__destructure_map(map__22169_22463);
var task_22465 = map__22169_22464__$1;
var fn_str_22466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22169_22464__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22169_22464__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22468 = goog.getObjectByName(fn_str_22466,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22467)].join(''));

(fn_obj_22468.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22468.cljs$core$IFn$_invoke$arity$2(path,new_link_22455) : fn_obj_22468.call(null,path,new_link_22455));


var G__22469 = seq__22155_22458;
var G__22470 = chunk__22157_22459;
var G__22471 = count__22158_22460;
var G__22472 = (i__22159_22461 + (1));
seq__22155_22458 = G__22469;
chunk__22157_22459 = G__22470;
count__22158_22460 = G__22471;
i__22159_22461 = G__22472;
continue;
} else {
var temp__5804__auto___22473__$2 = cljs.core.seq(seq__22155_22458);
if(temp__5804__auto___22473__$2){
var seq__22155_22474__$1 = temp__5804__auto___22473__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22155_22474__$1)){
var c__5568__auto___22475 = cljs.core.chunk_first(seq__22155_22474__$1);
var G__22476 = cljs.core.chunk_rest(seq__22155_22474__$1);
var G__22477 = c__5568__auto___22475;
var G__22478 = cljs.core.count(c__5568__auto___22475);
var G__22479 = (0);
seq__22155_22458 = G__22476;
chunk__22157_22459 = G__22477;
count__22158_22460 = G__22478;
i__22159_22461 = G__22479;
continue;
} else {
var map__22170_22480 = cljs.core.first(seq__22155_22474__$1);
var map__22170_22481__$1 = cljs.core.__destructure_map(map__22170_22480);
var task_22482 = map__22170_22481__$1;
var fn_str_22483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22170_22481__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22170_22481__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22485 = goog.getObjectByName(fn_str_22483,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22484)].join(''));

(fn_obj_22485.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22485.cljs$core$IFn$_invoke$arity$2(path,new_link_22455) : fn_obj_22485.call(null,path,new_link_22455));


var G__22486 = cljs.core.next(seq__22155_22474__$1);
var G__22487 = null;
var G__22488 = (0);
var G__22489 = (0);
seq__22155_22458 = G__22486;
chunk__22157_22459 = G__22487;
count__22158_22460 = G__22488;
i__22159_22461 = G__22489;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22453);
});})(seq__22104_22395,chunk__22108_22396,count__22109_22397,i__22110_22398,seq__21834,chunk__21837,count__21838,i__21839,new_link_22455,path_match_22454,node_22453,seq__22104_22447__$1,temp__5804__auto___22446__$1,path,seq__21834__$1,temp__5804__auto__,map__21833,map__21833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22454], 0));

goog.dom.insertSiblingAfter(new_link_22455,node_22453);


var G__22490 = cljs.core.next(seq__22104_22447__$1);
var G__22491 = null;
var G__22492 = (0);
var G__22493 = (0);
seq__22104_22395 = G__22490;
chunk__22108_22396 = G__22491;
count__22109_22397 = G__22492;
i__22110_22398 = G__22493;
continue;
} else {
var G__22494 = cljs.core.next(seq__22104_22447__$1);
var G__22495 = null;
var G__22496 = (0);
var G__22497 = (0);
seq__22104_22395 = G__22494;
chunk__22108_22396 = G__22495;
count__22109_22397 = G__22496;
i__22110_22398 = G__22497;
continue;
}
} else {
var G__22498 = cljs.core.next(seq__22104_22447__$1);
var G__22499 = null;
var G__22500 = (0);
var G__22501 = (0);
seq__22104_22395 = G__22498;
chunk__22108_22396 = G__22499;
count__22109_22397 = G__22500;
i__22110_22398 = G__22501;
continue;
}
}
} else {
}
}
break;
}


var G__22502 = cljs.core.next(seq__21834__$1);
var G__22503 = null;
var G__22504 = (0);
var G__22505 = (0);
seq__21834 = G__22502;
chunk__21837 = G__22503;
count__21838 = G__22504;
i__21839 = G__22505;
continue;
} else {
var G__22506 = cljs.core.next(seq__21834__$1);
var G__22507 = null;
var G__22508 = (0);
var G__22509 = (0);
seq__21834 = G__22506;
chunk__21837 = G__22507;
count__21838 = G__22508;
i__21839 = G__22509;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22178){
var map__22179 = p__22178;
var map__22179__$1 = cljs.core.__destructure_map(map__22179);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22179__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22184,done,error){
var map__22185 = p__22184;
var map__22185__$1 = cljs.core.__destructure_map(map__22185);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22186,done,error){
var map__22187 = p__22186;
var map__22187__$1 = cljs.core.__destructure_map(map__22187);
var msg = map__22187__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22187__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22187__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22187__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22188){
var map__22189 = p__22188;
var map__22189__$1 = cljs.core.__destructure_map(map__22189);
var src = map__22189__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22190 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22190) : done.call(null,G__22190));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22192){
var map__22193 = p__22192;
var map__22193__$1 = cljs.core.__destructure_map(map__22193);
var msg__$1 = map__22193__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22193__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22194){var ex = e22194;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22195){
var map__22196 = p__22195;
var map__22196__$1 = cljs.core.__destructure_map(map__22196);
var env = map__22196__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22203){
var map__22204 = p__22203;
var map__22204__$1 = cljs.core.__destructure_map(map__22204);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__22205){
var map__22206 = p__22205;
var map__22206__$1 = cljs.core.__destructure_map(map__22206);
var svc = map__22206__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22206__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
