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
  const layout_config = packages__charts_common__common.src__chart__layout__layout_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const base_chart = packages__charts_flutter__flutter.src__base_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const spark_bar = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(spark_bar.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(spark_bar.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [spark_bar.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [spark_bar.OrdinalSales, core.int])))();
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
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layoutConfig",
        [_Location_column]: 7,
        [_Location_line]: 99,
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
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/spark_bar.dart"
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
  const seriesList$ = dart.privateName(spark_bar, "SparkBar.seriesList");
  const animate$ = dart.privateName(spark_bar, "SparkBar.animate");
  spark_bar.SparkBar = class SparkBar extends framework.StatelessWidget {
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
      return new spark_bar.SparkBar.new(spark_bar.SparkBar._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new spark_bar.SparkBar.new(spark_bar.SparkBar._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new spark_bar.OrdinalSales.new("2007", random.nextInt(100)), new spark_bar.OrdinalSales.new("2008", random.nextInt(100)), new spark_bar.OrdinalSales.new("2009", random.nextInt(100)), new spark_bar.OrdinalSales.new("2010", random.nextInt(100)), new spark_bar.OrdinalSales.new("2011", random.nextInt(100)), new spark_bar.OrdinalSales.new("2012", random.nextInt(100)), new spark_bar.OrdinalSales.new("2013", random.nextInt(100)), new spark_bar.OrdinalSales.new("2014", random.nextInt(100)), new spark_bar.OrdinalSales.new("2015", random.nextInt(100)), new spark_bar.OrdinalSales.new("2016", random.nextInt(100)), new spark_bar.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({renderSpec: new (NoneRenderSpecOfnum()).new()}), domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({showAxisLine: true, renderSpec: new (NoneRenderSpecOfString()).new()}), layoutConfig: new base_chart.LayoutConfig.new({leftMarginSpec: layout_config.MarginSpec.fixedPixel(0), topMarginSpec: layout_config.MarginSpec.fixedPixel(0), rightMarginSpec: layout_config.MarginSpec.fixedPixel(0), bottomMarginSpec: layout_config.MarginSpec.fixedPixel(0)}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let globalSalesData = JSArrayOfOrdinalSales().of([new spark_bar.OrdinalSales.new("2007", 3100), new spark_bar.OrdinalSales.new("2008", 3500), new spark_bar.OrdinalSales.new("2009", 5000), new spark_bar.OrdinalSales.new("2010", 2500), new spark_bar.OrdinalSales.new("2011", 3200), new spark_bar.OrdinalSales.new("2012", 4500), new spark_bar.OrdinalSales.new("2013", 4400), new spark_bar.OrdinalSales.new("2014", 5000), new spark_bar.OrdinalSales.new("2015", 5000), new spark_bar.OrdinalSales.new("2016", 4500), new spark_bar.OrdinalSales.new("2017", 4300)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
  };
  (spark_bar.SparkBar.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    spark_bar.SparkBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = spark_bar.SparkBar.prototype;
  dart.addTypeTests(spark_bar.SparkBar);
  dart.setMethodSignature(spark_bar.SparkBar, () => ({
    __proto__: dart.getMethods(spark_bar.SparkBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(spark_bar.SparkBar, "package:example/bar_chart/spark_bar.dart");
  dart.setFieldSignature(spark_bar.SparkBar, () => ({
    __proto__: dart.getFields(spark_bar.SparkBar.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(spark_bar, "OrdinalSales.year");
  const sales$ = dart.privateName(spark_bar, "OrdinalSales.sales");
  spark_bar.OrdinalSales = class OrdinalSales extends core.Object {
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
  (spark_bar.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = spark_bar.OrdinalSales.prototype;
  dart.addTypeTests(spark_bar.OrdinalSales);
  dart.setLibraryUri(spark_bar.OrdinalSales, "package:example/bar_chart/spark_bar.dart");
  dart.setFieldSignature(spark_bar.OrdinalSales, () => ({
    __proto__: dart.getFields(spark_bar.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/spark_bar", {
    "package:example/bar_chart/spark_bar.dart": spark_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["spark_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,4BACT,kDAES;IAEb;;;AAOE,YAAW,4BAAS;IACtB;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,+BAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,kCAOD,uDAAuC,iDAK/B,yDAEE,kBAEE,sDAIF,iDACM,oCAA6B,mBAC9B,oCAA6B,qBAC3B,oCAA6B,sBAC5B,oCAA6B;IAE3D;;AAIQ,4BAAkB,4BAClB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ,OACrB,+BAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;qCAvGc;QAAkB;;IAAlB;IAAkB;AAAhC;;EAAyC;;;;;;;;;;;;;;;IA4G5B;;;;;;IACH;;;;;;;yCAEQ,MAAW;IAAX;IAAW;;EAAM","file":"spark_bar.ddc.js"}');
  // Exports:
  return {
    bar_chart__spark_bar: spark_bar
  };
});

//# sourceMappingURL=spark_bar.ddc.js.map
