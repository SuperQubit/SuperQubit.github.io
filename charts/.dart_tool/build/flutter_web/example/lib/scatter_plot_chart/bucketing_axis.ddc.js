define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const bucketing_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__bucketing_axis_spec;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const series_legend = packages__charts_flutter__flutter.src__behaviors__legend__series_legend;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const bucketing_axis = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(bucketing_axis.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(bucketing_axis.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [bucketing_axis.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [bucketing_axis.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [bucketing_axis.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(bucketing_axis.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
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
        [_Location_column]: 40,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primaryMeasureAxis",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 170,
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
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/bucketing_axis.dart"
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
  const seriesList$ = dart.privateName(bucketing_axis, "BucketingAxisScatterPlotChart.seriesList");
  const animate$ = dart.privateName(bucketing_axis, "BucketingAxisScatterPlotChart.animate");
  bucketing_axis.BucketingAxisScatterPlotChart = class BucketingAxisScatterPlotChart extends framework.StatelessWidget {
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
      return new bucketing_axis.BucketingAxisScatterPlotChart.new(bucketing_axis.BucketingAxisScatterPlotChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new bucketing_axis.BucketingAxisScatterPlotChart.new(bucketing_axis.BucketingAxisScatterPlotChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 6)[$toDouble](), intTodouble());
      let myFakeDesktopData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), (dart.notNull(random.nextInt(50)) + 50) / 100, makeRadius(6))]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), (dart.notNull(random.nextInt(50)) + 50) / 100, makeRadius(6))]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), (dart.notNull(random.nextInt(50)) + 50) / 100, makeRadius(6))]);
      let myFakeChromebookData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), (dart.notNull(random.nextInt(50)) + 50) / 100, makeRadius(6))]);
      let myFakeHomeData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), (dart.notNull(random.nextInt(50)) + 50) / 100, makeRadius(6))]);
      let myFakeOtherData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6)), new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6)), new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6)), new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6)), new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6)), new bucketing_axis.LinearSales.new(random.nextInt(100), dart.notNull(random.nextInt(50)) / 100, makeRadius(6))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeMobileData}), SeriesOfLinearSales$int().new({id: "Chromebook", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.purple.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeChromebookData}), SeriesOfLinearSales$int().new({id: "Home", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.indigo.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeHomeData}), SeriesOfLinearSales$int().new({id: "Other", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.gray.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeOtherData})]);
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {primaryMeasureAxis: new bucketing_axis_spec.BucketingAxisSpec.new({threshold: 0.1, tickProviderSpec: new bucketing_axis_spec.BucketingNumericTickProviderSpec.new({desiredTickCount: 3})}), behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([series_legend.SeriesLegend.new({position: chart_behavior.BehaviorPosition.end})]), animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let myFakeDesktopData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(52, 0.75, 14.0)]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(45, 0.3, 18.0)]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(56, 0.8, 17.0)]);
      let myFakeChromebookData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(25, 0.6, 13.0)]);
      let myFakeHomeData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(34, 0.5, 15.0)]);
      let myFakeOtherData = JSArrayOfLinearSales().of([new bucketing_axis.LinearSales.new(10, 0.25, 15.0), new bucketing_axis.LinearSales.new(12, 0.075, 14.0), new bucketing_axis.LinearSales.new(13, 0.225, 15.0), new bucketing_axis.LinearSales.new(16, 0.03, 14.0), new bucketing_axis.LinearSales.new(24, 0.04, 13.0), new bucketing_axis.LinearSales.new(37, 0.1, 14.5)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeMobileData}), SeriesOfLinearSales$int().new({id: "Chromebook", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.purple.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeChromebookData}), SeriesOfLinearSales$int().new({id: "Home", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.indigo.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeHomeData}), SeriesOfLinearSales$int().new({id: "Other", colorFn: dart.fn((sales, _) => material_palette.MaterialPalette.gray.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.revenueShare, LinearSalesAndintTodouble()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: myFakeOtherData})]);
    }
  };
  (bucketing_axis.BucketingAxisScatterPlotChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    bucketing_axis.BucketingAxisScatterPlotChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bucketing_axis.BucketingAxisScatterPlotChart.prototype;
  dart.addTypeTests(bucketing_axis.BucketingAxisScatterPlotChart);
  dart.setMethodSignature(bucketing_axis.BucketingAxisScatterPlotChart, () => ({
    __proto__: dart.getMethods(bucketing_axis.BucketingAxisScatterPlotChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bucketing_axis.BucketingAxisScatterPlotChart, "package:example/scatter_plot_chart/bucketing_axis.dart");
  dart.setFieldSignature(bucketing_axis.BucketingAxisScatterPlotChart, () => ({
    __proto__: dart.getFields(bucketing_axis.BucketingAxisScatterPlotChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(bucketing_axis, "LinearSales.year");
  const revenueShare$ = dart.privateName(bucketing_axis, "LinearSales.revenueShare");
  const radius$ = dart.privateName(bucketing_axis, "LinearSales.radius");
  bucketing_axis.LinearSales = class LinearSales extends core.Object {
    get year() {
      return this[year$];
    }
    set year(value) {
      super.year = value;
    }
    get revenueShare() {
      return this[revenueShare$];
    }
    set revenueShare(value) {
      super.revenueShare = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
  };
  (bucketing_axis.LinearSales.new = function(year, revenueShare, radius) {
    this[year$] = year;
    this[revenueShare$] = revenueShare;
    this[radius$] = radius;
    ;
  }).prototype = bucketing_axis.LinearSales.prototype;
  dart.addTypeTests(bucketing_axis.LinearSales);
  dart.setLibraryUri(bucketing_axis.LinearSales, "package:example/scatter_plot_chart/bucketing_axis.dart");
  dart.setFieldSignature(bucketing_axis.LinearSales, () => ({
    __proto__: dart.getFields(bucketing_axis.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    revenueShare: dart.finalFieldType(core.double),
    radius: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/scatter_plot_chart/bucketing_axis", {
    "package:example/scatter_plot_chart/bucketing_axis.dart": bucketing_axis
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bucketing_axis.dart"],"names":[],"mappings":"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","file":"bucketing_axis.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__bucketing_axis: bucketing_axis
  };
});

//# sourceMappingURL=bucketing_axis.ddc.js.map
