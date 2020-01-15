define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const chart_canvas = packages__charts_common__common.src__chart__common__chart_canvas;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const horizontal_pattern_forward_hatch = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(horizontal_pattern_forward_hatch.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(horizontal_pattern_forward_hatch.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [horizontal_pattern_forward_hatch.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [horizontal_pattern_forward_hatch.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToFillPatternType = () => (OrdinalSalesAndintToFillPatternType = dart.constFn(dart.fnType(chart_canvas.FillPatternType, [horizontal_pattern_forward_hatch.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vertical",
        [_Location_column]: 7,
        [_Location_line]: 105,
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
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/horizontal_pattern_forward_hatch.dart"
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
  const seriesList$ = dart.privateName(horizontal_pattern_forward_hatch, "HorizontalPatternForwardHatchBarChart.seriesList");
  const animate$ = dart.privateName(horizontal_pattern_forward_hatch, "HorizontalPatternForwardHatchBarChart.animate");
  horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart = class HorizontalPatternForwardHatchBarChart extends framework.StatelessWidget {
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
      return new horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.new(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.new(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData, fillPatternFn: dart.fn((sales, _) => chart_canvas.FillPatternType.forwardHatch, OrdinalSalesAndintToFillPatternType())}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, vertical: false, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", 5), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", 25), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", 100), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", 25), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", 50), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", 10), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new horizontal_pattern_forward_hatch.OrdinalSales.new("2014", 10), new horizontal_pattern_forward_hatch.OrdinalSales.new("2015", 15), new horizontal_pattern_forward_hatch.OrdinalSales.new("2016", 50), new horizontal_pattern_forward_hatch.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData, fillPatternFn: dart.fn((sales, _) => chart_canvas.FillPatternType.forwardHatch, OrdinalSalesAndintToFillPatternType())}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
  };
  (horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.prototype;
  dart.addTypeTests(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart);
  dart.setMethodSignature(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart, () => ({
    __proto__: dart.getMethods(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart, "package:example/bar_chart/horizontal_pattern_forward_hatch.dart");
  dart.setFieldSignature(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart, () => ({
    __proto__: dart.getFields(horizontal_pattern_forward_hatch.HorizontalPatternForwardHatchBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(horizontal_pattern_forward_hatch, "OrdinalSales.year");
  const sales$ = dart.privateName(horizontal_pattern_forward_hatch, "OrdinalSales.sales");
  horizontal_pattern_forward_hatch.OrdinalSales = class OrdinalSales extends core.Object {
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
  (horizontal_pattern_forward_hatch.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = horizontal_pattern_forward_hatch.OrdinalSales.prototype;
  dart.addTypeTests(horizontal_pattern_forward_hatch.OrdinalSales);
  dart.setLibraryUri(horizontal_pattern_forward_hatch.OrdinalSales, "package:example/bar_chart/horizontal_pattern_forward_hatch.dart");
  dart.setFieldSignature(horizontal_pattern_forward_hatch.OrdinalSales, () => ({
    __proto__: dart.getFields(horizontal_pattern_forward_hatch.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/horizontal_pattern_forward_hatch", {
    "package:example/bar_chart/horizontal_pattern_forward_hatch.dart": horizontal_pattern_forward_hatch
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["horizontal_pattern_forward_hatch.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2B4B;;;;;;IACf;;;;;;;;AAKT,YAAW,gFACT,sGAES;IAEb;;;AAOE,YAAW,gFAAsC;IACnD;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sDAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,iBACL,SAAc,OAAO,MACT,qFAEzB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAC+B,4DAC9B;IAEd;;AAIQ,6BAAmB,4BACnB,sDAAa,QAAQ,IACrB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ,MACrB,sDAAa,QAAQ;AAGrB,2BAAiB,4BACjB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ;AAGrB,4BAAkB,4BAClB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ,KACrB,sDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,iBACL,SAAc,OAAO,MACT,qFAEzB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;yFA3H2C;QAAkB;;IAAlB;IAAkB;AAA7D;;EAAsE;;;;;;;;;;;;;;;IAgIzD;;;;;;IACH;;;;;;;gEAEQ,MAAW;IAAX;IAAW;;EAAM","file":"horizontal_pattern_forward_hatch.ddc.js"}');
  // Exports:
  return {
    bar_chart__horizontal_pattern_forward_hatch: horizontal_pattern_forward_hatch
  };
});

//# sourceMappingURL=horizontal_pattern_forward_hatch.ddc.js.map
