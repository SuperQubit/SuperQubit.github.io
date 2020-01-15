define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const tick_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__tick_spec;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const color = packages__charts_common__common.src__common__color;
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const statically_provided_ticks = Object.create(dart.library);
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(statically_provided_ticks.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(statically_provided_ticks.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [statically_provided_ticks.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [statically_provided_ticks.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let TickSpecOfString = () => (TickSpecOfString = dart.constFn(tick_spec.TickSpec$(core.String)))();
  let JSArrayOfTickSpecOfString = () => (JSArrayOfTickSpecOfString = dart.constFn(_interceptors.JSArray$(TickSpecOfString())))();
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
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 102,
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
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/example/axes/statically_provided_ticks.dart"
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
  const seriesList$ = dart.privateName(statically_provided_ticks, "StaticallyProvidedTicks.seriesList");
  const animate$ = dart.privateName(statically_provided_ticks, "StaticallyProvidedTicks.animate");
  statically_provided_ticks.StaticallyProvidedTicks = class StaticallyProvidedTicks extends framework.StatelessWidget {
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
      return new statically_provided_ticks.StaticallyProvidedTicks.new(statically_provided_ticks.StaticallyProvidedTicks._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new statically_provided_ticks.StaticallyProvidedTicks.new(statically_provided_ticks.StaticallyProvidedTicks._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let globalSalesData = JSArrayOfOrdinalSales().of([new statically_provided_ticks.OrdinalSales.new("2014", dart.notNull(random.nextInt(100)) * 100), new statically_provided_ticks.OrdinalSales.new("2015", dart.notNull(random.nextInt(100)) * 100), new statically_provided_ticks.OrdinalSales.new("2016", dart.notNull(random.nextInt(100)) * 100), new statically_provided_ticks.OrdinalSales.new("2017", dart.notNull(random.nextInt(100)) * 100)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
    build(context) {
      let staticTicks = JSArrayOfTickSpecOfString().of([new (TickSpecOfString()).new("2014", {label: "Year 2014", style: new axis_spec.TextStyleSpec.new({color: new color.Color.new({r: 76, g: 175, b: 80})})}), new (TickSpecOfString()).new("2015"), new (TickSpecOfString()).new("2016"), new (TickSpecOfString()).new("2017")]);
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({tickProviderSpec: new ordinal_axis_spec.StaticOrdinalTickProviderSpec.new(staticTicks)}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let globalSalesData = JSArrayOfOrdinalSales().of([new statically_provided_ticks.OrdinalSales.new("2014", 5000), new statically_provided_ticks.OrdinalSales.new("2015", 25000), new statically_provided_ticks.OrdinalSales.new("2016", 100000), new statically_provided_ticks.OrdinalSales.new("2017", 750000)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Global Revenue", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: globalSalesData})]);
    }
  };
  (statically_provided_ticks.StaticallyProvidedTicks.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    statically_provided_ticks.StaticallyProvidedTicks.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = statically_provided_ticks.StaticallyProvidedTicks.prototype;
  dart.addTypeTests(statically_provided_ticks.StaticallyProvidedTicks);
  dart.setMethodSignature(statically_provided_ticks.StaticallyProvidedTicks, () => ({
    __proto__: dart.getMethods(statically_provided_ticks.StaticallyProvidedTicks.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(statically_provided_ticks.StaticallyProvidedTicks, "package:example/axes/statically_provided_ticks.dart");
  dart.setFieldSignature(statically_provided_ticks.StaticallyProvidedTicks, () => ({
    __proto__: dart.getFields(statically_provided_ticks.StaticallyProvidedTicks.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(statically_provided_ticks, "OrdinalSales.year");
  const sales$ = dart.privateName(statically_provided_ticks, "OrdinalSales.sales");
  statically_provided_ticks.OrdinalSales = class OrdinalSales extends core.Object {
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
  (statically_provided_ticks.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = statically_provided_ticks.OrdinalSales.prototype;
  dart.addTypeTests(statically_provided_ticks.OrdinalSales);
  dart.setLibraryUri(statically_provided_ticks.OrdinalSales, "package:example/axes/statically_provided_ticks.dart");
  dart.setFieldSignature(statically_provided_ticks.OrdinalSales, () => ({
    __proto__: dart.getFields(statically_provided_ticks.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/axes/statically_provided_ticks", {
    "package:example/axes/statically_provided_ticks.dart": statically_provided_ticks
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["statically_provided_ticks.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoC4B;;;;;;IACf;;;;;;;;AAKT,YAAW,2DACT,iFAES;IAEb;;;AAOE,YAAW,2DAAwB;IACrC;;AAIQ,mBAAa;AAEb,4BAAkB,4BAClB,+CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,+CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,+CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO,MAC3C,+CAAa,QAA4B,aAApB,AAAO,MAAD,SAAS,QAAO;AAGjD,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;UAI0B;AAElB,wBAAuC,gCACvC,6BAEA,gBAEO,oBAEI,wCACI,wBAAgB,OAAS,QAAS,UAGjD,6BAAgB,SAChB,6BAAgB,SAChB,6BAAgB;AAGtB,YAAW,kEACT,4BACS,0BACO,6DAEJ,wDAAqC,WAAW;IAEhE;;AAIQ,4BAAkB,4BAClB,+CAAa,QAAQ,OACrB,+CAAa,QAAQ,QACrB,+CAAa,QAAQ,SACrB,+CAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,4BACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,eAAe;IAG3B;;oEArF6B;QAAkB;;IAAlB;IAAkB;AAA/C;;EAAwD;;;;;;;;;;;;;;;IA0F3C;;;;;;IACH;;;;;;;yDAEQ,MAAW;IAAX;IAAW;;EAAM","file":"statically_provided_ticks.ddc.js"}');
  // Exports:
  return {
    axes__statically_provided_ticks: statically_provided_ticks
  };
});

//# sourceMappingURL=statically_provided_ticks.ddc.js.map
