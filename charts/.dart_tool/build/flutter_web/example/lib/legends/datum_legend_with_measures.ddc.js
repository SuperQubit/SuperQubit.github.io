define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const legend_entry_generator = packages__charts_common__common.src__chart__common__behavior__legend__legend_entry_generator;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const initial_selection = packages__charts_flutter__flutter.src__behaviors__initial_selection;
  const datum_legend = packages__charts_flutter__flutter.src__behaviors__legend__datum_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const datum_legend_with_measures = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(datum_legend_with_measures.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(datum_legend_with_measures.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [datum_legend_with_measures.LinearSales, core.int])))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
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
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 82,
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
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/datum_legend_with_measures.dart"
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
  const seriesList$ = dart.privateName(datum_legend_with_measures, "DatumLegendWithMeasures.seriesList");
  const animate$ = dart.privateName(datum_legend_with_measures, "DatumLegendWithMeasures.animate");
  datum_legend_with_measures.DatumLegendWithMeasures = class DatumLegendWithMeasures extends framework.StatelessWidget {
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
      return new datum_legend_with_measures.DatumLegendWithMeasures.new(datum_legend_with_measures.DatumLegendWithMeasures._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new datum_legend_with_measures.DatumLegendWithMeasures.new(datum_legend_with_measures.DatumLegendWithMeasures._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new datum_legend_with_measures.LinearSales.new(2014, random.nextInt(100)), new datum_legend_with_measures.LinearSales.new(2015, random.nextInt(100)), new datum_legend_with_measures.LinearSales.new(2016, random.nextInt(100)), new datum_legend_with_measures.LinearSales.new(2017, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new initial_selection.InitialSelection.new({selectedDataConfig: JSArrayOfSeriesDatumConfig().of([new series_datum.SeriesDatumConfig.new("Sales", 0)])}), datum_legend.DatumLegend.new({position: chart_behavior.BehaviorPosition.end, horizontalFirst: false, cellPadding: new edge_insets.EdgeInsets.only({right: 4.0, bottom: 4.0}), showMeasures: true, legendDefaultMeasure: legend_entry_generator.LegendDefaultMeasure.firstValue, measureFormatter: dart.fn(value => value == null ? "-" : dart.str(value) + "k", numToString())})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new datum_legend_with_measures.LinearSales.new(2014, 100), new datum_legend_with_measures.LinearSales.new(2015, 75), new datum_legend_with_measures.LinearSales.new(2016, 25), new datum_legend_with_measures.LinearSales.new(2017, 5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (datum_legend_with_measures.DatumLegendWithMeasures.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    datum_legend_with_measures.DatumLegendWithMeasures.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = datum_legend_with_measures.DatumLegendWithMeasures.prototype;
  dart.addTypeTests(datum_legend_with_measures.DatumLegendWithMeasures);
  dart.setMethodSignature(datum_legend_with_measures.DatumLegendWithMeasures, () => ({
    __proto__: dart.getMethods(datum_legend_with_measures.DatumLegendWithMeasures.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(datum_legend_with_measures.DatumLegendWithMeasures, "package:example/legends/datum_legend_with_measures.dart");
  dart.setFieldSignature(datum_legend_with_measures.DatumLegendWithMeasures, () => ({
    __proto__: dart.getFields(datum_legend_with_measures.DatumLegendWithMeasures.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(datum_legend_with_measures, "LinearSales.year");
  const sales$ = dart.privateName(datum_legend_with_measures, "LinearSales.sales");
  datum_legend_with_measures.LinearSales = class LinearSales extends core.Object {
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
  (datum_legend_with_measures.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = datum_legend_with_measures.LinearSales.prototype;
  dart.addTypeTests(datum_legend_with_measures.LinearSales);
  dart.setLibraryUri(datum_legend_with_measures.LinearSales, "package:example/legends/datum_legend_with_measures.dart");
  dart.setFieldSignature(datum_legend_with_measures.LinearSales, () => ({
    __proto__: dart.getFields(datum_legend_with_measures.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/datum_legend_with_measures", {
    "package:example/legends/datum_legend_with_measures.dart": datum_legend_with_measures
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datum_legend_with_measures.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8B4B;;;;;;IACf;;;;;;;;AAKT,YAAW,4DACT,kFAES;IAEb;;;AAOE,YAAW,4DAAwB;IACrC;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,+CAAY,MAAM,AAAO,MAAD,SAAS,OACjC,+CAAY,MAAM,AAAO,MAAD,SAAS,OACjC,+CAAY,MAAM,AAAO,MAAD,SAAS,OACjC,+CAAY,MAAM,AAAO,MAAD,SAAS;AAGvC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,4BACT,2BACS,yBAIE,4CAKL,gEACkB,iCACd,uCAAyB,SAAS,QAItC,wCAMgC,sDAIjB,oBAEA,wCAAuB,aAAa,qBAEvC,4BAEoC,0EAGhC,QAAK,SACd,AAAM,KAAD,IAAI,OAAO,MAAiB,SAAR,KAAK,IAAC;IAKhD;;AAIQ,iBAAO,2BACP,+CAAY,MAAM,MAClB,+CAAY,MAAM,KAClB,+CAAY,MAAM,KAClB,+CAAY,MAAM;AAGxB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;qEAvG6B;QAAkB;;IAAlB;IAAkB;AAA/C;;EAAwD;;;;;;;;;;;;;;;IA4G9C;;;;;;IACA;;;;;;;yDAEO,MAAW;IAAX;IAAW;;EAAM","file":"datum_legend_with_measures.ddc.js"}');
  // Exports:
  return {
    legends__datum_legend_with_measures: datum_legend_with_measures
  };
});

//# sourceMappingURL=datum_legend_with_measures.ddc.js.map
