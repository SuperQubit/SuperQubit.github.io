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
  const end_points_time_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__end_points_time_axis_spec;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const end_points_axis = Object.create(dart.library);
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(end_points_axis.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(end_points_axis.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToColor = () => (TimeSeriesSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [end_points_axis.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [end_points_axis.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [end_points_axis.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 80,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/example/time_series_chart/end_points_axis.dart"
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
  const seriesList$ = dart.privateName(end_points_axis, "EndPointsAxisTimeSeriesChart.seriesList");
  const animate$ = dart.privateName(end_points_axis, "EndPointsAxisTimeSeriesChart.animate");
  end_points_axis.EndPointsAxisTimeSeriesChart = class EndPointsAxisTimeSeriesChart extends framework.StatelessWidget {
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
      return new end_points_axis.EndPointsAxisTimeSeriesChart.new(end_points_axis.EndPointsAxisTimeSeriesChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new end_points_axis.EndPointsAxisTimeSeriesChart.new(end_points_axis.EndPointsAxisTimeSeriesChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfTimeSeriesSales().of([new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, domainAxis: new end_points_time_axis_spec.EndPointsTimeAxisSpec.new(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfTimeSeriesSales().of([new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 5), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 25), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 100), new end_points_axis.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 75)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
  };
  (end_points_axis.EndPointsAxisTimeSeriesChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    end_points_axis.EndPointsAxisTimeSeriesChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = end_points_axis.EndPointsAxisTimeSeriesChart.prototype;
  dart.addTypeTests(end_points_axis.EndPointsAxisTimeSeriesChart);
  dart.setMethodSignature(end_points_axis.EndPointsAxisTimeSeriesChart, () => ({
    __proto__: dart.getMethods(end_points_axis.EndPointsAxisTimeSeriesChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(end_points_axis.EndPointsAxisTimeSeriesChart, "package:example/time_series_chart/end_points_axis.dart");
  dart.setFieldSignature(end_points_axis.EndPointsAxisTimeSeriesChart, () => ({
    __proto__: dart.getFields(end_points_axis.EndPointsAxisTimeSeriesChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const time$ = dart.privateName(end_points_axis, "TimeSeriesSales.time");
  const sales$ = dart.privateName(end_points_axis, "TimeSeriesSales.sales");
  end_points_axis.TimeSeriesSales = class TimeSeriesSales extends core.Object {
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
  (end_points_axis.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = end_points_axis.TimeSeriesSales.prototype;
  dart.addTypeTests(end_points_axis.TimeSeriesSales);
  dart.setLibraryUri(end_points_axis.TimeSeriesSales, "package:example/time_series_chart/end_points_axis.dart");
  dart.setFieldSignature(end_points_axis.TimeSeriesSales, () => ({
    __proto__: dart.getFields(end_points_axis.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/time_series_chart/end_points_axis", {
    "package:example/time_series_chart/end_points_axis.dart": end_points_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["end_points_axis.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,sDACT,4EAES;IAEb;;;AAOE,YAAW,sDAA6B;IAC1C;;AAIQ,mBAAa;AAEb,iBAAO,+BACP,wCAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,wCAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,wCAAoB,sBAAS,MAAM,IAAI,IAAI,AAAO,MAAD,SAAS,OAC1D,wCAAoB,sBAAS,MAAM,IAAI,KAAK,AAAO,MAAD,SAAS;AAGjE,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFACT,4BACS,0BAKO;IAEpB;;AAIQ,iBAAO,+BACP,wCAAoB,sBAAS,MAAM,GAAG,KAAK,IAC3C,wCAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,wCAAoB,sBAAS,MAAM,IAAI,IAAI,MAC3C,wCAAoB,sBAAS,MAAM,IAAI,KAAK;AAGlD,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;;+DAzEkC;QAAkB;;IAAlB;IAAkB;AAApD;;EAA6D;;;;;;;;;;;;;;;IA8E9C;;;;;;IACL;;;;;;;kDAEW,MAAW;IAAX;IAAW;;EAAM","file":"end_points_axis.ddc.js"}');
  // Exports:
  return {
    time_series_chart__end_points_axis: end_points_axis
  };
});

//# sourceMappingURL=end_points_axis.ddc.js.map
