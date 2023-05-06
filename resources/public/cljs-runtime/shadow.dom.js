goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20641 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20641(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20649 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20649(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18791 = coll;
var G__18792 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18791,G__18792) : shadow.dom.lazy_native_coll_seq.call(null,G__18791,G__18792));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18795 = arguments.length;
switch (G__18795) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18797 = arguments.length;
switch (G__18797) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18799 = arguments.length;
switch (G__18799) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18801 = arguments.length;
switch (G__18801) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18803 = arguments.length;
switch (G__18803) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18805 = arguments.length;
switch (G__18805) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18806){if((e18806 instanceof Object)){
var e = e18806;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18806;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18807 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18808 = null;
var count__18809 = (0);
var i__18810 = (0);
while(true){
if((i__18810 < count__18809)){
var el = chunk__18808.cljs$core$IIndexed$_nth$arity$2(null,i__18810);
var handler_20763__$1 = ((function (seq__18807,chunk__18808,count__18809,i__18810,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18807,chunk__18808,count__18809,i__18810,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20763__$1);


var G__20764 = seq__18807;
var G__20765 = chunk__18808;
var G__20766 = count__18809;
var G__20767 = (i__18810 + (1));
seq__18807 = G__20764;
chunk__18808 = G__20765;
count__18809 = G__20766;
i__18810 = G__20767;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18807);
if(temp__5804__auto__){
var seq__18807__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18807__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18807__$1);
var G__20772 = cljs.core.chunk_rest(seq__18807__$1);
var G__20773 = c__5568__auto__;
var G__20774 = cljs.core.count(c__5568__auto__);
var G__20775 = (0);
seq__18807 = G__20772;
chunk__18808 = G__20773;
count__18809 = G__20774;
i__18810 = G__20775;
continue;
} else {
var el = cljs.core.first(seq__18807__$1);
var handler_20778__$1 = ((function (seq__18807,chunk__18808,count__18809,i__18810,el,seq__18807__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18807,chunk__18808,count__18809,i__18810,el,seq__18807__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20778__$1);


var G__20783 = cljs.core.next(seq__18807__$1);
var G__20784 = null;
var G__20785 = (0);
var G__20786 = (0);
seq__18807 = G__20783;
chunk__18808 = G__20784;
count__18809 = G__20785;
i__18810 = G__20786;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18816 = arguments.length;
switch (G__18816) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18831 = cljs.core.seq(events);
var chunk__18832 = null;
var count__18833 = (0);
var i__18834 = (0);
while(true){
if((i__18834 < count__18833)){
var vec__18841 = chunk__18832.cljs$core$IIndexed$_nth$arity$2(null,i__18834);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20792 = seq__18831;
var G__20793 = chunk__18832;
var G__20794 = count__18833;
var G__20795 = (i__18834 + (1));
seq__18831 = G__20792;
chunk__18832 = G__20793;
count__18833 = G__20794;
i__18834 = G__20795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18831);
if(temp__5804__auto__){
var seq__18831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18831__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18831__$1);
var G__20796 = cljs.core.chunk_rest(seq__18831__$1);
var G__20797 = c__5568__auto__;
var G__20798 = cljs.core.count(c__5568__auto__);
var G__20799 = (0);
seq__18831 = G__20796;
chunk__18832 = G__20797;
count__18833 = G__20798;
i__18834 = G__20799;
continue;
} else {
var vec__18852 = cljs.core.first(seq__18831__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20800 = cljs.core.next(seq__18831__$1);
var G__20801 = null;
var G__20802 = (0);
var G__20803 = (0);
seq__18831 = G__20800;
chunk__18832 = G__20801;
count__18833 = G__20802;
i__18834 = G__20803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18855 = cljs.core.seq(styles);
var chunk__18856 = null;
var count__18857 = (0);
var i__18858 = (0);
while(true){
if((i__18858 < count__18857)){
var vec__18890 = chunk__18856.cljs$core$IIndexed$_nth$arity$2(null,i__18858);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20804 = seq__18855;
var G__20805 = chunk__18856;
var G__20806 = count__18857;
var G__20807 = (i__18858 + (1));
seq__18855 = G__20804;
chunk__18856 = G__20805;
count__18857 = G__20806;
i__18858 = G__20807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18855);
if(temp__5804__auto__){
var seq__18855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18855__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18855__$1);
var G__20810 = cljs.core.chunk_rest(seq__18855__$1);
var G__20811 = c__5568__auto__;
var G__20812 = cljs.core.count(c__5568__auto__);
var G__20813 = (0);
seq__18855 = G__20810;
chunk__18856 = G__20811;
count__18857 = G__20812;
i__18858 = G__20813;
continue;
} else {
var vec__18925 = cljs.core.first(seq__18855__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20814 = cljs.core.next(seq__18855__$1);
var G__20815 = null;
var G__20816 = (0);
var G__20817 = (0);
seq__18855 = G__20814;
chunk__18856 = G__20815;
count__18857 = G__20816;
i__18858 = G__20817;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19000_20818 = key;
var G__19000_20819__$1 = (((G__19000_20818 instanceof cljs.core.Keyword))?G__19000_20818.fqn:null);
switch (G__19000_20819__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20833 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20833,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20833,"aria-");
}
})())){
el.setAttribute(ks_20833,value);
} else {
(el[ks_20833] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19003){
var map__19006 = p__19003;
var map__19006__$1 = cljs.core.__destructure_map(map__19006);
var props = map__19006__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19009 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19015 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19015,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19015;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19036 = arguments.length;
switch (G__19036) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19069){
var vec__19070 = p__19069;
var seq__19071 = cljs.core.seq(vec__19070);
var first__19072 = cljs.core.first(seq__19071);
var seq__19071__$1 = cljs.core.next(seq__19071);
var nn = first__19072;
var first__19072__$1 = cljs.core.first(seq__19071__$1);
var seq__19071__$2 = cljs.core.next(seq__19071__$1);
var np = first__19072__$1;
var nc = seq__19071__$2;
var node = vec__19070;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19073 = nn;
var G__19074 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19073,G__19074) : create_fn.call(null,G__19073,G__19074));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19077 = nn;
var G__19078 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19077,G__19078) : create_fn.call(null,G__19077,G__19078));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19122 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19122,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19122,(1),null);
var seq__19125_20884 = cljs.core.seq(node_children);
var chunk__19126_20885 = null;
var count__19127_20886 = (0);
var i__19128_20887 = (0);
while(true){
if((i__19128_20887 < count__19127_20886)){
var child_struct_20888 = chunk__19126_20885.cljs$core$IIndexed$_nth$arity$2(null,i__19128_20887);
var children_20893 = shadow.dom.dom_node(child_struct_20888);
if(cljs.core.seq_QMARK_(children_20893)){
var seq__19141_20894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20893));
var chunk__19143_20895 = null;
var count__19144_20896 = (0);
var i__19145_20897 = (0);
while(true){
if((i__19145_20897 < count__19144_20896)){
var child_20902 = chunk__19143_20895.cljs$core$IIndexed$_nth$arity$2(null,i__19145_20897);
if(cljs.core.truth_(child_20902)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20902);


var G__20910 = seq__19141_20894;
var G__20911 = chunk__19143_20895;
var G__20912 = count__19144_20896;
var G__20913 = (i__19145_20897 + (1));
seq__19141_20894 = G__20910;
chunk__19143_20895 = G__20911;
count__19144_20896 = G__20912;
i__19145_20897 = G__20913;
continue;
} else {
var G__20918 = seq__19141_20894;
var G__20919 = chunk__19143_20895;
var G__20920 = count__19144_20896;
var G__20921 = (i__19145_20897 + (1));
seq__19141_20894 = G__20918;
chunk__19143_20895 = G__20919;
count__19144_20896 = G__20920;
i__19145_20897 = G__20921;
continue;
}
} else {
var temp__5804__auto___20929 = cljs.core.seq(seq__19141_20894);
if(temp__5804__auto___20929){
var seq__19141_20944__$1 = temp__5804__auto___20929;
if(cljs.core.chunked_seq_QMARK_(seq__19141_20944__$1)){
var c__5568__auto___20945 = cljs.core.chunk_first(seq__19141_20944__$1);
var G__20946 = cljs.core.chunk_rest(seq__19141_20944__$1);
var G__20947 = c__5568__auto___20945;
var G__20948 = cljs.core.count(c__5568__auto___20945);
var G__20949 = (0);
seq__19141_20894 = G__20946;
chunk__19143_20895 = G__20947;
count__19144_20896 = G__20948;
i__19145_20897 = G__20949;
continue;
} else {
var child_20950 = cljs.core.first(seq__19141_20944__$1);
if(cljs.core.truth_(child_20950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20950);


var G__20951 = cljs.core.next(seq__19141_20944__$1);
var G__20952 = null;
var G__20953 = (0);
var G__20954 = (0);
seq__19141_20894 = G__20951;
chunk__19143_20895 = G__20952;
count__19144_20896 = G__20953;
i__19145_20897 = G__20954;
continue;
} else {
var G__20955 = cljs.core.next(seq__19141_20944__$1);
var G__20956 = null;
var G__20957 = (0);
var G__20958 = (0);
seq__19141_20894 = G__20955;
chunk__19143_20895 = G__20956;
count__19144_20896 = G__20957;
i__19145_20897 = G__20958;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20893);
}


var G__20959 = seq__19125_20884;
var G__20960 = chunk__19126_20885;
var G__20961 = count__19127_20886;
var G__20962 = (i__19128_20887 + (1));
seq__19125_20884 = G__20959;
chunk__19126_20885 = G__20960;
count__19127_20886 = G__20961;
i__19128_20887 = G__20962;
continue;
} else {
var temp__5804__auto___20963 = cljs.core.seq(seq__19125_20884);
if(temp__5804__auto___20963){
var seq__19125_20966__$1 = temp__5804__auto___20963;
if(cljs.core.chunked_seq_QMARK_(seq__19125_20966__$1)){
var c__5568__auto___20970 = cljs.core.chunk_first(seq__19125_20966__$1);
var G__20971 = cljs.core.chunk_rest(seq__19125_20966__$1);
var G__20972 = c__5568__auto___20970;
var G__20973 = cljs.core.count(c__5568__auto___20970);
var G__20974 = (0);
seq__19125_20884 = G__20971;
chunk__19126_20885 = G__20972;
count__19127_20886 = G__20973;
i__19128_20887 = G__20974;
continue;
} else {
var child_struct_20976 = cljs.core.first(seq__19125_20966__$1);
var children_20977 = shadow.dom.dom_node(child_struct_20976);
if(cljs.core.seq_QMARK_(children_20977)){
var seq__19150_20978 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20977));
var chunk__19152_20979 = null;
var count__19153_20980 = (0);
var i__19154_20981 = (0);
while(true){
if((i__19154_20981 < count__19153_20980)){
var child_20983 = chunk__19152_20979.cljs$core$IIndexed$_nth$arity$2(null,i__19154_20981);
if(cljs.core.truth_(child_20983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20983);


var G__20986 = seq__19150_20978;
var G__20987 = chunk__19152_20979;
var G__20988 = count__19153_20980;
var G__20989 = (i__19154_20981 + (1));
seq__19150_20978 = G__20986;
chunk__19152_20979 = G__20987;
count__19153_20980 = G__20988;
i__19154_20981 = G__20989;
continue;
} else {
var G__20994 = seq__19150_20978;
var G__20995 = chunk__19152_20979;
var G__20996 = count__19153_20980;
var G__20997 = (i__19154_20981 + (1));
seq__19150_20978 = G__20994;
chunk__19152_20979 = G__20995;
count__19153_20980 = G__20996;
i__19154_20981 = G__20997;
continue;
}
} else {
var temp__5804__auto___21010__$1 = cljs.core.seq(seq__19150_20978);
if(temp__5804__auto___21010__$1){
var seq__19150_21038__$1 = temp__5804__auto___21010__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19150_21038__$1)){
var c__5568__auto___21039 = cljs.core.chunk_first(seq__19150_21038__$1);
var G__21040 = cljs.core.chunk_rest(seq__19150_21038__$1);
var G__21041 = c__5568__auto___21039;
var G__21042 = cljs.core.count(c__5568__auto___21039);
var G__21043 = (0);
seq__19150_20978 = G__21040;
chunk__19152_20979 = G__21041;
count__19153_20980 = G__21042;
i__19154_20981 = G__21043;
continue;
} else {
var child_21052 = cljs.core.first(seq__19150_21038__$1);
if(cljs.core.truth_(child_21052)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21052);


var G__21053 = cljs.core.next(seq__19150_21038__$1);
var G__21054 = null;
var G__21055 = (0);
var G__21056 = (0);
seq__19150_20978 = G__21053;
chunk__19152_20979 = G__21054;
count__19153_20980 = G__21055;
i__19154_20981 = G__21056;
continue;
} else {
var G__21057 = cljs.core.next(seq__19150_21038__$1);
var G__21058 = null;
var G__21059 = (0);
var G__21060 = (0);
seq__19150_20978 = G__21057;
chunk__19152_20979 = G__21058;
count__19153_20980 = G__21059;
i__19154_20981 = G__21060;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20977);
}


var G__21061 = cljs.core.next(seq__19125_20966__$1);
var G__21062 = null;
var G__21063 = (0);
var G__21064 = (0);
seq__19125_20884 = G__21061;
chunk__19126_20885 = G__21062;
count__19127_20886 = G__21063;
i__19128_20887 = G__21064;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19158 = cljs.core.seq(node);
var chunk__19159 = null;
var count__19160 = (0);
var i__19161 = (0);
while(true){
if((i__19161 < count__19160)){
var n = chunk__19159.cljs$core$IIndexed$_nth$arity$2(null,i__19161);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21084 = seq__19158;
var G__21085 = chunk__19159;
var G__21086 = count__19160;
var G__21087 = (i__19161 + (1));
seq__19158 = G__21084;
chunk__19159 = G__21085;
count__19160 = G__21086;
i__19161 = G__21087;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19158);
if(temp__5804__auto__){
var seq__19158__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19158__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19158__$1);
var G__21089 = cljs.core.chunk_rest(seq__19158__$1);
var G__21090 = c__5568__auto__;
var G__21091 = cljs.core.count(c__5568__auto__);
var G__21092 = (0);
seq__19158 = G__21089;
chunk__19159 = G__21090;
count__19160 = G__21091;
i__19161 = G__21092;
continue;
} else {
var n = cljs.core.first(seq__19158__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21094 = cljs.core.next(seq__19158__$1);
var G__21095 = null;
var G__21096 = (0);
var G__21097 = (0);
seq__19158 = G__21094;
chunk__19159 = G__21095;
count__19160 = G__21096;
i__19161 = G__21097;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19170 = arguments.length;
switch (G__19170) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19178 = arguments.length;
switch (G__19178) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19192 = arguments.length;
switch (G__19192) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21187 = arguments.length;
var i__5770__auto___21188 = (0);
while(true){
if((i__5770__auto___21188 < len__5769__auto___21187)){
args__5775__auto__.push((arguments[i__5770__auto___21188]));

var G__21189 = (i__5770__auto___21188 + (1));
i__5770__auto___21188 = G__21189;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19212_21190 = cljs.core.seq(nodes);
var chunk__19213_21191 = null;
var count__19214_21192 = (0);
var i__19215_21193 = (0);
while(true){
if((i__19215_21193 < count__19214_21192)){
var node_21194 = chunk__19213_21191.cljs$core$IIndexed$_nth$arity$2(null,i__19215_21193);
fragment.appendChild(shadow.dom._to_dom(node_21194));


var G__21201 = seq__19212_21190;
var G__21202 = chunk__19213_21191;
var G__21203 = count__19214_21192;
var G__21204 = (i__19215_21193 + (1));
seq__19212_21190 = G__21201;
chunk__19213_21191 = G__21202;
count__19214_21192 = G__21203;
i__19215_21193 = G__21204;
continue;
} else {
var temp__5804__auto___21223 = cljs.core.seq(seq__19212_21190);
if(temp__5804__auto___21223){
var seq__19212_21224__$1 = temp__5804__auto___21223;
if(cljs.core.chunked_seq_QMARK_(seq__19212_21224__$1)){
var c__5568__auto___21225 = cljs.core.chunk_first(seq__19212_21224__$1);
var G__21226 = cljs.core.chunk_rest(seq__19212_21224__$1);
var G__21227 = c__5568__auto___21225;
var G__21228 = cljs.core.count(c__5568__auto___21225);
var G__21229 = (0);
seq__19212_21190 = G__21226;
chunk__19213_21191 = G__21227;
count__19214_21192 = G__21228;
i__19215_21193 = G__21229;
continue;
} else {
var node_21230 = cljs.core.first(seq__19212_21224__$1);
fragment.appendChild(shadow.dom._to_dom(node_21230));


var G__21231 = cljs.core.next(seq__19212_21224__$1);
var G__21232 = null;
var G__21233 = (0);
var G__21234 = (0);
seq__19212_21190 = G__21231;
chunk__19213_21191 = G__21232;
count__19214_21192 = G__21233;
i__19215_21193 = G__21234;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19207){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19207));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19335_21292 = cljs.core.seq(scripts);
var chunk__19336_21293 = null;
var count__19337_21294 = (0);
var i__19338_21295 = (0);
while(true){
if((i__19338_21295 < count__19337_21294)){
var vec__19412_21303 = chunk__19336_21293.cljs$core$IIndexed$_nth$arity$2(null,i__19338_21295);
var script_tag_21304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_21303,(0),null);
var script_body_21305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_21303,(1),null);
eval(script_body_21305);


var G__21321 = seq__19335_21292;
var G__21322 = chunk__19336_21293;
var G__21323 = count__19337_21294;
var G__21324 = (i__19338_21295 + (1));
seq__19335_21292 = G__21321;
chunk__19336_21293 = G__21322;
count__19337_21294 = G__21323;
i__19338_21295 = G__21324;
continue;
} else {
var temp__5804__auto___21337 = cljs.core.seq(seq__19335_21292);
if(temp__5804__auto___21337){
var seq__19335_21338__$1 = temp__5804__auto___21337;
if(cljs.core.chunked_seq_QMARK_(seq__19335_21338__$1)){
var c__5568__auto___21339 = cljs.core.chunk_first(seq__19335_21338__$1);
var G__21340 = cljs.core.chunk_rest(seq__19335_21338__$1);
var G__21341 = c__5568__auto___21339;
var G__21342 = cljs.core.count(c__5568__auto___21339);
var G__21343 = (0);
seq__19335_21292 = G__21340;
chunk__19336_21293 = G__21341;
count__19337_21294 = G__21342;
i__19338_21295 = G__21343;
continue;
} else {
var vec__19415_21348 = cljs.core.first(seq__19335_21338__$1);
var script_tag_21349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19415_21348,(0),null);
var script_body_21350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19415_21348,(1),null);
eval(script_body_21350);


var G__21354 = cljs.core.next(seq__19335_21338__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__19335_21292 = G__21354;
chunk__19336_21293 = G__21355;
count__19337_21294 = G__21356;
i__19338_21295 = G__21357;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19418){
var vec__19419 = p__19418;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19419,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19419,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19435 = arguments.length;
switch (G__19435) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19537 = cljs.core.seq(style_keys);
var chunk__19538 = null;
var count__19539 = (0);
var i__19540 = (0);
while(true){
if((i__19540 < count__19539)){
var it = chunk__19538.cljs$core$IIndexed$_nth$arity$2(null,i__19540);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21378 = seq__19537;
var G__21379 = chunk__19538;
var G__21380 = count__19539;
var G__21381 = (i__19540 + (1));
seq__19537 = G__21378;
chunk__19538 = G__21379;
count__19539 = G__21380;
i__19540 = G__21381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19537);
if(temp__5804__auto__){
var seq__19537__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19537__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19537__$1);
var G__21384 = cljs.core.chunk_rest(seq__19537__$1);
var G__21385 = c__5568__auto__;
var G__21386 = cljs.core.count(c__5568__auto__);
var G__21387 = (0);
seq__19537 = G__21384;
chunk__19538 = G__21385;
count__19539 = G__21386;
i__19540 = G__21387;
continue;
} else {
var it = cljs.core.first(seq__19537__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21391 = cljs.core.next(seq__19537__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__19537 = G__21391;
chunk__19538 = G__21392;
count__19539 = G__21393;
i__19540 = G__21394;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19547,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19598 = k19547;
var G__19598__$1 = (((G__19598 instanceof cljs.core.Keyword))?G__19598.fqn:null);
switch (G__19598__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19547,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19611){
var vec__19612 = p__19611;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19612,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19612,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19546){
var self__ = this;
var G__19546__$1 = this;
return (new cljs.core.RecordIter((0),G__19546__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19548,other19549){
var self__ = this;
var this19548__$1 = this;
return (((!((other19549 == null)))) && ((((this19548__$1.constructor === other19549.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.x,other19549.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.y,other19549.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.__extmap,other19549.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19547){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19651 = k19547;
var G__19651__$1 = (((G__19651 instanceof cljs.core.Keyword))?G__19651.fqn:null);
switch (G__19651__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19547);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19546){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19656 = cljs.core.keyword_identical_QMARK_;
var expr__19657 = k__5352__auto__;
if(cljs.core.truth_((pred__19656.cljs$core$IFn$_invoke$arity$2 ? pred__19656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19657) : pred__19656.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19657)))){
return (new shadow.dom.Coordinate(G__19546,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19656.cljs$core$IFn$_invoke$arity$2 ? pred__19656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19657) : pred__19656.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19657)))){
return (new shadow.dom.Coordinate(self__.x,G__19546,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19546),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19546){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19546,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19551){
var extmap__5385__auto__ = (function (){var G__19716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19551,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19551)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19716);
} else {
return G__19716;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19551),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19551),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19773,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19803 = k19773;
var G__19803__$1 = (((G__19803 instanceof cljs.core.Keyword))?G__19803.fqn:null);
switch (G__19803__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19773,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19808){
var vec__19809 = p__19808;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19772){
var self__ = this;
var G__19772__$1 = this;
return (new cljs.core.RecordIter((0),G__19772__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19774,other19775){
var self__ = this;
var this19774__$1 = this;
return (((!((other19775 == null)))) && ((((this19774__$1.constructor === other19775.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19774__$1.w,other19775.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19774__$1.h,other19775.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19774__$1.__extmap,other19775.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19773){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19934 = k19773;
var G__19934__$1 = (((G__19934 instanceof cljs.core.Keyword))?G__19934.fqn:null);
switch (G__19934__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19773);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19772){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19935 = cljs.core.keyword_identical_QMARK_;
var expr__19936 = k__5352__auto__;
if(cljs.core.truth_((pred__19935.cljs$core$IFn$_invoke$arity$2 ? pred__19935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19936) : pred__19935.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19936)))){
return (new shadow.dom.Size(G__19772,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19935.cljs$core$IFn$_invoke$arity$2 ? pred__19935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19936) : pred__19935.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19936)))){
return (new shadow.dom.Size(self__.w,G__19772,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19772),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19772){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19772,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19789){
var extmap__5385__auto__ = (function (){var G__19957 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19789,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19957);
} else {
return G__19957;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19789),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19789),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21480 = (i + (1));
var G__21481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21480;
ret = G__21481;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20119){
var vec__20120 = p__20119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20137 = arguments.length;
switch (G__20137) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21535 = ps;
var G__21536 = (i + (1));
el__$1 = G__21535;
i = G__21536;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20197 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20197,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20197,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20197,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20210_21546 = cljs.core.seq(props);
var chunk__20211_21547 = null;
var count__20212_21548 = (0);
var i__20213_21549 = (0);
while(true){
if((i__20213_21549 < count__20212_21548)){
var vec__20347_21550 = chunk__20211_21547.cljs$core$IIndexed$_nth$arity$2(null,i__20213_21549);
var k_21551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347_21550,(0),null);
var v_21552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347_21550,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21551);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21551),v_21552);


var G__21553 = seq__20210_21546;
var G__21554 = chunk__20211_21547;
var G__21555 = count__20212_21548;
var G__21556 = (i__20213_21549 + (1));
seq__20210_21546 = G__21553;
chunk__20211_21547 = G__21554;
count__20212_21548 = G__21555;
i__20213_21549 = G__21556;
continue;
} else {
var temp__5804__auto___21557 = cljs.core.seq(seq__20210_21546);
if(temp__5804__auto___21557){
var seq__20210_21558__$1 = temp__5804__auto___21557;
if(cljs.core.chunked_seq_QMARK_(seq__20210_21558__$1)){
var c__5568__auto___21559 = cljs.core.chunk_first(seq__20210_21558__$1);
var G__21560 = cljs.core.chunk_rest(seq__20210_21558__$1);
var G__21561 = c__5568__auto___21559;
var G__21562 = cljs.core.count(c__5568__auto___21559);
var G__21563 = (0);
seq__20210_21546 = G__21560;
chunk__20211_21547 = G__21561;
count__20212_21548 = G__21562;
i__20213_21549 = G__21563;
continue;
} else {
var vec__20360_21564 = cljs.core.first(seq__20210_21558__$1);
var k_21565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360_21564,(0),null);
var v_21566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360_21564,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21565);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21565),v_21566);


var G__21567 = cljs.core.next(seq__20210_21558__$1);
var G__21568 = null;
var G__21569 = (0);
var G__21570 = (0);
seq__20210_21546 = G__21567;
chunk__20211_21547 = G__21568;
count__20212_21548 = G__21569;
i__20213_21549 = G__21570;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20378 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(1),null);
var seq__20383_21571 = cljs.core.seq(node_children);
var chunk__20385_21572 = null;
var count__20386_21573 = (0);
var i__20387_21574 = (0);
while(true){
if((i__20387_21574 < count__20386_21573)){
var child_struct_21575 = chunk__20385_21572.cljs$core$IIndexed$_nth$arity$2(null,i__20387_21574);
if((!((child_struct_21575 == null)))){
if(typeof child_struct_21575 === 'string'){
var text_21576 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21576),child_struct_21575].join(''));
} else {
var children_21577 = shadow.dom.svg_node(child_struct_21575);
if(cljs.core.seq_QMARK_(children_21577)){
var seq__20547_21578 = cljs.core.seq(children_21577);
var chunk__20549_21579 = null;
var count__20550_21580 = (0);
var i__20551_21581 = (0);
while(true){
if((i__20551_21581 < count__20550_21580)){
var child_21582 = chunk__20549_21579.cljs$core$IIndexed$_nth$arity$2(null,i__20551_21581);
if(cljs.core.truth_(child_21582)){
node.appendChild(child_21582);


var G__21583 = seq__20547_21578;
var G__21584 = chunk__20549_21579;
var G__21585 = count__20550_21580;
var G__21586 = (i__20551_21581 + (1));
seq__20547_21578 = G__21583;
chunk__20549_21579 = G__21584;
count__20550_21580 = G__21585;
i__20551_21581 = G__21586;
continue;
} else {
var G__21587 = seq__20547_21578;
var G__21588 = chunk__20549_21579;
var G__21589 = count__20550_21580;
var G__21590 = (i__20551_21581 + (1));
seq__20547_21578 = G__21587;
chunk__20549_21579 = G__21588;
count__20550_21580 = G__21589;
i__20551_21581 = G__21590;
continue;
}
} else {
var temp__5804__auto___21591 = cljs.core.seq(seq__20547_21578);
if(temp__5804__auto___21591){
var seq__20547_21592__$1 = temp__5804__auto___21591;
if(cljs.core.chunked_seq_QMARK_(seq__20547_21592__$1)){
var c__5568__auto___21593 = cljs.core.chunk_first(seq__20547_21592__$1);
var G__21594 = cljs.core.chunk_rest(seq__20547_21592__$1);
var G__21595 = c__5568__auto___21593;
var G__21596 = cljs.core.count(c__5568__auto___21593);
var G__21597 = (0);
seq__20547_21578 = G__21594;
chunk__20549_21579 = G__21595;
count__20550_21580 = G__21596;
i__20551_21581 = G__21597;
continue;
} else {
var child_21598 = cljs.core.first(seq__20547_21592__$1);
if(cljs.core.truth_(child_21598)){
node.appendChild(child_21598);


var G__21599 = cljs.core.next(seq__20547_21592__$1);
var G__21600 = null;
var G__21601 = (0);
var G__21602 = (0);
seq__20547_21578 = G__21599;
chunk__20549_21579 = G__21600;
count__20550_21580 = G__21601;
i__20551_21581 = G__21602;
continue;
} else {
var G__21603 = cljs.core.next(seq__20547_21592__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__20547_21578 = G__21603;
chunk__20549_21579 = G__21604;
count__20550_21580 = G__21605;
i__20551_21581 = G__21606;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21577);
}
}


var G__21607 = seq__20383_21571;
var G__21608 = chunk__20385_21572;
var G__21609 = count__20386_21573;
var G__21610 = (i__20387_21574 + (1));
seq__20383_21571 = G__21607;
chunk__20385_21572 = G__21608;
count__20386_21573 = G__21609;
i__20387_21574 = G__21610;
continue;
} else {
var G__21611 = seq__20383_21571;
var G__21612 = chunk__20385_21572;
var G__21613 = count__20386_21573;
var G__21614 = (i__20387_21574 + (1));
seq__20383_21571 = G__21611;
chunk__20385_21572 = G__21612;
count__20386_21573 = G__21613;
i__20387_21574 = G__21614;
continue;
}
} else {
var temp__5804__auto___21615 = cljs.core.seq(seq__20383_21571);
if(temp__5804__auto___21615){
var seq__20383_21616__$1 = temp__5804__auto___21615;
if(cljs.core.chunked_seq_QMARK_(seq__20383_21616__$1)){
var c__5568__auto___21617 = cljs.core.chunk_first(seq__20383_21616__$1);
var G__21618 = cljs.core.chunk_rest(seq__20383_21616__$1);
var G__21619 = c__5568__auto___21617;
var G__21620 = cljs.core.count(c__5568__auto___21617);
var G__21621 = (0);
seq__20383_21571 = G__21618;
chunk__20385_21572 = G__21619;
count__20386_21573 = G__21620;
i__20387_21574 = G__21621;
continue;
} else {
var child_struct_21622 = cljs.core.first(seq__20383_21616__$1);
if((!((child_struct_21622 == null)))){
if(typeof child_struct_21622 === 'string'){
var text_21623 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21623),child_struct_21622].join(''));
} else {
var children_21624 = shadow.dom.svg_node(child_struct_21622);
if(cljs.core.seq_QMARK_(children_21624)){
var seq__20553_21625 = cljs.core.seq(children_21624);
var chunk__20555_21626 = null;
var count__20556_21627 = (0);
var i__20557_21628 = (0);
while(true){
if((i__20557_21628 < count__20556_21627)){
var child_21629 = chunk__20555_21626.cljs$core$IIndexed$_nth$arity$2(null,i__20557_21628);
if(cljs.core.truth_(child_21629)){
node.appendChild(child_21629);


var G__21630 = seq__20553_21625;
var G__21631 = chunk__20555_21626;
var G__21632 = count__20556_21627;
var G__21633 = (i__20557_21628 + (1));
seq__20553_21625 = G__21630;
chunk__20555_21626 = G__21631;
count__20556_21627 = G__21632;
i__20557_21628 = G__21633;
continue;
} else {
var G__21634 = seq__20553_21625;
var G__21635 = chunk__20555_21626;
var G__21636 = count__20556_21627;
var G__21637 = (i__20557_21628 + (1));
seq__20553_21625 = G__21634;
chunk__20555_21626 = G__21635;
count__20556_21627 = G__21636;
i__20557_21628 = G__21637;
continue;
}
} else {
var temp__5804__auto___21638__$1 = cljs.core.seq(seq__20553_21625);
if(temp__5804__auto___21638__$1){
var seq__20553_21639__$1 = temp__5804__auto___21638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20553_21639__$1)){
var c__5568__auto___21640 = cljs.core.chunk_first(seq__20553_21639__$1);
var G__21641 = cljs.core.chunk_rest(seq__20553_21639__$1);
var G__21642 = c__5568__auto___21640;
var G__21643 = cljs.core.count(c__5568__auto___21640);
var G__21644 = (0);
seq__20553_21625 = G__21641;
chunk__20555_21626 = G__21642;
count__20556_21627 = G__21643;
i__20557_21628 = G__21644;
continue;
} else {
var child_21645 = cljs.core.first(seq__20553_21639__$1);
if(cljs.core.truth_(child_21645)){
node.appendChild(child_21645);


var G__21646 = cljs.core.next(seq__20553_21639__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__20553_21625 = G__21646;
chunk__20555_21626 = G__21647;
count__20556_21627 = G__21648;
i__20557_21628 = G__21649;
continue;
} else {
var G__21650 = cljs.core.next(seq__20553_21639__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__20553_21625 = G__21650;
chunk__20555_21626 = G__21651;
count__20556_21627 = G__21652;
i__20557_21628 = G__21653;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21624);
}
}


var G__21654 = cljs.core.next(seq__20383_21616__$1);
var G__21655 = null;
var G__21656 = (0);
var G__21657 = (0);
seq__20383_21571 = G__21654;
chunk__20385_21572 = G__21655;
count__20386_21573 = G__21656;
i__20387_21574 = G__21657;
continue;
} else {
var G__21658 = cljs.core.next(seq__20383_21616__$1);
var G__21659 = null;
var G__21660 = (0);
var G__21661 = (0);
seq__20383_21571 = G__21658;
chunk__20385_21572 = G__21659;
count__20386_21573 = G__21660;
i__20387_21574 = G__21661;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21662 = arguments.length;
var i__5770__auto___21663 = (0);
while(true){
if((i__5770__auto___21663 < len__5769__auto___21662)){
args__5775__auto__.push((arguments[i__5770__auto___21663]));

var G__21664 = (i__5770__auto___21663 + (1));
i__5770__auto___21663 = G__21664;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20580){
var G__20581 = cljs.core.first(seq20580);
var seq20580__$1 = cljs.core.next(seq20580);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20581,seq20580__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20583 = arguments.length;
switch (G__20583) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__16772__auto___21666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16773__auto__ = (function (){var switch__16701__auto__ = (function (state_20588){
var state_val_20589 = (state_20588[(1)]);
if((state_val_20589 === (1))){
var state_20588__$1 = state_20588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20588__$1,(2),once_or_cleanup);
} else {
if((state_val_20589 === (2))){
var inst_20585 = (state_20588[(2)]);
var inst_20586 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20588__$1 = (function (){var statearr_20590 = state_20588;
(statearr_20590[(7)] = inst_20585);

return statearr_20590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20588__$1,inst_20586);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16702__auto__ = null;
var shadow$dom$state_machine__16702__auto____0 = (function (){
var statearr_20591 = [null,null,null,null,null,null,null,null];
(statearr_20591[(0)] = shadow$dom$state_machine__16702__auto__);

(statearr_20591[(1)] = (1));

return statearr_20591;
});
var shadow$dom$state_machine__16702__auto____1 = (function (state_20588){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_20588);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e20592){var ex__16705__auto__ = e20592;
var statearr_20593_21667 = state_20588;
(statearr_20593_21667[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_20588[(4)]))){
var statearr_20594_21668 = state_20588;
(statearr_20594_21668[(1)] = cljs.core.first((state_20588[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21669 = state_20588;
state_20588 = G__21669;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
shadow$dom$state_machine__16702__auto__ = function(state_20588){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16702__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16702__auto____1.call(this,state_20588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16702__auto____0;
shadow$dom$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16702__auto____1;
return shadow$dom$state_machine__16702__auto__;
})()
})();
var state__16774__auto__ = (function (){var statearr_20595 = f__16773__auto__();
(statearr_20595[(6)] = c__16772__auto___21666);

return statearr_20595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16774__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
