goog.provide('rewrite_clj.parser.core');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.reader.read_repeatedly(reader,(function (p1__15986_SHARP_){
var _STAR_delimiter_STAR__orig_val__15987 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__15988 = delimiter;
(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__15988);

try{return (rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1(p1__15986_SHARP_) : rewrite_clj.parser.core.parse_next.call(null,p1__15986_SHARP_));
}finally {(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__15987);
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16021 = arguments.length;
var i__5770__auto___16022 = (0);
while(true){
if((i__5770__auto___16022 < len__5769__auto___16021)){
args__5775__auto__.push((arguments[i__5770__auto___16022]));

var G__16023 = (i__5770__auto___16022 + (1));
i__5770__auto___16022 = G__16023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__15993){
var vec__15994 = p__15993;
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore(reader);
} else {
}

return rewrite_clj.reader.read_n(reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement(rewrite_clj.node.printable_only_QMARK_),n);
}));

(rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq15989){
var G__15990 = cljs.core.first(seq15989);
var seq15989__$1 = cljs.core.next(seq15989);
var G__15991 = cljs.core.first(seq15989__$1);
var seq15989__$2 = cljs.core.next(seq15989__$1);
var G__15992 = cljs.core.first(seq15989__$2);
var seq15989__$3 = cljs.core.next(seq15989__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15990,G__15991,G__15992,seq15989__$3);
}));

rewrite_clj.parser.core.parse_meta = (function rewrite_clj$parser$core$parse_meta(reader){
rewrite_clj.reader.ignore(reader);

var G__15997 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__15997) : rewrite_clj.node.meta_node.call(null,G__15997));
});
rewrite_clj.parser.core.parse_eof = (function rewrite_clj$parser$core$parse_eof(reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
return null;
}
});
rewrite_clj.parser.core.parse_list = (function rewrite_clj$parser$core$parse_list(reader){
var G__15998 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1(G__15998) : rewrite_clj.node.list_node.call(null,G__15998));
});
rewrite_clj.parser.core.parse_vector = (function rewrite_clj$parser$core$parse_vector(reader){
var G__15999 = rewrite_clj.parser.core.parse_delim(reader,"]");
return (rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1(G__15999) : rewrite_clj.node.vector_node.call(null,G__15999));
});
rewrite_clj.parser.core.parse_map = (function rewrite_clj$parser$core$parse_map(reader){
var G__16000 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1(G__16000) : rewrite_clj.node.map_node.call(null,G__16000));
});
rewrite_clj.parser.core.parse_conditional = (function rewrite_clj$parser$core$parse_conditional(reader){
rewrite_clj.reader.next(reader);

var G__16001 = (function (){var read1 = (function (){
return rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(1));
});
return cljs.core.cons((function (){var G__16002 = rewrite_clj.reader.peek(reader);
switch (G__16002) {
case "(":
var G__16003 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__16003) : rewrite_clj.node.token_node.call(null,G__16003));

break;
case "@":
rewrite_clj.reader.next(reader);

var G__16004 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?@");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__16004) : rewrite_clj.node.token_node.call(null,G__16004));

break;
default:
var G__16005_16025 = reader;
var G__16006_16026 = "?";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__16005_16025,G__16006_16026) : rewrite_clj.reader.unread.call(null,G__16005_16025,G__16006_16026));

return cljs.core.first(read1());

}
})(),read1());
})();
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__16001) : rewrite_clj.node.reader_macro_node.call(null,G__16001));
});
rewrite_clj.parser.core.parse_sharp = (function rewrite_clj$parser$core$parse_sharp(reader){
rewrite_clj.reader.ignore(reader);

var G__16007 = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16007)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__16007)){
return rewrite_clj.parser.string.parse_regex(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__16007)){
var G__16008 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"var","var",-769682797),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1(G__16008) : rewrite_clj.node.var_node.call(null,G__16008));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__16007)){
var G__16009 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1(G__16009) : rewrite_clj.node.fn_node.call(null,G__16009));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__16007)){
var G__16010 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1(G__16010) : rewrite_clj.node.set_node.call(null,G__16010));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__16007)){
var G__16011 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"eval","eval",-1103567905),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1(G__16011) : rewrite_clj.node.eval_node.call(null,G__16011));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__16007)){
var G__16012 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__16012) : rewrite_clj.node.meta_node.call(null,G__16012));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__16007)){
return rewrite_clj.parser.core.parse_conditional(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__16007)){
var G__16013 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1(G__16013) : rewrite_clj.node.uneval_node.call(null,G__16013));
} else {
var G__16014 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(2));
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__16014) : rewrite_clj.node.reader_macro_node.call(null,G__16014));

}
}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_unmatched = (function rewrite_clj$parser$core$parse_unmatched(reader){
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"Unmatched delimiter: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)], 0));
});
rewrite_clj.parser.core.parse_deref = (function rewrite_clj$parser$core$parse_deref(reader){
var G__16015 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"deref","deref",-145586795),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1(G__16015) : rewrite_clj.node.deref_node.call(null,G__16015));
});
rewrite_clj.parser.core.parse_quote = (function rewrite_clj$parser$core$parse_quote(reader){
var G__16016 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"quote","quote",-262615245),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1(G__16016) : rewrite_clj.node.quote_node.call(null,G__16016));
});
rewrite_clj.parser.core.parse_syntax_quote = (function rewrite_clj$parser$core$parse_syntax_quote(reader){
var G__16017 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1(G__16017) : rewrite_clj.node.syntax_quote_node.call(null,G__16017));
});
rewrite_clj.parser.core.parse_unquote = (function rewrite_clj$parser$core$parse_unquote(reader){
rewrite_clj.reader.ignore(reader);

var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"@")){
var G__16018 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1(G__16018) : rewrite_clj.node.unquote_splicing_node.call(null,G__16018));
} else {
var G__16019 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1));
return (rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1(G__16019) : rewrite_clj.node.unquote_node.call(null,G__16019));
}
});
rewrite_clj.parser.core.parse_comment = (function rewrite_clj$parser$core$parse_comment(reader){
rewrite_clj.reader.ignore(reader);

var G__16020 = rewrite_clj.reader.read_include_linebreak(reader);
return (rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1(G__16020) : rewrite_clj.node.comment_node.call(null,G__16020));
});
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return rewrite_clj.parser.core.parse_eof;
} else {
if((c === rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.ignore;
} else {
if(rewrite_clj.reader.whitespace_QMARK_(c)){
return rewrite_clj.parser.whitespace.parse_whitespace;
} else {
if((c === "^")){
return rewrite_clj.parser.core.parse_meta;
} else {
if((c === "#")){
return rewrite_clj.parser.core.parse_sharp;
} else {
if((c === "(")){
return rewrite_clj.parser.core.parse_list;
} else {
if((c === "[")){
return rewrite_clj.parser.core.parse_vector;
} else {
if((c === "{")){
return rewrite_clj.parser.core.parse_map;
} else {
if((c === "}")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "]")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === ")")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "~")){
return rewrite_clj.parser.core.parse_unquote;
} else {
if((c === "'")){
return rewrite_clj.parser.core.parse_quote;
} else {
if((c === "`")){
return rewrite_clj.parser.core.parse_syntax_quote;
} else {
if((c === ";")){
return rewrite_clj.parser.core.parse_comment;
} else {
if((c === "@")){
return rewrite_clj.parser.core.parse_deref;
} else {
if((c === "\"")){
return rewrite_clj.parser.string.parse_string;
} else {
if((c === ":")){
return rewrite_clj.parser.keyword.parse_keyword;
} else {
return rewrite_clj.parser.token.parse_token;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(rdr){
return rewrite_clj.reader.read_with_meta(rdr,rewrite_clj.parser.core.dispatch(rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)));
});

//# sourceMappingURL=rewrite_clj.parser.core.js.map
