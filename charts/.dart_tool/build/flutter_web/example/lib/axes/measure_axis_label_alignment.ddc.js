define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const gridline_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__gridline_draw_strategy;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const measure_axis_label_alignment = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(measure_axis_label_alignment.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(measure_axis_label_alignment.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [measure_axis_label_alignment.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [measure_axis_label_alignment.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let GridlineRendererSpecOfnum = () => (GridlineRendererSpecOfnum = dart.constFn(gridline_draw_strategy.GridlineRendererSpec$(core.num)))();
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
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/measure_axis_label_alignment.dart"
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
  const seriesList$ = dart.privateName(measure_axis_label_alignment, "MeasureAxisLabelAlignment.seriesList");
  const animate$ = dart.privateName(measure_axis_label_alignment, "MeasureAxisLabelAlignment.animate");
  measure_axis_label_alignment.MeasureAxisLabelAlignment = class MeasureAxisLabelAlignment extends framework.StatelessWidget {
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
      return new measure_axis_label_alignment.MeasureAxisLabelAlignment.new(measure_axis_label_alignment.MeasureAxisLabelAlignment._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new measure_axis_label_alignment.MeasureAxisLabelAlignment.new(measure_axis_label_alignment.MeasureAxisLabelAlignment._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new measure_axis_label_alignment.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new measure_axis_label_alignment.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new measure_axis_label_alignment.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new measure_axis_label_alignment.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({renderSpec: new (GridlineRendererSpecOfnum()).new({labelAnchor: axis_spec.TickLabelAnchor.before, labelJustification: axis_spec.TickLabelJustification.outside})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let globalSalesData = JSArrayOfOrdinalSales().of([new measure_axis_label_alignment.OrdinalSales.new("2014", 5000), new measure_axis_label_alignment.OrdinalSales.new("2015", 25000), new measure_axis_label_alignment.OrdinalSales.new("2016", 100000), new measure_axis_label_alignment.OrdinalSales.new("2017", 750000)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
  };
  (measure_axis_label_alignment.MeasureAxisLabelAlignment.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    measure_axis_label_alignment.MeasureAxisLabelAlignment.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = measure_axis_label_alignment.MeasureAxisLabelAlignment.prototype;
  dart.addTypeTests(measure_axis_label_alignment.MeasureAxisLabelAlignment);
  dart.setMethodSignature(measure_axis_label_alignment.MeasureAxisLabelAlignment, () => ({
    __proto__: dart.getMethods(measure_axis_label_alignment.MeasureAxisLabelAlignment.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(measure_axis_label_alignment.MeasureAxisLabelAlignment, "package:example/axes/measure_axis_label_alignment.dart");
  dart.setFieldSignature(measure_axis_label_alignment.MeasureAxisLabelAlignment, () => ({
    __proto__: dart.getFields(measure_axis_label_alignment.MeasureAxisLabelAlignment.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(measure_axis_label_alignment, "OrdinalSales.year");
  const sales$ = dart.privateName(measure_axis_label_alignment, "OrdinalSales.sales");
  measure_axis_label_alignment.OrdinalSales = class OrdinalSales extends core.Object {
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
  (measure_axis_label_alignment.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = measure_axis_label_alignment.OrdinalSales.prototype;
  dart.addTypeTests(measure_axis_label_alignment.OrdinalSales);
  dart.setLibraryUri(measure_axis_label_alignment.OrdinalSales, "package:example/axes/measure_axis_label_alignment.dart");
  dart.setFieldSignature(measure_axis_label_alignment.OrdinalSales, () => ({
    __proto__: dart.getFields(measure_axis_label_alignment.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/measure_axis_label_alignment", {
    "package:example/axes/measure_axis_label_alignment.dart": measure_axis_label_alignment
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["measure_axis_label_alignment.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,gEACT,sFAES;IAEb;;;AAOE,YAAW,gEAA0B;IACvC;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,kDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAGjD,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,kCAKe,uDACJ,oDAMkB,sDAMc;IAGxD;;AAIQ,4BAAkB,4BAClB,kDAAa,QAAQ,OACrB,kDAAa,QAAQ,QACrB,kDAAa,QAAQ,SACrB,kDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;yEApF+B;QAAkB;;IAAlB;IAAkB;AAAjD;;EAA0D;;;;;;;;;;;;;;;IAyF7C;;;;;;IACH;;;;;;;4DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"measure_axis_label_alignment.ddc.js"}');
  // Exports:
  return {
    axes__measure_axis_label_alignment: measure_axis_label_alignment
  };
});

//# sourceMappingURL=measure_axis_label_alignment.ddc.js.map
