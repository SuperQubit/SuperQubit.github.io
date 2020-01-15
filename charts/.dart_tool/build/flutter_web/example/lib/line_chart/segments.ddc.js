define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const series = packages__charts_common__common.src__data__series;
  const color = packages__charts_common__common.src__common__color;
  const line_renderer_config = packages__charts_common__common.src__chart__line__line_renderer_config;
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const segments = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $_get = dartx._get;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(segments.LinearSales)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(segments.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [segments.LinearSales, core.int])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let LinearSalesAndintToListOfint = () => (LinearSalesAndintToListOfint = dart.constFn(dart.fnType(ListOfint(), [segments.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [segments.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [segments.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(segments.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let LineRendererConfigOfnum = () => (LineRendererConfigOfnum = dart.constFn(line_renderer_config.LineRendererConfig$(core.num)))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 143,
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
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/segments.dart"
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
  const seriesList$ = dart.privateName(segments, "SegmentsLineChart.seriesList");
  const animate$ = dart.privateName(segments, "SegmentsLineChart.animate");
  segments.SegmentsLineChart = class SegmentsLineChart extends framework.StatelessWidget {
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
      return new segments.SegmentsLineChart.new(segments.SegmentsLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new segments.SegmentsLineChart.new(segments.SegmentsLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let colorChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, random.nextInt(100), null, 2.0), new segments.LinearSales.new(1, random.nextInt(100), null, 2.0), new segments.LinearSales.new(2, random.nextInt(100), null, 2.0), new segments.LinearSales.new(3, random.nextInt(100), null, 2.0), new segments.LinearSales.new(4, random.nextInt(100), null, 2.0), new segments.LinearSales.new(5, random.nextInt(100), null, 2.0), new segments.LinearSales.new(6, random.nextInt(100), null, 2.0)]);
      let dashPatternChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, random.nextInt(100), JSArrayOfint().of([2, 2]), 2.0), new segments.LinearSales.new(1, random.nextInt(100), JSArrayOfint().of([2, 2]), 2.0), new segments.LinearSales.new(2, random.nextInt(100), JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(3, random.nextInt(100), JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(4, random.nextInt(100), JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(5, random.nextInt(100), JSArrayOfint().of([8, 3, 2, 3]), 2.0), new segments.LinearSales.new(6, random.nextInt(100), JSArrayOfint().of([8, 3, 2, 3]), 2.0)]);
      let strokeWidthChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, random.nextInt(100), null, 2.0), new segments.LinearSales.new(1, random.nextInt(100), null, 2.0), new segments.LinearSales.new(2, random.nextInt(100), null, 4.0), new segments.LinearSales.new(3, random.nextInt(100), null, 4.0), new segments.LinearSales.new(4, random.nextInt(100), null, 4.0), new segments.LinearSales.new(5, random.nextInt(100), null, 6.0), new segments.LinearSales.new(6, random.nextInt(100), null, 6.0)]);
      let blue = material_palette.MaterialPalette.blue.makeShades(2);
      let red = material_palette.MaterialPalette.red.makeShades(2);
      let green = material_palette.MaterialPalette.green.makeShades(2);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Color Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? blue[$_get](1) : blue[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: colorChangeData}), SeriesOfLinearSales$int().new({id: "Dash Pattern Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? red[$_get](1) : red[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: dashPatternChangeData}), SeriesOfLinearSales$int().new({id: "Stroke Width Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? green[$_get](1) : green[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: strokeWidthChangeData})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {defaultRenderer: new (LineRendererConfigOfnum()).new({includeArea: true, stacked: true}), animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let colorChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, 5, null, 2.0), new segments.LinearSales.new(1, 15, null, 2.0), new segments.LinearSales.new(2, 25, null, 2.0), new segments.LinearSales.new(3, 75, null, 2.0), new segments.LinearSales.new(4, 100, null, 2.0), new segments.LinearSales.new(5, 90, null, 2.0), new segments.LinearSales.new(6, 75, null, 2.0)]);
      let dashPatternChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, 5, JSArrayOfint().of([2, 2]), 2.0), new segments.LinearSales.new(1, 15, JSArrayOfint().of([2, 2]), 2.0), new segments.LinearSales.new(2, 25, JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(3, 75, JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(4, 100, JSArrayOfint().of([4, 4]), 2.0), new segments.LinearSales.new(5, 90, JSArrayOfint().of([8, 3, 2, 3]), 2.0), new segments.LinearSales.new(6, 75, JSArrayOfint().of([8, 3, 2, 3]), 2.0)]);
      let strokeWidthChangeData = JSArrayOfLinearSales().of([new segments.LinearSales.new(0, 5, null, 2.0), new segments.LinearSales.new(1, 15, null, 2.0), new segments.LinearSales.new(2, 25, null, 4.0), new segments.LinearSales.new(3, 75, null, 4.0), new segments.LinearSales.new(4, 100, null, 4.0), new segments.LinearSales.new(5, 90, null, 6.0), new segments.LinearSales.new(6, 75, null, 6.0)]);
      let blue = material_palette.MaterialPalette.blue.makeShades(2);
      let red = material_palette.MaterialPalette.red.makeShades(2);
      let green = material_palette.MaterialPalette.green.makeShades(2);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Color Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? blue[$_get](1) : blue[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: colorChangeData}), SeriesOfLinearSales$int().new({id: "Dash Pattern Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? red[$_get](1) : red[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: dashPatternChangeData}), SeriesOfLinearSales$int().new({id: "Stroke Width Change", colorFn: dart.fn((sales, _) => sales.year[$modulo](2) === 0 ? green[$_get](1) : green[$_get](0), LinearSalesAndintToColor()), dashPatternFn: dart.fn((sales, _) => sales.dashPattern, LinearSalesAndintToListOfint()), strokeWidthPxFn: dart.fn((sales, _) => sales.strokeWidthPx, LinearSalesAndintTodouble()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: strokeWidthChangeData})]);
    }
  };
  (segments.SegmentsLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    segments.SegmentsLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = segments.SegmentsLineChart.prototype;
  dart.addTypeTests(segments.SegmentsLineChart);
  dart.setMethodSignature(segments.SegmentsLineChart, () => ({
    __proto__: dart.getMethods(segments.SegmentsLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(segments.SegmentsLineChart, "package:example/line_chart/segments.dart");
  dart.setFieldSignature(segments.SegmentsLineChart, () => ({
    __proto__: dart.getFields(segments.SegmentsLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(segments, "LinearSales.year");
  const sales$ = dart.privateName(segments, "LinearSales.sales");
  const dashPattern$ = dart.privateName(segments, "LinearSales.dashPattern");
  const strokeWidthPx$ = dart.privateName(segments, "LinearSales.strokeWidthPx");
  segments.LinearSales = class LinearSales extends core.Object {
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
    get dashPattern() {
      return this[dashPattern$];
    }
    set dashPattern(value) {
      super.dashPattern = value;
    }
    get strokeWidthPx() {
      return this[strokeWidthPx$];
    }
    set strokeWidthPx(value) {
      super.strokeWidthPx = value;
    }
  };
  (segments.LinearSales.new = function(year, sales, dashPattern, strokeWidthPx) {
    this[year$] = year;
    this[sales$] = sales;
    this[dashPattern$] = dashPattern;
    this[strokeWidthPx$] = strokeWidthPx;
    ;
  }).prototype = segments.LinearSales.prototype;
  dart.addTypeTests(segments.LinearSales);
  dart.setLibraryUri(segments.LinearSales, "package:example/line_chart/segments.dart");
  dart.setFieldSignature(segments.LinearSales, () => ({
    __proto__: dart.getFields(segments.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    dashPattern: dart.finalFieldType(core.List$(core.int)),
    strokeWidthPx: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/line_chart/segments", {
    "package:example/line_chart/segments.dart": segments
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["segments.dart"],"names":[],"mappings":"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","file":"segments.ddc.js"}');
  // Exports:
  return {
    line_chart__segments: segments
  };
});

//# sourceMappingURL=segments.ddc.js.map
