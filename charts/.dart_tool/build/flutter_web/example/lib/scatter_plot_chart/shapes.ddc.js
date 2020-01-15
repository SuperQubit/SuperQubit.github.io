define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const series = packages__charts_common__common.src__data__series;
  const color = packages__charts_common__common.src__common__color;
  const point_renderer = packages__charts_common__common.src__chart__scatter_plot__point_renderer;
  const point_renderer_config = packages__charts_common__common.src__chart__scatter_plot__point_renderer_config;
  const symbol_renderer = packages__charts_common__common.src__common__symbol_renderer;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const shapes = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $_get = dartx._get;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(shapes.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(shapes.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [shapes.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [shapes.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [shapes.LinearSales, core.int])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(shapes.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let PointRendererConfigOfnum = () => (PointRendererConfigOfnum = dart.constFn(point_renderer_config.PointRendererConfig$(core.num)))();
  let IdentityMapOfString$SymbolRenderer = () => (IdentityMapOfString$SymbolRenderer = dart.constFn(_js_helper.IdentityMap$(core.String, symbol_renderer.SymbolRenderer)))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 40,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 132,
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
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/shapes.dart"
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
  const seriesList$ = dart.privateName(shapes, "ShapesScatterPlotChart.seriesList");
  const animate$ = dart.privateName(shapes, "ShapesScatterPlotChart.animate");
  shapes.ShapesScatterPlotChart = class ShapesScatterPlotChart extends framework.StatelessWidget {
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
      return new shapes.ShapesScatterPlotChart.new(shapes.ShapesScatterPlotChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new shapes.ShapesScatterPlotChart.new(shapes.ShapesScatterPlotChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 2)[$toDouble](), intTodouble());
      let data = JSArrayOfLinearSales().of([new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), "circle", null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, "circle", material_palette.MaterialPalette.white, 2.0), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), "circle", null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, "circle", material_palette.MaterialPalette.white, 2.0), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new shapes.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, null, material_palette.MaterialPalette.white, 2.0)]);
      let maxMeasure = 100;
      return JSArrayOfSeriesOfLinearSales$num().of([(t0 = SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), fillColorFn: dart.fn((row, _) => row.fillColor, LinearSalesAndintToColor()), strokeWidthPxFn: dart.fn((row, _) => row.strokeWidth, LinearSalesAndintTodouble()), data: data}), t0.setAttribute(intToString(), point_renderer.pointSymbolRendererFnKey, dart.fn(index => data[$_get](index).shape, intToString())), t0.setAttribute(core.String, point_renderer.pointSymbolRendererIdKey, "rect"), t0)]);
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (PointRendererConfigOfnum()).new({customSymbolRenderers: new (IdentityMapOfString$SymbolRenderer()).from(["circle", new symbol_renderer.CircleSymbolRenderer.new(), "rect", new symbol_renderer.RectSymbolRenderer.new()])}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let data = JSArrayOfLinearSales().of([new shapes.LinearSales.new(0, 5, 3.0, "circle", null, null), new shapes.LinearSales.new(10, 25, 5.0, null, null, null), new shapes.LinearSales.new(12, 75, 4.0, null, null, null), new shapes.LinearSales.new(13, 225, 5.0, "circle", material_palette.MaterialPalette.white, 2.0), new shapes.LinearSales.new(16, 50, 4.0, null, null, null), new shapes.LinearSales.new(24, 75, 3.0, null, null, null), new shapes.LinearSales.new(25, 100, 3.0, "circle", null, null), new shapes.LinearSales.new(34, 150, 5.0, null, null, null), new shapes.LinearSales.new(37, 10, 4.5, null, null, null), new shapes.LinearSales.new(45, 300, 8.0, "circle", material_palette.MaterialPalette.white, 2.0), new shapes.LinearSales.new(52, 15, 4.0, null, null, null), new shapes.LinearSales.new(56, 200, 7.0, null, material_palette.MaterialPalette.white, 2.0)]);
      let maxMeasure = 300;
      return JSArrayOfSeriesOfLinearSales$int().of([(t0 = SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), fillColorFn: dart.fn((row, _) => row.fillColor, LinearSalesAndintToColor()), strokeWidthPxFn: dart.fn((row, _) => row.strokeWidth, LinearSalesAndintTodouble()), data: data}), t0.setAttribute(intToString(), point_renderer.pointSymbolRendererFnKey, dart.fn(index => data[$_get](index).shape, intToString())), t0.setAttribute(core.String, point_renderer.pointSymbolRendererIdKey, "rect"), t0)]);
    }
  };
  (shapes.ShapesScatterPlotChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    shapes.ShapesScatterPlotChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shapes.ShapesScatterPlotChart.prototype;
  dart.addTypeTests(shapes.ShapesScatterPlotChart);
  dart.setMethodSignature(shapes.ShapesScatterPlotChart, () => ({
    __proto__: dart.getMethods(shapes.ShapesScatterPlotChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shapes.ShapesScatterPlotChart, "package:example/scatter_plot_chart/shapes.dart");
  dart.setFieldSignature(shapes.ShapesScatterPlotChart, () => ({
    __proto__: dart.getFields(shapes.ShapesScatterPlotChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(shapes, "LinearSales.year");
  const sales$ = dart.privateName(shapes, "LinearSales.sales");
  const radius$ = dart.privateName(shapes, "LinearSales.radius");
  const shape$ = dart.privateName(shapes, "LinearSales.shape");
  const fillColor$ = dart.privateName(shapes, "LinearSales.fillColor");
  const strokeWidth$ = dart.privateName(shapes, "LinearSales.strokeWidth");
  shapes.LinearSales = class LinearSales extends core.Object {
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
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get fillColor() {
      return this[fillColor$];
    }
    set fillColor(value) {
      super.fillColor = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
  };
  (shapes.LinearSales.new = function(year, sales, radius, shape, fillColor, strokeWidth) {
    this[year$] = year;
    this[sales$] = sales;
    this[radius$] = radius;
    this[shape$] = shape;
    this[fillColor$] = fillColor;
    this[strokeWidth$] = strokeWidth;
    ;
  }).prototype = shapes.LinearSales.prototype;
  dart.addTypeTests(shapes.LinearSales);
  dart.setLibraryUri(shapes.LinearSales, "package:example/scatter_plot_chart/shapes.dart");
  dart.setFieldSignature(shapes.LinearSales, () => ({
    __proto__: dart.getFields(shapes.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double),
    shape: dart.finalFieldType(core.String),
    fillColor: dart.finalFieldType(color.Color),
    strokeWidth: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/scatter_plot_chart/shapes", {
    "package:example/scatter_plot_chart/shapes.dart": shapes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shapes.dart"],"names":[],"mappings":"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","file":"shapes.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__shapes: shapes
  };
});

//# sourceMappingURL=shapes.ddc.js.map
