define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/example/app_config', 'packages/flutter/material', 'packages/example/home'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__example__app_config, packages__flutter__material, packages__example__home) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const app_config = packages__example__app_config.app_config;
  const app = packages__flutter__material.src__material__app;
  const home = packages__example__home.home;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onShowPerformanceOverlayChanged",
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/example/main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/example/main.dart"
      });
    },
    get C11() {
      return C11 = dart.constList([], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/example/main.dart"
      });
    }
  });
  main.GalleryApp = class GalleryApp extends framework.StatefulWidget {
    createState() {
      return new main.GalleryAppState.new();
    }
  };
  (main.GalleryApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.GalleryApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.GalleryApp.prototype;
  dart.addTypeTests(main.GalleryApp);
  dart.setMethodSignature(main.GalleryApp, () => ({
    __proto__: dart.getMethods(main.GalleryApp.__proto__),
    createState: dart.fnType(main.GalleryAppState, [])
  }));
  dart.setLibraryUri(main.GalleryApp, "package:example/main.dart");
  const _showPerformanceOverlay = dart.privateName(main, "_showPerformanceOverlay");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C9;
  let C5;
  let C4;
  main.GalleryAppState = class GalleryAppState extends framework.State$(main.GalleryApp) {
    build(context) {
      return new app.MaterialApp.new({title: app_config.defaultConfig.appName, theme: app_config.defaultConfig.theme, showPerformanceOverlay: this[_showPerformanceOverlay], home: new home.Home.new({showPerformanceOverlay: this[_showPerformanceOverlay], onShowPerformanceOverlayChanged: dart.fn(value => {
            this.setState(dart.fn(() => {
              this[_showPerformanceOverlay] = value;
            }, VoidToNull()));
          }, boolToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (main.GalleryAppState.new = function() {
    this[_showPerformanceOverlay] = app_config.defaultConfig.showPerformanceOverlay;
    main.GalleryAppState.__proto__.new.call(this);
    ;
  }).prototype = main.GalleryAppState.prototype;
  dart.addTypeTests(main.GalleryAppState);
  dart.setMethodSignature(main.GalleryAppState, () => ({
    __proto__: dart.getMethods(main.GalleryAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.GalleryAppState, "package:example/main.dart");
  dart.setFieldSignature(main.GalleryAppState, () => ({
    __proto__: dart.getFields(main.GalleryAppState.__proto__),
    [_showPerformanceOverlay]: dart.fieldType(core.bool)
  }));
  let C11;
  let C10;
  main.main = function main$() {
    binding.runApp(new main.GalleryApp.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}));
  };
  dart.trackLibraries("packages/example/main", {
    "package:example/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBmC,YAAI;IAAiB;;;QAHtC;;AAAQ,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;UAcb;AACxB,YAAW,iCACA,AAAc,yCACd,AAAc,wDACG,qCACd,2CACgB,gEACS,QAAM;AAGnC,YAFF,cAAS;AACwB,cAA/B,gCAA0B,KAAK;;;IAI3C;;;IAhBK,gCAA0B,AAAc;;;EAiB/C;;;;;;;;;;;;;;AAG0B,IAAxB,eAAW;EACb","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
