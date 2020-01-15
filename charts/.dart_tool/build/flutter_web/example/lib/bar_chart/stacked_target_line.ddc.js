define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const series_renderer = packages__charts_common__common.src__chart__common__series_renderer;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const bar_target_line_renderer_config = packages__charts_common__common.src__chart__bar__bar_target_line_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const stacked_target_line = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(stacked_target_line.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(stacked_target_line.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [stacked_target_line.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [stacked_target_line.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarTargetLineRendererConfigOfString = () => (BarTargetLineRendererConfigOfString = dart.constFn(bar_target_line_renderer_config.BarTargetLineRendererConfig$(core.String)))();
  let SeriesRendererConfigOfString = () => (SeriesRendererConfigOfString = dart.constFn(series_renderer_config.SeriesRendererConfig$(core.String)))();
  let JSArrayOfSeriesRendererConfigOfString = () => (JSArrayOfSeriesRendererConfigOfString = dart.constFn(_interceptors.JSArray$(SeriesRendererConfigOfString())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 32,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 9,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 9,
        [_Location_line]: 144,
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
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/stacked_target_line.dart"
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
  const seriesList$ = dart.privateName(stacked_target_line, "StackedBarTargetLineChart.seriesList");
  const animate$ = dart.privateName(stacked_target_line, "StackedBarTargetLineChart.animate");
  stacked_target_line.StackedBarTargetLineChart = class StackedBarTargetLineChart extends framework.StatelessWidget {
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
      return new stacked_target_line.StackedBarTargetLineChart.new(stacked_target_line.StackedBarTargetLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new stacked_target_line.StackedBarTargetLineChart.new(stacked_target_line.StackedBarTargetLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0, t0$, t0$0;
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let desktopTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2015", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2016", random.nextInt(100)), new stacked_target_line.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Desktop Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopTargetLineData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0), (t0$ = SeriesOfOrdinalSales$String().new({id: "Tablet Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableTargetLineData}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0$), (t0$0 = SeriesOfOrdinalSales$String().new({id: "Mobile Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileTargetLineData}), t0$0.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0$0)]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.stacked, customSeriesRenderers: JSArrayOfSeriesRendererConfigOfString().of([new (BarTargetLineRendererConfigOfString()).new({customRendererId: "customTargetLine", groupingType: base_bar_renderer_config.BarGroupingType.stacked})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0, t0$, t0$0;
      let desktopSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 5), new stacked_target_line.OrdinalSales.new("2015", 25), new stacked_target_line.OrdinalSales.new("2016", 100), new stacked_target_line.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 25), new stacked_target_line.OrdinalSales.new("2015", 50), new stacked_target_line.OrdinalSales.new("2016", 10), new stacked_target_line.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 10), new stacked_target_line.OrdinalSales.new("2015", 15), new stacked_target_line.OrdinalSales.new("2016", 50), new stacked_target_line.OrdinalSales.new("2017", 45)]);
      let desktopTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 4), new stacked_target_line.OrdinalSales.new("2015", 20), new stacked_target_line.OrdinalSales.new("2016", 80), new stacked_target_line.OrdinalSales.new("2017", 65)]);
      let tableTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 30), new stacked_target_line.OrdinalSales.new("2015", 55), new stacked_target_line.OrdinalSales.new("2016", 15), new stacked_target_line.OrdinalSales.new("2017", 25)]);
      let mobileTargetLineData = JSArrayOfOrdinalSales().of([new stacked_target_line.OrdinalSales.new("2014", 10), new stacked_target_line.OrdinalSales.new("2015", 5), new stacked_target_line.OrdinalSales.new("2016", 45), new stacked_target_line.OrdinalSales.new("2017", 35)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Desktop Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopTargetLineData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0), (t0$ = SeriesOfOrdinalSales$String().new({id: "Tablet Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableTargetLineData}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0$), (t0$0 = SeriesOfOrdinalSales$String().new({id: "Mobile Target Line", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileTargetLineData}), t0$0.setAttribute(core.String, series_renderer.rendererIdKey, "customTargetLine"), t0$0)]);
    }
  };
  (stacked_target_line.StackedBarTargetLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    stacked_target_line.StackedBarTargetLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = stacked_target_line.StackedBarTargetLineChart.prototype;
  dart.addTypeTests(stacked_target_line.StackedBarTargetLineChart);
  dart.setMethodSignature(stacked_target_line.StackedBarTargetLineChart, () => ({
    __proto__: dart.getMethods(stacked_target_line.StackedBarTargetLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(stacked_target_line.StackedBarTargetLineChart, "package:example/bar_chart/stacked_target_line.dart");
  dart.setFieldSignature(stacked_target_line.StackedBarTargetLineChart, () => ({
    __proto__: dart.getFields(stacked_target_line.StackedBarTargetLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(stacked_target_line, "OrdinalSales.year");
  const sales$ = dart.privateName(stacked_target_line, "OrdinalSales.sales");
  stacked_target_line.OrdinalSales = class OrdinalSales extends core.Object {
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
  (stacked_target_line.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = stacked_target_line.OrdinalSales.prototype;
  dart.addTypeTests(stacked_target_line.OrdinalSales);
  dart.setLibraryUri(stacked_target_line.OrdinalSales, "package:example/bar_chart/stacked_target_line.dart");
  dart.setFieldSignature(stacked_target_line.OrdinalSales, () => ({
    __proto__: dart.getFields(stacked_target_line.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/stacked_target_line", {
    "package:example/bar_chart/stacked_target_line.dart": stacked_target_line
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stacked_target_line.dart"],"names":[],"mappings":"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","file":"stacked_target_line.ddc.js"}');
  // Exports:
  return {
    bar_chart__stacked_target_line: stacked_target_line
  };
});

//# sourceMappingURL=stacked_target_line.ddc.js.map
