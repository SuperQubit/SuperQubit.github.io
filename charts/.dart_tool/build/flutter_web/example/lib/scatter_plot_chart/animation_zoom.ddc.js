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
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const scatter_plot_chart = packages__charts_flutter__flutter.src__scatter_plot_chart;
  const pan_and_zoom_behavior = packages__charts_flutter__flutter.src__behaviors__zoom__pan_and_zoom_behavior;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const animation_zoom = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  const $add = dartx.add;
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(animation_zoom.LinearSales)))();
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(animation_zoom.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [animation_zoom.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [animation_zoom.LinearSales, core.int])))();
  let LinearSalesAndintTodouble = () => (LinearSalesAndintTodouble = dart.constFn(dart.fnType(core.double, [animation_zoom.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(animation_zoom.LinearSales, core.num)))();
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
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 9,
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
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/example/scatter_plot_chart/animation_zoom.dart"
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
  const seriesList$ = dart.privateName(animation_zoom, "ScatterPlotAnimationZoomChart.seriesList");
  const animate$ = dart.privateName(animation_zoom, "ScatterPlotAnimationZoomChart.animate");
  animation_zoom.ScatterPlotAnimationZoomChart = class ScatterPlotAnimationZoomChart extends framework.StatelessWidget {
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
      return new animation_zoom.ScatterPlotAnimationZoomChart.new(animation_zoom.ScatterPlotAnimationZoomChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new animation_zoom.ScatterPlotAnimationZoomChart.new(animation_zoom.ScatterPlotAnimationZoomChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfLinearSales().of([]);
      let makeRadius = dart.fn(value => (dart.notNull(random.nextInt(value)) + 2)[$toDouble](), intTodouble());
      for (let i = 0; i < 100; i = i + 1) {
        data[$add](new animation_zoom.LinearSales.new(i, random.nextInt(100), makeRadius(4)));
      }
      let maxMeasure = 100;
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
    build(context) {
      return new scatter_plot_chart.ScatterPlotChart.new(this.seriesList, {animate: this.animate, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([new pan_and_zoom_behavior.PanAndZoomBehavior.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfLinearSales().of([new animation_zoom.LinearSales.new(0, 5, 3.0), new animation_zoom.LinearSales.new(10, 25, 5.0), new animation_zoom.LinearSales.new(12, 75, 4.0), new animation_zoom.LinearSales.new(13, 225, 5.0), new animation_zoom.LinearSales.new(16, 50, 4.0), new animation_zoom.LinearSales.new(24, 75, 3.0), new animation_zoom.LinearSales.new(25, 100, 3.0), new animation_zoom.LinearSales.new(34, 150, 5.0), new animation_zoom.LinearSales.new(37, 10, 4.5), new animation_zoom.LinearSales.new(45, 300, 8.0), new animation_zoom.LinearSales.new(52, 15, 4.0), new animation_zoom.LinearSales.new(56, 200, 7.0)]);
      let maxMeasure = 300;
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Sales", colorFn: dart.fn((sales, _) => {
            let bucket = dart.notNull(sales.sales) / maxMeasure;
            if (bucket < 1 / 3) {
              return material_palette.MaterialPalette.blue.shadeDefault;
            } else if (bucket < 2 / 3) {
              return material_palette.MaterialPalette.red.shadeDefault;
            } else {
              return material_palette.MaterialPalette.green.shadeDefault;
            }
          }, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), radiusPxFn: dart.fn((sales, _) => sales.radius, LinearSalesAndintTodouble()), data: data})]);
    }
  };
  (animation_zoom.ScatterPlotAnimationZoomChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    animation_zoom.ScatterPlotAnimationZoomChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animation_zoom.ScatterPlotAnimationZoomChart.prototype;
  dart.addTypeTests(animation_zoom.ScatterPlotAnimationZoomChart);
  dart.setMethodSignature(animation_zoom.ScatterPlotAnimationZoomChart, () => ({
    __proto__: dart.getMethods(animation_zoom.ScatterPlotAnimationZoomChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(animation_zoom.ScatterPlotAnimationZoomChart, "package:example/scatter_plot_chart/animation_zoom.dart");
  dart.setFieldSignature(animation_zoom.ScatterPlotAnimationZoomChart, () => ({
    __proto__: dart.getFields(animation_zoom.ScatterPlotAnimationZoomChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(animation_zoom, "LinearSales.year");
  const sales$ = dart.privateName(animation_zoom, "LinearSales.sales");
  const radius$ = dart.privateName(animation_zoom, "LinearSales.radius");
  animation_zoom.LinearSales = class LinearSales extends core.Object {
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
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
  };
  (animation_zoom.LinearSales.new = function(year, sales, radius) {
    this[year$] = year;
    this[sales$] = sales;
    this[radius$] = radius;
    ;
  }).prototype = animation_zoom.LinearSales.prototype;
  dart.addTypeTests(animation_zoom.LinearSales);
  dart.setLibraryUri(animation_zoom.LinearSales, "package:example/scatter_plot_chart/animation_zoom.dart");
  dart.setFieldSignature(animation_zoom.LinearSales, () => ({
    __proto__: dart.getFields(animation_zoom.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int),
    radius: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/example/scatter_plot_chart/animation_zoom", {
    "package:example/scatter_plot_chart/animation_zoom.dart": animation_zoom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation_zoom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,sDACT,4EAES;IAEb;;;AAOE,YAAW,sDAA8B;IAC3C;;AAIQ,mBAAa;AAEb,iBAAoB;AAEpB,uBAAa,QAAK,SAAsC,CAAL,aAAtB,AAAO,MAAD,SAAS,KAAK,KAAI;AAE3D,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACwC,QAAhE,AAAK,IAAD,OAAS,mCAAY,CAAC,EAAE,AAAO,MAAD,SAAS,MAAM,AAAU,UAAA,CAAC;;AAGxD,uBAAa;AAEnB,YAAO,wCACD,mCACE,kBACK,SAAa,OAAO;AAErB,yBAAqB,aAAZ,AAAM,KAAD,UAAS,UAAU;AAEvC,gBAAI,AAAO,MAAD,GAAG,AAAE,IAAE;AACf,oBAA8B,AAAK;kBAC9B,KAAI,AAAO,MAAD,GAAG,AAAE,IAAE;AACtB,oBAA8B,AAAI;;AAElC,oBAA8B,AAAM;;oDAG9B,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,+CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,6CACrC,IAAI;IAGhB;UAI0B;AACxB,YAAW,6CAAwB,2BACtB,yBACE,4CACL;IAEZ;;AAIQ,iBAAO,2BACP,mCAAY,GAAG,GAAG,MAClB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,KAAK,MACrB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,KAAK,MACrB,mCAAY,IAAI,KAAK,MACrB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,KAAK,MACrB,mCAAY,IAAI,IAAI,MACpB,mCAAY,IAAI,KAAK;AAGrB,uBAAa;AAEnB,YAAO,wCACD,mCACE,kBACK,SAAa,OAAO;AAErB,yBAAqB,aAAZ,AAAM,KAAD,UAAS,UAAU;AAEvC,gBAAI,AAAO,MAAD,GAAG,AAAE,IAAE;AACf,oBAA8B,AAAK;kBAC9B,KAAI,AAAO,MAAD,GAAG,AAAE,IAAE;AACtB,oBAA8B,AAAI;;AAElC,oBAA8B,AAAM;;oDAG9B,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,+CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,6CACrC,IAAI;IAGhB;;+DA1GmC;QAAkB;;IAAlB;IAAkB;AAArD;;EAA8D;;;;;;;;;;;;;;;;IA+GpD;;;;;;IACA;;;;;;IACG;;;;;;;6CAEI,MAAW,OAAY;IAAvB;IAAW;IAAY;;EAAO","file":"animation_zoom.ddc.js"}');
  // Exports:
  return {
    scatter_plot_chart__animation_zoom: animation_zoom
  };
});

//# sourceMappingURL=animation_zoom.ddc.js.map
