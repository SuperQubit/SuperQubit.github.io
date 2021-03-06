define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const datum_legend = packages__charts_flutter__flutter.src__behaviors__legend__datum_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const simple_datum_legend = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(simple_datum_legend.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(simple_datum_legend.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple_datum_legend.LinearSales, core.int])))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 74,
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
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/simple_datum_legend.dart"
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
  const seriesList$ = dart.privateName(simple_datum_legend, "SimpleDatumLegend.seriesList");
  const animate$ = dart.privateName(simple_datum_legend, "SimpleDatumLegend.animate");
  simple_datum_legend.SimpleDatumLegend = class SimpleDatumLegend extends framework.StatelessWidget {
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
      return new simple_datum_legend.SimpleDatumLegend.new(simple_datum_legend.SimpleDatumLegend._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple_datum_legend.SimpleDatumLegend.new(simple_datum_legend.SimpleDatumLegend._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new simple_datum_legend.LinearSales.new(0, random.nextInt(100)), new simple_datum_legend.LinearSales.new(1, random.nextInt(100)), new simple_datum_legend.LinearSales.new(2, random.nextInt(100)), new simple_datum_legend.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([datum_legend.DatumLegend.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new simple_datum_legend.LinearSales.new(0, 100), new simple_datum_legend.LinearSales.new(1, 75), new simple_datum_legend.LinearSales.new(2, 25), new simple_datum_legend.LinearSales.new(3, 5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (simple_datum_legend.SimpleDatumLegend.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple_datum_legend.SimpleDatumLegend.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple_datum_legend.SimpleDatumLegend.prototype;
  dart.addTypeTests(simple_datum_legend.SimpleDatumLegend);
  dart.setMethodSignature(simple_datum_legend.SimpleDatumLegend, () => ({
    __proto__: dart.getMethods(simple_datum_legend.SimpleDatumLegend.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple_datum_legend.SimpleDatumLegend, "package:example/legends/simple_datum_legend.dart");
  dart.setFieldSignature(simple_datum_legend.SimpleDatumLegend, () => ({
    __proto__: dart.getFields(simple_datum_legend.SimpleDatumLegend.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple_datum_legend, "LinearSales.year");
  const sales$ = dart.privateName(simple_datum_legend, "LinearSales.sales");
  simple_datum_legend.LinearSales = class LinearSales extends core.Object {
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
  (simple_datum_legend.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = simple_datum_legend.LinearSales.prototype;
  dart.addTypeTests(simple_datum_legend.LinearSales);
  dart.setLibraryUri(simple_datum_legend.LinearSales, "package:example/legends/simple_datum_legend.dart");
  dart.setFieldSignature(simple_datum_legend.LinearSales, () => ({
    __proto__: dart.getFields(simple_datum_legend.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/simple_datum_legend", {
    "package:example/legends/simple_datum_legend.dart": simple_datum_legend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple_datum_legend.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,+CACT,qEAES;IAEb;;;AAOE,YAAW,+CAAkB;IAC/B;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,wCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,wCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,wCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,wCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,4BACT,2BACS,yBAGE,4CAAK;IAEpB;;AAIQ,iBAAO,2BACP,wCAAY,GAAG,MACf,wCAAY,GAAG,KACf,wCAAY,GAAG,KACf,wCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;wDApEuB;QAAkB;;IAAlB;IAAkB;AAAzC;;EAAkD;;;;;;;;;;;;;;;IAyExC;;;;;;IACA;;;;;;;kDAEO,MAAW;IAAX;IAAW;;EAAM","file":"simple_datum_legend.ddc.js"}');
  // Exports:
  return {
    legends__simple_datum_legend: simple_datum_legend
  };
});

//# sourceMappingURL=simple_datum_legend.ddc.js.map
