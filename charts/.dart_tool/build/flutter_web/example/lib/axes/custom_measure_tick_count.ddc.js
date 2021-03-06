define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const custom_measure_tick_count = Object.create(dart.library);
  let JSArrayOfMyRow = () => (JSArrayOfMyRow = dart.constFn(_interceptors.JSArray$(custom_measure_tick_count.MyRow)))();
  let SeriesOfMyRow$DateTime = () => (SeriesOfMyRow$DateTime = dart.constFn(series.Series$(custom_measure_tick_count.MyRow, core.DateTime)))();
  let MyRowAndintToDateTime = () => (MyRowAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [custom_measure_tick_count.MyRow, core.int])))();
  let MyRowAndintToint = () => (MyRowAndintToint = dart.constFn(dart.fnType(core.int, [custom_measure_tick_count.MyRow, core.int])))();
  let JSArrayOfSeriesOfMyRow$DateTime = () => (JSArrayOfSeriesOfMyRow$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfMyRow$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 39,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 9,
        [_Location_line]: 85,
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
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/custom_measure_tick_count.dart"
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
  const seriesList$ = dart.privateName(custom_measure_tick_count, "CustomMeasureTickCount.seriesList");
  const animate$ = dart.privateName(custom_measure_tick_count, "CustomMeasureTickCount.animate");
  custom_measure_tick_count.CustomMeasureTickCount = class CustomMeasureTickCount extends framework.StatelessWidget {
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
      return new custom_measure_tick_count.CustomMeasureTickCount.new(custom_measure_tick_count.CustomMeasureTickCount._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new custom_measure_tick_count.CustomMeasureTickCount.new(custom_measure_tick_count.CustomMeasureTickCount._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfMyRow().of([new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 25), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 27), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 28), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 29), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 30), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 1), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 2), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 4), random.nextInt(100)), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 5), random.nextInt(100))]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Cost", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.cost, MyRowAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({tickProviderSpec: new numeric_axis_spec.BasicNumericTickProviderSpec.new({desiredTickCount: 2})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfMyRow().of([new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 25), 6), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 26), 8), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 27), 6), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 28), 9), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 29), 11), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 9, 30), 15), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 1), 25), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 2), 33), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 3), 27), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 4), 31), new custom_measure_tick_count.MyRow.new(new core.DateTime.new(2017, 10, 5), 23)]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Cost", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.cost, MyRowAndintToint()), data: data})]);
    }
  };
  (custom_measure_tick_count.CustomMeasureTickCount.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    custom_measure_tick_count.CustomMeasureTickCount.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_measure_tick_count.CustomMeasureTickCount.prototype;
  dart.addTypeTests(custom_measure_tick_count.CustomMeasureTickCount);
  dart.setMethodSignature(custom_measure_tick_count.CustomMeasureTickCount, () => ({
    __proto__: dart.getMethods(custom_measure_tick_count.CustomMeasureTickCount.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_measure_tick_count.CustomMeasureTickCount, "package:example/axes/custom_measure_tick_count.dart");
  dart.setFieldSignature(custom_measure_tick_count.CustomMeasureTickCount, () => ({
    __proto__: dart.getFields(custom_measure_tick_count.CustomMeasureTickCount.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const timeStamp$ = dart.privateName(custom_measure_tick_count, "MyRow.timeStamp");
  const cost$ = dart.privateName(custom_measure_tick_count, "MyRow.cost");
  custom_measure_tick_count.MyRow = class MyRow extends core.Object {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get cost() {
      return this[cost$];
    }
    set cost(value) {
      super.cost = value;
    }
  };
  (custom_measure_tick_count.MyRow.new = function(timeStamp, cost) {
    this[timeStamp$] = timeStamp;
    this[cost$] = cost;
    ;
  }).prototype = custom_measure_tick_count.MyRow.prototype;
  dart.addTypeTests(custom_measure_tick_count.MyRow);
  dart.setLibraryUri(custom_measure_tick_count.MyRow, "package:example/axes/custom_measure_tick_count.dart");
  dart.setFieldSignature(custom_measure_tick_count.MyRow, () => ({
    __proto__: dart.getFields(custom_measure_tick_count.MyRow.__proto__),
    timeStamp: dart.finalFieldType(core.DateTime),
    cost: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/custom_measure_tick_count", {
    "package:example/axes/custom_measure_tick_count.dart": custom_measure_tick_count
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_measure_tick_count.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,0DACT,gFAES;IAEb;;;AAOE,YAAW,0DAAuB;IACpC;;AAIQ,mBAAa;AAEb,iBAAO,qBACP,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS;AAGvD,YAAO,uCACD,kCACE,kBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,kCAC1B,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFAAuB,4BACrB,kCAGe,6DAEZ,0EAAsD;IACxE;;AAIQ,iBAAO,qBACP,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,KACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,KACjC,wCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK;AAGxC,YAAO,uCACD,kCACE,kBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,kCAC1B,IAAI;IAGhB;;mEAnF4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IAwFxC;;;;;;IACL;;;;;;;kDACC,WAAgB;IAAhB;IAAgB;;EAAK","file":"custom_measure_tick_count.ddc.js"}');
  // Exports:
  return {
    axes__custom_measure_tick_count: custom_measure_tick_count
  };
});

//# sourceMappingURL=custom_measure_tick_count.ddc.js.map
