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
  const series_renderer = packages__charts_common__common.src__chart__common__series_renderer;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const line_renderer_config = packages__charts_common__common.src__chart__line__line_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const combo_chart = packages__charts_flutter__flutter.src__combo_chart__combo_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const ordinal_bar_line = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(ordinal_bar_line.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(ordinal_bar_line.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [ordinal_bar_line.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [ordinal_bar_line.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [ordinal_bar_line.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  let LineRendererConfigOfString = () => (LineRendererConfigOfString = dart.constFn(line_renderer_config.LineRendererConfig$(core.String)))();
  let SeriesRendererConfigOfString = () => (SeriesRendererConfigOfString = dart.constFn(series_renderer_config.SeriesRendererConfig$(core.String)))();
  let JSArrayOfSeriesRendererConfigOfString = () => (JSArrayOfSeriesRendererConfigOfString = dart.constFn(_interceptors.JSArray$(SeriesRendererConfigOfString())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 41,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 9,
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
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/example/combo_chart/ordinal_bar_line.dart"
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
  const seriesList$ = dart.privateName(ordinal_bar_line, "OrdinalComboBarLineChart.seriesList");
  const animate$ = dart.privateName(ordinal_bar_line, "OrdinalComboBarLineChart.animate");
  ordinal_bar_line.OrdinalComboBarLineChart = class OrdinalComboBarLineChart extends framework.StatelessWidget {
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
      return new ordinal_bar_line.OrdinalComboBarLineChart.new(ordinal_bar_line.OrdinalComboBarLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new ordinal_bar_line.OrdinalComboBarLineChart.new(ordinal_bar_line.OrdinalComboBarLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2015", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2016", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2015", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2016", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2015", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2016", random.nextInt(100)), new ordinal_bar_line.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customLine"), t0)]);
    }
    build(context) {
      return new combo_chart.OrdinalComboChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (BarRendererConfigOfString()).new({groupingType: base_bar_renderer_config.BarGroupingType.grouped}), customSeriesRenderers: JSArrayOfSeriesRendererConfigOfString().of([new (LineRendererConfigOfString()).new({customRendererId: "customLine"})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let desktopSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", 5), new ordinal_bar_line.OrdinalSales.new("2015", 25), new ordinal_bar_line.OrdinalSales.new("2016", 100), new ordinal_bar_line.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", 5), new ordinal_bar_line.OrdinalSales.new("2015", 25), new ordinal_bar_line.OrdinalSales.new("2016", 100), new ordinal_bar_line.OrdinalSales.new("2017", 75)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new ordinal_bar_line.OrdinalSales.new("2014", 10), new ordinal_bar_line.OrdinalSales.new("2015", 50), new ordinal_bar_line.OrdinalSales.new("2016", 200), new ordinal_bar_line.OrdinalSales.new("2017", 150)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Mobile ", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customLine"), t0)]);
    }
  };
  (ordinal_bar_line.OrdinalComboBarLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    ordinal_bar_line.OrdinalComboBarLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ordinal_bar_line.OrdinalComboBarLineChart.prototype;
  dart.addTypeTests(ordinal_bar_line.OrdinalComboBarLineChart);
  dart.setMethodSignature(ordinal_bar_line.OrdinalComboBarLineChart, () => ({
    __proto__: dart.getMethods(ordinal_bar_line.OrdinalComboBarLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ordinal_bar_line.OrdinalComboBarLineChart, "package:example/combo_chart/ordinal_bar_line.dart");
  dart.setFieldSignature(ordinal_bar_line.OrdinalComboBarLineChart, () => ({
    __proto__: dart.getFields(ordinal_bar_line.OrdinalComboBarLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(ordinal_bar_line, "OrdinalSales.year");
  const sales$ = dart.privateName(ordinal_bar_line, "OrdinalSales.sales");
  ordinal_bar_line.OrdinalSales = class OrdinalSales extends core.Object {
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
  (ordinal_bar_line.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = ordinal_bar_line.OrdinalSales.prototype;
  dart.addTypeTests(ordinal_bar_line.OrdinalSales);
  dart.setLibraryUri(ordinal_bar_line.OrdinalSales, "package:example/combo_chart/ordinal_bar_line.dart");
  dart.setFieldSignature(ordinal_bar_line.OrdinalSales, () => ({
    __proto__: dart.getFields(ordinal_bar_line.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/combo_chart/ordinal_bar_line", {
    "package:example/combo_chart/ordinal_bar_line.dart": ordinal_bar_line
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ordinal_bar_line.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,mDACT,yEAES;IAEb;;;AAOE,YAAW,mDAAyB;IACtC;;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,sCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACI,oBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IACtB,uCACI,mBACK,SAAC,GAAG,OAA8B,AAAI,2FACrC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,UACpB,uCACI,mBACK,SAAC,GAAG,OAA8B,AAAM,6FACvC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAErB,6BAAoB,+BAAe;IAE3C;UAI0B;AACxB,YAAW,uCAAyB,2BACvB,+BAEY,qDACoB,2EAGlB,4CACjB,0DAEkB;IAE9B;;;AAIQ,6BAAmB,4BACnB,sCAAa,QAAQ,IACrB,sCAAa,QAAQ,KACrB,sCAAa,QAAQ,MACrB,sCAAa,QAAQ;AAGrB,2BAAiB,4BACjB,sCAAa,QAAQ,IACrB,sCAAa,QAAQ,KACrB,sCAAa,QAAQ,MACrB,sCAAa,QAAQ;AAGrB,4BAAkB,4BAClB,sCAAa,QAAQ,KACrB,sCAAa,QAAQ,KACrB,sCAAa,QAAQ,MACrB,sCAAa,QAAQ;AAG3B,YAAO,4CACD,uCACI,oBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IACtB,uCACI,mBACK,SAAC,GAAG,OAA8B,AAAI,2FACrC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,UACpB,uCACI,oBACK,SAAC,GAAG,OAA8B,AAAM,6FACvC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAErB,6BAAoB,+BAAe;IAE3C;;4DAjI8B;QAAkB;;IAAlB;IAAkB;AAAhD;;EAAyD;;;;;;;;;;;;;;;IAsI5C;;;;;;IACH;;;;;;;gDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"ordinal_bar_line.ddc.js"}');
  // Exports:
  return {
    combo_chart__ordinal_bar_line: ordinal_bar_line
  };
});

//# sourceMappingURL=ordinal_bar_line.ddc.js.map
