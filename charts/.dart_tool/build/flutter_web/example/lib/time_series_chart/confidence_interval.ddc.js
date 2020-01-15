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
  const date_time_factory = packages__charts_common__common.src__common__date_time_factory;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const confidence_interval = Object.create(dart.library);
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(confidence_interval.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(confidence_interval.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToColor = () => (TimeSeriesSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [confidence_interval.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [confidence_interval.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [confidence_interval.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
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
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dateTimeFactory",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/example/time_series_chart/confidence_interval.dart"
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
  let C2;
  let C1;
  const seriesList$ = dart.privateName(confidence_interval, "TimeSeriesConfidenceInterval.seriesList");
  const animate$ = dart.privateName(confidence_interval, "TimeSeriesConfidenceInterval.animate");
  confidence_interval.TimeSeriesConfidenceInterval = class TimeSeriesConfidenceInterval extends framework.StatelessWidget {
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
      return new confidence_interval.TimeSeriesConfidenceInterval.new(confidence_interval.TimeSeriesConfidenceInterval._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new confidence_interval.TimeSeriesConfidenceInterval.new(confidence_interval.TimeSeriesConfidenceInterval._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfTimeSeriesSales().of([new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), random.nextInt(100))]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), measureLowerBoundFn: dart.fn((sales, _) => dart.notNull(sales.sales) - 5, TimeSeriesSalesAndintToint()), measureUpperBoundFn: dart.fn((sales, _) => dart.notNull(sales.sales) + 5, TimeSeriesSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, dateTimeFactory: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
    }
    static _createSampleData() {
      let data = JSArrayOfTimeSeriesSales().of([new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 5), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 26), 25), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 3), 100), new confidence_interval.TimeSeriesSales.new(new core.DateTime.new(2017, 10, 10), 75)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), measureLowerBoundFn: dart.fn((sales, _) => dart.notNull(sales.sales) - 5, TimeSeriesSalesAndintToint()), measureUpperBoundFn: dart.fn((sales, _) => dart.notNull(sales.sales) + 5, TimeSeriesSalesAndintToint()), data: data})]);
    }
  };
  (confidence_interval.TimeSeriesConfidenceInterval.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    confidence_interval.TimeSeriesConfidenceInterval.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = confidence_interval.TimeSeriesConfidenceInterval.prototype;
  dart.addTypeTests(confidence_interval.TimeSeriesConfidenceInterval);
  dart.setMethodSignature(confidence_interval.TimeSeriesConfidenceInterval, () => ({
    __proto__: dart.getMethods(confidence_interval.TimeSeriesConfidenceInterval.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(confidence_interval.TimeSeriesConfidenceInterval, "package:example/time_series_chart/confidence_interval.dart");
  dart.setFieldSignature(confidence_interval.TimeSeriesConfidenceInterval, () => ({
    __proto__: dart.getFields(confidence_interval.TimeSeriesConfidenceInterval.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const time$ = dart.privateName(confidence_interval, "TimeSeriesSales.time");
  const sales$ = dart.privateName(confidence_interval, "TimeSeriesSales.sales");
  confidence_interval.TimeSeriesSales = class TimeSeriesSales extends core.Object {
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
  (confidence_interval.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = confidence_interval.TimeSeriesSales.prototype;
  dart.addTypeTests(confidence_interval.TimeSeriesSales);
  dart.setLibraryUri(confidence_interval.TimeSeriesSales, "package:example/time_series_chart/confidence_interval.dart");
  dart.setFieldSignature(confidence_interval.TimeSeriesSales, () => ({
    __proto__: dart.getFields(confidence_interval.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/time_series_chart/confidence_interval", {
    "package:example/time_series_chart/confidence_interval.dart": confidence_interval
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["confidence_interval.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,0DACT,gFAES;IAEb;;;AAOE,YAAW,0DAA6B;IAC1C;;AAIQ,mBAAa;AAEb,iBAAO,+BACP,4CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,4CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,4CAAoB,sBAAS,MAAM,IAAI,IAAI,AAAO,MAAD,SAAS,OAC1D,4CAAoB,sBAAS,MAAM,IAAI,KAAK,AAAO,MAAD,SAAS;AAGjE,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,4DAGzB,SAAiB,OAAO,MAAkB,aAAZ,AAAM,KAAD,UAAS,uDAC5C,SAAiB,OAAO,MAAkB,aAAZ,AAAM,KAAD,UAAS,wCAC3D,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFACT,4BACS;IAMb;;AAIQ,iBAAO,+BACP,4CAAoB,sBAAS,MAAM,GAAG,KAAK,IAC3C,4CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,4CAAoB,sBAAS,MAAM,IAAI,IAAI,MAC3C,4CAAoB,sBAAS,MAAM,IAAI,KAAK;AAGlD,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,4DAGzB,SAAiB,OAAO,MAAkB,aAAZ,AAAM,KAAD,UAAS,uDAC5C,SAAiB,OAAO,MAAkB,aAAZ,AAAM,KAAD,UAAS,wCAC3D,IAAI;IAGhB;;mEAhFkC;QAAkB;;IAAlB;IAAkB;AAApD;;EAA6D;;;;;;;;;;;;;;;IAqF9C;;;;;;IACL;;;;;;;sDAEW,MAAW;IAAX;IAAW;;EAAM","file":"confidence_interval.ddc.js"}');
  // Exports:
  return {
    time_series_chart__confidence_interval: confidence_interval
  };
});

//# sourceMappingURL=confidence_interval.ddc.js.map
