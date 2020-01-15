define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const numeric_extents = packages__charts_common__common.src__chart__cartesian__axis__numeric_extents;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const pan_and_zoom_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__pan_and_zoom_behavior;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const numeric_initial_viewport = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(numeric_initial_viewport.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(numeric_initial_viewport.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [numeric_initial_viewport.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [numeric_initial_viewport.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(numeric_initial_viewport.LinearSales, core.num)))();
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
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/numeric_initial_viewport.dart"
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
  let C5;
  let C1;
  let C0;
  const seriesList$ = dart.privateName(numeric_initial_viewport, "NumericInitialViewport.seriesList");
  const animate$ = dart.privateName(numeric_initial_viewport, "NumericInitialViewport.animate");
  numeric_initial_viewport.NumericInitialViewport = class NumericInitialViewport extends framework.StatelessWidget {
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
      return new numeric_initial_viewport.NumericInitialViewport.new(numeric_initial_viewport.NumericInitialViewport._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new numeric_initial_viewport.NumericInitialViewport.new(numeric_initial_viewport.NumericInitialViewport._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new numeric_initial_viewport.LinearSales.new(0, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(1, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(2, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(3, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(4, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(5, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(6, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(7, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(8, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(9, random.nextInt(100)), new numeric_initial_viewport.LinearSales.new(10, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, domainAxis: new numeric_axis_spec.NumericAxisSpec.new({viewport: new numeric_extents.NumericExtents.new(3.0, 7.0)}), behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new pan_and_zoom_behavior.PanAndZoomBehavior.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new numeric_initial_viewport.LinearSales.new(0, 5), new numeric_initial_viewport.LinearSales.new(1, 25), new numeric_initial_viewport.LinearSales.new(2, 100), new numeric_initial_viewport.LinearSales.new(3, 75), new numeric_initial_viewport.LinearSales.new(4, 55), new numeric_initial_viewport.LinearSales.new(5, 66), new numeric_initial_viewport.LinearSales.new(6, 110), new numeric_initial_viewport.LinearSales.new(7, 70), new numeric_initial_viewport.LinearSales.new(8, 20), new numeric_initial_viewport.LinearSales.new(9, 25), new numeric_initial_viewport.LinearSales.new(10, 45)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (numeric_initial_viewport.NumericInitialViewport.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    numeric_initial_viewport.NumericInitialViewport.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = numeric_initial_viewport.NumericInitialViewport.prototype;
  dart.addTypeTests(numeric_initial_viewport.NumericInitialViewport);
  dart.setMethodSignature(numeric_initial_viewport.NumericInitialViewport, () => ({
    __proto__: dart.getMethods(numeric_initial_viewport.NumericInitialViewport.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(numeric_initial_viewport.NumericInitialViewport, "package:example/axes/numeric_initial_viewport.dart");
  dart.setFieldSignature(numeric_initial_viewport.NumericInitialViewport, () => ({
    __proto__: dart.getFields(numeric_initial_viewport.NumericInitialViewport.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(numeric_initial_viewport, "LinearSales.year");
  const sales$ = dart.privateName(numeric_initial_viewport, "LinearSales.sales");
  numeric_initial_viewport.LinearSales = class LinearSales extends core.Object {
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
  (numeric_initial_viewport.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = numeric_initial_viewport.LinearSales.prototype;
  dart.addTypeTests(numeric_initial_viewport.LinearSales);
  dart.setLibraryUri(numeric_initial_viewport.LinearSales, "package:example/axes/numeric_initial_viewport.dart");
  dart.setFieldSignature(numeric_initial_viewport.LinearSales, () => ({
    __proto__: dart.getFields(numeric_initial_viewport.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/numeric_initial_viewport", {
    "package:example/axes/numeric_initial_viewport.dart": numeric_initial_viewport
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["numeric_initial_viewport.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,yDACT,+EAES;IAEb;;;AAOE,YAAW,yDAAuB;IACpC;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,6CAAY,IAAI,AAAO,MAAD,SAAS;AAGrC,YAAO,wCACD,mCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,8BACT,2BACS,0BACO,qDAGE,uCAAsB,KAAK,mBAGlC,4CAAK;IAEpB;;AAIQ,iBAAO,2BACP,6CAAY,GAAG,IACf,6CAAY,GAAG,KACf,6CAAY,GAAG,MACf,6CAAY,GAAG,KACf,6CAAY,GAAG,KACf,6CAAY,GAAG,KACf,6CAAY,GAAG,MACf,6CAAY,GAAG,KACf,6CAAY,GAAG,KACf,6CAAY,GAAG,KACf,6CAAY,IAAI;AAGtB,YAAO,wCACD,mCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;kEAzF4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IA8F7C;;;;;;IACA;;;;;;;uDAEO,MAAW;IAAX;IAAW;;EAAM","file":"numeric_initial_viewport.ddc.js"}');
  // Exports:
  return {
    axes__numeric_initial_viewport: numeric_initial_viewport
  };
});

//# sourceMappingURL=numeric_initial_viewport.ddc.js.map
