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
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const axis = packages__charts_common__common.src__chart__cartesian__axis__axis;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const pan_and_zoom_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__pan_and_zoom_behavior;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const ordinal_initial_viewport = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(ordinal_initial_viewport.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(ordinal_initial_viewport.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [ordinal_initial_viewport.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [ordinal_initial_viewport.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [ordinal_initial_viewport.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
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
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 101,
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
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/ordinal_initial_viewport.dart"
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
  const seriesList$ = dart.privateName(ordinal_initial_viewport, "OrdinalInitialViewport.seriesList");
  const animate$ = dart.privateName(ordinal_initial_viewport, "OrdinalInitialViewport.animate");
  ordinal_initial_viewport.OrdinalInitialViewport = class OrdinalInitialViewport extends framework.StatelessWidget {
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
      return new ordinal_initial_viewport.OrdinalInitialViewport.new(ordinal_initial_viewport.OrdinalInitialViewport._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new ordinal_initial_viewport.OrdinalInitialViewport.new(ordinal_initial_viewport.OrdinalInitialViewport._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new ordinal_initial_viewport.OrdinalSales.new("2014", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2015", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2016", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2017", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2018", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2019", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2020", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2021", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2022", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2023", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2024", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2025", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2026", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2027", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2028", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2029", random.nextInt(100)), new ordinal_initial_viewport.OrdinalSales.new("2030", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({viewport: new axis.OrdinalViewport.new("2018", 4)}), behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new pan_and_zoom_behavior.PanAndZoomBehavior.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new ordinal_initial_viewport.OrdinalSales.new("2014", 5), new ordinal_initial_viewport.OrdinalSales.new("2015", 25), new ordinal_initial_viewport.OrdinalSales.new("2016", 100), new ordinal_initial_viewport.OrdinalSales.new("2017", 75), new ordinal_initial_viewport.OrdinalSales.new("2018", 33), new ordinal_initial_viewport.OrdinalSales.new("2019", 80), new ordinal_initial_viewport.OrdinalSales.new("2020", 21), new ordinal_initial_viewport.OrdinalSales.new("2021", 77), new ordinal_initial_viewport.OrdinalSales.new("2022", 8), new ordinal_initial_viewport.OrdinalSales.new("2023", 12), new ordinal_initial_viewport.OrdinalSales.new("2024", 42), new ordinal_initial_viewport.OrdinalSales.new("2025", 70), new ordinal_initial_viewport.OrdinalSales.new("2026", 77), new ordinal_initial_viewport.OrdinalSales.new("2027", 55), new ordinal_initial_viewport.OrdinalSales.new("2028", 19), new ordinal_initial_viewport.OrdinalSales.new("2029", 66), new ordinal_initial_viewport.OrdinalSales.new("2030", 27)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (ordinal_initial_viewport.OrdinalInitialViewport.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    ordinal_initial_viewport.OrdinalInitialViewport.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ordinal_initial_viewport.OrdinalInitialViewport.prototype;
  dart.addTypeTests(ordinal_initial_viewport.OrdinalInitialViewport);
  dart.setMethodSignature(ordinal_initial_viewport.OrdinalInitialViewport, () => ({
    __proto__: dart.getMethods(ordinal_initial_viewport.OrdinalInitialViewport.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ordinal_initial_viewport.OrdinalInitialViewport, "package:example/axes/ordinal_initial_viewport.dart");
  dart.setFieldSignature(ordinal_initial_viewport.OrdinalInitialViewport, () => ({
    __proto__: dart.getFields(ordinal_initial_viewport.OrdinalInitialViewport.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(ordinal_initial_viewport, "OrdinalSales.year");
  const sales$ = dart.privateName(ordinal_initial_viewport, "OrdinalSales.sales");
  ordinal_initial_viewport.OrdinalSales = class OrdinalSales extends core.Object {
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
  (ordinal_initial_viewport.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = ordinal_initial_viewport.OrdinalSales.prototype;
  dart.addTypeTests(ordinal_initial_viewport.OrdinalSales);
  dart.setLibraryUri(ordinal_initial_viewport.OrdinalSales, "package:example/axes/ordinal_initial_viewport.dart");
  dart.setFieldSignature(ordinal_initial_viewport.OrdinalSales, () => ({
    __proto__: dart.getFields(ordinal_initial_viewport.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/ordinal_initial_viewport", {
    "package:example/axes/ordinal_initial_viewport.dart": ordinal_initial_viewport
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ordinal_initial_viewport.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+B4B;;;;;;IACf;;;;;;;;AAMT,YAAW,yDACT,+EAES;IAEb;;;AAOE,YAAW,yDAAuB;IACpC;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,8CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,kEACT,4BACS,0BAGO,qDACE,6BAAuB,QAAQ,iBAGtC,4CAAK;IAEpB;;AAIQ,iBAAO,4BACP,8CAAa,QAAQ,IACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,MACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,IACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ,KACrB,8CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;kEArG4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IA0G1C;;;;;;IACH;;;;;;;wDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"ordinal_initial_viewport.ddc.js"}');
  // Exports:
  return {
    axes__ordinal_initial_viewport: ordinal_initial_viewport
  };
});

//# sourceMappingURL=ordinal_initial_viewport.ddc.js.map
