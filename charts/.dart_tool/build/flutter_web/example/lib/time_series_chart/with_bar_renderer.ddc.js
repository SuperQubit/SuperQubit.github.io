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
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const time_series_chart = packages__charts_flutter__flutter.src__time_series_chart;
  const select_nearest = packages__charts_flutter__flutter.src__behaviors__select_nearest;
  const domain_highlighter = packages__charts_flutter__flutter.src__behaviors__domain_highlighter;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const with_bar_renderer = Object.create(dart.library);
  let JSArrayOfTimeSeriesSales = () => (JSArrayOfTimeSeriesSales = dart.constFn(_interceptors.JSArray$(with_bar_renderer.TimeSeriesSales)))();
  let SeriesOfTimeSeriesSales$DateTime = () => (SeriesOfTimeSeriesSales$DateTime = dart.constFn(series.Series$(with_bar_renderer.TimeSeriesSales, core.DateTime)))();
  let TimeSeriesSalesAndintToColor = () => (TimeSeriesSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [with_bar_renderer.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToDateTime = () => (TimeSeriesSalesAndintToDateTime = dart.constFn(dart.fnType(core.DateTime, [with_bar_renderer.TimeSeriesSales, core.int])))();
  let TimeSeriesSalesAndintToint = () => (TimeSeriesSalesAndintToint = dart.constFn(dart.fnType(core.int, [with_bar_renderer.TimeSeriesSales, core.int])))();
  let JSArrayOfSeriesOfTimeSeriesSales$DateTime = () => (JSArrayOfSeriesOfTimeSeriesSales$DateTime = dart.constFn(_interceptors.JSArray$(SeriesOfTimeSeriesSales$DateTime())))();
  let BarRendererConfigOfDateTime = () => (BarRendererConfigOfDateTime = dart.constFn(bar_renderer_config.BarRendererConfig$(core.DateTime)))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultInteractions",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 100,
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
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/example/time_series_chart/with_bar_renderer.dart"
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
  const seriesList$ = dart.privateName(with_bar_renderer, "TimeSeriesBar.seriesList");
  const animate$ = dart.privateName(with_bar_renderer, "TimeSeriesBar.animate");
  with_bar_renderer.TimeSeriesBar = class TimeSeriesBar extends framework.StatelessWidget {
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
      return new with_bar_renderer.TimeSeriesBar.new(with_bar_renderer.TimeSeriesBar._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new with_bar_renderer.TimeSeriesBar.new(with_bar_renderer.TimeSeriesBar._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfTimeSeriesSales().of([new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 1), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 2), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 3), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 4), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 5), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 6), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 7), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 8), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 9), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 10), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 11), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 12), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 13), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 14), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 15), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 16), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 17), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 18), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 20), random.nextInt(100)), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 21), random.nextInt(100))]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new time_series_chart.TimeSeriesChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new (BarRendererConfigOfDateTime()).new(), defaultInteractions: false, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([select_nearest.SelectNearest.new(), new domain_highlighter.DomainHighlighter.new()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfTimeSeriesSales().of([new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 1), 5), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 2), 5), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 3), 25), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 4), 100), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 5), 75), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 6), 88), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 7), 65), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 8), 91), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 9), 100), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 10), 111), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 11), 90), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 12), 50), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 13), 40), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 14), 30), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 15), 40), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 16), 50), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 17), 30), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 18), 35), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 19), 40), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 20), 32), new with_bar_renderer.TimeSeriesSales.new(new core.DateTime.new(2017, 9, 21), 31)]);
      return JSArrayOfSeriesOfTimeSeriesSales$DateTime().of([SeriesOfTimeSeriesSales$DateTime().new({id: "Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, TimeSeriesSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.time, TimeSeriesSalesAndintToDateTime()), measureFn: dart.fn((sales, _) => sales.sales, TimeSeriesSalesAndintToint()), data: data})]);
    }
  };
  (with_bar_renderer.TimeSeriesBar.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    with_bar_renderer.TimeSeriesBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = with_bar_renderer.TimeSeriesBar.prototype;
  dart.addTypeTests(with_bar_renderer.TimeSeriesBar);
  dart.setMethodSignature(with_bar_renderer.TimeSeriesBar, () => ({
    __proto__: dart.getMethods(with_bar_renderer.TimeSeriesBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(with_bar_renderer.TimeSeriesBar, "package:example/time_series_chart/with_bar_renderer.dart");
  dart.setFieldSignature(with_bar_renderer.TimeSeriesBar, () => ({
    __proto__: dart.getFields(with_bar_renderer.TimeSeriesBar.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series$(with_bar_renderer.TimeSeriesSales, core.DateTime))),
    animate: dart.finalFieldType(core.bool)
  }));
  const time$ = dart.privateName(with_bar_renderer, "TimeSeriesSales.time");
  const sales$ = dart.privateName(with_bar_renderer, "TimeSeriesSales.sales");
  with_bar_renderer.TimeSeriesSales = class TimeSeriesSales extends core.Object {
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get sales() {
      return this[sales$];
    }
    set sales(value) {
      super.sales = value;
    }
  };
  (with_bar_renderer.TimeSeriesSales.new = function(time, sales) {
    this[time$] = time;
    this[sales$] = sales;
    ;
  }).prototype = with_bar_renderer.TimeSeriesSales.prototype;
  dart.addTypeTests(with_bar_renderer.TimeSeriesSales);
  dart.setLibraryUri(with_bar_renderer.TimeSeriesSales, "package:example/time_series_chart/with_bar_renderer.dart");
  dart.setFieldSignature(with_bar_renderer.TimeSeriesSales, () => ({
    __proto__: dart.getFields(with_bar_renderer.TimeSeriesSales.__proto__),
    time: dart.finalFieldType(core.DateTime),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/time_series_chart/with_bar_renderer", {
    "package:example/time_series_chart/with_bar_renderer.dart": with_bar_renderer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["with_bar_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBuD;;;;;;IAC1C;;;;;;;;AAMT,YAAW,yCACT,+DAES;IAEb;;;AAOE,YAAW,yCAAc;IAC3B;;AAIQ,mBAAa;AAEb,iBAAO,+BACP,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,IAAI,AAAO,MAAD,SAAS,OACzD,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS,OAC1D,0CAAoB,sBAAS,MAAM,GAAG,KAAK,AAAO,MAAD,SAAS;AAGhE,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;UAI0B;AACxB,YAAW,2CACT,2BACS,+BAGY,gEAIA,kBAGV,4CAAK,oCAA4B;IAEhD;;AAIQ,iBAAO,+BACP,0CAAoB,sBAAS,MAAM,GAAG,IAAI,IAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,IAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,KAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,MAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,KAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,KAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,KAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,KAC1C,0CAAoB,sBAAS,MAAM,GAAG,IAAI,MAC1C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,MAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK,KAC3C,0CAAoB,sBAAS,MAAM,GAAG,KAAK;AAGjD,YAAO,iDACD,4CACE,kBACK,SAAC,GAAG,OAA8B,AAAK,+FACtC,SAAiB,OAAO,MAAM,AAAM,KAAD,sDAClC,SAAiB,OAAO,MAAM,AAAM,KAAD,6CACxC,IAAI;IAGhB;;kDAhHmB;QAAkB;;IAAlB;IAAkB;AAArC;;EAA8C;;;;;;;;;;;;;;;IAqH/B;;;;;;IACL;;;;;;;oDAEW,MAAW;IAAX;IAAW;;EAAM","file":"with_bar_renderer.ddc.js"}');
  // Exports:
  return {
    time_series_chart__with_bar_renderer: with_bar_renderer
  };
});

//# sourceMappingURL=with_bar_renderer.ddc.js.map
