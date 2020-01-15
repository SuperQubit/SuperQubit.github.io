define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const stacked_fill_color = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(stacked_fill_color.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(stacked_fill_color.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [stacked_fill_color.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [stacked_fill_color.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [stacked_fill_color.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 111,
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
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/stacked_fill_color.dart"
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
  const seriesList$ = dart.privateName(stacked_fill_color, "StackedFillColorBarChart.seriesList");
  const animate$ = dart.privateName(stacked_fill_color, "StackedFillColorBarChart.animate");
  stacked_fill_color.StackedFillColorBarChart = class StackedFillColorBarChart extends framework.StatelessWidget {
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
      return new stacked_fill_color.StackedFillColorBarChart.new(stacked_fill_color.StackedFillColorBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new stacked_fill_color.StackedFillColorBarChart.new(stacked_fill_color.StackedFillColorBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2015", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2016", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2015", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2016", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2015", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2016", random.nextInt(100)), new stacked_fill_color.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), fillColorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault.lighter, OrdinalSalesAndintToColor())}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor())}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, OrdinalSalesAndintToColor()), fillColorFn: dart.fn((_, __) => material_palette.MaterialPalette.transparent, OrdinalSalesAndintToColor())})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, defaultRenderer: new (BarRendererConfigOfString()).new({groupingType: base_bar_renderer_config.BarGroupingType.stacked, strokeWidthPx: 2.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", 5), new stacked_fill_color.OrdinalSales.new("2015", 25), new stacked_fill_color.OrdinalSales.new("2016", 100), new stacked_fill_color.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", 25), new stacked_fill_color.OrdinalSales.new("2015", 50), new stacked_fill_color.OrdinalSales.new("2016", 10), new stacked_fill_color.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new stacked_fill_color.OrdinalSales.new("2014", 10), new stacked_fill_color.OrdinalSales.new("2015", 50), new stacked_fill_color.OrdinalSales.new("2016", 50), new stacked_fill_color.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), fillColorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault.lighter, OrdinalSalesAndintToColor())}), SeriesOfOrdinalSales$String().new({id: "Tablet", measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString())}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData, colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, OrdinalSalesAndintToColor()), fillColorFn: dart.fn((_, __) => material_palette.MaterialPalette.transparent, OrdinalSalesAndintToColor())})]);
    }
  };
  (stacked_fill_color.StackedFillColorBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    stacked_fill_color.StackedFillColorBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = stacked_fill_color.StackedFillColorBarChart.prototype;
  dart.addTypeTests(stacked_fill_color.StackedFillColorBarChart);
  dart.setMethodSignature(stacked_fill_color.StackedFillColorBarChart, () => ({
    __proto__: dart.getMethods(stacked_fill_color.StackedFillColorBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(stacked_fill_color.StackedFillColorBarChart, "package:example/bar_chart/stacked_fill_color.dart");
  dart.setFieldSignature(stacked_fill_color.StackedFillColorBarChart, () => ({
    __proto__: dart.getFields(stacked_fill_color.StackedFillColorBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(stacked_fill_color, "OrdinalSales.year");
  const sales$ = dart.privateName(stacked_fill_color, "OrdinalSales.sales");
  stacked_fill_color.OrdinalSales = class OrdinalSales extends core.Object {
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
  (stacked_fill_color.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = stacked_fill_color.OrdinalSales.prototype;
  dart.addTypeTests(stacked_fill_color.OrdinalSales);
  dart.setLibraryUri(stacked_fill_color.OrdinalSales, "package:example/bar_chart/stacked_fill_color.dart");
  dart.setFieldSignature(stacked_fill_color.OrdinalSales, () => ({
    __proto__: dart.getFields(stacked_fill_color.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/stacked_fill_color", {
    "package:example/bar_chart/stacked_fill_color.dart": stacked_fill_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stacked_fill_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,qDACT,2EAES;IAEb;;;AAOE,YAAW,qDAAyB;IACtC;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CAED,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,WACb,SAAC,GAAG,OAA8B,AAAK,+FACnC,SAAC,GAAG,OACU,AAAK,AAAa,4FAI3C,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,WACX,SAAC,GAAG,OAA8B,AAAI,mFAG7C,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,WACZ,SAAC,GAAG,OAA8B,AAAM,gGACpC,SAAC,GAAG,OAA8B;IAGrD;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAEY,qDACoB,iEAAwB;IAErE;;AAIQ,6BAAmB,4BACnB,wCAAa,QAAQ,IACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,MACrB,wCAAa,QAAQ;AAGrB,2BAAiB,4BACjB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ;AAGrB,4BAAkB,4BAClB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ;AAG3B,YAAO,4CAED,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,WACb,SAAC,GAAG,OAA8B,AAAK,+FACnC,SAAC,GAAG,OACU,AAAK,AAAa,4FAI3C,uCACE,qBACO,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,WACX,SAAC,GAAG,OAA8B,AAAI,2FACrC,SAAc,OAAO,MAAM,AAAM,KAAD,wCAGxC,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,WACZ,SAAC,GAAG,OAA8B,AAAM,gGACpC,SAAC,GAAG,OAA8B;IAGrD;;8DA5I8B;QAAkB;;IAAlB;IAAkB;AAAhD;;EAAyD;;;;;;;;;;;;;;;IAiJ5C;;;;;;IACH;;;;;;;kDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"stacked_fill_color.ddc.js"}');
  // Exports:
  return {
    bar_chart__stacked_fill_color: stacked_fill_color
  };
});

//# sourceMappingURL=stacked_fill_color.ddc.js.map
