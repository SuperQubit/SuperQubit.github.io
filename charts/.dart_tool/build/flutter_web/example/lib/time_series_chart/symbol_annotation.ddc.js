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
  const point_renderer = packages__charts_common__common.src__chart__scatter_plot__point_renderer;
  const symbol_annotation_renderer_config = packages__charts_common__common.src__chart__scatter_plot__symbol_annotation_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const date_time_factory = packages__charts_common__common.src__common__date_time_factory;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const symbol_annotation = Object.create(dart.library);
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(symbol_annotation.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(symbol_annotation.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToColor = () => (TimeSeriesSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [symbol_annotation.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [symbol_annotation.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [symbol_annotation.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToNull = () => (TimeSeriesSalesAndintToNull = dart.constFn(dart.fnType(core.Null, [symbol_annotation.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  let SymbolAnnotationRendererConfigOfDateTime = () => (SymbolAnnotationRendererConfigOfDateTime = dart.constFn(symbol_annotation_renderer_config.SymbolAnnotationRendererConfig$(core.DateTime)))();
  let SeriesRendererConfigOfDateTime = () => (SeriesRendererConfigOfDateTime = dart.constFn(series_renderer_config.SeriesRendererConfig$(core.DateTime)))();
  let JSArrayOfSeriesRendererConfigOfDateTime = () => (JSArrayOfSeriesRendererConfigOfDateTime = dart.constFn(_interceptors.JSArray$(SeriesRendererConfigOfDateTime())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: date_time_factory.LocalDateTimeFactory.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 7,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dateTimeFactory",
        [_Location_column]: 7,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/example/time_series_chart/symbol_annotation.dart"
      });
    }
  });
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C5;
  let C6;
  let C2;
  let C1;
  const seriesList$ = dart.privateName(symbol_annotation, "TimeSeriesSymbolAnnotationChart.seriesList");
  const animate$ = dart.privateName(symbol_annotation, "TimeSeriesSymbolAnnotationChart.animate");
  symbol_annotation.TimeSeriesSymbolAnnotationChart = class TimeSeriesSymbolAnnotationChart extends framework.StatelessWidget {
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
      return new symbol_annotation.TimeSeriesSymbolAnnotationChart.new(symbol_annotation.TimeSeriesSymbolAnnotationChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new symbol_annotation.TimeSeriesSymbolAnnotationChart.new(symbol_annotation.TimeSeriesSymbolAnnotationChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0, t0$;
      let random = math.Random.new();
      let myDesktopData = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 19), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 26), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 3), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 10), sales: random.nextInt(100)})]);
      let myTabletData = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 19), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 26), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 3), sales: random.nextInt(100)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 10), sales: random.nextInt(100)})]);
      let myAnnotationDataTop = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 24), timePrevious: new core.DateTime.new(2017, 9, 19), timeTarget: new core.DateTime.new(2017, 9, 24)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 29), timePrevious: new core.DateTime.new(2017, 9, 29), timeTarget: new core.DateTime.new(2017, 10, 4)})]);
      let myAnnotationDataBottom = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 25), timePrevious: new core.DateTime.new(2017, 9, 21), timeTarget: new core.DateTime.new(2017, 9, 25)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 31)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 5)})]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: myDesktopData}), SeriesOfTimeSeriesSales$DateTime().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: myTabletData}), (t0 = SeriesOfTimeSeriesSales$DateTime().new({id: "Annotation Series 1", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.gray.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), domainLowerBoundFn: dart.fn((row, _) => row.timePrevious, TimeSeriesSalesAndintToDateTime()), domainUpperBoundFn: dart.fn((row, _) => row.timeTarget, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((_, __) => null, TimeSeriesSalesAndintToNull()), data: myAnnotationDataTop}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customSymbolAnnotation"), t0.setAttribute(core.double, point_renderer.boundsLineRadiusPxKey, 3.5), t0), (t0$ = SeriesOfTimeSeriesSales$DateTime().new({id: "Annotation Series 2", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), domainLowerBoundFn: dart.fn((row, _) => row.timePrevious, TimeSeriesSalesAndintToDateTime()), domainUpperBoundFn: dart.fn((row, _) => row.timeTarget, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((_, __) => null, TimeSeriesSalesAndintToNull()), data: myAnnotationDataBottom}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customSymbolAnnotation"), t0$.setAttribute(core.double, point_renderer.boundsLineRadiusPxKey, 3.5), t0$)]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, customSeriesRenderers: JSArrayOfSeriesRendererConfigOfDateTime().of([new (SymbolAnnotationRendererConfigOfDateTime()).new({customRendererId: "customSymbolAnnotation"})]), dateTimeFactory: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
    }
    static _createSampleData() {
      let t0, t0$;
      let myDesktopData = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 19), sales: 5}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 26), sales: 25}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 3), sales: 100}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 10), sales: 75})]);
      let myTabletData = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 19), sales: 10}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 26), sales: 50}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 3), sales: 200}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 10), sales: 150})]);
      let myAnnotationDataTop = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 24), timePrevious: new core.DateTime.new(2017, 9, 19), timeTarget: new core.DateTime.new(2017, 9, 24)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 29), timePrevious: new core.DateTime.new(2017, 9, 29), timeTarget: new core.DateTime.new(2017, 10, 4)})]);
      let myAnnotationDataBottom = JSArrayOfTimeSeriesSales().of([new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 25), timePrevious: new core.DateTime.new(2017, 9, 21), timeTarget: new core.DateTime.new(2017, 9, 25)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 9, 31)}), new symbol_annotation.TimeSeriesSales.new({timeCurrent: new core.DateTime.new(2017, 10, 5)})]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: myDesktopData}), SeriesOfTimeSeriesSales$DateTime().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: myTabletData}), (t0 = SeriesOfTimeSeriesSales$DateTime().new({id: "Annotation Series 1", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.gray.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), domainLowerBoundFn: dart.fn((row, _) => row.timePrevious, TimeSeriesSalesAndintToDateTime()), domainUpperBoundFn: dart.fn((row, _) => row.timeTarget, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((_, __) => null, TimeSeriesSalesAndintToNull()), data: myAnnotationDataTop}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customSymbolAnnotation"), t0.setAttribute(core.double, point_renderer.boundsLineRadiusPxKey, 3.5), t0), (t0$ = SeriesOfTimeSeriesSales$DateTime().new({id: "Annotation Series 2", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.timeCurrent, TimeSeriesSalesAndintToDateTime()), domainLowerBoundFn: dart.fn((row, _) => row.timePrevious, TimeSeriesSalesAndintToDateTime()), domainUpperBoundFn: dart.fn((row, _) => row.timeTarget, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((_, __) => null, TimeSeriesSalesAndintToNull()), data: myAnnotationDataBottom}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customSymbolAnnotation"), t0$.setAttribute(core.double, point_renderer.boundsLineRadiusPxKey, 3.5), t0$)]);
    }
  };
  (symbol_annotation.TimeSeriesSymbolAnnotationChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    symbol_annotation.TimeSeriesSymbolAnnotationChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = symbol_annotation.TimeSeriesSymbolAnnotationChart.prototype;
  dart.addTypeTests(symbol_annotation.TimeSeriesSymbolAnnotationChart);
  dart.setMethodSignature(symbol_annotation.TimeSeriesSymbolAnnotationChart, () => ({
    __proto__: dart.getMethods(symbol_annotation.TimeSeriesSymbolAnnotationChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(symbol_annotation.TimeSeriesSymbolAnnotationChart, "package:example/time_series_chart/symbol_annotation.dart");
  dart.setFieldSignature(symbol_annotation.TimeSeriesSymbolAnnotationChart, () => ({
    __proto__: dart.getFields(symbol_annotation.TimeSeriesSymbolAnnotationChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const timeCurrent$ = dart.privateName(symbol_annotation, "TimeSeriesSales.timeCurrent");
  const timePrevious$ = dart.privateName(symbol_annotation, "TimeSeriesSales.timePrevious");
  const timeTarget$ = dart.privateName(symbol_annotation, "TimeSeriesSales.timeTarget");
  const sales$ = dart.privateName(symbol_annotation, "TimeSeriesSales.sales");
  symbol_annotation.TimeSeriesSales = class TimeSeriesSales extends core.Object {
    get timeCurrent() {
      return this[timeCurrent$];
    }
    set timeCurrent(value) {
      super.timeCurrent = value;
    }
    get timePrevious() {
      return this[timePrevious$];
    }
    set timePrevious(value) {
      super.timePrevious = value;
    }
    get timeTarget() {
      return this[timeTarget$];
    }
    set timeTarget(value) {
      super.timeTarget = value;
    }
    get sales() {
      return this[sales$];
    }
    set sales(value) {
      super.sales = value;
    }
  };
  (symbol_annotation.TimeSeriesSales.new = function(opts) {
    let timeCurrent = opts && 'timeCurrent' in opts ? opts.timeCurrent : null;
    let timePrevious = opts && 'timePrevious' in opts ? opts.timePrevious : null;
    let timeTarget = opts && 'timeTarget' in opts ? opts.timeTarget : null;
    let sales = opts && 'sales' in opts ? opts.sales : null;
    this[timeCurrent$] = timeCurrent;
    this[timePrevious$] = timePrevious;
    this[timeTarget$] = timeTarget;
    this[sales$] = sales;
    ;
  }).prototype = symbol_annotation.TimeSeriesSales.prototype;
  dart.addTypeTests(symbol_annotation.TimeSeriesSales);
  dart.setLibraryUri(symbol_annotation.TimeSeriesSales, "package:example/time_series_chart/symbol_annotation.dart");
  dart.setFieldSignature(symbol_annotation.TimeSeriesSales, () => ({
    __proto__: dart.getFields(symbol_annotation.TimeSeriesSales.__proto__),
    timeCurrent: dart.finalFieldType(core.DateTime),
    timePrevious: dart.finalFieldType(core.DateTime),
    timeTarget: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/time_series_chart/symbol_annotation", {
    "package:example/time_series_chart/symbol_annotation.dart": symbol_annotation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["symbol_annotation.dart"],"names":[],"mappings":"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","file":"symbol_annotation.ddc.js"}');
  // Exports:
  return {
    time_series_chart__symbol_annotation: symbol_annotation
  };
});

//# sourceMappingURL=symbol_annotation.ddc.js.map
