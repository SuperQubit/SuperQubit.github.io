define(['dart_sdk', 'packages/charts_common/common', 'packages/charts_flutter/flutter', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__charts_common__common, packages__charts_flutter__flutter, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const series = packages__charts_common__common.src__data__series;
  const arc_renderer_config = packages__charts_common__common.src__chart__pie__arc_renderer_config;
  const pie_chart = packages__charts_flutter__flutter.src__pie_chart;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gauge = Object.create(dart.library);
  let JSArrayOfGaugeSegment = () => (JSArrayOfGaugeSegment = dart.constFn(_interceptors.JSArray$(gauge.GaugeSegment)))();
  let SeriesOfGaugeSegment$String = () => (SeriesOfGaugeSegment$String = dart.constFn(series.Series$(gauge.GaugeSegment, core.String)))();
  let GaugeSegmentAndintToString = () => (GaugeSegmentAndintToString = dart.constFn(dart.fnType(core.String, [gauge.GaugeSegment, core.int])))();
  let GaugeSegmentAndintToint = () => (GaugeSegmentAndintToint = dart.constFn(dart.fnType(core.int, [gauge.GaugeSegment, core.int])))();
  let JSArrayOfSeriesOfGaugeSegment$String = () => (JSArrayOfSeriesOfGaugeSegment$String = dart.constFn(_interceptors.JSArray$(SeriesOfGaugeSegment$String())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "seriesList",
        [_Location_column]: 32,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animate",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultRenderer",
        [_Location_column]: 9,
        [_Location_line]: 76,
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
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/example/pie_chart/gauge.dart"
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
  const seriesList$ = dart.privateName(gauge, "GaugeChart.seriesList");
  const animate$ = dart.privateName(gauge, "GaugeChart.animate");
  gauge.GaugeChart = class GaugeChart extends framework.StatelessWidget {
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
      return new gauge.GaugeChart.new(gauge.GaugeChart._createSampleData(), {animate: false, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static withRandomData(opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new gauge.GaugeChart.new(gauge.GaugeChart._createRandomData(), {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static _createRandomData() {
      let random = math.Random.new();
      let data = JSArrayOfGaugeSegment().of([new gauge.GaugeSegment.new("Low", random.nextInt(100)), new gauge.GaugeSegment.new("Acceptable", random.nextInt(100)), new gauge.GaugeSegment.new("High", random.nextInt(100)), new gauge.GaugeSegment.new("Highly Unusual", random.nextInt(100))]);
      return JSArrayOfSeriesOfGaugeSegment$String().of([SeriesOfGaugeSegment$String().new({id: "Segments", domainFn: dart.fn((segment, _) => segment.segment, GaugeSegmentAndintToString()), measureFn: dart.fn((segment, _) => segment.size, GaugeSegmentAndintToint()), data: data})]);
    }
    build(context) {
      return new pie_chart.PieChart.new(this.seriesList, {animate: this.animate, defaultRenderer: new arc_renderer_config.ArcRendererConfig.new({arcWidth: 30, startAngle: 4 / 5 * 3.141592653589793, arcLength: 7 / 5 * 3.141592653589793}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    static _createSampleData() {
      let data = JSArrayOfGaugeSegment().of([new gauge.GaugeSegment.new("Low", 75), new gauge.GaugeSegment.new("Acceptable", 100), new gauge.GaugeSegment.new("High", 50), new gauge.GaugeSegment.new("Highly Unusual", 5)]);
      return JSArrayOfSeriesOfGaugeSegment$String().of([SeriesOfGaugeSegment$String().new({id: "Segments", domainFn: dart.fn((segment, _) => segment.segment, GaugeSegmentAndintToString()), measureFn: dart.fn((segment, _) => segment.size, GaugeSegmentAndintToint()), data: data})]);
    }
  };
  (gauge.GaugeChart.new = function(seriesList, opts) {
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[seriesList$] = seriesList;
    this[animate$] = animate;
    gauge.GaugeChart.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gauge.GaugeChart.prototype;
  dart.addTypeTests(gauge.GaugeChart);
  dart.setMethodSignature(gauge.GaugeChart, () => ({
    __proto__: dart.getMethods(gauge.GaugeChart.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gauge.GaugeChart, "package:example/pie_chart/gauge.dart");
  dart.setFieldSignature(gauge.GaugeChart, () => ({
    __proto__: dart.getFields(gauge.GaugeChart.__proto__),
    seriesList: dart.finalFieldType(core.List$(series.Series)),
    animate: dart.finalFieldType(core.bool)
  }));
  const segment$ = dart.privateName(gauge, "GaugeSegment.segment");
  const size$ = dart.privateName(gauge, "GaugeSegment.size");
  gauge.GaugeSegment = class GaugeSegment extends core.Object {
    get segment() {
      return this[segment$];
    }
    set segment(value) {
      super.segment = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
  };
  (gauge.GaugeSegment.new = function(segment, size) {
    this[segment$] = segment;
    this[size$] = size;
    ;
  }).prototype = gauge.GaugeSegment.prototype;
  dart.addTypeTests(gauge.GaugeSegment);
  dart.setLibraryUri(gauge.GaugeSegment, "package:example/pie_chart/gauge.dart");
  dart.setFieldSignature(gauge.GaugeSegment, () => ({
    __proto__: dart.getFields(gauge.GaugeSegment.__proto__),
    segment: dart.finalFieldType(core.String),
    size: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/example/pie_chart/gauge", {
    "package:example/pie_chart/gauge.dart": gauge
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gauge.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwB4B;;;;;;IACf;;;;;;;;AAMT,YAAW,0BACT,gDAES;IAEb;;;AAOE,YAAW,0BAAW;IACxB;;AAIQ,mBAAa;AAEb,iBAAO,4BACP,2BAAa,OAAO,AAAO,MAAD,SAAS,OACnC,2BAAa,cAAc,AAAO,MAAD,SAAS,OAC1C,2BAAa,QAAQ,AAAO,MAAD,SAAS,OACpC,2BAAa,kBAAkB,AAAO,MAAD,SAAS;AAGpD,YAAO,4CACD,uCACE,sBACM,SAAc,SAAS,MAAM,AAAQ,OAAD,oDACnC,SAAc,SAAS,MAAM,AAAQ,OAAD,yCACzC,IAAI;IAGhB;UAI0B;AACxB,YAAW,4BAAgB,2BACd,+BAIY,yDACP,gBAAgB,AAAE,AAAI,IAAF,kCAAmB,AAAE,AAAI,IAAF;IAC/D;;AAIQ,iBAAO,4BACP,2BAAa,OAAO,KACpB,2BAAa,cAAc,MAC3B,2BAAa,QAAQ,KACrB,2BAAa,kBAAkB;AAGrC,YAAO,4CACD,uCACE,sBACM,SAAc,SAAS,MAAM,AAAQ,OAAD,oDACnC,SAAc,SAAS,MAAM,AAAQ,OAAD,yCACzC,IAAI;IAGhB;;mCArEgB;QAAkB;;IAAlB;IAAkB;AAAlC;;EAA2C;;;;;;;;;;;;;;;IA0E9B;;;;;;IACH;;;;;;;qCAEQ,SAAc;IAAd;IAAc;;EAAK","file":"gauge.ddc.js"}');
  // Exports:
  return {
    pie_chart__gauge: gauge
  };
});

//# sourceMappingURL=gauge.ddc.js.map
