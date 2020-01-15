define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const grouped_stacked_weight_pattern = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(grouped_stacked_weight_pattern.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(grouped_stacked_weight_pattern.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [grouped_stacked_weight_pattern.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [grouped_stacked_weight_pattern.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
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
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 152,
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
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/grouped_stacked_weight_pattern.dart"
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
  const seriesList$ = dart.privateName(grouped_stacked_weight_pattern, "GroupedStackedWeightPatternBarChart.seriesList");
  const animate$ = dart.privateName(grouped_stacked_weight_pattern, "GroupedStackedWeightPatternBarChart.animate");
  grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart = class GroupedStackedWeightPatternBarChart extends framework.StatelessWidget {
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
      return new grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.new(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.new(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      let desktopSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", random.nextInt(100)), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Tablet A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Mobile A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Desktop B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Tablet B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Mobile B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataB})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, defaultRenderer: new (BarRendererConfigOfString()).new({groupingType: base_bar_renderer_config.BarGroupingType.groupedStacked, weightPattern: JSArrayOfint().of([2, 1])}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static createSampleData() {
      let desktopSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 5), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 25), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 100), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 75)]);
      let tableSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 25), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 50), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 10), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 20)]);
      let mobileSalesDataA = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 10), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 15), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 50), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 45)]);
      let desktopSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 5), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 25), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 100), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 75)]);
      let tableSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 25), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 50), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 10), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 20)]);
      let mobileSalesDataB = JSArrayOfOrdinalSales().of([new grouped_stacked_weight_pattern.OrdinalSales.new("2014", 10), new grouped_stacked_weight_pattern.OrdinalSales.new("2015", 15), new grouped_stacked_weight_pattern.OrdinalSales.new("2016", 50), new grouped_stacked_weight_pattern.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Tablet A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Mobile A", seriesCategory: "A", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataA}), SeriesOfOrdinalSales$String().new({id: "Desktop B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Tablet B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesDataB}), SeriesOfOrdinalSales$String().new({id: "Mobile B", seriesCategory: "B", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesDataB})]);
    }
  };
  (grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.prototype;
  dart.addTypeTests(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart);
  dart.setMethodSignature(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart, () => ({
    __proto__: dart.getMethods(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart, "package:example/bar_chart/grouped_stacked_weight_pattern.dart");
  dart.setFieldSignature(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart, () => ({
    __proto__: dart.getFields(grouped_stacked_weight_pattern.GroupedStackedWeightPatternBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(grouped_stacked_weight_pattern, "OrdinalSales.year");
  const sales$ = dart.privateName(grouped_stacked_weight_pattern, "OrdinalSales.sales");
  grouped_stacked_weight_pattern.OrdinalSales = class OrdinalSales extends core.Object {
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
  (grouped_stacked_weight_pattern.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = grouped_stacked_weight_pattern.OrdinalSales.prototype;
  dart.addTypeTests(grouped_stacked_weight_pattern.OrdinalSales);
  dart.setLibraryUri(grouped_stacked_weight_pattern.OrdinalSales, "package:example/bar_chart/grouped_stacked_weight_pattern.dart");
  dart.setFieldSignature(grouped_stacked_weight_pattern.OrdinalSales, () => ({
    __proto__: dart.getFields(grouped_stacked_weight_pattern.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/grouped_stacked_weight_pattern", {
    "package:example/bar_chart/grouped_stacked_weight_pattern.dart": grouped_stacked_weight_pattern
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["grouped_stacked_weight_pattern.dart"],"names":[],"mappings":"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","file":"grouped_stacked_weight_pattern.ddc.js"}');
  // Exports:
  return {
    bar_chart__grouped_stacked_weight_pattern: grouped_stacked_weight_pattern
  };
});

//# sourceMappingURL=grouped_stacked_weight_pattern.ddc.js.map
