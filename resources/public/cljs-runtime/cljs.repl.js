goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19885){
var map__19886 = p__19885;
var map__19886__$1 = cljs.core.__destructure_map(map__19886);
var m = map__19886__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19886__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19906_20198 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19907_20199 = null;
var count__19908_20200 = (0);
var i__19909_20201 = (0);
while(true){
if((i__19909_20201 < count__19908_20200)){
var f_20203 = chunk__19907_20199.cljs$core$IIndexed$_nth$arity$2(null,i__19909_20201);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20203], 0));


var G__20204 = seq__19906_20198;
var G__20205 = chunk__19907_20199;
var G__20206 = count__19908_20200;
var G__20207 = (i__19909_20201 + (1));
seq__19906_20198 = G__20204;
chunk__19907_20199 = G__20205;
count__19908_20200 = G__20206;
i__19909_20201 = G__20207;
continue;
} else {
var temp__5804__auto___20208 = cljs.core.seq(seq__19906_20198);
if(temp__5804__auto___20208){
var seq__19906_20209__$1 = temp__5804__auto___20208;
if(cljs.core.chunked_seq_QMARK_(seq__19906_20209__$1)){
var c__5568__auto___20210 = cljs.core.chunk_first(seq__19906_20209__$1);
var G__20212 = cljs.core.chunk_rest(seq__19906_20209__$1);
var G__20213 = c__5568__auto___20210;
var G__20214 = cljs.core.count(c__5568__auto___20210);
var G__20215 = (0);
seq__19906_20198 = G__20212;
chunk__19907_20199 = G__20213;
count__19908_20200 = G__20214;
i__19909_20201 = G__20215;
continue;
} else {
var f_20216 = cljs.core.first(seq__19906_20209__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20216], 0));


var G__20221 = cljs.core.next(seq__19906_20209__$1);
var G__20222 = null;
var G__20223 = (0);
var G__20224 = (0);
seq__19906_20198 = G__20221;
chunk__19907_20199 = G__20222;
count__19908_20200 = G__20223;
i__19909_20201 = G__20224;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20225 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20225], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20225)))?cljs.core.second(arglists_20225):arglists_20225)], 0));
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
var seq__19932_20232 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19933_20233 = null;
var count__19934_20234 = (0);
var i__19935_20235 = (0);
while(true){
if((i__19935_20235 < count__19934_20234)){
var vec__19951_20237 = chunk__19933_20233.cljs$core$IIndexed$_nth$arity$2(null,i__19935_20235);
var name_20238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951_20237,(0),null);
var map__19954_20239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951_20237,(1),null);
var map__19954_20240__$1 = cljs.core.__destructure_map(map__19954_20239);
var doc_20241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19954_20240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19954_20240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20238], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20242], 0));

if(cljs.core.truth_(doc_20241)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20241], 0));
} else {
}


var G__20243 = seq__19932_20232;
var G__20244 = chunk__19933_20233;
var G__20245 = count__19934_20234;
var G__20246 = (i__19935_20235 + (1));
seq__19932_20232 = G__20243;
chunk__19933_20233 = G__20244;
count__19934_20234 = G__20245;
i__19935_20235 = G__20246;
continue;
} else {
var temp__5804__auto___20247 = cljs.core.seq(seq__19932_20232);
if(temp__5804__auto___20247){
var seq__19932_20249__$1 = temp__5804__auto___20247;
if(cljs.core.chunked_seq_QMARK_(seq__19932_20249__$1)){
var c__5568__auto___20251 = cljs.core.chunk_first(seq__19932_20249__$1);
var G__20252 = cljs.core.chunk_rest(seq__19932_20249__$1);
var G__20253 = c__5568__auto___20251;
var G__20254 = cljs.core.count(c__5568__auto___20251);
var G__20255 = (0);
seq__19932_20232 = G__20252;
chunk__19933_20233 = G__20253;
count__19934_20234 = G__20254;
i__19935_20235 = G__20255;
continue;
} else {
var vec__19956_20257 = cljs.core.first(seq__19932_20249__$1);
var name_20258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956_20257,(0),null);
var map__19959_20259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956_20257,(1),null);
var map__19959_20260__$1 = cljs.core.__destructure_map(map__19959_20259);
var doc_20261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959_20260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959_20260__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20258], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20262], 0));

if(cljs.core.truth_(doc_20261)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20261], 0));
} else {
}


var G__20274 = cljs.core.next(seq__19932_20249__$1);
var G__20275 = null;
var G__20276 = (0);
var G__20277 = (0);
seq__19932_20232 = G__20274;
chunk__19933_20233 = G__20275;
count__19934_20234 = G__20276;
i__19935_20235 = G__20277;
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

var seq__19961 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19962 = null;
var count__19963 = (0);
var i__19964 = (0);
while(true){
if((i__19964 < count__19963)){
var role = chunk__19962.cljs$core$IIndexed$_nth$arity$2(null,i__19964);
var temp__5804__auto___20293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20293__$1)){
var spec_20294 = temp__5804__auto___20293__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20294)], 0));
} else {
}


var G__20296 = seq__19961;
var G__20297 = chunk__19962;
var G__20298 = count__19963;
var G__20299 = (i__19964 + (1));
seq__19961 = G__20296;
chunk__19962 = G__20297;
count__19963 = G__20298;
i__19964 = G__20299;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19961);
if(temp__5804__auto____$1){
var seq__19961__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19961__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19961__$1);
var G__20300 = cljs.core.chunk_rest(seq__19961__$1);
var G__20301 = c__5568__auto__;
var G__20302 = cljs.core.count(c__5568__auto__);
var G__20303 = (0);
seq__19961 = G__20300;
chunk__19962 = G__20301;
count__19963 = G__20302;
i__19964 = G__20303;
continue;
} else {
var role = cljs.core.first(seq__19961__$1);
var temp__5804__auto___20308__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20308__$2)){
var spec_20310 = temp__5804__auto___20308__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20310)], 0));
} else {
}


var G__20313 = cljs.core.next(seq__19961__$1);
var G__20314 = null;
var G__20315 = (0);
var G__20316 = (0);
seq__19961 = G__20313;
chunk__19962 = G__20314;
count__19963 = G__20315;
i__19964 = G__20316;
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
var G__20335 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20336 = cljs.core.ex_cause(t);
via = G__20335;
t = G__20336;
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
var map__20005 = datafied_throwable;
var map__20005__$1 = cljs.core.__destructure_map(map__20005);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20005__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20006 = cljs.core.last(via);
var map__20006__$1 = cljs.core.__destructure_map(map__20006);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20007 = data;
var map__20007__$1 = cljs.core.__destructure_map(map__20007);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20007__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20007__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20007__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20008 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20008__$1 = cljs.core.__destructure_map(map__20008);
var top_data = map__20008__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20013 = phase;
var G__20013__$1 = (((G__20013 instanceof cljs.core.Keyword))?G__20013.fqn:null);
switch (G__20013__$1) {
case "read-source":
var map__20014 = data;
var map__20014__$1 = cljs.core.__destructure_map(map__20014);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20014__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20014__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20015 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20015__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20015);
var G__20015__$2 = (cljs.core.truth_((function (){var fexpr__20018 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20018.cljs$core$IFn$_invoke$arity$1 ? fexpr__20018.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20018.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20015__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20015__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20015__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20020 = top_data;
var G__20020__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20020,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20020);
var G__20020__$2 = (cljs.core.truth_((function (){var fexpr__20021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20021.cljs$core$IFn$_invoke$arity$1 ? fexpr__20021.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20021.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20020__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20020__$1);
var G__20020__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20020__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20020__$2);
var G__20020__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20020__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20020__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20020__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20027 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(3),null);
var G__20030 = top_data;
var G__20030__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20030,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20030);
var G__20030__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20030__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20030__$1);
var G__20030__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20030__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20030__$2);
var G__20030__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20030__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20030__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20030__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20030__$4;
}

break;
case "execution":
var vec__20035 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20000_SHARP_){
var or__5045__auto__ = (p1__20000_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20040.cljs$core$IFn$_invoke$arity$1 ? fexpr__20040.cljs$core$IFn$_invoke$arity$1(p1__20000_SHARP_) : fexpr__20040.call(null,p1__20000_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20042 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20042__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20042,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20042);
var G__20042__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20042__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20042__$1);
var G__20042__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20042__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20042__$2);
var G__20042__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20042__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20042__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20042__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20042__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20013__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20065){
var map__20066 = p__20065;
var map__20066__$1 = cljs.core.__destructure_map(map__20066);
var triage_data = map__20066__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20089 = phase;
var G__20089__$1 = (((G__20089 instanceof cljs.core.Keyword))?G__20089.fqn:null);
switch (G__20089__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20092 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20093 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20094 = loc;
var G__20095 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20097_20460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20098_20461 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20099_20462 = true;
var _STAR_print_fn_STAR__temp_val__20100_20463 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20099_20462);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20100_20463);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20056_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20056_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20098_20461);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20097_20460);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20092,G__20093,G__20094,G__20095) : format.call(null,G__20092,G__20093,G__20094,G__20095));

break;
case "macroexpansion":
var G__20110 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20111 = cause_type;
var G__20112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20113 = loc;
var G__20114 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20110,G__20111,G__20112,G__20113,G__20114) : format.call(null,G__20110,G__20111,G__20112,G__20113,G__20114));

break;
case "compile-syntax-check":
var G__20119 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20120 = cause_type;
var G__20121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20122 = loc;
var G__20123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20119,G__20120,G__20121,G__20122,G__20123) : format.call(null,G__20119,G__20120,G__20121,G__20122,G__20123));

break;
case "compilation":
var G__20125 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20126 = cause_type;
var G__20127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20128 = loc;
var G__20129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20125,G__20126,G__20127,G__20128,G__20129) : format.call(null,G__20125,G__20126,G__20127,G__20128,G__20129));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20131 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20132 = symbol;
var G__20133 = loc;
var G__20134 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20137_20501 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20138_20502 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20139_20503 = true;
var _STAR_print_fn_STAR__temp_val__20140_20504 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20139_20503);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20140_20504);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20063_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20063_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20138_20502);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20137_20501);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20131,G__20132,G__20133,G__20134) : format.call(null,G__20131,G__20132,G__20133,G__20134));
} else {
var G__20149 = "Execution error%s at %s(%s).\n%s\n";
var G__20150 = cause_type;
var G__20151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20152 = loc;
var G__20153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20149,G__20150,G__20151,G__20152,G__20153) : format.call(null,G__20149,G__20150,G__20151,G__20152,G__20153));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20089__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
