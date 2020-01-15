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
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const rtl_line_chart = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(rtl_line_chart.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(rtl_line_chart.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [rtl_line_chart.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(rtl_line_chart.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 11,
        [_Location_line]: 85,
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
        [_Location_column]: 20,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/example/i18n/rtl_line_chart.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/example/i18n/rtl_line_chart.dart"
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
  let C6;
  let C7;
  let C5;
  let C4;
  const seriesList$ = dart.privateName(rtl_line_chart, "RTLLineChart.seriesList");
  const animate$ = dart.privateName(rtl_line_chart, "RTLLineChart.animate");
  rtl_line_chart.RTLLineChart = class RTLLineChart extends framework.StatelessWidget {
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
      return new rtl_line_chart.RTLLineChart.new(rtl_line_chart.RTLLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new rtl_line_chart.RTLLineChart.new(rtl_line_chart.RTLLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new rtl_line_chart.LinearSales.new(0, random.nextInt(100)), new rtl_line_chart.LinearSales.new(1, random.nextInt(100)), new rtl_line_chart.LinearSales.new(2, random.nextInt(100)), new rtl_line_chart.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new basic.Directionality.new({textDirection: ui.TextDirection.rtl, child: new line_chart.LineChart.new(this.seriesList, {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new rtl_line_chart.LinearSales.new(0, 5), new rtl_line_chart.LinearSales.new(1, 25), new rtl_line_chart.LinearSales.new(2, 100), new rtl_line_chart.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (rtl_line_chart.RTLLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    rtl_line_chart.RTLLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rtl_line_chart.RTLLineChart.prototype;
  dart.addTypeTests(rtl_line_chart.RTLLineChart);
  dart.setMethodSignature(rtl_line_chart.RTLLineChart, () => ({
    __proto__: dart.getMethods(rtl_line_chart.RTLLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(rtl_line_chart.RTLLineChart, "package:example/i18n/rtl_line_chart.dart");
  dart.setFieldSignature(rtl_line_chart.RTLLineChart, () => ({
    __proto__: dart.getFields(rtl_line_chart.RTLLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(rtl_line_chart, "LinearSales.year");
  const sales$ = dart.privateName(rtl_line_chart, "LinearSales.sales");
  rtl_line_chart.LinearSales = class LinearSales extends core.Object {
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
  (rtl_line_chart.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = rtl_line_chart.LinearSales.prototype;
  dart.addTypeTests(rtl_line_chart.LinearSales);
  dart.setLibraryUri(rtl_line_chart.LinearSales, "package:example/i18n/rtl_line_chart.dart");
  dart.setFieldSignature(rtl_line_chart.LinearSales, () => ({
    __proto__: dart.getFields(rtl_line_chart.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/i18n/rtl_line_chart", {
    "package:example/i18n/rtl_line_chart.dart": rtl_line_chart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rtl_line_chart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,qCACT,2DAES;IAEb;;;AAOE,YAAW,qCAAa;IAC1B;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,mCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,mCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,mCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,mCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AAYxB,YAAW,8CACsB,6BAClB,6BACT,2BACS;IAEjB;;AAIQ,iBAAO,2BACP,mCAAY,GAAG,IACf,mCAAY,GAAG,KACf,mCAAY,GAAG,MACf,mCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;8CA/EkB;QAAkB;;IAAlB;IAAkB;AAApC;;EAA6C;;;;;;;;;;;;;;;IAoFnC;;;;;;IACA;;;;;;;6CAEO,MAAW;IAAX;IAAW;;EAAM","file":"rtl_line_chart.ddc.js"}');
  // Exports:
  return {
    i18n__rtl_line_chart: rtl_line_chart
  };
});

//# sourceMappingURL=rtl_line_chart.ddc.js.map
