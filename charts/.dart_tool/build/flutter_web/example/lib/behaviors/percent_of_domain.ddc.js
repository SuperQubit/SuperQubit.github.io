define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const percent_injector = packages__charts_common__common.src__chart__common__behavior__calculation__percent_injector;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const percent_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__percent_axis_spec;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const percent_injector$ = packages__charts_flutter__flutter.src__behaviors__calculation__percent_injector;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const percent_of_domain = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(percent_of_domain.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(percent_of_domain.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [percent_of_domain.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [percent_of_domain.OrdinalSales, core.int])))();
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
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/percent_of_domain.dart"
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
  let C6;
  let C1;
  let C0;
  const seriesList$ = dart.privateName(percent_of_domain, "PercentOfDomainBarChart.seriesList");
  const animate$ = dart.privateName(percent_of_domain, "PercentOfDomainBarChart.animate");
  percent_of_domain.PercentOfDomainBarChart = class PercentOfDomainBarChart extends framework.StatelessWidget {
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
      return new percent_of_domain.PercentOfDomainBarChart.new(percent_of_domain.PercentOfDomainBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new percent_of_domain.PercentOfDomainBarChart.new(percent_of_domain.PercentOfDomainBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.stacked, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([percent_injector$.PercentInjector.new({totalType: percent_injector.PercentInjectorTotalType.domain})]), primaryMeasureAxis: new percent_axis_spec.PercentAxisSpec.new(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", 5), new percent_of_domain.OrdinalSales.new("2015", 25), new percent_of_domain.OrdinalSales.new("2016", 100), new percent_of_domain.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", 25), new percent_of_domain.OrdinalSales.new("2015", 50), new percent_of_domain.OrdinalSales.new("2016", 10), new percent_of_domain.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new percent_of_domain.OrdinalSales.new("2014", 10), new percent_of_domain.OrdinalSales.new("2015", 15), new percent_of_domain.OrdinalSales.new("2016", 50), new percent_of_domain.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
  };
  (percent_of_domain.PercentOfDomainBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    percent_of_domain.PercentOfDomainBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = percent_of_domain.PercentOfDomainBarChart.prototype;
  dart.addTypeTests(percent_of_domain.PercentOfDomainBarChart);
  dart.setMethodSignature(percent_of_domain.PercentOfDomainBarChart, () => ({
    __proto__: dart.getMethods(percent_of_domain.PercentOfDomainBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(percent_of_domain.PercentOfDomainBarChart, "package:example/behaviors/percent_of_domain.dart");
  dart.setFieldSignature(percent_of_domain.PercentOfDomainBarChart, () => ({
    __proto__: dart.getFields(percent_of_domain.PercentOfDomainBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(percent_of_domain, "OrdinalSales.year");
  const sales$ = dart.privateName(percent_of_domain, "OrdinalSales.sales");
  percent_of_domain.OrdinalSales = class OrdinalSales extends core.Object {
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
  (percent_of_domain.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = percent_of_domain.OrdinalSales.prototype;
  dart.addTypeTests(percent_of_domain.OrdinalSales);
  dart.setLibraryUri(percent_of_domain.OrdinalSales, "package:example/behaviors/percent_of_domain.dart");
  dart.setFieldSignature(percent_of_domain.OrdinalSales, () => ({
    __proto__: dart.getFields(percent_of_domain.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/percent_of_domain", {
    "package:example/behaviors/percent_of_domain.dart": percent_of_domain
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["percent_of_domain.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,mDACT,yEAES;IAEb;;;AAOE,YAAW,mDAAwB;IACrC;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,uCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,IAElB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAC+B,6DAI7B,4CACL,kDAC2C,0EAGzB;IAE5B;;AAIQ,6BAAmB,4BACnB,uCAAa,QAAQ,IACrB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ,MACrB,uCAAa,QAAQ;AAGrB,2BAAiB,4BACjB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ;AAGrB,4BAAkB,4BAClB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ,KACrB,uCAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,IAElB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;4DAhI6B;QAAkB;;IAAlB;IAAkB;AAA/C;;EAAwD;;;;;;;;;;;;;;;IAqI3C;;;;;;IACH;;;;;;;iDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"percent_of_domain.ddc.js"}');
  // Exports:
  return {
    behaviors__percent_of_domain: percent_of_domain
  };
});

//# sourceMappingURL=percent_of_domain.ddc.js.map
