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
  const integer_only_measure_axis = Object.create(dart.library);
  const $round = dartx.round;
  let JSArrayOfMyRow = () => (JSArrayOfMyRow = dart.constFn(_interceptors.JSArray$(integer_only_measure_axis.MyRow)))();
  let SeriesOfMyRow$DateTime = () => (SeriesOfMyRow$DateTime = dart.constFn(series.Series$(integer_only_measure_axis.MyRow, core.DateTime)))();
  let MyRowAndintToDateTime = () => (MyRowAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [integer_only_measure_axis.MyRow, core.int])))();
  let MyRowAndintToint = () => (MyRowAndintToint = dart.constFn(dart.fnType(core.int, [integer_only_measure_axis.MyRow, core.int])))();
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
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 86,
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
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/integer_only_measure_axis.dart"
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
  const seriesList$ = dart.privateName(integer_only_measure_axis, "IntegerOnlyMeasureAxis.seriesList");
  const animate$ = dart.privateName(integer_only_measure_axis, "IntegerOnlyMeasureAxis.animate");
  integer_only_measure_axis.IntegerOnlyMeasureAxis = class IntegerOnlyMeasureAxis extends framework.StatelessWidget {
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
      return new integer_only_measure_axis.IntegerOnlyMeasureAxis.new(integer_only_measure_axis.IntegerOnlyMeasureAxis._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new integer_only_measure_axis.IntegerOnlyMeasureAxis.new(integer_only_measure_axis.IntegerOnlyMeasureAxis._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfMyRow().of([new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 25), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 26), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 27), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 28), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 29), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 30), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 1), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 2), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 3), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 4), random.nextDouble()[$round]()), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 5), random.nextDouble()[$round]())]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Headcount", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.headcount, MyRowAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({tickProviderSpec: new numeric_axis_spec.BasicNumericTickProviderSpec.new({dataIsInWholeNumbers: true, desiredTickCount: 5})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfMyRow().of([new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 25), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 26), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 27), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 28), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 29), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 9, 30), 0), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 1), 1), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 2), 1), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 3), 1), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 4), 1), new integer_only_measure_axis.MyRow.new(new core.DateTime.new(2017, 10, 5), 1)]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Headcount", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.headcount, MyRowAndintToint()), data: data})]);
    }
  };
  (integer_only_measure_axis.IntegerOnlyMeasureAxis.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    integer_only_measure_axis.IntegerOnlyMeasureAxis.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = integer_only_measure_axis.IntegerOnlyMeasureAxis.prototype;
  dart.addTypeTests(integer_only_measure_axis.IntegerOnlyMeasureAxis);
  dart.setMethodSignature(integer_only_measure_axis.IntegerOnlyMeasureAxis, () => ({
    __proto__: dart.getMethods(integer_only_measure_axis.IntegerOnlyMeasureAxis.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(integer_only_measure_axis.IntegerOnlyMeasureAxis, "package:example/axes/integer_only_measure_axis.dart");
  dart.setFieldSignature(integer_only_measure_axis.IntegerOnlyMeasureAxis, () => ({
    __proto__: dart.getFields(integer_only_measure_axis.IntegerOnlyMeasureAxis.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const timeStamp$ = dart.privateName(integer_only_measure_axis, "MyRow.timeStamp");
  const headcount$ = dart.privateName(integer_only_measure_axis, "MyRow.headcount");
  integer_only_measure_axis.MyRow = class MyRow extends core.Object {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get headcount() {
      return this[headcount$];
    }
    set headcount(value) {
      super.headcount = value;
    }
  };
  (integer_only_measure_axis.MyRow.new = function(timeStamp, headcount) {
    this[timeStamp$] = timeStamp;
    this[headcount$] = headcount;
    ;
  }).prototype = integer_only_measure_axis.MyRow.prototype;
  dart.addTypeTests(integer_only_measure_axis.MyRow);
  dart.setLibraryUri(integer_only_measure_axis.MyRow, "package:example/axes/integer_only_measure_axis.dart");
  dart.setFieldSignature(integer_only_measure_axis.MyRow, () => ({
    __proto__: dart.getFields(integer_only_measure_axis.MyRow.__proto__),
    timeStamp: dart.finalFieldType(core.DateTime),
    headcount: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/integer_only_measure_axis", {
    "package:example/axes/integer_only_measure_axis.dart": integer_only_measure_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["integer_only_measure_axis.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,0DACT,gFAES;IAEb;;;AAOE,YAAW,0DAAuB;IACpC;;AAIQ,mBAAa;AAEb,iBAAO,qBACP,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,AAAa,MAAd,0BACvC,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,AAAa,MAAd,0BACxC,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,AAAa,MAAd,0BACxC,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,AAAa,MAAd,0BACxC,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,AAAa,MAAd,0BACxC,wCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,AAAa,MAAd;AAG9C,YAAO,uCACD,kCACE,uBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,uCAC1B,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFACT,4BACS,kCAEe,6DACE,8EAGI,wBAGJ;IAE9B;;AAIQ,iBAAO,qBACP,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,wCAAU,sBAAS,MAAM,IAAI,IAAK,IAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,IAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,IAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK,IAClC,wCAAU,sBAAS,MAAM,IAAI,IAAK;AAGxC,YAAO,uCACD,kCACE,uBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,uCAC1B,IAAI;IAGhB;;mEAzF4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IA8FxC;;;;;;IACL;;;;;;;kDACC,WAAgB;IAAhB;IAAgB;;EAAU","file":"integer_only_measure_axis.ddc.js"}');
  // Exports:
  return {
    axes__integer_only_measure_axis: integer_only_measure_axis
  };
});

//# sourceMappingURL=integer_only_measure_axis.ddc.js.map
