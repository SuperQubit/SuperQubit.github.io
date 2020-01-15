define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const series_legend = packages__charts_flutter__flutter.src__behaviors__legend__series_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const default_hidden_series_legend = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(default_hidden_series_legend.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(default_hidden_series_legend.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [default_hidden_series_legend.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [default_hidden_series_legend.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
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
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 114,
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
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/default_hidden_series_legend.dart"
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
  const seriesList$ = dart.privateName(default_hidden_series_legend, "DefaultHiddenSeriesLegend.seriesList");
  const animate$ = dart.privateName(default_hidden_series_legend, "DefaultHiddenSeriesLegend.animate");
  default_hidden_series_legend.DefaultHiddenSeriesLegend = class DefaultHiddenSeriesLegend extends framework.StatelessWidget {
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
      return new default_hidden_series_legend.DefaultHiddenSeriesLegend.new(default_hidden_series_legend.DefaultHiddenSeriesLegend._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new default_hidden_series_legend.DefaultHiddenSeriesLegend.new(default_hidden_series_legend.DefaultHiddenSeriesLegend._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new default_hidden_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([series_legend.SeriesLegend.new({defaultHiddenSeries: JSArrayOfString().of(["Other"])})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", 5), new default_hidden_series_legend.OrdinalSales.new("2015", 25), new default_hidden_series_legend.OrdinalSales.new("2016", 100), new default_hidden_series_legend.OrdinalSales.new("2017", 75)]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", 25), new default_hidden_series_legend.OrdinalSales.new("2015", 50), new default_hidden_series_legend.OrdinalSales.new("2016", 10), new default_hidden_series_legend.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", 10), new default_hidden_series_legend.OrdinalSales.new("2015", 15), new default_hidden_series_legend.OrdinalSales.new("2016", 50), new default_hidden_series_legend.OrdinalSales.new("2017", 45)]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new default_hidden_series_legend.OrdinalSales.new("2014", 20), new default_hidden_series_legend.OrdinalSales.new("2015", 35), new default_hidden_series_legend.OrdinalSales.new("2016", 15), new default_hidden_series_legend.OrdinalSales.new("2017", 10)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
  };
  (default_hidden_series_legend.DefaultHiddenSeriesLegend.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    default_hidden_series_legend.DefaultHiddenSeriesLegend.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = default_hidden_series_legend.DefaultHiddenSeriesLegend.prototype;
  dart.addTypeTests(default_hidden_series_legend.DefaultHiddenSeriesLegend);
  dart.setMethodSignature(default_hidden_series_legend.DefaultHiddenSeriesLegend, () => ({
    __proto__: dart.getMethods(default_hidden_series_legend.DefaultHiddenSeriesLegend.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(default_hidden_series_legend.DefaultHiddenSeriesLegend, "package:example/legends/default_hidden_series_legend.dart");
  dart.setFieldSignature(default_hidden_series_legend.DefaultHiddenSeriesLegend, () => ({
    __proto__: dart.getFields(default_hidden_series_legend.DefaultHiddenSeriesLegend.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(default_hidden_series_legend, "OrdinalSales.year");
  const sales$ = dart.privateName(default_hidden_series_legend, "OrdinalSales.sales");
  default_hidden_series_legend.OrdinalSales = class OrdinalSales extends core.Object {
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
  (default_hidden_series_legend.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = default_hidden_series_legend.OrdinalSales.prototype;
  dart.addTypeTests(default_hidden_series_legend.OrdinalSales);
  dart.setLibraryUri(default_hidden_series_legend.OrdinalSales, "package:example/legends/default_hidden_series_legend.dart");
  dart.setFieldSignature(default_hidden_series_legend.OrdinalSales, () => ({
    __proto__: dart.getFields(default_hidden_series_legend.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/default_hidden_series_legend", {
    "package:example/legends/default_hidden_series_legend.dart": default_hidden_series_legend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["default_hidden_series_legend.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,gEACT,sFAES;IAEb;;;AAOE,YAAW,gEAA0B;IACvC;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,kDAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc;IAG1B;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAC+B,6DAG7B,4CACL,qDAEmB,sBAAC;IAI9B;;AAIQ,6BAAmB,4BACnB,kDAAa,QAAQ,IACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,MACrB,kDAAa,QAAQ;AAGrB,4BAAkB,4BAClB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ;AAGrB,4BAAkB,4BAClB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ;AAGrB,2BAAiB,4BACjB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ,KACrB,kDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc;IAG1B;;yEAxJ+B;QAAkB;;IAAlB;IAAkB;AAAjD;;EAA0D;;;;;;;;;;;;;;;IA6J7C;;;;;;IACH;;;;;;;4DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"default_hidden_series_legend.ddc.js"}');
  // Exports:
  return {
    legends__default_hidden_series_legend: default_hidden_series_legend
  };
});

//# sourceMappingURL=default_hidden_series_legend.ddc.js.map
