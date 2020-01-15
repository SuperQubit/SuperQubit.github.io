define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/charts_flutter/flutter', 'packages/charts_common/common', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__charts_flutter__flutter, packages__charts_common__common, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const symbol_renderer = packages__charts_flutter__flutter.src__symbol_renderer;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const series_legend = packages__charts_flutter__flutter.src__behaviors__legend__series_legend;
  const chart_behavior = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const series = packages__charts_common__common.src__data__series;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const chart_behavior$ = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const bar_renderer_config = packages__charts_common__common.src__chart__bar__bar_renderer_config;
  const icons = packages__flutter__material.src__material__icons;
  const legend_custom_symbol = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(legend_custom_symbol.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(legend_custom_symbol.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [legend_custom_symbol.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [legend_custom_symbol.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior.ChartBehavior$(chart_behavior$.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  let BarRendererConfigOfString = () => (BarRendererConfigOfString = dart.constFn(bar_renderer_config.BarRendererConfig$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 47,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 61,
        [_Location_line]: 40,
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
        [_Location_column]: 32,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legend_custom_symbol.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 40,
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legend_custom_symbol.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/example/legends/legend_custom_symbol.dart"
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
  const iconData$ = dart.privateName(legend_custom_symbol, "IconRenderer.iconData");
  legend_custom_symbol.IconRenderer = class IconRenderer extends symbol_renderer.CustomSymbolRenderer {
    get iconData() {
      return this[iconData$];
    }
    set iconData(value) {
      super.iconData = value;
    }
    build(context, opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      if (!dart.test(enabled)) {
        color = color.withOpacity(0.26);
      }
      return new basic.SizedBox.fromSize({size: size, child: new icon.Icon.new(this.iconData, {color: color, size: 12.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (legend_custom_symbol.IconRenderer.new = function(iconData) {
    this[iconData$] = iconData;
    legend_custom_symbol.IconRenderer.__proto__.new.call(this);
    ;
  }).prototype = legend_custom_symbol.IconRenderer.prototype;
  dart.addTypeTests(legend_custom_symbol.IconRenderer);
  dart.setMethodSignature(legend_custom_symbol.IconRenderer, () => ({
    __proto__: dart.getMethods(legend_custom_symbol.IconRenderer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext], {color: ui.Color, enabled: core.bool, size: ui.Size}, {})
  }));
  dart.setLibraryUri(legend_custom_symbol.IconRenderer, "package:example/legends/legend_custom_symbol.dart");
  dart.setFieldSignature(legend_custom_symbol.IconRenderer, () => ({
    __proto__: dart.getFields(legend_custom_symbol.IconRenderer.__proto__),
    iconData: dart.finalFieldType(icon_data.IconData)
  }));
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C10;
  let C9;
  const seriesList$ = dart.privateName(legend_custom_symbol, "LegendWithCustomSymbol.seriesList");
  const animate$ = dart.privateName(legend_custom_symbol, "LegendWithCustomSymbol.animate");
  legend_custom_symbol.LegendWithCustomSymbol = class LegendWithCustomSymbol extends framework.StatelessWidget {
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
      return new legend_custom_symbol.LegendWithCustomSymbol.new(legend_custom_symbol.LegendWithCustomSymbol._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new legend_custom_symbol.LegendWithCustomSymbol.new(legend_custom_symbol.LegendWithCustomSymbol._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2015", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2016", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2017", random.nextInt(100))]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2015", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2016", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2015", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2016", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2017", random.nextInt(100))]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2015", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2016", random.nextInt(100)), new legend_custom_symbol.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([series_legend.SeriesLegend.new()]), defaultRenderer: new (BarRendererConfigOfString()).new({symbolRenderer: new legend_custom_symbol.IconRenderer.new(icons.Icons.cloud)}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", 5), new legend_custom_symbol.OrdinalSales.new("2015", 25), new legend_custom_symbol.OrdinalSales.new("2016", 100), new legend_custom_symbol.OrdinalSales.new("2017", 75)]);
      let tabletSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", 25), new legend_custom_symbol.OrdinalSales.new("2015", 50), new legend_custom_symbol.OrdinalSales.new("2016", 10), new legend_custom_symbol.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", 10), new legend_custom_symbol.OrdinalSales.new("2015", 15), new legend_custom_symbol.OrdinalSales.new("2016", 50), new legend_custom_symbol.OrdinalSales.new("2017", 45)]);
      let otherSalesData = JSArrayOfOrdinalSales().of([new legend_custom_symbol.OrdinalSales.new("2014", 20), new legend_custom_symbol.OrdinalSales.new("2015", 35), new legend_custom_symbol.OrdinalSales.new("2016", 15), new legend_custom_symbol.OrdinalSales.new("2017", 10)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData}), SeriesOfOrdinalSales$String().new({id: "Other", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: otherSalesData})]);
    }
  };
  (legend_custom_symbol.LegendWithCustomSymbol.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    legend_custom_symbol.LegendWithCustomSymbol.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = legend_custom_symbol.LegendWithCustomSymbol.prototype;
  dart.addTypeTests(legend_custom_symbol.LegendWithCustomSymbol);
  dart.setMethodSignature(legend_custom_symbol.LegendWithCustomSymbol, () => ({
    __proto__: dart.getMethods(legend_custom_symbol.LegendWithCustomSymbol.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(legend_custom_symbol.LegendWithCustomSymbol, "package:example/legends/legend_custom_symbol.dart");
  dart.setFieldSignature(legend_custom_symbol.LegendWithCustomSymbol, () => ({
    __proto__: dart.getFields(legend_custom_symbol.LegendWithCustomSymbol.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(legend_custom_symbol, "OrdinalSales.year");
  const sales$ = dart.privateName(legend_custom_symbol, "OrdinalSales.sales");
  legend_custom_symbol.OrdinalSales = class OrdinalSales extends core.Object {
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
  (legend_custom_symbol.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = legend_custom_symbol.OrdinalSales.prototype;
  dart.addTypeTests(legend_custom_symbol.OrdinalSales);
  dart.setLibraryUri(legend_custom_symbol.OrdinalSales, "package:example/legends/legend_custom_symbol.dart");
  dart.setFieldSignature(legend_custom_symbol.OrdinalSales, () => ({
    __proto__: dart.getFields(legend_custom_symbol.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/legends/legend_custom_symbol", {
    "package:example/legends/legend_custom_symbol.dart": legend_custom_symbol
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["legend_custom_symbol.dart"],"names":[],"mappings":"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","file":"legend_custom_symbol.ddc.js"}');
  // Exports:
  return {
    legends__legend_custom_symbol: legend_custom_symbol
  };
});

//# sourceMappingURL=legend_custom_symbol.ddc.js.map
