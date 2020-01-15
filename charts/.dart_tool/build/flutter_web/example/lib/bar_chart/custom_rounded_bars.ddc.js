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
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const custom_rounded_bars = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(custom_rounded_bars.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(custom_rounded_bars.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [custom_rounded_bars.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [custom_rounded_bars.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [custom_rounded_bars.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: bar_renderer_config.ConstCornerStrategy.prototype,
        [ConstCornerStrategy_radius]: 30
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/custom_rounded_bars.dart"
      });
    }
  });
  const ConstCornerStrategy_radius = dart.privateName(bar_renderer_config, "ConstCornerStrategy.radius");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C5;
  let C2;
  let C1;
  const seriesList$ = dart.privateName(custom_rounded_bars, "CustomRoundedBars.seriesList");
  const animate$ = dart.privateName(custom_rounded_bars, "CustomRoundedBars.animate");
  custom_rounded_bars.CustomRoundedBars = class CustomRoundedBars extends framework.StatelessWidget {
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
      return new custom_rounded_bars.CustomRoundedBars.new(custom_rounded_bars.CustomRoundedBars._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new custom_rounded_bars.CustomRoundedBars.new(custom_rounded_bars.CustomRoundedBars._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new custom_rounded_bars.OrdinalSales.new("2014", random.nextInt(100)), new custom_rounded_bars.OrdinalSales.new("2015", random.nextInt(100)), new custom_rounded_bars.OrdinalSales.new("2016", random.nextInt(100)), new custom_rounded_bars.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, defaultRenderer: new (BarRendererConfigOfString()).new({cornerStrategy: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new custom_rounded_bars.OrdinalSales.new("2014", 5), new custom_rounded_bars.OrdinalSales.new("2015", 25), new custom_rounded_bars.OrdinalSales.new("2016", 100), new custom_rounded_bars.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (custom_rounded_bars.CustomRoundedBars.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    custom_rounded_bars.CustomRoundedBars.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_rounded_bars.CustomRoundedBars.prototype;
  dart.addTypeTests(custom_rounded_bars.CustomRoundedBars);
  dart.setMethodSignature(custom_rounded_bars.CustomRoundedBars, () => ({
    __proto__: dart.getMethods(custom_rounded_bars.CustomRoundedBars.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_rounded_bars.CustomRoundedBars, "package:example/bar_chart/custom_rounded_bars.dart");
  dart.setFieldSignature(custom_rounded_bars.CustomRoundedBars, () => ({
    __proto__: dart.getFields(custom_rounded_bars.CustomRoundedBars.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(custom_rounded_bars, "OrdinalSales.year");
  const sales$ = dart.privateName(custom_rounded_bars, "OrdinalSales.sales");
  custom_rounded_bars.OrdinalSales = class OrdinalSales extends core.Object {
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
  (custom_rounded_bars.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = custom_rounded_bars.OrdinalSales.prototype;
  dart.addTypeTests(custom_rounded_bars.OrdinalSales);
  dart.setLibraryUri(custom_rounded_bars.OrdinalSales, "package:example/bar_chart/custom_rounded_bars.dart");
  dart.setFieldSignature(custom_rounded_bars.OrdinalSales, () => ({
    __proto__: dart.getFields(custom_rounded_bars.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/custom_rounded_bars", {
    "package:example/bar_chart/custom_rounded_bars.dart": custom_rounded_bars
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_rounded_bars.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,+CACT,qEAES;IAEb;;;AAOE,YAAW,+CAAkB;IAC/B;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,yCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,yCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,yCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,yCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,kEACT,4BACS,+BACY;IAOzB;;AAIQ,iBAAO,4BACP,yCAAa,QAAQ,IACrB,yCAAa,QAAQ,KACrB,yCAAa,QAAQ,MACrB,yCAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;wDA1EuB;QAAkB;;IAAlB;IAAkB;AAAzC;;EAAkD;;;;;;;;;;;;;;;IA+ErC;;;;;;IACH;;;;;;;mDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"custom_rounded_bars.ddc.js"}');
  // Exports:
  return {
    bar_chart__custom_rounded_bars: custom_rounded_bars
  };
});

//# sourceMappingURL=custom_rounded_bars.ddc.js.map
