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
  const simple_nulls = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(simple_nulls.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(simple_nulls.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [simple_nulls.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple_nulls.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(simple_nulls.LinearSales, core.num)))();
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
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
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
        [_Location_column]: 16,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/simple_nulls.dart"
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
  const seriesList$ = dart.privateName(simple_nulls, "SimpleNullsLineChart.seriesList");
  const animate$ = dart.privateName(simple_nulls, "SimpleNullsLineChart.animate");
  simple_nulls.SimpleNullsLineChart = class SimpleNullsLineChart extends framework.StatelessWidget {
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
      return new simple_nulls.SimpleNullsLineChart.new(simple_nulls.SimpleNullsLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple_nulls.SimpleNullsLineChart.new(simple_nulls.SimpleNullsLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let myFakeDesktopData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, random.nextInt(100)), new simple_nulls.LinearSales.new(1, random.nextInt(100)), new simple_nulls.LinearSales.new(2, null), new simple_nulls.LinearSales.new(3, random.nextInt(100)), new simple_nulls.LinearSales.new(4, random.nextInt(100)), new simple_nulls.LinearSales.new(5, random.nextInt(100)), new simple_nulls.LinearSales.new(6, random.nextInt(100))]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, random.nextInt(100)), new simple_nulls.LinearSales.new(1, random.nextInt(100)), new simple_nulls.LinearSales.new(2, random.nextInt(100)), new simple_nulls.LinearSales.new(3, random.nextInt(100)), new simple_nulls.LinearSales.new(4, random.nextInt(100)), new simple_nulls.LinearSales.new(5, random.nextInt(100)), new simple_nulls.LinearSales.new(6, random.nextInt(100))]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, random.nextInt(100)), new simple_nulls.LinearSales.new(1, random.nextInt(100)), new simple_nulls.LinearSales.new(2, null), new simple_nulls.LinearSales.new(3, random.nextInt(100)), new simple_nulls.LinearSales.new(4, null), new simple_nulls.LinearSales.new(5, random.nextInt(100)), new simple_nulls.LinearSales.new(6, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeMobileData})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let myFakeDesktopData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, 5), new simple_nulls.LinearSales.new(1, 15), new simple_nulls.LinearSales.new(2, null), new simple_nulls.LinearSales.new(3, 75), new simple_nulls.LinearSales.new(4, 100), new simple_nulls.LinearSales.new(5, 90), new simple_nulls.LinearSales.new(6, 75)]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, 10), new simple_nulls.LinearSales.new(1, 30), new simple_nulls.LinearSales.new(2, 50), new simple_nulls.LinearSales.new(3, 150), new simple_nulls.LinearSales.new(4, 200), new simple_nulls.LinearSales.new(5, 180), new simple_nulls.LinearSales.new(6, 150)]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new simple_nulls.LinearSales.new(0, 15), new simple_nulls.LinearSales.new(1, 45), new simple_nulls.LinearSales.new(2, null), new simple_nulls.LinearSales.new(3, 225), new simple_nulls.LinearSales.new(4, null), new simple_nulls.LinearSales.new(5, 270), new simple_nulls.LinearSales.new(6, 225)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeMobileData})]);
    }
  };
  (simple_nulls.SimpleNullsLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple_nulls.SimpleNullsLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple_nulls.SimpleNullsLineChart.prototype;
  dart.addTypeTests(simple_nulls.SimpleNullsLineChart);
  dart.setMethodSignature(simple_nulls.SimpleNullsLineChart, () => ({
    __proto__: dart.getMethods(simple_nulls.SimpleNullsLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple_nulls.SimpleNullsLineChart, "package:example/line_chart/simple_nulls.dart");
  dart.setFieldSignature(simple_nulls.SimpleNullsLineChart, () => ({
    __proto__: dart.getFields(simple_nulls.SimpleNullsLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple_nulls, "LinearSales.year");
  const sales$ = dart.privateName(simple_nulls, "LinearSales.sales");
  simple_nulls.LinearSales = class LinearSales extends core.Object {
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
  (simple_nulls.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = simple_nulls.LinearSales.prototype;
  dart.addTypeTests(simple_nulls.LinearSales);
  dart.setLibraryUri(simple_nulls.LinearSales, "package:example/line_chart/simple_nulls.dart");
  dart.setFieldSignature(simple_nulls.LinearSales, () => ({
    __proto__: dart.getFields(simple_nulls.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/simple_nulls", {
    "package:example/line_chart/simple_nulls.dart": simple_nulls
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple_nulls.dart"],"names":[],"mappings":"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","file":"simple_nulls.ddc.js"}');
  // Exports:
  return {
    line_chart__simple_nulls: simple_nulls
  };
});

//# sourceMappingURL=simple_nulls.ddc.js.map
