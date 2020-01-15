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
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const simple = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(simple.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(simple.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [simple.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [simple.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [simple.OrdinalSales, core.int])))();
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
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/simple.dart"
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
  let C1;
  let C0;
  const seriesList$ = dart.privateName(simple, "SimpleBarChart.seriesList");
  const animate$ = dart.privateName(simple, "SimpleBarChart.animate");
  simple.SimpleBarChart = class SimpleBarChart extends framework.StatelessWidget {
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
      return new simple.SimpleBarChart.new(simple.SimpleBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new simple.SimpleBarChart.new(simple.SimpleBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new simple.OrdinalSales.new("2014", random.nextInt(100)), new simple.OrdinalSales.new("2015", random.nextInt(100)), new simple.OrdinalSales.new("2016", random.nextInt(100)), new simple.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new simple.OrdinalSales.new("2014", 5), new simple.OrdinalSales.new("2015", 25), new simple.OrdinalSales.new("2016", 100), new simple.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (simple.SimpleBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    simple.SimpleBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple.SimpleBarChart.prototype;
  dart.addTypeTests(simple.SimpleBarChart);
  dart.setMethodSignature(simple.SimpleBarChart, () => ({
    __proto__: dart.getMethods(simple.SimpleBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple.SimpleBarChart, "package:example/bar_chart/simple.dart");
  dart.setFieldSignature(simple.SimpleBarChart, () => ({
    __proto__: dart.getFields(simple.SimpleBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(simple, "OrdinalSales.year");
  const sales$ = dart.privateName(simple, "OrdinalSales.sales");
  simple.OrdinalSales = class OrdinalSales extends core.Object {
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
  (simple.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = simple.OrdinalSales.prototype;
  dart.addTypeTests(simple.OrdinalSales);
  dart.setLibraryUri(simple.OrdinalSales, "package:example/bar_chart/simple.dart");
  dart.setFieldSignature(simple.OrdinalSales, () => ({
    __proto__: dart.getFields(simple.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/simple", {
    "package:example/bar_chart/simple.dart": simple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,+BACT,qDAES;IAEb;;;AAOE,YAAW,+BAAe;IAC5B;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,4BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,4BAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,kEACT,4BACS;IAEb;;AAIQ,iBAAO,4BACP,4BAAa,QAAQ,IACrB,4BAAa,QAAQ,KACrB,4BAAa,QAAQ,MACrB,4BAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,kBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;wCApEoB;QAAkB;;IAAlB;IAAkB;AAAtC;;EAA+C;;;;;;;;;;;;;;;IAyElC;;;;;;IACH;;;;;;;sCAEQ,MAAW;IAAX;IAAW;;EAAM","file":"simple.ddc.js"}');
  // Exports:
  return {
    bar_chart__simple: simple
  };
});

//# sourceMappingURL=simple.ddc.js.map
