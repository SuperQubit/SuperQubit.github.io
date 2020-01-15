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
  const line_renderer_config = packages__charts_common__common.src__chart__line__line_renderer_config;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const combo_chart = packages__charts_flutter__flutter.src__combo_chart__combo_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const numeric_line_bar = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(numeric_line_bar.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(numeric_line_bar.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [numeric_line_bar.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [numeric_line_bar.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(numeric_line_bar.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let LineRendererConfigOfnum = () => (LineRendererConfigOfnum = dart.constFn(line_renderer_config.LineRendererConfig$(core.num)))();
  let BarRendererConfigOfnum = () => (BarRendererConfigOfnum = dart.constFn(bar_renderer_config.BarRendererConfig$(core.num)))();
  let SeriesRendererConfigOfnum = () => (SeriesRendererConfigOfnum = dart.constFn(series_renderer_config.SeriesRendererConfig$(core.num)))();
  let JSArrayOfSeriesRendererConfigOfnum = () => (JSArrayOfSeriesRendererConfigOfnum = dart.constFn(_interceptors.JSArray$(SeriesRendererConfigOfnum())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 41,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 9,
        [_Location_line]: 109,
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
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/example/combo_chart/numeric_line_bar.dart"
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
  const seriesList$ = dart.privateName(numeric_line_bar, "NumericComboLineBarChart.seriesList");
  const animate$ = dart.privateName(numeric_line_bar, "NumericComboLineBarChart.animate");
  numeric_line_bar.NumericComboLineBarChart = class NumericComboLineBarChart extends framework.StatelessWidget {
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
      return new numeric_line_bar.NumericComboLineBarChart.new(numeric_line_bar.NumericComboLineBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new numeric_line_bar.NumericComboLineBarChart.new(numeric_line_bar.NumericComboLineBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0, t0$;
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, random.nextInt(100)), new numeric_line_bar.LinearSales.new(1, random.nextInt(100)), new numeric_line_bar.LinearSales.new(2, random.nextInt(100)), new numeric_line_bar.LinearSales.new(3, random.nextInt(100))]);
      let tableSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, desktopSalesData[$_get](0).sales), new numeric_line_bar.LinearSales.new(1, desktopSalesData[$_get](1).sales), new numeric_line_bar.LinearSales.new(2, desktopSalesData[$_get](2).sales), new numeric_line_bar.LinearSales.new(3, desktopSalesData[$_get](3).sales)]);
      let mobileSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, dart.notNull(tableSalesData[$_get](0).sales) * 2), new numeric_line_bar.LinearSales.new(1, dart.notNull(tableSalesData[$_get](1).sales) * 2), new numeric_line_bar.LinearSales.new(2, dart.notNull(tableSalesData[$_get](2).sales) * 2), new numeric_line_bar.LinearSales.new(3, dart.notNull(tableSalesData[$_get](3).sales) * 2)]);
      return JSArrayOfSeriesOfLinearSales$num().of([(t0 = SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: desktopSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customBar"), t0), (t0$ = SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: tableSalesData}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customBar"), t0$), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: mobileSalesData})]);
    }
    build(context) {
      return new combo_chart.NumericComboChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (LineRendererConfigOfnum()).new(), customSeriesRenderers: JSArrayOfSeriesRendererConfigOfnum().of([new (BarRendererConfigOfnum()).new({customRendererId: "customBar"})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0, t0$;
      let desktopSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, 5), new numeric_line_bar.LinearSales.new(1, 25), new numeric_line_bar.LinearSales.new(2, 100), new numeric_line_bar.LinearSales.new(3, 75)]);
      let tableSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, 5), new numeric_line_bar.LinearSales.new(1, 25), new numeric_line_bar.LinearSales.new(2, 100), new numeric_line_bar.LinearSales.new(3, 75)]);
      let mobileSalesData = JSArrayOfLinearSales().of([new numeric_line_bar.LinearSales.new(0, 10), new numeric_line_bar.LinearSales.new(1, 50), new numeric_line_bar.LinearSales.new(2, 200), new numeric_line_bar.LinearSales.new(3, 150)]);
      return JSArrayOfSeriesOfLinearSales$int().of([(t0 = SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: desktopSalesData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customBar"), t0), (t0$ = SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: tableSalesData}), t0$.setAttribute(core.String, series_renderer.rendererIdKey, "customBar"), t0$), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: mobileSalesData})]);
    }
  };
  (numeric_line_bar.NumericComboLineBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    numeric_line_bar.NumericComboLineBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = numeric_line_bar.NumericComboLineBarChart.prototype;
  dart.addTypeTests(numeric_line_bar.NumericComboLineBarChart);
  dart.setMethodSignature(numeric_line_bar.NumericComboLineBarChart, () => ({
    __proto__: dart.getMethods(numeric_line_bar.NumericComboLineBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(numeric_line_bar.NumericComboLineBarChart, "package:example/combo_chart/numeric_line_bar.dart");
  dart.setFieldSignature(numeric_line_bar.NumericComboLineBarChart, () => ({
    __proto__: dart.getFields(numeric_line_bar.NumericComboLineBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(numeric_line_bar, "LinearSales.year");
  const sales$ = dart.privateName(numeric_line_bar, "LinearSales.sales");
  numeric_line_bar.LinearSales = class LinearSales extends core.Object {
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
  (numeric_line_bar.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = numeric_line_bar.LinearSales.prototype;
  dart.addTypeTests(numeric_line_bar.LinearSales);
  dart.setLibraryUri(numeric_line_bar.LinearSales, "package:example/combo_chart/numeric_line_bar.dart");
  dart.setFieldSignature(numeric_line_bar.LinearSales, () => ({
    __proto__: dart.getFields(numeric_line_bar.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/combo_chart/numeric_line_bar", {
    "package:example/combo_chart/numeric_line_bar.dart": numeric_line_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["numeric_line_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,mDACT,yEAES;IAEb;;;AAOE,YAAW,mDAAyB;IACtC;;;AAIQ,mBAAa;AAEb,6BAAmB,2BACnB,qCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,qCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,qCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,qCAAY,GAAG,AAAO,MAAD,SAAS;AAG9B,2BAAiB,2BACjB,qCAAY,GAAG,AAAgB,AAAI,gBAAJ,QAAC,WAChC,qCAAY,GAAG,AAAgB,AAAI,gBAAJ,QAAC,WAChC,qCAAY,GAAG,AAAgB,AAAI,gBAAJ,QAAC,WAChC,qCAAY,GAAG,AAAgB,AAAI,gBAAJ,QAAC;AAGhC,4BAAkB,2BAClB,qCAAY,GAA2B,aAAxB,AAAc,AAAI,cAAJ,QAAC,YAAW,IACzC,qCAAY,GAA2B,aAAxB,AAAc,AAAI,cAAJ,QAAC,YAAW,IACzC,qCAAY,GAA2B,aAAxB,AAAc,AAAI,cAAJ,QAAC,YAAW,IACzC,qCAAY,GAA2B,aAAxB,AAAc,AAAI,cAAJ,QAAC,YAAW;AAG/C,YAAO,8CACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB,IAGpB,6BAAoB,+BAAe,0BACnC,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAI,0FACrC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,cAAc,IAGlB,8BAAoB,+BAAe,oBACnC,mCACI,mBACK,SAAC,GAAG,OAA8B,AAAM,4FACvC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,eAAe;IAE7B;UAI0B;AACxB,YAAW,uCAAyB,2BACvB,+BAGY,8DAEE,yCACjB,sDAEkB;IAE9B;;;AAIQ,6BAAmB,2BACnB,qCAAY,GAAG,IACf,qCAAY,GAAG,KACf,qCAAY,GAAG,MACf,qCAAY,GAAG;AAGf,2BAAiB,2BACjB,qCAAY,GAAG,IACf,qCAAY,GAAG,KACf,qCAAY,GAAG,MACf,qCAAY,GAAG;AAGf,4BAAkB,2BAClB,qCAAY,GAAG,KACf,qCAAY,GAAG,KACf,qCAAY,GAAG,MACf,qCAAY,GAAG;AAGrB,YAAO,8CACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB,IAGpB,6BAAoB,+BAAe,0BACnC,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAI,0FACrC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,cAAc,IAGlB,8BAAoB,+BAAe,oBACnC,mCACI,mBACK,SAAC,GAAG,OAA8B,AAAM,4FACvC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,eAAe;IAE7B;;4DAzI8B;QAAkB;;IAAlB;IAAkB;AAAhD;;EAAyD;;;;;;;;;;;;;;;IA8I/C;;;;;;IACA;;;;;;;+CAEO,MAAW;IAAX;IAAW;;EAAM","file":"numeric_line_bar.ddc.js"}');
  // Exports:
  return {
    combo_chart__numeric_line_bar: numeric_line_bar
  };
});

//# sourceMappingURL=numeric_line_bar.ddc.js.map
