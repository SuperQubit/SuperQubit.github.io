define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const range_annotation = packages__charts_common__common.src__chart__common__behavior__range_annotation;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const range_annotation$ = packages__charts_flutter__flutter.src__behaviors__range_annotation;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const range_annotation$0 = Object.create(dart.library);
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(range_annotation$0.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(range_annotation$0.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [range_annotation$0.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [range_annotation$0.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  let JSArrayOfAnnotationSegment = () => (JSArrayOfAnnotationSegment = dart.constFn(_interceptors.JSArray$(range_annotation.AnnotationSegment)))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 39,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 51,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 69,
        [_Location_line]: 77,
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
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/time_series_chart/range_annotation.dart"
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
  const seriesList$ = dart.privateName(range_annotation$0, "TimeSeriesRangeAnnotationChart.seriesList");
  const animate$ = dart.privateName(range_annotation$0, "TimeSeriesRangeAnnotationChart.animate");
  range_annotation$0.TimeSeriesRangeAnnotationChart = class TimeSeriesRangeAnnotationChart extends framework.StatelessWidget {
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
      return new range_annotation$0.TimeSeriesRangeAnnotationChart.new(range_annotation$0.TimeSeriesRangeAnnotationChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new range_annotation$0.TimeSeriesRangeAnnotationChart.new(range_annotation$0.TimeSeriesRangeAnnotationChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfTimeSeriesSales().of([new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new range_annotation$.RangeAnnotation.new(JSArrayOfAnnotationSegment().of([new range_annotation.RangeAnnotationSegment.new(new core.DateTime.new(2017, 10, 4), new core.DateTime.new(2017, 10, 15), range_annotation.RangeAnnotationAxisType.domain)]))]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfTimeSeriesSales().of([new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 5), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 25), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 100), new range_annotation$0.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 75)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
  };
  (range_annotation$0.TimeSeriesRangeAnnotationChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    range_annotation$0.TimeSeriesRangeAnnotationChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = range_annotation$0.TimeSeriesRangeAnnotationChart.prototype;
  dart.addTypeTests(range_annotation$0.TimeSeriesRangeAnnotationChart);
  dart.setMethodSignature(range_annotation$0.TimeSeriesRangeAnnotationChart, () => ({
    __proto__: dart.getMethods(range_annotation$0.TimeSeriesRangeAnnotationChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(range_annotation$0.TimeSeriesRangeAnnotationChart, "package:example/time_series_chart/range_annotation.dart");
  dart.setFieldSignature(range_annotation$0.TimeSeriesRangeAnnotationChart, () => ({
    __proto__: dart.getFields(range_annotation$0.TimeSeriesRangeAnnotationChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const time$ = dart.privateName(range_annotation$0, "TimeSeriesSales.time");
  const sales$ = dart.privateName(range_annotation$0, "TimeSeriesSales.sales");
  range_annotation$0.TimeSeriesSales = class TimeSeriesSales extends core.Object {
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
  (range_annotation$0.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = range_annotation$0.TimeSeriesSales.prototype;
  dart.addTypeTests(range_annotation$0.TimeSeriesSales);
  dart.setLibraryUri(range_annotation$0.TimeSeriesSales, "package:example/time_series_chart/range_annotation.dart");
  dart.setFieldSignature(range_annotation$0.TimeSeriesSales, () => ({
    __proto__: dart.getFields(range_annotation$0.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/time_series_chart/range_annotation", {
    "package:example/time_series_chart/range_annotation.dart": range_annotation$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["range_annotation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,2DACT,iFAES;IAEb;;;AAOE,YAAW,2DAA+B;IAC5C;;AAIQ,mBAAa;AAEb,iBAAO,+BACP,2CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,2CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,2CAAoB,sBAAS,MAAM,IAAI,IAAI,AAAO,MAAD,SAAS,OAC1D,2CAAoB,sBAAS,MAAM,IAAI,KAAK,AAAO,MAAD,SAAS;AAGjE,YAAO,iDACD,4CACE,mBACM,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFAAuB,4BAAqB,yBAAoB,4CACrE,0CAAuB,iCACrB,gDAAkC,sBAAS,MAAM,IAAI,IACjD,sBAAS,MAAM,IAAI,KAAoC;IAGrE;;AAIQ,iBAAO,+BACP,2CAAoB,sBAAS,MAAM,GAAG,KAAK,IAC3C,2CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,2CAAoB,sBAAS,MAAM,IAAI,IAAI,MAC3C,2CAAoB,sBAAS,MAAM,IAAI,KAAK;AAGlD,YAAO,iDACD,4CACE,mBACM,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;;oEApEoC;QAAkB;;IAAlB;IAAkB;AAAtD;;EAA+D;;;;;;;;;;;;;;;IAyEhD;;;;;;IACL;;;;;;;qDAEW,MAAW;IAAX;IAAW;;EAAM","file":"range_annotation.ddc.js"}');
  // Exports:
  return {
    time_series_chart__range_annotation: range_annotation$0
  };
});

//# sourceMappingURL=range_annotation.ddc.js.map
