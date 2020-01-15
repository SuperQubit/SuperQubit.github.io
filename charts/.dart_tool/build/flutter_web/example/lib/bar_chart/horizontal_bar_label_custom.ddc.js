define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/charts_common/common', 'packages/charts_flutter/flutter'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__charts_common__common, packages__charts_flutter__flutter) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const series = packages__charts_common__common.src__data__series;
  const material_palette = packages__charts_common__common.src__common__material_palette;
  const axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__axis_spec;
  const bar_label_decorator = packages__charts_common__common.src__chart__bar__bar_label_decorator;
  const ordinal_axis_spec = packages__charts_common__common.src__chart__cartesian__axis__spec__ordinal_axis_spec;
  const none_draw_strategy = packages__charts_common__common.src__chart__cartesian__axis__draw_strategy__none_draw_strategy;
  const bar_chart = packages__charts_flutter__flutter.src__bar_chart;
  const horizontal_bar_label_custom = Object.create(dart.library);
  const $toString = dartx.toString;
  let JSArrayOfOrdinalSales = () => (JSArrayOfOrdinalSales = dart.constFn(_interceptors.JSArray$(horizontal_bar_label_custom.OrdinalSales)))();
  let SeriesOfOrdinalSales$String = () => (SeriesOfOrdinalSales$String = dart.constFn(series.Series$(horizontal_bar_label_custom.OrdinalSales, core.String)))();
  let OrdinalSalesAndintToString = () => (OrdinalSalesAndintToString = dart.constFn(dart.fnType(core.String, [horizontal_bar_label_custom.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToint = () => (OrdinalSalesAndintToint = dart.constFn(dart.fnType(core.int, [horizontal_bar_label_custom.OrdinalSales, core.int])))();
  let OrdinalSalesAndintToTextStyleSpec = () => (OrdinalSalesAndintToTextStyleSpec = dart.constFn(dart.fnType(axis_spec.TextStyleSpec, [horizontal_bar_label_custom.OrdinalSales, core.int])))();
  let JSArrayOfSeriesOfOrdinalSales$String = () => (JSArrayOfSeriesOfOrdinalSales$String = dart.constFn(_interceptors.JSArray$(SeriesOfOrdinalSales$String())))();
  let SeriesOfdynamic$String = () => (SeriesOfdynamic$String = dart.constFn(series.Series$(dart.dynamic, core.String)))();
  let ListOfSeriesOfdynamic$String = () => (ListOfSeriesOfdynamic$String = dart.constFn(core.List$(SeriesOfdynamic$String())))();
  let BarLabelDecoratorOfString = () => (BarLabelDecoratorOfString = dart.constFn(bar_label_decorator.BarLabelDecorator$(core.String)))();
  let NoneRenderSpecOfString = () => (NoneRenderSpecOfString = dart.constFn(none_draw_strategy.NoneRenderSpec$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/horizontal_bar_label_custom.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vertical",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "barRendererDecorator",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "domainAxis",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/example/bar_chart/horizontal_bar_label_custom.dart"
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
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C5;
  let C4;
  const seriesList$ = dart.privateName(horizontal_bar_label_custom, "HorizontalBarLabelCustomChart.seriesList");
  const animate$ = dart.privateName(horizontal_bar_label_custom, "HorizontalBarLabelCustomChart.animate");
  horizontal_bar_label_custom.HorizontalBarLabelCustomChart = class HorizontalBarLabelCustomChart extends framework.StatelessWidget {
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
    static createWithSampleData() {
      return new horizontal_bar_label_custom.HorizontalBarLabelCustomChart.new(horizontal_bar_label_custom.HorizontalBarLabelCustomChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new horizontal_bar_label_custom.HorizontalBarLabelCustomChart.new(horizontal_bar_label_custom.HorizontalBarLabelCustomChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfOrdinalSales().of([new horizontal_bar_label_custom.OrdinalSales.new("2014", random.nextInt(100)), new horizontal_bar_label_custom.OrdinalSales.new("2015", random.nextInt(100)), new horizontal_bar_label_custom.OrdinalSales.new("2016", random.nextInt(100)), new horizontal_bar_label_custom.OrdinalSales.new("2017", random.nextInt(100))]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data, labelAccessorFn: dart.fn((sales, _) => dart.str(sales.year) + ": $" + dart.toString(sales.sales), OrdinalSalesAndintToString()), insideLabelStyleAccessorFn: dart.fn((sales, _) => {
            let color = sales.year === "2014" ? material_palette.MaterialPalette.red.shadeDefault : material_palette.MaterialPalette.yellow.shadeDefault.darker;
            return new axis_spec.TextStyleSpec.new({color: color});
          }, OrdinalSalesAndintToTextStyleSpec()), outsideLabelStyleAccessorFn: dart.fn((sales, _) => {
            let color = sales.year === "2014" ? material_palette.MaterialPalette.red.shadeDefault : material_palette.MaterialPalette.yellow.shadeDefault.darker;
            return new axis_spec.TextStyleSpec.new({color: color});
          }, OrdinalSalesAndintToTextStyleSpec())})]);
    }
    build(context) {
      return new bar_chart.BarChart.new(ListOfSeriesOfdynamic$String()._check(this.seriesList), {animate: this.animate, vertical: false, barRendererDecorator: new (BarLabelDecoratorOfString()).new(), domainAxis: new ordinal_axis_spec.OrdinalAxisSpec.new({renderSpec: new (NoneRenderSpecOfString()).new()}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
    static _createSampleData() {
      let data = JSArrayOfOrdinalSales().of([new horizontal_bar_label_custom.OrdinalSales.new("2014", 5), new horizontal_bar_label_custom.OrdinalSales.new("2015", 25), new horizontal_bar_label_custom.OrdinalSales.new("2016", 100), new horizontal_bar_label_custom.OrdinalSales.new("2017", 75)]);
      return JSArrayOfSeriesOfOrdinalSales$String().of([SeriesOfOrdinalSales$String().new({id: "Sales", domainFn: dart.fn((sales, _) => sales.year, OrdinalSalesAndintToString()), measureFn: dart.fn((sales, _) => sales.sales, OrdinalSalesAndintToint()), data: data, labelAccessorFn: dart.fn((sales, _) => dart.str(sales.year) + ": $" + dart.toString(sales.sales), OrdinalSalesAndintToString()), insideLabelStyleAccessorFn: dart.fn((sales, _) => {
            let color = sales.year === "2014" ? material_palette.MaterialPalette.red.shadeDefault : material_palette.MaterialPalette.yellow.shadeDefault.darker;
            return new axis_spec.TextStyleSpec.new({color: color});
          }, OrdinalSalesAndintToTextStyleSpec()), outsideLabelStyleAccessorFn: dart.fn((sales, _) => {
            let color = sales.year === "2014" ? material_palette.MaterialPalette.red.shadeDefault : material_palette.MaterialPalette.yellow.shadeDefault.darker;
            return new axis_spec.TextStyleSpec.new({color: color});
          }, OrdinalSalesAndintToTextStyleSpec())})]);
    }
  };
  (horizontal_bar_label_custom.HorizontalBarLabelCustomChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    horizontal_bar_label_custom.HorizontalBarLabelCustomChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = horizontal_bar_label_custom.HorizontalBarLabelCustomChart.prototype;
  dart.addTypeTests(horizontal_bar_label_custom.HorizontalBarLabelCustomChart);
  dart.setMethodSignature(horizontal_bar_label_custom.HorizontalBarLabelCustomChart, () => ({
    __proto__: dart.getMethods(horizontal_bar_label_custom.HorizontalBarLabelCustomChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(horizontal_bar_label_custom.HorizontalBarLabelCustomChart, "package:example/bar_chart/horizontal_bar_label_custom.dart");
  dart.setFieldSignature(horizontal_bar_label_custom.HorizontalBarLabelCustomChart, () => ({
    __proto__: dart.getFields(horizontal_bar_label_custom.HorizontalBarLabelCustomChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(horizontal_bar_label_custom, "OrdinalSales.year");
  const sales$ = dart.privateName(horizontal_bar_label_custom, "OrdinalSales.sales");
  horizontal_bar_label_custom.OrdinalSales = class OrdinalSales extends core.Object {
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
  (horizontal_bar_label_custom.OrdinalSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = horizontal_bar_label_custom.OrdinalSales.prototype;
  dart.addTypeTests(horizontal_bar_label_custom.OrdinalSales);
  dart.setLibraryUri(horizontal_bar_label_custom.OrdinalSales, "package:example/bar_chart/horizontal_bar_label_custom.dart");
  dart.setFieldSignature(horizontal_bar_label_custom.OrdinalSales, () => ({
    __proto__: dart.getFields(horizontal_bar_label_custom.OrdinalSales.__proto__),
    year: dart.finalFieldType(core.String),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/bar_chart/horizontal_bar_label_custom", {
    "package:example/bar_chart/horizontal_bar_label_custom.dart": horizontal_bar_label_custom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["horizontal_bar_label_custom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuB4B;;;;;;IACf;;;;;;;AAMT,YAAW,mEACT,yFAES;IAEb;;;AAOE,YAAW,mEAA8B;IAC3C;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,iDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,iDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,iDAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,iDAAa,QAAQ,AAAO,MAAD,SAAS;AAG1C,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI,mBAEO,SAAc,OAAO,MACU,SAAzC,AAAM,KAAD,SAAM,QAAkB,cAAZ,AAAM,KAAD,oEACD,SAAc,OAAO;AACzC,wBAAS,AAAM,AAAK,KAAN,UAAS,SACA,AAAI,oDACJ,AAAO,AAAa;AACjD,kBAAW,yCAA4B,KAAK;gFAEjB,SAAc,OAAO;AAC1C,wBAAS,AAAM,AAAK,KAAN,UAAS,SACA,AAAI,oDACJ,AAAO,AAAa;AACjD,kBAAW,yCAA4B,KAAK;;IAIpD;UAO0B;AACxB,YAAW,kEACT,4BACS,wBACC,6BACgB,qDAGlB,uDAAuC;IAEnD;;AAIQ,iBAAO,4BACP,iDAAa,QAAQ,IACrB,iDAAa,QAAQ,KACrB,iDAAa,QAAQ,MACrB,iDAAa,QAAQ;AAG3B,YAAO,4CACD,uCACE,mBACM,SAAc,OAAO,MAAM,AAAM,KAAD,iDAC/B,SAAc,OAAO,MAAM,AAAM,KAAD,0CACrC,IAAI,mBAEO,SAAc,OAAO,MACU,SAAzC,AAAM,KAAD,SAAM,QAAkB,cAAZ,AAAM,KAAD,oEACD,SAAc,OAAO;AACzC,wBAAS,AAAM,AAAK,KAAN,UAAS,SACA,AAAI,oDACJ,AAAO,AAAa;AACjD,kBAAW,yCAA4B,KAAK;gFAEjB,SAAc,OAAO;AAC1C,wBAAS,AAAM,AAAK,KAAN,UAAS,SACA,AAAI,oDACJ,AAAO,AAAa;AACjD,kBAAW,yCAA4B,KAAK;;IAIpD;;4EAxGmC;QAAkB;;IAAlB;IAAkB;AAArD;;EAA8D;;;;;;;;;;;;;;;IA6GjD;;;;;;IACH;;;;;;;2DAEQ,MAAW;IAAX;IAAW;;EAAM","file":"horizontal_bar_label_custom.ddc.js"}');
  // Exports:
  return {
    bar_chart__horizontal_bar_label_custom: horizontal_bar_label_custom
  };
});

//# sourceMappingURL=horizontal_bar_label_custom.ddc.js.map
