goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20161){
var map__20162 = p__20161;
var map__20162__$1 = cljs.core.__destructure_map(map__20162);
var m = map__20162__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20163_20263 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20164_20264 = null;
var count__20165_20265 = (0);
var i__20166_20266 = (0);
while(true){
if((i__20166_20266 < count__20165_20265)){
var f_20267 = chunk__20164_20264.cljs$core$IIndexed$_nth$arity$2(null,i__20166_20266);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20267], 0));


var G__20268 = seq__20163_20263;
var G__20269 = chunk__20164_20264;
var G__20270 = count__20165_20265;
var G__20271 = (i__20166_20266 + (1));
seq__20163_20263 = G__20268;
chunk__20164_20264 = G__20269;
count__20165_20265 = G__20270;
i__20166_20266 = G__20271;
continue;
} else {
var temp__5804__auto___20272 = cljs.core.seq(seq__20163_20263);
if(temp__5804__auto___20272){
var seq__20163_20273__$1 = temp__5804__auto___20272;
if(cljs.core.chunked_seq_QMARK_(seq__20163_20273__$1)){
var c__5568__auto___20274 = cljs.core.chunk_first(seq__20163_20273__$1);
var G__20275 = cljs.core.chunk_rest(seq__20163_20273__$1);
var G__20276 = c__5568__auto___20274;
var G__20277 = cljs.core.count(c__5568__auto___20274);
var G__20278 = (0);
seq__20163_20263 = G__20275;
chunk__20164_20264 = G__20276;
count__20165_20265 = G__20277;
i__20166_20266 = G__20278;
continue;
} else {
var f_20279 = cljs.core.first(seq__20163_20273__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20279], 0));


var G__20280 = cljs.core.next(seq__20163_20273__$1);
var G__20281 = null;
var G__20282 = (0);
var G__20283 = (0);
seq__20163_20263 = G__20280;
chunk__20164_20264 = G__20281;
count__20165_20265 = G__20282;
i__20166_20266 = G__20283;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20284], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20284)))?cljs.core.second(arglists_20284):arglists_20284)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20167_20285 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20168_20286 = null;
var count__20169_20287 = (0);
var i__20170_20288 = (0);
while(true){
if((i__20170_20288 < count__20169_20287)){
var vec__20179_20289 = chunk__20168_20286.cljs$core$IIndexed$_nth$arity$2(null,i__20170_20288);
var name_20290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20179_20289,(0),null);
var map__20182_20291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20179_20289,(1),null);
var map__20182_20292__$1 = cljs.core.__destructure_map(map__20182_20291);
var doc_20293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182_20292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182_20292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20290], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20294], 0));

if(cljs.core.truth_(doc_20293)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20293], 0));
} else {
}


var G__20295 = seq__20167_20285;
var G__20296 = chunk__20168_20286;
var G__20297 = count__20169_20287;
var G__20298 = (i__20170_20288 + (1));
seq__20167_20285 = G__20295;
chunk__20168_20286 = G__20296;
count__20169_20287 = G__20297;
i__20170_20288 = G__20298;
continue;
} else {
var temp__5804__auto___20299 = cljs.core.seq(seq__20167_20285);
if(temp__5804__auto___20299){
var seq__20167_20300__$1 = temp__5804__auto___20299;
if(cljs.core.chunked_seq_QMARK_(seq__20167_20300__$1)){
var c__5568__auto___20301 = cljs.core.chunk_first(seq__20167_20300__$1);
var G__20302 = cljs.core.chunk_rest(seq__20167_20300__$1);
var G__20303 = c__5568__auto___20301;
var G__20304 = cljs.core.count(c__5568__auto___20301);
var G__20305 = (0);
seq__20167_20285 = G__20302;
chunk__20168_20286 = G__20303;
count__20169_20287 = G__20304;
i__20170_20288 = G__20305;
continue;
} else {
var vec__20183_20306 = cljs.core.first(seq__20167_20300__$1);
var name_20307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183_20306,(0),null);
var map__20186_20308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183_20306,(1),null);
var map__20186_20309__$1 = cljs.core.__destructure_map(map__20186_20308);
var doc_20310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20186_20309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20186_20309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20307], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20311], 0));

if(cljs.core.truth_(doc_20310)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20310], 0));
} else {
}


var G__20312 = cljs.core.next(seq__20167_20300__$1);
var G__20313 = null;
var G__20314 = (0);
var G__20315 = (0);
seq__20167_20285 = G__20312;
chunk__20168_20286 = G__20313;
count__20169_20287 = G__20314;
i__20170_20288 = G__20315;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20187 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20188 = null;
var count__20189 = (0);
var i__20190 = (0);
while(true){
if((i__20190 < count__20189)){
var role = chunk__20188.cljs$core$IIndexed$_nth$arity$2(null,i__20190);
var temp__5804__auto___20316__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20316__$1)){
var spec_20317 = temp__5804__auto___20316__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20317)], 0));
} else {
}


var G__20318 = seq__20187;
var G__20319 = chunk__20188;
var G__20320 = count__20189;
var G__20321 = (i__20190 + (1));
seq__20187 = G__20318;
chunk__20188 = G__20319;
count__20189 = G__20320;
i__20190 = G__20321;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20187);
if(temp__5804__auto____$1){
var seq__20187__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20187__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20187__$1);
var G__20322 = cljs.core.chunk_rest(seq__20187__$1);
var G__20323 = c__5568__auto__;
var G__20324 = cljs.core.count(c__5568__auto__);
var G__20325 = (0);
seq__20187 = G__20322;
chunk__20188 = G__20323;
count__20189 = G__20324;
i__20190 = G__20325;
continue;
} else {
var role = cljs.core.first(seq__20187__$1);
var temp__5804__auto___20326__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20326__$2)){
var spec_20327 = temp__5804__auto___20326__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20327)], 0));
} else {
}


var G__20328 = cljs.core.next(seq__20187__$1);
var G__20329 = null;
var G__20330 = (0);
var G__20331 = (0);
seq__20187 = G__20328;
chunk__20188 = G__20329;
count__20189 = G__20330;
i__20190 = G__20331;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20333 = cljs.core.ex_cause(t);
via = G__20332;
t = G__20333;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20193 = datafied_throwable;
var map__20193__$1 = cljs.core.__destructure_map(map__20193);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20193__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20193__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20194 = cljs.core.last(via);
var map__20194__$1 = cljs.core.__destructure_map(map__20194);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20194__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20194__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20194__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20195 = data;
var map__20195__$1 = cljs.core.__destructure_map(map__20195);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20195__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20195__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20195__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20196 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20196__$1 = cljs.core.__destructure_map(map__20196);
var top_data = map__20196__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20196__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20200 = phase;
var G__20200__$1 = (((G__20200 instanceof cljs.core.Keyword))?G__20200.fqn:null);
switch (G__20200__$1) {
case "read-source":
var map__20201 = data;
var map__20201__$1 = cljs.core.__destructure_map(map__20201);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20202 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20202__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20202,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20202);
var G__20202__$2 = (cljs.core.truth_((function (){var fexpr__20203 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20203.cljs$core$IFn$_invoke$arity$1 ? fexpr__20203.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20203.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20202__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20202__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20202__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20202__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20204 = top_data;
var G__20204__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20204,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20204);
var G__20204__$2 = (cljs.core.truth_((function (){var fexpr__20205 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20205.cljs$core$IFn$_invoke$arity$1 ? fexpr__20205.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20205.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20204__$1);
var G__20204__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20204__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20204__$2);
var G__20204__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20204__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20204__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20204__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20204__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20206 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(3),null);
var G__20209 = top_data;
var G__20209__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20209);
var G__20209__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20209__$1);
var G__20209__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20209__$2);
var G__20209__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20209__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20209__$4;
}

break;
case "execution":
var vec__20214 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20192_SHARP_){
var or__5045__auto__ = (p1__20192_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20217.cljs$core$IFn$_invoke$arity$1 ? fexpr__20217.cljs$core$IFn$_invoke$arity$1(p1__20192_SHARP_) : fexpr__20217.call(null,p1__20192_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20221 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20221__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20221,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20221);
var G__20221__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20221__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20221__$1);
var G__20221__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20221__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20221__$2);
var G__20221__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20221__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20221__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20221__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20221__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20200__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20224){
var map__20225 = p__20224;
var map__20225__$1 = cljs.core.__destructure_map(map__20225);
var triage_data = map__20225__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20226 = phase;
var G__20226__$1 = (((G__20226 instanceof cljs.core.Keyword))?G__20226.fqn:null);
switch (G__20226__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20227 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20228 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20229 = loc;
var G__20230 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20231_20339 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20232_20340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20233_20341 = true;
var _STAR_print_fn_STAR__temp_val__20234_20342 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20233_20341);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20234_20342);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20222_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20222_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20232_20340);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20231_20339);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20227,G__20228,G__20229,G__20230) : format.call(null,G__20227,G__20228,G__20229,G__20230));

break;
case "macroexpansion":
var G__20235 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20236 = cause_type;
var G__20237 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20238 = loc;
var G__20239 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20235,G__20236,G__20237,G__20238,G__20239) : format.call(null,G__20235,G__20236,G__20237,G__20238,G__20239));

break;
case "compile-syntax-check":
var G__20240 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20241 = cause_type;
var G__20242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20243 = loc;
var G__20244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20240,G__20241,G__20242,G__20243,G__20244) : format.call(null,G__20240,G__20241,G__20242,G__20243,G__20244));

break;
case "compilation":
var G__20245 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20246 = cause_type;
var G__20247 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20248 = loc;
var G__20249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20245,G__20246,G__20247,G__20248,G__20249) : format.call(null,G__20245,G__20246,G__20247,G__20248,G__20249));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20250 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20251 = symbol;
var G__20252 = loc;
var G__20253 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20254_20343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20255_20344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20256_20345 = true;
var _STAR_print_fn_STAR__temp_val__20257_20346 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20256_20345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20257_20346);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20223_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20223_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20255_20344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20254_20343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20250,G__20251,G__20252,G__20253) : format.call(null,G__20250,G__20251,G__20252,G__20253));
} else {
var G__20258 = "Execution error%s at %s(%s).\n%s\n";
var G__20259 = cause_type;
var G__20260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20261 = loc;
var G__20262 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20258,G__20259,G__20260,G__20261,G__20262) : format.call(null,G__20258,G__20259,G__20260,G__20261,G__20262));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20226__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
