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
  const series_renderer_config = packages__charts_common__common.src__chart__common__series_renderer_config;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const area_and_line = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(area_and_line.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(area_and_line.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [area_and_line.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [area_and_line.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(area_and_line.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let LineRendererConfigOfnum = () => (LineRendererConfigOfnum = dart.constFn(line_renderer_config.LineRendererConfig$(core.num)))();
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
        [_Location_column]: 33,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSeriesRenderers",
        [_Location_column]: 9,
        [_Location_line]: 89,
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
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/area_and_line.dart"
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
  const seriesList$ = dart.privateName(area_and_line, "AreaAndLineChart.seriesList");
  const animate$ = dart.privateName(area_and_line, "AreaAndLineChart.animate");
  area_and_line.AreaAndLineChart = class AreaAndLineChart extends framework.StatelessWidget {
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
      return new area_and_line.AreaAndLineChart.new(area_and_line.AreaAndLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new area_and_line.AreaAndLineChart.new(area_and_line.AreaAndLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let myFakeDesktopData = JSArrayOfLinearSales().of([new area_and_line.LinearSales.new(0, random.nextInt(100)), new area_and_line.LinearSales.new(1, random.nextInt(100)), new area_and_line.LinearSales.new(2, random.nextInt(100)), new area_and_line.LinearSales.new(3, random.nextInt(100))]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new area_and_line.LinearSales.new(0, random.nextInt(100)), new area_and_line.LinearSales.new(1, random.nextInt(100)), new area_and_line.LinearSales.new(2, random.nextInt(100)), new area_and_line.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), (t0 = SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customArea"), t0)]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, customSeriesRenderers: JSArrayOfSeriesRendererConfigOfnum().of([new (LineRendererConfigOfnum()).new({customRendererId: "customArea", includeArea: true, stacked: true})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let myFakeDesktopData = JSArrayOfLinearSales().of([new area_and_line.LinearSales.new(0, 5), new area_and_line.LinearSales.new(1, 25), new area_and_line.LinearSales.new(2, 100), new area_and_line.LinearSales.new(3, 75)]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new area_and_line.LinearSales.new(0, 10), new area_and_line.LinearSales.new(1, 50), new area_and_line.LinearSales.new(2, 200), new area_and_line.LinearSales.new(3, 150)]);
      return JSArrayOfSeriesOfLinearSales$int().of([(t0 = SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), t0.setAttribute(core.String, series_renderer.rendererIdKey, "customArea"), t0), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData})]);
    }
  };
  (area_and_line.AreaAndLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    area_and_line.AreaAndLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = area_and_line.AreaAndLineChart.prototype;
  dart.addTypeTests(area_and_line.AreaAndLineChart);
  dart.setMethodSignature(area_and_line.AreaAndLineChart, () => ({
    __proto__: dart.getMethods(area_and_line.AreaAndLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(area_and_line.AreaAndLineChart, "package:example/line_chart/area_and_line.dart");
  dart.setFieldSignature(area_and_line.AreaAndLineChart, () => ({
    __proto__: dart.getFields(area_and_line.AreaAndLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(area_and_line, "LinearSales.year");
  const sales$ = dart.privateName(area_and_line, "LinearSales.sales");
  area_and_line.LinearSales = class LinearSales extends core.Object {
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
  (area_and_line.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = area_and_line.LinearSales.prototype;
  dart.addTypeTests(area_and_line.LinearSales);
  dart.setLibraryUri(area_and_line.LinearSales, "package:example/line_chart/area_and_line.dart");
  dart.setFieldSignature(area_and_line.LinearSales, () => ({
    __proto__: dart.getFields(area_and_line.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/area_and_line", {
    "package:example/line_chart/area_and_line.dart": area_and_line
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["area_and_line.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,wCACT,8DAES;IAEb;;;AAOE,YAAW,wCAAiB;IAC9B;;;AAIQ,mBAAa;AAEb,8BAAoB,2BACpB,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS;AAGhC,6BAAmB,2BACjB,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,iBAAiB,UAErB,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAM,4FACvC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB,IAGpB,6BAAoB,+BAAe;IAE3C;UAI0B;AACxB,YAAW,8BAAiB,2BACf,qCACc,yCACjB,uDAEkB,2BACL,eACJ;IAErB;;;AAIQ,8BAAoB,2BACpB,kCAAY,GAAG,IACf,kCAAY,GAAG,KACf,kCAAY,GAAG,MACf,kCAAY,GAAG;AAGjB,6BAAmB,2BACjB,kCAAY,GAAG,KACf,kCAAY,GAAG,KACf,kCAAY,GAAG,MACf,kCAAY,GAAG;AAGrB,YAAO,8CACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,iBAAiB,IAGrB,6BAAoB,+BAAe,oBACnC,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAM,4FACvC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB;IAG5B;;iDAzGsB;QAAkB;;IAAlB;IAAkB;AAAxC;;EAAiD;;;;;;;;;;;;;;;IA8GvC;;;;;;IACA;;;;;;;4CAEO,MAAW;IAAX;IAAW;;EAAM","file":"area_and_line.ddc.js"}');
  // Exports:
  return {
    line_chart__area_and_line: area_and_line
  };
});

//# sourceMappingURL=area_and_line.ddc.js.map
