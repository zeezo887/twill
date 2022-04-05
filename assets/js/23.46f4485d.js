(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{379:function(t,s,a){"use strict";a.r(s);var e=a(38),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"validating-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-blocks"}},[t._v("#")]),t._v(" Validating blocks")]),t._v(" "),a("p",[t._v("There are 2 ways to add field validation to blocks. You have to use one or the other. If the blade directive is present\nit will be used over the class.")]),t._v(" "),a("h2",{attrs:{id:"blade-directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blade-directive"}},[t._v("#")]),t._v(" Blade directive")]),t._v(" "),a("p",[t._v("The first and easiest option is to add the directives to your block form blade file:")]),t._v(" "),a("p",[t._v("There are 2 possible directives to use, these can be combined.")]),t._v(" "),a("p",[a("code",[t._v("@twillBlockValidationRules")]),t._v(" for validating non translatable fields.")]),t._v(" "),a("p",[a("code",[t._v("@twillBlockValidationRulesForTranslatedFields")]),t._v(" for validating translatable fields.")]),t._v(" "),a("p",[t._v("Both take an array of "),a("code",[t._v("[field => rules]")]),t._v(" values. All Laravel validation rules are supported.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-blade extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@twillBlockValidationRules([\n    'text' => 'required'\n])\n@twillBlockValidationRulesForTranslatedFields([\n    'title' => 'required'\n])\n")])])]),a("h2",{attrs:{id:"block-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-class"}},[t._v("#")]),t._v(" Block class")]),t._v(" "),a("p",[t._v("If you need more control you can use the block class to set validation rules, or even hook into the validation process.")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/block-editor/block-classes.html"}},[t._v("Block classes documentation")]),t._v(" for more details about the block class.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Twill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("A17"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Twill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ExampleBlock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Block")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesForTranslatedFields")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required|string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rules")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);