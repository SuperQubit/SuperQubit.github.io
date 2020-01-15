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
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const simple = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(simple.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(simple.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [simple.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [simple.LinearSales, core.int])))();
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
        [_Location_column]: 40,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 52,
        [_Location_line]: 95,
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
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/simple.dart"
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
  const seriesList$ = dart.privateName(simple, "SimpleScatterPlotChart.seriesList");
  const animate$ = dart.privateName(simple, "SimpleScatterPlotChart.animate");
  simple.SimpleScatterPlotChart = class SimpleScatterPlotChart extends framework.StatelessWidget {
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
      return new simple.SimpleScatterPlotChart.new(simple.SimpleScatterPlotChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple.SimpleScatterPlotChart.new(simple.SimpleScatterPlotChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 2)[$toDouble](), intTodouble());
      let data = JSArrayOfLinearSales().of([new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new simple.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6))]);
      let maxMeasure = 100;
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new simple.LinearSales.new(0, 5, 3.0), new simple.LinearSales.new(10, 25, 5.0), new simple.LinearSales.new(12, 75, 4.0), new simple.LinearSales.new(13, 225, 5.0), new simple.LinearSales.new(16, 50, 4.0), new simple.LinearSales.new(24, 75, 3.0), new simple.LinearSales.new(25, 100, 3.0), new simple.LinearSales.new(34, 150, 5.0), new simple.LinearSales.new(37, 10, 4.5), new simple.LinearSales.new(45, 300, 8.0), new simple.LinearSales.new(52, 15, 4.0), new simple.LinearSales.new(56, 200, 7.0)]);
      let maxMeasure = 300;
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
  };
  (simple.SimpleScatterPlotChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple.SimpleScatterPlotChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple.SimpleScatterPlotChart.prototype;
  dart.addTypeTests(simple.SimpleScatterPlotChart);
  dart.setMethodSignature(simple.SimpleScatterPlotChart, () => ({
    __proto__: dart.getMethods(simple.SimpleScatterPlotChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple.SimpleScatterPlotChart, "package:example/scatter_plot_chart/simple.dart");
  dart.setFieldSignature(simple.SimpleScatterPlotChart, () => ({
    __proto__: dart.getFields(simple.SimpleScatterPlotChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple, "LinearSales.year");
  const sales$ = dart.privateName(simple, "LinearSales.sales");
  const radius$ = dart.privateName(simple, "LinearSales.radius");
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
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
  };
  (simple.LinearSales.new = function(year, sales, radius) {
    this[year$] = year;
    this[sales$] = sales;
    this[radius$] = radius;
    ;
  }).prototype = simple.LinearSales.prototype;
  dart.addTypeTests(simple.LinearSales);
  dart.setLibraryUri(simple.LinearSales, "package:example/scatter_plot_chart/simple.dart");
  dart.setFieldSignature(simple.LinearSales, () => ({
    __proto__: dart.getFields(simple.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/scatter_plot_chart/simple", {
    "package:example/scatter_plot_chart/simple.dart": simple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple.dart"],"names":[],"mappings":"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","file":"simple.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__simple: simple
  };
});

//# sourceMappingURL=simple.ddc.js.map
