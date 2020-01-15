define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const arc_renderer_config = packages__charts_common__common.src__chart__pie__arc_renderer_config;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const partial_pie = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(partial_pie.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(partial_pie.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [partial_pie.LinearSales, core.int])))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 32,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 75,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/example/pie_chart/partial_pie.dart"
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
  const seriesList$ = dart.privateName(partial_pie, "PartialPieChart.seriesList");
  const animate$ = dart.privateName(partial_pie, "PartialPieChart.animate");
  partial_pie.PartialPieChart = class PartialPieChart extends framework.StatelessWidget {
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
      return new partial_pie.PartialPieChart.new(partial_pie.PartialPieChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new partial_pie.PartialPieChart.new(partial_pie.PartialPieChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new partial_pie.LinearSales.new(0, random.nextInt(100)), new partial_pie.LinearSales.new(1, random.nextInt(100)), new partial_pie.LinearSales.new(2, random.nextInt(100)), new partial_pie.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new arc_renderer_config.ArcRendererConfig.new({arcLength: 3 / 2 * 3.141592653589793}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new partial_pie.LinearSales.new(0, 100), new partial_pie.LinearSales.new(1, 75), new partial_pie.LinearSales.new(2, 25), new partial_pie.LinearSales.new(3, 5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (partial_pie.PartialPieChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    partial_pie.PartialPieChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = partial_pie.PartialPieChart.prototype;
  dart.addTypeTests(partial_pie.PartialPieChart);
  dart.setMethodSignature(partial_pie.PartialPieChart, () => ({
    __proto__: dart.getMethods(partial_pie.PartialPieChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(partial_pie.PartialPieChart, "package:example/pie_chart/partial_pie.dart");
  dart.setFieldSignature(partial_pie.PartialPieChart, () => ({
    __proto__: dart.getFields(partial_pie.PartialPieChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(partial_pie, "LinearSales.year");
  const sales$ = dart.privateName(partial_pie, "LinearSales.sales");
  partial_pie.LinearSales = class LinearSales extends core.Object {
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
  (partial_pie.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = partial_pie.LinearSales.prototype;
  dart.addTypeTests(partial_pie.LinearSales);
  dart.setLibraryUri(partial_pie.LinearSales, "package:example/pie_chart/partial_pie.dart");
  dart.setFieldSignature(partial_pie.LinearSales, () => ({
    __proto__: dart.getFields(partial_pie.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/pie_chart/partial_pie", {
    "package:example/pie_chart/partial_pie.dart": partial_pie
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["partial_pie.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,qCACT,2DAES;IAEb;;;AAOE,YAAW,qCAAgB;IAC7B;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,gCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,gCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,gCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,gCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AAGxB,YAAW,4BAAgB,2BACd,+BACY,0DAAoC,AAAE,AAAI,IAAF;IACnE;;AAIQ,iBAAO,2BACP,gCAAY,GAAG,MACf,gCAAY,GAAG,KACf,gCAAY,GAAG,KACf,gCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;8CAnEqB;QAAkB;;IAAlB;IAAkB;AAAvC;;EAAgD;;;;;;;;;;;;;;;IAwEtC;;;;;;IACA;;;;;;;0CAEO,MAAW;IAAX;IAAW;;EAAM","file":"partial_pie.ddc.js"}');
  // Exports:
  return {
    pie_chart__partial_pie: partial_pie
  };
});

//# sourceMappingURL=partial_pie.ddc.js.map
