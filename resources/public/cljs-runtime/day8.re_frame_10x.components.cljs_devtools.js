goog.provide('day8.re_frame_10x.components.cljs_devtools');
goog.scope(function(){
  day8.re_frame_10x.components.cljs_devtools.goog$module$goog$object = goog.module.get('goog.object');
});
day8.re_frame_10x.components.cljs_devtools.default_config = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame_10x.components.cljs_devtools.base_config = (function day8$re_frame_10x$components$cljs_devtools$base_config(ambiance,syntax_color_scheme){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624),new cljs.core.Keyword(null,"symbol-style","symbol-style",1022654848),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),new cljs.core.Keyword(null,"body-field-td3-style","body-field-td3-style",53039394),new cljs.core.Keyword(null,"meta-reference-style","meta-reference-style",-1930118462),new cljs.core.Keyword(null,"header-style","header-style",-2122121341),new cljs.core.Keyword(null,"fn-args-style","fn-args-style",-2141623900),new cljs.core.Keyword(null,"expandable-inner-style","expandable-inner-style",-1596774780),new cljs.core.Keyword(null,"fn-header-style","fn-header-style",985447749),new cljs.core.Keyword(null,"fn-name-style","fn-name-style",-573451611),new cljs.core.Keyword(null,"fast-protocol-style","fast-protocol-style",-1668076410),new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.Keyword(null,"protocol-method-name-style","protocol-method-name-style",-718367832),new cljs.core.Keyword(null,"protocol-ns-name-style","protocol-ns-name-style",2075298601),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"body-field-value-style","body-field-value-style",752084266),new cljs.core.Keyword(null,"body-items-more-style","body-items-more-style",1518949066),new cljs.core.Keyword(null,"fn-prefix-style","fn-prefix-style",991677739),new cljs.core.Keyword(null,"expanded-string-style","expanded-string-style",-543781397),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),new cljs.core.Keyword(null,"type-wrapper-style","type-wrapper-style",-922880468),new cljs.core.Keyword(null,"body-field-td2-style","body-field-td2-style",-278192403),new cljs.core.Keyword(null,"type-header-style","type-header-style",1821477837),new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586),new cljs.core.Keyword(null,"instance-custom-printing-wrapper-style","instance-custom-printing-wrapper-style",374945134),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),new cljs.core.Keyword(null,"float-style","float-style",705926672),new cljs.core.Keyword(null,"bool-style","bool-style",-1275737743),new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479),new cljs.core.Keyword(null,"string-style","string-style",744195825),new cljs.core.Keyword(null,"body-field-name-style","body-field-name-style",1518272241),new cljs.core.Keyword(null,"integer-style","integer-style",1568434578),new cljs.core.Keyword(null,"header-field-name-style","header-field-name-style",-804007278),new cljs.core.Keyword(null,"instance-type-header-style","instance-type-header-style",1601743858),new cljs.core.Keyword(null,"instance-custom-printing-style","instance-custom-printing-style",-716263405),new cljs.core.Keyword(null,"float-nan-style","float-nan-style",967384179),new cljs.core.Keyword(null,"fields-header-style","fields-header-style",-25300493),new cljs.core.Keyword(null,"body-field-td1-style","body-field-td1-style",988760979),new cljs.core.Keyword(null,"type-name-style","type-name-style",652886356),new cljs.core.Keyword(null,"float-infinity-style","float-infinity-style",-476570060),new cljs.core.Keyword(null,"instance-body-fields-table-style","instance-body-fields-table-style",-1457745996),new cljs.core.Keyword(null,"standard-li-no-margin-style","standard-li-no-margin-style",87138485),new cljs.core.Keyword(null,"slow-protocol-style","slow-protocol-style",-714284811),new cljs.core.Keyword(null,"item-style","item-style",-188747722),new cljs.core.Keyword(null,"index-style","index-style",93813430),new cljs.core.Keyword(null,"expandable-style","expandable-style",-501370920),new cljs.core.Keyword(null,"fn-multi-arity-args-indent-style","fn-multi-arity-args-indent-style",-1170401159),new cljs.core.Keyword(null,"type-ref-style","type-ref-style",-1940011911),new cljs.core.Keyword(null,"type-basis-style","type-basis-style",-1272137383),new cljs.core.Keyword(null,"fn-ns-name-style","fn-ns-name-style",-21387751),new cljs.core.Keyword(null,"native-reference-wrapper-style","native-reference-wrapper-style",578741818),new cljs.core.Keyword(null,"meta-wrapper-style","meta-wrapper-style",-1627075237),new cljs.core.Keyword(null,"meta-body-style","meta-body-style",-1858094980),new cljs.core.Keyword(null,"native-reference-style","native-reference-style",-1773393444),new cljs.core.Keyword(null,"aligned-li-style","aligned-li-style",43721341),new cljs.core.Keyword(null,"protocol-more-style","protocol-more-style",-870041570),new cljs.core.Keyword(null,"none-style","none-style",1613422814),new cljs.core.Keyword(null,"protocol-name-style","protocol-name-style",-1291847714),new cljs.core.Keyword(null,"keyword-style","keyword-style",-780643937),new cljs.core.Keyword(null,"meta-style","meta-style",1528213407)],[(10000),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"nil","nil",99600501))], null)], 0)),false,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0)], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fast-protocol","fast-protocol",1016430030)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((6)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"protocol","protocol",652470118))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"ns","ns",441598760))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((6))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin","margin",-995903681)],[day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14)),day8.re_frame_10x.styles.gs_50,day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"more","more",-2058821800)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((10)),new cljs.core.Keyword(null,"none","none",1333468478),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"more-background","more-background",763021144)),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),(0),(0),(0)], null)], null)])], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_12,(0),day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"string","string",-1989541586)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"expanded-string-border","expanded-string-border",106661998))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0)], null)], null),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"expanded-string-background","expanded-string-background",-916830349))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"type-text","type-text",-1047202666)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),(3),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float","float",-1732389368))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"string","string",-1989541586))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"field","field",-1302436500))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"integer","integer",-604721710))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"field","field",-1302436500))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"type-text","type-text",-1047202666)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float-nan","float-nan",1418746558))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_2], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float-infinity","float-infinity",1137454398))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),(0),new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2)),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"slow-protocol","slow-protocol",905914937)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"#000","#000",-1342202220)], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_5,(0),day8.re_frame_10x.styles.gs_5], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1),(0),(0),(0))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"margin","margin",-995903681)],[day8.re_frame_10x.styles.gs_50,day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"index","index",-1531685915)),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"text-top","text-top",-582075565),new cljs.core.Keyword(null,"none","none",1333468478),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"index-background","index-background",-1459988065)),0.5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_2,(0),day8.re_frame_10x.styles.gs_2], null)], null),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),day8.re_frame_10x.styles.gs_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),(0),(0),(0)], null)], null)])], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),day8.re_frame_10x.styles.gs_2], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"ns","ns",441598760))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"inset","inset",-396367740)], null)], null),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"inset","inset",-396367740)], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-1)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((12))], null)], null),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-4)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2))], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((8)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"keyword","keyword",811389747))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta-text","meta-text",-1707028486)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0))]);
});
day8.re_frame_10x.components.cljs_devtools.body_style_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.gs_2,day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.nord3], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null);
day8.re_frame_10x.components.cljs_devtools.dark_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord6], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.bright_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord0], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.custom_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.default_config,day8.re_frame_10x.components.cljs_devtools.base_config(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891))], 0));
day8.re_frame_10x.components.cljs_devtools.header = (function day8$re_frame_10x$components$cljs_devtools$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15139 = arguments.length;
var i__5770__auto___15140 = (0);
while(true){
if((i__5770__auto___15140 < len__5769__auto___15139)){
args__5775__auto__.push((arguments[i__5770__auto___15140]));

var G__15141 = (i__5770__auto___15140 + (1));
i__5770__auto___15140 = G__15141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__15031){
var vec__15032 = p__15031;
var map__15035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15032,(0),null);
var map__15035__$1 = cljs.core.__destructure_map(map__15035);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15035__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__15021__auto__ = devtools.prefs.get_prefs();
var prefs__15022__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__15022__auto__);

return devtools.formatters.core.header_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__15022__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__15022__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__15021__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$applyTo = (function (seq15028){
var G__15029 = cljs.core.first(seq15028);
var seq15028__$1 = cljs.core.next(seq15028);
var G__15030 = cljs.core.first(seq15028__$1);
var seq15028__$2 = cljs.core.next(seq15028__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15029,G__15030,seq15028__$2);
}));

day8.re_frame_10x.components.cljs_devtools.body = (function day8$re_frame_10x$components$cljs_devtools$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15142 = arguments.length;
var i__5770__auto___15143 = (0);
while(true){
if((i__5770__auto___15143 < len__5769__auto___15142)){
args__5775__auto__.push((arguments[i__5770__auto___15143]));

var G__15144 = (i__5770__auto___15143 + (1));
i__5770__auto___15143 = G__15144;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__15039){
var vec__15040 = p__15039;
var map__15043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(0),null);
var map__15043__$1 = cljs.core.__destructure_map(map__15043);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15043__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__15021__auto__ = devtools.prefs.get_prefs();
var prefs__15022__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__15022__auto__);

return devtools.formatters.core.body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__15022__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__15022__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__15021__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$applyTo = (function (seq15036){
var G__15037 = cljs.core.first(seq15036);
var seq15036__$1 = cljs.core.next(seq15036);
var G__15038 = cljs.core.first(seq15036__$1);
var seq15036__$2 = cljs.core.next(seq15036__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15037,G__15038,seq15036__$2);
}));

day8.re_frame_10x.components.cljs_devtools.has_body = (function day8$re_frame_10x$components$cljs_devtools$has_body(value,config){
var previous_config__15021__auto__ = devtools.prefs.get_prefs();
var prefs__15022__auto__ = day8.re_frame_10x.components.cljs_devtools.custom_config;
try{devtools.prefs.set_prefs_BANG_(prefs__15022__auto__);

return devtools.formatters.core.has_body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__15022__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__15022__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__15021__auto__);
}});
day8.re_frame_10x.components.cljs_devtools.get_object = (function day8$re_frame_10x$components$cljs_devtools$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.components.cljs_devtools.get_config = (function day8$re_frame_10x$components$cljs_devtools$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style_factory$(style_name15044,params15045){
var style15047 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name15044)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"text-top","text-top",-582075565)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style15047),new cljs.core.Keyword(null,"name","name",1843675177),style_name15044], null);
});

var factory_name15046_15146 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$);
day8.re_frame_10x.components.cljs_devtools.jsonml_style = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name15046_15146,day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$toggle_style_factory$(style_name15049,params15050,ambiance){
var base_style15054 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?day8.re_frame_10x.styles.nord0:day8.re_frame_10x.styles.nord5)], null)], null)], null);
var key__14332__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style15054)));
var name15053 = (function (){var fexpr__15055 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__15055.cljs$core$IFn$_invoke$arity$3 ? fexpr__15055.cljs$core$IFn$_invoke$arity$3(style_name15049,key__14332__auto__,params15050) : fexpr__15055.call(null,style_name15049,key__14332__auto__,params15050));
})();
var style15052 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name15053)].join('')], null),base_style15054);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style15052),new cljs.core.Keyword(null,"name","name",1843675177),name15053], null);
});

var factory_name15051_15153 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$);
day8.re_frame_10x.components.cljs_devtools.toggle_style = (function day8$re_frame_10x$components$cljs_devtools$toggle_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name15051_15153,day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.cljs_devtools.data_structure = (function day8$re_frame_10x$components$cljs_devtools$data_structure(_,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),path], null));
return (function (jsonml,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),path__$1], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
} else {
return and__5043__auto__;
}
})())?(function (){var G__15056 = day8.re_frame_10x.components.cljs_devtools.body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__15057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__15056,G__15057) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__15056,G__15057));
})():(function (){var G__15058 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__15059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__15058,G__15059) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__15058,G__15059));
})())], null);
});
});
day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$data_structure_with_path_annotations(_,indexed_path,devtools_path,p__15060){
var map__15061 = p__15060;
var map__15061__$1 = cljs.core.__destructure_map(map__15061);
var opts = map__15061__$1;
var update_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15061__$1,new cljs.core.Keyword(null,"update-path-fn","update-path-fn",878085992));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15061__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),indexed_path], null));
var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
return (function (jsonml,indexed_path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),indexed_path__$1], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
} else {
return and__5043__auto__;
}
})())?(function (){var G__15062 = day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0));
var G__15063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__15064 = devtools_path;
var G__15065 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__15062,G__15063,G__15064,G__15065) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__15062,G__15063,G__15064,G__15065));
})():(function (){var G__15066 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__15067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path__$1,new cljs.core.Keyword(null,"header","header",119441134));
var G__15068 = devtools_path;
var G__15069 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__15066,G__15067,G__15068,G__15069) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__15066,G__15067,G__15068,G__15069));
})())], null);
});
});
/**
 * This function converts jsonml css-strings to valid css maps for hiccup.
 *   Example: 'margin-left:0px;min-height:14px;' converts to
 *         {:margin-left '0px', :min-height '14px'}
 */
day8.re_frame_10x.components.cljs_devtools.string__GT_css = (function day8$re_frame_10x$components$cljs_devtools$string__GT_css(css_string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__15071){
var vec__15072 = p__15071;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15072,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15072,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15070_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__15070_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__15075 = jsonml;
var seq__15076 = cljs.core.seq(vec__15075);
var first__15077 = cljs.core.first(seq__15076);
var seq__15076__$1 = cljs.core.next(seq__15076);
var tag_name = first__15077;
var first__15077__$1 = cljs.core.first(seq__15076__$1);
var seq__15076__$2 = cljs.core.next(seq__15076__$1);
var attributes = first__15077__$1;
var children = seq__15076__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__15078 = child;
var G__15079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__15078,G__15079) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__15078,G__15079));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure,jsonml,path], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__15080 = child;
var G__15081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__15080,G__15081) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__15080,G__15081));
})),children);
} else {
return jsonml;

}
}
}
}
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup_with_path_annotations(jsonml,indexed_path,devtools_path,p__15082){
var map__15083 = p__15082;
var map__15083__$1 = cljs.core.__destructure_map(map__15083);
var opts = map__15083__$1;
var update_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15083__$1,new cljs.core.Keyword(null,"update-path-fn","update-path-fn",878085992));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15083__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15083__$1,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084));
var menu_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15083__$1,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230));
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__15084 = jsonml;
var seq__15085 = cljs.core.seq(vec__15084);
var first__15086 = cljs.core.first(seq__15085);
var seq__15085__$1 = cljs.core.next(seq__15085);
var tag_name = first__15086;
var first__15086__$1 = cljs.core.first(seq__15085__$1);
var seq__15085__$2 = cljs.core.next(seq__15085__$1);
var attributes = first__15086__$1;
var children = seq__15085__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__15087 = child;
var G__15088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__15089 = devtools_path;
var G__15090 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__15087,G__15088,G__15089,G__15090) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__15087,G__15088,G__15089,G__15090));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations,jsonml,indexed_path,devtools_path,opts], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
var index = cljs.core.last(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
var devtools_path__$1 = (cljs.core.truth_(index)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools_path,index):devtools_path);
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var child_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var child_value = (((child_element instanceof Array))?cljs.core.nth.cljs$core$IFn$_invoke$arity$3(child_element,(2),null):null);
if(((typeof child_value === 'string') || (((typeof child_value === 'number') || ((child_value instanceof cljs.core.Keyword)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component){
var component__$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(component);
goog.events.listen(component__$1,"contextmenu",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(menu_listener,object));

return goog.events.listen(component__$1,"click",click_listener);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"path-annotation",new cljs.core.Keyword(null,"data-path","data-path",674802181),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools_path__$1)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,child){
var G__15091 = child;
var G__15092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__15093 = devtools_path__$1;
var G__15094 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__15091,G__15092,G__15093,G__15094) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__15091,G__15092,G__15093,G__15094));
}),children));
})], null))], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,child){
var G__15095 = child;
var G__15096 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__15097 = devtools_path__$1;
var G__15098 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__15095,G__15096,G__15097,G__15098) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__15095,G__15096,G__15097,G__15098));
}),children));
}
} else {
return jsonml;

}
}
}
}
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_QMARK_(data){
return ((typeof data === 'string') || ((((data instanceof RegExp)) || (((typeof data === 'number') || (((cljs.core.boolean_QMARK_(data)) || ((data == null)))))))));
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style_factory$(style_name15099,params15100){
var style15102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name15099)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style15102),new cljs.core.Keyword(null,"name","name",1843675177),style_name15099], null);
});

var factory_name15101_15162 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$);
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name15101_15162,day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.prn_str_render_style()], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.simple_render = (function day8$re_frame_10x$components$cljs_devtools$simple_render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15163 = arguments.length;
var i__5770__auto___15164 = (0);
while(true){
if((i__5770__auto___15164 < len__5769__auto___15163)){
args__5775__auto__.push((arguments[i__5770__auto___15164]));

var G__15165 = (i__5770__auto___15164 + (1));
i__5770__auto___15164 = G__15165;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__15107){
var vec__15108 = p__15107;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15108,(0),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup(day8.re_frame_10x.components.cljs_devtools.header(data,null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$applyTo = (function (seq15104){
var G__15105 = cljs.core.first(seq15104);
var seq15104__$1 = cljs.core.next(seq15104);
var G__15106 = cljs.core.first(seq15104__$1);
var seq15104__$2 = cljs.core.next(seq15104__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15105,G__15106,seq15104__$2);
}));

day8.re_frame_10x.components.cljs_devtools.popup_menus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
day8.re_frame_10x.components.cljs_devtools.event_log = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
day8.re_frame_10x.components.cljs_devtools.build_popup = (function day8$re_frame_10x$components$cljs_devtools$build_popup(data,path,viewing_path,html_element){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.popup_menus),html_element.id);
if(cljs.core.truth_(temp__5802__auto__)){
var rendered_QMARK_ = temp__5802__auto__;
return rendered_QMARK_.setVisible(true);
} else {
var popup_menu = (new goog.ui.PopupMenu());
var js_menu_style = goog.style.toStyleAttribute(({"text-align": "center", "padding": "10px 0", "border": "1px solid black"}));
var create_menu_item = (function (menu_text){
return (new goog.ui.MenuItem((function (){var G__15111 = goog.dom.createDom(goog.dom.TagName.DIV,({}),goog.dom.createDom(goog.dom.TagName.SPAN,({}),menu_text));
G__15111.setAttribute("style",js_menu_style);

return G__15111;
})()));
});
var copy_path_item = create_menu_item("Copy path");
var copy_obj_item = create_menu_item("Copy object");
var copy_repl_item = create_menu_item("Copy REPL command");
var element_rect = html_element.getBoundingClientRect();
var x_pos = (element_rect.left + window.scrollX);
var y_pos = (element_rect.top + window.scrollY);
var G__15112_15170 = copy_path_item;
G__15112_15170.addClassName("copy-path");

G__15112_15170.addClassName("10x-menu-item");


var G__15113_15171 = copy_obj_item;
G__15113_15171.addClassName("copy-object");

G__15113_15171.addClassName("10x-menu-item");


var G__15114_15172 = copy_repl_item;
G__15114_15172.addClassName("copy-repl");

G__15114_15172.addClassName("10x-menu-item");


var G__15115_15173 = popup_menu;
G__15115_15173.addItem(copy_path_item);

G__15115_15173.addItem(copy_obj_item);

G__15115_15173.addItem(copy_repl_item);

G__15115_15173.showAt(x_pos,y_pos);

G__15115_15173.render(html_element);


goog.object.forEach(goog.ui.Component.EventType,(function (type){
return goog.events.listen(popup_menu,type,(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"hide")){
if(((cljs.core.empty_QMARK_(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.event_log))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.event_log)),"unhighlight")))){
return null;
} else {
return e.preventDefault();
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"action")){
var class_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(e.target.getExtraClassNames());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.components.cljs_devtools.event_log,cljs.core.conj,"action");

if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-object");
}),class_names))){
var path_obj = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path);
var nested_QMARK_ = (cljs.core.truth_(viewing_path)?cljs.core.count(viewing_path):null);
var path_obj__$1 = (cljs.core.truth_(nested_QMARK_)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(path_obj,nested_QMARK_):path_obj);
var object = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,path_obj__$1);
if(cljs.core.truth_((function (){var or__5045__auto__ = object;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((!((object == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(object,false)));
}
})())){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(object);
} else {
return console.error("Could not copy!");
}
} else {
if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-path");
}),class_names))){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(path);
} else {
if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-repl");
}),class_names))){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(["(simple-render-with-path-annotations ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-path",path], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),")"].join(''));
} else {
return null;
}
}
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.components.cljs_devtools.event_log,cljs.core.conj,e.type);

}
}
}));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.components.cljs_devtools.popup_menus,cljs.core.assoc,html_element.id,popup_menu);
}
});
day8.re_frame_10x.components.cljs_devtools.current_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$simple_render_with_path_annotations(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15177 = arguments.length;
var i__5770__auto___15178 = (0);
while(true){
if((i__5770__auto___15178 < len__5769__auto___15177)){
args__5775__auto__.push((arguments[i__5770__auto___15178]));

var G__15179 = (i__5770__auto___15178 + (1));
i__5770__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$core$IFn$_invoke$arity$variadic = (function (data,indexed_path,p__15120,p__15121){
var map__15122 = p__15120;
var map__15122__$1 = cljs.core.__destructure_map(map__15122);
var opts = map__15122__$1;
var update_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15122__$1,new cljs.core.Keyword(null,"update-path-fn","update-path-fn",878085992));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15122__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var vec__15123 = p__15121;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15123,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.current_data),data)){
cljs.core.reset_BANG_(day8.re_frame_10x.components.cljs_devtools.current_data,data);
} else {
}

var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
var data__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.map_QMARK_(data);
} else {
return and__5043__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),data):data);
var devtools_path = cljs.core.second(indexed_path);
var menu_listener = (function (obj,event){
var target = event.target.parentElement;
var path = target.getAttribute("data-path");
event.preventDefault();

return day8.re_frame_10x.components.cljs_devtools.build_popup(cljs.core.deref(obj),path,devtools_path,target);
});
var click_listener = (function (event){
var target = event.target.parentElement;
var path = target.getAttribute("data-path");
var btn = event.button;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btn,(0))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(update_path_fn,path));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic(data__$1,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,(0)),(function (){var or__5045__auto__ = devtools_path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"object","object",1474613949),day8.re_frame_10x.components.cljs_devtools.current_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084),click_listener,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230),menu_listener], 0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$lang$applyTo = (function (seq15116){
var G__15117 = cljs.core.first(seq15116);
var seq15116__$1 = cljs.core.next(seq15116);
var G__15118 = cljs.core.first(seq15116__$1);
var seq15116__$2 = cljs.core.next(seq15116__$1);
var G__15119 = cljs.core.first(seq15116__$2);
var seq15116__$3 = cljs.core.next(seq15116__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15117,G__15118,G__15119,seq15116__$3);
}));


//# sourceMappingURL=day8.re_frame_10x.components.cljs_devtools.js.map
