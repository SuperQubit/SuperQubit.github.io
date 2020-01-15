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
  const initial_hint_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__initial_hint_behavior;
  const pan_and_zoom_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__pan_and_zoom_behavior;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const initial_hint_animation = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(initial_hint_animation.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(initial_hint_animation.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [initial_hint_animation.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [initial_hint_animation.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [initial_hint_animation.OrdinalSales, core.int])))();
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
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/initial_hint_animation.dart"
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
  let C6;
  let C1;
  let C0;
  const seriesList$ = dart.privateName(initial_hint_animation, "InitialHintAnimation.seriesList");
  const animate$ = dart.privateName(initial_hint_animation, "InitialHintAnimation.animate");
  initial_hint_animation.InitialHintAnimation = class InitialHintAnimation extends framework.StatelessWidget {
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
      return new initial_hint_animation.InitialHintAnimation.new(initial_hint_animation.InitialHintAnimation._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new initial_hint_animation.InitialHintAnimation.new(initial_hint_animation.InitialHintAnimation._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new initial_hint_animation.OrdinalSales.new("2014", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2015", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2016", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2017", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2018", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2019", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2020", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2021", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2022", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2023", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2024", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2025", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2026", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2027", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2028", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2029", random.nextInt(100)), new initial_hint_animation.OrdinalSales.new("2030", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, animationDuration: core.Duration.zero, domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({viewport: new axis.OrdinalViewport.new("2018", 4)}), behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new initial_hint_behavior.InitialHintBehavior.new({maxHintTranslate: 4.0}), new pan_and_zoom_behavior.PanAndZoomBehavior.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new initial_hint_animation.OrdinalSales.new("2014", 5), new initial_hint_animation.OrdinalSales.new("2015", 25), new initial_hint_animation.OrdinalSales.new("2016", 100), new initial_hint_animation.OrdinalSales.new("2017", 75), new initial_hint_animation.OrdinalSales.new("2018", 33), new initial_hint_animation.OrdinalSales.new("2019", 80), new initial_hint_animation.OrdinalSales.new("2020", 21), new initial_hint_animation.OrdinalSales.new("2021", 77), new initial_hint_animation.OrdinalSales.new("2022", 8), new initial_hint_animation.OrdinalSales.new("2023", 12), new initial_hint_animation.OrdinalSales.new("2024", 42), new initial_hint_animation.OrdinalSales.new("2025", 70), new initial_hint_animation.OrdinalSales.new("2026", 77), new initial_hint_animation.OrdinalSales.new("2027", 55), new initial_hint_animation.OrdinalSales.new("2028", 19), new initial_hint_animation.OrdinalSales.new("2029", 66), new initial_hint_animation.OrdinalSales.new("2030", 27)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (initial_hint_animation.InitialHintAnimation.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    initial_hint_animation.InitialHintAnimation.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = initial_hint_animation.InitialHintAnimation.prototype;
  dart.addTypeTests(initial_hint_animation.InitialHintAnimation);
  dart.setMethodSignature(initial_hint_animation.InitialHintAnimation, () => ({
    __proto__: dart.getMethods(initial_hint_animation.InitialHintAnimation.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(initial_hint_animation.InitialHintAnimation, "package:example/behaviors/initial_hint_animation.dart");
  dart.setFieldSignature(initial_hint_animation.InitialHintAnimation, () => ({
    __proto__: dart.getFields(initial_hint_animation.InitialHintAnimation.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(initial_hint_animation, "OrdinalSales.year");
  const sales$ = dart.privateName(initial_hint_animation, "OrdinalSales.sales");
  initial_hint_animation.OrdinalSales = class OrdinalSales extends core.Object {
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
  (initial_hint_animation.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = initial_hint_animation.OrdinalSales.prototype;
  dart.addTypeTests(initial_hint_animation.OrdinalSales);
  dart.setLibraryUri(initial_hint_animation.OrdinalSales, "package:example/behaviors/initial_hint_animation.dart");
  dart.setFieldSignature(initial_hint_animation.OrdinalSales, () => ({
    __proto__: dart.getFields(initial_hint_animation.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/initial_hint_animation", {
    "package:example/behaviors/initial_hint_animation.dart": initial_hint_animation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["initial_hint_animation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkD4B;;;;;;IACf;;;;;;;;AAMT,YAAW,qDACT,2EAES;IAEb;;;AAOE,YAAW,qDAAqB;IAClC;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,kEACT,4BACS,iCAImB,gCAGZ,qDACE,6BAAuB,QAAQ,iBACtC,4CAKL,qEAA6C,OAG7C;IAGV;;AAIQ,iBAAO,4BACP,4CAAa,QAAQ,IACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,MACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,IACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ,KACrB,4CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;8DAhH0B;QAAkB;;IAAlB;IAAkB;AAA5C;;EAAqD;;;;;;;;;;;;;;;IAqHxC;;;;;;IACH;;;;;;;sDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"initial_hint_animation.ddc.js"}');
  // Exports:
  return {
    behaviors__initial_hint_animation: initial_hint_animation
  };
});

//# sourceMappingURL=initial_hint_animation.ddc.js.map
