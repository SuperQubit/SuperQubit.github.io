define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const axis = packages__charts_common__common.src__chart__cartesian__axis__axis;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const bar_secondary_axis_only = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(bar_secondary_axis_only.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(bar_secondary_axis_only.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [bar_secondary_axis_only.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [bar_secondary_axis_only.OrdinalSales, core.int])))();
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
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 82,
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
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/bar_secondary_axis_only.dart"
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
  const seriesList$ = dart.privateName(bar_secondary_axis_only, "BarChartWithSecondaryAxisOnly.seriesList");
  const animate$ = dart.privateName(bar_secondary_axis_only, "BarChartWithSecondaryAxisOnly.animate");
  bar_secondary_axis_only.BarChartWithSecondaryAxisOnly = class BarChartWithSecondaryAxisOnly extends framework.StatelessWidget {
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
      return new bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.new(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.new(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new bar_secondary_axis_only.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new bar_secondary_axis_only.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new bar_secondary_axis_only.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new bar_secondary_axis_only.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([(t0 = SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "secondaryMeasureAxisId"), t0)]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let globalSalesData = JSArrayOfOrdinalSales().of([new bar_secondary_axis_only.OrdinalSales.new("2014", 500), new bar_secondary_axis_only.OrdinalSales.new("2015", 2500), new bar_secondary_axis_only.OrdinalSales.new("2016", 1000), new bar_secondary_axis_only.OrdinalSales.new("2017", 7500)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([(t0 = SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "secondaryMeasureAxisId"), t0)]);
    }
  };
  (bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.prototype;
  dart.addTypeTests(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly);
  dart.setMethodSignature(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly, () => ({
    __proto__: dart.getMethods(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly, "package:example/axes/bar_secondary_axis_only.dart");
  dart.setFieldSignature(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly, () => ({
    __proto__: dart.getFields(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(bar_secondary_axis_only.BarChartWithSecondaryAxisOnly, {
    /*bar_secondary_axis_only.BarChartWithSecondaryAxisOnly.secondaryMeasureAxisId*/get secondaryMeasureAxisId() {
      return "secondaryMeasureAxisId";
    }
  });
  const year$ = dart.privateName(bar_secondary_axis_only, "OrdinalSales.year");
  const sales$ = dart.privateName(bar_secondary_axis_only, "OrdinalSales.sales");
  bar_secondary_axis_only.OrdinalSales = class OrdinalSales extends core.Object {
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
  (bar_secondary_axis_only.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = bar_secondary_axis_only.OrdinalSales.prototype;
  dart.addTypeTests(bar_secondary_axis_only.OrdinalSales);
  dart.setLibraryUri(bar_secondary_axis_only.OrdinalSales, "package:example/axes/bar_secondary_axis_only.dart");
  dart.setFieldSignature(bar_secondary_axis_only.OrdinalSales, () => ({
    __proto__: dart.getFields(bar_secondary_axis_only.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/bar_secondary_axis_only", {
    "package:example/axes/bar_secondary_axis_only.dart": bar_secondary_axis_only
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bar_secondary_axis_only.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgC4B;;;;;;IACf;;;;;;;;AAKT,YAAW,+DACT,qFAES;IAEb;;;AAOE,YAAW,+DAA8B;IAC3C;;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,6CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,6CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,6CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,6CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAGjD,YAAO,kDACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAGnB,6BAAoB;IAE5B;UAI0B;AACxB,YAAW,kEACT,4BACS;IAEb;;;AAIQ,4BAAkB,4BAClB,6CAAa,QAAQ,MACrB,6CAAa,QAAQ,OACrB,6CAAa,QAAQ,OACrB,6CAAa,QAAQ;AAG3B,YAAO,kDACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,IAGnB,6BAAoB;IAE5B;;wEArEmC;QAAkB;;IAAlB;IAAkB;AAArD;;EAA8D;;;;;;;;;;;;;MAJjD,4EAAsB;;;;;;;IA8EtB;;;;;;IACH;;;;;;;uDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"bar_secondary_axis_only.ddc.js"}');
  // Exports:
  return {
    axes__bar_secondary_axis_only: bar_secondary_axis_only
  };
});

//# sourceMappingURL=bar_secondary_axis_only.ddc.js.map
