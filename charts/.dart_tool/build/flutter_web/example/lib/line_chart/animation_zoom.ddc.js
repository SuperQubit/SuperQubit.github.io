define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const pan_and_zoom_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__pan_and_zoom_behavior;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const animation_zoom = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(animation_zoom.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(animation_zoom.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [animation_zoom.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(animation_zoom.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 63,
        [_Location_line]: 70,
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
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/animation_zoom.dart"
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
  const seriesList$ = dart.privateName(animation_zoom, "LineAnimationZoomChart.seriesList");
  const animate$ = dart.privateName(animation_zoom, "LineAnimationZoomChart.animate");
  animation_zoom.LineAnimationZoomChart = class LineAnimationZoomChart extends framework.StatelessWidget {
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
      return new animation_zoom.LineAnimationZoomChart.new(animation_zoom.LineAnimationZoomChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new animation_zoom.LineAnimationZoomChart.new(animation_zoom.LineAnimationZoomChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([]);
      for (let i = 0; i < 100; i = i + 1) {
        data[$add](new animation_zoom.LinearSales.new(i, random.nextInt(100)));
      }
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new pan_and_zoom_behavior.PanAndZoomBehavior.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new animation_zoom.LinearSales.new(0, 5), new animation_zoom.LinearSales.new(1, 25), new animation_zoom.LinearSales.new(2, 100), new animation_zoom.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (animation_zoom.LineAnimationZoomChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    animation_zoom.LineAnimationZoomChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animation_zoom.LineAnimationZoomChart.prototype;
  dart.addTypeTests(animation_zoom.LineAnimationZoomChart);
  dart.setMethodSignature(animation_zoom.LineAnimationZoomChart, () => ({
    __proto__: dart.getMethods(animation_zoom.LineAnimationZoomChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(animation_zoom.LineAnimationZoomChart, "package:example/line_chart/animation_zoom.dart");
  dart.setFieldSignature(animation_zoom.LineAnimationZoomChart, () => ({
    __proto__: dart.getFields(animation_zoom.LineAnimationZoomChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(animation_zoom, "LinearSales.year");
  const sales$ = dart.privateName(animation_zoom, "LinearSales.sales");
  animation_zoom.LinearSales = class LinearSales extends core.Object {
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
  (animation_zoom.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = animation_zoom.LinearSales.prototype;
  dart.addTypeTests(animation_zoom.LinearSales);
  dart.setLibraryUri(animation_zoom.LinearSales, "package:example/line_chart/animation_zoom.dart");
  dart.setFieldSignature(animation_zoom.LinearSales, () => ({
    __proto__: dart.getFields(animation_zoom.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/animation_zoom", {
    "package:example/line_chart/animation_zoom.dart": animation_zoom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation_zoom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,+CACT,qEAES;IAEb;;;AAOE,YAAW,+CAAuB;IACpC;;AAIQ,mBAAa;AAEb,iBAAoB;AAE1B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACyB,QAAjD,AAAK,IAAD,OAAS,mCAAY,CAAC,EAAE,AAAO,MAAD,SAAS;;AAG7C,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,8BAAiB,2BAAqB,yBAAoB,4CAC/D;IAER;;AAIQ,iBAAO,2BACP,mCAAY,GAAG,IACf,mCAAY,GAAG,KACf,mCAAY,GAAG,MACf,mCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;wDAhE4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IAqE7C;;;;;;IACA;;;;;;;6CAEO,MAAW;IAAX;IAAW;;EAAM","file":"animation_zoom.ddc.js"}');
  // Exports:
  return {
    line_chart__animation_zoom: animation_zoom
  };
});

//# sourceMappingURL=animation_zoom.ddc.js.map
