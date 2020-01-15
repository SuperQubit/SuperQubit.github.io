define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const datum_legend = packages__charts_flutter__flutter.src__behaviors__legend__datum_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const datum_legend_options = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(datum_legend_options.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(datum_legend_options.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [datum_legend_options.LinearSales, core.int])))();
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
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 75,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/datum_legend_options.dart"
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
  const seriesList$ = dart.privateName(datum_legend_options, "DatumLegendOptions.seriesList");
  const animate$ = dart.privateName(datum_legend_options, "DatumLegendOptions.animate");
  datum_legend_options.DatumLegendOptions = class DatumLegendOptions extends framework.StatelessWidget {
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
      return new datum_legend_options.DatumLegendOptions.new(datum_legend_options.DatumLegendOptions._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new datum_legend_options.DatumLegendOptions.new(datum_legend_options.DatumLegendOptions._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new datum_legend_options.LinearSales.new(0, random.nextInt(100)), new datum_legend_options.LinearSales.new(1, random.nextInt(100)), new datum_legend_options.LinearSales.new(2, random.nextInt(100)), new datum_legend_options.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([datum_legend.DatumLegend.new({position: chart_behavior.BehaviorPosition.end, outsideJustification: chart_behavior.OutsideJustification.endDrawArea, horizontalFirst: false, desiredMaxRows: 2, cellPadding: new edge_insets.EdgeInsets.only({right: 4.0, bottom: 4.0}), entryTextStyle: new axis_spec.TextStyleSpec.new({color: material_palette.MaterialPalette.purple.shadeDefault, fontFamily: "Georgia", fontSize: 11})})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new datum_legend_options.LinearSales.new(0, 100), new datum_legend_options.LinearSales.new(1, 75), new datum_legend_options.LinearSales.new(2, 25), new datum_legend_options.LinearSales.new(3, 5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (datum_legend_options.DatumLegendOptions.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    datum_legend_options.DatumLegendOptions.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = datum_legend_options.DatumLegendOptions.prototype;
  dart.addTypeTests(datum_legend_options.DatumLegendOptions);
  dart.setMethodSignature(datum_legend_options.DatumLegendOptions, () => ({
    __proto__: dart.getMethods(datum_legend_options.DatumLegendOptions.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(datum_legend_options.DatumLegendOptions, "package:example/legends/datum_legend_options.dart");
  dart.setFieldSignature(datum_legend_options.DatumLegendOptions, () => ({
    __proto__: dart.getFields(datum_legend_options.DatumLegendOptions.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(datum_legend_options, "LinearSales.year");
  const sales$ = dart.privateName(datum_legend_options, "LinearSales.sales");
  datum_legend_options.LinearSales = class LinearSales extends core.Object {
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
  (datum_legend_options.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = datum_legend_options.LinearSales.prototype;
  dart.addTypeTests(datum_legend_options.LinearSales);
  dart.setLibraryUri(datum_legend_options.LinearSales, "package:example/legends/datum_legend_options.dart");
  dart.setFieldSignature(datum_legend_options.LinearSales, () => ({
    __proto__: dart.getFields(datum_legend_options.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/datum_legend_options", {
    "package:example/legends/datum_legend_options.dart": datum_legend_options
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datum_legend_options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2B4B;;;;;;IACf;;;;;;;;AAKT,YAAW,iDACT,uEAES;IAEb;;;AAOE,YAAW,iDAAmB;IAChC;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,yCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,yCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,yCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,yCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,4BACT,2BACS,yBAIE,4CACL,wCAMgC,2DAIgB,kEAIjC,uBAGD,gBAEC,wCAAuB,aAAa,uBAE9B,wCACW,AAAO,kEACzB,qBACF;IAItB;;AAIQ,iBAAO,2BACP,yCAAY,GAAG,MACf,yCAAY,GAAG,KACf,yCAAY,GAAG,KACf,yCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;0DAhGwB;QAAkB;;IAAlB;IAAkB;AAA1C;;EAAmD;;;;;;;;;;;;;;;IAqGzC;;;;;;IACA;;;;;;;mDAEO,MAAW;IAAX;IAAW;;EAAM","file":"datum_legend_options.ddc.js"}');
  // Exports:
  return {
    legends__datum_legend_options: datum_legend_options
  };
});

//# sourceMappingURL=datum_legend_options.ddc.js.map
