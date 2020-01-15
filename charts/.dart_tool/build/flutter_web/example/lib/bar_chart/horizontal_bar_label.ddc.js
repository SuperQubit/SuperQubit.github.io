define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const bar_label_decorator = packages__charts_common__common.src__chart__bar__bar_label_decorator;
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const none_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__none_draw_strategy;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const horizontal_bar_label = Object.create(dart.library);
  const $toString = dartx.toString;
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(horizontal_bar_label.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(horizontal_bar_label.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [horizontal_bar_label.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [horizontal_bar_label.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarLabelDecoratorOfString = () => (BarLabelDecoratorOfString = dart.constFn(bar_label_decorator.BarLabelDecorator$(core.String)))();
  let NoneRenderSpecOfString = () => (NoneRenderSpecOfString = dart.constFn(none_draw_strategy.NoneRenderSpec$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vertical",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barRendererDecorator",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 90,
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
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/horizontal_bar_label.dart"
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
  const seriesList$ = dart.privateName(horizontal_bar_label, "HorizontalBarLabelChart.seriesList");
  const animate$ = dart.privateName(horizontal_bar_label, "HorizontalBarLabelChart.animate");
  horizontal_bar_label.HorizontalBarLabelChart = class HorizontalBarLabelChart extends framework.StatelessWidget {
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
      return new horizontal_bar_label.HorizontalBarLabelChart.new(horizontal_bar_label.HorizontalBarLabelChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new horizontal_bar_label.HorizontalBarLabelChart.new(horizontal_bar_label.HorizontalBarLabelChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new horizontal_bar_label.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_bar_label.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_bar_label.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_bar_label.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data, labelAccessorFn: dart.fn((sales, _) => dart.str(sales.year) + ": $" + dart.toString(sales.sales), OrdinalSalesAndintToString())})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, vertical: false, barRendererDecorator: new (BarLabelDecoratorOfString()).new(), domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({renderSpec: new (NoneRenderSpecOfString()).new()}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new horizontal_bar_label.OrdinalSales.new("2014", 5), new horizontal_bar_label.OrdinalSales.new("2015", 25), new horizontal_bar_label.OrdinalSales.new("2016", 100), new horizontal_bar_label.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data, labelAccessorFn: dart.fn((sales, _) => dart.str(sales.year) + ": $" + dart.toString(sales.sales), OrdinalSalesAndintToString())})]);
    }
  };
  (horizontal_bar_label.HorizontalBarLabelChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    horizontal_bar_label.HorizontalBarLabelChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = horizontal_bar_label.HorizontalBarLabelChart.prototype;
  dart.addTypeTests(horizontal_bar_label.HorizontalBarLabelChart);
  dart.setMethodSignature(horizontal_bar_label.HorizontalBarLabelChart, () => ({
    __proto__: dart.getMethods(horizontal_bar_label.HorizontalBarLabelChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(horizontal_bar_label.HorizontalBarLabelChart, "package:example/bar_chart/horizontal_bar_label.dart");
  dart.setFieldSignature(horizontal_bar_label.HorizontalBarLabelChart, () => ({
    __proto__: dart.getFields(horizontal_bar_label.HorizontalBarLabelChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(horizontal_bar_label, "OrdinalSales.year");
  const sales$ = dart.privateName(horizontal_bar_label, "OrdinalSales.sales");
  horizontal_bar_label.OrdinalSales = class OrdinalSales extends core.Object {
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
  (horizontal_bar_label.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = horizontal_bar_label.OrdinalSales.prototype;
  dart.addTypeTests(horizontal_bar_label.OrdinalSales);
  dart.setLibraryUri(horizontal_bar_label.OrdinalSales, "package:example/bar_chart/horizontal_bar_label.dart");
  dart.setFieldSignature(horizontal_bar_label.OrdinalSales, () => ({
    __proto__: dart.getFields(horizontal_bar_label.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/horizontal_bar_label", {
    "package:example/bar_chart/horizontal_bar_label.dart": horizontal_bar_label
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["horizontal_bar_label.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,sDACT,4EAES;IAEb;;;AAOE,YAAW,sDAAwB;IACrC;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,0CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACI,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI,mBAEO,SAAc,OAAO,MACU,SAAzC,AAAM,KAAD,SAAM,QAAkB,cAAZ,AAAM,KAAD;IAErC;UAW0B;AACxB,YAAW,kEACT,4BACS,wBACC,6BAMgB,qDAGlB,uDAAuC;IAEnD;;AAIQ,iBAAO,4BACP,0CAAa,QAAQ,IACrB,0CAAa,QAAQ,KACrB,0CAAa,QAAQ,MACrB,0CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACI,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI,mBAEO,SAAc,OAAO,MACU,SAAzC,AAAM,KAAD,SAAM,QAAkB,cAAZ,AAAM,KAAD;IAErC;;+DAvF6B;QAAkB;;IAAlB;IAAkB;AAA/C;;EAAwD;;;;;;;;;;;;;;;IA4F3C;;;;;;IACH;;;;;;;oDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"horizontal_bar_label.ddc.js"}');
  // Exports:
  return {
    bar_chart__horizontal_bar_label: horizontal_bar_label
  };
});

//# sourceMappingURL=horizontal_bar_label.ddc.js.map
