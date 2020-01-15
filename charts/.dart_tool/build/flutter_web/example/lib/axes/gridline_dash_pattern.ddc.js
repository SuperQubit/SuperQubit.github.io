define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const gridline_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__gridline_draw_strategy;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gridline_dash_pattern = Object.create(dart.library);
  let JSArrayOfMyRow = () => (JSArrayOfMyRow = dart.constFn(_interceptors.JSArray$(gridline_dash_pattern.MyRow)))();
  let SeriesOfMyRow$DateTime = () => (SeriesOfMyRow$DateTime = dart.constFn(series.Series$(gridline_dash_pattern.MyRow, core.DateTime)))();
  let MyRowAndintToDateTime = () => (MyRowAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [gridline_dash_pattern.MyRow, core.int])))();
  let MyRowAndintToint = () => (MyRowAndintToint = dart.constFn(dart.fnType(core.int, [gridline_dash_pattern.MyRow, core.int])))();
  let JSArrayOfSeriesOfMyRow$DateTime = () => (JSArrayOfSeriesOfMyRow$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfMyRow$DateTime())))();
  let SeriesOfdynamic$DateTime = () => (SeriesOfdynamic$DateTime = dart.constFn(series.Series$(dart.dynamic, core.DateTime)))();
  let ListOfSeriesOfdynamic$DateTime = () => (ListOfSeriesOfdynamic$DateTime = dart.constFn(core.List$(SeriesOfdynamic$DateTime())))();
  let GridlineRendererSpecOfnum = () => (GridlineRendererSpecOfnum = dart.constFn(gridline_draw_strategy.GridlineRendererSpec$(core.num)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
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
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 9,
        [_Location_line]: 81,
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
        [_Location_file]: "org-dartlang-app:///packages/example/axes/gridline_dash_pattern.dart"
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
  const seriesList$ = dart.privateName(gridline_dash_pattern, "GridlineDashPattern.seriesList");
  const animate$ = dart.privateName(gridline_dash_pattern, "GridlineDashPattern.animate");
  gridline_dash_pattern.GridlineDashPattern = class GridlineDashPattern extends framework.StatelessWidget {
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
      return new gridline_dash_pattern.GridlineDashPattern.new(gridline_dash_pattern.GridlineDashPattern._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new gridline_dash_pattern.GridlineDashPattern.new(gridline_dash_pattern.GridlineDashPattern._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfMyRow().of([new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 25), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 26), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 27), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 28), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 29), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 30), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 1), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 2), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 3), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 4), random.nextInt(100)), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 5), random.nextInt(100))]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Cost", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.cost, MyRowAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(ListOfSeriesOfdynamic$DateTime()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({renderSpec: new (GridlineRendererSpecOfnum()).new({lineStyle: new axis_spec.LineStyleSpec.new({dashPattern: JSArrayOfint().of([4, 4])})})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfMyRow().of([new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 25), 6), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 26), 8), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 27), 6), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 28), 9), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 29), 11), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 9, 30), 15), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 1), 25), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 2), 33), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 3), 27), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 4), 31), new gridline_dash_pattern.MyRow.new(new core.DateTime.new(2017, 10, 5), 23)]);
      return JSArrayOfSeriesOfMyRow$DateTime().of([SeriesOfMyRow$DateTime().new({id: "Cost", domainFn: dart.fn((row, _) => row.timeStamp, MyRowAndintToDateTime()), measureFn: dart.fn((row, _) => row.cost, MyRowAndintToint()), data: data})]);
    }
  };
  (gridline_dash_pattern.GridlineDashPattern.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    gridline_dash_pattern.GridlineDashPattern.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gridline_dash_pattern.GridlineDashPattern.prototype;
  dart.addTypeTests(gridline_dash_pattern.GridlineDashPattern);
  dart.setMethodSignature(gridline_dash_pattern.GridlineDashPattern, () => ({
    __proto__: dart.getMethods(gridline_dash_pattern.GridlineDashPattern.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gridline_dash_pattern.GridlineDashPattern, "package:example/axes/gridline_dash_pattern.dart");
  dart.setFieldSignature(gridline_dash_pattern.GridlineDashPattern, () => ({
    __proto__: dart.getFields(gridline_dash_pattern.GridlineDashPattern.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const timeStamp$ = dart.privateName(gridline_dash_pattern, "MyRow.timeStamp");
  const cost$ = dart.privateName(gridline_dash_pattern, "MyRow.cost");
  gridline_dash_pattern.MyRow = class MyRow extends core.Object {
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
  (gridline_dash_pattern.MyRow.new = function(timeStamp, cost) {
    this[timeStamp$] = timeStamp;
    this[cost$] = cost;
    ;
  }).prototype = gridline_dash_pattern.MyRow.prototype;
  dart.addTypeTests(gridline_dash_pattern.MyRow);
  dart.setLibraryUri(gridline_dash_pattern.MyRow, "package:example/axes/gridline_dash_pattern.dart");
  dart.setFieldSignature(gridline_dash_pattern.MyRow, () => ({
    __proto__: dart.getFields(gridline_dash_pattern.MyRow.__proto__),
    timeStamp: dart.finalFieldType(core.DateTime),
    cost: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/gridline_dash_pattern", {
    "package:example/axes/gridline_dash_pattern.dart": gridline_dash_pattern
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gridline_dash_pattern.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,mDACT,yEAES;IAEb;;;AAOE,YAAW,mDAAoB;IACjC;;AAIQ,mBAAa;AAEb,iBAAO,qBACP,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAChD,oCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,oCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,oCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,oCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS,OACjD,oCAAU,sBAAS,MAAM,IAAI,IAAK,AAAO,MAAD,SAAS;AAGvD,YAAO,uCACD,kCACE,kBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,kCAC1B,IAAI;IAGhB;UAI0B;AACxB,YAAW,mFAAuB,4BACrB,kCAGe,uDACD,kDACG,8CACX,mBAAC,GAAG;IAEzB;;AAIQ,iBAAO,qBACP,oCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,oCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,oCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,oCAAU,sBAAS,MAAM,GAAG,KAAK,IACjC,oCAAU,sBAAS,MAAM,GAAG,KAAK,KACjC,oCAAU,sBAAS,MAAM,GAAG,KAAK,KACjC,oCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,oCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,oCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,oCAAU,sBAAS,MAAM,IAAI,IAAK,KAClC,oCAAU,sBAAS,MAAM,IAAI,IAAK;AAGxC,YAAO,uCACD,kCACE,kBACM,SAAO,KAAK,MAAM,AAAI,GAAD,iDACpB,SAAO,KAAK,MAAM,AAAI,GAAD,kCAC1B,IAAI;IAGhB;;4DArFyB;QAAkB;;IAAlB;IAAkB;AAA3C;;EAAoD;;;;;;;;;;;;;;;IA0FrC;;;;;;IACL;;;;;;;8CACC,WAAgB;IAAhB;IAAgB;;EAAK","file":"gridline_dash_pattern.ddc.js"}');
  // Exports:
  return {
    axes__gridline_dash_pattern: gridline_dash_pattern
  };
});

//# sourceMappingURL=gridline_dash_pattern.ddc.js.map
