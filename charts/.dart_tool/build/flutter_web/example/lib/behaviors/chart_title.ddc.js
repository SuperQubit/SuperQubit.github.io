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
  const chart_title = packages__charts_flutter__flutter.src__behaviors__chart_title__chart_title;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const chart_title$ = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(chart_title$.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(chart_title$.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [chart_title$.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(chart_title$.LinearSales, core.num)))();
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
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 79,
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
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/chart_title.dart"
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
  const seriesList$ = dart.privateName(chart_title$, "ChartTitleLine.seriesList");
  const animate$ = dart.privateName(chart_title$, "ChartTitleLine.animate");
  chart_title$.ChartTitleLine = class ChartTitleLine extends framework.StatelessWidget {
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
      return new chart_title$.ChartTitleLine.new(chart_title$.ChartTitleLine._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new chart_title$.ChartTitleLine.new(chart_title$.ChartTitleLine._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new chart_title$.LinearSales.new(0, random.nextInt(100)), new chart_title$.LinearSales.new(1, random.nextInt(100)), new chart_title$.LinearSales.new(2, random.nextInt(100)), new chart_title$.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new chart_title.ChartTitle.new("Top title text", {subTitle: "Top sub-title text", behaviorPosition: chart_behavior.BehaviorPosition.top, titleOutsideJustification: chart_behavior.OutsideJustification.start, innerPadding: 18}), new chart_title.ChartTitle.new("Bottom title text", {behaviorPosition: chart_behavior.BehaviorPosition.bottom, titleOutsideJustification: chart_behavior.OutsideJustification.middleDrawArea}), new chart_title.ChartTitle.new("Start title", {behaviorPosition: chart_behavior.BehaviorPosition.start, titleOutsideJustification: chart_behavior.OutsideJustification.middleDrawArea}), new chart_title.ChartTitle.new("End title", {behaviorPosition: chart_behavior.BehaviorPosition.end, titleOutsideJustification: chart_behavior.OutsideJustification.middleDrawArea})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new chart_title$.LinearSales.new(0, 5), new chart_title$.LinearSales.new(1, 25), new chart_title$.LinearSales.new(2, 100), new chart_title$.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (chart_title$.ChartTitleLine.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    chart_title$.ChartTitleLine.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chart_title$.ChartTitleLine.prototype;
  dart.addTypeTests(chart_title$.ChartTitleLine);
  dart.setMethodSignature(chart_title$.ChartTitleLine, () => ({
    __proto__: dart.getMethods(chart_title$.ChartTitleLine.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(chart_title$.ChartTitleLine, "package:example/behaviors/chart_title.dart");
  dart.setFieldSignature(chart_title$.ChartTitleLine, () => ({
    __proto__: dart.getFields(chart_title$.ChartTitleLine.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(chart_title$, "LinearSales.year");
  const sales$ = dart.privateName(chart_title$, "LinearSales.sales");
  chart_title$.LinearSales = class LinearSales extends core.Object {
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
  (chart_title$.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = chart_title$.LinearSales.prototype;
  dart.addTypeTests(chart_title$.LinearSales);
  dart.setLibraryUri(chart_title$.LinearSales, "package:example/behaviors/chart_title.dart");
  dart.setFieldSignature(chart_title$.LinearSales, () => ({
    __proto__: dart.getFields(chart_title$.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/chart_title", {
    "package:example/behaviors/chart_title.dart": chart_title$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chart_title.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,qCACT,2DAES;IAEb;;;AAOE,YAAW,qCAAe;IAC5B;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,8BACT,2BACS,yBAKE,4CACL,+BAAkB,6BACR,wCACgC,gEACa,yDAKzC,MACd,+BAAkB,wCACwB,mEAEV,sDAChC,+BAAkB,kCACwB,kEAEV,sDAChC,+BAAkB,gCACwB,gEAEV;IAG1C;;AAIQ,iBAAO,2BACP,iCAAY,GAAG,IACf,iCAAY,GAAG,KACf,iCAAY,GAAG,MACf,iCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;8CA7FoB;QAAkB;;IAAlB;IAAkB;AAAtC;;EAA+C;;;;;;;;;;;;;;;IAkGrC;;;;;;IACA;;;;;;;2CAEO,MAAW;IAAX;IAAW;;EAAM","file":"chart_title.ddc.js"}');
  // Exports:
  return {
    behaviors__chart_title: chart_title$
  };
});

//# sourceMappingURL=chart_title.ddc.js.map
