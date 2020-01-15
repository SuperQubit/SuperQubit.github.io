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
  const point_renderer_config = packages__charts_common__common.src__chart__scatter_plot__point_renderer_config;
  const comparison_points_decorator = packages__charts_common__common.src__chart__scatter_plot__comparison_points_decorator;
  const symbol_renderer = packages__charts_common__common.src__common__symbol_renderer;
  const point_renderer_decorator = packages__charts_common__common.src__chart__scatter_plot__point_renderer_decorator;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const comparison_points = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $round = dartx.round;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(comparison_points.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(comparison_points.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [comparison_points.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [comparison_points.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [comparison_points.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(comparison_points.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let PointRendererConfigOfnum = () => (PointRendererConfigOfnum = dart.constFn(point_renderer_config.PointRendererConfig$(core.num)))();
  let JSArrayOfPointRendererDecorator = () => (JSArrayOfPointRendererDecorator = dart.constFn(_interceptors.JSArray$(point_renderer_decorator.PointRendererDecorator)))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 40,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 107,
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
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/comparison_points.dart"
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
  const seriesList$ = dart.privateName(comparison_points, "ComparisonPointsScatterPlotChart.seriesList");
  const animate$ = dart.privateName(comparison_points, "ComparisonPointsScatterPlotChart.animate");
  comparison_points.ComparisonPointsScatterPlotChart = class ComparisonPointsScatterPlotChart extends framework.StatelessWidget {
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
      return new comparison_points.ComparisonPointsScatterPlotChart.new(comparison_points.ComparisonPointsScatterPlotChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new comparison_points.ComparisonPointsScatterPlotChart.new(comparison_points.ComparisonPointsScatterPlotChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let maxMeasure = 100;
      let data = JSArrayOfLinearSales().of([comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random), comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random), comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random), comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random), comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random), comparison_points.ComparisonPointsScatterPlotChart._makeRandomDatum(maxMeasure, random)]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), domainLowerBoundFn: dart.fn((sales, _) => sales.yearLower, LinearSalesAndintToint()), domainUpperBoundFn: dart.fn((sales, _) => sales.yearUpper, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), measureLowerBoundFn: dart.fn((sales, _) => sales.salesLower, LinearSalesAndintToint()), measureUpperBoundFn: dart.fn((sales, _) => sales.salesUpper, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
    static _makeRandomDatum(max, random) {
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 6)[$toDouble](), intTodouble());
      let year = random.nextInt(max);
      let yearLower = (dart.notNull(year) * 0.8)[$round]();
      let yearUpper = year;
      let sales = random.nextInt(max);
      let salesLower = (dart.notNull(sales) * 0.8)[$round]();
      let salesUpper = sales;
      return new comparison_points.LinearSales.new(year, yearLower, yearUpper, sales, salesLower, salesUpper, makeRadius(4));
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (PointRendererConfigOfnum()).new({pointRendererDecorators: JSArrayOfPointRendererDecorator().of([new comparison_points_decorator.ComparisonPointsDecorator.new({symbolRenderer: new symbol_renderer.CylinderSymbolRenderer.new()})])}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new comparison_points.LinearSales.new(10, 7, 10, 25, 20, 25, 5.0), new comparison_points.LinearSales.new(13, 11, 13, 225, 205, 225, 5.0), new comparison_points.LinearSales.new(34, 34, 24, 150, 150, 130, 5.0), new comparison_points.LinearSales.new(37, 37, 57, 10, 10, 12, 6.5), new comparison_points.LinearSales.new(45, 35, 45, 260, 300, 260, 8.0), new comparison_points.LinearSales.new(56, 46, 56, 200, 170, 200, 7.0)]);
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
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), domainLowerBoundFn: dart.fn((sales, _) => sales.yearLower, LinearSalesAndintToint()), domainUpperBoundFn: dart.fn((sales, _) => sales.yearUpper, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), measureLowerBoundFn: dart.fn((sales, _) => sales.salesLower, LinearSalesAndintToint()), measureUpperBoundFn: dart.fn((sales, _) => sales.salesUpper, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
  };
  (comparison_points.ComparisonPointsScatterPlotChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    comparison_points.ComparisonPointsScatterPlotChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = comparison_points.ComparisonPointsScatterPlotChart.prototype;
  dart.addTypeTests(comparison_points.ComparisonPointsScatterPlotChart);
  dart.setMethodSignature(comparison_points.ComparisonPointsScatterPlotChart, () => ({
    __proto__: dart.getMethods(comparison_points.ComparisonPointsScatterPlotChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(comparison_points.ComparisonPointsScatterPlotChart, "package:example/scatter_plot_chart/comparison_points.dart");
  dart.setFieldSignature(comparison_points.ComparisonPointsScatterPlotChart, () => ({
    __proto__: dart.getFields(comparison_points.ComparisonPointsScatterPlotChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(comparison_points, "LinearSales.year");
  const yearLower$ = dart.privateName(comparison_points, "LinearSales.yearLower");
  const yearUpper$ = dart.privateName(comparison_points, "LinearSales.yearUpper");
  const sales$ = dart.privateName(comparison_points, "LinearSales.sales");
  const salesLower$ = dart.privateName(comparison_points, "LinearSales.salesLower");
  const salesUpper$ = dart.privateName(comparison_points, "LinearSales.salesUpper");
  const radius$ = dart.privateName(comparison_points, "LinearSales.radius");
  comparison_points.LinearSales = class LinearSales extends core.Object {
    get year() {
      return this[year$];
    }
    set year(value) {
      super.year = value;
    }
    get yearLower() {
      return this[yearLower$];
    }
    set yearLower(value) {
      super.yearLower = value;
    }
    get yearUpper() {
      return this[yearUpper$];
    }
    set yearUpper(value) {
      super.yearUpper = value;
    }
    get sales() {
      return this[sales$];
    }
    set sales(value) {
      super.sales = value;
    }
    get salesLower() {
      return this[salesLower$];
    }
    set salesLower(value) {
      super.salesLower = value;
    }
    get salesUpper() {
      return this[salesUpper$];
    }
    set salesUpper(value) {
      super.salesUpper = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
  };
  (comparison_points.LinearSales.new = function(year, yearLower, yearUpper, sales, salesLower, salesUpper, radius) {
    this[year$] = year;
    this[yearLower$] = yearLower;
    this[yearUpper$] = yearUpper;
    this[sales$] = sales;
    this[salesLower$] = salesLower;
    this[salesUpper$] = salesUpper;
    this[radius$] = radius;
    ;
  }).prototype = comparison_points.LinearSales.prototype;
  dart.addTypeTests(comparison_points.LinearSales);
  dart.setLibraryUri(comparison_points.LinearSales, "package:example/scatter_plot_chart/comparison_points.dart");
  dart.setFieldSignature(comparison_points.LinearSales, () => ({
    __proto__: dart.getFields(comparison_points.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    yearLower: dart.finalFieldType(core.int),
    yearUpper: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    salesLower: dart.finalFieldType(core.int),
    salesUpper: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/scatter_plot_chart/comparison_points", {
    "package:example/scatter_plot_chart/comparison_points.dart": comparison_points
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison_points.dart"],"names":[],"mappings":"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","file":"comparison_points.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__comparison_points: comparison_points
  };
});

//# sourceMappingURL=comparison_points.ddc.js.map
