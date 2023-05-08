goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20108 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_20108(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20124 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_20124(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19167 = coll;
var G__19168 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19167,G__19168) : shadow.dom.lazy_native_coll_seq.call(null,G__19167,G__19168));
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
var G__19192 = arguments.length;
switch (G__19192) {
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
var G__19199 = arguments.length;
switch (G__19199) {
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
var G__19205 = arguments.length;
switch (G__19205) {
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
var G__19215 = arguments.length;
switch (G__19215) {
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
var G__19218 = arguments.length;
switch (G__19218) {
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
var G__19233 = arguments.length;
switch (G__19233) {
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
}catch (e19253){if((e19253 instanceof Object)){
var e = e19253;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19253;

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
var seq__19263 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19264 = null;
var count__19265 = (0);
var i__19266 = (0);
while(true){
if((i__19266 < count__19265)){
var el = chunk__19264.cljs$core$IIndexed$_nth$arity$2(null,i__19266);
var handler_20263__$1 = ((function (seq__19263,chunk__19264,count__19265,i__19266,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19263,chunk__19264,count__19265,i__19266,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20263__$1);


var G__20269 = seq__19263;
var G__20270 = chunk__19264;
var G__20271 = count__19265;
var G__20272 = (i__19266 + (1));
seq__19263 = G__20269;
chunk__19264 = G__20270;
count__19265 = G__20271;
i__19266 = G__20272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19263);
if(temp__5804__auto__){
var seq__19263__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19263__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19263__$1);
var G__20284 = cljs.core.chunk_rest(seq__19263__$1);
var G__20285 = c__5568__auto__;
var G__20286 = cljs.core.count(c__5568__auto__);
var G__20287 = (0);
seq__19263 = G__20284;
chunk__19264 = G__20285;
count__19265 = G__20286;
i__19266 = G__20287;
continue;
} else {
var el = cljs.core.first(seq__19263__$1);
var handler_20288__$1 = ((function (seq__19263,chunk__19264,count__19265,i__19266,el,seq__19263__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19263,chunk__19264,count__19265,i__19266,el,seq__19263__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20288__$1);


var G__20289 = cljs.core.next(seq__19263__$1);
var G__20290 = null;
var G__20291 = (0);
var G__20292 = (0);
seq__19263 = G__20289;
chunk__19264 = G__20290;
count__19265 = G__20291;
i__19266 = G__20292;
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
var G__19281 = arguments.length;
switch (G__19281) {
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
var seq__19293 = cljs.core.seq(events);
var chunk__19294 = null;
var count__19295 = (0);
var i__19296 = (0);
while(true){
if((i__19296 < count__19295)){
var vec__19309 = chunk__19294.cljs$core$IIndexed$_nth$arity$2(null,i__19296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20323 = seq__19293;
var G__20324 = chunk__19294;
var G__20325 = count__19295;
var G__20326 = (i__19296 + (1));
seq__19293 = G__20323;
chunk__19294 = G__20324;
count__19295 = G__20325;
i__19296 = G__20326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19293);
if(temp__5804__auto__){
var seq__19293__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19293__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19293__$1);
var G__20331 = cljs.core.chunk_rest(seq__19293__$1);
var G__20332 = c__5568__auto__;
var G__20333 = cljs.core.count(c__5568__auto__);
var G__20334 = (0);
seq__19293 = G__20331;
chunk__19294 = G__20332;
count__19295 = G__20333;
i__19296 = G__20334;
continue;
} else {
var vec__19323 = cljs.core.first(seq__19293__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20339 = cljs.core.next(seq__19293__$1);
var G__20340 = null;
var G__20341 = (0);
var G__20342 = (0);
seq__19293 = G__20339;
chunk__19294 = G__20340;
count__19295 = G__20341;
i__19296 = G__20342;
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
var seq__19330 = cljs.core.seq(styles);
var chunk__19331 = null;
var count__19332 = (0);
var i__19333 = (0);
while(true){
if((i__19333 < count__19332)){
var vec__19352 = chunk__19331.cljs$core$IIndexed$_nth$arity$2(null,i__19333);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19352,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20344 = seq__19330;
var G__20345 = chunk__19331;
var G__20346 = count__19332;
var G__20347 = (i__19333 + (1));
seq__19330 = G__20344;
chunk__19331 = G__20345;
count__19332 = G__20346;
i__19333 = G__20347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19330);
if(temp__5804__auto__){
var seq__19330__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19330__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19330__$1);
var G__20352 = cljs.core.chunk_rest(seq__19330__$1);
var G__20353 = c__5568__auto__;
var G__20354 = cljs.core.count(c__5568__auto__);
var G__20355 = (0);
seq__19330 = G__20352;
chunk__19331 = G__20353;
count__19332 = G__20354;
i__19333 = G__20355;
continue;
} else {
var vec__19356 = cljs.core.first(seq__19330__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20356 = cljs.core.next(seq__19330__$1);
var G__20358 = null;
var G__20359 = (0);
var G__20360 = (0);
seq__19330 = G__20356;
chunk__19331 = G__20358;
count__19332 = G__20359;
i__19333 = G__20360;
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
var G__19376_20363 = key;
var G__19376_20364__$1 = (((G__19376_20363 instanceof cljs.core.Keyword))?G__19376_20363.fqn:null);
switch (G__19376_20364__$1) {
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
var ks_20382 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20382,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20382,"aria-");
}
})())){
el.setAttribute(ks_20382,value);
} else {
(el[ks_20382] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19402){
var map__19403 = p__19402;
var map__19403__$1 = cljs.core.__destructure_map(map__19403);
var props = map__19403__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19404 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19404,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19404,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19404,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19407 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19407,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19407;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19409 = arguments.length;
switch (G__19409) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19424){
var vec__19425 = p__19424;
var seq__19426 = cljs.core.seq(vec__19425);
var first__19427 = cljs.core.first(seq__19426);
var seq__19426__$1 = cljs.core.next(seq__19426);
var nn = first__19427;
var first__19427__$1 = cljs.core.first(seq__19426__$1);
var seq__19426__$2 = cljs.core.next(seq__19426__$1);
var np = first__19427__$1;
var nc = seq__19426__$2;
var node = vec__19425;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19432 = nn;
var G__19433 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19432,G__19433) : create_fn.call(null,G__19432,G__19433));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19434 = nn;
var G__19435 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19434,G__19435) : create_fn.call(null,G__19434,G__19435));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19437 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19437,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19437,(1),null);
var seq__19441_20402 = cljs.core.seq(node_children);
var chunk__19442_20403 = null;
var count__19443_20404 = (0);
var i__19444_20405 = (0);
while(true){
if((i__19444_20405 < count__19443_20404)){
var child_struct_20406 = chunk__19442_20403.cljs$core$IIndexed$_nth$arity$2(null,i__19444_20405);
var children_20408 = shadow.dom.dom_node(child_struct_20406);
if(cljs.core.seq_QMARK_(children_20408)){
var seq__19485_20409 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20408));
var chunk__19487_20410 = null;
var count__19488_20411 = (0);
var i__19489_20412 = (0);
while(true){
if((i__19489_20412 < count__19488_20411)){
var child_20413 = chunk__19487_20410.cljs$core$IIndexed$_nth$arity$2(null,i__19489_20412);
if(cljs.core.truth_(child_20413)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20413);


var G__20414 = seq__19485_20409;
var G__20415 = chunk__19487_20410;
var G__20416 = count__19488_20411;
var G__20417 = (i__19489_20412 + (1));
seq__19485_20409 = G__20414;
chunk__19487_20410 = G__20415;
count__19488_20411 = G__20416;
i__19489_20412 = G__20417;
continue;
} else {
var G__20418 = seq__19485_20409;
var G__20419 = chunk__19487_20410;
var G__20420 = count__19488_20411;
var G__20421 = (i__19489_20412 + (1));
seq__19485_20409 = G__20418;
chunk__19487_20410 = G__20419;
count__19488_20411 = G__20420;
i__19489_20412 = G__20421;
continue;
}
} else {
var temp__5804__auto___20423 = cljs.core.seq(seq__19485_20409);
if(temp__5804__auto___20423){
var seq__19485_20424__$1 = temp__5804__auto___20423;
if(cljs.core.chunked_seq_QMARK_(seq__19485_20424__$1)){
var c__5568__auto___20425 = cljs.core.chunk_first(seq__19485_20424__$1);
var G__20426 = cljs.core.chunk_rest(seq__19485_20424__$1);
var G__20427 = c__5568__auto___20425;
var G__20428 = cljs.core.count(c__5568__auto___20425);
var G__20429 = (0);
seq__19485_20409 = G__20426;
chunk__19487_20410 = G__20427;
count__19488_20411 = G__20428;
i__19489_20412 = G__20429;
continue;
} else {
var child_20430 = cljs.core.first(seq__19485_20424__$1);
if(cljs.core.truth_(child_20430)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20430);


var G__20431 = cljs.core.next(seq__19485_20424__$1);
var G__20432 = null;
var G__20433 = (0);
var G__20434 = (0);
seq__19485_20409 = G__20431;
chunk__19487_20410 = G__20432;
count__19488_20411 = G__20433;
i__19489_20412 = G__20434;
continue;
} else {
var G__20435 = cljs.core.next(seq__19485_20424__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__19485_20409 = G__20435;
chunk__19487_20410 = G__20436;
count__19488_20411 = G__20437;
i__19489_20412 = G__20438;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20408);
}


var G__20439 = seq__19441_20402;
var G__20440 = chunk__19442_20403;
var G__20441 = count__19443_20404;
var G__20442 = (i__19444_20405 + (1));
seq__19441_20402 = G__20439;
chunk__19442_20403 = G__20440;
count__19443_20404 = G__20441;
i__19444_20405 = G__20442;
continue;
} else {
var temp__5804__auto___20443 = cljs.core.seq(seq__19441_20402);
if(temp__5804__auto___20443){
var seq__19441_20445__$1 = temp__5804__auto___20443;
if(cljs.core.chunked_seq_QMARK_(seq__19441_20445__$1)){
var c__5568__auto___20446 = cljs.core.chunk_first(seq__19441_20445__$1);
var G__20448 = cljs.core.chunk_rest(seq__19441_20445__$1);
var G__20449 = c__5568__auto___20446;
var G__20450 = cljs.core.count(c__5568__auto___20446);
var G__20451 = (0);
seq__19441_20402 = G__20448;
chunk__19442_20403 = G__20449;
count__19443_20404 = G__20450;
i__19444_20405 = G__20451;
continue;
} else {
var child_struct_20452 = cljs.core.first(seq__19441_20445__$1);
var children_20453 = shadow.dom.dom_node(child_struct_20452);
if(cljs.core.seq_QMARK_(children_20453)){
var seq__19512_20454 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20453));
var chunk__19514_20455 = null;
var count__19515_20456 = (0);
var i__19516_20457 = (0);
while(true){
if((i__19516_20457 < count__19515_20456)){
var child_20459 = chunk__19514_20455.cljs$core$IIndexed$_nth$arity$2(null,i__19516_20457);
if(cljs.core.truth_(child_20459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20459);


var G__20465 = seq__19512_20454;
var G__20466 = chunk__19514_20455;
var G__20467 = count__19515_20456;
var G__20468 = (i__19516_20457 + (1));
seq__19512_20454 = G__20465;
chunk__19514_20455 = G__20466;
count__19515_20456 = G__20467;
i__19516_20457 = G__20468;
continue;
} else {
var G__20469 = seq__19512_20454;
var G__20470 = chunk__19514_20455;
var G__20471 = count__19515_20456;
var G__20472 = (i__19516_20457 + (1));
seq__19512_20454 = G__20469;
chunk__19514_20455 = G__20470;
count__19515_20456 = G__20471;
i__19516_20457 = G__20472;
continue;
}
} else {
var temp__5804__auto___20474__$1 = cljs.core.seq(seq__19512_20454);
if(temp__5804__auto___20474__$1){
var seq__19512_20475__$1 = temp__5804__auto___20474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19512_20475__$1)){
var c__5568__auto___20476 = cljs.core.chunk_first(seq__19512_20475__$1);
var G__20477 = cljs.core.chunk_rest(seq__19512_20475__$1);
var G__20478 = c__5568__auto___20476;
var G__20479 = cljs.core.count(c__5568__auto___20476);
var G__20480 = (0);
seq__19512_20454 = G__20477;
chunk__19514_20455 = G__20478;
count__19515_20456 = G__20479;
i__19516_20457 = G__20480;
continue;
} else {
var child_20481 = cljs.core.first(seq__19512_20475__$1);
if(cljs.core.truth_(child_20481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20481);


var G__20482 = cljs.core.next(seq__19512_20475__$1);
var G__20483 = null;
var G__20484 = (0);
var G__20485 = (0);
seq__19512_20454 = G__20482;
chunk__19514_20455 = G__20483;
count__19515_20456 = G__20484;
i__19516_20457 = G__20485;
continue;
} else {
var G__20486 = cljs.core.next(seq__19512_20475__$1);
var G__20487 = null;
var G__20488 = (0);
var G__20489 = (0);
seq__19512_20454 = G__20486;
chunk__19514_20455 = G__20487;
count__19515_20456 = G__20488;
i__19516_20457 = G__20489;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20453);
}


var G__20491 = cljs.core.next(seq__19441_20445__$1);
var G__20492 = null;
var G__20493 = (0);
var G__20494 = (0);
seq__19441_20402 = G__20491;
chunk__19442_20403 = G__20492;
count__19443_20404 = G__20493;
i__19444_20405 = G__20494;
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
var seq__19553 = cljs.core.seq(node);
var chunk__19554 = null;
var count__19555 = (0);
var i__19556 = (0);
while(true){
if((i__19556 < count__19555)){
var n = chunk__19554.cljs$core$IIndexed$_nth$arity$2(null,i__19556);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20509 = seq__19553;
var G__20510 = chunk__19554;
var G__20511 = count__19555;
var G__20512 = (i__19556 + (1));
seq__19553 = G__20509;
chunk__19554 = G__20510;
count__19555 = G__20511;
i__19556 = G__20512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19553);
if(temp__5804__auto__){
var seq__19553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19553__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19553__$1);
var G__20515 = cljs.core.chunk_rest(seq__19553__$1);
var G__20516 = c__5568__auto__;
var G__20517 = cljs.core.count(c__5568__auto__);
var G__20518 = (0);
seq__19553 = G__20515;
chunk__19554 = G__20516;
count__19555 = G__20517;
i__19556 = G__20518;
continue;
} else {
var n = cljs.core.first(seq__19553__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20521 = cljs.core.next(seq__19553__$1);
var G__20522 = null;
var G__20523 = (0);
var G__20524 = (0);
seq__19553 = G__20521;
chunk__19554 = G__20522;
count__19555 = G__20523;
i__19556 = G__20524;
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
var G__19569 = arguments.length;
switch (G__19569) {
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
var G__19574 = arguments.length;
switch (G__19574) {
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
var G__19588 = arguments.length;
switch (G__19588) {
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
var len__5769__auto___20549 = arguments.length;
var i__5770__auto___20550 = (0);
while(true){
if((i__5770__auto___20550 < len__5769__auto___20549)){
args__5775__auto__.push((arguments[i__5770__auto___20550]));

var G__20551 = (i__5770__auto___20550 + (1));
i__5770__auto___20550 = G__20551;
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
var seq__19614_20552 = cljs.core.seq(nodes);
var chunk__19615_20553 = null;
var count__19616_20554 = (0);
var i__19617_20555 = (0);
while(true){
if((i__19617_20555 < count__19616_20554)){
var node_20556 = chunk__19615_20553.cljs$core$IIndexed$_nth$arity$2(null,i__19617_20555);
fragment.appendChild(shadow.dom._to_dom(node_20556));


var G__20557 = seq__19614_20552;
var G__20558 = chunk__19615_20553;
var G__20559 = count__19616_20554;
var G__20560 = (i__19617_20555 + (1));
seq__19614_20552 = G__20557;
chunk__19615_20553 = G__20558;
count__19616_20554 = G__20559;
i__19617_20555 = G__20560;
continue;
} else {
var temp__5804__auto___20562 = cljs.core.seq(seq__19614_20552);
if(temp__5804__auto___20562){
var seq__19614_20564__$1 = temp__5804__auto___20562;
if(cljs.core.chunked_seq_QMARK_(seq__19614_20564__$1)){
var c__5568__auto___20565 = cljs.core.chunk_first(seq__19614_20564__$1);
var G__20566 = cljs.core.chunk_rest(seq__19614_20564__$1);
var G__20567 = c__5568__auto___20565;
var G__20568 = cljs.core.count(c__5568__auto___20565);
var G__20569 = (0);
seq__19614_20552 = G__20566;
chunk__19615_20553 = G__20567;
count__19616_20554 = G__20568;
i__19617_20555 = G__20569;
continue;
} else {
var node_20570 = cljs.core.first(seq__19614_20564__$1);
fragment.appendChild(shadow.dom._to_dom(node_20570));


var G__20571 = cljs.core.next(seq__19614_20564__$1);
var G__20572 = null;
var G__20573 = (0);
var G__20574 = (0);
seq__19614_20552 = G__20571;
chunk__19615_20553 = G__20572;
count__19616_20554 = G__20573;
i__19617_20555 = G__20574;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19612){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19612));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19630_20578 = cljs.core.seq(scripts);
var chunk__19631_20579 = null;
var count__19632_20580 = (0);
var i__19633_20581 = (0);
while(true){
if((i__19633_20581 < count__19632_20580)){
var vec__19644_20584 = chunk__19631_20579.cljs$core$IIndexed$_nth$arity$2(null,i__19633_20581);
var script_tag_20585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644_20584,(0),null);
var script_body_20586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644_20584,(1),null);
eval(script_body_20586);


var G__20587 = seq__19630_20578;
var G__20588 = chunk__19631_20579;
var G__20589 = count__19632_20580;
var G__20590 = (i__19633_20581 + (1));
seq__19630_20578 = G__20587;
chunk__19631_20579 = G__20588;
count__19632_20580 = G__20589;
i__19633_20581 = G__20590;
continue;
} else {
var temp__5804__auto___20591 = cljs.core.seq(seq__19630_20578);
if(temp__5804__auto___20591){
var seq__19630_20592__$1 = temp__5804__auto___20591;
if(cljs.core.chunked_seq_QMARK_(seq__19630_20592__$1)){
var c__5568__auto___20593 = cljs.core.chunk_first(seq__19630_20592__$1);
var G__20594 = cljs.core.chunk_rest(seq__19630_20592__$1);
var G__20595 = c__5568__auto___20593;
var G__20596 = cljs.core.count(c__5568__auto___20593);
var G__20597 = (0);
seq__19630_20578 = G__20594;
chunk__19631_20579 = G__20595;
count__19632_20580 = G__20596;
i__19633_20581 = G__20597;
continue;
} else {
var vec__19649_20598 = cljs.core.first(seq__19630_20592__$1);
var script_tag_20599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649_20598,(0),null);
var script_body_20600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649_20598,(1),null);
eval(script_body_20600);


var G__20603 = cljs.core.next(seq__19630_20592__$1);
var G__20604 = null;
var G__20605 = (0);
var G__20606 = (0);
seq__19630_20578 = G__20603;
chunk__19631_20579 = G__20604;
count__19632_20580 = G__20605;
i__19633_20581 = G__20606;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19654){
var vec__19655 = p__19654;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655,(1),null);
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
var G__19664 = arguments.length;
switch (G__19664) {
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
var seq__19677 = cljs.core.seq(style_keys);
var chunk__19678 = null;
var count__19679 = (0);
var i__19680 = (0);
while(true){
if((i__19680 < count__19679)){
var it = chunk__19678.cljs$core$IIndexed$_nth$arity$2(null,i__19680);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20618 = seq__19677;
var G__20619 = chunk__19678;
var G__20620 = count__19679;
var G__20621 = (i__19680 + (1));
seq__19677 = G__20618;
chunk__19678 = G__20619;
count__19679 = G__20620;
i__19680 = G__20621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19677);
if(temp__5804__auto__){
var seq__19677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19677__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19677__$1);
var G__20622 = cljs.core.chunk_rest(seq__19677__$1);
var G__20623 = c__5568__auto__;
var G__20624 = cljs.core.count(c__5568__auto__);
var G__20625 = (0);
seq__19677 = G__20622;
chunk__19678 = G__20623;
count__19679 = G__20624;
i__19680 = G__20625;
continue;
} else {
var it = cljs.core.first(seq__19677__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20627 = cljs.core.next(seq__19677__$1);
var G__20628 = null;
var G__20629 = (0);
var G__20630 = (0);
seq__19677 = G__20627;
chunk__19678 = G__20628;
count__19679 = G__20629;
i__19680 = G__20630;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19688,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19694 = k19688;
var G__19694__$1 = (((G__19694 instanceof cljs.core.Keyword))?G__19694.fqn:null);
switch (G__19694__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19688,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19695){
var vec__19696 = p__19695;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19687){
var self__ = this;
var G__19687__$1 = this;
return (new cljs.core.RecordIter((0),G__19687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19690,other19691){
var self__ = this;
var this19690__$1 = this;
return (((!((other19691 == null)))) && ((((this19690__$1.constructor === other19691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19690__$1.x,other19691.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19690__$1.y,other19691.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19690__$1.__extmap,other19691.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19688){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19713 = k19688;
var G__19713__$1 = (((G__19713 instanceof cljs.core.Keyword))?G__19713.fqn:null);
switch (G__19713__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19688);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19687){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19715 = cljs.core.keyword_identical_QMARK_;
var expr__19716 = k__5352__auto__;
if(cljs.core.truth_((pred__19715.cljs$core$IFn$_invoke$arity$2 ? pred__19715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19716) : pred__19715.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19716)))){
return (new shadow.dom.Coordinate(G__19687,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19715.cljs$core$IFn$_invoke$arity$2 ? pred__19715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19716) : pred__19715.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19716)))){
return (new shadow.dom.Coordinate(self__.x,G__19687,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19687),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19687){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19687,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19692){
var extmap__5385__auto__ = (function (){var G__19727 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19692,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19692)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19727);
} else {
return G__19727;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19692),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19692),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19731,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19739 = k19731;
var G__19739__$1 = (((G__19739 instanceof cljs.core.Keyword))?G__19739.fqn:null);
switch (G__19739__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19731,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19748){
var vec__19749 = p__19748;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19749,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19749,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19730){
var self__ = this;
var G__19730__$1 = this;
return (new cljs.core.RecordIter((0),G__19730__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19732,other19733){
var self__ = this;
var this19732__$1 = this;
return (((!((other19733 == null)))) && ((((this19732__$1.constructor === other19733.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19732__$1.w,other19733.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19732__$1.h,other19733.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19732__$1.__extmap,other19733.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19731){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19767 = k19731;
var G__19767__$1 = (((G__19767 instanceof cljs.core.Keyword))?G__19767.fqn:null);
switch (G__19767__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19731);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19730){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19770 = cljs.core.keyword_identical_QMARK_;
var expr__19771 = k__5352__auto__;
if(cljs.core.truth_((pred__19770.cljs$core$IFn$_invoke$arity$2 ? pred__19770.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19771) : pred__19770.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19771)))){
return (new shadow.dom.Size(G__19730,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19770.cljs$core$IFn$_invoke$arity$2 ? pred__19770.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19771) : pred__19770.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19771)))){
return (new shadow.dom.Size(self__.w,G__19730,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19730),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19730){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19730,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19736){
var extmap__5385__auto__ = (function (){var G__19776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19736,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19736)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19776);
} else {
return G__19776;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19736),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19736),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__20675 = (i + (1));
var G__20676 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20675;
ret = G__20676;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19801){
var vec__19802 = p__19801;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19802,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19808 = arguments.length;
switch (G__19808) {
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
var G__20687 = ps;
var G__20688 = (i + (1));
el__$1 = G__20687;
i = G__20688;
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
var vec__19831 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19831,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19831,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19831,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19838_20702 = cljs.core.seq(props);
var chunk__19839_20703 = null;
var count__19840_20704 = (0);
var i__19841_20705 = (0);
while(true){
if((i__19841_20705 < count__19840_20704)){
var vec__19865_20706 = chunk__19839_20703.cljs$core$IIndexed$_nth$arity$2(null,i__19841_20705);
var k_20707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19865_20706,(0),null);
var v_20708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19865_20706,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20707);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20707),v_20708);


var G__20709 = seq__19838_20702;
var G__20710 = chunk__19839_20703;
var G__20711 = count__19840_20704;
var G__20712 = (i__19841_20705 + (1));
seq__19838_20702 = G__20709;
chunk__19839_20703 = G__20710;
count__19840_20704 = G__20711;
i__19841_20705 = G__20712;
continue;
} else {
var temp__5804__auto___20713 = cljs.core.seq(seq__19838_20702);
if(temp__5804__auto___20713){
var seq__19838_20714__$1 = temp__5804__auto___20713;
if(cljs.core.chunked_seq_QMARK_(seq__19838_20714__$1)){
var c__5568__auto___20716 = cljs.core.chunk_first(seq__19838_20714__$1);
var G__20718 = cljs.core.chunk_rest(seq__19838_20714__$1);
var G__20719 = c__5568__auto___20716;
var G__20720 = cljs.core.count(c__5568__auto___20716);
var G__20721 = (0);
seq__19838_20702 = G__20718;
chunk__19839_20703 = G__20719;
count__19840_20704 = G__20720;
i__19841_20705 = G__20721;
continue;
} else {
var vec__19875_20722 = cljs.core.first(seq__19838_20714__$1);
var k_20723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19875_20722,(0),null);
var v_20724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19875_20722,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20723);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20723),v_20724);


var G__20728 = cljs.core.next(seq__19838_20714__$1);
var G__20729 = null;
var G__20730 = (0);
var G__20731 = (0);
seq__19838_20702 = G__20728;
chunk__19839_20703 = G__20729;
count__19840_20704 = G__20730;
i__19841_20705 = G__20731;
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
var vec__19887 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19887,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19887,(1),null);
var seq__19891_20733 = cljs.core.seq(node_children);
var chunk__19893_20734 = null;
var count__19894_20735 = (0);
var i__19895_20736 = (0);
while(true){
if((i__19895_20736 < count__19894_20735)){
var child_struct_20737 = chunk__19893_20734.cljs$core$IIndexed$_nth$arity$2(null,i__19895_20736);
if((!((child_struct_20737 == null)))){
if(typeof child_struct_20737 === 'string'){
var text_20740 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20740),child_struct_20737].join(''));
} else {
var children_20744 = shadow.dom.svg_node(child_struct_20737);
if(cljs.core.seq_QMARK_(children_20744)){
var seq__19965_20757 = cljs.core.seq(children_20744);
var chunk__19967_20758 = null;
var count__19968_20759 = (0);
var i__19969_20760 = (0);
while(true){
if((i__19969_20760 < count__19968_20759)){
var child_20761 = chunk__19967_20758.cljs$core$IIndexed$_nth$arity$2(null,i__19969_20760);
if(cljs.core.truth_(child_20761)){
node.appendChild(child_20761);


var G__20767 = seq__19965_20757;
var G__20768 = chunk__19967_20758;
var G__20769 = count__19968_20759;
var G__20770 = (i__19969_20760 + (1));
seq__19965_20757 = G__20767;
chunk__19967_20758 = G__20768;
count__19968_20759 = G__20769;
i__19969_20760 = G__20770;
continue;
} else {
var G__20771 = seq__19965_20757;
var G__20772 = chunk__19967_20758;
var G__20773 = count__19968_20759;
var G__20774 = (i__19969_20760 + (1));
seq__19965_20757 = G__20771;
chunk__19967_20758 = G__20772;
count__19968_20759 = G__20773;
i__19969_20760 = G__20774;
continue;
}
} else {
var temp__5804__auto___20775 = cljs.core.seq(seq__19965_20757);
if(temp__5804__auto___20775){
var seq__19965_20776__$1 = temp__5804__auto___20775;
if(cljs.core.chunked_seq_QMARK_(seq__19965_20776__$1)){
var c__5568__auto___20777 = cljs.core.chunk_first(seq__19965_20776__$1);
var G__20778 = cljs.core.chunk_rest(seq__19965_20776__$1);
var G__20779 = c__5568__auto___20777;
var G__20780 = cljs.core.count(c__5568__auto___20777);
var G__20781 = (0);
seq__19965_20757 = G__20778;
chunk__19967_20758 = G__20779;
count__19968_20759 = G__20780;
i__19969_20760 = G__20781;
continue;
} else {
var child_20782 = cljs.core.first(seq__19965_20776__$1);
if(cljs.core.truth_(child_20782)){
node.appendChild(child_20782);


var G__20784 = cljs.core.next(seq__19965_20776__$1);
var G__20785 = null;
var G__20786 = (0);
var G__20787 = (0);
seq__19965_20757 = G__20784;
chunk__19967_20758 = G__20785;
count__19968_20759 = G__20786;
i__19969_20760 = G__20787;
continue;
} else {
var G__20788 = cljs.core.next(seq__19965_20776__$1);
var G__20789 = null;
var G__20790 = (0);
var G__20791 = (0);
seq__19965_20757 = G__20788;
chunk__19967_20758 = G__20789;
count__19968_20759 = G__20790;
i__19969_20760 = G__20791;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20744);
}
}


var G__20793 = seq__19891_20733;
var G__20794 = chunk__19893_20734;
var G__20795 = count__19894_20735;
var G__20796 = (i__19895_20736 + (1));
seq__19891_20733 = G__20793;
chunk__19893_20734 = G__20794;
count__19894_20735 = G__20795;
i__19895_20736 = G__20796;
continue;
} else {
var G__20797 = seq__19891_20733;
var G__20798 = chunk__19893_20734;
var G__20799 = count__19894_20735;
var G__20800 = (i__19895_20736 + (1));
seq__19891_20733 = G__20797;
chunk__19893_20734 = G__20798;
count__19894_20735 = G__20799;
i__19895_20736 = G__20800;
continue;
}
} else {
var temp__5804__auto___20801 = cljs.core.seq(seq__19891_20733);
if(temp__5804__auto___20801){
var seq__19891_20802__$1 = temp__5804__auto___20801;
if(cljs.core.chunked_seq_QMARK_(seq__19891_20802__$1)){
var c__5568__auto___20804 = cljs.core.chunk_first(seq__19891_20802__$1);
var G__20805 = cljs.core.chunk_rest(seq__19891_20802__$1);
var G__20806 = c__5568__auto___20804;
var G__20807 = cljs.core.count(c__5568__auto___20804);
var G__20808 = (0);
seq__19891_20733 = G__20805;
chunk__19893_20734 = G__20806;
count__19894_20735 = G__20807;
i__19895_20736 = G__20808;
continue;
} else {
var child_struct_20812 = cljs.core.first(seq__19891_20802__$1);
if((!((child_struct_20812 == null)))){
if(typeof child_struct_20812 === 'string'){
var text_20813 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20813),child_struct_20812].join(''));
} else {
var children_20816 = shadow.dom.svg_node(child_struct_20812);
if(cljs.core.seq_QMARK_(children_20816)){
var seq__19979_20817 = cljs.core.seq(children_20816);
var chunk__19981_20818 = null;
var count__19982_20819 = (0);
var i__19983_20820 = (0);
while(true){
if((i__19983_20820 < count__19982_20819)){
var child_20821 = chunk__19981_20818.cljs$core$IIndexed$_nth$arity$2(null,i__19983_20820);
if(cljs.core.truth_(child_20821)){
node.appendChild(child_20821);


var G__20822 = seq__19979_20817;
var G__20823 = chunk__19981_20818;
var G__20824 = count__19982_20819;
var G__20825 = (i__19983_20820 + (1));
seq__19979_20817 = G__20822;
chunk__19981_20818 = G__20823;
count__19982_20819 = G__20824;
i__19983_20820 = G__20825;
continue;
} else {
var G__20827 = seq__19979_20817;
var G__20828 = chunk__19981_20818;
var G__20829 = count__19982_20819;
var G__20830 = (i__19983_20820 + (1));
seq__19979_20817 = G__20827;
chunk__19981_20818 = G__20828;
count__19982_20819 = G__20829;
i__19983_20820 = G__20830;
continue;
}
} else {
var temp__5804__auto___20832__$1 = cljs.core.seq(seq__19979_20817);
if(temp__5804__auto___20832__$1){
var seq__19979_20833__$1 = temp__5804__auto___20832__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19979_20833__$1)){
var c__5568__auto___20834 = cljs.core.chunk_first(seq__19979_20833__$1);
var G__20835 = cljs.core.chunk_rest(seq__19979_20833__$1);
var G__20836 = c__5568__auto___20834;
var G__20837 = cljs.core.count(c__5568__auto___20834);
var G__20838 = (0);
seq__19979_20817 = G__20835;
chunk__19981_20818 = G__20836;
count__19982_20819 = G__20837;
i__19983_20820 = G__20838;
continue;
} else {
var child_20839 = cljs.core.first(seq__19979_20833__$1);
if(cljs.core.truth_(child_20839)){
node.appendChild(child_20839);


var G__20840 = cljs.core.next(seq__19979_20833__$1);
var G__20841 = null;
var G__20842 = (0);
var G__20843 = (0);
seq__19979_20817 = G__20840;
chunk__19981_20818 = G__20841;
count__19982_20819 = G__20842;
i__19983_20820 = G__20843;
continue;
} else {
var G__20844 = cljs.core.next(seq__19979_20833__$1);
var G__20845 = null;
var G__20846 = (0);
var G__20847 = (0);
seq__19979_20817 = G__20844;
chunk__19981_20818 = G__20845;
count__19982_20819 = G__20846;
i__19983_20820 = G__20847;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20816);
}
}


var G__20848 = cljs.core.next(seq__19891_20802__$1);
var G__20849 = null;
var G__20850 = (0);
var G__20851 = (0);
seq__19891_20733 = G__20848;
chunk__19893_20734 = G__20849;
count__19894_20735 = G__20850;
i__19895_20736 = G__20851;
continue;
} else {
var G__20852 = cljs.core.next(seq__19891_20802__$1);
var G__20853 = null;
var G__20854 = (0);
var G__20855 = (0);
seq__19891_20733 = G__20852;
chunk__19893_20734 = G__20853;
count__19894_20735 = G__20854;
i__19895_20736 = G__20855;
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
var len__5769__auto___20858 = arguments.length;
var i__5770__auto___20859 = (0);
while(true){
if((i__5770__auto___20859 < len__5769__auto___20858)){
args__5775__auto__.push((arguments[i__5770__auto___20859]));

var G__20860 = (i__5770__auto___20859 + (1));
i__5770__auto___20859 = G__20860;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20009){
var G__20010 = cljs.core.first(seq20009);
var seq20009__$1 = cljs.core.next(seq20009);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20010,seq20009__$1);
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
var G__20026 = arguments.length;
switch (G__20026) {
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
var c__16844__auto___20868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16845__auto__ = (function (){var switch__16701__auto__ = (function (state_20048){
var state_val_20049 = (state_20048[(1)]);
if((state_val_20049 === (1))){
var state_20048__$1 = state_20048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20048__$1,(2),once_or_cleanup);
} else {
if((state_val_20049 === (2))){
var inst_20045 = (state_20048[(2)]);
var inst_20046 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20048__$1 = (function (){var statearr_20051 = state_20048;
(statearr_20051[(7)] = inst_20045);

return statearr_20051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20048__$1,inst_20046);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16702__auto__ = null;
var shadow$dom$state_machine__16702__auto____0 = (function (){
var statearr_20054 = [null,null,null,null,null,null,null,null];
(statearr_20054[(0)] = shadow$dom$state_machine__16702__auto__);

(statearr_20054[(1)] = (1));

return statearr_20054;
});
var shadow$dom$state_machine__16702__auto____1 = (function (state_20048){
while(true){
var ret_value__16703__auto__ = (function (){try{while(true){
var result__16704__auto__ = switch__16701__auto__(state_20048);
if(cljs.core.keyword_identical_QMARK_(result__16704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16704__auto__;
}
break;
}
}catch (e20055){var ex__16705__auto__ = e20055;
var statearr_20057_20875 = state_20048;
(statearr_20057_20875[(2)] = ex__16705__auto__);


if(cljs.core.seq((state_20048[(4)]))){
var statearr_20058_20877 = state_20048;
(statearr_20058_20877[(1)] = cljs.core.first((state_20048[(4)])));

} else {
throw ex__16705__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20880 = state_20048;
state_20048 = G__20880;
continue;
} else {
return ret_value__16703__auto__;
}
break;
}
});
shadow$dom$state_machine__16702__auto__ = function(state_20048){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16702__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16702__auto____1.call(this,state_20048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16702__auto____0;
shadow$dom$state_machine__16702__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16702__auto____1;
return shadow$dom$state_machine__16702__auto__;
})()
})();
var state__16846__auto__ = (function (){var statearr_20061 = f__16845__auto__();
(statearr_20061[(6)] = c__16844__auto___20868);

return statearr_20061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16846__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
