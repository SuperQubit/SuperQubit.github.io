define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const axis = packages__charts_common__common.src__chart__cartesian__axis__axis;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const tick_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__tick_spec;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const line_disjoint_axis = Object.create(dart.library);
  let JSArrayOfLinearClicks = () => (JSArrayOfLinearClicks = dart.constFn(_interceptors.JSArray$(line_disjoint_axis.LinearClicks)))();
  let SeriesOfLinearClicks$int = () => (SeriesOfLinearClicks$int = dart.constFn(series.Series$(line_disjoint_axis.LinearClicks, core.int)))();
  let LinearClicksAndintToint = () => (LinearClicksAndintToint = dart.constFn(dart.fnType(core.int, [line_disjoint_axis.LinearClicks, core.int])))();
  let LinearClicksAndintToColor = () => (LinearClicksAndintToColor = dart.constFn(dart.fnType(color.Color, [line_disjoint_axis.LinearClicks, core.int])))();
  let SeriesOfLinearClicks$num = () => (SeriesOfLinearClicks$num = dart.constFn(series.Series$(line_disjoint_axis.LinearClicks, core.num)))();
  let JSArrayOfSeriesOfLinearClicks$num = () => (JSArrayOfSeriesOfLinearClicks$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearClicks$num())))();
  let TickSpecOfnum = () => (TickSpecOfnum = dart.constFn(tick_spec.TickSpec$(core.num)))();
  let JSArrayOfTickSpecOfnum = () => (JSArrayOfTickSpecOfnum = dart.constFn(_interceptors.JSArray$(TickSpecOfnum())))();
  let LinkedHashMapOfString$NumericAxisSpec = () => (LinkedHashMapOfString$NumericAxisSpec = dart.constFn(collection.LinkedHashMap$(core.String, numeric_axis_spec.NumericAxisSpec)))();
  let LinearClicksAndintTodouble = () => (LinearClicksAndintTodouble = dart.constFn(dart.fnType(core.double, [line_disjoint_axis.LinearClicks, core.int])))();
  let JSArrayOfSeriesOfLinearClicks$int = () => (JSArrayOfSeriesOfLinearClicks$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearClicks$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 9,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disjointMeasureAxes",
        [_Location_column]: 9,
        [_Location_line]: 167,
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
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/line_disjoint_axis.dart"
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
  const seriesList$ = dart.privateName(line_disjoint_axis, "DisjointMeasureAxisLineChart.seriesList");
  const animate$ = dart.privateName(line_disjoint_axis, "DisjointMeasureAxisLineChart.animate");
  line_disjoint_axis.DisjointMeasureAxisLineChart = class DisjointMeasureAxisLineChart extends framework.StatelessWidget {
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
      return new line_disjoint_axis.DisjointMeasureAxisLineChart.new(line_disjoint_axis.DisjointMeasureAxisLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new line_disjoint_axis.DisjointMeasureAxisLineChart.new(line_disjoint_axis.DisjointMeasureAxisLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0, t0$, t0$0, t0$1;
      let random = math.Random.new();
      let myFakeDesktopData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: random.nextInt(100)}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: random.nextInt(100)}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: random.nextInt(100)}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: random.nextInt(100)})]);
      let myFakeTabletData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: dart.notNull(random.nextInt(100)) * 100}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: dart.notNull(random.nextInt(100)) * 100}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: dart.notNull(random.nextInt(100)) * 100}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: dart.notNull(random.nextInt(100)) * 100})]);
      let myFakeMobileData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: dart.notNull(random.nextInt(100)) * 1000}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: dart.notNull(random.nextInt(100)) * 1000}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: dart.notNull(random.nextInt(100)) * 1000}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: dart.notNull(random.nextInt(100)) * 1000})]);
      let myFakeClickRateData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickRate: 0.25}), new line_disjoint_axis.LinearClicks.new(1, {clickRate: 0.65}), new line_disjoint_axis.LinearClicks.new(2, {clickRate: 0.5}), new line_disjoint_axis.LinearClicks.new(3, {clickRate: 0.3})]);
      return JSArrayOfSeriesOfLinearClicks$num().of([SeriesOfLinearClicks$int().new({id: "Fake Series", domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: JSArrayOfLinearClicks().of([])}), (t0 = SeriesOfLinearClicks$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeDesktopData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "axis 1"), t0), (t0$ = SeriesOfLinearClicks$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeTabletData}), t0$.setAttribute(core.String, axis.measureAxisIdKey, "axis 2"), t0$), (t0$0 = SeriesOfLinearClicks$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeMobileData}), t0$0.setAttribute(core.String, axis.measureAxisIdKey, "axis 3"), t0$0), (t0$1 = SeriesOfLinearClicks$int().new({id: "Click Rate", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.purple.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeClickRateData}), t0$1.setAttribute(core.String, axis.measureAxisIdKey, "axis 4"), t0$1)]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({tickProviderSpec: new numeric_axis_spec.StaticNumericTickProviderSpec.new(JSArrayOfTickSpecOfnum().of([new (TickSpecOfnum()).new(0, {label: ""}), new (TickSpecOfnum()).new(1, {label: ""}), new (TickSpecOfnum()).new(2, {label: ""}), new (TickSpecOfnum()).new(3, {label: ""}), new (TickSpecOfnum()).new(4, {label: ""})]))}), disjointMeasureAxes: LinkedHashMapOfString$NumericAxisSpec().from(new _js_helper.LinkedMap.from(["axis 1", new numeric_axis_spec.NumericAxisSpec.new(), "axis 2", new numeric_axis_spec.NumericAxisSpec.new(), "axis 3", new numeric_axis_spec.NumericAxisSpec.new(), "axis 4", new numeric_axis_spec.NumericAxisSpec.new()])), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0, t0$, t0$0, t0$1;
      let myFakeDesktopData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: 25}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: 125}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: 920}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: 375})]);
      let myFakeTabletData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: 375}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: 1850}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: 9700}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: 5000})]);
      let myFakeMobileData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickCount: 5000}), new line_disjoint_axis.LinearClicks.new(1, {clickCount: 25000}), new line_disjoint_axis.LinearClicks.new(2, {clickCount: 100000}), new line_disjoint_axis.LinearClicks.new(3, {clickCount: 75000})]);
      let myFakeClickRateData = JSArrayOfLinearClicks().of([new line_disjoint_axis.LinearClicks.new(0, {clickRate: 0.25}), new line_disjoint_axis.LinearClicks.new(1, {clickRate: 0.65}), new line_disjoint_axis.LinearClicks.new(2, {clickRate: 0.5}), new line_disjoint_axis.LinearClicks.new(3, {clickRate: 0.3})]);
      return JSArrayOfSeriesOfLinearClicks$int().of([SeriesOfLinearClicks$int().new({id: "Fake Series", domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: JSArrayOfLinearClicks().of([])}), (t0 = SeriesOfLinearClicks$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeDesktopData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "axis 1"), t0), (t0$ = SeriesOfLinearClicks$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeTabletData}), t0$.setAttribute(core.String, axis.measureAxisIdKey, "axis 2"), t0$), (t0$0 = SeriesOfLinearClicks$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickCount, LinearClicksAndintToint()), data: myFakeMobileData}), t0$0.setAttribute(core.String, axis.measureAxisIdKey, "axis 3"), t0$0), (t0$1 = SeriesOfLinearClicks$int().new({id: "Click Rate", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.purple.shadeDefault, LinearClicksAndintToColor()), domainFn: dart.fn((clickCount, _) => clickCount.year, LinearClicksAndintToint()), measureFn: dart.fn((clickCount, _) => clickCount.clickRate, LinearClicksAndintTodouble()), data: myFakeClickRateData}), t0$1.setAttribute(core.String, axis.measureAxisIdKey, "axis 4"), t0$1)]);
    }
  };
  (line_disjoint_axis.DisjointMeasureAxisLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    line_disjoint_axis.DisjointMeasureAxisLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = line_disjoint_axis.DisjointMeasureAxisLineChart.prototype;
  dart.addTypeTests(line_disjoint_axis.DisjointMeasureAxisLineChart);
  dart.setMethodSignature(line_disjoint_axis.DisjointMeasureAxisLineChart, () => ({
    __proto__: dart.getMethods(line_disjoint_axis.DisjointMeasureAxisLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(line_disjoint_axis.DisjointMeasureAxisLineChart, "package:example/axes/line_disjoint_axis.dart");
  dart.setFieldSignature(line_disjoint_axis.DisjointMeasureAxisLineChart, () => ({
    __proto__: dart.getFields(line_disjoint_axis.DisjointMeasureAxisLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(line_disjoint_axis, "LinearClicks.year");
  const clickCount$ = dart.privateName(line_disjoint_axis, "LinearClicks.clickCount");
  const clickRate$ = dart.privateName(line_disjoint_axis, "LinearClicks.clickRate");
  line_disjoint_axis.LinearClicks = class LinearClicks extends core.Object {
    get year() {
      return this[year$];
    }
    set year(value) {
      super.year = value;
    }
    get clickCount() {
      return this[clickCount$];
    }
    set clickCount(value) {
      super.clickCount = value;
    }
    get clickRate() {
      return this[clickRate$];
    }
    set clickRate(value) {
      super.clickRate = value;
    }
  };
  (line_disjoint_axis.LinearClicks.new = function(year, opts) {
    let clickCount = opts && 'clickCount' in opts ? opts.clickCount : null;
    let clickRate = opts && 'clickRate' in opts ? opts.clickRate : null;
    this[year$] = year;
    this[clickCount$] = clickCount;
    this[clickRate$] = clickRate;
    ;
  }).prototype = line_disjoint_axis.LinearClicks.prototype;
  dart.addTypeTests(line_disjoint_axis.LinearClicks);
  dart.setLibraryUri(line_disjoint_axis.LinearClicks, "package:example/axes/line_disjoint_axis.dart");
  dart.setFieldSignature(line_disjoint_axis.LinearClicks, () => ({
    __proto__: dart.getFields(line_disjoint_axis.LinearClicks.__proto__),
    year: dart.finalFieldType(core.int),
    clickCount: dart.finalFieldType(core.int),
    clickRate: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/axes/line_disjoint_axis", {
    "package:example/axes/line_disjoint_axis.dart": line_disjoint_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["line_disjoint_axis.dart"],"names":[],"mappings":"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","file":"line_disjoint_axis.ddc.js"}');
  // Exports:
  return {
    axes__line_disjoint_axis: line_disjoint_axis
  };
});

//# sourceMappingURL=line_disjoint_axis.ddc.js.map
