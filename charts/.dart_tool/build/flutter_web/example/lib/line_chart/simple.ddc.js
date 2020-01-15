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
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const simple = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(simple.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(simple.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [simple.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(simple.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
        [_Location_line]: 71,
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
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/simple.dart"
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
  let C1;
  let C0;
  const seriesList$ = dart.privateName(simple, "SimpleLineChart.seriesList");
  const animate$ = dart.privateName(simple, "SimpleLineChart.animate");
  simple.SimpleLineChart = class SimpleLineChart extends framework.StatelessWidget {
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
      return new simple.SimpleLineChart.new(simple.SimpleLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple.SimpleLineChart.new(simple.SimpleLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new simple.LinearSales.new(0, random.nextInt(100)), new simple.LinearSales.new(1, random.nextInt(100)), new simple.LinearSales.new(2, random.nextInt(100)), new simple.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new simple.LinearSales.new(0, 5), new simple.LinearSales.new(1, 25), new simple.LinearSales.new(2, 100), new simple.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (simple.SimpleLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple.SimpleLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple.SimpleLineChart.prototype;
  dart.addTypeTests(simple.SimpleLineChart);
  dart.setMethodSignature(simple.SimpleLineChart, () => ({
    __proto__: dart.getMethods(simple.SimpleLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple.SimpleLineChart, "package:example/line_chart/simple.dart");
  dart.setFieldSignature(simple.SimpleLineChart, () => ({
    __proto__: dart.getFields(simple.SimpleLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple, "LinearSales.year");
  const sales$ = dart.privateName(simple, "LinearSales.sales");
  simple.LinearSales = class LinearSales extends core.Object {
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
  (simple.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = simple.LinearSales.prototype;
  dart.addTypeTests(simple.LinearSales);
  dart.setLibraryUri(simple.LinearSales, "package:example/line_chart/simple.dart");
  dart.setFieldSignature(simple.LinearSales, () => ({
    __proto__: dart.getFields(simple.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/simple", {
    "package:example/line_chart/simple.dart": simple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,gCACT,sDAES;IAEb;;;AAOE,YAAW,gCAAgB;IAC7B;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,2BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,2BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,2BAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,2BAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,8BAAiB,2BAAqB;IACnD;;AAIQ,iBAAO,2BACP,2BAAY,GAAG,IACf,2BAAY,GAAG,KACf,2BAAY,GAAG,MACf,2BAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;yCAjEqB;QAAkB;;IAAlB;IAAkB;AAAvC;;EAAgD;;;;;;;;;;;;;;;IAsEtC;;;;;;IACA;;;;;;;qCAEO,MAAW;IAAX;IAAW;;EAAM","file":"simple.ddc.js"}');
  // Exports:
  return {
    line_chart__simple: simple
  };
});

//# sourceMappingURL=simple.ddc.js.map
