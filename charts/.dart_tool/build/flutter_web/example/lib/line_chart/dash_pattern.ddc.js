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
  const line_chart = packages__charts_flutter__flutter.src__line_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const dash_pattern = Object.create(dart.library);
  let JSArrayOfLinearSales = () => (JSArrayOfLinearSales = dart.constFn(_interceptors.JSArray$(dash_pattern.LinearSales)))();
  let SeriesOfLinearSales$int = () => (SeriesOfLinearSales$int = dart.constFn(series.Series$(dash_pattern.LinearSales, core.int)))();
  let LinearSalesAndintToColor = () => (LinearSalesAndintToColor = dart.constFn(dart.fnType(color.Color, [dash_pattern.LinearSales, core.int])))();
  let LinearSalesAndintToint = () => (LinearSalesAndintToint = dart.constFn(dart.fnType(core.int, [dash_pattern.LinearSales, core.int])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let LinearSalesAndintToListOfint = () => (LinearSalesAndintToListOfint = dart.constFn(dart.fnType(ListOfint(), [dash_pattern.LinearSales, core.int])))();
  let SeriesOfLinearSales$num = () => (SeriesOfLinearSales$num = dart.constFn(series.Series$(dash_pattern.LinearSales, core.num)))();
  let JSArrayOfSeriesOfLinearSales$num = () => (JSArrayOfSeriesOfLinearSales$num = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$num())))();
  let JSArrayOfSeriesOfLinearSales$int = () => (JSArrayOfSeriesOfLinearSales$int = dart.constFn(_interceptors.JSArray$(SeriesOfLinearSales$int())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 33,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 45,
        [_Location_line]: 102,
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
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/example/line_chart/dash_pattern.dart"
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
  const seriesList$ = dart.privateName(dash_pattern, "DashPatternLineChart.seriesList");
  const animate$ = dart.privateName(dash_pattern, "DashPatternLineChart.animate");
  dash_pattern.DashPatternLineChart = class DashPatternLineChart extends framework.StatelessWidget {
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
      return new dash_pattern.DashPatternLineChart.new(dash_pattern.DashPatternLineChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new dash_pattern.DashPatternLineChart.new(dash_pattern.DashPatternLineChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let myFakeDesktopData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, random.nextInt(100)), new dash_pattern.LinearSales.new(1, random.nextInt(100)), new dash_pattern.LinearSales.new(2, random.nextInt(100)), new dash_pattern.LinearSales.new(3, random.nextInt(100))]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, random.nextInt(100)), new dash_pattern.LinearSales.new(1, random.nextInt(100)), new dash_pattern.LinearSales.new(2, random.nextInt(100)), new dash_pattern.LinearSales.new(3, random.nextInt(100))]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, random.nextInt(100)), new dash_pattern.LinearSales.new(1, random.nextInt(100)), new dash_pattern.LinearSales.new(2, random.nextInt(100)), new dash_pattern.LinearSales.new(3, random.nextInt(100))]);
      return JSArrayOfSeriesOfLinearSales$num().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), dashPatternFn: dart.fn((_, __) => JSArrayOfint().of([2, 2]), LinearSalesAndintToListOfint()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), dashPatternFn: dart.fn((_, __) => JSArrayOfint().of([8, 3, 2, 3]), LinearSalesAndintToListOfint()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeMobileData})]);
    }
    build(context) {
      return new line_chart.LineChart.new(this.seriesList, {animate: this.animate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let myFakeDesktopData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, 5), new dash_pattern.LinearSales.new(1, 25), new dash_pattern.LinearSales.new(2, 100), new dash_pattern.LinearSales.new(3, 75)]);
      let myFakeTabletData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, 10), new dash_pattern.LinearSales.new(1, 50), new dash_pattern.LinearSales.new(2, 200), new dash_pattern.LinearSales.new(3, 150)]);
      let myFakeMobileData = JSArrayOfLinearSales().of([new dash_pattern.LinearSales.new(0, 15), new dash_pattern.LinearSales.new(1, 75), new dash_pattern.LinearSales.new(2, 300), new dash_pattern.LinearSales.new(3, 225)]);
      return JSArrayOfSeriesOfLinearSales$int().of([SeriesOfLinearSales$int().new({id: "Desktop", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.blue.shadeDefault, LinearSalesAndintToColor()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeDesktopData}), SeriesOfLinearSales$int().new({id: "Tablet", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.red.shadeDefault, LinearSalesAndintToColor()), dashPatternFn: dart.fn((_, __) => JSArrayOfint().of([2, 2]), LinearSalesAndintToListOfint()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeTabletData}), SeriesOfLinearSales$int().new({id: "Mobile", colorFn: dart.fn((_, __) => material_palette.MaterialPalette.green.shadeDefault, LinearSalesAndintToColor()), dashPatternFn: dart.fn((_, __) => JSArrayOfint().of([8, 3, 2, 3]), LinearSalesAndintToListOfint()), domainFn: dart.fn((sales, _) => sales.year, LinearSalesAndintToint()), measureFn: dart.fn((sales, _) => sales.sales, LinearSalesAndintToint()), data: myFakeMobileData})]);
    }
  };
  (dash_pattern.DashPatternLineChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    dash_pattern.DashPatternLineChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dash_pattern.DashPatternLineChart.prototype;
  dart.addTypeTests(dash_pattern.DashPatternLineChart);
  dart.setMethodSignature(dash_pattern.DashPatternLineChart, () => ({
    __proto__: dart.getMethods(dash_pattern.DashPatternLineChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dash_pattern.DashPatternLineChart, "package:example/line_chart/dash_pattern.dart");
  dart.setFieldSignature(dash_pattern.DashPatternLineChart, () => ({
    __proto__: dart.getFields(dash_pattern.DashPatternLineChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const year$ = dart.privateName(dash_pattern, "LinearSales.year");
  const sales$ = dart.privateName(dash_pattern, "LinearSales.sales");
  dash_pattern.LinearSales = class LinearSales extends core.Object {
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
  (dash_pattern.LinearSales.new = function(year, sales) {
    this[year$] = year;
    this[sales$] = sales;
    ;
  }).prototype = dash_pattern.LinearSales.prototype;
  dart.addTypeTests(dash_pattern.LinearSales);
  dart.setLibraryUri(dash_pattern.LinearSales, "package:example/line_chart/dash_pattern.dart");
  dart.setFieldSignature(dash_pattern.LinearSales, () => ({
    __proto__: dart.getFields(dash_pattern.LinearSales.__proto__),
    year: dart.finalFieldType(core.int),
    sales: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/line_chart/dash_pattern", {
    "package:example/line_chart/dash_pattern.dart": dash_pattern
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dash_pattern.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,2CACT,iEAES;IAEb;;;AAOE,YAAW,2CAAqB;IAClC;;AAIQ,mBAAa;AAEb,8BAAoB,2BACpB,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS;AAGhC,6BAAmB,2BACjB,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS;AAGhC,6BAAmB,2BACjB,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS,OAC9B,iCAAY,GAAG,AAAO,MAAD,SAAS;AAGpC,YAAO,wCACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,iBAAiB,IAErB,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAI,+FAChC,SAAC,GAAG,OAAO,mBAAC,GAAG,gDACpB,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB,IAEpB,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAM,iGAClC,SAAC,GAAG,OAAO,mBAAC,GAAG,GAAG,GAAG,gDAC1B,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB;IAG5B;UAI0B;AACxB,YAAW,8BAAiB,2BAAqB;IACnD;;AAIQ,8BAAoB,2BACpB,iCAAY,GAAG,IACf,iCAAY,GAAG,KACf,iCAAY,GAAG,MACf,iCAAY,GAAG;AAGjB,6BAAmB,2BACjB,iCAAY,GAAG,KACf,iCAAY,GAAG,KACf,iCAAY,GAAG,MACf,iCAAY,GAAG;AAGjB,6BAAmB,2BACjB,iCAAY,GAAG,KACf,iCAAY,GAAG,KACf,iCAAY,GAAG,MACf,iCAAY,GAAG;AAGrB,YAAO,wCACD,mCACE,oBACK,SAAC,GAAG,OAA8B,AAAK,2FACtC,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,iBAAiB,IAErB,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAI,+FAChC,SAAC,GAAG,OAAO,mBAAC,GAAG,gDACpB,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB,IAEpB,mCACE,mBACK,SAAC,GAAG,OAA8B,AAAM,iGAClC,SAAC,GAAG,OAAO,mBAAC,GAAG,GAAG,GAAG,gDAC1B,SAAa,OAAO,MAAM,AAAM,KAAD,6CAC9B,SAAa,OAAO,MAAM,AAAM,KAAD,yCACpC,gBAAgB;IAG5B;;oDA7H0B;QAAkB;;IAAlB;IAAkB;AAA5C;;EAAqD;;;;;;;;;;;;;;;IAkI3C;;;;;;IACA;;;;;;;2CAEO,MAAW;IAAX;IAAW;;EAAM","file":"dash_pattern.ddc.js"}');
  // Exports:
  return {
    line_chart__dash_pattern: dash_pattern
  };
});

//# sourceMappingURL=dash_pattern.ddc.js.map
