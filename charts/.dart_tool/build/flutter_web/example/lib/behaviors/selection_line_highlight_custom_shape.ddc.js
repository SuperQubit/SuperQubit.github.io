define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const line_point_highlighter = packages__charts_common__common.src__chart__common__behavior__line_point_highlighter;
  const symbol_renderer = packages__charts_common__common.src__common__symbol_renderer;
  const selection_trigger = packages__charts_common__common.src__chart__common__behavior__selection__selection_trigger;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const line_point_highlighter$ = packages__charts_flutter__flutter.src__behaviors__line_point_highlighter;
  const select_nearest = packages__charts_flutter__flutter.src__behaviors__select_nearest;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const selection_line_highlight_custom_shape = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(selection_line_highlight_custom_shape.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(selection_line_highlight_custom_shape.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [selection_line_highlight_custom_shape.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(selection_line_highlight_custom_shape.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 63,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_line_highlight_custom_shape.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  const seriesList$ = dart.privateName(selection_line_highlight_custom_shape, "SelectionLineHighlightCustomShape.seriesList");
  const animate$ = dart.privateName(selection_line_highlight_custom_shape, "SelectionLineHighlightCustomShape.animate");
  selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape = class SelectionLineHighlightCustomShape extends framework.StatelessWidget {
    get seriesList() {
      return this[seriesList$];
    }
    set seriesList(value) {
      super.seriesList = value;
    }
    get animate() {
      return this[animate$];
    }
    set animate(value) {
      super.animate = value;
    }
    static withSampleData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.new(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.new(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new selection_line_highlight_custom_shape.LinearSales.new(0, random.nextInt(100)), new selection_line_highlight_custom_shape.LinearSales.new(1, random.nextInt(100)), new selection_line_highlight_custom_shape.LinearSales.new(2, random.nextInt(100)), new selection_line_highlight_custom_shape.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new line_point_highlighter$.LinePointHighlighter.new({showHorizontalFollowLine: line_point_highlighter.LinePointHighlighterFollowLineType.none, showVerticalFollowLine: line_point_highlighter.LinePointHighlighterFollowLineType.nearest, symbolRenderer: new symbol_renderer.RectSymbolRenderer.new({isSolid: false})}), select_nearest.SelectNearest.new({eventTrigger: selection_trigger.SelectionTrigger.tapAndDrag})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new selection_line_highlight_custom_shape.LinearSales.new(0, 5), new selection_line_highlight_custom_shape.LinearSales.new(1, 25), new selection_line_highlight_custom_shape.LinearSales.new(2, 100), new selection_line_highlight_custom_shape.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.prototype;
  dart.addTypeTests(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape);
  dart.setMethodSignature(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape, () => ({
    __proto__: dart.getMethods(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape, "package:example/behaviors/selection_line_highlight_custom_shape.dart");
  dart.setFieldSignature(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape, () => ({
    __proto__: dart.getFields(selection_line_highlight_custom_shape.SelectionLineHighlightCustomShape.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(selection_line_highlight_custom_shape, "LinearSales.year");
  const sales$ = dart.privateName(selection_line_highlight_custom_shape, "LinearSales.sales");
  selection_line_highlight_custom_shape.LinearSales = class LinearSales extends core.Object {
    get year() {
      return this[year$];
    }
    set year(value) {
      super.year = value;
    }
    get sales() {
      return this[sales$];
    }
    set sales(value) {
      super.sales = value;
    }
  };
  (selection_line_highlight_custom_shape.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = selection_line_highlight_custom_shape.LinearSales.prototype;
  dart.addTypeTests(selection_line_highlight_custom_shape.LinearSales);
  dart.setLibraryUri(selection_line_highlight_custom_shape.LinearSales, "package:example/behaviors/selection_line_highlight_custom_shape.dart");
  dart.setFieldSignature(selection_line_highlight_custom_shape.LinearSales, () => ({
    __proto__: dart.getFields(selection_line_highlight_custom_shape.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/selection_line_highlight_custom_shape", {
    "package:example/behaviors/selection_line_highlight_custom_shape.dart": selection_line_highlight_custom_shape
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_line_highlight_custom_shape.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,iFACT,uGAES;IAEb;;;AAOE,YAAW,iFAAkC;IAC/C;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,0DAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,0DAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,0DAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,0DAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AAUxB,YAAW,8BAAiB,2BAAqB,yBAAoB,4CAY/D,gFAE8C,wFAEA,mFAC1B,qDAAmC,WAMvD,gDAA2D;IAEnE;;AAIQ,iBAAO,2BACP,0DAAY,GAAG,IACf,0DAAY,GAAG,KACf,0DAAY,GAAG,MACf,0DAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;0FAhGuC;QAAkB;;IAAlB;IAAkB;AAAzD;;EAAkE;;;;;;;;;;;;;;;IAqGxD;;;;;;IACA;;;;;;;oEAEO,MAAW;IAAX;IAAW;;EAAM","file":"selection_line_highlight_custom_shape.ddc.js"}');
  // Exports:
  return {
    behaviors__selection_line_highlight_custom_shape: selection_line_highlight_custom_shape
  };
});

//# sourceMappingURL=selection_line_highlight_custom_shape.ddc.js.map
