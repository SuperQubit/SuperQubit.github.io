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
  const series_renderer = packages__charts_common__common.src__chart__common__series_renderer;
  const point_renderer_config = packages__charts_common__common.src__chart__scatter_plot__point_renderer_config;
  const line_renderer_config = packages__charts_common__common.src__chart__line__line_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scatter_plot_line = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $_get = dartx._get;
  const $length = dartx.length;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(scatter_plot_line.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(scatter_plot_line.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [scatter_plot_line.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [scatter_plot_line.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [scatter_plot_line.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(scatter_plot_line.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let PointRendererConfigOfnum = () => (PointRendererConfigOfnum = dart.constFn(point_renderer_config.PointRendererConfig$(core.num)))();
  let LineRendererConfigOfnum = () => (LineRendererConfigOfnum = dart.constFn(line_renderer_config.LineRendererConfig$(core.num)))();
  let SeriesRendererConfigOfnum = () => (SeriesRendererConfigOfnum = dart.constFn(series_renderer_config.SeriesRendererConfig$(core.num)))();
  let JSArrayOfSeriesRendererConfigOfnum = () => (JSArrayOfSeriesRendererConfigOfnum = dart.constFn(_interceptors.JSArray$(SeriesRendererConfigOfnum())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 40,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 9,
        [_Location_line]: 121,
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
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/example/combo_chart/scatter_plot_line.dart"
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
  const seriesList$ = dart.privateName(scatter_plot_line, "ScatterPlotComboLineChart.seriesList");
  const animate$ = dart.privateName(scatter_plot_line, "ScatterPlotComboLineChart.animate");
  scatter_plot_line.ScatterPlotComboLineChart = class ScatterPlotComboLineChart extends framework.StatelessWidget {
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
      return new scatter_plot_line.ScatterPlotComboLineChart.new(scatter_plot_line.ScatterPlotComboLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new scatter_plot_line.ScatterPlotComboLineChart.new(scatter_plot_line.ScatterPlotComboLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 2)[$toDouble](), intTodouble());
      let desktopSalesData = JSArrayOfLinearSales().of([new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6)), new scatter_plot_line.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6))]);
      let myRegressionData = JSArrayOfLinearSales().of([new scatter_plot_line.LinearSales.new(0, desktopSalesData[$_get](0).sales, 3.5), new scatter_plot_line.LinearSales.new(100, desktopSalesData[$_get](dart.notNull(desktopSalesData[$length]) - 1).sales, 7.5)]);
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
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: desktopSalesData}), (t0 = SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.purple.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myRegressionData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customLine"), t0)]);
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (PointRendererConfigOfnum()).new(), customSeriesRenderers: JSArrayOfSeriesRendererConfigOfnum().of([new (LineRendererConfigOfnum()).new({customRendererId: "customLine", layoutPaintOrder: 25 + 1})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let desktopSalesData = JSArrayOfLinearSales().of([new scatter_plot_line.LinearSales.new(0, 5, 3.0), new scatter_plot_line.LinearSales.new(10, 25, 5.0), new scatter_plot_line.LinearSales.new(12, 75, 4.0), new scatter_plot_line.LinearSales.new(13, 225, 5.0), new scatter_plot_line.LinearSales.new(16, 50, 4.0), new scatter_plot_line.LinearSales.new(24, 75, 3.0), new scatter_plot_line.LinearSales.new(25, 100, 3.0), new scatter_plot_line.LinearSales.new(34, 150, 5.0), new scatter_plot_line.LinearSales.new(37, 10, 4.5), new scatter_plot_line.LinearSales.new(45, 300, 8.0), new scatter_plot_line.LinearSales.new(52, 15, 4.0), new scatter_plot_line.LinearSales.new(56, 200, 7.0)]);
      let myRegressionData = JSArrayOfLinearSales().of([new scatter_plot_line.LinearSales.new(0, 5, 3.5), new scatter_plot_line.LinearSales.new(56, 240, 3.5)]);
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
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: desktopSalesData}), (t0 = SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.purple.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myRegressionData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customLine"), t0)]);
    }
  };
  (scatter_plot_line.ScatterPlotComboLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    scatter_plot_line.ScatterPlotComboLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scatter_plot_line.ScatterPlotComboLineChart.prototype;
  dart.addTypeTests(scatter_plot_line.ScatterPlotComboLineChart);
  dart.setMethodSignature(scatter_plot_line.ScatterPlotComboLineChart, () => ({
    __proto__: dart.getMethods(scatter_plot_line.ScatterPlotComboLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scatter_plot_line.ScatterPlotComboLineChart, "package:example/combo_chart/scatter_plot_line.dart");
  dart.setFieldSignature(scatter_plot_line.ScatterPlotComboLineChart, () => ({
    __proto__: dart.getFields(scatter_plot_line.ScatterPlotComboLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(scatter_plot_line, "LinearSales.year");
  const sales$ = dart.privateName(scatter_plot_line, "LinearSales.sales");
  const radius$ = dart.privateName(scatter_plot_line, "LinearSales.radius");
  scatter_plot_line.LinearSales = class LinearSales extends core.Object {
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
  (scatter_plot_line.LinearSales.new = function(year, sales, radius) {
    this[year$] = year;
    this[sales$] = sales;
    this[radius$] = radius;
    ;
  }).prototype = scatter_plot_line.LinearSales.prototype;
  dart.addTypeTests(scatter_plot_line.LinearSales);
  dart.setLibraryUri(scatter_plot_line.LinearSales, "package:example/combo_chart/scatter_plot_line.dart");
  dart.setFieldSignature(scatter_plot_line.LinearSales, () => ({
    __proto__: dart.getFields(scatter_plot_line.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/combo_chart/scatter_plot_line", {
    "package:example/combo_chart/scatter_plot_line.dart": scatter_plot_line
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scatter_plot_line.dart"],"names":[],"mappings":"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","file":"scatter_plot_line.ddc.js"}');
  // Exports:
  return {
    combo_chart__scatter_plot_line: scatter_plot_line
  };
});

//# sourceMappingURL=scatter_plot_line.ddc.js.map
