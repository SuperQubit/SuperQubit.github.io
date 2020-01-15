define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const small_tick_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__small_tick_draw_strategy;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const numeric_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__numeric_axis_spec;
  const gridline_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__gridline_draw_strategy;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const custom_font_size_and_color = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(custom_font_size_and_color.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(custom_font_size_and_color.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [custom_font_size_and_color.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [custom_font_size_and_color.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let SmallTickRendererSpecOfString = () => (SmallTickRendererSpecOfString = dart.constFn(small_tick_draw_strategy.SmallTickRendererSpec$(core.String)))();
  let GridlineRendererSpecOfnum = () => (GridlineRendererSpecOfnum = dart.constFn(gridline_draw_strategy.GridlineRendererSpec$(core.num)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 7,
        [_Location_line]: 96,
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
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/custom_font_size_and_color.dart"
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
  const seriesList$ = dart.privateName(custom_font_size_and_color, "CustomFontSizeAndColor.seriesList");
  const animate$ = dart.privateName(custom_font_size_and_color, "CustomFontSizeAndColor.animate");
  custom_font_size_and_color.CustomFontSizeAndColor = class CustomFontSizeAndColor extends framework.StatelessWidget {
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
      return new custom_font_size_and_color.CustomFontSizeAndColor.new(custom_font_size_and_color.CustomFontSizeAndColor._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new custom_font_size_and_color.CustomFontSizeAndColor.new(custom_font_size_and_color.CustomFontSizeAndColor._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new custom_font_size_and_color.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new custom_font_size_and_color.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new custom_font_size_and_color.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new custom_font_size_and_color.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({renderSpec: new (SmallTickRendererSpecOfString()).new({labelStyle: new axis_spec.TextStyleSpec.new({fontSize: 18, color: material_palette.MaterialPalette.black}), lineStyle: new axis_spec.LineStyleSpec.new({color: material_palette.MaterialPalette.black})})}), primaryMeasureAxis: new numeric_axis_spec.NumericAxisSpec.new({renderSpec: new (GridlineRendererSpecOfnum()).new({labelStyle: new axis_spec.TextStyleSpec.new({fontSize: 18, color: material_palette.MaterialPalette.black}), lineStyle: new axis_spec.LineStyleSpec.new({color: material_palette.MaterialPalette.black})})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let globalSalesData = JSArrayOfOrdinalSales().of([new custom_font_size_and_color.OrdinalSales.new("2014", 5000), new custom_font_size_and_color.OrdinalSales.new("2015", 25000), new custom_font_size_and_color.OrdinalSales.new("2016", 100000), new custom_font_size_and_color.OrdinalSales.new("2017", 750000)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
  };
  (custom_font_size_and_color.CustomFontSizeAndColor.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    custom_font_size_and_color.CustomFontSizeAndColor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_font_size_and_color.CustomFontSizeAndColor.prototype;
  dart.addTypeTests(custom_font_size_and_color.CustomFontSizeAndColor);
  dart.setMethodSignature(custom_font_size_and_color.CustomFontSizeAndColor, () => ({
    __proto__: dart.getMethods(custom_font_size_and_color.CustomFontSizeAndColor.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_font_size_and_color.CustomFontSizeAndColor, "package:example/axes/custom_font_size_and_color.dart");
  dart.setFieldSignature(custom_font_size_and_color.CustomFontSizeAndColor, () => ({
    __proto__: dart.getFields(custom_font_size_and_color.CustomFontSizeAndColor.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(custom_font_size_and_color, "OrdinalSales.year");
  const sales$ = dart.privateName(custom_font_size_and_color, "OrdinalSales.sales");
  custom_font_size_and_color.OrdinalSales = class OrdinalSales extends core.Object {
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
  (custom_font_size_and_color.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = custom_font_size_and_color.OrdinalSales.prototype;
  dart.addTypeTests(custom_font_size_and_color.OrdinalSales);
  dart.setLibraryUri(custom_font_size_and_color.OrdinalSales, "package:example/axes/custom_font_size_and_color.dart");
  dart.setFieldSignature(custom_font_size_and_color.OrdinalSales, () => ({
    __proto__: dart.getFields(custom_font_size_and_color.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/custom_font_size_and_color", {
    "package:example/axes/custom_font_size_and_color.dart": custom_font_size_and_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_font_size_and_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4B4B;;;;;;IACf;;;;;;;;AAKT,YAAW,2DACT,iFAES;IAEb;;;AAOE,YAAW,2DAAuB;IACpC;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,gDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,gDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,gDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,gDAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAGjD,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,0BAOO,uDACI,uDAGI,2CACF,WACoB,qDAGnB,wCACmB,kEAGlB,uDACJ,mDAGI,2CACF,WACoB,qDAGnB,wCACmB;IAE9C;;AAIQ,4BAAkB,4BAClB,gDAAa,QAAQ,OACrB,gDAAa,QAAQ,QACrB,gDAAa,QAAQ,SACrB,gDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;oEA/F4B;QAAkB;;IAAlB;IAAkB;AAA9C;;EAAuD;;;;;;;;;;;;;;;IAoG1C;;;;;;IACH;;;;;;;0DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"custom_font_size_and_color.ddc.js"}');
  // Exports:
  return {
    axes__custom_font_size_and_color: custom_font_size_and_color
  };
});

//# sourceMappingURL=custom_font_size_and_color.ddc.js.map
