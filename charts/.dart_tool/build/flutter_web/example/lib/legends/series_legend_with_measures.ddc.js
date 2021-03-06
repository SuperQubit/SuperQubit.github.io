define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const initial_selection = packages__charts_flutter__flutter.src__behaviors__initial_selection;
  const series_legend = packages__charts_flutter__flutter.src__behaviors__legend__series_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const series_legend_with_measures = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(series_legend_with_measures.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(series_legend_with_measures.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [series_legend_with_measures.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [series_legend_with_measures.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let JSArrayOfSeriesDatumConfig = () => (JSArrayOfSeriesDatumConfig = dart.constFn(_interceptors.JSArray$(series_datum.SeriesDatumConfig)))();
  let numToString = () => (numToString = dart.constFn(dart.fnType(core.String, [core.num])))();
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
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 123,
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
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/series_legend_with_measures.dart"
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
  const seriesList$ = dart.privateName(series_legend_with_measures, "LegendWithMeasures.seriesList");
  const animate$ = dart.privateName(series_legend_with_measures, "LegendWithMeasures.animate");
  series_legend_with_measures.LegendWithMeasures = class LegendWithMeasures extends framework.StatelessWidget {
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
      return new series_legend_with_measures.LegendWithMeasures.new(series_legend_with_measures.LegendWithMeasures._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new series_legend_with_measures.LegendWithMeasures.new(series_legend_with_measures.LegendWithMeasures._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", 5), new series_legend_with_measures.OrdinalSales.new("2015", 25), new series_legend_with_measures.OrdinalSales.new("2016", 100), new series_legend_with_measures.OrdinalSales.new("2017", 75)]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2015", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2016", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2015", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2016", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2017", random.nextInt(100))]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2015", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2016", random.nextInt(100)), new series_legend_with_measures.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new initial_selection.InitialSelection.new({selectedDataConfig: JSArrayOfSeriesDatumConfig().of([new series_datum.SeriesDatumConfig.new("Desktop", "2016"), new series_datum.SeriesDatumConfig.new("Tablet", "2016"), new series_datum.SeriesDatumConfig.new("Mobile", "2016"), new series_datum.SeriesDatumConfig.new("Other", "2016")])}), series_legend.SeriesLegend.new({position: chart_behavior.BehaviorPosition.end, horizontalFirst: false, cellPadding: new edge_insets.EdgeInsets.only({right: 4.0, bottom: 4.0}), showMeasures: true, measureFormatter: dart.fn(value => value == null ? "-" : dart.str(value) + "k", numToString())})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", 5), new series_legend_with_measures.OrdinalSales.new("2015", 25), new series_legend_with_measures.OrdinalSales.new("2016", 100), new series_legend_with_measures.OrdinalSales.new("2017", 75)]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", 25), new series_legend_with_measures.OrdinalSales.new("2015", 50), new series_legend_with_measures.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", 10), new series_legend_with_measures.OrdinalSales.new("2015", 15), new series_legend_with_measures.OrdinalSales.new("2016", 50), new series_legend_with_measures.OrdinalSales.new("2017", 45)]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new series_legend_with_measures.OrdinalSales.new("2014", 20), new series_legend_with_measures.OrdinalSales.new("2015", 35), new series_legend_with_measures.OrdinalSales.new("2016", 15), new series_legend_with_measures.OrdinalSales.new("2017", 10)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
  };
  (series_legend_with_measures.LegendWithMeasures.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    series_legend_with_measures.LegendWithMeasures.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = series_legend_with_measures.LegendWithMeasures.prototype;
  dart.addTypeTests(series_legend_with_measures.LegendWithMeasures);
  dart.setMethodSignature(series_legend_with_measures.LegendWithMeasures, () => ({
    __proto__: dart.getMethods(series_legend_with_measures.LegendWithMeasures.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(series_legend_with_measures.LegendWithMeasures, "package:example/legends/series_legend_with_measures.dart");
  dart.setFieldSignature(series_legend_with_measures.LegendWithMeasures, () => ({
    __proto__: dart.getFields(series_legend_with_measures.LegendWithMeasures.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(series_legend_with_measures, "OrdinalSales.year");
  const sales$ = dart.privateName(series_legend_with_measures, "OrdinalSales.sales");
  series_legend_with_measures.OrdinalSales = class OrdinalSales extends core.Object {
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
  (series_legend_with_measures.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = series_legend_with_measures.OrdinalSales.prototype;
  dart.addTypeTests(series_legend_with_measures.OrdinalSales);
  dart.setLibraryUri(series_legend_with_measures.OrdinalSales, "package:example/legends/series_legend_with_measures.dart");
  dart.setFieldSignature(series_legend_with_measures.OrdinalSales, () => ({
    __proto__: dart.getFields(series_legend_with_measures.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/series_legend_with_measures", {
    "package:example/legends/series_legend_with_measures.dart": series_legend_with_measures
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["series_legend_with_measures.dart"],"names":[],"mappings":"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","file":"series_legend_with_measures.ddc.js"}');
  // Exports:
  return {
    legends__series_legend_with_measures: series_legend_with_measures
  };
});

//# sourceMappingURL=series_legend_with_measures.ddc.js.map
