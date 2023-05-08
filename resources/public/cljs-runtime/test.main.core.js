goog.provide('test.main.core');
test.main.core.home_page = (function test$main$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FUCKING FINALLY!"], null)], null)], null);
});
test.main.core.root = (function test$main$core$root(){
return null;
});
test.main.core.mount_root = (function test$main$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test.main.core.home_page], null),document.getElementById("app"));
});
test.main.core.init_BANG_ = (function test$main$core$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return test.main.core.mount_root();
});
goog.exportSymbol('test.main.core.init_BANG_', test.main.core.init_BANG_);

//# sourceMappingURL=test.main.core.js.map
