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
  const simple_series_legend = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(simple_series_legend.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(simple_series_legend.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [simple_series_legend.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple_series_legend.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
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
        [_Location_file]: "org-dartlang-app:///packages/example/legends/simple_series_legend.dart"
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
  const seriesList$ = dart.privateName(simple_series_legend, "SimpleSeriesLegend.seriesList");
  const animate$ = dart.privateName(simple_series_legend, "SimpleSeriesLegend.animate");
  simple_series_legend.SimpleSeriesLegend = class SimpleSeriesLegend extends framework.StatelessWidget {
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
      return new simple_series_legend.SimpleSeriesLegend.new(simple_series_legend.SimpleSeriesLegend._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple_series_legend.SimpleSeriesLegend.new(simple_series_legend.SimpleSeriesLegend._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2015", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2016", random.nextInt(100)), new simple_series_legend.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([series_legend.SeriesLegend.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", 5), new simple_series_legend.OrdinalSales.new("2015", 25), new simple_series_legend.OrdinalSales.new("2016", 100), new simple_series_legend.OrdinalSales.new("2017", 75)]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", 25), new simple_series_legend.OrdinalSales.new("2015", 50), new simple_series_legend.OrdinalSales.new("2016", 10), new simple_series_legend.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", 10), new simple_series_legend.OrdinalSales.new("2015", 15), new simple_series_legend.OrdinalSales.new("2016", 50), new simple_series_legend.OrdinalSales.new("2017", 45)]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new simple_series_legend.OrdinalSales.new("2014", 20), new simple_series_legend.OrdinalSales.new("2015", 35), new simple_series_legend.OrdinalSales.new("2016", 15), new simple_series_legend.OrdinalSales.new("2017", 10)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
  };
  (simple_series_legend.SimpleSeriesLegend.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple_series_legend.SimpleSeriesLegend.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple_series_legend.SimpleSeriesLegend.prototype;
  dart.addTypeTests(simple_series_legend.SimpleSeriesLegend);
  dart.setMethodSignature(simple_series_legend.SimpleSeriesLegend, () => ({
    __proto__: dart.getMethods(simple_series_legend.SimpleSeriesLegend.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple_series_legend.SimpleSeriesLegend, "package:example/legends/simple_series_legend.dart");
  dart.setFieldSignature(simple_series_legend.SimpleSeriesLegend, () => ({
    __proto__: dart.getFields(simple_series_legend.SimpleSeriesLegend.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple_series_legend, "OrdinalSales.year");
  const sales$ = dart.privateName(simple_series_legend, "OrdinalSales.sales");
  simple_series_legend.OrdinalSales = class OrdinalSales extends core.Object {
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
  (simple_series_legend.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = simple_series_legend.OrdinalSales.prototype;
  dart.addTypeTests(simple_series_legend.OrdinalSales);
  dart.setLibraryUri(simple_series_legend.OrdinalSales, "package:example/legends/simple_series_legend.dart");
  dart.setFieldSignature(simple_series_legend.OrdinalSales, () => ({
    __proto__: dart.getFields(simple_series_legend.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/simple_series_legend", {
    "package:example/legends/simple_series_legend.dart": simple_series_legend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple_series_legend.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,iDACT,uEAES;IAEb;;;AAOE,YAAW,iDAAmB;IAChC;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc;IAG1B;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAC+B,6DAG7B,4CAAK;IAEpB;;AAIQ,6BAAmB,4BACnB,0CAAa,QAAQ,IACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,MACrB,0CAAa,QAAQ;AAGrB,4BAAkB,4BAClB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ;AAGrB,4BAAkB,4BAClB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ;AAGrB,2BAAiB,4BACjB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAEnB,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc;IAG1B;;0DAnJwB;QAAkB;;IAAlB;IAAkB;AAA1C;;EAAmD;;;;;;;;;;;;;;;IAwJtC;;;;;;IACH;;;;;;;oDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"simple_series_legend.ddc.js"}');
  // Exports:
  return {
    legends__simple_series_legend: simple_series_legend
  };
});

//# sourceMappingURL=simple_series_legend.ddc.js.map
