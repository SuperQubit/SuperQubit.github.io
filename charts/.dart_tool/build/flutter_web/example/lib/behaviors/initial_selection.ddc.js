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
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const initial_selection = packages__charts_flutter__flutter.src__behaviors__initial_selection;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const initial_selection$ = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(initial_selection$.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(initial_selection$.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [initial_selection$.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [initial_selection$.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [initial_selection$.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let SeriesDatumConfigOfString = () => (SeriesDatumConfigOfString = dart.constFn(series_datum.SeriesDatumConfig$(core.String)))();
  let JSArrayOfSeriesDatumConfig = () => (JSArrayOfSeriesDatumConfig = dart.constFn(_interceptors.JSArray$(series_datum.SeriesDatumConfig)))();
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
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 84,
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
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/initial_selection.dart"
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
  const seriesList$ = dart.privateName(initial_selection$, "InitialSelection.seriesList");
  const animate$ = dart.privateName(initial_selection$, "InitialSelection.animate");
  initial_selection$.InitialSelection = class InitialSelection extends framework.StatelessWidget {
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
      return new initial_selection$.InitialSelection.new(initial_selection$.InitialSelection._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new initial_selection$.InitialSelection.new(initial_selection$.InitialSelection._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new initial_selection$.OrdinalSales.new("2014", random.nextInt(100)), new initial_selection$.OrdinalSales.new("2015", random.nextInt(100)), new initial_selection$.OrdinalSales.new("2016", random.nextInt(100)), new initial_selection$.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new initial_selection.InitialSelection.new({selectedDataConfig: JSArrayOfSeriesDatumConfig().of([new (SeriesDatumConfigOfString()).new("Sales", "2016")])})]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new initial_selection$.OrdinalSales.new("2014", 5), new initial_selection$.OrdinalSales.new("2015", 25), new initial_selection$.OrdinalSales.new("2016", 100), new initial_selection$.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (initial_selection$.InitialSelection.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    initial_selection$.InitialSelection.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = initial_selection$.InitialSelection.prototype;
  dart.addTypeTests(initial_selection$.InitialSelection);
  dart.setMethodSignature(initial_selection$.InitialSelection, () => ({
    __proto__: dart.getMethods(initial_selection$.InitialSelection.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(initial_selection$.InitialSelection, "package:example/behaviors/initial_selection.dart");
  dart.setFieldSignature(initial_selection$.InitialSelection, () => ({
    __proto__: dart.getFields(initial_selection$.InitialSelection.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(initial_selection$, "OrdinalSales.year");
  const sales$ = dart.privateName(initial_selection$, "OrdinalSales.sales");
  initial_selection$.OrdinalSales = class OrdinalSales extends core.Object {
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
  (initial_selection$.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = initial_selection$.OrdinalSales.prototype;
  dart.addTypeTests(initial_selection$.OrdinalSales);
  dart.setLibraryUri(initial_selection$.OrdinalSales, "package:example/behaviors/initial_selection.dart");
  dart.setFieldSignature(initial_selection$.OrdinalSales, () => ({
    __proto__: dart.getFields(initial_selection$.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/initial_selection", {
    "package:example/behaviors/initial_selection.dart": initial_selection$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["initial_selection.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiC4B;;;;;;IACf;;;;;;;;AAMT,YAAW,6CACT,mEAES;IAEb;;;AAOE,YAAW,6CAAiB;IAC9B;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,wCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,kEACT,4BACS,yBACE,4CAWL,gEAA4C,iCAC1C,sCAAiC,SAAS;IAItD;;AAIQ,iBAAO,4BACP,wCAAa,QAAQ,IACrB,wCAAa,QAAQ,KACrB,wCAAa,QAAQ,MACrB,wCAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;sDAnFsB;QAAkB;;IAAlB;IAAkB;AAAxC;;EAAiD;;;;;;;;;;;;;;;IAwFpC;;;;;;IACH;;;;;;;kDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"initial_selection.ddc.js"}');
  // Exports:
  return {
    behaviors__initial_selection: initial_selection$
  };
});

//# sourceMappingURL=initial_selection.ddc.js.map
