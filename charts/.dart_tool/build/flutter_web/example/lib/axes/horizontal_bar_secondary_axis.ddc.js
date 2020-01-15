define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const axis = packages__charts_common__common.src__chart__cartesian__axis__axis;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const horizontal_bar_secondary_axis = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(horizontal_bar_secondary_axis.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(horizontal_bar_secondary_axis.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [horizontal_bar_secondary_axis.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [horizontal_bar_secondary_axis.OrdinalSales, core.int])))();
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
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vertical",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/horizontal_bar_secondary_axis.dart"
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
  let C7;
  let C1;
  let C0;
  const seriesList$ = dart.privateName(horizontal_bar_secondary_axis, "HorizontalBarChartWithSecondaryAxis.seriesList");
  const animate$ = dart.privateName(horizontal_bar_secondary_axis, "HorizontalBarChartWithSecondaryAxis.animate");
  horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis = class HorizontalBarChartWithSecondaryAxis extends framework.StatelessWidget {
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
      return new horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.new(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.new(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let t0;
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new horizontal_bar_secondary_axis.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new horizontal_bar_secondary_axis.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new horizontal_bar_secondary_axis.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new horizontal_bar_secondary_axis.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      let losAngelesSalesData = JSArrayOfOrdinalSales().of([new horizontal_bar_secondary_axis.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_bar_secondary_axis.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_bar_secondary_axis.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_bar_secondary_axis.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Los Angeles Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: losAngelesSalesData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "secondaryMeasureAxisId"), t0)]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, vertical: false, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({tickProviderSpec: new numeric_axis_spec.BasicNumericTickProviderSpec.new({desiredTickCount: 3})}), secondaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({tickProviderSpec: new numeric_axis_spec.BasicNumericTickProviderSpec.new({desiredTickCount: 3})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let t0;
      let globalSalesData = JSArrayOfOrdinalSales().of([new horizontal_bar_secondary_axis.OrdinalSales.new("2014", 5000), new horizontal_bar_secondary_axis.OrdinalSales.new("2015", 25000), new horizontal_bar_secondary_axis.OrdinalSales.new("2016", 100000), new horizontal_bar_secondary_axis.OrdinalSales.new("2017", 750000)]);
      let losAngelesSalesData = JSArrayOfOrdinalSales().of([new horizontal_bar_secondary_axis.OrdinalSales.new("2014", 25), new horizontal_bar_secondary_axis.OrdinalSales.new("2015", 50), new horizontal_bar_secondary_axis.OrdinalSales.new("2016", 10), new horizontal_bar_secondary_axis.OrdinalSales.new("2017", 20)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData}), (t0 = SeriesOfOrdinalSales$String().new({id: "Los Angeles Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: losAngelesSalesData}), t0.setAttribute(core.String, axis.measureAxisIdKey, "secondaryMeasureAxisId"), t0)]);
    }
  };
  (horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.prototype;
  dart.addTypeTests(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis);
  dart.setMethodSignature(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis, () => ({
    __proto__: dart.getMethods(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis, "package:example/axes/horizontal_bar_secondary_axis.dart");
  dart.setFieldSignature(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis, () => ({
    __proto__: dart.getFields(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis, {
    /*horizontal_bar_secondary_axis.HorizontalBarChartWithSecondaryAxis.secondaryMeasureAxisId*/get secondaryMeasureAxisId() {
      return "secondaryMeasureAxisId";
    }
  });
  const year$ = dart.privateName(horizontal_bar_secondary_axis, "OrdinalSales.year");
  const sales$ = dart.privateName(horizontal_bar_secondary_axis, "OrdinalSales.sales");
  horizontal_bar_secondary_axis.OrdinalSales = class OrdinalSales extends core.Object {
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
  (horizontal_bar_secondary_axis.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = horizontal_bar_secondary_axis.OrdinalSales.prototype;
  dart.addTypeTests(horizontal_bar_secondary_axis.OrdinalSales);
  dart.setLibraryUri(horizontal_bar_secondary_axis.OrdinalSales, "package:example/axes/horizontal_bar_secondary_axis.dart");
  dart.setFieldSignature(horizontal_bar_secondary_axis.OrdinalSales, () => ({
    __proto__: dart.getFields(horizontal_bar_secondary_axis.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/horizontal_bar_secondary_axis", {
    "package:example/axes/horizontal_bar_secondary_axis.dart": horizontal_bar_secondary_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["horizontal_bar_secondary_axis.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsC4B;;;;;;IACf;;;;;;;;AAKT,YAAW,2EACT,iGAES;IAEb;;;AAOE,YAAW,2EAAoC;IACjD;;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,mDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,mDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,mDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,mDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAG3C,gCAAsB,4BACtB,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,UAEnB,uCACE,iCACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,mBAAmB,IACxB,6BAAoB;IAK3B;UAI0B;AAExB,YAAW,kEACT,4BACS,+BAC+B,4DAC9B,2BAIc,6DAEZ,0EAAsD,6BACxC,6DAEd,0EAAsD;IAEtE;;;AAIQ,4BAAkB,4BAClB,mDAAa,QAAQ,OACrB,mDAAa,QAAQ,QACrB,mDAAa,QAAQ,SACrB,mDAAa,QAAQ;AAGrB,gCAAsB,4BACtB,mDAAa,QAAQ,KACrB,mDAAa,QAAQ,KACrB,mDAAa,QAAQ,KACrB,mDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe,UAEnB,uCACE,iCACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,mBAAmB,IACxB,6BAAoB;IAK3B;;oFA7GyC;QAAkB;;IAAlB;IAAkB;AAA3D;;EAAoE;;;;;;;;;;;;;MAJvD,wFAAsB;;;;;;;IAsHtB;;;;;;IACH;;;;;;;6DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"horizontal_bar_secondary_axis.ddc.js"}');
  // Exports:
  return {
    axes__horizontal_bar_secondary_axis: horizontal_bar_secondary_axis
  };
});

//# sourceMappingURL=horizontal_bar_secondary_axis.ddc.js.map
