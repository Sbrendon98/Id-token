goog.provide('rewrite_clj.zip.base');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper(rewrite_clj.node.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.tag.call(null,node)),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_(node);
var or__5045__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.down(top));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return top;
}
} else {
var G__16113 = (function (){var G__16105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
return (rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1(G__16105) : rewrite_clj.node.forms_node.call(null,G__16105));
})();
node = G__16113;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__16106 = zloc;
var G__16106__$1 = (((G__16106 == null))?null:clojure.zip.node(G__16106));
if((G__16106__$1 == null)){
return null;
} else {
return (rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(G__16106__$1) : rewrite_clj.node.tag.call(null,G__16106__$1));
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__16107 = zloc;
var G__16107__$1 = (((G__16107 == null))?null:clojure.zip.node(G__16107));
if((G__16107__$1 == null)){
return null;
} else {
return (rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(G__16107__$1) : rewrite_clj.node.sexpr.call(null,G__16107__$1));
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__16108 = zloc;
var G__16108__$1 = (((G__16108 == null))?null:clojure.zip.node(G__16108));
if((G__16108__$1 == null)){
return null;
} else {
return (rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1(G__16108__$1) : rewrite_clj.node.child_sexprs.call(null,G__16108__$1));
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__5045__auto__ = (function (){var G__16109 = zloc;
var G__16109__$1 = (((G__16109 == null))?null:clojure.zip.node(G__16109));
if((G__16109__$1 == null)){
return null;
} else {
return (rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1(G__16109__$1) : rewrite_clj.node.length.call(null,G__16109__$1));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__16110 = s;
var G__16110__$1 = (((G__16110 == null))?null:rewrite_clj.parser.parse_string_all(G__16110));
if((G__16110__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn(G__16110__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__16111 = zloc;
var G__16111__$1 = (((G__16111 == null))?null:clojure.zip.node(G__16111));
if((G__16111__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__16111__$1) : rewrite_clj.node.string.call(null,G__16111__$1));
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__16112 = zloc;
var G__16112__$1 = (((G__16112 == null))?null:clojure.zip.root(G__16112));
if((G__16112__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__16112__$1) : rewrite_clj.node.string.call(null,G__16112__$1));
}
});

//# sourceMappingURL=rewrite_clj.zip.base.js.map
