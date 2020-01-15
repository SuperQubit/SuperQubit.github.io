define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const selection_bar_highlight = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(selection_bar_highlight.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(selection_bar_highlight.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [selection_bar_highlight.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [selection_bar_highlight.OrdinalSales, core.int])))();
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
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultInteractions",
        [_Location_column]: 7,
        [_Location_line]: 80,
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
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/example/behaviors/selection_bar_highlight.dart"
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
  const seriesList$ = dart.privateName(selection_bar_highlight, "SelectionBarHighlight.seriesList");
  const animate$ = dart.privateName(selection_bar_highlight, "SelectionBarHighlight.animate");
  selection_bar_highlight.SelectionBarHighlight = class SelectionBarHighlight extends framework.StatelessWidget {
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
      return new selection_bar_highlight.SelectionBarHighlight.new(selection_bar_highlight.SelectionBarHighlight._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new selection_bar_highlight.SelectionBarHighlight.new(selection_bar_highlight.SelectionBarHighlight._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new selection_bar_highlight.OrdinalSales.new("2014", random.nextInt(100)), new selection_bar_highlight.OrdinalSales.new("2015", random.nextInt(100)), new selection_bar_highlight.OrdinalSales.new("2016", random.nextInt(100)), new selection_bar_highlight.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, defaultInteractions: true, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new selection_bar_highlight.OrdinalSales.new("2014", 5), new selection_bar_highlight.OrdinalSales.new("2015", 25), new selection_bar_highlight.OrdinalSales.new("2016", 100), new selection_bar_highlight.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data})]);
    }
  };
  (selection_bar_highlight.SelectionBarHighlight.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    selection_bar_highlight.SelectionBarHighlight.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_bar_highlight.SelectionBarHighlight.prototype;
  dart.addTypeTests(selection_bar_highlight.SelectionBarHighlight);
  dart.setMethodSignature(selection_bar_highlight.SelectionBarHighlight, () => ({
    __proto__: dart.getMethods(selection_bar_highlight.SelectionBarHighlight.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(selection_bar_highlight.SelectionBarHighlight, "package:example/behaviors/selection_bar_highlight.dart");
  dart.setFieldSignature(selection_bar_highlight.SelectionBarHighlight, () => ({
    __proto__: dart.getFields(selection_bar_highlight.SelectionBarHighlight.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(selection_bar_highlight, "OrdinalSales.year");
  const sales$ = dart.privateName(selection_bar_highlight, "OrdinalSales.sales");
  selection_bar_highlight.OrdinalSales = class OrdinalSales extends core.Object {
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
  (selection_bar_highlight.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = selection_bar_highlight.OrdinalSales.prototype;
  dart.addTypeTests(selection_bar_highlight.OrdinalSales);
  dart.setLibraryUri(selection_bar_highlight.OrdinalSales, "package:example/behaviors/selection_bar_highlight.dart");
  dart.setFieldSignature(selection_bar_highlight.OrdinalSales, () => ({
    __proto__: dart.getFields(selection_bar_highlight.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/behaviors/selection_bar_highlight", {
    "package:example/behaviors/selection_bar_highlight.dart": selection_bar_highlight
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_bar_highlight.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,uDACT,6EAES;IAEb;;;AAOE,YAAW,uDAAsB;IACnC;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,6CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6CAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,6CAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;UAI0B;AAUxB,YAAW,kEACT,4BACS,mCACY;IAEzB;;AAIQ,iBAAO,4BACP,6CAAa,QAAQ,IACrB,6CAAa,QAAQ,KACrB,6CAAa,QAAQ,MACrB,6CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI;IAGhB;;gEA5E2B;QAAkB;;IAAlB;IAAkB;AAA7C;;EAAsD;;;;;;;;;;;;;;;IAiFzC;;;;;;IACH;;;;;;;uDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"selection_bar_highlight.ddc.js"}');
  // Exports:
  return {
    behaviors__selection_bar_highlight: selection_bar_highlight
  };
});

//# sourceMappingURL=selection_bar_highlight.ddc.js.map
