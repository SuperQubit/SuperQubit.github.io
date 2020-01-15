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
  const line_point_highlighter = packages__charts_common__common.src__chart__common__behavior__line_point_highlighter;
  const selection_trigger = packages__charts_common__common.src__chart__common__behavior__selection__selection_trigger;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const point_renderer_config = packages__charts_common__common.src__chart__scatter_plot__point_renderer_config;
  const symbol_renderer = packages__charts_common__common.src__common__symbol_renderer;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const line_point_highlighter$ = packages__charts_flutter__flutter.src__behaviors__line_point_highlighter;
  const select_nearest = packages__charts_flutter__flutter.src__behaviors__select_nearest;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const selection_scatter_plot_highlight = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $_get = dartx._get;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(selection_scatter_plot_highlight.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(selection_scatter_plot_highlight.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [selection_scatter_plot_highlight.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [selection_scatter_plot_highlight.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [selection_scatter_plot_highlight.LinearSales, core.int])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(selection_scatter_plot_highlight.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
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
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 9,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 161,
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
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_scatter_plot_highlight.dart"
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
  const seriesList$ = dart.privateName(selection_scatter_plot_highlight, "SelectionScatterPlotHighlight.seriesList");
  const animate$ = dart.privateName(selection_scatter_plot_highlight, "SelectionScatterPlotHighlight.animate");
  selection_scatter_plot_highlight.SelectionScatterPlotHighlight = class SelectionScatterPlotHighlight extends framework.StatelessWidget {
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
      return new selection_scatter_plot_highlight.SelectionScatterPlotHighlight.new(selection_scatter_plot_highlight.SelectionScatterPlotHighlight._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_scatter_plot_highlight.SelectionScatterPlotHighlight.new(selection_scatter_plot_highlight.SelectionScatterPlotHighlight._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 2)[$toDouble](), intTodouble());
      let data = JSArrayOfLinearSales().of([new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), "circle", null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, "circle", material_palette.MaterialPalette.white, 2.0), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), "circle", null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, "circle", material_palette.MaterialPalette.white, 2.0), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), makeRadius(6), null, null, null), new selection_scatter_plot_highlight.LinearSales.new(random.nextInt(100), random.nextInt(100), dart.notNull(makeRadius(4)) + 4, null, material_palette.MaterialPalette.white, 2.0)]);
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
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new line_point_highlighter$.LinePointHighlighter.new({showHorizontalFollowLine: line_point_highlighter.LinePointHighlighterFollowLineType.nearest, showVerticalFollowLine: line_point_highlighter.LinePointHighlighterFollowLineType.nearest}), select_nearest.SelectNearest.new({eventTrigger: selection_trigger.SelectionTrigger.tapAndDrag})]), defaultRenderer: new (PointRendererConfigOfnum()).new({customSymbolRenderers: new (IdentityMapOfString$SymbolRenderer()).from(["circle", new symbol_renderer.CircleSymbolRenderer.new(), "rect", new symbol_renderer.RectSymbolRenderer.new()])}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let data = JSArrayOfLinearSales().of([new selection_scatter_plot_highlight.LinearSales.new(0, 5, 3.0, "circle", null, null), new selection_scatter_plot_highlight.LinearSales.new(10, 25, 5.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(12, 75, 4.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(13, 225, 5.0, "circle", material_palette.MaterialPalette.white, 2.0), new selection_scatter_plot_highlight.LinearSales.new(16, 50, 4.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(24, 75, 3.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(25, 100, 3.0, "circle", null, null), new selection_scatter_plot_highlight.LinearSales.new(34, 150, 5.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(37, 10, 4.5, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(45, 300, 8.0, "circle", material_palette.MaterialPalette.white, 2.0), new selection_scatter_plot_highlight.LinearSales.new(52, 15, 4.0, null, null, null), new selection_scatter_plot_highlight.LinearSales.new(56, 200, 7.0, null, material_palette.MaterialPalette.white, 2.0)]);
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
  (selection_scatter_plot_highlight.SelectionScatterPlotHighlight.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    selection_scatter_plot_highlight.SelectionScatterPlotHighlight.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_scatter_plot_highlight.SelectionScatterPlotHighlight.prototype;
  dart.addTypeTests(selection_scatter_plot_highlight.SelectionScatterPlotHighlight);
  dart.setMethodSignature(selection_scatter_plot_highlight.SelectionScatterPlotHighlight, () => ({
    __proto__: dart.getMethods(selection_scatter_plot_highlight.SelectionScatterPlotHighlight.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(selection_scatter_plot_highlight.SelectionScatterPlotHighlight, "package:example/behaviors/selection_scatter_plot_highlight.dart");
  dart.setFieldSignature(selection_scatter_plot_highlight.SelectionScatterPlotHighlight, () => ({
    __proto__: dart.getFields(selection_scatter_plot_highlight.SelectionScatterPlotHighlight.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.year");
  const sales$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.sales");
  const radius$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.radius");
  const shape$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.shape");
  const fillColor$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.fillColor");
  const strokeWidth$ = dart.privateName(selection_scatter_plot_highlight, "LinearSales.strokeWidth");
  selection_scatter_plot_highlight.LinearSales = class LinearSales extends core.Object {
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
  (selection_scatter_plot_highlight.LinearSales.new = function(year, sales, radius, shape, fillColor, strokeWidth) {
    this[year$] = year;
    this[sales$] = sales;
    this[radius$] = radius;
    this[shape$] = shape;
    this[fillColor$] = fillColor;
    this[strokeWidth$] = strokeWidth;
    ;
  }).prototype = selection_scatter_plot_highlight.LinearSales.prototype;
  dart.addTypeTests(selection_scatter_plot_highlight.LinearSales);
  dart.setLibraryUri(selection_scatter_plot_highlight.LinearSales, "package:example/behaviors/selection_scatter_plot_highlight.dart");
  dart.setFieldSignature(selection_scatter_plot_highlight.LinearSales, () => ({
    __proto__: dart.getFields(selection_scatter_plot_highlight.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double),
    shape: dart.finalFieldType(core.String),
    fillColor: dart.finalFieldType(color.Color),
    strokeWidth: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/behaviors/selection_scatter_plot_highlight", {
    "package:example/behaviors/selection_scatter_plot_highlight.dart": selection_scatter_plot_highlight
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_scatter_plot_highlight.dart"],"names":[],"mappings":"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","file":"selection_scatter_plot_highlight.ddc.js"}');
  // Exports:
  return {
    behaviors__selection_scatter_plot_highlight: selection_scatter_plot_highlight
  };
});

//# sourceMappingURL=selection_scatter_plot_highlight.ddc.js.map
