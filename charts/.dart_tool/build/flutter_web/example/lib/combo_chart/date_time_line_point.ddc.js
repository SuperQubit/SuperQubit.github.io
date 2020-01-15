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
  const line_renderer_config = packages__charts_common__common.src__chart__line__line_renderer_config;
  const point_renderer_config = packages__charts_common__common.src__chart__scatter_plot__point_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const date_time_factory = packages__charts_common__common.src__common__date_time_factory;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const date_time_line_point = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(date_time_line_point.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(date_time_line_point.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToColor = () => (TimeSeriesSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [date_time_line_point.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [date_time_line_point.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [date_time_line_point.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  let LineRendererConfigOfDateTime = () => (LineRendererConfigOfDateTime = dart.constFn(line_renderer_config.LineRendererConfig$(core.DateTime)))();
  let PointRendererConfigOfDateTime = () => (PointRendererConfigOfDateTime = dart.constFn(point_renderer_config.PointRendererConfig$(core.DateTime)))();
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
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dateTimeFactory",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/example/combo_chart/date_time_line_point.dart"
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
  let C7;
  let C2;
  let C1;
  const seriesList$ = dart.privateName(date_time_line_point, "DateTimeComboLinePointChart.seriesList");
  const animate$ = dart.privateName(date_time_line_point, "DateTimeComboLinePointChart.animate");
  date_time_line_point.DateTimeComboLinePointChart = class DateTimeComboLinePointChart extends framework.StatelessWidget {
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
      return new date_time_line_point.DateTimeComboLinePointChart.new(date_time_line_point.DateTimeComboLinePointChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new date_time_line_point.DateTimeComboLinePointChart.new(date_time_line_point.DateTimeComboLinePointChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      let tableSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      let mobileSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), tableSalesData[$_get](0).sales), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), tableSalesData[$_get](1).sales), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), tableSalesData[$_get](2).sales), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), tableSalesData[$_get](3).sales)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: desktopSalesData}), SeriesOfTimeSeriesSales$DateTime().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: tableSalesData}), (t0 = SeriesOfTimeSeriesSales$DateTime().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: mobileSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customPoint"), t0)]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, defaultRenderer: new (LineRendererConfigOfDateTime()).new(), customSeriesRenderers: JSArrayOfSeriesRendererConfigOfDateTime().of([new (PointRendererConfigOfDateTime()).new({customRendererId: "customPoint"})]), dateTimeFactory: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
    }
    static _createSampleData() {
      let t0;
      let desktopSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 5), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 25), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 100), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 75)]);
      let tableSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 10), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 50), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 200), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 150)]);
      let mobileSalesData = JSArrayOfTimeSeriesSales().of([new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 10), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 50), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 200), new date_time_line_point.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 150)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: desktopSalesData}), SeriesOfTimeSeriesSales$DateTime().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: tableSalesData}), (t0 = SeriesOfTimeSeriesSales$DateTime().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: mobileSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customPoint"), t0)]);
    }
  };
  (date_time_line_point.DateTimeComboLinePointChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    date_time_line_point.DateTimeComboLinePointChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_time_line_point.DateTimeComboLinePointChart.prototype;
  dart.addTypeTests(date_time_line_point.DateTimeComboLinePointChart);
  dart.setMethodSignature(date_time_line_point.DateTimeComboLinePointChart, () => ({
    __proto__: dart.getMethods(date_time_line_point.DateTimeComboLinePointChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_time_line_point.DateTimeComboLinePointChart, "package:example/combo_chart/date_time_line_point.dart");
  dart.setFieldSignature(date_time_line_point.DateTimeComboLinePointChart, () => ({
    __proto__: dart.getFields(date_time_line_point.DateTimeComboLinePointChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const time$ = dart.privateName(date_time_line_point, "TimeSeriesSales.time");
  const sales$ = dart.privateName(date_time_line_point, "TimeSeriesSales.sales");
  date_time_line_point.TimeSeriesSales = class TimeSeriesSales extends core.Object {
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get sales() {
      return this[sales$];
    }
    set sales(value) {
      super.sales = value;
    }
  };
  (date_time_line_point.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = date_time_line_point.TimeSeriesSales.prototype;
  dart.addTypeTests(date_time_line_point.TimeSeriesSales);
  dart.setLibraryUri(date_time_line_point.TimeSeriesSales, "package:example/combo_chart/date_time_line_point.dart");
  dart.setFieldSignature(date_time_line_point.TimeSeriesSales, () => ({
    __proto__: dart.getFields(date_time_line_point.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/combo_chart/date_time_line_point", {
    "package:example/combo_chart/date_time_line_point.dart": date_time_line_point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_time_line_point.dart"],"names":[],"mappings":"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","file":"date_time_line_point.ddc.js"}');
  // Exports:
  return {
    combo_chart__date_time_line_point: date_time_line_point
  };
});

//# sourceMappingURL=date_time_line_point.ddc.js.map
