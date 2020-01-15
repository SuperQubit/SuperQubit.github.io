define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const base_bar_renderer_config = packages__charts_common__common.src__chart__bar__base_bar_renderer_config;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const grouped = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(grouped.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(grouped.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [grouped.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [grouped.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barGroupingType",
        [_Location_column]: 7,
        [_Location_line]: 98,
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
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/grouped.dart"
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
  const seriesList$ = dart.privateName(grouped, "GroupedBarChart.seriesList");
  const animate$ = dart.privateName(grouped, "GroupedBarChart.animate");
  grouped.GroupedBarChart = class GroupedBarChart extends framework.StatelessWidget {
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
      return new grouped.GroupedBarChart.new(grouped.GroupedBarChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new grouped.GroupedBarChart.new(grouped.GroupedBarChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let desktopSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", random.nextInt(100)), new grouped.OrdinalSales.new("2015", random.nextInt(100)), new grouped.OrdinalSales.new("2016", random.nextInt(100)), new grouped.OrdinalSales.new("2017", random.nextInt(100))]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", random.nextInt(100)), new grouped.OrdinalSales.new("2015", random.nextInt(100)), new grouped.OrdinalSales.new("2016", random.nextInt(100)), new grouped.OrdinalSales.new("2017", random.nextInt(100))]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", random.nextInt(100)), new grouped.OrdinalSales.new("2015", random.nextInt(100)), new grouped.OrdinalSales.new("2016", random.nextInt(100)), new grouped.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, barGroupingType: base_bar_renderer_config.BarGroupingType.grouped, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let desktopSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", 5), new grouped.OrdinalSales.new("2015", 25), new grouped.OrdinalSales.new("2016", 100), new grouped.OrdinalSales.new("2017", 75)]);
      let tableSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", 25), new grouped.OrdinalSales.new("2015", 50), new grouped.OrdinalSales.new("2016", 10), new grouped.OrdinalSales.new("2017", 20)]);
      let mobileSalesData = JSArrayOfOrdinalSales().of([new grouped.OrdinalSales.new("2014", 10), new grouped.OrdinalSales.new("2015", 15), new grouped.OrdinalSales.new("2016", 50), new grouped.OrdinalSales.new("2017", 45)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Desktop", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: desktopSalesData}), SeriesOfOrdinalSales$String().new({id: "Tablet", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: tableSalesData}), SeriesOfOrdinalSales$String().new({id: "Mobile", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: mobileSalesData})]);
    }
  };
  (grouped.GroupedBarChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    grouped.GroupedBarChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grouped.GroupedBarChart.prototype;
  dart.addTypeTests(grouped.GroupedBarChart);
  dart.setMethodSignature(grouped.GroupedBarChart, () => ({
    __proto__: dart.getMethods(grouped.GroupedBarChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grouped.GroupedBarChart, "package:example/bar_chart/grouped.dart");
  dart.setFieldSignature(grouped.GroupedBarChart, () => ({
    __proto__: dart.getFields(grouped.GroupedBarChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(grouped, "OrdinalSales.year");
  const sales$ = dart.privateName(grouped, "OrdinalSales.sales");
  grouped.OrdinalSales = class OrdinalSales extends core.Object {
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
  (grouped.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = grouped.OrdinalSales.prototype;
  dart.addTypeTests(grouped.OrdinalSales);
  dart.setLibraryUri(grouped.OrdinalSales, "package:example/bar_chart/grouped.dart");
  dart.setFieldSignature(grouped.OrdinalSales, () => ({
    __proto__: dart.getFields(grouped.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/grouped", {
    "package:example/bar_chart/grouped.dart": grouped
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["grouped.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;;AAKT,YAAW,iCACT,uDAES;IAEb;;;AAOE,YAAW,iCAAgB;IAC7B;;AAIQ,mBAAa;AAEb,6BAAmB,4BACnB,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,2BAAiB,4BACjB,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS;AAGpC,4BAAkB,4BAClB,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6BAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,IAElB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AACxB,YAAW,kEACT,4BACS,+BAC+B;IAE5C;;AAIQ,6BAAmB,4BACnB,6BAAa,QAAQ,IACrB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ,MACrB,6BAAa,QAAQ;AAGrB,2BAAiB,4BACjB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ;AAGrB,4BAAkB,4BAClB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ,KACrB,6BAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,qBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,gBAAgB,IAEpB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,cAAc,IAElB,uCACE,oBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;0CAtHqB;QAAkB;;IAAlB;IAAkB;AAAvC;;EAAgD;;;;;;;;;;;;;;;IA2HnC;;;;;;IACH;;;;;;;uCAEQ,MAAW;IAAX;IAAW;;EAAM","file":"grouped.ddc.js"}');
  // Exports:
  return {
    bar_chart__grouped: grouped
  };
});

//# sourceMappingURL=grouped.ddc.js.map
