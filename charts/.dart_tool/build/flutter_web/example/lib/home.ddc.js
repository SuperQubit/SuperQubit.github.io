define(['dart_sdk', 'packages/example/a11y/a11y_gallery', 'packages/example/bar_chart/bar_gallery', 'packages/example/time_series_chart/time_series_gallery', 'packages/example/line_chart/line_gallery', 'packages/example/scatter_plot_chart/scatter_plot_gallery', 'packages/example/combo_chart/combo_gallery', 'packages/example/pie_chart/pie_gallery', 'packages/example/axes/axes_gallery', 'packages/example/behaviors/behaviors_gallery', 'packages/example/i18n/i18n_gallery', 'packages/example/legends/legends_gallery', 'packages/flutter/src/widgets/actions', 'packages/example/gallery_scaffold', 'packages/flutter/material', 'packages/example/drawer', 'packages/example/app_config', 'packages/charts_common/common'], function(dart_sdk, packages__example__a11y__a11y_gallery, packages__example__bar_chart__bar_gallery, packages__example__time_series_chart__time_series_gallery, packages__example__line_chart__line_gallery, packages__example__scatter_plot_chart__scatter_plot_gallery, packages__example__combo_chart__combo_gallery, packages__example__pie_chart__pie_gallery, packages__example__axes__axes_gallery, packages__example__behaviors__behaviors_gallery, packages__example__i18n__i18n_gallery, packages__example__legends__legends_gallery, packages__flutter__src__widgets__actions, packages__example__gallery_scaffold, packages__flutter__material, packages__example__drawer, packages__example__app_config, packages__charts_common__common) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const a11y_gallery = packages__example__a11y__a11y_gallery.a11y__a11y_gallery;
  const bar_gallery = packages__example__bar_chart__bar_gallery.bar_chart__bar_gallery;
  const time_series_gallery = packages__example__time_series_chart__time_series_gallery.time_series_chart__time_series_gallery;
  const line_gallery = packages__example__line_chart__line_gallery.line_chart__line_gallery;
  const scatter_plot_gallery = packages__example__scatter_plot_chart__scatter_plot_gallery.scatter_plot_chart__scatter_plot_gallery;
  const combo_gallery = packages__example__combo_chart__combo_gallery.combo_chart__combo_gallery;
  const pie_gallery = packages__example__pie_chart__pie_gallery.pie_chart__pie_gallery;
  const axes_gallery = packages__example__axes__axes_gallery.axes__axes_gallery;
  const behaviors_gallery = packages__example__behaviors__behaviors_gallery.behaviors__behaviors_gallery;
  const i18n_gallery = packages__example__i18n__i18n_gallery.i18n__i18n_gallery;
  const legends_gallery = packages__example__legends__legends_gallery.legends__legends_gallery;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const gallery_scaffold = packages__example__gallery_scaffold.gallery_scaffold;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const constants = packages__flutter__material.src__material__constants;
  const drawer = packages__example__drawer.drawer;
  const app_config = packages__example__app_config.app_config;
  const performance = packages__charts_common__common.src__common__performance;
  const home = Object.create(dart.library);
  const $map = dartx.map;
  const $addAll = dartx.addAll;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let GalleryScaffoldToWidget = () => (GalleryScaffoldToWidget = dart.constFn(dart.fnType(framework.Widget, [gallery_scaffold.GalleryScaffold])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onShowPerformanceOverlayChanged",
        [_Location_column]: 11,
        [_Location_line]: 112,
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
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/example/home.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/example/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/example/home.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 26,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 57,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/example/home.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/example/home.dart"
      });
    }
  });
  const _setupPerformance = dart.privateName(home, "_setupPerformance");
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
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  const showPerformanceOverlay$ = dart.privateName(home, "Home.showPerformanceOverlay");
  const onShowPerformanceOverlayChanged$ = dart.privateName(home, "Home.onShowPerformanceOverlayChanged");
  const a11yGalleries = dart.privateName(home, "Home.a11yGalleries");
  const barGalleries = dart.privateName(home, "Home.barGalleries");
  const timeSeriesGalleries = dart.privateName(home, "Home.timeSeriesGalleries");
  const lineGalleries = dart.privateName(home, "Home.lineGalleries");
  const scatterPlotGalleries = dart.privateName(home, "Home.scatterPlotGalleries");
  const comboGalleries = dart.privateName(home, "Home.comboGalleries");
  const pieGalleries = dart.privateName(home, "Home.pieGalleries");
  const axesGalleries = dart.privateName(home, "Home.axesGalleries");
  const behaviorsGalleries = dart.privateName(home, "Home.behaviorsGalleries");
  const i18nGalleries = dart.privateName(home, "Home.i18nGalleries");
  const legendsGalleries = dart.privateName(home, "Home.legendsGalleries");
  home.Home = class Home extends framework.StatelessWidget {
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get onShowPerformanceOverlayChanged() {
      return this[onShowPerformanceOverlayChanged$];
    }
    set onShowPerformanceOverlayChanged(value) {
      super.onShowPerformanceOverlayChanged = value;
    }
    get a11yGalleries() {
      return this[a11yGalleries];
    }
    set a11yGalleries(value) {
      super.a11yGalleries = value;
    }
    get barGalleries() {
      return this[barGalleries];
    }
    set barGalleries(value) {
      super.barGalleries = value;
    }
    get timeSeriesGalleries() {
      return this[timeSeriesGalleries];
    }
    set timeSeriesGalleries(value) {
      super.timeSeriesGalleries = value;
    }
    get lineGalleries() {
      return this[lineGalleries];
    }
    set lineGalleries(value) {
      super.lineGalleries = value;
    }
    get scatterPlotGalleries() {
      return this[scatterPlotGalleries];
    }
    set scatterPlotGalleries(value) {
      super.scatterPlotGalleries = value;
    }
    get comboGalleries() {
      return this[comboGalleries];
    }
    set comboGalleries(value) {
      super.comboGalleries = value;
    }
    get pieGalleries() {
      return this[pieGalleries];
    }
    set pieGalleries(value) {
      super.pieGalleries = value;
    }
    get axesGalleries() {
      return this[axesGalleries];
    }
    set axesGalleries(value) {
      super.axesGalleries = value;
    }
    get behaviorsGalleries() {
      return this[behaviorsGalleries];
    }
    set behaviorsGalleries(value) {
      super.behaviorsGalleries = value;
    }
    get i18nGalleries() {
      return this[i18nGalleries];
    }
    set i18nGalleries(value) {
      super.i18nGalleries = value;
    }
    get legendsGalleries() {
      return this[legendsGalleries];
    }
    set legendsGalleries(value) {
      super.legendsGalleries = value;
    }
    build(context) {
      let galleries = JSArrayOfWidget().of([]);
      galleries[$addAll](this.a11yGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.barGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.timeSeriesGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.lineGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.scatterPlotGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.comboGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.pieGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.axesGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.behaviorsGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.legendsGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      galleries[$addAll](this.i18nGalleries[$map](framework.Widget, dart.fn(gallery => gallery.buildGalleryListTile(context), GalleryScaffoldToWidget())));
      this[_setupPerformance]();
      return new scaffold.Scaffold.new({drawer: new drawer.GalleryDrawer.new({showPerformanceOverlay: this.showPerformanceOverlay, onShowPerformanceOverlayChanged: this.onShowPerformanceOverlayChanged, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), appBar: new app_bar.AppBar.new({title: new text.Text.new(app_config.defaultConfig.appName, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), body: new scroll_view.ListView.new({padding: constants.kMaterialListPadding, children: galleries, $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_setupPerformance]() {
      performance.Performance.time = dart.fn(tag => developer.Timeline.startSync(tag), StringTovoid());
      performance.Performance.timeEnd = dart.fn(_ => developer.Timeline.finishSync(), StringTovoid());
    }
  };
  (home.Home.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : null;
    let onShowPerformanceOverlayChanged = opts && 'onShowPerformanceOverlayChanged' in opts ? opts.onShowPerformanceOverlayChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[a11yGalleries] = a11y_gallery.buildGallery();
    this[barGalleries] = bar_gallery.buildGallery();
    this[timeSeriesGalleries] = time_series_gallery.buildGallery();
    this[lineGalleries] = line_gallery.buildGallery();
    this[scatterPlotGalleries] = scatter_plot_gallery.buildGallery();
    this[comboGalleries] = combo_gallery.buildGallery();
    this[pieGalleries] = pie_gallery.buildGallery();
    this[axesGalleries] = axes_gallery.buildGallery();
    this[behaviorsGalleries] = behaviors_gallery.buildGallery();
    this[i18nGalleries] = i18n_gallery.buildGallery();
    this[legendsGalleries] = legends_gallery.buildGallery();
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[onShowPerformanceOverlayChanged$] = onShowPerformanceOverlayChanged;
    home.Home.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!(this.onShowPerformanceOverlayChanged != null)) dart.assertFailed(null, "org-dartlang-app:///packages/example/home.dart", 58, 12, "onShowPerformanceOverlayChanged != null");
  }).prototype = home.Home.prototype;
  dart.addTypeTests(home.Home);
  dart.setMethodSignature(home.Home, () => ({
    __proto__: dart.getMethods(home.Home.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_setupPerformance]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(home.Home, "package:example/home.dart");
  dart.setFieldSignature(home.Home, () => ({
    __proto__: dart.getFields(home.Home.__proto__),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    onShowPerformanceOverlayChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    a11yGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    barGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    timeSeriesGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    lineGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    scatterPlotGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    comboGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    pieGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    axesGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    behaviorsGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    i18nGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold)),
    legendsGalleries: dart.finalFieldType(core.List$(gallery_scaffold.GalleryScaffold))
  }));
  dart.trackLibraries("packages/example/home", {
    "package:example/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsCa;;;;;;IACc;;;;;;IACnB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;UAWoB;AACpB,sBAAoB;AAGkD,MAD1E,AAAU,SAAD,UACL,AAAc,2CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIE,MADzE,AAAU,SAAD,UACL,AAAa,0CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIT,MAD7D,AAAU,SAAD,UAAQ,AACZ,iDAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIgB,MAD1E,AAAU,SAAD,UACL,AAAc,2CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIV,MAD7D,AAAU,SAAD,UAAQ,AACZ,kDAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIiB,MAD3E,AAAU,SAAD,UACL,AAAe,4CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIC,MADzE,AAAU,SAAD,UACL,AAAa,0CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAII,MAD1E,AAAU,SAAD,UACL,AAAc,2CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAGV,MAD7D,AAAU,SAAD,UAAQ,AACZ,gDAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIG,MAD7D,AAAU,SAAD,UAAQ,AACZ,8CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAIgB,MAD1E,AAAU,SAAD,UACL,AAAc,2CAAI,QAAC,WAAY,AAAQ,OAAD,sBAAsB,OAAO;AAEpD,MAAnB;AAEA,YAAW,oCACG,sDACgB,8DACS,qGACzB,+BAAkB,kBAAK,AAAc,uJACvC,uCAAkB,0CAAgC,SAAS;IAEzE;;AAQmE,MAA9C,+BAAO,QAAQ,OAAiB,6BAAU,GAAG;AACP,MAAtC,kCAAU,QAAC,KAAe;IAC/C;;;QAxES;QACA;QACA;;IAfH,sBAAgB;IAChB,qBAAe;IACf,4BAAsB;IACtB,sBAAgB;IAChB,6BAAuB;IACvB,uBAAiB;IACjB,qBAAe;IACf,sBAAgB;IAChB,2BAAqB;IACrB,sBAAgB;IAChB,yBAAmB;IAIhB;IACA;AACH,6CAAW,GAAG;AAClB,UAAO,AAAgC,wCAAG;EAC5C","file":"home.ddc.js"}');
  // Exports:
  return {
    home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
