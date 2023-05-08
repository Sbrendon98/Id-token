goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18209 = arguments.length;
var i__5770__auto___18210 = (0);
while(true){
if((i__5770__auto___18210 < len__5769__auto___18209)){
args__5775__auto__.push((arguments[i__5770__auto___18210]));

var G__18211 = (i__5770__auto___18210 + (1));
i__5770__auto___18210 = G__18211;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__18198){
var vec__18199 = p__18198;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18199,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq18195){
var G__18196 = cljs.core.first(seq18195);
var seq18195__$1 = cljs.core.next(seq18195);
var G__18197 = cljs.core.first(seq18195__$1);
var seq18195__$2 = cljs.core.next(seq18195__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18196,G__18197,seq18195__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18212 = arguments.length;
var i__5770__auto___18213 = (0);
while(true){
if((i__5770__auto___18213 < len__5769__auto___18212)){
args__5775__auto__.push((arguments[i__5770__auto___18213]));

var G__18214 = (i__5770__auto___18213 + (1));
i__5770__auto___18213 = G__18214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__18205){
var vec__18206 = p__18205;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18206,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq18202){
var G__18203 = cljs.core.first(seq18202);
var seq18202__$1 = cljs.core.next(seq18202);
var G__18204 = cljs.core.first(seq18202__$1);
var seq18202__$2 = cljs.core.next(seq18202__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18203,G__18204,seq18202__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
