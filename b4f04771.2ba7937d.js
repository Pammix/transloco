(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),r=(n(0),n(143)),s={id:"translation-api",title:"Translation API"},c={id:"translation-api",title:"Translation API",description:"Below is a list of the `TranslocoService` API and their usages:",source:"@site/docs\\translation-api.mdx",permalink:"/transloco/docs/translation-api",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/translation-api.mdx",sidebar:"docs",previous:{title:"Translation in The Template",permalink:"/transloco/docs/translation-in-the-template"},next:{title:"Language API",permalink:"/transloco/docs/language-api"}},l=[{value:"<code>translate()</code>",id:"translate",children:[]},{value:"<code>selectTranslate()</code>",id:"selecttranslate",children:[]},{value:"<code>translateObject()</code>",id:"translateobject",children:[]},{value:"<code>selectTranslationObject()</code>",id:"selecttranslationobject",children:[]},{value:"<code>getTranslation()</code>",id:"gettranslation",children:[]},{value:"<code>selectTranslation()</code>",id:"selecttranslation",children:[]},{value:"<code>setTranslation()</code>",id:"settranslation",children:[]},{value:"<code>setTranslationKey()</code>",id:"settranslationkey",children:[]},{value:"<code>events$</code>",id:"events",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Below is a list of the ",Object(r.b)("inlineCode",{parentName:"p"},"TranslocoService")," API and their usages:"),Object(r.b)("h3",{id:"translate"},Object(r.b)("inlineCode",{parentName:"h3"},"translate()")),Object(r.b)("p",null,"Translate the given key. Sometimes you may need to translate a key in a component or a service. To do so, you can inject the ",Object(r.b)("inlineCode",{parentName:"p"},"TranslocoService")," and use its ",Object(r.b)("inlineCode",{parentName:"p"},"translate")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.translate('hello');\n    this.translocoService.translate('hello', { value: 'world' });\n    this.translocoService.translate(['hello', 'key']);\n    this.translocoService.translate('hello', params, 'es');\n\n    // Translate a key from a specific scope\n    this.translocoService.translate('hello', params, 'todos/en');\n  }\n}\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that in order to safely use this method, you are responsible for ensuring that the translation files have been successfully loaded by the time it's called."))),Object(r.b)("p",null,"If you aren't sure, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"selectTranslate()")," method instead:"),Object(r.b)("h3",{id:"selecttranslate"},Object(r.b)("inlineCode",{parentName:"h3"},"selectTranslate()")),Object(r.b)("p",null,"Returns an ",Object(r.b)("inlineCode",{parentName:"p"},"observable")," that when subscribed load the translation file and emits the translation of the given key:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    // Don't forget to unsubscribe\n    this.translocoService.selectTranslate('hello')\n                         .subscribe(value => ...);\n\n    this.translocoService.selectTranslate('hello', params})\n                         .subscribe(value => ...);\n\n    this.translocoService.selectTranslate('hello', params, lang)\n                         .subscribe(value => ...);\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"selectTranslate")," will emit each time the active language is changed."),Object(r.b)("p",null,"You can also select a translation from ",Object(r.b)("inlineCode",{parentName:"p"},"scope"),", simply inject the scope using the ",Object(r.b)("inlineCode",{parentName:"p"},"TRANSLOCO_SCOPE")," token\nand provide it to the ",Object(r.b)("inlineCode",{parentName:"p"},"selectTranslate")," function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService,\n              @Inject(TRANSLOCO_SCOPE) private scope\n  ) {}\n\n  ngOnInit() {\n    this.translocoService.selectTranslate('title', params, this.scope)\n                          .subscribe(console.log);\n  }\n}\n")),Object(r.b)("h3",{id:"translateobject"},Object(r.b)("inlineCode",{parentName:"h3"},"translateObject()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "home": "Home",\n  "hello": "Hello {{ name }}",\n  "some": {\n    "object": {\n      "hi": "Hi",\n      "hey": "Hey"\n    }\n  },\n  "path": {\n    "to": {\n      "object": {\n         "welcome": "Welcome {{ name }}",\n         "nested": {\n            "subscribe": "subscribe today for {{ price }}$"\n         }\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,"The following code is based on the ",Object(r.b)("inlineCode",{parentName:"p"},"en.json")," above \u261d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Returns an ",Object(r.b)("inlineCode",{parentName:"li"},"object")," based on the given path:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),'export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    let result = this.translocoService.translateObject(\'some.object\');\n    expect(result).toEqual({\n      hi: "Hi",\n      hey: "Hey"\n    });\n\n    /* When querying an object that should be transpiled */\n    result = this.translocoService.translateObject(\'path.to.object\', {\n      welcome: { value: \'John\' },\n      \'nested.subscribe\': { price: 100 }\n    });\n    expect(result).toEqual({\n      welcome: "Welcome John",\n      nested: {\n        "subscribe": "subscribe today for 100$"\n    }});\n  }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Given a ",Object(r.b)("inlineCode",{parentName:"li"},"key: params")," map (",Object(r.b)("inlineCode",{parentName:"li"},"object")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Map"),"), returns an ",Object(r.b)("inlineCode",{parentName:"li"},"array")," of translated values:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),'export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    /* If there are no parameters to transpile pass an empty `object` or `null` */\n    let keyParams = {\n      home: null, // {}\n    }\n    let result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home"]);\n\n    /* When querying an object that should be transpiled */\n    keyParams = {\n       home: null,\n       hello: { name: \'John\' },\n    }\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home", "Hello John"]);\n\n    /* Works with object paths */\n    keyParams = {\n       hello: { name: \'John\' },\n       \'path.to.object.nested\': {subscribe: {price: 100}}\n    }\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual([ "Home", { subscribe: "subscribe today for 100$" }]);\n\n    /* Works with `Map` */\n    keyParams = new Map();\n    keyParams.set(\'home\', null);\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home"]);\n  }\n}\n')),Object(r.b)("h3",{id:"selecttranslationobject"},Object(r.b)("inlineCode",{parentName:"h3"},"selectTranslationObject()")),Object(r.b)("p",null,"Load the translation file (if not loaded yet) and behaves the same as ",Object(r.b)("inlineCode",{parentName:"p"},"translateObject"),".\nThe only difference is that this method returns an observable to which you can subscribe."),Object(r.b)("p",null,"The following code is based on the ",Object(r.b)("inlineCode",{parentName:"p"},"en.json")," in ",Object(r.b)("inlineCode",{parentName:"p"},"translateObject")," \u261d"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.selectTranslateObject('path.to.object', {\n      welcome: { value: 'John' },\n      'nested.subscribe': { price: 100 }\n    }).subscribe(result => {\n      expect(result).toEqual({\n        welcome: \"Welcome John\",\n        nested: {\n          \"subscribe\": \"subscribe today for 100$\"\n        }\n      });\n    });\n\n    keyParams = {\n      hello: { name: 'John' },\n      'path.to.object.nested': {subscribe: {price: 100}}\n    }\n    this.translocoService.selectTranslateObject(keyParams)\n    .subscribe(result => {\n       expect(result).toEqual([\"Home\", { subscribe: \"subscribe today for 100$\" }]);\n    });\n  }\n}\n")),Object(r.b)("h3",{id:"gettranslation"},Object(r.b)("inlineCode",{parentName:"h3"},"getTranslation()")),Object(r.b)("p",null,"Returns the selected language translation or, if a language isn't passed, all of them:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.getTranslation();\n    this.translocoService.getTranslation('es');\n  }\n}\n")),Object(r.b)("h3",{id:"selecttranslation"},Object(r.b)("inlineCode",{parentName:"h3"},"selectTranslation()")),Object(r.b)("p",null,"Load and returns the active language translation object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.selectTranslation()\n                         .subscribe(console.log);\n\n    this.translocoService.selectTranslation('es')\n                         .subscribe(console.log);\n  }\n}\n")),Object(r.b)("h3",{id:"settranslation"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslation()")),Object(r.b)("p",null,"Manually sets a translations object to be used for a given language, set merge to true if you want to append the translations instead of replacing them:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n   this.translocoService.setTranslation({ key: value });\n   this.translocoService.setTranslation({ ... }, 'es');\n   this.translocoService.setTranslation({ ... }, 'en', { merge: false } );\n\n   // Set a scope\n   this.translocoService.setTranslation({ ... }, 'todos/en');\n  }\n}\n")),Object(r.b)("h3",{id:"settranslationkey"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslationKey()")),Object(r.b)("p",null,"Sets the translated value of a key. If a language isn't specified in the third parameter, it sets the key value for the current active language:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.setTranslationKey('key', 'value');\n    this.translocoService.setTranslationKey('key.nested', 'value');\n    this.translocoService.setTranslationKey('key', 'value', 'en');\n  }\n}\n")),Object(r.b)("h3",{id:"events"},Object(r.b)("inlineCode",{parentName:"h3"},"events$")),Object(r.b)("p",null,"Subscribe to the translation loading events:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'}),"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.events$.pipe(\n      filter(e => e.type === 'translationLoadSuccess'),\n      pluck('payload')\n    ).subscribe(({ langName, scope }) => ...);\n\n    translocoService.events$.pipe(\n      filter(e => e.type === 'translationLoadFailure'),\n      pluck('payload')\n    ).subscribe(({ langName, scope }) => ...);\n}\n")))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,c({ref:t},i,{components:n})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);