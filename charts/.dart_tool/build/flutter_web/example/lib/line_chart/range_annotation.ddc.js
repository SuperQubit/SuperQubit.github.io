define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const range_annotation = packages__charts_common__common.src__chart__common__behavior__range_annotation;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const range_annotation$ = packages__charts_flutter__flutter.src__behaviors__range_annotation;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const range_annotation$0 = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(range_annotation$0.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(range_annotation$0.LinearSales, core.int)))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [range_annotation$0.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(range_annotation$0.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let JSArrayOfAnnotationSegment = () => (JSArrayOfAnnotationSegment = dart.constFn(_interceptors.JSArray$(range_annotation.AnnotationSegment)))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 63,
        [_Location_line]: 76,
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
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/range_annotation.dart"
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
  const seriesList$ = dart.privateName(range_annotation$0, "LineRangeAnnotationChart.seriesList");
  const animate$ = dart.privateName(range_annotation$0, "LineRangeAnnotationChart.animate");
  range_annotation$0.LineRangeAnnotationChart = class LineRangeAnnotationChart extends framework.StatelessWidget {
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
      return new range_annotation$0.LineRangeAnnotationChart.new(range_annotation$0.LineRangeAnnotationChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new range_annotation$0.LineRangeAnnotationChart.new(range_annotation$0.LineRangeAnnotationChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([new range_annotation$0.LinearSales.new(0, random.nextInt(100)), new range_annotation$0.LinearSales.new(1, random.nextInt(100)), new range_annotation$0.LinearSales.new(2, random.nextInt(100)), new range_annotation$0.LinearSales.new(3, 100)]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new range_annotation$.RangeAnnotation.new(JSArrayOfAnnotationSegment().of([new range_annotation.RangeAnnotationSegment.new(0.5, 1.0, range_annotation.RangeAnnotationAxisType.domain, {startLabel: "Domain 1"}), new range_annotation.RangeAnnotationSegment.new(2, 4, range_annotation.RangeAnnotationAxisType.domain, {endLabel: "Domain 2", color: material_palette.MaterialPalette.gray.shade200}), new range_annotation.RangeAnnotationSegment.new(15, 20, range_annotation.RangeAnnotationAxisType.measure, {startLabel: "Measure 1 Start", endLabel: "Measure 1 End", color: material_palette.MaterialPalette.gray.shade300}), new range_annotation.RangeAnnotationSegment.new(35, 65, range_annotation.RangeAnnotationAxisType.measure, {startLabel: "Measure 2 Start", endLabel: "Measure 2 End", color: material_palette.MaterialPalette.gray.shade400})]))]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new range_annotation$0.LinearSales.new(0, 5), new range_annotation$0.LinearSales.new(1, 25), new range_annotation$0.LinearSales.new(2, 100), new range_annotation$0.LinearSales.new(3, 75)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: data})]);
    }
  };
  (range_annotation$0.LineRangeAnnotationChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    range_annotation$0.LineRangeAnnotationChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = range_annotation$0.LineRangeAnnotationChart.prototype;
  dart.addTypeTests(range_annotation$0.LineRangeAnnotationChart);
  dart.setMethodSignature(range_annotation$0.LineRangeAnnotationChart, () => ({
    __proto__: dart.getMethods(range_annotation$0.LineRangeAnnotationChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(range_annotation$0.LineRangeAnnotationChart, "package:example/line_chart/range_annotation.dart");
  dart.setFieldSignature(range_annotation$0.LineRangeAnnotationChart, () => ({
    __proto__: dart.getFields(range_annotation$0.LineRangeAnnotationChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(range_annotation$0, "LinearSales.year");
  const sales$ = dart.privateName(range_annotation$0, "LinearSales.sales");
  range_annotation$0.LinearSales = class LinearSales extends core.Object {
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
  (range_annotation$0.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = range_annotation$0.LinearSales.prototype;
  dart.addTypeTests(range_annotation$0.LinearSales);
  dart.setLibraryUri(range_annotation$0.LinearSales, "package:example/line_chart/range_annotation.dart");
  dart.setFieldSignature(range_annotation$0.LinearSales, () => ({
    __proto__: dart.getFields(range_annotation$0.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/range_annotation", {
    "package:example/line_chart/range_annotation.dart": range_annotation$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["range_annotation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAUT,YAAW,qDACT,2EAES;IAEb;;;AAOE,YAAW,qDAAyB;IACtC;;AAIQ,mBAAa;AAEb,iBAAO,2BACP,uCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,uCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,uCAAY,GAAG,AAAO,MAAD,SAAS,OAG9B,uCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;UAI0B;AACxB,YAAW,8BAAiB,2BAAqB,yBAAoB,4CAC/D,0CAAuB,iCACrB,gDACA,KAAK,KAAoC,8DAC7B,cACZ,gDACA,GAAG,GAAkC,4DAC3B,mBAA0C,AAAK,kDACzD,gDACA,IAAI,IAAmC,+DAC3B,6BACF,wBACoB,AAAK,kDACnC,gDACA,IAAI,IAAmC,+DAC3B,6BACF,wBACoB,AAAK;IAG7C;;AAIQ,iBAAO,2BACP,uCAAY,GAAG,IACf,uCAAY,GAAG,KACf,uCAAY,GAAG,MACf,uCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,mBACM,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,IAAI;IAGhB;;8DAxF8B;QAAkB;;IAAlB;IAAkB;AAAhD;;EAAyD;;;;;;;;;;;;;;;IA6F/C;;;;;;IACA;;;;;;;iDAEO,MAAW;IAAX;IAAW;;EAAM","file":"range_annotation.ddc.js"}');
  // Exports:
  return {
    line_chart__range_annotation: range_annotation$0
  };
});

//# sourceMappingURL=range_annotation.ddc.js.map
