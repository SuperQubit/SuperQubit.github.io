define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const arc_renderer_config = packages__charts_common__common.src__chart__pie__arc_renderer_config;
  const arc_label_decorator = packages__charts_common__common.src__chart__pie__arc_label_decorator;
  const arc_renderer_decorator = packages__charts_common__common.src__chart__pie__arc_renderer_decorator;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const outside_label = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(outside_label.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(outside_label.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [outside_label.LinearSales, core.int])))();
  let LinearSalesAndintToString = () => (LinearSalesAndintToString = dart.constFn(dart.fnType(core.String, [outside_label.LinearSales, core.int])))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  let JSArrayOfArcRendererDecorator = () => (JSArrayOfArcRendererDecorator = dart.constFn(_interceptors.JSArray$(arc_renderer_decorator.ArcRendererDecorator)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 32,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 84,
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
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/example/pie_chart/outside_label.dart"
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
  const seriesList$ = dart.privateName(outside_label, "PieOutsideLabelChart.seriesList");
  const animate$ = dart.privateName(outside_label, "PieOutsideLabelChart.animate");
  outside_label.PieOutsideLabelChart = class PieOutsideLabelChart extends framework.StatelessWidget {
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
      return new outside_label.PieOutsideLabelChart.new(outside_label.PieOutsideLabelChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new outside_label.PieOutsideLabelChart.new(outside_label.PieOutsideLabelChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new outside_label.LinearSales.new(0, random.nextInt(100)), new outside_label.LinearSales.new(1, random.nextInt(100)), new outside_label.LinearSales.new(2, random.nextInt(100)), new outside_label.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data, labelAccessorFn: dart.fn((row, _) => dart.str(row.year) + ": " + dart.str(row.sales), LinearSalesAndintToString())})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new arc_renderer_config.ArcRendererConfig.new({arcRendererDecorators: JSArrayOfArcRendererDecorator().of([new arc_label_decorator.ArcLabelDecorator.new({labelPosition: arc_label_decorator.ArcLabelPosition.outside})])}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new outside_label.LinearSales.new(0, 100), new outside_label.LinearSales.new(1, 75), new outside_label.LinearSales.new(2, 25), new outside_label.LinearSales.new(3, 5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data, labelAccessorFn: dart.fn((row, _) => dart.str(row.year) + ": " + dart.str(row.sales), LinearSalesAndintToString())})]);
    }
  };
  (outside_label.PieOutsideLabelChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    outside_label.PieOutsideLabelChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = outside_label.PieOutsideLabelChart.prototype;
  dart.addTypeTests(outside_label.PieOutsideLabelChart);
  dart.setMethodSignature(outside_label.PieOutsideLabelChart, () => ({
    __proto__: dart.getMethods(outside_label.PieOutsideLabelChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(outside_label.PieOutsideLabelChart, "package:example/pie_chart/outside_label.dart");
  dart.setFieldSignature(outside_label.PieOutsideLabelChart, () => ({
    __proto__: dart.getFields(outside_label.PieOutsideLabelChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(outside_label, "LinearSales.year");
  const sales$ = dart.privateName(outside_label, "LinearSales.sales");
  outside_label.LinearSales = class LinearSales extends core.Object {
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
  (outside_label.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = outside_label.LinearSales.prototype;
  dart.addTypeTests(outside_label.LinearSales);
  dart.setLibraryUri(outside_label.LinearSales, "package:example/pie_chart/outside_label.dart");
  dart.setFieldSignature(outside_label.LinearSales, () => ({
    __proto__: dart.getFields(outside_label.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/pie_chart/outside_label", {
    "package:example/pie_chart/outside_label.dart": outside_label
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["outside_label.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,4CACT,kEAES;IAEb;;;AAOE,YAAW,4CAAqB;IAClC;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,kCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI,mBAEO,SAAa,KAAK,MAAiC,SAAxB,AAAI,GAAD,SAAM,gBAAI,AAAI,GAAD;IAGlE;UAI0B;AACxB,YAAW,4BAAgB,2BACd,+BAWY,sEAAgD,oCAC/D,8DACuC;IAEnD;;AAIQ,iBAAO,2BACP,kCAAY,GAAG,MACf,kCAAY,GAAG,KACf,kCAAY,GAAG,KACf,kCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI,mBAEO,SAAa,KAAK,MAAiC,SAAxB,AAAI,GAAD,SAAM,gBAAI,AAAI,GAAD;IAGlE;;qDAlF0B;QAAkB;;IAAlB;IAAkB;AAA5C;;EAAqD;;;;;;;;;;;;;;;IAuF3C;;;;;;IACA;;;;;;;4CAEO,MAAW;IAAX;IAAW;;EAAM","file":"outside_label.ddc.js"}');
  // Exports:
  return {
    pie_chart__outside_label: outside_label
  };
});

//# sourceMappingURL=outside_label.ddc.js.map
