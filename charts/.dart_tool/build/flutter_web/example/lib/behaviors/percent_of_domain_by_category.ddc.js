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
  const percent_of_domain_by_category = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(percent_of_domain_by_category.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(percent_of_domain_by_category.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [percent_of_domain_by_category.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [percent_of_domain_by_category.OrdinalSales, core.int])))();
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
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 160,
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
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/percent_of_domain_by_category.dart"
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
  const seriesList$ = dart.privateName(percent_of_domain_by_category, "PercentOfDomainByCategoryBarChart.seriesList");
  const animate$ = dart.privateName(percent_of_domain_by_category, "PercentOfDomainByCategoryBarChart.animate");
  percent_of_domain_by_category.PercentOfDomainByCategoryBarChart = class PercentOfDomainByCategoryBarChart extends framework.StatelessWidget {
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
      return new percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.new(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.new(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      let desktopSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2015", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2016", random.nextInt(100)), new percent_of_domain_by_category.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Tablet A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Mobile A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Desktop B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Tablet B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Mobile B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataB})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.groupedStacked, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([percent_injector$.PercentInjector.new({totalType: percent_injector.PercentInjectorTotalType.domainBySeriesCategory})]), primaryMeasureAxis: new percent_axis_spec.PercentAxisSpec.new(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static createSampleData() {
      let desktopSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 5), new percent_of_domain_by_category.OrdinalSales.new("2015", 25), new percent_of_domain_by_category.OrdinalSales.new("2016", 100), new percent_of_domain_by_category.OrdinalSales.new("2017", 75)]);
      let tableSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 25), new percent_of_domain_by_category.OrdinalSales.new("2015", 50), new percent_of_domain_by_category.OrdinalSales.new("2016", 10), new percent_of_domain_by_category.OrdinalSales.new("2017", 20)]);
      let mobileSalesDataA = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 10), new percent_of_domain_by_category.OrdinalSales.new("2015", 15), new percent_of_domain_by_category.OrdinalSales.new("2016", 50), new percent_of_domain_by_category.OrdinalSales.new("2017", 45)]);
      let desktopSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 5), new percent_of_domain_by_category.OrdinalSales.new("2015", 25), new percent_of_domain_by_category.OrdinalSales.new("2016", 100), new percent_of_domain_by_category.OrdinalSales.new("2017", 75)]);
      let tableSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 25), new percent_of_domain_by_category.OrdinalSales.new("2015", 50), new percent_of_domain_by_category.OrdinalSales.new("2016", 10), new percent_of_domain_by_category.OrdinalSales.new("2017", 20)]);
      let mobileSalesDataB = JSArrayOfOrdinalSales().of([new percent_of_domain_by_category.OrdinalSales.new("2014", 10), new percent_of_domain_by_category.OrdinalSales.new("2015", 15), new percent_of_domain_by_category.OrdinalSales.new("2016", 50), new percent_of_domain_by_category.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Tablet A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Mobile A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Desktop B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Tablet B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Mobile B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataB})]);
    }
  };
  (percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.prototype;
  dart.addTypeTests(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart);
  dart.setMethodSignature(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart, () => ({
    __proto__: dart.getMethods(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart, "package:example/behaviors/percent_of_domain_by_category.dart");
  dart.setFieldSignature(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart, () => ({
    __proto__: dart.getFields(percent_of_domain_by_category.PercentOfDomainByCategoryBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(percent_of_domain_by_category, "OrdinalSales.year");
  const sales$ = dart.privateName(percent_of_domain_by_category, "OrdinalSales.sales");
  percent_of_domain_by_category.OrdinalSales = class OrdinalSales extends core.Object {
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
  (percent_of_domain_by_category.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = percent_of_domain_by_category.OrdinalSales.prototype;
  dart.addTypeTests(percent_of_domain_by_category.OrdinalSales);
  dart.setLibraryUri(percent_of_domain_by_category.OrdinalSales, "package:example/behaviors/percent_of_domain_by_category.dart");
  dart.setFieldSignature(percent_of_domain_by_category.OrdinalSales, () => ({
    __proto__: dart.getFields(percent_of_domain_by_category.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/percent_of_domain_by_category", {
    "package:example/behaviors/percent_of_domain_by_category.dart": percent_of_domain_by_category
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["percent_of_domain_by_category.dart"],"names":[],"mappings":"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","file":"percent_of_domain_by_category.ddc.js"}');
  // Exports:
  return {
    behaviors__percent_of_domain_by_category: percent_of_domain_by_category
  };
});

//# sourceMappingURL=percent_of_domain_by_category.ddc.js.map
