define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const none_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__none_draw_strategy;
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const hidden_ticks_and_labels_axis = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(hidden_ticks_and_labels_axis.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(hidden_ticks_and_labels_axis.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [hidden_ticks_and_labels_axis.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [hidden_ticks_and_labels_axis.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let NoneRenderSpecOfnum = () => (NoneRenderSpecOfnum = dart.constFn(none_draw_strategy.NoneRenderSpec$(core.num)))();
  let NoneRenderSpecOfString = () => (NoneRenderSpecOfString = dart.constFn(none_draw_strategy.NoneRenderSpec$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 84,
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
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/hidden_ticks_and_labels_axis.dart"
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
  const seriesList$ = dart.privateName(hidden_ticks_and_labels_axis, "HiddenTicksAndLabelsAxis.seriesList");
  const animate$ = dart.privateName(hidden_ticks_and_labels_axis, "HiddenTicksAndLabelsAxis.animate");
  hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis = class HiddenTicksAndLabelsAxis extends framework.StatelessWidget {
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
      return new hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.new(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.new(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new hidden_ticks_and_labels_axis.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new hidden_ticks_and_labels_axis.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new hidden_ticks_and_labels_axis.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new hidden_ticks_and_labels_axis.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({renderSpec: new (NoneRenderSpecOfnum()).new()}), domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({showAxisLine: true, renderSpec: new (NoneRenderSpecOfString()).new()}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let globalSalesData = JSArrayOfOrdinalSales().of([new hidden_ticks_and_labels_axis.OrdinalSales.new("2014", 5000), new hidden_ticks_and_labels_axis.OrdinalSales.new("2015", 25000), new hidden_ticks_and_labels_axis.OrdinalSales.new("2016", 100000), new hidden_ticks_and_labels_axis.OrdinalSales.new("2017", 750000)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
  };
  (hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.prototype;
  dart.addTypeTests(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis);
  dart.setMethodSignature(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis, () => ({
    __proto__: dart.getMethods(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis, "package:example/axes/hidden_ticks_and_labels_axis.dart");
  dart.setFieldSignature(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis, () => ({
    __proto__: dart.getFields(hidden_ticks_and_labels_axis.HiddenTicksAndLabelsAxis.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(hidden_ticks_and_labels_axis, "OrdinalSales.year");
  const sales$ = dart.privateName(hidden_ticks_and_labels_axis, "OrdinalSales.sales");
  hidden_ticks_and_labels_axis.OrdinalSales = class OrdinalSales extends core.Object {
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
  (hidden_ticks_and_labels_axis.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = hidden_ticks_and_labels_axis.OrdinalSales.prototype;
  dart.addTypeTests(hidden_ticks_and_labels_axis.OrdinalSales);
  dart.setLibraryUri(hidden_ticks_and_labels_axis.OrdinalSales, "package:example/axes/hidden_ticks_and_labels_axis.dart");
  dart.setFieldSignature(hidden_ticks_and_labels_axis.OrdinalSales, () => ({
    __proto__: dart.getFields(hidden_ticks_and_labels_axis.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/hidden_ticks_and_labels_axis", {
    "package:example/axes/hidden_ticks_and_labels_axis.dart": hidden_ticks_and_labels_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hidden_ticks_and_labels_axis.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,+DACT,qFAES;IAEb;;;AAOE,YAAW,+DAAyB;IACtC;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAGjD,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,kCAOD,uDAAuC,iDAK/B,yDAEE,kBAEE;IAExB;;AAIQ,4BAAkB,4BAClB,kDAAa,QAAQ,OACrB,kDAAa,QAAQ,QACrB,kDAAa,QAAQ,SACrB,kDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;wEAjF8B;QAAkB;;IAAlB;IAAkB;AAAhD;;EAAyD;;;;;;;;;;;;;;;IAsF5C;;;;;;IACH;;;;;;;4DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"hidden_ticks_and_labels_axis.ddc.js"}');
  // Exports:
  return {
    axes__hidden_ticks_and_labels_axis: hidden_ticks_and_labels_axis
  };
});

//# sourceMappingURL=hidden_ticks_and_labels_axis.ddc.js.map
