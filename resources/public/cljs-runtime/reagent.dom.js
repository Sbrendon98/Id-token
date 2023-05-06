goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22627 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22628 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22628);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22629 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22630 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22630);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22629);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22627);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22646 = arguments.length;
switch (G__22646) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22656 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22656,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22656,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22672_22704 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22673_22705 = null;
var count__22674_22706 = (0);
var i__22675_22707 = (0);
while(true){
if((i__22675_22707 < count__22674_22706)){
var vec__22688_22708 = chunk__22673_22705.cljs$core$IIndexed$_nth$arity$2(null,i__22675_22707);
var container_22709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688_22708,(0),null);
var comp_22710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688_22708,(1),null);
reagent.dom.re_render_component(comp_22710,container_22709);


var G__22711 = seq__22672_22704;
var G__22712 = chunk__22673_22705;
var G__22713 = count__22674_22706;
var G__22714 = (i__22675_22707 + (1));
seq__22672_22704 = G__22711;
chunk__22673_22705 = G__22712;
count__22674_22706 = G__22713;
i__22675_22707 = G__22714;
continue;
} else {
var temp__5804__auto___22715 = cljs.core.seq(seq__22672_22704);
if(temp__5804__auto___22715){
var seq__22672_22716__$1 = temp__5804__auto___22715;
if(cljs.core.chunked_seq_QMARK_(seq__22672_22716__$1)){
var c__5568__auto___22717 = cljs.core.chunk_first(seq__22672_22716__$1);
var G__22718 = cljs.core.chunk_rest(seq__22672_22716__$1);
var G__22719 = c__5568__auto___22717;
var G__22720 = cljs.core.count(c__5568__auto___22717);
var G__22721 = (0);
seq__22672_22704 = G__22718;
chunk__22673_22705 = G__22719;
count__22674_22706 = G__22720;
i__22675_22707 = G__22721;
continue;
} else {
var vec__22693_22722 = cljs.core.first(seq__22672_22716__$1);
var container_22723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693_22722,(0),null);
var comp_22724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693_22722,(1),null);
reagent.dom.re_render_component(comp_22724,container_22723);


var G__22725 = cljs.core.next(seq__22672_22716__$1);
var G__22726 = null;
var G__22727 = (0);
var G__22728 = (0);
seq__22672_22704 = G__22725;
chunk__22673_22705 = G__22726;
count__22674_22706 = G__22727;
i__22675_22707 = G__22728;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
