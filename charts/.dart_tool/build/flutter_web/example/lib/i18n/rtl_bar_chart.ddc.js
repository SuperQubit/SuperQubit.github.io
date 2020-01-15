define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/charts_flutter/flutter'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__charts_flutter__flutter) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const rtl_bar_chart = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(rtl_bar_chart.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(rtl_bar_chart.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [rtl_bar_chart.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [rtl_bar_chart.OrdinalSales, core.int])))();
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
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vertical",
        [_Location_column]: 11,
        [_Location_line]: 89,
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
        [_Location_column]: 20,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/example/i18n/rtl_bar_chart.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/example/i18n/rtl_bar_chart.dart"
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
  let C7;
  let C8;
  let C6;
  let C5;
  const seriesList$ = dart.privateName(rtl_bar_chart, "RTLBarChart.seriesList");
  const animate$ = dart.privateName(rtl_bar_chart, "RTLBarChart.animate");
  rtl_bar_chart.RTLBarChart = class RTLBarChart extends framework.StatelessWidget {
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
      return new rtl_bar_chart.RTLBarChart.new(rtl_bar_chart.RTLBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new rtl_bar_chart.RTLBarChart.new(rtl_bar_chart.RTLBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new rtl_bar_chart.OrdinalSales.new("2014", random.nextInt(100)), new rtl_bar_chart.OrdinalSales.new("2015", random.nextInt(100)), new rtl_bar_chart.OrdinalSales.new("2016", random.nextInt(100)), new rtl_bar_chart.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new basic.Directionality.new({textDirection: ui.TextDirection.rtl, child: new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, vertical: false, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new rtl_bar_chart.OrdinalSales.new("2014", 5), new rtl_bar_chart.OrdinalSales.new("2015", 25), new rtl_bar_chart.OrdinalSales.new("2016", 100), new rtl_bar_chart.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (rtl_bar_chart.RTLBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    rtl_bar_chart.RTLBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rtl_bar_chart.RTLBarChart.prototype;
  dart.addTypeTests(rtl_bar_chart.RTLBarChart);
  dart.setMethodSignature(rtl_bar_chart.RTLBarChart, () => ({
    __proto__: dart.getMethods(rtl_bar_chart.RTLBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(rtl_bar_chart.RTLBarChart, "package:example/i18n/rtl_bar_chart.dart");
  dart.setFieldSignature(rtl_bar_chart.RTLBarChart, () => ({
    __proto__: dart.getFields(rtl_bar_chart.RTLBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(rtl_bar_chart, "OrdinalSales.year");
  const sales$ = dart.privateName(rtl_bar_chart, "OrdinalSales.sales");
  rtl_bar_chart.OrdinalSales = class OrdinalSales extends core.Object {
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
  (rtl_bar_chart.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = rtl_bar_chart.OrdinalSales.prototype;
  dart.addTypeTests(rtl_bar_chart.OrdinalSales);
  dart.setLibraryUri(rtl_bar_chart.OrdinalSales, "package:example/i18n/rtl_bar_chart.dart");
  dart.setFieldSignature(rtl_bar_chart.OrdinalSales, () => ({
    __proto__: dart.getFields(rtl_bar_chart.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/i18n/rtl_bar_chart", {
    "package:example/i18n/rtl_bar_chart.dart": rtl_bar_chart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rtl_bar_chart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,mCACT,yDAES;IAEb;;;AAOE,YAAW,mCAAY;IACzB;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,mCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mCAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mCAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AAexB,YAAW,8CACsB,6BAClB,iEACT,4BACS,wBACC;IAElB;;AAIQ,iBAAO,4BACP,mCAAa,QAAQ,IACrB,mCAAa,QAAQ,KACrB,mCAAa,QAAQ,MACrB,mCAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;4CAnFiB;QAAkB;;IAAlB;IAAkB;AAAnC;;EAA4C;;;;;;;;;;;;;;;IAwF/B;;;;;;IACH;;;;;;;6CAEQ,MAAW;IAAX;IAAW;;EAAM","file":"rtl_bar_chart.ddc.js"}');
  // Exports:
  return {
    i18n__rtl_bar_chart: rtl_bar_chart
  };
});

//# sourceMappingURL=rtl_bar_chart.ddc.js.map
