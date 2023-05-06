goog.provide('test.main.core');
test.main.core.home_page = (function test$main$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent!"], null)], null);
});
test.main.core.mount_root = (function test$main$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.main.core.home_page], null),document.getElementById("app"));
});
test.main.core.init_BANG_ = (function test$main$core$init_BANG_(){
return test.main.core.mount_root();
});
goog.exportSymbol('test.main.core.init_BANG_', test.main.core.init_BANG_);

//# sourceMappingURL=test.main.core.js.map
