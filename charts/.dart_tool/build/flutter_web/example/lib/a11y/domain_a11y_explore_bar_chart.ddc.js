define(['dart_sdk', 'packages/charts_common/common', 'packages/flutter/src/widgets/actions', 'packages/charts_flutter/flutter'], function(dart_sdk, packages__charts_common__common, packages__flutter__src__widgets__actions, packages__charts_flutter__flutter) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const color = packages__charts_common__common.src__common__color;
  const a11y_explore_behavior = packages__charts_common__common.src__chart__common__behavior__a11y__a11y_explore_behavior;
  const selection_model = packages__charts_common__common.src__chart__common__selection_model__selection_model;
  const chart_behavior = packages__charts_common__common.src__chart__common__behavior__chart_behavior;
  const series_datum = packages__charts_common__common.src__chart__common__series_datum;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const domain_a11y_explore_behavior = packages__charts_flutter__flutter.src__behaviors__a11y__domain_a11y_explore_behavior;
  const domain_highlighter = packages__charts_flutter__flutter.src__behaviors__domain_highlighter;
  const chart_behavior$ = packages__charts_flutter__flutter.src__behaviors__chart_behavior;
  const domain_a11y_explore_bar_chart = Object.create(dart.library);
  const $first = dartx.first;
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(domain_a11y_explore_bar_chart.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(domain_a11y_explore_bar_chart.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToColor = () => (OrdinalSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [domain_a11y_explore_bar_chart.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [domain_a11y_explore_bar_chart.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [domain_a11y_explore_bar_chart.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let ChartBehaviorOfChartBehavior = () => (ChartBehaviorOfChartBehavior = dart.constFn(chart_behavior$.ChartBehavior$(chart_behavior.ChartBehavior)))();
  let JSArrayOfChartBehaviorOfChartBehavior = () => (JSArrayOfChartBehaviorOfChartBehavior = dart.constFn(_interceptors.JSArray$(ChartBehaviorOfChartBehavior())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 11,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultInteractions",
        [_Location_column]: 11,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behaviors",
        [_Location_column]: 11,
        [_Location_line]: 142,
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
        [_Location_column]: 20,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/example/a11y/domain_a11y_explore_bar_chart.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 9,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/example/a11y/domain_a11y_explore_bar_chart.dart"
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
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  const seriesList$ = dart.privateName(domain_a11y_explore_bar_chart, "DomainA11yExploreBarChart.seriesList");
  const animate$ = dart.privateName(domain_a11y_explore_bar_chart, "DomainA11yExploreBarChart.animate");
  domain_a11y_explore_bar_chart.DomainA11yExploreBarChart = class DomainA11yExploreBarChart extends framework.StatelessWidget {
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
      return new domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.new(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.new(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let mobileData = JSArrayOfOrdinalSales().of([new domain_a11y_explore_bar_chart.OrdinalSales.new("2014", random.nextInt(100)), new domain_a11y_explore_bar_chart.OrdinalSales.new("2015", random.nextInt(100)), new domain_a11y_explore_bar_chart.OrdinalSales.new("2016", random.nextInt(100)), new domain_a11y_explore_bar_chart.OrdinalSales.new("2017", random.nextInt(100))]);
      let tabletData = JSArrayOfOrdinalSales().of([new domain_a11y_explore_bar_chart.OrdinalSales.new("2016", random.nextInt(100)), new domain_a11y_explore_bar_chart.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Mobile Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileData}), SeriesOfOrdinalSales$String().new({id: "Tablet Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletData})]);
    }
    vocalizeDomainAndMeasures(seriesDatums) {
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.dload(seriesDatums[$first].datum, 'year'));
      for (let seriesDatum of seriesDatums) {
        let series = seriesDatum.series;
        let datum = seriesDatum.datum;
        buffer.write(" " + dart.str(series.displayName) + " " + dart.str(dart.dsend(dart.dload(datum, 'sales'), '/', [1000])) + " thousand dollars");
      }
      return buffer.toString();
    }
    build(context) {
      return new basic.Semantics.new({label: "Yearly sales bar chart", hint: "Press and hold to enable explore", child: new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, defaultInteractions: !dart.test(media_query.MediaQuery.of(context).accessibleNavigation), behaviors: JSArrayOfChartBehaviorOfChartBehavior().of([domain_a11y_explore_behavior.DomainA11yExploreBehavior.new({vocalizationCallback: dart.bind(this, 'vocalizeDomainAndMeasures'), exploreModeTrigger: a11y_explore_behavior.ExploreModeTrigger.pressHold, exploreModeEnabledAnnouncement: "Explore mode enabled", exploreModeDisabledAnnouncement: "Explore mode disabled", minimumWidth: 1.0}), new domain_highlighter.DomainHighlighter.new(selection_model.SelectionModelType.info)]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
    static _createSampleData() {
      let mobileData = JSArrayOfOrdinalSales().of([new domain_a11y_explore_bar_chart.OrdinalSales.new("2014", 5), new domain_a11y_explore_bar_chart.OrdinalSales.new("2015", 25), new domain_a11y_explore_bar_chart.OrdinalSales.new("2016", 100), new domain_a11y_explore_bar_chart.OrdinalSales.new("2017", 75)]);
      let tabletData = JSArrayOfOrdinalSales().of([new domain_a11y_explore_bar_chart.OrdinalSales.new("2016", 25), new domain_a11y_explore_bar_chart.OrdinalSales.new("2017", 50)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Mobile Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileData}), SeriesOfOrdinalSales$String().new({id: "Tablet Sales", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, OrdinalSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tabletData})]);
    }
  };
  (domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.prototype;
  dart.addTypeTests(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart);
  dart.setMethodSignature(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart, () => ({
    __proto__: dart.getMethods(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.__proto__),
    vocalizeDomainAndMeasures: dart.fnType(core.String, [core.List$(series_datum.SeriesDatum)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart, "package:example/a11y/domain_a11y_explore_bar_chart.dart");
  dart.setFieldSignature(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart, () => ({
    __proto__: dart.getFields(domain_a11y_explore_bar_chart.DomainA11yExploreBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(domain_a11y_explore_bar_chart, "OrdinalSales.year");
  const sales$ = dart.privateName(domain_a11y_explore_bar_chart, "OrdinalSales.sales");
  domain_a11y_explore_bar_chart.OrdinalSales = class OrdinalSales extends core.Object {
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
  (domain_a11y_explore_bar_chart.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = domain_a11y_explore_bar_chart.OrdinalSales.prototype;
  dart.addTypeTests(domain_a11y_explore_bar_chart.OrdinalSales);
  dart.setLibraryUri(domain_a11y_explore_bar_chart.OrdinalSales, "package:example/a11y/domain_a11y_explore_bar_chart.dart");
  dart.setFieldSignature(domain_a11y_explore_bar_chart.OrdinalSales, () => ({
    __proto__: dart.getFields(domain_a11y_explore_bar_chart.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/a11y/domain_a11y_explore_bar_chart", {
    "package:example/a11y/domain_a11y_explore_bar_chart.dart": domain_a11y_explore_bar_chart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["domain_a11y_explore_bar_chart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwC4B;;;;;;IACf;;;;;;;;AAMT,YAAW,iEACT,uFAES;IAEb;;;AAOE,YAAW,iEAA0B;IACvC;;AAIQ,mBAAa;AAEb,uBAAa,4BACb,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,uBAAa,4BAGb,mDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,mDAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,yBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,UAAU,IAEd,uCACE,yBACK,SAAC,GAAG,OAA8B,AAAI,2FACrC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,UAAU;IAGtB;8BAW0D;AAClD,mBAAa;AAIwB,MAA3C,AAAO,MAAD,OAAgC,WAAzB,AAAa,AAAM,YAAP;AAEzB,eAAwB,cAAe,aAAY;AAC3C,qBAAS,AAAY,WAAD;AACpB,oBAAQ,AAAY,WAAD;AAGoB,QAD7C,AAAO,MAAD,OAAO,eAAI,AAAO,MAAD,gBAAa,eACjB,WAAN,WAAN,KAAK,kBAAS,UAAK;;AAG5B,YAAO,AAAO,OAAD;IACf;UAG0B;AACxB,YAAW,iCAEA,gCAGD,2CACK,iEACT,4BACS,mCAKY,WAAY,AAAY,0BAAT,OAAO,oCAChC,4CACL,4FAIoB,wDAKwB,oFAGd,yDAGC,uCAKnB,OAMZ,6CAAmD;IAGjE;;AAIQ,uBAAa,4BACb,mDAAa,QAAQ,IACrB,mDAAa,QAAQ,KACrB,mDAAa,QAAQ,MACrB,mDAAa,QAAQ;AAGrB,uBAAa,4BAGb,mDAAa,QAAQ,KACrB,mDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,yBACK,SAAC,GAAG,OAA8B,AAAK,4FACtC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,UAAU,IAEd,uCACE,yBACK,SAAC,GAAG,OAA8B,AAAI,2FACrC,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,UAAU;IAGtB;;0EAlK+B;QAAkB;;IAAlB;IAAkB;AAAjD;;EAA0D;;;;;;;;;;;;;;;;IAuK7C;;;;;;IACH;;;;;;;6DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"domain_a11y_explore_bar_chart.ddc.js"}');
  // Exports:
  return {
    a11y__domain_a11y_explore_bar_chart: domain_a11y_explore_bar_chart
  };
});

//# sourceMappingURL=domain_a11y_explore_bar_chart.ddc.js.map
